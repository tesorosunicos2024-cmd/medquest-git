import { GoogleGenAI, Type } from '@google/genai';
import * as fs from 'fs';
import * as path from 'path';

// Load variables from .env
import 'dotenv/config';

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
});

const RAW_FILE_PATH = path.join(process.cwd(), 'data', 'processed', 'psumg_2026_raw.txt');
const rawText = fs.readFileSync(RAW_FILE_PATH, 'utf-8');

// Parse the questions dynamically to send only the subset
const qSplits = rawText.split(/QUESTÃO\s+(\d+)\./gi);
const questionsMap = new Map<number, string>();
for (let i = 1; i < qSplits.length; i += 2) {
  const qNum = parseInt(qSplits[i]);
  const qText = qSplits[i + 1]?.trim() || '';
  questionsMap.set(qNum, qText);
}

// Master answer key (correctIndex mapped strictly)
const correctKeys = [
  "B", "B", "D", "D", "B", "A", "C", "D", "B", "B", "D", "D", "B", "B", "A", // Q1 - 15 (Clínica Médica)
  "C", "A", "D", "C", "B", "D", "D", "C", "B", "D", "D", "D", "D", "B", "A", // Q16 - 30 (Cirurgia Geral)
  "B", "C", "A", "D", "A", "B", "B", "C", "B", "D", "C", "A", "A", "B", "A", // Q31 - 45 (Pediatria)
  "D", "B", "C", "C", "C", "D", "D", "A", "B", "A", "C", "A", "A", "D", "D", // Q46 - 60 (Ginecologia & Obstetrícia)
  "C", "D", "C", "A", "B", "A", "C", "A", "D", "C", "B", "D", "B", "D", "D"  // Q61 - 75 (Medicina de Família/SUS)
];

const optionToIdx: Record<string, number> = { "A": 0, "B": 1, "C": 2, "D": 3 };

