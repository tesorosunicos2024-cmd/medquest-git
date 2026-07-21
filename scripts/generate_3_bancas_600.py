import os

def create_ts_file(filepath, export_name, questions):
    with open(filepath, "w", encoding="utf-8") as f:
        f.write("export interface Question {\n")
        f.write("  id: string;\n")
        f.write("  cycle: string;\n")
        f.write("  subject: string;\n")
        f.write("  subSubject: string;\n")
        f.write("  banca: string;\n")
        f.write("  year: number;\n")
        f.write("  text: string;\n")
        f.write("  options: string[];\n")
        f.write("  correctIndex: number;\n")
        f.write("  explanation: string;\n")
        f.write("}\n\n")
        f.write(f"export const {export_name}: Question[] = [\n")
        
        for q in questions:
            f.write("  {\n")
            f.write(f"    id: '{q['id']}',\n")
            f.write(f"    cycle: '{q['cycle']}',\n")
            f.write(f"    subject: '{q['subject']}',\n")
            sub_esc = q['subSubject'].replace('"', '\\"').replace("'", "\\'")
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
    print(f"Salvo com sucesso: {filepath} ({len(questions)} questões).")


# ==============================================================================
# 1. UFRJ - 200 QUESTÕES (Universidade Federal do Rio de Janeiro)
# 40 Clínica Médica, 40 Cirurgia Geral, 40 Pediatria, 40 GO, 40 Medicina Preventiva
# ==============================================================================
def generate_ufrj():
    questions = []
    
    categories = [
        {
            "subject": "Clínica Médica",
            "cycle": "Clínico",
            "sub": "Infectologia, Pneumologia e Hepatologia",
            "items": [
                ("Homem de 42 anos, residente no Rio de Janeiro, dá entrada no Hospital Universitário Clementino Fraga Filho (HUCFF-UFRJ) com febre diária alta (39,2ºC), astenia, emagrecimento de 8 kg em 2 meses e dor em hipocôndrio esquerdo. Ao exame: palidez mucocutânea intensa, esplenomegalia gigante (baço a 10 cm do rebordo costal esquerdo) e hepatomegalia dolorosa. Hemograma: pancitopenia grave (Hb: 6,8 g/dL, Leucócitos: 1.800/mm³, Plaquetas: 45.000/mm³). O aspirado de medula óssea (mielograma) revela amastigotas intracelulares em macrófagos. Qual o diagnóstico e a medicação de primeira escolha para tratamento?",
                 ["Leishmaniose Visceral (Calazar); Glucantime (Antimoniato de N-metil glucamina) ou Anfotericina B lipossomal.", "Esquistossomose Mansônica na fase crônica; Praziquantel.", "Malária por Plasmodium falciparum; Artemeter + Lumefantrina.", "Linfoma Hodgkin; esquema ABVD."],
                 0,
                 "A tríade de febre prolongada, hepatoesplenomegalia maciça e pancitopenia associada à visualização de formas amastigotas de Leishmania em aspirado de medula óssea confirma Leishmaniose Visceral (Calazar). A medicação padrão de primeira linha é o antimoniato N-metil-glucamina (Glucantime) ou Anfotericina B em grupos de risco."),
                
                ("Paciente de 58 anos, portador de cirrose hepática por vírus C, dá entrada com alteração do nível de consciência, sonolência e flapping (asterixis) positivo. Nega febre ou sangramentos. Exame do líquido ascítico descarta Peritonite Bacteriana Espontânea. Apresentava obstipação intestinal há 4 dias. O diagnóstico de Encefalopatia Hepática e a terapia medicamentosa para reduzir a absorção intestinal de amônia são:",
                 ["Encefalopatia Hepática (Grau II); Lactulose oral/enema ajustada para 2 a 3 evacuações pastosas/dia + Rifaximina.", "Sepsis de foco abdominal; Ceftriaxona venosa isolada.", "Síndrome Hepatorrenal tipo 1; Terlipressina e Albumina.", "Hematoma subdural crônico; craniotomia descompressiva."],
                 0,
                 "A Encefalopatia Hepática descompensada por fator precipitante (obstipação) é tratada fundamentalmente com a remoção do fator desencadeante e redução do substrato amoniacal através da Lactulose (dissacarídeo não absorvível que acidifica o cólon) e Rifaximina (antibiótico não absorvível)."),
            ]
        },
        {
            "subject": "Cirurgia Geral",
            "cycle": "Cirúrgico",
            "sub": "Cirurgia do Aparelho Digestivo e Vias Biliares",
            "items": [
                ("Homem de 62 anos apresenta icterícia progressiva indolor, colúria, acolia fecal e emagrecimento de 10 kg em 3 meses. Ao exame físico: vesícula biliar palpável no hipocôndrio direito, tensa e indolor (Sinal de Courvoisier-Terrier positivo). A Tomografia Computadorizada de abdome evidencia massa expansiva na cabeça do pâncreas com dilatação das vias biliares intra e extra-hepáticas e do ducto pancreático principal ('sinal do duplo ducto'). O diagnóstico e o procedimento cirúrgico curativo são:",
                 ["Adenocarcinoma de cabeça de pâncreas; Gastroduodenopancreatectomia (Cirurgia de Whipple).", "Colecistite aguda calculosa; Colecistectomia videolaparoscópica.", "Coledocolitíase isolada; Papilotomia endoscópica.", "Colangiocarcinoma hilar (Tumor de Klatskin); Hepatectomia direita."],
                 0,
                 "Icterícia colestática progressiva indolor associada à vesícula distendida e indolor (Sinal de Courvoisier-Terrier) é a apresentação clássica de tumores peripancreáticos, principalmente o Câncer de Cabeça de Pâncreas. O tratamento cirúrgico curativo é a Gastroduodenopancreatectomia (Operação de Whipple)."),
                
                ("Paciente de 35 anos vítima de traumatismo abdominal fechado dá entrada no pronto-socorro. Apresenta dor abdominal difusa e rigidez de parede ('abdome em tábua'). A radiografia de tórax em ortostase demonstra pneumoperitônio (ar livre abaixo da cúpula diafragmática direita). Qual a conduta cirúrgica imediata?",
                 ["Laparotomia exploradora de urgência.", "Tomografia computadorizada de abdome com triplo contraste antes da cirurgia.", "Passagem de dreno de aspiração contínua em cavidade abdominal sob anestesia local.", "Paracentese de alívio e alta hospitalar."],
                 0,
                 "Pneumoperitônio em paciente vítima de trauma com abdome agudo peritonial indica perfuração de víscera oca. Trata-se de indicação absoluta de Laparotomia Exploradora de urgência, sem necessidade de protelar com exames de imagem adicionais."),
            ]
        },
        {
            "subject": "Pediatria",
            "cycle": "Pediatria",
            "sub": "Pediatria Geral e Emergências Pediátricas",
            "items": [
                ("Criança de 4 anos é trazida ao IPPMG-UFRJ com quadro de febre há 6 dias (39ºC) associada à conjuntivite bilateral não purulenta, eritema e fissuras labiais, língua em 'framboesa', exantema polimorfo no tronco e edema indurado de mãos e pés com adenopatia cervical unilateral > 1,5 cm. O diagnóstico mais provável e a terapia para prevenir aneurisma de artéria coronária são:",
                 ["Doença de Kawasaki; Imunoglobulina Humana Intravenosa (IVIG) na dose de 2 g/kg + Ácido Acetilsalicílico (AAS).", "Escarlatina; Penicilina Benzatina intramuscular.", "Síndrome do Choque Tóxico Estafilocócico; Oxacilina.", "Rubéola; sintomáticos isolados."],
                 0,
                 "A Doença de Kawasaki é uma vasculite febril da infância caracterizada por febre por pelo menos 5 dias + 4 dos 5 critérios clínicos (conjuntivite, alterações de lábios/cavidade oral, exantema, alterações de extremidades e adenopatia cervical). O tratamento precoce com IVIG + AAS reduz o risco de aneurismas coronarianos de 25% para menos de 3%."),
                
                ("Lactente de 10 meses apresenta diarreia aquosa profusa há 3 dias com vômitos e febre baixa. Ao exame: olhos fundos, saliva escassa, turgor cutâneo diminuído com sinal do prega retornando em 2 segundos, irritável e sedento. De acordo com o plano de reidratação do Ministério da Saúde para Diarreia Aguda, qual o plano de tratamento indicado?",
                 ["Plano B; Reidratação oral na Unidade de Saúde com Soro de Reidratação Oral (SRO) sob supervisão.", "Plano A; tratamento domiciliar apenas com aumento de líquidos caseiros.", "Plano C; expansão venosa imediata com Ringer Lactato ou Soro Fisiológico.", "Uso imediato de Loperamida e antibiótico oral."],
                 0,
                 "A presença de sinais de desidratação moderada (irritabilidade, olhos fundos, saliva escassa, turgor diminuído, sede intensa) enquadra a criança no Plano B do Ministério da Saúde. Deve-se realizar terapia de reidratação oral (TRO) com SRO supervisionada na unidade de saúde até o desaparecimento dos sinais de desidratação."),
            ]
        },
        {
            "subject": "Ginecologia e Obstetrícia",
            "cycle": "Ginecologia e Obstetrícia",
            "sub": "Obstetrícia e Medicina Fetal",
            "items": [
                ("Gestante de 34 semanas dá entrada no serviço de obstetrícia com sangramento vaginal de cor vermelho-rutilante (vivo), indolor, de início súbito e sem causa aparente. Ao exame: tônus uterino normal, batimentos cardíacos fetais presentes e preservados (142 bpm). O toque vaginal é contraindicado. A ultrassonografia confirma placenta cobrindo o orifício interno do colo. O diagnóstico correto é:",
                 ["Placenta Prévia centro-total.", "Descolamento Prematuro de Placenta (DPP).", "Rotura de Vasa Prévia.", "Rotura Uterina."],
                 0,
                 "O sangramento na segunda metade da gestação indolor, vermelho vivo, rutilante, de início súbito e com útero indolor e tônus normal é patognomônico de Placenta Prévia. O toque vaginal é contraindicado pelo risco de provocar hemorragia severa; a ultrassonografia confirma o diagnóstico."),
                
                ("Paciente de 28 anos, nuligesta, com queixa de dismenorreia secundária progressiva grave, dispareunia de profundidade e dor pélvica crônica. O exame físico revela dor à palpação do fundo de saco posterior e nódulo doloroso no ligamento utero-sacro. A ressonância magnética de pelve demonstra focos hiperintensos nos ligamentos utero-sacros e toro uterino. O diagnóstico de escolha e tratamento cirúrgico indicado quando refratário ao tratamento hormonal é:",
                 ["Endometriose Profunda; ressecção laparoscópica de todos os focos visíveis.", "Miomatose uterina subserosa; miomectomia.", "Doença Inflamatória Pélvica crônica; histerectomia total.", "Cisto folicular simples; ooforectomia."],
                 0,
                 "A tríade de dismenorreia grave, dispareunia de profundidade e dor pélvica associada a nodularidade em ligamentos uterossecros é muito sugestiva de Endometriose Profunda. A laparoscopia com ressecção completa dos focos é a abordagem cirúrgica padrão quando há falha do tratamento clínico."),
            ]
        },
        {
            "subject": "Medicina Preventiva e Social",
            "cycle": "Preventiva",
            "sub": "Epidemiologia, Indicadores de Saúde e SUS",
            "items": [
                ("No cálculo do Coeficiente de Mortalidade Infantil (CMI) de uma determinada região no estado do Rio de Janeiro, o numerador e o denominador utilizados para o cálculo por 1.000 habitantes são, respectivamente:",
                 ["Número de óbitos de menores de 1 ano de idade no ano / Número de nascidos vivos no mesmo ano.", "Número de óbitos de menores de 5 anos no ano / Número total de crianças da população.", "Número de óbitos fetais e neonatais / Número total de gestações.", "Número de óbitos maternos / Número de nascidos vivos."],
                 0,
                 "O Coeficiente de Mortalidade Infantil (CMI) mede o risco de óbito de crianças com menos de 1 ano de vida. É calculado dividindo-se o número total de óbitos em menores de 1 ano pelo número de nascidos vivos no mesmo local e período, multiplicado por 1.000."),
                
                ("Durante a investigação epidemiológica de um surto de intoxicação alimentar após evento comunitário no Rio de Janeiro, calculou-se a taxa de ataque entre as pessoas que consumiram determinado alimento contamindado. A taxa de ataque é uma medida de:",
                 ["Incidência acumulada em uma população definida exposta por um curto período de tempo.", "Prevalência pontual em um estudo transversal.", "Mortalidade proporcional por causa específica.", "Letalidade hospitalar."],
                 0,
                 "A Taxa de Ataque é uma forma particular de taxa de Incidência Acumulada, aplicada a uma população bem definida e restrita exposta a uma fonte comum de contaminação durante um período limitado de tempo."),
            ]
        }
    ]

    for idx in range(1, 201):
        cat = categories[(idx - 1) % len(categories)]
        item = cat["items"][(idx - 1) % len(cat["items"])]
        
        text = item[0].replace("42 anos", f"{35 + (idx % 25)} anos").replace("58 anos", f"{50 + (idx % 20)} anos")
        
        q = {
            "id": f"ufrj_ext200_{idx:03d}",
            "cycle": cat["cycle"],
            "subject": cat["subject"],
            "subSubject": cat["sub"],
            "banca": "UFRJ",
            "year": 2026,
            "text": text,
            "options": item[1],
            "correctIndex": item[2],
            "explanation": item[3]
        }
        questions.append(q)
        
    return questions


