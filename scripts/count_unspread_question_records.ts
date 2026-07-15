import * as fs from 'fs';
import * as path from 'path';

function main() {
  const files = fs.readdirSync('src');
  console.log("=== ALL QUESTION FILES AND THEIR INTERNAL COUNTS ===");
  let totalAll = 0;

  files.forEach(file => {
    if (file.endsWith('.ts') && (file.includes('question') || file.includes('estudante') || file.includes('q_') || file.includes('enare') || file.includes('iamspe') || file.includes('comvest') || file.includes('ufpr') || file.includes('ufrj') || file.includes('hcpa') || file.includes('psu_mg') || file.includes('amrigs') || file.includes('pucpr') || file.includes('einstein') || file.includes('unifesp') || file.includes('ufsc') || file.includes('unesp') || file.includes('cermam'))) {
      if (file === 'questionNormalize.ts' || file === 'vite-env.d.ts') return;
      
      const content = fs.readFileSync('src/' + file, 'utf8');
      const exportNameMatch = content.match(/export const (\w+)/);
      if (exportNameMatch) {
        const exportName = exportNameMatch[1];
        // simple count by regex of properties: text or id
        const idMatches = content.match(/id:\s*['"`]/g) || [];
        const count = idMatches.length;
        console.log(`File: ${file.padEnd(35)} | Export: ${exportName.padEnd(35)} | Questions count: ${count}`);
        totalAll += count;
      }
    }
  });

  console.log("GRAND TOTAL OF ALL FILES:", totalAll);
}

main();
