import glob
import re
from collections import Counter

counts = Counter()
subjects_7 = [
    "Urgência e Emergência",
    "Medicina Intensiva",
    "Anestesiologia",
    "Neonatologia",
    "Traumatologia-Ortopedia",
    "Cirurgia Vascular",
    "Neurocirurgia"
]

for fpath in glob.glob("src/*.ts") + glob.glob("src/*.tsx"):
    with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
        text = f.read()
    for subj in subjects_7:
        c = len(re.findall(r"subject:\s*['\"]" + re.escape(subj) + r"['\"]", text))
        counts[subj] += c

print("Current questions per subject across files:")
for subj in subjects_7:
    print(f"  {subj}: {counts[subj]}")
