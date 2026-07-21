import os
import re

# Generator script for 700 distinct Internato questions (100 per subject for 7 subjects)

BANCAS = [
    'ENARE', 'USP', 'UNIFESP', 'UFRJ', 'CERMAM', 'PSU-MG',
    'AMRIGS', 'HCPA', 'UFPR', 'PUC-PR', 'Einstein', 'HCor', 'IAMSPE', 'Sírio-Libanês'
]

def make_ts_question(q_id, cycle, subject, subsubject, banca, year, text, options, correct_idx, explanation):
    options_json = ",\n      ".join([f'"{opt}"' for opt in options])
    text_clean = text.replace('"', '\\"').replace('\n', '\\n')
    exp_clean = explanation.replace('"', '\\"').replace('\n', '\\n')
    sub_clean = subsubject.replace('"', '\\"')
    
    return f"""  {{
    id: '{q_id}',
    cycle: '{cycle}',
    subject: '{subject}',
    subSubject: "{sub_clean}",
    banca: '{banca}',
    year: {year},
    text: "{text_clean}",
    options: [
      {options_json}
    ],
    correctIndex: {correct_idx},
    explanation: "{exp_clean}"
  }}"""

print("Writing generator script...")
