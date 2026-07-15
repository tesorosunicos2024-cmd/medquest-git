import * as fs from 'fs';
import * as path from 'path';

function main() {
  const files = fs.readdirSync('src');
  const appContent = fs.readFileSync('src/App.tsx', 'utf8');

  console.log("=== UNSPREAD QUESTION FILES IN src/ ===");
  files.forEach(file => {
    if (file.endsWith('.ts') && (file.includes('question') || file.includes('estudante') || file.includes('q_') || file.includes('enare') || file.includes('iamspe') || file.includes('comvest') || file.includes('ufpr') || file.includes('ufrj') || file.includes('hcpa') || file.includes('psu_mg') || file.includes('amrigs') || file.includes('pucpr') || file.includes('einstein') || file.includes('unifesp') || file.includes('ufsc') || file.includes('unesp') || file.includes('cermam'))) {
      if (file === 'questionNormalize.ts' || file === 'vite-env.d.ts') return;
      const exportNameMatch = fs.readFileSync('src/' + file, 'utf8').match(/export const (\w+)/);
      if (exportNameMatch) {
        const exportName = exportNameMatch[1];
        const isImported = appContent.includes(exportName);
        console.log(`File: ${file} | Export: ${exportName} | Imported in App.tsx: ${isImported ? 'YES' : 'NO'}`);
      }
    }
  });
}

main();
