import re

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Find all lines matching import ... from './...'
imports = re.findall(r'import\s+\{([^}]+)\}\s+from\s+[\'"](\./[^\'"]+)[\'"]', text)

question_vars = []
for var_block, file_path in imports:
    vars_clean = [v.strip() for v in var_block.split(',') if v.strip()]
    for v in vars_clean:
        if 'QUESTION' in v or 'EXTRA' in v or 'GERADO' in v or 'PACK' in v or 'INTERNATO' in v or 'QUEST' in v:
            question_vars.append((v, file_path))

print(f"Total question imports found in App.tsx: {len(question_vars)}")
for v, fp in question_vars:
    print(f"  {v} <- {fp}")
