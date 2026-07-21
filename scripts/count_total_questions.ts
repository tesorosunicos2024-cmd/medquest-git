import fs from 'fs';
import path from 'path';

// Parse App.tsx or evaluate imported arrays to count exact questions per banca

const appContent = fs.readFileSync(path.join(process.cwd(), 'src/App.tsx'), 'utf-8');

// Find all imported question arrays in App.tsx
const importRegex = /import\s+\{\s*([A-Za-z0-9_]+)\s*\}\s+from\s+'\.\/([^']+)';/g;

let match;
const imports: { name: string; file: string }[] = [];

while ((match = importRegex.exec(appContent)) !== null) {
  if (match[1].includes('QUESTIONS') || match[1].includes('EXTRA') || match[1].includes('BASICO') || match[1].includes('CLINICO')) {
    imports.push({ name: match[1], file: match[2] });
  }
}

console.log('Arquivos de questões encontrados no App.tsx:', imports.length);

const bancaCounts: Record<string, number> = {};
let totalCount = 0;

for (const imp of imports) {
  const filePath = path.join(process.cwd(), 'src', imp.file + '.ts');
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const matches = fileContent.match(/banca:\s*['"]([^'"]+)['"]/g) || [];
    
    // Count per banca
    for (const m of matches) {
      const bancaMatch = m.match(/banca:\s*['"]([^'"]+)['"]/);
      if (bancaMatch) {
        const banca = bancaMatch[1].trim();
        bancaCounts[banca] = (bancaCounts[banca] || 0) + 1;
        totalCount++;
      }
    }
  }
}

// Check inline questions in QUESTIONS_RAW in App.tsx as well
const appBancaMatches = appContent.match(/banca:\s*['"]([^'"]+)['"]/g) || [];
let appInlineCount = 0;
for (const m of appBancaMatches) {
  const bancaMatch = m.match(/banca:\s*['"]([^'"]+)['"]/);
  if (bancaMatch) {
    const banca = bancaMatch[1].trim();
    bancaCounts[banca] = (bancaCounts[banca] || 0) + 1;
    totalCount++;
    appInlineCount++;
  }
}

console.log('\n==================================================');
console.log(`TOTAL GERAL DE QUESTÕES REGISTRADAS NO BANCO: ${totalCount}`);
console.log('==================================================\n');

const sortedBancas = Object.entries(bancaCounts).sort((a, b) => b[1] - a[1]);

for (const [banca, count] of sortedBancas) {
  const pct = ((count / totalCount) * 100).toFixed(1);
  console.log(`- ${banca.padEnd(25)}: ${count.toString().padStart(5)} questões (${pct}%)`);
}
