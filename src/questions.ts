import { ENARE_2024_FULL } from './enare_2024_questions';
import { ENARE_EXTRA_QUESTIONS } from './enare_extra_questions';
import { INTERNATO_QUESTIONS } from './internato_questions';
import { BASICO_QUESTIONS } from './basico_questions';
import { CLINICO_QUESTIONS } from './clinico_questions';

const mappedEnare2024 = ENARE_2024_FULL.map((q: any) => ({
  id: q.id,
  cycle: q.cycle || 'Ciclo Clínico',
  subject: q.subject || '',
  subSubject: q.subSubject || q.subsubject || '',
  banca: q.banca || 'ENARE',
  year: q.year || 2024,
  text: q.text || q.enunciado || '',
  options: q.options || q.alternatives || [],
  correctIndex: q.correctIndex !== undefined ? q.correctIndex : -1,
  explanation: q.explanation || '',
  difficulty: q.difficulty || 'medium',
}));

const mappedEnareExtra = ENARE_EXTRA_QUESTIONS.map((q: any) => ({
  id: q.id,
  cycle: q.cycle || 'Ciclo Clínico',
  subject: q.subject || '',
  subSubject: q.subSubject || q.subsubject || '',
  banca: q.banca || 'ENARE',
  year: q.year || 2023,
  text: q.text || q.enunciado || '',
  options: q.options || q.alternatives || [],
  correctIndex: q.correctIndex !== undefined ? q.correctIndex : -1,
  explanation: q.explanation || '',
  difficulty: q.difficulty || 'medium',
}));

const mappedInternato = INTERNATO_QUESTIONS.map((q: any) => ({
  id: q.id,
  cycle: q.cycle || 'Internato',
  subject: q.subject || '',
  subSubject: q.subSubject || q.subsubject || '',
  banca: q.banca || 'Trilha Estudante',
  year: q.year || 2026,
  text: q.text || q.enunciado || '',
  options: q.options || q.alternatives || [],
  correctIndex: q.correctIndex !== undefined ? q.correctIndex : -1,
  explanation: q.explanation || '',
  difficulty: q.difficulty || 'medium',
}));

const mappedBasico = BASICO_QUESTIONS.map((q: any) => ({
  id: q.id,
  cycle: q.cycle || 'Ciclo Básico',
  subject: q.subject || '',
  subSubject: q.subSubject || q.subsubject || '',
  banca: q.banca || 'Trilha Estudante',
  year: q.year || 2026,
  text: q.text || q.enunciado || '',
  options: q.options || q.alternatives || [],
  correctIndex: q.correctIndex !== undefined ? q.correctIndex : -1,
  explanation: q.explanation || '',
  difficulty: q.difficulty || 'medium',
}));

const mappedClinico = CLINICO_QUESTIONS.map((q: any) => ({
  id: q.id,
  cycle: q.cycle || 'Ciclo Clínico',
  subject: q.subject || '',
  subSubject: q.subSubject || q.subsubject || '',
  banca: q.banca || 'Trilha Estudante',
  year: q.year || 2026,
  text: q.text || q.enunciado || '',
  options: q.options || q.alternatives || [],
  correctIndex: q.correctIndex !== undefined ? q.correctIndex : -1,
  explanation: q.explanation || '',
  difficulty: q.difficulty || 'medium',
}));

export const QUESTIONS: any[] = [
  ...mappedEnare2024,
  ...mappedEnareExtra,
  ...mappedInternato,
  ...mappedBasico,
  ...mappedClinico
];

