with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Adicionar os imports de CERMAM
import_target = "import { UFRJ_GERADO_2026_QUESTIONS } from './ufrj_gerado_2026_questions';"
import_replacement = (
    "import { UFRJ_GERADO_2026_QUESTIONS } from './ufrj_gerado_2026_questions';\n"
    "import { CERMAM_EXTRA_100 } from './cermam_extra_100';\n"
    "import { CERMAM_GERADO_2026_QUESTIONS } from './cermam_gerado_2026_questions';"
)

if import_target in content:
    content = content.replace(import_target, import_replacement, 1)

# 2. Adicionar o spread no array QUESTIONS_RAW
spread_target = "  ...(SIRIOLIBANES_GERADO_2026_QUESTIONS as unknown as Question[]),"
spread_replacement = (
    "  ...(SIRIOLIBANES_GERADO_2026_QUESTIONS as unknown as Question[]),\n"
    "  ...(CERMAM_EXTRA_100 as unknown as Question[]),\n"
    "  ...(CERMAM_GERADO_2026_QUESTIONS as unknown as Question[]),"
)

if spread_target in content:
    content = content.replace(spread_target, spread_replacement, 1)

with open("src/App.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Injeção das questões CERMAM no App.tsx concluída com sucesso!")
