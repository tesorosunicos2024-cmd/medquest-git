import { GoogleGenAI, Type } from '@google/genai';
import * as fs from 'fs';
import * as path from 'path';

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
});

const ALLOWED_SUBJECTS = [
  'Anatomia', 'Fisiologia', 'Bioquímica', 'Histologia', 'Embriologia', 'Microbiologia', 'Imunologia', 'Genética', 'Farmacologia',
  'Clínica Médica', 'Clínica Cirúrgica', 'Ginecologia & Obstetrícia', 'Pediatria', 'Psiquiatria', 'Dermatologia', 'Oftalmologia', 'Otorrinolaringologia', 'Medicina de Família/SUS',
  'Cardiologia', 'Neurologia', 'Pneumologia', 'Gastroenterologia', 'Endocrinologia', 'Nefrologia', 'Reumatologia', 'Hematologia', 'Infectologia', 'Cirurgia Geral',
  'Urgência e Emergência', 'Medicina Intensiva', 'Ortopedia', 'Neonatologia', 'Anestesiologia', 'Traumatologia-Ortopedia',
  'Patologia', 'Parasitologia', 'Semiologia', 'Epidemiologia',
  'Urologia', 'Geriatria', 'Radiologia',
  'Cirurgia Vascular', 'Neurocirurgia'
];

const pdfPath = 'Prova_CERMAM_AM_2014_R1.pdf';
const base64Data = fs.readFileSync(pdfPath).toString('base64');

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