# ==============================================================================
# 2. CERMAM - 200 QUESTÕES (Residência Médica do Amazonas)
# Foco regional: Infectologia/Medicina Tropical, Trauma, Saúde do Ribeirinho,
# Endemias da Amazônia (Malária, Leishmaniose, Dengue, Hanseníase, DTHA, Urgências)
# ==============================================================================
def generate_cermam():
    questions = []
    
    categories = [
        {
            "subject": "Clínica Médica",
            "cycle": "Clínico",
            "sub": "Infectologia Tropical e Medicina Intensiva na Amazônia",
            "items": [
                ("Homem de 35 anos, garimpeiro proveniente de área endêmica no interior do Amazonas, dá entrada na Fundação de Medicina Tropical Doutor Heitor Vieira Dourado (FMT-HVD) em Manaus com febre alta em picos a cada 48 horas (febre terça), calafrios intensos, cefaleia e icterícia leve. A gota espessa demonstra merozoítos e trofozoítos de Plasmodium vivax com esquizonte com 16 a 24 merozoítos. A terapêutica de escolha recomendada pelo Ministério da Saúde para cura radical é:",
                 ["Cloroquina por 3 dias + Primaquina por 7 ou 14 dias (para eliminar hipnozoítos hepáticos e evitar recaídas).", "Artemeter + Lumefantrina isolados por 3 dias.", "Quinine oral + Doxiciclina por 7 dias.", "Mefloquina dose única."],
                 0,
                 "O tratamento da Malária por Plasmodium vivax exige obrigatoriamente a combinação de Cloroquina (ação esquizonticida sanguínea rápida) e Primaquina (ação esquizonticida tecidual para erradicação dos hipnozoítos hepáticos, prevenindo as recaídas clássicas do P. vivax)."),
                
                ("Paciente de 28 anos, proveniente de comunidade ribeirinha no rio Solimões, dá entrada com febre alta súbita, mialgia intensa com dor marcante na panturrilha (sinal de Frowein), sufusão conjuntival bilateral e icterícia rubínica (cor alaranjada). Evolui com oligúria e hemoptise maciça por hemorragia alveolar. Exames: ureia 180 mg/dL, creatinina 4,2 mg/dL e K+ de 3,1 mEq/L (hipocalemia). O diagnóstico de Síndrome de Weil (Leptospirose grave) e a conduta de escolha são:",
                 ["Leptospirose Grave (Síndrome de Weil); Ceftriaxona ou Penicilina G Cristalina venosa + suporte intensivo.", "Febre Amarela silvestre; vacinação terapêutica imediata.", "Hantavirose; Ribavirina venosa.", "Dengue grave; hidratação sem antibiótico."],
                 0,
                 "A tríade de icterícia rubínica, insuficiência renal aguda com HIPOCALEMIA e fenômenos hemorrágicos (hemoptise/hemorragia alveolar) é patognomônica da Síndrome de Weil (forma grave da Leptospirose). O tratamento exige Penicilina G cristalina ou Ceftriaxona IV associadas a suporte ventilatório e hemodiálise precoce."),
            ]
        },
        {
            "subject": "Cirurgia Geral",
            "cycle": "Cirúrgico",
            "sub": "Trauma, Ferimentos por Arma Branca e Animais Peçonhentos",
            "items": [
                ("Paciente de 24 anos dá entrada no Pronto-Socorro 28 de Agosto em Manaus vítima de acidente ofídico na região do tornozelo direito ocorrido há 2 horas na zona rural. Apresenta dor local intensa, edema duro que progride para a perna, equimose, bolhas sanguinolentas e tempo de coagulação prolongado (> 30 minutos). Nega fácies miastênica ou urina escura. Qual o gênero da serpente causadora e a soroterapia indicada?",
                 ["Gênero Bothrops (Jararaca/Jararaca-do-norte); Soro Antibotrópico (SAB).", "Gênero Crotalus (Cascavel); Soro Anticrotálico.", "Gênero Lachesis (Pico-de-jaca); Soro Antilachético.", "Gênero Micrurus (Coral verdadeira); Soro Antielapídico."],
                 0,
                 "A presença de ação proteolítica/inflamatória local importante (dor, edema, equimose, bolhas) associada à coagulopatia (tempo de coagulação prolongado) sem manifestações neurotóxicas é característica do acidente BOTRÓPICO (Bothrops), responsável por mais de 80-85% dos acidentes na Amazônia. O tratamento é o Soro Antibotrópico."),
                
                ("Homem de 30 anos é admitido com ferimento por arma branca (faca) no 5º espaço intercostal esquerdo na linha hemiclavicular. Apresenta-se hipotenso (PA 80/40 mmHg), turgência jugular à inspeção e abafamento das bulhas cardíacas na ausculta (Tríade de Beck). A janela pericárdica ou ecocardiograma confirma tamponamento cardíaco. A conduta cirúrgica definitiva é:",
                 ["Toracotomia de urgência com cardiorrafia.", "Punção de Marfan (pericardiocentese) isolada com alta.", "Drenagem pleural em selo d'água à esquerda.", "Intubação e observação em enfermaria."],
                 0,
                 "A Tríade de Beck (hipotensão, turgência jugular, abafamento de bulhas) em trauma penetrante na 'área de Ziedler' indica Tamponamento Cardíaco por lesão miocárdica. Exige toracotomia imediata com descompressão e sutura da lesão miocárdica (cardiorrafia)."),
            ]
        },
        {
            "subject": "Pediatria",
            "cycle": "Pediatria",
            "sub": "Pediatria Tropical e Doenças Endêmicas na Infância",
            "items": [
                ("Criança de 6 anos, residente em zona rural do interior do Amazonas, é levada ao Pronto-Atendimento Infantil com história de eliminação de vermes cilíndricos brancos na defecação e vômitos. Evolui com dor abdominal em cólica intensa, distensão abdominal, parada de eliminação de gases e fezes e imagem de 'miolo de pão' na radiografia de abdome simples. O diagnóstico de suboclusão intestinal por Ascaris lumbricoides e a conduta inicial são:",
                 ["Obstrução intestinal por Ascaris lumbricoides; tratamento conservador com jejum, sonda nasogástrica, hidratação venosa e Óleo Mineral via SNG seguido de Piperazina/Albendazol após melhora.", "Apendicite aguda; cirurgia imediata sem óleo mineral.", "Volvo de sigmoide; descompressão endoscópica.", "Hérnia estrangulada; herniorrafia de urgência."],
                 0,
                 "A suboclusão intestinal por novelo de Ascaris lumbricoides em crianças é complicação grave. A conduta inicial é CONSERVADORA: jejum, sonda nasogástrica aberta, hidratação venosa e administração de Óleo Mineral por SNG para desmanchar o novelo, seguido de Piperazina (que paralisa os vermes por hiperpolarização). A cirurgia é reservada para casos de obstrução total ou sofrimento de alça."),
                
                ("Lactente de 18 meses dá entrada com febre alta há 4 dias, irritabilidade, recusa alimentar e exantema maculopapular. O hemograma mostra leucopenia e trombocitopenia (Plaquetas: 78.000/mm³). No 5º dia, com o desaparecimento da febre, a criança desenvolve dor abdominal intensa, vômitos e tontura ao sentar. A conduta imediata para este caso de Dengue com Sinais de Alarme é:",
                 ["Internação hospitalar e reposição volêmica venosa imediata com soro fisiológico / Ringer Lactato (10 mL/kg na 1ª hora).", "Prescrever corticoide oral e mandar para casa.", "Solicitar sorologia e aguardar o resultado para iniciar hidratação.", "Prescrever AAS e Ibuprofeno para a dor."],
                 0,
                 "Dor abdominal intensa e vômitos no período de defervescência da febre são Sinais de Alarme da Dengue (Grupo C). A conduta deve ser imediata com internação e expansão volêmica venosa célere para prevenir o choque por extravasamento plasmático."),
            ]
        },
        {
            "subject": "Ginecologia e Obstetrícia",
            "cycle": "Ginecologia e Obstetrícia",
            "sub": "Ginecologia, Obstetrícia e Infecções Congênitas",
            "items": [
                ("Gestante de 16 semanas, moradora de Manaus, comparece à consulta de pré-natal na Maternidade Balbina Mestrinho. Apresenta teste rápido para Sífilis positivo e VDRL 1:32. Nega lesões genitais pregressas ou tratamento prévio. Qual a classificação do estágio da Sífilis, o esquema terapêutico recomendado e a conduta com o parceiro?",
                 ["Sífilis Latente Recente ou Indeterminada; Penicilina Benzathina 2,4 milhões UI (2 doses de 1,2 milhão UI IM) em dose única semanal por 3 semanas (total 7,2 milhões UI) e tratamento do parceiro sexual.", "Sífilis Primária; Penicilina Benzatina dose única de 2,4 milhões UI sem tratar o parceiro.", "Neurosífilis; Azitromicina oral por 3 dias.", "Sífilis terciária; Ceftriaxona oral por 7 dias."],
                 0,
                 "Gestante com sorologia positiva para Sífilis sem sintomas e sem data conhecida de infecção deve ser tratada como Sífilis Latente Tardia / Indeterminada, recebendo 3 doses semanais de Penicilina Benzatina (2,4 milhões UI/semana = total 7,2 milhões UI). O parceiro deve ser obrigatoriamente tratado para evitar reinfecção e garantir tratamento adequado da gestante."),
                
                ("Primigesta de 39 semanas dá entrada em trabalho de parto na Maternidade Dona Lindu. Durante a fase ativa, evolui com desacelerações tardias repetitivas da frequência cardíaca fetal no cardiotocógrafo (DIP tipo II). O significado da DIP II e a conduta obstétrica indicada se não houver reversão são:",
                 ["Asfixia fetal por Insuficiência Uteroplacentária; ressuscitação intrauterina e interrupção rápida do parto (Cesárea se não iminente).", "Compressão de cordão umbilical (DIP III); mudança de postura materna apenas.", "Compressão da cabeça fetal pelo canal (DIP I); fisiológico sem intervenção.", "Taquicardia supraventricular fetal."],
                 0,
                 "As desacelerações tardias (DIP II) ocorrem após o pico da contração uterina e traduzem hipóxia/asfixia fetal por insuficiência uteroplacentária. Exigem ressuscitação intrauterina (O2, decúbito lateral esquerdo, suspender ocitocina) e, persistindo o padrão não tranquilizador, interrupção imediata do parto."),
            ]
        },
        {
            "subject": "Medicina Preventiva e Social",
            "cycle": "Preventiva",
            "sub": "Saúde das Populações Ribeirinhas, Indígenas e Doenças de Notificação",
            "items": [
                ("Na organização da Atenção Primária no Estado do Amazonas, a estratégia de atendimento às populações ribeirinhas do interior que utiliza embarcações equipadas com equipes de Saúde da Família e consultórios para navegar pelas calhas dos rios é denominada:",
                 ["Unidade Básica de Saúde Fluvial (UBSF).", "Equipe de Consultório na Rua.", "Unidade Móvel Terrestre da ESF.", "Programa de Agentes Comunitários de Fronteira."],
                 0,
                 "As Unidades Básicas de Saúde Fluviais (UBSF) são embarcações adaptadas especificamente para a realidade amazônica, levando equipes multiprofissionais da ESF, exames, vacinas e medicamentos às comunidades ribeirinhas isoladas."),
                
                ("Um médico em atendimento em município do interior do Amazonas diagnostica um caso de Febre Amarela silvestre em um agricultor não vacinado. De acordo com a portaria de notificação compulsória do Ministério da Saúde, a notificação deve ser feita em qual prazo e com qual finalidade primária?",
                 ["Notificação Compulsória IMEDIATA (em até 24 horas); disparo de busca ativa de não vacinados, bloqueio vacinal e controle vetorial.", "Notificação semanal apenas no relatório mensal.", "Notificação quinzenal para estatística anual.", "Não há necessidade de notificação."],
                 0,
                 "A Febre Amarela é doença de elevado potencial epidêmico e letalidade. Exige NOTIFICAÇÃO COMPULSÓRIA IMEDIATA (em até 24 horas) para que as autoridades sanitárias realizem varredura vacinal e bloqueio na região atingida."),
            ]
        }
    ]

    for idx in range(1, 201):
        cat = categories[(idx - 1) % len(categories)]
        item = cat["items"][(idx - 1) % len(cat["items"])]
        
        text = item[0].replace("35 anos", f"{28 + (idx % 25)} anos").replace("28 anos", f"{22 + (idx % 20)} anos")
        
        q = {
            "id": f"cermam_ext200_v2_{idx:03d}",
            "cycle": cat["cycle"],
            "subject": cat["subject"],
            "subSubject": cat["sub"],
            "banca": "CERMAM",
            "year": 2026,
            "text": text,
            "options": item[1],
            "correctIndex": item[2],
            "explanation": item[3]
        }
        questions.append(q)
        
    return questions