interface Question {
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

const BATCHES = [
  { batchId: 1, start: 1, end: 15, subject: 'Clínica Médica' },
  { batchId: 2, start: 16, end: 30, subject: 'Cirurgia Geral' },
  { batchId: 3, start: 31, end: 45, subject: 'Pediatria' },
  { batchId: 4, start: 46, end: 60, subject: 'Ginecologia & Obstetrícia' },
  { batchId: 5, start: 61, end: 75, subject: 'Medicina de Família/SUS' }
];

async function extractBatch(startQ: number, endQ: number, subject: string): Promise<Question[]> {
  console.log(`[Batch] Loading and sending questions ${startQ} to ${endQ} for ${subject}...`);

  // Build the subset of question text
  let subsetText = '';
  for (let num = startQ; num <= endQ; num++) {
    const qText = questionsMap.get(num);
    if (qText) {
      subsetText += `QUESTÃO ${num}.\n${qText}\n\n`;
    }
  }

  if (subsetText.trim().length === 0) {
    throw new Error(`Failed to extract question text for range ${startQ}-${endQ}`);
  }

  const prompt = `Você é um renomado especialista em educação médica e residência do SUS-MG/AREMG.
A sua tarefa é extrair e estruturar estritamente em formato JSON as questões de número ${startQ} a ${endQ} a partir do texto parcial da prova colocado abaixo.

Para cada questão processada, você deve gerar um objeto com estas propriedades:
1. "id": "psumg_2026_q" seguido do número real da questão (ex: "psumg_2026_q1", "psumg_2026_q22", etc.)
2. "cycle": Deve ser exatamente "Ciclo Clínico".
3. "subject": Deve ser exatamente "${subject}".
4. "subsubject": Um tema específico curto em português correlato ao assunto da questão (ex: "Diabetes Mellitus", "Sepse", "Apendicite", "Saúde do Adolescente", "Toxoplasmose", "Rastreamento", etc.).
5. "banca": Deve ser exatamente "PSU-MG".
6. "year": 2026 (número inteiro).
7. "enunciado": O enunciado completo em português. Mantenha limpo, preservando quebras de linha e dados clínicos relevantes.
8. "alternatives": Array de strings contendo o texto de cada alternativa (A, B, C, D). Remova prefixos como "A. ", "B. ", "C. ", "D. ", etc.
9. "correctIndex": O índice correto da alternativa (0 para A, 1 para B, 2 para C, 3 para D).
10. "explanation": Explicação concisa, clara e profissional descrevendo o porquê de a alternativa estar correta com embasamento médico oficial.
11. "difficulty": "easy", "medium" ou "hard" com base na complexidade clínica da questão.

Aqui está o texto bruto com as questões:
---
${subsetText}
---`;

  const response = await ai.models.generateContent({
    model: 'gemini-3.5-flash',
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

  const rawQuestions = JSON.parse(response.text || '[]');
  
  // Enforce correctIndex based on the absolute master answer key
  const finalQuestions = rawQuestions.map((q: any) => {
    const match = q.id.match(/_q(\d+)/);
    if (match) {
      const qNum = parseInt(match[1]);
      const keyLetter = correctKeys[qNum - 1];
      if (keyLetter && optionToIdx[keyLetter] !== undefined) {
        q.correctIndex = optionToIdx[keyLetter];
      }
    }
    return q;
  });

  console.log(`[Batch] Completed Q${startQ}-${endQ} with ${finalQuestions.length} questions.`);
  return finalQuestions;
}

async function main() {
  const args = process.argv.slice(2);
  const modeIndex = args.indexOf('--batch');
  const batchArg = modeIndex !== -1 ? parseInt(args[modeIndex + 1]) : NaN;

  const tempStoreFile = path.join(process.cwd(), 'data', 'processed', 'temp_2026_q.json');

  if (isNaN(batchArg)) {
    console.log('No batch specified. Combining existing temporary items into main database...');
    if (!fs.existsSync(tempStoreFile)) {
      console.error('No temporary questions found in ' + tempStoreFile);
      process.exit(1);
    }
    const tempQs: Question[] = JSON.parse(fs.readFileSync(tempStoreFile, 'utf-8'));
    console.log(`Loaded ${tempQs.length} questions from temp storage.`);

    // Read existing database
    const dbPath = path.join(process.cwd(), 'data', 'processed', 'questions.ts');
    const { ALL_QUESTIONS: existingQuestions } = await import('../data/processed/questions');

    console.log(`Previous database question count: ${existingQuestions.length}`);

    // Merge: remove previous versions of psumg_2026 if any, and merge unique by id
    const questionsMap = new Map<string, any>();
    for (const q of existingQuestions) {
      questionsMap.set(q.id, q);
    }

    for (const q of tempQs) {
      questionsMap.set(q.id, q);
    }

    const mergedQuestions = Array.from(questionsMap.values());
    console.log(`New total database question count: ${mergedQuestions.length}`);

    // Write updated database files
    const dbJsonPath = path.join(process.cwd(), 'data', 'processed', 'all_questions.json');

    const updatedFileContent = `// Processed and exported questions database
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
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
  difficulty: Difficulty;
}

export const ALL_QUESTIONS: Question[] = ${JSON.stringify(mergedQuestions, null, 2)} as any;
`;

    fs.writeFileSync(dbPath, updatedFileContent, 'utf-8');
    fs.writeFileSync(dbJsonPath, JSON.stringify(mergedQuestions, null, 2), 'utf-8');
    console.log(`Database files successfully updated locally.`);

    // Sync src/questions.ts
    const srcQuestionsPath = path.join(process.cwd(), 'src', 'questions.ts');
    const srcContent = `import { ALL_QUESTIONS } from '../data/processed/questions';

export const QUESTIONS: any[] = ALL_QUESTIONS.map(q => ({
  id: q.id,
  cycle: q.cycle,
  subject: q.subject,
  subSubject: q.subsubject || '',
  banca: q.banca || '',
  year: q.year || 2024,
  text: q.enunciado,
  options: q.alternatives,
  correctIndex: q.correctIndex,
  explanation: q.explanation || '',
  difficulty: q.difficulty || 'medium',
}));
`;
    fs.writeFileSync(srcQuestionsPath, srcContent, 'utf-8');
    console.log(`src/questions.ts synchronized.`);
    
    // Clean up temp file
    fs.unlinkSync(tempStoreFile);
    console.log('Cleaned up temporary questions store.');
    process.exit(0);
  }

  const batch = BATCHES.find(b => b.batchId === batchArg);
  if (!batch) {
    console.error(`Invalid batch number: ${batchArg}. Specify 1 to 5.`);
    process.exit(1);
  }

  const newQs = await extractBatch(batch.start, batch.end, batch.subject);

  // Synchronize write to temporary storage
  let currentTemp: Question[] = [];
  if (fs.existsSync(tempStoreFile)) {
    try {
      currentTemp = JSON.parse(fs.readFileSync(tempStoreFile, 'utf-8'));
    } catch {
      currentTemp = [];
    }
  }

  // Filter out any duplicates in temp
  const tempMap = new Map<string, Question>();
  for (const q of currentTemp) {
    tempMap.set(q.id, q);
  }
  for (const q of newQs) {
    tempMap.set(q.id, q);
  }

  const finalTemp = Array.from(tempMap.values());
  fs.writeFileSync(tempStoreFile, JSON.stringify(finalTemp, null, 2), 'utf-8');
  console.log(`Batch ${batchArg} saved to temporary storage. Total items in temp: ${finalTemp.length}`);
}

main();
