import { GoogleGenAI, Type } from "@google/genai";
import * as fs from "fs";
import * as path from "path";

// Initialize Gemini AI
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
  { name: "CERMAM", optionsCount: 5, prefix: "cermam_new" },
  { name: "ENARE", optionsCount: 5, prefix: "enare_new" },
  { name: "UNESP", optionsCount: 5, prefix: "unesp_new" },
  { name: "UNICAMP", optionsCount: 4, prefix: "unicamp_new" },
  { name: "IAMSPE", optionsCount: 5, prefix: "iamspe_new" }
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
    explanation: { type: Type.STRING, description: "Detailed clinical explanation in Portuguese." },
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
      // Resolve absolute path for require
      const absPath = path.resolve(filePath);
      // Clear require cache in case file was modified
      delete require.cache[require.resolve(absPath)];
      const mod = require(absPath);
      if (mod && mod[varName] && Array.isArray(mod[varName])) {
        return mod[varName];
      }
    } catch (e) {
      // Fallback to reading file and extracting the JSON array block cleanly
      try {
        const content = fs.readFileSync(filePath, "utf8");
        // We find the index of " = [" and find the corresponding closing bracket by balancing
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
            return JSON.parse(arrayStr);
          }
        }
      } catch (innerErr) {
        console.warn(`Could not parse existing file ${filePath} using fallback parsing. Error:`, innerErr);
      }
    }
  }
  return [];
}

// Helper to save questions back into the TS file
function saveQuestions(filePath: string, varName: string, questions: any[], bancaName: string) {
  const fileContent = `// Novas questões geradas por IA com base na banca ${bancaName}
// Atualizado em: ${new Date().toISOString()}

export const ${varName}: any[] = ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync(filePath, fileContent, "utf8");
}

async function generateBancaQuestions(banca: string, optionsCount: number, prefix: string, startIndex: number, count: number, useFallbackModel = false) {
  const model = useFallbackModel ? "gemini-3.1-flash-lite" : "gemini-3.5-flash";
  const prompt = `Você é um renomado professor de medicina no Brasil especializado em elaborar questões para provas de Residência Médica para a banca ${banca}.
Gere um lote de exatamente ${count} novas questões médicas originais em Português no formato JSON para a banca ${banca}.

Regras cruciais:
1. ID: Cada questão deve ter um ID sequencial único começando de "${prefix}_${String(startIndex).padStart(3, '0')}".
2. Opções: Forneça exatamente ${optionsCount} opções por questão.
3. Disciplinas (subject): Distribua as questões pelas seguintes áreas da residência brasileira: "Clínica Médica", "Cirurgia Geral", "Pediatria", "Ginecologia & Obstetrícia", "Medicina de Família/SUS".
4. Ciclo (cycle): Deve ser 'Ciclo Clínico' ou 'Internato'.
5. Qualidade: Escreva enunciados ricos em detalhes (casos clínicos clássicos condizentes com a tradição de provas da banca ${banca}).
6. Explicação (explanation): Forneça uma justificativa didática curta e robusta em português.
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
  console.log("Starting high-quality medical question generation with auto-resume & incremental savings...");

  for (const config of BANCAS_CONFIG) {
    const outputFilename = `src/${config.prefix}_questions.ts`;
    const varName = `${config.name}_NEW_QUESTIONS`;

    console.log(`\n==============================================`);
    console.log(`Checking questions for banca: ${config.name}`);
    console.log(`==============================================`);

    // Load existing questions
    const existingQuestions = loadExistingQuestions(outputFilename, varName);
    console.log(`Found ${existingQuestions.length} existing questions in ${outputFilename}.`);

    if (existingQuestions.length >= 100) {
      console.log(`Banca ${config.name} already has ${existingQuestions.length} questions (>= 100). Skipping...`);
      continue;
    }

    const questionsNeeded = 100 - existingQuestions.length;
    console.log(`Generating remaining ${questionsNeeded} questions for ${config.name}...`);

    const questionsPerBatch = 10;
    const totalBatchesNeeded = Math.ceil(questionsNeeded / questionsPerBatch);

    for (let batch = 1; batch <= totalBatchesNeeded; batch++) {
      const currentCount = existingQuestions.length;
      const startIndex = currentCount + 1;
      const batchCount = Math.min(questionsPerBatch, 100 - currentCount);

      console.log(`Generating batch ${batch}/${totalBatchesNeeded} of ${batchCount} questions starting at index ${startIndex} for ${config.name}...`);

      let success = false;
      let retries = 5;
      let backoffMs = 4000;
      let useFallback = false;

      while (!success && retries > 0) {
        try {
          const batchQuestions = await generateBancaQuestions(
            config.name,
            config.optionsCount,
            config.prefix,
            startIndex,
            batchCount,
            useFallback
          );

          if (Array.isArray(batchQuestions) && batchQuestions.length > 0) {
            existingQuestions.push(...batchQuestions);
            
            // Save immediately
            saveQuestions(outputFilename, varName, existingQuestions, config.name);
            console.log(`Successfully generated and saved ${batchQuestions.length} questions. Total now: ${existingQuestions.length}/100.`);
            
            success = true;
          } else {
            console.warn(`Generated batch was empty. Retrying...`);
            retries--;
          }
        } catch (error) {
          retries--;
          if (!useFallback) {
            console.warn(`Activating fallback model 'gemini-3.1-flash-lite' due to error.`);
            useFallback = true;
          }
          if (retries > 0) {
            console.warn(`Retrying in ${backoffMs / 1000} seconds... (${retries} retries left)`);
            await sleep(backoffMs);
            backoffMs *= 2; // Exponential backoff
          }
        }
      }

      if (!success) {
        console.error(`FAILED to generate batch starting at ${startIndex} for ${config.name} after multiple attempts.`);
        process.exit(1);
      }

      await sleep(1500);
    }

    console.log(`\nSuccessfully finished 100 questions for ${config.name}!`);
  }

  console.log("\n==============================================");
  console.log("All questions generated successfully!");
  console.log("==============================================");
}

main();