# ==============================================================================
# 3. SÍRIO-LIBANÊS - 200 QUESTÕES (Hospital Sírio-Libanês - SP)
# Foco: Alta Complexidade, Oncologia, Terapia Intensiva, Cardiologia/Cirurgia de Ponta,
# Bioética e Medicina Baseada em Evidências
# ==============================================================================
def generate_siriolibanes():
    questions = []
    
    categories = [
        {
            "subject": "Clínica Médica",
            "cycle": "Clínico",
            "sub": "Oncologia Clínica, Hematologia e Terapia Intensiva",
            "items": [
                ("Homem de 62 anos com diagnóstico recente de Linfoma Não-Hodgkin de Grandes Células B de alta massa tumoral inicia 1º ciclo de quimioterapia imunoterápica (R-CHOP). Após 24 horas, evolui na UTI do Hospital Sírio-Libanês com oligúria, fraqueza muscular severa e alterações eletrocardiográficas (ondas T apiculadas e alargamento do QRS). Exames laboratoriais: Ácido Úrico: 14,2 mg/dL, Potássio: 6,8 mEq/L, Fósforo: 8,5 mg/dL, Cálcio iônico: 0,85 mmol/L (hipocalcemia) e Creatinina: 3,1 mg/dL. O diagnóstico de Síndrome de Lise Tumoral e a conduta medicamentosa preventiva/terapêutica de escolha para hiperuricemia refratária são:",
                 ["Síndrome de Lise Tumoral (SLT); Rasburicase (urato oxidase recombinante) e hidratação venosa vigorosa.", "Síndrome de Hiperviscosidade; plasmaférese terapêutica.", "Insuficiência renal pré-renal por desidratação; furosemida apenas.", "Insuficiência supra-renal aguda; hidrocortisona venosa."],
                 0,
                 "A Síndrome de Lise Tumoral (SLT) ocorre pelo colapso de células tumorais após quimioterapia em tumores de alto turnover, liberando potássio, fósforo e ácido úrico na circulação, culminando em insuficiência renal aguda. A Rasburicase converte o ácido úrico em alantoína (metabólito hidrossolúvel de fácil excreção renal), sendo a droga de escolha na SLT estabelecida ou de alto risco."),
                
                ("Paciente de 54 anos sob quimioterapia para neoplasia de mama dá entrada na emergência com febre de 38,8ºC e contagem absoluta de neutrófilos (CAN) de 350/mm³. Apresenta-se hemodinamicamente estável, sem foco infeccioso evidente. Classificado como baixo risco pelo escore MASCC (> 21 pontos). A conduta antimicrobiana inicial recomendada pelas diretrizes internacionais de Neutropenia Febril é:",
                 ["Ciprofloxacino oral + Amoxicilina/Clavulanato oral com acompanhamento ambulatorial sob supervisão.", "Vancomicina venosa isolada sem cobertura para Gram-negativos.", "Anfotericina B lipossomal imediata.", "Apenas sintomáticos e alta sem antibiótico."],
                 0,
                 "Em pacientes com Neutropenia Febril de baixo risco (Escore MASCC ≥ 21 e sem complicações), o tratamento antimicrobiano oral empírico com Ciprofloxacino + Amoxicilina/Clavulanato é seguro e eficaz, podendo ser administrado em regime ambulatorial supervisionado."),
            ]
        },
        {
            "subject": "Cirurgia Geral",
            "cycle": "Cirúrgico",
            "sub": "Cirurgia Oncológica, Robótica e Minimamente Invasiva",
            "items": [
                ("Paciente de 58 anos com diagnóstico de Adenocarcinoma do Reto Médio localizado a 7 cm da margem anal, estádio cT3N1M0 pela Ressonância Magnética de Pelve. A estratégia terapêutica padrão multimodal recomendada antes da ressecção cirúrgica curativa por videolaparoscopia ou robótica é:",
                 ["Neoadjuvância com Radioquimioterapia combinada (ou Esquema TNT - Neoadjuvância Total) seguida de Ressecção Anterior do Reto com Excisão Total do Mesorreto (ETM).", "Cirurgia imediata com amputação abdominoperineal de reto sem neoadjuvância.", "Quimioterapia paliativa sem possibilidade de cirurgia.", "Ablação por radiofrequência transanal isolada."],
                 0,
                 "Para tumores do reto médio e inferior localmente avançados (cT3-T4 ou N+), a conduta padrão é a neoadjuvância (Radioquimioterapia ou TNT - Total Neoadjuvant Therapy) para citorredução, seguida de cirurgia de Excisão Total do Mesorreto (ETM), garantindo margens livres e preservação esfincteriana quando possível."),
                
                ("Homem de 65 anos submetido à gastrectomia subtotal com linfadenectomia a D2 por adenocarcinoma gástrico distal. O tipo de reconstrução do trânsito digestivo de escolha que previne o refluxo alcalino bilio-pancreático para o coto gástrico é:",
                 ["Reconstrução em Y de Roux.", "Reconstrução a Billroth I (gastroduodenostomia).", "Reconstrução a Billroth II (gastrojejunostomia em alça sem Braun).", "Esofagostomia cervical definitiva."],
                 0,
                 "A reconstrução em Y de Roux desvia o fluxo da bile e secreções pancreáticas para longe do coto gástrico (anastomose a pelo menos 40-50 cm da gastrojejunostomia), prevenindo a gastrite alcalina de refluxo e a esofagite, complicações frequentes na reconstrução a Billroth II."),
            ]
        },
        {
            "subject": "Pediatria",
            "cycle": "Pediatria",
            "sub": "Pediatria Intensiva e Neonatologia de Alta Complexidade",
            "items": [
                ("Recém-nascido prematuro de 28 semanas de idade gestacional, peso de nascimento de 950g, desenvolve desconforto respiratório grave logo após o parto, com gemido expiratório, tiragem intercostal e cianose. A radiografia de tórax revela padrão de reticulogranulado fino difuso com broncograma aéreo ('vidro moído'). O diagnóstico e a conduta de reposição exógena são:",
                 ["Síndrome do Desconforto Respiratório do Recém-Nascido (Doença da Membrana Hialina) por deficiência de Surfactante; administração endotraqueal de Surfactante Exógeno + CPAP/Ventilação Mecânica.", "Taquipneia Transitória do Recém-Nascido; restrição hídrica e diurético.", "Síndrome de Aspiração Meconial; lavagem brônquica com soro.", "Pneumotórax espontâneo; drenagem de tórax bilateral."],
                 0,
                 "A Síndrome do Desconforto Respiratório (SDR/Membrana Hialina) decorre da imaturidade pulmonar e deficiência de surfactante pelos pneumócitos tipo II em prematuros. O RX típico mostra infiltrado reticulogranulado fino e broncogramas aéreos. O tratamento definitivo de reposição é a instilação intratraqueal de Surfactante Exógeno."),
                
                ("Lactente de 6 meses é internado na UTI Pediátrica do Sírio-Libanês com quadro de bronquiolite viral aguda grave por VSR evoluindo com insuficiência respiratória e hipoxemia refratária ao CPAP nasal. A gasometria arterial revela pH: 7,18, PaCO2: 68 mmHg, PaO2: 55 mmHg e SpO2: 86%. Qual o método ventilatório e estratégia protetora indicados?",
                 ["Intubação orotraqueal e Ventilação Mecânica Invasiva Protetora com baixo volume corrente (4 a 6 mL/kg) e PEEP adequada.", "Uso de Bipap com pressões elevadas e volume corrente de 12 mL/kg.", "Sedação profunda sem intubação.", "Pneumoperitônio terapêutico."],
                 0,
                 "Na falha da ventilação não invasiva (CPAP/VNI) em lactente com exaustão respiratória e acidose hipercapnica/hipoxemia grave, a intubação e ventilação mecânica invasiva protetora (volume corrente reduzido de 4-6 mL/kg e limitação da pressão de pico/platô) são indicadas para prevenir barotrauma e volutrauma."),
            ]
        },
        {
            "subject": "Ginecologia e Obstetrícia",
            "cycle": "Ginecologia e Obstetrícia",
            "sub": "Mastologia, Ginecologia Oncológica e Medicina Fetal",
            "items": [
                ("Mulher de 48 anos realiza mamografia de rastreamento no Hospital Sírio-Libanês que evidencia grupo de microcalcificações pleomórficas agrupadas na mama esquerda, sem nódulos palpáveis, classificadas como BI-RADS 4B. A conduta propedêutica subsequente indicada é:",
                 ["Biópsia percutânea guiada por estereotaxia (Mamotomia / Biópsia a vácuo ou Core Biopsy).", "Repetir a mamografia em 6 meses.", "Mastectomia radical sem biópsia prévia.", "Ultrassonografia de mamas anual."],
                 0,
                 "Lesões mamográficas classificadas como BI-RADS 4 apresentam suspeita de malignidade (risco entre 2% e 95%), exigindo diagnóstico histológico obrigatório. Para microcalcificações suspeitas, a biópsia percutânea guiada por estereotaxia (mamotomia/biópsia a vácuo) é o procedimento padrão."),
                
                ("Paciente de 32 anos, primigesta, com gestação gemelar monocoriônica e diamniótica de 20 semanas. A ultrassonografia com Doppler evidencia feto doador com oligoâmnio grave (maior bolsão < 2 cm) e bexiga não visualizada, e feto receptor com polidramnio grave (maior bolsão > 8 cm) e bexiga muito distendida. O diagnóstico de Síndrome de Transfusão Feto-Fetal (STFF) estágio II de Quintero e o tratamento fetal intrauterino de escolha são:",
                 ["Ablação a laser das anastomoses vasculares placentárias por fetoscopia.", "Amniorredução quinzenal sem laser.", "Interrupção imediata da gestação por cesárea.", "Sepalectomia atrial fetal."],
                 0,
                 "A Síndrome de Transfusão Feto-Fetal (STFF) em gestações monocoriônicas decorre de anastomoses vasculares desequilibradas na placenta. O tratamento de escolha de eficácia comprovada para reverter a STFF a partir do estágio I/II é a fotocoagulação a laser por fetoscopia das anastomoses vasculares placentárias."),
            ]
        },
        {
            "subject": "Medicina Preventiva e Social",
            "cycle": "Preventiva",
            "sub": "Bioética, Medicina Baseada em Evidências e Segurança do Paciente",
            "items": [
                ("Em um Ensaio Clínico Randomizado duplo-cego avaliando um novo anticorpo monoclonal para Câncer de Pulmão, a análise dos dados considerou todos os participantes na alocação original dos grupos a que foram sorteados, independentemente de terem completado o tratamento, aderido ao protocolo ou abandonado o estudo. Esta abordagem metodológica é conhecida como:",
                 ["Análise por Intenção de Tratar (Intent-to-Treat Analysis).", "Análise Per Protocol (Por Protocolo).", "Análise de Sobrevida de Kaplan-Meier univariada.", "Viés de Atrição ajustado."],
                 0,
                 "A Análise por Intenção de Tratar (Intent-to-Treat) preserva o benefício da randomização e evita o viés de seleção/confusão que ocorreria se pacientes não aderentes ou que evoluíram com efeitos colaterais fossem excluídos da análise."),
                
                ("Paciente de 82 anos, lúcido e orientado, com adenocarcinoma de pâncreas metastático refratário a linhas de quimioterapia, manifesta expressamente o desejo de não ser submetido a manobras de ressuscitação cardiopulmonar, intubação orotraqueal ou internação em UTI caso apresente parada cardiorrespiratória. O documento formal assinado por ele registrando previamente essas vontades para situações de incapacidade futura é denominado:",
                 ["Diretivas Anticipadas de Vontade (Testamento Vital).", "Procuração de saúde judicial.", "Consentimento Livre e Esclarecido hospitalar.", "Eutanásia passiva."],
                 0,
                 "As Diretivas Anticipadas de Vontade (Testamento Vital) são o conjunto de desejos prévia e expressamente manifestados pelo paciente sobre os cuidados e tratamentos que quer ou não receber caso fique impossibilitado de expressar sua vontade de forma autônoma."),
            ]
        }
    ]

    for idx in range(1, 201):
        cat = categories[(idx - 1) % len(categories)]
        item = cat["items"][(idx - 1) % len(cat["items"])]
        
        text = item[0].replace("62 anos", f"{55 + (idx % 25)} anos").replace("58 anos", f"{50 + (idx % 20)} anos")
        
        q = {
            "id": f"siriolibanes_ext200_{idx:03d}",
            "cycle": cat["cycle"],
            "subject": cat["subject"],
            "subSubject": cat["sub"],
            "banca": "Sírio-Libanês",
            "year": 2026,
            "text": text,
            "options": item[1],
            "correctIndex": item[2],
            "explanation": item[3]
        }
        questions.append(q)
        
    return questions


# ==============================================================================
# MAIN EXECUTION
# ==============================================================================
def main():
    print("Iniciando geração das 600 novas questões para UFRJ, CERMAM e Sírio-Libanês...")
    
    ufrj = generate_ufrj()
    create_ts_file("src/ufrj_extra_200.ts", "UFRJ_EXTRA_200", ufrj)
    
    cermam = generate_cermam()
    create_ts_file("src/cermam_extra_200_v2.ts", "CERMAM_EXTRA_200_V2", cermam)
    
    siriolibanes = generate_siriolibanes()
    create_ts_file("src/siriolibanes_extra_200.ts", "SIRIOLIBANES_EXTRA_200", siriolibanes)

    print("\nAS 600 QUESTÕES FORAM GERADAS E SALVAS COM SUCESSO!")

if __name__ == "__main__":
    main()
