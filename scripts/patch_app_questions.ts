import * as fs from 'fs';

function main() {
  const filePath = 'src/App.tsx';
  if (!fs.existsSync(filePath)) {
    console.error(`File ${filePath} not found!`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Insert imports
  const importTarget = "import { Q_INTERNATO_1 } from './q_internato_1';";
  if (!content.includes(importTarget)) {
    console.error('Import target not found!');
    return;
  }

  const importsToInsert = `import { AMRIGS_QUESTIONS } from './amrigs_questions';
import { CERMAM_NEW_QUESTIONS } from './cermam_new_questions';
import { ENARE_NEW_QUESTIONS } from './enare_new_questions';
import { IAMSPE_NEW_QUESTIONS } from './iamspe_new_questions';
import { UFPR_2019_501_QUESTIONS } from './ufpr_2019_501_questions';
import { UNESP_EXTRA_QUESTIONS } from './unesp_extra_questions';
import { UNESP_NEW_QUESTIONS } from './unesp_new_questions';
import { UNICAMP_NEW_QUESTIONS } from './unicamp_new_questions';`;

  // We replace the target with itself + the new imports
  content = content.replace(importTarget, `${importTarget}\n${importsToInsert}`);
  console.log('Successfully added imports to content.');

  // 2. Insert spreads in QUESTIONS_RAW
  const spreadTarget = "  ...(AMRIGS_2025_QUESTIONS as Question[]),";
  if (!content.includes(spreadTarget)) {
    console.error('Spread target not found!');
    return;
  }

  const spreadsToInsert = `  ...(AMRIGS_QUESTIONS as Question[]),
  ...(CERMAM_NEW_QUESTIONS as Question[]),
  ...(ENARE_NEW_QUESTIONS as Question[]),
  ...(IAMSPE_NEW_QUESTIONS as Question[]),
  ...(UFPR_2019_501_QUESTIONS as Question[]),
  ...(UNESP_EXTRA_QUESTIONS as Question[]),
  ...(UNESP_NEW_QUESTIONS as Question[]),
  ...(UNICAMP_NEW_QUESTIONS as Question[]),`;

  content = content.replace(spreadTarget, `${spreadTarget}\n${spreadsToInsert}`);
  console.log('Successfully added spreads to content.');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully patched src/App.tsx!');
}

main();
