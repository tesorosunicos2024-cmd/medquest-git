import re
import random

# Generator for 700 Internato Questions (100 per subject across 7 subjects)

BANCAS = [
    'ENARE', 'USP', 'UNIFESP', 'UFRJ', 'CERMAM', 'PSU-MG',
    'AMRIGS', 'HCPA', 'UFPR', 'PUC-PR', 'Einstein', 'HCor', 'IAMSPE', 'Sírio-Libanês'
]

SUBJECTS = [
    'Urgência e Emergência',
    'Medicina Intensiva',
    'Anestesiologia',
    'Neonatologia',
    'Traumatologia-Ortopedia',
    'Cirurgia Vascular',
    'Neurocirurgia'
]

# Helper to generate clean TS string
def format_ts_file(questions):
    lines = ["import { Question } from './types';\n"]
    lines.append("// 700 questões fixas para o Internato (100 questões por matéria nas 7 matérias)\n")
    lines.append("export const INTERNATO_EXTRA_700: any[] = [\n")
    
    for q in questions:
        q_id = q['id']
        cycle = q['cycle']
        subject = q['subject']
        sub = q['subSubject'].replace('"', '\\"')
        banca = q['banca']
        year = q['year']
        text = q['text'].replace('"', '\\"').replace('\n', '\\n')
        exp = q['explanation'].replace('"', '\\"').replace('\n', '\\n')
        
        opts_formatted = ",\n      ".join([f'"{opt.replace('"', '\\"')}"' for opt in q['options']])
        
        q_block = f"""  {{
    id: '{q_id}',
    cycle: '{cycle}',
    subject: '{subject}',
    subSubject: "{sub}",
    banca: '{banca}',
    year: {year},
    text: "{text}",
    options: [
      {opts_formatted}
    ],
    correctIndex: {q['correctIndex']},
    explanation: "{exp}"
  }},\n"""
        lines.append(q_block)
        
    lines.append("];\n")
    return "".join(lines)

print("Helper definido.")
