import * as fs from 'fs';

export function appendCases(newCases: any[]) {
  const filePath = 'src/clinicalCases.ts';
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const closingIndex = content.lastIndexOf('];');
  if (closingIndex === -1) {
    throw new Error('Could not find the end of the CLINICAL_CASES array.');
  }
  
  let formattedNewCases = '';
  for (const c of newCases) {
    formattedNewCases += `  {\n`;
    formattedNewCases += `    id: '${c.id}',\n`;
    formattedNewCases += `    diagnosis: '${c.diagnosis.replace(/'/g, "\\'")}',\n`;
    formattedNewCases += `    aliases: [${c.aliases.map((a: string) => `'${a.replace(/'/g, "\\'")}'`).join(', ')}],\n`;
    formattedNewCases += `    specialty: '${c.specialty.replace(/'/g, "\\'")}',\n`;
    formattedNewCases += `    clues: [\n`;
    for (const clue of c.clues) {
      formattedNewCases += `      '${clue.replace(/'/g, "\\'")}',\n`;
    }
    formattedNewCases += `    ],\n`;
    formattedNewCases += `    explanation: '${c.explanation.replace(/'/g, "\\'")}',\n`;
    formattedNewCases += `  },\n`;
  }
  
  const updatedContent = content.slice(0, closingIndex) + formattedNewCases + '];\n';
  fs.writeFileSync(filePath, updatedContent, 'utf-8');
  console.log(`Successfully appended ${newCases.length} cases to src/clinicalCases.ts. Current total line count: ${updatedContent.split('\n').length}`);
}
