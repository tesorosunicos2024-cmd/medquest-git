with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Remove o bloco duplicado no final
target = "  },\n  },\n  ...(CERMAM_EXTRA_100"
if target in content:
    content = content.replace("  },\n  },\n  ...(CERMAM_EXTRA_100", "  },\n  ...(CERMAM_EXTRA_100")
    with open("src/App.tsx", "w", encoding="utf-8") as f:
        f.write(content)
    print("Corrigido o '}' extra com sucesso.")
else:
    print("Alvo não encontrado ou já corrigido.")
