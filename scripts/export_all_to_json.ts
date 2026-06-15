import { QUESTIONS } from '../src/questions';
import * as fs from 'fs';
import * as path from 'path';

const PROCESSED_DIR = path.join(process.cwd(), 'data', 'processed');

// Ensure directory exists
if (!fs.existsSync(PROCESSED_DIR)) {
  fs.mkdirSync(PROCESSED_DIR, { recursive: true });
}

console.log(`Loading total ${QUESTIONS.length} questions from src/questions...`);

const allQuestionsConverted = QUESTIONS.map((q: any) => {
  // Try to extract year from id, e.g. enare_2023_006 or cermam_am_2009_099
  let year = q.year;
  if (!year && q.id) {
    const parts = q.id.split('_');
    const yearPart = parts.find((p: string) => /^(19|20)\d{2}$/.test(p));
    if (yearPart) {
      year = parseInt(yearPart, 10);
    }
  }
  if (!year) {
    year = 2024; // Default fallback
  }

  return {
    id: q.id,
    cycle: q.cycle || 'Ciclo Clínico',
    subject: q.subject || 'Clínica Médica',
    subsubject: q.subSubject || q.subsubject || '',
    banca: q.banca || 'Outra',
    year: year,
    enunciado: q.text || q.enunciado || '',
    alternatives: q.options || q.alternatives || [],
    correctIndex: q.correctIndex !== undefined ? q.correctIndex : -1,
    explanation: q.explanation || '',
    difficulty: q.difficulty || 'medium'
  };
});

// Save to data/processed/all_questions.json
const jsonPath = path.join(PROCESSED_DIR, 'all_questions.json');
fs.writeFileSync(jsonPath, JSON.stringify(allQuestionsConverted, null, 2), 'utf-8');
console.log(`Saved ${allQuestionsConverted.length} questions to ${jsonPath}`);

// Also save to data/processed/questions.ts so it matches the script-based schema
const tsPath = path.join(PROCESSED_DIR, 'questions.ts');
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

export const ALL_QUESTIONS: Question[] = ${JSON.stringify(allQuestionsConverted, null, 2)} as any;
`;

fs.writeFileSync(tsPath, tsContent, 'utf-8');
console.log(`Saved compiled TypeScript questions database to ${tsPath}`);

// Generate a categorized report in QUESTOES_POR_BANCA.md
const stats: Record<string, Record<string, number>> = {};
allQuestionsConverted.forEach((q) => {
  const b = q.banca;
  const s = q.subject;
  if (!stats[b]) stats[b] = {};
  stats[b][s] = (stats[b][s] || 0) + 1;
});

let mdContent = `# Banco de Questões - MedQuest

Este arquivo resume todas as questões atualmente consolidadas no banco de dados e prontas para uso.

## Resumo Estatístico

Total de Questões: **${allQuestionsConverted.length}**

`;

Object.entries(stats).forEach(([banca, subjects]) => {
  const totalBanca = Object.values(subjects).reduce((a, b) => a + b, 0);
  mdContent += `### 📁 ${banca} (${totalBanca} questões)\n\n`;
  Object.entries(subjects).forEach(([subj, count]) => {
    mdContent += `- **${subj}**: ${count} questões\n`;
  });
  mdContent += `\n`;
});

const mdPath = path.join(PROCESSED_DIR, 'QUESTOES_POR_BANCA.md');
fs.writeFileSync(mdPath, mdContent, 'utf-8');
console.log(`Updated report in ${mdPath}`);
