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

import { normalizeQuestion, isUsableQuestion } from '../src/questionNormalize';

function parseInlineQuestions(): any[] {
  const content = fs.readFileSync('src/App.tsx', 'utf8');
  const lines = content.split('\n');
  const inlineQuestions: any[] = [];
  
  let inRawArray = false;
  let currentBlock = '';
  
  for (let i = 473; i < 81630; i++) {
    const line = lines[i];
    currentBlock += line + '\n';
  }
  
  // A safe way to evaluate the inline block as an array in Node is to wrap it
  // in a module and evaluate it.
  try {
    const evaluated = new Function(`return [ ${currentBlock} ];`)();
    return evaluated.filter((x: any) => x && x.id);
  } catch (e: any) {
    console.error("Error evaluating inline block:", e.message);
    // fallback basic regex extraction
    return [];
  }
}

function main() {
  const inline = parseInlineQuestions();
  console.log("Successfully parsed inline questions count:", inline.length);

  const spread = [
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
    ...Q_INTERNATO_1
  ];

  const allRaw = [...inline, ...spread];
  console.log("Total raw questions (inline + spread):", allRaw.length);

  const normalized = allRaw.map(normalizeQuestion);
  const usable = normalized.filter(isUsableQuestion);
  console.log("Total usable questions in App.tsx right now:", usable.length);

  const bancaCounts: Record<string, number> = {};
  const cycleCounts: Record<string, number> = {};

  usable.forEach((q: any) => {
    const b = q.banca || 'no-banca';
    bancaCounts[b] = (bancaCounts[b] || 0) + 1;
    const c = q.cycle || 'no-cycle';
    cycleCounts[c] = (cycleCounts[c] || 0) + 1;
  });

  console.log("Usable Bancas found:", bancaCounts);
  console.log("Usable Cycles found:", cycleCounts);

  const residencyCount = usable.filter((q: any) => q.banca && q.banca !== 'Trilha Estudante').length;
  console.log("Total Usable Residência questions:", residencyCount);

  const studentCount = usable.filter((q: any) => !q.banca || q.banca === 'Trilha Estudante').length;
  console.log("Total Usable Estudante questions:", studentCount);
}

main();
