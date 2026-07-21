import re
from collections import Counter
import glob

# Script to count all questions by banca across all dataset files and App.tsx

banca_counts = Counter()

# Let's parse all question files in src/*.ts and src/App.tsx
files = glob.glob("src/*.ts") + ["src/App.tsx"]

for fpath in files:
    try:
        with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
            text = f.read()
        # Find all occurrences of banca: '...' or banca: "..."
        matches = re.findall(r"banca:\s*[\x27\x22]([^\x27\x22]+)[\x27\x22]", text)
        for b in matches:
            b_clean = b.strip()
            banca_counts[b_clean] += 1
    except Exception as e:
        pass

print("=== CONTAGEM DE QUESTÕES POR BANCA NO PROJETO ===")
sorted_bancas = sorted(banca_counts.items(), key=lambda x: x[1])

for b, count in sorted_bancas:
    print(f"{b:25s}: {count:5d} questões")
