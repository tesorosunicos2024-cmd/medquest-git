import { BASICO_QUESTIONS } from '../src/basico_questions';
import { CLINICO_QUESTIONS } from '../src/clinico_questions';
import { INTERNATO_QUESTIONS } from '../src/internato_questions';
import { CERMAM_EXTRA_100 } from '../src/cermam_extra_100';
import { CERMAM_GERADO_2026_QUESTIONS } from '../src/cermam_gerado_2026_questions';
import { INTERNATO_EXTRA_700 } from '../src/internato_extra_700';

const allQuestions = [
  ...BASICO_QUESTIONS,
  ...CLINICO_QUESTIONS,
  ...INTERNATO_QUESTIONS,
  ...CERMAM_EXTRA_100,
  ...CERMAM_GERADO_2026_QUESTIONS,
  ...INTERNATO_EXTRA_700
];

console.log('--- REVISÃO DIRETA DE JS/TS ARRAYS ---');
console.log('Total real no array unificado:', allQuestions.length);

const counts: Record<string, number> = {};

for (const q of allQuestions) {
  const banca = (q as any).banca || 'Sem Banca';
  counts[banca] = (counts[banca] || 0) + 1;
}

const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

console.log('\nRelatório exato por Banca:');
for (const [banca, count] of sorted) {
  const pct = ((count / allQuestions.length) * 100).toFixed(2);
  console.log(`${banca.padEnd(25)}: ${count.toString().padStart(5)} questões (${pct}%)`);
}
