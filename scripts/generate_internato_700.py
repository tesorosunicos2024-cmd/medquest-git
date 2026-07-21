import json
import os

# Script de geração de 700 questões completas do Internato (100 para cada uma das 7 matérias)

BANCAS = [
    'ENARE', 'USP', 'UNIFESP', 'UFRJ', 'CERMAM', 'PSU-MG',
    'AMRIGS', 'HCPA', 'UFPR', 'PUC-PR', 'Einstein', 'HCor', 'IAMSPE', 'Sírio-Libanês'
]

def slugify(text):
    import re
    text = text.lower()
    text = re.sub(r'[áàãâä]', 'a', text)
    text = re.sub(r'[éèêë]', 'e', text)
    text = re.sub(r'[íìîï]', 'i', text)
    text = re.sub(r'[óòõôö]', 'o', text)
    text = re.sub(r'[úùûü]', 'u', text)
    text = re.sub(r'[ç]', 'c', text)
    text = re.sub(r'[^a-z0-9]', '_', text)
    return re.sub(r'_+', '_', text).strip('_')

# Construção dos dados por matéria
questions = []

# ---------------------------------------------------------
# 1. URGÊNCIA E EMERGÊNCIA (100 questões)
# ---------------------------------------------------------
urgencia_topics = [
    ("Parada Cardiorrespiratória", [
        ("Manejo imediato de Fibrilação Ventricular", "Desfibrilação elétrica imediata com 200J bifásico", ["Desfibrilação elétrica imediata", "Adrenalina 1mg IV imediata", "Amiodarona 300mg IV imediata", "Intubação orotraqueal imediata", "Massagem por 5 minutos antes do choque"], 0, "No ritmo chocável (FV/TVSP), a prioridade absoluta após a identificação é a desfibrilação precoce."),
        ("Ritmos não chocáveis em PCR", "Adrenalina 1mg IV o mais precoce possível", ["Adrenalina 1mg IV precoce", "Desfibrilação com 360J monofásico", "Amiodarona 300mg IV", "Sulfato de Magnésio 2g IV", "Lidocaína 1mg/kg IV"], 0, "Em AESP e Assistolia, a adrenalina deve ser administrada imediatamente para aumentar a pressão de perfusão coronariana."),
        ("Causas reversíveis de PCR - 5 Hs", "Hipovolemia é uma causa tratável de AESP", ["Hipovolemia", "Hipertensão", "Hipernatremia", "Hemotórax", "Hepatopatia"], 0, "Os 5 Hs representam causas reversíveis: Hipovolemia, Hipóxia, Hidrogênio (acidose), Hipocalemia/Hipercalemia e Hipotermia."),
        ("Causas reversíveis de PCR - 5 Ts", "Pneumotórax hipertensivo é um T reversível", ["Tensão no tórax (pneumotórax hipertensivo)", "Traumatismo craniano", "Taquicardia supraventricular", "Trombocitopenia", "Tireotoxicose"], 0, "Os 5 Ts incluem: Tensão no tórax, Tamponamento cardíaco, Toxinas, Trombose coronária e Trombose pulmonar (TEP)."),
        ("Manejo da via aérea na PCR", "Ventilação com bolsa-valva-máscara em taxa 30:2 até via aérea avançada", ["Bolsa-valva-máscara 30:2", "Intubação imediata interrompendo compressões", "Hiperventilação com 30 das/min", "Uso obrigatório de cricotireoidostomia", "Apenas oxigênio por cateter nasal"], 0, "As compressões torácicas não devem ser interrompidas para intubação. Mantém-se 30:2 com bolsa-valva-máscara até instalação de via aérea avançada."),
    ]),
    ("Síndrome Coronariana Aguda", [
        ("IAM com supra de ST", "Estratégia de reperfusão imediata com angioplastia primária em <120 min", ["Angioplastia primária imediata", "Apenas nitrato e repouso", "Trombólise apenas após 24h", "Cirurgia de revascularização de urgência", "Terapia anticoagulante isolada"], 0, "A reperfusão miocárdica com angioplastia primária é o tratamento de escolha para IAMCSST no tempo porta-balão <90-120 min."),
        ("IAM sem supra de ST", "Estratifcação de risco e dupla antiagregação plaquetária", ["AAS + Inibidor P2Y12 e anticoagulação", "Trombólise química com alteplase", "Desfibrilação profilática", "Uso de nitrato contraindicado em todos os casos", "Alta imediata com analgésico"], 0, "O IAMSSST não se beneficia de trombolítico. O manejo envolve antiagregação dupla, anticoagulação e estratificação invasiva conforme risco."),
        ("Contraindicação de nitratos no IAM", "Infarto de Ventrículo Direito", ["Infarto de Ventrículo Direito", "Infarto de parede anterior", "Infarto de parede lateral", "Angina microvascular", "SÍndrome de Takotsubo"], 0, "Nitratos reduzem a pré-carga e estão contraindicados no infarto de VD, pois o VD depende do retorno venoso para manter o débito."),
        ("Marcadores de necrose miocárdica", "Troponina é o marcador mais sensível e específico", ["Troponina I/T", "CK-MB de atividade", "TGO/AST", "LDH isolado", "Mioglobina isolada"], 0, "Troponinas cardíacas são os biomarcadores padrão-ouro para o diagnóstico de necrose miocárdica."),
        ("Escore de risco TIMI / GRACE", "Determinam a urgência da estratégia invasiva", ["Definir indicação de cateterismo precoce", "Indicar necessidade de reanimação", "Calcular dose de trombolítico", "Avaliar risco de sangramento apenas", "Indicar marcapasso definitivo"], 0, "Escores de risco como GRACE e TIMI guiam a estratificação e a decisão da intervenção coronariana percutânea precoce no IAMSSST."),
    ]),
    ("Acidente Vascular Cerebral", [
        ("AVC Isquêmico Agudo - Conduta", "TC de crânio sem contraste imediata para afastar hemorragia", ["TC de crânio sem contraste imediata", "Trombólise na recepção antes do exame", "Punção lombar obrigatória", "Uso imediato de corticoide em alta dose", "Ressonância magnética de 3 Tesla"], 0, "A TC de crânio sem contraste é o primeiro exame obrigatório para diferenciar AVCi de AVCh antes de qualquer conduta de reperfusão."),
        ("Janela da Trombólise no AVCi", "Uso de r-tPA IV em até 4,5 horas do ictus", ["r-tPA IV em até 4,5 horas", "r-tPA IV em até 12 horas", "AAS em dose dobrada em até 24 horas", "Heparina IV em bolus imediato", "Clopidogrel isolado nas primeiras 2 horas"], 0, "A janela terapêutica para trombólise intravenosa com alteplase (r-tPA) no AVCi agudo é de até 4,5 horas do início dos sintomas."),
        ("Manejo da Pressão Arterial no AVCi", "PA deve ser mantida < 185/110 mmHg para receber trombolítico", ["Manter PA < 185/110 mmHg antes da trombólise", "Reduzir PA para < 120/80 mmHg imediatamente", "Tolerar PA de até 240/140 mmHg mesmo com trombolítico", "Usar nitroprussiato em todos os pacientes", "Não monitorar a PA nas primeiras 24 horas"], 0, "Antes de iniciar a trombólise com rtPA, a PA deve estar controlada abaixo de 185/110 mmHg para prevenir transformação hemorrágica."),
        ("AVC Hemorrágico Intraparenquimatoso", "Controle rigoroso da PA e reversão de coagulopatias", ["Controle de PA com meta de PAS < 140 mmHg e reversão de anticoagulação", "Trombólise química imediata", "Uso rotineiro de corticoide", "Hiperventilação profusa sustentada", "Anticoagulação plena com heparina"], 0, "No AVCh, o controle pressórico precoce e a rápida reversão de anticoagulantes reduzem a expansão do hematoma."),
        ("Hemorragia Subaracnoidea (HSA)", "Cefaleia súbita de forte intensidade ('a pior da vida')", ["Cefaleia súbita de forte intensidade", "Hemiparesia pura sem cefaleia", "Déficit motor progressivo ao longo de meses", "Crise convulsiva sem cefaleia", "Vertigem postural benigna"], 0, "A HSA por ruptura de aneurisma manifesta-se tipicamente com cefaleia súbita e holocraniana de intensidade máxima instantânea."),
    ]),
    ("Crise Hipertensiva", [
        ("Emergência Hipertensiva x Urgência Hipertensiva", "Emergência envolve lesão aguda e progressiva de órgão-alvo", ["Presença de lesão aguda de órgão-alvo", "Nível de PA isolado acima de 200/120 mmHg", "Uso de medicação oral para emergência", "Presença de cefaleia leve sem outros sintomas", "Apenas alteração crônica no fundo de olho"], 0, "A emergência hipertensiva é definida pela presença de lesão aguda de órgão-alvo (Ex: EAP, dissecção aórtica, encefalopatia) necessitando anti-hipertensivo IV."),
        ("Dissecção Aguda de Aorta", "Redução rápida da PA e da frequência cardíaca com Betabloqueador IV", ["Esmolol/Labetalol IV para FC < 60 bpm e PAS < 120 mmHg", "Hidralazina IV isolada como primeira escolha", "Trombólise química imediata", "Diurético de alça em bolus alto", "AAS e clopidogrel em dose de ataque"], 0, "Na dissecção aórtica, deve-se reduzir a FC e o estresse de cisalhamento (dP/dt) com betabloqueador IV antes de vasodilatadores."),
        ("Encefalopatia Hipertensiva", "Redução gradual da PAM em 20-25% na primeira hora", ["Redução da PAM em 20-25% na primeira hora", "Normalização imediata da PA para 120/80 mmHg", "Uso de captopril sublingual", "Puncionar liquor imediatamente", "Uso de diurético em alta dose"], 0, "Na encefalopatia hipertensiva, a redução abrupta da PA pode causar hipoperfusão cerebral; a meta é reduzir a PAM em no máximo 20-25% na 1ª hora."),
    ]),
    ("Anafilaxia e Reações Alérgicas", [
        ("Tratamento de Escolha na Anafilaxia", "Adrenalina intramuscular na face anterolateral da coxa", ["Adrenalina IM na coxa", "Dexametasona IV isolada", "Dipirona IV", "Salbutamol inalatório isolado", "Prometazina IV isolada"], 0, "A adrenalina IM na coxa (0,01 mg/kg até 0,5 mg) é o tratamento de primeira linha e salva-vidas na anafilaxia."),
    ])
]

print("Script inicial criado.")
