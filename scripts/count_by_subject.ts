import * as fs from 'fs';
import * as path from 'path';

interface Question {
  cycle: string;
  subject: string;
}

function count() {
  const jsonPath = path.join(process.cwd(), 'data', 'processed', 'all_questions.json');
  if (!fs.existsSync(jsonPath)) {
    console.log('No all_questions.json found.');
    return;
  }

  const questions: Question[] = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  console.log(`Total questions: ${questions.length}`);

  const counts: Record<string, Record<string, number>> = {};
  for (const q of questions) {
    const cycle = q.cycle || 'Unknown Cycle';
    const subject = q.subject || 'Unknown Subject';
    if (!counts[cycle]) counts[cycle] = {};
    counts[cycle][subject] = (counts[cycle][subject] || 0) + 1;
  }

  console.log('\n--- QUESTIONS BY CYCLE AND SUBJECT ---');
  for (const cycle of Object.keys(counts).sort()) {
    console.log(`\n[${cycle}]`);
    for (const subject of Object.keys(counts[cycle]).sort()) {
      console.log(`  - ${subject}: ${counts[cycle][subject]} questions`);
    }
  }
}

count();