async function extractBatch(startQ: number, endQ: number): Promise<RawExtractedQuestion[]> {
  console.log(`[Batch] Iniciando extração das questões ${startQ} a ${endQ}...`);
  const prompt = `Você é um especialista em educação médica e residência médica brasileira. 
A partir do PDF da prova de residência (CERMAM 2014 R1) em anexo, extraia estritamente e com precisão absoluta as questões de número ${startQ} a ${endQ}.

Para cada questão, preencha os seguintes campos no formato JSON estruturado seguindo o schema fornecido:
- "id": O ID deve ser gerado estritamente como "unesp_2014_q" seguido do número real da questão da prova (ex: "unesp_2014_q1", "unesp_2014_q22", etc.).
- "cycle": Defina fixo como "Ciclo Clínico".
- "banca": Defina fixo como "UNESP".
- "year": Defina fixo como 2014 (número inteiro).
- "enunciado": O enunciado completo da questão em português, limpo, completo e bem-formatado.
- "alternatives": Uma lista contendo as alternativas da questão (geralmente 4 ou 5). REMOVA prefixos de opção como "A) ", "B) ", "a) ", "b) ", " - " etc., deixando apenas o texto puro da alternativa de forma limpa.
- "correctIndex": O índice baseado em 0 da alternativa correta (0 para A, 1 para B, 2 para C, 3 para D, 4 para E).
- "explanation": Uma explicação médica profissional, bem redigida e concisa em português explicando por que esta alternativa está correta e por que as outras estão incorretas.
- "difficulty": Defina como "easy", "medium" ou "hard" com base na complexidade clínica da questão.
- "subject": Escolha a especialidade médica que mais se adequa ao assunto clínico da questão, selecionando estritamente uma das seguintes strings exatas: ${ALLOWED_SUBJECTS.join(', ')}. Se o assunto principal for genérico de clínica médica, use "Clínica Médica".
- "subsubject": Uma string curta e concisa representando o tema específico da questão (ex: "Diabetes Mellitus", "Sepse", "Apendicite", etc.).

Certifique-se de que a extração cubra exatamente todas as questões de ${startQ} a ${endQ}.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: [
        { inlineData: { mimeType: 'application/pdf', data: base64Data } },
        prompt
      ],
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

    const questions: RawExtractedQuestion[] = JSON.parse(response.text || '[]');
    console.log(`[Batch] Extraído com sucesso! Obtidas ${questions.length} questões para o intervalo ${startQ}-${endQ}.`);
    return questions;
  } catch (error: any) {
    console.error(`[Batch Error] Falha na extração de ${startQ}-${endQ}:`, error.message);
    throw error;
  }
}

async function main() {
  console.log('Iniciando o processo de extração de 100 questões do PDF CERMAM 2014 para a banca UNESP...');
  
  // Dividindo em 5 batches de 20 questões cada para garantir estabilidade e cobrir toda a prova sem atingir limites de tokens de saída
  const batches = [
    { start: 1, end: 20 },
    { start: 21, end: 40 },
    { start: 41, end: 60 },
    { start: 61, end: 80 },
    { start: 81, end: 100 }
  ];

  const results: RawExtractedQuestion[] = [];
  
  // Função para executar um batch com retries
  const executeWithRetry = async (batch: { start: number; end: number }) => {
    let retries = 3;
    while (retries > 0) {
      try {
        const questions = await extractBatch(batch.start, batch.end);
        const processedQs: RawExtractedQuestion[] = [];
        
        for (const q of questions) {
          // Validar Subject
          if (!ALLOWED_SUBJECTS.includes(q.subject)) {
            console.warn(`[Aviso] Matéria '${q.subject}' inválida para ID '${q.id}'. Mapeando para 'Clínica Médica'.`);
            q.subject = 'Clínica Médica';
          }
          
          // Validar Cycle
          if (q.cycle !== 'Ciclo Clínico') {
            q.cycle = 'Ciclo Clínico';
          }

          // Validar Banca
          q.banca = 'UNESP';
          
          // Limpar alternativas mais uma vez
          q.alternatives = q.alternatives.map(alt => {
            return alt.replace(/^[A-Ea-e]\)\s*/, '').trim();
          });

          processedQs.push(q);
        }
        return processedQs;
      } catch (err: any) {
        retries--;
        console.error(`Tentativa falhou para o batch ${batch.start}-${batch.end}: ${err.message}. Restam ${retries} tentativas.`);
        if (retries === 0) {
          throw new Error(`Batch ${batch.start}-${batch.end} falhou definitivamente após todas as tentativas.`);
        }
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
    }
    return [];
  };

  try {
    const allBatchResults = await Promise.all(batches.map(batch => executeWithRetry(batch)));
    for (const batchRes of allBatchResults) {
      results.push(...batchRes);
    }
  } catch (err: any) {
    console.error('Falha fatal em um ou mais batches concorrentes:', err.message);
    process.exit(1);
  }

  // Ordenar as questões por id numérico
  results.sort((a, b) => {
    const numA = parseInt(a.id.split('_q')[1] || '0');
    const numB = parseInt(b.id.split('_q')[1] || '0');
    return numA - numB;
  });

  console.log(`Extração concluída! Total extraído: ${results.length} questões.`);

  // Carregar as questões existentes do banco de dados
  const dbPath = 'data/processed/questions.ts';
  console.log(`Lendo base de dados existente em ${dbPath}...`);
  
  // Para evitar problemas de importação cíclica ou parsing complexo, vamos ler o conteúdo e acrescentar no array programaticamente.
  // Como ALL_QUESTIONS é exportado como array constante, podemos ler e substituir
  const dbContent = fs.readFileSync(dbPath, 'utf-8');
  
  // Vamos usar tsx para importar e fundir com segurança
  const { ALL_QUESTIONS } = require('../data/processed/questions');
  
  // Filtrar para remover duplicados antigos no caso de re-execução (por ID)
  const existingIds = new Set(ALL_QUESTIONS.map((q: any) => q.id));
  const newQuestionsAdded: RawExtractedQuestion[] = [];
  
  for (const q of results) {
    if (!existingIds.has(q.id)) {
      newQuestionsAdded.push(q);
    } else {
      console.log(`[Duplicado] Questão com ID ${q.id} já existe. Ignorando.`);
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
  // Vamos gerar o src/questions.ts que importa de data/processed/questions.ts
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
}

main().catch(err => {
  console.error('Falha fatal no script de extração:', err);
  process.exit(1);
});
