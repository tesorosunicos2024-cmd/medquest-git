import re
import os
import glob

# Find all ts/tsx files in src/
files = glob.glob("src/**/*.ts", recursive=True) + glob.glob("src/**/*.tsx", recursive=True)

print(f"Auditing {len(files)} files for questions missing explanation...")

no_explanation_questions = []

for filepath in files:
    if 'node_modules' in filepath or 'types.ts' in filepath:
        continue
    
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    # Match question objects: { ... id: ... }
    # We want to catch any object that has 'id:', 'text:', 'options:' or 'correctIndex:'
    # and see if 'explanation:' is missing or empty.
    
    # Let's find all object blocks or search for id entries
    lines = content.split('\n')
    current_file = os.path.basename(filepath)
    
    # Parse questions using regex for objects
    # Match entries like: id: '...', ... explanation: '...'
    # Let's split content by `id:`
    parts = re.split(r'(?=\{\s*id\s*:|\{\n\s*id\s*:)', content)
    
    for part in parts:
        if 'options' not in part or 'correctIndex' not in part:
            continue
        
        # Extract ID
        id_match = re.search(r'id\s*:\s*[\'"]([^\'"]+)[\'"]', part)
        q_id = id_match.group(1) if id_match else 'unknown'
        
        # Extract Banca
        banca_match = re.search(r'banca\s*:\s*[\'"]([^\'"]+)[\'"]', part)
        q_banca = banca_match.group(1) if banca_match else 'Trilha Estudante'
        
        # Extract Subject
        subj_match = re.search(r'subject\s*:\s*[\'"]([^\'"]+)[\'"]', part)
        q_subj = subj_match.group(1) if subj_match else 'Geral'

        # Extract Text snippet
        text_match = re.search(r'text\s*:\s*(["\'`])(.*?)(\1)', part, re.DOTALL)
        q_text = text_match.group(2)[:50] if text_match else ''
        
        # Check explanation
        exp_match = re.search(r'explanation\s*:\s*(["\'`])(.*?)(\1)', part, re.DOTALL)
        
        if not exp_match:
            no_explanation_questions.append({
                'file': current_file,
                'id': q_id,
                'banca': q_banca,
                'subject': q_subj,
                'text': q_text,
                'reason': 'Chave explanation ausente'
            })
        else:
            exp_text = exp_match.group(2).strip()
            if not exp_text or len(exp_text) < 5 or exp_text.lower() in ['sem explicação', 'n/a', 'explicacao', 'explicação', 'sem explicacao']:
                no_explanation_questions.append({
                    'file': current_file,
                    'id': q_id,
                    'banca': q_banca,
                    'subject': q_subj,
                    'text': q_text,
                    'reason': f'Explicação vazia ou insuficiente: "{exp_text}"'
                })

print(f"\n==================================================")
print(f"TOTAL DE QUESTÕES AUDITADAS SEM EXPLICAÇÃO: {len(no_explanation_questions)}")
print(f"==================================================")

bancas_summary = {}
files_summary = {}

for q in no_explanation_questions:
    bancas_summary[q['banca']] = bancas_summary.get(q['banca'], 0) + 1
    files_summary[q['file']] = files_summary.get(q['file'], 0) + 1

print("\nRESUMO POR BANCA/TRILHA:")
for b, count in sorted(bancas_summary.items(), key=lambda x: x[1], reverse=True):
    print(f"  - {b}: {count} questões sem explicação")

print("\nRESUMO POR ARQUIVO:")
for f, count in sorted(files_summary.items(), key=lambda x: x[1], reverse=True):
    print(f"  - {f}: {count} questões sem explicação")

if no_explanation_questions:
    print("\nEXEMPLOS DE QUESTÕES SEM EXPLICAÇÃO (Primeiras 10):")
    for q in no_explanation_questions[:10]:
        print(f"  [{q['file']}] ID: {q['id']} | Banca: {q['banca']} | Motivo: {q['reason']}")
