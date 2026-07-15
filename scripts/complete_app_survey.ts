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

// Import generated questions as well
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

  // We check if BASICO_QUESTIONS, CLINICO_QUESTIONS, and INTERNATO_QUESTIONS are spread in the actual App.tsx.
  // Currently they are NOT. Let's see if we should include them (which we should, to get 9060 or 9077 in Trilha Estudante).
  const includeGenerated = true;

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
    ...(includeGenerated ? BASICO_QUESTIONS : []),
    ...(includeGenerated ? CLINICO_QUESTIONS : []),
    ...(includeGenerated ? INTERNATO_QUESTIONS : [])
  ];

  const allRaw = [...inline, ...spreads];
  console.log("Grand total of raw questions:", allRaw.length);

  const usable = allRaw.map(normalizeQuestion).filter(isUsableQuestion);
  console.log("Grand total of usable questions:", usable.length);

  const bCounts: Record<string, number> = {};
  usable.forEach(q => {
    const b = q.banca || 'no-banca';
    bCounts[b] = (bCounts[b] || 0) + 1;
  });

  console.log("=== USABLE BANCAS ===");
  console.log(bCounts);

  const studentCount = usable.filter(q => !q.banca || q.banca === 'Trilha Estudante').length;
  const residencyCount = usable.filter(q => q.banca && q.banca !== 'Trilha Estudante').length;

  console.log("=== RESULTS ===");
  console.log("Total Student Track (no banca or 'Trilha Estudante'):", studentCount);
  console.log("Total Residency Track:", residencyCount);
  console.log("Total overall:", studentCount + residencyCount);
}

main();
