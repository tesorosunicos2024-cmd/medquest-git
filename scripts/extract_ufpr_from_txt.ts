import { GoogleGenAI, Type } from '@google/genai';
import * as fs from 'fs';
import * as path from 'path';

// Carrega as variáveis do .env caso existam localmente
import 'dotenv/config';

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

const outputPath = 'src/ufpr_questions.ts';
let existingQuestions: ExtractedQuestion[] = [];

if (fs.existsSync(outputPath)) {
  try {
    const fileContent = fs.readFileSync(outputPath, 'utf-8');
    const jsonMatch = fileContent.match(/export const UFPR_QUESTIONS: any\[] = ([\s\S]*?);/);
    if (jsonMatch && jsonMatch[1]) {
      existingQuestions = JSON.parse(jsonMatch[1].trim());
      console.log(`[Progresso] Carregadas ${existingQuestions.length} questões UFPR salvas anteriormente.`);
    }
  } catch (err) {
    console.warn('[Progresso] Não foi possível ler as questões anteriores. Iniciando do zero.', err);
  }
}

function saveProgress(questions: ExtractedQuestion[]) {
  questions.sort((a, b) => {
    const matchA = a.id.match(/ufpr_(\d+)_q(\d+)/);
    const matchB = b.id.match(/ufpr_(\d+)_q(\d+)/);
    if (matchA && matchB) {
      const yearDiff = parseInt(matchA[1]) - parseInt(matchB[1]);
      if (yearDiff !== 0) return yearDiff;
      return parseInt(matchA[2]) - parseInt(matchB[2]);
    }
    return a.id.localeCompare(b.id);
  });

  const fileContent = `export const UFPR_QUESTIONS: any[] = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(outputPath, fileContent, 'utf-8');
  console.log(`[Progresso] Salvo progresso com ${questions.length} questões em ${outputPath}`);
}

async function extractBatchWithRetries(
  textContext: string,
  year: number,
  startQ: number,
  endQ: number
): Promise<ExtractedQuestion[]> {
  const prompt = `Você é um processador de altíssima precisão de provas de residência médica para a UFPR.
Abaixo está o texto de uma prova da UFPR do ano de ${year}. Extraia com precisão cirúrgica e absoluta as questões de número ${startQ} a ${endQ}.

Siga estas instruções com rigor extremo:
1. Para cada questão, retorne um objeto JSON contendo estes campos exatos:
   - "id": String no formato "ufpr_${year}_q" seguido pelo número correto da questão, ex: "ufpr_${year}_q1", "ufpr_${year}_q45", etc.
   - "cycle": Sempre "Ciclo Clínico".
   - "banca": Sempre "ufpr" (tudo em minúsculo).
   - "subject": Analise o tema médico da questão e associe à especialidade mais adequada, escolhendo ESTREITAMENTE e SEMPRE uma destas opções exatas: ${ALLOWED_SUBJECTS.map(s => `'${s}'`).join(', ')}.
   - "subSubject": Um assunto específico e conciso da questão (ex: "Pré-natal de alto risco", "Isquemia Mesentérica Aguda", "Hipotireoidismo Congênito", "Crise de Gota", "Dermatite Atópica", etc.).
   - "text": Enunciado completo da questão em português, limpo, sem o número inicial ou espaçamentos desnecessários. Deve conter todo o caso clínico e informações do enunciado.
   - "options": Array de 4 ou 5 strings de alternativas limpas.
     IMPORTANTE: No texto de entrada, a opção correta está marcada com o símbolo "►" no início dela (ex: "►d) Budesonida" ou "►a) O paciente").
     Você deve:
     - Identificar qual opção começa com "►" para definir o "correctIndex".
     - Remover o símbolo "►" e remover o marcador de letra com parêntese (ex: "a) ", "b) ", "►c) ", "d) ") do texto final de cada opção no array "options", deixando apenas o texto puro da alternativa de forma elegante e limpa.
   - "correctIndex": Índice baseado em 0 (0 para A, 1 para B, 2 para C, etc.) da alternativa que possuía o símbolo "►" no texto original.
   - "explanation": Explicação clínica resumida (em português) e muito instrutiva do porquê a alternativa marcada com "►" está correta, e breve comentário das incorretas se aplicável.

2. Se a questão estiver marcada como anulada ou sem gabarito, indique correctIndex como o índice que parece mais correto (ou 0), mas explique na "explanation" que a questão foi originalmente anulada pela banca e os motivos.

Extraia exatamente o intervalo de questões solicitado (${startQ} a ${endQ}).

TEXTO DA PROVA:
${textContext}`;

  const maxAttempts = 6;
  let attempt = 0;
  
  while (attempt < maxAttempts) {
    try {
      attempt++;
      console.log(`[Batch] Chamando Gemini API (Tentativa ${attempt}/${maxAttempts}) para UFPR ${year} - Questões ${startQ} a ${endQ}...`);
      
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
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
        if (!ALLOWED_SUBJECTS.includes(subj)) {
          // Fallback para assunto comum caso o modelo invente um assunto inválido
          if (subj.includes('Ginecologia') || subj.includes('Obstetrícia')) {
            subj = 'Ginecologia & Obstetrícia';
          } else if (subj.includes('Pediatria') || subj.includes('Puericultura')) {
            subj = 'Pediatria';
          } else if (subj.includes('Cirurgia')) {
            subj = 'Cirurgia Geral';
          } else if (subj.includes('Preventiva') || subj.includes('Saúde') || subj.includes('Trabalhador') || subj.includes('Epidemio') || subj.includes('SUS')) {
            subj = 'Medicina de Família/SUS';
          } else {
            subj = 'Clínica Médica';
          }
        }
        return {
          ...q,
          subject: subj,
          banca: 'ufpr',
          cycle: 'Ciclo Clínico'
        };
      });

      console.log(`[Batch] Sucesso! Extraídas ${normalized.length} questões.`);
      return normalized;

    } catch (error: any) {
      console.error(`[Erro Batch] Erro na tentativa ${attempt} para ${startQ}-${endQ}:`, error.message || error);
      
      if (attempt >= maxAttempts) {
        throw new Error(`Falha persistente na extração de UFPR ${year} (${startQ}-${endQ}) após ${maxAttempts} tentativas.`);
      }

      const delay = Math.pow(2, attempt) * 4000 + Math.random() * 2000;
      console.log(`[Backoff] Aguardando ${Math.round(delay / 1000)} segundos antes de tentar novamente...`);
      await new Promise(r => setTimeout(r, delay));
    }
  }
  return [];
}

async function run() {
  console.log('Verificando chaves e lendo arquivos de texto...');
  if (!process.env.GEMINI_API_KEY) {
    console.error('ERRO: A variável de ambiente GEMINI_API_KEY não foi definida.');
    process.exit(1);
  }

  const text2019 = fs.readFileSync('ufpr_2019.txt', 'utf-8');
  const text2020 = fs.readFileSync('ufpr_2020.txt', 'utf-8');
  const text2022 = fs.readFileSync('ufpr_2022.txt', 'utf-8');

  const allQuestionsMap = new Map<string, ExtractedQuestion>();
  for (const q of existingQuestions) {
    allQuestionsMap.set(q.id, q);
  }

  const isBatchExtracted = (year: number, start: number, end: number) => {
    for (let i = start; i <= end; i++) {
      const id = `ufpr_${year}_q${i}`;
      if (!allQuestionsMap.has(id)) {
        return false;
      }
    }
    return true;
  };

  // Divisão em 3 blocos maiores para as provas de 100 questões (reduz o consumo de quota e requisições)
  const batches = [
    { start: 1, end: 33 },
    { start: 34, end: 66 },
    { start: 67, end: 100 }
  ];

  // 1. UFPR 2019
  console.log('\n--- Processando UFPR 2019 (100 questões) ---');
  for (const b of batches) {
    if (isBatchExtracted(2019, b.start, b.end)) {
      console.log(`[Progresso] Bloco 2019 (${b.start}-${b.end}) já extraído. Pulando.`);
      continue;
    }
    const qs = await extractBatchWithRetries(text2019, 2019, b.start, b.end);
    for (const q of qs) {
      allQuestionsMap.set(q.id, q);
    }
    saveProgress(Array.from(allQuestionsMap.values()));
    // Cooldown amigável entre requisições para evitar exaustão de quota por segundo
    await new Promise(r => setTimeout(r, 4000));
  }

  // 2. UFPR 2020
  console.log('\n--- Processando UFPR 2020 (100 questões) ---');
  for (const b of batches) {
    if (isBatchExtracted(2020, b.start, b.end)) {
      console.log(`[Progresso] Bloco 2020 (${b.start}-${b.end}) já extraído. Pulando.`);
      continue;
    }
    const qs = await extractBatchWithRetries(text2020, 2020, b.start, b.end);
    for (const q of qs) {
      allQuestionsMap.set(q.id, q);
    }
    saveProgress(Array.from(allQuestionsMap.values()));
    await new Promise(r => setTimeout(r, 4000));
  }

  // 3. UFPR 2022
  console.log('\n--- Processando UFPR 2022 (100 questões) ---');
  for (const b of batches) {
    if (isBatchExtracted(2022, b.start, b.end)) {
      console.log(`[Progresso] Bloco 2022 (${b.start}-${b.end}) já extraído. Pulando.`);
      continue;
    }
    const qs = await extractBatchWithRetries(text2022, 2022, b.start, b.end);
    for (const q of qs) {
      allQuestionsMap.set(q.id, q);
    }
    saveProgress(Array.from(allQuestionsMap.values()));
    await new Promise(r => setTimeout(r, 4000));
  }

  console.log(`\nExtração finalizada com sucesso! Total geral no banco UFPR: ${allQuestionsMap.size} questões.`);
}

run().catch(err => {
  console.error('Falha na execução do pipeline da UFPR:', err);
  process.exit(1);
});
