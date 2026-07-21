import re

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Find QUESTIONS_RAW declaration
raw_start = text.find('const QUESTIONS_RAW: Question[] = [')
raw_end = text.find('const QUESTIONS: Question[] = dedupeQuestions')

if raw_start != -1 and raw_end != -1:
    raw_block = text[raw_start:raw_end]
    print(f"QUESTIONS_RAW block length: {len(raw_block)} characters")
    
    # Find inline question objects in QUESTIONS_RAW block that have id:
    # Let's count how many inline object items exist without explanation
    inline_q_matches = re.findall(r'\{\s*id\s*:\s*[\'"]([^\'"]+)[\'"].*?\}', raw_block, re.DOTALL)
    print(f"Inline questions found in QUESTIONS_RAW: {len(inline_q_matches)}")
    
    missing_inline = []
    for q_match in inline_q_matches:
        # Find the full object text for this ID
        obj_match = re.search(r'\{\s*id\s*:\s*[\'"]' + re.escape(q_match) + r'[\'"].*?\}', raw_block, re.DOTALL)
        if obj_match:
            obj_text = obj_match.group(0)
            if 'explanation' not in obj_text or re.search(r'explanation\s*:\s*[\'"]\s*[\'"]', obj_text):
                missing_inline.append(q_match)
    
    print(f"Inline questions in App.tsx missing explanation: {len(missing_inline)}")
    if missing_inline:
        print("Sample missing inline IDs:", missing_inline[:10])
