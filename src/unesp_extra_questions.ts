// Novas questões baseadas na banca UNESP para o Ciclo de Residência (Ciclo Clínico / Internato)
// Inclui casos clínicos clássicos de alta qualidade e flashcards dinâmicos super didáticos.

export const UNESP_EXTRA_QUESTIONS: any[] = [
  {
    id: "unesp_extra_001",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Cirurgia Geral",
    text: "Mulher de 42 anos, obesa, comparece à UPA com dor em cólica no hipocôndrio direito após alimentação gordurosa, acompanhada de náuseas. No exame físico: dor à palpação do hipocôndrio direito durante a inspiração profunda (interrupção da inspiração). Sem febre ou icterícia. Qual o diagnóstico e conduta diagnóstica de escolha?",
    options: [
      "Colelitíase sintomática; realizar Ultrassonografia de abdome superior.",
      "Colecistite aguda; realizar Cintilografia biliar.",
      "Coledocolitíase; realizar CPRE imediata.",
      "Colangite aguda; iniciar antibiótico e indicar colonoscopia.",
      "Abscesso hepático; realizar Tomografia Computadorizada de abdome."
    ],
    correctIndex: 0,
    explanation: "A paciente apresenta quadro clínico típico de cólica biliar (colelitíase sintomática) desencadeada por alimentação gordurosa. A manobra descrita é o sinal de Murphy, que se positivo indica colecistite aguda, porém na ausência de febre e com dor autolimitada em cólica, o quadro é compatível com colelitíase. O exame inicial de escolha é a Ultrassonografia de abdome superior.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_002",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Ginecologia & Obstetrícia",
    text: "Gestante de 32 semanas, primigesta, apresenta-se em consulta de pré-natal com queixa de cefaleia e escotomas visuais. Ao exame: PA de 160/110 mmHg (confirmada após 4 horas de repouso) e proteinúria de fita ++/4+. Qual o diagnóstico correto e a conduta imediata indicada?",
    options: [
      "Pré-eclâmpsia com sinais de gravidade; internar, iniciar sulfato de magnésio e controle de PA, planejando parto com 37 semanas se estável.",
      "Hipertensão gestacional benigna; iniciar metildopa ambulatorial e retorno em 2 semanas.",
      "Crise hipertensiva essencial; iniciar nitroprussiato de sódio contínuo em ambiente ambulatorial.",
      "Pré-eclâmpsia leve; orientar repouso absoluto domiciliar e dosar proteinúria semanalmente.",
      "Eclâmpsia instalada; realizar cesárea de urgência sob anestesia geral imediatamente."
    ],
    correctIndex: 0,
    explanation: "A presença de hipertensão (PA ≥ 160/110 mmHg) associada a sintomas neurológicos (cefaleia, escotomas) e proteinúria configura Pré-eclâmpsia com sinais de gravidade. A conduta imediata é a internação, monitorização, profilaxia de crises convulsivas com sulfato de magnésio (esquema Pritchard ou Zuspan) e controle pressórico, visando o parto com 37 semanas (ou antes se houver deterioração materna ou fetal).",
    difficulty: "hard"
  },
  {
    id: "unesp_extra_003",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Pediatria",
    text: "Lactente de 10 meses é trazido ao pronto-socorro com coriza e obstrução nasal há 2 dias. Hoje evoluiu com tosse taquipneica, sibilos bilaterais à ausculta e discreta tiragem subcostal. SpO2 93% em ar ambiente, afebril. Qual o diagnóstico clínico mais provável e o principal agente etiológico implicado?",
    options: [
      "Bronquiolite viral aguda; Vírus Sincicial Respiratório (VSR).",
      "Pneumonia bacteriana atípica; Mycoplasma pneumoniae.",
      "Asma brônquica aguda; Rinovírus humano.",
      "Laringotraqueíte viral; Vírus Parainfluenza.",
      "Crupe espasmódico; Adenovírus."
    ],
    correctIndex: 0,
    explanation: "A Bronquiolite Viral Aguda é o primeiro episódio de sibilância em crianças menores de 2 anos, tipicamente precedido por pródromos catarrais de vias aéreas superiores. O principal agente etiológico em até 80% dos casos é o Vírus Sincicial Respiratório (VSR).",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_004",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Medicina de Família/SUS",
    text: "No âmbito da Atenção Primária à Saúde, a estratégia que visa otimizar o cuidado através do compartilhamento de saberes e práticas entre a equipe de referência da Saúde da Família e profissionais especialistas de outras áreas é chamada de:",
    options: [
      "Apoio Matricial (Matriciamento).",
      "Consulta Compartilhada Unilateral.",
      "Encaminhamento de fluxo fechado.",
      "Acolhimento com classificação de risco.",
      "Referenciamento de terceiro nível."
    ],
    correctIndex: 0,
    explanation: "O Apoio Matricial (ou Matriciamento) é uma estratégia de organização da atenção à saúde que promove a integração pedagógico-terapêutica entre equipes de referência (Saúde da Família) e equipes de apoio (como NASF ou especialidades médicas), de modo a qualificar as ações de saúde na própria atenção primária.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_005",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Clínica Médica",
    text: "Paciente do sexo masculino, 68 anos, portador de Fibrilação Atrial crônica, apresenta quadro súbito de dor abdominal difusa desproporcional ao exame físico, acompanhada de náuseas e vômitos. O abdome encontra-se flácido e sem sinais de irritação peritoneal. Qual o diagnóstico mais provável e o exame de escolha?",
    options: [
      "Isquemia mesentérica aguda; Angiotomografia computadorizada de abdome.",
      "Apendicite aguda; Ultrassonografia de abdome total.",
      "Diverticulite aguda; Colonoscopia de urgência.",
      "Pancreatite aguda; Amilase e lipase séricas.",
      "Perfuração de víscera oca; Radiografia de abdome em pé."
    ],
    correctIndex: 0,
    explanation: "O quadro clássico de isquemia mesentérica aguda é caracterizado por dor abdominal desproporcional aos achados do exame físico (abdome inocente), frequentemente associado a um fator de risco embólico como a Fibrilação Atrial. O padrão-ouro de diagnóstico por imagem não invasivo é a Angio-TC de abdome.",
    difficulty: "hard"
  },
  {
    id: "unesp_extra_006",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Cirurgia Geral",
    text: "Paciente de 50 anos, masculino, relata dor em andar superior do abdome, contínua, irradiada em faixa para o dorso, iniciada há 24 horas, associada a vômitos. Exame físico: abdome doloroso difusamente, ruídos hidroaéreos diminuídos. Exames laboratoriais: Amilase 1.200 U/L e Lipase 980 U/L. O primeiro exame de imagem para elucidar a etiologia e avaliar a via biliar deve ser:",
    options: [
      "Ultrassonografia de abdome superior.",
      "Tomografia Computadorizada de abdome com contraste na admissão.",
      "Colangiorressonância Magnética.",
      "Radiografia simples de abdome (três posições).",
      "CPRE urgente."
    ],
    correctIndex: 0,
    explanation: "O diagnóstico de pancreatite aguda está firmado pela clínica e elevação enzimática > 3 vezes o limite superior. Para investigar a etiologia biliar (presença de colelitíase ou lama biliar), a ultrassonografia de abdome é o exame inicial mais apropriado e acessível. A Tomografia Computadorizada só está indicada para diagnóstico duvidoso ou após 72-96h do início da dor para avaliar complicações locais.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_007",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Ginecologia & Obstetrícia",
    text: "Mulher de 28 anos queixa-se de corrimento vaginal acinzentado, com odor desagradável que piora após a menstruação e coito. Ao exame físico especular, observa-se corrimento homogêneo, pH vaginal de 5,5, teste do KOH (Whiff test) positivo e presença de 'clue cells' na microscopia a fresco. Qual o diagnóstico e tratamento de escolha?",
    options: [
      "Vaginose bacteriana; Metronidazol oral 500mg de 12/12h por 7 dias.",
      "Candidíase vaginal; Fluconazol 150mg dose única oral.",
      "Tricomoníase vaginal; Metronidazol dose única oral 2g (ou tinidazol).",
      "Vaginose citolítica; Duchas de bicarbonato de sódio.",
      "Clamídia vaginal; Azitromicina 1g dose única oral."
    ],
    correctIndex: 0,
    explanation: "A vaginose bacteriana é diagnosticada pelos critérios de Amsel (corrimento acinzentado homogêneo, pH > 4.5, Whiff test positivo e presença de clue cells na microscopia). O tratamento de escolha é o Metronidazol por via oral ou vaginal.",
    difficulty: "easy"
  },
  {
    id: "unesp_extra_008",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Pediatria",
    text: "Criança de 3 anos apresenta febre alta há 5 dias, irritabilidade marcante, associada a hiperemia conjuntival não purulenta, descamação periungueal, língua em framboesa, lábios fissurados e linfonodopatia cervical de 1,8 cm unilateral. Qual o diagnóstico e a conduta preventiva contra aneurisma coronariano?",
    options: [
      "Doença de Kawasaki; administração de Imunoglobulina Humana Intravenosa (IGIV) e Ácido Acetilsalicílico (AAS).",
      "Escarlatina; tratamento com Penicilina Benzatina intramuscular dose única.",
      "Sarampo; suplementação urgente com Vitamina A por dois dias consecutivos.",
      "Mononucleose infecciosa; repouso e suporte sintomático apenas.",
      "Artrite idiopática juvenil; iniciar corticoide sistêmico associado a metotrexato."
    ],
    correctIndex: 0,
    explanation: "Trata-se da Doença de Kawasaki, uma vasculite febril sistêmica primária de vasos de médio calibre. O diagnóstico é clínico (febre há ≥ 5 dias + 4 de 5 critérios). O tratamento ideal precoce (até o 10º dia de febre) com IGIV + AAS reduz drasticamente o risco de formação de aneurismas coronarianos.",
    difficulty: "hard"
  },
  {
    id: "unesp_extra_009",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Medicina de Família/SUS",
    text: "No Modelo de Atenção às Condições Crônicas (MACC), as ações propostas focam em abordagens proativas e integradas. O cadastramento sistemático de famílias, classificação de risco por estratificação e o autocuidado apoiado pertencem a qual nível de atenção?",
    options: [
      "Atenção Primária à Saúde (APS).",
      "Atenção Secundária (Ambulatorial Especializada).",
      "Atenção Terciária (Hospitalar).",
      "Atenção Quaternária (Cuidados Paliativos).",
      "Vigilância Epidemiológica apenas."
    ],
    correctIndex: 0,
    explanation: "As ações proativas de rastreamento, classificação de riscos de populações adscritas, e promoção do autocuidado apoiado no território são atribuições primordiais da Atenção Primária à Saúde (APS).",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_010",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Clínica Médica",
    text: "Mulher de 24 anos procura atendimento médico com queixa de artralgia em punhos e joelhos, febre baixa e lesões eritematosas em região malar (em asa de borboleta) após exposição solar. Exames de triagem revelam proteinúria de 1,2g/24h e FAN positivo 1:640 com padrão homogêneo. Qual a complicação orgânica mais grave sugerida pela proteinúria e qual o exame padrão-ouro para confirmação?",
    options: [
      "Nefrite lúpica; Biópsia renal.",
      "Síndrome nefrótica idiopática; Ultrassonografia renal com Doppler.",
      "Insuficiência renal aguda pré-renal; Depuração de creatinina de 24 horas.",
      "Amiloidose secundária; Biópsia de gordura subcutânea.",
      "Glomerulonefrite pós-estreptocócica; Dosagem de ASLO e C3."
    ],
    correctIndex: 0,
    explanation: "Proteinúria significativa em paciente jovem com quadro sugestivo de LES (artralgia, rash malar fotossensível, FAN positivo alto) levanta forte suspeita de Nefrite Lúpica. A biópsia renal é o padrão-ouro indispensável para determinar a classe histológica da glomerulonefrite e orientar a imunossupressão apropriada.",
    difficulty: "hard"
  },
  {
    id: "unesp_extra_011",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Cirurgia Geral",
    text: "Homem de 72 anos apresenta constipação crônica, que progrediu nos últimos 3 dias para parada de eliminação de gases e fezes, associada a dor abdominal em cólica e distensão abdominal acentuada. Radiografia simples de abdome revela alça sigmoide imensa, distendida, com formato em 'U' invertido ('sinal do grão de café'). Qual o diagnóstico e a conduta inicial na ausência de sinais de peritonite?",
    options: [
      "Vólvulo de sigmoide; Descompressão colonoscópica (colonoscopia descompressiva).",
      "Câncer colorretal obstrutivo; Retossigmoidectomia de urgência imediata (Hartmann).",
      "Fecaloma obstrutivo; Clister glicerinado via retal repetido.",
      "Apoplexia intestinal por brida; Laparotomia exploradora de emergência.",
      "Intussuscepção intestinal; Enema opaco baritado de urgência."
    ],
    correctIndex: 0,
    explanation: "O sinal do grão de café (ou 'U' invertido) na radiografia de abdome é patognomônico de vólvulo de sigmoide. Na ausência de sinais de necrose ou perfuração (abdome flácido, sem peritonite, estável), a conduta inicial recomendada é a descompressão colonoscópica por via endoscópica, que reverte a torção na maioria dos casos.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_012",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Ginecologia & Obstetrícia",
    text: "Secundigesta, 39 semanas de gestação, em trabalho de parto ativo. Após o desprendimento da cabeça fetal, há retração da mesma contra o períneo materno ('sinal da tartaruga') e dificuldade de desprendimento dos ombros com tração habitual. Qual é o diagnóstico e a primeira manobra não invasiva a ser realizada pelo obstetra?",
    options: [
      "Distocia de ombros; Manobra de McRoberts (hiperflexão e abdução das coxas maternas).",
      "Apresentação pélvica distócica; Manobra de Bracht.",
      "Parada secundária da descida; Aplicação de Fórceps de Simpson.",
      "Sofrimento fetal agudo; Manobra de Zavanelli (reintrodução da cabeça).",
      "Descolamento prematuro de placenta; Indicação imediata de Cesárea."
    ],
    correctIndex: 0,
    explanation: "A retenção dos ombros fetais após a saída da cabeça caracteriza a Distocia de Ombros, uma emergência obstétrica clássica. O primeiro passo terapêutico envolve a realização da Manobra de McRoberts (hiperflexão e abdução dos membros inferiores maternos), que retifica o sacro e amplia o diâmetro pélvico, muitas vezes associada à pressão suprapúbica (Manobra de Rubin I).",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_013",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Pediatria",
    text: "Criança de 18 meses comparece com febre alta repentina que durou 3 dias, sem outros sintomas associados. Hoje, logo após o desaparecimento completo da febre, surgiram lesões maculopapulares rosadas e discretas no tronco, que se espalharam para o pescoço e membros. A criança apresenta-se ativa e bem-disposta. Qual o provável diagnóstico?",
    options: [
      "Exantema súbito (Roséola infantil); Herpes-vírus humano tipo 6 ou 7.",
      "Eritema infeccioso; Parvovírus B19.",
      "Sarampo; Vírus do sarampo (Paramyxovirus).",
      "Rubéola; Rubivírus.",
      "Escarlatina; Streptococcus pyogenes."
    ],
    correctIndex: 0,
    explanation: "O Exantema Súbito (ou Roséola Infantil) caracteriza-se por febre alta isolada, de início súbito, que desaparece em crise e coincide exatamente com o surgimento do exantema maculopapular predominantemente centrípeto (tronco para extremidades). É causado principalmente pelo Herpes-vírus humano tipo 6 (HVH-6).",
    difficulty: "easy"
  },
  {
    id: "unesp_extra_014",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Medicina de Família/SUS",
    text: "De acordo com as diretrizes da Política Nacional de Atenção Básica (PNAB), quais são as atribuições específicas do Agente Comunitário de Saúde (ACS) na visita domiciliar?",
    options: [
      "Realizar o cadastramento das famílias, identificar situações de risco, orientar sobre o uso de serviços e realizar busca ativa.",
      "Prescrever medicações de uso contínuo para hipertensos e diabéticos estáveis.",
      "Realizar curativos complexos e aplicação de vacinas do calendário básico nacional.",
      "Solicitar exames laboratoriais de rotina e de imagem para rastreamento de câncer.",
      "Coordenar o planejamento orçamentário e faturamento de procedimentos da UBS."
    ],
    correctIndex: 0,
    explanation: "As funções do ACS centram-se no cadastramento e mapeamento territorial, busca ativa, acolhimento, identificação de vulnerabilidades e encaminhamento para a equipe de saúde. O ACS não realiza procedimentos invasivos, diagnósticos ou prescrições farmacológicas.",
    difficulty: "easy"
  },
  {
    id: "unesp_extra_015",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Clínica Médica",
    text: "Paciente de 62 anos, hipertenso e tabagista, queixa-se de dor em queimação em ambas as panturrilhas ao caminhar cerca de 100 metros, que melhora rapidamente com repouso. Ao exame: pulsos pediosos e tibiais posteriores diminuídos bilateralmente. O índice tornozelo-braquial (ITB) medido é de 0,65. Qual a conduta inicial mais adequada?",
    options: [
      "Cessação do tabagismo, controle pressórico e lipídico rigorosos, início de AAS e estatina de alta potência, associado a programa de exercício físico supervisionado.",
      "Encaminhamento de urgência para revascularização cirúrgica convencional (Bypass femoropoplíteo).",
      "Indicação imediata de arteriografia invasiva de membros inferiores.",
      "Tratamento com anticoagulação oral plena com Varfarina (alvo de RNI 2-3).",
      "Apenas repouso e suspensão total de esforços físicos para evitar isquemia aguda."
    ],
    correctIndex: 0,
    explanation: "O paciente apresenta Doença Arterial Periférica (DAP) crônica, manifestada por claudicação intermitente limitante, corroborada pelo ITB < 0.90. O tratamento inicial consiste no controle estrito de fatores de risco cardiovasculares (cessação do tabagismo, estatinas de alta potência, controle pressórico), antiagregação plaquetária (AAS ou clopidogrel) e terapia de exercícios físicos supervisionados para estimular circulação colateral.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_016",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Cirurgia Geral",
    text: "Durante uma colecistectomia videolaparoscópica, a identificação segura dos elementos do pedículo da vesícula biliar exige a exposição clara das seguintes estruturas antes da clipagem: ducto cístico e artéria cística entrando diretamente na vesícula biliar, com a porção inferior do lobo hepático exposta. Este conceito anatômico de segurança cirúrgica é denominado:",
    options: [
      "Visão de Segurança de Strasberg (Visão Crítica de Segurança).",
      "Tríade de Portal de Calot.",
      "Área de descompressão hepatobiliar.",
      "Linha de Cantlie cirúrgica.",
      "Triângulo de Koch de drenagem biliar."
    ],
    correctIndex: 0,
    explanation: "A 'Visão Crítica de Segurança de Strasberg' é a técnica padrão ouro de identificação biliar cirúrgica. Consiste na liberação completa da base da vesícula biliar do leito hepático, deixando visíveis apenas duas estruturas penetrando no órgão (ducto cístico e artéria cística), minimizando as lesões iatrogênicas do ducto colédoco.",
    difficulty: "hard"
  },
  {
    id: "unesp_extra_017",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Ginecologia & Obstetrícia",
    text: "Mulher de 52 anos refere ondas de calor intensas (fogachos) associadas a distúrbios do sono e secura vaginal há 1 ano. Data da última menstruação há 14 meses. Sem antecedentes cardiovasculares ou tabagismo, porém com história familiar de osteoporose. Mamografia recente sem alterações (BI-RADS 2). Qual a melhor conduta terapêutica para alívio dos sintomas?",
    options: [
      "Terapia de reposição hormonal combinada contínua (estrogênio e progesterona por via oral ou transdérmica), visto que a paciente tem útero intacto.",
      "Terapia de reposição hormonal com estrogênio isolado por via oral.",
      "Prescrição de fitoterápicos (isoflavona de soja) como única terapia eficaz contra osteoporose.",
      "Indicação de histerectomia profilática seguida de estrogênioterapia isolada de alta dose.",
      "Apenas lubrificantes vaginais e acompanhamento anual, devido ao alto risco oncológico da TRH combinado."
    ],
    correctIndex: 0,
    explanation: "A paciente está no climatério (pós-menopausa) com sintomas vasomotores significativos. Na ausência de contraindicações e com exames mamários normais, a terapia de reposição hormonal (TRH) é indicada. Como ela possui útero intacto, é MANDATÓRIO associar a progesterona ao estrogênio para prevenir a hiperplasia e o câncer de endométrio.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_018",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Pediatria",
    text: "Recém-nascido com 12 horas de vida apresenta icterícia precoce de progressão rápida (zona 3 de Kramer). Mãe é O negativo e o recém-nascido é A positivo, com teste de Coombs direto positivo. Qual o mecanismo fisiopatológico desta condição e qual a conduta terapêutica inicial mais eficaz?",
    options: [
      "Incompatibilidade sanguínea materno-fetal ABO; fototerapia de alta intensidade imediata.",
      "Incompatibilidade Rh clássica; exsangüineotransfusão imediata sem fototerapia.",
      "Icterícia do aleitamento materno; suspensão temporária do leite materno.",
      "Atresia de vias biliares extra-hepáticas; cirurgia de Kasai de urgência.",
      "Icterícia fisiológica do recém-nascido; banho de sol domiciliar."
    ],
    correctIndex: 0,
    explanation: "A icterícia que surge nas primeiras 24 horas de vida é patológica. O Coombs direto positivo no RN (filho A+ de mãe O-) confirma hemólise por incompatibilidade ABO. A conduta inicial ideal é a instituição de fototerapia de alta intensidade para evitar a progressão da bilirrubina indireta e o risco de kernicterus.",
    difficulty: "hard"
  },
  {
    id: "unesp_extra_019",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Medicina de Família/SUS",
    text: "Um idoso de 78 anos, lúcido, acamado por sequela de AVC isquêmico, reside com sua filha cuidadora que apresenta sinais visíveis de sobrecarga emocional. A equipe de saúde da família realiza visitas domiciliares periódicas. Qual ferramenta de abordagem familiar é mais útil para avaliar a rede de relações sociais, suporte e contatos do idoso com o ambiente comunitário externo?",
    options: [
      "Ecomapa.",
      "Genograma (ou Heredograma).",
      "Apgar Familiar.",
      "F.I.R.O. (Inclusão, Controle, Afeto).",
      "Prática de Medicina Centrada na Pessoa."
    ],
    correctIndex: 0,
    explanation: "O Ecomapa é a representação gráfica das relações da família com outros subsistemas e instituições da comunidade (trabalho, igreja, amigos, serviços de saúde, vizinhos), sendo excelente para avaliar o suporte social e rede de apoio do idoso.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_020",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Clínica Médica",
    text: "Mulher de 35 anos apresenta fadiga, ganho ponderal, intolerância ao frio, obstipação intestinal e irregularidade menstrual. Ao exame físico: tireoide palpável, indolor, discretamente aumentada e fibroelástica. Exames laboratoriais: TSH de 12 mUI/L (elevado) e T4 livre de 0,6 ng/dL (baixo). Qual o provável diagnóstico etiológico e o anticorpo sérico clássico associado?",
    options: [
      "Tireoidite de Hashimoto; Anticorpo anti-peroxidase tireoidiana (anti-TPO).",
      "Doença de Graves; Anticorpo estimulador da tireoide (TRAb).",
      "Tireoidite de De Quervain; Elevação de VHS e PCR apenas.",
      "Câncer papilífero de tireoide; Anticorpo anti-tireoglobulina de alto título.",
      "Tireoidite subaguda linfocítica; Anticorpo anti-receptor de TSH."
    ],
    correctIndex: 0,
    explanation: "O quadro de hipotireoidismo primário clínico (TSH elevado + T4 livre baixo) em mulher jovem associado a bócio fibroelástico indolor é típico de Tireoidite de Hashimoto (autoimune). O anticorpo mais sensível e clássico para confirmação diagnóstica é o anti-TPO.",
    difficulty: "easy"
  },
  {
    id: "unesp_extra_021",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Clínica Médica",
    text: "[FLASHCARD] Tríade clássica da Estenose Aórtica grave: quais os três sintomas principais e de pior prognóstico?",
    options: [
      "Angina, Síncope e Dispneia (Insuficiência Cardíaca).",
      "Palpitações, Edema e Claudicação Intermitente.",
      "Hemoptise, Dor Torácica e Tontura Postural.",
      "Sopro sistólico, Pulso parvus et tardus e Ictus desviado.",
      "Cefaleia, Palpitações e Sudorese Profunda."
    ],
    correctIndex: 0,
    explanation: "A tríade clássica de sintomas da estenose aórtica importante é composta por: Angina, Síncope e Dispneia (decorrente de insuficiência cardíaca de padrão obstrutivo/diastólico). O aparecimento de qualquer um desses sintomas reduz drasticamente a sobrevida e indica troca valvar urgente.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_022",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Cirurgia Geral",
    text: "[FLASHCARD] Tríade de Charcot e Pêntade de Reynolds são fundamentais no diagnóstico de qual condição das vias biliares?",
    options: [
      "Colangite Aguda bacteriana.",
      "Colecistite Aguda calculosa.",
      "Abscesso esplênico secundário.",
      "Pancreatite biliar necrosante.",
      "Coledocolitíase residual."
    ],
    correctIndex: 0,
    explanation: "A Tríade de Charcot (dor abdominal, febre com calafrios e icterícia) associada ao choque circulatório e confusão mental formam a Pêntade de Reynolds, característica de Colangite Aguda Grave (supurativa), uma emergência médica que exige descompressão biliar imediata.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_023",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Infectologia",
    text: "[FLASHCARD] Qual é a antibioticoterapia empírica inicial padrão-ouro para tratamento de Meningite Bacteriana aguda em adultos na comunidade?",
    options: [
      "Ceftriaxona associada a Ampicilina.",
      "Ceftriaxona associada a Vancomicina (e Dexametasona antes/junto com a primeira dose).",
      "Meropenem isolado de alta dose.",
      "Penicilina G Cristalina pura.",
      "Ciprofloxacino intravenoso de 12/12h."
    ],
    correctIndex: 1,
    explanation: "O esquema padrão recomendado para adultos é Ceftriaxona (cobre pneumococo e meningococo) associada a Vancomicina (para cobrir pneumococo resistente). A Dexametasona deve ser iniciada antes ou junto com a primeira dose do antibiótico para reduzir sequelas neurológicas secundárias à resposta inflamatória.",
    difficulty: "hard"
  },
  {
    id: "unesp_extra_024",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Ginecologia & Obstetrícia",
    text: "[FLASHCARD] Qual é o agente causal mais comum de Mastite Lactacional e qual a conduta em relação ao aleitamento materno durante a infecção?",
    options: [
      "Staphylococcus aureus; manter amamentação bilateral e iniciar cefalexina oral.",
      "Streptococcus agalactiae; suspender aleitamento temporariamente para evitar infecção do lactente.",
      "Escherichia coli; manter amamentação apenas na mama contralateral sadia.",
      "Candida albicans; suspender aleitamento e tratar com antifúngico oral.",
      "Pseudomonas aeruginosa; manter ordenha e descarte obrigatório do leite."
    ],
    correctIndex: 0,
    explanation: "O Staphylococcus aureus é o principal causador de mastite lactacional. A amamentação deve ser MANTIDA em ambas as mamas (incluindo a afetada), pois o esvaziamento mamário é parte crucial do tratamento e evita abscesso. O tratamento medicamentoso envolve antibióticos como cefalexina.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_025",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Pediatria",
    text: "[FLASHCARD] Lactente com tosse metálica (tosse de cachorro), estridor inspiratório e rouquidão após quadro gripal leve. Qual a hipótese e tratamento imediato se houver desconforto respiratório moderado?",
    options: [
      "Laringotraqueíte viral aguda (Crupe); Nebulização com adrenalina e corticoide sistêmico (Dexametasona).",
      "Epiglotite aguda; Intubação traqueal de emergência em sala de cirurgia.",
      "Asma brônquica; Inalação com broncodilatador beta-2-agonista repetido.",
      "Aspiração de corpo estranho; Broncoaspirar imediatamente por broncoscopia rígida.",
      "Coqueluche clássica; Iniciar Azitromicina oral de imediato."
    ],
    correctIndex: 0,
    explanation: "A tríade de tosse metálica (tosse 'de cachorro'), estridor inspiratório e disfonia/rouquidão sugere Laringotraqueíte Viral Aguda (Crupe). O tratamento de escolha na presença de desconforto respiratório moderado/grave é a nebulização com adrenalina (efeito vasoconritor rápido no edema subglótico) e corticoide (Dexametasona IM/VO).",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_026",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Clínica Médica",
    text: "[FLASHCARD] Paciente diabético dá entrada na emergência sonolento, com respiração rápida e profunda (Kussmaul), dor abdominal difusa e hálito cetônico. Exames revelam glicemia de 380 mg/dL, pH arterial de 7,15, bicarbonato de 10 mEq/L e cetonúria positiva. Qual o diagnóstico e os pilares do tratamento?",
    options: [
      "Cetoacidose Diabética; Hidratação vigorosa, Insulina intravenosa contínua e reposição de Potássio (se K < 5,3 mEq/L).",
      "Estado Hiperosmolar Hiperglicêmico; Hidratação agressiva e insulina em bolus de alta dose, sem reposição de eletrólitos.",
      "Acidose Láctica por Metformina; Alcalinização urgente com bicarbonato de sódio IV e hemodiálise.",
      "Pancreatite aguda necro-hemorrágica biliar; Jejum absoluto e reposição hídrica abundante apenas.",
      "Sepse de foco abdominal; Antibioticoterapia de amplo espectro na primeira hora e norepinefrina."
    ],
    correctIndex: 0,
    explanation: "O quadro clínico e laboratorial (hiperglicemia + acidose metabólica com gap aniônico elevado + cetonemia/cetonúria) é patognomônico de Cetoacidose Diabética (CAD). Os pilares fundamentais do tratamento envolvem hidratação salina vigorosa, insulinoterapia endovenosa e monitorização/reposição de potássio.",
    difficulty: "hard"
  },
  {
    id: "unesp_extra_027",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Cirurgia Geral",
    text: "[FLASHCARD] Qual a tríade clínica diagnóstica sugestiva de Tamponamento Cardíaco no trauma torácico fechado e qual seu nome clássico?",
    options: [
      "Tríade de Beck (Hipofonese de bulhas, Estase jugular e Hipotensão arterial).",
      "Tríade de Cushing (Hipertensão, Bradicardia e Irregularidade respiratória).",
      "Tríade de Virchow (Estase venosa, Lesão endotelial e Hipercoagulabilidade).",
      "Tríade de Charcot (Febre, Icterícia e Dor no hipocôndrio direito).",
      "Tríade de Beck (Hipertensão, Taquicardia e Sopros cardíacos)."
    ],
    correctIndex: 0,
    explanation: "A Tríade de Beck consiste em: 1) Hipotensão arterial; 2) Estase jugular (turgência jugular); e 3) Hipofonese de bulhas cardíacas. Trata-se de sinal semiológico clássico sugestivo de tamponamento cardíaco agudo, comum em traumas torácicos.",
    difficulty: "easy"
  },
  {
    id: "unesp_extra_028",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Endocrinologia",
    text: "[FLASHCARD] Qual o teste de triagem inicial de escolha e qual o teste confirmatório padrão-ouro na suspeita clínica de Síndrome de Cushing?",
    options: [
      "Cortisol livre urinário de 24 horas (triagem) e Teste de supressão com dexametasona em dose baixa (confirmatório).",
      "Cortisol salivar noturno (triagem) e Ultrassonografia das glândulas suprarrenais (confirmatório).",
      "ACTH plasmático (triagem) e Ressonância de hipófise (confirmatório).",
      "Cortisol basal matinal (triagem) e Cintilografia adrenal (confirmatório).",
      "Glicemia de jejum (triagem) e Curva de tolerância à glicose de 2 horas (confirmatório)."
    ],
    correctIndex: 0,
    explanation: "A triagem da Síndrome de Cushing é realizada com cortisol livre urinário de 24 horas, cortisol salivar noturno ou teste de supressão com dose baixa de dexametasona (1mg às 23h). O diagnóstico confirmatório baseia-se na ausência de supressão do cortisol sob doses baixas de dexametasona de forma sustentada.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_029",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Medicina de Família/SUS",
    text: "[FLASHCARD] O que define a Prevenção Quaternária e qual seu objetivo principal no cotidiano médico?",
    options: [
      "Identificar o paciente em risco de supermedicalização, protegendo-o de intervenções médicas desnecessárias ou iatrogênicas.",
      "Evitar a ocorrência de doenças por meio de vacinação e saneamento básico no território.",
      "Realizar diagnóstico precoce por meio de campanhas ativas de rastreamento de doenças assintomáticas.",
      "Reabilitar pacientes que sofreram sequelas graves de patologias agudas ou crônicas.",
      "Tratar e combater epidemias regionais e surtos virais agudos de forma centralizada."
    ],
    correctIndex: 0,
    explanation: "A Prevenção Quaternária é o conjunto de ações que visam identificar pacientes em risco de supermedicalização ou intervenções diagnósticas e terapêuticas excessivas/inadequadas (iatrogenias), reduzindo danos e promovendo uma conduta centrada na ética e bem-estar do indivíduo.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_030",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Ginecologia & Obstetrícia",
    text: "[FLASHCARD] Qual é a infecção sexualmente transmissível ulcerativa caracterizada por úlcera única, indolor, de base limpa e bordas endurecidas (cancro duro), e qual o tratamento preconizado?",
    options: [
      "Sífilis Primária; Penicilina G Benzatina 2,4 milhões de UI intramuscular dose única.",
      "Cancro Mole; Azitromicina 1g via oral dose única.",
      "Herpes Genital simples; Aciclovir 400mg de 8/12h por 7 a 10 dias.",
      "Linfogranuloma Venéreo; Doxiciclina 100mg de 12/12h por 21 dias.",
      "Donovanose; Doxiciclina 100mg de 12/12h até cicatrização completa."
    ],
    correctIndex: 0,
    explanation: "O cancro duro (úlcera genital indolor, única, de fundo limpo e bordas infiltradas) é a lesão patognomônica da Sífilis Primária. O tratamento de eleição é a Penicilina G Benzatina (Penicilina Benzatina) na dose de 2,4 milhões de UI intramuscular em dose única.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_031",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Gastroenterologia",
    text: "Mulher de 28 anos, com história de diarreia crônica com muco e sangue há 6 meses, associada a tenesmo e cólicas abdominais. Realizou colonoscopia que evidenciou mucosa retal e do cólon descendente difusamente eritematosa, friável, com perda do padrão vascular habitual e ulcerações superficiais contínuas. Qual o provável diagnóstico e a conduta medicamentosa inicial de indução de remissão para o quadro leve a moderado?",
    options: [
      "Retocolite Ulcerativa (RCU); derivados do 5-ASA (mesalazina ou sulfassalazina) por via oral e/ou tópica retal.",
      "Doença de Crohn; início imediato de anticorpos anti-TNF (Infliximabe) isolados.",
      "Retocolite Ulcerativa (RCU); prednisona oral de alta dose como terapia de manutenção exclusiva.",
      "Colite Pseudomembranosa; Metronidazol oral associado a loperamida.",
      "Síndrome do Intestino Irritável; probióticos e dieta de exclusão de glúten."
    ],
    correctIndex: 0,
    explanation: "A paciente apresenta quadro típico de Retocolite Ulcerativa (RCU): diarreia mucossanguinolenta crônica, tenesmo e acometimento contínuo e ascendente limitado à mucosa (começando no reto). Para indução de remissão em quadros leves a moderados, os derivados do 5-ASA (mesalazina ou sulfassalazina) são a terapia inicial de escolha.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_032",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Infectologia",
    text: "Paciente de 34 anos apresenta febre alta, mialgia intensa, cefaleia retro-orbital e artralgia há 4 dias. Refere sangramento gengival ao escovar os dentes hoje. Ao exame: desidratação leve, enchimento capilar de 2 segundos, PA 110/70 mmHg, FC 88 bpm. Prova do laço positiva. Exames laboratoriais: hematócrito normal, plaquetas de 95.000/mm³. Como este paciente deve ser classificado segundo as diretrizes de Dengue do Ministério da Saúde e qual a conduta indicada?",
    options: [
      "Grupo B (presença de sangramento espontâneo de pele/mucosa ou prova do laço positiva, sem sinais de alarme); realizar hidratação oral supervisionada na unidade de saúde e aguardar exames laboratoriais.",
      "Grupo A (sem sinais de alarme e sem sangramento); prescrever hidratação oral domiciliar e alta imediata sem exames.",
      "Grupo C (sinais de alarme presentes); internar imediatamente para hidratação venosa vigorosa por pelo menos 48 horas.",
      "Grupo D (sinais de choque); transferir para UTI e iniciar infusão rápida de cristaloides (20 ml/kg) em 20 minutos.",
      "Dengue grave; prescrever corticosteroides endovenosos e infundir concentrado de plaquetas imediatamente."
    ],
    correctIndex: 0,
    explanation: "O paciente apresenta sintomas clássicos de dengue com sangramento mucoso espontâneo (gengivorragia) e prova do laço positiva, porém sem sinais de alarme (como dor abdominal intensa, vômitos persistentes, hipotensão postural). Logo, classifica-se no Grupo B. A conduta do Grupo B inclui hidratação oral abundante imediata (cerca de 60-80 ml/kg/dia), coleta de exames (hemograma completo obrigatório) e reavaliação na unidade até o resultado do hematócrito.",
    difficulty: "hard"
  },
  {
    id: "unesp_extra_033",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Pediatria",
    text: "Menino de 2 anos apresenta distensão abdominal, perda de peso, fezes volumosas de odor fétido e desaceleração do crescimento pôndero-estatural nos últimos 4 meses. A mãe relata que os sintomas se iniciaram após a introdução de massas e pães na dieta. Qual o anticorpo de triagem inicial mais sensível e específico para Doença Celíaca nessa faixa etária?",
    options: [
      "Anticorpo anti-transglutaminase tecidual da classe IgA (associado à dosagem de IgA sérica total).",
      "Anticorpo anti-gliadina IgG isolado, independentemente da idade.",
      "Anticorpo anti-saccharomyces cerevisiae (ASCA).",
      "Anticorpo anti-peroxidase tireoidiana (anti-TPO).",
      "Anticorpo anti-fator intrínseco."
    ],
    correctIndex: 0,
    explanation: "Para o diagnóstico de Doença Celíaca em crianças maiores de 2 anos, o rastreamento sorológico de escolha baseia-se na dosagem do anticorpo anti-transglutaminase tecidual (anti-tTG) da classe IgA, juntamente com a dosagem da IgA sérica total para excluir deficiência seletiva de IgA (comum em celíacos, o que geraria falsos negativos).",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_034",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Ginecologia & Obstetrícia",
    text: "Mulher de 38 anos, nuligesta, queixa-se de menorragia progressiva e dismenorreia há 1 ano, gerando anemia ferropriva refratária a tratamento oral. Ao exame físico, apresenta útero aumentado de volume, correspondendo a 12 semanas gestacionais, com contorno lobulado e indolor. A ultrassonografia transvaginal demonstra mioma intramural de 6 cm que distorce parcialmente a cavidade endometrial (tipo 2-5 de FIGO). A paciente deseja preservar a fertilidade. Qual o tratamento cirúrgico mais indicado?",
    options: [
      "Miomectomia (por videolaparoscopia ou laparotomia).",
      "Histerectomia total com anexectomia bilateral.",
      "Embolização de artérias uterinas com descarte cirúrgico subsequente.",
      "Ablação endometrial térmica global.",
      "Histerossecção histeroscópica isolada sem internação."
    ],
    correctIndex: 0,
    explanation: "Para pacientes sintomáticas (sangramento uterino anormal refratário, anemia) com desejo de preservar a fertilidade ou o útero, a miomectomia é o tratamento cirúrgico reconstrutor de escolha, preservando o órgão para gestações futuras.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_035",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Cirurgia Geral",
    text: "Paciente de 45 anos, com antecedente de apendicectomia prévia na infância, comparece ao pronto-socorro com dor abdominal em cólica difusa, vômitos de aspecto bilioso/fecalóide e distensão abdominal progressiva há 24 horas. Radiografia de abdome de pé e deitado evidencia distensão de alças de intestino delgado com presença de níveis hidroaéreos e ausência de gás no reto. No exame físico: sem sinais de irritação peritoneal. Qual o diagnóstico e a conduta inicial recomendada?",
    options: [
      "Obstrução intestinal por bridas (aderências); conduta conservadora inicial com jejum, passagem de sonda nasogástrica em aspiração e hidratação venosa por 24-48 horas.",
      "Suboclusão intestinal por neoplasia; indicação imediata de colectomia subtotal de urgência.",
      "Hérnia interna estrangulada; laparotomia exploradora imediata sem exames adicionais.",
      "Íleo paralítico pós-operatório tardio; prescrição de laxativos osmóticos orais vigorosos.",
      "Abscesso intra-abdominal; antibioticoterapia de amplo espectro por 14 dias sem sondagem."
    ],
    correctIndex: 0,
    explanation: "O quadro é compatível com obstrução mecânica de intestino delgado, secundária a bridas (aderências pós-operatórias), que é a causa mais comum desse distúrbio. Na ausência de sinais de complicação (estrangulamento, sofrimento de alça, peritonite), a abordagem inicial clássica é conservadora (jejum, descompressão gástrica com SNG e reposição hidroeletrolítica) por até 24 a 48 horas.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_036",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Medicina de Família/SUS",
    text: "O Sistema Único de Saúde (SUS) é norteado por princípios doutrinários e organizativos. Dentre eles, o princípio que assegura que o sistema deve considerar o paciente como um todo, atendendo a todas as suas necessidades de saúde — desde a prevenção e promoção até o tratamento de alta complexidade e reabilitação — é denominado:",
    options: [
      "Integralidade.",
      "Universalidade.",
      "Equidade.",
      "Descentralização.",
      "Resolubilidade."
    ],
    correctIndex: 0,
    explanation: "A Integralidade é o princípio doutrinário do SUS que prega a articulação contínua das ações preventivas, curativas, individuais e coletivas em todos os níveis de complexidade do sistema, focando no indivíduo em sua totalidade de necessidades físicas, psíquicas e sociais.",
    difficulty: "easy"
  },
  {
    id: "unesp_extra_037",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Cardiologia",
    text: "Paciente de 58 anos dá entrada no pronto-socorro com dor torácica retroesternal opressiva e intensa há 1 hora, irradiada para o membro superior esquerdo, acompanhada de sudorese fria. O eletrocardiograma demonstra supradesnivelamento do segmento ST de 3 mm nas derivações DII, DIII e aVF. O hospital dispõe de serviço de hemodinâmica ativo. Qual a conduta padrão-ouro ideal e qual o tempo-alvo recomendado para a intervenção coronária percutânea (ICP)?",
    options: [
      "Intervenção Coronária Percutânea (angioplastia primária) de urgência; tempo porta-balão de até 90 minutos.",
      "Trombólise química imediata com Tenecteplase (TNK); tempo porta-agulha de até 120 minutos.",
      "Cirurgia de revascularização miocárdica de urgência direta (Bypass); tempo porta-sala de 6 horas.",
      "Administração de dupla antiagregação plaquetária e aguardar curvas de troponina para definir angioplastia em 24h.",
      "Encaminhamento ambulatorial para teste ergométrico de controle nas próximas duas semanas."
    ],
    correctIndex: 0,
    explanation: "Em pacientes com Infarto Agudo do Miocárdio com supra de ST (IAMCSST), se o paciente se apresenta em hospital com hemodinâmica disponível, a angioplastia primária (ICP) é o tratamento de eleição, com o tempo-alvo porta-balão (tempo desde a entrada no pronto-socorro até o cruzamento da lesão com o balão de angioplastia) de até 90 minutos.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_038",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Pneumologia",
    text: "Um paciente de 67 anos, tabagista ativo de longa data, portador de Doença Pulmonar Obstrutiva Crônica (DPOC), comparece à UPA com aumento da dispneia habitual, tosse mais produtiva e alteração do aspecto do escarro, que passou a ser purulento (amarelado). Apresenta SpO2 de 89% em ar ambiente. Segundo os critérios de Anthonisen para exacerbação de DPOC, qual a conduta terapêutica correta?",
    options: [
      "Iniciar oxigenoterapia para manter SpO2 entre 88-92%, broncodilatadores de curta ação inalatórios, corticoide sistêmico (prednisona oral) e antibioticoterapia empírica oral.",
      "Iniciar oxigenoterapia em alto fluxo com máscara de reserva com foco em atingir SpO2 de 99-100%, evitando antibióticos.",
      "Indicar intubação orotraqueal imediata e iniciar ventilação mecânica invasiva devido ao escarro purulento.",
      "Tratar apenas com broncodilatador de longa ação e suspender corticoide pelo risco de imunossupressão.",
      "Prescrever apenas repouso físico e fisioterapia respiratória intensiva ambulatorial, suspendendo o tabaco."
    ],
    correctIndex: 0,
    explanation: "O paciente apresenta os três sintomas cardinais de Anthonisen para exacerbação do DPOC (piora da dispneia, aumento do volume do escarro e escarro purulento), o que classifica a exacerbação como tipo I (grave/moderada), exigindo antibioticoterapia empírica. O manejo inclui: oxigênio alvo-dependente (88-92%), broncodilatadores de curta ação (beta-2-agonistas e ipratrópio) e corticoide sistêmico por 5 dias.",
    difficulty: "hard"
  },
  {
    id: "unesp_extra_039",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Nefrologia",
    text: "Durante a investigação de Injúria Renal Aguda (IRA), a diferenciação entre causa pré-renal (hipovolemia, desidratação) e renal intrínseca por Necrose Tubular Aguda (NTA) é essencial. Quais os achados laboratoriais de Fração de Excreção de Sódio (FeNa) e de Osmolaridade Urinária que corroboram, respectively, o diagnóstico de causa PRÉ-RENAL?",
    options: [
      "FeNa < 1% e Osmolaridade urinária elevada (> 500 mOsm/kg H2O).",
      "FeNa > 2% e Osmolaridade urinária baixa (< 350 mOsm/kg H2O).",
      "FeNa > 1% e Sódio urinário elevado (> 40 mEq/L).",
      "FeNa < 1% e Presença de cilindros granulosos acastanhados no sedimento urinário.",
      "FeNa igual a 0% e Ausência completa de proteínas urinárias."
    ],
    correctIndex: 0,
    explanation: "Na IRA pré-renal, os túbulos estão intactos e reagem à hipovolemia maximizando a reabsorção de sódio e água. Logo, o sódio excretado na urina é muito baixo (FeNa < 1% e Sódio urinário < 20 mEq/L) e a urina é altamente concentrada (Osmolaridade urinária > 500 mOsm/kg H2O). Na NTA, há lesão tubular, impossibilitando a retenção de sódio e a concentração da urina (FeNa > 1-2%, Osmolaridade < 350).",
    difficulty: "hard"
  },
  {
    id: "unesp_extra_040",
    banca: "UNESP",
    cycle: "Internato",
    subject: "Neonatologia",
    text: "No atendimento em sala de parto de um recém-nascido a termo (> 37 semanas), após o nascimento, o bebê apresenta-se em apneia e hipotônico. O clampeamento do cordão é realizado de imediato e o bebê é levado à mesa de reanimação. Quais os passos sequenciais imediatos a serem seguidos no primeiro minuto de vida (Minuto de Ouro)?",
    options: [
      "Prover calor, posicionar a cabeça em leve extensão, aspirar vias aéreas (se necessário), secar e reavaliar frequência cardíaca e respiração; se apneia ou FC < 100 bpm, iniciar Ventilação por Pressão Positiva (VPP).",
      "Realizar massagem cardíaca externa contínua associada a adrenalina endotraqueal direta.",
      "Realizar intubação orotraqueal imediata sem necessidade de ventilação sob máscara.",
      "Aplicar oxigênio inalatório livre de alto fluxo direcionado ao rosto e aguardar 2 minutos pela recuperação.",
      "Secar o recém-nascido vigorosamente e prescrever banho de imersão quente para estimulação mecânica periférica."
    ],
    correctIndex: 0,
    explanation: "Os passos iniciais da reanimação neonatal a termo consistem em prover calor, posicionar a cabeça, aspirar boca e narinas se houver obstrução por mecônio ou secreções, secar e desprezar campos úmidos (isso deve durar até 30 segundos). Em seguida, avalia-se respiração e FC. Se em apneia, respiração irregular (gasping) ou FC < 100 bpm, deve-se iniciar a Ventilação por Pressão Positiva (VPP) nos primeiros 60 segundos de vida (o 'Minuto de Ouro').",
    difficulty: "hard"
  },
  {
    id: "unesp_extra_041",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Urgência e Emergência",
    text: "Um homem de 30 anos (peso estimado em 80 kg) é resgatado de incêndio domiciliar apresentando queimaduras de 2º e 3º graus em todo o membro superior direito, no tronco anterior completo e na face anterior da coxa direita. Com base na Regra dos Nove de Wallace e na fórmula de Parkland reformulada pelo consenso internacional de queimaduras (2 ml/kg/% de superfície corporal queimada), qual o volume total de Ringer Lactato a ser infundido nas primeiras 24 horas?",
    options: [
      "4.960 ml de Ringer Lactato (com 50% infundidos nas primeiras 8 horas desde o momento do trauma).",
      "9.920 ml de Ringer Lactato (com 100% infundidos uniformemente nas primeiras 24 horas).",
      "3.200 ml de Soro Fisiológico 0,9% administrado em bomba de infusão em 12 horas.",
      "12.000 ml de Ringer Lactato contendo bicarbonato de sódio para evitar mioglobinúria.",
      "1.500 ml de Soro Glicosado 5% associado a albumina humana exógena."
    ],
    correctIndex: 0,
    explanation: "Cálculo da Superfície Corporal Queimada (SCQ): membro superior direito (9%), tronco anterior (18%), face anterior da coxa direita (4,5%, referente à face anterior de uma das coxas) = 31,5% SCQ. Arredondando o cálculo para 31% SCQ e utilizando a fórmula de Parkland de 2 ml/kg/%SCQ para 80kg: 2 * 80 * 31 = 4.960 ml. A infusão deve ser de Ringer Lactato, sendo metade (2.480 ml) infundida nas primeiras 8 horas pós-queimadura e a outra metade nas 16 horas seguintes.",
    difficulty: "hard"
  },
  {
    id: "unesp_extra_042",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Psiquiatria",
    text: "Paciente de 41 anos, com diagnóstico de esquizofrenia paranoide, dá entrada no pronto-socorro apresentando febre alta (39,4°C), sudorese profusa, taquicardia, flutuação pressórica e rigidez muscular generalizada severa descrita como em 'cano de chumbo'. Familiares relatam que foi iniciada dose elevada de Haloperidol há 5 dias. Qual o diagnóstico e qual o mecanismo fisiopatológico principal envolvido?",
    options: [
      "Síndrome Neuroléptica Maligna (SNM); hipodopaminergia central devido ao bloqueio maciço de receptores dopaminérgicos D2 por antipsicóticos.",
      "Síndrome Serotoninérgica; hiperatividade de receptores 5-HT1A e 5-HT2 por excesso de recaptação de serotonina.",
      "Hipertermia Maligna; mutação no gene do receptor de rianodina desencadeada por anestésicos inalatórios.",
      "Catatonia letal primária; deficiência congênita de ácido gama-aminobutírico (GABA).",
      "Distonia aguda grave; hiperatividade colinérgica pura no trato nigroestriatal tratado com biperideno."
    ],
    correctIndex: 0,
    explanation: "A Síndrome Neuroléptica Maligna é uma reação adversa idiossincrática grave aos antipsicóticos (especialmente os típicos de alta potência, como o Haloperidol), caracterizada por hipertermia, rigidez muscular extrema (em cano de chumbo), instabilidade autonômica e alteração do estado mental. É causada pelo bloqueio intenso dos receptores dopaminérgicos D2 centrais.",
    difficulty: "hard"
  },
  {
    id: "unesp_extra_043",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Endocrinologia",
    text: "Homem de 56 anos, portador de Diabetes Mellitus tipo 2 há 3 anos, tabagista e obeso (IMC 32 kg/m²), apresenta-se para consulta de acompanhamento. Exames: Glicemia de jejum 158 mg/dL, HbA1c de 8,1% (em uso de Metformina 2g/dia), taxa de filtração glomerular (TFG) de 54 ml/min/1,73m² e albuminúria de 120 mg/g de creatinina (microalbuminúria). Qual a classe de antidiabético oral com maior benefício cardiovascular e de nefroproteção comprovados a ser associada à Metformina neste momento?",
    options: [
      "Inibidores do cotransportador de sódio-glicose tipo 2 (iSGLT2), como a empagliflozina ou dapagliflozina.",
      "Sulfonilureias de segunda geração (glibenclamida), visando redução rápida de HbA1c.",
      "Tiazolidinedionas (pioglitazona), devido ao alto IMC.",
      "Inibidores da alfa-glicosidase (acarbose), para redução da glicemia pós-prandial.",
      "Insulina NPH em dose única noturna (Bedtime) como primeira escolha terapêutica imediata."
    ],
    correctIndex: 0,
    explanation: "Em pacientes com DM2 e Doença Renal do Diabetes (definida por TFG reduzida ou micro/macroalbuminúria) ou doença cardiovascular estabelecida/alto risco, os inibidores de SGLT2 (iSGLT2) demonstraram reduzir expressivamente a progressão da perda de função renal, eventos cardiovasculares e internação por insuficiência cardíaca, sendo a associação de escolha recomendada pelas diretrizes mundiais.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_044",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Hematologia",
    text: "Um paciente de 25 anos apresenta anemia leve ao hemograma de check-up: Hb de 11,2 g/dL, VCM de 64 fL (microcitose importante) e RDW de 12,1% (normal/homogêneo). Ao avaliar a suspeita de traço beta-talassêmico (beta-talassemia menor) em comparação com anemia ferropriva, qual perfil de ferro e qual índice clássico de triagem calculável pelo hemograma auxiliam na diferenciação diagnóstica?",
    options: [
      "Perfil de ferro normal ou elevado (ferritina normal) com Índice de Mentzer (VCM/Hemácias) menor que 13, sugerindo traço talassêmico.",
      "Ferritina extremamente baixa com Índice de Mentzer maior que 15, sugerindo traço talassêmico.",
      "Saturação de transferrina inferior a 10% com RDW elevado acima de 18%.",
      "Mielograma evidenciando sideroblastos em anel com presença de corpúsculos de Heinz.",
      "Ausência de hemoglobina A (HbA1) na eletroforese de hemoglobinas."
    ],
    correctIndex: 0,
    explanation: "Na beta-talassemia menor (traço talassêmico), as hemácias são microcíticas porém homogêneas (RDW normal) e em número elevado (frequentemente > 5 milhões/mm³). O Índice de Mentzer (VCM dividido pelo número de hemácias em milhões) é tipicamente menor que 13 nos distúrbios genéticos de cadeia de globina, enquanto na anemia ferropriva (onde há menor quantidade de hemácias produzidas e alta variação de tamanho - RDW alto) o índice costuma ser maior que 13. O perfil de ferro na talassemia menor é normal.",
    difficulty: "hard"
  },
  {
    id: "unesp_extra_045",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Ginecologia & Obstetrícia",
    text: "Gestante de 26 semanas realiza teste oral de tolerância à glicose com 75g de dextrosol (TOTG 75g) prescrito na rotina pré-natal de baixo risco. Os resultados revelam: Glicemia de jejum = 91 mg/dL; Glicemia após 1 hora = 184 mg/dL; Glicemia após 2 horas = 151 mg/dL. Com base nos critérios diagnosticos de Diabetes Gestacional (DMG), como deve ser classificado e conduzido o caso?",
    options: [
      "Diabetes Mellitus Gestacional (DMG), pois o valor de 1 hora está elevado (≥ 180 mg/dL). Orientar inicialmente terapia nutricional e atividade física.",
      "Resultado totalmente normal, pois o jejum está abaixo de 92 mg/dL e o valor de 2 horas está abaixo de 153 mg/dL.",
      "Diabetes Mellitus Pré-existente (Overt Diabetes), exigindo introdução imedião de insulina regular subcutânea pré-refeições.",
      "Intolerância transitória à glicose de pouca relevância clínica; repetir exame em 4 semanas.",
      "DMG falso-positivo devido ao estresse da coleta; solicitar hemoglobina glicada imediata para confirmação diagnóstica."
    ],
    correctIndex: 0,
    explanation: "Os pontos de corte do TOTG 75g entre 24-28 semanas para diagnóstico de DMG são: Jejum ≥ 92 mg/dL, 1 hora ≥ 180 mg/dL, e 2 horas ≥ 153 mg/dL. A presença de apenas UM valor alterado sela o diagnóstico. No caso clínico, o valor de 1h (184 mg/dL) está acima do limite de 180 mg/dL, configurando Diabetes Gestacional. A abordagem inicial fundamenta-se em dieta fracionada e exercícios físicos.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_046",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Cirurgia Geral",
    text: "Gestante de 14 semanas queixa-se de dor abdominal persistente, de início difuso, que se localizou no flanco direito e hipocôndrio direito, associada a náuseas e febre de 38°C. Ao exame físico: dor à compressão do flanco direito de forma mais cefálica que o habitual. Qual a principal suspeita clínica e qual o exame de imagem inicial recomendado?",
    options: [
      "Apendicite aguda; Ultrassonografia de abdome (com transdutor posicionado no local da dor).",
      "Colecistite aguda; Cintilografia biliar urgente.",
      "Doença inflamatória pélvica; Tomografia Computadorizada contrastada de abdome total.",
      "Rotura de cisto ovariano; Ressonância Magnética imediata como primeira linha absoluta.",
      "Apendicite aguda; Tomografia Computadorizada de abdome sem contraste direto."
    ],
    correctIndex: 0,
    explanation: "O quadro de dor abdominal localizada no flanco ou quadrante superior direito em gestante com febre e náuseas deve levantar suspeita de apendicite aguda. O crescimento uterino desloca o apêndice cecal superiormente e lateralmente, gerando sintomas atípicos (mais altos que no ponto de McBurney). O exame inicial mais seguro e de escolha em gestantes é a Ultrassonografia. Se a USG for inconclusiva, a Ressonância Magnética é o próximo passo recomendado.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_047",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Pediatria",
    text: "Mãe comparece à Unidade Básica de Saúde para vacinar seu filho de 4 meses de idade. De acordo com o Calendário Nacional de Vacinação do Ministério da Saúde do Brasil, quais imunizantes de rotina esta criança deve receber nesta consulta?",
    options: [
      "Vacina Pentavalente, VIP (Vacina Inativada Poliomielite), Rota (Vacina Oral de Rotavírus Humano) e Pneumocócica 10 Valente (conjugada).",
      "Tríplice Viral, Meningocócica C e BCG.",
      "DTP (Tríplice Bacteriana), VOP (Sabin oral) e Hepatite A.",
      "Febre Amarela, VIP e Varicela.",
      "Vacina Pentavalente, VOP e Meningocócica ACWY."
    ],
    correctIndex: 0,
    explanation: "O calendário vacinal aos 2 e aos 4 meses é idêntico no Brasil (esquema de primeira e segunda dose): Pentavalente (difteria, tétano, coqueluche, hepatite B e Haemophilus influenzae B), VIP (paralisia infantil de vírus inativado), Rotavírus Humano (VIP/G1P) e Pneumocócica 10-valente.",
    difficulty: "easy"
  },
  {
    id: "unesp_extra_048",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Medicina de Família/SUS",
    text: "Um homem de 52 anos, sem comorbidades prévias ou assistência médica nos últimos anos, sofre queda de altura em via pública de cerca de 4 metros e vai a óbito no local. No caso de mortes decorrentes de causas externas (violentas ou acidentais), quem tem a competência legal exclusiva para preencher e assinar a Declaração de Óbito (DO)?",
    options: [
      "O médico legista do Instituto de Medicina Legal (IML), independentemente do tempo de sobrevida pós-trauma.",
      "O médico do Serviço de Verificação de Óbitos (SVO), visto que o paciente não tinha assistência médica regular.",
      "O médico da equipe de Saúde da Família da área adscrita do domicílio da vítima.",
      "O médico socorrista do SAMU que constatou o óbito no local.",
      "Qualquer médico que examine externamente o corpo na delegacia de polícia."
    ],
    correctIndex: 0,
    explanation: "Em todo óbito por causa externa (homicídios, suicídios, acidentes de qualquer natureza), o preenchimento da Declaração de Óbito é de responsabilidade EXCLUSIVA dos peritos médicos do Instituto de Medicina Legal (IML), pois trata-se de caso de interesse pericial e médico-legal, mesmo que o óbito ocorra no hospital tempos depois do trauma.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_049",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Neurologia",
    text: "Paciente de 62 anos, previamente hígida, é trazida ao pronto-socorro apresentando hemiparesia súbita à direita e afasia de expressão iniciadas há 2 horas. A Tomografia Computadorizada de crânio inicial descarta sangramento agudo (sem sinais de hemorragia). A PA é de 160/95 mmHg. Qual a conduta terapêutica de escolha imediata, respeitando os critérios de elegibilidade nacionais?",
    options: [
      "Indicar trombólise química com Alteplase (rtPA) endovenosa de imediato, uma vez que o paciente está dentro da janela de 4,5 horas e não apresenta contraindicações.",
      "Iniciar anticoagulação plena imediata com Heparina não fracionada endovenosa.",
      "Administrar ácido acetilsalicílico (AAS) 300mg e clopidogrel 300mg e aguardar 24h para avaliar déficits.",
      "Iniciar redução imediata e agressiva da PA com nitroprussiato de sódio para atingir alvo de 110/70 mmHg antes de qualquer conduta.",
      "Indicar cirurgia descompressiva (craniectomia) profilática precoce para evitar edema cerebral."
    ],
    correctIndex: 0,
    explanation: "O paciente apresenta AVC isquêmico agudo em janela ideal de tempo (< 4,5 horas do início dos sintomas) e com TC descartando sangramento. Com a PA abaixo de 185/110 mmHg, está plenamente elegível para trombólise endovenosa com rtPA. A redução pressórica só se faz necessária se os níveis ultrapassarem 185/110 mmHg para viabilizar a trombólise.",
    difficulty: "hard"
  },
  {
    id: "unesp_extra_050",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Dermatologia",
    text: "Paciente de 69 anos apresenta lesionamento nodular perolado de 0,8 cm em região nasal de crescimento lento há 2 anos, com telangiectasias finas superficiais e ulceração central discreta (aspecto de úlcera roedora). Refere história de exposição solar crônica sem fotoproteção. Qual o provável diagnóstico histopatológico e qual o seu comportamento biológico?",
    options: [
      "Carcinoma Basocelular (CBC); tumor maligno de pele mais comum, de crescimento lento, destrutivo localmente, mas com raríssimo potencial de metástase.",
      "Carcinoma Espinocelular (CEC); neoplasia originada de queratinócitos com alto índice de metástases linfonodais precoces.",
      "Melanoma Nodular; comportamento altamente agressivo com disseminação hematogênica disseminada.",
      "Ceratose seborreica inflamada; lesão benigna sem potencial de malignidade que regride espontaneamente.",
      "Queratoacantoma ulcerado; lesão de resolução espontânea clássica tratada com pomadas."
    ],
    correctIndex: 0,
    explanation: "A descrição clínica de nódulo perolado (translúcido), com telangiectasias e ulceração central em área fotoexposta de paciente idoso é clássica de Carcinoma Basocelular (CBC). É o câncer de pele não melanoma mais prevalente. Apresenta invasão local importante se não tratado, porém metástases à distância são extremamente raras.",
    difficulty: "easy"
  },
  {
    id: "unesp_extra_051",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Urologia",
    text: "[FLASHCARD] Jovem de 16 anos apresenta dor testicular súbita e intensa à esquerda, acompanhada de náuseas. Ao exame físico: testículo esquerdo elevado, na horizontal, e o Sinal de Prehn é negativo (a elevação do testículo não alivia a dor, chegando a piorar). O reflexo cremastérico está abolido. Qual o diagnóstico e a conduta cirúrgica imediata?",
    options: [
      "Torção Testicular; exploração cirúrgica de urgência bilateral (orquidopexia bilateral ou orquiectomia se necrose).",
      "Orquiepididimite bacteriana; repouso absoluto, suspensório escrotal e Ciprofloxacino oral.",
      "Torção de apêndice testicular (hidátide de Morgagni); tratamento conservador com analgésicos comuns.",
      "Hérnia inguinal estrangulada; laparotomia mediana de emergência.",
      "Varicocele esquerda trombosada; flebectomia eletiva."
    ],
    correctIndex: 0,
    explanation: "A dor testicular aguda unilateral em adolescentes com elevação testicular, horizontalização do órgão, reflexo cremastérico abolido e Sinal de Prehn negativo (dor que não melhora à elevação testicular) é altamente sugestiva de Torção Testicular. A conduta é a cirurgia de urgência para distorção e fixação de ambos os testículos (orquidopexia bilateral), idealmente antes de 6 horas para preservação da viabilidade glandular.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_052",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Cardiologia",
    text: "[FLASHCARD] Quais as quatro classes de medicamentos que compõem o pilar do tratamento farmacológico atual (Quádrupla Terapia) que reduz a mortalidade na Insuficiência Cardíaca com Fração de Ejeção Reduzida (ICFEr)?",
    options: [
      "Inibidores da Neprilisina e do Receptor de Angiotensina (Sacubitril-Valsartana) ou IECA; Betabloqueadores (Carvedilol, Metoprolol, Bisoprolol); Antagonistas do Receptor de Mineralocorticoide (Espironolactona); Inibidores de SGLT2 (Dapagliflozina ou Empagliflozina).",
      "Anlodipino, Clortalidona, Varfarina e Digoxina.",
      "IECA, Bloqueadores de Canal de Cálcio, Furosemida e Ácido Acetilsalicílico.",
      "Betabloqueadores, Estatinas, Nitratos de longa ação e Amiodarona.",
      "Sacubitril-Valsartana, Propafenona, Dobutamina e Hidralazina."
    ],
    correctIndex: 0,
    explanation: "A quádrupla terapia revolucionou o prognóstico da ICFEr (fração de ejeção ≤ 40%), demonstrando de forma consistente redução de mortalidade cardiovascular e de internações. É composta por: 1) IECA/BRA ou Sacubitril-Valsartana; 2) Betabloqueador selecionado (Carvedilol, Succinato de Metoprolol ou Bisoprolol); 3) Espironolactona (antagonista mineralocorticoide); e 4) Inibidor de SGLT2 (Dapagliflozina ou Empagliflozina).",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_053",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Ginecologia & Obstetrícia",
    text: "[FLASHCARD] Mulher de 30 anos apresenta histórico de 3 perdas gestacionais consecutivas espontâneas antes de 10 semanas de gestação. Relata episódio prévio de trombose venosa profunda em membro inferior esquerdo há 2 anos. Qual o diagnóstico sindrômico provável e o principal anticorpo ou anticoagulante lúpico de pesquisa mandatória?",
    options: [
      "Síndrome do Anticorpo Antifosfolipídeo (SAF); pesquisa de Anticoagulante lúpico, Anticorpo anti-beta2-glicoproteína I e Anticorpo anticardiolipina.",
      "Trombofilia hereditária por mutação do Fator V de Leyden; pesquisa de resistência à proteína C reativa.",
      "Incompetência istmocervical; realizar cerclagem uterina eletiva na 24ª semana de gestação subsequente.",
      "Insuficiência de corpo lúteo primária; dosar progesterona sérica de 24 em 24 horas no ciclo lúteo.",
      "Síndrome de Turner em mosaico; realizar cariótipo do casal urgente."
    ],
    correctIndex: 0,
    explanation: "A presença de morbidade gestacional (como ≥ 3 abortos espontâneos inexplicados de < 10 semanas) associada a evento trombótico prévio confirma o diagnóstico clínico de Síndrome do Anticorpo Antifosfolipídeo (SAF) se corroborado laboratorialmente. Os critérios laboratoriais envolvem a positividade persistente (com intervalo de 12 semanas) de pelo menos um dos anticorpos: anticoagulante lúpico, anticardiolipina IgM/IgG de títulos moderados/altos, ou anti-beta2-glicoproteína I IgM/IgG.",
    difficulty: "hard"
  },
  {
    id: "unesp_extra_054",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Medicina Intensiva",
    text: "[FLASHCARD] Paciente internado por Sepse de foco pulmonar evolui com hipotensão arterial refratária a ressuscitação volêmica adequada com cristaloides (30 ml/kg) e necessidade de vasopressor para manter PAM ≥ 65 mmHg e lactato sérico > 2 mmol/L. Qual o diagnóstico e a droga vasopressora de primeira escolha indicada?",
    options: [
      "Choque Séptico; Noradrenalina (Norepinefrina) por via endovenosa contínua.",
      "Sepse grave compensada; Dopamina em dose dopaminérgica.",
      "Síndrome da Angústia Respiratória Aguda (SARA); Dobutamina pura.",
      "Choque anafilático secundário; Adrenalina intramuscular imediata.",
      "Choque hipovolêmico por sequestro; Nitroprussiato de sódio contínuo."
    ],
    correctIndex: 0,
    explanation: "A presença de hipotensão que requer vasopressores para manter PAM ≥ 65 mmHg E lactato > 2 mmol/L a despeito de ressuscitação volêmica adequada define a transição de Sepse para Choque Séptico (critérios Sepsis-3). A droga de primeira escolha preconizada pelo Surviving Sepsis Campaign é a Noradrenalina (Norepinefrina) administrada preferencialmente em acesso venoso central.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_055",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Pediatria",
    text: "[FLASHCARD] Lactente de 2 meses de vida apresenta estridor inspiratório de início na segunda semana de vida. O som piora quando o lactente é colocado em decúbito dorsal (supino), chora ou mama, e melhora marcadamente em decúbito ventral (prono). O desenvolvimento pondero-estatutal é normal. Qual o diagnóstico mais provável?",
    options: [
      "Laringomalácia.",
      "Hemangioma subglótico inflamatório.",
      "Anel vascular traqueal compressivo.",
      "Fenda laríngea posterior.",
      "Paralisia bilateral de pregas vocais."
    ],
    correctIndex: 0,
    explanation: "A Laringomalácia é a causa congênita mais comum de estridor na infância. Caracteriza-se pelo colapso das estruturas supraglóticas flácidas durante a inspiração. O quadro clássico é o estridor inspiratório que se agrava em supino, agitação e mamadas, melhorando em decúbito ventral (prono). Na maioria dos casos, é autolimitada e regride espontaneamente até os 18-24 meses de vida.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_056",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Epidemiologia",
    text: "[FLASHCARD] Na metodologia científica e bioestatística médica, quais as medidas de associação (efeito) indicadas para expressar a força de associação entre o fator de risco e o desfecho clínico nos estudos de COORTE e CASO-CONTROLE, respectivamente?",
    options: [
      "Estudo de Coorte: Risco Relativo (RR); Estudo de Caso-Controle: Razão de Chances (Odds Ratio - OR).",
      "Estudo de Coorte: Razão de Chances (OR); Estudo de Caso-Controle: Risco Relativo (RR).",
      "Ambos os desenhos avaliam exclusivamente através do Risco Atribuível Populacional.",
      "Estudo de Coorte: Prevalência Relativa; Estudo de Caso-Controle: Hazard Ratio (HR).",
      "Estudo de Coorte: Sensibilidade diagnóstica; Estudo de Caso-Controle: Especificidade analítica."
    ],
    correctIndex: 0,
    explanation: "Em estudos de Coorte, onde acompanhamos grupos expostos e não expostos ao longo do tempo para calcular incidências, a medida de associação de escolha é o Risco Relativo (RR). Em estudos de Caso-Controle, onde partimos do desfecho (doentes vs não doentes) e investigamos a exposição retrospectivamente (não sendo possível estimar incidências), a medida de associação indicada é a Razão de Chances (Odds Ratio - OR).",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_057",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Cirurgia Geral",
    text: "[FLASHCARD] Na anatomia cirúrgica da região inguinal, a diferenciação entre a Hérnia Inguinal Direta e a Hérnia Inguinal Indireta é feita com base em qual ponto de referência anatômico?",
    options: [
      "Vasos epigástricos inferiores: a hérnia DIRETA ocorre medialmente a esses vasos (no triângulo de Hesselbach); a hérnia INDIRETA ocorre lateralmente a eles (através do anel inguinal interno).",
      "Músculo reto abdominal: a direta ocorre acima e a indireta ocorre abaixo de sua aponeurose.",
      "Ligamento inguinal de Poupart: a direta passa abaixo e a indireta passa acima do ligamento.",
      "Anel crural (femoral): a direta passa por dentro e a indireta passa por fora do canal femoral.",
      "Artéria femoral superficial: a direta cruza anterior e a indireta cruza posterior à artéria."
    ],
    correctIndex: 0,
    explanation: "Os vasos epigástricos inferiores são o marco anatômico de diferenciação. As hérnias inguinais diretas ocorrem por fraqueza da parede posterior (fáscia transversalis), situando-se medialmente aos vasos epigástricos inferiores, dentro do Triângulo de Hesselbach. As hérnias indiretas originam-se da patência do conduto peritônio-vaginal, adentrando o anel inguinal profundo, lateralmente aos referidos vasos.",
    difficulty: "hard"
  },
  {
    id: "unesp_extra_058",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Ginecologia & Obstetrícia",
    text: "[FLASHCARD] Conforme a recomendação do Ministério da Saúde do Brasil para o rastreamento do câncer de colo uterino através do exame citopatológico (Papanicolau), qual a faixa etária indicada e a periodicidade do exame após dois resultados anuais normais consecutivos?",
    options: [
      "Mulheres de 25 a 64 anos de idade, que já iniciaram atividade sexual; o exame deve ser realizado a cada 3 anos.",
      "Mulheres de 18 a 50 anos de idade, anualmente de forma vitalícia.",
      "Mulheres de 21 a 65 anos de idade, a cada 5 anos com pesquisa conjunta de HPV-DNA.",
      "Mulheres e homens trans de 12 a 80 anos de idade, a cada 2 anos.",
      "Toda mulher ativa sexualmente de qualquer idade, anualmente sem espaçamento."
    ],
    correctIndex: 0,
    explanation: "As diretrizes brasileiras recomendam o rastreamento em mulheres (ou pessoas com colo do útero) na faixa etária de 25 a 64 anos que já tiveram atividade sexual. A periodicidade recomendada é anual nos dois primeiros exames e, se ambos forem normais, o intervalo de acompanhamento passa a ser a cada 3 anos.",
    difficulty: "easy"
  },
  {
    id: "unesp_extra_059",
    banca: "UNESP",
    cycle: "Ciclo Clínico",
    subject: "Reumatologia",
    text: "[FLASHCARD] Paciente de 48 anos com quadro clínico de dor, edema, eritema intenso e calor em primeira articulação metatarsofalangeana esquerda (podagra) de início agudo na madrugada. Suspeita-se de crise de Gota aguda. Qual o tratamento farmacológico inicial de escolha para controle da dor e qual erro de manejo terapêutico deve ser evitado?",
    options: [
      "Tratar com Anti-inflamatórios Não Esteroidais (AINEs) e/ou Colchicina; o erro grave a ser evitado é iniciar ou alterar a dose de Alopurinol durante a crise aguda álgica.",
      "Iniciar imediatamente Alopurinol em altas doses associado a AAS 100mg diários.",
      "Realizar infiltração intra-articular imediata de ácido hialurônico sem analgésicos orais.",
      "Administrar antibiótico intravenoso (cefalotina) e iniciar Alopurinol no primeiro dia de internação.",
      "Iniciar Febuxostate endovenoso associado a repouso total com compressas quentes."
    ],
    correctIndex: 0,
    explanation: "O tratamento da crise de gota aguda foca no alívio da dor e inflamação com AINEs, Colchicina e/ou Corticoides. O erro clássico de conduta é iniciar, suspender ou alterar a dose de Alopurinol durante a crise álgica aguda, pois flutuações rápidas nos níveis séricos de ácido úrico promovem a dissolução parcial dos cristais de urato depositados, prolongando ou exacerbando severamente a crise inflamatória articular.",
    difficulty: "medium"
  },
  {
    id: "unesp_extra_060",
    banca: "UNESP",
    cycle: "Pediatria",
    text: "[FLASHCARD] Lactente do sexo masculino, de 3 semanas de vida, previamente saudável, passa a apresentar vômitos pós-prandiais frequentes, não biliosos, vigorosos (em jato). Ao exame: desidratado, alcalose metabólica hipoclorêmica ao laboratório e palpação de pequena tumoração firme em quadrante superior direito do abdome. Qual o diagnóstico?",
    options: [
      "Estenose Hipertrófica do Piloro.",
      "Doença do Refluxo Gastroesofágico patológica.",
      "Atresia de esôfago com fístula traqueoesofágica distal.",
      "Intussuscepção intestinal aguda.",
      "Má rotação intestinal com vólvulo de mesentério."
    ],
    correctIndex: 0,
    explanation: "A Estenose Hipertrófica do Piloro é caracterizada por vômitos em jato, não biliosos (pois a obstrução é proximal à ampola de Vater), que se iniciam entre a 2ª e 5ª semana de vida. O lactente mantém apetite vigoroso ('faminto'). O distúrbio metabólico clássico é a alcalose metabólica hipoclorêmica hipocalêmica (decorrente da perda de HCl gástrico). Ao exame, a tumoração palpável descrita é a 'oliva pilórica'. O tratamento definitivo é cirúrgico (piloromiotomia de Fredet-Ramstedt).",
    difficulty: "hard"
  }
];
