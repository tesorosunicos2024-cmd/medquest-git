import { CERMAM_GERADO_2026_QUESTIONS } from '../src/cermam_gerado_2026_questions';
import { CERMAM_EXTRA_100 } from '../src/cermam_extra_100';

console.log('=== VERIFICAÇÃO DO BANCO CERMAM ===');
console.log(`Novas questões geradas (cermam_gerado_2026_questions.ts): ${CERMAM_GERADO_2026_QUESTIONS.length}`);
console.log(`Questões cermam_extra_100.ts: ${CERMAM_EXTRA_100.length}`);

const subjects: Record<string, number> = {};
for (const q of CERMAM_GERADO_2026_QUESTIONS) {
  subjects[q.subject] = (subjects[q.subject] || 0) + 1;
}

console.log('\nDistribuição por grande área nas 200 questões novas:');
for (const [sub, count] of Object.entries(subjects)) {
  console.log(` - ${sub}: ${count} questões`);
}
