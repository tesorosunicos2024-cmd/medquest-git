import re

with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add import
import_target = "import { CERMAM_GERADO_2026_QUESTIONS } from './cermam_gerado_2026_questions';"
import_replacement = (
    "import { CERMAM_GERADO_2026_QUESTIONS } from './cermam_gerado_2026_questions';\n"
    "import { INTERNATO_EXTRA_700 } from './internato_extra_700';"
)

if import_target in content:
    content = content.replace(import_target, import_replacement, 1)

# 2. Add spread to QUESTIONS_RAW
spread_target = "  ...(CERMAM_GERADO_2026_QUESTIONS as unknown as Question[]),"
spread_replacement = (
    "  ...(CERMAM_GERADO_2026_QUESTIONS as unknown as Question[]),\n"
    "  ...(INTERNATO_EXTRA_700 as unknown as Question[]),"
)

if spread_target in content:
    content = content.replace(spread_target, spread_replacement, 1)

with open("src/App.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Injeção das questões INTERNATO_EXTRA_700 no App.tsx concluída!")
