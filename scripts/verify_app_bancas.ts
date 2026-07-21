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

console.log('Total real de questões no banco:', allQuestions.length);

const bancaCounts: Record<string, number> = {};

for (const q of allQuestions) {
  const b = (q as any).banca || 'Sem Banca';
  bancaCounts[b] = (bancaCounts[b] || 0) + 1;
}

const sorted = Object.entries(bancaCounts).sort((a, b) => a[1] - b[1]);

console.log('\n=== BANCAS COM MENOS QUESTÕES (Ordem Crescente) ===');
for (const [banca, count] of sorted) {
  console.log(` - ${banca.padEnd(25)}: ${count} questões`);
}
