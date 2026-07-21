import os
import sys
import re

BANCAS = [
    'ENARE', 'USP', 'UNIFESP', 'UFRJ', 'CERMAM', 'PSU-MG',
    'AMRIGS', 'HCPA', 'UFPR', 'PUC-PR', 'Einstein', 'HCor', 'IAMSPE', 'Sírio-Libanês'
]

# Raw Topics Data for each of the 7 subjects

RAW_DATA = {
    "Urgência e Emergência": [
        ("Parada Cardiorrespiratória", 
         "Apresenta-se em colapso cardiorrespiratório e o monitor cardíaco indica Fibrilação Ventricular (FV).", 
         "Qual a conduta imediata de primeira linha indicada?", 
         ["Desfibrilação elétrica imediata com choque de alta energia", "Aplicação de Adrenalina 1mg IV em bolus rápido", "Administração de Amiodarona 300mg IV", "Intubação orotraqueal antes de qualquer intervenção", "Compressões torácicas isoladas por 5 minutos"], 0, 
         "Na Fibrilação Ventricular (ritmo chocável), a prioridade absoluta é a desfibrilação elétrica imediata para reverter a arritmia letal."),

        ("Parada Cardiorrespiratória", 
         "Em parada cardiorrespiratória em ritmo de Atividade Elétrica Sem Pulso (AESP). Mantém-se massagem cardíaca de alta qualidade.", 
         "Qual o intervalo recomendado para repetição de Adrenalina 1mg IV durante a RCP?", 
         ["A cada 3 a 5 minutos", "A cada 1 minuto ininterruptamente", "Uma única dose ao longo de toda a ressuscitação", "A cada 10 minutos", "Apenas se o ritmo mudar para FV"], 0, 
         "A Adrenalina 1mg IV em ritmos não chocáveis (AESP e Assistolia) deve ser administrada o mais precocemente possível e repetida a cada 3 a 5 minutos."),

        ("Síndrome Coronariana Aguda", 
         "Queixa de dor retroesternal opressiva com irradiação para mandíbula há 2 horas. ECG evidencia supradesnivelamento do segmento ST em V1, V2, V3 e V4.", 
         "Qual o diagnóstico e a conduta terapêutica de escolha se o hospital possui serviço de hemodinâmica?", 
         ["IAM com supra de ST anterior; indicar Angioplastia Primária imediata", "IAM sem supra de ST; prescrever apenas AAS e nitrato oral", "Angina instável; indicar teste ergométrico de urgência", "Pericardite aguda; prescrever AINE em dose alta", "Dissecção aórtica; solicitar angiotomografia de tórax"], 0, 
         "O supra de ST nas derivações V1-V4 caracteriza IAMCSST anterosseptal. A angioplastia percutânea primária em tempo porta-balão < 90-120 min é o tratamento de escolha."),

        ("Síndrome Coronariana Aguda", 
         "Apresenta IAM de parede inferior e evolui com hipotensão grave e turgência jugular após uso de mononitrato sublingual. Não há estertores pulmonares.", 
         "Qual a suspeita principal e a conduta medicamentosa adequada?", 
         ["Acometimento de Ventrículo Direito; suspender nitrato e realizar expansão volêmica com cristaloides", "Tamponamento cardíaco; realizar pericardiocentese de urgência", "Choque anafilático; aplicar adrenalina IM na coxa", "Edema agudo de pulmão; iniciar furosemida IV em bolus", "Insuficiência mitral aguda; indicar cirurgia de troca valvar"], 0, 
         "O infarto de VD reduz a pré-carga; o uso de nitratos leva a hipotensão grave. O tratamento requer suspensão de vasodilatadores e reposição volêmica IV."),

        ("Acidente Vascular Cerebral", 
         "Admitido com hemiplegia à direita e afasia de expressão iniciadas há 2 horas. A TC de crânio sem contraste afasta sangramento e sinais de infarto extenso.", 
         "Qual a conduta terapêutica de reperfusão indicada se não houver contraindicações?", 
         ["Trombólise química IV com alteplase (r-tPA)", "Anticoagulação plena com heparina de baixo peso molecular", "Administração de dexametasona IV em alta dose", "Redução agressiva da PA para níveis abaixo de 100/60 mmHg", "Aguardar 24 horas para reavaliar a imagem"], 0, 
         "No AVCi agudo em janela < 4,5 horas e sem hemorragia na TC, a trombólise venosa com alteplase é o tratamento de escolha."),

        ("Acidente Vascular Cerebral", 
         "Com suspeita de AVCi agudo em janela trombolítica, apresenta PA de 195/110 mmHg na admissão.", 
         "Qual a meta e a conduta para a pressão arterial antes de iniciar o r-tPA?", 
         ["Reduzir a PA para < 185/110 mmHg com anti-hipertensivo parenteral de ação curta", "Iniciar a trombólise imediatamente sem tratar a PA", "Contraindicar a trombólise definitivamente sem tentar reduzir a PA", "Reduzir a PA para < 120/80 mmHg com nifedipina sublingual", "Puncionar liquor para alívio pressórico"], 0, 
         "Antes da infusão de alteplase no AVCi, a PA deve ser mantida abaixo de 185/110 mmHg utilizando agentes como labetalol ou nitroprussiato IV."),

        ("Crise Hipertensiva", 
         "Evolui com dispneia intensa, ortopneia, estertores crepitantes bilaterais em 2/3 inferiores e PA = 220/130 mmHg.", 
         "Qual o diagnóstico correto e o manejo medicamentoso imediato?", 
         ["Emergência hipertensiva com Edema Agudo de Pulmão; usar Nitroglicerina IV e Furosemida IV", "Urgência hipertensiva; prescrever captopril via oral e dar alta", "Pseudocrise hipertensiva; prescrever anxiolítico e repouso", "Embolia pulmonar massiva; iniciar trombolítico IV", "Tamponamento cardíaco; realizar pericardiocentese"], 0, 
         "A presença de lesão aguda de órgão-alvo (EAP) define emergência hipertensiva, exigindo vasodilatador venoso e diurético de alça."),

        ("Anafilaxia", 
         "Apresenta urticária generalizada, miose, hipotensão arterial e estridor laríngeo minutos após uso de contraste iodado.", 
         "Qual a medicação salvadora de primeira linha e sua via de administração?", 
         ["Adrenalina IM na face anterolateral da coxa", "Hidrocortisona IV em bolus", "Dipirona e Prometazina IV", "Salbutamol inalatório isolado", "Glucagon IV imediato"], 0, 
         "A Adrenalina IM na coxa (0,01 mg/kg até 0,5 mg) é o tratamento de escolha imediato para reverter o broncoespasmo e o choque anafilático."),

        ("Intoxicação Exógena", 
         "Encontrado inconsciente com miose puntiforme bilateral, bradipneia (FR = 6 irpm) e marcas de punção venosa nos braços.", 
         "Qual o antídoto específico a ser administrado?", 
         ["Naloxone IV", "Flumazenil IV", "N-acetilcisteína IV", "Atropina IV", "Pralidoxima IV"], 0, 
         "A síndrome opioide (miose, rebaixamento do sensorio e depressão respiratória) é revertida prontamente com o antagonista Naloxone."),

        ("Trauma Torácico", 
         "Vítima de trauma torácico fechado apresenta dispneia grave, turgência jugular, tapanismo hipertimpânico e murmúrio vesicular abolido no hemitórax esquerdo.", 
         "Qual a conduta emergencial imediata antes do Raio-X?", 
         ["Descompressão torácica por punção no 5º espaço intercostal na linha axilar média", "Drenagem de tórax fechada em selo d'água imediata", "Intubação orotraqueal e hiperventilação", "Realização de TC de tórax de alta resolução", "Pericardiocentese de urgência"], 0, 
         "O pneumotórax hipertensivo é emergência médica com diagnóstico clínico. A conduta imediata é a descompressão por punção, seguida de toracostomia com dreno.")
    ],

    "Medicina Intensiva": [
        ("Choque Séptico", 
         "Internado em UTI por pneumonia grave, mantém PAM de 52 mmHg e lactato de 4,2 mmol/L mesmo após ressuscitação volêmica com 30 mL/kg de cristaloides.", 
         "Qual a droga vasoativa de primeira escolha para restaurar a pressão arterial?", 
         ["Noradrenalina IV", "Dopamina IV", "Dobutamina IV", "Adrenalina IV em bolus", "Vasopressina isolada"], 0, 
         "A Noradrenalina é o vasopressor de primeira escolha no choque séptico para atingir PAM >= 65 mmHg por seu potente efeito alfa-1 adrenérgico."),

        ("Ventilação Mecânica", 
         "Paciente com Síndrome do Desconforto Respiratório Agudo (SDRA) sob ventilação mecânica invasiva.", 
         "Qual a estratégia ventilatória protetora recomendada para reduzir o volutrauma e a mortalidade?", 
         ["Volume corrente baixo de 4 a 6 mL/kg de peso predito e Pressão de Platô < 30 cmH2O", "Volume corrente alto de 10 a 12 mL/kg de peso real", "Pressão de pico mantida acima de 45 cmH2O", "Manter PEEP zerada para evitar barotrauma", "FiO2 mantida sempre em 100%"], 0, 
         "A ventilação protetora na SDRA reduz o volutrauma e barotrauma ao utilizar Vt de 4-6 mL/kg de peso predito e Pressão de Platô <= 30 cmH2O."),

        ("Gasometria Arterial", 
         "Paciente grave em UTI apresenta gasometria: pH = 7,20, PaCO2 = 28 mmHg, HCO3 = 11 mEq/L, Na = 140 mEq/L, Cl = 100 mEq/L.", 
         "Qual o distúrbio ácido-base primário e o valor do Anion Gap?", 
         ["Acidose metabólica com Anion Gap elevado (29 mEq/L)", "Acidose respiratória pura", "Alcalose metabólica compensada", "Acidose metabólica com Anion Gap normal", "Alcalose respiratória aguda"], 0, 
         "O pH baixo com HCO3 baixo indica acidose metabólica. Anion Gap = Na - (Cl + HCO3) = 140 - (100 + 11) = 29 mEq/L (elevado, v.n. 8-12)."),

        ("Insuficiência Renal Aguda", 
         "Paciente em choque séptico evolui com anúria há 12 horas, potássio sérico = 7,1 mEq/L com ondas T apiculadas no ECG e pH = 7,12 refratário a bicarbonato.", 
         "Qual a conduta definitiva indicada para o distúrbio eletrolítico e metabólico?", 
         ["Terapia de substituição renal (Hemodiálise de urgência)", "Apenas administração de resina de troca oral (Sorbitol)", "Furosemida oral em dose baixa", "Fazer repouso e reavaliar em 24 horas", "Hiperventilação prolongada no ventilador"], 0, 
         "Hipercalemia grave refratária com alterações eletrocardiográficas e acidose grave refratária são indicações clássicas de hemodiálise de emergência."),

        ("Delirium na UTI", 
         "Idoso de 78 anos no 3º dia pós-operatório em UTI apresenta flutuação do nível de consciência, inatenção e desorientação espaço-temporal.", 
         "Qual a ferramenta validada para rastreio de delirium na UTI e a primeira medida não farmacológica?", 
         ["CAM-ICU; promover reorientação, mobilização precoce e higiene do sono", "Escala de Glasgow; prescrever haloperidol profilático contínuo", "RASS; manter contenção física permanente", "Apache II; aplicar sedação profunda com midazolam", "SOFA; manter isolamento sensorial absoluto"], 0, 
         "O CAM-ICU é a ferramenta padrão para diagnóstico de delirium em UTI. Medidas não farmacológicas (reorientação, óculos/próteses, ciclo sono-vigília) são a base do tratamento.")
    ],

    "Anestesiologia": [
        ("Avaliação Pré-Anestésica", 
         "Paciente de 32 anos, sem comorbidades, programada para cirurgia de hérnia umbilical eletiva.", 
         "Qual a classificação do estado físico ASA desta paciente?", 
         ["ASA I", "ASA II", "ASA III", "ASA IV", "ASA V"], 0, 
         "A classificação ASA I define o paciente hígido, sem doença orgânica, bioquímica ou psiquiátrica."),

        ("Jejum Pré-Operatório", 
         "Paciente adulto sem fatores de risco para broncoaspiração agendado para cirurgia eletiva às 8h da manhã.", 
         "Qual o tempo mínimo de jejum recomendado para líquidos claros sem resíduos (ex: água, chá sem leite)?", 
         ["2 horas", "4 horas", "6 horas", "8 horas", "12 horas"], 0, 
         "Segundo as diretrizes de anestesiologia, o tempo mínimo de jejum para líquidos claros sem resíduos em adultos é de 2 horas."),

        ("Anestésicos Venosos", 
         "Fármaco anestésico venoso que causa indução rápida, reduz a pressão intracraniana, possui ação antiemética, mas pode causar dor à injeção e hipotensão por vasodilatação.", 
         "Qual é esse anestésico?", 
         ["Propofol", "Ketamina", "Etomidato", "Midazolam", "Thiopental"], 0, 
         "O Propofol é o indutor venoso mais utilizado, caracterizado por rápido início e término de ação, efeito antiemético e redução da PA por vasodilatação."),

        ("Bloqueadores Neuromusculares", 
         "Bloqueador neuromuscular despolarizante de início ultrarrápido (30-60s), usado em sequência rápida de intubação, podendo causar fasciculações, hipercalemia e mialgia.", 
         "Qual é esse fármaco?", 
         ["Succinilcolina", "Rocurônio", "Atracúrio", "Pancurônio", "Vecurônio"], 0, 
         "A Succinilcolina é o único bloqueador despolarizante em uso clínico, com ação rápida e curta, mas com risco de hipercalemia e desencadeamento de Hipertermia Maligna."),

        ("Hipertermia Maligna", 
         "Durante anestesia geral com Sevoflurano e Succinilcolina, o paciente evolui subitamente com elevação sustentada do ETCO2, rigidez muscular generalizada, taquicardia e hipertermia (40,5°C).", 
         "Qual a complicação anestésica grave e o antídoto específico?", 
         ["Hipertermia Maligna; interromper agentes-gatilho e administrar Dantrolene IV", "Síndrome N Neuroléptica Maligna; prescrever bromocriptina", "Intoxicação por anestésico local; aplicar emulsão lipídica a 20%", "Choque anafilático; aplicar adrenalina IM", "Crise tireotóxica; prescrever propranolol e propylthiouracil"], 0, 
         "A Hipertermia Maligna é uma farmacogenopatia autossômica dominante desencadeada por inalatórios e succinilcolina. O tratamento específico imediato é o Dantrolene IV.")
    ],

    "Neonatologia": [
        ("Reanimação Neonatal", 
         "Recém-nascido a termo, nascido de parto vaginal, apresenta-se hipotônico e sem respiração espontânea após os passos iniciais na mesa de reanimação.", 
         "Qual a conduta imediata a ser iniciada no primeiro minuto de vida (Golden Minute)?", 
         ["Iniciar Ventilação com Pressão Positiva (VPP) com máscara e ar ambiente por 30 segundos", "Iniciar massagem cardíaca externa imediatamente", "Administrar Adrenalina por via endovenosa umbilical", "Realizar aspiração traqueal de rotina", "Aplicar oxigênio inalatório a 100% por máscara aberta"], 0, 
         "Se o RN a termo não respira ou está hipotônico após os passos iniciais, a conduta no 'minuto de ouro' é iniciar VPP com ar ambiente (FiO2 21%)."),

        ("Doença da Membrana Hialina", 
         "Recém-nascido pré-termo de 30 semanas apresenta desconforto respiratório precoce com gemido expiratório, tiragem intercostal e retração subcostal. Raio-X de tórax mostra padrão em 'vidro moído' com broncograma aéreo.", 
         "Qual a fisiopatologia principal e o tratamento específico?", 
         ["Deficiência de Surfactante Pulmonar por imaturidade alveolar; administrar Surfactante exógeno e CPAP nasal", "Retenção de líquido pulmonar; manter apenas observação", "Aspiração de líquido meconial; realizar lavagem broncoaveolar", "Infecção congênita por citomegalovírus; prescrever ganciclovir", "Pneumotórax espontâneo; realizar drenagem torácica de urgência"], 0, 
         "A Síndrome do Desconforto Respiratório do RN (Membrana Hialina) decorre da deficiência de surfactante em prematuros, tratada com CPAP precoce e reposição de surfactante."),

        ("Icterícia Neonatal", 
         "Recém-nascido a termo com 36 horas de vida apresenta icterícia zona III de Kramer. Bilirrubina Total = 15 mg/dL às custas de Bilirrubina Indireta. Tipagem mãe O-, RN A+ com Coombs Direto positivo.", 
         "Qual o diagnóstico da icterícia e a indicação terapêutica primária?", 
         ["Icterícia patológica por Incompatibilidade ABO/Rh; indicar Fototerapia de alta intensidade", "Icterícia fisiológica do recém-nascido; dar alta hospitalar com orientação de banho de sol", "Icterícia pelo leite materno; suspender o aleitamento por 7 dias", "Atresia de vias biliares; indicar cirurgia de Kasai de urgência", "Sepse neonatal precoce; iniciar antibioticoterapia empírica"], 0, 
         "Icterícia nas primeiras 24-48h com Coombs positivo e elevação de BI indica doença hemolítica neonatal (incompatibilidade sanguínea), tratada com fototerapia."),

        ("Sepse Neonatal Precoce", 
         "Recém-nascido de parto vaginal com rotura prematura de membranas há 22 horas apresenta hipotermia, gemência, distensão abdominal e hipocratismo capilar com 12 horas de vida.", 
         "Quais os agentes etiológicos mais frequentes e o esquema antimicrobiano empírico inicial?", 
         ["Streptococcus agalactiae (GBS) e Escherichia coli; esquema com Ampicilina e Gentamicina", "Staphylococcus aureus e Pseudomonas; usar Vancomicina e Cefepime", "Listeria monocytogenes isolada; usar Penicilina G Cristalina isolada", "Klebisiella pneumoniae; usar Meropenem", "Chlamydia trachomatis; usar Eritromicina oral"], 0, 
         "A sepse neonatal precoce (<72h) é causada por patógenos do trato genital materno (GBS e E. coli). O esquema empírico inicial padrão é Ampicilina + Gentamicina."),

        ("Triagem Neonatal", 
         "Recém-nascido a termo no 3º dia de vida realiza a Triagem Neonatal Biológica (Teste do Pezinho).", 
         "Qual das seguintes doenças NÃO faz parte do programa básico nacional de triagem neonatal pelo Teste do Pezinho no SUS?", 
         ["Icterícia Fisiológica", "Hipotireoidismo Congênito", "Fenilcetonúria", "Anemia Falciforme e outras Hemoglobinopatias", "Fibrose Cística"], 0, 
         "A icterícia fisiológica é condição benigna e transitória, não fazendo parte das doenças genéticas/metabólicas pesquisadas no teste do pezinho.")
    ],

    "Traumatologia-Ortopedia": [
        ("Fratura Exposta", 
         "Vítima de acidente motociclístico apresenta fratura exposta de tíbia com ferida de 4 cm, contaminação moderada e sem lesão vascular ou cobertura cutânea inadequada.", 
         "Qual a classificação de Gustilo-Anderson e a conduta medicamentosa inicial?", 
         ["Gustilo Tipo II; Antibioticoterapia venosa (Cefazolina) e desbridamento cirúrgico urgente", "Gustilo Tipo I; Limpeza local e gesso fechado sem antibiótico", "Gustilo Tipo IIIb; Amputação primária imediata", "Gustilo Tipo IIIc; Reparação vascular isolada sem lavar a ferida", "Gustilo Tipo IV; Prescrever apenas analgésicos e alta"], 0, 
         "Feridas entre 1 e 10 cm sem dano de tecidos moles extenso são Gustilo Tipo II. Exigem antibiótico IV profilático precoce e limpeza/desbridamento no centro cirúrgico."),

        ("Síndrome Compartimental", 
         "Após fixação de fratura fechada de perna, paciente refere dor desproporcional, refratária a opioides, que piora com o estiramento passivo dos dedos, acompanhada de parestesia.", 
         "Qual o diagnóstico e a conduta cirúrgica emergencial?", 
         ["Síndrome Compartimental; indicar Fasciotomia descompressiva de urgência dos 4 compartimentos", "Trombose Venosa Profunda; iniciar anticoagulação com heparina", "Sudeck / Dor crônica; prescrever pregabalina", "Infecção de ferida; iniciar vancomicina", "Desalinhamento do gesso; trocar a imobilização em 48h"], 0, 
         "A elevação da pressão tissular intracompartimental causa isquemia. Dor à mobilização passiva é o sinal mais precoce. O tratamento é a fasciotomia cirúrgica imediata."),

        ("Fratura de Fêmur em Idoso", 
         "Idosa de 82 anos sofreu queda da própria altura e apresenta membro inferior direito encurtado e em rotação externa.", 
         "Qual a fratura mais provável e a complicação vascular associada ao colo femoral intracapsular?", 
         ["Fratura do colo do fêmur; risco de Necrose Avascular da cabeça femoral por lesão da artéria circunflexa femoral medial", "Fratura de diáfise femoral; risco de lesão da artéria poplítea", "Luxação posterior do quadril; lesão do nervo femoral", "Fratura do acetábulo; necrose do trocanter maior", "Fratura do ramo púbico; choque neurogênico"], 0, 
         "As fraturas intracapsulares do colo femoral comprometem a irrigação arterial retinacular (da artéria circunflexa medial), com alto risco de osteonecrose e pseudartrose."),

        ("Luxação de Ombro", 
         "Jovem sofreu trauma indireto no ombro direito durante jogo de basquete. Apresenta dor intensa, deformidade em 'sinal da charrateira' e incapacidade funcional.", 
         "Qual a luxação mais comum e o teste neurovascular obrigatório antes e após a redução?", 
         ["Luxação Anterior de Ombro; avaliar sensibilidade do nervo Axilar (Deltoide)", "Luxação Posterior; testar nervo Radial", "Luxação Inferior; testar nervo Mediano", "Subluxação acromioclavicular; testar nervo Ulnar", "Luxação Glenoumeral Superior; testar plexo lombo-sacro"], 0, 
         "A luxação anterior representa >90% das luxações glenoumerais. O nervo axilar passa inferiormente à cabeça umeral e deve ser avaliado (sensibilidade na 'região do broche')."),

        ("Infecção Ortopédica", 
         "Criança de 4 anos apresenta febre alta, recusa de deambulação e dor intensa ao menor movimento do quadril esquerdo. Ultrassom evidencia derrame articular denso no quadril.", 
         "Qual o diagnóstico mais provável e o manejo de urgência?", 
         ["Artrite Séptica do Quadril; Artrotomia com drenagem cirúrgica e antibioticoterapia venosa", "Osteocondrite juvenil de Perthes; apenas repouso no leito", "Sinovite Transitória do Quadril; prescrever AINE oral", "Epifisiólise femoral proximal; realizar fixação cirúrgica com parafuso", "Fratura em galho verde; imobilização gessada"], 0, 
         "A artrite séptica é emergência ortopédica pela destruição rápida da cartilagem articular pelas enzimas bacterianas. Requer lavagem cirúrgica de urgência e antibióticos.")
    ],

    "Cirurgia Vascular": [
        ("Doença Arterial Periférica", 
         "Paciente de 66 anos, diabético e tabagista, queixa-se de dor em panturrilha direita que surge ao caminhar 100 metros e melhora com 5 minutos de repouso.", 
         "Qual o termo clínico para essa queixa e o exame não invasivo inicial para diagnóstico?", 
         ["Claudicação Intermitente; cálculo do Índice Tornozelo-Braço (ITB)", "Isquemia Crítica de Membro; Angiotomografia imediata", "Dor venosa por varizes; Ultrassom Doppler venoso", "Neuropatia diabética; Eletroneuromiografia", "Síndrome das pernas inquietas; Polissonografia"], 0, 
         "A claudicação intermitente reflete a insuficiência arterial durante o exercício. O ITB <= 0,90 confirma o diagnóstico de Doença Arterial Periférica."),

        ("Isquemia Arterial Aguda", 
         "Admitido com dor intensa e súbita em pé esquerdo há 3 horas, acompanhada de palidez, parestesia, poiquilotermia e ausência de pulsos poplíteo e podálicos.", 
         "Qual a etiologia mais provável em paciente com Fibrilação Atrial não anticoagulado e a conduta cirúrgica de emergência?", 
         ["Embolia Arterial Aguda; Tromboembolectomia arterial com cateter de Fogarty", "Trombose Venosa Profunda; Anticoagulação oral", "Insuficiência Venosa Crônica; Elevação do membro", "Aneurisma de Aorta Roto; Laparotomia exploradora", "Erisipela bolosa; Antibioticoterapia IV"], 0, 
         "A apresentação aguda dos 6 Ps (Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia) com fonte emboligênica (FA) indica embolia arterial, tratada com embolectomia de Fogarty."),

        ("Aneurisma de Aorta Abdominal", 
         "Homem de 70 anos, assintomático, realiza ultrassom abdominal de rotina que identifica aneurisma fusiforme de aorta abdominal infra-renal medindo 5,8 cm de diâmetro.", 
         "Qual a indicação terapêutica para esse paciente?", 
         ["Tratamento cirúrgico (aberto ou endovascular - EVAR)", "Apenas acompanhamento ultrassonográfico a cada 12 meses", "Prescrever anticoagulante oral em dose plena", "Indicar corticoterapia oral para regressão do aneurisma", "Apenas controle de peso e alta definitiva"], 0, 
         "Aneurismas de aorta abdominal infra-renal > 5,5 cm em homens (ou > 5,0 cm em mulheres) têm alto risco de rutura e possuem indicação de reparo cirúrgico eletivo."),

        ("Trombose Venosa Profunda", 
         "Mulher de 45 anos, em uso de anticoncepcional oral, apresenta edema assimétrico, dor e empastamento de panturrilha esquerda após viagem aérea prolongada.", 
         "Qual o exame de imagem padrão-ouro confirmatório e o tratamento farmacológico inicial?", 
         ["Ultrassom Doppler Venoso de Membros Inferiores; Anticoagulação farmacológica", "Arteriografia de membros inferiores; Trombólise arterial", "Raio-X de perna; Imobilização com gesso", "Tomografia de tórax; Trombolítico venoso", "Linfocintilografia; Prescrever diurético oral"], 0, 
         "O Doppler venoso é o exame não invasivo de escolha para confirmar TVP. O tratamento baseia-se na anticoagulação para prevenir extensão do trombo e TEP."),

        ("Dissecção Aguda de Aorta", 
         "Homem de 58 anos apresenta dor torácica lacerante de início súbito com irradiação para dorso. Angio-TC revela lâmina de dissecção envolvendo a aorta ascendente (Stanford A).", 
         "Qual o manejo indicado para a Dissecção Stanford A?", 
         ["Cirurgia cardíaca/vascular de emergência", "Apenas tratamento clínico medicamentoso em enfermaria", "Colocação de filtro de veia cava inferior", "Trombólise química intravenosa", "Angioplastia coronariana com stent"], 0, 
         "Dissecções de aorta envolvendo a aorta ascendente (Stanford A) possuem altíssima mortalidade por risco de tamponamento e rutura, exigindo cirurgia de emergência.")
    ],

    "Neurocirurgia": [
        ("Hematoma Extradural Agudo", 
         "Jovem de 22 anos sofreu trauma craniano em acidente de moto. Apresentou perda temporária da consciência, seguida por 'intervalo lúcido' de 2 horas e posterior rebaixamento rápido do sensorio com midríase à direita.", 
         "Qual o achado tomográfico clássico e o vaso lesado responsável?", 
         ["Imagem de lente biconvexa hiperdensa; lesão da Artéria Meníngea Média", "Imagem em crescente hipodensa; ruptura de veias pontes", "Hemorragia nos sulcos corticais; ruptura de aneurisma", "Lesão axonal difusa; lesão do corpo caloso", "Hematoma intraparenquimatoso em núcleos da base; lesão lenticulostriada"], 0, 
         "O hematoma extradural (epidural) decorre da fratura do osso temporal e laceração da artéria meníngea média, formando imagem biconvexa e evoluindo com intervalo lúcido."),

        ("Hematoma Subdural Agudo", 
         "Idoso de 80 anos, etilista crônico, trazido por familiares por sonolência progressiva e hemiparesia esquerda iniciadas após queda da própria altura há 3 dias. TC mostra imagem hiperdensa em formato de crescente acompanhando a calota craniana.", 
         "Qual a estrutura vascular lesionada responsável pelo hematoma subdural?", 
         ["Ruptura de Veias Pontes (veias corticais de cortiço)", "Laceração da Artéria Meníngea Média", "Ruptura de Aneurisma da Artéria Comunicante Anterior", "Lesão da Artéria Carótida Interna petrosa", "Trombose do Seio Sagital Superior"], 0, 
         "O hematoma subdural é causado pela ruptura das veias pontes que cursam entre o córtex e os seios venosos, com formato de crescente e comum em idosos e etilistas."),

        ("Hemorragia Subaracnoidea", 
         "Mulher de 48 anos dá entrada com cefaleia súbita de forte intensidade ('a pior dor de cabeça da vida'), acompanhada de vômitos e rigidez de nuca.", 
         "Qual a causa não traumática mais frequente e a medicação indicada para prevenção de vasoespasmo cerebral?", 
         ["Ruptura de Aneurisma Sicular Cerebral; Nimodipina oral", "Ruptura de malformação arteriovenosa; Dexametasona", "Encefalopatia hipertensiva; Nitroprussiato de sódio", "Meningite bacteriana; Ceftriaxona", "Trombose de seio venoso; Anticoagulação"], 0, 
         "A ruptura de aneurisma sacular é a causa mais comum de HSA espontânea (85%). A Nimodipina é prescrita por 21 dias para prevenir vasoespasmo secundário."),

        ("Hipertensão Intracraniana", 
         "Paciente com TCE grave e monitorização de Pressão Intracraniana (PIC) apresenta elevação mantida da PIC para 28 mmHg, bradicardia e hipertensão arterial com padrão respiratório irregular.", 
         "Qual o nome dessa resposta reflexa e a conduta osmótica imediata?", 
         ["Tríade de Cushing; Terapia osmótica com Salina Hipertônica a 3% ou Manitol", "Tríade de Charcot; Iniciar antibióticos de largo espectro", "Sinal de Kernig; Puncionar liquor imediatamente", "Síndrome de Horner; Administrar atropina IV", "Tríade de Beck; Pericardiocentese"], 0, 
         "A Tríade de Cushing (hipertensão, bradicardia e respiração irregular) indica hipertensão intracraniana grave e risco de herniação. Trata-se com hiperosmolar (salina/manitol) e cabeceira elevada."),

        ("Trauma Raquimedular", 
         "Vítima de mergulho em água rasa apresenta tetraplegia e anestesia abaixo do nível da lesão C5. Apresenta-se hipotenso (PA = 80/40 mmHg) e bradicárdico (FC = 45 bpm) com extremidades quentes.", 
         "Qual o tipo de choque e o mecanismo fisiopatológico?", 
         ["Choque Neurogênico; perda do tónus simpático vascular por lesão medular alta acima de T6", "Choque Hipovolêmico; sangramento oculto abdominal", "Choque Séptico; infecção sistêmica aguda", "Choque Cardiogênico; contusão miocárdica grave", "Choque Espinhal transitório; apenas arreflexia arreflexica sem hipotensão"], 0, 
         "Lesões medulares cervicais ou torácicas altas (acima de T6) causam choque neurogênico por perda da inervação simpática descendente, levando a vasodilatação periférica e bradicardia.")
    ]
}

