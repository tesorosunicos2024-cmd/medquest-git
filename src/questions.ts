import { ALL_QUESTIONS } from '../data/processed/questions';
import { BASICO_QUESTIONS } from './basico_questions';
import { CLINICO_QUESTIONS } from './clinico_questions';
import { INTERNATO_QUESTIONS } from './internato_questions';
import { Q_BASICO_1 } from './q_basico_1';
import { Q_BASICO_2 } from './q_basico_2';
import { Q_BASICO_3 } from './q_basico_3';
import { Q_CLINICO_1 } from './q_clinico_1';
import { Q_CLINICO_2 } from './q_clinico_2';
import { Q_CLINICO_3 } from './q_clinico_3';
import { Q_CLINICO_4 } from './q_clinico_4';
import { Q_INTERNATO_1 } from './q_internato_1';
import { ANAT_QUESTIONS } from './estudante_basico_anat';
import { Q_BANCAS_BRASIL } from './q_bancas_brasil';
import { ENARE_2024_FULL } from './enare_2024_questions';
import { ENARE_EXTRA_QUESTIONS } from './enare_extra_questions';

function sanitizeQuestion(q: any): any {
  return {
    id: q.id,
    cycle: q.cycle || 'Ciclo Básico',
    subject: q.subject,
    subSubject: q.subSubject || q.subsubject || '',
    banca: q.banca || '',
    year: q.year || 2024,
    text: q.text || q.enunciado || '',
    options: q.options || q.alternatives || [],
    correctIndex: typeof q.correctIndex === 'number' ? q.correctIndex : 0,
    explanation: q.explanation || '',
    difficulty: q.difficulty || 'medium',
  };
}

// Map to guarantee unique questions by ID, avoiding duplicates
const questionsMap = new Map<string, any>();

// 1. Add consolidated questions from DB (5,878 questions)
for (const q of ALL_QUESTIONS) {
  questionsMap.set(q.id, sanitizeQuestion(q));
}

// 2. Add dynamic study track questions (8,600 questions)
for (const q of BASICO_QUESTIONS) {
  if (!questionsMap.has(q.id)) {
    questionsMap.set(q.id, sanitizeQuestion(q));
  }
}
for (const q of CLINICO_QUESTIONS) {
  if (!questionsMap.has(q.id)) {
    questionsMap.set(q.id, sanitizeQuestion(q));
  }
}
for (const q of INTERNATO_QUESTIONS) {
  if (!questionsMap.has(q.id)) {
    questionsMap.set(q.id, sanitizeQuestion(q));
  }
}

// 3. Add other local questions collections from the src/ folder
const otherSources = [
  ...Q_BASICO_1,
  ...Q_BASICO_2,
  ...Q_BASICO_3,
  ...Q_CLINICO_1,
  ...Q_CLINICO_2,
  ...Q_CLINICO_3,
  ...Q_CLINICO_4,
  ...Q_INTERNATO_1,
  ...ANAT_QUESTIONS,
  ...Q_BANCAS_BRASIL,
  ...ENARE_2024_FULL,
  ...ENARE_EXTRA_QUESTIONS,
];

for (const q of otherSources) {
  if (!questionsMap.has(q.id)) {
    questionsMap.set(q.id, sanitizeQuestion(q));
  }
}

export const QUESTIONS: any[] = Array.from(questionsMap.values());
