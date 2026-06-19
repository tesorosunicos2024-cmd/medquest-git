import * as fs from 'fs';
import * as path from 'path';

const ALLOWED_SUBJECTS = [
  'Anatomia', 'Fisiologia', 'Bioquímica', 'Histologia', 'Embriologia', 'Microbiologia', 'Imunologia', 'Genética', 'Farmacologia',
  'Clínica Médica', 'Clínica Cirúrgica', 'Ginecologia & Obstetrícia', 'Pediatria', 'Psiquiatria', 'Dermatologia', 'Oftalmologia', 'Otorrinolaringologia', 'Medicina de Família/SUS',
  'Cardiologia', 'Neurologia', 'Pneumologia', 'Gastroenterologia', 'Endocrinologia', 'Nefrologia', 'Reumatologia', 'Hematologia', 'Infectologia', 'Cirurgia Geral',
  'Urgência e Emergência', 'Medicina Intensiva', 'Ortopedia', 'Neonatologia', 'Anestesiologia', 'Traumatologia-Ortopedia',
  'Patologia', 'Parasitologia', 'Semiologia', 'Epidemiologia',
  'Urologia', 'Geriatria', 'Radiologia',
  'Cirurgia Vascular', 'Neurocirurgia'
];

interface RawExtractedQuestion {
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

async function merge() {
  const tempFilePath = 'data/processed/temp_extracted.json';
  if (!fs.existsSync(tempFilePath)) {
    console.error(`Inexistente: ${tempFilePath}. Nenhum dado para fundir.`);
    process.exit(1);
  }

  const results: RawExtractedQuestion[] = JSON.parse(fs.readFileSync(tempFilePath, 'utf-8'));
  console.log(`Carregado: ${results.length} questões temporárias extraídas.`);

  // Ordenar as questões por id numérico
  results.sort((a, b) => {
    const numA = parseInt(a.id.split('_q')[1] || '0');
    const numB = parseInt(b.id.split('_q')[1] || '0');
    return numA - numB;
  });

  // Carregar as questões existentes do banco de dados
  const dbPath = 'data/processed/questions.ts';
  console.log(`Lendo base de dados existente em ${dbPath}...`);
  
  // Vamos usar tsx para importar e fundir com segurança
  const { ALL_QUESTIONS } = await import('../data/processed/questions');
  
  // Filtrar para remover duplicados antigos no caso de re-execução (por ID)
  const existingIds = new Set(ALL_QUESTIONS.map((q: any) => q.id));
  const newQuestionsAdded: RawExtractedQuestion[] = [];
  
  for (const q of results) {
    if (!existingIds.has(q.id)) {
      newQuestionsAdded.push(q);
    } else {
      console.log(`[Duplicado] Questão de ID ${q.id} já existe no banco. Ignorando.`);
    }
  }
  
  const mergedQuestions = [...ALL_QUESTIONS, ...newQuestionsAdded];
  console.log(`Fundindo banco de dados. Questões anteriores: ${ALL_QUESTIONS.length}, Adicionadas: ${newQuestionsAdded.length}, Total final: ${mergedQuestions.length}`);

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
  console.log(`Banco de dados atualizado com sucesso em ${dbPath}!`);

  // Também precisamos recriar o arquivo consolidado src/questions.ts para garantir que as alterações reflitam imediatamente na UI!
  const srcQuestionsPath = 'src/questions.ts';
  console.log(`Atualizando ${srcQuestionsPath} para sincronização...`);
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
  fs.writeFileSync(srcQuestionsPath, srcQuestionsContent, 'utf-8');
  console.log(`Sincronização do frontend em ${srcQuestionsPath} concluída com sucesso!`);
  
  // Limpar arquivo de cache para evitar repetição acidental posteriormente
  fs.unlinkSync(tempFilePath);
  console.log(`Arquivo temporário ${tempFilePath} excluído com sucesso.`);
}

merge().catch(err => {
  console.error('Falha fatal na fusão das questões:', err);
  process.exit(1);
});
