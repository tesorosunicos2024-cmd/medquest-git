import * as fs from 'fs';
import * as path from 'path';

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

// Map of file prefixes to clean banca names
const BANCA_MAPPING: Record<string, string> = {
  amrigs: 'AMRIGS',
  cermam: 'CERMAM',
  einstein: 'Einstein',
  enare: 'ENARE',
  hcpa: 'HCPA',
  iamspe: 'IAMSPE',
  psu: 'PSU-MG',
  psu_mg: 'PSU-MG',
  puc: 'PUC-PR',
  pucpr: 'PUC-PR',
  ufpr: 'UFPR',
  ufrj: 'UFRJ',
  ufsc: 'UFSC',
  unesp: 'UNESP',
  unicamp: 'UNICAMP',
  unifesp: 'UNIFESP',
  enamed: 'ENAMED'
};

function getBancaFromName(filename: string, qBanca?: string): string {
  if (qBanca && qBanca !== 'UNKNOWN' && qBanca !== 'Trilha Estudante') {
    return qBanca;
  }
  const lower = filename.toLowerCase();
  for (const [key, val] of Object.entries(BANCA_MAPPING)) {
    if (lower.startsWith(key)) {
      return val;
    }
  }
  if (qBanca) return qBanca;
  return 'UNKNOWN';
}

async function main() {
  console.log('--- STARTING ALL-INCLUSIVE DATABASE MERGE ---');

  // 1. Load current database questions
  const dbPath = 'data/processed/questions.ts';
  let currentDbQuestions: any[] = [];
  if (fs.existsSync(dbPath)) {
    try {
      const dbModule = await import('../data/processed/questions');
      currentDbQuestions = dbModule.ALL_QUESTIONS || [];
    } catch (e) {
      console.warn('Could not import existing database questions:', e);
    }
  }
  console.log(`Loaded ${currentDbQuestions.length} existing database questions.`);

  const mergedMap = new Map<string, Question>();
  
  // Add current database questions first
  for (const q of currentDbQuestions as any[]) {
    mergedMap.set(q.id, {
      id: q.id,
      cycle: q.cycle,
      subject: q.subject,
      subsubject: q.subsubject || '',
      banca: q.banca || 'UNKNOWN',
      year: q.year || 2024,
      enunciado: q.enunciado || q.text || '',
      alternatives: q.alternatives || q.options || [],
      correctIndex: typeof q.correctIndex === 'number' ? q.correctIndex : 0,
      explanation: q.explanation || '',
      difficulty: q.difficulty || 'medium'
    });
  }

  // 2. Scan src/ for all question files
  const srcFiles = fs.readdirSync('src').filter(f => 
    f.endsWith('.ts') && 
    !['questions.ts', 'questionNormalize.ts', 'vite-env.d.ts', 'main.tsx', 'App.tsx'].includes(f)
  );

  let totalImported = 0;
  let totalDuplicatesSkipped = 0;

  for (const f of srcFiles) {
    const importPath = '../src/' + f.replace('.ts', '');
    try {
      const module = await import(importPath);
      for (const key of Object.keys(module)) {
        const arr = module[key];
        if (Array.isArray(arr)) {
          console.log(`Processing file: ${f} (export: ${key}, count: ${arr.length})`);
          for (const q of arr as any[]) {
            if (!q || !q.id) continue;

            const id = q.id;
            const cycle = q.cycle || 'Ciclo Clínico';
            const subject = q.subject || 'Clínica Médica';
            const subsubject = q.subSubject || q.subsubject || '';
            const banca = getBancaFromName(f, q.banca);
            const year = q.year || 2024;
            const enunciado = q.text || q.enunciado || '';
            const alternatives = q.options || q.alternatives || [];
            const correctIndex = typeof q.correctIndex === 'number' ? q.correctIndex : 0;
            const explanation = q.explanation || '';
            const difficulty = q.difficulty || 'medium';

            if (mergedMap.has(id)) {
              totalDuplicatesSkipped++;
              continue;
            }

            const formatted: Question = {
              id,
              cycle,
              subject,
              subsubject,
              banca,
              year,
              enunciado,
              alternatives,
              correctIndex,
              explanation,
              difficulty
            };

            mergedMap.set(id, formatted);
            totalImported++;
          }
        }
      }
    } catch (err: any) {
      // Skip non-question files or errors silently
    }
  }

  const finalQuestions = Array.from(mergedMap.values());
  console.log(`Merge complete! Unique questions added: ${totalImported} (Duplicates skipped: ${totalDuplicatesSkipped}). Total database size: ${finalQuestions.length}`);

  // 3. Write out merged database
  const updatedContent = `// Processed and exported questions database
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

export const ALL_QUESTIONS: Question[] = ${JSON.stringify(finalQuestions, null, 2)} as any;
`;

  fs.writeFileSync(dbPath, updatedContent, 'utf-8');
  fs.writeFileSync('data/processed/all_questions.json', JSON.stringify(finalQuestions, null, 2), 'utf-8');
  console.log(`Successfully wrote merged database to ${dbPath}`);

  // 4. Update src/questions.ts
  const srcQuestionsContent = `import { ALL_QUESTIONS } from '../data/processed/questions';

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
  fs.writeFileSync('src/questions.ts', srcQuestionsContent, 'utf-8');
  console.log('Successfully synchronized src/questions.ts with new database!');
}

main().catch(err => {
  console.error('Fatal error in merge script:', err);
  process.exit(1);
});
