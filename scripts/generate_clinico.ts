import { GoogleGenAI, Type } from '@google/genai';
import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const SUBJECTS = [
  'Ginecologia & Obstetrícia', 'Pediatria', 'Medicina de Família/SUS', 'Cirurgia Geral',
  'Cardiologia', 'Pneumologia', 'Gastroenterologia', 'Infectologia', 'Endocrinologia',
  'Clínica Médica', 'Clínica Cirúrgica', 'Psiquiatria', 'Reumatologia', 'Nefrologia',
  'Neurologia', 'Hematologia', 'Dermatologia', 'Oftalmologia', 'Otorrinolaringologia',
  'Ortopedia', 'Urologia', 'Geriatria', 'Radiologia'
];

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
  difficulty: string;
}

async function main() {
  console.log('=== INICIANDO GERADOR DE QUESTÕES DO CICLO CLÍNICO ===');

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('ERRO CRÍTICO: GEMINI_API_KEY não encontrada no ambiente!');
    process.exit(1);
  }

  const ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  const jsonPath = path.join(process.cwd(), 'data', 'processed', 'all_questions.json');
  const tsPath = path.join(process.cwd(), 'data', 'processed', 'questions.ts');

  // Load existing questions
  let questions: Question[] = [];
  if (fs.existsSync(jsonPath)) {
    try {
      const data = fs.readFileSync(jsonPath, 'utf8');
      questions = JSON.parse(data);
      console.log(`Carregadas ${questions.length} questões existentes do banco de dados.`);
    } catch (err: any) {
      console.error(`Erro ao ler o arquivo JSON existente: ${err.message}. Iniciando banco vazio.`);
    }
  } else {
    console.log('Nenhum banco de dados existente encontrado. Criando novo banco de dados.');
  }

  // Count existing questions per subject in "Ciclo Clínico"
  const counts: Record<string, number> = {};
  for (const subj of SUBJECTS) {
    counts[subj] = questions.filter(q => q.cycle === 'Ciclo Clínico' && q.subject === subj).length;
    console.log(`- ${subj}: ${counts[subj]} questões existentes.`);
  }

  // Generate questions for each subject
  for (const subj of SUBJECTS) {
    const existingCount = counts[subj];
    const targetCount = 100;
    const needed = targetCount - existingCount;

    if (needed <= 0) {
      console.log(`[${subj}] Já possui ${existingCount} questões (meta de ${targetCount} atingida). Pulando...`);
      continue;
    }

    console.log(`\n[${subj}] Iniciando geração de ${needed} questões para atingir a meta de ${targetCount}...`);

    let generatedSoFar = 0;
    const batchSize = 15;

    while (generatedSoFar < needed) {
      const currentBatchCount = Math.min(batchSize, needed - generatedSoFar);
      console.log(`  -> Gerando lote de ${currentBatchCount} questões (progresso: ${generatedSoFar}/${needed})...`);

      const prompt = `Você é um professor renomado de medicina especialista em elaborar questões de alto nível para provas de residência médica (como ENARE, USP, UNICAMP, SUS-SP) adaptadas para o Ciclo Clínico da graduação de medicina.
Gere um array JSON de exatamente ${currentBatchCount} questões inéditas de nível de dificuldade MEDIANO para estudantes de medicina na matéria "${subj}".
As questões devem abordar conceitos importantes do Ciclo Clínico da graduação médica, com foco em diagnóstico, tratamento, conduta médica e exames complementares, mas com o rigor técnico e profundidade de questões de residência.

Cada questão deve ser contextualizada clinicamente com um caso clínico completo e realista (apresentação clínica, exame físico relevante, evolução ou resultados de exames, etc.).
Evite repetir temas idênticos. Forneça explicações detalhadas em português para cada alternativa.

Retorne APENAS um array JSON contendo objetos com os seguintes campos exatos:
- subsubject (string): o sub-tema específico da matéria (ex: para Cardiologia, "Insuficiência Cardíaca", "Infarto Agudo do Miocárdio", etc.)
- enunciado (string): o texto da questão com contexto clínico de caso clínico realista, claro e cientificamente preciso, em português.
- alternatives (array de strings): exatamente 4 alternativas plausíveis de múltipla escolha.
- correctIndex (number): o índice de 0 a 3 da alternativa correta.
- explanation (string): uma justificativa médica detalhada em português, explicando por que a alternativa correta está certa e as outras 3 estão incorretas.
`;

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
                  subsubject: { type: Type.STRING },
                  enunciado: { type: Type.STRING },
                  alternatives: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  },
                  correctIndex: { type: Type.INTEGER },
                  explanation: { type: Type.STRING }
                },
                required: ['subsubject', 'enunciado', 'alternatives', 'correctIndex', 'explanation']
              }
            }
          }
        });

        const rawText = response.text;
        if (!rawText) {
          throw new Error('Resposta vazia da API do Gemini.');
        }

        const items = JSON.parse(rawText.trim());
        if (!Array.isArray(items)) {
          throw new Error('A resposta gerada não é um array JSON válido.');
        }

        console.log(`  -> Lote recebido com ${items.length} itens. Processando e inserindo no banco...`);

        const newBatchQuestions: Question[] = items.map((item: any, idx: number) => {
          // Unique ID calculation
          const idNum = existingCount + generatedSoFar + idx + 1;
          const sanitizedSubj = subj.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9_]/g, '_');
          const id = `clinico_${sanitizedSubj}_${idNum}`;

          return {
            id,
            cycle: 'Ciclo Clínico',
            subject: subj,
            subsubject: item.subsubject || '',
            banca: 'Trilha Estudante',
            year: 2026,
            enunciado: item.enunciado,
            alternatives: item.alternatives,
            correctIndex: item.correctIndex,
            explanation: item.explanation,
            difficulty: 'medium'
          };
        });

        // Add to main list
        questions.push(...newBatchQuestions);
        generatedSoFar += newBatchQuestions.length;

        // Incremental save
        saveDatabase(questions, jsonPath, tsPath);
        console.log(`  -> Lote de ${newBatchQuestions.length} questões salvo com sucesso! (Total na matéria: ${existingCount + generatedSoFar})`);

      } catch (err: any) {
        console.error(`  [ERRO] Falha ao gerar ou salvar o lote: ${err.message}. Tentando novamente em 5 segundos...`);
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }
  }

  console.log('\n=== GERAÇÃO CONCLUÍDA COM SUCESSO! ===');
  console.log(`Total final de questões no banco de dados: ${questions.length}`);
}

function saveDatabase(questions: Question[], jsonPath: string, tsPath: string) {
  // Save as JSON
  fs.writeFileSync(jsonPath, JSON.stringify(questions, null, 2), 'utf-8');

  // Save as TS Module
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

export const ALL_QUESTIONS: Question[] = ${JSON.stringify(questions, null, 2)} as any;
`;

  fs.writeFileSync(tsPath, updatedFileContent, 'utf-8');
}

main().catch(err => {
  console.error('Erro fatal no script principal:', err);
  process.exit(1);
});
