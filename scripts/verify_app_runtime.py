import re

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's check if QUESTIONS or QUESTIONS_RAW is created and if normalizeQuestion is applied
print("Checando App.tsx...")
if "QUESTIONS_RAW.map(normalizeQuestion)" in text:
    print("✅ App.tsx aplica normalizeQuestion (e portanto withExplanation) em TODAS as questões de QUESTIONS_RAW!")
else:
    print("⚠️ Verificar como normalizeQuestion é aplicado no App.tsx")
