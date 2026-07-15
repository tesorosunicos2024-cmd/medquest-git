import * as fs from 'fs';
import { ENARE_EXTRA_QUESTIONS } from '../src/enare_extra_questions';
import { ENARE_2024_FULL as ENARE_2024_QUESTIONS } from '../src/enare_2024_questions';
import { IAMSPE_EXTRA_QUESTIONS } from '../src/iamspe_extra_questions';
import { IAMSPE_REAL_QUESTIONS_PACK1 } from '../src/iamspe_real_questions_pack1';
import { COMVEST_UNICAMP_QUESTIONS } from '../src/comvest_unicamp_questions';
import { COMVEST_UNICAMP_2025_ALL } from '../src/comvest_unicamp_2025_all';
import { COMVEST_UNICAMP_2025_EXTENDED } from '../src/comvest_unicamp_2025_extended';
import { COMVEST_UNICAMP_2025_V2 } from '../src/comvest_unicamp_2025_v2';
import { COMVEST_UNICAMP_2025_V3 } from '../src/comvest_unicamp_2025_v3';
import { UFPR_2019_101_QUESTIONS } from '../src/ufpr_2019_101_questions';
import { UFPR_2021_102_QUESTIONS } from '../src/ufpr_2021_102_questions';
import { UFRJ_2024_QUESTIONS } from '../src/ufrj_2024_questions';
import { UFRJ_EXTRA_QUESTIONS } from '../src/ufrj_extra_questions';
import { HCPA_2024_QUESTIONS } from '../src/hcpa_2024_questions';
import { HCPA_2023_QUESTIONS } from '../src/hcpa_2023_questions';
import { HCPA_2022_QUESTIONS } from '../src/hcpa_2022_questions';
import { PSU_MG_2025_QUESTIONS } from '../src/psu_mg_2025_questions';
import { PSU_MG_2026_QUESTIONS } from '../src/psu_mg_2026_questions';
import { AMRIGS_2023_QUESTIONS } from '../src/amrigs_2023_questions';
import { AMRIGS_2024_QUESTIONS } from '../src/amrigs_2024_questions';
import { AMRIGS_2025_QUESTIONS } from '../src/amrigs_2025_questions';
import { PUCPR_2010_QUESTIONS } from '../src/pucpr_2010_questions';
import { EINSTEIN_2026_QUESTIONS } from '../src/einstein_2026_questions';
import { EINSTEIN_MEDWAY_2025_QUESTIONS } from '../src/einstein_medway_2025_questions';
import { UNIFESP_2024_QUESTIONS } from '../src/unifesp_2024_questions';
import { UNIFESP_2025_QUESTIONS } from '../src/unifesp_2025_questions';
import { UNIFESP_2026_QUESTIONS } from '../src/unifesp_2026_questions';
import { UFSC_2010_R3_CIRURGIA_QUESTIONS } from '../src/ufsc_2010_r3_cirurgia_questions';
import { UFSC_2011_QUESTIONS } from '../src/ufsc_2011_questions';
import { UFSC_2014_QUESTIONS } from '../src/ufsc_2014_questions';
import { ANAT_QUESTIONS } from '../src/estudante_basico_anat';
import { Q_BASICO_1 } from '../src/q_basico_1';
import { Q_BASICO_2 } from '../src/q_basico_2';
import { Q_BASICO_3 } from '../src/q_basico_3';
import { Q_CLINICO_1 } from '../src/q_clinico_1';
import { Q_CLINICO_2 } from '../src/q_clinico_2';
import { Q_CLINICO_3 } from '../src/q_clinico_3';
import { Q_CLINICO_4 } from '../src/q_clinico_4';
import { Q_INTERNATO_1 } from '../src/q_internato_1';

import { BASICO_QUESTIONS } from '../src/basico_questions';
import { CLINICO_QUESTIONS } from '../src/clinico_questions';
import { INTERNATO_QUESTIONS } from '../src/internato_questions';

import { normalizeQuestion, isUsableQuestion } from '../src/questionNormalize';

function parseInlineSafe(): any[] {
  const content = fs.readFileSync('src/App.tsx', 'utf8');
  const lines = content.split('\n');
  const inlineQuestions: any[] = [];
  
  let currentObjStr = '';
  let inObject = false;
  let braceCount = 0;

  for (let i = 473; i < 81631; i++) {
    const line = lines[i];
    for (let charIndex = 0; charIndex < line.length; charIndex++) {
      const char = line[charIndex];
      if (char === '{') {
        if (braceCount === 0) {
          inObject = true;
          currentObjStr = '{';
        } else {
          currentObjStr += '{';
        }
        braceCount++;
      } else if (char === '}') {
        braceCount--;
        currentObjStr += '}';
        if (braceCount === 0 && inObject) {
          inObject = false;
          try {
            const evaluated = new Function(`return ${currentObjStr};`)();
            if (evaluated && evaluated.id) {
              inlineQuestions.push(evaluated);
            }
          } catch (err) {}
          currentObjStr = '';
        }
      } else {
        if (inObject) {
          currentObjStr += char;
        }
      }
    }
  }
  return inlineQuestions;
}

