import * as fs from 'fs';
import { normalizeQuestion, isUsableQuestion } from '../src/questionNormalize';

function main() {
  const jsonPath = 'data/processed/all_questions.json';
  if (!fs.existsSync(jsonPath)) {
    console.log("No all_questions.json found");
    return;
  }
  const questions = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  console.log("Total questions in all_questions.json:", questions.length);

  const bancaRawCount: Record<string, number> = {};
  const bancaUsableCount: Record<string, number> = {};
  const rejectReasons: Record<string, number> = {};

  questions.forEach((q: any) => {
    const b = q.banca || 'no-banca';
    bancaRawCount[b] = (bancaRawCount[b] || 0) + 1;

    if (!q.options) {
      rejectReasons['missing_options_field'] = (rejectReasons['missing_options_field'] || 0) + 1;
      return;
    }

    try {
      const norm = normalizeQuestion(q);
      const usable = isUsableQuestion(norm);

      if (usable) {
        bancaUsableCount[b] = (bancaUsableCount[b] || 0) + 1;
      } else {
        // diagnose why not usable
        let reason = 'unknown';
        if (!norm.options || norm.options.length < 2) {
          reason = 'options_length_lt_2';
        } else if (norm.correctIndex < 0 || norm.correctIndex >= norm.options.length) {
          reason = 'invalid_correct_index';
        } else if (norm.options.some((o: any) => !String(o).trim())) {
          reason = 'empty_option';
        } else if (norm.options.some((o: any) => /^\s*alternativa\s+[a-e]\s*;?\s*$/i.test(String(o)))) {
          reason = 'placeholder_option';
        } else {
          const unicas = new Set(norm.options.map((o: any) => String(o).trim().toLowerCase()));
          if (unicas.size !== norm.options.length) {
            reason = 'duplicate_options';
          }
        }
        rejectReasons[reason] = (rejectReasons[reason] || 0) + 1;
      }
    } catch (err: any) {
      rejectReasons[`error_${err.message.replace(/[^a-zA-Z0-9]/g, '_')}`] = (rejectReasons[`error_${err.message.replace(/[^a-zA-Z0-9]/g, '_')}`] || 0) + 1;
    }
  });

  console.log("=== RAW BANCAS ===");
  console.log(bancaRawCount);
  console.log("=== USABLE BANCAS ===");
  console.log(bancaUsableCount);
  console.log("=== REJECT REASONS ===");
  console.log(rejectReasons);
}

main();
