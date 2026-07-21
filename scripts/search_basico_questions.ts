import { BASICO_QUESTIONS } from '../src/basico_questions';

const args = process.argv.slice(2);
const query = args.join(' ').trim().toLowerCase();

console.log('==================================================');
console.log('FERRAMENTA DE BUSCA - QUESTÕES DO CICLO BÁSICO');
console.log('==================================================');

if (!query) {
  console.log('Uso: npx tsx scripts/search_basico_questions.ts <termo_de_busca_ou_materia>');
  console.log('Exemplo: npx tsx scripts/search_basico_questions.ts Anatomia');
  console.log('Exemplo: npx tsx scripts/search_basico_questions.ts coronária');
  process.exit(0);
}

const matches = BASICO_QUESTIONS.filter(q => 
  q.subject.toLowerCase().includes(query) ||
  q.subSubject.toLowerCase().includes(query) ||
  q.text.toLowerCase().includes(query) ||
  q.explanation.toLowerCase().includes(query)
);

console.log(`Encontradas ${matches.length} questões correspondentes a "${query}":\n`);

matches.slice(0, 10).forEach((q, idx) => {
  console.log(`[${idx + 1}] ID: ${q.id} | Matéria: ${q.subject} | Subtópico: ${q.subSubject}`);
  console.log(`Enunciado: ${q.text}`);
  console.log(`Opções:`);
  q.options.forEach((opt: string, oIdx: number) => {
    const isCorrect = oIdx === q.correctIndex ? ' (CORRETA)' : '';
    console.log(`  ${String.fromCharCode(65 + oIdx)}) ${opt}${isCorrect}`);
  });
  console.log(`Explicação: ${q.explanation}`);
  console.log('-'.repeat(50));
});

if (matches.length > 10) {
  console.log(`... e mais ${matches.length - 10} questões encontradas.`);
}
