import fs from 'fs';
import path from 'path';

// Let's create a bundle or script that extracts all items in QUESTIONS_RAW and QUESTIONS from App.tsx

const appText = fs.readFileSync(path.join(process.cwd(), 'src/App.tsx'), 'utf-8');

// Let's see what imports are spread at the end of QUESTIONS_RAW
const spreadMatches = appText.match(/\.\.\.\s*\(\s*([A-Za-z0-9_]+)/g) || [];
console.log('Spreads encontrados em App.tsx:');
const arraysSpread: string[] = [];
for (const m of spreadMatches) {
  const name = m.replace('...', '').replace('(', '').trim();
  if (name.includes('QUESTION') || name.includes('EXTRA') || name.includes('CERMAM') || name.includes('INTERNATO')) {
    arraysSpread.push(name);
  }
}
console.log(arraysSpread);
