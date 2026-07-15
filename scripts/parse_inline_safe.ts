import * as fs from 'fs';
import { normalizeQuestion, isUsableQuestion } from '../src/questionNormalize';

function parseInlineSafe(): any[] {
  const content = fs.readFileSync('src/App.tsx', 'utf8');
  const lines = content.split('\n');
  const inlineQuestions: any[] = [];
  
  let currentObjStr = '';
  let inObject = false;
  let braceCount = 0;

  // We scan between lines 474 and 81631
  for (let i = 473; i < 81631; i++) {
    const line = lines[i];
    
    // Simple scanner to collect each question object { ... }
    for (let charIndex = 0; charIndex < line.length; charIndex++) {
      const char = line[charIndex];
      if (char === '{') {
        if (braceCount === 0) {
          inObject = true;
          currentObjStr = '{';
        } else {
          currentObjStr += '{';
        }
        braceCount++;
      } else if (char === '}') {
        braceCount--;
        currentObjStr += '}';
        if (braceCount === 0 && inObject) {
          inObject = false;
          // Try to evaluate this single object
          try {
            const evaluated = new Function(`return ${currentObjStr};`)();
            if (evaluated && evaluated.id) {
              inlineQuestions.push(evaluated);
            }
          } catch (err) {
            // not a valid question object, maybe a nested structure or config
          }
          currentObjStr = '';
        }
      } else {
        if (inObject) {
          currentObjStr += char;
        }
      }
    }
  }
  return inlineQuestions;
}

function main() {
  const inline = parseInlineSafe();
  console.log("Safely parsed inline questions count:", inline.length);

  const bancaCounts: Record<string, number> = {};
  const cycleCounts: Record<string, number> = {};

  let usableCount = 0;
  inline.forEach(q => {
    const norm = normalizeQuestion(q);
    if (isUsableQuestion(norm)) {
      usableCount++;
      const b = norm.banca || 'no-banca';
      bancaCounts[b] = (bancaCounts[b] || 0) + 1;
      const c = norm.cycle || 'no-cycle';
      cycleCounts[c] = (cycleCounts[c] || 0) + 1;
    }
  });

  console.log("Total Usable Inline Questions:", usableCount);
  console.log("Bancas for Usable Inline Questions:", bancaCounts);
  console.log("Cycles for Usable Inline Questions:", cycleCounts);
}

main();
