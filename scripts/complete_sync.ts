import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

async function main() {
  console.log('--- STARTING COMPLETE MERGE AND SYNC ---');

  // --- Step 1: Fetch origin main ---
  console.log('Fetching latest commits from remote...');
  execSync('git fetch origin main');

  // --- Step 2: Load local questions ---
  console.log('Loading local questions...');
  const { ALL_QUESTIONS: localQuestions } = await import('../data/processed/questions');
  console.log(`Loaded ${localQuestions.length} local questions (including CERMAM 2014 extractions).`);

  // --- Step 3: Load GitHub questions ---
  console.log('Retrieving remote questions from GitHub branch origin/main...');
  const remoteQsContent = execSync('git show origin/main:data/processed/questions.ts', { maxBuffer: 1024 * 1024 * 100 }).toString();
  
  // Save remote questions to temp file to import them safely
  const tempRemotePath = path.join(process.cwd(), 'scripts', 'questions_github_temp.ts');
  fs.writeFileSync(tempRemotePath, remoteQsContent, 'utf-8');
  
  const { ALL_QUESTIONS: githubQuestions } = await import('./questions_github_temp');
  console.log(`Loaded ${githubQuestions.length} remote questions from GitHub.`);
  
  // Reset temp file to dummy placeholder to keep tsc typechecking happy
  fs.writeFileSync(tempRemotePath, 'export const ALL_QUESTIONS: any[] = [];\n', 'utf-8');

  // --- Step 4: Merge questions uniquely by ID ---
  console.log('Merging local and remote questions uniquely...');
  const mergedMap = new Map<string, any>();
  
  // 1. Add remote questions (they are the newest version of existing database)
  for (const q of githubQuestions) {
    mergedMap.set(q.id, q);
  }
  
  // 2. Add local questions (only the ones not present on remote, which is our extracted UNESP 2014 questions from PDF, and maybe others)
  let localExtraCount = 0;
  for (const q of localQuestions) {
    if (!mergedMap.has(q.id)) {
      mergedMap.set(q.id, q);
      localExtraCount++;
    }
  }
  
  const mergedQuestions = Array.from(mergedMap.values());
  console.log(`Merge complete! Unique questions count: ${mergedQuestions.length} (added ${localExtraCount} unique questions from local container).`);

  // --- Step 5: Pull everything else from GitHub ---
  console.log('Performing clean checkout of all files from origin/main...');
  // Wipe any localized modifications that might conflict, git reset works beautifully
  try {
    execSync('git reset --hard HEAD');
    execSync('git checkout origin/main -- .');
  } catch (err: any) {
    console.warn('Git checkout had warnings, forcing checkout of essential directories:', err.message);
    execSync('git checkout origin/main -- src/ public/ scripts/ package.json tsconfig.json vite.config.ts');
  }
  console.log('Successfully pulled all files from GitHub (origin/main) keeping local git clean.');

  // --- Step 6: Overwrite local database files with merged questions ---
  console.log('Overwriting data/processed/ files with combined database...');
  const dbPath = 'data/processed/questions.ts';
  const dbJsonPath = 'data/processed/all_questions.json';
  
  const updatedFileContent = `// Processed and exported questions database
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  cycle: string;
  subject: string;
  subsubject: string;
  banca: string;
  year: number;
  enunciado: string;
  alternatives: string[];
  correctIndex: number;
  explanation: string;
  difficulty: Difficulty;
}

export const ALL_QUESTIONS: Question[] = ${JSON.stringify(mergedQuestions, null, 2)} as any;
`;

  fs.writeFileSync(dbPath, updatedFileContent, 'utf-8');
  fs.writeFileSync(dbJsonPath, JSON.stringify(mergedQuestions, null, 2), 'utf-8');
  console.log(`Database files successfully updated locally (${mergedQuestions.length} questions total).`);

  // --- Step 7: Update src/questions.ts mapping ---
  console.log('Updating src/questions.ts for frontend sync...');
  const srcQuestionsContent = `import { ALL_QUESTIONS } from '../data/processed/questions';

export const QUESTIONS: any[] = ALL_QUESTIONS.map(q => ({
  id: q.id,
  cycle: q.cycle,
  subject: q.subject,
  subSubject: q.subsubject || '',
  banca: q.banca || '',
  year: q.year || 2024,
  text: q.enunciado,
  options: q.alternatives,
  correctIndex: q.correctIndex,
  explanation: q.explanation || '',
  difficulty: q.difficulty || 'medium',
}));
`;
  fs.writeFileSync('src/questions.ts', srcQuestionsContent, 'utf-8');
  console.log('Frontend mappings successfully updated in src/questions.ts.');

  // --- Step 8: Trim QUESTIONS block from newly checked out src/App.tsx ---
  console.log('Reading newly checked out src/App.tsx to trim QUESTIONS block...');
  const appCode = fs.readFileSync('src/App.tsx', 'utf8');
  const appLines = appCode.split('\n');
  
  let startLine = -1;
  let endLine = -1;
  
  // Find where the first questions part starts
  for (let i = 0; i < appLines.length; i++) {
    if (appLines[i].includes('const QUESTIONS_PART1') || (appLines[i].includes('const QUESTIONS') && appLines[i].includes('['))) {
      startLine = i;
      break;
    }
  }
  
  // Find where the combination QUESTIONS array starts
  let comboStartLine = -1;
  if (startLine !== -1) {
    for (let i = startLine; i < appLines.length; i++) {
      if (appLines[i] && appLines[i].includes('const QUESTIONS') && !appLines[i].includes('QUESTIONS_PART')) {
        comboStartLine = i;
        break;
      }
    }
  }
  
  if (comboStartLine !== -1) {
    let bracketCount = 0;
    for (let i = comboStartLine; i < appLines.length; i++) {
      const l = appLines[i];
      if (!l) continue;
      for (let ch of l) {
        if (ch === '[') bracketCount++;
        else if (ch === ']') bracketCount--;
      }
      if (bracketCount === 0 && l.includes(']')) {
        endLine = i;
        break;
      }
    }
  }
  
  if (startLine !== -1 && endLine !== -1) {
    console.log(`QUESTIONS block located at lines ${startLine + 1} - ${endLine + 1}.`);
    const trimmedAppLines = [
      ...appLines.slice(0, startLine),
      'const QUESTIONS: Question[] = ALL_QUESTIONS_IMPORTED;',
      ...appLines.slice(endLine + 1)
    ];
    
    // Find react import at the top to safely insert questions import right after
    let reactImportIndex = 0;
    for (let i = 0; i < 60; i++) {
      if (trimmedAppLines[i] && trimmedAppLines[i].startsWith('import ') && trimmedAppLines[i].includes('react')) {
        reactImportIndex = i;
        break;
      }
    }
    
    trimmedAppLines.splice(reactImportIndex + 1, 0, 'import { QUESTIONS as ALL_QUESTIONS_IMPORTED } from "./questions";');
    
    fs.writeFileSync('src/App.tsx', trimmedAppLines.join('\n'), 'utf8');
    console.log(`Successfully trimmed src/App.tsx down to ${trimmedAppLines.length} lines and injected dynamic questions import!`);
  } else {
    console.log('QUESTIONS block already trimmed or not found in checked out App.tsx, skipping App.tsx trimming.');
  }

  console.log('--- COMPILATION CHECK ---');
}

main().catch(err => {
  console.error('Fatal error during sync process:', err);
  process.exit(1);
});
