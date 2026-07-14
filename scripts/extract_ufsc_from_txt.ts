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

interface ExtractedQuestion {
  id: string;
  cycle: string;
  subject: string;
  subSubject: string;
  banca: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const outputPath = 'src/ufsc_questions.ts';
let existingQuestions: ExtractedQuestion[] = [];

if (fs.existsSync(outputPath)) {
  try {
    const fileContent = fs.readFileSync(outputPath, 'utf-8');
    const jsonMatch = fileContent.match(/export const UFSC_QUESTIONS: any\[] = ([\s\S]*?);/);
    if (jsonMatch && jsonMatch[1]) {
      existingQuestions = JSON.parse(jsonMatch[1].trim());
      console.log(`[Progresso] Carregadas ${existingQuestions.length} questões salvas anteriormente.`);
    }
  } catch (err) {
    console.warn('[Progresso] Não foi possível ler as questões anteriores. Iniciando do zero.', err);
  }
}

function saveProgress(questions: ExtractedQuestion[]) {
  questions.sort((a, b) => {
    const matchA = a.id.match(/ufsc_(\d+)_q(\d+)/);
    const matchB = b.id.match(/ufsc_(\d+)_q(\d+)/);
    if (matchA && matchB) {
      const yearDiff = parseInt(matchA[1]) - parseInt(matchB[1]);
      if (yearDiff !== 0) return yearDiff;
      return parseInt(matchA[2]) - parseInt(matchB[2]);
    }
    return a.id.localeCompare(b.id);
  });

  const fileContent = `export const UFSC_QUESTIONS: any[] = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(outputPath, fileContent, 'utf-8');
  console.log(`[Progresso] Salvo progresso com ${questions.length} questões em ${outputPath}`);
}

async function extractBatchWithRetries(
  textContext: string,
  year: number,
  banca: string,
  startQ: number,
  endQ: number,
  fixedSubject?: string
): Promise<ExtractedQuestion[]> {
  const prompt = `Você é um excelente processador de provas de residência médica.
Abaixo está o texto completo de uma prova da ${banca} ${year}. Extraia com precisão absoluta as questões de número ${startQ} a ${endQ}.

Siga estas instruções rigorosamente:
1. Para cada questão, retorne um objeto JSON contendo os seguintes campos:
   - "id": String no formato "ufsc_${year}_q" seguido pelo número da questão, ex: "ufsc_${year}_q1", "ufsc_${year}_q45", etc.
   - "cycle": Sempre "Ciclo Clínico".
   - "banca": Sempre "UFSC".
   - "subject": Se houver um assunto fixo fornecido ("Cirurgia Geral"), use-o. Caso contrário, analise o tema médico da questão e associe à especialidade mais adequada escolhendo estritamente uma destas opções exatas: ${ALLOWED_SUBJECTS.map(s => `'${s}'`).join(', ')}.
   - "subSubject": Um assunto específico e conciso da questão (ex: "Apendicite Aguda", "Pré-natal", "Diabetes Mellitus", "Asma", etc.).
   - "text": Enunciado completo da questão em português, sem o número inicial da questão. Deve conter todo o texto e casos clínicos descritos.
   - "options": Array de strings com as alternativas (geralmente A, B, C, D, E ou A, B, C, D). Remova qualquer letra inicial ou parêntese (ex: "A) ", "B. ", "a) ") deixando apenas o texto limpo da opção.
   - "correctIndex": Índice baseado em 0 da alternativa correta (0 = primeira opção, 1 = segunda, etc.).
   - "explanation": Explicação clínica resumida do porquê a alternativa está correta e por que as outras estão incorretas.

2. Se a questão foi anulada ou não contiver alternativas, preencha as opções normalmente mas indique a resposta correta e explique que foi anulada ou sem gabarito.

Extraia exatamente as questões solicitadas no intervalo de número ${startQ} a ${endQ}.

TEXTO DA PROVA:
${textContext}`;

  const maxAttempts = 6;
  let attempt = 0;
  
  while (attempt < maxAttempts) {
    try {
      attempt++;
      console.log(`[Batch] Chamando Gemini API (Tentativa ${attempt}/${maxAttempts}) para ${banca} ${year} - Questões ${startQ} a ${endQ}...`);
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
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
                subSubject: { type: Type.STRING },
                banca: { type: Type.STRING },
                text: { type: Type.STRING },
                options: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                },
                correctIndex: { type: Type.INTEGER },
                explanation: { type: Type.STRING }
              },
              required: ['id', 'cycle', 'subject', 'subSubject', 'banca', 'text', 'options', 'correctIndex', 'explanation']
            }
          },
          temperature: 0.1
        }
      });

      const parsed = JSON.parse(response.text || '[]') as ExtractedQuestion[];
      
      const normalized = parsed.map(q => {
        let subj = q.subject;
        if (fixedSubject) {
          subj = fixedSubject;
        } else if (!ALLOWED_SUBJECTS.includes(subj)) {
          subj = 'Clínica Médica';
        }
        return {
          ...q,
          subject: subj,
          banca: 'UFSC',
          cycle: 'Ciclo Clínico'
        };
      });

      console.log(`[Batch] Sucesso! Extraídas ${normalized.length} questões.`);
      return normalized;

    } catch (error: any) {
      console.error(`[Erro Batch] Erro na tentativa ${attempt} para ${startQ}-${endQ}:`, error.message || error);
      
      if (attempt >= maxAttempts) {
        throw new Error(`Falha persistente na extração de ${banca} ${year} (${startQ}-${endQ}) após ${maxAttempts} tentativas.`);
      }

      const delay = Math.pow(2, attempt) * 4000 + Math.random() * 2000;
      console.log(`[Backoff] Aguardando ${Math.round(delay / 1000)} segundos antes de tentar novamente...`);
      await new Promise(r => setTimeout(r, delay));
    }
  }
  return [];
}

async function run() {
  console.log('Lendo arquivos de texto das provas...');
  const text2010 = fs.readFileSync('ufsc_2010.txt', 'utf-8');
  const text2011 = fs.readFileSync('ufsc_2011.txt', 'utf-8');
  const text2014 = fs.readFileSync('ufsc_2014.txt', 'utf-8');

  const allQuestionsMap = new Map<string, ExtractedQuestion>();
  for (const q of existingQuestions) {
    allQuestionsMap.set(q.id, q);
  }

  const isBatchExtracted = (year: number, start: number, end: number) => {
    for (let i = start; i <= end; i++) {
      const id = `ufsc_${year}_q${i}`;
      if (!allQuestionsMap.has(id)) {
        return false;
      }
    }
    return true;
  };

  // 1. UFSC 2010 (40 questões) - Cirurgia Geral
  console.log('\n--- Processando UFSC 2010 (40 questões) ---');
  const batches2010 = [
    { start: 1, end: 20 },
    { start: 21, end: 40 }
  ];
  for (const b of batches2010) {
    if (isBatchExtracted(2010, b.start, b.end)) {
      console.log(`[Progresso] Bloco 2010 (${b.start}-${b.end}) já extraído. Pulando.`);
      continue;
    }
    const qs = await extractBatchWithRetries(text2010, 2010, 'UFSC', b.start, b.end, 'Cirurgia Geral');
    for (const q of qs) {
      allQuestionsMap.set(q.id, q);
    }
    saveProgress(Array.from(allQuestionsMap.values()));
    await new Promise(r => setTimeout(r, 6000));
  }

  // 2. UFSC 2011 (100 questões)
  console.log('\n--- Processando UFSC 2011 (100 questões) ---');
  const batches2011 = [
    { start: 1, end: 20 },
    { start: 21, end: 40 },
    { start: 41, end: 60 },
    { start: 61, end: 80 },
    { start: 81, end: 100 }
  ];
  for (const b of batches2011) {
    if (isBatchExtracted(2011, b.start, b.end)) {
      console.log(`[Progresso] Bloco 2011 (${b.start}-${b.end}) já extraído. Pulando.`);
      continue;
    }
    const qs = await extractBatchWithRetries(text2011, 2011, 'UFSC', b.start, b.end);
    for (const q of qs) {
      allQuestionsMap.set(q.id, q);
    }
    saveProgress(Array.from(allQuestionsMap.values()));
    await new Promise(r => setTimeout(r, 6000));
  }

  // 3. UFSC 2014 (100 questões)
  console.log('\n--- Processando UFSC 2014 (100 questões) ---');
  const batches2014 = [
    { start: 1, end: 20 },
    { start: 21, end: 40 },
    { start: 41, end: 60 },
    { start: 61, end: 80 },
    { start: 81, end: 100 }
  ];
  for (const b of batches2014) {
    if (isBatchExtracted(2014, b.start, b.end)) {
      console.log(`[Progresso] Bloco 2014 (${b.start}-${b.end}) já extraído. Pulando.`);
      continue;
    }
    const qs = await extractBatchWithRetries(text2014, 2014, 'UFSC', b.start, b.end);
    for (const q of qs) {
      allQuestionsMap.set(q.id, q);
    }
    saveProgress(Array.from(allQuestionsMap.values()));
    await new Promise(r => setTimeout(r, 6000));
  }

  console.log(`\nExtração finalizada com sucesso! Total geral no banco UFSC: ${allQuestionsMap.size} questões.`);
}

run().catch(err => {
  console.error('Falha na extração de todas as questões:', err);
  process.exit(1);
});
