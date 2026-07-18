import * as fs from 'fs';

interface ClinicalCase {
  id: string;
  diagnosis: string;
  aliases: string[];
  specialty: string;
  clues: string[];
  explanation: string;
}

const NEW_CASES: ClinicalCase[] = [
  {
    id: 'case_131',
    diagnosis: 'Síndrome de Mallory-Weiss',
    aliases: ['mallory-weiss', 'síndrome de mallory weiss', 'sindrome de mallory-weiss', 'laceração de mallory-weiss'],
    specialty: 'Gastroenterologia',
    clues: [
      'Homem de 34 anos com episódios repetidos de vômitos intensos após consumo excessivo de álcool.',
      'Apresenta dor epigástrica de início súbito durante os esforços de vômito.',
      'O paciente nota sangue vermelho vivo misturado nos últimos episódios de vômito.',
      'Sinais vitais normais e exame abdominal inocente (sem sinais de peritonite).',
      'Toque retal sem evidência de melena; exames laboratoriais iniciais normais.',
      'Endoscopia digestiva alta (EDA) revela laceração longitudinal da mucosa na junção esofagogástrica.'
    ],
    explanation: 'A Síndrome de Mallory-Weiss é caracterizada por lacerações longitudinais na mucosa do esôfago distal ou estômago proximal, precipitadas por aumento súbito da pressão intrabdominal (como vômitos repetidos, tosse ou convulsões). É uma causa comum de hemorragia digestiva alta, frequentemente associada ao etilismo agudo. O diagnóstico é feito por EDA e a maioria dos casos cessa espontaneamente.'
  },
  {
    id: 'case_132',
    diagnosis: 'Fibrose cística',
    aliases: ['fibrose cística', 'fibrose cistica', 'mucoviscidose'],
    specialty: 'Pediatria / Pneumologia',
    clues: [
      'Criança de 3 anos com histórico de infecções respiratórias de repetição e tosse crônica produtiva.',
      'Mãe refere fezes volumosas, brilhantes, pastosas e com odor muito fétido (esteatorreia).',
      'Apresenta déficit ponderoestrutural importante, situando-se abaixo do percentil 3 para peso e altura.',
      'Histórico de íleo meconial ao nascimento, necessitando de intervenção cirúrgica.',
      'A mãe relata que a pele da criança tem um gosto muito salgado ao beijá-la.',
      'Dosagem de cloreto no suor revela valores persistentemente acima de 60 mmol/L.'
    ],
    explanation: 'A Fibrose Cística (mucoviscidose) é uma doença autossômica recessiva causada por mutações no gene CFTR, alterando o transporte de cloro e água nas membranas epiteliais. Isso resulta em secreções extremamente viscosas nos pulmões, pâncreas, trato gastrointestinal e glândulas sudoríparas. Manifesta-se com doença pulmonar obstrutiva crônica, insuficiência pancreática exócrina e suor salgado. O diagnóstico é confirmado pelo teste do suor.'
  },
  {
    id: 'case_133',
    diagnosis: 'Sarcoidose',
    aliases: ['sarcoidose'],
    specialty: 'Pneumologia / Reumatologia',
    clues: [
      'Mulher de 32 anos, negra, apresenta tosse seca persistente, dispneia leve e fadiga há 3 meses.',
      'Aparecimento de lesões nodulares eritematosas e dolorosas nas canelas (eritema nodoso).',
      'Exame oftalmológico revela uveíte anterior bilateral.',
      'Radiografia de tórax evidencia linfadenopatia hilar bilateral simétrica e infiltrado intersticial.',
      'Nível sérico da enzima conversora de angiotensina (ECA) marcadamente elevado.',
      'Biópsia transbrônquica revela granulomas não caseificantes com células gigantes multinucleadas.'
    ],
    explanation: 'A Sarcoidose é uma doença inflamatória sistêmica de etiologia desconhecida, caracterizada pela formação de granulomas não caseificantes em múltiplos órgãos, acometendo principalmente os pulmões e linfonodos hilares. Sinais comuns incluem adenopatia hilar bilateral, eritema nodoso, uveíte, fadiga e elevação da ECA. A biópsia com exclusão de tuberculose e fungos confirma o diagnóstico.'
  },
  {
    id: 'case_134',
    diagnosis: 'Doença de Wilson',
    aliases: ['doença de wilson', 'doenca de wilson', 'degeneração hepatolenticular'],
    specialty: 'Neurologia / Gastroenterologia',
    clues: [
      'Jovem de 19 anos apresenta tremores progressivos, rigidez muscular e dificuldade na fala (disartria).',
      'Familiares relatam alterações recentes de comportamento, instabilidade emocional e declínio escolar.',
      'Exames laboratoriais revelam elevação moderada de transaminases (AST/ALT) sem causa viral aparente.',
      'Exame em lâmpada de fenda ocular revela anel marrom-esverdeado na periferia da córnea.',
      'Nível de ceruloplasmina plasmática está marcadamente reduzido.',
      'Dosagem de cobre urinário de 24 horas está significativamente elevada.'
    ],
    explanation: 'A Doença de Wilson (degeneração hepatolenticular) é um distúrbio autossômico recessivo do metabolismo do cobre, levando ao acúmulo tóxico desse metal no fígado, cérebro (especialmente gânglios da base) e córnea. Apresenta-se com disfunção hepática, sintomas neurológicos extrapiramidais e psiquiátricos. O achado ocular clássico é o anel de Kayser-Fleischer. Tratamento envolve quelantes de cobre como a penicilamina.'
  },
  {
    id: 'case_135',
    diagnosis: 'Hemocromatose hereditária',
    aliases: ['hemocromatose hereditária', 'hemocromatose', 'hemocromatose hereditaria'],
    specialty: 'Gastroenterologia / Hematologia',
    clues: [
      'Homem de 48 anos queixa-se de fadiga crônica, dor nas articulações das mãos e perda de libido.',
      'Ao exame físico, chama atenção uma hiperpigmentação cutânea difusa (pele bronzeada).',
      'Exames de rotina demonstram glicemia de jejum elevada e hepatomegalia leve.',
      'Ecocardiograma aponta disfunção diastólica consistente com miocardiopatia restritiva.',
      'Saturação de transferrina de 68% e nível de ferritina sérica de 1.800 ng/mL.',
      'Teste genético revela homozigose para a mutação C282Y no gene HFE.'
    ],
    explanation: 'A Hemocromatose Hereditária é uma desordem genética autossômica recessiva que causa absorção intestinal excessiva e inapropriada de ferro, levando ao acúmulo do metal em órgãos parenquimatosos como fígado, pâncreas, coração, pele e gônadas. Clinicamente, causa a tríade clássica de "diabetes bronzeado", cirrose hepática e hiperpigmentação, além de artropatia e insuficiência cardíaca. O tratamento primário é a flebotomia terapêutica.'
  },
  {
    id: 'case_136',
    diagnosis: 'Porfiria aguda intermitente',
    aliases: ['porfiria aguda intermitente', 'pai', 'porfiria'],
    specialty: 'Clínica Médica / Neurologia',
    clues: [
      'Mulher de 26 anos apresenta episódios recorrentes de dor abdominal severa, mal localizada e sem sinais de peritonite.',
      'A dor é acompanhada de náuseas, vômitos, constipação intestinal importante e taquicardia.',
      'Refere episódios concomitantes de urina de coloração escura (aspecto de vinho do porto) após exposição solar ou estresse.',
      'Apresenta fraqueza muscular proximal simétrica e episódios de confusão mental e alucinações.',
      'Exames laboratoriais demonstram hiponatremia significativa (Na = 124 mEq/L) inexplicada.',
      'A dosagem urinária de porfobilinogênio (PBG) e ácido delta-aminolevulínico (ALA) está bastante elevada.'
    ],
    explanation: 'A Porfiria Aguda Intermitente é uma doença metabólica autossômica dominante caracterizada pela deficiência da enzima porfobilinogênio desaminase, levando ao acúmulo de precursores de porfirina (ALA e PBG). Os ataques são precipitados por drogas (porfirinogênicas), álcool, jejum ou flutuações hormonais. Manifesta-se com dor abdominal intensa, neuropatia autonômica, sintomas neuropsiquiátricos e hiponatremia.'
  },
  {
    id: 'case_137',
    diagnosis: 'Granulomatose com poliangiíte',
    aliases: ['granulomatose com poliangiíte', 'granulomatose com poliangiite', 'wegener', 'granulomatose de wegener'],
    specialty: 'Reumatologia / Nefrologia',
    clues: [
      'Homem de 42 anos queixa-se de sinusite crônica, congestão nasal persistente e secreção purulenta com raias de sangue.',
      'Evoluiu com tosse, dispneia e episódios de hemoptise leve.',
      'Ao exame físico, observa-se deformidade nasal em "sela" devido à destruição do septo cartilaginoso.',
      'Exames laboratoriais indicam hematúria dismórfica, proteinúria e elevação progressiva de ureia e creatinina.',
      'Radiografia de tórax revela múltiplos nódulos cavitários bilaterais.',
      'Pesquisa de anticorpo anticitoplasma de neutrófilos com padrão citoplasmático (c-ANCA / anti-PR3) fortemente positiva.'
    ],
    explanation: 'A Granulomatose com Poliangiíte (anteriormente conhecida como Granulomatose de Wegener) é uma vasculite sistêmica de pequenos e médios vasos, necrotizante e granulomatosa. Caracteriza-se classicamente pelo envolvimento do trato respiratório superior (sinusite, nariz em sela), trato respiratório inferior (nódulos pulmonares cavitados, hemoptise) e rins (glomerulonefrite crescentica pauci-imune). O marcador sorológico mais específico é o c-ANCA (anti-PR3).'
  },
  {
    id: 'case_138',
    diagnosis: 'Síndrome de Goodpasture',
    aliases: ['síndrome de goodpasture', 'sindrome de goodpasture', 'doença de goodpasture', 'doenca por anticorpo anti-mbg'],
    specialty: 'Nefrologia / Pneumologia',
    clues: [
      'Jovem de 24 anos dá entrada no pronto-socorro com hemoptise de início súbito, tosse e dispneia.',
      'Paralelamente, apresenta oligúria, urina escura e edema periférico importante.',
      'Exame de urina revela hematúria macroscópica com cilindros hemáticos e proteinúria de 2 g/24h.',
      'Radiografia de tórax exibe infiltrado alveolar bilateral difuso compatível com hemorragia alveolar.',
      'Função renal em rápida deterioração, com creatinina subindo de 1,1 para 4,2 mg/dL em 5 dias.',
      'Presença de anticorpos circulantes contra a cadeia alfa-3 do colágeno tipo IV (anti-MBG).'
    ],
    explanation: 'A Síndrome de Goodpasture (doença por anticorpo anti-MBG) é um distúrbio autoimune raro em que anticorpos atacam a membrana basal glomerular nos rins e a membrana basal alveolar nos pulmões. Isso resulta em uma síndrome pulmão-rim, manifestada por hemorragia alveolar difusa (hemoptise) e glomerulonefrite rapidamente progressiva (GNRP). A imunofluorescência linear renal confirma o diagnóstico.'
  },
  {
    id: 'case_139',
    diagnosis: 'Arterite de células gigantes',
    aliases: ['arterite de células gigantes', 'arterite temporal', 'arterite de celulas gigantes', 'acg'],
    specialty: 'Reumatologia / Neurologia',
    clues: [
      'Mulher de 72 anos queixa-se de cefaleia unilateral de início recente, localizada na região temporal direita.',
      'Relata fadiga intensa e dor mastigatória crônica que surge ao se alimentar (claudicação de mandíbula).',
      'Refere dor e rigidez nos ombros e quadris, com piora matinal (polimialgia reumática associada).',
      'Ao exame físico, a artéria temporal direita encontra-se espessada, nodular, dolorosa e com pulso fraco.',
      'Exames laboratoriais demonstram VHS extremamente elevado (112 mm/h) e anemia de doença crônica.',
      'Evolui com perda visual súbita e indolor no olho direito (neuropatia óptica isquêmica anterior).'
    ],
    explanation: 'A Arterite de Células Gigantes (ou Arterite Temporal) é uma vasculite sistêmica crônica de grandes e médios vasos que acomete principalmente idosos (>50 anos). Os sintomas típicos são cefaleia temporal, claudicação de mandíbula, febre, perda de peso e forte associação com polimialgia reumática. A complicação mais temida é a amaurose definitiva por oclusão da artéria oftálmica. O tratamento imediato com corticoides em altas doses previne a cegueira.'
  },
  {
    id: 'case_140',
    diagnosis: 'Poliarterite nodosa',
    aliases: ['poliarterite nodosa', 'pan'],
    specialty: 'Reumatologia',
    clues: [
      'Homem de 45 anos queixa-se de febre, perda ponderal inexplicada e dores musculares generalizadas.',
      'Aparecimento de nódulos subcutâneos dolorosos e livedo reticular nos membros inferiores.',
      'Desenvolve parestesias e fraqueza motora assimétrica (mononeurite múltipla com queda do pé esquerdo).',
      'Apresenta hipertensão arterial de início recente associada a dor abdominal pós-prandial (angina mesentérica).',
      'Exames laboratoriais revelam sorologia positiva para o vírus da Hepatite B (HBsAg +).',
      'Angiografia mesentérica demonstra múltiplos microaneurismas com aspecto em "colar de contas" nas artérias renais.'
    ],
    explanation: 'A Poliarterite Nodosa (PAN) é uma vasculite necrotizante sistêmica de artérias de médio calibre. Caracteristicamente poupa os pulmões e não se associa ao ANCA. Apresenta manifestações sistêmicas como livedo reticular, mononeurite múltipla, dor abdominal, hipertensão renal e isquemia de órgãos. Há uma clássica e forte associação epidemiológica com a infecção crônica pelo vírus da Hepatite B (VHB).'
  },
  {
    id: 'case_141',
    diagnosis: 'Doença de Behçet',
    aliases: ['doença de behçet', 'doenca de behcet', 'behçet', 'behcet'],
    specialty: 'Reumatologia / Dermatologia',
    clues: [
      'Homem de 28 anos, de ascendência mediterrânea, com úlceras orais dolorosas recorrentes há mais de 1 ano.',
      'Surgimento de úlceras genitais dolorosas e profundas no escroto que deixam cicatrizes.',
      'Desenvolveu episódios de olho vermelho com dor e embaçamento visual, diagnosticados como uveíte posterior.',
      'Lesões cutâneas do tipo pseudofoliculite e pápulas acneiformes no tronco.',
      'O paciente refere dor e edema migratório em grandes articulações (joelhos e tornozelos).',
      'Teste de patergia positivo (formação de pápula ou pústula 24-48h após punção estéril com agulha).'
    ],
    explanation: 'A Doença de Behçet é uma vasculite multissistêmica crônica de etiologia desconhecida que afeta vasos de todos os calibres. É comum ao longo da antiga "Rota da Seda". Caracteriza-se por úlceras orais dolorosas recorrentes (critério obrigatório), úlceras genitais, lesões cutâneas variadas, uveíte que pode levar à cegueira e reatividade cutânea excessiva ao trauma mínimo (teste de patergia positivo).'
  },
  {
    id: 'case_142',
    diagnosis: 'Síndrome de Sjögren',
    aliases: ['síndrome de sjögren', 'sindrome de sjogren', 'sjögren', 'sjogren'],
    specialty: 'Reumatologia / Oftalmologia',
    clues: [
      'Mulher de 46 anos queixa-se de sensação persistente de "areia nos olhos" e secura ocular importante.',
      'Refere dificuldade extrema para engolir alimentos secos sem a ingestão concomitante de líquidos (boca seca).',
      'Desenvolvimento de cáries dentárias de início rápido e infecções recorrentes por Candida na cavidade oral.',
      'Apresenta aumento bilateral e indolor das glândulas parótidas.',
      'Exames laboratoriais demonstram presença de anticorpos anti-SSA (Ro) e anti-SSB (La) positivos.',
      'Biópsia de glândula salivar menor do lábio revela infiltrado linfocitário focal (escore de foco >= 1).'
    ],
    explanation: 'A Síndrome de Sjögren é uma doença inflamatória autoimune sistêmica crônica, caracterizada por infiltração linfocitária progressiva das glândulas exócrinas (especialmente lacrimais e salivares). Causa a síndrome seca clássica (ceratoconjuntivite seca e xerostomia). Pode ser primária ou secundária a outras colagenoses. Associa-se a anticorpos anti-Ro/La e apresenta risco aumentado para linfoma não-Hodgkin.'
  },
  {
    id: 'case_143',
    diagnosis: 'Dermatomiosite',
    aliases: ['dermatomiosite'],
    specialty: 'Reumatologia / Dermatologia',
    clues: [
      'Mulher de 38 anos queixa-se de fraqueza muscular proximal e simétrica, com dificuldade para pentear o cabelo e subir escadas.',
      'Apresenta coloração violácea nas pálpebras superiores acompanhada de edema periorbitário (heliotropo).',
      'Pápulas eritemato-violáceas descamativas sobre as articulações metacarpofalângicas e interfalângicas (pápulas de Gottron).',
      'Eritema confluente nos ombros, pescoço e colo anterior (sinal do xale e sinal do V).',
      'Níveis séricos de Creatina Fosfoquinase (CPK) e Aldolase marcadamente elevados.',
      'Eletromiografia aponta padrão miopático e biópsia muscular revela infiltrado inflamatório perimisial.'
    ],
    explanation: 'A Dermatomiosite é uma miopatia inflamatória idiopática caracterizada por fraqueza muscular proximal e simétrica, associada a manifestações cutâneas típicas e patognomônicas: o heliotropo (eritema violáceo bipalpebral) e as pápulas de Gottron. Há risco elevado de neoplasias ocultas associadas (síndrome paraneoplásica) em adultos. O diagnóstico baseia-se em enzimas musculares, eletroneuromiografia e biópsia muscular.'
  },
  {
    id: 'case_144',
    diagnosis: 'Esclerose sistêmica',
    aliases: ['esclerose sistêmica', 'esclerodermia', 'esclerose sistemica', 'síndrome crest'],
    specialty: 'Reumatologia',
    clues: [
      'Mulher de 40 anos queixa-se de episódios de palidez, seguido de cianose e rubor nos dedos após exposição ao frio (Fenômeno de Raynaud).',
      'Refere espessamento e endurecimento progressivo da pele dos dedos das mãos (esclerodactilia) e face.',
      'Dificuldade para abrir totalmente a boca (microstomia) e desaparecimento das rugas faciais.',
      'Queixa-se de azia intensa, queimação retroesternal e disfagia para sólidos.',
      'Presença de pequenas dilatações vasculares na pele e mucosas (telangiectasias) e depósitos de cálcio subcutâneos (calcinose).',
      'Pesquisa de autoanticorpos revela positividade para o anticorpo anticentrômero ou anti-topoisomerase I (anti-Scl-70).'
    ],
    explanation: 'A Esclerose Sistêmica (Esclerodermia) é uma doença autoimune multissistêmica rara caracterizada por vasculopatia de pequenos vasos, ativação imune e fibrose excessiva da pele e órgãos internos (esôfago, pulmões, coração, rins). Apresenta-se nas formas cutânea limitada (frequentemente associada à síndrome CREST e anticorpo anticentrômero) ou difusa (associada à fibrose pulmonar e anticorpo anti-Scl-70).'
  },
  {
    id: 'case_145',
    diagnosis: 'Pênfigo vulgar',
    aliases: ['pênfigo vulgar', 'penfigo vulgar', 'pênfigo'],
    specialty: 'Dermatologia',
    clues: [
      'Homem de 44 anos desenvolve múltiplas erosões dolorosas na mucosa oral que dificultam a alimentação.',
      'Semanas depois, surgem bolhas flácidas na pele do tronco e couro cabeludo.',
      'As bolhas rompem-se facilmente, deixando áreas erosivas extensas e denudadas que demoram a cicatrizar.',
      'Ao aplicar pressão lateral firme na pele aparentemente sã, ocorre descolamento epidérmico (Sinal de Nikolsky positivo).',
      'Biópsia de pele revela clivagem intraepidérmica (acantólise suprabasal) com preservação da camada basal (aspecto em "lápides").',
      'Imunofluorescência direta mostra depósitos de IgG intercelulares na epiderme com aspecto em "rede de pesca".'
    ],
    explanation: 'O Pênfigo Vulgar é uma doença bolhosa autoimune grave e potencialmente fatal, caracterizada pela produção de autoanticorpos IgG contra desmogleína 3 (e 1), componentes dos desmossomos. Causa bolhas flácidas intraepidérmicas que se rompem facilmente (Nikolsky positivo) e acomete quase invariavelmente as mucosas. O diagnóstico baseia-se em histologia e imunofluorescência.'
  },
  {
    id: 'case_146',
    diagnosis: 'Eritema nodoso',
    aliases: ['eritema nodoso'],
    specialty: 'Dermatologia / Reumatologia',
    clues: [
      'Mulher de 29 anos apresenta febre baixa, mal-estar e dor nas articulações (artralgia) há 1 semana.',
      'Surgimento abrupto de nódulos cutâneos eritematosos, quentes, brilhantes e extremamente dolorosos bilateralmente nas pernas.',
      'Os nódulos localizam-se preferencialmente na região tibial anterior.',
      'Não há ulceração das lesões; elas evoluem mudando de cor como um hematoma (esverdeado, amarelado).',
      'Histórico de amigdalite estreptocócica tratada há 3 semanas.',
      'Biópsia de pele revela paniculite septal sem vasculite.'
    ],
    explanation: 'O Eritema Nodoso é a forma mais comum de paniculite (inflamação da gordura subcutânea), caracterizada por nódulos eritematosos dolorosos nas superfícies extensoras das pernas. É uma reação de hipersensibilidade tardia a diversos estímulos, incluindo infecções (estreptococo, tuberculose), drogas (anticoncepcionais, sulfas), sarcoidose e doença inflamatória intestinal. Histologicamente é uma paniculite septal.'
  },
  {
    id: 'case_147',
    diagnosis: 'Psoríase vulgar',
    aliases: ['psoríase vulgar', 'psoríase', 'psoriase vulgar', 'psoriase'],
    specialty: 'Dermatologia',
    clues: [
      'Homem de 35 anos apresenta placas eritematosas, bem delimitadas, recobertas por escamas esbranquiçadas/prateadas.',
      'As lesões localizam-se simetricamente nas superfícies extensoras dos cotovelos e joelhos, além do couro cabeludo.',
      'O paciente refere coceira de intensidade variável e descamação constante.',
      'Exame das unhas revela depressões cupuliformes (pittings / unhas dedilhadas) e manchas em "gota de óleo".',
      'A remoção das escamas por raspagem revela pequenos pontos sangrantes na lesão (Sinal de Auspitz positivo).',
      'Aparecimento de novas lesões em áreas de trauma ou escoriação prévia (Fenômeno de Koebner).'
    ],
    explanation: 'A Psoríase é uma doença inflamatória crônica da pele, de base genética e imunomediada, caracterizada por hiperproliferação epidérmica. A forma vulgar apresenta placas eritemato-escamosas prateadas em áreas de atrito. Sinais clássicos: raspagem de Brocq com sinal do orvalho sangrante (Auspitz) e o Fenômeno de Koebner. Associa-se a acometimento ungueal e artrite psoriásica.'
  },
  {
    id: 'case_148',
    diagnosis: 'Hiperaldosteronismo primário',
    aliases: ['hiperaldosteronismo primário', 'hiperaldosteronismo primario', 'síndrome de conn', 'sindrome de conn'],
    specialty: 'Endocrinologia',
    clues: [
      'Homem de 41 anos com hipertensão arterial grave e refratária ao uso de três anti-hipertensivos.',
      'Refere episódios recorrentes de fraqueza muscular, cãibras e poliúria.',
      'Exames laboratoriais demonstram hipocalemia persistente espontânea (K = 2,8 mEq/L) com caliúria elevada.',
      'Gasometria arterial revela alcalose metabólica.',
      'Nível de aldosterona plasmática elevado com atividade de renina plasmática suprimida.',
      'Tomografia computadorizada de suprarrenais evidencia nódulo unilateral de 1,2 cm em adrenal esquerda.'
    ],
    explanation: 'O Hiperaldosteronismo Primário (frequentemente causado por adenoma produtor de aldosterona - Síndrome de Conn, ou hiperplasia adrenal bilateral) é uma causa importante de hipertensão secundária. Caracteriza-se por hipertensão refratária, hipocalemia, alcalose metabólica e supressão da atividade de renina plasmática com aldosterona elevada. Tratamento: cirúrgico (adenoma) ou espironolactona (hiperplasia).'
  },
  {
    id: 'case_149',
    diagnosis: 'Doença de Addison',
    aliases: ['doença de addison', 'doenca de addison', 'insuficiência adrenal primária', 'addison'],
    specialty: 'Endocrinologia',
    clues: [
      'Mulher de 35 anos queixa-se de fadiga profunda, perda de peso involuntária, anorexia e tonturas ao se levantar.',
      'Chama atenção o surgimento de hiperpigmentação difusa na pele, dobras cutâneas, cicatrizes e mucosa oral.',
      'Refere desejo intenso por alimentos salgados (avidez por sal).',
      'Exames laboratoriais revelam hipotensão postural, hiponatremia, hipercalemia e eosinofilia.',
      'Cortisol sérico matinal marcadamente baixo (< 3 mcg/dL).',
      'Nível de ACTH plasmático significativamente elevado, confirmando origem primária na adrenal.'
    ],
    explanation: 'A Doença de Addison (insuficiência adrenal primária) decorre da destruição do córtex das glândulas suprarrenais (autoimune no Ocidente, ou infecciosa como tuberculose). Causa deficiência de cortisol, aldosterona e androgênios. A hiperpigmentação ocorre pelo excesso de ACTH que estimula os melanócitos. Apresenta-se com fadiga, hipotensão, hiponatremia, hipercalemia e avidez por sal. Tratamento requer reposição de glicocorticoides e mineralocorticoides.'
  },
  {
    id: 'case_150',
    diagnosis: 'Diabetes insipidus',
    aliases: ['diabetes insipidus', 'diabetes insípido', 'diabetes insipidus central', 'diabetes insipidus nefrogênico'],
    specialty: 'Endocrinologia / Nefrologia',
    clues: [
      'Homem de 29 anos, pós-operatório de neurocirurgia para ressecção de craniofaringioma, desenvolve sede intensa.',
      'Passa a urinar volumes extremamente elevados (cerca de 8 litros por dia) de urina muito clara.',
      'Queixa-se de nictúria importante e necessidade incontrolável de beber água gelada.',
      'Exames laboratoriais revelam hipernatremia plasmática (Na = 152 mEq/L) com osmolaridade urinária muito baixa.',
      'Densidade urinária persistentemente menor que 1.005.',
      'Após administração de desmopressina (DDAVP), observa-se aumento rápido na osmolaridade urinária e redução do débito urinário.'
    ],
    explanation: 'O Diabetes Insipidus central é causado pela deficiência de hormônio antidiurético (ADH ou vasopressina) devido a lesões no hipotálamo ou hipófise posterior (trauma, cirurgia, tumores). Causa poliúria acentuada, polidipsia compensatória, incapacidade de concentrar a urina e hipernatremia se houver privação de líquidos. O teste do DDAVP diferencia o tipo central (que responde) do nefrogênico (que não responde).'
  }
];
