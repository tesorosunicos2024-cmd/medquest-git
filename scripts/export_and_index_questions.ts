import fs from 'fs';
import path from 'path';
import { BASICO_QUESTIONS } from '../src/basico_questions';

console.log('Exportando e indexando 1.300 questões do Ciclo Básico...');

// 1. Salvar JSON em data/processed/ciclo_basico_1300.json
const jsonPath = path.join(process.cwd(), 'data', 'processed', 'ciclo_basico_1300.json');
fs.writeFileSync(jsonPath, JSON.stringify(BASICO_QUESTIONS, null, 2), 'utf-8');
console.log('✅ JSON salvo em:', jsonPath);

// 2. Salvar JSON na raiz para facilidade de acesso no GitHub / Claude Code
const rootJsonPath = path.join(process.cwd(), 'questoes_ciclo_basico_1300.json');
fs.writeFileSync(rootJsonPath, JSON.stringify(BASICO_QUESTIONS, null, 2), 'utf-8');
console.log('✅ JSON raiz salvo em:', rootJsonPath);

// 3. Contagem por matéria
const subjectsCount: Record<string, number> = {};
BASICO_QUESTIONS.forEach(q => {
  subjectsCount[q.subject] = (subjectsCount[q.subject] || 0) + 1;
});

// 4. Gerar Documentação Markdown na Raiz: QUESTOES_CICLO_BASICO.md
let md = `# Trilha do Estudante - Ciclo Básico (1.300 Questões Médicas)

Este repositório contém **1.300 questões médicas inéditas** completas com enunciado, 4 alternativas de resposta, gabarito e explicação comentada detalhada para as **13 matérias do Ciclo Básico**.

---

## 📌 Resumo por Matéria (100 Questões por Matéria)

| Matéria do Ciclo Básico | Quantidade de Questões | Status | Arquivo Fonte |
| :--- | :---: | :---: | :--- |
`;

Object.entries(subjectsCount).forEach(([subject, count]) => {
  md += `| **${subject}** | ${count} | ✅ 100% Comentadas | \`src/basico_questions.ts\` |\n`;
});

md += `
---

## 📁 Arquivos do Dataset no GitHub e Claude Code

- **Código Fonte TypeScript:** [\`src/basico_questions.ts\`](./src/basico_questions.ts)
- **Dataset JSON Completo:** [\`questoes_ciclo_basico_1300.json\`](./questoes_ciclo_basico_1300.json)
- **Dataset Interno Processado:** [\`data/processed/ciclo_basico_1300.json\`](./data/processed/ciclo_basico_1300.json)
- **Script de Pesquisa CLI:** [\`scripts/search_basico_questions.ts\`](./scripts/search_basico_questions.ts)

---

## 🔍 Exemplos de Questões por Matéria

`;

const subjectsList = Object.keys(subjectsCount);
for (const subj of subjectsList) {
  const qSample = BASICO_QUESTIONS.find(q => q.subject === subj);
  if (qSample) {
    const letters = ['A', 'B', 'C', 'D'];
    const optsFormatted = qSample.options.map((opt: string, idx: number) => {
      const isCorrect = idx === qSample.correctIndex;
      return `- [${isCorrect ? 'x' : ' '}] **(${letters[idx]})** ${opt}`;
    }).join('\n');

    md += `### 📖 ${subj} (Exemplo de Questão)
**ID:** \`${qSample.id}\` | **Subtópico:** ${qSample.subSubject} | **Dificuldade:** ${qSample.difficulty}

**Enunciado:**
> ${qSample.text.replace(/\n/g, '\n> ')}

**Opções:**
${optsFormatted}

**Gabarito:** Alternativa **${letters[qSample.correctIndex]}**

**Explicação Comentada:**
${qSample.explanation}

---

`;
  }
}

const mdPath = path.join(process.cwd(), 'QUESTOES_CICLO_BASICO.md');
fs.writeFileSync(mdPath, md, 'utf-8');
console.log('✅ Documentação Markdown criada com sucesso em:', mdPath);
