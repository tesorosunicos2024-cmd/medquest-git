import * as fs from 'fs';

try {
  const fileContent = fs.readFileSync('src/ufsc_questions.ts', 'utf-8');
  const jsonMatch = fileContent.match(/export const UFSC_QUESTIONS: any\[] = ([\s\S]*?);/);
  if (jsonMatch && jsonMatch[1]) {
    const jsonStr = jsonMatch[1].trim();
    console.log('Length of jsonStr:', jsonStr.length);
    console.log('Substr around 7228:', jsonStr.substring(7200, 7260));
    JSON.parse(jsonStr);
  } else {
    console.log('No regex match!');
  }
} catch (err: any) {
  console.error('Error:', err.message);
}
