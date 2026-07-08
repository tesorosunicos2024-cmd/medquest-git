import * as fs from 'fs';
import * as path from 'path';

function trimAppQuestions() {
  const appPath = path.join(process.cwd(), 'src', 'App.tsx');
  if (!fs.existsSync(appPath)) {
    console.error('App.tsx not found!');
    return;
  }

  console.log('Reading App.tsx...');
  const content = fs.readFileSync(appPath, 'utf8');
  const lines = content.split('\n');

  let startIndex = -1;
  let endIndex = -1;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('const QUESTIONS: Question[] = [')) {
      startIndex = i;
      break;
    }
  }

  if (startIndex === -1) {
    console.error('Could not find start of QUESTIONS array in App.tsx');
    return;
  }

  // Find the closing bracket '];' of this array block before QUESTIONS_ESTUDANTE
  for (let i = startIndex; i < lines.length; i++) {
    if (lines[i].trim().endsWith('];')) {
      // Look ahead up to 5 lines for QUESTIONS_ESTUDANTE
      let found = false;
      for (let j = 1; j <= 5; j++) {
        if (lines[i + j] && lines[i + j].includes('QUESTIONS_ESTUDANTE')) {
          found = true;
          break;
        }
      }
      if (found) {
        endIndex = i;
        break;
      }
    }
  }

  if (endIndex === -1) {
    console.error('Could not find end of QUESTIONS array in App.tsx');
    return;
  }

  console.log(`Found QUESTIONS block from line ${startIndex + 1} to ${endIndex + 1}. Trimming...`);

  const beforeBlock = lines.slice(0, startIndex);
  const afterBlock = lines.slice(endIndex + 1);

  // Re-assemble content with imported questions
  const replacement = 'const QUESTIONS: Question[] = ALL_QUESTIONS_IMPORTED;';
  
  // Find a good place to insert import (e.g., right after 'import { useState' or similar)
  let importInserted = false;
  const newBeforeBlock = [];
  for (const line of beforeBlock) {
    newBeforeBlock.push(line);
    if (!importInserted && line.startsWith('import ') && line.includes('react')) {
      newBeforeBlock.push('import { QUESTIONS as ALL_QUESTIONS_IMPORTED } from "./questions";');
      importInserted = true;
    }
  }

  if (!importInserted) {
    newBeforeBlock.unshift('import { QUESTIONS as ALL_QUESTIONS_IMPORTED } from "./questions";');
  }

  const finalContent = [...newBeforeBlock, replacement, ...afterBlock].join('\n');
  fs.writeFileSync(appPath, finalContent, 'utf8');
  console.log('Successfully trimmed App.tsx and imported questions!');
}

trimAppQuestions();
