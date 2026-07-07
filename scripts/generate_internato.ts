import { GoogleGenAI, Type } from '@google/genai';
import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const SUBJECTS = [
  'Urgência e Emergência',
  'Neonatologia',
  'Cirurgia Vascular',
  'Medicina Intensiva',
  'Anestesiologia',
  'Neurocirurgia'
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
  console.log('=== INICIANDO GERADOR DE QUESTÕES DO INTERNATO ===');

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

  // Define original counts (before we started generating any questions today)
  const originalCounts: Record<string, number> = {
    'Urgência e Emergência': 17,
    'Neonatologia': 13,
    'Cirurgia Vascular': 9,
    'Medicina Intensiva': 4,
    'Anestesiologia': 2,
    'Neurocirurgia': 1
  };

  for (const subj of SUBJECTS) {
    const currentCount = questions.filter(q => q.cycle === 'Internato' && q.subject === subj).length;
    const originalCount = originalCounts[subj] || 0;
    const targetCount = originalCount + 100;
    const needed = targetCount - currentCount;

    if (needed <= 0) {
      console.log(`\n[${subj}] Já possui ${currentCount} questões (meta de ${targetCount} atingida). Pulando...`);
      continue;
    }

    console.log(`\n[${subj}] Atualmente possui ${currentCount} questões. Iniciando geração de ${needed} questões para atingir a meta de ${targetCount}...`);

    let generatedSoFar = 0;
    const batchSize = 15; // standard safe size

    while (generatedSoFar < needed) {
      const currentBatchCount = Math.min(batchSize, needed - generatedSoFar);
      console.log(`  -> Gerando lote de ${currentBatchCount} questões (progresso do lote atual: ${generatedSoFar}/${needed})...`);

      const prompt = `Você é um professor renomado de medicina especialista em elaborar questões de alto nível para provas de residência médica (como ENARE, USP, UNICAMP, SUS-SP) adaptadas para o Internato da graduação de medicina.
Gere um array JSON de exatamente ${currentBatchCount} questões inéditas de nível de dificuldade de INTERNATO (alto nível prático e clínico, raciocínio diagnóstico e tomada de conduta imediata) para estudantes de medicina na matéria de Internato: "${subj}".

As questões devem abordar casos clínicos realistas, complexos e detalhados com foco em raciocínio prático de enfermaria, pronto-socorro ou unidade de terapia intensiva, condutas imediatas, prescrição, exames complementares específicos de urgência/internação e complicações.
Evite repetir temas idênticos. 

CRÍTICO: O usuário exigiu comentários detalhados tanto para o acerto quanto para os erros.
Para cada questão, no campo "explanation", você deve fornecer uma explicação médica detalhada e didática em português estruturada da seguinte forma:
- Por que a alternativa correta é a correta.
- Por que cada uma das outras alternativas incorretas está incorreta, explicando o erro conceitual ou clínico envolvido nelas.
Isso ajudará o estudante a entender perfeitamente por que acertou ou errou.

Retorne APENAS um array JSON contendo objetos com os seguintes campos exatos:
- subsubject (string): o sub-tema específico da matéria (ex: para Urgência, "Sepse", "Tromboembolismo Pulmonar", "Cetoacidose Diabética"; para Neonatologia, "Asfixia Neonatal", "Sepsis Neonatal Precoce", etc.)
- enunciado (string): o texto da questão com contexto clínico completo, realista e cientificamente preciso, em português.
- alternatives (array de strings): exatamente 4 alternativas plausíveis de múltipla escolha.
- correctIndex (number): o índice de 0 a 3 da alternativa correta.
- explanation (string): a justificativa médica detalhada detalhando os comentários para cada uma das alternativas (correta e incorretas) em português.
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
          const idNum = currentCount + generatedSoFar + idx + 1;
          const sanitizedSubj = subj.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9_]/g, '_');
          const id = `internato_${sanitizedSubj}_${idNum}`;

          return {
            id,
            cycle: 'Internato',
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
        console.log(`  -> Lote de ${newBatchQuestions.length} questões salvo com sucesso! (Novas adicionadas nesta matéria: ${generatedSoFar}/${needed})`);

        // Sleep for 2.5 seconds to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 2500));

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
