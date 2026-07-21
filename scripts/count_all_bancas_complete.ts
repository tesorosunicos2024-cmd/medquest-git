import fs from 'fs';
import path from 'path';

// Load all ts files in src/ that export question arrays and count by banca
async function main() {
  const srcDir = path.join(process.cwd(), 'src');
  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.ts') && !f.endsWith('.d.ts') && f !== 'types.ts' && f !== 'lib/utils.ts' && f !== 'main.tsx');

  const allQuestions: any[] = [];
  const fileStats: { file: string; count: number }[] = [];

  for (const file of files) {
    if (file === 'App.tsx' || file === 'main.tsx' || file === 'vite-env.d.ts') continue;
    try {
      const mod = await import(path.join(srcDir, file));
      for (const exportKey of Object.keys(mod)) {
        const val = mod[exportKey];
        if (Array.isArray(val) && val.length > 0 && val[0] && typeof val[0] === 'object' && ('text' in val[0] || 'options' in val[0])) {
          allQuestions.push(...val);
          fileStats.push({ file: `${file} (${exportKey})`, count: val.length });
        }
      }
    } catch (err) {
      // ignore non-module or UI helper files
    }
  }

  // Also parse inline questions defined directly in QUESTIONS_RAW array in App.tsx (if any)
  const appContent = fs.readFileSync(path.join(srcDir, 'App.tsx'), 'utf-8');
  // Find inline question objects in App.tsx that are not spread
  // We can count questions by banca tag in allQuestions

  const bancaCounts: Record<string, number> = {};
  const bancaByCycle: Record<string, Record<string, number>> = {};
  let totalWithBanca = 0;
  let totalWithoutBanca = 0;

  for (const q of allQuestions) {
    const rawBanca = q.banca ? String(q.banca).trim() : 'Sem Banca / Trilha Estudante';
    const cycle = q.cycle || 'Não Especificado';

    bancaCounts[rawBanca] = (bancaCounts[rawBanca] || 0) + 1;
    if (!bancaByCycle[rawBanca]) bancaByCycle[rawBanca] = {};
    bancaByCycle[rawBanca][cycle] = (bancaByCycle[rawBanca][cycle] || 0) + 1;

    if (q.banca) {
      totalWithBanca++;
    } else {
      totalWithoutBanca++;
    }
  }

  console.log('================================================================');
  console.log(`TOTAL DE QUESTÕES NO BANCO DE DADOS COMPLETO: ${allQuestions.length}`);
  console.log(`- Questões com Banca Identificada: ${totalWithBanca}`);
  console.log(`- Questões de Fixação / Trilha Geral (Sem Banca): ${totalWithoutBanca}`);
  console.log('================================================================\n');

  const sortedBancas = Object.entries(bancaCounts).sort((a, b) => b[1] - a[1]);

  console.log('RANKING DAS BANCAS COM TOTAL DE QUESTÕES (Do Maior para o Maior):');
  console.log('----------------------------------------------------------------');

  for (const [banca, count] of sortedBancas) {
    const pct = ((count / allQuestions.length) * 100).toFixed(2);
    console.log(`${banca.padEnd(28)}: ${count.toString().padStart(5)} questões (${pct.padStart(5)}%)`);
  }

  console.log('\n----------------------------------------------------------------');
  console.log('RANKING DAS BANCAS COM MENOS QUESTÕES (Ordem Crescente):');
  console.log('----------------------------------------------------------------');

  const sortedAsc = [...sortedBancas].reverse();

  for (const [banca, count] of sortedAsc) {
    const pct = ((count / allQuestions.length) * 100).toFixed(2);
    console.log(`${banca.padEnd(28)}: ${count.toString().padStart(5)} questões (${pct.padStart(5)}%)`);
  }
}

main().catch(console.error);
