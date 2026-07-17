import * as fs from 'fs';

function main() {
  const filePath = 'src/App.tsx';
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Add import for REAL_FLASHCARDS
  const targetImport = "import { Q_INTERNATO_1 } from './q_internato_1';";
  const replacementImport = "import { Q_INTERNATO_1 } from './q_internato_1';\nimport { REAL_FLASHCARDS } from './flashcards';";

  if (content.includes(targetImport)) {
    content = content.replace(targetImport, replacementImport);
    console.log("1. Successfully added import for REAL_FLASHCARDS");
  } else {
    console.error("1. Failed: targetImport not found");
  }

  // 2. Replace startFlashcards deck loading logic
  const targetDeck = "    const deck = shuffle(QUESTIONS.filter(q => q.subject === subject)).slice(0, 15);";
  const replacementDeck = `    const realDeck = REAL_FLASHCARDS.filter(fc => fc.subject === subject);
    let deck: Question[] = [];
    if (realDeck.length > 0) {
      deck = shuffle(realDeck).slice(0, 15).map(fc => ({
        id: fc.id,
        cycle: 'Ciclo Clínico',
        subject: fc.subject as Subject,
        text: fc.front,
        options: [fc.back],
        correctIndex: 0,
        explanation: fc.explanation,
      }));
    } else {
      deck = shuffle(QUESTIONS.filter(q => q.subject === subject)).slice(0, 15);
    }`;

  if (content.includes(targetDeck)) {
    content = content.replace(targetDeck, replacementDeck);
    console.log("2. Successfully updated startFlashcards deck logic");
  } else {
    console.error("2. Failed: targetDeck not found");
  }

  // 3. Replace card verso rendering
  const targetVerso = '                          <p className="text-brand-green font-black text-lg leading-snug mb-3">{String.fromCharCode(65 + card.correctIndex)}) {card.options[card.correctIndex]}</p>';
  const replacementVerso = `                          <p className="text-brand-green font-black text-lg leading-snug mb-3">
                            {card.options && card.options.length > 1 ? \`\${String.fromCharCode(65 + card.correctIndex)}) \${card.options[card.correctIndex]}\` : (card.options?.[0] || '')}
                          </p>`;

  if (content.includes(targetVerso)) {
    content = content.replace(targetVerso, replacementVerso);
    console.log("3. Successfully updated card verso rendering");
  } else {
    console.error("3. Failed: targetVerso not found");
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully patched App.tsx for REAL_FLASHCARDS!");
}

main();
