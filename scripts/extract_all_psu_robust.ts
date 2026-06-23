import { GoogleGenAI, Type } from '@google/genai';
import * as fs from 'fs';
import * as path from 'path';
import 'dotenv/config';

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
});

const RAW_FILE_PATH = path.join(process.cwd(), 'data', 'processed', 'psumg_2026_raw.txt');
const DB_TS_PATH = path.join(process.cwd(), 'data', 'processed', 'questions.ts');
const DB_JSON_PATH = path.join(process.cwd(), 'data', 'processed', 'all_questions.json');

if (!fs.existsSync(RAW_FILE_PATH)) {
  console.error(`Raw file not found at: ${RAW_FILE_PATH}`);
  process.exit(1);
}

const rawText = fs.readFileSync(RAW_FILE_PATH, 'utf-8');

// Parse raw text into structured question blocks
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

function loadDatabase(): Question[] {
  if (fs.existsSync(DB_JSON_PATH)) {
    try {
      return JSON.parse(fs.readFileSync(DB_JSON_PATH, 'utf-8'));
    } catch {
      return [];
    }
  }
  return [];
}

function saveDatabase(questions: Question[]) {
  // Write updated database JSON
  fs.writeFileSync(DB_JSON_PATH, JSON.stringify(questions, null, 2), 'utf-8');

  // Write TS
  const tsContent = `// Processed and exported questions database
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

export const ALL_QUESTIONS: Question[] = ${JSON.stringify(questions, null, 2)} as any;
`;
  fs.writeFileSync(DB_TS_PATH, tsContent, 'utf-8');

  // Synchronize src/questions.ts
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

  // Regenerate QUESTOES_POR_BANCA.md
  const totalCount = questions.length;
  const bancaStats: Record<string, number> = {};
  for (const q of questions) {
    bancaStats[q.banca] = (bancaStats[q.banca] || 0) + 1;
  }

  let tableRows = '';
  for (const [b, count] of Object.entries(bancaStats).sort((a, b) => b[1] - a[1])) {
    const percentage = ((count / totalCount) * 100).toFixed(2);
    tableRows += `| **${b}** | ${count} | ${percentage}% |\n`;
  }

  const mdSummary = `# Balanço de Questões por Banca

Temos atualmente um total de **${totalCount}** questões cadastradas na base de dados.

### Distribuição por Banca:

| Banca | Quantidade de Questões | Porcentagem |
| :--- | :---: | :---: |
${tableRows}`;

  fs.writeFileSync(path.join(process.cwd(), 'data', 'processed', 'QUESTOES_POR_BANCA.md'), mdSummary, 'utf-8');
}

async function extractBatch(startQ: number, endQ: number, subject: string, attempt = 1): Promise<Question[]> {
  console.log(`[Batch] Requesting questions ${startQ} to ${endQ} for ${subject} (Attempt ${attempt})...`);

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
1. "id": "psumg_2025_q" seguido do número real da questão (ex: "psumg_2025_q1", "psumg_2025_q22", etc.)
2. "cycle": Deve ser exatamente "Ciclo Clínico".
3. "subject": Deve ser exatamente "${subject}".
4. "subsubject": Um tema específico curto em português correlato ao assunto da questão (ex: "Diabetes Mellitus", "Sepse", "Apendicite", "Saúde do Adolescente", "Toxoplasmose", "Rastreamento", etc.).
5. "banca": Deve ser exatamente "PSU-MG".
6. "year": 2025 (número inteiro).
7. "enunciado": O enunciado completo em português. Mantenha limpo, preservando quebras de linha e dados clínicos relevantes.
8. "alternatives": Array de strings contendo o texto de cada alternativa (A, B, C, D). Remova prefixos como "A. ", "B. ", "C. ", "D. ", etc.
9. "correctIndex": O índice correto da alternativa (0 para A, 1 para B, 2 para C, 3 para D).
10. "explanation": Explicação concisa, clara e profissional descrevendo o porquê de a alternativa estar correta com embasamento médico oficial.
11. "difficulty": "easy", "medium" ou "hard" com base na complexidade clínica da questão.

Aqui está o texto bruto com as questões:
---
${subsetText}
---`;

  try {
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
    
    // Enforce correctIndex based on the master answer key
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
  } catch (error: any) {
    console.error(`[Batch Error] Attempt ${attempt} failed: ${error.message}`);
    if (attempt < 5) {
      const delay = Math.pow(2, attempt) * 1500 + 3000;
      console.log(`Waiting ${delay / 1000} seconds before retrying...`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return extractBatch(startQ, endQ, subject, attempt + 1);
    }
    throw error;
  }
}

async function main() {
  console.log('--- STARTING BULK PSU-MG EXTRACTION (PROGRESSIVE & RESUMEABLE) ---');

  // Load existing database
  const dbQuestions = loadDatabase();
  console.log(`Loaded ${dbQuestions.length} existing database questions.`);

  const existingMap = new Map<string, Question>();
  for (const q of dbQuestions) {
    existingMap.set(q.id, q);
  }

  let extractedCount = 0;

  for (const batch of BATCHES) {
    // Check if ALL questions in this batch are already in the database
    let allExist = true;
    for (let num = batch.start; num <= batch.end; num++) {
      const expectedId = `psumg_2025_q${num}`;
      if (!existingMap.has(expectedId)) {
        allExist = false;
        break;
      }
    }

    if (allExist) {
      console.log(`[Batch ${batch.batchId}] Q${batch.start}-${batch.end} already exists in database. Skipping.`);
      continue;
    }

    // Extract batch questions
    const batchQs = await extractBatch(batch.start, batch.end, batch.subject);
    
    // Merge into database map
    for (const q of batchQs) {
      existingMap.set(q.id, q);
    }

    extractedCount += batchQs.length;

    // Save database IMMEDIATELY after each batch!
    const updatedList = Array.from(existingMap.values());
    saveDatabase(updatedList);
    console.log(`[Database] Progressive save completed. Total database size: ${updatedList.length}`);

    // Small delay between batches
    if (batch.batchId < 5) {
      console.log('Sleeping for 2 seconds...');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  console.log(`--- PSU-MG EXTRACTION SYSTEM RUN COMPLETED. NEW QUESTIONS EXTRACTED: ${extractedCount} ---`);
}

main().catch(err => {
  console.error('Fatal extraction error:', err);
  process.exit(1);
});
