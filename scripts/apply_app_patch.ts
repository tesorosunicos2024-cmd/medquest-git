import * as fs from 'fs';

function main() {
  const filePath = 'src/App.tsx';
  let content = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');

  // 1. Add spread of generated student questions inside QUESTIONS_RAW
  // Find where QUESTIONS_RAW ends: ...(Q_INTERNATO_1 as unknown as Question[]),
  const targetSpread = `  ...(Q_INTERNATO_1 as unknown as Question[]),
];`;
  
  const replacementSpread = `  ...(Q_INTERNATO_1 as unknown as Question[]),
  ...(BASICO_QUESTIONS as unknown as Question[]),
  ...(CLINICO_QUESTIONS as unknown as Question[]),
  ...(INTERNATO_QUESTIONS as unknown as Question[]),
];`;

  if (content.includes(targetSpread)) {
    content = content.replace(targetSpread, replacementSpread);
    console.log("1. Successfully added generated question spreads to QUESTIONS_RAW");
  } else {
    console.error("1. Failed: targetSpread not found");
  }

  // 2. Redefine QUESTIONS_ESTUDANTE and define QUESTIONS_RESIDENCIA
  const targetFilter = `// Trilha Estudante: apenas questões sem banca (conteúdo educacional próprio)
// Questões de bancas (ENARE, CERMAM, UNESP, etc.) são exclusivas da Trilha Residência
const QUESTIONS_ESTUDANTE = QUESTIONS.filter(q => !q.banca);`;

  const replacementFilter = `// Trilha Estudante: apenas questões sem banca (conteúdo educacional próprio) ou com banca "Trilha Estudante"
const QUESTIONS_ESTUDANTE = QUESTIONS.filter(q => !q.banca || q.banca === 'Trilha Estudante');

// Trilha Residência: questões com banca real (exclui Trilha Estudante)
const QUESTIONS_RESIDENCIA = QUESTIONS.filter(q => q.banca && q.banca !== 'Trilha Estudante');`;

  if (content.includes(targetFilter)) {
    content = content.replace(targetFilter, replacementFilter);
    console.log("2. Successfully redefined QUESTIONS_ESTUDANTE and defined QUESTIONS_RESIDENCIA");
  } else {
    console.error("2. Failed: targetFilter not found");
  }

  // 3. Update track pools inside App.tsx
  // Target: const pool = selectedTrack === 'estudante' ? QUESTIONS_ESTUDANTE : QUESTIONS;
  const targetTrackPool1 = `const pool = selectedTrack === 'estudante' ? QUESTIONS_ESTUDANTE : QUESTIONS;`;
  const replacementTrackPool1 = `const pool = selectedTrack === 'estudante' ? QUESTIONS_ESTUDANTE : QUESTIONS_RESIDENCIA;`;

  if (content.includes(targetTrackPool1)) {
    content = content.replace(targetTrackPool1, replacementTrackPool1);
    console.log("3. Successfully updated quiz track pool");
  } else {
    console.error("3. Failed: targetTrackPool1 not found");
  }

  // Target: const trackPool = selectedTrack === 'estudante' ? QUESTIONS_ESTUDANTE : QUESTIONS;
  const targetTrackPool2 = `const trackPool = selectedTrack === 'estudante' ? QUESTIONS_ESTUDANTE : QUESTIONS;`;
  const replacementTrackPool2 = `const trackPool = selectedTrack === 'estudante' ? QUESTIONS_ESTUDANTE : QUESTIONS_RESIDENCIA;`;

  if (content.includes(targetTrackPool2)) {
    content = content.replace(targetTrackPool2, replacementTrackPool2);
    console.log("4. Successfully updated dashboard track pool");
  } else {
    console.error("4. Failed: targetTrackPool2 not found");
  }

  // 4. Update battles, rooms, flashcards to use trackPool/activePool instead of global QUESTIONS
  const targetBattlePool = `const pool = QUESTIONS.filter(q => q.subject === subject);`;
  const replacementBattlePool = `const pool = (selectedTrack === 'estudante' ? QUESTIONS_ESTUDANTE : QUESTIONS_RESIDENCIA).filter(q => q.subject === subject);`;

  if (content.includes(targetBattlePool)) {
    content = content.replace(targetBattlePool, replacementBattlePool);
    console.log("5. Successfully updated battle pool to respect selectedTrack");
  } else {
    console.error("5. Failed: targetBattlePool not found");
  }

  const targetRoomPool = `const ids = shuffle(QUESTIONS.filter(q => q.subject === subject)).slice(0, 10).map(q => q.id);`;
  const replacementRoomPool = `const ids = shuffle((selectedTrack === 'estudante' ? QUESTIONS_ESTUDANTE : QUESTIONS_RESIDENCIA).filter(q => q.subject === subject)).slice(0, 10).map(q => q.id);`;

  if (content.includes(targetRoomPool)) {
    content = content.replace(targetRoomPool, replacementRoomPool);
    console.log("6. Successfully updated group room pool to respect selectedTrack");
  } else {
    console.error("6. Failed: targetRoomPool not found");
  }

  const targetFlashcardPool = `const deck = shuffle(QUESTIONS.filter(q => q.subject === subject)).slice(0, 15);`;
  const replacementFlashcardPool = `const deck = shuffle((selectedTrack === 'estudante' ? QUESTIONS_ESTUDANTE : QUESTIONS_RESIDENCIA).filter(q => q.subject === subject)).slice(0, 15);`;

  if (content.includes(targetFlashcardPool)) {
    content = content.replace(targetFlashcardPool, replacementFlashcardPool);
    console.log("7. Successfully updated flashcard pool to respect selectedTrack");
  } else {
    console.error("7. Failed: targetFlashcardPool not found");
  }

  // 5. Update GamePathNode mapping to use the active track pool
  const targetPathNodePool = `const pool2 = QUESTIONS.filter(q => q.subject === subj);`;
  const replacementPathNodePool = `const pool2 = (selectedTrack === 'estudante' ? QUESTIONS_ESTUDANTE : QUESTIONS_RESIDENCIA).filter(q => q.subject === subj);`;

  if (content.includes(targetPathNodePool)) {
    content = content.replace(targetPathNodePool, replacementPathNodePool);
    console.log("8. Successfully updated GamePathNode pool mapping");
  } else {
    console.error("8. Failed: targetPathNodePool not found");
  }

  // 6. Update Simulado view subjects / bancas counts
  const targetSimuladoCounts = `            // Assuntos disponíveis (estudante) — do banco inteiro, com contagem.
            const subjCounts: Record<string, number> = {};
            QUESTIONS.forEach(q => { subjCounts[q.subject] = (subjCounts[q.subject] || 0) + 1; });`;

  const replacementSimuladoCounts = `            // Assuntos disponíveis — do pool da trilha ativa, com contagem.
            const subjCounts: Record<string, number> = {};
            (isEstud ? QUESTIONS_ESTUDANTE : QUESTIONS_RESIDENCIA).forEach(q => { subjCounts[q.subject] = (subjCounts[q.subject] || 0) + 1; });`;

  if (content.includes(targetSimuladoCounts)) {
    content = content.replace(targetSimuladoCounts, replacementSimuladoCounts);
    console.log("9. Successfully updated Simulado subject counts to respect selectedTrack");
  } else {
    console.error("9. Failed: targetSimuladoCounts not found");
  }

  const targetSimuladoBancas = `            // Bancas disponíveis (residência) — só as que têm questões.
            const bancaCounts: Record<string, number> = {};
            QUESTIONS.forEach(q => { if (q.banca) bancaCounts[q.banca] = (bancaCounts[q.banca] || 0) + 1; });`;

  const replacementSimuladoBancas = `            // Bancas disponíveis (residência) — só as que têm questões.
            const bancaCounts: Record<string, number> = {};
            QUESTIONS_RESIDENCIA.forEach(q => { if (q.banca) bancaCounts[q.banca] = (bancaCounts[q.banca] || 0) + 1; });`;

  if (content.includes(targetSimuladoBancas)) {
    content = content.replace(targetSimuladoBancas, replacementSimuladoBancas);
    console.log("10. Successfully updated Simulado banca counts to use QUESTIONS_RESIDENCIA");
  } else {
    console.error("10. Failed: targetSimuladoBancas not found");
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully wrote patched App.tsx!");
}

main();
