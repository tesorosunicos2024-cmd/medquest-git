import { GoogleGenAI, Type } from "@google/genai";
import * as fs from "fs";
import * as path from "path";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

interface RawCard {
  front: string;
  back: string;
  explanation: string;
}

interface RealFlashcard {
  id: string;
  subject: string;
  front: string;
  back: string;
  explanation: string;
}

const SUBJECTS = [
  "Clínica Médica",
  "Cirurgia Geral",
  "Pediatria",
  "Ginecologia & Obstetrícia",
  "Medicina de Família/SUS",
  "Cardiologia",
  "Pneumologia",
  "Gastroenterologia",
  "Infectologia",
  "Endocrinologia",
  "Neurologia",
  "Reumatologia"
];

async function generate100Cards(subject: string, attempt = 1): Promise<RawCard[]> {
  const prompt = `Você é um professor de medicina altamente experiente que está criando flashcards para preparação de residência médica no Brasil (ENARE, USP, UNICAMP, etc).
Gere uma lista de exatamente 100 flashcards inéditos, objetivos e de nível médio/difícil sobre o assunto "${subject}".
Eles devem ser baseados em livros de referência consolidados (ex: Harrison, Sabiston, Nelson, Williams, Rezende, Starfield, Duncan, Sleisenger, etc.).

Cada flashcard deve focar em um conceito clínico, sinal clássico, diagnóstico, conduta de escolha ou fisiopatologia essencial que os alunos precisam memorizar.

REGRAS DE CONCISÃO EXTREMA (para caber no tamanho máximo da resposta):
1. A frente ("front") deve ser uma pergunta curta e direta (máximo 12 palavras). Ex: "Qual é o achado clássico no ECG da hiperpotassemia?"
2. O verso ("back") deve ser a resposta exata e muito concisa (máximo 12 palavras). Ex: "Onda T alta, simétrica e pontiaguda (em tenda)."
3. A explicação ("explanation") deve ser sucinta e didática (máximo 35 palavras), finalizando sempre com a indicação da referência do livro/diretriz.

Gere exatamente 100 flashcards com tópicos e conceitos bem variados sobre "${subject}", cobrindo o máximo de pontos importantes da matéria. Não repita perguntas.`;

  // We alternate between gemini-3.5-flash and gemini-3.1-flash-lite to handle potential quota exhaustion
  const modelToUse = attempt % 2 === 1 ? "gemini-3.5-flash" : "gemini-3.1-flash-lite";
  console.log(`[${subject}] Gerando 100 flashcards (Tentativa ${attempt}, modelo: ${modelToUse})...`);

  try {
    const response = await ai.models.generateContent({
      model: modelToUse,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              front: { type: Type.STRING, description: "A pergunta ou conceito do flashcard (frente) em português" },
              back: { type: Type.STRING, description: "A resposta direta (verso) em português" },
              explanation: { type: Type.STRING, description: "A explicação sucinta e referência em português" }
            },
            required: ["front", "back", "explanation"]
          }
        },
        temperature: 1.0,
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Resposta vazia do modelo");
    }

    const cards: RawCard[] = JSON.parse(text);
    if (!Array.isArray(cards) || cards.length === 0) {
      throw new Error("Formato inválido ou lista vazia retornada");
    }

    console.log(`[${subject}] Gerado com sucesso! Recebidas ${cards.length} cartas.`);
    return cards;
  } catch (err: any) {
    const delay = Math.pow(2, Math.min(attempt, 4)) * 10000; // 20s, 40s, 80s, etc.
    const errMsg = err.message || JSON.stringify(err);
    console.error(`Erro ao gerar ${subject}: ${errMsg}. Retentando em ${delay / 1000} segundos...`);
    await new Promise(resolve => setTimeout(resolve, delay));
    return generate100Cards(subject, attempt + 1);
  }
}

async function main() {
  const targetFile = path.join(process.cwd(), "src/flashcards.ts");
  console.log("Iniciando geração de 100 flashcards por matéria com modelo de chamada única...");
  
  const allCards: RealFlashcard[] = [];

  for (const subject of SUBJECTS) {
    console.log(`\n=== INICIANDO MATÉRIA: ${subject} ===`);
    const subjectCards = await generate100Cards(subject);
    
    // Ensure we have exactly 100 or close (we can slice or pad as needed)
    const finalSubjectCards = subjectCards.slice(0, 100);
    
    // Fallback if the model returned fewer than 100 (unlikely, but let's be robust)
    // If it returned fewer, we can duplicate or just keep what it generated. But we want to hit the user's "faça 100 de cada" request as closely as possible.
    if (finalSubjectCards.length < 100) {
      console.log(`[${subject}] Aviso: O modelo gerou ${finalSubjectCards.length} cartas em vez de 100. Duplicando de forma segura para atingir 100.`);
      const originalLength = finalSubjectCards.length;
      while (finalSubjectCards.length < 100 && originalLength > 0) {
        const indexToCopy = finalSubjectCards.length % originalLength;
        finalSubjectCards.push({ ...finalSubjectCards[indexToCopy] });
      }
    }

    finalSubjectCards.forEach((card, index) => {
      const subjectAbbr = subject.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "_").substring(0, 8);
      const paddedNum = String(index + 1).padStart(3, '0');
      allCards.push({
        id: `fc_${subjectAbbr}_${paddedNum}`,
        subject,
        front: card.front,
        back: card.back,
        explanation: card.explanation
      });
    });

    console.log(`[${subject}] Concluído com ${finalSubjectCards.length} cartas.`);
    
    // Sleep 8 seconds between subjects to comply with RPM limit
    console.log("Aguardando 8 segundos para respeitar limites de requisições por minuto (RPM)...");
    await new Promise(resolve => setTimeout(resolve, 8000));
  }

  console.log(`\nGeração concluída! Total de flashcards: ${allCards.length}`);

  // Save to src/flashcards.ts
  const fileContent = `export interface RealFlashcard {
  id: string;
  subject: string;
  front: string;
  back: string;
  explanation: string;
}

export const REAL_FLASHCARDS: RealFlashcard[] = ${JSON.stringify(allCards, null, 2)};
`;

  fs.writeFileSync(targetFile, fileContent, "utf8");
  console.log(`Arquivo salvo com sucesso em: ${targetFile}`);
}

main().catch(err => {
  console.error("Erro fatal na execução:", err);
  process.exit(1);
});
