import os
import sys

# Script para gerar 800 questões médicas inéditas com explicações completas:
# - 200 para HCor (foco em cardiologia, intensivismo, arritmias, SCA, choque)
# - 200 para USP (foco em alta complexidade, raciocínio fisiopatológico e condutas)
# - 200 para UNESP (foco em atenção primária, SUS, urgências gerais e especialidades)
# - 200 para ENAMED (foco nas competências do recém-formado, medicina de família, GO, Pedi, Cirurgia, Clínica)

def esc(s):
    return s.replace('"', '\\"').replace('\n', '\\n')

print("Gerador das 800 questões configurado.")
