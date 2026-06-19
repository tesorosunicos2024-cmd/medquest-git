import { GoogleGenAI, Type } from '@google/genai';
import * as fs from 'fs';
import * as path from 'path';

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
});

const ALLOWED_SUBJECTS = [
  'Anatomia', 'Fisiologia', 'Bioquímica', 'Histologia', 'Embriologia', 'Microbiologia', 'Imunologia', 'Genética', 'Farmacologia',
  'Clínica Médica', 'Clínica Cirúrgica', 'Ginecologia & Obstetrícia', 'Pediatria', 'Psiquiatria', 'Dermatologia', 'Oftalmologia', 'Otorrinolaringologia', 'Medicina de Família/SUS',
  'Cardiologia', 'Neurologia', 'Pneumologia', 'Gastroenterologia', 'Endocrinologia', 'Nefrologia', 'Reumatologia', 'Hematologia', 'Infectologia', 'Cirurgia Geral',
  'Urgência e Emergência', 'Medicina Intensiva', 'Ortopedia', 'Neonatologia', 'Anestesiologia', 'Traumatologia-Ortopedia',
  'Patologia', 'Parasitologia', 'Semiologia', 'Epidemiologia',
  'Urologia', 'Geriatria', 'Radiologia',
  'Cirurgia Vascular', 'Neurocirurgia'
];

const pdfPath = 'Prova_CERMAM_AM_2014_R1.pdf';
const base64Data = fs.readFileSync(pdfPath).toString('base64');

interface RawExtractedQuestion {
  id: string;
  cycle: string;
  subject: string;
  subsubject: string;
  banca: string;
  year: number;
  enunciado: string;
  alternatives: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

async function extractRange(startQ: number, endQ: number) {
  console.log(`[Batch] Extraindo o bloco de questões ${startQ} a ${endQ}...`);
  const prompt = `Você é um especialista em educação médica e residência médica brasileira. 
A partir do PDF da prova de residência (CERMAM 2014 R1) em anexo, extraia estritamente e com precisão absoluta as questões de número ${startQ} a ${endQ}.

Para cada questão, preencha os seguintes campos no formato JSON estruturado seguindo o schema fornecido:
- "id": O ID deve ser gerado estritamente como "unesp_2014_q" seguido do número real da questão da prova (ex: "unesp_2014_q1", "unesp_2014_q22", etc.).
- "cycle": Defina fixo como "Ciclo Clínico".
- "banca": Defina fixo como "UNESP".
- "year": Defina fixo como 2014 (número inteiro).
- "enunciado": O enunciado completo da questão em português, limpo, completo e bem-formatado.
- "alternatives": Uma lista contendo as alternativas da questão (geralmente 4 ou 5). REMOVA prefixos de opção como "A) ", "B) ", "a) ", "b) ", " - " etc., deixando apenas o texto puro da alternativa de forma limpa.
- "correctIndex": O índice baseado em 0 da alternativa correta (0 para A, 1 para B, 2 para C, 3 para D, 4 para E).
- "explanation": Uma explicação médica profissional, bem redigida e concisa em português explicando por que esta alternativa está correta e por que as outras estão incorretas.
- "difficulty": Defina como "easy", "medium" ou "hard" com base na complexidade clínica da questão.
- "subject": Escolha a especialidade médica que mais se adequa ao assunto clínico da questão, selecionando estritamente uma das seguintes strings exatas: ${ALLOWED_SUBJECTS.join(', ')}. Se o assunto principal for genérico de clínica médica, use "Clínica Médica".
- "subsubject": Uma string curta e concisa representando o tema específico da questão (ex: "Diabetes Mellitus", "Sepse", "Apendicite", etc.).

Certifique-se de que a extração cubra exatamente todas as questões de ${startQ} a ${endQ}.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3.5-flash',
    contents: [
      { inlineData: { mimeType: 'application/pdf', data: base64Data } },
      prompt
    ],
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            cycle: { type: Type.STRING },
            subject: { type: Type.STRING },
            subsubject: { type: Type.STRING },
            banca: { type: Type.STRING },
            year: { type: Type.INTEGER },
            enunciado: { type: Type.STRING },
            alternatives: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            correctIndex: { type: Type.INTEGER },
            explanation: { type: Type.STRING },
            difficulty: { type: Type.STRING }
          },
          required: ['id', 'cycle', 'subject', 'subsubject', 'banca', 'year', 'enunciado', 'alternatives', 'correctIndex', 'explanation', 'difficulty']
        }
      },
      temperature: 0.1
    }
  });

  const rawQuestions: RawExtractedQuestion[] = JSON.parse(response.text || '[]');
  const processed: RawExtractedQuestion[] = [];

  for (const q of rawQuestions) {
    if (!ALLOWED_SUBJECTS.includes(q.subject)) {
      console.warn(`[Aviso] Matéria '${q.subject}' inválida para ID '${q.id}'. Corrigindo para 'Clínica Médica'.`);
      q.subject = 'Clínica Médica';
    }
    q.cycle = 'Ciclo Clínico';
    q.banca = 'UNESP';
    q.alternatives = q.alternatives.map(alt => alt.replace(/^[A-Ea-e]\)\s*/, '').trim());
    processed.push(q);
  }

  // Carregar progresso anterior
  const tempFilePath = 'data/processed/temp_extracted.json';
  let existing: RawExtractedQuestion[] = [];
  if (fs.existsSync(tempFilePath)) {
    try {
      existing = JSON.parse(fs.readFileSync(tempFilePath, 'utf-8'));
    } catch {}
  }

  // Fundir sem duplicados
  const mapExist = new Map(existing.map(q => [q.id, q]));
  for (const q of processed) {
    mapExist.set(q.id, q);
  }

  const merged = Array.from(mapExist.values());
  fs.writeFileSync(tempFilePath, JSON.stringify(merged, null, 2), 'utf-8');
  console.log(`[Batch] Salvo! Total acumulado temporariamente: ${merged.length} questões.`);
}

const args = process.argv.slice(2);
const start = parseInt(args[0]);
const end = parseInt(args[1]);

if (isNaN(start) || isNaN(end)) {
  console.error('Uso correto: npx tsx scripts/extract_batch.ts <start_q> <end_q>');
  process.exit(1);
}

extractRange(start, end).catch(err => {
  console.error('Falha na extração:', err);
  process.exit(1);
});