function main() {
  const inline = parseInlineSafe();
  console.log("Parsed inline raw count:", inline.length);

  const spreads = [
    ...ENARE_EXTRA_QUESTIONS,
    ...ENARE_2024_QUESTIONS,
    ...IAMSPE_EXTRA_QUESTIONS,
    ...IAMSPE_REAL_QUESTIONS_PACK1,
    ...COMVEST_UNICAMP_QUESTIONS,
    ...COMVEST_UNICAMP_2025_ALL,
    ...COMVEST_UNICAMP_2025_EXTENDED,
    ...COMVEST_UNICAMP_2025_V2,
    ...COMVEST_UNICAMP_2025_V3,
    ...UFPR_2019_101_QUESTIONS,
    ...UFPR_2021_102_QUESTIONS,
    ...UFRJ_2024_QUESTIONS,
    ...UFRJ_EXTRA_QUESTIONS,
    ...HCPA_2024_QUESTIONS,
    ...HCPA_2023_QUESTIONS,
    ...HCPA_2022_QUESTIONS,
    ...PSU_MG_2025_QUESTIONS,
    ...PSU_MG_2026_QUESTIONS,
    ...AMRIGS_2023_QUESTIONS,
    ...AMRIGS_2024_QUESTIONS,
    ...AMRIGS_2025_QUESTIONS,
    ...PUCPR_2010_QUESTIONS,
    ...EINSTEIN_2026_QUESTIONS,
    ...EINSTEIN_MEDWAY_2025_QUESTIONS,
    ...UNIFESP_2024_QUESTIONS,
    ...UNIFESP_2025_QUESTIONS,
    ...UNIFESP_2026_QUESTIONS,
    ...UFSC_2010_R3_CIRURGIA_QUESTIONS,
    ...UFSC_2011_QUESTIONS,
    ...UFSC_2014_QUESTIONS,
    ...ANAT_QUESTIONS,
    ...Q_BASICO_1,
    ...Q_BASICO_2,
    ...Q_BASICO_3,
    ...Q_CLINICO_1,
    ...Q_CLINICO_2,
    ...Q_CLINICO_3,
    ...Q_CLINICO_4,
    ...Q_INTERNATO_1,
    ...BASICO_QUESTIONS,
    ...CLINICO_QUESTIONS,
    ...INTERNATO_QUESTIONS
  ];

  const allRaw = [...inline, ...spreads];
  const usable = allRaw.map(normalizeQuestion).filter(isUsableQuestion);

  // Group by banca, then by subject
  const data: Record<string, Record<string, number>> = {};
  
  usable.forEach(q => {
    const b = q.banca || 'no-banca';
    const s = q.subject || 'Sem Matéria';
    if (!data[b]) data[b] = {};
    data[b][s] = (data[b][s] || 0) + 1;
  });

  // Generate Markdown
  let md = "# Questões Organizadas por Banca (Raio-X de Todo o Banco)\n\n";
  md += "Este arquivo detalha a distribuição real de questões carregadas no aplicativo, combinando as questões inline e os arquivos TSX spreados.\n\n";

  // Sort bancas alphabetically, except 'no-banca' and 'Trilha Estudante' which are placed at the end
  const bancas = Object.keys(data).sort((a, b) => {
    if (a === 'no-banca' || a === 'Trilha Estudante') return 1;
    if (b === 'no-banca' || b === 'Trilha Estudante') return -1;
    return a.localeCompare(b);
  });

  let totalQuestionsCount = 0;

  bancas.forEach(b => {
    const subjects = data[b];
    const totalBanca = Object.values(subjects).reduce((acc, curr) => acc + curr, 0);
    totalQuestionsCount += totalBanca;

    const displayName = b === 'no-banca' ? 'Trilha Estudante (Estática)' : b;
    md += `## ${displayName} (${totalBanca} questões)\n\n`;

    // Sort subjects by count descending
    const sortedSubjects = Object.keys(subjects).sort((x, y) => subjects[y] - subjects[x]);
    sortedSubjects.forEach(s => {
      md += `- **${s}**: ${subjects[s]} questões\n`;
    });
    md += "\n";
  });

  const studentCount = usable.filter(q => !q.banca || q.banca === 'Trilha Estudante').length;
  const residencyCount = usable.filter(q => q.banca && q.banca !== 'Trilha Estudante').length;

  md += `## Resumo Geral dos Caminhos\n\n`;
  md += `- **Trilha Estudante (Ciclos Básico, Clínico, Internato e Conteúdo Próprio)**: ${studentCount} questões\n`;
  md += `- **Trilha Residência (Provas Reais de Bancas)**: ${residencyCount} questões\n`;
  md += `- **TOTAL DO BANCO ATIVO**: ${usable.length} questões\n`;

  fs.writeFileSync('data/processed/QUESTOES_POR_BANCA.md', md, 'utf8');
  console.log("Successfully generated /data/processed/QUESTOES_POR_BANCA.md");
  console.log("Total Student Track:", studentCount);
  console.log("Total Residency Track:", residencyCount);
  console.log("Total Active:", usable.length);
}

main();
