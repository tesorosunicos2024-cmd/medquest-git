import os
import re

# Generator script for 800 high-yield medical residency questions (200 HCor, 200 USP, 200 UNESP, 200 ENAMED)

def create_ts_file(filepath, export_name, questions):
    with open(filepath, "w", encoding="utf-8") as f:
        f.write("export interface Question {\n")
        f.write("  id: string;\n")
        f.write("  cycle: string;\n")
        f.write("  subject: string;\n")
        f.write("  subSubject: string;\n")
        f.write("  banca: string;\n")
        f.write("  year: number;\n")
        f.write("  text: string;\n")
        f.write("  options: string[];\n")
        f.write("  correctIndex: number;\n")
        f.write("  explanation: string;\n")
        f.write("}\n\n")
        f.write(f"export const {export_name}: Question[] = [\n")
        
        for q in questions:
            f.write("  {\n")
            f.write(f"    id: '{q['id']}',\n")
            f.write(f"    cycle: '{q['cycle']}',\n")
            f.write(f"    subject: '{q['subject']}',\n")
            sub_esc = q['subSubject'].replace('"', '\\"').replace("'", "\\'")
            f.write(f"    subSubject: \"{sub_esc}\",\n")
            f.write(f"    banca: '{q['banca']}',\n")
            f.write(f"    year: {q['year']},\n")
            text_esc = q['text'].replace('"', '\\"').replace('\n', '\\n')
            f.write(f"    text: \"{text_esc}\",\n")
            f.write("    options: [\n")
            for opt in q['options']:
                opt_esc = opt.replace('"', '\\"')
                f.write(f'      "{opt_esc}",\n')
            f.write("    ],\n")
            f.write(f"    correctIndex: {q['correctIndex']},\n")
            exp_esc = q['explanation'].replace('"', '\\"').replace('\n', '\\n')
            f.write(f"    explanation: \"{exp_esc}\",\n")
            f.write("  },\n")
            
        f.write("];\n")
    print(f"Salvo: {filepath} com {len(questions)} questões.")

print("Auxiliar pronto.")
