import re

with open("src/App.tsx", "r", encoding="utf-8") as f:
    text = f.read()

# Let's search for BANCAS array or banca filter
pos = text.find("const BANCAS")
if pos != -1:
    print(text[pos:pos+1200])

print("\n--- BANCAS em questions.ts ---")
try:
    with open("src/questions.ts", "r", encoding="utf-8") as f:
        qtext = f.read()
    posq = qtext.find("const BANCAS")
    if posq != -1:
        print(qtext[posq:posq+1200])
except Exception as e:
    print(e)