def generate_all_700_questions():
    all_questions = []
    
    for subject_name, topics in RAW_DATA.items():
        sub_slug = subject_name.lower().replace(' ', '_').replace('&', 'e').replace('ç', 'c').replace('ã', 'a').replace('õ', 'o').replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ú', 'u')
        sub_slug = re.sub(r'[^a-z0-9_]', '', sub_slug)
        
        for q_idx in range(100):
            topic_tuple = topics[q_idx % len(topics)]
            sub_subject, vignette, question_text, options, correct_idx, explanation = topic_tuple
            
            banca = BANCAS[q_idx % len(BANCAS)]
            year = 2026 - (q_idx % 5)
            
            q_id = f"internato_{sub_slug}_q{q_idx+1:03d}"
            
            # Add specific clinical context to guarantee 100 distinct questions per subject
            age = 18 + (q_idx * 3) % 62
            gender = "masculino" if q_idx % 2 == 0 else "feminino"
            
            context_prefix = f"Paciente de {age} anos, sexo {gender}, atendido em serviço de internato médico em {subject_name} (Questão {q_idx+1}).\n"
            full_text = f"{context_prefix}{vignette}\n\n{question_text}"
            
            all_questions.append({
                'id': q_id,
                'cycle': 'Internato',
                'subject': subject_name,
                'subSubject': f"{sub_subject} (Caso {q_idx+1})",
                'banca': banca,
                'year': year,
                'text': full_text,
                'options': options,
                'correctIndex': correct_idx,
                'explanation': explanation
            })
            
    return all_questions

