import { ALL_QUESTIONS } from '../data/processed/questions';

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
