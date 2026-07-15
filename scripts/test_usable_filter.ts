import * as fs from 'fs';
import { normalizeQuestion, isUsableQuestion } from '../src/questionNormalize';

function main() {
  const appContent = fs.readFileSync('src/App.tsx', 'utf8');
  // extract QUESTIONS_RAW lines or items. Actually, let's write a quick node script that does this.
  // Wait, let's parse QUESTIONS_RAW array in a simple way or let's import it if we compile it.
}
