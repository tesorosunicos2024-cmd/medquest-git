import { GoogleGenAI, Type } from "@google/genai";
import * as fs from "fs";
import * as path from "path";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("GEMINI_API_KEY is not defined in environment.");
  process.exit(1);
}

const ai = new GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

const BANCAS_CONFIG = [
  { name: "ENARE", optionsCount: 5, prefix: "enare_extra_100", varName: "ENARE_EXTRA_100" },
  { name: "CERMAM", optionsCount: 5, prefix: "cermam_extra_100", varName: "CERMAM_EXTRA_100" },
  { name: "UNESP", optionsCount: 5, prefix: "unesp_extra_100", varName: "UNESP_EXTRA_100" },
  { name: "IAMSPE", optionsCount: 5, prefix: "iamspe_extra_100", varName: "IAMSPE_EXTRA_100" },
  { name: "UNICAMP", optionsCount: 4, prefix: "unicamp_extra_100", varName: "UNICAMP_EXTRA_100" },
  { name: "UFPR", optionsCount: 5, prefix: "ufpr_extra_100", varName: "UFPR_EXTRA_100" },
  { name: "UFRJ", optionsCount: 5, prefix: "ufrj_extra_100", varName: "UFRJ_EXTRA_100" },
  { name: "HCPA", optionsCount: 5, prefix: "hcpa_extra_100", varName: "HCPA_EXTRA_100" },
  { name: "PSU-MG", optionsCount: 4, prefix: "psu_mg_extra_100", varName: "PSU_MG_EXTRA_100" },
  { name: "AMRIGS", optionsCount: 5, prefix: "amrigs_extra_100", varName: "AMRIGS_EXTRA_100" },
  { name: "PUC-PR", optionsCount: 5, prefix: "puc_pr_extra_100", varName: "PUC_PR_EXTRA_100" },
  { name: "Einstein", optionsCount: 5, prefix: "einstein_extra_100", varName: "EINSTEIN_EXTRA_100" },
  { name: "UNIFESP", optionsCount: 5, prefix: "unifesp_extra_100", varName: "UNIFESP_EXTRA_100" },
  { name: "UFSC", optionsCount: 5, prefix: "ufsc_extra_100", varName: "UFSC_EXTRA_100" }
];

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const questionSchema = {
  type: Type.OBJECT,
  properties: {
    id: { type: Type.STRING, description: "Unique ID for the question, e.g. prefix_xxx" },
    cycle: { type: Type.STRING, description: "Must be 'Ciclo Clínico' or 'Internato'" },
    subject: { type: Type.STRING, description: "Must be one of: 'Clínica Médica', 'Cirurgia Geral', 'Pediatria', 'Ginecologia & Obstetrícia', 'Medicina de Família/SUS'" },
    subSubject: { type: Type.STRING, description: "Specific topic, e.g. 'Infarto Agudo do Miocárdio', 'Pneumonia', etc." },
    banca: { type: Type.STRING, description: "Must match the banca name exactly" },
    year: { type: Type.INTEGER, description: "Should be 2026" },
    text: { type: Type.STRING, description: "The high-quality question text (clinical case or direct question) in Portuguese." },
    options: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "Array of choice options in Portuguese."
    },
    correctIndex: { type: Type.INTEGER, description: "0-based index of the correct option in options array." },
    explanation: { type: Type.STRING, description: "Very concise clinical explanation (max 2 sentences) in Portuguese." },
    difficulty: { type: Type.STRING, description: "Must be 'easy', 'medium', or 'hard'" }
  },
  required: ["id", "cycle", "subject", "subSubject", "banca", "year", "text", "options", "correctIndex", "explanation", "difficulty"]
};

const batchSchema = {
  type: Type.ARRAY,
  items: questionSchema,
  description: "A batch of generated medical questions"
};

// Helper to load existing questions from the TS file
function loadExistingQuestions(filePath: string, varName: string): any[] {
  if (fs.existsSync(filePath)) {
    try {
      const content = fs.readFileSync(filePath, "utf8");
      const startMarker = " = [";
      let startIdx = content.indexOf(startMarker);
      if (startIdx !== -1) {
        startIdx += startMarker.length - 1; // position at "["
        let bracketCount = 0;
        let endIdx = -1;
        for (let i = startIdx; i < content.length; i++) {
          if (content[i] === "[") bracketCount++;
          else if (content[i] === "]") bracketCount--;
          
          if (bracketCount === 0) {
            endIdx = i;
            break;
          }
        }
        if (endIdx !== -1) {
          const arrayStr = content.slice(startIdx, endIdx + 1);
          return new Function(`return ${arrayStr}`)();
        }
      }
    } catch (e) {
      console.warn(`Could not parse existing file ${filePath}:`, e);
    }
  }
  return [];
}

