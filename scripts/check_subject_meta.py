import re

with open("src/App.tsx", "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find("SUBJECT_META")
if pos != -1:
    print(text[pos:pos+2500])
