import glob
import re
import os

files = glob.glob('src/*.ts') + glob.glob('src/*.tsx')

print(f"Scanning {len(files)} files...")

empty_explanations = []
questions_without_explanation_key = []
total_q_count = 0

for filepath in sorted(files):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    # Find blocks that look like question objects { id: ..., text: ..., options: ... }
    # Let's inspect objects in TypeScript
    # A reliable way: look for `explanation:` entries and also count `id:` entries
    ids = re.findall(r'id\s*:\s*[\'"]([^\'"]+)[\'"]', content)
    
    # Check each question object roughly
    # Split by object-like pattern or check each id
    if not ids:
        continue

    # Let's check objects
    objects = re.findall(r'\{\s*id\s*:\s*[\'"][^\'"]+[\'"].*?\}', content, re.DOTALL)
    for obj in objects:
        total_q_count += 1
        m_id = re.search(r'id\s*:\s*[\'"]([^\'"]+)[\'"]', obj)
        q_id = m_id.group(1) if m_id else "unknown"
        
        m_exp = re.search(r'explanation\s*:\s*(["\'`])(.*?)(\1)', obj, re.DOTALL)
        if not m_exp:
            questions_without_explanation_key.append((filepath, q_id))
        else:
            exp_text = m_exp.group(2).strip()
            if not exp_text or exp_text == "''" or exp_text == '""' or len(exp_text) < 10:
                empty_explanations.append((filepath, q_id, exp_text))

print(f"Total question objects scanned: {total_q_count}")
print(f"Questions missing 'explanation' key: {len(questions_without_explanation_key)}")
print(f"Questions with empty or very short explanation: {len(empty_explanations)}")

if questions_without_explanation_key:
    print("\nSample missing key:", questions_without_explanation_key[:10])
if empty_explanations:
    print("\nSample empty/short explanations:", empty_explanations[:10])