function saveQuestions(filePath: string, varName: string, questions: any[]) {
  const fileContent = `export const ${varName}: any[] = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(filePath, fileContent, "utf8");
}

async function generateBancaQuestions(banca: string, optionsCount: number, prefix: string, startIndex: number, count: number, useFallbackModel = false) {
  const model = useFallbackModel ? "gemini-flash-latest" : "gemini-3.1-flash-lite";
  const prompt = `Você é um renomado professor de medicina no Brasil especializado em elaborar questões para provas de Residência Médica para a banca ${banca}.
Gere um lote de exatamente ${count} novas questões médicas originais em Português no formato JSON para a banca ${banca}.

Regras cruciais:
1. ID: Cada questão deve ter um ID sequencial único começando de "${prefix}_${String(startIndex).padStart(3, '0')}".
2. Opções: Forneça exatamente ${optionsCount} opções por questão.
3. Disciplinas (subject): Distribua as questões de forma equilibrada pelas seguintes áreas da residência brasileira: "Clínica Médica", "Cirurgia Geral", "Pediatria", "Ginecologia & Obstetrícia", "Medicina de Família/SUS".
4. Ciclo (cycle): Deve ser 'Ciclo Clínico' ou 'Internato'.
5. Qualidade: Escreva enunciados ricos em detalhes (casos clínicos clássicos condizentes com a tradição de provas da banca ${banca}).
6. Explicação (explanation): Forneça uma justificativa didática curta (de no máximo 2 frases) em português.
7. Evite repetições de casos clássicos de forma idêntica. Crie cenários clínicos modernos, desafiadores e diversificados.`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: batchSchema,
        temperature: 0.85,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("Empty response from Gemini API");
    }

    const questions = JSON.parse(text.trim());
    return questions;
  } catch (error) {
    console.error(`Error generating batch for ${banca} with model ${model} starting at index ${startIndex}:`, error);
    throw error;
  }
}

async function main() {
  console.log("Starting optimized medical question generation with parallel batches...");

  for (const config of BANCAS_CONFIG) {
    const outputFilename = `src/${config.prefix}.ts`;
    const varName = config.varName;

    console.log(`\n==============================================`);
    console.log(`Checking questions for banca: ${config.name}`);
    console.log(`==============================================`);

    const existingQuestions = loadExistingQuestions(outputFilename, varName);
    console.log(`Found ${existingQuestions.length} existing questions in ${outputFilename}.`);

    if (existingQuestions.length >= 100) {
      console.log(`Banca ${config.name} already has ${existingQuestions.length} questions. Skipping...`);
      continue;
    }

    const questionsNeeded = 100 - existingQuestions.length;
    console.log(`Generating remaining ${questionsNeeded} questions for ${config.name}...`);

    const batchSize = 50;
    const totalBatches = Math.ceil(questionsNeeded / batchSize);
    
    const batchPromises = [];
    
    for (let b = 0; b < totalBatches; b++) {
      const startIdx = existingQuestions.length + b * batchSize + 1;
      const count = Math.min(batchSize, 100 - (existingQuestions.length + b * batchSize));
      
      console.log(`Queueing batch ${b + 1}/${totalBatches} for ${config.name}: ${count} questions starting at index ${startIdx}...`);
      
      batchPromises.push((async () => {
        let success = false;
        let retries = 4;
        let backoffMs = 4000;
        let useFallback = false;
        
        while (!success && retries > 0) {
          try {
            const batchQuestions = await generateBancaQuestions(
              config.name,
              config.optionsCount,
              config.prefix,
              startIdx,
              count,
              useFallback
            );
            if (Array.isArray(batchQuestions) && batchQuestions.length > 0) {
              return batchQuestions;
            }
            retries--;
          } catch (e) {
            retries--;
            useFallback = true;
            if (retries > 0) {
              await sleep(backoffMs);
              backoffMs *= 2;
            }
          }
        }
        throw new Error(`Failed to generate batch starting at ${startIdx} for ${config.name}`);
      })());
    }

    try {
      const results = await Promise.all(batchPromises);
      for (const res of results) {
        existingQuestions.push(...res);
      }
      
      // Enforce clean sequential IDs like PREFIX_001 to PREFIX_100
      existingQuestions.forEach((q, index) => {
        q.id = `${config.prefix}_${String(index + 1).padStart(3, '0')}`;
      });
      
      saveQuestions(outputFilename, varName, existingQuestions);
      console.log(`Successfully generated and saved all questions for ${config.name}. Total now: ${existingQuestions.length}/100.`);
    } catch (err: any) {
      console.error(`Error in parallel generation for ${config.name}:`, err.message);
      process.exit(1);
    }

    await sleep(2500);
  }

  console.log("\n==============================================");
  console.log("All questions for all 14 bancas generated successfully!");
  console.log("==============================================");
}

main();
