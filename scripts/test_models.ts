import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function tryModel(modelName: string) {
  try {
    console.log(`Testing model: ${modelName}...`);
    const resp = await ai.models.generateContent({
      model: modelName,
      contents: 'Olá, responda "OK" se estiver funcionando.'
    });
    console.log(`Model ${modelName} returned: ${resp.text?.trim()}`);
    return true;
  } catch (err: any) {
    console.log(`Model ${modelName} failed: ${err.message}`);
    return false;
  }
}

async function run() {
  const models = [
    'gemini-2.5-flash',
    'gemini-2.5-pro',
    'gemini-1.5-flash',
    'gemini-1.5-pro'
  ];
  for (const m of models) {
    await tryModel(m);
  }
}

run();
