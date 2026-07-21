import { CERMAM_EXTRA_100 } from '../src/cermam_extra_100';
import { CERMAM_GERADO_2026_QUESTIONS } from '../src/cermam_gerado_2026_questions';
import { INTERNATO_EXTRA_700 } from '../src/internato_extra_700';

console.log('=== VERIFICAÇÃO DAS QUESTÕES DO INTERNATO ===');
console.log(`Total de questões em INTERNATO_EXTRA_700: ${INTERNATO_EXTRA_700.length}`);

const subjects: Record<string, number> = {};
const bancas: Record<string, number> = {};

for (const q of INTERNATO_EXTRA_700) {
  subjects[q.subject] = (subjects[q.subject] || 0) + 1;
  bancas[q.banca] = (bancas[q.banca] || 0) + 1;
}

console.log('\nContagem por matéria no Internato:');
for (const [sub, count] of Object.entries(subjects)) {
  console.log(` - ${sub}: ${count} questões`);
}

console.log('\nDistribuição por Banca (residências médicas):');
for (const [banca, count] of Object.entries(bancas)) {
  console.log(` - ${banca}: ${count} questões`);
}
