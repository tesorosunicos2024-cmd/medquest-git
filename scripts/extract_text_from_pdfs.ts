import * as fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

async function extractText(pdfPath: string, txtPath: string) {
  if (!fs.existsSync(pdfPath)) {
    console.log(`File not found: ${pdfPath}`);
    return;
  }
  console.log(`Extracting text from ${pdfPath}...`);
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    fs.writeFileSync(txtPath, data.text, 'utf-8');
    console.log(`Saved text to ${txtPath} (${data.text.length} chars, ${data.numpages} pages)`);
  } catch (err: any) {
    console.error(`Error extracting from ${pdfPath}:`, err.message);
  }
}

async function run() {
  await extractText('Questão 1 UFSC - SC - 2010 - R3 - CIRURGIA.pdf', 'ufsc_2010.txt');
  await extractText('UFSC - SC - 2011 - R1 - 1.pdf', 'ufsc_2011.txt');
  await extractText('UFSC - SC - 2014 - R1 - 1.pdf', 'ufsc_2014.txt');
  console.log('Extraction done!');
}

run();
