import { ALL_QUESTIONS } from '../data/processed/questions';
import { dedupeQuestions } from './questionNormalize';

function normalizeQuestion(q: any) {
  let cycle = q.cycle;
  let subject = q.subject;

  // 1. Normalize cycle spelling
  if (cycle === 'Ciclo Clinico') {
    cycle = 'Ciclo Clínico';
  }

  // 2. Map subjects to correct canonical names
  const subjectLower = (subject || '').trim().toLowerCase();

  // Ginecologia & Obstetrícia
  if (
    subjectLower === 'ginecologia e obstetrícia' ||
    subjectLower === 'ginecologia' ||
    subjectLower === 'obstetrícia' ||
    subjectLower === 'ginecologia & obstetricia' ||
    subjectLower === 'ginecologia e obstetricia' ||
    subjectLower === 'mastologia' ||
    subjectLower.includes('ginecologia e obstetrícia')
  ) {
    subject = 'Ginecologia & Obstetrícia';
  }
  // Medicina de Família/SUS
  else if (
    subjectLower === 'saúde coletiva' ||
    subjectLower === 'saude coletiva' ||
    subjectLower === 'medicina de família' ||
    subjectLower === 'medicina de familia' ||
    subjectLower === 'medicina de família e comunidade' ||
    subjectLower === 'medicina de familia e comunidade' ||
    subjectLower === 'médico da família' ||
    subjectLower === 'medico da familia' ||
    subjectLower.includes('políticas públicas') ||
    subjectLower.includes('politicas publicas') ||
    subjectLower === 'direito sanitário' ||
    subjectLower === 'direito sanitario' ||
    subjectLower.includes('epidemiologia e saúde coletiva') ||
    subjectLower.includes('oncologia, medicina preventiva') ||
    subjectLower === 'ética médica' ||
    subjectLower === 'etica medica' ||
    subjectLower === 'medicina legal' ||
    subjectLower === 'medicina do trabalho'
  ) {
    subject = 'Medicina de Família/SUS';
  }
  // Clínica Médica
  else if (
    subjectLower === 'clinica medica' ||
    subjectLower === 'clínica médica' ||
    subjectLower.startsWith('clínica médica humana') ||
    subjectLower.startsWith('clinica medica humana') ||
    subjectLower === 'oncologia' ||
    (subjectLower === 'medicina intensiva' && cycle === 'Ciclo Clínico')
  ) {
    subject = 'Clínica Médica';
  }
  // Infectologia
  else if (subjectLower.includes('doenças infecto-parasitárias') || subjectLower.includes('doencas infecto-parasitarias')) {
    subject = 'Infectologia';
  }
  // Reumatologia
  else if (subjectLower.includes('doenças reumatológicas') || subjectLower.includes('doencas reumatologicas')) {
    subject = 'Reumatologia';
  }
  // Cardiologia
  else if (subjectLower.startsWith('cardiologia e alterações vasculares') || subjectLower.startsWith('cardiologia e alteracoes vasculares')) {
    subject = 'Cardiologia';
  }
  // Neurologia
  else if (subjectLower.startsWith('neurologia, genética') || subjectLower.startsWith('neurologia, oncologia')) {
    subject = 'Neurologia';
  }
  // Pediatria
  else if (subjectLower.startsWith('pediatria, neurologia') || subjectLower.startsWith('pediatria e neonatologia')) {
    subject = 'Pediatria';
  }
  // Cirurgia Geral
  else if (
    subjectLower === 'cirurgia pediátrica' ||
    subjectLower === 'cirurgia pediatrica' ||
    subjectLower === 'cirurgia plástica' ||
    subjectLower === 'cirurgia plastica' ||
    subjectLower === 'cirurgia torácica' ||
    subjectLower === 'cirurgia toracica' ||
    subjectLower === 'cirurgia' ||
    subjectLower === 'angiologia'
  ) {
    subject = 'Cirurgia Geral';
  }
  // Urgência e Emergência
  else if (subjectLower === 'medicina de emergência' || subjectLower === 'medicina de emergencia') {
    subject = 'Urgência e Emergência';
  }
  // Traumatologia-Ortopedia
  else if (subjectLower === 'ortopedia' && cycle === 'Internato') {
    subject = 'Traumatologia-Ortopedia';
  }

  // 3. Move subjects to their correct cycle if they belong to specific lists
  const internatoOnlySubjects = [
    'Urgência e Emergência',
    'Medicina Intensiva',
    'Anestesiologia',
    'Neonatologia',
    'Traumatologia-Ortopedia',
    'Cirurgia Vascular',
    'Neurocirurgia'
  ];

  const basicoOnlySubjects = [
    'Anatomia', 'Fisiologia', 'Bioquímica', 'Histologia', 'Embriologia', 'Microbiologia', 'Imunologia', 'Genética', 'Farmacologia', 'Patologia', 'Parasitologia', 'Semiologia', 'Epidemiologia'
  ];

  const clinicoOnlySubjects = [
    'Ginecologia & Obstetrícia',
    'Pediatria',
    'Medicina de Família/SUS',
    'Cirurgia Geral',
    'Cardiologia',
    'Pneumologia',
    'Gastroenterologia',
    'Infectologia',
    'Endocrinologia',
    'Clínica Médica',
    'Clínica Cirúrgica',
    'Psiquiatria',
    'Reumatologia',
    'Nefrologia',
    'Neurologia',
    'Hematologia',
    'Dermatologia',
    'Oftalmologia',
    'Otorrinolaringologia',
    'Ortopedia',
    'Urologia',
    'Geriatria',
    'Radiologia'
  ];

  if (internatoOnlySubjects.includes(subject)) {
    cycle = 'Internato';
  } else if (basicoOnlySubjects.includes(subject)) {
    cycle = 'Ciclo Básico';
  } else if (clinicoOnlySubjects.includes(subject)) {
    cycle = 'Ciclo Clínico';
  }

  return { cycle, subject };
}

export const QUESTIONS: any[] = dedupeQuestions(ALL_QUESTIONS.map(q => {
  const norm = normalizeQuestion(q);
  return {
    id: q.id,
    cycle: norm.cycle,
    subject: norm.subject,
    subSubject: q.subsubject || '',
    banca: q.banca || '',
    year: q.year || 2024,
    text: q.enunciado,
    options: q.alternatives,
    correctIndex: q.correctIndex,
    explanation: q.explanation || '',
    difficulty: q.difficulty || 'medium',
  };
}));

