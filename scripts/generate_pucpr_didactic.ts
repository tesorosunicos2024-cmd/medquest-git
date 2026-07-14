import { GoogleGenAI, Type } from '@google/genai';
import * as fs from 'fs';
import * as path from 'path';

// Load PUCPR questions
import { PUCPR_2010_QUESTIONS } from '../src/pucpr_2010_questions';

const logFilePath = path.join(process.cwd(), 'generation_pucpr.log');

// Overwrite console.log and console.error to also write to a file
const originalLog = console.log;
const originalWarn = console.warn;
const originalError = console.error;

function writeToLogFile(type: string, ...args: any[]) {
  const message = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)).join(' ');
  const formatted = `[${new Date().toISOString()}] [${type}] ${message}\n`;
  fs.appendFileSync(logFilePath, formatted, 'utf-8');
}

console.log = (...args: any[]) => {
  originalLog(...args);
  writeToLogFile('INFO', ...args);
};

console.warn = (...args: any[]) => {
  originalWarn(...args);
  writeToLogFile('WARN', ...args);
};

console.error = (...args: any[]) => {
  originalError(...args);
  writeToLogFile('ERROR', ...args);
};

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
});

interface Question {
  id: string;
  banca: string;
  cycle: string;
  subject: string;
  subSubject?: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

interface DidacticQuestion extends Question {
  originalId: string;
}

const allOriginals: Question[] = PUCPR_2010_QUESTIONS;

const outputPath = path.join(process.cwd(), 'src', 'pucpr_didactic_questions.ts');

// Load already generated questions to resume progress
let generatedQuestions: DidacticQuestion[] = [];
if (fs.existsSync(outputPath)) {
  try {
    const fileContent = fs.readFileSync(outputPath, 'utf-8');
    const startIdx = fileContent.indexOf('[');
    const endIdx = fileContent.lastIndexOf(']');
    if (startIdx !== -1 && endIdx !== -1) {
      const jsonStr = fileContent.substring(startIdx, endIdx + 1);
      generatedQuestions = JSON.parse(jsonStr);
      console.log(`[Progresso] Carregadas ${generatedQuestions.length} questões didáticas existentes.`);
    }
  } catch (err) {
    console.warn('[Progresso] Não foi possível ler as questões anteriores. Iniciando do zero.');
  }
}

// Map of already generated original IDs
const generatedMap = new Set(generatedQuestions.map(q => q.originalId));

// Filter out questions we already generated
const remainingOriginals = allOriginals.filter(q => !generatedMap.has(q.id));

console.log(`Total original PUC-PR: ${allOriginals.length}`);
console.log(`Já geradas: ${generatedQuestions.length}`);
console.log(`Restantes para gerar: ${remainingOriginals.length}`);

// Helper to save generated questions
function saveProgress(questions: DidacticQuestion[]) {
  // Sort questions by original ID to keep it tidy
  questions.sort((a, b) => a.originalId.localeCompare(b.originalId));
  const fileContent = `// PUC-PR - Questões Didáticas Paralelas
// Gerado automaticamente via Gemini API baseando-se nas questões originais da PUC-PR.

export const PUCPR_DIDACTIC_QUESTIONS: any[] = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync(outputPath, fileContent, 'utf-8');
  console.log(`[Progresso] Salvo progresso com ${questions.length} questões em ${outputPath}`);
}

async function generateBatch(batch: Question[]): Promise<DidacticQuestion[]> {
  const prompt = `Você é um elaborador de questões médicas de altíssimo nível para provas de residência médica no padrão da banca PUC-PR (Pontifícia Universidade Católica do Paraná).

Sua tarefa é ler um lote de questões originais da banca PUC-PR e, para CADA questão original, elaborar exatamente UMA nova questão didática paralela relacionada, que seja clinicamente equivalente ou aborde o mesmo conceito médico relevante com uma variação fática de caso clínico ou didática de altíssimo nível.

Aqui estão as questões originais:
${JSON.stringify(batch.map(q => ({
    id: q.id,
    subject: q.subject,
    subSubject: q.subSubject,
    cycle: q.cycle,
    text: q.text,
    options: q.options,
    correctIndex: q.correctIndex
  })), null, 2)}

Regras essenciais para a nova questão:
1. Deve focar didaticamente no mesmo conceito, doença ou tema médico abordado na questão original correspondente.
2. O campo "originalId" DEVE ser o ID exato da questão original correspondente (ex: 'pucpr_2010_001').
3. O "id" da nova questão deve ser "pucpr_didactic_" + o sufixo numérico do ID original (ex: para 'pucpr_2010_001', o novo ID deve ser 'pucpr_didactic_2010_001').
4. A "banca" deve ser "PUC-PR (Didática)".
5. O "subject" e "cycle" devem ser idênticos aos da questão original.
6. O campo "subSubject" pode ser preenchido se relevante.
7. O "text" deve ser em português, formulado com rigor médico e clareza didática.
8. Deve conter exatamente 5 opções (A, B, C, D, E) onde apenas uma é correta.
9. O "correctIndex" (0 a 4) deve corresponder à opção certa.
10. A "explanation" deve explicar em detalhes cada alternativa de forma didática, reforçando o aprendizado do aluno (por que a certa está certa e por que as erradas estão erradas).

Retorne os resultados em formato JSON válido, de acordo com o esquema definido.`;

  const models = ['gemini-3.5-flash', 'gemini-3.1-flash-lite', 'gemini-flash-latest'];
  let lastError: any = null;

  for (const model of models) {
    try {
      console.log(`Tentando modelo ${model}...`);
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          temperature: 0.2,
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                originalId: { type: Type.STRING },
                banca: { type: Type.STRING },
                cycle: { type: Type.STRING },
                subject: { type: Type.STRING },
                subSubject: { type: Type.STRING },
                text: { type: Type.STRING },
                options: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                },
                correctIndex: { type: Type.INTEGER },
                explanation: { type: Type.STRING }
              },
              required: ['id', 'originalId', 'banca', 'cycle', 'subject', 'text', 'options', 'correctIndex', 'explanation']
            }
          }
        }
      });

      const text = response.text;
      if (!text) {
        throw new Error(`Nenhuma resposta do Gemini com o modelo ${model}.`);
      }

      const results: DidacticQuestion[] = JSON.parse(text);
      console.log(`Sucesso com o modelo ${model}!`);
      return results;
    } catch (err: any) {
      console.warn(`[Aviso Modelo] Falha no modelo ${model}: ${err?.message || err}`);
      lastError = err;
    }
  }

  throw lastError || new Error('Todos os modelos de fallback falharam.');
}

async function main() {
  const batchSize = 15;
  const total = remainingOriginals.length;

  if (total === 0) {
    console.log('Todas as questões já foram geradas!');
    return;
  }

  console.log(`Iniciando a geração de ${total} questões em lotes de ${batchSize}...`);

  for (let i = 0; i < total; i += batchSize) {
    const batch = remainingOriginals.slice(i, i + batchSize);
    console.log(`\n--- Gerando lote ${Math.floor(i / batchSize) + 1} de ${Math.ceil(total / batchSize)} (${batch.length} questões) ---`);

    let success = false;
    let attempts = 0;
    while (!success && attempts < 5) {
      attempts++;
      try {
        console.log(`Chamando Gemini API (Tentativa ${attempts}/5)...`);
        const batchResults = await generateBatch(batch);
        
        // Validate count and correct matching
        if (batchResults.length !== batch.length) {
          console.warn(`[Aviso] Esperava ${batch.length} questões, mas vieram ${batchResults.length}. Corrigindo pareamento...`);
        }

        // Add to our list and save
        for (const q of batchResults) {
          // Double check required fields
          if (q.id && q.originalId && q.text && q.options && q.options.length === 5) {
            // Remove duplication if any
            generatedQuestions = generatedQuestions.filter(existing => existing.originalId !== q.originalId);
            generatedQuestions.push(q);
          }
        }

        saveProgress(generatedQuestions);
        success = true;
      } catch (err: any) {
        console.error(`[Erro Lote] Falha na tentativa ${attempts}:`, err?.message || err);
        // Exponential backoff
        const delay = Math.pow(2, attempts) * 5000;
        console.log(`Aguardando ${delay / 1000} segundos antes de tentar novamente...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }

    if (!success) {
      console.error('Falhou após 5 tentativas consecutivas. Encerrando execução do lote atual para não perder progresso.');
      break;
    }
  }

  console.log('\nProcessamento de geração concluído!');
}

main().catch(err => {
  console.error('Erro geral no script de geração:', err);
});
