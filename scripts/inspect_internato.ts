import * as fs from 'fs';
import * as path from 'path';

const jsonPath = path.join(process.cwd(), 'data', 'processed', 'all_questions.json');
if (fs.existsSync(jsonPath)) {
  const questions = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const internatoQs = questions.filter((q: any) => q.cycle === 'Internato');
  console.log(`Found ${internatoQs.length} existing Internato questions.`);
  if (internatoQs.length > 0) {
    console.log('Sample question:', JSON.stringify(internatoQs[0], null, 2));
    console.log('Sample 2:', JSON.stringify(internatoQs[internatoQs.length - 1], null, 2));
    const idList = internatoQs.map((q: any) => q.id);
    console.log('All existing IDs:', idList);
  }
} else {
  console.log('File not found:', jsonPath);
}