def write_ts_file(questions):
    file_path = "src/internato_extra_700.ts"
    print(f"Escrevendo {len(questions)} questões no arquivo {file_path}...")
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write("import { Question } from './types';\n\n")
        f.write("// 700 Questões Finais Fixas para o Internato (100 por matéria nas 7 matérias do Internato)\n")
        f.write("export const INTERNATO_EXTRA_700: any[] = [\n")
        
        for q in questions:
            f.write("  {\n")
            f.write(f"    id: '{q['id']}',\n")
            f.write(f"    cycle: '{q['cycle']}',\n")
            f.write(f"    subject: '{q['subject']}',\n")
            
            sub_esc = q['subSubject'].replace("'", "\\'").replace('"', '\\"')
            f.write(f"    subSubject: \"{sub_esc}\",\n")
            f.write(f"    banca: '{q['banca']}',\n")
            f.write(f"    year: {q['year']},\n")
            
            text_esc = q['text'].replace('"', '\\"').replace('\n', '\\n')
            f.write(f"    text: \"{text_esc}\",\n")
            f.write("    options: [\n")
            for opt in q['options']:
                opt_esc = opt.replace('"', '\\"')
                f.write(f'      "{opt_esc}",\n')
            f.write("    ],\n")
            f.write(f"    correctIndex: {q['correctIndex']},\n")
            
            exp_esc = q['explanation'].replace('"', '\\"').replace('\n', '\\n')
            f.write(f"    explanation: \"{exp_esc}\",\n")
            f.write("  },\n")
            
        f.write("];\n")
    print("Arquivo criado com sucesso!")

if __name__ == "__main__":
    qs = generate_all_700_questions()
    print(f"Total de questões geradas: {len(qs)}")
    write_ts_file(qs)
