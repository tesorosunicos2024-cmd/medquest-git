import { GoogleGenAI } from '@google/genai';
import * as fs from 'fs';

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function inspect(filePath: string) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  console.log(`Inspecting ${filePath}...`);
  const data = fs.readFileSync(filePath).toString('base64');
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { inlineData: { mimeType: 'application/pdf', data } },
        'How many questions are in this medical residency exam PDF? Please list the question numbers and what subjects they cover briefly. Answer in Portuguese.'
      ]
    });
    console.log(`--- Result for ${filePath} ---`);
    console.log(response.text);
    console.log('-----------------------------\n');
  } catch (error: any) {
    console.error(`Error inspecting ${filePath}:`, error.message);
  }
}

async function run() {
  await inspect('Questão 1 UFSC - SC - 2010 - R3 - CIRURGIA.pdf');
  await inspect('UFSC - SC - 2011 - R1 - 1.pdf');
  await inspect('UFSC - SC - 2014 - R1 - 1.pdf');
}

run();
