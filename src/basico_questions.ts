export interface Question {
  id: string;
  cycle: string;
  subject: string;
  subSubject: string;
  banca: string;
  year: number;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

export const BASICO_QUESTIONS: Question[] = [
  {
    "id": "basico_anatomia_q1",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #1).\n\nQual artéria corre no sulco interventricular anterior acompanhada pela veia cardíaca magna?",
    "options": [
      "Artéria coronária direita",
      "Ramo circunflexo",
      "Ramo interventricular anterior (descendente anterior)",
      "Artéria marginal esquerda"
    ],
    "correctIndex": 2,
    "explanation": "O ramo interventricular anterior da artéria coronária esquerda passa no sulco interventricular anterior acompanhado pela veia cardíaca magna, suprindo a parede anterior do ventrículo esquerdo e 2/3 anteriores do septo interventricular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q2",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #2).\n\nA veia ázigo ascende no mediastino posterior e drena diretamente em qual vaso?",
    "options": [
      "Veia cava superior",
      "Veia cava inferior",
      "Átrio direito",
      "Veia braquiocefálica esquerda"
    ],
    "correctIndex": 0,
    "explanation": "A veia ázigo faz um arco sobre o brônquio principal direito e desemboca diretamente na face posterior da veia cava superior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q3",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #3).\n\nO brônquio principal direito em relação ao esquerdo é mais propenso a alojar corpos estranhos aspirados por ser:",
    "options": [
      "Mais longo, estreito e horizontalizado",
      "Mais curto, largo e verticalizado",
      "Possuir menor calibração interna",
      "Possuir menor ângulo em relação à traqueia"
    ],
    "correctIndex": 1,
    "explanation": "O brônquio principal direito é mais curto, calibroso e verticalizado, facilitando a entrada direta de corpos estranhos aspirados.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q4",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #4).\n\nA incisura cardíaca e a lígula pulmonar localizam-se anatômicamente no:",
    "options": [
      "Lobo superior do pulmão esquerdo",
      "Lobo inferior do pulmão esquerdo",
      "Lobo médio do pulmão direito",
      "Lobo superior do pulmão direito"
    ],
    "correctIndex": 0,
    "explanation": "A incisura cardíaca acolhe o ápice cardíaco e a lígula é a projeção inferior do lobo superior do pulmão esquerdo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q5",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #5).\n\nO sulco central do cérebro (sulco de Rolando) divide os giros:",
    "options": [
      "Giro pré-central e giro pós-central",
      "Giro frontal superior e médio",
      "Giro temporal superior e médio",
      "Giro cingulado e paratrigonal"
    ],
    "correctIndex": 0,
    "explanation": "O sulco central separa o giro pré-central (Córtex motor primário) do giro pós-central (Córtex somatosensorial primário).",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q6",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #6).\n\nQual par de nervo craniano emerge da face posterior do tronco encefálico (mesencéfalo)?",
    "options": [
      "Nervo oculomotor (III)",
      "Nervo troclear (IV)",
      "Nervo abducente (VI)",
      "Nervo trigêmeo (V)"
    ],
    "correctIndex": 1,
    "explanation": "O nervo troclear (IV par) emerge exclusivamente da superfície posterior (dorsal) do mesencéfalo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q7",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #7).\n\nO líquido cefalorraquidiano (LCR) é produzido nos ventrículos cerebrais principalmente pelos:",
    "options": [
      "Plexos coróideos",
      "Granulações aracnóideas",
      "Aqueduto cerebral",
      "Forame de Monro"
    ],
    "correctIndex": 0,
    "explanation": "Os plexos coróideos, localizados nos ventrículos cerebrais, secretam continuamente o LCR.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q8",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #8).\n\nAs granulações aracnóideas reabsorvem o LCR drenando-o diretamente para o:",
    "options": [
      "Seno sagital superior",
      "Espaço epidural",
      "Plexo venoso vertebral",
      "Sistema linfático cervical"
    ],
    "correctIndex": 0,
    "explanation": "As granulações aracnóideas drenam o LCR do espaço subaracnóideo para o interior do seno sagital superior da dura-máter.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q9",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #9).\n\nA parede posterior do canal inguinal é constituída de forma marcante pela:",
    "options": [
      "Fáscia transversal e tendão conjunto",
      "Aponeurose do músculo oblíquo externo",
      "Músculo reto abdominal",
      "Músculo iliopsoas"
    ],
    "correctIndex": 0,
    "explanation": "A fáscia transversal reforçada medialmente pelo tendão conjunto forma a parede posterior do canal inguinal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q10",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #10).\n\nO ligamento hepatoduodenal contendo a tríade portal forma o limite anterior do:",
    "options": [
      "Forame omental (forame de Winslow)",
      "Anel inguinal profundo",
      "Triângulo femoral de Scarpa",
      "Espaço retroperitoneal"
    ],
    "correctIndex": 0,
    "explanation": "O limite anterior do forame omental é o ligamento hepatoduodenal, pelo qual passam a veia porta, a artéria hepática própria e o ducto colédoco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q11",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #11).\n\nQual artéria corre no sulco interventricular anterior acompanhada pela veia cardíaca magna?",
    "options": [
      "Artéria coronária direita",
      "Ramo circunflexo",
      "Ramo interventricular anterior (descendente anterior)",
      "Artéria marginal esquerda"
    ],
    "correctIndex": 2,
    "explanation": "O ramo interventricular anterior da artéria coronária esquerda passa no sulco interventricular anterior acompanhado pela veia cardíaca magna, suprindo a parede anterior do ventrículo esquerdo e 2/3 anteriores do septo interventricular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q12",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #12).\n\nA veia ázigo ascende no mediastino posterior e drena diretamente em qual vaso?",
    "options": [
      "Veia cava superior",
      "Veia cava inferior",
      "Átrio direito",
      "Veia braquiocefálica esquerda"
    ],
    "correctIndex": 0,
    "explanation": "A veia ázigo faz um arco sobre o brônquio principal direito e desemboca diretamente na face posterior da veia cava superior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q13",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #13).\n\nO brônquio principal direito em relação ao esquerdo é mais propenso a alojar corpos estranhos aspirados por ser:",
    "options": [
      "Mais longo, estreito e horizontalizado",
      "Mais curto, largo e verticalizado",
      "Possuir menor calibração interna",
      "Possuir menor ângulo em relação à traqueia"
    ],
    "correctIndex": 1,
    "explanation": "O brônquio principal direito é mais curto, calibroso e verticalizado, facilitando a entrada direta de corpos estranhos aspirados.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q14",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #14).\n\nA incisura cardíaca e a lígula pulmonar localizam-se anatômicamente no:",
    "options": [
      "Lobo superior do pulmão esquerdo",
      "Lobo inferior do pulmão esquerdo",
      "Lobo médio do pulmão direito",
      "Lobo superior do pulmão direito"
    ],
    "correctIndex": 0,
    "explanation": "A incisura cardíaca acolhe o ápice cardíaco e a lígula é a projeção inferior do lobo superior do pulmão esquerdo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q15",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #15).\n\nO sulco central do cérebro (sulco de Rolando) divide os giros:",
    "options": [
      "Giro pré-central e giro pós-central",
      "Giro frontal superior e médio",
      "Giro temporal superior e médio",
      "Giro cingulado e paratrigonal"
    ],
    "correctIndex": 0,
    "explanation": "O sulco central separa o giro pré-central (Córtex motor primário) do giro pós-central (Córtex somatosensorial primário).",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q16",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #16).\n\nQual par de nervo craniano emerge da face posterior do tronco encefálico (mesencéfalo)?",
    "options": [
      "Nervo oculomotor (III)",
      "Nervo troclear (IV)",
      "Nervo abducente (VI)",
      "Nervo trigêmeo (V)"
    ],
    "correctIndex": 1,
    "explanation": "O nervo troclear (IV par) emerge exclusivamente da superfície posterior (dorsal) do mesencéfalo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q17",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #17).\n\nO líquido cefalorraquidiano (LCR) é produzido nos ventrículos cerebrais principalmente pelos:",
    "options": [
      "Plexos coróideos",
      "Granulações aracnóideas",
      "Aqueduto cerebral",
      "Forame de Monro"
    ],
    "correctIndex": 0,
    "explanation": "Os plexos coróideos, localizados nos ventrículos cerebrais, secretam continuamente o LCR.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q18",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #18).\n\nAs granulações aracnóideas reabsorvem o LCR drenando-o diretamente para o:",
    "options": [
      "Seno sagital superior",
      "Espaço epidural",
      "Plexo venoso vertebral",
      "Sistema linfático cervical"
    ],
    "correctIndex": 0,
    "explanation": "As granulações aracnóideas drenam o LCR do espaço subaracnóideo para o interior do seno sagital superior da dura-máter.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q19",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #19).\n\nA parede posterior do canal inguinal é constituída de forma marcante pela:",
    "options": [
      "Fáscia transversal e tendão conjunto",
      "Aponeurose do músculo oblíquo externo",
      "Músculo reto abdominal",
      "Músculo iliopsoas"
    ],
    "correctIndex": 0,
    "explanation": "A fáscia transversal reforçada medialmente pelo tendão conjunto forma a parede posterior do canal inguinal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q20",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #20).\n\nO ligamento hepatoduodenal contendo a tríade portal forma o limite anterior do:",
    "options": [
      "Forame omental (forame de Winslow)",
      "Anel inguinal profundo",
      "Triângulo femoral de Scarpa",
      "Espaço retroperitoneal"
    ],
    "correctIndex": 0,
    "explanation": "O limite anterior do forame omental é o ligamento hepatoduodenal, pelo qual passam a veia porta, a artéria hepática própria e o ducto colédoco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q21",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #21).\n\nQual artéria corre no sulco interventricular anterior acompanhada pela veia cardíaca magna?",
    "options": [
      "Artéria coronária direita",
      "Ramo circunflexo",
      "Ramo interventricular anterior (descendente anterior)",
      "Artéria marginal esquerda"
    ],
    "correctIndex": 2,
    "explanation": "O ramo interventricular anterior da artéria coronária esquerda passa no sulco interventricular anterior acompanhado pela veia cardíaca magna, suprindo a parede anterior do ventrículo esquerdo e 2/3 anteriores do septo interventricular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q22",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #22).\n\nA veia ázigo ascende no mediastino posterior e drena diretamente em qual vaso?",
    "options": [
      "Veia cava superior",
      "Veia cava inferior",
      "Átrio direito",
      "Veia braquiocefálica esquerda"
    ],
    "correctIndex": 0,
    "explanation": "A veia ázigo faz um arco sobre o brônquio principal direito e desemboca diretamente na face posterior da veia cava superior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q23",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #23).\n\nO brônquio principal direito em relação ao esquerdo é mais propenso a alojar corpos estranhos aspirados por ser:",
    "options": [
      "Mais longo, estreito e horizontalizado",
      "Mais curto, largo e verticalizado",
      "Possuir menor calibração interna",
      "Possuir menor ângulo em relação à traqueia"
    ],
    "correctIndex": 1,
    "explanation": "O brônquio principal direito é mais curto, calibroso e verticalizado, facilitando a entrada direta de corpos estranhos aspirados.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q24",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #24).\n\nA incisura cardíaca e a lígula pulmonar localizam-se anatômicamente no:",
    "options": [
      "Lobo superior do pulmão esquerdo",
      "Lobo inferior do pulmão esquerdo",
      "Lobo médio do pulmão direito",
      "Lobo superior do pulmão direito"
    ],
    "correctIndex": 0,
    "explanation": "A incisura cardíaca acolhe o ápice cardíaco e a lígula é a projeção inferior do lobo superior do pulmão esquerdo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q25",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #25).\n\nO sulco central do cérebro (sulco de Rolando) divide os giros:",
    "options": [
      "Giro pré-central e giro pós-central",
      "Giro frontal superior e médio",
      "Giro temporal superior e médio",
      "Giro cingulado e paratrigonal"
    ],
    "correctIndex": 0,
    "explanation": "O sulco central separa o giro pré-central (Córtex motor primário) do giro pós-central (Córtex somatosensorial primário).",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q26",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #26).\n\nQual par de nervo craniano emerge da face posterior do tronco encefálico (mesencéfalo)?",
    "options": [
      "Nervo oculomotor (III)",
      "Nervo troclear (IV)",
      "Nervo abducente (VI)",
      "Nervo trigêmeo (V)"
    ],
    "correctIndex": 1,
    "explanation": "O nervo troclear (IV par) emerge exclusivamente da superfície posterior (dorsal) do mesencéfalo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q27",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #27).\n\nO líquido cefalorraquidiano (LCR) é produzido nos ventrículos cerebrais principalmente pelos:",
    "options": [
      "Plexos coróideos",
      "Granulações aracnóideas",
      "Aqueduto cerebral",
      "Forame de Monro"
    ],
    "correctIndex": 0,
    "explanation": "Os plexos coróideos, localizados nos ventrículos cerebrais, secretam continuamente o LCR.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q28",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #28).\n\nAs granulações aracnóideas reabsorvem o LCR drenando-o diretamente para o:",
    "options": [
      "Seno sagital superior",
      "Espaço epidural",
      "Plexo venoso vertebral",
      "Sistema linfático cervical"
    ],
    "correctIndex": 0,
    "explanation": "As granulações aracnóideas drenam o LCR do espaço subaracnóideo para o interior do seno sagital superior da dura-máter.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q29",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #29).\n\nA parede posterior do canal inguinal é constituída de forma marcante pela:",
    "options": [
      "Fáscia transversal e tendão conjunto",
      "Aponeurose do músculo oblíquo externo",
      "Músculo reto abdominal",
      "Músculo iliopsoas"
    ],
    "correctIndex": 0,
    "explanation": "A fáscia transversal reforçada medialmente pelo tendão conjunto forma a parede posterior do canal inguinal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q30",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #30).\n\nO ligamento hepatoduodenal contendo a tríade portal forma o limite anterior do:",
    "options": [
      "Forame omental (forame de Winslow)",
      "Anel inguinal profundo",
      "Triângulo femoral de Scarpa",
      "Espaço retroperitoneal"
    ],
    "correctIndex": 0,
    "explanation": "O limite anterior do forame omental é o ligamento hepatoduodenal, pelo qual passam a veia porta, a artéria hepática própria e o ducto colédoco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q31",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #31).\n\nQual artéria corre no sulco interventricular anterior acompanhada pela veia cardíaca magna?",
    "options": [
      "Artéria coronária direita",
      "Ramo circunflexo",
      "Ramo interventricular anterior (descendente anterior)",
      "Artéria marginal esquerda"
    ],
    "correctIndex": 2,
    "explanation": "O ramo interventricular anterior da artéria coronária esquerda passa no sulco interventricular anterior acompanhado pela veia cardíaca magna, suprindo a parede anterior do ventrículo esquerdo e 2/3 anteriores do septo interventricular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q32",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #32).\n\nA veia ázigo ascende no mediastino posterior e drena diretamente em qual vaso?",
    "options": [
      "Veia cava superior",
      "Veia cava inferior",
      "Átrio direito",
      "Veia braquiocefálica esquerda"
    ],
    "correctIndex": 0,
    "explanation": "A veia ázigo faz um arco sobre o brônquio principal direito e desemboca diretamente na face posterior da veia cava superior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q33",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #33).\n\nO brônquio principal direito em relação ao esquerdo é mais propenso a alojar corpos estranhos aspirados por ser:",
    "options": [
      "Mais longo, estreito e horizontalizado",
      "Mais curto, largo e verticalizado",
      "Possuir menor calibração interna",
      "Possuir menor ângulo em relação à traqueia"
    ],
    "correctIndex": 1,
    "explanation": "O brônquio principal direito é mais curto, calibroso e verticalizado, facilitando a entrada direta de corpos estranhos aspirados.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q34",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #34).\n\nA incisura cardíaca e a lígula pulmonar localizam-se anatômicamente no:",
    "options": [
      "Lobo superior do pulmão esquerdo",
      "Lobo inferior do pulmão esquerdo",
      "Lobo médio do pulmão direito",
      "Lobo superior do pulmão direito"
    ],
    "correctIndex": 0,
    "explanation": "A incisura cardíaca acolhe o ápice cardíaco e a lígula é a projeção inferior do lobo superior do pulmão esquerdo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q35",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #35).\n\nO sulco central do cérebro (sulco de Rolando) divide os giros:",
    "options": [
      "Giro pré-central e giro pós-central",
      "Giro frontal superior e médio",
      "Giro temporal superior e médio",
      "Giro cingulado e paratrigonal"
    ],
    "correctIndex": 0,
    "explanation": "O sulco central separa o giro pré-central (Córtex motor primário) do giro pós-central (Córtex somatosensorial primário).",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q36",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #36).\n\nQual par de nervo craniano emerge da face posterior do tronco encefálico (mesencéfalo)?",
    "options": [
      "Nervo oculomotor (III)",
      "Nervo troclear (IV)",
      "Nervo abducente (VI)",
      "Nervo trigêmeo (V)"
    ],
    "correctIndex": 1,
    "explanation": "O nervo troclear (IV par) emerge exclusivamente da superfície posterior (dorsal) do mesencéfalo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q37",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #37).\n\nO líquido cefalorraquidiano (LCR) é produzido nos ventrículos cerebrais principalmente pelos:",
    "options": [
      "Plexos coróideos",
      "Granulações aracnóideas",
      "Aqueduto cerebral",
      "Forame de Monro"
    ],
    "correctIndex": 0,
    "explanation": "Os plexos coróideos, localizados nos ventrículos cerebrais, secretam continuamente o LCR.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q38",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #38).\n\nAs granulações aracnóideas reabsorvem o LCR drenando-o diretamente para o:",
    "options": [
      "Seno sagital superior",
      "Espaço epidural",
      "Plexo venoso vertebral",
      "Sistema linfático cervical"
    ],
    "correctIndex": 0,
    "explanation": "As granulações aracnóideas drenam o LCR do espaço subaracnóideo para o interior do seno sagital superior da dura-máter.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q39",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #39).\n\nA parede posterior do canal inguinal é constituída de forma marcante pela:",
    "options": [
      "Fáscia transversal e tendão conjunto",
      "Aponeurose do músculo oblíquo externo",
      "Músculo reto abdominal",
      "Músculo iliopsoas"
    ],
    "correctIndex": 0,
    "explanation": "A fáscia transversal reforçada medialmente pelo tendão conjunto forma a parede posterior do canal inguinal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q40",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #40).\n\nO ligamento hepatoduodenal contendo a tríade portal forma o limite anterior do:",
    "options": [
      "Forame omental (forame de Winslow)",
      "Anel inguinal profundo",
      "Triângulo femoral de Scarpa",
      "Espaço retroperitoneal"
    ],
    "correctIndex": 0,
    "explanation": "O limite anterior do forame omental é o ligamento hepatoduodenal, pelo qual passam a veia porta, a artéria hepática própria e o ducto colédoco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q41",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #41).\n\nQual artéria corre no sulco interventricular anterior acompanhada pela veia cardíaca magna?",
    "options": [
      "Artéria coronária direita",
      "Ramo circunflexo",
      "Ramo interventricular anterior (descendente anterior)",
      "Artéria marginal esquerda"
    ],
    "correctIndex": 2,
    "explanation": "O ramo interventricular anterior da artéria coronária esquerda passa no sulco interventricular anterior acompanhado pela veia cardíaca magna, suprindo a parede anterior do ventrículo esquerdo e 2/3 anteriores do septo interventricular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q42",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #42).\n\nA veia ázigo ascende no mediastino posterior e drena diretamente em qual vaso?",
    "options": [
      "Veia cava superior",
      "Veia cava inferior",
      "Átrio direito",
      "Veia braquiocefálica esquerda"
    ],
    "correctIndex": 0,
    "explanation": "A veia ázigo faz um arco sobre o brônquio principal direito e desemboca diretamente na face posterior da veia cava superior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q43",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #43).\n\nO brônquio principal direito em relação ao esquerdo é mais propenso a alojar corpos estranhos aspirados por ser:",
    "options": [
      "Mais longo, estreito e horizontalizado",
      "Mais curto, largo e verticalizado",
      "Possuir menor calibração interna",
      "Possuir menor ângulo em relação à traqueia"
    ],
    "correctIndex": 1,
    "explanation": "O brônquio principal direito é mais curto, calibroso e verticalizado, facilitando a entrada direta de corpos estranhos aspirados.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q44",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #44).\n\nA incisura cardíaca e a lígula pulmonar localizam-se anatômicamente no:",
    "options": [
      "Lobo superior do pulmão esquerdo",
      "Lobo inferior do pulmão esquerdo",
      "Lobo médio do pulmão direito",
      "Lobo superior do pulmão direito"
    ],
    "correctIndex": 0,
    "explanation": "A incisura cardíaca acolhe o ápice cardíaco e a lígula é a projeção inferior do lobo superior do pulmão esquerdo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q45",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #45).\n\nO sulco central do cérebro (sulco de Rolando) divide os giros:",
    "options": [
      "Giro pré-central e giro pós-central",
      "Giro frontal superior e médio",
      "Giro temporal superior e médio",
      "Giro cingulado e paratrigonal"
    ],
    "correctIndex": 0,
    "explanation": "O sulco central separa o giro pré-central (Córtex motor primário) do giro pós-central (Córtex somatosensorial primário).",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q46",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #46).\n\nQual par de nervo craniano emerge da face posterior do tronco encefálico (mesencéfalo)?",
    "options": [
      "Nervo oculomotor (III)",
      "Nervo troclear (IV)",
      "Nervo abducente (VI)",
      "Nervo trigêmeo (V)"
    ],
    "correctIndex": 1,
    "explanation": "O nervo troclear (IV par) emerge exclusivamente da superfície posterior (dorsal) do mesencéfalo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q47",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #47).\n\nO líquido cefalorraquidiano (LCR) é produzido nos ventrículos cerebrais principalmente pelos:",
    "options": [
      "Plexos coróideos",
      "Granulações aracnóideas",
      "Aqueduto cerebral",
      "Forame de Monro"
    ],
    "correctIndex": 0,
    "explanation": "Os plexos coróideos, localizados nos ventrículos cerebrais, secretam continuamente o LCR.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q48",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #48).\n\nAs granulações aracnóideas reabsorvem o LCR drenando-o diretamente para o:",
    "options": [
      "Seno sagital superior",
      "Espaço epidural",
      "Plexo venoso vertebral",
      "Sistema linfático cervical"
    ],
    "correctIndex": 0,
    "explanation": "As granulações aracnóideas drenam o LCR do espaço subaracnóideo para o interior do seno sagital superior da dura-máter.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q49",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #49).\n\nA parede posterior do canal inguinal é constituída de forma marcante pela:",
    "options": [
      "Fáscia transversal e tendão conjunto",
      "Aponeurose do músculo oblíquo externo",
      "Músculo reto abdominal",
      "Músculo iliopsoas"
    ],
    "correctIndex": 0,
    "explanation": "A fáscia transversal reforçada medialmente pelo tendão conjunto forma a parede posterior do canal inguinal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q50",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #50).\n\nO ligamento hepatoduodenal contendo a tríade portal forma o limite anterior do:",
    "options": [
      "Forame omental (forame de Winslow)",
      "Anel inguinal profundo",
      "Triângulo femoral de Scarpa",
      "Espaço retroperitoneal"
    ],
    "correctIndex": 0,
    "explanation": "O limite anterior do forame omental é o ligamento hepatoduodenal, pelo qual passam a veia porta, a artéria hepática própria e o ducto colédoco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q51",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #51).\n\nQual artéria corre no sulco interventricular anterior acompanhada pela veia cardíaca magna?",
    "options": [
      "Artéria coronária direita",
      "Ramo circunflexo",
      "Ramo interventricular anterior (descendente anterior)",
      "Artéria marginal esquerda"
    ],
    "correctIndex": 2,
    "explanation": "O ramo interventricular anterior da artéria coronária esquerda passa no sulco interventricular anterior acompanhado pela veia cardíaca magna, suprindo a parede anterior do ventrículo esquerdo e 2/3 anteriores do septo interventricular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q52",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #52).\n\nA veia ázigo ascende no mediastino posterior e drena diretamente em qual vaso?",
    "options": [
      "Veia cava superior",
      "Veia cava inferior",
      "Átrio direito",
      "Veia braquiocefálica esquerda"
    ],
    "correctIndex": 0,
    "explanation": "A veia ázigo faz um arco sobre o brônquio principal direito e desemboca diretamente na face posterior da veia cava superior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q53",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #53).\n\nO brônquio principal direito em relação ao esquerdo é mais propenso a alojar corpos estranhos aspirados por ser:",
    "options": [
      "Mais longo, estreito e horizontalizado",
      "Mais curto, largo e verticalizado",
      "Possuir menor calibração interna",
      "Possuir menor ângulo em relação à traqueia"
    ],
    "correctIndex": 1,
    "explanation": "O brônquio principal direito é mais curto, calibroso e verticalizado, facilitando a entrada direta de corpos estranhos aspirados.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q54",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #54).\n\nA incisura cardíaca e a lígula pulmonar localizam-se anatômicamente no:",
    "options": [
      "Lobo superior do pulmão esquerdo",
      "Lobo inferior do pulmão esquerdo",
      "Lobo médio do pulmão direito",
      "Lobo superior do pulmão direito"
    ],
    "correctIndex": 0,
    "explanation": "A incisura cardíaca acolhe o ápice cardíaco e a lígula é a projeção inferior do lobo superior do pulmão esquerdo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q55",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #55).\n\nO sulco central do cérebro (sulco de Rolando) divide os giros:",
    "options": [
      "Giro pré-central e giro pós-central",
      "Giro frontal superior e médio",
      "Giro temporal superior e médio",
      "Giro cingulado e paratrigonal"
    ],
    "correctIndex": 0,
    "explanation": "O sulco central separa o giro pré-central (Córtex motor primário) do giro pós-central (Córtex somatosensorial primário).",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q56",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #56).\n\nQual par de nervo craniano emerge da face posterior do tronco encefálico (mesencéfalo)?",
    "options": [
      "Nervo oculomotor (III)",
      "Nervo troclear (IV)",
      "Nervo abducente (VI)",
      "Nervo trigêmeo (V)"
    ],
    "correctIndex": 1,
    "explanation": "O nervo troclear (IV par) emerge exclusivamente da superfície posterior (dorsal) do mesencéfalo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q57",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #57).\n\nO líquido cefalorraquidiano (LCR) é produzido nos ventrículos cerebrais principalmente pelos:",
    "options": [
      "Plexos coróideos",
      "Granulações aracnóideas",
      "Aqueduto cerebral",
      "Forame de Monro"
    ],
    "correctIndex": 0,
    "explanation": "Os plexos coróideos, localizados nos ventrículos cerebrais, secretam continuamente o LCR.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q58",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #58).\n\nAs granulações aracnóideas reabsorvem o LCR drenando-o diretamente para o:",
    "options": [
      "Seno sagital superior",
      "Espaço epidural",
      "Plexo venoso vertebral",
      "Sistema linfático cervical"
    ],
    "correctIndex": 0,
    "explanation": "As granulações aracnóideas drenam o LCR do espaço subaracnóideo para o interior do seno sagital superior da dura-máter.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q59",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #59).\n\nA parede posterior do canal inguinal é constituída de forma marcante pela:",
    "options": [
      "Fáscia transversal e tendão conjunto",
      "Aponeurose do músculo oblíquo externo",
      "Músculo reto abdominal",
      "Músculo iliopsoas"
    ],
    "correctIndex": 0,
    "explanation": "A fáscia transversal reforçada medialmente pelo tendão conjunto forma a parede posterior do canal inguinal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q60",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #60).\n\nO ligamento hepatoduodenal contendo a tríade portal forma o limite anterior do:",
    "options": [
      "Forame omental (forame de Winslow)",
      "Anel inguinal profundo",
      "Triângulo femoral de Scarpa",
      "Espaço retroperitoneal"
    ],
    "correctIndex": 0,
    "explanation": "O limite anterior do forame omental é o ligamento hepatoduodenal, pelo qual passam a veia porta, a artéria hepática própria e o ducto colédoco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q61",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #61).\n\nQual artéria corre no sulco interventricular anterior acompanhada pela veia cardíaca magna?",
    "options": [
      "Artéria coronária direita",
      "Ramo circunflexo",
      "Ramo interventricular anterior (descendente anterior)",
      "Artéria marginal esquerda"
    ],
    "correctIndex": 2,
    "explanation": "O ramo interventricular anterior da artéria coronária esquerda passa no sulco interventricular anterior acompanhado pela veia cardíaca magna, suprindo a parede anterior do ventrículo esquerdo e 2/3 anteriores do septo interventricular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q62",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #62).\n\nA veia ázigo ascende no mediastino posterior e drena diretamente em qual vaso?",
    "options": [
      "Veia cava superior",
      "Veia cava inferior",
      "Átrio direito",
      "Veia braquiocefálica esquerda"
    ],
    "correctIndex": 0,
    "explanation": "A veia ázigo faz um arco sobre o brônquio principal direito e desemboca diretamente na face posterior da veia cava superior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q63",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #63).\n\nO brônquio principal direito em relação ao esquerdo é mais propenso a alojar corpos estranhos aspirados por ser:",
    "options": [
      "Mais longo, estreito e horizontalizado",
      "Mais curto, largo e verticalizado",
      "Possuir menor calibração interna",
      "Possuir menor ângulo em relação à traqueia"
    ],
    "correctIndex": 1,
    "explanation": "O brônquio principal direito é mais curto, calibroso e verticalizado, facilitando a entrada direta de corpos estranhos aspirados.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q64",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #64).\n\nA incisura cardíaca e a lígula pulmonar localizam-se anatômicamente no:",
    "options": [
      "Lobo superior do pulmão esquerdo",
      "Lobo inferior do pulmão esquerdo",
      "Lobo médio do pulmão direito",
      "Lobo superior do pulmão direito"
    ],
    "correctIndex": 0,
    "explanation": "A incisura cardíaca acolhe o ápice cardíaco e a lígula é a projeção inferior do lobo superior do pulmão esquerdo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q65",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #65).\n\nO sulco central do cérebro (sulco de Rolando) divide os giros:",
    "options": [
      "Giro pré-central e giro pós-central",
      "Giro frontal superior e médio",
      "Giro temporal superior e médio",
      "Giro cingulado e paratrigonal"
    ],
    "correctIndex": 0,
    "explanation": "O sulco central separa o giro pré-central (Córtex motor primário) do giro pós-central (Córtex somatosensorial primário).",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q66",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #66).\n\nQual par de nervo craniano emerge da face posterior do tronco encefálico (mesencéfalo)?",
    "options": [
      "Nervo oculomotor (III)",
      "Nervo troclear (IV)",
      "Nervo abducente (VI)",
      "Nervo trigêmeo (V)"
    ],
    "correctIndex": 1,
    "explanation": "O nervo troclear (IV par) emerge exclusivamente da superfície posterior (dorsal) do mesencéfalo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q67",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #67).\n\nO líquido cefalorraquidiano (LCR) é produzido nos ventrículos cerebrais principalmente pelos:",
    "options": [
      "Plexos coróideos",
      "Granulações aracnóideas",
      "Aqueduto cerebral",
      "Forame de Monro"
    ],
    "correctIndex": 0,
    "explanation": "Os plexos coróideos, localizados nos ventrículos cerebrais, secretam continuamente o LCR.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q68",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #68).\n\nAs granulações aracnóideas reabsorvem o LCR drenando-o diretamente para o:",
    "options": [
      "Seno sagital superior",
      "Espaço epidural",
      "Plexo venoso vertebral",
      "Sistema linfático cervical"
    ],
    "correctIndex": 0,
    "explanation": "As granulações aracnóideas drenam o LCR do espaço subaracnóideo para o interior do seno sagital superior da dura-máter.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q69",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #69).\n\nA parede posterior do canal inguinal é constituída de forma marcante pela:",
    "options": [
      "Fáscia transversal e tendão conjunto",
      "Aponeurose do músculo oblíquo externo",
      "Músculo reto abdominal",
      "Músculo iliopsoas"
    ],
    "correctIndex": 0,
    "explanation": "A fáscia transversal reforçada medialmente pelo tendão conjunto forma a parede posterior do canal inguinal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q70",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #70).\n\nO ligamento hepatoduodenal contendo a tríade portal forma o limite anterior do:",
    "options": [
      "Forame omental (forame de Winslow)",
      "Anel inguinal profundo",
      "Triângulo femoral de Scarpa",
      "Espaço retroperitoneal"
    ],
    "correctIndex": 0,
    "explanation": "O limite anterior do forame omental é o ligamento hepatoduodenal, pelo qual passam a veia porta, a artéria hepática própria e o ducto colédoco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q71",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #71).\n\nQual artéria corre no sulco interventricular anterior acompanhada pela veia cardíaca magna?",
    "options": [
      "Artéria coronária direita",
      "Ramo circunflexo",
      "Ramo interventricular anterior (descendente anterior)",
      "Artéria marginal esquerda"
    ],
    "correctIndex": 2,
    "explanation": "O ramo interventricular anterior da artéria coronária esquerda passa no sulco interventricular anterior acompanhado pela veia cardíaca magna, suprindo a parede anterior do ventrículo esquerdo e 2/3 anteriores do septo interventricular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q72",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #72).\n\nA veia ázigo ascende no mediastino posterior e drena diretamente em qual vaso?",
    "options": [
      "Veia cava superior",
      "Veia cava inferior",
      "Átrio direito",
      "Veia braquiocefálica esquerda"
    ],
    "correctIndex": 0,
    "explanation": "A veia ázigo faz um arco sobre o brônquio principal direito e desemboca diretamente na face posterior da veia cava superior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q73",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #73).\n\nO brônquio principal direito em relação ao esquerdo é mais propenso a alojar corpos estranhos aspirados por ser:",
    "options": [
      "Mais longo, estreito e horizontalizado",
      "Mais curto, largo e verticalizado",
      "Possuir menor calibração interna",
      "Possuir menor ângulo em relação à traqueia"
    ],
    "correctIndex": 1,
    "explanation": "O brônquio principal direito é mais curto, calibroso e verticalizado, facilitando a entrada direta de corpos estranhos aspirados.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q74",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #74).\n\nA incisura cardíaca e a lígula pulmonar localizam-se anatômicamente no:",
    "options": [
      "Lobo superior do pulmão esquerdo",
      "Lobo inferior do pulmão esquerdo",
      "Lobo médio do pulmão direito",
      "Lobo superior do pulmão direito"
    ],
    "correctIndex": 0,
    "explanation": "A incisura cardíaca acolhe o ápice cardíaco e a lígula é a projeção inferior do lobo superior do pulmão esquerdo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q75",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #75).\n\nO sulco central do cérebro (sulco de Rolando) divide os giros:",
    "options": [
      "Giro pré-central e giro pós-central",
      "Giro frontal superior e médio",
      "Giro temporal superior e médio",
      "Giro cingulado e paratrigonal"
    ],
    "correctIndex": 0,
    "explanation": "O sulco central separa o giro pré-central (Córtex motor primário) do giro pós-central (Córtex somatosensorial primário).",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q76",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #76).\n\nQual par de nervo craniano emerge da face posterior do tronco encefálico (mesencéfalo)?",
    "options": [
      "Nervo oculomotor (III)",
      "Nervo troclear (IV)",
      "Nervo abducente (VI)",
      "Nervo trigêmeo (V)"
    ],
    "correctIndex": 1,
    "explanation": "O nervo troclear (IV par) emerge exclusivamente da superfície posterior (dorsal) do mesencéfalo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q77",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #77).\n\nO líquido cefalorraquidiano (LCR) é produzido nos ventrículos cerebrais principalmente pelos:",
    "options": [
      "Plexos coróideos",
      "Granulações aracnóideas",
      "Aqueduto cerebral",
      "Forame de Monro"
    ],
    "correctIndex": 0,
    "explanation": "Os plexos coróideos, localizados nos ventrículos cerebrais, secretam continuamente o LCR.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q78",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #78).\n\nAs granulações aracnóideas reabsorvem o LCR drenando-o diretamente para o:",
    "options": [
      "Seno sagital superior",
      "Espaço epidural",
      "Plexo venoso vertebral",
      "Sistema linfático cervical"
    ],
    "correctIndex": 0,
    "explanation": "As granulações aracnóideas drenam o LCR do espaço subaracnóideo para o interior do seno sagital superior da dura-máter.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q79",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #79).\n\nA parede posterior do canal inguinal é constituída de forma marcante pela:",
    "options": [
      "Fáscia transversal e tendão conjunto",
      "Aponeurose do músculo oblíquo externo",
      "Músculo reto abdominal",
      "Músculo iliopsoas"
    ],
    "correctIndex": 0,
    "explanation": "A fáscia transversal reforçada medialmente pelo tendão conjunto forma a parede posterior do canal inguinal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q80",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #80).\n\nO ligamento hepatoduodenal contendo a tríade portal forma o limite anterior do:",
    "options": [
      "Forame omental (forame de Winslow)",
      "Anel inguinal profundo",
      "Triângulo femoral de Scarpa",
      "Espaço retroperitoneal"
    ],
    "correctIndex": 0,
    "explanation": "O limite anterior do forame omental é o ligamento hepatoduodenal, pelo qual passam a veia porta, a artéria hepática própria e o ducto colédoco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q81",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #81).\n\nQual artéria corre no sulco interventricular anterior acompanhada pela veia cardíaca magna?",
    "options": [
      "Artéria coronária direita",
      "Ramo circunflexo",
      "Ramo interventricular anterior (descendente anterior)",
      "Artéria marginal esquerda"
    ],
    "correctIndex": 2,
    "explanation": "O ramo interventricular anterior da artéria coronária esquerda passa no sulco interventricular anterior acompanhado pela veia cardíaca magna, suprindo a parede anterior do ventrículo esquerdo e 2/3 anteriores do septo interventricular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q82",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #82).\n\nA veia ázigo ascende no mediastino posterior e drena diretamente em qual vaso?",
    "options": [
      "Veia cava superior",
      "Veia cava inferior",
      "Átrio direito",
      "Veia braquiocefálica esquerda"
    ],
    "correctIndex": 0,
    "explanation": "A veia ázigo faz um arco sobre o brônquio principal direito e desemboca diretamente na face posterior da veia cava superior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q83",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #83).\n\nO brônquio principal direito em relação ao esquerdo é mais propenso a alojar corpos estranhos aspirados por ser:",
    "options": [
      "Mais longo, estreito e horizontalizado",
      "Mais curto, largo e verticalizado",
      "Possuir menor calibração interna",
      "Possuir menor ângulo em relação à traqueia"
    ],
    "correctIndex": 1,
    "explanation": "O brônquio principal direito é mais curto, calibroso e verticalizado, facilitando a entrada direta de corpos estranhos aspirados.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q84",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #84).\n\nA incisura cardíaca e a lígula pulmonar localizam-se anatômicamente no:",
    "options": [
      "Lobo superior do pulmão esquerdo",
      "Lobo inferior do pulmão esquerdo",
      "Lobo médio do pulmão direito",
      "Lobo superior do pulmão direito"
    ],
    "correctIndex": 0,
    "explanation": "A incisura cardíaca acolhe o ápice cardíaco e a lígula é a projeção inferior do lobo superior do pulmão esquerdo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q85",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #85).\n\nO sulco central do cérebro (sulco de Rolando) divide os giros:",
    "options": [
      "Giro pré-central e giro pós-central",
      "Giro frontal superior e médio",
      "Giro temporal superior e médio",
      "Giro cingulado e paratrigonal"
    ],
    "correctIndex": 0,
    "explanation": "O sulco central separa o giro pré-central (Córtex motor primário) do giro pós-central (Córtex somatosensorial primário).",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q86",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #86).\n\nQual par de nervo craniano emerge da face posterior do tronco encefálico (mesencéfalo)?",
    "options": [
      "Nervo oculomotor (III)",
      "Nervo troclear (IV)",
      "Nervo abducente (VI)",
      "Nervo trigêmeo (V)"
    ],
    "correctIndex": 1,
    "explanation": "O nervo troclear (IV par) emerge exclusivamente da superfície posterior (dorsal) do mesencéfalo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q87",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #87).\n\nO líquido cefalorraquidiano (LCR) é produzido nos ventrículos cerebrais principalmente pelos:",
    "options": [
      "Plexos coróideos",
      "Granulações aracnóideas",
      "Aqueduto cerebral",
      "Forame de Monro"
    ],
    "correctIndex": 0,
    "explanation": "Os plexos coróideos, localizados nos ventrículos cerebrais, secretam continuamente o LCR.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q88",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #88).\n\nAs granulações aracnóideas reabsorvem o LCR drenando-o diretamente para o:",
    "options": [
      "Seno sagital superior",
      "Espaço epidural",
      "Plexo venoso vertebral",
      "Sistema linfático cervical"
    ],
    "correctIndex": 0,
    "explanation": "As granulações aracnóideas drenam o LCR do espaço subaracnóideo para o interior do seno sagital superior da dura-máter.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q89",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #89).\n\nA parede posterior do canal inguinal é constituída de forma marcante pela:",
    "options": [
      "Fáscia transversal e tendão conjunto",
      "Aponeurose do músculo oblíquo externo",
      "Músculo reto abdominal",
      "Músculo iliopsoas"
    ],
    "correctIndex": 0,
    "explanation": "A fáscia transversal reforçada medialmente pelo tendão conjunto forma a parede posterior do canal inguinal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q90",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #90).\n\nO ligamento hepatoduodenal contendo a tríade portal forma o limite anterior do:",
    "options": [
      "Forame omental (forame de Winslow)",
      "Anel inguinal profundo",
      "Triângulo femoral de Scarpa",
      "Espaço retroperitoneal"
    ],
    "correctIndex": 0,
    "explanation": "O limite anterior do forame omental é o ligamento hepatoduodenal, pelo qual passam a veia porta, a artéria hepática própria e o ducto colédoco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q91",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #91).\n\nQual artéria corre no sulco interventricular anterior acompanhada pela veia cardíaca magna?",
    "options": [
      "Artéria coronária direita",
      "Ramo circunflexo",
      "Ramo interventricular anterior (descendente anterior)",
      "Artéria marginal esquerda"
    ],
    "correctIndex": 2,
    "explanation": "O ramo interventricular anterior da artéria coronária esquerda passa no sulco interventricular anterior acompanhado pela veia cardíaca magna, suprindo a parede anterior do ventrículo esquerdo e 2/3 anteriores do septo interventricular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q92",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #92).\n\nA veia ázigo ascende no mediastino posterior e drena diretamente em qual vaso?",
    "options": [
      "Veia cava superior",
      "Veia cava inferior",
      "Átrio direito",
      "Veia braquiocefálica esquerda"
    ],
    "correctIndex": 0,
    "explanation": "A veia ázigo faz um arco sobre o brônquio principal direito e desemboca diretamente na face posterior da veia cava superior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q93",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #93).\n\nO brônquio principal direito em relação ao esquerdo é mais propenso a alojar corpos estranhos aspirados por ser:",
    "options": [
      "Mais longo, estreito e horizontalizado",
      "Mais curto, largo e verticalizado",
      "Possuir menor calibração interna",
      "Possuir menor ângulo em relação à traqueia"
    ],
    "correctIndex": 1,
    "explanation": "O brônquio principal direito é mais curto, calibroso e verticalizado, facilitando a entrada direta de corpos estranhos aspirados.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q94",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #94).\n\nA incisura cardíaca e a lígula pulmonar localizam-se anatômicamente no:",
    "options": [
      "Lobo superior do pulmão esquerdo",
      "Lobo inferior do pulmão esquerdo",
      "Lobo médio do pulmão direito",
      "Lobo superior do pulmão direito"
    ],
    "correctIndex": 0,
    "explanation": "A incisura cardíaca acolhe o ápice cardíaco e a lígula é a projeção inferior do lobo superior do pulmão esquerdo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q95",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #95).\n\nO sulco central do cérebro (sulco de Rolando) divide os giros:",
    "options": [
      "Giro pré-central e giro pós-central",
      "Giro frontal superior e médio",
      "Giro temporal superior e médio",
      "Giro cingulado e paratrigonal"
    ],
    "correctIndex": 0,
    "explanation": "O sulco central separa o giro pré-central (Córtex motor primário) do giro pós-central (Córtex somatosensorial primário).",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q96",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #96).\n\nQual par de nervo craniano emerge da face posterior do tronco encefálico (mesencéfalo)?",
    "options": [
      "Nervo oculomotor (III)",
      "Nervo troclear (IV)",
      "Nervo abducente (VI)",
      "Nervo trigêmeo (V)"
    ],
    "correctIndex": 1,
    "explanation": "O nervo troclear (IV par) emerge exclusivamente da superfície posterior (dorsal) do mesencéfalo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q97",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #97).\n\nO líquido cefalorraquidiano (LCR) é produzido nos ventrículos cerebrais principalmente pelos:",
    "options": [
      "Plexos coróideos",
      "Granulações aracnóideas",
      "Aqueduto cerebral",
      "Forame de Monro"
    ],
    "correctIndex": 0,
    "explanation": "Os plexos coróideos, localizados nos ventrículos cerebrais, secretam continuamente o LCR.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q98",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Neuroanatomia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #98).\n\nAs granulações aracnóideas reabsorvem o LCR drenando-o diretamente para o:",
    "options": [
      "Seno sagital superior",
      "Espaço epidural",
      "Plexo venoso vertebral",
      "Sistema linfático cervical"
    ],
    "correctIndex": 0,
    "explanation": "As granulações aracnóideas drenam o LCR do espaço subaracnóideo para o interior do seno sagital superior da dura-máter.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q99",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #99).\n\nA parede posterior do canal inguinal é constituída de forma marcante pela:",
    "options": [
      "Fáscia transversal e tendão conjunto",
      "Aponeurose do músculo oblíquo externo",
      "Músculo reto abdominal",
      "Músculo iliopsoas"
    ],
    "correctIndex": 0,
    "explanation": "A fáscia transversal reforçada medialmente pelo tendão conjunto forma a parede posterior do canal inguinal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_anatomia_q100",
    "cycle": "Ciclo Básico",
    "subject": "Anatomia",
    "subSubject": "Anatomia Abdominal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #100).\n\nO ligamento hepatoduodenal contendo a tríade portal forma o limite anterior do:",
    "options": [
      "Forame omental (forame de Winslow)",
      "Anel inguinal profundo",
      "Triângulo femoral de Scarpa",
      "Espaço retroperitoneal"
    ],
    "correctIndex": 0,
    "explanation": "O limite anterior do forame omental é o ligamento hepatoduodenal, pelo qual passam a veia porta, a artéria hepática própria e o ducto colédoco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q1",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #1).\n\nEm qual segmento do néfron ocorre a reabsorção da maior fração do filtrado glomerular (cerca de 65%)?",
    "options": [
      "Túbulo contorcido distal",
      "Túbulo contorcido proximal",
      "Alça de Henle ascendente",
      "Duto coletor medular"
    ],
    "correctIndex": 1,
    "explanation": "O túbulo contorcido proximal reabsorve isosmoticamente cerca de 65% da água, sódio, potássio e quase 100% de glicose e aminoácidos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q2",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #2).\n\nA vasopressina (ADH) aumenta a reabsorção de água nos dutos coletores renais estimulando a translocação apical de:",
    "options": [
      "Aquaporina-1",
      "Aquaporina-2",
      "Co-transportador Na-K-2Cl",
      "Bomba Na+/K+ ATPase"
    ],
    "correctIndex": 1,
    "explanation": "O ADH liga-se aos receptores V2 nos dutos coletores e promove a inserção de canais de água aquaporina-2 na membrana luminal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q3",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #3).\n\nA elevação da força de contração ventricular em resposta ao aumento do volume diastólico final descreve a:",
    "options": [
      "Lei de Frank-Starling",
      "Efeito Bowditch",
      "Reflexo de Bainbridge",
      "Lei de Poiseuille"
    ],
    "correctIndex": 0,
    "explanation": "A Lei de Frank-Starling afirma que a força de contração miocárdica aumenta proporcionalmente ao estiramento prévio das fibras (volume diastólico final).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q4",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #4).\n\nA estimulação dos receptores beta-1 adrenérgicos no nó sinoatrial promove principalmente:",
    "options": [
      "Aumento da frequência cardíaca (cronotropismo positivo)",
      "Vasodilatação coronariana direta isolada",
      "Diminuição do inotropismo cardíaco",
      "Retardo da condução atrioventricular"
    ],
    "correctIndex": 0,
    "explanation": "A ativação beta-1 no coração aumenta a frequência cardíaca (cronotropismo positivo) e a força contrátil (inotropismo positivo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q5",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #5).\n\nO volume de ar inspirado ou expirado em cada respiração normal em repouso denomina-se:",
    "options": [
      "Volume corrente (VC)",
      "Volume de reserva inspiratório (VRI)",
      "Volume residual (VR)",
      "Capacidade vital (CV)"
    ],
    "correctIndex": 0,
    "explanation": "O volume corrente (VC) corresponde ao volume de ar mobilizado em cada ciclo respiratório tranquilo (cerca de 500 mL no adulto).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q6",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #6).\n\nO surfactante pulmonar reduz a tensão superficial nos alvéolos evitando o colapso (atelectasia), sendo produzido pelas células:",
    "options": [
      "Pneumócitos tipo I",
      "Pneumócitos tipo II",
      "Macrófagos alveolares",
      "Células caliciformes"
    ],
    "correctIndex": 1,
    "explanation": "Os pneumócitos tipo II sintetizam e secretam o surfactante pulmonar (rico em dipalmitoilfostatidilcolina).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q7",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #7).\n\nA secreção do hormônio hipotireoidiano (PTH) pelas paratireoides é estimulada primariamente por:",
    "options": [
      "Redução da concentração de cálcio iônico plasmático",
      "Elevação da calcitonina",
      "Elevação do cálcio plasmático",
      "Inibição da vitamina D"
    ],
    "correctIndex": 0,
    "explanation": "A hipocalcemia (baixa de Ca2+ iônico no plasma) estimula diretamente as glândulas paratireoides a secretarem PTH.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q8",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #8).\n\nA insulina promove o ingresso de glicose nas células musculares e adiposas mediante translocação do transportador:",
    "options": [
      "GLUT-1",
      "GLUT-2",
      "GLUT-4",
      "SGLT-2"
    ],
    "correctIndex": 2,
    "explanation": "O GLUT-4 é o transportador de glicose dependente de insulina expresso no tecido muscular esquelético/cardíaco e tecido adiposo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q9",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Neurofisiologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #9).\n\nA fase de despolarização rápida do potencial de ação neuronal decorre da abertura de canais dependentes de voltagem de:",
    "options": [
      "Sódio (Na+)",
      "Potássio (K+)",
      "Cálcio (Ca2+)",
      "Cloro (Cl-)"
    ],
    "correctIndex": 0,
    "explanation": "A entrada maciça e rápida de íons Na+ através de canais de Na+ voltagem-dependentes provoca a despolarização do potencial de membrana.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q10",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Gastrintestinal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #10).\n\nQual hormônio secretado pelas células S do duodeno estimula a secreção pancreática rica em bicarbonato?",
    "options": [
      "Gastrina",
      "Secretina",
      "Colecistococina (CCK)",
      "Peptídeo Inibidor Gástrico (GIP)"
    ],
    "correctIndex": 1,
    "explanation": "A secretina é liberada pela chegada do quimo ácido ao duodeno e estimula o pâncreas exócrino a secretar água e bicarbonato.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q11",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #11).\n\nEm qual segmento do néfron ocorre a reabsorção da maior fração do filtrado glomerular (cerca de 65%)?",
    "options": [
      "Túbulo contorcido distal",
      "Túbulo contorcido proximal",
      "Alça de Henle ascendente",
      "Duto coletor medular"
    ],
    "correctIndex": 1,
    "explanation": "O túbulo contorcido proximal reabsorve isosmoticamente cerca de 65% da água, sódio, potássio e quase 100% de glicose e aminoácidos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q12",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #12).\n\nA vasopressina (ADH) aumenta a reabsorção de água nos dutos coletores renais estimulando a translocação apical de:",
    "options": [
      "Aquaporina-1",
      "Aquaporina-2",
      "Co-transportador Na-K-2Cl",
      "Bomba Na+/K+ ATPase"
    ],
    "correctIndex": 1,
    "explanation": "O ADH liga-se aos receptores V2 nos dutos coletores e promove a inserção de canais de água aquaporina-2 na membrana luminal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q13",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #13).\n\nA elevação da força de contração ventricular em resposta ao aumento do volume diastólico final descreve a:",
    "options": [
      "Lei de Frank-Starling",
      "Efeito Bowditch",
      "Reflexo de Bainbridge",
      "Lei de Poiseuille"
    ],
    "correctIndex": 0,
    "explanation": "A Lei de Frank-Starling afirma que a força de contração miocárdica aumenta proporcionalmente ao estiramento prévio das fibras (volume diastólico final).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q14",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #14).\n\nA estimulação dos receptores beta-1 adrenérgicos no nó sinoatrial promove principalmente:",
    "options": [
      "Aumento da frequência cardíaca (cronotropismo positivo)",
      "Vasodilatação coronariana direta isolada",
      "Diminuição do inotropismo cardíaco",
      "Retardo da condução atrioventricular"
    ],
    "correctIndex": 0,
    "explanation": "A ativação beta-1 no coração aumenta a frequência cardíaca (cronotropismo positivo) e a força contrátil (inotropismo positivo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q15",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #15).\n\nO volume de ar inspirado ou expirado em cada respiração normal em repouso denomina-se:",
    "options": [
      "Volume corrente (VC)",
      "Volume de reserva inspiratório (VRI)",
      "Volume residual (VR)",
      "Capacidade vital (CV)"
    ],
    "correctIndex": 0,
    "explanation": "O volume corrente (VC) corresponde ao volume de ar mobilizado em cada ciclo respiratório tranquilo (cerca de 500 mL no adulto).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q16",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #16).\n\nO surfactante pulmonar reduz a tensão superficial nos alvéolos evitando o colapso (atelectasia), sendo produzido pelas células:",
    "options": [
      "Pneumócitos tipo I",
      "Pneumócitos tipo II",
      "Macrófagos alveolares",
      "Células caliciformes"
    ],
    "correctIndex": 1,
    "explanation": "Os pneumócitos tipo II sintetizam e secretam o surfactante pulmonar (rico em dipalmitoilfostatidilcolina).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q17",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #17).\n\nA secreção do hormônio hipotireoidiano (PTH) pelas paratireoides é estimulada primariamente por:",
    "options": [
      "Redução da concentração de cálcio iônico plasmático",
      "Elevação da calcitonina",
      "Elevação do cálcio plasmático",
      "Inibição da vitamina D"
    ],
    "correctIndex": 0,
    "explanation": "A hipocalcemia (baixa de Ca2+ iônico no plasma) estimula diretamente as glândulas paratireoides a secretarem PTH.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q18",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #18).\n\nA insulina promove o ingresso de glicose nas células musculares e adiposas mediante translocação do transportador:",
    "options": [
      "GLUT-1",
      "GLUT-2",
      "GLUT-4",
      "SGLT-2"
    ],
    "correctIndex": 2,
    "explanation": "O GLUT-4 é o transportador de glicose dependente de insulina expresso no tecido muscular esquelético/cardíaco e tecido adiposo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q19",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Neurofisiologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #19).\n\nA fase de despolarização rápida do potencial de ação neuronal decorre da abertura de canais dependentes de voltagem de:",
    "options": [
      "Sódio (Na+)",
      "Potássio (K+)",
      "Cálcio (Ca2+)",
      "Cloro (Cl-)"
    ],
    "correctIndex": 0,
    "explanation": "A entrada maciça e rápida de íons Na+ através de canais de Na+ voltagem-dependentes provoca a despolarização do potencial de membrana.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q20",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Gastrintestinal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #20).\n\nQual hormônio secretado pelas células S do duodeno estimula a secreção pancreática rica em bicarbonato?",
    "options": [
      "Gastrina",
      "Secretina",
      "Colecistococina (CCK)",
      "Peptídeo Inibidor Gástrico (GIP)"
    ],
    "correctIndex": 1,
    "explanation": "A secretina é liberada pela chegada do quimo ácido ao duodeno e estimula o pâncreas exócrino a secretar água e bicarbonato.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q21",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #21).\n\nEm qual segmento do néfron ocorre a reabsorção da maior fração do filtrado glomerular (cerca de 65%)?",
    "options": [
      "Túbulo contorcido distal",
      "Túbulo contorcido proximal",
      "Alça de Henle ascendente",
      "Duto coletor medular"
    ],
    "correctIndex": 1,
    "explanation": "O túbulo contorcido proximal reabsorve isosmoticamente cerca de 65% da água, sódio, potássio e quase 100% de glicose e aminoácidos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q22",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #22).\n\nA vasopressina (ADH) aumenta a reabsorção de água nos dutos coletores renais estimulando a translocação apical de:",
    "options": [
      "Aquaporina-1",
      "Aquaporina-2",
      "Co-transportador Na-K-2Cl",
      "Bomba Na+/K+ ATPase"
    ],
    "correctIndex": 1,
    "explanation": "O ADH liga-se aos receptores V2 nos dutos coletores e promove a inserção de canais de água aquaporina-2 na membrana luminal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q23",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #23).\n\nA elevação da força de contração ventricular em resposta ao aumento do volume diastólico final descreve a:",
    "options": [
      "Lei de Frank-Starling",
      "Efeito Bowditch",
      "Reflexo de Bainbridge",
      "Lei de Poiseuille"
    ],
    "correctIndex": 0,
    "explanation": "A Lei de Frank-Starling afirma que a força de contração miocárdica aumenta proporcionalmente ao estiramento prévio das fibras (volume diastólico final).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q24",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #24).\n\nA estimulação dos receptores beta-1 adrenérgicos no nó sinoatrial promove principalmente:",
    "options": [
      "Aumento da frequência cardíaca (cronotropismo positivo)",
      "Vasodilatação coronariana direta isolada",
      "Diminuição do inotropismo cardíaco",
      "Retardo da condução atrioventricular"
    ],
    "correctIndex": 0,
    "explanation": "A ativação beta-1 no coração aumenta a frequência cardíaca (cronotropismo positivo) e a força contrátil (inotropismo positivo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q25",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #25).\n\nO volume de ar inspirado ou expirado em cada respiração normal em repouso denomina-se:",
    "options": [
      "Volume corrente (VC)",
      "Volume de reserva inspiratório (VRI)",
      "Volume residual (VR)",
      "Capacidade vital (CV)"
    ],
    "correctIndex": 0,
    "explanation": "O volume corrente (VC) corresponde ao volume de ar mobilizado em cada ciclo respiratório tranquilo (cerca de 500 mL no adulto).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q26",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #26).\n\nO surfactante pulmonar reduz a tensão superficial nos alvéolos evitando o colapso (atelectasia), sendo produzido pelas células:",
    "options": [
      "Pneumócitos tipo I",
      "Pneumócitos tipo II",
      "Macrófagos alveolares",
      "Células caliciformes"
    ],
    "correctIndex": 1,
    "explanation": "Os pneumócitos tipo II sintetizam e secretam o surfactante pulmonar (rico em dipalmitoilfostatidilcolina).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q27",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #27).\n\nA secreção do hormônio hipotireoidiano (PTH) pelas paratireoides é estimulada primariamente por:",
    "options": [
      "Redução da concentração de cálcio iônico plasmático",
      "Elevação da calcitonina",
      "Elevação do cálcio plasmático",
      "Inibição da vitamina D"
    ],
    "correctIndex": 0,
    "explanation": "A hipocalcemia (baixa de Ca2+ iônico no plasma) estimula diretamente as glândulas paratireoides a secretarem PTH.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q28",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #28).\n\nA insulina promove o ingresso de glicose nas células musculares e adiposas mediante translocação do transportador:",
    "options": [
      "GLUT-1",
      "GLUT-2",
      "GLUT-4",
      "SGLT-2"
    ],
    "correctIndex": 2,
    "explanation": "O GLUT-4 é o transportador de glicose dependente de insulina expresso no tecido muscular esquelético/cardíaco e tecido adiposo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q29",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Neurofisiologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #29).\n\nA fase de despolarização rápida do potencial de ação neuronal decorre da abertura de canais dependentes de voltagem de:",
    "options": [
      "Sódio (Na+)",
      "Potássio (K+)",
      "Cálcio (Ca2+)",
      "Cloro (Cl-)"
    ],
    "correctIndex": 0,
    "explanation": "A entrada maciça e rápida de íons Na+ através de canais de Na+ voltagem-dependentes provoca a despolarização do potencial de membrana.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q30",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Gastrintestinal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #30).\n\nQual hormônio secretado pelas células S do duodeno estimula a secreção pancreática rica em bicarbonato?",
    "options": [
      "Gastrina",
      "Secretina",
      "Colecistococina (CCK)",
      "Peptídeo Inibidor Gástrico (GIP)"
    ],
    "correctIndex": 1,
    "explanation": "A secretina é liberada pela chegada do quimo ácido ao duodeno e estimula o pâncreas exócrino a secretar água e bicarbonato.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q31",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #31).\n\nEm qual segmento do néfron ocorre a reabsorção da maior fração do filtrado glomerular (cerca de 65%)?",
    "options": [
      "Túbulo contorcido distal",
      "Túbulo contorcido proximal",
      "Alça de Henle ascendente",
      "Duto coletor medular"
    ],
    "correctIndex": 1,
    "explanation": "O túbulo contorcido proximal reabsorve isosmoticamente cerca de 65% da água, sódio, potássio e quase 100% de glicose e aminoácidos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q32",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #32).\n\nA vasopressina (ADH) aumenta a reabsorção de água nos dutos coletores renais estimulando a translocação apical de:",
    "options": [
      "Aquaporina-1",
      "Aquaporina-2",
      "Co-transportador Na-K-2Cl",
      "Bomba Na+/K+ ATPase"
    ],
    "correctIndex": 1,
    "explanation": "O ADH liga-se aos receptores V2 nos dutos coletores e promove a inserção de canais de água aquaporina-2 na membrana luminal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q33",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #33).\n\nA elevação da força de contração ventricular em resposta ao aumento do volume diastólico final descreve a:",
    "options": [
      "Lei de Frank-Starling",
      "Efeito Bowditch",
      "Reflexo de Bainbridge",
      "Lei de Poiseuille"
    ],
    "correctIndex": 0,
    "explanation": "A Lei de Frank-Starling afirma que a força de contração miocárdica aumenta proporcionalmente ao estiramento prévio das fibras (volume diastólico final).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q34",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #34).\n\nA estimulação dos receptores beta-1 adrenérgicos no nó sinoatrial promove principalmente:",
    "options": [
      "Aumento da frequência cardíaca (cronotropismo positivo)",
      "Vasodilatação coronariana direta isolada",
      "Diminuição do inotropismo cardíaco",
      "Retardo da condução atrioventricular"
    ],
    "correctIndex": 0,
    "explanation": "A ativação beta-1 no coração aumenta a frequência cardíaca (cronotropismo positivo) e a força contrátil (inotropismo positivo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q35",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #35).\n\nO volume de ar inspirado ou expirado em cada respiração normal em repouso denomina-se:",
    "options": [
      "Volume corrente (VC)",
      "Volume de reserva inspiratório (VRI)",
      "Volume residual (VR)",
      "Capacidade vital (CV)"
    ],
    "correctIndex": 0,
    "explanation": "O volume corrente (VC) corresponde ao volume de ar mobilizado em cada ciclo respiratório tranquilo (cerca de 500 mL no adulto).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q36",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #36).\n\nO surfactante pulmonar reduz a tensão superficial nos alvéolos evitando o colapso (atelectasia), sendo produzido pelas células:",
    "options": [
      "Pneumócitos tipo I",
      "Pneumócitos tipo II",
      "Macrófagos alveolares",
      "Células caliciformes"
    ],
    "correctIndex": 1,
    "explanation": "Os pneumócitos tipo II sintetizam e secretam o surfactante pulmonar (rico em dipalmitoilfostatidilcolina).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q37",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #37).\n\nA secreção do hormônio hipotireoidiano (PTH) pelas paratireoides é estimulada primariamente por:",
    "options": [
      "Redução da concentração de cálcio iônico plasmático",
      "Elevação da calcitonina",
      "Elevação do cálcio plasmático",
      "Inibição da vitamina D"
    ],
    "correctIndex": 0,
    "explanation": "A hipocalcemia (baixa de Ca2+ iônico no plasma) estimula diretamente as glândulas paratireoides a secretarem PTH.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q38",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #38).\n\nA insulina promove o ingresso de glicose nas células musculares e adiposas mediante translocação do transportador:",
    "options": [
      "GLUT-1",
      "GLUT-2",
      "GLUT-4",
      "SGLT-2"
    ],
    "correctIndex": 2,
    "explanation": "O GLUT-4 é o transportador de glicose dependente de insulina expresso no tecido muscular esquelético/cardíaco e tecido adiposo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q39",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Neurofisiologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #39).\n\nA fase de despolarização rápida do potencial de ação neuronal decorre da abertura de canais dependentes de voltagem de:",
    "options": [
      "Sódio (Na+)",
      "Potássio (K+)",
      "Cálcio (Ca2+)",
      "Cloro (Cl-)"
    ],
    "correctIndex": 0,
    "explanation": "A entrada maciça e rápida de íons Na+ através de canais de Na+ voltagem-dependentes provoca a despolarização do potencial de membrana.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q40",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Gastrintestinal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #40).\n\nQual hormônio secretado pelas células S do duodeno estimula a secreção pancreática rica em bicarbonato?",
    "options": [
      "Gastrina",
      "Secretina",
      "Colecistococina (CCK)",
      "Peptídeo Inibidor Gástrico (GIP)"
    ],
    "correctIndex": 1,
    "explanation": "A secretina é liberada pela chegada do quimo ácido ao duodeno e estimula o pâncreas exócrino a secretar água e bicarbonato.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q41",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #41).\n\nEm qual segmento do néfron ocorre a reabsorção da maior fração do filtrado glomerular (cerca de 65%)?",
    "options": [
      "Túbulo contorcido distal",
      "Túbulo contorcido proximal",
      "Alça de Henle ascendente",
      "Duto coletor medular"
    ],
    "correctIndex": 1,
    "explanation": "O túbulo contorcido proximal reabsorve isosmoticamente cerca de 65% da água, sódio, potássio e quase 100% de glicose e aminoácidos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q42",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #42).\n\nA vasopressina (ADH) aumenta a reabsorção de água nos dutos coletores renais estimulando a translocação apical de:",
    "options": [
      "Aquaporina-1",
      "Aquaporina-2",
      "Co-transportador Na-K-2Cl",
      "Bomba Na+/K+ ATPase"
    ],
    "correctIndex": 1,
    "explanation": "O ADH liga-se aos receptores V2 nos dutos coletores e promove a inserção de canais de água aquaporina-2 na membrana luminal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q43",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #43).\n\nA elevação da força de contração ventricular em resposta ao aumento do volume diastólico final descreve a:",
    "options": [
      "Lei de Frank-Starling",
      "Efeito Bowditch",
      "Reflexo de Bainbridge",
      "Lei de Poiseuille"
    ],
    "correctIndex": 0,
    "explanation": "A Lei de Frank-Starling afirma que a força de contração miocárdica aumenta proporcionalmente ao estiramento prévio das fibras (volume diastólico final).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q44",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #44).\n\nA estimulação dos receptores beta-1 adrenérgicos no nó sinoatrial promove principalmente:",
    "options": [
      "Aumento da frequência cardíaca (cronotropismo positivo)",
      "Vasodilatação coronariana direta isolada",
      "Diminuição do inotropismo cardíaco",
      "Retardo da condução atrioventricular"
    ],
    "correctIndex": 0,
    "explanation": "A ativação beta-1 no coração aumenta a frequência cardíaca (cronotropismo positivo) e a força contrátil (inotropismo positivo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q45",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #45).\n\nO volume de ar inspirado ou expirado em cada respiração normal em repouso denomina-se:",
    "options": [
      "Volume corrente (VC)",
      "Volume de reserva inspiratório (VRI)",
      "Volume residual (VR)",
      "Capacidade vital (CV)"
    ],
    "correctIndex": 0,
    "explanation": "O volume corrente (VC) corresponde ao volume de ar mobilizado em cada ciclo respiratório tranquilo (cerca de 500 mL no adulto).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q46",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #46).\n\nO surfactante pulmonar reduz a tensão superficial nos alvéolos evitando o colapso (atelectasia), sendo produzido pelas células:",
    "options": [
      "Pneumócitos tipo I",
      "Pneumócitos tipo II",
      "Macrófagos alveolares",
      "Células caliciformes"
    ],
    "correctIndex": 1,
    "explanation": "Os pneumócitos tipo II sintetizam e secretam o surfactante pulmonar (rico em dipalmitoilfostatidilcolina).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q47",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #47).\n\nA secreção do hormônio hipotireoidiano (PTH) pelas paratireoides é estimulada primariamente por:",
    "options": [
      "Redução da concentração de cálcio iônico plasmático",
      "Elevação da calcitonina",
      "Elevação do cálcio plasmático",
      "Inibição da vitamina D"
    ],
    "correctIndex": 0,
    "explanation": "A hipocalcemia (baixa de Ca2+ iônico no plasma) estimula diretamente as glândulas paratireoides a secretarem PTH.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q48",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #48).\n\nA insulina promove o ingresso de glicose nas células musculares e adiposas mediante translocação do transportador:",
    "options": [
      "GLUT-1",
      "GLUT-2",
      "GLUT-4",
      "SGLT-2"
    ],
    "correctIndex": 2,
    "explanation": "O GLUT-4 é o transportador de glicose dependente de insulina expresso no tecido muscular esquelético/cardíaco e tecido adiposo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q49",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Neurofisiologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #49).\n\nA fase de despolarização rápida do potencial de ação neuronal decorre da abertura de canais dependentes de voltagem de:",
    "options": [
      "Sódio (Na+)",
      "Potássio (K+)",
      "Cálcio (Ca2+)",
      "Cloro (Cl-)"
    ],
    "correctIndex": 0,
    "explanation": "A entrada maciça e rápida de íons Na+ através de canais de Na+ voltagem-dependentes provoca a despolarização do potencial de membrana.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q50",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Gastrintestinal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #50).\n\nQual hormônio secretado pelas células S do duodeno estimula a secreção pancreática rica em bicarbonato?",
    "options": [
      "Gastrina",
      "Secretina",
      "Colecistococina (CCK)",
      "Peptídeo Inibidor Gástrico (GIP)"
    ],
    "correctIndex": 1,
    "explanation": "A secretina é liberada pela chegada do quimo ácido ao duodeno e estimula o pâncreas exócrino a secretar água e bicarbonato.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q51",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #51).\n\nEm qual segmento do néfron ocorre a reabsorção da maior fração do filtrado glomerular (cerca de 65%)?",
    "options": [
      "Túbulo contorcido distal",
      "Túbulo contorcido proximal",
      "Alça de Henle ascendente",
      "Duto coletor medular"
    ],
    "correctIndex": 1,
    "explanation": "O túbulo contorcido proximal reabsorve isosmoticamente cerca de 65% da água, sódio, potássio e quase 100% de glicose e aminoácidos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q52",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #52).\n\nA vasopressina (ADH) aumenta a reabsorção de água nos dutos coletores renais estimulando a translocação apical de:",
    "options": [
      "Aquaporina-1",
      "Aquaporina-2",
      "Co-transportador Na-K-2Cl",
      "Bomba Na+/K+ ATPase"
    ],
    "correctIndex": 1,
    "explanation": "O ADH liga-se aos receptores V2 nos dutos coletores e promove a inserção de canais de água aquaporina-2 na membrana luminal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q53",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #53).\n\nA elevação da força de contração ventricular em resposta ao aumento do volume diastólico final descreve a:",
    "options": [
      "Lei de Frank-Starling",
      "Efeito Bowditch",
      "Reflexo de Bainbridge",
      "Lei de Poiseuille"
    ],
    "correctIndex": 0,
    "explanation": "A Lei de Frank-Starling afirma que a força de contração miocárdica aumenta proporcionalmente ao estiramento prévio das fibras (volume diastólico final).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q54",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #54).\n\nA estimulação dos receptores beta-1 adrenérgicos no nó sinoatrial promove principalmente:",
    "options": [
      "Aumento da frequência cardíaca (cronotropismo positivo)",
      "Vasodilatação coronariana direta isolada",
      "Diminuição do inotropismo cardíaco",
      "Retardo da condução atrioventricular"
    ],
    "correctIndex": 0,
    "explanation": "A ativação beta-1 no coração aumenta a frequência cardíaca (cronotropismo positivo) e a força contrátil (inotropismo positivo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q55",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #55).\n\nO volume de ar inspirado ou expirado em cada respiração normal em repouso denomina-se:",
    "options": [
      "Volume corrente (VC)",
      "Volume de reserva inspiratório (VRI)",
      "Volume residual (VR)",
      "Capacidade vital (CV)"
    ],
    "correctIndex": 0,
    "explanation": "O volume corrente (VC) corresponde ao volume de ar mobilizado em cada ciclo respiratório tranquilo (cerca de 500 mL no adulto).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q56",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #56).\n\nO surfactante pulmonar reduz a tensão superficial nos alvéolos evitando o colapso (atelectasia), sendo produzido pelas células:",
    "options": [
      "Pneumócitos tipo I",
      "Pneumócitos tipo II",
      "Macrófagos alveolares",
      "Células caliciformes"
    ],
    "correctIndex": 1,
    "explanation": "Os pneumócitos tipo II sintetizam e secretam o surfactante pulmonar (rico em dipalmitoilfostatidilcolina).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q57",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #57).\n\nA secreção do hormônio hipotireoidiano (PTH) pelas paratireoides é estimulada primariamente por:",
    "options": [
      "Redução da concentração de cálcio iônico plasmático",
      "Elevação da calcitonina",
      "Elevação do cálcio plasmático",
      "Inibição da vitamina D"
    ],
    "correctIndex": 0,
    "explanation": "A hipocalcemia (baixa de Ca2+ iônico no plasma) estimula diretamente as glândulas paratireoides a secretarem PTH.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q58",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #58).\n\nA insulina promove o ingresso de glicose nas células musculares e adiposas mediante translocação do transportador:",
    "options": [
      "GLUT-1",
      "GLUT-2",
      "GLUT-4",
      "SGLT-2"
    ],
    "correctIndex": 2,
    "explanation": "O GLUT-4 é o transportador de glicose dependente de insulina expresso no tecido muscular esquelético/cardíaco e tecido adiposo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q59",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Neurofisiologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #59).\n\nA fase de despolarização rápida do potencial de ação neuronal decorre da abertura de canais dependentes de voltagem de:",
    "options": [
      "Sódio (Na+)",
      "Potássio (K+)",
      "Cálcio (Ca2+)",
      "Cloro (Cl-)"
    ],
    "correctIndex": 0,
    "explanation": "A entrada maciça e rápida de íons Na+ através de canais de Na+ voltagem-dependentes provoca a despolarização do potencial de membrana.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q60",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Gastrintestinal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #60).\n\nQual hormônio secretado pelas células S do duodeno estimula a secreção pancreática rica em bicarbonato?",
    "options": [
      "Gastrina",
      "Secretina",
      "Colecistococina (CCK)",
      "Peptídeo Inibidor Gástrico (GIP)"
    ],
    "correctIndex": 1,
    "explanation": "A secretina é liberada pela chegada do quimo ácido ao duodeno e estimula o pâncreas exócrino a secretar água e bicarbonato.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q61",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #61).\n\nEm qual segmento do néfron ocorre a reabsorção da maior fração do filtrado glomerular (cerca de 65%)?",
    "options": [
      "Túbulo contorcido distal",
      "Túbulo contorcido proximal",
      "Alça de Henle ascendente",
      "Duto coletor medular"
    ],
    "correctIndex": 1,
    "explanation": "O túbulo contorcido proximal reabsorve isosmoticamente cerca de 65% da água, sódio, potássio e quase 100% de glicose e aminoácidos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q62",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #62).\n\nA vasopressina (ADH) aumenta a reabsorção de água nos dutos coletores renais estimulando a translocação apical de:",
    "options": [
      "Aquaporina-1",
      "Aquaporina-2",
      "Co-transportador Na-K-2Cl",
      "Bomba Na+/K+ ATPase"
    ],
    "correctIndex": 1,
    "explanation": "O ADH liga-se aos receptores V2 nos dutos coletores e promove a inserção de canais de água aquaporina-2 na membrana luminal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q63",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #63).\n\nA elevação da força de contração ventricular em resposta ao aumento do volume diastólico final descreve a:",
    "options": [
      "Lei de Frank-Starling",
      "Efeito Bowditch",
      "Reflexo de Bainbridge",
      "Lei de Poiseuille"
    ],
    "correctIndex": 0,
    "explanation": "A Lei de Frank-Starling afirma que a força de contração miocárdica aumenta proporcionalmente ao estiramento prévio das fibras (volume diastólico final).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q64",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #64).\n\nA estimulação dos receptores beta-1 adrenérgicos no nó sinoatrial promove principalmente:",
    "options": [
      "Aumento da frequência cardíaca (cronotropismo positivo)",
      "Vasodilatação coronariana direta isolada",
      "Diminuição do inotropismo cardíaco",
      "Retardo da condução atrioventricular"
    ],
    "correctIndex": 0,
    "explanation": "A ativação beta-1 no coração aumenta a frequência cardíaca (cronotropismo positivo) e a força contrátil (inotropismo positivo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q65",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #65).\n\nO volume de ar inspirado ou expirado em cada respiração normal em repouso denomina-se:",
    "options": [
      "Volume corrente (VC)",
      "Volume de reserva inspiratório (VRI)",
      "Volume residual (VR)",
      "Capacidade vital (CV)"
    ],
    "correctIndex": 0,
    "explanation": "O volume corrente (VC) corresponde ao volume de ar mobilizado em cada ciclo respiratório tranquilo (cerca de 500 mL no adulto).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q66",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #66).\n\nO surfactante pulmonar reduz a tensão superficial nos alvéolos evitando o colapso (atelectasia), sendo produzido pelas células:",
    "options": [
      "Pneumócitos tipo I",
      "Pneumócitos tipo II",
      "Macrófagos alveolares",
      "Células caliciformes"
    ],
    "correctIndex": 1,
    "explanation": "Os pneumócitos tipo II sintetizam e secretam o surfactante pulmonar (rico em dipalmitoilfostatidilcolina).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q67",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #67).\n\nA secreção do hormônio hipotireoidiano (PTH) pelas paratireoides é estimulada primariamente por:",
    "options": [
      "Redução da concentração de cálcio iônico plasmático",
      "Elevação da calcitonina",
      "Elevação do cálcio plasmático",
      "Inibição da vitamina D"
    ],
    "correctIndex": 0,
    "explanation": "A hipocalcemia (baixa de Ca2+ iônico no plasma) estimula diretamente as glândulas paratireoides a secretarem PTH.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q68",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #68).\n\nA insulina promove o ingresso de glicose nas células musculares e adiposas mediante translocação do transportador:",
    "options": [
      "GLUT-1",
      "GLUT-2",
      "GLUT-4",
      "SGLT-2"
    ],
    "correctIndex": 2,
    "explanation": "O GLUT-4 é o transportador de glicose dependente de insulina expresso no tecido muscular esquelético/cardíaco e tecido adiposo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q69",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Neurofisiologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #69).\n\nA fase de despolarização rápida do potencial de ação neuronal decorre da abertura de canais dependentes de voltagem de:",
    "options": [
      "Sódio (Na+)",
      "Potássio (K+)",
      "Cálcio (Ca2+)",
      "Cloro (Cl-)"
    ],
    "correctIndex": 0,
    "explanation": "A entrada maciça e rápida de íons Na+ através de canais de Na+ voltagem-dependentes provoca a despolarização do potencial de membrana.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q70",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Gastrintestinal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #70).\n\nQual hormônio secretado pelas células S do duodeno estimula a secreção pancreática rica em bicarbonato?",
    "options": [
      "Gastrina",
      "Secretina",
      "Colecistococina (CCK)",
      "Peptídeo Inibidor Gástrico (GIP)"
    ],
    "correctIndex": 1,
    "explanation": "A secretina é liberada pela chegada do quimo ácido ao duodeno e estimula o pâncreas exócrino a secretar água e bicarbonato.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q71",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #71).\n\nEm qual segmento do néfron ocorre a reabsorção da maior fração do filtrado glomerular (cerca de 65%)?",
    "options": [
      "Túbulo contorcido distal",
      "Túbulo contorcido proximal",
      "Alça de Henle ascendente",
      "Duto coletor medular"
    ],
    "correctIndex": 1,
    "explanation": "O túbulo contorcido proximal reabsorve isosmoticamente cerca de 65% da água, sódio, potássio e quase 100% de glicose e aminoácidos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q72",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #72).\n\nA vasopressina (ADH) aumenta a reabsorção de água nos dutos coletores renais estimulando a translocação apical de:",
    "options": [
      "Aquaporina-1",
      "Aquaporina-2",
      "Co-transportador Na-K-2Cl",
      "Bomba Na+/K+ ATPase"
    ],
    "correctIndex": 1,
    "explanation": "O ADH liga-se aos receptores V2 nos dutos coletores e promove a inserção de canais de água aquaporina-2 na membrana luminal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q73",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #73).\n\nA elevação da força de contração ventricular em resposta ao aumento do volume diastólico final descreve a:",
    "options": [
      "Lei de Frank-Starling",
      "Efeito Bowditch",
      "Reflexo de Bainbridge",
      "Lei de Poiseuille"
    ],
    "correctIndex": 0,
    "explanation": "A Lei de Frank-Starling afirma que a força de contração miocárdica aumenta proporcionalmente ao estiramento prévio das fibras (volume diastólico final).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q74",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #74).\n\nA estimulação dos receptores beta-1 adrenérgicos no nó sinoatrial promove principalmente:",
    "options": [
      "Aumento da frequência cardíaca (cronotropismo positivo)",
      "Vasodilatação coronariana direta isolada",
      "Diminuição do inotropismo cardíaco",
      "Retardo da condução atrioventricular"
    ],
    "correctIndex": 0,
    "explanation": "A ativação beta-1 no coração aumenta a frequência cardíaca (cronotropismo positivo) e a força contrátil (inotropismo positivo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q75",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #75).\n\nO volume de ar inspirado ou expirado em cada respiração normal em repouso denomina-se:",
    "options": [
      "Volume corrente (VC)",
      "Volume de reserva inspiratório (VRI)",
      "Volume residual (VR)",
      "Capacidade vital (CV)"
    ],
    "correctIndex": 0,
    "explanation": "O volume corrente (VC) corresponde ao volume de ar mobilizado em cada ciclo respiratório tranquilo (cerca de 500 mL no adulto).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q76",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #76).\n\nO surfactante pulmonar reduz a tensão superficial nos alvéolos evitando o colapso (atelectasia), sendo produzido pelas células:",
    "options": [
      "Pneumócitos tipo I",
      "Pneumócitos tipo II",
      "Macrófagos alveolares",
      "Células caliciformes"
    ],
    "correctIndex": 1,
    "explanation": "Os pneumócitos tipo II sintetizam e secretam o surfactante pulmonar (rico em dipalmitoilfostatidilcolina).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q77",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #77).\n\nA secreção do hormônio hipotireoidiano (PTH) pelas paratireoides é estimulada primariamente por:",
    "options": [
      "Redução da concentração de cálcio iônico plasmático",
      "Elevação da calcitonina",
      "Elevação do cálcio plasmático",
      "Inibição da vitamina D"
    ],
    "correctIndex": 0,
    "explanation": "A hipocalcemia (baixa de Ca2+ iônico no plasma) estimula diretamente as glândulas paratireoides a secretarem PTH.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q78",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #78).\n\nA insulina promove o ingresso de glicose nas células musculares e adiposas mediante translocação do transportador:",
    "options": [
      "GLUT-1",
      "GLUT-2",
      "GLUT-4",
      "SGLT-2"
    ],
    "correctIndex": 2,
    "explanation": "O GLUT-4 é o transportador de glicose dependente de insulina expresso no tecido muscular esquelético/cardíaco e tecido adiposo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q79",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Neurofisiologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #79).\n\nA fase de despolarização rápida do potencial de ação neuronal decorre da abertura de canais dependentes de voltagem de:",
    "options": [
      "Sódio (Na+)",
      "Potássio (K+)",
      "Cálcio (Ca2+)",
      "Cloro (Cl-)"
    ],
    "correctIndex": 0,
    "explanation": "A entrada maciça e rápida de íons Na+ através de canais de Na+ voltagem-dependentes provoca a despolarização do potencial de membrana.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q80",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Gastrintestinal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #80).\n\nQual hormônio secretado pelas células S do duodeno estimula a secreção pancreática rica em bicarbonato?",
    "options": [
      "Gastrina",
      "Secretina",
      "Colecistococina (CCK)",
      "Peptídeo Inibidor Gástrico (GIP)"
    ],
    "correctIndex": 1,
    "explanation": "A secretina é liberada pela chegada do quimo ácido ao duodeno e estimula o pâncreas exócrino a secretar água e bicarbonato.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q81",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #81).\n\nEm qual segmento do néfron ocorre a reabsorção da maior fração do filtrado glomerular (cerca de 65%)?",
    "options": [
      "Túbulo contorcido distal",
      "Túbulo contorcido proximal",
      "Alça de Henle ascendente",
      "Duto coletor medular"
    ],
    "correctIndex": 1,
    "explanation": "O túbulo contorcido proximal reabsorve isosmoticamente cerca de 65% da água, sódio, potássio e quase 100% de glicose e aminoácidos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q82",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #82).\n\nA vasopressina (ADH) aumenta a reabsorção de água nos dutos coletores renais estimulando a translocação apical de:",
    "options": [
      "Aquaporina-1",
      "Aquaporina-2",
      "Co-transportador Na-K-2Cl",
      "Bomba Na+/K+ ATPase"
    ],
    "correctIndex": 1,
    "explanation": "O ADH liga-se aos receptores V2 nos dutos coletores e promove a inserção de canais de água aquaporina-2 na membrana luminal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q83",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #83).\n\nA elevação da força de contração ventricular em resposta ao aumento do volume diastólico final descreve a:",
    "options": [
      "Lei de Frank-Starling",
      "Efeito Bowditch",
      "Reflexo de Bainbridge",
      "Lei de Poiseuille"
    ],
    "correctIndex": 0,
    "explanation": "A Lei de Frank-Starling afirma que a força de contração miocárdica aumenta proporcionalmente ao estiramento prévio das fibras (volume diastólico final).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q84",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #84).\n\nA estimulação dos receptores beta-1 adrenérgicos no nó sinoatrial promove principalmente:",
    "options": [
      "Aumento da frequência cardíaca (cronotropismo positivo)",
      "Vasodilatação coronariana direta isolada",
      "Diminuição do inotropismo cardíaco",
      "Retardo da condução atrioventricular"
    ],
    "correctIndex": 0,
    "explanation": "A ativação beta-1 no coração aumenta a frequência cardíaca (cronotropismo positivo) e a força contrátil (inotropismo positivo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q85",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #85).\n\nO volume de ar inspirado ou expirado em cada respiração normal em repouso denomina-se:",
    "options": [
      "Volume corrente (VC)",
      "Volume de reserva inspiratório (VRI)",
      "Volume residual (VR)",
      "Capacidade vital (CV)"
    ],
    "correctIndex": 0,
    "explanation": "O volume corrente (VC) corresponde ao volume de ar mobilizado em cada ciclo respiratório tranquilo (cerca de 500 mL no adulto).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q86",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #86).\n\nO surfactante pulmonar reduz a tensão superficial nos alvéolos evitando o colapso (atelectasia), sendo produzido pelas células:",
    "options": [
      "Pneumócitos tipo I",
      "Pneumócitos tipo II",
      "Macrófagos alveolares",
      "Células caliciformes"
    ],
    "correctIndex": 1,
    "explanation": "Os pneumócitos tipo II sintetizam e secretam o surfactante pulmonar (rico em dipalmitoilfostatidilcolina).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q87",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #87).\n\nA secreção do hormônio hipotireoidiano (PTH) pelas paratireoides é estimulada primariamente por:",
    "options": [
      "Redução da concentração de cálcio iônico plasmático",
      "Elevação da calcitonina",
      "Elevação do cálcio plasmático",
      "Inibição da vitamina D"
    ],
    "correctIndex": 0,
    "explanation": "A hipocalcemia (baixa de Ca2+ iônico no plasma) estimula diretamente as glândulas paratireoides a secretarem PTH.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q88",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #88).\n\nA insulina promove o ingresso de glicose nas células musculares e adiposas mediante translocação do transportador:",
    "options": [
      "GLUT-1",
      "GLUT-2",
      "GLUT-4",
      "SGLT-2"
    ],
    "correctIndex": 2,
    "explanation": "O GLUT-4 é o transportador de glicose dependente de insulina expresso no tecido muscular esquelético/cardíaco e tecido adiposo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q89",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Neurofisiologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #89).\n\nA fase de despolarização rápida do potencial de ação neuronal decorre da abertura de canais dependentes de voltagem de:",
    "options": [
      "Sódio (Na+)",
      "Potássio (K+)",
      "Cálcio (Ca2+)",
      "Cloro (Cl-)"
    ],
    "correctIndex": 0,
    "explanation": "A entrada maciça e rápida de íons Na+ através de canais de Na+ voltagem-dependentes provoca a despolarização do potencial de membrana.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q90",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Gastrintestinal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #90).\n\nQual hormônio secretado pelas células S do duodeno estimula a secreção pancreática rica em bicarbonato?",
    "options": [
      "Gastrina",
      "Secretina",
      "Colecistococina (CCK)",
      "Peptídeo Inibidor Gástrico (GIP)"
    ],
    "correctIndex": 1,
    "explanation": "A secretina é liberada pela chegada do quimo ácido ao duodeno e estimula o pâncreas exócrino a secretar água e bicarbonato.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q91",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #91).\n\nEm qual segmento do néfron ocorre a reabsorção da maior fração do filtrado glomerular (cerca de 65%)?",
    "options": [
      "Túbulo contorcido distal",
      "Túbulo contorcido proximal",
      "Alça de Henle ascendente",
      "Duto coletor medular"
    ],
    "correctIndex": 1,
    "explanation": "O túbulo contorcido proximal reabsorve isosmoticamente cerca de 65% da água, sódio, potássio e quase 100% de glicose e aminoácidos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q92",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Renal",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #92).\n\nA vasopressina (ADH) aumenta a reabsorção de água nos dutos coletores renais estimulando a translocação apical de:",
    "options": [
      "Aquaporina-1",
      "Aquaporina-2",
      "Co-transportador Na-K-2Cl",
      "Bomba Na+/K+ ATPase"
    ],
    "correctIndex": 1,
    "explanation": "O ADH liga-se aos receptores V2 nos dutos coletores e promove a inserção de canais de água aquaporina-2 na membrana luminal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q93",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #93).\n\nA elevação da força de contração ventricular em resposta ao aumento do volume diastólico final descreve a:",
    "options": [
      "Lei de Frank-Starling",
      "Efeito Bowditch",
      "Reflexo de Bainbridge",
      "Lei de Poiseuille"
    ],
    "correctIndex": 0,
    "explanation": "A Lei de Frank-Starling afirma que a força de contração miocárdica aumenta proporcionalmente ao estiramento prévio das fibras (volume diastólico final).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q94",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #94).\n\nA estimulação dos receptores beta-1 adrenérgicos no nó sinoatrial promove principalmente:",
    "options": [
      "Aumento da frequência cardíaca (cronotropismo positivo)",
      "Vasodilatação coronariana direta isolada",
      "Diminuição do inotropismo cardíaco",
      "Retardo da condução atrioventricular"
    ],
    "correctIndex": 0,
    "explanation": "A ativação beta-1 no coração aumenta a frequência cardíaca (cronotropismo positivo) e a força contrátil (inotropismo positivo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q95",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #95).\n\nO volume de ar inspirado ou expirado em cada respiração normal em repouso denomina-se:",
    "options": [
      "Volume corrente (VC)",
      "Volume de reserva inspiratório (VRI)",
      "Volume residual (VR)",
      "Capacidade vital (CV)"
    ],
    "correctIndex": 0,
    "explanation": "O volume corrente (VC) corresponde ao volume de ar mobilizado em cada ciclo respiratório tranquilo (cerca de 500 mL no adulto).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q96",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #96).\n\nO surfactante pulmonar reduz a tensão superficial nos alvéolos evitando o colapso (atelectasia), sendo produzido pelas células:",
    "options": [
      "Pneumócitos tipo I",
      "Pneumócitos tipo II",
      "Macrófagos alveolares",
      "Células caliciformes"
    ],
    "correctIndex": 1,
    "explanation": "Os pneumócitos tipo II sintetizam e secretam o surfactante pulmonar (rico em dipalmitoilfostatidilcolina).",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q97",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #97).\n\nA secreção do hormônio hipotireoidiano (PTH) pelas paratireoides é estimulada primariamente por:",
    "options": [
      "Redução da concentração de cálcio iônico plasmático",
      "Elevação da calcitonina",
      "Elevação do cálcio plasmático",
      "Inibição da vitamina D"
    ],
    "correctIndex": 0,
    "explanation": "A hipocalcemia (baixa de Ca2+ iônico no plasma) estimula diretamente as glândulas paratireoides a secretarem PTH.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q98",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Endócrina",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #98).\n\nA insulina promove o ingresso de glicose nas células musculares e adiposas mediante translocação do transportador:",
    "options": [
      "GLUT-1",
      "GLUT-2",
      "GLUT-4",
      "SGLT-2"
    ],
    "correctIndex": 2,
    "explanation": "O GLUT-4 é o transportador de glicose dependente de insulina expresso no tecido muscular esquelético/cardíaco e tecido adiposo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q99",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Neurofisiologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #99).\n\nA fase de despolarização rápida do potencial de ação neuronal decorre da abertura de canais dependentes de voltagem de:",
    "options": [
      "Sódio (Na+)",
      "Potássio (K+)",
      "Cálcio (Ca2+)",
      "Cloro (Cl-)"
    ],
    "correctIndex": 0,
    "explanation": "A entrada maciça e rápida de íons Na+ através de canais de Na+ voltagem-dependentes provoca a despolarização do potencial de membrana.",
    "difficulty": "medium"
  },
  {
    "id": "basico_fisiologia_q100",
    "cycle": "Ciclo Básico",
    "subject": "Fisiologia",
    "subSubject": "Fisiologia Gastrintestinal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #100).\n\nQual hormônio secretado pelas células S do duodeno estimula a secreção pancreática rica em bicarbonato?",
    "options": [
      "Gastrina",
      "Secretina",
      "Colecistococina (CCK)",
      "Peptídeo Inibidor Gástrico (GIP)"
    ],
    "correctIndex": 1,
    "explanation": "A secretina é liberada pela chegada do quimo ácido ao duodeno e estimula o pâncreas exócrino a secretar água e bicarbonato.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q1",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #1).\n\nQual enzima atua como o principal ponto de regulação alostérica da via glicolítica, inibida por ATP e ativada por AMP?",
    "options": [
      "Hexocinase",
      "Fosfofrutocinase-1 (PFK-1)",
      "Piruvato quinase",
      "Glicose-6-fosfatase"
    ],
    "correctIndex": 1,
    "explanation": "A PFK-1 é a enzima marca-passo e ponto chave de regulação alostérica da glicólise.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q2",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #2).\n\nA via de síntese de glicose a partir de precursores não glicídicos (lactato, glicerol, alanina) durante o jejum é a:",
    "options": [
      "Glicogênese",
      "Gliconeogênese",
      "Via das Pentoses Fosfato",
      "Ciclo da Ureia"
    ],
    "correctIndex": 1,
    "explanation": "A gliconeogênese produz glicose nova no fígado e rins para manter a glicemia durante períodos de jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q3",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Cadeia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #3).\n\nO complexo IV da cadeia de transporte de elétrons mitocondrial transfere elétrons diretamente para qual aceptor final?",
    "options": [
      "NADH",
      "Oxigênio molecular (O2)",
      "Coenzima Q (Ubiquinona)",
      "Citocromo c"
    ],
    "correctIndex": 1,
    "explanation": "O complexo IV (citocromo c oxidase) transfere elétrons para o O2, reduzindo-o a água H2O.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q4",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #4).\n\nA beta-oxidação dos ácidos graxos ocorre no interior de qual organela celular?",
    "options": [
      "Mitocôndria (matriz mitocondrial)",
      "Retículo endoplasmático liso",
      "Complexo de Golgi",
      "Lisossomo"
    ],
    "correctIndex": 0,
    "explanation": "Os ácidos graxos ativados entram na matriz mitocondrial via lançadeira de carnitina e passam pela beta-oxidação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q5",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #5).\n\nQual lipoproteína é responsável pelo transporte reverso do colesterol dos tecidos periféricos para o fígado?",
    "options": [
      "VLDL",
      "LDL",
      "HDL",
      "Quilomícron"
    ],
    "correctIndex": 2,
    "explanation": "O HDL realiza o transporte reverso do colesterol, retirando excesso de colesterol dos tecidos e vasos para depuração hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q6",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Proteínas",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #6).\n\nO ciclo da ureia ocorre no fígado para excretar a amônia tóxica, sendo sua primeira enzima mitocondrial a:",
    "options": [
      "Carbamil-fosfato sintetase I (CPS-I)",
      "Ornitina transcarbamilase",
      "Argininosuccinato sintetase",
      "Arginase"
    ],
    "correctIndex": 0,
    "explanation": "A CPS-I condensa amônia e bicarbonato em carbamil-fosfato na matriz mitocondrial hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q7",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Enzimologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #7).\n\nUm inibidor competitivo de uma reação enzimática altera os parâmetros cinéticos de Michaelis-Menten de qual forma?",
    "options": [
      "Aumenta o Km aparente mantendo a Vmax inalterada",
      "Diminui a Vmax mantendo o Km inalterado",
      "Diminui tanto o Km quanto a Vmax",
      "Aumenta a Vmax e diminui o Km"
    ],
    "correctIndex": 0,
    "explanation": "Inibidores competitivos competem pelo sítio ativo com o substrato, aumentando o Km aparente sem alterar a Vmax.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q8",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Via das Pentoses",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #8).\n\nA via das pentoses fosfato gera NADPH fundamental para a síntese lipídica e defesa antioxidante através da enzima chave:",
    "options": [
      "Glicose-6-fosfato desidrogenase (G6PD)",
      "Transcetolase",
      "Aldolase B",
      "Frutocinase"
    ],
    "correctIndex": 0,
    "explanation": "A G6PD catalisa o passo limitante da via das pentoses, gerando NADPH essencial para a glutationa redutase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q9",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Integração Metabólica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #9).\n\nNo estado de jejum prolongado, o cérebro adapta-se para utilizar como fonte alternativa de energia os:",
    "options": [
      "Corpos cetônicos (acetoacetato e beta-hidroxibutirato)",
      "Ácidos graxos livres de cadeia longa",
      "Aminoácidos ramificados intactos",
      "Triglicerídeos plasmáticos"
    ],
    "correctIndex": 0,
    "explanation": "Corpos cetônicos sintetizados pelo fígado atravessam a barreira hematoencefálica e suprem até 70% das necessidades energéticas do cérebro no jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q10",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Glicogênio",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #10).\n\nA quebra do glicogênio hepático (glicogenólise) é ativada no jejum por fosforilação da glicogênio fosforilase sob ação do:",
    "options": [
      "Glucagon e Adrenalina",
      "Insulina",
      "Cortisol",
      "Hormônio do Crescimento (GH)"
    ],
    "correctIndex": 0,
    "explanation": "O glucagon (no fígado) e a adrenalina (no músculo) ativam a cascata do AMPc/PKA, ativando a glicogênio fosforilase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q11",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #11).\n\nQual enzima atua como o principal ponto de regulação alostérica da via glicolítica, inibida por ATP e ativada por AMP?",
    "options": [
      "Hexocinase",
      "Fosfofrutocinase-1 (PFK-1)",
      "Piruvato quinase",
      "Glicose-6-fosfatase"
    ],
    "correctIndex": 1,
    "explanation": "A PFK-1 é a enzima marca-passo e ponto chave de regulação alostérica da glicólise.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q12",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #12).\n\nA via de síntese de glicose a partir de precursores não glicídicos (lactato, glicerol, alanina) durante o jejum é a:",
    "options": [
      "Glicogênese",
      "Gliconeogênese",
      "Via das Pentoses Fosfato",
      "Ciclo da Ureia"
    ],
    "correctIndex": 1,
    "explanation": "A gliconeogênese produz glicose nova no fígado e rins para manter a glicemia durante períodos de jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q13",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Cadeia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #13).\n\nO complexo IV da cadeia de transporte de elétrons mitocondrial transfere elétrons diretamente para qual aceptor final?",
    "options": [
      "NADH",
      "Oxigênio molecular (O2)",
      "Coenzima Q (Ubiquinona)",
      "Citocromo c"
    ],
    "correctIndex": 1,
    "explanation": "O complexo IV (citocromo c oxidase) transfere elétrons para o O2, reduzindo-o a água H2O.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q14",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #14).\n\nA beta-oxidação dos ácidos graxos ocorre no interior de qual organela celular?",
    "options": [
      "Mitocôndria (matriz mitocondrial)",
      "Retículo endoplasmático liso",
      "Complexo de Golgi",
      "Lisossomo"
    ],
    "correctIndex": 0,
    "explanation": "Os ácidos graxos ativados entram na matriz mitocondrial via lançadeira de carnitina e passam pela beta-oxidação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q15",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #15).\n\nQual lipoproteína é responsável pelo transporte reverso do colesterol dos tecidos periféricos para o fígado?",
    "options": [
      "VLDL",
      "LDL",
      "HDL",
      "Quilomícron"
    ],
    "correctIndex": 2,
    "explanation": "O HDL realiza o transporte reverso do colesterol, retirando excesso de colesterol dos tecidos e vasos para depuração hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q16",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Proteínas",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #16).\n\nO ciclo da ureia ocorre no fígado para excretar a amônia tóxica, sendo sua primeira enzima mitocondrial a:",
    "options": [
      "Carbamil-fosfato sintetase I (CPS-I)",
      "Ornitina transcarbamilase",
      "Argininosuccinato sintetase",
      "Arginase"
    ],
    "correctIndex": 0,
    "explanation": "A CPS-I condensa amônia e bicarbonato em carbamil-fosfato na matriz mitocondrial hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q17",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Enzimologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #17).\n\nUm inibidor competitivo de uma reação enzimática altera os parâmetros cinéticos de Michaelis-Menten de qual forma?",
    "options": [
      "Aumenta o Km aparente mantendo a Vmax inalterada",
      "Diminui a Vmax mantendo o Km inalterado",
      "Diminui tanto o Km quanto a Vmax",
      "Aumenta a Vmax e diminui o Km"
    ],
    "correctIndex": 0,
    "explanation": "Inibidores competitivos competem pelo sítio ativo com o substrato, aumentando o Km aparente sem alterar a Vmax.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q18",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Via das Pentoses",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #18).\n\nA via das pentoses fosfato gera NADPH fundamental para a síntese lipídica e defesa antioxidante através da enzima chave:",
    "options": [
      "Glicose-6-fosfato desidrogenase (G6PD)",
      "Transcetolase",
      "Aldolase B",
      "Frutocinase"
    ],
    "correctIndex": 0,
    "explanation": "A G6PD catalisa o passo limitante da via das pentoses, gerando NADPH essencial para a glutationa redutase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q19",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Integração Metabólica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #19).\n\nNo estado de jejum prolongado, o cérebro adapta-se para utilizar como fonte alternativa de energia os:",
    "options": [
      "Corpos cetônicos (acetoacetato e beta-hidroxibutirato)",
      "Ácidos graxos livres de cadeia longa",
      "Aminoácidos ramificados intactos",
      "Triglicerídeos plasmáticos"
    ],
    "correctIndex": 0,
    "explanation": "Corpos cetônicos sintetizados pelo fígado atravessam a barreira hematoencefálica e suprem até 70% das necessidades energéticas do cérebro no jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q20",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Glicogênio",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #20).\n\nA quebra do glicogênio hepático (glicogenólise) é ativada no jejum por fosforilação da glicogênio fosforilase sob ação do:",
    "options": [
      "Glucagon e Adrenalina",
      "Insulina",
      "Cortisol",
      "Hormônio do Crescimento (GH)"
    ],
    "correctIndex": 0,
    "explanation": "O glucagon (no fígado) e a adrenalina (no músculo) ativam a cascata do AMPc/PKA, ativando a glicogênio fosforilase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q21",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #21).\n\nQual enzima atua como o principal ponto de regulação alostérica da via glicolítica, inibida por ATP e ativada por AMP?",
    "options": [
      "Hexocinase",
      "Fosfofrutocinase-1 (PFK-1)",
      "Piruvato quinase",
      "Glicose-6-fosfatase"
    ],
    "correctIndex": 1,
    "explanation": "A PFK-1 é a enzima marca-passo e ponto chave de regulação alostérica da glicólise.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q22",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #22).\n\nA via de síntese de glicose a partir de precursores não glicídicos (lactato, glicerol, alanina) durante o jejum é a:",
    "options": [
      "Glicogênese",
      "Gliconeogênese",
      "Via das Pentoses Fosfato",
      "Ciclo da Ureia"
    ],
    "correctIndex": 1,
    "explanation": "A gliconeogênese produz glicose nova no fígado e rins para manter a glicemia durante períodos de jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q23",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Cadeia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #23).\n\nO complexo IV da cadeia de transporte de elétrons mitocondrial transfere elétrons diretamente para qual aceptor final?",
    "options": [
      "NADH",
      "Oxigênio molecular (O2)",
      "Coenzima Q (Ubiquinona)",
      "Citocromo c"
    ],
    "correctIndex": 1,
    "explanation": "O complexo IV (citocromo c oxidase) transfere elétrons para o O2, reduzindo-o a água H2O.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q24",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #24).\n\nA beta-oxidação dos ácidos graxos ocorre no interior de qual organela celular?",
    "options": [
      "Mitocôndria (matriz mitocondrial)",
      "Retículo endoplasmático liso",
      "Complexo de Golgi",
      "Lisossomo"
    ],
    "correctIndex": 0,
    "explanation": "Os ácidos graxos ativados entram na matriz mitocondrial via lançadeira de carnitina e passam pela beta-oxidação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q25",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #25).\n\nQual lipoproteína é responsável pelo transporte reverso do colesterol dos tecidos periféricos para o fígado?",
    "options": [
      "VLDL",
      "LDL",
      "HDL",
      "Quilomícron"
    ],
    "correctIndex": 2,
    "explanation": "O HDL realiza o transporte reverso do colesterol, retirando excesso de colesterol dos tecidos e vasos para depuração hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q26",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Proteínas",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #26).\n\nO ciclo da ureia ocorre no fígado para excretar a amônia tóxica, sendo sua primeira enzima mitocondrial a:",
    "options": [
      "Carbamil-fosfato sintetase I (CPS-I)",
      "Ornitina transcarbamilase",
      "Argininosuccinato sintetase",
      "Arginase"
    ],
    "correctIndex": 0,
    "explanation": "A CPS-I condensa amônia e bicarbonato em carbamil-fosfato na matriz mitocondrial hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q27",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Enzimologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #27).\n\nUm inibidor competitivo de uma reação enzimática altera os parâmetros cinéticos de Michaelis-Menten de qual forma?",
    "options": [
      "Aumenta o Km aparente mantendo a Vmax inalterada",
      "Diminui a Vmax mantendo o Km inalterado",
      "Diminui tanto o Km quanto a Vmax",
      "Aumenta a Vmax e diminui o Km"
    ],
    "correctIndex": 0,
    "explanation": "Inibidores competitivos competem pelo sítio ativo com o substrato, aumentando o Km aparente sem alterar a Vmax.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q28",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Via das Pentoses",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #28).\n\nA via das pentoses fosfato gera NADPH fundamental para a síntese lipídica e defesa antioxidante através da enzima chave:",
    "options": [
      "Glicose-6-fosfato desidrogenase (G6PD)",
      "Transcetolase",
      "Aldolase B",
      "Frutocinase"
    ],
    "correctIndex": 0,
    "explanation": "A G6PD catalisa o passo limitante da via das pentoses, gerando NADPH essencial para a glutationa redutase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q29",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Integração Metabólica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #29).\n\nNo estado de jejum prolongado, o cérebro adapta-se para utilizar como fonte alternativa de energia os:",
    "options": [
      "Corpos cetônicos (acetoacetato e beta-hidroxibutirato)",
      "Ácidos graxos livres de cadeia longa",
      "Aminoácidos ramificados intactos",
      "Triglicerídeos plasmáticos"
    ],
    "correctIndex": 0,
    "explanation": "Corpos cetônicos sintetizados pelo fígado atravessam a barreira hematoencefálica e suprem até 70% das necessidades energéticas do cérebro no jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q30",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Glicogênio",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #30).\n\nA quebra do glicogênio hepático (glicogenólise) é ativada no jejum por fosforilação da glicogênio fosforilase sob ação do:",
    "options": [
      "Glucagon e Adrenalina",
      "Insulina",
      "Cortisol",
      "Hormônio do Crescimento (GH)"
    ],
    "correctIndex": 0,
    "explanation": "O glucagon (no fígado) e a adrenalina (no músculo) ativam a cascata do AMPc/PKA, ativando a glicogênio fosforilase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q31",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #31).\n\nQual enzima atua como o principal ponto de regulação alostérica da via glicolítica, inibida por ATP e ativada por AMP?",
    "options": [
      "Hexocinase",
      "Fosfofrutocinase-1 (PFK-1)",
      "Piruvato quinase",
      "Glicose-6-fosfatase"
    ],
    "correctIndex": 1,
    "explanation": "A PFK-1 é a enzima marca-passo e ponto chave de regulação alostérica da glicólise.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q32",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #32).\n\nA via de síntese de glicose a partir de precursores não glicídicos (lactato, glicerol, alanina) durante o jejum é a:",
    "options": [
      "Glicogênese",
      "Gliconeogênese",
      "Via das Pentoses Fosfato",
      "Ciclo da Ureia"
    ],
    "correctIndex": 1,
    "explanation": "A gliconeogênese produz glicose nova no fígado e rins para manter a glicemia durante períodos de jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q33",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Cadeia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #33).\n\nO complexo IV da cadeia de transporte de elétrons mitocondrial transfere elétrons diretamente para qual aceptor final?",
    "options": [
      "NADH",
      "Oxigênio molecular (O2)",
      "Coenzima Q (Ubiquinona)",
      "Citocromo c"
    ],
    "correctIndex": 1,
    "explanation": "O complexo IV (citocromo c oxidase) transfere elétrons para o O2, reduzindo-o a água H2O.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q34",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #34).\n\nA beta-oxidação dos ácidos graxos ocorre no interior de qual organela celular?",
    "options": [
      "Mitocôndria (matriz mitocondrial)",
      "Retículo endoplasmático liso",
      "Complexo de Golgi",
      "Lisossomo"
    ],
    "correctIndex": 0,
    "explanation": "Os ácidos graxos ativados entram na matriz mitocondrial via lançadeira de carnitina e passam pela beta-oxidação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q35",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #35).\n\nQual lipoproteína é responsável pelo transporte reverso do colesterol dos tecidos periféricos para o fígado?",
    "options": [
      "VLDL",
      "LDL",
      "HDL",
      "Quilomícron"
    ],
    "correctIndex": 2,
    "explanation": "O HDL realiza o transporte reverso do colesterol, retirando excesso de colesterol dos tecidos e vasos para depuração hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q36",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Proteínas",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #36).\n\nO ciclo da ureia ocorre no fígado para excretar a amônia tóxica, sendo sua primeira enzima mitocondrial a:",
    "options": [
      "Carbamil-fosfato sintetase I (CPS-I)",
      "Ornitina transcarbamilase",
      "Argininosuccinato sintetase",
      "Arginase"
    ],
    "correctIndex": 0,
    "explanation": "A CPS-I condensa amônia e bicarbonato em carbamil-fosfato na matriz mitocondrial hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q37",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Enzimologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #37).\n\nUm inibidor competitivo de uma reação enzimática altera os parâmetros cinéticos de Michaelis-Menten de qual forma?",
    "options": [
      "Aumenta o Km aparente mantendo a Vmax inalterada",
      "Diminui a Vmax mantendo o Km inalterado",
      "Diminui tanto o Km quanto a Vmax",
      "Aumenta a Vmax e diminui o Km"
    ],
    "correctIndex": 0,
    "explanation": "Inibidores competitivos competem pelo sítio ativo com o substrato, aumentando o Km aparente sem alterar a Vmax.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q38",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Via das Pentoses",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #38).\n\nA via das pentoses fosfato gera NADPH fundamental para a síntese lipídica e defesa antioxidante através da enzima chave:",
    "options": [
      "Glicose-6-fosfato desidrogenase (G6PD)",
      "Transcetolase",
      "Aldolase B",
      "Frutocinase"
    ],
    "correctIndex": 0,
    "explanation": "A G6PD catalisa o passo limitante da via das pentoses, gerando NADPH essencial para a glutationa redutase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q39",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Integração Metabólica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #39).\n\nNo estado de jejum prolongado, o cérebro adapta-se para utilizar como fonte alternativa de energia os:",
    "options": [
      "Corpos cetônicos (acetoacetato e beta-hidroxibutirato)",
      "Ácidos graxos livres de cadeia longa",
      "Aminoácidos ramificados intactos",
      "Triglicerídeos plasmáticos"
    ],
    "correctIndex": 0,
    "explanation": "Corpos cetônicos sintetizados pelo fígado atravessam a barreira hematoencefálica e suprem até 70% das necessidades energéticas do cérebro no jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q40",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Glicogênio",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #40).\n\nA quebra do glicogênio hepático (glicogenólise) é ativada no jejum por fosforilação da glicogênio fosforilase sob ação do:",
    "options": [
      "Glucagon e Adrenalina",
      "Insulina",
      "Cortisol",
      "Hormônio do Crescimento (GH)"
    ],
    "correctIndex": 0,
    "explanation": "O glucagon (no fígado) e a adrenalina (no músculo) ativam a cascata do AMPc/PKA, ativando a glicogênio fosforilase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q41",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #41).\n\nQual enzima atua como o principal ponto de regulação alostérica da via glicolítica, inibida por ATP e ativada por AMP?",
    "options": [
      "Hexocinase",
      "Fosfofrutocinase-1 (PFK-1)",
      "Piruvato quinase",
      "Glicose-6-fosfatase"
    ],
    "correctIndex": 1,
    "explanation": "A PFK-1 é a enzima marca-passo e ponto chave de regulação alostérica da glicólise.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q42",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #42).\n\nA via de síntese de glicose a partir de precursores não glicídicos (lactato, glicerol, alanina) durante o jejum é a:",
    "options": [
      "Glicogênese",
      "Gliconeogênese",
      "Via das Pentoses Fosfato",
      "Ciclo da Ureia"
    ],
    "correctIndex": 1,
    "explanation": "A gliconeogênese produz glicose nova no fígado e rins para manter a glicemia durante períodos de jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q43",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Cadeia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #43).\n\nO complexo IV da cadeia de transporte de elétrons mitocondrial transfere elétrons diretamente para qual aceptor final?",
    "options": [
      "NADH",
      "Oxigênio molecular (O2)",
      "Coenzima Q (Ubiquinona)",
      "Citocromo c"
    ],
    "correctIndex": 1,
    "explanation": "O complexo IV (citocromo c oxidase) transfere elétrons para o O2, reduzindo-o a água H2O.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q44",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #44).\n\nA beta-oxidação dos ácidos graxos ocorre no interior de qual organela celular?",
    "options": [
      "Mitocôndria (matriz mitocondrial)",
      "Retículo endoplasmático liso",
      "Complexo de Golgi",
      "Lisossomo"
    ],
    "correctIndex": 0,
    "explanation": "Os ácidos graxos ativados entram na matriz mitocondrial via lançadeira de carnitina e passam pela beta-oxidação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q45",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #45).\n\nQual lipoproteína é responsável pelo transporte reverso do colesterol dos tecidos periféricos para o fígado?",
    "options": [
      "VLDL",
      "LDL",
      "HDL",
      "Quilomícron"
    ],
    "correctIndex": 2,
    "explanation": "O HDL realiza o transporte reverso do colesterol, retirando excesso de colesterol dos tecidos e vasos para depuração hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q46",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Proteínas",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #46).\n\nO ciclo da ureia ocorre no fígado para excretar a amônia tóxica, sendo sua primeira enzima mitocondrial a:",
    "options": [
      "Carbamil-fosfato sintetase I (CPS-I)",
      "Ornitina transcarbamilase",
      "Argininosuccinato sintetase",
      "Arginase"
    ],
    "correctIndex": 0,
    "explanation": "A CPS-I condensa amônia e bicarbonato em carbamil-fosfato na matriz mitocondrial hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q47",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Enzimologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #47).\n\nUm inibidor competitivo de uma reação enzimática altera os parâmetros cinéticos de Michaelis-Menten de qual forma?",
    "options": [
      "Aumenta o Km aparente mantendo a Vmax inalterada",
      "Diminui a Vmax mantendo o Km inalterado",
      "Diminui tanto o Km quanto a Vmax",
      "Aumenta a Vmax e diminui o Km"
    ],
    "correctIndex": 0,
    "explanation": "Inibidores competitivos competem pelo sítio ativo com o substrato, aumentando o Km aparente sem alterar a Vmax.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q48",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Via das Pentoses",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #48).\n\nA via das pentoses fosfato gera NADPH fundamental para a síntese lipídica e defesa antioxidante através da enzima chave:",
    "options": [
      "Glicose-6-fosfato desidrogenase (G6PD)",
      "Transcetolase",
      "Aldolase B",
      "Frutocinase"
    ],
    "correctIndex": 0,
    "explanation": "A G6PD catalisa o passo limitante da via das pentoses, gerando NADPH essencial para a glutationa redutase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q49",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Integração Metabólica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #49).\n\nNo estado de jejum prolongado, o cérebro adapta-se para utilizar como fonte alternativa de energia os:",
    "options": [
      "Corpos cetônicos (acetoacetato e beta-hidroxibutirato)",
      "Ácidos graxos livres de cadeia longa",
      "Aminoácidos ramificados intactos",
      "Triglicerídeos plasmáticos"
    ],
    "correctIndex": 0,
    "explanation": "Corpos cetônicos sintetizados pelo fígado atravessam a barreira hematoencefálica e suprem até 70% das necessidades energéticas do cérebro no jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q50",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Glicogênio",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #50).\n\nA quebra do glicogênio hepático (glicogenólise) é ativada no jejum por fosforilação da glicogênio fosforilase sob ação do:",
    "options": [
      "Glucagon e Adrenalina",
      "Insulina",
      "Cortisol",
      "Hormônio do Crescimento (GH)"
    ],
    "correctIndex": 0,
    "explanation": "O glucagon (no fígado) e a adrenalina (no músculo) ativam a cascata do AMPc/PKA, ativando a glicogênio fosforilase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q51",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #51).\n\nQual enzima atua como o principal ponto de regulação alostérica da via glicolítica, inibida por ATP e ativada por AMP?",
    "options": [
      "Hexocinase",
      "Fosfofrutocinase-1 (PFK-1)",
      "Piruvato quinase",
      "Glicose-6-fosfatase"
    ],
    "correctIndex": 1,
    "explanation": "A PFK-1 é a enzima marca-passo e ponto chave de regulação alostérica da glicólise.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q52",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #52).\n\nA via de síntese de glicose a partir de precursores não glicídicos (lactato, glicerol, alanina) durante o jejum é a:",
    "options": [
      "Glicogênese",
      "Gliconeogênese",
      "Via das Pentoses Fosfato",
      "Ciclo da Ureia"
    ],
    "correctIndex": 1,
    "explanation": "A gliconeogênese produz glicose nova no fígado e rins para manter a glicemia durante períodos de jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q53",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Cadeia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #53).\n\nO complexo IV da cadeia de transporte de elétrons mitocondrial transfere elétrons diretamente para qual aceptor final?",
    "options": [
      "NADH",
      "Oxigênio molecular (O2)",
      "Coenzima Q (Ubiquinona)",
      "Citocromo c"
    ],
    "correctIndex": 1,
    "explanation": "O complexo IV (citocromo c oxidase) transfere elétrons para o O2, reduzindo-o a água H2O.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q54",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #54).\n\nA beta-oxidação dos ácidos graxos ocorre no interior de qual organela celular?",
    "options": [
      "Mitocôndria (matriz mitocondrial)",
      "Retículo endoplasmático liso",
      "Complexo de Golgi",
      "Lisossomo"
    ],
    "correctIndex": 0,
    "explanation": "Os ácidos graxos ativados entram na matriz mitocondrial via lançadeira de carnitina e passam pela beta-oxidação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q55",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #55).\n\nQual lipoproteína é responsável pelo transporte reverso do colesterol dos tecidos periféricos para o fígado?",
    "options": [
      "VLDL",
      "LDL",
      "HDL",
      "Quilomícron"
    ],
    "correctIndex": 2,
    "explanation": "O HDL realiza o transporte reverso do colesterol, retirando excesso de colesterol dos tecidos e vasos para depuração hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q56",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Proteínas",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #56).\n\nO ciclo da ureia ocorre no fígado para excretar a amônia tóxica, sendo sua primeira enzima mitocondrial a:",
    "options": [
      "Carbamil-fosfato sintetase I (CPS-I)",
      "Ornitina transcarbamilase",
      "Argininosuccinato sintetase",
      "Arginase"
    ],
    "correctIndex": 0,
    "explanation": "A CPS-I condensa amônia e bicarbonato em carbamil-fosfato na matriz mitocondrial hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q57",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Enzimologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #57).\n\nUm inibidor competitivo de uma reação enzimática altera os parâmetros cinéticos de Michaelis-Menten de qual forma?",
    "options": [
      "Aumenta o Km aparente mantendo a Vmax inalterada",
      "Diminui a Vmax mantendo o Km inalterado",
      "Diminui tanto o Km quanto a Vmax",
      "Aumenta a Vmax e diminui o Km"
    ],
    "correctIndex": 0,
    "explanation": "Inibidores competitivos competem pelo sítio ativo com o substrato, aumentando o Km aparente sem alterar a Vmax.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q58",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Via das Pentoses",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #58).\n\nA via das pentoses fosfato gera NADPH fundamental para a síntese lipídica e defesa antioxidante através da enzima chave:",
    "options": [
      "Glicose-6-fosfato desidrogenase (G6PD)",
      "Transcetolase",
      "Aldolase B",
      "Frutocinase"
    ],
    "correctIndex": 0,
    "explanation": "A G6PD catalisa o passo limitante da via das pentoses, gerando NADPH essencial para a glutationa redutase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q59",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Integração Metabólica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #59).\n\nNo estado de jejum prolongado, o cérebro adapta-se para utilizar como fonte alternativa de energia os:",
    "options": [
      "Corpos cetônicos (acetoacetato e beta-hidroxibutirato)",
      "Ácidos graxos livres de cadeia longa",
      "Aminoácidos ramificados intactos",
      "Triglicerídeos plasmáticos"
    ],
    "correctIndex": 0,
    "explanation": "Corpos cetônicos sintetizados pelo fígado atravessam a barreira hematoencefálica e suprem até 70% das necessidades energéticas do cérebro no jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q60",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Glicogênio",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #60).\n\nA quebra do glicogênio hepático (glicogenólise) é ativada no jejum por fosforilação da glicogênio fosforilase sob ação do:",
    "options": [
      "Glucagon e Adrenalina",
      "Insulina",
      "Cortisol",
      "Hormônio do Crescimento (GH)"
    ],
    "correctIndex": 0,
    "explanation": "O glucagon (no fígado) e a adrenalina (no músculo) ativam a cascata do AMPc/PKA, ativando a glicogênio fosforilase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q61",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #61).\n\nQual enzima atua como o principal ponto de regulação alostérica da via glicolítica, inibida por ATP e ativada por AMP?",
    "options": [
      "Hexocinase",
      "Fosfofrutocinase-1 (PFK-1)",
      "Piruvato quinase",
      "Glicose-6-fosfatase"
    ],
    "correctIndex": 1,
    "explanation": "A PFK-1 é a enzima marca-passo e ponto chave de regulação alostérica da glicólise.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q62",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #62).\n\nA via de síntese de glicose a partir de precursores não glicídicos (lactato, glicerol, alanina) durante o jejum é a:",
    "options": [
      "Glicogênese",
      "Gliconeogênese",
      "Via das Pentoses Fosfato",
      "Ciclo da Ureia"
    ],
    "correctIndex": 1,
    "explanation": "A gliconeogênese produz glicose nova no fígado e rins para manter a glicemia durante períodos de jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q63",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Cadeia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #63).\n\nO complexo IV da cadeia de transporte de elétrons mitocondrial transfere elétrons diretamente para qual aceptor final?",
    "options": [
      "NADH",
      "Oxigênio molecular (O2)",
      "Coenzima Q (Ubiquinona)",
      "Citocromo c"
    ],
    "correctIndex": 1,
    "explanation": "O complexo IV (citocromo c oxidase) transfere elétrons para o O2, reduzindo-o a água H2O.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q64",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #64).\n\nA beta-oxidação dos ácidos graxos ocorre no interior de qual organela celular?",
    "options": [
      "Mitocôndria (matriz mitocondrial)",
      "Retículo endoplasmático liso",
      "Complexo de Golgi",
      "Lisossomo"
    ],
    "correctIndex": 0,
    "explanation": "Os ácidos graxos ativados entram na matriz mitocondrial via lançadeira de carnitina e passam pela beta-oxidação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q65",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #65).\n\nQual lipoproteína é responsável pelo transporte reverso do colesterol dos tecidos periféricos para o fígado?",
    "options": [
      "VLDL",
      "LDL",
      "HDL",
      "Quilomícron"
    ],
    "correctIndex": 2,
    "explanation": "O HDL realiza o transporte reverso do colesterol, retirando excesso de colesterol dos tecidos e vasos para depuração hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q66",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Proteínas",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #66).\n\nO ciclo da ureia ocorre no fígado para excretar a amônia tóxica, sendo sua primeira enzima mitocondrial a:",
    "options": [
      "Carbamil-fosfato sintetase I (CPS-I)",
      "Ornitina transcarbamilase",
      "Argininosuccinato sintetase",
      "Arginase"
    ],
    "correctIndex": 0,
    "explanation": "A CPS-I condensa amônia e bicarbonato em carbamil-fosfato na matriz mitocondrial hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q67",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Enzimologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #67).\n\nUm inibidor competitivo de uma reação enzimática altera os parâmetros cinéticos de Michaelis-Menten de qual forma?",
    "options": [
      "Aumenta o Km aparente mantendo a Vmax inalterada",
      "Diminui a Vmax mantendo o Km inalterado",
      "Diminui tanto o Km quanto a Vmax",
      "Aumenta a Vmax e diminui o Km"
    ],
    "correctIndex": 0,
    "explanation": "Inibidores competitivos competem pelo sítio ativo com o substrato, aumentando o Km aparente sem alterar a Vmax.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q68",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Via das Pentoses",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #68).\n\nA via das pentoses fosfato gera NADPH fundamental para a síntese lipídica e defesa antioxidante através da enzima chave:",
    "options": [
      "Glicose-6-fosfato desidrogenase (G6PD)",
      "Transcetolase",
      "Aldolase B",
      "Frutocinase"
    ],
    "correctIndex": 0,
    "explanation": "A G6PD catalisa o passo limitante da via das pentoses, gerando NADPH essencial para a glutationa redutase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q69",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Integração Metabólica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #69).\n\nNo estado de jejum prolongado, o cérebro adapta-se para utilizar como fonte alternativa de energia os:",
    "options": [
      "Corpos cetônicos (acetoacetato e beta-hidroxibutirato)",
      "Ácidos graxos livres de cadeia longa",
      "Aminoácidos ramificados intactos",
      "Triglicerídeos plasmáticos"
    ],
    "correctIndex": 0,
    "explanation": "Corpos cetônicos sintetizados pelo fígado atravessam a barreira hematoencefálica e suprem até 70% das necessidades energéticas do cérebro no jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q70",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Glicogênio",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #70).\n\nA quebra do glicogênio hepático (glicogenólise) é ativada no jejum por fosforilação da glicogênio fosforilase sob ação do:",
    "options": [
      "Glucagon e Adrenalina",
      "Insulina",
      "Cortisol",
      "Hormônio do Crescimento (GH)"
    ],
    "correctIndex": 0,
    "explanation": "O glucagon (no fígado) e a adrenalina (no músculo) ativam a cascata do AMPc/PKA, ativando a glicogênio fosforilase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q71",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #71).\n\nQual enzima atua como o principal ponto de regulação alostérica da via glicolítica, inibida por ATP e ativada por AMP?",
    "options": [
      "Hexocinase",
      "Fosfofrutocinase-1 (PFK-1)",
      "Piruvato quinase",
      "Glicose-6-fosfatase"
    ],
    "correctIndex": 1,
    "explanation": "A PFK-1 é a enzima marca-passo e ponto chave de regulação alostérica da glicólise.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q72",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #72).\n\nA via de síntese de glicose a partir de precursores não glicídicos (lactato, glicerol, alanina) durante o jejum é a:",
    "options": [
      "Glicogênese",
      "Gliconeogênese",
      "Via das Pentoses Fosfato",
      "Ciclo da Ureia"
    ],
    "correctIndex": 1,
    "explanation": "A gliconeogênese produz glicose nova no fígado e rins para manter a glicemia durante períodos de jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q73",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Cadeia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #73).\n\nO complexo IV da cadeia de transporte de elétrons mitocondrial transfere elétrons diretamente para qual aceptor final?",
    "options": [
      "NADH",
      "Oxigênio molecular (O2)",
      "Coenzima Q (Ubiquinona)",
      "Citocromo c"
    ],
    "correctIndex": 1,
    "explanation": "O complexo IV (citocromo c oxidase) transfere elétrons para o O2, reduzindo-o a água H2O.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q74",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #74).\n\nA beta-oxidação dos ácidos graxos ocorre no interior de qual organela celular?",
    "options": [
      "Mitocôndria (matriz mitocondrial)",
      "Retículo endoplasmático liso",
      "Complexo de Golgi",
      "Lisossomo"
    ],
    "correctIndex": 0,
    "explanation": "Os ácidos graxos ativados entram na matriz mitocondrial via lançadeira de carnitina e passam pela beta-oxidação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q75",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #75).\n\nQual lipoproteína é responsável pelo transporte reverso do colesterol dos tecidos periféricos para o fígado?",
    "options": [
      "VLDL",
      "LDL",
      "HDL",
      "Quilomícron"
    ],
    "correctIndex": 2,
    "explanation": "O HDL realiza o transporte reverso do colesterol, retirando excesso de colesterol dos tecidos e vasos para depuração hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q76",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Proteínas",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #76).\n\nO ciclo da ureia ocorre no fígado para excretar a amônia tóxica, sendo sua primeira enzima mitocondrial a:",
    "options": [
      "Carbamil-fosfato sintetase I (CPS-I)",
      "Ornitina transcarbamilase",
      "Argininosuccinato sintetase",
      "Arginase"
    ],
    "correctIndex": 0,
    "explanation": "A CPS-I condensa amônia e bicarbonato em carbamil-fosfato na matriz mitocondrial hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q77",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Enzimologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #77).\n\nUm inibidor competitivo de uma reação enzimática altera os parâmetros cinéticos de Michaelis-Menten de qual forma?",
    "options": [
      "Aumenta o Km aparente mantendo a Vmax inalterada",
      "Diminui a Vmax mantendo o Km inalterado",
      "Diminui tanto o Km quanto a Vmax",
      "Aumenta a Vmax e diminui o Km"
    ],
    "correctIndex": 0,
    "explanation": "Inibidores competitivos competem pelo sítio ativo com o substrato, aumentando o Km aparente sem alterar a Vmax.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q78",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Via das Pentoses",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #78).\n\nA via das pentoses fosfato gera NADPH fundamental para a síntese lipídica e defesa antioxidante através da enzima chave:",
    "options": [
      "Glicose-6-fosfato desidrogenase (G6PD)",
      "Transcetolase",
      "Aldolase B",
      "Frutocinase"
    ],
    "correctIndex": 0,
    "explanation": "A G6PD catalisa o passo limitante da via das pentoses, gerando NADPH essencial para a glutationa redutase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q79",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Integração Metabólica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #79).\n\nNo estado de jejum prolongado, o cérebro adapta-se para utilizar como fonte alternativa de energia os:",
    "options": [
      "Corpos cetônicos (acetoacetato e beta-hidroxibutirato)",
      "Ácidos graxos livres de cadeia longa",
      "Aminoácidos ramificados intactos",
      "Triglicerídeos plasmáticos"
    ],
    "correctIndex": 0,
    "explanation": "Corpos cetônicos sintetizados pelo fígado atravessam a barreira hematoencefálica e suprem até 70% das necessidades energéticas do cérebro no jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q80",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Glicogênio",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #80).\n\nA quebra do glicogênio hepático (glicogenólise) é ativada no jejum por fosforilação da glicogênio fosforilase sob ação do:",
    "options": [
      "Glucagon e Adrenalina",
      "Insulina",
      "Cortisol",
      "Hormônio do Crescimento (GH)"
    ],
    "correctIndex": 0,
    "explanation": "O glucagon (no fígado) e a adrenalina (no músculo) ativam a cascata do AMPc/PKA, ativando a glicogênio fosforilase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q81",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #81).\n\nQual enzima atua como o principal ponto de regulação alostérica da via glicolítica, inibida por ATP e ativada por AMP?",
    "options": [
      "Hexocinase",
      "Fosfofrutocinase-1 (PFK-1)",
      "Piruvato quinase",
      "Glicose-6-fosfatase"
    ],
    "correctIndex": 1,
    "explanation": "A PFK-1 é a enzima marca-passo e ponto chave de regulação alostérica da glicólise.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q82",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #82).\n\nA via de síntese de glicose a partir de precursores não glicídicos (lactato, glicerol, alanina) durante o jejum é a:",
    "options": [
      "Glicogênese",
      "Gliconeogênese",
      "Via das Pentoses Fosfato",
      "Ciclo da Ureia"
    ],
    "correctIndex": 1,
    "explanation": "A gliconeogênese produz glicose nova no fígado e rins para manter a glicemia durante períodos de jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q83",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Cadeia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #83).\n\nO complexo IV da cadeia de transporte de elétrons mitocondrial transfere elétrons diretamente para qual aceptor final?",
    "options": [
      "NADH",
      "Oxigênio molecular (O2)",
      "Coenzima Q (Ubiquinona)",
      "Citocromo c"
    ],
    "correctIndex": 1,
    "explanation": "O complexo IV (citocromo c oxidase) transfere elétrons para o O2, reduzindo-o a água H2O.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q84",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #84).\n\nA beta-oxidação dos ácidos graxos ocorre no interior de qual organela celular?",
    "options": [
      "Mitocôndria (matriz mitocondrial)",
      "Retículo endoplasmático liso",
      "Complexo de Golgi",
      "Lisossomo"
    ],
    "correctIndex": 0,
    "explanation": "Os ácidos graxos ativados entram na matriz mitocondrial via lançadeira de carnitina e passam pela beta-oxidação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q85",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #85).\n\nQual lipoproteína é responsável pelo transporte reverso do colesterol dos tecidos periféricos para o fígado?",
    "options": [
      "VLDL",
      "LDL",
      "HDL",
      "Quilomícron"
    ],
    "correctIndex": 2,
    "explanation": "O HDL realiza o transporte reverso do colesterol, retirando excesso de colesterol dos tecidos e vasos para depuração hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q86",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Proteínas",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #86).\n\nO ciclo da ureia ocorre no fígado para excretar a amônia tóxica, sendo sua primeira enzima mitocondrial a:",
    "options": [
      "Carbamil-fosfato sintetase I (CPS-I)",
      "Ornitina transcarbamilase",
      "Argininosuccinato sintetase",
      "Arginase"
    ],
    "correctIndex": 0,
    "explanation": "A CPS-I condensa amônia e bicarbonato em carbamil-fosfato na matriz mitocondrial hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q87",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Enzimologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #87).\n\nUm inibidor competitivo de uma reação enzimática altera os parâmetros cinéticos de Michaelis-Menten de qual forma?",
    "options": [
      "Aumenta o Km aparente mantendo a Vmax inalterada",
      "Diminui a Vmax mantendo o Km inalterado",
      "Diminui tanto o Km quanto a Vmax",
      "Aumenta a Vmax e diminui o Km"
    ],
    "correctIndex": 0,
    "explanation": "Inibidores competitivos competem pelo sítio ativo com o substrato, aumentando o Km aparente sem alterar a Vmax.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q88",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Via das Pentoses",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #88).\n\nA via das pentoses fosfato gera NADPH fundamental para a síntese lipídica e defesa antioxidante através da enzima chave:",
    "options": [
      "Glicose-6-fosfato desidrogenase (G6PD)",
      "Transcetolase",
      "Aldolase B",
      "Frutocinase"
    ],
    "correctIndex": 0,
    "explanation": "A G6PD catalisa o passo limitante da via das pentoses, gerando NADPH essencial para a glutationa redutase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q89",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Integração Metabólica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #89).\n\nNo estado de jejum prolongado, o cérebro adapta-se para utilizar como fonte alternativa de energia os:",
    "options": [
      "Corpos cetônicos (acetoacetato e beta-hidroxibutirato)",
      "Ácidos graxos livres de cadeia longa",
      "Aminoácidos ramificados intactos",
      "Triglicerídeos plasmáticos"
    ],
    "correctIndex": 0,
    "explanation": "Corpos cetônicos sintetizados pelo fígado atravessam a barreira hematoencefálica e suprem até 70% das necessidades energéticas do cérebro no jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q90",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Glicogênio",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #90).\n\nA quebra do glicogênio hepático (glicogenólise) é ativada no jejum por fosforilação da glicogênio fosforilase sob ação do:",
    "options": [
      "Glucagon e Adrenalina",
      "Insulina",
      "Cortisol",
      "Hormônio do Crescimento (GH)"
    ],
    "correctIndex": 0,
    "explanation": "O glucagon (no fígado) e a adrenalina (no músculo) ativam a cascata do AMPc/PKA, ativando a glicogênio fosforilase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q91",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #91).\n\nQual enzima atua como o principal ponto de regulação alostérica da via glicolítica, inibida por ATP e ativada por AMP?",
    "options": [
      "Hexocinase",
      "Fosfofrutocinase-1 (PFK-1)",
      "Piruvato quinase",
      "Glicose-6-fosfatase"
    ],
    "correctIndex": 1,
    "explanation": "A PFK-1 é a enzima marca-passo e ponto chave de regulação alostérica da glicólise.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q92",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Carboidratos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #92).\n\nA via de síntese de glicose a partir de precursores não glicídicos (lactato, glicerol, alanina) durante o jejum é a:",
    "options": [
      "Glicogênese",
      "Gliconeogênese",
      "Via das Pentoses Fosfato",
      "Ciclo da Ureia"
    ],
    "correctIndex": 1,
    "explanation": "A gliconeogênese produz glicose nova no fígado e rins para manter a glicemia durante períodos de jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q93",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Cadeia Respiratória",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #93).\n\nO complexo IV da cadeia de transporte de elétrons mitocondrial transfere elétrons diretamente para qual aceptor final?",
    "options": [
      "NADH",
      "Oxigênio molecular (O2)",
      "Coenzima Q (Ubiquinona)",
      "Citocromo c"
    ],
    "correctIndex": 1,
    "explanation": "O complexo IV (citocromo c oxidase) transfere elétrons para o O2, reduzindo-o a água H2O.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q94",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #94).\n\nA beta-oxidação dos ácidos graxos ocorre no interior de qual organela celular?",
    "options": [
      "Mitocôndria (matriz mitocondrial)",
      "Retículo endoplasmático liso",
      "Complexo de Golgi",
      "Lisossomo"
    ],
    "correctIndex": 0,
    "explanation": "Os ácidos graxos ativados entram na matriz mitocondrial via lançadeira de carnitina e passam pela beta-oxidação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q95",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Lipídios",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #95).\n\nQual lipoproteína é responsável pelo transporte reverso do colesterol dos tecidos periféricos para o fígado?",
    "options": [
      "VLDL",
      "LDL",
      "HDL",
      "Quilomícron"
    ],
    "correctIndex": 2,
    "explanation": "O HDL realiza o transporte reverso do colesterol, retirando excesso de colesterol dos tecidos e vasos para depuração hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q96",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Proteínas",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #96).\n\nO ciclo da ureia ocorre no fígado para excretar a amônia tóxica, sendo sua primeira enzima mitocondrial a:",
    "options": [
      "Carbamil-fosfato sintetase I (CPS-I)",
      "Ornitina transcarbamilase",
      "Argininosuccinato sintetase",
      "Arginase"
    ],
    "correctIndex": 0,
    "explanation": "A CPS-I condensa amônia e bicarbonato em carbamil-fosfato na matriz mitocondrial hepática.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q97",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Enzimologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #97).\n\nUm inibidor competitivo de uma reação enzimática altera os parâmetros cinéticos de Michaelis-Menten de qual forma?",
    "options": [
      "Aumenta o Km aparente mantendo a Vmax inalterada",
      "Diminui a Vmax mantendo o Km inalterado",
      "Diminui tanto o Km quanto a Vmax",
      "Aumenta a Vmax e diminui o Km"
    ],
    "correctIndex": 0,
    "explanation": "Inibidores competitivos competem pelo sítio ativo com o substrato, aumentando o Km aparente sem alterar a Vmax.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q98",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Via das Pentoses",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #98).\n\nA via das pentoses fosfato gera NADPH fundamental para a síntese lipídica e defesa antioxidante através da enzima chave:",
    "options": [
      "Glicose-6-fosfato desidrogenase (G6PD)",
      "Transcetolase",
      "Aldolase B",
      "Frutocinase"
    ],
    "correctIndex": 0,
    "explanation": "A G6PD catalisa o passo limitante da via das pentoses, gerando NADPH essencial para a glutationa redutase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q99",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Integração Metabólica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #99).\n\nNo estado de jejum prolongado, o cérebro adapta-se para utilizar como fonte alternativa de energia os:",
    "options": [
      "Corpos cetônicos (acetoacetato e beta-hidroxibutirato)",
      "Ácidos graxos livres de cadeia longa",
      "Aminoácidos ramificados intactos",
      "Triglicerídeos plasmáticos"
    ],
    "correctIndex": 0,
    "explanation": "Corpos cetônicos sintetizados pelo fígado atravessam a barreira hematoencefálica e suprem até 70% das necessidades energéticas do cérebro no jejum.",
    "difficulty": "medium"
  },
  {
    "id": "basico_bioquimica_q100",
    "cycle": "Ciclo Básico",
    "subject": "Bioquímica",
    "subSubject": "Metabolismo de Glicogênio",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #100).\n\nA quebra do glicogênio hepático (glicogenólise) é ativada no jejum por fosforilação da glicogênio fosforilase sob ação do:",
    "options": [
      "Glucagon e Adrenalina",
      "Insulina",
      "Cortisol",
      "Hormônio do Crescimento (GH)"
    ],
    "correctIndex": 0,
    "explanation": "O glucagon (no fígado) e a adrenalina (no músculo) ativam a cascata do AMPc/PKA, ativando a glicogênio fosforilase.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q1",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #1).\n\nO epitélio de revestimento da traqueia e brônquios principais é classificado histologicamente como:",
    "options": [
      "Epitélio estratificado pavimentoso não queratinizado",
      "Epitélio pseudoestratificado cilíndrico ciliado com células caliciformes",
      "Epitélio simples cúbico com microvilosidades",
      "Epitélio de transição (urotélio)"
    ],
    "correctIndex": 1,
    "explanation": "O aparelho respiratório de condução é revestido por epitélio pseudoestratificado cilíndrico ciliado rico em células caliciformes produtoras de muco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q2",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #2).\n\nQual junção celular de ancoragem conecta o citoesqueleto de filamentos intermediários da célula epitelial à lâmina basal?",
    "options": [
      "Desmossomo (macula adherens)",
      "Hemidesmossomo",
      "Junção comunicante (gap)",
      "Zônula de oclusão"
    ],
    "correctIndex": 1,
    "explanation": "Os hemidesmossomos ancoram a membrana plasmática basal das células epiteliais à lâmina basal subjacente por meio de integrinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q3",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Conjuntivo",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #3).\n\nA célula do tecido conjuntivo propriamente dito responsável pela síntese do colágeno, elastina e matriz extracelular é o:",
    "options": [
      "Fibroblasto",
      "Macrófago",
      "Mastócito",
      "Plasmócito"
    ],
    "correctIndex": 0,
    "explanation": "O fibroblasto é a célula principal e mais abundante do tecido conjuntivo, sintetizando a matriz extracelular e as fibras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q4",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Ósseo",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #4).\n\nA célula multinucleada derivada da linhagem monocítica responsável pela reabsorção da matriz óssea é o:",
    "options": [
      "Osteoblasto",
      "Osteócito",
      "Osteoclasto",
      "Osteoprogenitora"
    ],
    "correctIndex": 2,
    "explanation": "Os osteoclastos são células multinucleadas gigantes especializadas na reabsorção óssea pela secreção de ácidos e proteases.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q5",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Muscular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #5).\n\nNo sarcômero do músculo estriado esquelético, os filamentos finos são compostos predominantemente por:",
    "options": [
      "Miosina",
      "Actina, tropomiosina e troponina",
      "Titina e nebulina",
      "Desmina"
    ],
    "correctIndex": 1,
    "explanation": "Os filamentos finos são constituídos por polímeros de actina F associados ao complexo regulador de tropomiosina e troponinas (TnI, TnT, TnC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q6",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Nervoso",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #6).\n\nAs células da glia responsáveis pela formação da bainha de mielina no Sistema Nervoso Central (SNC) são os:",
    "options": [
      "Oligodendrócitos",
      "Células de Schwann",
      "Astrócitos",
      "Micróglia"
    ],
    "correctIndex": 0,
    "explanation": "Os oligodendrócitos mielinizam múltiplos axônios no SNC, enquanto as células de Schwann mielinizam no SNP.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q7",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sangue",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #7).\n\nA célula sanguínea anucleada em forma de disco bicôncavo rica em hemoglobina é o:",
    "options": [
      "Eritrócito (hemácia)",
      "Plaqueta (trombócito)",
      "Neutrófilo",
      "Linfócito"
    ],
    "correctIndex": 0,
    "explanation": "Os eritrócitos maduros no sangue periférico humano são anucleados e otimizados para o transporte de O2 e CO2.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q8",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Órgãos Linfoides",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #8).\n\nA polpa vermelha do baço desempenha principalmente a função de:",
    "options": [
      "Filtragem sanguínea e remoção de eritrócitos senescentes (hemocaterese)",
      "Apresentação de antígenos por células dendríticas tímicas",
      "Produção de imunoglobulina A secretora",
      "Maturação de linfócitos T"
    ],
    "correctIndex": 0,
    "explanation": "A polpa vermelha esplênica é formada por sinusóides venosos e cordões de Billroth, atuando na hemocaterese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q9",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Pele e Anexos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #9).\n\nA camada mais superficial da epiderme constituída por células mortas anucleadas repleta de queratina é o:",
    "options": [
      "Estrato basal",
      "Estrato espinhoso",
      "Estrato granuloso",
      "Estrato córneo"
    ],
    "correctIndex": 3,
    "explanation": "O estrato córneo é composto por camadas de corneócitos mortos e descamativos achatados impregnados de queratina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q10",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sistema Renal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #10).\n\nOs podócitos com seus pedicelos interdigitados compõem o folheto visceral da cápsula de Bowman revestindo os capilares do:",
    "options": [
      "Glomérulo renal",
      "Túbulo contorcido proximal",
      "Alça de Henle",
      "Duto coletor"
    ],
    "correctIndex": 0,
    "explanation": "Os podócitos revestem externamente os capilares fenestrados do glomérulo renal, formando fendas de filtração.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q11",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #11).\n\nO epitélio de revestimento da traqueia e brônquios principais é classificado histologicamente como:",
    "options": [
      "Epitélio estratificado pavimentoso não queratinizado",
      "Epitélio pseudoestratificado cilíndrico ciliado com células caliciformes",
      "Epitélio simples cúbico com microvilosidades",
      "Epitélio de transição (urotélio)"
    ],
    "correctIndex": 1,
    "explanation": "O aparelho respiratório de condução é revestido por epitélio pseudoestratificado cilíndrico ciliado rico em células caliciformes produtoras de muco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q12",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #12).\n\nQual junção celular de ancoragem conecta o citoesqueleto de filamentos intermediários da célula epitelial à lâmina basal?",
    "options": [
      "Desmossomo (macula adherens)",
      "Hemidesmossomo",
      "Junção comunicante (gap)",
      "Zônula de oclusão"
    ],
    "correctIndex": 1,
    "explanation": "Os hemidesmossomos ancoram a membrana plasmática basal das células epiteliais à lâmina basal subjacente por meio de integrinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q13",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Conjuntivo",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #13).\n\nA célula do tecido conjuntivo propriamente dito responsável pela síntese do colágeno, elastina e matriz extracelular é o:",
    "options": [
      "Fibroblasto",
      "Macrófago",
      "Mastócito",
      "Plasmócito"
    ],
    "correctIndex": 0,
    "explanation": "O fibroblasto é a célula principal e mais abundante do tecido conjuntivo, sintetizando a matriz extracelular e as fibras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q14",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Ósseo",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #14).\n\nA célula multinucleada derivada da linhagem monocítica responsável pela reabsorção da matriz óssea é o:",
    "options": [
      "Osteoblasto",
      "Osteócito",
      "Osteoclasto",
      "Osteoprogenitora"
    ],
    "correctIndex": 2,
    "explanation": "Os osteoclastos são células multinucleadas gigantes especializadas na reabsorção óssea pela secreção de ácidos e proteases.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q15",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Muscular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #15).\n\nNo sarcômero do músculo estriado esquelético, os filamentos finos são compostos predominantemente por:",
    "options": [
      "Miosina",
      "Actina, tropomiosina e troponina",
      "Titina e nebulina",
      "Desmina"
    ],
    "correctIndex": 1,
    "explanation": "Os filamentos finos são constituídos por polímeros de actina F associados ao complexo regulador de tropomiosina e troponinas (TnI, TnT, TnC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q16",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Nervoso",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #16).\n\nAs células da glia responsáveis pela formação da bainha de mielina no Sistema Nervoso Central (SNC) são os:",
    "options": [
      "Oligodendrócitos",
      "Células de Schwann",
      "Astrócitos",
      "Micróglia"
    ],
    "correctIndex": 0,
    "explanation": "Os oligodendrócitos mielinizam múltiplos axônios no SNC, enquanto as células de Schwann mielinizam no SNP.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q17",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sangue",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #17).\n\nA célula sanguínea anucleada em forma de disco bicôncavo rica em hemoglobina é o:",
    "options": [
      "Eritrócito (hemácia)",
      "Plaqueta (trombócito)",
      "Neutrófilo",
      "Linfócito"
    ],
    "correctIndex": 0,
    "explanation": "Os eritrócitos maduros no sangue periférico humano são anucleados e otimizados para o transporte de O2 e CO2.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q18",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Órgãos Linfoides",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #18).\n\nA polpa vermelha do baço desempenha principalmente a função de:",
    "options": [
      "Filtragem sanguínea e remoção de eritrócitos senescentes (hemocaterese)",
      "Apresentação de antígenos por células dendríticas tímicas",
      "Produção de imunoglobulina A secretora",
      "Maturação de linfócitos T"
    ],
    "correctIndex": 0,
    "explanation": "A polpa vermelha esplênica é formada por sinusóides venosos e cordões de Billroth, atuando na hemocaterese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q19",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Pele e Anexos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #19).\n\nA camada mais superficial da epiderme constituída por células mortas anucleadas repleta de queratina é o:",
    "options": [
      "Estrato basal",
      "Estrato espinhoso",
      "Estrato granuloso",
      "Estrato córneo"
    ],
    "correctIndex": 3,
    "explanation": "O estrato córneo é composto por camadas de corneócitos mortos e descamativos achatados impregnados de queratina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q20",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sistema Renal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #20).\n\nOs podócitos com seus pedicelos interdigitados compõem o folheto visceral da cápsula de Bowman revestindo os capilares do:",
    "options": [
      "Glomérulo renal",
      "Túbulo contorcido proximal",
      "Alça de Henle",
      "Duto coletor"
    ],
    "correctIndex": 0,
    "explanation": "Os podócitos revestem externamente os capilares fenestrados do glomérulo renal, formando fendas de filtração.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q21",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #21).\n\nO epitélio de revestimento da traqueia e brônquios principais é classificado histologicamente como:",
    "options": [
      "Epitélio estratificado pavimentoso não queratinizado",
      "Epitélio pseudoestratificado cilíndrico ciliado com células caliciformes",
      "Epitélio simples cúbico com microvilosidades",
      "Epitélio de transição (urotélio)"
    ],
    "correctIndex": 1,
    "explanation": "O aparelho respiratório de condução é revestido por epitélio pseudoestratificado cilíndrico ciliado rico em células caliciformes produtoras de muco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q22",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #22).\n\nQual junção celular de ancoragem conecta o citoesqueleto de filamentos intermediários da célula epitelial à lâmina basal?",
    "options": [
      "Desmossomo (macula adherens)",
      "Hemidesmossomo",
      "Junção comunicante (gap)",
      "Zônula de oclusão"
    ],
    "correctIndex": 1,
    "explanation": "Os hemidesmossomos ancoram a membrana plasmática basal das células epiteliais à lâmina basal subjacente por meio de integrinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q23",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Conjuntivo",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #23).\n\nA célula do tecido conjuntivo propriamente dito responsável pela síntese do colágeno, elastina e matriz extracelular é o:",
    "options": [
      "Fibroblasto",
      "Macrófago",
      "Mastócito",
      "Plasmócito"
    ],
    "correctIndex": 0,
    "explanation": "O fibroblasto é a célula principal e mais abundante do tecido conjuntivo, sintetizando a matriz extracelular e as fibras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q24",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Ósseo",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #24).\n\nA célula multinucleada derivada da linhagem monocítica responsável pela reabsorção da matriz óssea é o:",
    "options": [
      "Osteoblasto",
      "Osteócito",
      "Osteoclasto",
      "Osteoprogenitora"
    ],
    "correctIndex": 2,
    "explanation": "Os osteoclastos são células multinucleadas gigantes especializadas na reabsorção óssea pela secreção de ácidos e proteases.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q25",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Muscular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #25).\n\nNo sarcômero do músculo estriado esquelético, os filamentos finos são compostos predominantemente por:",
    "options": [
      "Miosina",
      "Actina, tropomiosina e troponina",
      "Titina e nebulina",
      "Desmina"
    ],
    "correctIndex": 1,
    "explanation": "Os filamentos finos são constituídos por polímeros de actina F associados ao complexo regulador de tropomiosina e troponinas (TnI, TnT, TnC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q26",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Nervoso",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #26).\n\nAs células da glia responsáveis pela formação da bainha de mielina no Sistema Nervoso Central (SNC) são os:",
    "options": [
      "Oligodendrócitos",
      "Células de Schwann",
      "Astrócitos",
      "Micróglia"
    ],
    "correctIndex": 0,
    "explanation": "Os oligodendrócitos mielinizam múltiplos axônios no SNC, enquanto as células de Schwann mielinizam no SNP.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q27",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sangue",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #27).\n\nA célula sanguínea anucleada em forma de disco bicôncavo rica em hemoglobina é o:",
    "options": [
      "Eritrócito (hemácia)",
      "Plaqueta (trombócito)",
      "Neutrófilo",
      "Linfócito"
    ],
    "correctIndex": 0,
    "explanation": "Os eritrócitos maduros no sangue periférico humano são anucleados e otimizados para o transporte de O2 e CO2.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q28",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Órgãos Linfoides",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #28).\n\nA polpa vermelha do baço desempenha principalmente a função de:",
    "options": [
      "Filtragem sanguínea e remoção de eritrócitos senescentes (hemocaterese)",
      "Apresentação de antígenos por células dendríticas tímicas",
      "Produção de imunoglobulina A secretora",
      "Maturação de linfócitos T"
    ],
    "correctIndex": 0,
    "explanation": "A polpa vermelha esplênica é formada por sinusóides venosos e cordões de Billroth, atuando na hemocaterese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q29",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Pele e Anexos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #29).\n\nA camada mais superficial da epiderme constituída por células mortas anucleadas repleta de queratina é o:",
    "options": [
      "Estrato basal",
      "Estrato espinhoso",
      "Estrato granuloso",
      "Estrato córneo"
    ],
    "correctIndex": 3,
    "explanation": "O estrato córneo é composto por camadas de corneócitos mortos e descamativos achatados impregnados de queratina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q30",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sistema Renal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #30).\n\nOs podócitos com seus pedicelos interdigitados compõem o folheto visceral da cápsula de Bowman revestindo os capilares do:",
    "options": [
      "Glomérulo renal",
      "Túbulo contorcido proximal",
      "Alça de Henle",
      "Duto coletor"
    ],
    "correctIndex": 0,
    "explanation": "Os podócitos revestem externamente os capilares fenestrados do glomérulo renal, formando fendas de filtração.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q31",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #31).\n\nO epitélio de revestimento da traqueia e brônquios principais é classificado histologicamente como:",
    "options": [
      "Epitélio estratificado pavimentoso não queratinizado",
      "Epitélio pseudoestratificado cilíndrico ciliado com células caliciformes",
      "Epitélio simples cúbico com microvilosidades",
      "Epitélio de transição (urotélio)"
    ],
    "correctIndex": 1,
    "explanation": "O aparelho respiratório de condução é revestido por epitélio pseudoestratificado cilíndrico ciliado rico em células caliciformes produtoras de muco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q32",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #32).\n\nQual junção celular de ancoragem conecta o citoesqueleto de filamentos intermediários da célula epitelial à lâmina basal?",
    "options": [
      "Desmossomo (macula adherens)",
      "Hemidesmossomo",
      "Junção comunicante (gap)",
      "Zônula de oclusão"
    ],
    "correctIndex": 1,
    "explanation": "Os hemidesmossomos ancoram a membrana plasmática basal das células epiteliais à lâmina basal subjacente por meio de integrinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q33",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Conjuntivo",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #33).\n\nA célula do tecido conjuntivo propriamente dito responsável pela síntese do colágeno, elastina e matriz extracelular é o:",
    "options": [
      "Fibroblasto",
      "Macrófago",
      "Mastócito",
      "Plasmócito"
    ],
    "correctIndex": 0,
    "explanation": "O fibroblasto é a célula principal e mais abundante do tecido conjuntivo, sintetizando a matriz extracelular e as fibras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q34",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Ósseo",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #34).\n\nA célula multinucleada derivada da linhagem monocítica responsável pela reabsorção da matriz óssea é o:",
    "options": [
      "Osteoblasto",
      "Osteócito",
      "Osteoclasto",
      "Osteoprogenitora"
    ],
    "correctIndex": 2,
    "explanation": "Os osteoclastos são células multinucleadas gigantes especializadas na reabsorção óssea pela secreção de ácidos e proteases.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q35",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Muscular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #35).\n\nNo sarcômero do músculo estriado esquelético, os filamentos finos são compostos predominantemente por:",
    "options": [
      "Miosina",
      "Actina, tropomiosina e troponina",
      "Titina e nebulina",
      "Desmina"
    ],
    "correctIndex": 1,
    "explanation": "Os filamentos finos são constituídos por polímeros de actina F associados ao complexo regulador de tropomiosina e troponinas (TnI, TnT, TnC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q36",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Nervoso",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #36).\n\nAs células da glia responsáveis pela formação da bainha de mielina no Sistema Nervoso Central (SNC) são os:",
    "options": [
      "Oligodendrócitos",
      "Células de Schwann",
      "Astrócitos",
      "Micróglia"
    ],
    "correctIndex": 0,
    "explanation": "Os oligodendrócitos mielinizam múltiplos axônios no SNC, enquanto as células de Schwann mielinizam no SNP.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q37",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sangue",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #37).\n\nA célula sanguínea anucleada em forma de disco bicôncavo rica em hemoglobina é o:",
    "options": [
      "Eritrócito (hemácia)",
      "Plaqueta (trombócito)",
      "Neutrófilo",
      "Linfócito"
    ],
    "correctIndex": 0,
    "explanation": "Os eritrócitos maduros no sangue periférico humano são anucleados e otimizados para o transporte de O2 e CO2.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q38",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Órgãos Linfoides",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #38).\n\nA polpa vermelha do baço desempenha principalmente a função de:",
    "options": [
      "Filtragem sanguínea e remoção de eritrócitos senescentes (hemocaterese)",
      "Apresentação de antígenos por células dendríticas tímicas",
      "Produção de imunoglobulina A secretora",
      "Maturação de linfócitos T"
    ],
    "correctIndex": 0,
    "explanation": "A polpa vermelha esplênica é formada por sinusóides venosos e cordões de Billroth, atuando na hemocaterese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q39",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Pele e Anexos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #39).\n\nA camada mais superficial da epiderme constituída por células mortas anucleadas repleta de queratina é o:",
    "options": [
      "Estrato basal",
      "Estrato espinhoso",
      "Estrato granuloso",
      "Estrato córneo"
    ],
    "correctIndex": 3,
    "explanation": "O estrato córneo é composto por camadas de corneócitos mortos e descamativos achatados impregnados de queratina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q40",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sistema Renal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #40).\n\nOs podócitos com seus pedicelos interdigitados compõem o folheto visceral da cápsula de Bowman revestindo os capilares do:",
    "options": [
      "Glomérulo renal",
      "Túbulo contorcido proximal",
      "Alça de Henle",
      "Duto coletor"
    ],
    "correctIndex": 0,
    "explanation": "Os podócitos revestem externamente os capilares fenestrados do glomérulo renal, formando fendas de filtração.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q41",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #41).\n\nO epitélio de revestimento da traqueia e brônquios principais é classificado histologicamente como:",
    "options": [
      "Epitélio estratificado pavimentoso não queratinizado",
      "Epitélio pseudoestratificado cilíndrico ciliado com células caliciformes",
      "Epitélio simples cúbico com microvilosidades",
      "Epitélio de transição (urotélio)"
    ],
    "correctIndex": 1,
    "explanation": "O aparelho respiratório de condução é revestido por epitélio pseudoestratificado cilíndrico ciliado rico em células caliciformes produtoras de muco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q42",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #42).\n\nQual junção celular de ancoragem conecta o citoesqueleto de filamentos intermediários da célula epitelial à lâmina basal?",
    "options": [
      "Desmossomo (macula adherens)",
      "Hemidesmossomo",
      "Junção comunicante (gap)",
      "Zônula de oclusão"
    ],
    "correctIndex": 1,
    "explanation": "Os hemidesmossomos ancoram a membrana plasmática basal das células epiteliais à lâmina basal subjacente por meio de integrinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q43",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Conjuntivo",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #43).\n\nA célula do tecido conjuntivo propriamente dito responsável pela síntese do colágeno, elastina e matriz extracelular é o:",
    "options": [
      "Fibroblasto",
      "Macrófago",
      "Mastócito",
      "Plasmócito"
    ],
    "correctIndex": 0,
    "explanation": "O fibroblasto é a célula principal e mais abundante do tecido conjuntivo, sintetizando a matriz extracelular e as fibras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q44",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Ósseo",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #44).\n\nA célula multinucleada derivada da linhagem monocítica responsável pela reabsorção da matriz óssea é o:",
    "options": [
      "Osteoblasto",
      "Osteócito",
      "Osteoclasto",
      "Osteoprogenitora"
    ],
    "correctIndex": 2,
    "explanation": "Os osteoclastos são células multinucleadas gigantes especializadas na reabsorção óssea pela secreção de ácidos e proteases.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q45",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Muscular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #45).\n\nNo sarcômero do músculo estriado esquelético, os filamentos finos são compostos predominantemente por:",
    "options": [
      "Miosina",
      "Actina, tropomiosina e troponina",
      "Titina e nebulina",
      "Desmina"
    ],
    "correctIndex": 1,
    "explanation": "Os filamentos finos são constituídos por polímeros de actina F associados ao complexo regulador de tropomiosina e troponinas (TnI, TnT, TnC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q46",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Nervoso",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #46).\n\nAs células da glia responsáveis pela formação da bainha de mielina no Sistema Nervoso Central (SNC) são os:",
    "options": [
      "Oligodendrócitos",
      "Células de Schwann",
      "Astrócitos",
      "Micróglia"
    ],
    "correctIndex": 0,
    "explanation": "Os oligodendrócitos mielinizam múltiplos axônios no SNC, enquanto as células de Schwann mielinizam no SNP.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q47",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sangue",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #47).\n\nA célula sanguínea anucleada em forma de disco bicôncavo rica em hemoglobina é o:",
    "options": [
      "Eritrócito (hemácia)",
      "Plaqueta (trombócito)",
      "Neutrófilo",
      "Linfócito"
    ],
    "correctIndex": 0,
    "explanation": "Os eritrócitos maduros no sangue periférico humano são anucleados e otimizados para o transporte de O2 e CO2.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q48",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Órgãos Linfoides",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #48).\n\nA polpa vermelha do baço desempenha principalmente a função de:",
    "options": [
      "Filtragem sanguínea e remoção de eritrócitos senescentes (hemocaterese)",
      "Apresentação de antígenos por células dendríticas tímicas",
      "Produção de imunoglobulina A secretora",
      "Maturação de linfócitos T"
    ],
    "correctIndex": 0,
    "explanation": "A polpa vermelha esplênica é formada por sinusóides venosos e cordões de Billroth, atuando na hemocaterese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q49",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Pele e Anexos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #49).\n\nA camada mais superficial da epiderme constituída por células mortas anucleadas repleta de queratina é o:",
    "options": [
      "Estrato basal",
      "Estrato espinhoso",
      "Estrato granuloso",
      "Estrato córneo"
    ],
    "correctIndex": 3,
    "explanation": "O estrato córneo é composto por camadas de corneócitos mortos e descamativos achatados impregnados de queratina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q50",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sistema Renal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #50).\n\nOs podócitos com seus pedicelos interdigitados compõem o folheto visceral da cápsula de Bowman revestindo os capilares do:",
    "options": [
      "Glomérulo renal",
      "Túbulo contorcido proximal",
      "Alça de Henle",
      "Duto coletor"
    ],
    "correctIndex": 0,
    "explanation": "Os podócitos revestem externamente os capilares fenestrados do glomérulo renal, formando fendas de filtração.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q51",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #51).\n\nO epitélio de revestimento da traqueia e brônquios principais é classificado histologicamente como:",
    "options": [
      "Epitélio estratificado pavimentoso não queratinizado",
      "Epitélio pseudoestratificado cilíndrico ciliado com células caliciformes",
      "Epitélio simples cúbico com microvilosidades",
      "Epitélio de transição (urotélio)"
    ],
    "correctIndex": 1,
    "explanation": "O aparelho respiratório de condução é revestido por epitélio pseudoestratificado cilíndrico ciliado rico em células caliciformes produtoras de muco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q52",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #52).\n\nQual junção celular de ancoragem conecta o citoesqueleto de filamentos intermediários da célula epitelial à lâmina basal?",
    "options": [
      "Desmossomo (macula adherens)",
      "Hemidesmossomo",
      "Junção comunicante (gap)",
      "Zônula de oclusão"
    ],
    "correctIndex": 1,
    "explanation": "Os hemidesmossomos ancoram a membrana plasmática basal das células epiteliais à lâmina basal subjacente por meio de integrinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q53",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Conjuntivo",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #53).\n\nA célula do tecido conjuntivo propriamente dito responsável pela síntese do colágeno, elastina e matriz extracelular é o:",
    "options": [
      "Fibroblasto",
      "Macrófago",
      "Mastócito",
      "Plasmócito"
    ],
    "correctIndex": 0,
    "explanation": "O fibroblasto é a célula principal e mais abundante do tecido conjuntivo, sintetizando a matriz extracelular e as fibras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q54",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Ósseo",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #54).\n\nA célula multinucleada derivada da linhagem monocítica responsável pela reabsorção da matriz óssea é o:",
    "options": [
      "Osteoblasto",
      "Osteócito",
      "Osteoclasto",
      "Osteoprogenitora"
    ],
    "correctIndex": 2,
    "explanation": "Os osteoclastos são células multinucleadas gigantes especializadas na reabsorção óssea pela secreção de ácidos e proteases.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q55",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Muscular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #55).\n\nNo sarcômero do músculo estriado esquelético, os filamentos finos são compostos predominantemente por:",
    "options": [
      "Miosina",
      "Actina, tropomiosina e troponina",
      "Titina e nebulina",
      "Desmina"
    ],
    "correctIndex": 1,
    "explanation": "Os filamentos finos são constituídos por polímeros de actina F associados ao complexo regulador de tropomiosina e troponinas (TnI, TnT, TnC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q56",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Nervoso",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #56).\n\nAs células da glia responsáveis pela formação da bainha de mielina no Sistema Nervoso Central (SNC) são os:",
    "options": [
      "Oligodendrócitos",
      "Células de Schwann",
      "Astrócitos",
      "Micróglia"
    ],
    "correctIndex": 0,
    "explanation": "Os oligodendrócitos mielinizam múltiplos axônios no SNC, enquanto as células de Schwann mielinizam no SNP.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q57",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sangue",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #57).\n\nA célula sanguínea anucleada em forma de disco bicôncavo rica em hemoglobina é o:",
    "options": [
      "Eritrócito (hemácia)",
      "Plaqueta (trombócito)",
      "Neutrófilo",
      "Linfócito"
    ],
    "correctIndex": 0,
    "explanation": "Os eritrócitos maduros no sangue periférico humano são anucleados e otimizados para o transporte de O2 e CO2.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q58",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Órgãos Linfoides",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #58).\n\nA polpa vermelha do baço desempenha principalmente a função de:",
    "options": [
      "Filtragem sanguínea e remoção de eritrócitos senescentes (hemocaterese)",
      "Apresentação de antígenos por células dendríticas tímicas",
      "Produção de imunoglobulina A secretora",
      "Maturação de linfócitos T"
    ],
    "correctIndex": 0,
    "explanation": "A polpa vermelha esplênica é formada por sinusóides venosos e cordões de Billroth, atuando na hemocaterese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q59",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Pele e Anexos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #59).\n\nA camada mais superficial da epiderme constituída por células mortas anucleadas repleta de queratina é o:",
    "options": [
      "Estrato basal",
      "Estrato espinhoso",
      "Estrato granuloso",
      "Estrato córneo"
    ],
    "correctIndex": 3,
    "explanation": "O estrato córneo é composto por camadas de corneócitos mortos e descamativos achatados impregnados de queratina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q60",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sistema Renal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #60).\n\nOs podócitos com seus pedicelos interdigitados compõem o folheto visceral da cápsula de Bowman revestindo os capilares do:",
    "options": [
      "Glomérulo renal",
      "Túbulo contorcido proximal",
      "Alça de Henle",
      "Duto coletor"
    ],
    "correctIndex": 0,
    "explanation": "Os podócitos revestem externamente os capilares fenestrados do glomérulo renal, formando fendas de filtração.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q61",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #61).\n\nO epitélio de revestimento da traqueia e brônquios principais é classificado histologicamente como:",
    "options": [
      "Epitélio estratificado pavimentoso não queratinizado",
      "Epitélio pseudoestratificado cilíndrico ciliado com células caliciformes",
      "Epitélio simples cúbico com microvilosidades",
      "Epitélio de transição (urotélio)"
    ],
    "correctIndex": 1,
    "explanation": "O aparelho respiratório de condução é revestido por epitélio pseudoestratificado cilíndrico ciliado rico em células caliciformes produtoras de muco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q62",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #62).\n\nQual junção celular de ancoragem conecta o citoesqueleto de filamentos intermediários da célula epitelial à lâmina basal?",
    "options": [
      "Desmossomo (macula adherens)",
      "Hemidesmossomo",
      "Junção comunicante (gap)",
      "Zônula de oclusão"
    ],
    "correctIndex": 1,
    "explanation": "Os hemidesmossomos ancoram a membrana plasmática basal das células epiteliais à lâmina basal subjacente por meio de integrinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q63",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Conjuntivo",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #63).\n\nA célula do tecido conjuntivo propriamente dito responsável pela síntese do colágeno, elastina e matriz extracelular é o:",
    "options": [
      "Fibroblasto",
      "Macrófago",
      "Mastócito",
      "Plasmócito"
    ],
    "correctIndex": 0,
    "explanation": "O fibroblasto é a célula principal e mais abundante do tecido conjuntivo, sintetizando a matriz extracelular e as fibras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q64",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Ósseo",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #64).\n\nA célula multinucleada derivada da linhagem monocítica responsável pela reabsorção da matriz óssea é o:",
    "options": [
      "Osteoblasto",
      "Osteócito",
      "Osteoclasto",
      "Osteoprogenitora"
    ],
    "correctIndex": 2,
    "explanation": "Os osteoclastos são células multinucleadas gigantes especializadas na reabsorção óssea pela secreção de ácidos e proteases.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q65",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Muscular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #65).\n\nNo sarcômero do músculo estriado esquelético, os filamentos finos são compostos predominantemente por:",
    "options": [
      "Miosina",
      "Actina, tropomiosina e troponina",
      "Titina e nebulina",
      "Desmina"
    ],
    "correctIndex": 1,
    "explanation": "Os filamentos finos são constituídos por polímeros de actina F associados ao complexo regulador de tropomiosina e troponinas (TnI, TnT, TnC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q66",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Nervoso",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #66).\n\nAs células da glia responsáveis pela formação da bainha de mielina no Sistema Nervoso Central (SNC) são os:",
    "options": [
      "Oligodendrócitos",
      "Células de Schwann",
      "Astrócitos",
      "Micróglia"
    ],
    "correctIndex": 0,
    "explanation": "Os oligodendrócitos mielinizam múltiplos axônios no SNC, enquanto as células de Schwann mielinizam no SNP.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q67",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sangue",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #67).\n\nA célula sanguínea anucleada em forma de disco bicôncavo rica em hemoglobina é o:",
    "options": [
      "Eritrócito (hemácia)",
      "Plaqueta (trombócito)",
      "Neutrófilo",
      "Linfócito"
    ],
    "correctIndex": 0,
    "explanation": "Os eritrócitos maduros no sangue periférico humano são anucleados e otimizados para o transporte de O2 e CO2.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q68",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Órgãos Linfoides",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #68).\n\nA polpa vermelha do baço desempenha principalmente a função de:",
    "options": [
      "Filtragem sanguínea e remoção de eritrócitos senescentes (hemocaterese)",
      "Apresentação de antígenos por células dendríticas tímicas",
      "Produção de imunoglobulina A secretora",
      "Maturação de linfócitos T"
    ],
    "correctIndex": 0,
    "explanation": "A polpa vermelha esplênica é formada por sinusóides venosos e cordões de Billroth, atuando na hemocaterese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q69",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Pele e Anexos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #69).\n\nA camada mais superficial da epiderme constituída por células mortas anucleadas repleta de queratina é o:",
    "options": [
      "Estrato basal",
      "Estrato espinhoso",
      "Estrato granuloso",
      "Estrato córneo"
    ],
    "correctIndex": 3,
    "explanation": "O estrato córneo é composto por camadas de corneócitos mortos e descamativos achatados impregnados de queratina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q70",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sistema Renal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #70).\n\nOs podócitos com seus pedicelos interdigitados compõem o folheto visceral da cápsula de Bowman revestindo os capilares do:",
    "options": [
      "Glomérulo renal",
      "Túbulo contorcido proximal",
      "Alça de Henle",
      "Duto coletor"
    ],
    "correctIndex": 0,
    "explanation": "Os podócitos revestem externamente os capilares fenestrados do glomérulo renal, formando fendas de filtração.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q71",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #71).\n\nO epitélio de revestimento da traqueia e brônquios principais é classificado histologicamente como:",
    "options": [
      "Epitélio estratificado pavimentoso não queratinizado",
      "Epitélio pseudoestratificado cilíndrico ciliado com células caliciformes",
      "Epitélio simples cúbico com microvilosidades",
      "Epitélio de transição (urotélio)"
    ],
    "correctIndex": 1,
    "explanation": "O aparelho respiratório de condução é revestido por epitélio pseudoestratificado cilíndrico ciliado rico em células caliciformes produtoras de muco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q72",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #72).\n\nQual junção celular de ancoragem conecta o citoesqueleto de filamentos intermediários da célula epitelial à lâmina basal?",
    "options": [
      "Desmossomo (macula adherens)",
      "Hemidesmossomo",
      "Junção comunicante (gap)",
      "Zônula de oclusão"
    ],
    "correctIndex": 1,
    "explanation": "Os hemidesmossomos ancoram a membrana plasmática basal das células epiteliais à lâmina basal subjacente por meio de integrinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q73",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Conjuntivo",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #73).\n\nA célula do tecido conjuntivo propriamente dito responsável pela síntese do colágeno, elastina e matriz extracelular é o:",
    "options": [
      "Fibroblasto",
      "Macrófago",
      "Mastócito",
      "Plasmócito"
    ],
    "correctIndex": 0,
    "explanation": "O fibroblasto é a célula principal e mais abundante do tecido conjuntivo, sintetizando a matriz extracelular e as fibras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q74",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Ósseo",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #74).\n\nA célula multinucleada derivada da linhagem monocítica responsável pela reabsorção da matriz óssea é o:",
    "options": [
      "Osteoblasto",
      "Osteócito",
      "Osteoclasto",
      "Osteoprogenitora"
    ],
    "correctIndex": 2,
    "explanation": "Os osteoclastos são células multinucleadas gigantes especializadas na reabsorção óssea pela secreção de ácidos e proteases.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q75",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Muscular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #75).\n\nNo sarcômero do músculo estriado esquelético, os filamentos finos são compostos predominantemente por:",
    "options": [
      "Miosina",
      "Actina, tropomiosina e troponina",
      "Titina e nebulina",
      "Desmina"
    ],
    "correctIndex": 1,
    "explanation": "Os filamentos finos são constituídos por polímeros de actina F associados ao complexo regulador de tropomiosina e troponinas (TnI, TnT, TnC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q76",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Nervoso",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #76).\n\nAs células da glia responsáveis pela formação da bainha de mielina no Sistema Nervoso Central (SNC) são os:",
    "options": [
      "Oligodendrócitos",
      "Células de Schwann",
      "Astrócitos",
      "Micróglia"
    ],
    "correctIndex": 0,
    "explanation": "Os oligodendrócitos mielinizam múltiplos axônios no SNC, enquanto as células de Schwann mielinizam no SNP.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q77",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sangue",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #77).\n\nA célula sanguínea anucleada em forma de disco bicôncavo rica em hemoglobina é o:",
    "options": [
      "Eritrócito (hemácia)",
      "Plaqueta (trombócito)",
      "Neutrófilo",
      "Linfócito"
    ],
    "correctIndex": 0,
    "explanation": "Os eritrócitos maduros no sangue periférico humano são anucleados e otimizados para o transporte de O2 e CO2.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q78",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Órgãos Linfoides",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #78).\n\nA polpa vermelha do baço desempenha principalmente a função de:",
    "options": [
      "Filtragem sanguínea e remoção de eritrócitos senescentes (hemocaterese)",
      "Apresentação de antígenos por células dendríticas tímicas",
      "Produção de imunoglobulina A secretora",
      "Maturação de linfócitos T"
    ],
    "correctIndex": 0,
    "explanation": "A polpa vermelha esplênica é formada por sinusóides venosos e cordões de Billroth, atuando na hemocaterese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q79",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Pele e Anexos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #79).\n\nA camada mais superficial da epiderme constituída por células mortas anucleadas repleta de queratina é o:",
    "options": [
      "Estrato basal",
      "Estrato espinhoso",
      "Estrato granuloso",
      "Estrato córneo"
    ],
    "correctIndex": 3,
    "explanation": "O estrato córneo é composto por camadas de corneócitos mortos e descamativos achatados impregnados de queratina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q80",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sistema Renal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #80).\n\nOs podócitos com seus pedicelos interdigitados compõem o folheto visceral da cápsula de Bowman revestindo os capilares do:",
    "options": [
      "Glomérulo renal",
      "Túbulo contorcido proximal",
      "Alça de Henle",
      "Duto coletor"
    ],
    "correctIndex": 0,
    "explanation": "Os podócitos revestem externamente os capilares fenestrados do glomérulo renal, formando fendas de filtração.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q81",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #81).\n\nO epitélio de revestimento da traqueia e brônquios principais é classificado histologicamente como:",
    "options": [
      "Epitélio estratificado pavimentoso não queratinizado",
      "Epitélio pseudoestratificado cilíndrico ciliado com células caliciformes",
      "Epitélio simples cúbico com microvilosidades",
      "Epitélio de transição (urotélio)"
    ],
    "correctIndex": 1,
    "explanation": "O aparelho respiratório de condução é revestido por epitélio pseudoestratificado cilíndrico ciliado rico em células caliciformes produtoras de muco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q82",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #82).\n\nQual junção celular de ancoragem conecta o citoesqueleto de filamentos intermediários da célula epitelial à lâmina basal?",
    "options": [
      "Desmossomo (macula adherens)",
      "Hemidesmossomo",
      "Junção comunicante (gap)",
      "Zônula de oclusão"
    ],
    "correctIndex": 1,
    "explanation": "Os hemidesmossomos ancoram a membrana plasmática basal das células epiteliais à lâmina basal subjacente por meio de integrinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q83",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Conjuntivo",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #83).\n\nA célula do tecido conjuntivo propriamente dito responsável pela síntese do colágeno, elastina e matriz extracelular é o:",
    "options": [
      "Fibroblasto",
      "Macrófago",
      "Mastócito",
      "Plasmócito"
    ],
    "correctIndex": 0,
    "explanation": "O fibroblasto é a célula principal e mais abundante do tecido conjuntivo, sintetizando a matriz extracelular e as fibras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q84",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Ósseo",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #84).\n\nA célula multinucleada derivada da linhagem monocítica responsável pela reabsorção da matriz óssea é o:",
    "options": [
      "Osteoblasto",
      "Osteócito",
      "Osteoclasto",
      "Osteoprogenitora"
    ],
    "correctIndex": 2,
    "explanation": "Os osteoclastos são células multinucleadas gigantes especializadas na reabsorção óssea pela secreção de ácidos e proteases.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q85",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Muscular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #85).\n\nNo sarcômero do músculo estriado esquelético, os filamentos finos são compostos predominantemente por:",
    "options": [
      "Miosina",
      "Actina, tropomiosina e troponina",
      "Titina e nebulina",
      "Desmina"
    ],
    "correctIndex": 1,
    "explanation": "Os filamentos finos são constituídos por polímeros de actina F associados ao complexo regulador de tropomiosina e troponinas (TnI, TnT, TnC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q86",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Nervoso",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #86).\n\nAs células da glia responsáveis pela formação da bainha de mielina no Sistema Nervoso Central (SNC) são os:",
    "options": [
      "Oligodendrócitos",
      "Células de Schwann",
      "Astrócitos",
      "Micróglia"
    ],
    "correctIndex": 0,
    "explanation": "Os oligodendrócitos mielinizam múltiplos axônios no SNC, enquanto as células de Schwann mielinizam no SNP.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q87",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sangue",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #87).\n\nA célula sanguínea anucleada em forma de disco bicôncavo rica em hemoglobina é o:",
    "options": [
      "Eritrócito (hemácia)",
      "Plaqueta (trombócito)",
      "Neutrófilo",
      "Linfócito"
    ],
    "correctIndex": 0,
    "explanation": "Os eritrócitos maduros no sangue periférico humano são anucleados e otimizados para o transporte de O2 e CO2.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q88",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Órgãos Linfoides",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #88).\n\nA polpa vermelha do baço desempenha principalmente a função de:",
    "options": [
      "Filtragem sanguínea e remoção de eritrócitos senescentes (hemocaterese)",
      "Apresentação de antígenos por células dendríticas tímicas",
      "Produção de imunoglobulina A secretora",
      "Maturação de linfócitos T"
    ],
    "correctIndex": 0,
    "explanation": "A polpa vermelha esplênica é formada por sinusóides venosos e cordões de Billroth, atuando na hemocaterese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q89",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Pele e Anexos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #89).\n\nA camada mais superficial da epiderme constituída por células mortas anucleadas repleta de queratina é o:",
    "options": [
      "Estrato basal",
      "Estrato espinhoso",
      "Estrato granuloso",
      "Estrato córneo"
    ],
    "correctIndex": 3,
    "explanation": "O estrato córneo é composto por camadas de corneócitos mortos e descamativos achatados impregnados de queratina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q90",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sistema Renal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #90).\n\nOs podócitos com seus pedicelos interdigitados compõem o folheto visceral da cápsula de Bowman revestindo os capilares do:",
    "options": [
      "Glomérulo renal",
      "Túbulo contorcido proximal",
      "Alça de Henle",
      "Duto coletor"
    ],
    "correctIndex": 0,
    "explanation": "Os podócitos revestem externamente os capilares fenestrados do glomérulo renal, formando fendas de filtração.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q91",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #91).\n\nO epitélio de revestimento da traqueia e brônquios principais é classificado histologicamente como:",
    "options": [
      "Epitélio estratificado pavimentoso não queratinizado",
      "Epitélio pseudoestratificado cilíndrico ciliado com células caliciformes",
      "Epitélio simples cúbico com microvilosidades",
      "Epitélio de transição (urotélio)"
    ],
    "correctIndex": 1,
    "explanation": "O aparelho respiratório de condução é revestido por epitélio pseudoestratificado cilíndrico ciliado rico em células caliciformes produtoras de muco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q92",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Epitelial",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #92).\n\nQual junção celular de ancoragem conecta o citoesqueleto de filamentos intermediários da célula epitelial à lâmina basal?",
    "options": [
      "Desmossomo (macula adherens)",
      "Hemidesmossomo",
      "Junção comunicante (gap)",
      "Zônula de oclusão"
    ],
    "correctIndex": 1,
    "explanation": "Os hemidesmossomos ancoram a membrana plasmática basal das células epiteliais à lâmina basal subjacente por meio de integrinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q93",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Conjuntivo",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #93).\n\nA célula do tecido conjuntivo propriamente dito responsável pela síntese do colágeno, elastina e matriz extracelular é o:",
    "options": [
      "Fibroblasto",
      "Macrófago",
      "Mastócito",
      "Plasmócito"
    ],
    "correctIndex": 0,
    "explanation": "O fibroblasto é a célula principal e mais abundante do tecido conjuntivo, sintetizando a matriz extracelular e as fibras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q94",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Ósseo",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #94).\n\nA célula multinucleada derivada da linhagem monocítica responsável pela reabsorção da matriz óssea é o:",
    "options": [
      "Osteoblasto",
      "Osteócito",
      "Osteoclasto",
      "Osteoprogenitora"
    ],
    "correctIndex": 2,
    "explanation": "Os osteoclastos são células multinucleadas gigantes especializadas na reabsorção óssea pela secreção de ácidos e proteases.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q95",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Muscular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #95).\n\nNo sarcômero do músculo estriado esquelético, os filamentos finos são compostos predominantemente por:",
    "options": [
      "Miosina",
      "Actina, tropomiosina e troponina",
      "Titina e nebulina",
      "Desmina"
    ],
    "correctIndex": 1,
    "explanation": "Os filamentos finos são constituídos por polímeros de actina F associados ao complexo regulador de tropomiosina e troponinas (TnI, TnT, TnC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q96",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Tecido Nervoso",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #96).\n\nAs células da glia responsáveis pela formação da bainha de mielina no Sistema Nervoso Central (SNC) são os:",
    "options": [
      "Oligodendrócitos",
      "Células de Schwann",
      "Astrócitos",
      "Micróglia"
    ],
    "correctIndex": 0,
    "explanation": "Os oligodendrócitos mielinizam múltiplos axônios no SNC, enquanto as células de Schwann mielinizam no SNP.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q97",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sangue",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #97).\n\nA célula sanguínea anucleada em forma de disco bicôncavo rica em hemoglobina é o:",
    "options": [
      "Eritrócito (hemácia)",
      "Plaqueta (trombócito)",
      "Neutrófilo",
      "Linfócito"
    ],
    "correctIndex": 0,
    "explanation": "Os eritrócitos maduros no sangue periférico humano são anucleados e otimizados para o transporte de O2 e CO2.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q98",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Órgãos Linfoides",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #98).\n\nA polpa vermelha do baço desempenha principalmente a função de:",
    "options": [
      "Filtragem sanguínea e remoção de eritrócitos senescentes (hemocaterese)",
      "Apresentação de antígenos por células dendríticas tímicas",
      "Produção de imunoglobulina A secretora",
      "Maturação de linfócitos T"
    ],
    "correctIndex": 0,
    "explanation": "A polpa vermelha esplênica é formada por sinusóides venosos e cordões de Billroth, atuando na hemocaterese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q99",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Pele e Anexos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #99).\n\nA camada mais superficial da epiderme constituída por células mortas anucleadas repleta de queratina é o:",
    "options": [
      "Estrato basal",
      "Estrato espinhoso",
      "Estrato granuloso",
      "Estrato córneo"
    ],
    "correctIndex": 3,
    "explanation": "O estrato córneo é composto por camadas de corneócitos mortos e descamativos achatados impregnados de queratina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_histologia_q100",
    "cycle": "Ciclo Básico",
    "subject": "Histologia",
    "subSubject": "Sistema Renal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #100).\n\nOs podócitos com seus pedicelos interdigitados compõem o folheto visceral da cápsula de Bowman revestindo os capilares do:",
    "options": [
      "Glomérulo renal",
      "Túbulo contorcido proximal",
      "Alça de Henle",
      "Duto coletor"
    ],
    "correctIndex": 0,
    "explanation": "Os podócitos revestem externamente os capilares fenestrados do glomérulo renal, formando fendas de filtração.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q1",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Primeira Semana",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #1).\n\nA implantação do blastocisto (nidação) no endométrio uterino ocorre normalmente cerca de quantos dias pós-fecundação?",
    "options": [
      "1 a 2 dias",
      "6 a 7 dias",
      "14 dias",
      "21 dias"
    ],
    "correctIndex": 1,
    "explanation": "A nidação inicia-se por volta do 6º ao 7º dia após a fertilização com a adesão do trofoblasto ao endométrio receptivo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q2",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Folhetos Germinativos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #2).\n\nA gastrulação marca o início da morfogênese embrionária com a formação da linha primitiva e estabelecimento dos:",
    "options": [
      "Três folhetos germinativos (ectoderma, mesoderma e endoderma)",
      "Anexos placentários maduros",
      "Quatro cavidades cardíacas",
      "Gânglios da raiz dorsal"
    ],
    "correctIndex": 0,
    "explanation": "A gastrulação converte o disco embrionário bilaminar em trilaminar (ectoderma, mesoderma e endoderma).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q3",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Neurulação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #3).\n\nAs células da crista neural migram pelo corpo do embrião dando origem a qual conjunto de estruturas?",
    "options": [
      "Gânglios sensitivos e autônomos, melanócitos e medula supra-renal",
      "Eritrócitos e miocárdio",
      "Fígado e pâncreas",
      "Músculo reto abdominal"
    ],
    "correctIndex": 0,
    "explanation": "A crista neural origina os gânglios nervosos periféricos, células de Schwann, melanócitos, esqueleto crânio-facial e medula adrenal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q4",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Cardiovascular Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #4).\n\nO desvio de sangue oxigenado da placenta no feto diretamente do átrio direito para o átrio esquerdo ocorre pelo:",
    "options": [
      "Forame oval (fossa oval pós-natal)",
      "Ducto arterioso (canal arterial)",
      "Ducto venoso",
      "Ventriculostomia"
    ],
    "correctIndex": 0,
    "explanation": "O forame oval permite a passagem do sangue bem oxigenado do átrio direito diretamente para o átrio esquerdo no feto.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q5",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Circulação Fetal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #5).\n\nO ducto venoso na circulação fetal conecta a veia umbilical diretamente à:",
    "options": [
      "Veia cava inferior",
      "Veia porta",
      "Veia cava superior",
      "Artéria pulmonar"
    ],
    "correctIndex": 0,
    "explanation": "O ducto venoso desvia o sangue oxigenado vindo da veia umbilical ultrapassando o sinusóide hepático para a veia cava inferior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q6",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Aparelho Faríngeo",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #6).\n\nO primeiro arco faríngeo (arco mandibular) é inervado por qual nervo craniano?",
    "options": [
      "Nervo trigêmeo (V par - ramo mandibular V3)",
      "Nervo facial (VII par)",
      "Nervo glossofaríngeo (IX par)",
      "Nervo vago (X par)"
    ],
    "correctIndex": 0,
    "explanation": "O 1º arco faríngeo é inervado pelo nervo trigêmeo (V3) e origina a mandíbula, maxila, martelo e bigorna.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q7",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Malformações Congênitas",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #7).\n\nA falha de fechamento do neuroporo posterior ao final da quarta semana embrionária resulta em:",
    "options": [
      "Espinha bífida (defeitos do tubo neural)",
      "Anencefalia",
      "Lábio leporino",
      "Atresia esofágica"
    ],
    "correctIndex": 0,
    "explanation": "O não fechamento do neuroporo posterior gera defeitos de fechamento do arco vertebral e tubo neural (espinha bífida).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q8",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Placentação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #8).\n\nO sinciciotrofoblasto erode os vasos endometriais maternos e secreta o hormônio indicador de gravidez precoce:",
    "options": [
      "Gonadotrofina coriônica humana (hCG)",
      "Progesterona placentária",
      "Lactogênio placentário",
      "Estradiol"
    ],
    "correctIndex": 0,
    "explanation": "O sinciciotrofoblasto produz hCG para manter o corpo lúteo no início da gestação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q9",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Digestório Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #9).\n\nA persistência do ducto onfalomesentérico (vitelino) pode originar no íleo terminal a malformação de:",
    "options": [
      "Divertículo de Meckel",
      "Megacólon congênito (Hirschsprung)",
      "Estenose hipertrófica do piloro",
      "Volvo intestinal"
    ],
    "correctIndex": 0,
    "explanation": "O divertículo de Meckel é um resquício do ducto vitelino localizado na borda antimesentérica do íleo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q10",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Urogenital Embrionário",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #10).\n\nO sistema renal definitivo humano desenvolve-se a partir de qual estrutura primórdio embrionária?",
    "options": [
      "Metanefro e broto ureteric",
      "Pronefro",
      "Mesonefro funcional",
      "Saco vitelino"
    ],
    "correctIndex": 0,
    "explanation": "O rim definitivo (metanefro) origina-se da interação entre o broto ureterórico e o blastema metanéfrico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q11",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Primeira Semana",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #11).\n\nA implantação do blastocisto (nidação) no endométrio uterino ocorre normalmente cerca de quantos dias pós-fecundação?",
    "options": [
      "1 a 2 dias",
      "6 a 7 dias",
      "14 dias",
      "21 dias"
    ],
    "correctIndex": 1,
    "explanation": "A nidação inicia-se por volta do 6º ao 7º dia após a fertilização com a adesão do trofoblasto ao endométrio receptivo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q12",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Folhetos Germinativos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #12).\n\nA gastrulação marca o início da morfogênese embrionária com a formação da linha primitiva e estabelecimento dos:",
    "options": [
      "Três folhetos germinativos (ectoderma, mesoderma e endoderma)",
      "Anexos placentários maduros",
      "Quatro cavidades cardíacas",
      "Gânglios da raiz dorsal"
    ],
    "correctIndex": 0,
    "explanation": "A gastrulação converte o disco embrionário bilaminar em trilaminar (ectoderma, mesoderma e endoderma).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q13",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Neurulação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #13).\n\nAs células da crista neural migram pelo corpo do embrião dando origem a qual conjunto de estruturas?",
    "options": [
      "Gânglios sensitivos e autônomos, melanócitos e medula supra-renal",
      "Eritrócitos e miocárdio",
      "Fígado e pâncreas",
      "Músculo reto abdominal"
    ],
    "correctIndex": 0,
    "explanation": "A crista neural origina os gânglios nervosos periféricos, células de Schwann, melanócitos, esqueleto crânio-facial e medula adrenal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q14",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Cardiovascular Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #14).\n\nO desvio de sangue oxigenado da placenta no feto diretamente do átrio direito para o átrio esquerdo ocorre pelo:",
    "options": [
      "Forame oval (fossa oval pós-natal)",
      "Ducto arterioso (canal arterial)",
      "Ducto venoso",
      "Ventriculostomia"
    ],
    "correctIndex": 0,
    "explanation": "O forame oval permite a passagem do sangue bem oxigenado do átrio direito diretamente para o átrio esquerdo no feto.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q15",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Circulação Fetal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #15).\n\nO ducto venoso na circulação fetal conecta a veia umbilical diretamente à:",
    "options": [
      "Veia cava inferior",
      "Veia porta",
      "Veia cava superior",
      "Artéria pulmonar"
    ],
    "correctIndex": 0,
    "explanation": "O ducto venoso desvia o sangue oxigenado vindo da veia umbilical ultrapassando o sinusóide hepático para a veia cava inferior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q16",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Aparelho Faríngeo",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #16).\n\nO primeiro arco faríngeo (arco mandibular) é inervado por qual nervo craniano?",
    "options": [
      "Nervo trigêmeo (V par - ramo mandibular V3)",
      "Nervo facial (VII par)",
      "Nervo glossofaríngeo (IX par)",
      "Nervo vago (X par)"
    ],
    "correctIndex": 0,
    "explanation": "O 1º arco faríngeo é inervado pelo nervo trigêmeo (V3) e origina a mandíbula, maxila, martelo e bigorna.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q17",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Malformações Congênitas",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #17).\n\nA falha de fechamento do neuroporo posterior ao final da quarta semana embrionária resulta em:",
    "options": [
      "Espinha bífida (defeitos do tubo neural)",
      "Anencefalia",
      "Lábio leporino",
      "Atresia esofágica"
    ],
    "correctIndex": 0,
    "explanation": "O não fechamento do neuroporo posterior gera defeitos de fechamento do arco vertebral e tubo neural (espinha bífida).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q18",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Placentação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #18).\n\nO sinciciotrofoblasto erode os vasos endometriais maternos e secreta o hormônio indicador de gravidez precoce:",
    "options": [
      "Gonadotrofina coriônica humana (hCG)",
      "Progesterona placentária",
      "Lactogênio placentário",
      "Estradiol"
    ],
    "correctIndex": 0,
    "explanation": "O sinciciotrofoblasto produz hCG para manter o corpo lúteo no início da gestação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q19",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Digestório Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #19).\n\nA persistência do ducto onfalomesentérico (vitelino) pode originar no íleo terminal a malformação de:",
    "options": [
      "Divertículo de Meckel",
      "Megacólon congênito (Hirschsprung)",
      "Estenose hipertrófica do piloro",
      "Volvo intestinal"
    ],
    "correctIndex": 0,
    "explanation": "O divertículo de Meckel é um resquício do ducto vitelino localizado na borda antimesentérica do íleo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q20",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Urogenital Embrionário",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #20).\n\nO sistema renal definitivo humano desenvolve-se a partir de qual estrutura primórdio embrionária?",
    "options": [
      "Metanefro e broto ureteric",
      "Pronefro",
      "Mesonefro funcional",
      "Saco vitelino"
    ],
    "correctIndex": 0,
    "explanation": "O rim definitivo (metanefro) origina-se da interação entre o broto ureterórico e o blastema metanéfrico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q21",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Primeira Semana",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #21).\n\nA implantação do blastocisto (nidação) no endométrio uterino ocorre normalmente cerca de quantos dias pós-fecundação?",
    "options": [
      "1 a 2 dias",
      "6 a 7 dias",
      "14 dias",
      "21 dias"
    ],
    "correctIndex": 1,
    "explanation": "A nidação inicia-se por volta do 6º ao 7º dia após a fertilização com a adesão do trofoblasto ao endométrio receptivo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q22",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Folhetos Germinativos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #22).\n\nA gastrulação marca o início da morfogênese embrionária com a formação da linha primitiva e estabelecimento dos:",
    "options": [
      "Três folhetos germinativos (ectoderma, mesoderma e endoderma)",
      "Anexos placentários maduros",
      "Quatro cavidades cardíacas",
      "Gânglios da raiz dorsal"
    ],
    "correctIndex": 0,
    "explanation": "A gastrulação converte o disco embrionário bilaminar em trilaminar (ectoderma, mesoderma e endoderma).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q23",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Neurulação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #23).\n\nAs células da crista neural migram pelo corpo do embrião dando origem a qual conjunto de estruturas?",
    "options": [
      "Gânglios sensitivos e autônomos, melanócitos e medula supra-renal",
      "Eritrócitos e miocárdio",
      "Fígado e pâncreas",
      "Músculo reto abdominal"
    ],
    "correctIndex": 0,
    "explanation": "A crista neural origina os gânglios nervosos periféricos, células de Schwann, melanócitos, esqueleto crânio-facial e medula adrenal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q24",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Cardiovascular Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #24).\n\nO desvio de sangue oxigenado da placenta no feto diretamente do átrio direito para o átrio esquerdo ocorre pelo:",
    "options": [
      "Forame oval (fossa oval pós-natal)",
      "Ducto arterioso (canal arterial)",
      "Ducto venoso",
      "Ventriculostomia"
    ],
    "correctIndex": 0,
    "explanation": "O forame oval permite a passagem do sangue bem oxigenado do átrio direito diretamente para o átrio esquerdo no feto.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q25",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Circulação Fetal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #25).\n\nO ducto venoso na circulação fetal conecta a veia umbilical diretamente à:",
    "options": [
      "Veia cava inferior",
      "Veia porta",
      "Veia cava superior",
      "Artéria pulmonar"
    ],
    "correctIndex": 0,
    "explanation": "O ducto venoso desvia o sangue oxigenado vindo da veia umbilical ultrapassando o sinusóide hepático para a veia cava inferior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q26",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Aparelho Faríngeo",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #26).\n\nO primeiro arco faríngeo (arco mandibular) é inervado por qual nervo craniano?",
    "options": [
      "Nervo trigêmeo (V par - ramo mandibular V3)",
      "Nervo facial (VII par)",
      "Nervo glossofaríngeo (IX par)",
      "Nervo vago (X par)"
    ],
    "correctIndex": 0,
    "explanation": "O 1º arco faríngeo é inervado pelo nervo trigêmeo (V3) e origina a mandíbula, maxila, martelo e bigorna.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q27",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Malformações Congênitas",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #27).\n\nA falha de fechamento do neuroporo posterior ao final da quarta semana embrionária resulta em:",
    "options": [
      "Espinha bífida (defeitos do tubo neural)",
      "Anencefalia",
      "Lábio leporino",
      "Atresia esofágica"
    ],
    "correctIndex": 0,
    "explanation": "O não fechamento do neuroporo posterior gera defeitos de fechamento do arco vertebral e tubo neural (espinha bífida).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q28",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Placentação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #28).\n\nO sinciciotrofoblasto erode os vasos endometriais maternos e secreta o hormônio indicador de gravidez precoce:",
    "options": [
      "Gonadotrofina coriônica humana (hCG)",
      "Progesterona placentária",
      "Lactogênio placentário",
      "Estradiol"
    ],
    "correctIndex": 0,
    "explanation": "O sinciciotrofoblasto produz hCG para manter o corpo lúteo no início da gestação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q29",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Digestório Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #29).\n\nA persistência do ducto onfalomesentérico (vitelino) pode originar no íleo terminal a malformação de:",
    "options": [
      "Divertículo de Meckel",
      "Megacólon congênito (Hirschsprung)",
      "Estenose hipertrófica do piloro",
      "Volvo intestinal"
    ],
    "correctIndex": 0,
    "explanation": "O divertículo de Meckel é um resquício do ducto vitelino localizado na borda antimesentérica do íleo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q30",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Urogenital Embrionário",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #30).\n\nO sistema renal definitivo humano desenvolve-se a partir de qual estrutura primórdio embrionária?",
    "options": [
      "Metanefro e broto ureteric",
      "Pronefro",
      "Mesonefro funcional",
      "Saco vitelino"
    ],
    "correctIndex": 0,
    "explanation": "O rim definitivo (metanefro) origina-se da interação entre o broto ureterórico e o blastema metanéfrico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q31",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Primeira Semana",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #31).\n\nA implantação do blastocisto (nidação) no endométrio uterino ocorre normalmente cerca de quantos dias pós-fecundação?",
    "options": [
      "1 a 2 dias",
      "6 a 7 dias",
      "14 dias",
      "21 dias"
    ],
    "correctIndex": 1,
    "explanation": "A nidação inicia-se por volta do 6º ao 7º dia após a fertilização com a adesão do trofoblasto ao endométrio receptivo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q32",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Folhetos Germinativos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #32).\n\nA gastrulação marca o início da morfogênese embrionária com a formação da linha primitiva e estabelecimento dos:",
    "options": [
      "Três folhetos germinativos (ectoderma, mesoderma e endoderma)",
      "Anexos placentários maduros",
      "Quatro cavidades cardíacas",
      "Gânglios da raiz dorsal"
    ],
    "correctIndex": 0,
    "explanation": "A gastrulação converte o disco embrionário bilaminar em trilaminar (ectoderma, mesoderma e endoderma).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q33",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Neurulação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #33).\n\nAs células da crista neural migram pelo corpo do embrião dando origem a qual conjunto de estruturas?",
    "options": [
      "Gânglios sensitivos e autônomos, melanócitos e medula supra-renal",
      "Eritrócitos e miocárdio",
      "Fígado e pâncreas",
      "Músculo reto abdominal"
    ],
    "correctIndex": 0,
    "explanation": "A crista neural origina os gânglios nervosos periféricos, células de Schwann, melanócitos, esqueleto crânio-facial e medula adrenal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q34",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Cardiovascular Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #34).\n\nO desvio de sangue oxigenado da placenta no feto diretamente do átrio direito para o átrio esquerdo ocorre pelo:",
    "options": [
      "Forame oval (fossa oval pós-natal)",
      "Ducto arterioso (canal arterial)",
      "Ducto venoso",
      "Ventriculostomia"
    ],
    "correctIndex": 0,
    "explanation": "O forame oval permite a passagem do sangue bem oxigenado do átrio direito diretamente para o átrio esquerdo no feto.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q35",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Circulação Fetal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #35).\n\nO ducto venoso na circulação fetal conecta a veia umbilical diretamente à:",
    "options": [
      "Veia cava inferior",
      "Veia porta",
      "Veia cava superior",
      "Artéria pulmonar"
    ],
    "correctIndex": 0,
    "explanation": "O ducto venoso desvia o sangue oxigenado vindo da veia umbilical ultrapassando o sinusóide hepático para a veia cava inferior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q36",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Aparelho Faríngeo",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #36).\n\nO primeiro arco faríngeo (arco mandibular) é inervado por qual nervo craniano?",
    "options": [
      "Nervo trigêmeo (V par - ramo mandibular V3)",
      "Nervo facial (VII par)",
      "Nervo glossofaríngeo (IX par)",
      "Nervo vago (X par)"
    ],
    "correctIndex": 0,
    "explanation": "O 1º arco faríngeo é inervado pelo nervo trigêmeo (V3) e origina a mandíbula, maxila, martelo e bigorna.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q37",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Malformações Congênitas",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #37).\n\nA falha de fechamento do neuroporo posterior ao final da quarta semana embrionária resulta em:",
    "options": [
      "Espinha bífida (defeitos do tubo neural)",
      "Anencefalia",
      "Lábio leporino",
      "Atresia esofágica"
    ],
    "correctIndex": 0,
    "explanation": "O não fechamento do neuroporo posterior gera defeitos de fechamento do arco vertebral e tubo neural (espinha bífida).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q38",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Placentação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #38).\n\nO sinciciotrofoblasto erode os vasos endometriais maternos e secreta o hormônio indicador de gravidez precoce:",
    "options": [
      "Gonadotrofina coriônica humana (hCG)",
      "Progesterona placentária",
      "Lactogênio placentário",
      "Estradiol"
    ],
    "correctIndex": 0,
    "explanation": "O sinciciotrofoblasto produz hCG para manter o corpo lúteo no início da gestação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q39",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Digestório Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #39).\n\nA persistência do ducto onfalomesentérico (vitelino) pode originar no íleo terminal a malformação de:",
    "options": [
      "Divertículo de Meckel",
      "Megacólon congênito (Hirschsprung)",
      "Estenose hipertrófica do piloro",
      "Volvo intestinal"
    ],
    "correctIndex": 0,
    "explanation": "O divertículo de Meckel é um resquício do ducto vitelino localizado na borda antimesentérica do íleo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q40",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Urogenital Embrionário",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #40).\n\nO sistema renal definitivo humano desenvolve-se a partir de qual estrutura primórdio embrionária?",
    "options": [
      "Metanefro e broto ureteric",
      "Pronefro",
      "Mesonefro funcional",
      "Saco vitelino"
    ],
    "correctIndex": 0,
    "explanation": "O rim definitivo (metanefro) origina-se da interação entre o broto ureterórico e o blastema metanéfrico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q41",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Primeira Semana",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #41).\n\nA implantação do blastocisto (nidação) no endométrio uterino ocorre normalmente cerca de quantos dias pós-fecundação?",
    "options": [
      "1 a 2 dias",
      "6 a 7 dias",
      "14 dias",
      "21 dias"
    ],
    "correctIndex": 1,
    "explanation": "A nidação inicia-se por volta do 6º ao 7º dia após a fertilização com a adesão do trofoblasto ao endométrio receptivo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q42",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Folhetos Germinativos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #42).\n\nA gastrulação marca o início da morfogênese embrionária com a formação da linha primitiva e estabelecimento dos:",
    "options": [
      "Três folhetos germinativos (ectoderma, mesoderma e endoderma)",
      "Anexos placentários maduros",
      "Quatro cavidades cardíacas",
      "Gânglios da raiz dorsal"
    ],
    "correctIndex": 0,
    "explanation": "A gastrulação converte o disco embrionário bilaminar em trilaminar (ectoderma, mesoderma e endoderma).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q43",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Neurulação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #43).\n\nAs células da crista neural migram pelo corpo do embrião dando origem a qual conjunto de estruturas?",
    "options": [
      "Gânglios sensitivos e autônomos, melanócitos e medula supra-renal",
      "Eritrócitos e miocárdio",
      "Fígado e pâncreas",
      "Músculo reto abdominal"
    ],
    "correctIndex": 0,
    "explanation": "A crista neural origina os gânglios nervosos periféricos, células de Schwann, melanócitos, esqueleto crânio-facial e medula adrenal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q44",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Cardiovascular Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #44).\n\nO desvio de sangue oxigenado da placenta no feto diretamente do átrio direito para o átrio esquerdo ocorre pelo:",
    "options": [
      "Forame oval (fossa oval pós-natal)",
      "Ducto arterioso (canal arterial)",
      "Ducto venoso",
      "Ventriculostomia"
    ],
    "correctIndex": 0,
    "explanation": "O forame oval permite a passagem do sangue bem oxigenado do átrio direito diretamente para o átrio esquerdo no feto.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q45",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Circulação Fetal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #45).\n\nO ducto venoso na circulação fetal conecta a veia umbilical diretamente à:",
    "options": [
      "Veia cava inferior",
      "Veia porta",
      "Veia cava superior",
      "Artéria pulmonar"
    ],
    "correctIndex": 0,
    "explanation": "O ducto venoso desvia o sangue oxigenado vindo da veia umbilical ultrapassando o sinusóide hepático para a veia cava inferior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q46",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Aparelho Faríngeo",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #46).\n\nO primeiro arco faríngeo (arco mandibular) é inervado por qual nervo craniano?",
    "options": [
      "Nervo trigêmeo (V par - ramo mandibular V3)",
      "Nervo facial (VII par)",
      "Nervo glossofaríngeo (IX par)",
      "Nervo vago (X par)"
    ],
    "correctIndex": 0,
    "explanation": "O 1º arco faríngeo é inervado pelo nervo trigêmeo (V3) e origina a mandíbula, maxila, martelo e bigorna.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q47",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Malformações Congênitas",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #47).\n\nA falha de fechamento do neuroporo posterior ao final da quarta semana embrionária resulta em:",
    "options": [
      "Espinha bífida (defeitos do tubo neural)",
      "Anencefalia",
      "Lábio leporino",
      "Atresia esofágica"
    ],
    "correctIndex": 0,
    "explanation": "O não fechamento do neuroporo posterior gera defeitos de fechamento do arco vertebral e tubo neural (espinha bífida).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q48",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Placentação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #48).\n\nO sinciciotrofoblasto erode os vasos endometriais maternos e secreta o hormônio indicador de gravidez precoce:",
    "options": [
      "Gonadotrofina coriônica humana (hCG)",
      "Progesterona placentária",
      "Lactogênio placentário",
      "Estradiol"
    ],
    "correctIndex": 0,
    "explanation": "O sinciciotrofoblasto produz hCG para manter o corpo lúteo no início da gestação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q49",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Digestório Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #49).\n\nA persistência do ducto onfalomesentérico (vitelino) pode originar no íleo terminal a malformação de:",
    "options": [
      "Divertículo de Meckel",
      "Megacólon congênito (Hirschsprung)",
      "Estenose hipertrófica do piloro",
      "Volvo intestinal"
    ],
    "correctIndex": 0,
    "explanation": "O divertículo de Meckel é um resquício do ducto vitelino localizado na borda antimesentérica do íleo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q50",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Urogenital Embrionário",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #50).\n\nO sistema renal definitivo humano desenvolve-se a partir de qual estrutura primórdio embrionária?",
    "options": [
      "Metanefro e broto ureteric",
      "Pronefro",
      "Mesonefro funcional",
      "Saco vitelino"
    ],
    "correctIndex": 0,
    "explanation": "O rim definitivo (metanefro) origina-se da interação entre o broto ureterórico e o blastema metanéfrico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q51",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Primeira Semana",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #51).\n\nA implantação do blastocisto (nidação) no endométrio uterino ocorre normalmente cerca de quantos dias pós-fecundação?",
    "options": [
      "1 a 2 dias",
      "6 a 7 dias",
      "14 dias",
      "21 dias"
    ],
    "correctIndex": 1,
    "explanation": "A nidação inicia-se por volta do 6º ao 7º dia após a fertilização com a adesão do trofoblasto ao endométrio receptivo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q52",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Folhetos Germinativos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #52).\n\nA gastrulação marca o início da morfogênese embrionária com a formação da linha primitiva e estabelecimento dos:",
    "options": [
      "Três folhetos germinativos (ectoderma, mesoderma e endoderma)",
      "Anexos placentários maduros",
      "Quatro cavidades cardíacas",
      "Gânglios da raiz dorsal"
    ],
    "correctIndex": 0,
    "explanation": "A gastrulação converte o disco embrionário bilaminar em trilaminar (ectoderma, mesoderma e endoderma).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q53",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Neurulação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #53).\n\nAs células da crista neural migram pelo corpo do embrião dando origem a qual conjunto de estruturas?",
    "options": [
      "Gânglios sensitivos e autônomos, melanócitos e medula supra-renal",
      "Eritrócitos e miocárdio",
      "Fígado e pâncreas",
      "Músculo reto abdominal"
    ],
    "correctIndex": 0,
    "explanation": "A crista neural origina os gânglios nervosos periféricos, células de Schwann, melanócitos, esqueleto crânio-facial e medula adrenal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q54",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Cardiovascular Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #54).\n\nO desvio de sangue oxigenado da placenta no feto diretamente do átrio direito para o átrio esquerdo ocorre pelo:",
    "options": [
      "Forame oval (fossa oval pós-natal)",
      "Ducto arterioso (canal arterial)",
      "Ducto venoso",
      "Ventriculostomia"
    ],
    "correctIndex": 0,
    "explanation": "O forame oval permite a passagem do sangue bem oxigenado do átrio direito diretamente para o átrio esquerdo no feto.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q55",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Circulação Fetal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #55).\n\nO ducto venoso na circulação fetal conecta a veia umbilical diretamente à:",
    "options": [
      "Veia cava inferior",
      "Veia porta",
      "Veia cava superior",
      "Artéria pulmonar"
    ],
    "correctIndex": 0,
    "explanation": "O ducto venoso desvia o sangue oxigenado vindo da veia umbilical ultrapassando o sinusóide hepático para a veia cava inferior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q56",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Aparelho Faríngeo",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #56).\n\nO primeiro arco faríngeo (arco mandibular) é inervado por qual nervo craniano?",
    "options": [
      "Nervo trigêmeo (V par - ramo mandibular V3)",
      "Nervo facial (VII par)",
      "Nervo glossofaríngeo (IX par)",
      "Nervo vago (X par)"
    ],
    "correctIndex": 0,
    "explanation": "O 1º arco faríngeo é inervado pelo nervo trigêmeo (V3) e origina a mandíbula, maxila, martelo e bigorna.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q57",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Malformações Congênitas",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #57).\n\nA falha de fechamento do neuroporo posterior ao final da quarta semana embrionária resulta em:",
    "options": [
      "Espinha bífida (defeitos do tubo neural)",
      "Anencefalia",
      "Lábio leporino",
      "Atresia esofágica"
    ],
    "correctIndex": 0,
    "explanation": "O não fechamento do neuroporo posterior gera defeitos de fechamento do arco vertebral e tubo neural (espinha bífida).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q58",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Placentação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #58).\n\nO sinciciotrofoblasto erode os vasos endometriais maternos e secreta o hormônio indicador de gravidez precoce:",
    "options": [
      "Gonadotrofina coriônica humana (hCG)",
      "Progesterona placentária",
      "Lactogênio placentário",
      "Estradiol"
    ],
    "correctIndex": 0,
    "explanation": "O sinciciotrofoblasto produz hCG para manter o corpo lúteo no início da gestação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q59",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Digestório Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #59).\n\nA persistência do ducto onfalomesentérico (vitelino) pode originar no íleo terminal a malformação de:",
    "options": [
      "Divertículo de Meckel",
      "Megacólon congênito (Hirschsprung)",
      "Estenose hipertrófica do piloro",
      "Volvo intestinal"
    ],
    "correctIndex": 0,
    "explanation": "O divertículo de Meckel é um resquício do ducto vitelino localizado na borda antimesentérica do íleo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q60",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Urogenital Embrionário",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #60).\n\nO sistema renal definitivo humano desenvolve-se a partir de qual estrutura primórdio embrionária?",
    "options": [
      "Metanefro e broto ureteric",
      "Pronefro",
      "Mesonefro funcional",
      "Saco vitelino"
    ],
    "correctIndex": 0,
    "explanation": "O rim definitivo (metanefro) origina-se da interação entre o broto ureterórico e o blastema metanéfrico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q61",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Primeira Semana",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #61).\n\nA implantação do blastocisto (nidação) no endométrio uterino ocorre normalmente cerca de quantos dias pós-fecundação?",
    "options": [
      "1 a 2 dias",
      "6 a 7 dias",
      "14 dias",
      "21 dias"
    ],
    "correctIndex": 1,
    "explanation": "A nidação inicia-se por volta do 6º ao 7º dia após a fertilização com a adesão do trofoblasto ao endométrio receptivo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q62",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Folhetos Germinativos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #62).\n\nA gastrulação marca o início da morfogênese embrionária com a formação da linha primitiva e estabelecimento dos:",
    "options": [
      "Três folhetos germinativos (ectoderma, mesoderma e endoderma)",
      "Anexos placentários maduros",
      "Quatro cavidades cardíacas",
      "Gânglios da raiz dorsal"
    ],
    "correctIndex": 0,
    "explanation": "A gastrulação converte o disco embrionário bilaminar em trilaminar (ectoderma, mesoderma e endoderma).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q63",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Neurulação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #63).\n\nAs células da crista neural migram pelo corpo do embrião dando origem a qual conjunto de estruturas?",
    "options": [
      "Gânglios sensitivos e autônomos, melanócitos e medula supra-renal",
      "Eritrócitos e miocárdio",
      "Fígado e pâncreas",
      "Músculo reto abdominal"
    ],
    "correctIndex": 0,
    "explanation": "A crista neural origina os gânglios nervosos periféricos, células de Schwann, melanócitos, esqueleto crânio-facial e medula adrenal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q64",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Cardiovascular Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #64).\n\nO desvio de sangue oxigenado da placenta no feto diretamente do átrio direito para o átrio esquerdo ocorre pelo:",
    "options": [
      "Forame oval (fossa oval pós-natal)",
      "Ducto arterioso (canal arterial)",
      "Ducto venoso",
      "Ventriculostomia"
    ],
    "correctIndex": 0,
    "explanation": "O forame oval permite a passagem do sangue bem oxigenado do átrio direito diretamente para o átrio esquerdo no feto.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q65",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Circulação Fetal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #65).\n\nO ducto venoso na circulação fetal conecta a veia umbilical diretamente à:",
    "options": [
      "Veia cava inferior",
      "Veia porta",
      "Veia cava superior",
      "Artéria pulmonar"
    ],
    "correctIndex": 0,
    "explanation": "O ducto venoso desvia o sangue oxigenado vindo da veia umbilical ultrapassando o sinusóide hepático para a veia cava inferior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q66",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Aparelho Faríngeo",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #66).\n\nO primeiro arco faríngeo (arco mandibular) é inervado por qual nervo craniano?",
    "options": [
      "Nervo trigêmeo (V par - ramo mandibular V3)",
      "Nervo facial (VII par)",
      "Nervo glossofaríngeo (IX par)",
      "Nervo vago (X par)"
    ],
    "correctIndex": 0,
    "explanation": "O 1º arco faríngeo é inervado pelo nervo trigêmeo (V3) e origina a mandíbula, maxila, martelo e bigorna.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q67",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Malformações Congênitas",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #67).\n\nA falha de fechamento do neuroporo posterior ao final da quarta semana embrionária resulta em:",
    "options": [
      "Espinha bífida (defeitos do tubo neural)",
      "Anencefalia",
      "Lábio leporino",
      "Atresia esofágica"
    ],
    "correctIndex": 0,
    "explanation": "O não fechamento do neuroporo posterior gera defeitos de fechamento do arco vertebral e tubo neural (espinha bífida).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q68",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Placentação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #68).\n\nO sinciciotrofoblasto erode os vasos endometriais maternos e secreta o hormônio indicador de gravidez precoce:",
    "options": [
      "Gonadotrofina coriônica humana (hCG)",
      "Progesterona placentária",
      "Lactogênio placentário",
      "Estradiol"
    ],
    "correctIndex": 0,
    "explanation": "O sinciciotrofoblasto produz hCG para manter o corpo lúteo no início da gestação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q69",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Digestório Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #69).\n\nA persistência do ducto onfalomesentérico (vitelino) pode originar no íleo terminal a malformação de:",
    "options": [
      "Divertículo de Meckel",
      "Megacólon congênito (Hirschsprung)",
      "Estenose hipertrófica do piloro",
      "Volvo intestinal"
    ],
    "correctIndex": 0,
    "explanation": "O divertículo de Meckel é um resquício do ducto vitelino localizado na borda antimesentérica do íleo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q70",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Urogenital Embrionário",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #70).\n\nO sistema renal definitivo humano desenvolve-se a partir de qual estrutura primórdio embrionária?",
    "options": [
      "Metanefro e broto ureteric",
      "Pronefro",
      "Mesonefro funcional",
      "Saco vitelino"
    ],
    "correctIndex": 0,
    "explanation": "O rim definitivo (metanefro) origina-se da interação entre o broto ureterórico e o blastema metanéfrico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q71",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Primeira Semana",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #71).\n\nA implantação do blastocisto (nidação) no endométrio uterino ocorre normalmente cerca de quantos dias pós-fecundação?",
    "options": [
      "1 a 2 dias",
      "6 a 7 dias",
      "14 dias",
      "21 dias"
    ],
    "correctIndex": 1,
    "explanation": "A nidação inicia-se por volta do 6º ao 7º dia após a fertilização com a adesão do trofoblasto ao endométrio receptivo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q72",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Folhetos Germinativos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #72).\n\nA gastrulação marca o início da morfogênese embrionária com a formação da linha primitiva e estabelecimento dos:",
    "options": [
      "Três folhetos germinativos (ectoderma, mesoderma e endoderma)",
      "Anexos placentários maduros",
      "Quatro cavidades cardíacas",
      "Gânglios da raiz dorsal"
    ],
    "correctIndex": 0,
    "explanation": "A gastrulação converte o disco embrionário bilaminar em trilaminar (ectoderma, mesoderma e endoderma).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q73",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Neurulação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #73).\n\nAs células da crista neural migram pelo corpo do embrião dando origem a qual conjunto de estruturas?",
    "options": [
      "Gânglios sensitivos e autônomos, melanócitos e medula supra-renal",
      "Eritrócitos e miocárdio",
      "Fígado e pâncreas",
      "Músculo reto abdominal"
    ],
    "correctIndex": 0,
    "explanation": "A crista neural origina os gânglios nervosos periféricos, células de Schwann, melanócitos, esqueleto crânio-facial e medula adrenal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q74",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Cardiovascular Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #74).\n\nO desvio de sangue oxigenado da placenta no feto diretamente do átrio direito para o átrio esquerdo ocorre pelo:",
    "options": [
      "Forame oval (fossa oval pós-natal)",
      "Ducto arterioso (canal arterial)",
      "Ducto venoso",
      "Ventriculostomia"
    ],
    "correctIndex": 0,
    "explanation": "O forame oval permite a passagem do sangue bem oxigenado do átrio direito diretamente para o átrio esquerdo no feto.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q75",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Circulação Fetal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #75).\n\nO ducto venoso na circulação fetal conecta a veia umbilical diretamente à:",
    "options": [
      "Veia cava inferior",
      "Veia porta",
      "Veia cava superior",
      "Artéria pulmonar"
    ],
    "correctIndex": 0,
    "explanation": "O ducto venoso desvia o sangue oxigenado vindo da veia umbilical ultrapassando o sinusóide hepático para a veia cava inferior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q76",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Aparelho Faríngeo",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #76).\n\nO primeiro arco faríngeo (arco mandibular) é inervado por qual nervo craniano?",
    "options": [
      "Nervo trigêmeo (V par - ramo mandibular V3)",
      "Nervo facial (VII par)",
      "Nervo glossofaríngeo (IX par)",
      "Nervo vago (X par)"
    ],
    "correctIndex": 0,
    "explanation": "O 1º arco faríngeo é inervado pelo nervo trigêmeo (V3) e origina a mandíbula, maxila, martelo e bigorna.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q77",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Malformações Congênitas",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #77).\n\nA falha de fechamento do neuroporo posterior ao final da quarta semana embrionária resulta em:",
    "options": [
      "Espinha bífida (defeitos do tubo neural)",
      "Anencefalia",
      "Lábio leporino",
      "Atresia esofágica"
    ],
    "correctIndex": 0,
    "explanation": "O não fechamento do neuroporo posterior gera defeitos de fechamento do arco vertebral e tubo neural (espinha bífida).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q78",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Placentação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #78).\n\nO sinciciotrofoblasto erode os vasos endometriais maternos e secreta o hormônio indicador de gravidez precoce:",
    "options": [
      "Gonadotrofina coriônica humana (hCG)",
      "Progesterona placentária",
      "Lactogênio placentário",
      "Estradiol"
    ],
    "correctIndex": 0,
    "explanation": "O sinciciotrofoblasto produz hCG para manter o corpo lúteo no início da gestação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q79",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Digestório Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #79).\n\nA persistência do ducto onfalomesentérico (vitelino) pode originar no íleo terminal a malformação de:",
    "options": [
      "Divertículo de Meckel",
      "Megacólon congênito (Hirschsprung)",
      "Estenose hipertrófica do piloro",
      "Volvo intestinal"
    ],
    "correctIndex": 0,
    "explanation": "O divertículo de Meckel é um resquício do ducto vitelino localizado na borda antimesentérica do íleo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q80",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Urogenital Embrionário",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #80).\n\nO sistema renal definitivo humano desenvolve-se a partir de qual estrutura primórdio embrionária?",
    "options": [
      "Metanefro e broto ureteric",
      "Pronefro",
      "Mesonefro funcional",
      "Saco vitelino"
    ],
    "correctIndex": 0,
    "explanation": "O rim definitivo (metanefro) origina-se da interação entre o broto ureterórico e o blastema metanéfrico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q81",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Primeira Semana",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #81).\n\nA implantação do blastocisto (nidação) no endométrio uterino ocorre normalmente cerca de quantos dias pós-fecundação?",
    "options": [
      "1 a 2 dias",
      "6 a 7 dias",
      "14 dias",
      "21 dias"
    ],
    "correctIndex": 1,
    "explanation": "A nidação inicia-se por volta do 6º ao 7º dia após a fertilização com a adesão do trofoblasto ao endométrio receptivo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q82",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Folhetos Germinativos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #82).\n\nA gastrulação marca o início da morfogênese embrionária com a formação da linha primitiva e estabelecimento dos:",
    "options": [
      "Três folhetos germinativos (ectoderma, mesoderma e endoderma)",
      "Anexos placentários maduros",
      "Quatro cavidades cardíacas",
      "Gânglios da raiz dorsal"
    ],
    "correctIndex": 0,
    "explanation": "A gastrulação converte o disco embrionário bilaminar em trilaminar (ectoderma, mesoderma e endoderma).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q83",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Neurulação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #83).\n\nAs células da crista neural migram pelo corpo do embrião dando origem a qual conjunto de estruturas?",
    "options": [
      "Gânglios sensitivos e autônomos, melanócitos e medula supra-renal",
      "Eritrócitos e miocárdio",
      "Fígado e pâncreas",
      "Músculo reto abdominal"
    ],
    "correctIndex": 0,
    "explanation": "A crista neural origina os gânglios nervosos periféricos, células de Schwann, melanócitos, esqueleto crânio-facial e medula adrenal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q84",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Cardiovascular Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #84).\n\nO desvio de sangue oxigenado da placenta no feto diretamente do átrio direito para o átrio esquerdo ocorre pelo:",
    "options": [
      "Forame oval (fossa oval pós-natal)",
      "Ducto arterioso (canal arterial)",
      "Ducto venoso",
      "Ventriculostomia"
    ],
    "correctIndex": 0,
    "explanation": "O forame oval permite a passagem do sangue bem oxigenado do átrio direito diretamente para o átrio esquerdo no feto.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q85",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Circulação Fetal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #85).\n\nO ducto venoso na circulação fetal conecta a veia umbilical diretamente à:",
    "options": [
      "Veia cava inferior",
      "Veia porta",
      "Veia cava superior",
      "Artéria pulmonar"
    ],
    "correctIndex": 0,
    "explanation": "O ducto venoso desvia o sangue oxigenado vindo da veia umbilical ultrapassando o sinusóide hepático para a veia cava inferior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q86",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Aparelho Faríngeo",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #86).\n\nO primeiro arco faríngeo (arco mandibular) é inervado por qual nervo craniano?",
    "options": [
      "Nervo trigêmeo (V par - ramo mandibular V3)",
      "Nervo facial (VII par)",
      "Nervo glossofaríngeo (IX par)",
      "Nervo vago (X par)"
    ],
    "correctIndex": 0,
    "explanation": "O 1º arco faríngeo é inervado pelo nervo trigêmeo (V3) e origina a mandíbula, maxila, martelo e bigorna.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q87",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Malformações Congênitas",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #87).\n\nA falha de fechamento do neuroporo posterior ao final da quarta semana embrionária resulta em:",
    "options": [
      "Espinha bífida (defeitos do tubo neural)",
      "Anencefalia",
      "Lábio leporino",
      "Atresia esofágica"
    ],
    "correctIndex": 0,
    "explanation": "O não fechamento do neuroporo posterior gera defeitos de fechamento do arco vertebral e tubo neural (espinha bífida).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q88",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Placentação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #88).\n\nO sinciciotrofoblasto erode os vasos endometriais maternos e secreta o hormônio indicador de gravidez precoce:",
    "options": [
      "Gonadotrofina coriônica humana (hCG)",
      "Progesterona placentária",
      "Lactogênio placentário",
      "Estradiol"
    ],
    "correctIndex": 0,
    "explanation": "O sinciciotrofoblasto produz hCG para manter o corpo lúteo no início da gestação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q89",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Digestório Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #89).\n\nA persistência do ducto onfalomesentérico (vitelino) pode originar no íleo terminal a malformação de:",
    "options": [
      "Divertículo de Meckel",
      "Megacólon congênito (Hirschsprung)",
      "Estenose hipertrófica do piloro",
      "Volvo intestinal"
    ],
    "correctIndex": 0,
    "explanation": "O divertículo de Meckel é um resquício do ducto vitelino localizado na borda antimesentérica do íleo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q90",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Urogenital Embrionário",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #90).\n\nO sistema renal definitivo humano desenvolve-se a partir de qual estrutura primórdio embrionária?",
    "options": [
      "Metanefro e broto ureteric",
      "Pronefro",
      "Mesonefro funcional",
      "Saco vitelino"
    ],
    "correctIndex": 0,
    "explanation": "O rim definitivo (metanefro) origina-se da interação entre o broto ureterórico e o blastema metanéfrico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q91",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Primeira Semana",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #91).\n\nA implantação do blastocisto (nidação) no endométrio uterino ocorre normalmente cerca de quantos dias pós-fecundação?",
    "options": [
      "1 a 2 dias",
      "6 a 7 dias",
      "14 dias",
      "21 dias"
    ],
    "correctIndex": 1,
    "explanation": "A nidação inicia-se por volta do 6º ao 7º dia após a fertilização com a adesão do trofoblasto ao endométrio receptivo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q92",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Folhetos Germinativos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #92).\n\nA gastrulação marca o início da morfogênese embrionária com a formação da linha primitiva e estabelecimento dos:",
    "options": [
      "Três folhetos germinativos (ectoderma, mesoderma e endoderma)",
      "Anexos placentários maduros",
      "Quatro cavidades cardíacas",
      "Gânglios da raiz dorsal"
    ],
    "correctIndex": 0,
    "explanation": "A gastrulação converte o disco embrionário bilaminar em trilaminar (ectoderma, mesoderma e endoderma).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q93",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Neurulação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #93).\n\nAs células da crista neural migram pelo corpo do embrião dando origem a qual conjunto de estruturas?",
    "options": [
      "Gânglios sensitivos e autônomos, melanócitos e medula supra-renal",
      "Eritrócitos e miocárdio",
      "Fígado e pâncreas",
      "Músculo reto abdominal"
    ],
    "correctIndex": 0,
    "explanation": "A crista neural origina os gânglios nervosos periféricos, células de Schwann, melanócitos, esqueleto crânio-facial e medula adrenal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q94",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Cardiovascular Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #94).\n\nO desvio de sangue oxigenado da placenta no feto diretamente do átrio direito para o átrio esquerdo ocorre pelo:",
    "options": [
      "Forame oval (fossa oval pós-natal)",
      "Ducto arterioso (canal arterial)",
      "Ducto venoso",
      "Ventriculostomia"
    ],
    "correctIndex": 0,
    "explanation": "O forame oval permite a passagem do sangue bem oxigenado do átrio direito diretamente para o átrio esquerdo no feto.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q95",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Circulação Fetal",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #95).\n\nO ducto venoso na circulação fetal conecta a veia umbilical diretamente à:",
    "options": [
      "Veia cava inferior",
      "Veia porta",
      "Veia cava superior",
      "Artéria pulmonar"
    ],
    "correctIndex": 0,
    "explanation": "O ducto venoso desvia o sangue oxigenado vindo da veia umbilical ultrapassando o sinusóide hepático para a veia cava inferior.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q96",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Aparelho Faríngeo",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #96).\n\nO primeiro arco faríngeo (arco mandibular) é inervado por qual nervo craniano?",
    "options": [
      "Nervo trigêmeo (V par - ramo mandibular V3)",
      "Nervo facial (VII par)",
      "Nervo glossofaríngeo (IX par)",
      "Nervo vago (X par)"
    ],
    "correctIndex": 0,
    "explanation": "O 1º arco faríngeo é inervado pelo nervo trigêmeo (V3) e origina a mandíbula, maxila, martelo e bigorna.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q97",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Malformações Congênitas",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #97).\n\nA falha de fechamento do neuroporo posterior ao final da quarta semana embrionária resulta em:",
    "options": [
      "Espinha bífida (defeitos do tubo neural)",
      "Anencefalia",
      "Lábio leporino",
      "Atresia esofágica"
    ],
    "correctIndex": 0,
    "explanation": "O não fechamento do neuroporo posterior gera defeitos de fechamento do arco vertebral e tubo neural (espinha bífida).",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q98",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Placentação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #98).\n\nO sinciciotrofoblasto erode os vasos endometriais maternos e secreta o hormônio indicador de gravidez precoce:",
    "options": [
      "Gonadotrofina coriônica humana (hCG)",
      "Progesterona placentária",
      "Lactogênio placentário",
      "Estradiol"
    ],
    "correctIndex": 0,
    "explanation": "O sinciciotrofoblasto produz hCG para manter o corpo lúteo no início da gestação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q99",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Digestório Embrionário",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #99).\n\nA persistência do ducto onfalomesentérico (vitelino) pode originar no íleo terminal a malformação de:",
    "options": [
      "Divertículo de Meckel",
      "Megacólon congênito (Hirschsprung)",
      "Estenose hipertrófica do piloro",
      "Volvo intestinal"
    ],
    "correctIndex": 0,
    "explanation": "O divertículo de Meckel é um resquício do ducto vitelino localizado na borda antimesentérica do íleo.",
    "difficulty": "medium"
  },
  {
    "id": "basico_embriologia_q100",
    "cycle": "Ciclo Básico",
    "subject": "Embriologia",
    "subSubject": "Urogenital Embrionário",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #100).\n\nO sistema renal definitivo humano desenvolve-se a partir de qual estrutura primórdio embrionária?",
    "options": [
      "Metanefro e broto ureteric",
      "Pronefro",
      "Mesonefro funcional",
      "Saco vitelino"
    ],
    "correctIndex": 0,
    "explanation": "O rim definitivo (metanefro) origina-se da interação entre o broto ureterórico e o blastema metanéfrico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q1",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #1).\n\nCocos Gram-positivos dispostos em cadeias, beta-hemolíticos e sensíveis à bacitracina (Grupo A de Lancefield) correspondem a:",
    "options": [
      "Streptococcus pyogenes",
      "Streptococcus pneumoniae",
      "Staphylococcus aureus",
      "Enterococcus faecalis"
    ],
    "correctIndex": 0,
    "explanation": "O Streptococcus pyogenes (Strepto do Grupo A) é beta-hemolítico e sensível à bacitracina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q2",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #2).\n\nQual bactéria Gram-negativa em forma de vírgula, oxidase positiva, causa diarreia profusa em 'água de arroz' por toxina que ativa o AMPc?",
    "options": [
      "Vibrio cholerae",
      "Escherichia coli enterohemorrágica",
      "Salmonella enterica",
      "Shigella dysenteriae"
    ],
    "correctIndex": 0,
    "explanation": "O Vibrio cholerae produz a toxina colérica que hiperativa a adenilato ciclase no enterócito, gerando diarreia maciça.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q3",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #3).\n\nQual vírus hepatotrópico de genoma DNA de fita dupla parcial possui envelope contendo o antígeno de superfície HBsAg?",
    "options": [
      "Vírus da Hepatite B (HBV)",
      "Vírus da Hepatite A (HAV)",
      "Vírus da Hepatite C (HCV)",
      "Vírus da Hepatite E (HEV)"
    ],
    "correctIndex": 0,
    "explanation": "O HBV é o único vírus da hepatite humana com genoma DNA e possui os antígenos HBsAg, HBcAg e HBeAg.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q4",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #4).\n\nA levedura encapsulada oportunista causadora de meningite em imunodeprimidos identificada na tinta da China (nanquim) é:",
    "options": [
      "Cryptococcus neoformans",
      "Candida albicans",
      "Aspergillus fumigatus",
      "Histoplasma capsulatum"
    ],
    "correctIndex": 0,
    "explanation": "O Cryptococcus neoformans possui espessa cápsula polissacarídica evidenciada negativamente pela Coloração com Tinta da China.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q5",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #5).\n\nOs antibióticos beta-lactâmicos (penicilinas, cefalosporinas e carbapenêmicos) exercem ação bactericida inibindo a:",
    "options": [
      "Síntese da parede celular bacteriana (transpeptidação do peptidoglicano)",
      "Subunidade 30S do ribossomo",
      "DNA girase (Topoisomerase II)",
      "RNA polimerase dependente de DNA"
    ],
    "correctIndex": 0,
    "explanation": "Os beta-lactâmicos ligam-se às PBPs (Penicillin-Binding Proteins) e bloqueiam a ligação cruzada de peptidoglicano na parede celular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q6",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #6).\n\nA resistência bacteriana à vancomicina em cepas de Enterococcus (VRE) decorre da modificação do dipeptídeo da parede de D-Ala-D-Ala para:",
    "options": [
      "D-Alanina-D-Lactato",
      "D-Glutato-D-Alanina",
      "L-Lisina-D-Ala",
      "Glicina-Glicina"
    ],
    "correctIndex": 0,
    "explanation": "O operon vanA/vanB altera o alvo de ligação da vancomicina para D-Ala-D-Lactato, reduzindo a afinidade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q7",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #7).\n\nO bacilo Gram-positivo aeróbico estrito com parede rica em ácidos micólicos resistente à descoloração por álcool-ácido (BAAR) é o:",
    "options": [
      "Mycobacterium tuberculosis",
      "Listeria monocytogenes",
      "Corynebacterium diphtheriae",
      "Bacillus anthracis"
    ],
    "correctIndex": 0,
    "explanation": "Os bacilos álcool-ácido resistentes (BAAR), como M. tuberculosis, coram-se pela técnica de Ziehl-Neelsen devido à alta concentração de ácidos micólicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q8",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #8).\n\nO vírus influenza modifica ciclicamente seus antígenos de superfície Hemaglutinina (HA) e Neuraminidase (NA) através do fenômeno de recombinação genética denominado:",
    "options": [
      "Drift e Shift antigênico",
      "Lisogenia",
      "Transformação bacteriana",
      "Transdução generalizada"
    ],
    "correctIndex": 0,
    "explanation": "Alterações menores por mutações ponto (drift) causam surtos anuais, enquanto grandes rearranjos de segmentos genômicos (shift) geram pandemias.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q9",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #9).\n\nO fungo dimórfico endêmico no Brasil associado ao contato com solo e vegetação com aspecto de 'roda de leme' no exame direto é:",
    "options": [
      "Paracoccidioides brasiliensis",
      "Sporothrix schenckii",
      "Blastomyces dermatitidis",
      "Coccidioides immitis"
    ],
    "correctIndex": 0,
    "explanation": "O Paracoccidioides brasiliensis exibe no tecido a forma leveduriforme multibrotante característica de 'roda de leme'.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q10",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Diagnóstico Microbiológico",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #10).\n\nA fermentação da lactose no meio ágar MacConkey permite diferenciar enterobactérias produtoras de colônias rosadas como a:",
    "options": [
      "Escherichia coli",
      "Salmonella typhi",
      "Shigella flexneri",
      "Pseudomonas aeruginosa"
    ],
    "correctIndex": 0,
    "explanation": "E. coli e Klebsiella são bacilos Gram-negativos lactose-positivos (fermentadores de lactose), formando colônias rosa/vermelhas em ágar MacConkey.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q11",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #11).\n\nCocos Gram-positivos dispostos em cadeias, beta-hemolíticos e sensíveis à bacitracina (Grupo A de Lancefield) correspondem a:",
    "options": [
      "Streptococcus pyogenes",
      "Streptococcus pneumoniae",
      "Staphylococcus aureus",
      "Enterococcus faecalis"
    ],
    "correctIndex": 0,
    "explanation": "O Streptococcus pyogenes (Strepto do Grupo A) é beta-hemolítico e sensível à bacitracina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q12",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #12).\n\nQual bactéria Gram-negativa em forma de vírgula, oxidase positiva, causa diarreia profusa em 'água de arroz' por toxina que ativa o AMPc?",
    "options": [
      "Vibrio cholerae",
      "Escherichia coli enterohemorrágica",
      "Salmonella enterica",
      "Shigella dysenteriae"
    ],
    "correctIndex": 0,
    "explanation": "O Vibrio cholerae produz a toxina colérica que hiperativa a adenilato ciclase no enterócito, gerando diarreia maciça.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q13",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #13).\n\nQual vírus hepatotrópico de genoma DNA de fita dupla parcial possui envelope contendo o antígeno de superfície HBsAg?",
    "options": [
      "Vírus da Hepatite B (HBV)",
      "Vírus da Hepatite A (HAV)",
      "Vírus da Hepatite C (HCV)",
      "Vírus da Hepatite E (HEV)"
    ],
    "correctIndex": 0,
    "explanation": "O HBV é o único vírus da hepatite humana com genoma DNA e possui os antígenos HBsAg, HBcAg e HBeAg.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q14",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #14).\n\nA levedura encapsulada oportunista causadora de meningite em imunodeprimidos identificada na tinta da China (nanquim) é:",
    "options": [
      "Cryptococcus neoformans",
      "Candida albicans",
      "Aspergillus fumigatus",
      "Histoplasma capsulatum"
    ],
    "correctIndex": 0,
    "explanation": "O Cryptococcus neoformans possui espessa cápsula polissacarídica evidenciada negativamente pela Coloração com Tinta da China.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q15",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #15).\n\nOs antibióticos beta-lactâmicos (penicilinas, cefalosporinas e carbapenêmicos) exercem ação bactericida inibindo a:",
    "options": [
      "Síntese da parede celular bacteriana (transpeptidação do peptidoglicano)",
      "Subunidade 30S do ribossomo",
      "DNA girase (Topoisomerase II)",
      "RNA polimerase dependente de DNA"
    ],
    "correctIndex": 0,
    "explanation": "Os beta-lactâmicos ligam-se às PBPs (Penicillin-Binding Proteins) e bloqueiam a ligação cruzada de peptidoglicano na parede celular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q16",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #16).\n\nA resistência bacteriana à vancomicina em cepas de Enterococcus (VRE) decorre da modificação do dipeptídeo da parede de D-Ala-D-Ala para:",
    "options": [
      "D-Alanina-D-Lactato",
      "D-Glutato-D-Alanina",
      "L-Lisina-D-Ala",
      "Glicina-Glicina"
    ],
    "correctIndex": 0,
    "explanation": "O operon vanA/vanB altera o alvo de ligação da vancomicina para D-Ala-D-Lactato, reduzindo a afinidade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q17",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #17).\n\nO bacilo Gram-positivo aeróbico estrito com parede rica em ácidos micólicos resistente à descoloração por álcool-ácido (BAAR) é o:",
    "options": [
      "Mycobacterium tuberculosis",
      "Listeria monocytogenes",
      "Corynebacterium diphtheriae",
      "Bacillus anthracis"
    ],
    "correctIndex": 0,
    "explanation": "Os bacilos álcool-ácido resistentes (BAAR), como M. tuberculosis, coram-se pela técnica de Ziehl-Neelsen devido à alta concentração de ácidos micólicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q18",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #18).\n\nO vírus influenza modifica ciclicamente seus antígenos de superfície Hemaglutinina (HA) e Neuraminidase (NA) através do fenômeno de recombinação genética denominado:",
    "options": [
      "Drift e Shift antigênico",
      "Lisogenia",
      "Transformação bacteriana",
      "Transdução generalizada"
    ],
    "correctIndex": 0,
    "explanation": "Alterações menores por mutações ponto (drift) causam surtos anuais, enquanto grandes rearranjos de segmentos genômicos (shift) geram pandemias.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q19",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #19).\n\nO fungo dimórfico endêmico no Brasil associado ao contato com solo e vegetação com aspecto de 'roda de leme' no exame direto é:",
    "options": [
      "Paracoccidioides brasiliensis",
      "Sporothrix schenckii",
      "Blastomyces dermatitidis",
      "Coccidioides immitis"
    ],
    "correctIndex": 0,
    "explanation": "O Paracoccidioides brasiliensis exibe no tecido a forma leveduriforme multibrotante característica de 'roda de leme'.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q20",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Diagnóstico Microbiológico",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #20).\n\nA fermentação da lactose no meio ágar MacConkey permite diferenciar enterobactérias produtoras de colônias rosadas como a:",
    "options": [
      "Escherichia coli",
      "Salmonella typhi",
      "Shigella flexneri",
      "Pseudomonas aeruginosa"
    ],
    "correctIndex": 0,
    "explanation": "E. coli e Klebsiella são bacilos Gram-negativos lactose-positivos (fermentadores de lactose), formando colônias rosa/vermelhas em ágar MacConkey.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q21",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #21).\n\nCocos Gram-positivos dispostos em cadeias, beta-hemolíticos e sensíveis à bacitracina (Grupo A de Lancefield) correspondem a:",
    "options": [
      "Streptococcus pyogenes",
      "Streptococcus pneumoniae",
      "Staphylococcus aureus",
      "Enterococcus faecalis"
    ],
    "correctIndex": 0,
    "explanation": "O Streptococcus pyogenes (Strepto do Grupo A) é beta-hemolítico e sensível à bacitracina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q22",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #22).\n\nQual bactéria Gram-negativa em forma de vírgula, oxidase positiva, causa diarreia profusa em 'água de arroz' por toxina que ativa o AMPc?",
    "options": [
      "Vibrio cholerae",
      "Escherichia coli enterohemorrágica",
      "Salmonella enterica",
      "Shigella dysenteriae"
    ],
    "correctIndex": 0,
    "explanation": "O Vibrio cholerae produz a toxina colérica que hiperativa a adenilato ciclase no enterócito, gerando diarreia maciça.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q23",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #23).\n\nQual vírus hepatotrópico de genoma DNA de fita dupla parcial possui envelope contendo o antígeno de superfície HBsAg?",
    "options": [
      "Vírus da Hepatite B (HBV)",
      "Vírus da Hepatite A (HAV)",
      "Vírus da Hepatite C (HCV)",
      "Vírus da Hepatite E (HEV)"
    ],
    "correctIndex": 0,
    "explanation": "O HBV é o único vírus da hepatite humana com genoma DNA e possui os antígenos HBsAg, HBcAg e HBeAg.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q24",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #24).\n\nA levedura encapsulada oportunista causadora de meningite em imunodeprimidos identificada na tinta da China (nanquim) é:",
    "options": [
      "Cryptococcus neoformans",
      "Candida albicans",
      "Aspergillus fumigatus",
      "Histoplasma capsulatum"
    ],
    "correctIndex": 0,
    "explanation": "O Cryptococcus neoformans possui espessa cápsula polissacarídica evidenciada negativamente pela Coloração com Tinta da China.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q25",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #25).\n\nOs antibióticos beta-lactâmicos (penicilinas, cefalosporinas e carbapenêmicos) exercem ação bactericida inibindo a:",
    "options": [
      "Síntese da parede celular bacteriana (transpeptidação do peptidoglicano)",
      "Subunidade 30S do ribossomo",
      "DNA girase (Topoisomerase II)",
      "RNA polimerase dependente de DNA"
    ],
    "correctIndex": 0,
    "explanation": "Os beta-lactâmicos ligam-se às PBPs (Penicillin-Binding Proteins) e bloqueiam a ligação cruzada de peptidoglicano na parede celular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q26",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #26).\n\nA resistência bacteriana à vancomicina em cepas de Enterococcus (VRE) decorre da modificação do dipeptídeo da parede de D-Ala-D-Ala para:",
    "options": [
      "D-Alanina-D-Lactato",
      "D-Glutato-D-Alanina",
      "L-Lisina-D-Ala",
      "Glicina-Glicina"
    ],
    "correctIndex": 0,
    "explanation": "O operon vanA/vanB altera o alvo de ligação da vancomicina para D-Ala-D-Lactato, reduzindo a afinidade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q27",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #27).\n\nO bacilo Gram-positivo aeróbico estrito com parede rica em ácidos micólicos resistente à descoloração por álcool-ácido (BAAR) é o:",
    "options": [
      "Mycobacterium tuberculosis",
      "Listeria monocytogenes",
      "Corynebacterium diphtheriae",
      "Bacillus anthracis"
    ],
    "correctIndex": 0,
    "explanation": "Os bacilos álcool-ácido resistentes (BAAR), como M. tuberculosis, coram-se pela técnica de Ziehl-Neelsen devido à alta concentração de ácidos micólicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q28",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #28).\n\nO vírus influenza modifica ciclicamente seus antígenos de superfície Hemaglutinina (HA) e Neuraminidase (NA) através do fenômeno de recombinação genética denominado:",
    "options": [
      "Drift e Shift antigênico",
      "Lisogenia",
      "Transformação bacteriana",
      "Transdução generalizada"
    ],
    "correctIndex": 0,
    "explanation": "Alterações menores por mutações ponto (drift) causam surtos anuais, enquanto grandes rearranjos de segmentos genômicos (shift) geram pandemias.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q29",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #29).\n\nO fungo dimórfico endêmico no Brasil associado ao contato com solo e vegetação com aspecto de 'roda de leme' no exame direto é:",
    "options": [
      "Paracoccidioides brasiliensis",
      "Sporothrix schenckii",
      "Blastomyces dermatitidis",
      "Coccidioides immitis"
    ],
    "correctIndex": 0,
    "explanation": "O Paracoccidioides brasiliensis exibe no tecido a forma leveduriforme multibrotante característica de 'roda de leme'.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q30",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Diagnóstico Microbiológico",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #30).\n\nA fermentação da lactose no meio ágar MacConkey permite diferenciar enterobactérias produtoras de colônias rosadas como a:",
    "options": [
      "Escherichia coli",
      "Salmonella typhi",
      "Shigella flexneri",
      "Pseudomonas aeruginosa"
    ],
    "correctIndex": 0,
    "explanation": "E. coli e Klebsiella são bacilos Gram-negativos lactose-positivos (fermentadores de lactose), formando colônias rosa/vermelhas em ágar MacConkey.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q31",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #31).\n\nCocos Gram-positivos dispostos em cadeias, beta-hemolíticos e sensíveis à bacitracina (Grupo A de Lancefield) correspondem a:",
    "options": [
      "Streptococcus pyogenes",
      "Streptococcus pneumoniae",
      "Staphylococcus aureus",
      "Enterococcus faecalis"
    ],
    "correctIndex": 0,
    "explanation": "O Streptococcus pyogenes (Strepto do Grupo A) é beta-hemolítico e sensível à bacitracina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q32",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #32).\n\nQual bactéria Gram-negativa em forma de vírgula, oxidase positiva, causa diarreia profusa em 'água de arroz' por toxina que ativa o AMPc?",
    "options": [
      "Vibrio cholerae",
      "Escherichia coli enterohemorrágica",
      "Salmonella enterica",
      "Shigella dysenteriae"
    ],
    "correctIndex": 0,
    "explanation": "O Vibrio cholerae produz a toxina colérica que hiperativa a adenilato ciclase no enterócito, gerando diarreia maciça.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q33",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #33).\n\nQual vírus hepatotrópico de genoma DNA de fita dupla parcial possui envelope contendo o antígeno de superfície HBsAg?",
    "options": [
      "Vírus da Hepatite B (HBV)",
      "Vírus da Hepatite A (HAV)",
      "Vírus da Hepatite C (HCV)",
      "Vírus da Hepatite E (HEV)"
    ],
    "correctIndex": 0,
    "explanation": "O HBV é o único vírus da hepatite humana com genoma DNA e possui os antígenos HBsAg, HBcAg e HBeAg.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q34",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #34).\n\nA levedura encapsulada oportunista causadora de meningite em imunodeprimidos identificada na tinta da China (nanquim) é:",
    "options": [
      "Cryptococcus neoformans",
      "Candida albicans",
      "Aspergillus fumigatus",
      "Histoplasma capsulatum"
    ],
    "correctIndex": 0,
    "explanation": "O Cryptococcus neoformans possui espessa cápsula polissacarídica evidenciada negativamente pela Coloração com Tinta da China.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q35",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #35).\n\nOs antibióticos beta-lactâmicos (penicilinas, cefalosporinas e carbapenêmicos) exercem ação bactericida inibindo a:",
    "options": [
      "Síntese da parede celular bacteriana (transpeptidação do peptidoglicano)",
      "Subunidade 30S do ribossomo",
      "DNA girase (Topoisomerase II)",
      "RNA polimerase dependente de DNA"
    ],
    "correctIndex": 0,
    "explanation": "Os beta-lactâmicos ligam-se às PBPs (Penicillin-Binding Proteins) e bloqueiam a ligação cruzada de peptidoglicano na parede celular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q36",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #36).\n\nA resistência bacteriana à vancomicina em cepas de Enterococcus (VRE) decorre da modificação do dipeptídeo da parede de D-Ala-D-Ala para:",
    "options": [
      "D-Alanina-D-Lactato",
      "D-Glutato-D-Alanina",
      "L-Lisina-D-Ala",
      "Glicina-Glicina"
    ],
    "correctIndex": 0,
    "explanation": "O operon vanA/vanB altera o alvo de ligação da vancomicina para D-Ala-D-Lactato, reduzindo a afinidade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q37",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #37).\n\nO bacilo Gram-positivo aeróbico estrito com parede rica em ácidos micólicos resistente à descoloração por álcool-ácido (BAAR) é o:",
    "options": [
      "Mycobacterium tuberculosis",
      "Listeria monocytogenes",
      "Corynebacterium diphtheriae",
      "Bacillus anthracis"
    ],
    "correctIndex": 0,
    "explanation": "Os bacilos álcool-ácido resistentes (BAAR), como M. tuberculosis, coram-se pela técnica de Ziehl-Neelsen devido à alta concentração de ácidos micólicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q38",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #38).\n\nO vírus influenza modifica ciclicamente seus antígenos de superfície Hemaglutinina (HA) e Neuraminidase (NA) através do fenômeno de recombinação genética denominado:",
    "options": [
      "Drift e Shift antigênico",
      "Lisogenia",
      "Transformação bacteriana",
      "Transdução generalizada"
    ],
    "correctIndex": 0,
    "explanation": "Alterações menores por mutações ponto (drift) causam surtos anuais, enquanto grandes rearranjos de segmentos genômicos (shift) geram pandemias.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q39",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #39).\n\nO fungo dimórfico endêmico no Brasil associado ao contato com solo e vegetação com aspecto de 'roda de leme' no exame direto é:",
    "options": [
      "Paracoccidioides brasiliensis",
      "Sporothrix schenckii",
      "Blastomyces dermatitidis",
      "Coccidioides immitis"
    ],
    "correctIndex": 0,
    "explanation": "O Paracoccidioides brasiliensis exibe no tecido a forma leveduriforme multibrotante característica de 'roda de leme'.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q40",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Diagnóstico Microbiológico",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #40).\n\nA fermentação da lactose no meio ágar MacConkey permite diferenciar enterobactérias produtoras de colônias rosadas como a:",
    "options": [
      "Escherichia coli",
      "Salmonella typhi",
      "Shigella flexneri",
      "Pseudomonas aeruginosa"
    ],
    "correctIndex": 0,
    "explanation": "E. coli e Klebsiella são bacilos Gram-negativos lactose-positivos (fermentadores de lactose), formando colônias rosa/vermelhas em ágar MacConkey.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q41",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #41).\n\nCocos Gram-positivos dispostos em cadeias, beta-hemolíticos e sensíveis à bacitracina (Grupo A de Lancefield) correspondem a:",
    "options": [
      "Streptococcus pyogenes",
      "Streptococcus pneumoniae",
      "Staphylococcus aureus",
      "Enterococcus faecalis"
    ],
    "correctIndex": 0,
    "explanation": "O Streptococcus pyogenes (Strepto do Grupo A) é beta-hemolítico e sensível à bacitracina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q42",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #42).\n\nQual bactéria Gram-negativa em forma de vírgula, oxidase positiva, causa diarreia profusa em 'água de arroz' por toxina que ativa o AMPc?",
    "options": [
      "Vibrio cholerae",
      "Escherichia coli enterohemorrágica",
      "Salmonella enterica",
      "Shigella dysenteriae"
    ],
    "correctIndex": 0,
    "explanation": "O Vibrio cholerae produz a toxina colérica que hiperativa a adenilato ciclase no enterócito, gerando diarreia maciça.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q43",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #43).\n\nQual vírus hepatotrópico de genoma DNA de fita dupla parcial possui envelope contendo o antígeno de superfície HBsAg?",
    "options": [
      "Vírus da Hepatite B (HBV)",
      "Vírus da Hepatite A (HAV)",
      "Vírus da Hepatite C (HCV)",
      "Vírus da Hepatite E (HEV)"
    ],
    "correctIndex": 0,
    "explanation": "O HBV é o único vírus da hepatite humana com genoma DNA e possui os antígenos HBsAg, HBcAg e HBeAg.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q44",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #44).\n\nA levedura encapsulada oportunista causadora de meningite em imunodeprimidos identificada na tinta da China (nanquim) é:",
    "options": [
      "Cryptococcus neoformans",
      "Candida albicans",
      "Aspergillus fumigatus",
      "Histoplasma capsulatum"
    ],
    "correctIndex": 0,
    "explanation": "O Cryptococcus neoformans possui espessa cápsula polissacarídica evidenciada negativamente pela Coloração com Tinta da China.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q45",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #45).\n\nOs antibióticos beta-lactâmicos (penicilinas, cefalosporinas e carbapenêmicos) exercem ação bactericida inibindo a:",
    "options": [
      "Síntese da parede celular bacteriana (transpeptidação do peptidoglicano)",
      "Subunidade 30S do ribossomo",
      "DNA girase (Topoisomerase II)",
      "RNA polimerase dependente de DNA"
    ],
    "correctIndex": 0,
    "explanation": "Os beta-lactâmicos ligam-se às PBPs (Penicillin-Binding Proteins) e bloqueiam a ligação cruzada de peptidoglicano na parede celular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q46",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #46).\n\nA resistência bacteriana à vancomicina em cepas de Enterococcus (VRE) decorre da modificação do dipeptídeo da parede de D-Ala-D-Ala para:",
    "options": [
      "D-Alanina-D-Lactato",
      "D-Glutato-D-Alanina",
      "L-Lisina-D-Ala",
      "Glicina-Glicina"
    ],
    "correctIndex": 0,
    "explanation": "O operon vanA/vanB altera o alvo de ligação da vancomicina para D-Ala-D-Lactato, reduzindo a afinidade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q47",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #47).\n\nO bacilo Gram-positivo aeróbico estrito com parede rica em ácidos micólicos resistente à descoloração por álcool-ácido (BAAR) é o:",
    "options": [
      "Mycobacterium tuberculosis",
      "Listeria monocytogenes",
      "Corynebacterium diphtheriae",
      "Bacillus anthracis"
    ],
    "correctIndex": 0,
    "explanation": "Os bacilos álcool-ácido resistentes (BAAR), como M. tuberculosis, coram-se pela técnica de Ziehl-Neelsen devido à alta concentração de ácidos micólicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q48",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #48).\n\nO vírus influenza modifica ciclicamente seus antígenos de superfície Hemaglutinina (HA) e Neuraminidase (NA) através do fenômeno de recombinação genética denominado:",
    "options": [
      "Drift e Shift antigênico",
      "Lisogenia",
      "Transformação bacteriana",
      "Transdução generalizada"
    ],
    "correctIndex": 0,
    "explanation": "Alterações menores por mutações ponto (drift) causam surtos anuais, enquanto grandes rearranjos de segmentos genômicos (shift) geram pandemias.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q49",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #49).\n\nO fungo dimórfico endêmico no Brasil associado ao contato com solo e vegetação com aspecto de 'roda de leme' no exame direto é:",
    "options": [
      "Paracoccidioides brasiliensis",
      "Sporothrix schenckii",
      "Blastomyces dermatitidis",
      "Coccidioides immitis"
    ],
    "correctIndex": 0,
    "explanation": "O Paracoccidioides brasiliensis exibe no tecido a forma leveduriforme multibrotante característica de 'roda de leme'.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q50",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Diagnóstico Microbiológico",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #50).\n\nA fermentação da lactose no meio ágar MacConkey permite diferenciar enterobactérias produtoras de colônias rosadas como a:",
    "options": [
      "Escherichia coli",
      "Salmonella typhi",
      "Shigella flexneri",
      "Pseudomonas aeruginosa"
    ],
    "correctIndex": 0,
    "explanation": "E. coli e Klebsiella são bacilos Gram-negativos lactose-positivos (fermentadores de lactose), formando colônias rosa/vermelhas em ágar MacConkey.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q51",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #51).\n\nCocos Gram-positivos dispostos em cadeias, beta-hemolíticos e sensíveis à bacitracina (Grupo A de Lancefield) correspondem a:",
    "options": [
      "Streptococcus pyogenes",
      "Streptococcus pneumoniae",
      "Staphylococcus aureus",
      "Enterococcus faecalis"
    ],
    "correctIndex": 0,
    "explanation": "O Streptococcus pyogenes (Strepto do Grupo A) é beta-hemolítico e sensível à bacitracina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q52",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #52).\n\nQual bactéria Gram-negativa em forma de vírgula, oxidase positiva, causa diarreia profusa em 'água de arroz' por toxina que ativa o AMPc?",
    "options": [
      "Vibrio cholerae",
      "Escherichia coli enterohemorrágica",
      "Salmonella enterica",
      "Shigella dysenteriae"
    ],
    "correctIndex": 0,
    "explanation": "O Vibrio cholerae produz a toxina colérica que hiperativa a adenilato ciclase no enterócito, gerando diarreia maciça.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q53",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #53).\n\nQual vírus hepatotrópico de genoma DNA de fita dupla parcial possui envelope contendo o antígeno de superfície HBsAg?",
    "options": [
      "Vírus da Hepatite B (HBV)",
      "Vírus da Hepatite A (HAV)",
      "Vírus da Hepatite C (HCV)",
      "Vírus da Hepatite E (HEV)"
    ],
    "correctIndex": 0,
    "explanation": "O HBV é o único vírus da hepatite humana com genoma DNA e possui os antígenos HBsAg, HBcAg e HBeAg.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q54",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #54).\n\nA levedura encapsulada oportunista causadora de meningite em imunodeprimidos identificada na tinta da China (nanquim) é:",
    "options": [
      "Cryptococcus neoformans",
      "Candida albicans",
      "Aspergillus fumigatus",
      "Histoplasma capsulatum"
    ],
    "correctIndex": 0,
    "explanation": "O Cryptococcus neoformans possui espessa cápsula polissacarídica evidenciada negativamente pela Coloração com Tinta da China.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q55",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #55).\n\nOs antibióticos beta-lactâmicos (penicilinas, cefalosporinas e carbapenêmicos) exercem ação bactericida inibindo a:",
    "options": [
      "Síntese da parede celular bacteriana (transpeptidação do peptidoglicano)",
      "Subunidade 30S do ribossomo",
      "DNA girase (Topoisomerase II)",
      "RNA polimerase dependente de DNA"
    ],
    "correctIndex": 0,
    "explanation": "Os beta-lactâmicos ligam-se às PBPs (Penicillin-Binding Proteins) e bloqueiam a ligação cruzada de peptidoglicano na parede celular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q56",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #56).\n\nA resistência bacteriana à vancomicina em cepas de Enterococcus (VRE) decorre da modificação do dipeptídeo da parede de D-Ala-D-Ala para:",
    "options": [
      "D-Alanina-D-Lactato",
      "D-Glutato-D-Alanina",
      "L-Lisina-D-Ala",
      "Glicina-Glicina"
    ],
    "correctIndex": 0,
    "explanation": "O operon vanA/vanB altera o alvo de ligação da vancomicina para D-Ala-D-Lactato, reduzindo a afinidade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q57",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #57).\n\nO bacilo Gram-positivo aeróbico estrito com parede rica em ácidos micólicos resistente à descoloração por álcool-ácido (BAAR) é o:",
    "options": [
      "Mycobacterium tuberculosis",
      "Listeria monocytogenes",
      "Corynebacterium diphtheriae",
      "Bacillus anthracis"
    ],
    "correctIndex": 0,
    "explanation": "Os bacilos álcool-ácido resistentes (BAAR), como M. tuberculosis, coram-se pela técnica de Ziehl-Neelsen devido à alta concentração de ácidos micólicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q58",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #58).\n\nO vírus influenza modifica ciclicamente seus antígenos de superfície Hemaglutinina (HA) e Neuraminidase (NA) através do fenômeno de recombinação genética denominado:",
    "options": [
      "Drift e Shift antigênico",
      "Lisogenia",
      "Transformação bacteriana",
      "Transdução generalizada"
    ],
    "correctIndex": 0,
    "explanation": "Alterações menores por mutações ponto (drift) causam surtos anuais, enquanto grandes rearranjos de segmentos genômicos (shift) geram pandemias.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q59",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #59).\n\nO fungo dimórfico endêmico no Brasil associado ao contato com solo e vegetação com aspecto de 'roda de leme' no exame direto é:",
    "options": [
      "Paracoccidioides brasiliensis",
      "Sporothrix schenckii",
      "Blastomyces dermatitidis",
      "Coccidioides immitis"
    ],
    "correctIndex": 0,
    "explanation": "O Paracoccidioides brasiliensis exibe no tecido a forma leveduriforme multibrotante característica de 'roda de leme'.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q60",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Diagnóstico Microbiológico",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #60).\n\nA fermentação da lactose no meio ágar MacConkey permite diferenciar enterobactérias produtoras de colônias rosadas como a:",
    "options": [
      "Escherichia coli",
      "Salmonella typhi",
      "Shigella flexneri",
      "Pseudomonas aeruginosa"
    ],
    "correctIndex": 0,
    "explanation": "E. coli e Klebsiella são bacilos Gram-negativos lactose-positivos (fermentadores de lactose), formando colônias rosa/vermelhas em ágar MacConkey.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q61",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #61).\n\nCocos Gram-positivos dispostos em cadeias, beta-hemolíticos e sensíveis à bacitracina (Grupo A de Lancefield) correspondem a:",
    "options": [
      "Streptococcus pyogenes",
      "Streptococcus pneumoniae",
      "Staphylococcus aureus",
      "Enterococcus faecalis"
    ],
    "correctIndex": 0,
    "explanation": "O Streptococcus pyogenes (Strepto do Grupo A) é beta-hemolítico e sensível à bacitracina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q62",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #62).\n\nQual bactéria Gram-negativa em forma de vírgula, oxidase positiva, causa diarreia profusa em 'água de arroz' por toxina que ativa o AMPc?",
    "options": [
      "Vibrio cholerae",
      "Escherichia coli enterohemorrágica",
      "Salmonella enterica",
      "Shigella dysenteriae"
    ],
    "correctIndex": 0,
    "explanation": "O Vibrio cholerae produz a toxina colérica que hiperativa a adenilato ciclase no enterócito, gerando diarreia maciça.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q63",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #63).\n\nQual vírus hepatotrópico de genoma DNA de fita dupla parcial possui envelope contendo o antígeno de superfície HBsAg?",
    "options": [
      "Vírus da Hepatite B (HBV)",
      "Vírus da Hepatite A (HAV)",
      "Vírus da Hepatite C (HCV)",
      "Vírus da Hepatite E (HEV)"
    ],
    "correctIndex": 0,
    "explanation": "O HBV é o único vírus da hepatite humana com genoma DNA e possui os antígenos HBsAg, HBcAg e HBeAg.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q64",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #64).\n\nA levedura encapsulada oportunista causadora de meningite em imunodeprimidos identificada na tinta da China (nanquim) é:",
    "options": [
      "Cryptococcus neoformans",
      "Candida albicans",
      "Aspergillus fumigatus",
      "Histoplasma capsulatum"
    ],
    "correctIndex": 0,
    "explanation": "O Cryptococcus neoformans possui espessa cápsula polissacarídica evidenciada negativamente pela Coloração com Tinta da China.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q65",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #65).\n\nOs antibióticos beta-lactâmicos (penicilinas, cefalosporinas e carbapenêmicos) exercem ação bactericida inibindo a:",
    "options": [
      "Síntese da parede celular bacteriana (transpeptidação do peptidoglicano)",
      "Subunidade 30S do ribossomo",
      "DNA girase (Topoisomerase II)",
      "RNA polimerase dependente de DNA"
    ],
    "correctIndex": 0,
    "explanation": "Os beta-lactâmicos ligam-se às PBPs (Penicillin-Binding Proteins) e bloqueiam a ligação cruzada de peptidoglicano na parede celular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q66",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #66).\n\nA resistência bacteriana à vancomicina em cepas de Enterococcus (VRE) decorre da modificação do dipeptídeo da parede de D-Ala-D-Ala para:",
    "options": [
      "D-Alanina-D-Lactato",
      "D-Glutato-D-Alanina",
      "L-Lisina-D-Ala",
      "Glicina-Glicina"
    ],
    "correctIndex": 0,
    "explanation": "O operon vanA/vanB altera o alvo de ligação da vancomicina para D-Ala-D-Lactato, reduzindo a afinidade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q67",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #67).\n\nO bacilo Gram-positivo aeróbico estrito com parede rica em ácidos micólicos resistente à descoloração por álcool-ácido (BAAR) é o:",
    "options": [
      "Mycobacterium tuberculosis",
      "Listeria monocytogenes",
      "Corynebacterium diphtheriae",
      "Bacillus anthracis"
    ],
    "correctIndex": 0,
    "explanation": "Os bacilos álcool-ácido resistentes (BAAR), como M. tuberculosis, coram-se pela técnica de Ziehl-Neelsen devido à alta concentração de ácidos micólicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q68",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #68).\n\nO vírus influenza modifica ciclicamente seus antígenos de superfície Hemaglutinina (HA) e Neuraminidase (NA) através do fenômeno de recombinação genética denominado:",
    "options": [
      "Drift e Shift antigênico",
      "Lisogenia",
      "Transformação bacteriana",
      "Transdução generalizada"
    ],
    "correctIndex": 0,
    "explanation": "Alterações menores por mutações ponto (drift) causam surtos anuais, enquanto grandes rearranjos de segmentos genômicos (shift) geram pandemias.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q69",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #69).\n\nO fungo dimórfico endêmico no Brasil associado ao contato com solo e vegetação com aspecto de 'roda de leme' no exame direto é:",
    "options": [
      "Paracoccidioides brasiliensis",
      "Sporothrix schenckii",
      "Blastomyces dermatitidis",
      "Coccidioides immitis"
    ],
    "correctIndex": 0,
    "explanation": "O Paracoccidioides brasiliensis exibe no tecido a forma leveduriforme multibrotante característica de 'roda de leme'.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q70",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Diagnóstico Microbiológico",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #70).\n\nA fermentação da lactose no meio ágar MacConkey permite diferenciar enterobactérias produtoras de colônias rosadas como a:",
    "options": [
      "Escherichia coli",
      "Salmonella typhi",
      "Shigella flexneri",
      "Pseudomonas aeruginosa"
    ],
    "correctIndex": 0,
    "explanation": "E. coli e Klebsiella são bacilos Gram-negativos lactose-positivos (fermentadores de lactose), formando colônias rosa/vermelhas em ágar MacConkey.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q71",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #71).\n\nCocos Gram-positivos dispostos em cadeias, beta-hemolíticos e sensíveis à bacitracina (Grupo A de Lancefield) correspondem a:",
    "options": [
      "Streptococcus pyogenes",
      "Streptococcus pneumoniae",
      "Staphylococcus aureus",
      "Enterococcus faecalis"
    ],
    "correctIndex": 0,
    "explanation": "O Streptococcus pyogenes (Strepto do Grupo A) é beta-hemolítico e sensível à bacitracina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q72",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #72).\n\nQual bactéria Gram-negativa em forma de vírgula, oxidase positiva, causa diarreia profusa em 'água de arroz' por toxina que ativa o AMPc?",
    "options": [
      "Vibrio cholerae",
      "Escherichia coli enterohemorrágica",
      "Salmonella enterica",
      "Shigella dysenteriae"
    ],
    "correctIndex": 0,
    "explanation": "O Vibrio cholerae produz a toxina colérica que hiperativa a adenilato ciclase no enterócito, gerando diarreia maciça.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q73",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #73).\n\nQual vírus hepatotrópico de genoma DNA de fita dupla parcial possui envelope contendo o antígeno de superfície HBsAg?",
    "options": [
      "Vírus da Hepatite B (HBV)",
      "Vírus da Hepatite A (HAV)",
      "Vírus da Hepatite C (HCV)",
      "Vírus da Hepatite E (HEV)"
    ],
    "correctIndex": 0,
    "explanation": "O HBV é o único vírus da hepatite humana com genoma DNA e possui os antígenos HBsAg, HBcAg e HBeAg.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q74",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #74).\n\nA levedura encapsulada oportunista causadora de meningite em imunodeprimidos identificada na tinta da China (nanquim) é:",
    "options": [
      "Cryptococcus neoformans",
      "Candida albicans",
      "Aspergillus fumigatus",
      "Histoplasma capsulatum"
    ],
    "correctIndex": 0,
    "explanation": "O Cryptococcus neoformans possui espessa cápsula polissacarídica evidenciada negativamente pela Coloração com Tinta da China.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q75",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #75).\n\nOs antibióticos beta-lactâmicos (penicilinas, cefalosporinas e carbapenêmicos) exercem ação bactericida inibindo a:",
    "options": [
      "Síntese da parede celular bacteriana (transpeptidação do peptidoglicano)",
      "Subunidade 30S do ribossomo",
      "DNA girase (Topoisomerase II)",
      "RNA polimerase dependente de DNA"
    ],
    "correctIndex": 0,
    "explanation": "Os beta-lactâmicos ligam-se às PBPs (Penicillin-Binding Proteins) e bloqueiam a ligação cruzada de peptidoglicano na parede celular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q76",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #76).\n\nA resistência bacteriana à vancomicina em cepas de Enterococcus (VRE) decorre da modificação do dipeptídeo da parede de D-Ala-D-Ala para:",
    "options": [
      "D-Alanina-D-Lactato",
      "D-Glutato-D-Alanina",
      "L-Lisina-D-Ala",
      "Glicina-Glicina"
    ],
    "correctIndex": 0,
    "explanation": "O operon vanA/vanB altera o alvo de ligação da vancomicina para D-Ala-D-Lactato, reduzindo a afinidade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q77",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #77).\n\nO bacilo Gram-positivo aeróbico estrito com parede rica em ácidos micólicos resistente à descoloração por álcool-ácido (BAAR) é o:",
    "options": [
      "Mycobacterium tuberculosis",
      "Listeria monocytogenes",
      "Corynebacterium diphtheriae",
      "Bacillus anthracis"
    ],
    "correctIndex": 0,
    "explanation": "Os bacilos álcool-ácido resistentes (BAAR), como M. tuberculosis, coram-se pela técnica de Ziehl-Neelsen devido à alta concentração de ácidos micólicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q78",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #78).\n\nO vírus influenza modifica ciclicamente seus antígenos de superfície Hemaglutinina (HA) e Neuraminidase (NA) através do fenômeno de recombinação genética denominado:",
    "options": [
      "Drift e Shift antigênico",
      "Lisogenia",
      "Transformação bacteriana",
      "Transdução generalizada"
    ],
    "correctIndex": 0,
    "explanation": "Alterações menores por mutações ponto (drift) causam surtos anuais, enquanto grandes rearranjos de segmentos genômicos (shift) geram pandemias.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q79",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #79).\n\nO fungo dimórfico endêmico no Brasil associado ao contato com solo e vegetação com aspecto de 'roda de leme' no exame direto é:",
    "options": [
      "Paracoccidioides brasiliensis",
      "Sporothrix schenckii",
      "Blastomyces dermatitidis",
      "Coccidioides immitis"
    ],
    "correctIndex": 0,
    "explanation": "O Paracoccidioides brasiliensis exibe no tecido a forma leveduriforme multibrotante característica de 'roda de leme'.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q80",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Diagnóstico Microbiológico",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #80).\n\nA fermentação da lactose no meio ágar MacConkey permite diferenciar enterobactérias produtoras de colônias rosadas como a:",
    "options": [
      "Escherichia coli",
      "Salmonella typhi",
      "Shigella flexneri",
      "Pseudomonas aeruginosa"
    ],
    "correctIndex": 0,
    "explanation": "E. coli e Klebsiella são bacilos Gram-negativos lactose-positivos (fermentadores de lactose), formando colônias rosa/vermelhas em ágar MacConkey.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q81",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #81).\n\nCocos Gram-positivos dispostos em cadeias, beta-hemolíticos e sensíveis à bacitracina (Grupo A de Lancefield) correspondem a:",
    "options": [
      "Streptococcus pyogenes",
      "Streptococcus pneumoniae",
      "Staphylococcus aureus",
      "Enterococcus faecalis"
    ],
    "correctIndex": 0,
    "explanation": "O Streptococcus pyogenes (Strepto do Grupo A) é beta-hemolítico e sensível à bacitracina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q82",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #82).\n\nQual bactéria Gram-negativa em forma de vírgula, oxidase positiva, causa diarreia profusa em 'água de arroz' por toxina que ativa o AMPc?",
    "options": [
      "Vibrio cholerae",
      "Escherichia coli enterohemorrágica",
      "Salmonella enterica",
      "Shigella dysenteriae"
    ],
    "correctIndex": 0,
    "explanation": "O Vibrio cholerae produz a toxina colérica que hiperativa a adenilato ciclase no enterócito, gerando diarreia maciça.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q83",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #83).\n\nQual vírus hepatotrópico de genoma DNA de fita dupla parcial possui envelope contendo o antígeno de superfície HBsAg?",
    "options": [
      "Vírus da Hepatite B (HBV)",
      "Vírus da Hepatite A (HAV)",
      "Vírus da Hepatite C (HCV)",
      "Vírus da Hepatite E (HEV)"
    ],
    "correctIndex": 0,
    "explanation": "O HBV é o único vírus da hepatite humana com genoma DNA e possui os antígenos HBsAg, HBcAg e HBeAg.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q84",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #84).\n\nA levedura encapsulada oportunista causadora de meningite em imunodeprimidos identificada na tinta da China (nanquim) é:",
    "options": [
      "Cryptococcus neoformans",
      "Candida albicans",
      "Aspergillus fumigatus",
      "Histoplasma capsulatum"
    ],
    "correctIndex": 0,
    "explanation": "O Cryptococcus neoformans possui espessa cápsula polissacarídica evidenciada negativamente pela Coloração com Tinta da China.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q85",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #85).\n\nOs antibióticos beta-lactâmicos (penicilinas, cefalosporinas e carbapenêmicos) exercem ação bactericida inibindo a:",
    "options": [
      "Síntese da parede celular bacteriana (transpeptidação do peptidoglicano)",
      "Subunidade 30S do ribossomo",
      "DNA girase (Topoisomerase II)",
      "RNA polimerase dependente de DNA"
    ],
    "correctIndex": 0,
    "explanation": "Os beta-lactâmicos ligam-se às PBPs (Penicillin-Binding Proteins) e bloqueiam a ligação cruzada de peptidoglicano na parede celular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q86",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #86).\n\nA resistência bacteriana à vancomicina em cepas de Enterococcus (VRE) decorre da modificação do dipeptídeo da parede de D-Ala-D-Ala para:",
    "options": [
      "D-Alanina-D-Lactato",
      "D-Glutato-D-Alanina",
      "L-Lisina-D-Ala",
      "Glicina-Glicina"
    ],
    "correctIndex": 0,
    "explanation": "O operon vanA/vanB altera o alvo de ligação da vancomicina para D-Ala-D-Lactato, reduzindo a afinidade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q87",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #87).\n\nO bacilo Gram-positivo aeróbico estrito com parede rica em ácidos micólicos resistente à descoloração por álcool-ácido (BAAR) é o:",
    "options": [
      "Mycobacterium tuberculosis",
      "Listeria monocytogenes",
      "Corynebacterium diphtheriae",
      "Bacillus anthracis"
    ],
    "correctIndex": 0,
    "explanation": "Os bacilos álcool-ácido resistentes (BAAR), como M. tuberculosis, coram-se pela técnica de Ziehl-Neelsen devido à alta concentração de ácidos micólicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q88",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #88).\n\nO vírus influenza modifica ciclicamente seus antígenos de superfície Hemaglutinina (HA) e Neuraminidase (NA) através do fenômeno de recombinação genética denominado:",
    "options": [
      "Drift e Shift antigênico",
      "Lisogenia",
      "Transformação bacteriana",
      "Transdução generalizada"
    ],
    "correctIndex": 0,
    "explanation": "Alterações menores por mutações ponto (drift) causam surtos anuais, enquanto grandes rearranjos de segmentos genômicos (shift) geram pandemias.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q89",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #89).\n\nO fungo dimórfico endêmico no Brasil associado ao contato com solo e vegetação com aspecto de 'roda de leme' no exame direto é:",
    "options": [
      "Paracoccidioides brasiliensis",
      "Sporothrix schenckii",
      "Blastomyces dermatitidis",
      "Coccidioides immitis"
    ],
    "correctIndex": 0,
    "explanation": "O Paracoccidioides brasiliensis exibe no tecido a forma leveduriforme multibrotante característica de 'roda de leme'.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q90",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Diagnóstico Microbiológico",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #90).\n\nA fermentação da lactose no meio ágar MacConkey permite diferenciar enterobactérias produtoras de colônias rosadas como a:",
    "options": [
      "Escherichia coli",
      "Salmonella typhi",
      "Shigella flexneri",
      "Pseudomonas aeruginosa"
    ],
    "correctIndex": 0,
    "explanation": "E. coli e Klebsiella são bacilos Gram-negativos lactose-positivos (fermentadores de lactose), formando colônias rosa/vermelhas em ágar MacConkey.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q91",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #91).\n\nCocos Gram-positivos dispostos em cadeias, beta-hemolíticos e sensíveis à bacitracina (Grupo A de Lancefield) correspondem a:",
    "options": [
      "Streptococcus pyogenes",
      "Streptococcus pneumoniae",
      "Staphylococcus aureus",
      "Enterococcus faecalis"
    ],
    "correctIndex": 0,
    "explanation": "O Streptococcus pyogenes (Strepto do Grupo A) é beta-hemolítico e sensível à bacitracina.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q92",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #92).\n\nQual bactéria Gram-negativa em forma de vírgula, oxidase positiva, causa diarreia profusa em 'água de arroz' por toxina que ativa o AMPc?",
    "options": [
      "Vibrio cholerae",
      "Escherichia coli enterohemorrágica",
      "Salmonella enterica",
      "Shigella dysenteriae"
    ],
    "correctIndex": 0,
    "explanation": "O Vibrio cholerae produz a toxina colérica que hiperativa a adenilato ciclase no enterócito, gerando diarreia maciça.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q93",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #93).\n\nQual vírus hepatotrópico de genoma DNA de fita dupla parcial possui envelope contendo o antígeno de superfície HBsAg?",
    "options": [
      "Vírus da Hepatite B (HBV)",
      "Vírus da Hepatite A (HAV)",
      "Vírus da Hepatite C (HCV)",
      "Vírus da Hepatite E (HEV)"
    ],
    "correctIndex": 0,
    "explanation": "O HBV é o único vírus da hepatite humana com genoma DNA e possui os antígenos HBsAg, HBcAg e HBeAg.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q94",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #94).\n\nA levedura encapsulada oportunista causadora de meningite em imunodeprimidos identificada na tinta da China (nanquim) é:",
    "options": [
      "Cryptococcus neoformans",
      "Candida albicans",
      "Aspergillus fumigatus",
      "Histoplasma capsulatum"
    ],
    "correctIndex": 0,
    "explanation": "O Cryptococcus neoformans possui espessa cápsula polissacarídica evidenciada negativamente pela Coloração com Tinta da China.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q95",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #95).\n\nOs antibióticos beta-lactâmicos (penicilinas, cefalosporinas e carbapenêmicos) exercem ação bactericida inibindo a:",
    "options": [
      "Síntese da parede celular bacteriana (transpeptidação do peptidoglicano)",
      "Subunidade 30S do ribossomo",
      "DNA girase (Topoisomerase II)",
      "RNA polimerase dependente de DNA"
    ],
    "correctIndex": 0,
    "explanation": "Os beta-lactâmicos ligam-se às PBPs (Penicillin-Binding Proteins) e bloqueiam a ligação cruzada de peptidoglicano na parede celular.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q96",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Antimicrobianos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #96).\n\nA resistência bacteriana à vancomicina em cepas de Enterococcus (VRE) decorre da modificação do dipeptídeo da parede de D-Ala-D-Ala para:",
    "options": [
      "D-Alanina-D-Lactato",
      "D-Glutato-D-Alanina",
      "L-Lisina-D-Ala",
      "Glicina-Glicina"
    ],
    "correctIndex": 0,
    "explanation": "O operon vanA/vanB altera o alvo de ligação da vancomicina para D-Ala-D-Lactato, reduzindo a afinidade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q97",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Bacteriologia",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #97).\n\nO bacilo Gram-positivo aeróbico estrito com parede rica em ácidos micólicos resistente à descoloração por álcool-ácido (BAAR) é o:",
    "options": [
      "Mycobacterium tuberculosis",
      "Listeria monocytogenes",
      "Corynebacterium diphtheriae",
      "Bacillus anthracis"
    ],
    "correctIndex": 0,
    "explanation": "Os bacilos álcool-ácido resistentes (BAAR), como M. tuberculosis, coram-se pela técnica de Ziehl-Neelsen devido à alta concentração de ácidos micólicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q98",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Virologia",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #98).\n\nO vírus influenza modifica ciclicamente seus antígenos de superfície Hemaglutinina (HA) e Neuraminidase (NA) através do fenômeno de recombinação genética denominado:",
    "options": [
      "Drift e Shift antigênico",
      "Lisogenia",
      "Transformação bacteriana",
      "Transdução generalizada"
    ],
    "correctIndex": 0,
    "explanation": "Alterações menores por mutações ponto (drift) causam surtos anuais, enquanto grandes rearranjos de segmentos genômicos (shift) geram pandemias.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q99",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Micologia",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #99).\n\nO fungo dimórfico endêmico no Brasil associado ao contato com solo e vegetação com aspecto de 'roda de leme' no exame direto é:",
    "options": [
      "Paracoccidioides brasiliensis",
      "Sporothrix schenckii",
      "Blastomyces dermatitidis",
      "Coccidioides immitis"
    ],
    "correctIndex": 0,
    "explanation": "O Paracoccidioides brasiliensis exibe no tecido a forma leveduriforme multibrotante característica de 'roda de leme'.",
    "difficulty": "medium"
  },
  {
    "id": "basico_microbiologia_q100",
    "cycle": "Ciclo Básico",
    "subject": "Microbiologia",
    "subSubject": "Diagnóstico Microbiológico",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #100).\n\nA fermentação da lactose no meio ágar MacConkey permite diferenciar enterobactérias produtoras de colônias rosadas como a:",
    "options": [
      "Escherichia coli",
      "Salmonella typhi",
      "Shigella flexneri",
      "Pseudomonas aeruginosa"
    ],
    "correctIndex": 0,
    "explanation": "E. coli e Klebsiella são bacilos Gram-negativos lactose-positivos (fermentadores de lactose), formando colônias rosa/vermelhas em ágar MacConkey.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q1",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunidade Inata",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #1).\n\nOs receptores de reconhecimento de padrão (PRRs), como os Toll-like Receptors (TLRs), reconhecem nas superfícies microbianas os:",
    "options": [
      "Padrões moleculares associados a patógenos (PAMPs)",
      "Antícorpos IgG autólogos",
      "Complexos HLA de classe I",
      "Epitopos de células T ativadas"
    ],
    "correctIndex": 0,
    "explanation": "PRRs identificam PAMPs (como LPS, flagelina e RNA de fita dupla) conservados evolutivamente em microrganismos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q2",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Sistema Complemento",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #2).\n\nA via alternativa de ativação do sistema complemento é iniciada de forma espontânea pela hidrólise do componente:",
    "options": [
      "C3",
      "C1q",
      "C4",
      "C5"
    ],
    "correctIndex": 0,
    "explanation": "A via alternativa é ativada constantemente em baixo nível pelo 'tick-over' espontâneo do C3 em C3(H2O).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q3",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Apresentação de Antígenos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #3).\n\nAs moléculas do Complexo Principal de Histocompatibilidade (MHC) de Classe I apresentam peptídeos endógenos aos linfócitos T:",
    "options": [
      "T CD8+ citotóxicos",
      "T CD4+ auxiliares (Th)",
      "B de memória",
      "Naturais Killer (NK) de repouso"
    ],
    "correctIndex": 0,
    "explanation": "MHC de classe I (presente em todas as células nucleadas) apresenta peptídeos aos T CD8+, enquanto MHC II apresenta aos T CD4+.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q4",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #4).\n\nA imunoglobulina produzida na forma de dímero associada à peça secretora protegendo mucosas respiratórias e digestivas é a:",
    "options": [
      "IgA",
      "IgG",
      "IgM",
      "IgE"
    ],
    "correctIndex": 0,
    "explanation": "A IgA secretora é a principal classe de anticorpos presente nas secreções mucosas e leite materno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q5",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #5).\n\nA isoforma de imunoglobulina envolvida primariamente na degranulação de mastócitos e basófilos em reações alérgicas é a:",
    "options": [
      "IgE",
      "IgM",
      "IgG4",
      "IgD"
    ],
    "correctIndex": 0,
    "explanation": "A IgE liga-se aos receptores Fc-epsilon-RI nos mastócitos, e seu entrecruzamento por alérgenos desencadeia anafilaxia/alergia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q6",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #6).\n\nA reação de hipersensibilidade Tipo II (mediada por anticorpos citotóxicos) é exemplificada clinicamente pela:",
    "options": [
      "Reação transfusional por incompatibilidade ABO",
      "Asma brônquica alérgica",
      "Doença do soro",
      "Dermatite de contato por níquel"
    ],
    "correctIndex": 0,
    "explanation": "Na reação tipo II, IgG ou IgM ligam-se a antígenos na superfície celular, ativando complemento e fagocitose (ex: hemólise transfusional).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q7",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #7).\n\nA dermatite de contato por hera venenosa ou níquel e a reação à tuberculina (PPD) são reações de hipersensibilidade mediadas por células T do Tipo:",
    "options": [
      "Tipo IV (tardia)",
      "Tipo I (imediata)",
      "Tipo II (citotóxica)",
      "Tipo III (por imunocomplexos)"
    ],
    "correctIndex": 0,
    "explanation": "A hipersensibilidade tipo IV é mediada por linfócitos T sensibilizados e macrófagos, sem participação direta de anticorpos solúveis.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q8",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Tolerância Imunológica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #8).\n\nA deleção clonal de linfócitos T autoreativos durante a maturação no timo através do reconhecimento de autoantígenos (proteína AIRE) representa a:",
    "options": [
      "Tolerância central",
      "Tolerância periférica por anergia",
      "Supressão por Treg",
      "Exaustão clonal"
    ],
    "correctIndex": 0,
    "explanation": "A tolerância central elimina clones T e B autoreativos nos órgãos linfoides primários (timo e medula óssea).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q9",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunodeficiência",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #9).\n\nA Agamaglobulinemia ligada ao X (Síndrome de Bruton) decorre da mutação no gene BTK com ausência de maturação de:",
    "options": [
      "Linfócitos B",
      "Linfócitos T CD4+",
      "Células NK",
      "Neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "A deficiência da tirosina quinase de Bruton (BTK) bloqueia o desenvolvimento de pré-linfócitos B em B maduros, zerando imunoglobulinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q10",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Vacinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #10).\n\nA vacina constituída por microrganismos vivos atenuados contra o sarampo, caxumba e rubéola (Tríplice Viral) estimula de forma marcante a imunidade:",
    "options": [
      "Celular (T CD8+ e T CD4+) e humoral duradoura",
      "Apenas humoral passiva transitória",
      "Exclusivamente barreira inata mucosal",
      "Apenas ativação de neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "Vacinas atenuadas replicam-se discretamente e apresentam antígenos por MHC I e II, gerando imunidade celular e humoral robusta.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q11",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunidade Inata",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #11).\n\nOs receptores de reconhecimento de padrão (PRRs), como os Toll-like Receptors (TLRs), reconhecem nas superfícies microbianas os:",
    "options": [
      "Padrões moleculares associados a patógenos (PAMPs)",
      "Antícorpos IgG autólogos",
      "Complexos HLA de classe I",
      "Epitopos de células T ativadas"
    ],
    "correctIndex": 0,
    "explanation": "PRRs identificam PAMPs (como LPS, flagelina e RNA de fita dupla) conservados evolutivamente em microrganismos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q12",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Sistema Complemento",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #12).\n\nA via alternativa de ativação do sistema complemento é iniciada de forma espontânea pela hidrólise do componente:",
    "options": [
      "C3",
      "C1q",
      "C4",
      "C5"
    ],
    "correctIndex": 0,
    "explanation": "A via alternativa é ativada constantemente em baixo nível pelo 'tick-over' espontâneo do C3 em C3(H2O).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q13",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Apresentação de Antígenos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #13).\n\nAs moléculas do Complexo Principal de Histocompatibilidade (MHC) de Classe I apresentam peptídeos endógenos aos linfócitos T:",
    "options": [
      "T CD8+ citotóxicos",
      "T CD4+ auxiliares (Th)",
      "B de memória",
      "Naturais Killer (NK) de repouso"
    ],
    "correctIndex": 0,
    "explanation": "MHC de classe I (presente em todas as células nucleadas) apresenta peptídeos aos T CD8+, enquanto MHC II apresenta aos T CD4+.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q14",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #14).\n\nA imunoglobulina produzida na forma de dímero associada à peça secretora protegendo mucosas respiratórias e digestivas é a:",
    "options": [
      "IgA",
      "IgG",
      "IgM",
      "IgE"
    ],
    "correctIndex": 0,
    "explanation": "A IgA secretora é a principal classe de anticorpos presente nas secreções mucosas e leite materno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q15",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #15).\n\nA isoforma de imunoglobulina envolvida primariamente na degranulação de mastócitos e basófilos em reações alérgicas é a:",
    "options": [
      "IgE",
      "IgM",
      "IgG4",
      "IgD"
    ],
    "correctIndex": 0,
    "explanation": "A IgE liga-se aos receptores Fc-epsilon-RI nos mastócitos, e seu entrecruzamento por alérgenos desencadeia anafilaxia/alergia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q16",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #16).\n\nA reação de hipersensibilidade Tipo II (mediada por anticorpos citotóxicos) é exemplificada clinicamente pela:",
    "options": [
      "Reação transfusional por incompatibilidade ABO",
      "Asma brônquica alérgica",
      "Doença do soro",
      "Dermatite de contato por níquel"
    ],
    "correctIndex": 0,
    "explanation": "Na reação tipo II, IgG ou IgM ligam-se a antígenos na superfície celular, ativando complemento e fagocitose (ex: hemólise transfusional).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q17",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #17).\n\nA dermatite de contato por hera venenosa ou níquel e a reação à tuberculina (PPD) são reações de hipersensibilidade mediadas por células T do Tipo:",
    "options": [
      "Tipo IV (tardia)",
      "Tipo I (imediata)",
      "Tipo II (citotóxica)",
      "Tipo III (por imunocomplexos)"
    ],
    "correctIndex": 0,
    "explanation": "A hipersensibilidade tipo IV é mediada por linfócitos T sensibilizados e macrófagos, sem participação direta de anticorpos solúveis.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q18",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Tolerância Imunológica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #18).\n\nA deleção clonal de linfócitos T autoreativos durante a maturação no timo através do reconhecimento de autoantígenos (proteína AIRE) representa a:",
    "options": [
      "Tolerância central",
      "Tolerância periférica por anergia",
      "Supressão por Treg",
      "Exaustão clonal"
    ],
    "correctIndex": 0,
    "explanation": "A tolerância central elimina clones T e B autoreativos nos órgãos linfoides primários (timo e medula óssea).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q19",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunodeficiência",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #19).\n\nA Agamaglobulinemia ligada ao X (Síndrome de Bruton) decorre da mutação no gene BTK com ausência de maturação de:",
    "options": [
      "Linfócitos B",
      "Linfócitos T CD4+",
      "Células NK",
      "Neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "A deficiência da tirosina quinase de Bruton (BTK) bloqueia o desenvolvimento de pré-linfócitos B em B maduros, zerando imunoglobulinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q20",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Vacinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #20).\n\nA vacina constituída por microrganismos vivos atenuados contra o sarampo, caxumba e rubéola (Tríplice Viral) estimula de forma marcante a imunidade:",
    "options": [
      "Celular (T CD8+ e T CD4+) e humoral duradoura",
      "Apenas humoral passiva transitória",
      "Exclusivamente barreira inata mucosal",
      "Apenas ativação de neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "Vacinas atenuadas replicam-se discretamente e apresentam antígenos por MHC I e II, gerando imunidade celular e humoral robusta.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q21",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunidade Inata",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #21).\n\nOs receptores de reconhecimento de padrão (PRRs), como os Toll-like Receptors (TLRs), reconhecem nas superfícies microbianas os:",
    "options": [
      "Padrões moleculares associados a patógenos (PAMPs)",
      "Antícorpos IgG autólogos",
      "Complexos HLA de classe I",
      "Epitopos de células T ativadas"
    ],
    "correctIndex": 0,
    "explanation": "PRRs identificam PAMPs (como LPS, flagelina e RNA de fita dupla) conservados evolutivamente em microrganismos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q22",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Sistema Complemento",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #22).\n\nA via alternativa de ativação do sistema complemento é iniciada de forma espontânea pela hidrólise do componente:",
    "options": [
      "C3",
      "C1q",
      "C4",
      "C5"
    ],
    "correctIndex": 0,
    "explanation": "A via alternativa é ativada constantemente em baixo nível pelo 'tick-over' espontâneo do C3 em C3(H2O).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q23",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Apresentação de Antígenos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #23).\n\nAs moléculas do Complexo Principal de Histocompatibilidade (MHC) de Classe I apresentam peptídeos endógenos aos linfócitos T:",
    "options": [
      "T CD8+ citotóxicos",
      "T CD4+ auxiliares (Th)",
      "B de memória",
      "Naturais Killer (NK) de repouso"
    ],
    "correctIndex": 0,
    "explanation": "MHC de classe I (presente em todas as células nucleadas) apresenta peptídeos aos T CD8+, enquanto MHC II apresenta aos T CD4+.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q24",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #24).\n\nA imunoglobulina produzida na forma de dímero associada à peça secretora protegendo mucosas respiratórias e digestivas é a:",
    "options": [
      "IgA",
      "IgG",
      "IgM",
      "IgE"
    ],
    "correctIndex": 0,
    "explanation": "A IgA secretora é a principal classe de anticorpos presente nas secreções mucosas e leite materno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q25",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #25).\n\nA isoforma de imunoglobulina envolvida primariamente na degranulação de mastócitos e basófilos em reações alérgicas é a:",
    "options": [
      "IgE",
      "IgM",
      "IgG4",
      "IgD"
    ],
    "correctIndex": 0,
    "explanation": "A IgE liga-se aos receptores Fc-epsilon-RI nos mastócitos, e seu entrecruzamento por alérgenos desencadeia anafilaxia/alergia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q26",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #26).\n\nA reação de hipersensibilidade Tipo II (mediada por anticorpos citotóxicos) é exemplificada clinicamente pela:",
    "options": [
      "Reação transfusional por incompatibilidade ABO",
      "Asma brônquica alérgica",
      "Doença do soro",
      "Dermatite de contato por níquel"
    ],
    "correctIndex": 0,
    "explanation": "Na reação tipo II, IgG ou IgM ligam-se a antígenos na superfície celular, ativando complemento e fagocitose (ex: hemólise transfusional).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q27",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #27).\n\nA dermatite de contato por hera venenosa ou níquel e a reação à tuberculina (PPD) são reações de hipersensibilidade mediadas por células T do Tipo:",
    "options": [
      "Tipo IV (tardia)",
      "Tipo I (imediata)",
      "Tipo II (citotóxica)",
      "Tipo III (por imunocomplexos)"
    ],
    "correctIndex": 0,
    "explanation": "A hipersensibilidade tipo IV é mediada por linfócitos T sensibilizados e macrófagos, sem participação direta de anticorpos solúveis.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q28",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Tolerância Imunológica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #28).\n\nA deleção clonal de linfócitos T autoreativos durante a maturação no timo através do reconhecimento de autoantígenos (proteína AIRE) representa a:",
    "options": [
      "Tolerância central",
      "Tolerância periférica por anergia",
      "Supressão por Treg",
      "Exaustão clonal"
    ],
    "correctIndex": 0,
    "explanation": "A tolerância central elimina clones T e B autoreativos nos órgãos linfoides primários (timo e medula óssea).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q29",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunodeficiência",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #29).\n\nA Agamaglobulinemia ligada ao X (Síndrome de Bruton) decorre da mutação no gene BTK com ausência de maturação de:",
    "options": [
      "Linfócitos B",
      "Linfócitos T CD4+",
      "Células NK",
      "Neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "A deficiência da tirosina quinase de Bruton (BTK) bloqueia o desenvolvimento de pré-linfócitos B em B maduros, zerando imunoglobulinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q30",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Vacinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #30).\n\nA vacina constituída por microrganismos vivos atenuados contra o sarampo, caxumba e rubéola (Tríplice Viral) estimula de forma marcante a imunidade:",
    "options": [
      "Celular (T CD8+ e T CD4+) e humoral duradoura",
      "Apenas humoral passiva transitória",
      "Exclusivamente barreira inata mucosal",
      "Apenas ativação de neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "Vacinas atenuadas replicam-se discretamente e apresentam antígenos por MHC I e II, gerando imunidade celular e humoral robusta.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q31",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunidade Inata",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #31).\n\nOs receptores de reconhecimento de padrão (PRRs), como os Toll-like Receptors (TLRs), reconhecem nas superfícies microbianas os:",
    "options": [
      "Padrões moleculares associados a patógenos (PAMPs)",
      "Antícorpos IgG autólogos",
      "Complexos HLA de classe I",
      "Epitopos de células T ativadas"
    ],
    "correctIndex": 0,
    "explanation": "PRRs identificam PAMPs (como LPS, flagelina e RNA de fita dupla) conservados evolutivamente em microrganismos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q32",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Sistema Complemento",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #32).\n\nA via alternativa de ativação do sistema complemento é iniciada de forma espontânea pela hidrólise do componente:",
    "options": [
      "C3",
      "C1q",
      "C4",
      "C5"
    ],
    "correctIndex": 0,
    "explanation": "A via alternativa é ativada constantemente em baixo nível pelo 'tick-over' espontâneo do C3 em C3(H2O).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q33",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Apresentação de Antígenos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #33).\n\nAs moléculas do Complexo Principal de Histocompatibilidade (MHC) de Classe I apresentam peptídeos endógenos aos linfócitos T:",
    "options": [
      "T CD8+ citotóxicos",
      "T CD4+ auxiliares (Th)",
      "B de memória",
      "Naturais Killer (NK) de repouso"
    ],
    "correctIndex": 0,
    "explanation": "MHC de classe I (presente em todas as células nucleadas) apresenta peptídeos aos T CD8+, enquanto MHC II apresenta aos T CD4+.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q34",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #34).\n\nA imunoglobulina produzida na forma de dímero associada à peça secretora protegendo mucosas respiratórias e digestivas é a:",
    "options": [
      "IgA",
      "IgG",
      "IgM",
      "IgE"
    ],
    "correctIndex": 0,
    "explanation": "A IgA secretora é a principal classe de anticorpos presente nas secreções mucosas e leite materno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q35",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #35).\n\nA isoforma de imunoglobulina envolvida primariamente na degranulação de mastócitos e basófilos em reações alérgicas é a:",
    "options": [
      "IgE",
      "IgM",
      "IgG4",
      "IgD"
    ],
    "correctIndex": 0,
    "explanation": "A IgE liga-se aos receptores Fc-epsilon-RI nos mastócitos, e seu entrecruzamento por alérgenos desencadeia anafilaxia/alergia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q36",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #36).\n\nA reação de hipersensibilidade Tipo II (mediada por anticorpos citotóxicos) é exemplificada clinicamente pela:",
    "options": [
      "Reação transfusional por incompatibilidade ABO",
      "Asma brônquica alérgica",
      "Doença do soro",
      "Dermatite de contato por níquel"
    ],
    "correctIndex": 0,
    "explanation": "Na reação tipo II, IgG ou IgM ligam-se a antígenos na superfície celular, ativando complemento e fagocitose (ex: hemólise transfusional).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q37",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #37).\n\nA dermatite de contato por hera venenosa ou níquel e a reação à tuberculina (PPD) são reações de hipersensibilidade mediadas por células T do Tipo:",
    "options": [
      "Tipo IV (tardia)",
      "Tipo I (imediata)",
      "Tipo II (citotóxica)",
      "Tipo III (por imunocomplexos)"
    ],
    "correctIndex": 0,
    "explanation": "A hipersensibilidade tipo IV é mediada por linfócitos T sensibilizados e macrófagos, sem participação direta de anticorpos solúveis.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q38",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Tolerância Imunológica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #38).\n\nA deleção clonal de linfócitos T autoreativos durante a maturação no timo através do reconhecimento de autoantígenos (proteína AIRE) representa a:",
    "options": [
      "Tolerância central",
      "Tolerância periférica por anergia",
      "Supressão por Treg",
      "Exaustão clonal"
    ],
    "correctIndex": 0,
    "explanation": "A tolerância central elimina clones T e B autoreativos nos órgãos linfoides primários (timo e medula óssea).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q39",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunodeficiência",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #39).\n\nA Agamaglobulinemia ligada ao X (Síndrome de Bruton) decorre da mutação no gene BTK com ausência de maturação de:",
    "options": [
      "Linfócitos B",
      "Linfócitos T CD4+",
      "Células NK",
      "Neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "A deficiência da tirosina quinase de Bruton (BTK) bloqueia o desenvolvimento de pré-linfócitos B em B maduros, zerando imunoglobulinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q40",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Vacinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #40).\n\nA vacina constituída por microrganismos vivos atenuados contra o sarampo, caxumba e rubéola (Tríplice Viral) estimula de forma marcante a imunidade:",
    "options": [
      "Celular (T CD8+ e T CD4+) e humoral duradoura",
      "Apenas humoral passiva transitória",
      "Exclusivamente barreira inata mucosal",
      "Apenas ativação de neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "Vacinas atenuadas replicam-se discretamente e apresentam antígenos por MHC I e II, gerando imunidade celular e humoral robusta.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q41",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunidade Inata",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #41).\n\nOs receptores de reconhecimento de padrão (PRRs), como os Toll-like Receptors (TLRs), reconhecem nas superfícies microbianas os:",
    "options": [
      "Padrões moleculares associados a patógenos (PAMPs)",
      "Antícorpos IgG autólogos",
      "Complexos HLA de classe I",
      "Epitopos de células T ativadas"
    ],
    "correctIndex": 0,
    "explanation": "PRRs identificam PAMPs (como LPS, flagelina e RNA de fita dupla) conservados evolutivamente em microrganismos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q42",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Sistema Complemento",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #42).\n\nA via alternativa de ativação do sistema complemento é iniciada de forma espontânea pela hidrólise do componente:",
    "options": [
      "C3",
      "C1q",
      "C4",
      "C5"
    ],
    "correctIndex": 0,
    "explanation": "A via alternativa é ativada constantemente em baixo nível pelo 'tick-over' espontâneo do C3 em C3(H2O).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q43",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Apresentação de Antígenos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #43).\n\nAs moléculas do Complexo Principal de Histocompatibilidade (MHC) de Classe I apresentam peptídeos endógenos aos linfócitos T:",
    "options": [
      "T CD8+ citotóxicos",
      "T CD4+ auxiliares (Th)",
      "B de memória",
      "Naturais Killer (NK) de repouso"
    ],
    "correctIndex": 0,
    "explanation": "MHC de classe I (presente em todas as células nucleadas) apresenta peptídeos aos T CD8+, enquanto MHC II apresenta aos T CD4+.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q44",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #44).\n\nA imunoglobulina produzida na forma de dímero associada à peça secretora protegendo mucosas respiratórias e digestivas é a:",
    "options": [
      "IgA",
      "IgG",
      "IgM",
      "IgE"
    ],
    "correctIndex": 0,
    "explanation": "A IgA secretora é a principal classe de anticorpos presente nas secreções mucosas e leite materno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q45",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #45).\n\nA isoforma de imunoglobulina envolvida primariamente na degranulação de mastócitos e basófilos em reações alérgicas é a:",
    "options": [
      "IgE",
      "IgM",
      "IgG4",
      "IgD"
    ],
    "correctIndex": 0,
    "explanation": "A IgE liga-se aos receptores Fc-epsilon-RI nos mastócitos, e seu entrecruzamento por alérgenos desencadeia anafilaxia/alergia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q46",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #46).\n\nA reação de hipersensibilidade Tipo II (mediada por anticorpos citotóxicos) é exemplificada clinicamente pela:",
    "options": [
      "Reação transfusional por incompatibilidade ABO",
      "Asma brônquica alérgica",
      "Doença do soro",
      "Dermatite de contato por níquel"
    ],
    "correctIndex": 0,
    "explanation": "Na reação tipo II, IgG ou IgM ligam-se a antígenos na superfície celular, ativando complemento e fagocitose (ex: hemólise transfusional).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q47",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #47).\n\nA dermatite de contato por hera venenosa ou níquel e a reação à tuberculina (PPD) são reações de hipersensibilidade mediadas por células T do Tipo:",
    "options": [
      "Tipo IV (tardia)",
      "Tipo I (imediata)",
      "Tipo II (citotóxica)",
      "Tipo III (por imunocomplexos)"
    ],
    "correctIndex": 0,
    "explanation": "A hipersensibilidade tipo IV é mediada por linfócitos T sensibilizados e macrófagos, sem participação direta de anticorpos solúveis.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q48",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Tolerância Imunológica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #48).\n\nA deleção clonal de linfócitos T autoreativos durante a maturação no timo através do reconhecimento de autoantígenos (proteína AIRE) representa a:",
    "options": [
      "Tolerância central",
      "Tolerância periférica por anergia",
      "Supressão por Treg",
      "Exaustão clonal"
    ],
    "correctIndex": 0,
    "explanation": "A tolerância central elimina clones T e B autoreativos nos órgãos linfoides primários (timo e medula óssea).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q49",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunodeficiência",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #49).\n\nA Agamaglobulinemia ligada ao X (Síndrome de Bruton) decorre da mutação no gene BTK com ausência de maturação de:",
    "options": [
      "Linfócitos B",
      "Linfócitos T CD4+",
      "Células NK",
      "Neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "A deficiência da tirosina quinase de Bruton (BTK) bloqueia o desenvolvimento de pré-linfócitos B em B maduros, zerando imunoglobulinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q50",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Vacinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #50).\n\nA vacina constituída por microrganismos vivos atenuados contra o sarampo, caxumba e rubéola (Tríplice Viral) estimula de forma marcante a imunidade:",
    "options": [
      "Celular (T CD8+ e T CD4+) e humoral duradoura",
      "Apenas humoral passiva transitória",
      "Exclusivamente barreira inata mucosal",
      "Apenas ativação de neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "Vacinas atenuadas replicam-se discretamente e apresentam antígenos por MHC I e II, gerando imunidade celular e humoral robusta.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q51",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunidade Inata",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #51).\n\nOs receptores de reconhecimento de padrão (PRRs), como os Toll-like Receptors (TLRs), reconhecem nas superfícies microbianas os:",
    "options": [
      "Padrões moleculares associados a patógenos (PAMPs)",
      "Antícorpos IgG autólogos",
      "Complexos HLA de classe I",
      "Epitopos de células T ativadas"
    ],
    "correctIndex": 0,
    "explanation": "PRRs identificam PAMPs (como LPS, flagelina e RNA de fita dupla) conservados evolutivamente em microrganismos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q52",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Sistema Complemento",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #52).\n\nA via alternativa de ativação do sistema complemento é iniciada de forma espontânea pela hidrólise do componente:",
    "options": [
      "C3",
      "C1q",
      "C4",
      "C5"
    ],
    "correctIndex": 0,
    "explanation": "A via alternativa é ativada constantemente em baixo nível pelo 'tick-over' espontâneo do C3 em C3(H2O).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q53",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Apresentação de Antígenos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #53).\n\nAs moléculas do Complexo Principal de Histocompatibilidade (MHC) de Classe I apresentam peptídeos endógenos aos linfócitos T:",
    "options": [
      "T CD8+ citotóxicos",
      "T CD4+ auxiliares (Th)",
      "B de memória",
      "Naturais Killer (NK) de repouso"
    ],
    "correctIndex": 0,
    "explanation": "MHC de classe I (presente em todas as células nucleadas) apresenta peptídeos aos T CD8+, enquanto MHC II apresenta aos T CD4+.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q54",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #54).\n\nA imunoglobulina produzida na forma de dímero associada à peça secretora protegendo mucosas respiratórias e digestivas é a:",
    "options": [
      "IgA",
      "IgG",
      "IgM",
      "IgE"
    ],
    "correctIndex": 0,
    "explanation": "A IgA secretora é a principal classe de anticorpos presente nas secreções mucosas e leite materno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q55",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #55).\n\nA isoforma de imunoglobulina envolvida primariamente na degranulação de mastócitos e basófilos em reações alérgicas é a:",
    "options": [
      "IgE",
      "IgM",
      "IgG4",
      "IgD"
    ],
    "correctIndex": 0,
    "explanation": "A IgE liga-se aos receptores Fc-epsilon-RI nos mastócitos, e seu entrecruzamento por alérgenos desencadeia anafilaxia/alergia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q56",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #56).\n\nA reação de hipersensibilidade Tipo II (mediada por anticorpos citotóxicos) é exemplificada clinicamente pela:",
    "options": [
      "Reação transfusional por incompatibilidade ABO",
      "Asma brônquica alérgica",
      "Doença do soro",
      "Dermatite de contato por níquel"
    ],
    "correctIndex": 0,
    "explanation": "Na reação tipo II, IgG ou IgM ligam-se a antígenos na superfície celular, ativando complemento e fagocitose (ex: hemólise transfusional).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q57",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #57).\n\nA dermatite de contato por hera venenosa ou níquel e a reação à tuberculina (PPD) são reações de hipersensibilidade mediadas por células T do Tipo:",
    "options": [
      "Tipo IV (tardia)",
      "Tipo I (imediata)",
      "Tipo II (citotóxica)",
      "Tipo III (por imunocomplexos)"
    ],
    "correctIndex": 0,
    "explanation": "A hipersensibilidade tipo IV é mediada por linfócitos T sensibilizados e macrófagos, sem participação direta de anticorpos solúveis.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q58",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Tolerância Imunológica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #58).\n\nA deleção clonal de linfócitos T autoreativos durante a maturação no timo através do reconhecimento de autoantígenos (proteína AIRE) representa a:",
    "options": [
      "Tolerância central",
      "Tolerância periférica por anergia",
      "Supressão por Treg",
      "Exaustão clonal"
    ],
    "correctIndex": 0,
    "explanation": "A tolerância central elimina clones T e B autoreativos nos órgãos linfoides primários (timo e medula óssea).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q59",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunodeficiência",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #59).\n\nA Agamaglobulinemia ligada ao X (Síndrome de Bruton) decorre da mutação no gene BTK com ausência de maturação de:",
    "options": [
      "Linfócitos B",
      "Linfócitos T CD4+",
      "Células NK",
      "Neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "A deficiência da tirosina quinase de Bruton (BTK) bloqueia o desenvolvimento de pré-linfócitos B em B maduros, zerando imunoglobulinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q60",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Vacinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #60).\n\nA vacina constituída por microrganismos vivos atenuados contra o sarampo, caxumba e rubéola (Tríplice Viral) estimula de forma marcante a imunidade:",
    "options": [
      "Celular (T CD8+ e T CD4+) e humoral duradoura",
      "Apenas humoral passiva transitória",
      "Exclusivamente barreira inata mucosal",
      "Apenas ativação de neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "Vacinas atenuadas replicam-se discretamente e apresentam antígenos por MHC I e II, gerando imunidade celular e humoral robusta.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q61",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunidade Inata",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #61).\n\nOs receptores de reconhecimento de padrão (PRRs), como os Toll-like Receptors (TLRs), reconhecem nas superfícies microbianas os:",
    "options": [
      "Padrões moleculares associados a patógenos (PAMPs)",
      "Antícorpos IgG autólogos",
      "Complexos HLA de classe I",
      "Epitopos de células T ativadas"
    ],
    "correctIndex": 0,
    "explanation": "PRRs identificam PAMPs (como LPS, flagelina e RNA de fita dupla) conservados evolutivamente em microrganismos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q62",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Sistema Complemento",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #62).\n\nA via alternativa de ativação do sistema complemento é iniciada de forma espontânea pela hidrólise do componente:",
    "options": [
      "C3",
      "C1q",
      "C4",
      "C5"
    ],
    "correctIndex": 0,
    "explanation": "A via alternativa é ativada constantemente em baixo nível pelo 'tick-over' espontâneo do C3 em C3(H2O).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q63",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Apresentação de Antígenos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #63).\n\nAs moléculas do Complexo Principal de Histocompatibilidade (MHC) de Classe I apresentam peptídeos endógenos aos linfócitos T:",
    "options": [
      "T CD8+ citotóxicos",
      "T CD4+ auxiliares (Th)",
      "B de memória",
      "Naturais Killer (NK) de repouso"
    ],
    "correctIndex": 0,
    "explanation": "MHC de classe I (presente em todas as células nucleadas) apresenta peptídeos aos T CD8+, enquanto MHC II apresenta aos T CD4+.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q64",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #64).\n\nA imunoglobulina produzida na forma de dímero associada à peça secretora protegendo mucosas respiratórias e digestivas é a:",
    "options": [
      "IgA",
      "IgG",
      "IgM",
      "IgE"
    ],
    "correctIndex": 0,
    "explanation": "A IgA secretora é a principal classe de anticorpos presente nas secreções mucosas e leite materno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q65",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #65).\n\nA isoforma de imunoglobulina envolvida primariamente na degranulação de mastócitos e basófilos em reações alérgicas é a:",
    "options": [
      "IgE",
      "IgM",
      "IgG4",
      "IgD"
    ],
    "correctIndex": 0,
    "explanation": "A IgE liga-se aos receptores Fc-epsilon-RI nos mastócitos, e seu entrecruzamento por alérgenos desencadeia anafilaxia/alergia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q66",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #66).\n\nA reação de hipersensibilidade Tipo II (mediada por anticorpos citotóxicos) é exemplificada clinicamente pela:",
    "options": [
      "Reação transfusional por incompatibilidade ABO",
      "Asma brônquica alérgica",
      "Doença do soro",
      "Dermatite de contato por níquel"
    ],
    "correctIndex": 0,
    "explanation": "Na reação tipo II, IgG ou IgM ligam-se a antígenos na superfície celular, ativando complemento e fagocitose (ex: hemólise transfusional).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q67",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #67).\n\nA dermatite de contato por hera venenosa ou níquel e a reação à tuberculina (PPD) são reações de hipersensibilidade mediadas por células T do Tipo:",
    "options": [
      "Tipo IV (tardia)",
      "Tipo I (imediata)",
      "Tipo II (citotóxica)",
      "Tipo III (por imunocomplexos)"
    ],
    "correctIndex": 0,
    "explanation": "A hipersensibilidade tipo IV é mediada por linfócitos T sensibilizados e macrófagos, sem participação direta de anticorpos solúveis.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q68",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Tolerância Imunológica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #68).\n\nA deleção clonal de linfócitos T autoreativos durante a maturação no timo através do reconhecimento de autoantígenos (proteína AIRE) representa a:",
    "options": [
      "Tolerância central",
      "Tolerância periférica por anergia",
      "Supressão por Treg",
      "Exaustão clonal"
    ],
    "correctIndex": 0,
    "explanation": "A tolerância central elimina clones T e B autoreativos nos órgãos linfoides primários (timo e medula óssea).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q69",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunodeficiência",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #69).\n\nA Agamaglobulinemia ligada ao X (Síndrome de Bruton) decorre da mutação no gene BTK com ausência de maturação de:",
    "options": [
      "Linfócitos B",
      "Linfócitos T CD4+",
      "Células NK",
      "Neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "A deficiência da tirosina quinase de Bruton (BTK) bloqueia o desenvolvimento de pré-linfócitos B em B maduros, zerando imunoglobulinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q70",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Vacinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #70).\n\nA vacina constituída por microrganismos vivos atenuados contra o sarampo, caxumba e rubéola (Tríplice Viral) estimula de forma marcante a imunidade:",
    "options": [
      "Celular (T CD8+ e T CD4+) e humoral duradoura",
      "Apenas humoral passiva transitória",
      "Exclusivamente barreira inata mucosal",
      "Apenas ativação de neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "Vacinas atenuadas replicam-se discretamente e apresentam antígenos por MHC I e II, gerando imunidade celular e humoral robusta.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q71",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunidade Inata",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #71).\n\nOs receptores de reconhecimento de padrão (PRRs), como os Toll-like Receptors (TLRs), reconhecem nas superfícies microbianas os:",
    "options": [
      "Padrões moleculares associados a patógenos (PAMPs)",
      "Antícorpos IgG autólogos",
      "Complexos HLA de classe I",
      "Epitopos de células T ativadas"
    ],
    "correctIndex": 0,
    "explanation": "PRRs identificam PAMPs (como LPS, flagelina e RNA de fita dupla) conservados evolutivamente em microrganismos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q72",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Sistema Complemento",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #72).\n\nA via alternativa de ativação do sistema complemento é iniciada de forma espontânea pela hidrólise do componente:",
    "options": [
      "C3",
      "C1q",
      "C4",
      "C5"
    ],
    "correctIndex": 0,
    "explanation": "A via alternativa é ativada constantemente em baixo nível pelo 'tick-over' espontâneo do C3 em C3(H2O).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q73",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Apresentação de Antígenos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #73).\n\nAs moléculas do Complexo Principal de Histocompatibilidade (MHC) de Classe I apresentam peptídeos endógenos aos linfócitos T:",
    "options": [
      "T CD8+ citotóxicos",
      "T CD4+ auxiliares (Th)",
      "B de memória",
      "Naturais Killer (NK) de repouso"
    ],
    "correctIndex": 0,
    "explanation": "MHC de classe I (presente em todas as células nucleadas) apresenta peptídeos aos T CD8+, enquanto MHC II apresenta aos T CD4+.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q74",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #74).\n\nA imunoglobulina produzida na forma de dímero associada à peça secretora protegendo mucosas respiratórias e digestivas é a:",
    "options": [
      "IgA",
      "IgG",
      "IgM",
      "IgE"
    ],
    "correctIndex": 0,
    "explanation": "A IgA secretora é a principal classe de anticorpos presente nas secreções mucosas e leite materno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q75",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #75).\n\nA isoforma de imunoglobulina envolvida primariamente na degranulação de mastócitos e basófilos em reações alérgicas é a:",
    "options": [
      "IgE",
      "IgM",
      "IgG4",
      "IgD"
    ],
    "correctIndex": 0,
    "explanation": "A IgE liga-se aos receptores Fc-epsilon-RI nos mastócitos, e seu entrecruzamento por alérgenos desencadeia anafilaxia/alergia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q76",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #76).\n\nA reação de hipersensibilidade Tipo II (mediada por anticorpos citotóxicos) é exemplificada clinicamente pela:",
    "options": [
      "Reação transfusional por incompatibilidade ABO",
      "Asma brônquica alérgica",
      "Doença do soro",
      "Dermatite de contato por níquel"
    ],
    "correctIndex": 0,
    "explanation": "Na reação tipo II, IgG ou IgM ligam-se a antígenos na superfície celular, ativando complemento e fagocitose (ex: hemólise transfusional).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q77",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #77).\n\nA dermatite de contato por hera venenosa ou níquel e a reação à tuberculina (PPD) são reações de hipersensibilidade mediadas por células T do Tipo:",
    "options": [
      "Tipo IV (tardia)",
      "Tipo I (imediata)",
      "Tipo II (citotóxica)",
      "Tipo III (por imunocomplexos)"
    ],
    "correctIndex": 0,
    "explanation": "A hipersensibilidade tipo IV é mediada por linfócitos T sensibilizados e macrófagos, sem participação direta de anticorpos solúveis.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q78",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Tolerância Imunológica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #78).\n\nA deleção clonal de linfócitos T autoreativos durante a maturação no timo através do reconhecimento de autoantígenos (proteína AIRE) representa a:",
    "options": [
      "Tolerância central",
      "Tolerância periférica por anergia",
      "Supressão por Treg",
      "Exaustão clonal"
    ],
    "correctIndex": 0,
    "explanation": "A tolerância central elimina clones T e B autoreativos nos órgãos linfoides primários (timo e medula óssea).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q79",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunodeficiência",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #79).\n\nA Agamaglobulinemia ligada ao X (Síndrome de Bruton) decorre da mutação no gene BTK com ausência de maturação de:",
    "options": [
      "Linfócitos B",
      "Linfócitos T CD4+",
      "Células NK",
      "Neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "A deficiência da tirosina quinase de Bruton (BTK) bloqueia o desenvolvimento de pré-linfócitos B em B maduros, zerando imunoglobulinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q80",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Vacinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #80).\n\nA vacina constituída por microrganismos vivos atenuados contra o sarampo, caxumba e rubéola (Tríplice Viral) estimula de forma marcante a imunidade:",
    "options": [
      "Celular (T CD8+ e T CD4+) e humoral duradoura",
      "Apenas humoral passiva transitória",
      "Exclusivamente barreira inata mucosal",
      "Apenas ativação de neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "Vacinas atenuadas replicam-se discretamente e apresentam antígenos por MHC I e II, gerando imunidade celular e humoral robusta.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q81",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunidade Inata",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #81).\n\nOs receptores de reconhecimento de padrão (PRRs), como os Toll-like Receptors (TLRs), reconhecem nas superfícies microbianas os:",
    "options": [
      "Padrões moleculares associados a patógenos (PAMPs)",
      "Antícorpos IgG autólogos",
      "Complexos HLA de classe I",
      "Epitopos de células T ativadas"
    ],
    "correctIndex": 0,
    "explanation": "PRRs identificam PAMPs (como LPS, flagelina e RNA de fita dupla) conservados evolutivamente em microrganismos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q82",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Sistema Complemento",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #82).\n\nA via alternativa de ativação do sistema complemento é iniciada de forma espontânea pela hidrólise do componente:",
    "options": [
      "C3",
      "C1q",
      "C4",
      "C5"
    ],
    "correctIndex": 0,
    "explanation": "A via alternativa é ativada constantemente em baixo nível pelo 'tick-over' espontâneo do C3 em C3(H2O).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q83",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Apresentação de Antígenos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #83).\n\nAs moléculas do Complexo Principal de Histocompatibilidade (MHC) de Classe I apresentam peptídeos endógenos aos linfócitos T:",
    "options": [
      "T CD8+ citotóxicos",
      "T CD4+ auxiliares (Th)",
      "B de memória",
      "Naturais Killer (NK) de repouso"
    ],
    "correctIndex": 0,
    "explanation": "MHC de classe I (presente em todas as células nucleadas) apresenta peptídeos aos T CD8+, enquanto MHC II apresenta aos T CD4+.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q84",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #84).\n\nA imunoglobulina produzida na forma de dímero associada à peça secretora protegendo mucosas respiratórias e digestivas é a:",
    "options": [
      "IgA",
      "IgG",
      "IgM",
      "IgE"
    ],
    "correctIndex": 0,
    "explanation": "A IgA secretora é a principal classe de anticorpos presente nas secreções mucosas e leite materno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q85",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #85).\n\nA isoforma de imunoglobulina envolvida primariamente na degranulação de mastócitos e basófilos em reações alérgicas é a:",
    "options": [
      "IgE",
      "IgM",
      "IgG4",
      "IgD"
    ],
    "correctIndex": 0,
    "explanation": "A IgE liga-se aos receptores Fc-epsilon-RI nos mastócitos, e seu entrecruzamento por alérgenos desencadeia anafilaxia/alergia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q86",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #86).\n\nA reação de hipersensibilidade Tipo II (mediada por anticorpos citotóxicos) é exemplificada clinicamente pela:",
    "options": [
      "Reação transfusional por incompatibilidade ABO",
      "Asma brônquica alérgica",
      "Doença do soro",
      "Dermatite de contato por níquel"
    ],
    "correctIndex": 0,
    "explanation": "Na reação tipo II, IgG ou IgM ligam-se a antígenos na superfície celular, ativando complemento e fagocitose (ex: hemólise transfusional).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q87",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #87).\n\nA dermatite de contato por hera venenosa ou níquel e a reação à tuberculina (PPD) são reações de hipersensibilidade mediadas por células T do Tipo:",
    "options": [
      "Tipo IV (tardia)",
      "Tipo I (imediata)",
      "Tipo II (citotóxica)",
      "Tipo III (por imunocomplexos)"
    ],
    "correctIndex": 0,
    "explanation": "A hipersensibilidade tipo IV é mediada por linfócitos T sensibilizados e macrófagos, sem participação direta de anticorpos solúveis.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q88",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Tolerância Imunológica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #88).\n\nA deleção clonal de linfócitos T autoreativos durante a maturação no timo através do reconhecimento de autoantígenos (proteína AIRE) representa a:",
    "options": [
      "Tolerância central",
      "Tolerância periférica por anergia",
      "Supressão por Treg",
      "Exaustão clonal"
    ],
    "correctIndex": 0,
    "explanation": "A tolerância central elimina clones T e B autoreativos nos órgãos linfoides primários (timo e medula óssea).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q89",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunodeficiência",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #89).\n\nA Agamaglobulinemia ligada ao X (Síndrome de Bruton) decorre da mutação no gene BTK com ausência de maturação de:",
    "options": [
      "Linfócitos B",
      "Linfócitos T CD4+",
      "Células NK",
      "Neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "A deficiência da tirosina quinase de Bruton (BTK) bloqueia o desenvolvimento de pré-linfócitos B em B maduros, zerando imunoglobulinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q90",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Vacinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #90).\n\nA vacina constituída por microrganismos vivos atenuados contra o sarampo, caxumba e rubéola (Tríplice Viral) estimula de forma marcante a imunidade:",
    "options": [
      "Celular (T CD8+ e T CD4+) e humoral duradoura",
      "Apenas humoral passiva transitória",
      "Exclusivamente barreira inata mucosal",
      "Apenas ativação de neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "Vacinas atenuadas replicam-se discretamente e apresentam antígenos por MHC I e II, gerando imunidade celular e humoral robusta.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q91",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunidade Inata",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #91).\n\nOs receptores de reconhecimento de padrão (PRRs), como os Toll-like Receptors (TLRs), reconhecem nas superfícies microbianas os:",
    "options": [
      "Padrões moleculares associados a patógenos (PAMPs)",
      "Antícorpos IgG autólogos",
      "Complexos HLA de classe I",
      "Epitopos de células T ativadas"
    ],
    "correctIndex": 0,
    "explanation": "PRRs identificam PAMPs (como LPS, flagelina e RNA de fita dupla) conservados evolutivamente em microrganismos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q92",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Sistema Complemento",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #92).\n\nA via alternativa de ativação do sistema complemento é iniciada de forma espontânea pela hidrólise do componente:",
    "options": [
      "C3",
      "C1q",
      "C4",
      "C5"
    ],
    "correctIndex": 0,
    "explanation": "A via alternativa é ativada constantemente em baixo nível pelo 'tick-over' espontâneo do C3 em C3(H2O).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q93",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Apresentação de Antígenos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #93).\n\nAs moléculas do Complexo Principal de Histocompatibilidade (MHC) de Classe I apresentam peptídeos endógenos aos linfócitos T:",
    "options": [
      "T CD8+ citotóxicos",
      "T CD4+ auxiliares (Th)",
      "B de memória",
      "Naturais Killer (NK) de repouso"
    ],
    "correctIndex": 0,
    "explanation": "MHC de classe I (presente em todas as células nucleadas) apresenta peptídeos aos T CD8+, enquanto MHC II apresenta aos T CD4+.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q94",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #94).\n\nA imunoglobulina produzida na forma de dímero associada à peça secretora protegendo mucosas respiratórias e digestivas é a:",
    "options": [
      "IgA",
      "IgG",
      "IgM",
      "IgE"
    ],
    "correctIndex": 0,
    "explanation": "A IgA secretora é a principal classe de anticorpos presente nas secreções mucosas e leite materno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q95",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunoglobulinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #95).\n\nA isoforma de imunoglobulina envolvida primariamente na degranulação de mastócitos e basófilos em reações alérgicas é a:",
    "options": [
      "IgE",
      "IgM",
      "IgG4",
      "IgD"
    ],
    "correctIndex": 0,
    "explanation": "A IgE liga-se aos receptores Fc-epsilon-RI nos mastócitos, e seu entrecruzamento por alérgenos desencadeia anafilaxia/alergia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q96",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #96).\n\nA reação de hipersensibilidade Tipo II (mediada por anticorpos citotóxicos) é exemplificada clinicamente pela:",
    "options": [
      "Reação transfusional por incompatibilidade ABO",
      "Asma brônquica alérgica",
      "Doença do soro",
      "Dermatite de contato por níquel"
    ],
    "correctIndex": 0,
    "explanation": "Na reação tipo II, IgG ou IgM ligam-se a antígenos na superfície celular, ativando complemento e fagocitose (ex: hemólise transfusional).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q97",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Hipersensibilidade",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #97).\n\nA dermatite de contato por hera venenosa ou níquel e a reação à tuberculina (PPD) são reações de hipersensibilidade mediadas por células T do Tipo:",
    "options": [
      "Tipo IV (tardia)",
      "Tipo I (imediata)",
      "Tipo II (citotóxica)",
      "Tipo III (por imunocomplexos)"
    ],
    "correctIndex": 0,
    "explanation": "A hipersensibilidade tipo IV é mediada por linfócitos T sensibilizados e macrófagos, sem participação direta de anticorpos solúveis.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q98",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Tolerância Imunológica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #98).\n\nA deleção clonal de linfócitos T autoreativos durante a maturação no timo através do reconhecimento de autoantígenos (proteína AIRE) representa a:",
    "options": [
      "Tolerância central",
      "Tolerância periférica por anergia",
      "Supressão por Treg",
      "Exaustão clonal"
    ],
    "correctIndex": 0,
    "explanation": "A tolerância central elimina clones T e B autoreativos nos órgãos linfoides primários (timo e medula óssea).",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q99",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Imunodeficiência",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #99).\n\nA Agamaglobulinemia ligada ao X (Síndrome de Bruton) decorre da mutação no gene BTK com ausência de maturação de:",
    "options": [
      "Linfócitos B",
      "Linfócitos T CD4+",
      "Células NK",
      "Neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "A deficiência da tirosina quinase de Bruton (BTK) bloqueia o desenvolvimento de pré-linfócitos B em B maduros, zerando imunoglobulinas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_imunologia_q100",
    "cycle": "Ciclo Básico",
    "subject": "Imunologia",
    "subSubject": "Vacinas",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #100).\n\nA vacina constituída por microrganismos vivos atenuados contra o sarampo, caxumba e rubéola (Tríplice Viral) estimula de forma marcante a imunidade:",
    "options": [
      "Celular (T CD8+ e T CD4+) e humoral duradoura",
      "Apenas humoral passiva transitória",
      "Exclusivamente barreira inata mucosal",
      "Apenas ativação de neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "Vacinas atenuadas replicam-se discretamente e apresentam antígenos por MHC I e II, gerando imunidade celular e humoral robusta.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q1",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Monogênica",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #1).\n\nUm padrão de herança autossômica dominante caracteriza-se na árvore genealógica por afetar:",
    "options": [
      "Indivíduos de ambas as gerações sucessivas com transmissão de pai para filho",
      "Exclusivamente homens descendentes de mães portadoras",
      "Apenas prole de casamentos consanguíneos",
      "Apenas descendentes por linha materna mitocondrial"
    ],
    "correctIndex": 0,
    "explanation": "Na herança autossômica dominante, a mutação em um único alelo gera a doença, afetando ambos os sexos e transmitindo-se verticalmente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q2",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Ligada ao X",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #2).\n\nNa herança recessiva ligada ao cromossomo X (ex: Hemofilia A e Distrofia de Duchenne), homens afetados transmitem o alelo mutado para:",
    "options": [
      "Todas as suas filhas (portadoras) e nenhum dos seus filhos homens",
      "50% dos seus filhos homens e 50% das filhas",
      "Todos os seus filhos homens e nenhuma das filhas",
      "Exclusivamente para os netos homens por linha paterna"
    ],
    "correctIndex": 0,
    "explanation": "O pai transmite seu único cromossomo X para todas as filhas e o Y para os filhos. Logo, todas as filhas do homem afetado serão portadoras obrigatoriamente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q3",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Citogenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #3).\n\nA Síndrome de Down é causada em mais de 95% dos casos por trisomia livre do cromossomo 21 decorrente de:",
    "options": [
      "Não-disjunção meiótica (predominantemente na meiose I materna)",
      "Translocação robertsoniana balanceada paterna",
      "Inversão pericêntrica do cromossomo 21",
      "Mosaico mitótico embrionário tardio"
    ],
    "correctIndex": 0,
    "explanation": "A não-disjunção meiótica do par 21 durante a monogênese materna (associada à idade materna avançada) é a causa principal da trissomia do 21.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q4",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética Molecular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #4).\n\nO dogma central da biologia molecular descreve o fluxo de informação genética na sequência de:",
    "options": [
      "Replicação do DNA -> Transcrição para RNA -> Tradução para Proteína",
      "Tradução de Proteína -> Transcrição para RNA -> DNA",
      "RNA -> Proteína -> DNA mitocondrial",
      "Transcrição de Proteína -> Replicação de RNA"
    ],
    "correctIndex": 0,
    "explanation": "O fluxo genético clássico ocorre do DNA (molde) transcrito em mRNA e traduzido em cadeia polipeptídica nos ribossomos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q5",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Mutações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #5).\n\nUma mutação pontual que altera um códon codificador de aminoácido para um códon de parada precoce (UAA, UAG, UGA) é denominada mutação:",
    "options": [
      "Nonsense (sem sentido)",
      "Missense (de sentido trocado)",
      "Silenciosa (sinônima)",
      "Frameshift (mudança na matriz de leitura)"
    ],
    "correctIndex": 0,
    "explanation": "Mutações nonsense introduzem prematuramente um códon de terminação, truncando a proteína final.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q6",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Oncogenética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #6).\n\nO gene TP53 é considerado o 'guardião do genoma', atuando como um clássico gene:",
    "options": [
      "Supressor de tumor (indutor de parada do ciclo celular e apoptose)",
      "Proto-oncogene ativador de tirosina quinase",
      "Gene de fusão oncogênico",
      "Inibidor de reparo por excisão de bases"
    ],
    "correctIndex": 0,
    "explanation": "O p53 detecta danos no DNA na fase G1/S, ativando reparo ou induzindo apoptose se o dano for irreparável.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q7",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #7).\n\nA inativação aleatória do cromossomo X nas células somáticas femininas formando o corpúsculo de Barr no núcleo interfásico decorre de:",
    "options": [
      "Metilação do DNA e modificações de histonas pelo RNA XIST",
      "Deleção completa do braço curto do X",
      "Duplicação do cromossomo Y",
      "Acetilação maciça da cromatina"
    ],
    "correctIndex": 0,
    "explanation": "O lncRNA XIST reveste e silencia epigeneticamente um dos cromossomos X femininos (hipótese de Lyon).",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q8",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #8).\n\nA expressão diferencial de um alelo genético dependendo se ele foi herdado do pai ou da mãe é o fenômeno denominado:",
    "options": [
      "Imprinting genômico (ex: Síndromes de Prader-Willi e Angelman)",
      "Penetrância incompleta",
      "Expressividade variável",
      "Pleiotropia"
    ],
    "correctIndex": 0,
    "explanation": "O imprinting genômico silencia epigeneticamente alelos parental-específicos durante a gametogênese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q9",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Diagnóstico Genético",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #9).\n\nA técnica molecular de PCR (Reação em Cadeia da Polimerase) permite:",
    "options": [
      "Amplificar exponencialmente sequências específicas de DNA in vitro",
      "Determinar a cariotipagem estrutural em metáfase",
      "Sequenciar proteínas maduras plasmáticas",
      "Criar vetores de clonagem de linfócitos B"
    ],
    "correctIndex": 0,
    "explanation": "A PCR utiliza primers específicos e DNA polimerase termoresistente (Taq) para amplificar trechos alvos de DNA.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q10",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética de Populações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #10).\n\nEm uma população no equilíbrio de Hardy-Weinberg com dois alelos (A e a) com frequência de a = 0,2, a frequência de heterozigotos (Aa) é:",
    "options": [
      "0,32 (32%)",
      "0,16 (16%)",
      "0,04 (4%)",
      "0,64 (64%)"
    ],
    "correctIndex": 0,
    "explanation": "p + q = 1 -> se q = 0,2, p = 0,8. A frequência de heterozigotos 2pq = 2 x 0,8 x 0,2 = 0,32 (32%).",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q11",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Monogênica",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #11).\n\nUm padrão de herança autossômica dominante caracteriza-se na árvore genealógica por afetar:",
    "options": [
      "Indivíduos de ambas as gerações sucessivas com transmissão de pai para filho",
      "Exclusivamente homens descendentes de mães portadoras",
      "Apenas prole de casamentos consanguíneos",
      "Apenas descendentes por linha materna mitocondrial"
    ],
    "correctIndex": 0,
    "explanation": "Na herança autossômica dominante, a mutação em um único alelo gera a doença, afetando ambos os sexos e transmitindo-se verticalmente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q12",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Ligada ao X",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #12).\n\nNa herança recessiva ligada ao cromossomo X (ex: Hemofilia A e Distrofia de Duchenne), homens afetados transmitem o alelo mutado para:",
    "options": [
      "Todas as suas filhas (portadoras) e nenhum dos seus filhos homens",
      "50% dos seus filhos homens e 50% das filhas",
      "Todos os seus filhos homens e nenhuma das filhas",
      "Exclusivamente para os netos homens por linha paterna"
    ],
    "correctIndex": 0,
    "explanation": "O pai transmite seu único cromossomo X para todas as filhas e o Y para os filhos. Logo, todas as filhas do homem afetado serão portadoras obrigatoriamente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q13",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Citogenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #13).\n\nA Síndrome de Down é causada em mais de 95% dos casos por trisomia livre do cromossomo 21 decorrente de:",
    "options": [
      "Não-disjunção meiótica (predominantemente na meiose I materna)",
      "Translocação robertsoniana balanceada paterna",
      "Inversão pericêntrica do cromossomo 21",
      "Mosaico mitótico embrionário tardio"
    ],
    "correctIndex": 0,
    "explanation": "A não-disjunção meiótica do par 21 durante a monogênese materna (associada à idade materna avançada) é a causa principal da trissomia do 21.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q14",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética Molecular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #14).\n\nO dogma central da biologia molecular descreve o fluxo de informação genética na sequência de:",
    "options": [
      "Replicação do DNA -> Transcrição para RNA -> Tradução para Proteína",
      "Tradução de Proteína -> Transcrição para RNA -> DNA",
      "RNA -> Proteína -> DNA mitocondrial",
      "Transcrição de Proteína -> Replicação de RNA"
    ],
    "correctIndex": 0,
    "explanation": "O fluxo genético clássico ocorre do DNA (molde) transcrito em mRNA e traduzido em cadeia polipeptídica nos ribossomos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q15",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Mutações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #15).\n\nUma mutação pontual que altera um códon codificador de aminoácido para um códon de parada precoce (UAA, UAG, UGA) é denominada mutação:",
    "options": [
      "Nonsense (sem sentido)",
      "Missense (de sentido trocado)",
      "Silenciosa (sinônima)",
      "Frameshift (mudança na matriz de leitura)"
    ],
    "correctIndex": 0,
    "explanation": "Mutações nonsense introduzem prematuramente um códon de terminação, truncando a proteína final.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q16",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Oncogenética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #16).\n\nO gene TP53 é considerado o 'guardião do genoma', atuando como um clássico gene:",
    "options": [
      "Supressor de tumor (indutor de parada do ciclo celular e apoptose)",
      "Proto-oncogene ativador de tirosina quinase",
      "Gene de fusão oncogênico",
      "Inibidor de reparo por excisão de bases"
    ],
    "correctIndex": 0,
    "explanation": "O p53 detecta danos no DNA na fase G1/S, ativando reparo ou induzindo apoptose se o dano for irreparável.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q17",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #17).\n\nA inativação aleatória do cromossomo X nas células somáticas femininas formando o corpúsculo de Barr no núcleo interfásico decorre de:",
    "options": [
      "Metilação do DNA e modificações de histonas pelo RNA XIST",
      "Deleção completa do braço curto do X",
      "Duplicação do cromossomo Y",
      "Acetilação maciça da cromatina"
    ],
    "correctIndex": 0,
    "explanation": "O lncRNA XIST reveste e silencia epigeneticamente um dos cromossomos X femininos (hipótese de Lyon).",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q18",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #18).\n\nA expressão diferencial de um alelo genético dependendo se ele foi herdado do pai ou da mãe é o fenômeno denominado:",
    "options": [
      "Imprinting genômico (ex: Síndromes de Prader-Willi e Angelman)",
      "Penetrância incompleta",
      "Expressividade variável",
      "Pleiotropia"
    ],
    "correctIndex": 0,
    "explanation": "O imprinting genômico silencia epigeneticamente alelos parental-específicos durante a gametogênese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q19",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Diagnóstico Genético",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #19).\n\nA técnica molecular de PCR (Reação em Cadeia da Polimerase) permite:",
    "options": [
      "Amplificar exponencialmente sequências específicas de DNA in vitro",
      "Determinar a cariotipagem estrutural em metáfase",
      "Sequenciar proteínas maduras plasmáticas",
      "Criar vetores de clonagem de linfócitos B"
    ],
    "correctIndex": 0,
    "explanation": "A PCR utiliza primers específicos e DNA polimerase termoresistente (Taq) para amplificar trechos alvos de DNA.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q20",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética de Populações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #20).\n\nEm uma população no equilíbrio de Hardy-Weinberg com dois alelos (A e a) com frequência de a = 0,2, a frequência de heterozigotos (Aa) é:",
    "options": [
      "0,32 (32%)",
      "0,16 (16%)",
      "0,04 (4%)",
      "0,64 (64%)"
    ],
    "correctIndex": 0,
    "explanation": "p + q = 1 -> se q = 0,2, p = 0,8. A frequência de heterozigotos 2pq = 2 x 0,8 x 0,2 = 0,32 (32%).",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q21",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Monogênica",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #21).\n\nUm padrão de herança autossômica dominante caracteriza-se na árvore genealógica por afetar:",
    "options": [
      "Indivíduos de ambas as gerações sucessivas com transmissão de pai para filho",
      "Exclusivamente homens descendentes de mães portadoras",
      "Apenas prole de casamentos consanguíneos",
      "Apenas descendentes por linha materna mitocondrial"
    ],
    "correctIndex": 0,
    "explanation": "Na herança autossômica dominante, a mutação em um único alelo gera a doença, afetando ambos os sexos e transmitindo-se verticalmente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q22",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Ligada ao X",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #22).\n\nNa herança recessiva ligada ao cromossomo X (ex: Hemofilia A e Distrofia de Duchenne), homens afetados transmitem o alelo mutado para:",
    "options": [
      "Todas as suas filhas (portadoras) e nenhum dos seus filhos homens",
      "50% dos seus filhos homens e 50% das filhas",
      "Todos os seus filhos homens e nenhuma das filhas",
      "Exclusivamente para os netos homens por linha paterna"
    ],
    "correctIndex": 0,
    "explanation": "O pai transmite seu único cromossomo X para todas as filhas e o Y para os filhos. Logo, todas as filhas do homem afetado serão portadoras obrigatoriamente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q23",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Citogenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #23).\n\nA Síndrome de Down é causada em mais de 95% dos casos por trisomia livre do cromossomo 21 decorrente de:",
    "options": [
      "Não-disjunção meiótica (predominantemente na meiose I materna)",
      "Translocação robertsoniana balanceada paterna",
      "Inversão pericêntrica do cromossomo 21",
      "Mosaico mitótico embrionário tardio"
    ],
    "correctIndex": 0,
    "explanation": "A não-disjunção meiótica do par 21 durante a monogênese materna (associada à idade materna avançada) é a causa principal da trissomia do 21.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q24",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética Molecular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #24).\n\nO dogma central da biologia molecular descreve o fluxo de informação genética na sequência de:",
    "options": [
      "Replicação do DNA -> Transcrição para RNA -> Tradução para Proteína",
      "Tradução de Proteína -> Transcrição para RNA -> DNA",
      "RNA -> Proteína -> DNA mitocondrial",
      "Transcrição de Proteína -> Replicação de RNA"
    ],
    "correctIndex": 0,
    "explanation": "O fluxo genético clássico ocorre do DNA (molde) transcrito em mRNA e traduzido em cadeia polipeptídica nos ribossomos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q25",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Mutações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #25).\n\nUma mutação pontual que altera um códon codificador de aminoácido para um códon de parada precoce (UAA, UAG, UGA) é denominada mutação:",
    "options": [
      "Nonsense (sem sentido)",
      "Missense (de sentido trocado)",
      "Silenciosa (sinônima)",
      "Frameshift (mudança na matriz de leitura)"
    ],
    "correctIndex": 0,
    "explanation": "Mutações nonsense introduzem prematuramente um códon de terminação, truncando a proteína final.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q26",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Oncogenética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #26).\n\nO gene TP53 é considerado o 'guardião do genoma', atuando como um clássico gene:",
    "options": [
      "Supressor de tumor (indutor de parada do ciclo celular e apoptose)",
      "Proto-oncogene ativador de tirosina quinase",
      "Gene de fusão oncogênico",
      "Inibidor de reparo por excisão de bases"
    ],
    "correctIndex": 0,
    "explanation": "O p53 detecta danos no DNA na fase G1/S, ativando reparo ou induzindo apoptose se o dano for irreparável.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q27",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #27).\n\nA inativação aleatória do cromossomo X nas células somáticas femininas formando o corpúsculo de Barr no núcleo interfásico decorre de:",
    "options": [
      "Metilação do DNA e modificações de histonas pelo RNA XIST",
      "Deleção completa do braço curto do X",
      "Duplicação do cromossomo Y",
      "Acetilação maciça da cromatina"
    ],
    "correctIndex": 0,
    "explanation": "O lncRNA XIST reveste e silencia epigeneticamente um dos cromossomos X femininos (hipótese de Lyon).",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q28",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #28).\n\nA expressão diferencial de um alelo genético dependendo se ele foi herdado do pai ou da mãe é o fenômeno denominado:",
    "options": [
      "Imprinting genômico (ex: Síndromes de Prader-Willi e Angelman)",
      "Penetrância incompleta",
      "Expressividade variável",
      "Pleiotropia"
    ],
    "correctIndex": 0,
    "explanation": "O imprinting genômico silencia epigeneticamente alelos parental-específicos durante a gametogênese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q29",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Diagnóstico Genético",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #29).\n\nA técnica molecular de PCR (Reação em Cadeia da Polimerase) permite:",
    "options": [
      "Amplificar exponencialmente sequências específicas de DNA in vitro",
      "Determinar a cariotipagem estrutural em metáfase",
      "Sequenciar proteínas maduras plasmáticas",
      "Criar vetores de clonagem de linfócitos B"
    ],
    "correctIndex": 0,
    "explanation": "A PCR utiliza primers específicos e DNA polimerase termoresistente (Taq) para amplificar trechos alvos de DNA.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q30",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética de Populações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #30).\n\nEm uma população no equilíbrio de Hardy-Weinberg com dois alelos (A e a) com frequência de a = 0,2, a frequência de heterozigotos (Aa) é:",
    "options": [
      "0,32 (32%)",
      "0,16 (16%)",
      "0,04 (4%)",
      "0,64 (64%)"
    ],
    "correctIndex": 0,
    "explanation": "p + q = 1 -> se q = 0,2, p = 0,8. A frequência de heterozigotos 2pq = 2 x 0,8 x 0,2 = 0,32 (32%).",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q31",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Monogênica",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #31).\n\nUm padrão de herança autossômica dominante caracteriza-se na árvore genealógica por afetar:",
    "options": [
      "Indivíduos de ambas as gerações sucessivas com transmissão de pai para filho",
      "Exclusivamente homens descendentes de mães portadoras",
      "Apenas prole de casamentos consanguíneos",
      "Apenas descendentes por linha materna mitocondrial"
    ],
    "correctIndex": 0,
    "explanation": "Na herança autossômica dominante, a mutação em um único alelo gera a doença, afetando ambos os sexos e transmitindo-se verticalmente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q32",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Ligada ao X",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #32).\n\nNa herança recessiva ligada ao cromossomo X (ex: Hemofilia A e Distrofia de Duchenne), homens afetados transmitem o alelo mutado para:",
    "options": [
      "Todas as suas filhas (portadoras) e nenhum dos seus filhos homens",
      "50% dos seus filhos homens e 50% das filhas",
      "Todos os seus filhos homens e nenhuma das filhas",
      "Exclusivamente para os netos homens por linha paterna"
    ],
    "correctIndex": 0,
    "explanation": "O pai transmite seu único cromossomo X para todas as filhas e o Y para os filhos. Logo, todas as filhas do homem afetado serão portadoras obrigatoriamente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q33",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Citogenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #33).\n\nA Síndrome de Down é causada em mais de 95% dos casos por trisomia livre do cromossomo 21 decorrente de:",
    "options": [
      "Não-disjunção meiótica (predominantemente na meiose I materna)",
      "Translocação robertsoniana balanceada paterna",
      "Inversão pericêntrica do cromossomo 21",
      "Mosaico mitótico embrionário tardio"
    ],
    "correctIndex": 0,
    "explanation": "A não-disjunção meiótica do par 21 durante a monogênese materna (associada à idade materna avançada) é a causa principal da trissomia do 21.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q34",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética Molecular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #34).\n\nO dogma central da biologia molecular descreve o fluxo de informação genética na sequência de:",
    "options": [
      "Replicação do DNA -> Transcrição para RNA -> Tradução para Proteína",
      "Tradução de Proteína -> Transcrição para RNA -> DNA",
      "RNA -> Proteína -> DNA mitocondrial",
      "Transcrição de Proteína -> Replicação de RNA"
    ],
    "correctIndex": 0,
    "explanation": "O fluxo genético clássico ocorre do DNA (molde) transcrito em mRNA e traduzido em cadeia polipeptídica nos ribossomos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q35",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Mutações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #35).\n\nUma mutação pontual que altera um códon codificador de aminoácido para um códon de parada precoce (UAA, UAG, UGA) é denominada mutação:",
    "options": [
      "Nonsense (sem sentido)",
      "Missense (de sentido trocado)",
      "Silenciosa (sinônima)",
      "Frameshift (mudança na matriz de leitura)"
    ],
    "correctIndex": 0,
    "explanation": "Mutações nonsense introduzem prematuramente um códon de terminação, truncando a proteína final.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q36",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Oncogenética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #36).\n\nO gene TP53 é considerado o 'guardião do genoma', atuando como um clássico gene:",
    "options": [
      "Supressor de tumor (indutor de parada do ciclo celular e apoptose)",
      "Proto-oncogene ativador de tirosina quinase",
      "Gene de fusão oncogênico",
      "Inibidor de reparo por excisão de bases"
    ],
    "correctIndex": 0,
    "explanation": "O p53 detecta danos no DNA na fase G1/S, ativando reparo ou induzindo apoptose se o dano for irreparável.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q37",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #37).\n\nA inativação aleatória do cromossomo X nas células somáticas femininas formando o corpúsculo de Barr no núcleo interfásico decorre de:",
    "options": [
      "Metilação do DNA e modificações de histonas pelo RNA XIST",
      "Deleção completa do braço curto do X",
      "Duplicação do cromossomo Y",
      "Acetilação maciça da cromatina"
    ],
    "correctIndex": 0,
    "explanation": "O lncRNA XIST reveste e silencia epigeneticamente um dos cromossomos X femininos (hipótese de Lyon).",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q38",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #38).\n\nA expressão diferencial de um alelo genético dependendo se ele foi herdado do pai ou da mãe é o fenômeno denominado:",
    "options": [
      "Imprinting genômico (ex: Síndromes de Prader-Willi e Angelman)",
      "Penetrância incompleta",
      "Expressividade variável",
      "Pleiotropia"
    ],
    "correctIndex": 0,
    "explanation": "O imprinting genômico silencia epigeneticamente alelos parental-específicos durante a gametogênese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q39",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Diagnóstico Genético",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #39).\n\nA técnica molecular de PCR (Reação em Cadeia da Polimerase) permite:",
    "options": [
      "Amplificar exponencialmente sequências específicas de DNA in vitro",
      "Determinar a cariotipagem estrutural em metáfase",
      "Sequenciar proteínas maduras plasmáticas",
      "Criar vetores de clonagem de linfócitos B"
    ],
    "correctIndex": 0,
    "explanation": "A PCR utiliza primers específicos e DNA polimerase termoresistente (Taq) para amplificar trechos alvos de DNA.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q40",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética de Populações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #40).\n\nEm uma população no equilíbrio de Hardy-Weinberg com dois alelos (A e a) com frequência de a = 0,2, a frequência de heterozigotos (Aa) é:",
    "options": [
      "0,32 (32%)",
      "0,16 (16%)",
      "0,04 (4%)",
      "0,64 (64%)"
    ],
    "correctIndex": 0,
    "explanation": "p + q = 1 -> se q = 0,2, p = 0,8. A frequência de heterozigotos 2pq = 2 x 0,8 x 0,2 = 0,32 (32%).",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q41",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Monogênica",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #41).\n\nUm padrão de herança autossômica dominante caracteriza-se na árvore genealógica por afetar:",
    "options": [
      "Indivíduos de ambas as gerações sucessivas com transmissão de pai para filho",
      "Exclusivamente homens descendentes de mães portadoras",
      "Apenas prole de casamentos consanguíneos",
      "Apenas descendentes por linha materna mitocondrial"
    ],
    "correctIndex": 0,
    "explanation": "Na herança autossômica dominante, a mutação em um único alelo gera a doença, afetando ambos os sexos e transmitindo-se verticalmente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q42",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Ligada ao X",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #42).\n\nNa herança recessiva ligada ao cromossomo X (ex: Hemofilia A e Distrofia de Duchenne), homens afetados transmitem o alelo mutado para:",
    "options": [
      "Todas as suas filhas (portadoras) e nenhum dos seus filhos homens",
      "50% dos seus filhos homens e 50% das filhas",
      "Todos os seus filhos homens e nenhuma das filhas",
      "Exclusivamente para os netos homens por linha paterna"
    ],
    "correctIndex": 0,
    "explanation": "O pai transmite seu único cromossomo X para todas as filhas e o Y para os filhos. Logo, todas as filhas do homem afetado serão portadoras obrigatoriamente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q43",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Citogenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #43).\n\nA Síndrome de Down é causada em mais de 95% dos casos por trisomia livre do cromossomo 21 decorrente de:",
    "options": [
      "Não-disjunção meiótica (predominantemente na meiose I materna)",
      "Translocação robertsoniana balanceada paterna",
      "Inversão pericêntrica do cromossomo 21",
      "Mosaico mitótico embrionário tardio"
    ],
    "correctIndex": 0,
    "explanation": "A não-disjunção meiótica do par 21 durante a monogênese materna (associada à idade materna avançada) é a causa principal da trissomia do 21.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q44",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética Molecular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #44).\n\nO dogma central da biologia molecular descreve o fluxo de informação genética na sequência de:",
    "options": [
      "Replicação do DNA -> Transcrição para RNA -> Tradução para Proteína",
      "Tradução de Proteína -> Transcrição para RNA -> DNA",
      "RNA -> Proteína -> DNA mitocondrial",
      "Transcrição de Proteína -> Replicação de RNA"
    ],
    "correctIndex": 0,
    "explanation": "O fluxo genético clássico ocorre do DNA (molde) transcrito em mRNA e traduzido em cadeia polipeptídica nos ribossomos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q45",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Mutações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #45).\n\nUma mutação pontual que altera um códon codificador de aminoácido para um códon de parada precoce (UAA, UAG, UGA) é denominada mutação:",
    "options": [
      "Nonsense (sem sentido)",
      "Missense (de sentido trocado)",
      "Silenciosa (sinônima)",
      "Frameshift (mudança na matriz de leitura)"
    ],
    "correctIndex": 0,
    "explanation": "Mutações nonsense introduzem prematuramente um códon de terminação, truncando a proteína final.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q46",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Oncogenética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #46).\n\nO gene TP53 é considerado o 'guardião do genoma', atuando como um clássico gene:",
    "options": [
      "Supressor de tumor (indutor de parada do ciclo celular e apoptose)",
      "Proto-oncogene ativador de tirosina quinase",
      "Gene de fusão oncogênico",
      "Inibidor de reparo por excisão de bases"
    ],
    "correctIndex": 0,
    "explanation": "O p53 detecta danos no DNA na fase G1/S, ativando reparo ou induzindo apoptose se o dano for irreparável.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q47",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #47).\n\nA inativação aleatória do cromossomo X nas células somáticas femininas formando o corpúsculo de Barr no núcleo interfásico decorre de:",
    "options": [
      "Metilação do DNA e modificações de histonas pelo RNA XIST",
      "Deleção completa do braço curto do X",
      "Duplicação do cromossomo Y",
      "Acetilação maciça da cromatina"
    ],
    "correctIndex": 0,
    "explanation": "O lncRNA XIST reveste e silencia epigeneticamente um dos cromossomos X femininos (hipótese de Lyon).",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q48",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #48).\n\nA expressão diferencial de um alelo genético dependendo se ele foi herdado do pai ou da mãe é o fenômeno denominado:",
    "options": [
      "Imprinting genômico (ex: Síndromes de Prader-Willi e Angelman)",
      "Penetrância incompleta",
      "Expressividade variável",
      "Pleiotropia"
    ],
    "correctIndex": 0,
    "explanation": "O imprinting genômico silencia epigeneticamente alelos parental-específicos durante a gametogênese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q49",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Diagnóstico Genético",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #49).\n\nA técnica molecular de PCR (Reação em Cadeia da Polimerase) permite:",
    "options": [
      "Amplificar exponencialmente sequências específicas de DNA in vitro",
      "Determinar a cariotipagem estrutural em metáfase",
      "Sequenciar proteínas maduras plasmáticas",
      "Criar vetores de clonagem de linfócitos B"
    ],
    "correctIndex": 0,
    "explanation": "A PCR utiliza primers específicos e DNA polimerase termoresistente (Taq) para amplificar trechos alvos de DNA.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q50",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética de Populações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #50).\n\nEm uma população no equilíbrio de Hardy-Weinberg com dois alelos (A e a) com frequência de a = 0,2, a frequência de heterozigotos (Aa) é:",
    "options": [
      "0,32 (32%)",
      "0,16 (16%)",
      "0,04 (4%)",
      "0,64 (64%)"
    ],
    "correctIndex": 0,
    "explanation": "p + q = 1 -> se q = 0,2, p = 0,8. A frequência de heterozigotos 2pq = 2 x 0,8 x 0,2 = 0,32 (32%).",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q51",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Monogênica",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #51).\n\nUm padrão de herança autossômica dominante caracteriza-se na árvore genealógica por afetar:",
    "options": [
      "Indivíduos de ambas as gerações sucessivas com transmissão de pai para filho",
      "Exclusivamente homens descendentes de mães portadoras",
      "Apenas prole de casamentos consanguíneos",
      "Apenas descendentes por linha materna mitocondrial"
    ],
    "correctIndex": 0,
    "explanation": "Na herança autossômica dominante, a mutação em um único alelo gera a doença, afetando ambos os sexos e transmitindo-se verticalmente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q52",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Ligada ao X",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #52).\n\nNa herança recessiva ligada ao cromossomo X (ex: Hemofilia A e Distrofia de Duchenne), homens afetados transmitem o alelo mutado para:",
    "options": [
      "Todas as suas filhas (portadoras) e nenhum dos seus filhos homens",
      "50% dos seus filhos homens e 50% das filhas",
      "Todos os seus filhos homens e nenhuma das filhas",
      "Exclusivamente para os netos homens por linha paterna"
    ],
    "correctIndex": 0,
    "explanation": "O pai transmite seu único cromossomo X para todas as filhas e o Y para os filhos. Logo, todas as filhas do homem afetado serão portadoras obrigatoriamente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q53",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Citogenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #53).\n\nA Síndrome de Down é causada em mais de 95% dos casos por trisomia livre do cromossomo 21 decorrente de:",
    "options": [
      "Não-disjunção meiótica (predominantemente na meiose I materna)",
      "Translocação robertsoniana balanceada paterna",
      "Inversão pericêntrica do cromossomo 21",
      "Mosaico mitótico embrionário tardio"
    ],
    "correctIndex": 0,
    "explanation": "A não-disjunção meiótica do par 21 durante a monogênese materna (associada à idade materna avançada) é a causa principal da trissomia do 21.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q54",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética Molecular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #54).\n\nO dogma central da biologia molecular descreve o fluxo de informação genética na sequência de:",
    "options": [
      "Replicação do DNA -> Transcrição para RNA -> Tradução para Proteína",
      "Tradução de Proteína -> Transcrição para RNA -> DNA",
      "RNA -> Proteína -> DNA mitocondrial",
      "Transcrição de Proteína -> Replicação de RNA"
    ],
    "correctIndex": 0,
    "explanation": "O fluxo genético clássico ocorre do DNA (molde) transcrito em mRNA e traduzido em cadeia polipeptídica nos ribossomos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q55",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Mutações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #55).\n\nUma mutação pontual que altera um códon codificador de aminoácido para um códon de parada precoce (UAA, UAG, UGA) é denominada mutação:",
    "options": [
      "Nonsense (sem sentido)",
      "Missense (de sentido trocado)",
      "Silenciosa (sinônima)",
      "Frameshift (mudança na matriz de leitura)"
    ],
    "correctIndex": 0,
    "explanation": "Mutações nonsense introduzem prematuramente um códon de terminação, truncando a proteína final.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q56",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Oncogenética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #56).\n\nO gene TP53 é considerado o 'guardião do genoma', atuando como um clássico gene:",
    "options": [
      "Supressor de tumor (indutor de parada do ciclo celular e apoptose)",
      "Proto-oncogene ativador de tirosina quinase",
      "Gene de fusão oncogênico",
      "Inibidor de reparo por excisão de bases"
    ],
    "correctIndex": 0,
    "explanation": "O p53 detecta danos no DNA na fase G1/S, ativando reparo ou induzindo apoptose se o dano for irreparável.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q57",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #57).\n\nA inativação aleatória do cromossomo X nas células somáticas femininas formando o corpúsculo de Barr no núcleo interfásico decorre de:",
    "options": [
      "Metilação do DNA e modificações de histonas pelo RNA XIST",
      "Deleção completa do braço curto do X",
      "Duplicação do cromossomo Y",
      "Acetilação maciça da cromatina"
    ],
    "correctIndex": 0,
    "explanation": "O lncRNA XIST reveste e silencia epigeneticamente um dos cromossomos X femininos (hipótese de Lyon).",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q58",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #58).\n\nA expressão diferencial de um alelo genético dependendo se ele foi herdado do pai ou da mãe é o fenômeno denominado:",
    "options": [
      "Imprinting genômico (ex: Síndromes de Prader-Willi e Angelman)",
      "Penetrância incompleta",
      "Expressividade variável",
      "Pleiotropia"
    ],
    "correctIndex": 0,
    "explanation": "O imprinting genômico silencia epigeneticamente alelos parental-específicos durante a gametogênese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q59",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Diagnóstico Genético",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #59).\n\nA técnica molecular de PCR (Reação em Cadeia da Polimerase) permite:",
    "options": [
      "Amplificar exponencialmente sequências específicas de DNA in vitro",
      "Determinar a cariotipagem estrutural em metáfase",
      "Sequenciar proteínas maduras plasmáticas",
      "Criar vetores de clonagem de linfócitos B"
    ],
    "correctIndex": 0,
    "explanation": "A PCR utiliza primers específicos e DNA polimerase termoresistente (Taq) para amplificar trechos alvos de DNA.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q60",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética de Populações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #60).\n\nEm uma população no equilíbrio de Hardy-Weinberg com dois alelos (A e a) com frequência de a = 0,2, a frequência de heterozigotos (Aa) é:",
    "options": [
      "0,32 (32%)",
      "0,16 (16%)",
      "0,04 (4%)",
      "0,64 (64%)"
    ],
    "correctIndex": 0,
    "explanation": "p + q = 1 -> se q = 0,2, p = 0,8. A frequência de heterozigotos 2pq = 2 x 0,8 x 0,2 = 0,32 (32%).",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q61",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Monogênica",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #61).\n\nUm padrão de herança autossômica dominante caracteriza-se na árvore genealógica por afetar:",
    "options": [
      "Indivíduos de ambas as gerações sucessivas com transmissão de pai para filho",
      "Exclusivamente homens descendentes de mães portadoras",
      "Apenas prole de casamentos consanguíneos",
      "Apenas descendentes por linha materna mitocondrial"
    ],
    "correctIndex": 0,
    "explanation": "Na herança autossômica dominante, a mutação em um único alelo gera a doença, afetando ambos os sexos e transmitindo-se verticalmente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q62",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Ligada ao X",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #62).\n\nNa herança recessiva ligada ao cromossomo X (ex: Hemofilia A e Distrofia de Duchenne), homens afetados transmitem o alelo mutado para:",
    "options": [
      "Todas as suas filhas (portadoras) e nenhum dos seus filhos homens",
      "50% dos seus filhos homens e 50% das filhas",
      "Todos os seus filhos homens e nenhuma das filhas",
      "Exclusivamente para os netos homens por linha paterna"
    ],
    "correctIndex": 0,
    "explanation": "O pai transmite seu único cromossomo X para todas as filhas e o Y para os filhos. Logo, todas as filhas do homem afetado serão portadoras obrigatoriamente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q63",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Citogenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #63).\n\nA Síndrome de Down é causada em mais de 95% dos casos por trisomia livre do cromossomo 21 decorrente de:",
    "options": [
      "Não-disjunção meiótica (predominantemente na meiose I materna)",
      "Translocação robertsoniana balanceada paterna",
      "Inversão pericêntrica do cromossomo 21",
      "Mosaico mitótico embrionário tardio"
    ],
    "correctIndex": 0,
    "explanation": "A não-disjunção meiótica do par 21 durante a monogênese materna (associada à idade materna avançada) é a causa principal da trissomia do 21.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q64",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética Molecular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #64).\n\nO dogma central da biologia molecular descreve o fluxo de informação genética na sequência de:",
    "options": [
      "Replicação do DNA -> Transcrição para RNA -> Tradução para Proteína",
      "Tradução de Proteína -> Transcrição para RNA -> DNA",
      "RNA -> Proteína -> DNA mitocondrial",
      "Transcrição de Proteína -> Replicação de RNA"
    ],
    "correctIndex": 0,
    "explanation": "O fluxo genético clássico ocorre do DNA (molde) transcrito em mRNA e traduzido em cadeia polipeptídica nos ribossomos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q65",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Mutações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #65).\n\nUma mutação pontual que altera um códon codificador de aminoácido para um códon de parada precoce (UAA, UAG, UGA) é denominada mutação:",
    "options": [
      "Nonsense (sem sentido)",
      "Missense (de sentido trocado)",
      "Silenciosa (sinônima)",
      "Frameshift (mudança na matriz de leitura)"
    ],
    "correctIndex": 0,
    "explanation": "Mutações nonsense introduzem prematuramente um códon de terminação, truncando a proteína final.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q66",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Oncogenética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #66).\n\nO gene TP53 é considerado o 'guardião do genoma', atuando como um clássico gene:",
    "options": [
      "Supressor de tumor (indutor de parada do ciclo celular e apoptose)",
      "Proto-oncogene ativador de tirosina quinase",
      "Gene de fusão oncogênico",
      "Inibidor de reparo por excisão de bases"
    ],
    "correctIndex": 0,
    "explanation": "O p53 detecta danos no DNA na fase G1/S, ativando reparo ou induzindo apoptose se o dano for irreparável.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q67",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #67).\n\nA inativação aleatória do cromossomo X nas células somáticas femininas formando o corpúsculo de Barr no núcleo interfásico decorre de:",
    "options": [
      "Metilação do DNA e modificações de histonas pelo RNA XIST",
      "Deleção completa do braço curto do X",
      "Duplicação do cromossomo Y",
      "Acetilação maciça da cromatina"
    ],
    "correctIndex": 0,
    "explanation": "O lncRNA XIST reveste e silencia epigeneticamente um dos cromossomos X femininos (hipótese de Lyon).",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q68",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #68).\n\nA expressão diferencial de um alelo genético dependendo se ele foi herdado do pai ou da mãe é o fenômeno denominado:",
    "options": [
      "Imprinting genômico (ex: Síndromes de Prader-Willi e Angelman)",
      "Penetrância incompleta",
      "Expressividade variável",
      "Pleiotropia"
    ],
    "correctIndex": 0,
    "explanation": "O imprinting genômico silencia epigeneticamente alelos parental-específicos durante a gametogênese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q69",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Diagnóstico Genético",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #69).\n\nA técnica molecular de PCR (Reação em Cadeia da Polimerase) permite:",
    "options": [
      "Amplificar exponencialmente sequências específicas de DNA in vitro",
      "Determinar a cariotipagem estrutural em metáfase",
      "Sequenciar proteínas maduras plasmáticas",
      "Criar vetores de clonagem de linfócitos B"
    ],
    "correctIndex": 0,
    "explanation": "A PCR utiliza primers específicos e DNA polimerase termoresistente (Taq) para amplificar trechos alvos de DNA.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q70",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética de Populações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #70).\n\nEm uma população no equilíbrio de Hardy-Weinberg com dois alelos (A e a) com frequência de a = 0,2, a frequência de heterozigotos (Aa) é:",
    "options": [
      "0,32 (32%)",
      "0,16 (16%)",
      "0,04 (4%)",
      "0,64 (64%)"
    ],
    "correctIndex": 0,
    "explanation": "p + q = 1 -> se q = 0,2, p = 0,8. A frequência de heterozigotos 2pq = 2 x 0,8 x 0,2 = 0,32 (32%).",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q71",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Monogênica",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #71).\n\nUm padrão de herança autossômica dominante caracteriza-se na árvore genealógica por afetar:",
    "options": [
      "Indivíduos de ambas as gerações sucessivas com transmissão de pai para filho",
      "Exclusivamente homens descendentes de mães portadoras",
      "Apenas prole de casamentos consanguíneos",
      "Apenas descendentes por linha materna mitocondrial"
    ],
    "correctIndex": 0,
    "explanation": "Na herança autossômica dominante, a mutação em um único alelo gera a doença, afetando ambos os sexos e transmitindo-se verticalmente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q72",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Ligada ao X",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #72).\n\nNa herança recessiva ligada ao cromossomo X (ex: Hemofilia A e Distrofia de Duchenne), homens afetados transmitem o alelo mutado para:",
    "options": [
      "Todas as suas filhas (portadoras) e nenhum dos seus filhos homens",
      "50% dos seus filhos homens e 50% das filhas",
      "Todos os seus filhos homens e nenhuma das filhas",
      "Exclusivamente para os netos homens por linha paterna"
    ],
    "correctIndex": 0,
    "explanation": "O pai transmite seu único cromossomo X para todas as filhas e o Y para os filhos. Logo, todas as filhas do homem afetado serão portadoras obrigatoriamente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q73",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Citogenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #73).\n\nA Síndrome de Down é causada em mais de 95% dos casos por trisomia livre do cromossomo 21 decorrente de:",
    "options": [
      "Não-disjunção meiótica (predominantemente na meiose I materna)",
      "Translocação robertsoniana balanceada paterna",
      "Inversão pericêntrica do cromossomo 21",
      "Mosaico mitótico embrionário tardio"
    ],
    "correctIndex": 0,
    "explanation": "A não-disjunção meiótica do par 21 durante a monogênese materna (associada à idade materna avançada) é a causa principal da trissomia do 21.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q74",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética Molecular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #74).\n\nO dogma central da biologia molecular descreve o fluxo de informação genética na sequência de:",
    "options": [
      "Replicação do DNA -> Transcrição para RNA -> Tradução para Proteína",
      "Tradução de Proteína -> Transcrição para RNA -> DNA",
      "RNA -> Proteína -> DNA mitocondrial",
      "Transcrição de Proteína -> Replicação de RNA"
    ],
    "correctIndex": 0,
    "explanation": "O fluxo genético clássico ocorre do DNA (molde) transcrito em mRNA e traduzido em cadeia polipeptídica nos ribossomos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q75",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Mutações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #75).\n\nUma mutação pontual que altera um códon codificador de aminoácido para um códon de parada precoce (UAA, UAG, UGA) é denominada mutação:",
    "options": [
      "Nonsense (sem sentido)",
      "Missense (de sentido trocado)",
      "Silenciosa (sinônima)",
      "Frameshift (mudança na matriz de leitura)"
    ],
    "correctIndex": 0,
    "explanation": "Mutações nonsense introduzem prematuramente um códon de terminação, truncando a proteína final.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q76",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Oncogenética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #76).\n\nO gene TP53 é considerado o 'guardião do genoma', atuando como um clássico gene:",
    "options": [
      "Supressor de tumor (indutor de parada do ciclo celular e apoptose)",
      "Proto-oncogene ativador de tirosina quinase",
      "Gene de fusão oncogênico",
      "Inibidor de reparo por excisão de bases"
    ],
    "correctIndex": 0,
    "explanation": "O p53 detecta danos no DNA na fase G1/S, ativando reparo ou induzindo apoptose se o dano for irreparável.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q77",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #77).\n\nA inativação aleatória do cromossomo X nas células somáticas femininas formando o corpúsculo de Barr no núcleo interfásico decorre de:",
    "options": [
      "Metilação do DNA e modificações de histonas pelo RNA XIST",
      "Deleção completa do braço curto do X",
      "Duplicação do cromossomo Y",
      "Acetilação maciça da cromatina"
    ],
    "correctIndex": 0,
    "explanation": "O lncRNA XIST reveste e silencia epigeneticamente um dos cromossomos X femininos (hipótese de Lyon).",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q78",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #78).\n\nA expressão diferencial de um alelo genético dependendo se ele foi herdado do pai ou da mãe é o fenômeno denominado:",
    "options": [
      "Imprinting genômico (ex: Síndromes de Prader-Willi e Angelman)",
      "Penetrância incompleta",
      "Expressividade variável",
      "Pleiotropia"
    ],
    "correctIndex": 0,
    "explanation": "O imprinting genômico silencia epigeneticamente alelos parental-específicos durante a gametogênese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q79",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Diagnóstico Genético",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #79).\n\nA técnica molecular de PCR (Reação em Cadeia da Polimerase) permite:",
    "options": [
      "Amplificar exponencialmente sequências específicas de DNA in vitro",
      "Determinar a cariotipagem estrutural em metáfase",
      "Sequenciar proteínas maduras plasmáticas",
      "Criar vetores de clonagem de linfócitos B"
    ],
    "correctIndex": 0,
    "explanation": "A PCR utiliza primers específicos e DNA polimerase termoresistente (Taq) para amplificar trechos alvos de DNA.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q80",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética de Populações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #80).\n\nEm uma população no equilíbrio de Hardy-Weinberg com dois alelos (A e a) com frequência de a = 0,2, a frequência de heterozigotos (Aa) é:",
    "options": [
      "0,32 (32%)",
      "0,16 (16%)",
      "0,04 (4%)",
      "0,64 (64%)"
    ],
    "correctIndex": 0,
    "explanation": "p + q = 1 -> se q = 0,2, p = 0,8. A frequência de heterozigotos 2pq = 2 x 0,8 x 0,2 = 0,32 (32%).",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q81",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Monogênica",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #81).\n\nUm padrão de herança autossômica dominante caracteriza-se na árvore genealógica por afetar:",
    "options": [
      "Indivíduos de ambas as gerações sucessivas com transmissão de pai para filho",
      "Exclusivamente homens descendentes de mães portadoras",
      "Apenas prole de casamentos consanguíneos",
      "Apenas descendentes por linha materna mitocondrial"
    ],
    "correctIndex": 0,
    "explanation": "Na herança autossômica dominante, a mutação em um único alelo gera a doença, afetando ambos os sexos e transmitindo-se verticalmente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q82",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Ligada ao X",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #82).\n\nNa herança recessiva ligada ao cromossomo X (ex: Hemofilia A e Distrofia de Duchenne), homens afetados transmitem o alelo mutado para:",
    "options": [
      "Todas as suas filhas (portadoras) e nenhum dos seus filhos homens",
      "50% dos seus filhos homens e 50% das filhas",
      "Todos os seus filhos homens e nenhuma das filhas",
      "Exclusivamente para os netos homens por linha paterna"
    ],
    "correctIndex": 0,
    "explanation": "O pai transmite seu único cromossomo X para todas as filhas e o Y para os filhos. Logo, todas as filhas do homem afetado serão portadoras obrigatoriamente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q83",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Citogenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #83).\n\nA Síndrome de Down é causada em mais de 95% dos casos por trisomia livre do cromossomo 21 decorrente de:",
    "options": [
      "Não-disjunção meiótica (predominantemente na meiose I materna)",
      "Translocação robertsoniana balanceada paterna",
      "Inversão pericêntrica do cromossomo 21",
      "Mosaico mitótico embrionário tardio"
    ],
    "correctIndex": 0,
    "explanation": "A não-disjunção meiótica do par 21 durante a monogênese materna (associada à idade materna avançada) é a causa principal da trissomia do 21.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q84",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética Molecular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #84).\n\nO dogma central da biologia molecular descreve o fluxo de informação genética na sequência de:",
    "options": [
      "Replicação do DNA -> Transcrição para RNA -> Tradução para Proteína",
      "Tradução de Proteína -> Transcrição para RNA -> DNA",
      "RNA -> Proteína -> DNA mitocondrial",
      "Transcrição de Proteína -> Replicação de RNA"
    ],
    "correctIndex": 0,
    "explanation": "O fluxo genético clássico ocorre do DNA (molde) transcrito em mRNA e traduzido em cadeia polipeptídica nos ribossomos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q85",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Mutações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #85).\n\nUma mutação pontual que altera um códon codificador de aminoácido para um códon de parada precoce (UAA, UAG, UGA) é denominada mutação:",
    "options": [
      "Nonsense (sem sentido)",
      "Missense (de sentido trocado)",
      "Silenciosa (sinônima)",
      "Frameshift (mudança na matriz de leitura)"
    ],
    "correctIndex": 0,
    "explanation": "Mutações nonsense introduzem prematuramente um códon de terminação, truncando a proteína final.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q86",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Oncogenética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #86).\n\nO gene TP53 é considerado o 'guardião do genoma', atuando como um clássico gene:",
    "options": [
      "Supressor de tumor (indutor de parada do ciclo celular e apoptose)",
      "Proto-oncogene ativador de tirosina quinase",
      "Gene de fusão oncogênico",
      "Inibidor de reparo por excisão de bases"
    ],
    "correctIndex": 0,
    "explanation": "O p53 detecta danos no DNA na fase G1/S, ativando reparo ou induzindo apoptose se o dano for irreparável.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q87",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #87).\n\nA inativação aleatória do cromossomo X nas células somáticas femininas formando o corpúsculo de Barr no núcleo interfásico decorre de:",
    "options": [
      "Metilação do DNA e modificações de histonas pelo RNA XIST",
      "Deleção completa do braço curto do X",
      "Duplicação do cromossomo Y",
      "Acetilação maciça da cromatina"
    ],
    "correctIndex": 0,
    "explanation": "O lncRNA XIST reveste e silencia epigeneticamente um dos cromossomos X femininos (hipótese de Lyon).",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q88",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #88).\n\nA expressão diferencial de um alelo genético dependendo se ele foi herdado do pai ou da mãe é o fenômeno denominado:",
    "options": [
      "Imprinting genômico (ex: Síndromes de Prader-Willi e Angelman)",
      "Penetrância incompleta",
      "Expressividade variável",
      "Pleiotropia"
    ],
    "correctIndex": 0,
    "explanation": "O imprinting genômico silencia epigeneticamente alelos parental-específicos durante a gametogênese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q89",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Diagnóstico Genético",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #89).\n\nA técnica molecular de PCR (Reação em Cadeia da Polimerase) permite:",
    "options": [
      "Amplificar exponencialmente sequências específicas de DNA in vitro",
      "Determinar a cariotipagem estrutural em metáfase",
      "Sequenciar proteínas maduras plasmáticas",
      "Criar vetores de clonagem de linfócitos B"
    ],
    "correctIndex": 0,
    "explanation": "A PCR utiliza primers específicos e DNA polimerase termoresistente (Taq) para amplificar trechos alvos de DNA.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q90",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética de Populações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #90).\n\nEm uma população no equilíbrio de Hardy-Weinberg com dois alelos (A e a) com frequência de a = 0,2, a frequência de heterozigotos (Aa) é:",
    "options": [
      "0,32 (32%)",
      "0,16 (16%)",
      "0,04 (4%)",
      "0,64 (64%)"
    ],
    "correctIndex": 0,
    "explanation": "p + q = 1 -> se q = 0,2, p = 0,8. A frequência de heterozigotos 2pq = 2 x 0,8 x 0,2 = 0,32 (32%).",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q91",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Monogênica",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #91).\n\nUm padrão de herança autossômica dominante caracteriza-se na árvore genealógica por afetar:",
    "options": [
      "Indivíduos de ambas as gerações sucessivas com transmissão de pai para filho",
      "Exclusivamente homens descendentes de mães portadoras",
      "Apenas prole de casamentos consanguíneos",
      "Apenas descendentes por linha materna mitocondrial"
    ],
    "correctIndex": 0,
    "explanation": "Na herança autossômica dominante, a mutação em um único alelo gera a doença, afetando ambos os sexos e transmitindo-se verticalmente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q92",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Herança Ligada ao X",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #92).\n\nNa herança recessiva ligada ao cromossomo X (ex: Hemofilia A e Distrofia de Duchenne), homens afetados transmitem o alelo mutado para:",
    "options": [
      "Todas as suas filhas (portadoras) e nenhum dos seus filhos homens",
      "50% dos seus filhos homens e 50% das filhas",
      "Todos os seus filhos homens e nenhuma das filhas",
      "Exclusivamente para os netos homens por linha paterna"
    ],
    "correctIndex": 0,
    "explanation": "O pai transmite seu único cromossomo X para todas as filhas e o Y para os filhos. Logo, todas as filhas do homem afetado serão portadoras obrigatoriamente.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q93",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Citogenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #93).\n\nA Síndrome de Down é causada em mais de 95% dos casos por trisomia livre do cromossomo 21 decorrente de:",
    "options": [
      "Não-disjunção meiótica (predominantemente na meiose I materna)",
      "Translocação robertsoniana balanceada paterna",
      "Inversão pericêntrica do cromossomo 21",
      "Mosaico mitótico embrionário tardio"
    ],
    "correctIndex": 0,
    "explanation": "A não-disjunção meiótica do par 21 durante a monogênese materna (associada à idade materna avançada) é a causa principal da trissomia do 21.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q94",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética Molecular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #94).\n\nO dogma central da biologia molecular descreve o fluxo de informação genética na sequência de:",
    "options": [
      "Replicação do DNA -> Transcrição para RNA -> Tradução para Proteína",
      "Tradução de Proteína -> Transcrição para RNA -> DNA",
      "RNA -> Proteína -> DNA mitocondrial",
      "Transcrição de Proteína -> Replicação de RNA"
    ],
    "correctIndex": 0,
    "explanation": "O fluxo genético clássico ocorre do DNA (molde) transcrito em mRNA e traduzido em cadeia polipeptídica nos ribossomos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q95",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Mutações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #95).\n\nUma mutação pontual que altera um códon codificador de aminoácido para um códon de parada precoce (UAA, UAG, UGA) é denominada mutação:",
    "options": [
      "Nonsense (sem sentido)",
      "Missense (de sentido trocado)",
      "Silenciosa (sinônima)",
      "Frameshift (mudança na matriz de leitura)"
    ],
    "correctIndex": 0,
    "explanation": "Mutações nonsense introduzem prematuramente um códon de terminação, truncando a proteína final.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q96",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Oncogenética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #96).\n\nO gene TP53 é considerado o 'guardião do genoma', atuando como um clássico gene:",
    "options": [
      "Supressor de tumor (indutor de parada do ciclo celular e apoptose)",
      "Proto-oncogene ativador de tirosina quinase",
      "Gene de fusão oncogênico",
      "Inibidor de reparo por excisão de bases"
    ],
    "correctIndex": 0,
    "explanation": "O p53 detecta danos no DNA na fase G1/S, ativando reparo ou induzindo apoptose se o dano for irreparável.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q97",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #97).\n\nA inativação aleatória do cromossomo X nas células somáticas femininas formando o corpúsculo de Barr no núcleo interfásico decorre de:",
    "options": [
      "Metilação do DNA e modificações de histonas pelo RNA XIST",
      "Deleção completa do braço curto do X",
      "Duplicação do cromossomo Y",
      "Acetilação maciça da cromatina"
    ],
    "correctIndex": 0,
    "explanation": "O lncRNA XIST reveste e silencia epigeneticamente um dos cromossomos X femininos (hipótese de Lyon).",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q98",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Epigenética",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #98).\n\nA expressão diferencial de um alelo genético dependendo se ele foi herdado do pai ou da mãe é o fenômeno denominado:",
    "options": [
      "Imprinting genômico (ex: Síndromes de Prader-Willi e Angelman)",
      "Penetrância incompleta",
      "Expressividade variável",
      "Pleiotropia"
    ],
    "correctIndex": 0,
    "explanation": "O imprinting genômico silencia epigeneticamente alelos parental-específicos durante a gametogênese.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q99",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Diagnóstico Genético",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #99).\n\nA técnica molecular de PCR (Reação em Cadeia da Polimerase) permite:",
    "options": [
      "Amplificar exponencialmente sequências específicas de DNA in vitro",
      "Determinar a cariotipagem estrutural em metáfase",
      "Sequenciar proteínas maduras plasmáticas",
      "Criar vetores de clonagem de linfócitos B"
    ],
    "correctIndex": 0,
    "explanation": "A PCR utiliza primers específicos e DNA polimerase termoresistente (Taq) para amplificar trechos alvos de DNA.",
    "difficulty": "medium"
  },
  {
    "id": "basico_genetica_q100",
    "cycle": "Ciclo Básico",
    "subject": "Genética",
    "subSubject": "Genética de Populações",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #100).\n\nEm uma população no equilíbrio de Hardy-Weinberg com dois alelos (A e a) com frequência de a = 0,2, a frequência de heterozigotos (Aa) é:",
    "options": [
      "0,32 (32%)",
      "0,16 (16%)",
      "0,04 (4%)",
      "0,64 (64%)"
    ],
    "correctIndex": 0,
    "explanation": "p + q = 1 -> se q = 0,2, p = 0,8. A frequência de heterozigotos 2pq = 2 x 0,8 x 0,2 = 0,32 (32%).",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q1",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #1).\n\nA porcentagem de um fármaco administrado que atinge a circulação sistêmica na sua forma inalterada é denominada:",
    "options": [
      "Biodisponibilidade",
      "Volume de distribuição",
      "Clearance de depuração",
      "Meia-vida de eliminação"
    ],
    "correctIndex": 0,
    "explanation": "A biodisponibilidade (F) mede a fração da dose administrada que alcança a circulação sistêmica (100% via IV).",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q2",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #2).\n\nAs reações de Fase I do metabolismo hepático de drogas incluem hidroxilação e oxidação efetuadas pelo complexo enzimático:",
    "options": [
      "Citocromo P450 (CYP450)",
      "UDP-glicuronosiltransferase",
      "Glutationa S-transferase",
      "Álcool desidrogenase"
    ],
    "correctIndex": 0,
    "explanation": "O sistema CYP450 hepático catalisa reações de Fase I (oxidação, redução e hidrólise) alterando a polaridade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q3",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacodinâmica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #3).\n\nUm antagonista competitivo reversível altera a curva dose-resposta de um agonista de qual maneira?",
    "options": [
      "Desloca a curva para a direita aumentando a EC50 sem alterar o efeito máximo",
      "Reduz o efeito máximo sem alterar a EC50",
      "Desloca a curva para a esquerda aumentando a potência",
      "Aumenta a eficácia máxima do agonista"
    ],
    "correctIndex": 0,
    "explanation": "O antagonista competitivo compete pelo mesmo sítio do receptor, exigindo maiores concentrações do agonista para alcançar o mesmo efeito.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q4",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #4).\n\nA atropina é um fármaco bloqueador competitivo de receptores:",
    "options": [
      "Muscarínicos da acetilcolina (anticolinérgico)",
      "Nicotínicos da junção neuromuscular",
      "Alfa-1 adrenérgicos",
      "Beta-1 adrenérgicos"
    ],
    "correctIndex": 0,
    "explanation": "A atropina bloqueia receptores muscarínicos (M1-M5), causando taquicardia, midríase, retenção urinária e xerostomia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q5",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #5).\n\nOs inibidores da Enzima Conversora de Angiotensina (iECA, ex: enalapril) reduzem a pressão arterial e podem causar tosse seca por acúmulo de:",
    "options": [
      "Bradicinina",
      "Serotonina",
      "Histamina",
      "Endotelina-1"
    ],
    "correctIndex": 0,
    "explanation": "A ECA também degrada a bradicinina. A inibição da ECA eleva os níveis pulmonares de bradicinina, desencadeando tosse seca.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q6",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #6).\n\nQual diurético inibe o co-transportador Na+/K+/2Cl- no ramo ascendente espesso da alça de Henle, possuindo alta potência natriurética?",
    "options": [
      "Furosemida (diurético de alça)",
      "Hidroclorotiazida",
      "Espironolactona",
      "Acetazolamida"
    ],
    "correctIndex": 0,
    "explanation": "A furosemida atua no ramo ascendente da alça de Henle bloqueando o NKCC2, excretando grande volume de Na+, K+, Cl- e água.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q7",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #7).\n\nQual medicação agonista seletivo dos receptores beta-2 adrenérgicos promove broncodilatação rápida nas crises de asma?",
    "options": [
      "Salbutamol",
      "Propranolol",
      "Atenolol",
      "Pilocarpina"
    ],
    "correctIndex": 0,
    "explanation": "O salbutamol estimula os receptores beta-2 no músculo liso brônquico, elevando o AMPc e induzindo broncodilatação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q8",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anti-inflamatórios",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #8).\n\nOs AINEs (como ibuprofeno e cetoprofeno) reduzem dor e inflamação inibindo a enzima:",
    "options": [
      "Ciclooxigenase (COX-1 e COX-2)",
      "5-lipoxigenase (5-LOX)",
      "Fosfolipase A2",
      "Tromboxano sintetase"
    ],
    "correctIndex": 0,
    "explanation": "Os AINEs inibem a conversão do ácido araquidônico em prostaglandinas inflamatórias pelas enzimas COX.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q9",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Opioides",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #9).\n\nA depressão respiratória aguda por superdosagem de opióides (morfina, fentanil) é revertida prontamente pelo antagonista:",
    "options": [
      "Naloxona",
      "Flumazenil",
      "Atropina",
      "N-acetilcisteína"
    ],
    "correctIndex": 0,
    "explanation": "A naloxona é um antagonista puro de receptores opioides mu (µ), revertendo a depressão respiratória.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q10",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anticoagulantes",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #10).\n\nA varfarina exerce seu efeito anticoagulante inibindo a enzima epóxido redutase da vitamina K, bloqueando a síntese dos fatores de coagulação:",
    "options": [
      "Fatores II, VII, IX e X (dependentes de vitamina K)",
      "Fatores VIII, V e Fibrinogênio",
      "Fator XIII e Trombina",
      "Fator XI e XII"
    ],
    "correctIndex": 0,
    "explanation": "A varfarina inibe a gama-carboxilação hepática dos fatores II, VII, IX e X de coagulação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q11",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #11).\n\nA porcentagem de um fármaco administrado que atinge a circulação sistêmica na sua forma inalterada é denominada:",
    "options": [
      "Biodisponibilidade",
      "Volume de distribuição",
      "Clearance de depuração",
      "Meia-vida de eliminação"
    ],
    "correctIndex": 0,
    "explanation": "A biodisponibilidade (F) mede a fração da dose administrada que alcança a circulação sistêmica (100% via IV).",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q12",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #12).\n\nAs reações de Fase I do metabolismo hepático de drogas incluem hidroxilação e oxidação efetuadas pelo complexo enzimático:",
    "options": [
      "Citocromo P450 (CYP450)",
      "UDP-glicuronosiltransferase",
      "Glutationa S-transferase",
      "Álcool desidrogenase"
    ],
    "correctIndex": 0,
    "explanation": "O sistema CYP450 hepático catalisa reações de Fase I (oxidação, redução e hidrólise) alterando a polaridade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q13",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacodinâmica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #13).\n\nUm antagonista competitivo reversível altera a curva dose-resposta de um agonista de qual maneira?",
    "options": [
      "Desloca a curva para a direita aumentando a EC50 sem alterar o efeito máximo",
      "Reduz o efeito máximo sem alterar a EC50",
      "Desloca a curva para a esquerda aumentando a potência",
      "Aumenta a eficácia máxima do agonista"
    ],
    "correctIndex": 0,
    "explanation": "O antagonista competitivo compete pelo mesmo sítio do receptor, exigindo maiores concentrações do agonista para alcançar o mesmo efeito.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q14",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #14).\n\nA atropina é um fármaco bloqueador competitivo de receptores:",
    "options": [
      "Muscarínicos da acetilcolina (anticolinérgico)",
      "Nicotínicos da junção neuromuscular",
      "Alfa-1 adrenérgicos",
      "Beta-1 adrenérgicos"
    ],
    "correctIndex": 0,
    "explanation": "A atropina bloqueia receptores muscarínicos (M1-M5), causando taquicardia, midríase, retenção urinária e xerostomia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q15",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #15).\n\nOs inibidores da Enzima Conversora de Angiotensina (iECA, ex: enalapril) reduzem a pressão arterial e podem causar tosse seca por acúmulo de:",
    "options": [
      "Bradicinina",
      "Serotonina",
      "Histamina",
      "Endotelina-1"
    ],
    "correctIndex": 0,
    "explanation": "A ECA também degrada a bradicinina. A inibição da ECA eleva os níveis pulmonares de bradicinina, desencadeando tosse seca.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q16",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #16).\n\nQual diurético inibe o co-transportador Na+/K+/2Cl- no ramo ascendente espesso da alça de Henle, possuindo alta potência natriurética?",
    "options": [
      "Furosemida (diurético de alça)",
      "Hidroclorotiazida",
      "Espironolactona",
      "Acetazolamida"
    ],
    "correctIndex": 0,
    "explanation": "A furosemida atua no ramo ascendente da alça de Henle bloqueando o NKCC2, excretando grande volume de Na+, K+, Cl- e água.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q17",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #17).\n\nQual medicação agonista seletivo dos receptores beta-2 adrenérgicos promove broncodilatação rápida nas crises de asma?",
    "options": [
      "Salbutamol",
      "Propranolol",
      "Atenolol",
      "Pilocarpina"
    ],
    "correctIndex": 0,
    "explanation": "O salbutamol estimula os receptores beta-2 no músculo liso brônquico, elevando o AMPc e induzindo broncodilatação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q18",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anti-inflamatórios",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #18).\n\nOs AINEs (como ibuprofeno e cetoprofeno) reduzem dor e inflamação inibindo a enzima:",
    "options": [
      "Ciclooxigenase (COX-1 e COX-2)",
      "5-lipoxigenase (5-LOX)",
      "Fosfolipase A2",
      "Tromboxano sintetase"
    ],
    "correctIndex": 0,
    "explanation": "Os AINEs inibem a conversão do ácido araquidônico em prostaglandinas inflamatórias pelas enzimas COX.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q19",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Opioides",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #19).\n\nA depressão respiratória aguda por superdosagem de opióides (morfina, fentanil) é revertida prontamente pelo antagonista:",
    "options": [
      "Naloxona",
      "Flumazenil",
      "Atropina",
      "N-acetilcisteína"
    ],
    "correctIndex": 0,
    "explanation": "A naloxona é um antagonista puro de receptores opioides mu (µ), revertendo a depressão respiratória.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q20",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anticoagulantes",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #20).\n\nA varfarina exerce seu efeito anticoagulante inibindo a enzima epóxido redutase da vitamina K, bloqueando a síntese dos fatores de coagulação:",
    "options": [
      "Fatores II, VII, IX e X (dependentes de vitamina K)",
      "Fatores VIII, V e Fibrinogênio",
      "Fator XIII e Trombina",
      "Fator XI e XII"
    ],
    "correctIndex": 0,
    "explanation": "A varfarina inibe a gama-carboxilação hepática dos fatores II, VII, IX e X de coagulação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q21",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #21).\n\nA porcentagem de um fármaco administrado que atinge a circulação sistêmica na sua forma inalterada é denominada:",
    "options": [
      "Biodisponibilidade",
      "Volume de distribuição",
      "Clearance de depuração",
      "Meia-vida de eliminação"
    ],
    "correctIndex": 0,
    "explanation": "A biodisponibilidade (F) mede a fração da dose administrada que alcança a circulação sistêmica (100% via IV).",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q22",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #22).\n\nAs reações de Fase I do metabolismo hepático de drogas incluem hidroxilação e oxidação efetuadas pelo complexo enzimático:",
    "options": [
      "Citocromo P450 (CYP450)",
      "UDP-glicuronosiltransferase",
      "Glutationa S-transferase",
      "Álcool desidrogenase"
    ],
    "correctIndex": 0,
    "explanation": "O sistema CYP450 hepático catalisa reações de Fase I (oxidação, redução e hidrólise) alterando a polaridade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q23",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacodinâmica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #23).\n\nUm antagonista competitivo reversível altera a curva dose-resposta de um agonista de qual maneira?",
    "options": [
      "Desloca a curva para a direita aumentando a EC50 sem alterar o efeito máximo",
      "Reduz o efeito máximo sem alterar a EC50",
      "Desloca a curva para a esquerda aumentando a potência",
      "Aumenta a eficácia máxima do agonista"
    ],
    "correctIndex": 0,
    "explanation": "O antagonista competitivo compete pelo mesmo sítio do receptor, exigindo maiores concentrações do agonista para alcançar o mesmo efeito.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q24",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #24).\n\nA atropina é um fármaco bloqueador competitivo de receptores:",
    "options": [
      "Muscarínicos da acetilcolina (anticolinérgico)",
      "Nicotínicos da junção neuromuscular",
      "Alfa-1 adrenérgicos",
      "Beta-1 adrenérgicos"
    ],
    "correctIndex": 0,
    "explanation": "A atropina bloqueia receptores muscarínicos (M1-M5), causando taquicardia, midríase, retenção urinária e xerostomia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q25",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #25).\n\nOs inibidores da Enzima Conversora de Angiotensina (iECA, ex: enalapril) reduzem a pressão arterial e podem causar tosse seca por acúmulo de:",
    "options": [
      "Bradicinina",
      "Serotonina",
      "Histamina",
      "Endotelina-1"
    ],
    "correctIndex": 0,
    "explanation": "A ECA também degrada a bradicinina. A inibição da ECA eleva os níveis pulmonares de bradicinina, desencadeando tosse seca.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q26",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #26).\n\nQual diurético inibe o co-transportador Na+/K+/2Cl- no ramo ascendente espesso da alça de Henle, possuindo alta potência natriurética?",
    "options": [
      "Furosemida (diurético de alça)",
      "Hidroclorotiazida",
      "Espironolactona",
      "Acetazolamida"
    ],
    "correctIndex": 0,
    "explanation": "A furosemida atua no ramo ascendente da alça de Henle bloqueando o NKCC2, excretando grande volume de Na+, K+, Cl- e água.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q27",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #27).\n\nQual medicação agonista seletivo dos receptores beta-2 adrenérgicos promove broncodilatação rápida nas crises de asma?",
    "options": [
      "Salbutamol",
      "Propranolol",
      "Atenolol",
      "Pilocarpina"
    ],
    "correctIndex": 0,
    "explanation": "O salbutamol estimula os receptores beta-2 no músculo liso brônquico, elevando o AMPc e induzindo broncodilatação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q28",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anti-inflamatórios",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #28).\n\nOs AINEs (como ibuprofeno e cetoprofeno) reduzem dor e inflamação inibindo a enzima:",
    "options": [
      "Ciclooxigenase (COX-1 e COX-2)",
      "5-lipoxigenase (5-LOX)",
      "Fosfolipase A2",
      "Tromboxano sintetase"
    ],
    "correctIndex": 0,
    "explanation": "Os AINEs inibem a conversão do ácido araquidônico em prostaglandinas inflamatórias pelas enzimas COX.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q29",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Opioides",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #29).\n\nA depressão respiratória aguda por superdosagem de opióides (morfina, fentanil) é revertida prontamente pelo antagonista:",
    "options": [
      "Naloxona",
      "Flumazenil",
      "Atropina",
      "N-acetilcisteína"
    ],
    "correctIndex": 0,
    "explanation": "A naloxona é um antagonista puro de receptores opioides mu (µ), revertendo a depressão respiratória.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q30",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anticoagulantes",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #30).\n\nA varfarina exerce seu efeito anticoagulante inibindo a enzima epóxido redutase da vitamina K, bloqueando a síntese dos fatores de coagulação:",
    "options": [
      "Fatores II, VII, IX e X (dependentes de vitamina K)",
      "Fatores VIII, V e Fibrinogênio",
      "Fator XIII e Trombina",
      "Fator XI e XII"
    ],
    "correctIndex": 0,
    "explanation": "A varfarina inibe a gama-carboxilação hepática dos fatores II, VII, IX e X de coagulação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q31",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #31).\n\nA porcentagem de um fármaco administrado que atinge a circulação sistêmica na sua forma inalterada é denominada:",
    "options": [
      "Biodisponibilidade",
      "Volume de distribuição",
      "Clearance de depuração",
      "Meia-vida de eliminação"
    ],
    "correctIndex": 0,
    "explanation": "A biodisponibilidade (F) mede a fração da dose administrada que alcança a circulação sistêmica (100% via IV).",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q32",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #32).\n\nAs reações de Fase I do metabolismo hepático de drogas incluem hidroxilação e oxidação efetuadas pelo complexo enzimático:",
    "options": [
      "Citocromo P450 (CYP450)",
      "UDP-glicuronosiltransferase",
      "Glutationa S-transferase",
      "Álcool desidrogenase"
    ],
    "correctIndex": 0,
    "explanation": "O sistema CYP450 hepático catalisa reações de Fase I (oxidação, redução e hidrólise) alterando a polaridade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q33",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacodinâmica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #33).\n\nUm antagonista competitivo reversível altera a curva dose-resposta de um agonista de qual maneira?",
    "options": [
      "Desloca a curva para a direita aumentando a EC50 sem alterar o efeito máximo",
      "Reduz o efeito máximo sem alterar a EC50",
      "Desloca a curva para a esquerda aumentando a potência",
      "Aumenta a eficácia máxima do agonista"
    ],
    "correctIndex": 0,
    "explanation": "O antagonista competitivo compete pelo mesmo sítio do receptor, exigindo maiores concentrações do agonista para alcançar o mesmo efeito.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q34",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #34).\n\nA atropina é um fármaco bloqueador competitivo de receptores:",
    "options": [
      "Muscarínicos da acetilcolina (anticolinérgico)",
      "Nicotínicos da junção neuromuscular",
      "Alfa-1 adrenérgicos",
      "Beta-1 adrenérgicos"
    ],
    "correctIndex": 0,
    "explanation": "A atropina bloqueia receptores muscarínicos (M1-M5), causando taquicardia, midríase, retenção urinária e xerostomia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q35",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #35).\n\nOs inibidores da Enzima Conversora de Angiotensina (iECA, ex: enalapril) reduzem a pressão arterial e podem causar tosse seca por acúmulo de:",
    "options": [
      "Bradicinina",
      "Serotonina",
      "Histamina",
      "Endotelina-1"
    ],
    "correctIndex": 0,
    "explanation": "A ECA também degrada a bradicinina. A inibição da ECA eleva os níveis pulmonares de bradicinina, desencadeando tosse seca.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q36",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #36).\n\nQual diurético inibe o co-transportador Na+/K+/2Cl- no ramo ascendente espesso da alça de Henle, possuindo alta potência natriurética?",
    "options": [
      "Furosemida (diurético de alça)",
      "Hidroclorotiazida",
      "Espironolactona",
      "Acetazolamida"
    ],
    "correctIndex": 0,
    "explanation": "A furosemida atua no ramo ascendente da alça de Henle bloqueando o NKCC2, excretando grande volume de Na+, K+, Cl- e água.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q37",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #37).\n\nQual medicação agonista seletivo dos receptores beta-2 adrenérgicos promove broncodilatação rápida nas crises de asma?",
    "options": [
      "Salbutamol",
      "Propranolol",
      "Atenolol",
      "Pilocarpina"
    ],
    "correctIndex": 0,
    "explanation": "O salbutamol estimula os receptores beta-2 no músculo liso brônquico, elevando o AMPc e induzindo broncodilatação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q38",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anti-inflamatórios",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #38).\n\nOs AINEs (como ibuprofeno e cetoprofeno) reduzem dor e inflamação inibindo a enzima:",
    "options": [
      "Ciclooxigenase (COX-1 e COX-2)",
      "5-lipoxigenase (5-LOX)",
      "Fosfolipase A2",
      "Tromboxano sintetase"
    ],
    "correctIndex": 0,
    "explanation": "Os AINEs inibem a conversão do ácido araquidônico em prostaglandinas inflamatórias pelas enzimas COX.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q39",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Opioides",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #39).\n\nA depressão respiratória aguda por superdosagem de opióides (morfina, fentanil) é revertida prontamente pelo antagonista:",
    "options": [
      "Naloxona",
      "Flumazenil",
      "Atropina",
      "N-acetilcisteína"
    ],
    "correctIndex": 0,
    "explanation": "A naloxona é um antagonista puro de receptores opioides mu (µ), revertendo a depressão respiratória.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q40",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anticoagulantes",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #40).\n\nA varfarina exerce seu efeito anticoagulante inibindo a enzima epóxido redutase da vitamina K, bloqueando a síntese dos fatores de coagulação:",
    "options": [
      "Fatores II, VII, IX e X (dependentes de vitamina K)",
      "Fatores VIII, V e Fibrinogênio",
      "Fator XIII e Trombina",
      "Fator XI e XII"
    ],
    "correctIndex": 0,
    "explanation": "A varfarina inibe a gama-carboxilação hepática dos fatores II, VII, IX e X de coagulação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q41",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #41).\n\nA porcentagem de um fármaco administrado que atinge a circulação sistêmica na sua forma inalterada é denominada:",
    "options": [
      "Biodisponibilidade",
      "Volume de distribuição",
      "Clearance de depuração",
      "Meia-vida de eliminação"
    ],
    "correctIndex": 0,
    "explanation": "A biodisponibilidade (F) mede a fração da dose administrada que alcança a circulação sistêmica (100% via IV).",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q42",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #42).\n\nAs reações de Fase I do metabolismo hepático de drogas incluem hidroxilação e oxidação efetuadas pelo complexo enzimático:",
    "options": [
      "Citocromo P450 (CYP450)",
      "UDP-glicuronosiltransferase",
      "Glutationa S-transferase",
      "Álcool desidrogenase"
    ],
    "correctIndex": 0,
    "explanation": "O sistema CYP450 hepático catalisa reações de Fase I (oxidação, redução e hidrólise) alterando a polaridade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q43",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacodinâmica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #43).\n\nUm antagonista competitivo reversível altera a curva dose-resposta de um agonista de qual maneira?",
    "options": [
      "Desloca a curva para a direita aumentando a EC50 sem alterar o efeito máximo",
      "Reduz o efeito máximo sem alterar a EC50",
      "Desloca a curva para a esquerda aumentando a potência",
      "Aumenta a eficácia máxima do agonista"
    ],
    "correctIndex": 0,
    "explanation": "O antagonista competitivo compete pelo mesmo sítio do receptor, exigindo maiores concentrações do agonista para alcançar o mesmo efeito.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q44",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #44).\n\nA atropina é um fármaco bloqueador competitivo de receptores:",
    "options": [
      "Muscarínicos da acetilcolina (anticolinérgico)",
      "Nicotínicos da junção neuromuscular",
      "Alfa-1 adrenérgicos",
      "Beta-1 adrenérgicos"
    ],
    "correctIndex": 0,
    "explanation": "A atropina bloqueia receptores muscarínicos (M1-M5), causando taquicardia, midríase, retenção urinária e xerostomia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q45",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #45).\n\nOs inibidores da Enzima Conversora de Angiotensina (iECA, ex: enalapril) reduzem a pressão arterial e podem causar tosse seca por acúmulo de:",
    "options": [
      "Bradicinina",
      "Serotonina",
      "Histamina",
      "Endotelina-1"
    ],
    "correctIndex": 0,
    "explanation": "A ECA também degrada a bradicinina. A inibição da ECA eleva os níveis pulmonares de bradicinina, desencadeando tosse seca.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q46",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #46).\n\nQual diurético inibe o co-transportador Na+/K+/2Cl- no ramo ascendente espesso da alça de Henle, possuindo alta potência natriurética?",
    "options": [
      "Furosemida (diurético de alça)",
      "Hidroclorotiazida",
      "Espironolactona",
      "Acetazolamida"
    ],
    "correctIndex": 0,
    "explanation": "A furosemida atua no ramo ascendente da alça de Henle bloqueando o NKCC2, excretando grande volume de Na+, K+, Cl- e água.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q47",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #47).\n\nQual medicação agonista seletivo dos receptores beta-2 adrenérgicos promove broncodilatação rápida nas crises de asma?",
    "options": [
      "Salbutamol",
      "Propranolol",
      "Atenolol",
      "Pilocarpina"
    ],
    "correctIndex": 0,
    "explanation": "O salbutamol estimula os receptores beta-2 no músculo liso brônquico, elevando o AMPc e induzindo broncodilatação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q48",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anti-inflamatórios",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #48).\n\nOs AINEs (como ibuprofeno e cetoprofeno) reduzem dor e inflamação inibindo a enzima:",
    "options": [
      "Ciclooxigenase (COX-1 e COX-2)",
      "5-lipoxigenase (5-LOX)",
      "Fosfolipase A2",
      "Tromboxano sintetase"
    ],
    "correctIndex": 0,
    "explanation": "Os AINEs inibem a conversão do ácido araquidônico em prostaglandinas inflamatórias pelas enzimas COX.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q49",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Opioides",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #49).\n\nA depressão respiratória aguda por superdosagem de opióides (morfina, fentanil) é revertida prontamente pelo antagonista:",
    "options": [
      "Naloxona",
      "Flumazenil",
      "Atropina",
      "N-acetilcisteína"
    ],
    "correctIndex": 0,
    "explanation": "A naloxona é um antagonista puro de receptores opioides mu (µ), revertendo a depressão respiratória.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q50",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anticoagulantes",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #50).\n\nA varfarina exerce seu efeito anticoagulante inibindo a enzima epóxido redutase da vitamina K, bloqueando a síntese dos fatores de coagulação:",
    "options": [
      "Fatores II, VII, IX e X (dependentes de vitamina K)",
      "Fatores VIII, V e Fibrinogênio",
      "Fator XIII e Trombina",
      "Fator XI e XII"
    ],
    "correctIndex": 0,
    "explanation": "A varfarina inibe a gama-carboxilação hepática dos fatores II, VII, IX e X de coagulação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q51",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #51).\n\nA porcentagem de um fármaco administrado que atinge a circulação sistêmica na sua forma inalterada é denominada:",
    "options": [
      "Biodisponibilidade",
      "Volume de distribuição",
      "Clearance de depuração",
      "Meia-vida de eliminação"
    ],
    "correctIndex": 0,
    "explanation": "A biodisponibilidade (F) mede a fração da dose administrada que alcança a circulação sistêmica (100% via IV).",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q52",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #52).\n\nAs reações de Fase I do metabolismo hepático de drogas incluem hidroxilação e oxidação efetuadas pelo complexo enzimático:",
    "options": [
      "Citocromo P450 (CYP450)",
      "UDP-glicuronosiltransferase",
      "Glutationa S-transferase",
      "Álcool desidrogenase"
    ],
    "correctIndex": 0,
    "explanation": "O sistema CYP450 hepático catalisa reações de Fase I (oxidação, redução e hidrólise) alterando a polaridade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q53",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacodinâmica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #53).\n\nUm antagonista competitivo reversível altera a curva dose-resposta de um agonista de qual maneira?",
    "options": [
      "Desloca a curva para a direita aumentando a EC50 sem alterar o efeito máximo",
      "Reduz o efeito máximo sem alterar a EC50",
      "Desloca a curva para a esquerda aumentando a potência",
      "Aumenta a eficácia máxima do agonista"
    ],
    "correctIndex": 0,
    "explanation": "O antagonista competitivo compete pelo mesmo sítio do receptor, exigindo maiores concentrações do agonista para alcançar o mesmo efeito.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q54",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #54).\n\nA atropina é um fármaco bloqueador competitivo de receptores:",
    "options": [
      "Muscarínicos da acetilcolina (anticolinérgico)",
      "Nicotínicos da junção neuromuscular",
      "Alfa-1 adrenérgicos",
      "Beta-1 adrenérgicos"
    ],
    "correctIndex": 0,
    "explanation": "A atropina bloqueia receptores muscarínicos (M1-M5), causando taquicardia, midríase, retenção urinária e xerostomia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q55",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #55).\n\nOs inibidores da Enzima Conversora de Angiotensina (iECA, ex: enalapril) reduzem a pressão arterial e podem causar tosse seca por acúmulo de:",
    "options": [
      "Bradicinina",
      "Serotonina",
      "Histamina",
      "Endotelina-1"
    ],
    "correctIndex": 0,
    "explanation": "A ECA também degrada a bradicinina. A inibição da ECA eleva os níveis pulmonares de bradicinina, desencadeando tosse seca.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q56",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #56).\n\nQual diurético inibe o co-transportador Na+/K+/2Cl- no ramo ascendente espesso da alça de Henle, possuindo alta potência natriurética?",
    "options": [
      "Furosemida (diurético de alça)",
      "Hidroclorotiazida",
      "Espironolactona",
      "Acetazolamida"
    ],
    "correctIndex": 0,
    "explanation": "A furosemida atua no ramo ascendente da alça de Henle bloqueando o NKCC2, excretando grande volume de Na+, K+, Cl- e água.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q57",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #57).\n\nQual medicação agonista seletivo dos receptores beta-2 adrenérgicos promove broncodilatação rápida nas crises de asma?",
    "options": [
      "Salbutamol",
      "Propranolol",
      "Atenolol",
      "Pilocarpina"
    ],
    "correctIndex": 0,
    "explanation": "O salbutamol estimula os receptores beta-2 no músculo liso brônquico, elevando o AMPc e induzindo broncodilatação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q58",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anti-inflamatórios",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #58).\n\nOs AINEs (como ibuprofeno e cetoprofeno) reduzem dor e inflamação inibindo a enzima:",
    "options": [
      "Ciclooxigenase (COX-1 e COX-2)",
      "5-lipoxigenase (5-LOX)",
      "Fosfolipase A2",
      "Tromboxano sintetase"
    ],
    "correctIndex": 0,
    "explanation": "Os AINEs inibem a conversão do ácido araquidônico em prostaglandinas inflamatórias pelas enzimas COX.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q59",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Opioides",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #59).\n\nA depressão respiratória aguda por superdosagem de opióides (morfina, fentanil) é revertida prontamente pelo antagonista:",
    "options": [
      "Naloxona",
      "Flumazenil",
      "Atropina",
      "N-acetilcisteína"
    ],
    "correctIndex": 0,
    "explanation": "A naloxona é um antagonista puro de receptores opioides mu (µ), revertendo a depressão respiratória.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q60",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anticoagulantes",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #60).\n\nA varfarina exerce seu efeito anticoagulante inibindo a enzima epóxido redutase da vitamina K, bloqueando a síntese dos fatores de coagulação:",
    "options": [
      "Fatores II, VII, IX e X (dependentes de vitamina K)",
      "Fatores VIII, V e Fibrinogênio",
      "Fator XIII e Trombina",
      "Fator XI e XII"
    ],
    "correctIndex": 0,
    "explanation": "A varfarina inibe a gama-carboxilação hepática dos fatores II, VII, IX e X de coagulação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q61",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #61).\n\nA porcentagem de um fármaco administrado que atinge a circulação sistêmica na sua forma inalterada é denominada:",
    "options": [
      "Biodisponibilidade",
      "Volume de distribuição",
      "Clearance de depuração",
      "Meia-vida de eliminação"
    ],
    "correctIndex": 0,
    "explanation": "A biodisponibilidade (F) mede a fração da dose administrada que alcança a circulação sistêmica (100% via IV).",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q62",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #62).\n\nAs reações de Fase I do metabolismo hepático de drogas incluem hidroxilação e oxidação efetuadas pelo complexo enzimático:",
    "options": [
      "Citocromo P450 (CYP450)",
      "UDP-glicuronosiltransferase",
      "Glutationa S-transferase",
      "Álcool desidrogenase"
    ],
    "correctIndex": 0,
    "explanation": "O sistema CYP450 hepático catalisa reações de Fase I (oxidação, redução e hidrólise) alterando a polaridade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q63",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacodinâmica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #63).\n\nUm antagonista competitivo reversível altera a curva dose-resposta de um agonista de qual maneira?",
    "options": [
      "Desloca a curva para a direita aumentando a EC50 sem alterar o efeito máximo",
      "Reduz o efeito máximo sem alterar a EC50",
      "Desloca a curva para a esquerda aumentando a potência",
      "Aumenta a eficácia máxima do agonista"
    ],
    "correctIndex": 0,
    "explanation": "O antagonista competitivo compete pelo mesmo sítio do receptor, exigindo maiores concentrações do agonista para alcançar o mesmo efeito.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q64",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #64).\n\nA atropina é um fármaco bloqueador competitivo de receptores:",
    "options": [
      "Muscarínicos da acetilcolina (anticolinérgico)",
      "Nicotínicos da junção neuromuscular",
      "Alfa-1 adrenérgicos",
      "Beta-1 adrenérgicos"
    ],
    "correctIndex": 0,
    "explanation": "A atropina bloqueia receptores muscarínicos (M1-M5), causando taquicardia, midríase, retenção urinária e xerostomia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q65",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #65).\n\nOs inibidores da Enzima Conversora de Angiotensina (iECA, ex: enalapril) reduzem a pressão arterial e podem causar tosse seca por acúmulo de:",
    "options": [
      "Bradicinina",
      "Serotonina",
      "Histamina",
      "Endotelina-1"
    ],
    "correctIndex": 0,
    "explanation": "A ECA também degrada a bradicinina. A inibição da ECA eleva os níveis pulmonares de bradicinina, desencadeando tosse seca.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q66",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #66).\n\nQual diurético inibe o co-transportador Na+/K+/2Cl- no ramo ascendente espesso da alça de Henle, possuindo alta potência natriurética?",
    "options": [
      "Furosemida (diurético de alça)",
      "Hidroclorotiazida",
      "Espironolactona",
      "Acetazolamida"
    ],
    "correctIndex": 0,
    "explanation": "A furosemida atua no ramo ascendente da alça de Henle bloqueando o NKCC2, excretando grande volume de Na+, K+, Cl- e água.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q67",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #67).\n\nQual medicação agonista seletivo dos receptores beta-2 adrenérgicos promove broncodilatação rápida nas crises de asma?",
    "options": [
      "Salbutamol",
      "Propranolol",
      "Atenolol",
      "Pilocarpina"
    ],
    "correctIndex": 0,
    "explanation": "O salbutamol estimula os receptores beta-2 no músculo liso brônquico, elevando o AMPc e induzindo broncodilatação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q68",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anti-inflamatórios",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #68).\n\nOs AINEs (como ibuprofeno e cetoprofeno) reduzem dor e inflamação inibindo a enzima:",
    "options": [
      "Ciclooxigenase (COX-1 e COX-2)",
      "5-lipoxigenase (5-LOX)",
      "Fosfolipase A2",
      "Tromboxano sintetase"
    ],
    "correctIndex": 0,
    "explanation": "Os AINEs inibem a conversão do ácido araquidônico em prostaglandinas inflamatórias pelas enzimas COX.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q69",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Opioides",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #69).\n\nA depressão respiratória aguda por superdosagem de opióides (morfina, fentanil) é revertida prontamente pelo antagonista:",
    "options": [
      "Naloxona",
      "Flumazenil",
      "Atropina",
      "N-acetilcisteína"
    ],
    "correctIndex": 0,
    "explanation": "A naloxona é um antagonista puro de receptores opioides mu (µ), revertendo a depressão respiratória.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q70",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anticoagulantes",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #70).\n\nA varfarina exerce seu efeito anticoagulante inibindo a enzima epóxido redutase da vitamina K, bloqueando a síntese dos fatores de coagulação:",
    "options": [
      "Fatores II, VII, IX e X (dependentes de vitamina K)",
      "Fatores VIII, V e Fibrinogênio",
      "Fator XIII e Trombina",
      "Fator XI e XII"
    ],
    "correctIndex": 0,
    "explanation": "A varfarina inibe a gama-carboxilação hepática dos fatores II, VII, IX e X de coagulação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q71",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #71).\n\nA porcentagem de um fármaco administrado que atinge a circulação sistêmica na sua forma inalterada é denominada:",
    "options": [
      "Biodisponibilidade",
      "Volume de distribuição",
      "Clearance de depuração",
      "Meia-vida de eliminação"
    ],
    "correctIndex": 0,
    "explanation": "A biodisponibilidade (F) mede a fração da dose administrada que alcança a circulação sistêmica (100% via IV).",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q72",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #72).\n\nAs reações de Fase I do metabolismo hepático de drogas incluem hidroxilação e oxidação efetuadas pelo complexo enzimático:",
    "options": [
      "Citocromo P450 (CYP450)",
      "UDP-glicuronosiltransferase",
      "Glutationa S-transferase",
      "Álcool desidrogenase"
    ],
    "correctIndex": 0,
    "explanation": "O sistema CYP450 hepático catalisa reações de Fase I (oxidação, redução e hidrólise) alterando a polaridade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q73",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacodinâmica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #73).\n\nUm antagonista competitivo reversível altera a curva dose-resposta de um agonista de qual maneira?",
    "options": [
      "Desloca a curva para a direita aumentando a EC50 sem alterar o efeito máximo",
      "Reduz o efeito máximo sem alterar a EC50",
      "Desloca a curva para a esquerda aumentando a potência",
      "Aumenta a eficácia máxima do agonista"
    ],
    "correctIndex": 0,
    "explanation": "O antagonista competitivo compete pelo mesmo sítio do receptor, exigindo maiores concentrações do agonista para alcançar o mesmo efeito.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q74",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #74).\n\nA atropina é um fármaco bloqueador competitivo de receptores:",
    "options": [
      "Muscarínicos da acetilcolina (anticolinérgico)",
      "Nicotínicos da junção neuromuscular",
      "Alfa-1 adrenérgicos",
      "Beta-1 adrenérgicos"
    ],
    "correctIndex": 0,
    "explanation": "A atropina bloqueia receptores muscarínicos (M1-M5), causando taquicardia, midríase, retenção urinária e xerostomia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q75",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #75).\n\nOs inibidores da Enzima Conversora de Angiotensina (iECA, ex: enalapril) reduzem a pressão arterial e podem causar tosse seca por acúmulo de:",
    "options": [
      "Bradicinina",
      "Serotonina",
      "Histamina",
      "Endotelina-1"
    ],
    "correctIndex": 0,
    "explanation": "A ECA também degrada a bradicinina. A inibição da ECA eleva os níveis pulmonares de bradicinina, desencadeando tosse seca.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q76",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #76).\n\nQual diurético inibe o co-transportador Na+/K+/2Cl- no ramo ascendente espesso da alça de Henle, possuindo alta potência natriurética?",
    "options": [
      "Furosemida (diurético de alça)",
      "Hidroclorotiazida",
      "Espironolactona",
      "Acetazolamida"
    ],
    "correctIndex": 0,
    "explanation": "A furosemida atua no ramo ascendente da alça de Henle bloqueando o NKCC2, excretando grande volume de Na+, K+, Cl- e água.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q77",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #77).\n\nQual medicação agonista seletivo dos receptores beta-2 adrenérgicos promove broncodilatação rápida nas crises de asma?",
    "options": [
      "Salbutamol",
      "Propranolol",
      "Atenolol",
      "Pilocarpina"
    ],
    "correctIndex": 0,
    "explanation": "O salbutamol estimula os receptores beta-2 no músculo liso brônquico, elevando o AMPc e induzindo broncodilatação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q78",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anti-inflamatórios",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #78).\n\nOs AINEs (como ibuprofeno e cetoprofeno) reduzem dor e inflamação inibindo a enzima:",
    "options": [
      "Ciclooxigenase (COX-1 e COX-2)",
      "5-lipoxigenase (5-LOX)",
      "Fosfolipase A2",
      "Tromboxano sintetase"
    ],
    "correctIndex": 0,
    "explanation": "Os AINEs inibem a conversão do ácido araquidônico em prostaglandinas inflamatórias pelas enzimas COX.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q79",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Opioides",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #79).\n\nA depressão respiratória aguda por superdosagem de opióides (morfina, fentanil) é revertida prontamente pelo antagonista:",
    "options": [
      "Naloxona",
      "Flumazenil",
      "Atropina",
      "N-acetilcisteína"
    ],
    "correctIndex": 0,
    "explanation": "A naloxona é um antagonista puro de receptores opioides mu (µ), revertendo a depressão respiratória.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q80",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anticoagulantes",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #80).\n\nA varfarina exerce seu efeito anticoagulante inibindo a enzima epóxido redutase da vitamina K, bloqueando a síntese dos fatores de coagulação:",
    "options": [
      "Fatores II, VII, IX e X (dependentes de vitamina K)",
      "Fatores VIII, V e Fibrinogênio",
      "Fator XIII e Trombina",
      "Fator XI e XII"
    ],
    "correctIndex": 0,
    "explanation": "A varfarina inibe a gama-carboxilação hepática dos fatores II, VII, IX e X de coagulação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q81",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #81).\n\nA porcentagem de um fármaco administrado que atinge a circulação sistêmica na sua forma inalterada é denominada:",
    "options": [
      "Biodisponibilidade",
      "Volume de distribuição",
      "Clearance de depuração",
      "Meia-vida de eliminação"
    ],
    "correctIndex": 0,
    "explanation": "A biodisponibilidade (F) mede a fração da dose administrada que alcança a circulação sistêmica (100% via IV).",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q82",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #82).\n\nAs reações de Fase I do metabolismo hepático de drogas incluem hidroxilação e oxidação efetuadas pelo complexo enzimático:",
    "options": [
      "Citocromo P450 (CYP450)",
      "UDP-glicuronosiltransferase",
      "Glutationa S-transferase",
      "Álcool desidrogenase"
    ],
    "correctIndex": 0,
    "explanation": "O sistema CYP450 hepático catalisa reações de Fase I (oxidação, redução e hidrólise) alterando a polaridade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q83",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacodinâmica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #83).\n\nUm antagonista competitivo reversível altera a curva dose-resposta de um agonista de qual maneira?",
    "options": [
      "Desloca a curva para a direita aumentando a EC50 sem alterar o efeito máximo",
      "Reduz o efeito máximo sem alterar a EC50",
      "Desloca a curva para a esquerda aumentando a potência",
      "Aumenta a eficácia máxima do agonista"
    ],
    "correctIndex": 0,
    "explanation": "O antagonista competitivo compete pelo mesmo sítio do receptor, exigindo maiores concentrações do agonista para alcançar o mesmo efeito.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q84",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #84).\n\nA atropina é um fármaco bloqueador competitivo de receptores:",
    "options": [
      "Muscarínicos da acetilcolina (anticolinérgico)",
      "Nicotínicos da junção neuromuscular",
      "Alfa-1 adrenérgicos",
      "Beta-1 adrenérgicos"
    ],
    "correctIndex": 0,
    "explanation": "A atropina bloqueia receptores muscarínicos (M1-M5), causando taquicardia, midríase, retenção urinária e xerostomia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q85",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #85).\n\nOs inibidores da Enzima Conversora de Angiotensina (iECA, ex: enalapril) reduzem a pressão arterial e podem causar tosse seca por acúmulo de:",
    "options": [
      "Bradicinina",
      "Serotonina",
      "Histamina",
      "Endotelina-1"
    ],
    "correctIndex": 0,
    "explanation": "A ECA também degrada a bradicinina. A inibição da ECA eleva os níveis pulmonares de bradicinina, desencadeando tosse seca.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q86",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #86).\n\nQual diurético inibe o co-transportador Na+/K+/2Cl- no ramo ascendente espesso da alça de Henle, possuindo alta potência natriurética?",
    "options": [
      "Furosemida (diurético de alça)",
      "Hidroclorotiazida",
      "Espironolactona",
      "Acetazolamida"
    ],
    "correctIndex": 0,
    "explanation": "A furosemida atua no ramo ascendente da alça de Henle bloqueando o NKCC2, excretando grande volume de Na+, K+, Cl- e água.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q87",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #87).\n\nQual medicação agonista seletivo dos receptores beta-2 adrenérgicos promove broncodilatação rápida nas crises de asma?",
    "options": [
      "Salbutamol",
      "Propranolol",
      "Atenolol",
      "Pilocarpina"
    ],
    "correctIndex": 0,
    "explanation": "O salbutamol estimula os receptores beta-2 no músculo liso brônquico, elevando o AMPc e induzindo broncodilatação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q88",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anti-inflamatórios",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #88).\n\nOs AINEs (como ibuprofeno e cetoprofeno) reduzem dor e inflamação inibindo a enzima:",
    "options": [
      "Ciclooxigenase (COX-1 e COX-2)",
      "5-lipoxigenase (5-LOX)",
      "Fosfolipase A2",
      "Tromboxano sintetase"
    ],
    "correctIndex": 0,
    "explanation": "Os AINEs inibem a conversão do ácido araquidônico em prostaglandinas inflamatórias pelas enzimas COX.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q89",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Opioides",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #89).\n\nA depressão respiratória aguda por superdosagem de opióides (morfina, fentanil) é revertida prontamente pelo antagonista:",
    "options": [
      "Naloxona",
      "Flumazenil",
      "Atropina",
      "N-acetilcisteína"
    ],
    "correctIndex": 0,
    "explanation": "A naloxona é um antagonista puro de receptores opioides mu (µ), revertendo a depressão respiratória.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q90",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anticoagulantes",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #90).\n\nA varfarina exerce seu efeito anticoagulante inibindo a enzima epóxido redutase da vitamina K, bloqueando a síntese dos fatores de coagulação:",
    "options": [
      "Fatores II, VII, IX e X (dependentes de vitamina K)",
      "Fatores VIII, V e Fibrinogênio",
      "Fator XIII e Trombina",
      "Fator XI e XII"
    ],
    "correctIndex": 0,
    "explanation": "A varfarina inibe a gama-carboxilação hepática dos fatores II, VII, IX e X de coagulação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q91",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #91).\n\nA porcentagem de um fármaco administrado que atinge a circulação sistêmica na sua forma inalterada é denominada:",
    "options": [
      "Biodisponibilidade",
      "Volume de distribuição",
      "Clearance de depuração",
      "Meia-vida de eliminação"
    ],
    "correctIndex": 0,
    "explanation": "A biodisponibilidade (F) mede a fração da dose administrada que alcança a circulação sistêmica (100% via IV).",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q92",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacocinética",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #92).\n\nAs reações de Fase I do metabolismo hepático de drogas incluem hidroxilação e oxidação efetuadas pelo complexo enzimático:",
    "options": [
      "Citocromo P450 (CYP450)",
      "UDP-glicuronosiltransferase",
      "Glutationa S-transferase",
      "Álcool desidrogenase"
    ],
    "correctIndex": 0,
    "explanation": "O sistema CYP450 hepático catalisa reações de Fase I (oxidação, redução e hidrólise) alterando a polaridade da droga.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q93",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacodinâmica",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #93).\n\nUm antagonista competitivo reversível altera a curva dose-resposta de um agonista de qual maneira?",
    "options": [
      "Desloca a curva para a direita aumentando a EC50 sem alterar o efeito máximo",
      "Reduz o efeito máximo sem alterar a EC50",
      "Desloca a curva para a esquerda aumentando a potência",
      "Aumenta a eficácia máxima do agonista"
    ],
    "correctIndex": 0,
    "explanation": "O antagonista competitivo compete pelo mesmo sítio do receptor, exigindo maiores concentrações do agonista para alcançar o mesmo efeito.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q94",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #94).\n\nA atropina é um fármaco bloqueador competitivo de receptores:",
    "options": [
      "Muscarínicos da acetilcolina (anticolinérgico)",
      "Nicotínicos da junção neuromuscular",
      "Alfa-1 adrenérgicos",
      "Beta-1 adrenérgicos"
    ],
    "correctIndex": 0,
    "explanation": "A atropina bloqueia receptores muscarínicos (M1-M5), causando taquicardia, midríase, retenção urinária e xerostomia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q95",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #95).\n\nOs inibidores da Enzima Conversora de Angiotensina (iECA, ex: enalapril) reduzem a pressão arterial e podem causar tosse seca por acúmulo de:",
    "options": [
      "Bradicinina",
      "Serotonina",
      "Histamina",
      "Endotelina-1"
    ],
    "correctIndex": 0,
    "explanation": "A ECA também degrada a bradicinina. A inibição da ECA eleva os níveis pulmonares de bradicinina, desencadeando tosse seca.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q96",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #96).\n\nQual diurético inibe o co-transportador Na+/K+/2Cl- no ramo ascendente espesso da alça de Henle, possuindo alta potência natriurética?",
    "options": [
      "Furosemida (diurético de alça)",
      "Hidroclorotiazida",
      "Espironolactona",
      "Acetazolamida"
    ],
    "correctIndex": 0,
    "explanation": "A furosemida atua no ramo ascendente da alça de Henle bloqueando o NKCC2, excretando grande volume de Na+, K+, Cl- e água.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q97",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Farmacologia do SNA",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #97).\n\nQual medicação agonista seletivo dos receptores beta-2 adrenérgicos promove broncodilatação rápida nas crises de asma?",
    "options": [
      "Salbutamol",
      "Propranolol",
      "Atenolol",
      "Pilocarpina"
    ],
    "correctIndex": 0,
    "explanation": "O salbutamol estimula os receptores beta-2 no músculo liso brônquico, elevando o AMPc e induzindo broncodilatação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q98",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anti-inflamatórios",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #98).\n\nOs AINEs (como ibuprofeno e cetoprofeno) reduzem dor e inflamação inibindo a enzima:",
    "options": [
      "Ciclooxigenase (COX-1 e COX-2)",
      "5-lipoxigenase (5-LOX)",
      "Fosfolipase A2",
      "Tromboxano sintetase"
    ],
    "correctIndex": 0,
    "explanation": "Os AINEs inibem a conversão do ácido araquidônico em prostaglandinas inflamatórias pelas enzimas COX.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q99",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Opioides",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #99).\n\nA depressão respiratória aguda por superdosagem de opióides (morfina, fentanil) é revertida prontamente pelo antagonista:",
    "options": [
      "Naloxona",
      "Flumazenil",
      "Atropina",
      "N-acetilcisteína"
    ],
    "correctIndex": 0,
    "explanation": "A naloxona é um antagonista puro de receptores opioides mu (µ), revertendo a depressão respiratória.",
    "difficulty": "medium"
  },
  {
    "id": "basico_farmacologia_q100",
    "cycle": "Ciclo Básico",
    "subject": "Farmacologia",
    "subSubject": "Anticoagulantes",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #100).\n\nA varfarina exerce seu efeito anticoagulante inibindo a enzima epóxido redutase da vitamina K, bloqueando a síntese dos fatores de coagulação:",
    "options": [
      "Fatores II, VII, IX e X (dependentes de vitamina K)",
      "Fatores VIII, V e Fibrinogênio",
      "Fator XIII e Trombina",
      "Fator XI e XII"
    ],
    "correctIndex": 0,
    "explanation": "A varfarina inibe a gama-carboxilação hepática dos fatores II, VII, IX e X de coagulação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q1",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Lesão Celular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #1).\n\nA morte celular programada ativamente sem ruptura da membrana plasmática e sem reação inflamatória circundante é a:",
    "options": [
      "Apoptose",
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose gordurosa"
    ],
    "correctIndex": 0,
    "explanation": "A apoptose é a morte celular fisiológica ou patológica limpa por condensação de cromatina e corpos apoptóticos sem inflamação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q2",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #2).\n\nO tipo de necrose tecidual observada em infartos isquêmicos do miocárdio e rim caracterizada por preservação do contorno celular é a:",
    "options": [
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose caseosa",
      "Necrose gangrenosa"
    ],
    "correctIndex": 0,
    "explanation": "A necrose de coagulação preserva o arcabouço tecidual por desnaturação das proteínas estruturais e enzimáticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q3",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #3).\n\nA necrose liquefativa em que o tecido é digerido e transformado em massa fluida viscosa é padrão característico do infarto em qual órgão?",
    "options": [
      "Cérebro (Sistema Nervoso Central)",
      "Coração",
      "Fígado",
      "Baço"
    ],
    "correctIndex": 0,
    "explanation": "O infarto cerebral (isquêmico) resulta em necrose liquefativa devido ao alto teor de lipídios e enzimas autolíticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q4",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #4).\n\nOs neutrófilos são as primeiras células recrutadas para o sítio da lesão tecidual, sendo o achado histológico marcante da:",
    "options": [
      "Inflamação aguda",
      "Inflamação crônica granulomatosa",
      "Atrofia tecidual",
      "Metaplasia escamosa"
    ],
    "correctIndex": 0,
    "explanation": "A inflamação aguda caracteriza-se por exsudação de fluidos e infiltração maciça de polimorfonucleares (neutrófilos).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q5",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação Crônica",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #5).\n\nO granuloma imune tuberculoso exibe no seu centro um padrão de necrose e é circundado por linfócitos e células epitelióides do tipo:",
    "options": [
      "Necrose caseosa e células gigantes de Langhans",
      "Necrose gordurosa e macrófagos xantomatosos",
      "Necrose fibrinóide e plasmócitos",
      "Abcesso purulento com neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "O granuloma caseoso da tuberculose é formado por macrófagos modificados (células epitelióides), células de Langhans e necrose caseosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q6",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #6).\n\nA substituição reversível de um tipo celular adulto por outro tipo celular adulto mais resistente ao estresse (ex: esôfago de Barrett) denomina-se:",
    "options": [
      "Metaplasia",
      "Displasia",
      "Anaplasia",
      "Hiperplasia"
    ],
    "correctIndex": 0,
    "explanation": "Metaplasia é a alteração adaptativa reversível do fenótipo celular em resposta a agressão crônica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q7",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #7).\n\nAs neoplasias malignas de origem epitelial são denominadas genericamente de:",
    "options": [
      "Carcinomas",
      "Sarcomas",
      "Linfomas",
      "Adenomas"
    ],
    "correctIndex": 0,
    "explanation": "Tumores malignos derivados de tecidos epiteliais chamam-se carcinomas; os de origem mesenquimal chamam-se sarcomas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q8",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Distúrbios Hemodinâmicos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #8).\n\nA Tríade de Virchow predisponente à formação de trombos intravasculares é composta por:",
    "options": [
      "Lesão endotelial, estase/turbulência do fluxo e hipercoagulabilidade",
      "Hipertensão, hipoxia e hiperglicemia",
      "Vasodilatação, exsudação e dor",
      "Febre, leucocitose e taquicardia"
    ],
    "correctIndex": 0,
    "explanation": "A Tríade de Virchow reúne os três fatores patogênicos centrais na trombogênese: lesão endotelial, alteração do fluxo e hipercoagulabilidade.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q9",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #9).\n\nA aterosclerose é uma doença inflamatória crônica das artérias de médio e grande calibre iniciada por:",
    "options": [
      "Disfunção endotelial e acúmulo de lipoproteínas (LDL) na túnica íntima",
      "Infecção fúngica da túnica adventícia",
      "Necrose fibrinóide da túnica média",
      "Aneurisma congênito"
    ],
    "correctIndex": 0,
    "explanation": "A aterogênese começa com agressão endotelial, retenção de LDL oxidado na íntima e recrutamento de monócitos/macrófagos (células espumosas).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q10",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Hepática",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #10).\n\nA cirrose hepática representa o estágio final de diversas agressões crônicas ao fígado, caracterizando-se por:",
    "options": [
      "Fibrose difusa e formação de nódulos de regeneração",
      "Esteatose macrovesicular pura sem fibrose",
      "Necrose hemorrágica maciça sem regeneração",
      "Hiperplasia das vias biliares sem septos"
    ],
    "correctIndex": 0,
    "explanation": "A cirrose reestrutura a arquitetura hepática em nódulos de hepatócitos circundados por septos fibrosos densos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q11",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Lesão Celular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #11).\n\nA morte celular programada ativamente sem ruptura da membrana plasmática e sem reação inflamatória circundante é a:",
    "options": [
      "Apoptose",
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose gordurosa"
    ],
    "correctIndex": 0,
    "explanation": "A apoptose é a morte celular fisiológica ou patológica limpa por condensação de cromatina e corpos apoptóticos sem inflamação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q12",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #12).\n\nO tipo de necrose tecidual observada em infartos isquêmicos do miocárdio e rim caracterizada por preservação do contorno celular é a:",
    "options": [
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose caseosa",
      "Necrose gangrenosa"
    ],
    "correctIndex": 0,
    "explanation": "A necrose de coagulação preserva o arcabouço tecidual por desnaturação das proteínas estruturais e enzimáticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q13",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #13).\n\nA necrose liquefativa em que o tecido é digerido e transformado em massa fluida viscosa é padrão característico do infarto em qual órgão?",
    "options": [
      "Cérebro (Sistema Nervoso Central)",
      "Coração",
      "Fígado",
      "Baço"
    ],
    "correctIndex": 0,
    "explanation": "O infarto cerebral (isquêmico) resulta em necrose liquefativa devido ao alto teor de lipídios e enzimas autolíticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q14",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #14).\n\nOs neutrófilos são as primeiras células recrutadas para o sítio da lesão tecidual, sendo o achado histológico marcante da:",
    "options": [
      "Inflamação aguda",
      "Inflamação crônica granulomatosa",
      "Atrofia tecidual",
      "Metaplasia escamosa"
    ],
    "correctIndex": 0,
    "explanation": "A inflamação aguda caracteriza-se por exsudação de fluidos e infiltração maciça de polimorfonucleares (neutrófilos).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q15",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação Crônica",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #15).\n\nO granuloma imune tuberculoso exibe no seu centro um padrão de necrose e é circundado por linfócitos e células epitelióides do tipo:",
    "options": [
      "Necrose caseosa e células gigantes de Langhans",
      "Necrose gordurosa e macrófagos xantomatosos",
      "Necrose fibrinóide e plasmócitos",
      "Abcesso purulento com neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "O granuloma caseoso da tuberculose é formado por macrófagos modificados (células epitelióides), células de Langhans e necrose caseosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q16",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #16).\n\nA substituição reversível de um tipo celular adulto por outro tipo celular adulto mais resistente ao estresse (ex: esôfago de Barrett) denomina-se:",
    "options": [
      "Metaplasia",
      "Displasia",
      "Anaplasia",
      "Hiperplasia"
    ],
    "correctIndex": 0,
    "explanation": "Metaplasia é a alteração adaptativa reversível do fenótipo celular em resposta a agressão crônica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q17",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #17).\n\nAs neoplasias malignas de origem epitelial são denominadas genericamente de:",
    "options": [
      "Carcinomas",
      "Sarcomas",
      "Linfomas",
      "Adenomas"
    ],
    "correctIndex": 0,
    "explanation": "Tumores malignos derivados de tecidos epiteliais chamam-se carcinomas; os de origem mesenquimal chamam-se sarcomas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q18",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Distúrbios Hemodinâmicos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #18).\n\nA Tríade de Virchow predisponente à formação de trombos intravasculares é composta por:",
    "options": [
      "Lesão endotelial, estase/turbulência do fluxo e hipercoagulabilidade",
      "Hipertensão, hipoxia e hiperglicemia",
      "Vasodilatação, exsudação e dor",
      "Febre, leucocitose e taquicardia"
    ],
    "correctIndex": 0,
    "explanation": "A Tríade de Virchow reúne os três fatores patogênicos centrais na trombogênese: lesão endotelial, alteração do fluxo e hipercoagulabilidade.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q19",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #19).\n\nA aterosclerose é uma doença inflamatória crônica das artérias de médio e grande calibre iniciada por:",
    "options": [
      "Disfunção endotelial e acúmulo de lipoproteínas (LDL) na túnica íntima",
      "Infecção fúngica da túnica adventícia",
      "Necrose fibrinóide da túnica média",
      "Aneurisma congênito"
    ],
    "correctIndex": 0,
    "explanation": "A aterogênese começa com agressão endotelial, retenção de LDL oxidado na íntima e recrutamento de monócitos/macrófagos (células espumosas).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q20",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Hepática",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #20).\n\nA cirrose hepática representa o estágio final de diversas agressões crônicas ao fígado, caracterizando-se por:",
    "options": [
      "Fibrose difusa e formação de nódulos de regeneração",
      "Esteatose macrovesicular pura sem fibrose",
      "Necrose hemorrágica maciça sem regeneração",
      "Hiperplasia das vias biliares sem septos"
    ],
    "correctIndex": 0,
    "explanation": "A cirrose reestrutura a arquitetura hepática em nódulos de hepatócitos circundados por septos fibrosos densos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q21",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Lesão Celular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #21).\n\nA morte celular programada ativamente sem ruptura da membrana plasmática e sem reação inflamatória circundante é a:",
    "options": [
      "Apoptose",
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose gordurosa"
    ],
    "correctIndex": 0,
    "explanation": "A apoptose é a morte celular fisiológica ou patológica limpa por condensação de cromatina e corpos apoptóticos sem inflamação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q22",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #22).\n\nO tipo de necrose tecidual observada em infartos isquêmicos do miocárdio e rim caracterizada por preservação do contorno celular é a:",
    "options": [
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose caseosa",
      "Necrose gangrenosa"
    ],
    "correctIndex": 0,
    "explanation": "A necrose de coagulação preserva o arcabouço tecidual por desnaturação das proteínas estruturais e enzimáticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q23",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #23).\n\nA necrose liquefativa em que o tecido é digerido e transformado em massa fluida viscosa é padrão característico do infarto em qual órgão?",
    "options": [
      "Cérebro (Sistema Nervoso Central)",
      "Coração",
      "Fígado",
      "Baço"
    ],
    "correctIndex": 0,
    "explanation": "O infarto cerebral (isquêmico) resulta em necrose liquefativa devido ao alto teor de lipídios e enzimas autolíticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q24",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #24).\n\nOs neutrófilos são as primeiras células recrutadas para o sítio da lesão tecidual, sendo o achado histológico marcante da:",
    "options": [
      "Inflamação aguda",
      "Inflamação crônica granulomatosa",
      "Atrofia tecidual",
      "Metaplasia escamosa"
    ],
    "correctIndex": 0,
    "explanation": "A inflamação aguda caracteriza-se por exsudação de fluidos e infiltração maciça de polimorfonucleares (neutrófilos).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q25",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação Crônica",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #25).\n\nO granuloma imune tuberculoso exibe no seu centro um padrão de necrose e é circundado por linfócitos e células epitelióides do tipo:",
    "options": [
      "Necrose caseosa e células gigantes de Langhans",
      "Necrose gordurosa e macrófagos xantomatosos",
      "Necrose fibrinóide e plasmócitos",
      "Abcesso purulento com neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "O granuloma caseoso da tuberculose é formado por macrófagos modificados (células epitelióides), células de Langhans e necrose caseosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q26",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #26).\n\nA substituição reversível de um tipo celular adulto por outro tipo celular adulto mais resistente ao estresse (ex: esôfago de Barrett) denomina-se:",
    "options": [
      "Metaplasia",
      "Displasia",
      "Anaplasia",
      "Hiperplasia"
    ],
    "correctIndex": 0,
    "explanation": "Metaplasia é a alteração adaptativa reversível do fenótipo celular em resposta a agressão crônica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q27",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #27).\n\nAs neoplasias malignas de origem epitelial são denominadas genericamente de:",
    "options": [
      "Carcinomas",
      "Sarcomas",
      "Linfomas",
      "Adenomas"
    ],
    "correctIndex": 0,
    "explanation": "Tumores malignos derivados de tecidos epiteliais chamam-se carcinomas; os de origem mesenquimal chamam-se sarcomas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q28",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Distúrbios Hemodinâmicos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #28).\n\nA Tríade de Virchow predisponente à formação de trombos intravasculares é composta por:",
    "options": [
      "Lesão endotelial, estase/turbulência do fluxo e hipercoagulabilidade",
      "Hipertensão, hipoxia e hiperglicemia",
      "Vasodilatação, exsudação e dor",
      "Febre, leucocitose e taquicardia"
    ],
    "correctIndex": 0,
    "explanation": "A Tríade de Virchow reúne os três fatores patogênicos centrais na trombogênese: lesão endotelial, alteração do fluxo e hipercoagulabilidade.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q29",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #29).\n\nA aterosclerose é uma doença inflamatória crônica das artérias de médio e grande calibre iniciada por:",
    "options": [
      "Disfunção endotelial e acúmulo de lipoproteínas (LDL) na túnica íntima",
      "Infecção fúngica da túnica adventícia",
      "Necrose fibrinóide da túnica média",
      "Aneurisma congênito"
    ],
    "correctIndex": 0,
    "explanation": "A aterogênese começa com agressão endotelial, retenção de LDL oxidado na íntima e recrutamento de monócitos/macrófagos (células espumosas).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q30",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Hepática",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #30).\n\nA cirrose hepática representa o estágio final de diversas agressões crônicas ao fígado, caracterizando-se por:",
    "options": [
      "Fibrose difusa e formação de nódulos de regeneração",
      "Esteatose macrovesicular pura sem fibrose",
      "Necrose hemorrágica maciça sem regeneração",
      "Hiperplasia das vias biliares sem septos"
    ],
    "correctIndex": 0,
    "explanation": "A cirrose reestrutura a arquitetura hepática em nódulos de hepatócitos circundados por septos fibrosos densos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q31",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Lesão Celular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #31).\n\nA morte celular programada ativamente sem ruptura da membrana plasmática e sem reação inflamatória circundante é a:",
    "options": [
      "Apoptose",
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose gordurosa"
    ],
    "correctIndex": 0,
    "explanation": "A apoptose é a morte celular fisiológica ou patológica limpa por condensação de cromatina e corpos apoptóticos sem inflamação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q32",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #32).\n\nO tipo de necrose tecidual observada em infartos isquêmicos do miocárdio e rim caracterizada por preservação do contorno celular é a:",
    "options": [
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose caseosa",
      "Necrose gangrenosa"
    ],
    "correctIndex": 0,
    "explanation": "A necrose de coagulação preserva o arcabouço tecidual por desnaturação das proteínas estruturais e enzimáticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q33",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #33).\n\nA necrose liquefativa em que o tecido é digerido e transformado em massa fluida viscosa é padrão característico do infarto em qual órgão?",
    "options": [
      "Cérebro (Sistema Nervoso Central)",
      "Coração",
      "Fígado",
      "Baço"
    ],
    "correctIndex": 0,
    "explanation": "O infarto cerebral (isquêmico) resulta em necrose liquefativa devido ao alto teor de lipídios e enzimas autolíticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q34",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #34).\n\nOs neutrófilos são as primeiras células recrutadas para o sítio da lesão tecidual, sendo o achado histológico marcante da:",
    "options": [
      "Inflamação aguda",
      "Inflamação crônica granulomatosa",
      "Atrofia tecidual",
      "Metaplasia escamosa"
    ],
    "correctIndex": 0,
    "explanation": "A inflamação aguda caracteriza-se por exsudação de fluidos e infiltração maciça de polimorfonucleares (neutrófilos).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q35",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação Crônica",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #35).\n\nO granuloma imune tuberculoso exibe no seu centro um padrão de necrose e é circundado por linfócitos e células epitelióides do tipo:",
    "options": [
      "Necrose caseosa e células gigantes de Langhans",
      "Necrose gordurosa e macrófagos xantomatosos",
      "Necrose fibrinóide e plasmócitos",
      "Abcesso purulento com neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "O granuloma caseoso da tuberculose é formado por macrófagos modificados (células epitelióides), células de Langhans e necrose caseosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q36",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #36).\n\nA substituição reversível de um tipo celular adulto por outro tipo celular adulto mais resistente ao estresse (ex: esôfago de Barrett) denomina-se:",
    "options": [
      "Metaplasia",
      "Displasia",
      "Anaplasia",
      "Hiperplasia"
    ],
    "correctIndex": 0,
    "explanation": "Metaplasia é a alteração adaptativa reversível do fenótipo celular em resposta a agressão crônica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q37",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #37).\n\nAs neoplasias malignas de origem epitelial são denominadas genericamente de:",
    "options": [
      "Carcinomas",
      "Sarcomas",
      "Linfomas",
      "Adenomas"
    ],
    "correctIndex": 0,
    "explanation": "Tumores malignos derivados de tecidos epiteliais chamam-se carcinomas; os de origem mesenquimal chamam-se sarcomas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q38",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Distúrbios Hemodinâmicos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #38).\n\nA Tríade de Virchow predisponente à formação de trombos intravasculares é composta por:",
    "options": [
      "Lesão endotelial, estase/turbulência do fluxo e hipercoagulabilidade",
      "Hipertensão, hipoxia e hiperglicemia",
      "Vasodilatação, exsudação e dor",
      "Febre, leucocitose e taquicardia"
    ],
    "correctIndex": 0,
    "explanation": "A Tríade de Virchow reúne os três fatores patogênicos centrais na trombogênese: lesão endotelial, alteração do fluxo e hipercoagulabilidade.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q39",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #39).\n\nA aterosclerose é uma doença inflamatória crônica das artérias de médio e grande calibre iniciada por:",
    "options": [
      "Disfunção endotelial e acúmulo de lipoproteínas (LDL) na túnica íntima",
      "Infecção fúngica da túnica adventícia",
      "Necrose fibrinóide da túnica média",
      "Aneurisma congênito"
    ],
    "correctIndex": 0,
    "explanation": "A aterogênese começa com agressão endotelial, retenção de LDL oxidado na íntima e recrutamento de monócitos/macrófagos (células espumosas).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q40",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Hepática",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #40).\n\nA cirrose hepática representa o estágio final de diversas agressões crônicas ao fígado, caracterizando-se por:",
    "options": [
      "Fibrose difusa e formação de nódulos de regeneração",
      "Esteatose macrovesicular pura sem fibrose",
      "Necrose hemorrágica maciça sem regeneração",
      "Hiperplasia das vias biliares sem septos"
    ],
    "correctIndex": 0,
    "explanation": "A cirrose reestrutura a arquitetura hepática em nódulos de hepatócitos circundados por septos fibrosos densos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q41",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Lesão Celular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #41).\n\nA morte celular programada ativamente sem ruptura da membrana plasmática e sem reação inflamatória circundante é a:",
    "options": [
      "Apoptose",
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose gordurosa"
    ],
    "correctIndex": 0,
    "explanation": "A apoptose é a morte celular fisiológica ou patológica limpa por condensação de cromatina e corpos apoptóticos sem inflamação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q42",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #42).\n\nO tipo de necrose tecidual observada em infartos isquêmicos do miocárdio e rim caracterizada por preservação do contorno celular é a:",
    "options": [
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose caseosa",
      "Necrose gangrenosa"
    ],
    "correctIndex": 0,
    "explanation": "A necrose de coagulação preserva o arcabouço tecidual por desnaturação das proteínas estruturais e enzimáticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q43",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #43).\n\nA necrose liquefativa em que o tecido é digerido e transformado em massa fluida viscosa é padrão característico do infarto em qual órgão?",
    "options": [
      "Cérebro (Sistema Nervoso Central)",
      "Coração",
      "Fígado",
      "Baço"
    ],
    "correctIndex": 0,
    "explanation": "O infarto cerebral (isquêmico) resulta em necrose liquefativa devido ao alto teor de lipídios e enzimas autolíticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q44",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #44).\n\nOs neutrófilos são as primeiras células recrutadas para o sítio da lesão tecidual, sendo o achado histológico marcante da:",
    "options": [
      "Inflamação aguda",
      "Inflamação crônica granulomatosa",
      "Atrofia tecidual",
      "Metaplasia escamosa"
    ],
    "correctIndex": 0,
    "explanation": "A inflamação aguda caracteriza-se por exsudação de fluidos e infiltração maciça de polimorfonucleares (neutrófilos).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q45",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação Crônica",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #45).\n\nO granuloma imune tuberculoso exibe no seu centro um padrão de necrose e é circundado por linfócitos e células epitelióides do tipo:",
    "options": [
      "Necrose caseosa e células gigantes de Langhans",
      "Necrose gordurosa e macrófagos xantomatosos",
      "Necrose fibrinóide e plasmócitos",
      "Abcesso purulento com neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "O granuloma caseoso da tuberculose é formado por macrófagos modificados (células epitelióides), células de Langhans e necrose caseosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q46",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #46).\n\nA substituição reversível de um tipo celular adulto por outro tipo celular adulto mais resistente ao estresse (ex: esôfago de Barrett) denomina-se:",
    "options": [
      "Metaplasia",
      "Displasia",
      "Anaplasia",
      "Hiperplasia"
    ],
    "correctIndex": 0,
    "explanation": "Metaplasia é a alteração adaptativa reversível do fenótipo celular em resposta a agressão crônica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q47",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #47).\n\nAs neoplasias malignas de origem epitelial são denominadas genericamente de:",
    "options": [
      "Carcinomas",
      "Sarcomas",
      "Linfomas",
      "Adenomas"
    ],
    "correctIndex": 0,
    "explanation": "Tumores malignos derivados de tecidos epiteliais chamam-se carcinomas; os de origem mesenquimal chamam-se sarcomas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q48",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Distúrbios Hemodinâmicos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #48).\n\nA Tríade de Virchow predisponente à formação de trombos intravasculares é composta por:",
    "options": [
      "Lesão endotelial, estase/turbulência do fluxo e hipercoagulabilidade",
      "Hipertensão, hipoxia e hiperglicemia",
      "Vasodilatação, exsudação e dor",
      "Febre, leucocitose e taquicardia"
    ],
    "correctIndex": 0,
    "explanation": "A Tríade de Virchow reúne os três fatores patogênicos centrais na trombogênese: lesão endotelial, alteração do fluxo e hipercoagulabilidade.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q49",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #49).\n\nA aterosclerose é uma doença inflamatória crônica das artérias de médio e grande calibre iniciada por:",
    "options": [
      "Disfunção endotelial e acúmulo de lipoproteínas (LDL) na túnica íntima",
      "Infecção fúngica da túnica adventícia",
      "Necrose fibrinóide da túnica média",
      "Aneurisma congênito"
    ],
    "correctIndex": 0,
    "explanation": "A aterogênese começa com agressão endotelial, retenção de LDL oxidado na íntima e recrutamento de monócitos/macrófagos (células espumosas).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q50",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Hepática",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #50).\n\nA cirrose hepática representa o estágio final de diversas agressões crônicas ao fígado, caracterizando-se por:",
    "options": [
      "Fibrose difusa e formação de nódulos de regeneração",
      "Esteatose macrovesicular pura sem fibrose",
      "Necrose hemorrágica maciça sem regeneração",
      "Hiperplasia das vias biliares sem septos"
    ],
    "correctIndex": 0,
    "explanation": "A cirrose reestrutura a arquitetura hepática em nódulos de hepatócitos circundados por septos fibrosos densos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q51",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Lesão Celular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #51).\n\nA morte celular programada ativamente sem ruptura da membrana plasmática e sem reação inflamatória circundante é a:",
    "options": [
      "Apoptose",
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose gordurosa"
    ],
    "correctIndex": 0,
    "explanation": "A apoptose é a morte celular fisiológica ou patológica limpa por condensação de cromatina e corpos apoptóticos sem inflamação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q52",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #52).\n\nO tipo de necrose tecidual observada em infartos isquêmicos do miocárdio e rim caracterizada por preservação do contorno celular é a:",
    "options": [
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose caseosa",
      "Necrose gangrenosa"
    ],
    "correctIndex": 0,
    "explanation": "A necrose de coagulação preserva o arcabouço tecidual por desnaturação das proteínas estruturais e enzimáticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q53",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #53).\n\nA necrose liquefativa em que o tecido é digerido e transformado em massa fluida viscosa é padrão característico do infarto em qual órgão?",
    "options": [
      "Cérebro (Sistema Nervoso Central)",
      "Coração",
      "Fígado",
      "Baço"
    ],
    "correctIndex": 0,
    "explanation": "O infarto cerebral (isquêmico) resulta em necrose liquefativa devido ao alto teor de lipídios e enzimas autolíticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q54",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #54).\n\nOs neutrófilos são as primeiras células recrutadas para o sítio da lesão tecidual, sendo o achado histológico marcante da:",
    "options": [
      "Inflamação aguda",
      "Inflamação crônica granulomatosa",
      "Atrofia tecidual",
      "Metaplasia escamosa"
    ],
    "correctIndex": 0,
    "explanation": "A inflamação aguda caracteriza-se por exsudação de fluidos e infiltração maciça de polimorfonucleares (neutrófilos).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q55",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação Crônica",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #55).\n\nO granuloma imune tuberculoso exibe no seu centro um padrão de necrose e é circundado por linfócitos e células epitelióides do tipo:",
    "options": [
      "Necrose caseosa e células gigantes de Langhans",
      "Necrose gordurosa e macrófagos xantomatosos",
      "Necrose fibrinóide e plasmócitos",
      "Abcesso purulento com neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "O granuloma caseoso da tuberculose é formado por macrófagos modificados (células epitelióides), células de Langhans e necrose caseosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q56",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #56).\n\nA substituição reversível de um tipo celular adulto por outro tipo celular adulto mais resistente ao estresse (ex: esôfago de Barrett) denomina-se:",
    "options": [
      "Metaplasia",
      "Displasia",
      "Anaplasia",
      "Hiperplasia"
    ],
    "correctIndex": 0,
    "explanation": "Metaplasia é a alteração adaptativa reversível do fenótipo celular em resposta a agressão crônica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q57",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #57).\n\nAs neoplasias malignas de origem epitelial são denominadas genericamente de:",
    "options": [
      "Carcinomas",
      "Sarcomas",
      "Linfomas",
      "Adenomas"
    ],
    "correctIndex": 0,
    "explanation": "Tumores malignos derivados de tecidos epiteliais chamam-se carcinomas; os de origem mesenquimal chamam-se sarcomas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q58",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Distúrbios Hemodinâmicos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #58).\n\nA Tríade de Virchow predisponente à formação de trombos intravasculares é composta por:",
    "options": [
      "Lesão endotelial, estase/turbulência do fluxo e hipercoagulabilidade",
      "Hipertensão, hipoxia e hiperglicemia",
      "Vasodilatação, exsudação e dor",
      "Febre, leucocitose e taquicardia"
    ],
    "correctIndex": 0,
    "explanation": "A Tríade de Virchow reúne os três fatores patogênicos centrais na trombogênese: lesão endotelial, alteração do fluxo e hipercoagulabilidade.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q59",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #59).\n\nA aterosclerose é uma doença inflamatória crônica das artérias de médio e grande calibre iniciada por:",
    "options": [
      "Disfunção endotelial e acúmulo de lipoproteínas (LDL) na túnica íntima",
      "Infecção fúngica da túnica adventícia",
      "Necrose fibrinóide da túnica média",
      "Aneurisma congênito"
    ],
    "correctIndex": 0,
    "explanation": "A aterogênese começa com agressão endotelial, retenção de LDL oxidado na íntima e recrutamento de monócitos/macrófagos (células espumosas).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q60",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Hepática",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #60).\n\nA cirrose hepática representa o estágio final de diversas agressões crônicas ao fígado, caracterizando-se por:",
    "options": [
      "Fibrose difusa e formação de nódulos de regeneração",
      "Esteatose macrovesicular pura sem fibrose",
      "Necrose hemorrágica maciça sem regeneração",
      "Hiperplasia das vias biliares sem septos"
    ],
    "correctIndex": 0,
    "explanation": "A cirrose reestrutura a arquitetura hepática em nódulos de hepatócitos circundados por septos fibrosos densos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q61",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Lesão Celular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #61).\n\nA morte celular programada ativamente sem ruptura da membrana plasmática e sem reação inflamatória circundante é a:",
    "options": [
      "Apoptose",
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose gordurosa"
    ],
    "correctIndex": 0,
    "explanation": "A apoptose é a morte celular fisiológica ou patológica limpa por condensação de cromatina e corpos apoptóticos sem inflamação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q62",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #62).\n\nO tipo de necrose tecidual observada em infartos isquêmicos do miocárdio e rim caracterizada por preservação do contorno celular é a:",
    "options": [
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose caseosa",
      "Necrose gangrenosa"
    ],
    "correctIndex": 0,
    "explanation": "A necrose de coagulação preserva o arcabouço tecidual por desnaturação das proteínas estruturais e enzimáticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q63",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #63).\n\nA necrose liquefativa em que o tecido é digerido e transformado em massa fluida viscosa é padrão característico do infarto em qual órgão?",
    "options": [
      "Cérebro (Sistema Nervoso Central)",
      "Coração",
      "Fígado",
      "Baço"
    ],
    "correctIndex": 0,
    "explanation": "O infarto cerebral (isquêmico) resulta em necrose liquefativa devido ao alto teor de lipídios e enzimas autolíticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q64",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #64).\n\nOs neutrófilos são as primeiras células recrutadas para o sítio da lesão tecidual, sendo o achado histológico marcante da:",
    "options": [
      "Inflamação aguda",
      "Inflamação crônica granulomatosa",
      "Atrofia tecidual",
      "Metaplasia escamosa"
    ],
    "correctIndex": 0,
    "explanation": "A inflamação aguda caracteriza-se por exsudação de fluidos e infiltração maciça de polimorfonucleares (neutrófilos).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q65",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação Crônica",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #65).\n\nO granuloma imune tuberculoso exibe no seu centro um padrão de necrose e é circundado por linfócitos e células epitelióides do tipo:",
    "options": [
      "Necrose caseosa e células gigantes de Langhans",
      "Necrose gordurosa e macrófagos xantomatosos",
      "Necrose fibrinóide e plasmócitos",
      "Abcesso purulento com neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "O granuloma caseoso da tuberculose é formado por macrófagos modificados (células epitelióides), células de Langhans e necrose caseosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q66",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #66).\n\nA substituição reversível de um tipo celular adulto por outro tipo celular adulto mais resistente ao estresse (ex: esôfago de Barrett) denomina-se:",
    "options": [
      "Metaplasia",
      "Displasia",
      "Anaplasia",
      "Hiperplasia"
    ],
    "correctIndex": 0,
    "explanation": "Metaplasia é a alteração adaptativa reversível do fenótipo celular em resposta a agressão crônica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q67",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #67).\n\nAs neoplasias malignas de origem epitelial são denominadas genericamente de:",
    "options": [
      "Carcinomas",
      "Sarcomas",
      "Linfomas",
      "Adenomas"
    ],
    "correctIndex": 0,
    "explanation": "Tumores malignos derivados de tecidos epiteliais chamam-se carcinomas; os de origem mesenquimal chamam-se sarcomas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q68",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Distúrbios Hemodinâmicos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #68).\n\nA Tríade de Virchow predisponente à formação de trombos intravasculares é composta por:",
    "options": [
      "Lesão endotelial, estase/turbulência do fluxo e hipercoagulabilidade",
      "Hipertensão, hipoxia e hiperglicemia",
      "Vasodilatação, exsudação e dor",
      "Febre, leucocitose e taquicardia"
    ],
    "correctIndex": 0,
    "explanation": "A Tríade de Virchow reúne os três fatores patogênicos centrais na trombogênese: lesão endotelial, alteração do fluxo e hipercoagulabilidade.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q69",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #69).\n\nA aterosclerose é uma doença inflamatória crônica das artérias de médio e grande calibre iniciada por:",
    "options": [
      "Disfunção endotelial e acúmulo de lipoproteínas (LDL) na túnica íntima",
      "Infecção fúngica da túnica adventícia",
      "Necrose fibrinóide da túnica média",
      "Aneurisma congênito"
    ],
    "correctIndex": 0,
    "explanation": "A aterogênese começa com agressão endotelial, retenção de LDL oxidado na íntima e recrutamento de monócitos/macrófagos (células espumosas).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q70",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Hepática",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #70).\n\nA cirrose hepática representa o estágio final de diversas agressões crônicas ao fígado, caracterizando-se por:",
    "options": [
      "Fibrose difusa e formação de nódulos de regeneração",
      "Esteatose macrovesicular pura sem fibrose",
      "Necrose hemorrágica maciça sem regeneração",
      "Hiperplasia das vias biliares sem septos"
    ],
    "correctIndex": 0,
    "explanation": "A cirrose reestrutura a arquitetura hepática em nódulos de hepatócitos circundados por septos fibrosos densos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q71",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Lesão Celular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #71).\n\nA morte celular programada ativamente sem ruptura da membrana plasmática e sem reação inflamatória circundante é a:",
    "options": [
      "Apoptose",
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose gordurosa"
    ],
    "correctIndex": 0,
    "explanation": "A apoptose é a morte celular fisiológica ou patológica limpa por condensação de cromatina e corpos apoptóticos sem inflamação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q72",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #72).\n\nO tipo de necrose tecidual observada em infartos isquêmicos do miocárdio e rim caracterizada por preservação do contorno celular é a:",
    "options": [
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose caseosa",
      "Necrose gangrenosa"
    ],
    "correctIndex": 0,
    "explanation": "A necrose de coagulação preserva o arcabouço tecidual por desnaturação das proteínas estruturais e enzimáticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q73",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #73).\n\nA necrose liquefativa em que o tecido é digerido e transformado em massa fluida viscosa é padrão característico do infarto em qual órgão?",
    "options": [
      "Cérebro (Sistema Nervoso Central)",
      "Coração",
      "Fígado",
      "Baço"
    ],
    "correctIndex": 0,
    "explanation": "O infarto cerebral (isquêmico) resulta em necrose liquefativa devido ao alto teor de lipídios e enzimas autolíticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q74",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #74).\n\nOs neutrófilos são as primeiras células recrutadas para o sítio da lesão tecidual, sendo o achado histológico marcante da:",
    "options": [
      "Inflamação aguda",
      "Inflamação crônica granulomatosa",
      "Atrofia tecidual",
      "Metaplasia escamosa"
    ],
    "correctIndex": 0,
    "explanation": "A inflamação aguda caracteriza-se por exsudação de fluidos e infiltração maciça de polimorfonucleares (neutrófilos).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q75",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação Crônica",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #75).\n\nO granuloma imune tuberculoso exibe no seu centro um padrão de necrose e é circundado por linfócitos e células epitelióides do tipo:",
    "options": [
      "Necrose caseosa e células gigantes de Langhans",
      "Necrose gordurosa e macrófagos xantomatosos",
      "Necrose fibrinóide e plasmócitos",
      "Abcesso purulento com neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "O granuloma caseoso da tuberculose é formado por macrófagos modificados (células epitelióides), células de Langhans e necrose caseosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q76",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #76).\n\nA substituição reversível de um tipo celular adulto por outro tipo celular adulto mais resistente ao estresse (ex: esôfago de Barrett) denomina-se:",
    "options": [
      "Metaplasia",
      "Displasia",
      "Anaplasia",
      "Hiperplasia"
    ],
    "correctIndex": 0,
    "explanation": "Metaplasia é a alteração adaptativa reversível do fenótipo celular em resposta a agressão crônica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q77",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #77).\n\nAs neoplasias malignas de origem epitelial são denominadas genericamente de:",
    "options": [
      "Carcinomas",
      "Sarcomas",
      "Linfomas",
      "Adenomas"
    ],
    "correctIndex": 0,
    "explanation": "Tumores malignos derivados de tecidos epiteliais chamam-se carcinomas; os de origem mesenquimal chamam-se sarcomas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q78",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Distúrbios Hemodinâmicos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #78).\n\nA Tríade de Virchow predisponente à formação de trombos intravasculares é composta por:",
    "options": [
      "Lesão endotelial, estase/turbulência do fluxo e hipercoagulabilidade",
      "Hipertensão, hipoxia e hiperglicemia",
      "Vasodilatação, exsudação e dor",
      "Febre, leucocitose e taquicardia"
    ],
    "correctIndex": 0,
    "explanation": "A Tríade de Virchow reúne os três fatores patogênicos centrais na trombogênese: lesão endotelial, alteração do fluxo e hipercoagulabilidade.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q79",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #79).\n\nA aterosclerose é uma doença inflamatória crônica das artérias de médio e grande calibre iniciada por:",
    "options": [
      "Disfunção endotelial e acúmulo de lipoproteínas (LDL) na túnica íntima",
      "Infecção fúngica da túnica adventícia",
      "Necrose fibrinóide da túnica média",
      "Aneurisma congênito"
    ],
    "correctIndex": 0,
    "explanation": "A aterogênese começa com agressão endotelial, retenção de LDL oxidado na íntima e recrutamento de monócitos/macrófagos (células espumosas).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q80",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Hepática",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #80).\n\nA cirrose hepática representa o estágio final de diversas agressões crônicas ao fígado, caracterizando-se por:",
    "options": [
      "Fibrose difusa e formação de nódulos de regeneração",
      "Esteatose macrovesicular pura sem fibrose",
      "Necrose hemorrágica maciça sem regeneração",
      "Hiperplasia das vias biliares sem septos"
    ],
    "correctIndex": 0,
    "explanation": "A cirrose reestrutura a arquitetura hepática em nódulos de hepatócitos circundados por septos fibrosos densos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q81",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Lesão Celular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #81).\n\nA morte celular programada ativamente sem ruptura da membrana plasmática e sem reação inflamatória circundante é a:",
    "options": [
      "Apoptose",
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose gordurosa"
    ],
    "correctIndex": 0,
    "explanation": "A apoptose é a morte celular fisiológica ou patológica limpa por condensação de cromatina e corpos apoptóticos sem inflamação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q82",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #82).\n\nO tipo de necrose tecidual observada em infartos isquêmicos do miocárdio e rim caracterizada por preservação do contorno celular é a:",
    "options": [
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose caseosa",
      "Necrose gangrenosa"
    ],
    "correctIndex": 0,
    "explanation": "A necrose de coagulação preserva o arcabouço tecidual por desnaturação das proteínas estruturais e enzimáticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q83",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #83).\n\nA necrose liquefativa em que o tecido é digerido e transformado em massa fluida viscosa é padrão característico do infarto em qual órgão?",
    "options": [
      "Cérebro (Sistema Nervoso Central)",
      "Coração",
      "Fígado",
      "Baço"
    ],
    "correctIndex": 0,
    "explanation": "O infarto cerebral (isquêmico) resulta em necrose liquefativa devido ao alto teor de lipídios e enzimas autolíticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q84",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #84).\n\nOs neutrófilos são as primeiras células recrutadas para o sítio da lesão tecidual, sendo o achado histológico marcante da:",
    "options": [
      "Inflamação aguda",
      "Inflamação crônica granulomatosa",
      "Atrofia tecidual",
      "Metaplasia escamosa"
    ],
    "correctIndex": 0,
    "explanation": "A inflamação aguda caracteriza-se por exsudação de fluidos e infiltração maciça de polimorfonucleares (neutrófilos).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q85",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação Crônica",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #85).\n\nO granuloma imune tuberculoso exibe no seu centro um padrão de necrose e é circundado por linfócitos e células epitelióides do tipo:",
    "options": [
      "Necrose caseosa e células gigantes de Langhans",
      "Necrose gordurosa e macrófagos xantomatosos",
      "Necrose fibrinóide e plasmócitos",
      "Abcesso purulento com neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "O granuloma caseoso da tuberculose é formado por macrófagos modificados (células epitelióides), células de Langhans e necrose caseosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q86",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #86).\n\nA substituição reversível de um tipo celular adulto por outro tipo celular adulto mais resistente ao estresse (ex: esôfago de Barrett) denomina-se:",
    "options": [
      "Metaplasia",
      "Displasia",
      "Anaplasia",
      "Hiperplasia"
    ],
    "correctIndex": 0,
    "explanation": "Metaplasia é a alteração adaptativa reversível do fenótipo celular em resposta a agressão crônica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q87",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #87).\n\nAs neoplasias malignas de origem epitelial são denominadas genericamente de:",
    "options": [
      "Carcinomas",
      "Sarcomas",
      "Linfomas",
      "Adenomas"
    ],
    "correctIndex": 0,
    "explanation": "Tumores malignos derivados de tecidos epiteliais chamam-se carcinomas; os de origem mesenquimal chamam-se sarcomas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q88",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Distúrbios Hemodinâmicos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #88).\n\nA Tríade de Virchow predisponente à formação de trombos intravasculares é composta por:",
    "options": [
      "Lesão endotelial, estase/turbulência do fluxo e hipercoagulabilidade",
      "Hipertensão, hipoxia e hiperglicemia",
      "Vasodilatação, exsudação e dor",
      "Febre, leucocitose e taquicardia"
    ],
    "correctIndex": 0,
    "explanation": "A Tríade de Virchow reúne os três fatores patogênicos centrais na trombogênese: lesão endotelial, alteração do fluxo e hipercoagulabilidade.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q89",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #89).\n\nA aterosclerose é uma doença inflamatória crônica das artérias de médio e grande calibre iniciada por:",
    "options": [
      "Disfunção endotelial e acúmulo de lipoproteínas (LDL) na túnica íntima",
      "Infecção fúngica da túnica adventícia",
      "Necrose fibrinóide da túnica média",
      "Aneurisma congênito"
    ],
    "correctIndex": 0,
    "explanation": "A aterogênese começa com agressão endotelial, retenção de LDL oxidado na íntima e recrutamento de monócitos/macrófagos (células espumosas).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q90",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Hepática",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #90).\n\nA cirrose hepática representa o estágio final de diversas agressões crônicas ao fígado, caracterizando-se por:",
    "options": [
      "Fibrose difusa e formação de nódulos de regeneração",
      "Esteatose macrovesicular pura sem fibrose",
      "Necrose hemorrágica maciça sem regeneração",
      "Hiperplasia das vias biliares sem septos"
    ],
    "correctIndex": 0,
    "explanation": "A cirrose reestrutura a arquitetura hepática em nódulos de hepatócitos circundados por septos fibrosos densos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q91",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Lesão Celular",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #91).\n\nA morte celular programada ativamente sem ruptura da membrana plasmática e sem reação inflamatória circundante é a:",
    "options": [
      "Apoptose",
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose gordurosa"
    ],
    "correctIndex": 0,
    "explanation": "A apoptose é a morte celular fisiológica ou patológica limpa por condensação de cromatina e corpos apoptóticos sem inflamação.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q92",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #92).\n\nO tipo de necrose tecidual observada em infartos isquêmicos do miocárdio e rim caracterizada por preservação do contorno celular é a:",
    "options": [
      "Necrose de coagulação",
      "Necrose liquefativa",
      "Necrose caseosa",
      "Necrose gangrenosa"
    ],
    "correctIndex": 0,
    "explanation": "A necrose de coagulação preserva o arcabouço tecidual por desnaturação das proteínas estruturais e enzimáticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q93",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Morte Celular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #93).\n\nA necrose liquefativa em que o tecido é digerido e transformado em massa fluida viscosa é padrão característico do infarto em qual órgão?",
    "options": [
      "Cérebro (Sistema Nervoso Central)",
      "Coração",
      "Fígado",
      "Baço"
    ],
    "correctIndex": 0,
    "explanation": "O infarto cerebral (isquêmico) resulta em necrose liquefativa devido ao alto teor de lipídios e enzimas autolíticas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q94",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #94).\n\nOs neutrófilos são as primeiras células recrutadas para o sítio da lesão tecidual, sendo o achado histológico marcante da:",
    "options": [
      "Inflamação aguda",
      "Inflamação crônica granulomatosa",
      "Atrofia tecidual",
      "Metaplasia escamosa"
    ],
    "correctIndex": 0,
    "explanation": "A inflamação aguda caracteriza-se por exsudação de fluidos e infiltração maciça de polimorfonucleares (neutrófilos).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q95",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Inflamação Crônica",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #95).\n\nO granuloma imune tuberculoso exibe no seu centro um padrão de necrose e é circundado por linfócitos e células epitelióides do tipo:",
    "options": [
      "Necrose caseosa e células gigantes de Langhans",
      "Necrose gordurosa e macrófagos xantomatosos",
      "Necrose fibrinóide e plasmócitos",
      "Abcesso purulento com neutrófilos"
    ],
    "correctIndex": 0,
    "explanation": "O granuloma caseoso da tuberculose é formado por macrófagos modificados (células epitelióides), células de Langhans e necrose caseosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q96",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #96).\n\nA substituição reversível de um tipo celular adulto por outro tipo celular adulto mais resistente ao estresse (ex: esôfago de Barrett) denomina-se:",
    "options": [
      "Metaplasia",
      "Displasia",
      "Anaplasia",
      "Hiperplasia"
    ],
    "correctIndex": 0,
    "explanation": "Metaplasia é a alteração adaptativa reversível do fenótipo celular em resposta a agressão crônica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q97",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Neoplasias",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #97).\n\nAs neoplasias malignas de origem epitelial são denominadas genericamente de:",
    "options": [
      "Carcinomas",
      "Sarcomas",
      "Linfomas",
      "Adenomas"
    ],
    "correctIndex": 0,
    "explanation": "Tumores malignos derivados de tecidos epiteliais chamam-se carcinomas; os de origem mesenquimal chamam-se sarcomas.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q98",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Distúrbios Hemodinâmicos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #98).\n\nA Tríade de Virchow predisponente à formação de trombos intravasculares é composta por:",
    "options": [
      "Lesão endotelial, estase/turbulência do fluxo e hipercoagulabilidade",
      "Hipertensão, hipoxia e hiperglicemia",
      "Vasodilatação, exsudação e dor",
      "Febre, leucocitose e taquicardia"
    ],
    "correctIndex": 0,
    "explanation": "A Tríade de Virchow reúne os três fatores patogênicos centrais na trombogênese: lesão endotelial, alteração do fluxo e hipercoagulabilidade.",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q99",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Cardiovascular",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #99).\n\nA aterosclerose é uma doença inflamatória crônica das artérias de médio e grande calibre iniciada por:",
    "options": [
      "Disfunção endotelial e acúmulo de lipoproteínas (LDL) na túnica íntima",
      "Infecção fúngica da túnica adventícia",
      "Necrose fibrinóide da túnica média",
      "Aneurisma congênito"
    ],
    "correctIndex": 0,
    "explanation": "A aterogênese começa com agressão endotelial, retenção de LDL oxidado na íntima e recrutamento de monócitos/macrófagos (células espumosas).",
    "difficulty": "medium"
  },
  {
    "id": "basico_patologia_q100",
    "cycle": "Ciclo Básico",
    "subject": "Patologia",
    "subSubject": "Patologia Hepática",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #100).\n\nA cirrose hepática representa o estágio final de diversas agressões crônicas ao fígado, caracterizando-se por:",
    "options": [
      "Fibrose difusa e formação de nódulos de regeneração",
      "Esteatose macrovesicular pura sem fibrose",
      "Necrose hemorrágica maciça sem regeneração",
      "Hiperplasia das vias biliares sem septos"
    ],
    "correctIndex": 0,
    "explanation": "A cirrose reestrutura a arquitetura hepática em nódulos de hepatócitos circundados por septos fibrosos densos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q1",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #1).\n\nQual protozoário flagelado habita o duodeno e jejuno humano causando diarreia com esteatorreia e síndrome de má-absorção?",
    "options": [
      "Giardia duodenalis (lamblia)",
      "Entamoeba histolytica",
      "Balantidium coli",
      "Cryptosporidium parvum"
    ],
    "correctIndex": 0,
    "explanation": "Giardia fixa-se à mucosa do delgado por seu disco ventral, atapetando a mucosa e provocando má absorção de gorduras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q2",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #2).\n\nA amebíase intestinal grave por Entamoeba histolytica pode causar úlceras no cólon com formato característico de:",
    "options": [
      "Úlceras em 'botão de colarinho' ou 'frasco de vidro'",
      "Lesões em 'moeda'",
      "Eritema nodoso em placa",
      "Granulomas em roda de leme"
    ],
    "correctIndex": 0,
    "explanation": "E. histolytica invade a submucosa do cólon formando úlceras de base larga e colo estreito (botão de colarinho).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q3",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #3).\n\nO agente etiológico da Doença de Chagas transmitido pelas fezes do inseto triatomíneo é o protozoário:",
    "options": [
      "Trypanosoma cruzi",
      "Leishmania chagasi",
      "Plasmodium vivax",
      "Toxoplasma gondii"
    ],
    "correctIndex": 0,
    "explanation": "T. cruzi é transmitido quando o barbeiro defeca durante o repasto sanguíneo e os tripomastigotas penetram pela picada/mucosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q4",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #4).\n\nA malária terçã benigna caracterizada por febre a cada 48 horas e presença de hipnozoítos latentes no fígado é causada por:",
    "options": [
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium malariae",
      "Plasmodium ovale"
    ],
    "correctIndex": 0,
    "explanation": "P. vivax forma hipnozoítos dormentes no hepatócito que causam recaídas tardias da malária terçã.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q5",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #5).\n\nA Leishmaniose Visceral (Calazar) ataca o sistema fagocítico mononuclear causando hepatoesplenomegalia e anemia por infecção por:",
    "options": [
      "Leishmania infantum (chagasi)",
      "Leishmania braziliensis",
      "Trypanosoma brucei",
      "Babesia microti"
    ],
    "correctIndex": 0,
    "explanation": "L. infantum afeta fígado, baço e medula óssea, transmitida pelo mosquitos-palha (Lutzomyia longipalpis).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q6",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #6).\n\nO geohelminto Ascaris lumbricoides realiza ciclo pulmonar (Ciclo de Loss), podendo causar síndrome eosinofílica respiratória chamada:",
    "options": [
      "Síndrome de Loeffler",
      "Síndrome de Katayama",
      "Síndrome de Larva Migrans Cutânea",
      "Doença de Romaña"
    ],
    "correctIndex": 0,
    "explanation": "A migração de larvas de Ascaris pelos alvéolos pulmonares desencadeia tosse, broncoespasmo e eosinofilia (Síndrome de Loeffler).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q7",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #7).\n\nA ancilostomíase (Ancylostoma duodenale e Necator americanus) causa anemia ferropriva crônica devido a:",
    "options": [
      "Fixação de vermes adultos à mucosa do delgado com hematofagia ativa",
      "Mapeamento e necrose da medula óssea",
      "Hemólise intravascular autoimune",
      "Destruição direta de eritrócitos na circulação"
    ],
    "correctIndex": 0,
    "explanation": "Os ancilostomídeos possuem dentes/placas cortantes e sugam sangue da mucosa intestinal, gerando anemia microcítica e hipocrômica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q8",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #8).\n\nO diagnóstico parasitológico da enterobíase (Enterobius vermicularis) com prurido anal noturno é feito preferencialmente por:",
    "options": [
      "Método da fita gomada (Método de Graham)",
      "Exame de fezes por sedimentação espontânea (Lutz)",
      "Hemocultura para microfilárias",
      "Reação de PCR no soro"
    ],
    "correctIndex": 0,
    "explanation": "A fêmea de Enterobius migra à região perianal à noite para ovipor; a fita gomada recupera os ovos característicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q9",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Cestódeos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #9).\n\nA ingestão acidental de ovos de Taenia solium em alimentos contaminados pode levar ao desenvolvimento humano de:",
    "options": [
      "Neurocisticercose",
      "Teníase adulta intestinal pura",
      "Ancilostomíase",
      "Hidatidose hepática"
    ],
    "correctIndex": 0,
    "explanation": "Ingerir o cisto (cisticerco na carne de porco) dá teníase. Ingerir os OVOS diretamente dá cisticercose tecidual/cerebral.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q10",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Trematódeos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #10).\n\nA febre de Katayama e a hipertensão portal com fibrose periportal de Symmers são complicações da infecção por:",
    "options": [
      "Schistosoma mansoni",
      "Fasciola hepatica",
      "Paragonimus westermani",
      "Echinococcus granulosus"
    ],
    "correctIndex": 0,
    "explanation": "O Schistosoma mansoni vive no sistema porta e seus ovos nos sinusóides hepáticos provocam granulomas e fibrose periportal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q11",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #11).\n\nQual protozoário flagelado habita o duodeno e jejuno humano causando diarreia com esteatorreia e síndrome de má-absorção?",
    "options": [
      "Giardia duodenalis (lamblia)",
      "Entamoeba histolytica",
      "Balantidium coli",
      "Cryptosporidium parvum"
    ],
    "correctIndex": 0,
    "explanation": "Giardia fixa-se à mucosa do delgado por seu disco ventral, atapetando a mucosa e provocando má absorção de gorduras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q12",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #12).\n\nA amebíase intestinal grave por Entamoeba histolytica pode causar úlceras no cólon com formato característico de:",
    "options": [
      "Úlceras em 'botão de colarinho' ou 'frasco de vidro'",
      "Lesões em 'moeda'",
      "Eritema nodoso em placa",
      "Granulomas em roda de leme"
    ],
    "correctIndex": 0,
    "explanation": "E. histolytica invade a submucosa do cólon formando úlceras de base larga e colo estreito (botão de colarinho).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q13",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #13).\n\nO agente etiológico da Doença de Chagas transmitido pelas fezes do inseto triatomíneo é o protozoário:",
    "options": [
      "Trypanosoma cruzi",
      "Leishmania chagasi",
      "Plasmodium vivax",
      "Toxoplasma gondii"
    ],
    "correctIndex": 0,
    "explanation": "T. cruzi é transmitido quando o barbeiro defeca durante o repasto sanguíneo e os tripomastigotas penetram pela picada/mucosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q14",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #14).\n\nA malária terçã benigna caracterizada por febre a cada 48 horas e presença de hipnozoítos latentes no fígado é causada por:",
    "options": [
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium malariae",
      "Plasmodium ovale"
    ],
    "correctIndex": 0,
    "explanation": "P. vivax forma hipnozoítos dormentes no hepatócito que causam recaídas tardias da malária terçã.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q15",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #15).\n\nA Leishmaniose Visceral (Calazar) ataca o sistema fagocítico mononuclear causando hepatoesplenomegalia e anemia por infecção por:",
    "options": [
      "Leishmania infantum (chagasi)",
      "Leishmania braziliensis",
      "Trypanosoma brucei",
      "Babesia microti"
    ],
    "correctIndex": 0,
    "explanation": "L. infantum afeta fígado, baço e medula óssea, transmitida pelo mosquitos-palha (Lutzomyia longipalpis).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q16",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #16).\n\nO geohelminto Ascaris lumbricoides realiza ciclo pulmonar (Ciclo de Loss), podendo causar síndrome eosinofílica respiratória chamada:",
    "options": [
      "Síndrome de Loeffler",
      "Síndrome de Katayama",
      "Síndrome de Larva Migrans Cutânea",
      "Doença de Romaña"
    ],
    "correctIndex": 0,
    "explanation": "A migração de larvas de Ascaris pelos alvéolos pulmonares desencadeia tosse, broncoespasmo e eosinofilia (Síndrome de Loeffler).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q17",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #17).\n\nA ancilostomíase (Ancylostoma duodenale e Necator americanus) causa anemia ferropriva crônica devido a:",
    "options": [
      "Fixação de vermes adultos à mucosa do delgado com hematofagia ativa",
      "Mapeamento e necrose da medula óssea",
      "Hemólise intravascular autoimune",
      "Destruição direta de eritrócitos na circulação"
    ],
    "correctIndex": 0,
    "explanation": "Os ancilostomídeos possuem dentes/placas cortantes e sugam sangue da mucosa intestinal, gerando anemia microcítica e hipocrômica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q18",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #18).\n\nO diagnóstico parasitológico da enterobíase (Enterobius vermicularis) com prurido anal noturno é feito preferencialmente por:",
    "options": [
      "Método da fita gomada (Método de Graham)",
      "Exame de fezes por sedimentação espontânea (Lutz)",
      "Hemocultura para microfilárias",
      "Reação de PCR no soro"
    ],
    "correctIndex": 0,
    "explanation": "A fêmea de Enterobius migra à região perianal à noite para ovipor; a fita gomada recupera os ovos característicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q19",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Cestódeos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #19).\n\nA ingestão acidental de ovos de Taenia solium em alimentos contaminados pode levar ao desenvolvimento humano de:",
    "options": [
      "Neurocisticercose",
      "Teníase adulta intestinal pura",
      "Ancilostomíase",
      "Hidatidose hepática"
    ],
    "correctIndex": 0,
    "explanation": "Ingerir o cisto (cisticerco na carne de porco) dá teníase. Ingerir os OVOS diretamente dá cisticercose tecidual/cerebral.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q20",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Trematódeos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #20).\n\nA febre de Katayama e a hipertensão portal com fibrose periportal de Symmers são complicações da infecção por:",
    "options": [
      "Schistosoma mansoni",
      "Fasciola hepatica",
      "Paragonimus westermani",
      "Echinococcus granulosus"
    ],
    "correctIndex": 0,
    "explanation": "O Schistosoma mansoni vive no sistema porta e seus ovos nos sinusóides hepáticos provocam granulomas e fibrose periportal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q21",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #21).\n\nQual protozoário flagelado habita o duodeno e jejuno humano causando diarreia com esteatorreia e síndrome de má-absorção?",
    "options": [
      "Giardia duodenalis (lamblia)",
      "Entamoeba histolytica",
      "Balantidium coli",
      "Cryptosporidium parvum"
    ],
    "correctIndex": 0,
    "explanation": "Giardia fixa-se à mucosa do delgado por seu disco ventral, atapetando a mucosa e provocando má absorção de gorduras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q22",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #22).\n\nA amebíase intestinal grave por Entamoeba histolytica pode causar úlceras no cólon com formato característico de:",
    "options": [
      "Úlceras em 'botão de colarinho' ou 'frasco de vidro'",
      "Lesões em 'moeda'",
      "Eritema nodoso em placa",
      "Granulomas em roda de leme"
    ],
    "correctIndex": 0,
    "explanation": "E. histolytica invade a submucosa do cólon formando úlceras de base larga e colo estreito (botão de colarinho).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q23",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #23).\n\nO agente etiológico da Doença de Chagas transmitido pelas fezes do inseto triatomíneo é o protozoário:",
    "options": [
      "Trypanosoma cruzi",
      "Leishmania chagasi",
      "Plasmodium vivax",
      "Toxoplasma gondii"
    ],
    "correctIndex": 0,
    "explanation": "T. cruzi é transmitido quando o barbeiro defeca durante o repasto sanguíneo e os tripomastigotas penetram pela picada/mucosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q24",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #24).\n\nA malária terçã benigna caracterizada por febre a cada 48 horas e presença de hipnozoítos latentes no fígado é causada por:",
    "options": [
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium malariae",
      "Plasmodium ovale"
    ],
    "correctIndex": 0,
    "explanation": "P. vivax forma hipnozoítos dormentes no hepatócito que causam recaídas tardias da malária terçã.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q25",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #25).\n\nA Leishmaniose Visceral (Calazar) ataca o sistema fagocítico mononuclear causando hepatoesplenomegalia e anemia por infecção por:",
    "options": [
      "Leishmania infantum (chagasi)",
      "Leishmania braziliensis",
      "Trypanosoma brucei",
      "Babesia microti"
    ],
    "correctIndex": 0,
    "explanation": "L. infantum afeta fígado, baço e medula óssea, transmitida pelo mosquitos-palha (Lutzomyia longipalpis).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q26",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #26).\n\nO geohelminto Ascaris lumbricoides realiza ciclo pulmonar (Ciclo de Loss), podendo causar síndrome eosinofílica respiratória chamada:",
    "options": [
      "Síndrome de Loeffler",
      "Síndrome de Katayama",
      "Síndrome de Larva Migrans Cutânea",
      "Doença de Romaña"
    ],
    "correctIndex": 0,
    "explanation": "A migração de larvas de Ascaris pelos alvéolos pulmonares desencadeia tosse, broncoespasmo e eosinofilia (Síndrome de Loeffler).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q27",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #27).\n\nA ancilostomíase (Ancylostoma duodenale e Necator americanus) causa anemia ferropriva crônica devido a:",
    "options": [
      "Fixação de vermes adultos à mucosa do delgado com hematofagia ativa",
      "Mapeamento e necrose da medula óssea",
      "Hemólise intravascular autoimune",
      "Destruição direta de eritrócitos na circulação"
    ],
    "correctIndex": 0,
    "explanation": "Os ancilostomídeos possuem dentes/placas cortantes e sugam sangue da mucosa intestinal, gerando anemia microcítica e hipocrômica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q28",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #28).\n\nO diagnóstico parasitológico da enterobíase (Enterobius vermicularis) com prurido anal noturno é feito preferencialmente por:",
    "options": [
      "Método da fita gomada (Método de Graham)",
      "Exame de fezes por sedimentação espontânea (Lutz)",
      "Hemocultura para microfilárias",
      "Reação de PCR no soro"
    ],
    "correctIndex": 0,
    "explanation": "A fêmea de Enterobius migra à região perianal à noite para ovipor; a fita gomada recupera os ovos característicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q29",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Cestódeos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #29).\n\nA ingestão acidental de ovos de Taenia solium em alimentos contaminados pode levar ao desenvolvimento humano de:",
    "options": [
      "Neurocisticercose",
      "Teníase adulta intestinal pura",
      "Ancilostomíase",
      "Hidatidose hepática"
    ],
    "correctIndex": 0,
    "explanation": "Ingerir o cisto (cisticerco na carne de porco) dá teníase. Ingerir os OVOS diretamente dá cisticercose tecidual/cerebral.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q30",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Trematódeos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #30).\n\nA febre de Katayama e a hipertensão portal com fibrose periportal de Symmers são complicações da infecção por:",
    "options": [
      "Schistosoma mansoni",
      "Fasciola hepatica",
      "Paragonimus westermani",
      "Echinococcus granulosus"
    ],
    "correctIndex": 0,
    "explanation": "O Schistosoma mansoni vive no sistema porta e seus ovos nos sinusóides hepáticos provocam granulomas e fibrose periportal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q31",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #31).\n\nQual protozoário flagelado habita o duodeno e jejuno humano causando diarreia com esteatorreia e síndrome de má-absorção?",
    "options": [
      "Giardia duodenalis (lamblia)",
      "Entamoeba histolytica",
      "Balantidium coli",
      "Cryptosporidium parvum"
    ],
    "correctIndex": 0,
    "explanation": "Giardia fixa-se à mucosa do delgado por seu disco ventral, atapetando a mucosa e provocando má absorção de gorduras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q32",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #32).\n\nA amebíase intestinal grave por Entamoeba histolytica pode causar úlceras no cólon com formato característico de:",
    "options": [
      "Úlceras em 'botão de colarinho' ou 'frasco de vidro'",
      "Lesões em 'moeda'",
      "Eritema nodoso em placa",
      "Granulomas em roda de leme"
    ],
    "correctIndex": 0,
    "explanation": "E. histolytica invade a submucosa do cólon formando úlceras de base larga e colo estreito (botão de colarinho).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q33",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #33).\n\nO agente etiológico da Doença de Chagas transmitido pelas fezes do inseto triatomíneo é o protozoário:",
    "options": [
      "Trypanosoma cruzi",
      "Leishmania chagasi",
      "Plasmodium vivax",
      "Toxoplasma gondii"
    ],
    "correctIndex": 0,
    "explanation": "T. cruzi é transmitido quando o barbeiro defeca durante o repasto sanguíneo e os tripomastigotas penetram pela picada/mucosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q34",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #34).\n\nA malária terçã benigna caracterizada por febre a cada 48 horas e presença de hipnozoítos latentes no fígado é causada por:",
    "options": [
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium malariae",
      "Plasmodium ovale"
    ],
    "correctIndex": 0,
    "explanation": "P. vivax forma hipnozoítos dormentes no hepatócito que causam recaídas tardias da malária terçã.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q35",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #35).\n\nA Leishmaniose Visceral (Calazar) ataca o sistema fagocítico mononuclear causando hepatoesplenomegalia e anemia por infecção por:",
    "options": [
      "Leishmania infantum (chagasi)",
      "Leishmania braziliensis",
      "Trypanosoma brucei",
      "Babesia microti"
    ],
    "correctIndex": 0,
    "explanation": "L. infantum afeta fígado, baço e medula óssea, transmitida pelo mosquitos-palha (Lutzomyia longipalpis).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q36",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #36).\n\nO geohelminto Ascaris lumbricoides realiza ciclo pulmonar (Ciclo de Loss), podendo causar síndrome eosinofílica respiratória chamada:",
    "options": [
      "Síndrome de Loeffler",
      "Síndrome de Katayama",
      "Síndrome de Larva Migrans Cutânea",
      "Doença de Romaña"
    ],
    "correctIndex": 0,
    "explanation": "A migração de larvas de Ascaris pelos alvéolos pulmonares desencadeia tosse, broncoespasmo e eosinofilia (Síndrome de Loeffler).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q37",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #37).\n\nA ancilostomíase (Ancylostoma duodenale e Necator americanus) causa anemia ferropriva crônica devido a:",
    "options": [
      "Fixação de vermes adultos à mucosa do delgado com hematofagia ativa",
      "Mapeamento e necrose da medula óssea",
      "Hemólise intravascular autoimune",
      "Destruição direta de eritrócitos na circulação"
    ],
    "correctIndex": 0,
    "explanation": "Os ancilostomídeos possuem dentes/placas cortantes e sugam sangue da mucosa intestinal, gerando anemia microcítica e hipocrômica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q38",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #38).\n\nO diagnóstico parasitológico da enterobíase (Enterobius vermicularis) com prurido anal noturno é feito preferencialmente por:",
    "options": [
      "Método da fita gomada (Método de Graham)",
      "Exame de fezes por sedimentação espontânea (Lutz)",
      "Hemocultura para microfilárias",
      "Reação de PCR no soro"
    ],
    "correctIndex": 0,
    "explanation": "A fêmea de Enterobius migra à região perianal à noite para ovipor; a fita gomada recupera os ovos característicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q39",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Cestódeos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #39).\n\nA ingestão acidental de ovos de Taenia solium em alimentos contaminados pode levar ao desenvolvimento humano de:",
    "options": [
      "Neurocisticercose",
      "Teníase adulta intestinal pura",
      "Ancilostomíase",
      "Hidatidose hepática"
    ],
    "correctIndex": 0,
    "explanation": "Ingerir o cisto (cisticerco na carne de porco) dá teníase. Ingerir os OVOS diretamente dá cisticercose tecidual/cerebral.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q40",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Trematódeos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #40).\n\nA febre de Katayama e a hipertensão portal com fibrose periportal de Symmers são complicações da infecção por:",
    "options": [
      "Schistosoma mansoni",
      "Fasciola hepatica",
      "Paragonimus westermani",
      "Echinococcus granulosus"
    ],
    "correctIndex": 0,
    "explanation": "O Schistosoma mansoni vive no sistema porta e seus ovos nos sinusóides hepáticos provocam granulomas e fibrose periportal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q41",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #41).\n\nQual protozoário flagelado habita o duodeno e jejuno humano causando diarreia com esteatorreia e síndrome de má-absorção?",
    "options": [
      "Giardia duodenalis (lamblia)",
      "Entamoeba histolytica",
      "Balantidium coli",
      "Cryptosporidium parvum"
    ],
    "correctIndex": 0,
    "explanation": "Giardia fixa-se à mucosa do delgado por seu disco ventral, atapetando a mucosa e provocando má absorção de gorduras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q42",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #42).\n\nA amebíase intestinal grave por Entamoeba histolytica pode causar úlceras no cólon com formato característico de:",
    "options": [
      "Úlceras em 'botão de colarinho' ou 'frasco de vidro'",
      "Lesões em 'moeda'",
      "Eritema nodoso em placa",
      "Granulomas em roda de leme"
    ],
    "correctIndex": 0,
    "explanation": "E. histolytica invade a submucosa do cólon formando úlceras de base larga e colo estreito (botão de colarinho).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q43",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #43).\n\nO agente etiológico da Doença de Chagas transmitido pelas fezes do inseto triatomíneo é o protozoário:",
    "options": [
      "Trypanosoma cruzi",
      "Leishmania chagasi",
      "Plasmodium vivax",
      "Toxoplasma gondii"
    ],
    "correctIndex": 0,
    "explanation": "T. cruzi é transmitido quando o barbeiro defeca durante o repasto sanguíneo e os tripomastigotas penetram pela picada/mucosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q44",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #44).\n\nA malária terçã benigna caracterizada por febre a cada 48 horas e presença de hipnozoítos latentes no fígado é causada por:",
    "options": [
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium malariae",
      "Plasmodium ovale"
    ],
    "correctIndex": 0,
    "explanation": "P. vivax forma hipnozoítos dormentes no hepatócito que causam recaídas tardias da malária terçã.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q45",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #45).\n\nA Leishmaniose Visceral (Calazar) ataca o sistema fagocítico mononuclear causando hepatoesplenomegalia e anemia por infecção por:",
    "options": [
      "Leishmania infantum (chagasi)",
      "Leishmania braziliensis",
      "Trypanosoma brucei",
      "Babesia microti"
    ],
    "correctIndex": 0,
    "explanation": "L. infantum afeta fígado, baço e medula óssea, transmitida pelo mosquitos-palha (Lutzomyia longipalpis).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q46",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #46).\n\nO geohelminto Ascaris lumbricoides realiza ciclo pulmonar (Ciclo de Loss), podendo causar síndrome eosinofílica respiratória chamada:",
    "options": [
      "Síndrome de Loeffler",
      "Síndrome de Katayama",
      "Síndrome de Larva Migrans Cutânea",
      "Doença de Romaña"
    ],
    "correctIndex": 0,
    "explanation": "A migração de larvas de Ascaris pelos alvéolos pulmonares desencadeia tosse, broncoespasmo e eosinofilia (Síndrome de Loeffler).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q47",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #47).\n\nA ancilostomíase (Ancylostoma duodenale e Necator americanus) causa anemia ferropriva crônica devido a:",
    "options": [
      "Fixação de vermes adultos à mucosa do delgado com hematofagia ativa",
      "Mapeamento e necrose da medula óssea",
      "Hemólise intravascular autoimune",
      "Destruição direta de eritrócitos na circulação"
    ],
    "correctIndex": 0,
    "explanation": "Os ancilostomídeos possuem dentes/placas cortantes e sugam sangue da mucosa intestinal, gerando anemia microcítica e hipocrômica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q48",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #48).\n\nO diagnóstico parasitológico da enterobíase (Enterobius vermicularis) com prurido anal noturno é feito preferencialmente por:",
    "options": [
      "Método da fita gomada (Método de Graham)",
      "Exame de fezes por sedimentação espontânea (Lutz)",
      "Hemocultura para microfilárias",
      "Reação de PCR no soro"
    ],
    "correctIndex": 0,
    "explanation": "A fêmea de Enterobius migra à região perianal à noite para ovipor; a fita gomada recupera os ovos característicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q49",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Cestódeos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #49).\n\nA ingestão acidental de ovos de Taenia solium em alimentos contaminados pode levar ao desenvolvimento humano de:",
    "options": [
      "Neurocisticercose",
      "Teníase adulta intestinal pura",
      "Ancilostomíase",
      "Hidatidose hepática"
    ],
    "correctIndex": 0,
    "explanation": "Ingerir o cisto (cisticerco na carne de porco) dá teníase. Ingerir os OVOS diretamente dá cisticercose tecidual/cerebral.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q50",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Trematódeos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #50).\n\nA febre de Katayama e a hipertensão portal com fibrose periportal de Symmers são complicações da infecção por:",
    "options": [
      "Schistosoma mansoni",
      "Fasciola hepatica",
      "Paragonimus westermani",
      "Echinococcus granulosus"
    ],
    "correctIndex": 0,
    "explanation": "O Schistosoma mansoni vive no sistema porta e seus ovos nos sinusóides hepáticos provocam granulomas e fibrose periportal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q51",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #51).\n\nQual protozoário flagelado habita o duodeno e jejuno humano causando diarreia com esteatorreia e síndrome de má-absorção?",
    "options": [
      "Giardia duodenalis (lamblia)",
      "Entamoeba histolytica",
      "Balantidium coli",
      "Cryptosporidium parvum"
    ],
    "correctIndex": 0,
    "explanation": "Giardia fixa-se à mucosa do delgado por seu disco ventral, atapetando a mucosa e provocando má absorção de gorduras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q52",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #52).\n\nA amebíase intestinal grave por Entamoeba histolytica pode causar úlceras no cólon com formato característico de:",
    "options": [
      "Úlceras em 'botão de colarinho' ou 'frasco de vidro'",
      "Lesões em 'moeda'",
      "Eritema nodoso em placa",
      "Granulomas em roda de leme"
    ],
    "correctIndex": 0,
    "explanation": "E. histolytica invade a submucosa do cólon formando úlceras de base larga e colo estreito (botão de colarinho).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q53",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #53).\n\nO agente etiológico da Doença de Chagas transmitido pelas fezes do inseto triatomíneo é o protozoário:",
    "options": [
      "Trypanosoma cruzi",
      "Leishmania chagasi",
      "Plasmodium vivax",
      "Toxoplasma gondii"
    ],
    "correctIndex": 0,
    "explanation": "T. cruzi é transmitido quando o barbeiro defeca durante o repasto sanguíneo e os tripomastigotas penetram pela picada/mucosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q54",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #54).\n\nA malária terçã benigna caracterizada por febre a cada 48 horas e presença de hipnozoítos latentes no fígado é causada por:",
    "options": [
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium malariae",
      "Plasmodium ovale"
    ],
    "correctIndex": 0,
    "explanation": "P. vivax forma hipnozoítos dormentes no hepatócito que causam recaídas tardias da malária terçã.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q55",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #55).\n\nA Leishmaniose Visceral (Calazar) ataca o sistema fagocítico mononuclear causando hepatoesplenomegalia e anemia por infecção por:",
    "options": [
      "Leishmania infantum (chagasi)",
      "Leishmania braziliensis",
      "Trypanosoma brucei",
      "Babesia microti"
    ],
    "correctIndex": 0,
    "explanation": "L. infantum afeta fígado, baço e medula óssea, transmitida pelo mosquitos-palha (Lutzomyia longipalpis).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q56",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #56).\n\nO geohelminto Ascaris lumbricoides realiza ciclo pulmonar (Ciclo de Loss), podendo causar síndrome eosinofílica respiratória chamada:",
    "options": [
      "Síndrome de Loeffler",
      "Síndrome de Katayama",
      "Síndrome de Larva Migrans Cutânea",
      "Doença de Romaña"
    ],
    "correctIndex": 0,
    "explanation": "A migração de larvas de Ascaris pelos alvéolos pulmonares desencadeia tosse, broncoespasmo e eosinofilia (Síndrome de Loeffler).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q57",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #57).\n\nA ancilostomíase (Ancylostoma duodenale e Necator americanus) causa anemia ferropriva crônica devido a:",
    "options": [
      "Fixação de vermes adultos à mucosa do delgado com hematofagia ativa",
      "Mapeamento e necrose da medula óssea",
      "Hemólise intravascular autoimune",
      "Destruição direta de eritrócitos na circulação"
    ],
    "correctIndex": 0,
    "explanation": "Os ancilostomídeos possuem dentes/placas cortantes e sugam sangue da mucosa intestinal, gerando anemia microcítica e hipocrômica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q58",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #58).\n\nO diagnóstico parasitológico da enterobíase (Enterobius vermicularis) com prurido anal noturno é feito preferencialmente por:",
    "options": [
      "Método da fita gomada (Método de Graham)",
      "Exame de fezes por sedimentação espontânea (Lutz)",
      "Hemocultura para microfilárias",
      "Reação de PCR no soro"
    ],
    "correctIndex": 0,
    "explanation": "A fêmea de Enterobius migra à região perianal à noite para ovipor; a fita gomada recupera os ovos característicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q59",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Cestódeos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #59).\n\nA ingestão acidental de ovos de Taenia solium em alimentos contaminados pode levar ao desenvolvimento humano de:",
    "options": [
      "Neurocisticercose",
      "Teníase adulta intestinal pura",
      "Ancilostomíase",
      "Hidatidose hepática"
    ],
    "correctIndex": 0,
    "explanation": "Ingerir o cisto (cisticerco na carne de porco) dá teníase. Ingerir os OVOS diretamente dá cisticercose tecidual/cerebral.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q60",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Trematódeos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #60).\n\nA febre de Katayama e a hipertensão portal com fibrose periportal de Symmers são complicações da infecção por:",
    "options": [
      "Schistosoma mansoni",
      "Fasciola hepatica",
      "Paragonimus westermani",
      "Echinococcus granulosus"
    ],
    "correctIndex": 0,
    "explanation": "O Schistosoma mansoni vive no sistema porta e seus ovos nos sinusóides hepáticos provocam granulomas e fibrose periportal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q61",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #61).\n\nQual protozoário flagelado habita o duodeno e jejuno humano causando diarreia com esteatorreia e síndrome de má-absorção?",
    "options": [
      "Giardia duodenalis (lamblia)",
      "Entamoeba histolytica",
      "Balantidium coli",
      "Cryptosporidium parvum"
    ],
    "correctIndex": 0,
    "explanation": "Giardia fixa-se à mucosa do delgado por seu disco ventral, atapetando a mucosa e provocando má absorção de gorduras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q62",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #62).\n\nA amebíase intestinal grave por Entamoeba histolytica pode causar úlceras no cólon com formato característico de:",
    "options": [
      "Úlceras em 'botão de colarinho' ou 'frasco de vidro'",
      "Lesões em 'moeda'",
      "Eritema nodoso em placa",
      "Granulomas em roda de leme"
    ],
    "correctIndex": 0,
    "explanation": "E. histolytica invade a submucosa do cólon formando úlceras de base larga e colo estreito (botão de colarinho).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q63",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #63).\n\nO agente etiológico da Doença de Chagas transmitido pelas fezes do inseto triatomíneo é o protozoário:",
    "options": [
      "Trypanosoma cruzi",
      "Leishmania chagasi",
      "Plasmodium vivax",
      "Toxoplasma gondii"
    ],
    "correctIndex": 0,
    "explanation": "T. cruzi é transmitido quando o barbeiro defeca durante o repasto sanguíneo e os tripomastigotas penetram pela picada/mucosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q64",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #64).\n\nA malária terçã benigna caracterizada por febre a cada 48 horas e presença de hipnozoítos latentes no fígado é causada por:",
    "options": [
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium malariae",
      "Plasmodium ovale"
    ],
    "correctIndex": 0,
    "explanation": "P. vivax forma hipnozoítos dormentes no hepatócito que causam recaídas tardias da malária terçã.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q65",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #65).\n\nA Leishmaniose Visceral (Calazar) ataca o sistema fagocítico mononuclear causando hepatoesplenomegalia e anemia por infecção por:",
    "options": [
      "Leishmania infantum (chagasi)",
      "Leishmania braziliensis",
      "Trypanosoma brucei",
      "Babesia microti"
    ],
    "correctIndex": 0,
    "explanation": "L. infantum afeta fígado, baço e medula óssea, transmitida pelo mosquitos-palha (Lutzomyia longipalpis).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q66",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #66).\n\nO geohelminto Ascaris lumbricoides realiza ciclo pulmonar (Ciclo de Loss), podendo causar síndrome eosinofílica respiratória chamada:",
    "options": [
      "Síndrome de Loeffler",
      "Síndrome de Katayama",
      "Síndrome de Larva Migrans Cutânea",
      "Doença de Romaña"
    ],
    "correctIndex": 0,
    "explanation": "A migração de larvas de Ascaris pelos alvéolos pulmonares desencadeia tosse, broncoespasmo e eosinofilia (Síndrome de Loeffler).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q67",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #67).\n\nA ancilostomíase (Ancylostoma duodenale e Necator americanus) causa anemia ferropriva crônica devido a:",
    "options": [
      "Fixação de vermes adultos à mucosa do delgado com hematofagia ativa",
      "Mapeamento e necrose da medula óssea",
      "Hemólise intravascular autoimune",
      "Destruição direta de eritrócitos na circulação"
    ],
    "correctIndex": 0,
    "explanation": "Os ancilostomídeos possuem dentes/placas cortantes e sugam sangue da mucosa intestinal, gerando anemia microcítica e hipocrômica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q68",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #68).\n\nO diagnóstico parasitológico da enterobíase (Enterobius vermicularis) com prurido anal noturno é feito preferencialmente por:",
    "options": [
      "Método da fita gomada (Método de Graham)",
      "Exame de fezes por sedimentação espontânea (Lutz)",
      "Hemocultura para microfilárias",
      "Reação de PCR no soro"
    ],
    "correctIndex": 0,
    "explanation": "A fêmea de Enterobius migra à região perianal à noite para ovipor; a fita gomada recupera os ovos característicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q69",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Cestódeos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #69).\n\nA ingestão acidental de ovos de Taenia solium em alimentos contaminados pode levar ao desenvolvimento humano de:",
    "options": [
      "Neurocisticercose",
      "Teníase adulta intestinal pura",
      "Ancilostomíase",
      "Hidatidose hepática"
    ],
    "correctIndex": 0,
    "explanation": "Ingerir o cisto (cisticerco na carne de porco) dá teníase. Ingerir os OVOS diretamente dá cisticercose tecidual/cerebral.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q70",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Trematódeos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #70).\n\nA febre de Katayama e a hipertensão portal com fibrose periportal de Symmers são complicações da infecção por:",
    "options": [
      "Schistosoma mansoni",
      "Fasciola hepatica",
      "Paragonimus westermani",
      "Echinococcus granulosus"
    ],
    "correctIndex": 0,
    "explanation": "O Schistosoma mansoni vive no sistema porta e seus ovos nos sinusóides hepáticos provocam granulomas e fibrose periportal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q71",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #71).\n\nQual protozoário flagelado habita o duodeno e jejuno humano causando diarreia com esteatorreia e síndrome de má-absorção?",
    "options": [
      "Giardia duodenalis (lamblia)",
      "Entamoeba histolytica",
      "Balantidium coli",
      "Cryptosporidium parvum"
    ],
    "correctIndex": 0,
    "explanation": "Giardia fixa-se à mucosa do delgado por seu disco ventral, atapetando a mucosa e provocando má absorção de gorduras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q72",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #72).\n\nA amebíase intestinal grave por Entamoeba histolytica pode causar úlceras no cólon com formato característico de:",
    "options": [
      "Úlceras em 'botão de colarinho' ou 'frasco de vidro'",
      "Lesões em 'moeda'",
      "Eritema nodoso em placa",
      "Granulomas em roda de leme"
    ],
    "correctIndex": 0,
    "explanation": "E. histolytica invade a submucosa do cólon formando úlceras de base larga e colo estreito (botão de colarinho).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q73",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #73).\n\nO agente etiológico da Doença de Chagas transmitido pelas fezes do inseto triatomíneo é o protozoário:",
    "options": [
      "Trypanosoma cruzi",
      "Leishmania chagasi",
      "Plasmodium vivax",
      "Toxoplasma gondii"
    ],
    "correctIndex": 0,
    "explanation": "T. cruzi é transmitido quando o barbeiro defeca durante o repasto sanguíneo e os tripomastigotas penetram pela picada/mucosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q74",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #74).\n\nA malária terçã benigna caracterizada por febre a cada 48 horas e presença de hipnozoítos latentes no fígado é causada por:",
    "options": [
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium malariae",
      "Plasmodium ovale"
    ],
    "correctIndex": 0,
    "explanation": "P. vivax forma hipnozoítos dormentes no hepatócito que causam recaídas tardias da malária terçã.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q75",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #75).\n\nA Leishmaniose Visceral (Calazar) ataca o sistema fagocítico mononuclear causando hepatoesplenomegalia e anemia por infecção por:",
    "options": [
      "Leishmania infantum (chagasi)",
      "Leishmania braziliensis",
      "Trypanosoma brucei",
      "Babesia microti"
    ],
    "correctIndex": 0,
    "explanation": "L. infantum afeta fígado, baço e medula óssea, transmitida pelo mosquitos-palha (Lutzomyia longipalpis).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q76",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #76).\n\nO geohelminto Ascaris lumbricoides realiza ciclo pulmonar (Ciclo de Loss), podendo causar síndrome eosinofílica respiratória chamada:",
    "options": [
      "Síndrome de Loeffler",
      "Síndrome de Katayama",
      "Síndrome de Larva Migrans Cutânea",
      "Doença de Romaña"
    ],
    "correctIndex": 0,
    "explanation": "A migração de larvas de Ascaris pelos alvéolos pulmonares desencadeia tosse, broncoespasmo e eosinofilia (Síndrome de Loeffler).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q77",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #77).\n\nA ancilostomíase (Ancylostoma duodenale e Necator americanus) causa anemia ferropriva crônica devido a:",
    "options": [
      "Fixação de vermes adultos à mucosa do delgado com hematofagia ativa",
      "Mapeamento e necrose da medula óssea",
      "Hemólise intravascular autoimune",
      "Destruição direta de eritrócitos na circulação"
    ],
    "correctIndex": 0,
    "explanation": "Os ancilostomídeos possuem dentes/placas cortantes e sugam sangue da mucosa intestinal, gerando anemia microcítica e hipocrômica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q78",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #78).\n\nO diagnóstico parasitológico da enterobíase (Enterobius vermicularis) com prurido anal noturno é feito preferencialmente por:",
    "options": [
      "Método da fita gomada (Método de Graham)",
      "Exame de fezes por sedimentação espontânea (Lutz)",
      "Hemocultura para microfilárias",
      "Reação de PCR no soro"
    ],
    "correctIndex": 0,
    "explanation": "A fêmea de Enterobius migra à região perianal à noite para ovipor; a fita gomada recupera os ovos característicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q79",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Cestódeos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #79).\n\nA ingestão acidental de ovos de Taenia solium em alimentos contaminados pode levar ao desenvolvimento humano de:",
    "options": [
      "Neurocisticercose",
      "Teníase adulta intestinal pura",
      "Ancilostomíase",
      "Hidatidose hepática"
    ],
    "correctIndex": 0,
    "explanation": "Ingerir o cisto (cisticerco na carne de porco) dá teníase. Ingerir os OVOS diretamente dá cisticercose tecidual/cerebral.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q80",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Trematódeos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #80).\n\nA febre de Katayama e a hipertensão portal com fibrose periportal de Symmers são complicações da infecção por:",
    "options": [
      "Schistosoma mansoni",
      "Fasciola hepatica",
      "Paragonimus westermani",
      "Echinococcus granulosus"
    ],
    "correctIndex": 0,
    "explanation": "O Schistosoma mansoni vive no sistema porta e seus ovos nos sinusóides hepáticos provocam granulomas e fibrose periportal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q81",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #81).\n\nQual protozoário flagelado habita o duodeno e jejuno humano causando diarreia com esteatorreia e síndrome de má-absorção?",
    "options": [
      "Giardia duodenalis (lamblia)",
      "Entamoeba histolytica",
      "Balantidium coli",
      "Cryptosporidium parvum"
    ],
    "correctIndex": 0,
    "explanation": "Giardia fixa-se à mucosa do delgado por seu disco ventral, atapetando a mucosa e provocando má absorção de gorduras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q82",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #82).\n\nA amebíase intestinal grave por Entamoeba histolytica pode causar úlceras no cólon com formato característico de:",
    "options": [
      "Úlceras em 'botão de colarinho' ou 'frasco de vidro'",
      "Lesões em 'moeda'",
      "Eritema nodoso em placa",
      "Granulomas em roda de leme"
    ],
    "correctIndex": 0,
    "explanation": "E. histolytica invade a submucosa do cólon formando úlceras de base larga e colo estreito (botão de colarinho).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q83",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #83).\n\nO agente etiológico da Doença de Chagas transmitido pelas fezes do inseto triatomíneo é o protozoário:",
    "options": [
      "Trypanosoma cruzi",
      "Leishmania chagasi",
      "Plasmodium vivax",
      "Toxoplasma gondii"
    ],
    "correctIndex": 0,
    "explanation": "T. cruzi é transmitido quando o barbeiro defeca durante o repasto sanguíneo e os tripomastigotas penetram pela picada/mucosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q84",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #84).\n\nA malária terçã benigna caracterizada por febre a cada 48 horas e presença de hipnozoítos latentes no fígado é causada por:",
    "options": [
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium malariae",
      "Plasmodium ovale"
    ],
    "correctIndex": 0,
    "explanation": "P. vivax forma hipnozoítos dormentes no hepatócito que causam recaídas tardias da malária terçã.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q85",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #85).\n\nA Leishmaniose Visceral (Calazar) ataca o sistema fagocítico mononuclear causando hepatoesplenomegalia e anemia por infecção por:",
    "options": [
      "Leishmania infantum (chagasi)",
      "Leishmania braziliensis",
      "Trypanosoma brucei",
      "Babesia microti"
    ],
    "correctIndex": 0,
    "explanation": "L. infantum afeta fígado, baço e medula óssea, transmitida pelo mosquitos-palha (Lutzomyia longipalpis).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q86",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #86).\n\nO geohelminto Ascaris lumbricoides realiza ciclo pulmonar (Ciclo de Loss), podendo causar síndrome eosinofílica respiratória chamada:",
    "options": [
      "Síndrome de Loeffler",
      "Síndrome de Katayama",
      "Síndrome de Larva Migrans Cutânea",
      "Doença de Romaña"
    ],
    "correctIndex": 0,
    "explanation": "A migração de larvas de Ascaris pelos alvéolos pulmonares desencadeia tosse, broncoespasmo e eosinofilia (Síndrome de Loeffler).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q87",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #87).\n\nA ancilostomíase (Ancylostoma duodenale e Necator americanus) causa anemia ferropriva crônica devido a:",
    "options": [
      "Fixação de vermes adultos à mucosa do delgado com hematofagia ativa",
      "Mapeamento e necrose da medula óssea",
      "Hemólise intravascular autoimune",
      "Destruição direta de eritrócitos na circulação"
    ],
    "correctIndex": 0,
    "explanation": "Os ancilostomídeos possuem dentes/placas cortantes e sugam sangue da mucosa intestinal, gerando anemia microcítica e hipocrômica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q88",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #88).\n\nO diagnóstico parasitológico da enterobíase (Enterobius vermicularis) com prurido anal noturno é feito preferencialmente por:",
    "options": [
      "Método da fita gomada (Método de Graham)",
      "Exame de fezes por sedimentação espontânea (Lutz)",
      "Hemocultura para microfilárias",
      "Reação de PCR no soro"
    ],
    "correctIndex": 0,
    "explanation": "A fêmea de Enterobius migra à região perianal à noite para ovipor; a fita gomada recupera os ovos característicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q89",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Cestódeos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #89).\n\nA ingestão acidental de ovos de Taenia solium em alimentos contaminados pode levar ao desenvolvimento humano de:",
    "options": [
      "Neurocisticercose",
      "Teníase adulta intestinal pura",
      "Ancilostomíase",
      "Hidatidose hepática"
    ],
    "correctIndex": 0,
    "explanation": "Ingerir o cisto (cisticerco na carne de porco) dá teníase. Ingerir os OVOS diretamente dá cisticercose tecidual/cerebral.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q90",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Trematódeos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #90).\n\nA febre de Katayama e a hipertensão portal com fibrose periportal de Symmers são complicações da infecção por:",
    "options": [
      "Schistosoma mansoni",
      "Fasciola hepatica",
      "Paragonimus westermani",
      "Echinococcus granulosus"
    ],
    "correctIndex": 0,
    "explanation": "O Schistosoma mansoni vive no sistema porta e seus ovos nos sinusóides hepáticos provocam granulomas e fibrose periportal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q91",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #91).\n\nQual protozoário flagelado habita o duodeno e jejuno humano causando diarreia com esteatorreia e síndrome de má-absorção?",
    "options": [
      "Giardia duodenalis (lamblia)",
      "Entamoeba histolytica",
      "Balantidium coli",
      "Cryptosporidium parvum"
    ],
    "correctIndex": 0,
    "explanation": "Giardia fixa-se à mucosa do delgado por seu disco ventral, atapetando a mucosa e provocando má absorção de gorduras.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q92",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Intestinais",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #92).\n\nA amebíase intestinal grave por Entamoeba histolytica pode causar úlceras no cólon com formato característico de:",
    "options": [
      "Úlceras em 'botão de colarinho' ou 'frasco de vidro'",
      "Lesões em 'moeda'",
      "Eritema nodoso em placa",
      "Granulomas em roda de leme"
    ],
    "correctIndex": 0,
    "explanation": "E. histolytica invade a submucosa do cólon formando úlceras de base larga e colo estreito (botão de colarinho).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q93",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #93).\n\nO agente etiológico da Doença de Chagas transmitido pelas fezes do inseto triatomíneo é o protozoário:",
    "options": [
      "Trypanosoma cruzi",
      "Leishmania chagasi",
      "Plasmodium vivax",
      "Toxoplasma gondii"
    ],
    "correctIndex": 0,
    "explanation": "T. cruzi é transmitido quando o barbeiro defeca durante o repasto sanguíneo e os tripomastigotas penetram pela picada/mucosa.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q94",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #94).\n\nA malária terçã benigna caracterizada por febre a cada 48 horas e presença de hipnozoítos latentes no fígado é causada por:",
    "options": [
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium malariae",
      "Plasmodium ovale"
    ],
    "correctIndex": 0,
    "explanation": "P. vivax forma hipnozoítos dormentes no hepatócito que causam recaídas tardias da malária terçã.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q95",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Protozoários Sanguíneos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #95).\n\nA Leishmaniose Visceral (Calazar) ataca o sistema fagocítico mononuclear causando hepatoesplenomegalia e anemia por infecção por:",
    "options": [
      "Leishmania infantum (chagasi)",
      "Leishmania braziliensis",
      "Trypanosoma brucei",
      "Babesia microti"
    ],
    "correctIndex": 0,
    "explanation": "L. infantum afeta fígado, baço e medula óssea, transmitida pelo mosquitos-palha (Lutzomyia longipalpis).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q96",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #96).\n\nO geohelminto Ascaris lumbricoides realiza ciclo pulmonar (Ciclo de Loss), podendo causar síndrome eosinofílica respiratória chamada:",
    "options": [
      "Síndrome de Loeffler",
      "Síndrome de Katayama",
      "Síndrome de Larva Migrans Cutânea",
      "Doença de Romaña"
    ],
    "correctIndex": 0,
    "explanation": "A migração de larvas de Ascaris pelos alvéolos pulmonares desencadeia tosse, broncoespasmo e eosinofilia (Síndrome de Loeffler).",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q97",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #97).\n\nA ancilostomíase (Ancylostoma duodenale e Necator americanus) causa anemia ferropriva crônica devido a:",
    "options": [
      "Fixação de vermes adultos à mucosa do delgado com hematofagia ativa",
      "Mapeamento e necrose da medula óssea",
      "Hemólise intravascular autoimune",
      "Destruição direta de eritrócitos na circulação"
    ],
    "correctIndex": 0,
    "explanation": "Os ancilostomídeos possuem dentes/placas cortantes e sugam sangue da mucosa intestinal, gerando anemia microcítica e hipocrômica.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q98",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Nematódeos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #98).\n\nO diagnóstico parasitológico da enterobíase (Enterobius vermicularis) com prurido anal noturno é feito preferencialmente por:",
    "options": [
      "Método da fita gomada (Método de Graham)",
      "Exame de fezes por sedimentação espontânea (Lutz)",
      "Hemocultura para microfilárias",
      "Reação de PCR no soro"
    ],
    "correctIndex": 0,
    "explanation": "A fêmea de Enterobius migra à região perianal à noite para ovipor; a fita gomada recupera os ovos característicos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q99",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Cestódeos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #99).\n\nA ingestão acidental de ovos de Taenia solium em alimentos contaminados pode levar ao desenvolvimento humano de:",
    "options": [
      "Neurocisticercose",
      "Teníase adulta intestinal pura",
      "Ancilostomíase",
      "Hidatidose hepática"
    ],
    "correctIndex": 0,
    "explanation": "Ingerir o cisto (cisticerco na carne de porco) dá teníase. Ingerir os OVOS diretamente dá cisticercose tecidual/cerebral.",
    "difficulty": "medium"
  },
  {
    "id": "basico_parasitologia_q100",
    "cycle": "Ciclo Básico",
    "subject": "Parasitologia",
    "subSubject": "Helmintos - Trematódeos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #100).\n\nA febre de Katayama e a hipertensão portal com fibrose periportal de Symmers são complicações da infecção por:",
    "options": [
      "Schistosoma mansoni",
      "Fasciola hepatica",
      "Paragonimus westermani",
      "Echinococcus granulosus"
    ],
    "correctIndex": 0,
    "explanation": "O Schistosoma mansoni vive no sistema porta e seus ovos nos sinusóides hepáticos provocam granulomas e fibrose periportal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q1",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #1).\n\nO primeiro ruído cardíaco (B1) coincide com o início da sístole ventricular e resulta do fechamento das valvas:",
    "options": [
      "Atrioventriculares (Mitral e Tricúspide)",
      "Semilunares (Aórtica e Pulmonar)",
      "Mitral e Aórtica exclusivamente",
      "Tricúspide e Pulmonar isoladamente"
    ],
    "correctIndex": 0,
    "explanation": "B1 é produzido pelo fechamento abrupto das valvas mitral e tricúspide no início da sístole.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q2",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #2).\n\nA segunda bulha cardíaca (B2) é produzida no início da diástole pelo fechamento das valvas:",
    "options": [
      "Aórtica e Pulmonar (semilunares)",
      "Mitral e Tricúspide",
      "Aórtica e Mitral",
      "Tricúspide e Aórtica"
    ],
    "correctIndex": 0,
    "explanation": "B2 é decorrente do fechamento das valvas semilunares aórtica (A2) e pulmonar (P2).",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q3",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Sopros Cardíacos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #3).\n\nUm sopro holossistólico de alta frequência audível com maior intensidade no foco mitral e irradiação para a axila esquerda sugere:",
    "options": [
      "Insuficiência mitral",
      "Estenose aórtica",
      "Estenose mitral",
      "Insuficiência aórtica"
    ],
    "correctIndex": 0,
    "explanation": "A insuficiência mitral gera refluxo de sangue do VE para o AE durante toda a sístole, projetando sopro para a axila.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q4",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #4).\n\nRuídos adventícios descontínuos, curtos e graves semelhantes ao roçar de mechas de cabelo escutados na inspiração indicam:",
    "options": [
      "Estertores crepitantes (finos)",
      "Roncos e sibilos",
      "Estridor laríngeo",
      "Sopro tubário"
    ],
    "correctIndex": 0,
    "explanation": "Estertores finos ocorrem pela abertura súbita de alvéolos colapsados por líquido/exsudato na inspiração tardia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q5",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #5).\n\nA interrupção súbita da inspiração profunda durante a palpação profunda do ponto cístico no hipocôndrio direito é o:",
    "options": [
      "Sinal de Murphy (indicativo de colecistite aguda)",
      "Sinal de Blumberg",
      "Sinal de Rovsing",
      "Sinal de Giordano"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Murphy positivo é dor à palpação do ponto cístico com parada inspiratória, clássico da colecistite aguda.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q6",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #6).\n\nA dor à descompressão súbita da parede abdominal no ponto de McBurney na fossa ilíaca direita é o:",
    "options": [
      "Sinal de Blumberg (indicativo de peritonite/apendicite)",
      "Sinal de Murphy",
      "Sinal de Cullen",
      "Sinal de Grey-Turner"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Blumberg representa irritação peritoneal local por inflamação do apêndice cecal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q7",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #7).\n\nA palpação da fossa ilíaca esquerda desencadeando dor na fossa ilíaca direita devido ao deslocamento de gases no cólon é o:",
    "options": [
      "Sinal de Rovsing",
      "Sinal do Psoas",
      "Sinal do Obturador",
      "Sinal de Dunphy"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Rovsing ocorre na apendicite aguda quando a compressão retrógrada do cólon esquerdo distende o ceco inflamado.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q8",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Semiologia Vascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #8).\n\nA aferição da pressão arterial pelo método auscultatório identifica o aparecimento do primeiro som de Korotkoff (Fase I) como a:",
    "options": [
      "Pressão arterial sistólica (PAS)",
      "Pressão arterial diastólica (PAD)",
      "Pressão arterial média (PAM)",
      "Pressão de pulso"
    ],
    "correctIndex": 0,
    "explanation": "O aparecimento dos sons de Korotkoff (Fase I) determina a PAS, e o abafamento/desaparecimento (Fase V) determina a PAD.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q9",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame Físico Geral",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #9).\n\nA coloração amarelada da pele e mucosas decorrente da elevação da bilirrubina sérica acima de 2 a 2,5 mg/dL denomina-se:",
    "options": [
      "Icterícia",
      "Cianose",
      "Palidez cutâneo-mucosa",
      "Eritema"
    ],
    "correctIndex": 0,
    "explanation": "A icterícia fica visível clinicamente na esclera e freio da língua com bilirrubina total > 2,0-2,5 mg/dL.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q10",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #10).\n\nRuídos adventícios contínuos de tom musical agudo provocados pelo estreitamento do calibre das vias aéreas inferiores são os:",
    "options": [
      "Sibilos",
      "Estertores grossos (bolhosos)",
      "Atrito pleural",
      "Gorgolejo"
    ],
    "correctIndex": 0,
    "explanation": "Sibilos resultam do broncoespasmo, edema ou secreção afunilando os bronquíolos na expiração (ex: asma e DPOC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q11",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #11).\n\nO primeiro ruído cardíaco (B1) coincide com o início da sístole ventricular e resulta do fechamento das valvas:",
    "options": [
      "Atrioventriculares (Mitral e Tricúspide)",
      "Semilunares (Aórtica e Pulmonar)",
      "Mitral e Aórtica exclusivamente",
      "Tricúspide e Pulmonar isoladamente"
    ],
    "correctIndex": 0,
    "explanation": "B1 é produzido pelo fechamento abrupto das valvas mitral e tricúspide no início da sístole.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q12",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #12).\n\nA segunda bulha cardíaca (B2) é produzida no início da diástole pelo fechamento das valvas:",
    "options": [
      "Aórtica e Pulmonar (semilunares)",
      "Mitral e Tricúspide",
      "Aórtica e Mitral",
      "Tricúspide e Aórtica"
    ],
    "correctIndex": 0,
    "explanation": "B2 é decorrente do fechamento das valvas semilunares aórtica (A2) e pulmonar (P2).",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q13",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Sopros Cardíacos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #13).\n\nUm sopro holossistólico de alta frequência audível com maior intensidade no foco mitral e irradiação para a axila esquerda sugere:",
    "options": [
      "Insuficiência mitral",
      "Estenose aórtica",
      "Estenose mitral",
      "Insuficiência aórtica"
    ],
    "correctIndex": 0,
    "explanation": "A insuficiência mitral gera refluxo de sangue do VE para o AE durante toda a sístole, projetando sopro para a axila.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q14",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #14).\n\nRuídos adventícios descontínuos, curtos e graves semelhantes ao roçar de mechas de cabelo escutados na inspiração indicam:",
    "options": [
      "Estertores crepitantes (finos)",
      "Roncos e sibilos",
      "Estridor laríngeo",
      "Sopro tubário"
    ],
    "correctIndex": 0,
    "explanation": "Estertores finos ocorrem pela abertura súbita de alvéolos colapsados por líquido/exsudato na inspiração tardia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q15",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #15).\n\nA interrupção súbita da inspiração profunda durante a palpação profunda do ponto cístico no hipocôndrio direito é o:",
    "options": [
      "Sinal de Murphy (indicativo de colecistite aguda)",
      "Sinal de Blumberg",
      "Sinal de Rovsing",
      "Sinal de Giordano"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Murphy positivo é dor à palpação do ponto cístico com parada inspiratória, clássico da colecistite aguda.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q16",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #16).\n\nA dor à descompressão súbita da parede abdominal no ponto de McBurney na fossa ilíaca direita é o:",
    "options": [
      "Sinal de Blumberg (indicativo de peritonite/apendicite)",
      "Sinal de Murphy",
      "Sinal de Cullen",
      "Sinal de Grey-Turner"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Blumberg representa irritação peritoneal local por inflamação do apêndice cecal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q17",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #17).\n\nA palpação da fossa ilíaca esquerda desencadeando dor na fossa ilíaca direita devido ao deslocamento de gases no cólon é o:",
    "options": [
      "Sinal de Rovsing",
      "Sinal do Psoas",
      "Sinal do Obturador",
      "Sinal de Dunphy"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Rovsing ocorre na apendicite aguda quando a compressão retrógrada do cólon esquerdo distende o ceco inflamado.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q18",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Semiologia Vascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #18).\n\nA aferição da pressão arterial pelo método auscultatório identifica o aparecimento do primeiro som de Korotkoff (Fase I) como a:",
    "options": [
      "Pressão arterial sistólica (PAS)",
      "Pressão arterial diastólica (PAD)",
      "Pressão arterial média (PAM)",
      "Pressão de pulso"
    ],
    "correctIndex": 0,
    "explanation": "O aparecimento dos sons de Korotkoff (Fase I) determina a PAS, e o abafamento/desaparecimento (Fase V) determina a PAD.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q19",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame Físico Geral",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #19).\n\nA coloração amarelada da pele e mucosas decorrente da elevação da bilirrubina sérica acima de 2 a 2,5 mg/dL denomina-se:",
    "options": [
      "Icterícia",
      "Cianose",
      "Palidez cutâneo-mucosa",
      "Eritema"
    ],
    "correctIndex": 0,
    "explanation": "A icterícia fica visível clinicamente na esclera e freio da língua com bilirrubina total > 2,0-2,5 mg/dL.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q20",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #20).\n\nRuídos adventícios contínuos de tom musical agudo provocados pelo estreitamento do calibre das vias aéreas inferiores são os:",
    "options": [
      "Sibilos",
      "Estertores grossos (bolhosos)",
      "Atrito pleural",
      "Gorgolejo"
    ],
    "correctIndex": 0,
    "explanation": "Sibilos resultam do broncoespasmo, edema ou secreção afunilando os bronquíolos na expiração (ex: asma e DPOC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q21",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #21).\n\nO primeiro ruído cardíaco (B1) coincide com o início da sístole ventricular e resulta do fechamento das valvas:",
    "options": [
      "Atrioventriculares (Mitral e Tricúspide)",
      "Semilunares (Aórtica e Pulmonar)",
      "Mitral e Aórtica exclusivamente",
      "Tricúspide e Pulmonar isoladamente"
    ],
    "correctIndex": 0,
    "explanation": "B1 é produzido pelo fechamento abrupto das valvas mitral e tricúspide no início da sístole.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q22",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #22).\n\nA segunda bulha cardíaca (B2) é produzida no início da diástole pelo fechamento das valvas:",
    "options": [
      "Aórtica e Pulmonar (semilunares)",
      "Mitral e Tricúspide",
      "Aórtica e Mitral",
      "Tricúspide e Aórtica"
    ],
    "correctIndex": 0,
    "explanation": "B2 é decorrente do fechamento das valvas semilunares aórtica (A2) e pulmonar (P2).",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q23",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Sopros Cardíacos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #23).\n\nUm sopro holossistólico de alta frequência audível com maior intensidade no foco mitral e irradiação para a axila esquerda sugere:",
    "options": [
      "Insuficiência mitral",
      "Estenose aórtica",
      "Estenose mitral",
      "Insuficiência aórtica"
    ],
    "correctIndex": 0,
    "explanation": "A insuficiência mitral gera refluxo de sangue do VE para o AE durante toda a sístole, projetando sopro para a axila.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q24",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #24).\n\nRuídos adventícios descontínuos, curtos e graves semelhantes ao roçar de mechas de cabelo escutados na inspiração indicam:",
    "options": [
      "Estertores crepitantes (finos)",
      "Roncos e sibilos",
      "Estridor laríngeo",
      "Sopro tubário"
    ],
    "correctIndex": 0,
    "explanation": "Estertores finos ocorrem pela abertura súbita de alvéolos colapsados por líquido/exsudato na inspiração tardia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q25",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #25).\n\nA interrupção súbita da inspiração profunda durante a palpação profunda do ponto cístico no hipocôndrio direito é o:",
    "options": [
      "Sinal de Murphy (indicativo de colecistite aguda)",
      "Sinal de Blumberg",
      "Sinal de Rovsing",
      "Sinal de Giordano"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Murphy positivo é dor à palpação do ponto cístico com parada inspiratória, clássico da colecistite aguda.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q26",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #26).\n\nA dor à descompressão súbita da parede abdominal no ponto de McBurney na fossa ilíaca direita é o:",
    "options": [
      "Sinal de Blumberg (indicativo de peritonite/apendicite)",
      "Sinal de Murphy",
      "Sinal de Cullen",
      "Sinal de Grey-Turner"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Blumberg representa irritação peritoneal local por inflamação do apêndice cecal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q27",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #27).\n\nA palpação da fossa ilíaca esquerda desencadeando dor na fossa ilíaca direita devido ao deslocamento de gases no cólon é o:",
    "options": [
      "Sinal de Rovsing",
      "Sinal do Psoas",
      "Sinal do Obturador",
      "Sinal de Dunphy"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Rovsing ocorre na apendicite aguda quando a compressão retrógrada do cólon esquerdo distende o ceco inflamado.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q28",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Semiologia Vascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #28).\n\nA aferição da pressão arterial pelo método auscultatório identifica o aparecimento do primeiro som de Korotkoff (Fase I) como a:",
    "options": [
      "Pressão arterial sistólica (PAS)",
      "Pressão arterial diastólica (PAD)",
      "Pressão arterial média (PAM)",
      "Pressão de pulso"
    ],
    "correctIndex": 0,
    "explanation": "O aparecimento dos sons de Korotkoff (Fase I) determina a PAS, e o abafamento/desaparecimento (Fase V) determina a PAD.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q29",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame Físico Geral",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #29).\n\nA coloração amarelada da pele e mucosas decorrente da elevação da bilirrubina sérica acima de 2 a 2,5 mg/dL denomina-se:",
    "options": [
      "Icterícia",
      "Cianose",
      "Palidez cutâneo-mucosa",
      "Eritema"
    ],
    "correctIndex": 0,
    "explanation": "A icterícia fica visível clinicamente na esclera e freio da língua com bilirrubina total > 2,0-2,5 mg/dL.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q30",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #30).\n\nRuídos adventícios contínuos de tom musical agudo provocados pelo estreitamento do calibre das vias aéreas inferiores são os:",
    "options": [
      "Sibilos",
      "Estertores grossos (bolhosos)",
      "Atrito pleural",
      "Gorgolejo"
    ],
    "correctIndex": 0,
    "explanation": "Sibilos resultam do broncoespasmo, edema ou secreção afunilando os bronquíolos na expiração (ex: asma e DPOC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q31",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #31).\n\nO primeiro ruído cardíaco (B1) coincide com o início da sístole ventricular e resulta do fechamento das valvas:",
    "options": [
      "Atrioventriculares (Mitral e Tricúspide)",
      "Semilunares (Aórtica e Pulmonar)",
      "Mitral e Aórtica exclusivamente",
      "Tricúspide e Pulmonar isoladamente"
    ],
    "correctIndex": 0,
    "explanation": "B1 é produzido pelo fechamento abrupto das valvas mitral e tricúspide no início da sístole.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q32",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #32).\n\nA segunda bulha cardíaca (B2) é produzida no início da diástole pelo fechamento das valvas:",
    "options": [
      "Aórtica e Pulmonar (semilunares)",
      "Mitral e Tricúspide",
      "Aórtica e Mitral",
      "Tricúspide e Aórtica"
    ],
    "correctIndex": 0,
    "explanation": "B2 é decorrente do fechamento das valvas semilunares aórtica (A2) e pulmonar (P2).",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q33",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Sopros Cardíacos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #33).\n\nUm sopro holossistólico de alta frequência audível com maior intensidade no foco mitral e irradiação para a axila esquerda sugere:",
    "options": [
      "Insuficiência mitral",
      "Estenose aórtica",
      "Estenose mitral",
      "Insuficiência aórtica"
    ],
    "correctIndex": 0,
    "explanation": "A insuficiência mitral gera refluxo de sangue do VE para o AE durante toda a sístole, projetando sopro para a axila.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q34",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #34).\n\nRuídos adventícios descontínuos, curtos e graves semelhantes ao roçar de mechas de cabelo escutados na inspiração indicam:",
    "options": [
      "Estertores crepitantes (finos)",
      "Roncos e sibilos",
      "Estridor laríngeo",
      "Sopro tubário"
    ],
    "correctIndex": 0,
    "explanation": "Estertores finos ocorrem pela abertura súbita de alvéolos colapsados por líquido/exsudato na inspiração tardia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q35",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #35).\n\nA interrupção súbita da inspiração profunda durante a palpação profunda do ponto cístico no hipocôndrio direito é o:",
    "options": [
      "Sinal de Murphy (indicativo de colecistite aguda)",
      "Sinal de Blumberg",
      "Sinal de Rovsing",
      "Sinal de Giordano"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Murphy positivo é dor à palpação do ponto cístico com parada inspiratória, clássico da colecistite aguda.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q36",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #36).\n\nA dor à descompressão súbita da parede abdominal no ponto de McBurney na fossa ilíaca direita é o:",
    "options": [
      "Sinal de Blumberg (indicativo de peritonite/apendicite)",
      "Sinal de Murphy",
      "Sinal de Cullen",
      "Sinal de Grey-Turner"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Blumberg representa irritação peritoneal local por inflamação do apêndice cecal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q37",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #37).\n\nA palpação da fossa ilíaca esquerda desencadeando dor na fossa ilíaca direita devido ao deslocamento de gases no cólon é o:",
    "options": [
      "Sinal de Rovsing",
      "Sinal do Psoas",
      "Sinal do Obturador",
      "Sinal de Dunphy"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Rovsing ocorre na apendicite aguda quando a compressão retrógrada do cólon esquerdo distende o ceco inflamado.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q38",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Semiologia Vascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #38).\n\nA aferição da pressão arterial pelo método auscultatório identifica o aparecimento do primeiro som de Korotkoff (Fase I) como a:",
    "options": [
      "Pressão arterial sistólica (PAS)",
      "Pressão arterial diastólica (PAD)",
      "Pressão arterial média (PAM)",
      "Pressão de pulso"
    ],
    "correctIndex": 0,
    "explanation": "O aparecimento dos sons de Korotkoff (Fase I) determina a PAS, e o abafamento/desaparecimento (Fase V) determina a PAD.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q39",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame Físico Geral",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #39).\n\nA coloração amarelada da pele e mucosas decorrente da elevação da bilirrubina sérica acima de 2 a 2,5 mg/dL denomina-se:",
    "options": [
      "Icterícia",
      "Cianose",
      "Palidez cutâneo-mucosa",
      "Eritema"
    ],
    "correctIndex": 0,
    "explanation": "A icterícia fica visível clinicamente na esclera e freio da língua com bilirrubina total > 2,0-2,5 mg/dL.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q40",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #40).\n\nRuídos adventícios contínuos de tom musical agudo provocados pelo estreitamento do calibre das vias aéreas inferiores são os:",
    "options": [
      "Sibilos",
      "Estertores grossos (bolhosos)",
      "Atrito pleural",
      "Gorgolejo"
    ],
    "correctIndex": 0,
    "explanation": "Sibilos resultam do broncoespasmo, edema ou secreção afunilando os bronquíolos na expiração (ex: asma e DPOC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q41",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #41).\n\nO primeiro ruído cardíaco (B1) coincide com o início da sístole ventricular e resulta do fechamento das valvas:",
    "options": [
      "Atrioventriculares (Mitral e Tricúspide)",
      "Semilunares (Aórtica e Pulmonar)",
      "Mitral e Aórtica exclusivamente",
      "Tricúspide e Pulmonar isoladamente"
    ],
    "correctIndex": 0,
    "explanation": "B1 é produzido pelo fechamento abrupto das valvas mitral e tricúspide no início da sístole.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q42",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #42).\n\nA segunda bulha cardíaca (B2) é produzida no início da diástole pelo fechamento das valvas:",
    "options": [
      "Aórtica e Pulmonar (semilunares)",
      "Mitral e Tricúspide",
      "Aórtica e Mitral",
      "Tricúspide e Aórtica"
    ],
    "correctIndex": 0,
    "explanation": "B2 é decorrente do fechamento das valvas semilunares aórtica (A2) e pulmonar (P2).",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q43",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Sopros Cardíacos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #43).\n\nUm sopro holossistólico de alta frequência audível com maior intensidade no foco mitral e irradiação para a axila esquerda sugere:",
    "options": [
      "Insuficiência mitral",
      "Estenose aórtica",
      "Estenose mitral",
      "Insuficiência aórtica"
    ],
    "correctIndex": 0,
    "explanation": "A insuficiência mitral gera refluxo de sangue do VE para o AE durante toda a sístole, projetando sopro para a axila.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q44",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #44).\n\nRuídos adventícios descontínuos, curtos e graves semelhantes ao roçar de mechas de cabelo escutados na inspiração indicam:",
    "options": [
      "Estertores crepitantes (finos)",
      "Roncos e sibilos",
      "Estridor laríngeo",
      "Sopro tubário"
    ],
    "correctIndex": 0,
    "explanation": "Estertores finos ocorrem pela abertura súbita de alvéolos colapsados por líquido/exsudato na inspiração tardia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q45",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #45).\n\nA interrupção súbita da inspiração profunda durante a palpação profunda do ponto cístico no hipocôndrio direito é o:",
    "options": [
      "Sinal de Murphy (indicativo de colecistite aguda)",
      "Sinal de Blumberg",
      "Sinal de Rovsing",
      "Sinal de Giordano"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Murphy positivo é dor à palpação do ponto cístico com parada inspiratória, clássico da colecistite aguda.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q46",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #46).\n\nA dor à descompressão súbita da parede abdominal no ponto de McBurney na fossa ilíaca direita é o:",
    "options": [
      "Sinal de Blumberg (indicativo de peritonite/apendicite)",
      "Sinal de Murphy",
      "Sinal de Cullen",
      "Sinal de Grey-Turner"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Blumberg representa irritação peritoneal local por inflamação do apêndice cecal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q47",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #47).\n\nA palpação da fossa ilíaca esquerda desencadeando dor na fossa ilíaca direita devido ao deslocamento de gases no cólon é o:",
    "options": [
      "Sinal de Rovsing",
      "Sinal do Psoas",
      "Sinal do Obturador",
      "Sinal de Dunphy"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Rovsing ocorre na apendicite aguda quando a compressão retrógrada do cólon esquerdo distende o ceco inflamado.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q48",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Semiologia Vascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #48).\n\nA aferição da pressão arterial pelo método auscultatório identifica o aparecimento do primeiro som de Korotkoff (Fase I) como a:",
    "options": [
      "Pressão arterial sistólica (PAS)",
      "Pressão arterial diastólica (PAD)",
      "Pressão arterial média (PAM)",
      "Pressão de pulso"
    ],
    "correctIndex": 0,
    "explanation": "O aparecimento dos sons de Korotkoff (Fase I) determina a PAS, e o abafamento/desaparecimento (Fase V) determina a PAD.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q49",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame Físico Geral",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #49).\n\nA coloração amarelada da pele e mucosas decorrente da elevação da bilirrubina sérica acima de 2 a 2,5 mg/dL denomina-se:",
    "options": [
      "Icterícia",
      "Cianose",
      "Palidez cutâneo-mucosa",
      "Eritema"
    ],
    "correctIndex": 0,
    "explanation": "A icterícia fica visível clinicamente na esclera e freio da língua com bilirrubina total > 2,0-2,5 mg/dL.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q50",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #50).\n\nRuídos adventícios contínuos de tom musical agudo provocados pelo estreitamento do calibre das vias aéreas inferiores são os:",
    "options": [
      "Sibilos",
      "Estertores grossos (bolhosos)",
      "Atrito pleural",
      "Gorgolejo"
    ],
    "correctIndex": 0,
    "explanation": "Sibilos resultam do broncoespasmo, edema ou secreção afunilando os bronquíolos na expiração (ex: asma e DPOC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q51",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #51).\n\nO primeiro ruído cardíaco (B1) coincide com o início da sístole ventricular e resulta do fechamento das valvas:",
    "options": [
      "Atrioventriculares (Mitral e Tricúspide)",
      "Semilunares (Aórtica e Pulmonar)",
      "Mitral e Aórtica exclusivamente",
      "Tricúspide e Pulmonar isoladamente"
    ],
    "correctIndex": 0,
    "explanation": "B1 é produzido pelo fechamento abrupto das valvas mitral e tricúspide no início da sístole.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q52",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #52).\n\nA segunda bulha cardíaca (B2) é produzida no início da diástole pelo fechamento das valvas:",
    "options": [
      "Aórtica e Pulmonar (semilunares)",
      "Mitral e Tricúspide",
      "Aórtica e Mitral",
      "Tricúspide e Aórtica"
    ],
    "correctIndex": 0,
    "explanation": "B2 é decorrente do fechamento das valvas semilunares aórtica (A2) e pulmonar (P2).",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q53",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Sopros Cardíacos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #53).\n\nUm sopro holossistólico de alta frequência audível com maior intensidade no foco mitral e irradiação para a axila esquerda sugere:",
    "options": [
      "Insuficiência mitral",
      "Estenose aórtica",
      "Estenose mitral",
      "Insuficiência aórtica"
    ],
    "correctIndex": 0,
    "explanation": "A insuficiência mitral gera refluxo de sangue do VE para o AE durante toda a sístole, projetando sopro para a axila.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q54",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #54).\n\nRuídos adventícios descontínuos, curtos e graves semelhantes ao roçar de mechas de cabelo escutados na inspiração indicam:",
    "options": [
      "Estertores crepitantes (finos)",
      "Roncos e sibilos",
      "Estridor laríngeo",
      "Sopro tubário"
    ],
    "correctIndex": 0,
    "explanation": "Estertores finos ocorrem pela abertura súbita de alvéolos colapsados por líquido/exsudato na inspiração tardia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q55",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #55).\n\nA interrupção súbita da inspiração profunda durante a palpação profunda do ponto cístico no hipocôndrio direito é o:",
    "options": [
      "Sinal de Murphy (indicativo de colecistite aguda)",
      "Sinal de Blumberg",
      "Sinal de Rovsing",
      "Sinal de Giordano"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Murphy positivo é dor à palpação do ponto cístico com parada inspiratória, clássico da colecistite aguda.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q56",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #56).\n\nA dor à descompressão súbita da parede abdominal no ponto de McBurney na fossa ilíaca direita é o:",
    "options": [
      "Sinal de Blumberg (indicativo de peritonite/apendicite)",
      "Sinal de Murphy",
      "Sinal de Cullen",
      "Sinal de Grey-Turner"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Blumberg representa irritação peritoneal local por inflamação do apêndice cecal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q57",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #57).\n\nA palpação da fossa ilíaca esquerda desencadeando dor na fossa ilíaca direita devido ao deslocamento de gases no cólon é o:",
    "options": [
      "Sinal de Rovsing",
      "Sinal do Psoas",
      "Sinal do Obturador",
      "Sinal de Dunphy"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Rovsing ocorre na apendicite aguda quando a compressão retrógrada do cólon esquerdo distende o ceco inflamado.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q58",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Semiologia Vascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #58).\n\nA aferição da pressão arterial pelo método auscultatório identifica o aparecimento do primeiro som de Korotkoff (Fase I) como a:",
    "options": [
      "Pressão arterial sistólica (PAS)",
      "Pressão arterial diastólica (PAD)",
      "Pressão arterial média (PAM)",
      "Pressão de pulso"
    ],
    "correctIndex": 0,
    "explanation": "O aparecimento dos sons de Korotkoff (Fase I) determina a PAS, e o abafamento/desaparecimento (Fase V) determina a PAD.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q59",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame Físico Geral",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #59).\n\nA coloração amarelada da pele e mucosas decorrente da elevação da bilirrubina sérica acima de 2 a 2,5 mg/dL denomina-se:",
    "options": [
      "Icterícia",
      "Cianose",
      "Palidez cutâneo-mucosa",
      "Eritema"
    ],
    "correctIndex": 0,
    "explanation": "A icterícia fica visível clinicamente na esclera e freio da língua com bilirrubina total > 2,0-2,5 mg/dL.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q60",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #60).\n\nRuídos adventícios contínuos de tom musical agudo provocados pelo estreitamento do calibre das vias aéreas inferiores são os:",
    "options": [
      "Sibilos",
      "Estertores grossos (bolhosos)",
      "Atrito pleural",
      "Gorgolejo"
    ],
    "correctIndex": 0,
    "explanation": "Sibilos resultam do broncoespasmo, edema ou secreção afunilando os bronquíolos na expiração (ex: asma e DPOC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q61",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #61).\n\nO primeiro ruído cardíaco (B1) coincide com o início da sístole ventricular e resulta do fechamento das valvas:",
    "options": [
      "Atrioventriculares (Mitral e Tricúspide)",
      "Semilunares (Aórtica e Pulmonar)",
      "Mitral e Aórtica exclusivamente",
      "Tricúspide e Pulmonar isoladamente"
    ],
    "correctIndex": 0,
    "explanation": "B1 é produzido pelo fechamento abrupto das valvas mitral e tricúspide no início da sístole.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q62",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #62).\n\nA segunda bulha cardíaca (B2) é produzida no início da diástole pelo fechamento das valvas:",
    "options": [
      "Aórtica e Pulmonar (semilunares)",
      "Mitral e Tricúspide",
      "Aórtica e Mitral",
      "Tricúspide e Aórtica"
    ],
    "correctIndex": 0,
    "explanation": "B2 é decorrente do fechamento das valvas semilunares aórtica (A2) e pulmonar (P2).",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q63",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Sopros Cardíacos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #63).\n\nUm sopro holossistólico de alta frequência audível com maior intensidade no foco mitral e irradiação para a axila esquerda sugere:",
    "options": [
      "Insuficiência mitral",
      "Estenose aórtica",
      "Estenose mitral",
      "Insuficiência aórtica"
    ],
    "correctIndex": 0,
    "explanation": "A insuficiência mitral gera refluxo de sangue do VE para o AE durante toda a sístole, projetando sopro para a axila.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q64",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #64).\n\nRuídos adventícios descontínuos, curtos e graves semelhantes ao roçar de mechas de cabelo escutados na inspiração indicam:",
    "options": [
      "Estertores crepitantes (finos)",
      "Roncos e sibilos",
      "Estridor laríngeo",
      "Sopro tubário"
    ],
    "correctIndex": 0,
    "explanation": "Estertores finos ocorrem pela abertura súbita de alvéolos colapsados por líquido/exsudato na inspiração tardia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q65",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #65).\n\nA interrupção súbita da inspiração profunda durante a palpação profunda do ponto cístico no hipocôndrio direito é o:",
    "options": [
      "Sinal de Murphy (indicativo de colecistite aguda)",
      "Sinal de Blumberg",
      "Sinal de Rovsing",
      "Sinal de Giordano"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Murphy positivo é dor à palpação do ponto cístico com parada inspiratória, clássico da colecistite aguda.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q66",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #66).\n\nA dor à descompressão súbita da parede abdominal no ponto de McBurney na fossa ilíaca direita é o:",
    "options": [
      "Sinal de Blumberg (indicativo de peritonite/apendicite)",
      "Sinal de Murphy",
      "Sinal de Cullen",
      "Sinal de Grey-Turner"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Blumberg representa irritação peritoneal local por inflamação do apêndice cecal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q67",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #67).\n\nA palpação da fossa ilíaca esquerda desencadeando dor na fossa ilíaca direita devido ao deslocamento de gases no cólon é o:",
    "options": [
      "Sinal de Rovsing",
      "Sinal do Psoas",
      "Sinal do Obturador",
      "Sinal de Dunphy"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Rovsing ocorre na apendicite aguda quando a compressão retrógrada do cólon esquerdo distende o ceco inflamado.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q68",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Semiologia Vascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #68).\n\nA aferição da pressão arterial pelo método auscultatório identifica o aparecimento do primeiro som de Korotkoff (Fase I) como a:",
    "options": [
      "Pressão arterial sistólica (PAS)",
      "Pressão arterial diastólica (PAD)",
      "Pressão arterial média (PAM)",
      "Pressão de pulso"
    ],
    "correctIndex": 0,
    "explanation": "O aparecimento dos sons de Korotkoff (Fase I) determina a PAS, e o abafamento/desaparecimento (Fase V) determina a PAD.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q69",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame Físico Geral",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #69).\n\nA coloração amarelada da pele e mucosas decorrente da elevação da bilirrubina sérica acima de 2 a 2,5 mg/dL denomina-se:",
    "options": [
      "Icterícia",
      "Cianose",
      "Palidez cutâneo-mucosa",
      "Eritema"
    ],
    "correctIndex": 0,
    "explanation": "A icterícia fica visível clinicamente na esclera e freio da língua com bilirrubina total > 2,0-2,5 mg/dL.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q70",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #70).\n\nRuídos adventícios contínuos de tom musical agudo provocados pelo estreitamento do calibre das vias aéreas inferiores são os:",
    "options": [
      "Sibilos",
      "Estertores grossos (bolhosos)",
      "Atrito pleural",
      "Gorgolejo"
    ],
    "correctIndex": 0,
    "explanation": "Sibilos resultam do broncoespasmo, edema ou secreção afunilando os bronquíolos na expiração (ex: asma e DPOC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q71",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #71).\n\nO primeiro ruído cardíaco (B1) coincide com o início da sístole ventricular e resulta do fechamento das valvas:",
    "options": [
      "Atrioventriculares (Mitral e Tricúspide)",
      "Semilunares (Aórtica e Pulmonar)",
      "Mitral e Aórtica exclusivamente",
      "Tricúspide e Pulmonar isoladamente"
    ],
    "correctIndex": 0,
    "explanation": "B1 é produzido pelo fechamento abrupto das valvas mitral e tricúspide no início da sístole.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q72",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #72).\n\nA segunda bulha cardíaca (B2) é produzida no início da diástole pelo fechamento das valvas:",
    "options": [
      "Aórtica e Pulmonar (semilunares)",
      "Mitral e Tricúspide",
      "Aórtica e Mitral",
      "Tricúspide e Aórtica"
    ],
    "correctIndex": 0,
    "explanation": "B2 é decorrente do fechamento das valvas semilunares aórtica (A2) e pulmonar (P2).",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q73",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Sopros Cardíacos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #73).\n\nUm sopro holossistólico de alta frequência audível com maior intensidade no foco mitral e irradiação para a axila esquerda sugere:",
    "options": [
      "Insuficiência mitral",
      "Estenose aórtica",
      "Estenose mitral",
      "Insuficiência aórtica"
    ],
    "correctIndex": 0,
    "explanation": "A insuficiência mitral gera refluxo de sangue do VE para o AE durante toda a sístole, projetando sopro para a axila.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q74",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #74).\n\nRuídos adventícios descontínuos, curtos e graves semelhantes ao roçar de mechas de cabelo escutados na inspiração indicam:",
    "options": [
      "Estertores crepitantes (finos)",
      "Roncos e sibilos",
      "Estridor laríngeo",
      "Sopro tubário"
    ],
    "correctIndex": 0,
    "explanation": "Estertores finos ocorrem pela abertura súbita de alvéolos colapsados por líquido/exsudato na inspiração tardia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q75",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #75).\n\nA interrupção súbita da inspiração profunda durante a palpação profunda do ponto cístico no hipocôndrio direito é o:",
    "options": [
      "Sinal de Murphy (indicativo de colecistite aguda)",
      "Sinal de Blumberg",
      "Sinal de Rovsing",
      "Sinal de Giordano"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Murphy positivo é dor à palpação do ponto cístico com parada inspiratória, clássico da colecistite aguda.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q76",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #76).\n\nA dor à descompressão súbita da parede abdominal no ponto de McBurney na fossa ilíaca direita é o:",
    "options": [
      "Sinal de Blumberg (indicativo de peritonite/apendicite)",
      "Sinal de Murphy",
      "Sinal de Cullen",
      "Sinal de Grey-Turner"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Blumberg representa irritação peritoneal local por inflamação do apêndice cecal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q77",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #77).\n\nA palpação da fossa ilíaca esquerda desencadeando dor na fossa ilíaca direita devido ao deslocamento de gases no cólon é o:",
    "options": [
      "Sinal de Rovsing",
      "Sinal do Psoas",
      "Sinal do Obturador",
      "Sinal de Dunphy"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Rovsing ocorre na apendicite aguda quando a compressão retrógrada do cólon esquerdo distende o ceco inflamado.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q78",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Semiologia Vascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #78).\n\nA aferição da pressão arterial pelo método auscultatório identifica o aparecimento do primeiro som de Korotkoff (Fase I) como a:",
    "options": [
      "Pressão arterial sistólica (PAS)",
      "Pressão arterial diastólica (PAD)",
      "Pressão arterial média (PAM)",
      "Pressão de pulso"
    ],
    "correctIndex": 0,
    "explanation": "O aparecimento dos sons de Korotkoff (Fase I) determina a PAS, e o abafamento/desaparecimento (Fase V) determina a PAD.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q79",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame Físico Geral",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #79).\n\nA coloração amarelada da pele e mucosas decorrente da elevação da bilirrubina sérica acima de 2 a 2,5 mg/dL denomina-se:",
    "options": [
      "Icterícia",
      "Cianose",
      "Palidez cutâneo-mucosa",
      "Eritema"
    ],
    "correctIndex": 0,
    "explanation": "A icterícia fica visível clinicamente na esclera e freio da língua com bilirrubina total > 2,0-2,5 mg/dL.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q80",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #80).\n\nRuídos adventícios contínuos de tom musical agudo provocados pelo estreitamento do calibre das vias aéreas inferiores são os:",
    "options": [
      "Sibilos",
      "Estertores grossos (bolhosos)",
      "Atrito pleural",
      "Gorgolejo"
    ],
    "correctIndex": 0,
    "explanation": "Sibilos resultam do broncoespasmo, edema ou secreção afunilando os bronquíolos na expiração (ex: asma e DPOC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q81",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #81).\n\nO primeiro ruído cardíaco (B1) coincide com o início da sístole ventricular e resulta do fechamento das valvas:",
    "options": [
      "Atrioventriculares (Mitral e Tricúspide)",
      "Semilunares (Aórtica e Pulmonar)",
      "Mitral e Aórtica exclusivamente",
      "Tricúspide e Pulmonar isoladamente"
    ],
    "correctIndex": 0,
    "explanation": "B1 é produzido pelo fechamento abrupto das valvas mitral e tricúspide no início da sístole.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q82",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #82).\n\nA segunda bulha cardíaca (B2) é produzida no início da diástole pelo fechamento das valvas:",
    "options": [
      "Aórtica e Pulmonar (semilunares)",
      "Mitral e Tricúspide",
      "Aórtica e Mitral",
      "Tricúspide e Aórtica"
    ],
    "correctIndex": 0,
    "explanation": "B2 é decorrente do fechamento das valvas semilunares aórtica (A2) e pulmonar (P2).",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q83",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Sopros Cardíacos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #83).\n\nUm sopro holossistólico de alta frequência audível com maior intensidade no foco mitral e irradiação para a axila esquerda sugere:",
    "options": [
      "Insuficiência mitral",
      "Estenose aórtica",
      "Estenose mitral",
      "Insuficiência aórtica"
    ],
    "correctIndex": 0,
    "explanation": "A insuficiência mitral gera refluxo de sangue do VE para o AE durante toda a sístole, projetando sopro para a axila.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q84",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #84).\n\nRuídos adventícios descontínuos, curtos e graves semelhantes ao roçar de mechas de cabelo escutados na inspiração indicam:",
    "options": [
      "Estertores crepitantes (finos)",
      "Roncos e sibilos",
      "Estridor laríngeo",
      "Sopro tubário"
    ],
    "correctIndex": 0,
    "explanation": "Estertores finos ocorrem pela abertura súbita de alvéolos colapsados por líquido/exsudato na inspiração tardia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q85",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #85).\n\nA interrupção súbita da inspiração profunda durante a palpação profunda do ponto cístico no hipocôndrio direito é o:",
    "options": [
      "Sinal de Murphy (indicativo de colecistite aguda)",
      "Sinal de Blumberg",
      "Sinal de Rovsing",
      "Sinal de Giordano"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Murphy positivo é dor à palpação do ponto cístico com parada inspiratória, clássico da colecistite aguda.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q86",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #86).\n\nA dor à descompressão súbita da parede abdominal no ponto de McBurney na fossa ilíaca direita é o:",
    "options": [
      "Sinal de Blumberg (indicativo de peritonite/apendicite)",
      "Sinal de Murphy",
      "Sinal de Cullen",
      "Sinal de Grey-Turner"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Blumberg representa irritação peritoneal local por inflamação do apêndice cecal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q87",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #87).\n\nA palpação da fossa ilíaca esquerda desencadeando dor na fossa ilíaca direita devido ao deslocamento de gases no cólon é o:",
    "options": [
      "Sinal de Rovsing",
      "Sinal do Psoas",
      "Sinal do Obturador",
      "Sinal de Dunphy"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Rovsing ocorre na apendicite aguda quando a compressão retrógrada do cólon esquerdo distende o ceco inflamado.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q88",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Semiologia Vascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #88).\n\nA aferição da pressão arterial pelo método auscultatório identifica o aparecimento do primeiro som de Korotkoff (Fase I) como a:",
    "options": [
      "Pressão arterial sistólica (PAS)",
      "Pressão arterial diastólica (PAD)",
      "Pressão arterial média (PAM)",
      "Pressão de pulso"
    ],
    "correctIndex": 0,
    "explanation": "O aparecimento dos sons de Korotkoff (Fase I) determina a PAS, e o abafamento/desaparecimento (Fase V) determina a PAD.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q89",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame Físico Geral",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #89).\n\nA coloração amarelada da pele e mucosas decorrente da elevação da bilirrubina sérica acima de 2 a 2,5 mg/dL denomina-se:",
    "options": [
      "Icterícia",
      "Cianose",
      "Palidez cutâneo-mucosa",
      "Eritema"
    ],
    "correctIndex": 0,
    "explanation": "A icterícia fica visível clinicamente na esclera e freio da língua com bilirrubina total > 2,0-2,5 mg/dL.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q90",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #90).\n\nRuídos adventícios contínuos de tom musical agudo provocados pelo estreitamento do calibre das vias aéreas inferiores são os:",
    "options": [
      "Sibilos",
      "Estertores grossos (bolhosos)",
      "Atrito pleural",
      "Gorgolejo"
    ],
    "correctIndex": 0,
    "explanation": "Sibilos resultam do broncoespasmo, edema ou secreção afunilando os bronquíolos na expiração (ex: asma e DPOC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q91",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #91).\n\nO primeiro ruído cardíaco (B1) coincide com o início da sístole ventricular e resulta do fechamento das valvas:",
    "options": [
      "Atrioventriculares (Mitral e Tricúspide)",
      "Semilunares (Aórtica e Pulmonar)",
      "Mitral e Aórtica exclusivamente",
      "Tricúspide e Pulmonar isoladamente"
    ],
    "correctIndex": 0,
    "explanation": "B1 é produzido pelo fechamento abrupto das valvas mitral e tricúspide no início da sístole.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q92",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Cardíaca",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #92).\n\nA segunda bulha cardíaca (B2) é produzida no início da diástole pelo fechamento das valvas:",
    "options": [
      "Aórtica e Pulmonar (semilunares)",
      "Mitral e Tricúspide",
      "Aórtica e Mitral",
      "Tricúspide e Aórtica"
    ],
    "correctIndex": 0,
    "explanation": "B2 é decorrente do fechamento das valvas semilunares aórtica (A2) e pulmonar (P2).",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q93",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Sopros Cardíacos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #93).\n\nUm sopro holossistólico de alta frequência audível com maior intensidade no foco mitral e irradiação para a axila esquerda sugere:",
    "options": [
      "Insuficiência mitral",
      "Estenose aórtica",
      "Estenose mitral",
      "Insuficiência aórtica"
    ],
    "correctIndex": 0,
    "explanation": "A insuficiência mitral gera refluxo de sangue do VE para o AE durante toda a sístole, projetando sopro para a axila.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q94",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #94).\n\nRuídos adventícios descontínuos, curtos e graves semelhantes ao roçar de mechas de cabelo escutados na inspiração indicam:",
    "options": [
      "Estertores crepitantes (finos)",
      "Roncos e sibilos",
      "Estridor laríngeo",
      "Sopro tubário"
    ],
    "correctIndex": 0,
    "explanation": "Estertores finos ocorrem pela abertura súbita de alvéolos colapsados por líquido/exsudato na inspiração tardia.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q95",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #95).\n\nA interrupção súbita da inspiração profunda durante a palpação profunda do ponto cístico no hipocôndrio direito é o:",
    "options": [
      "Sinal de Murphy (indicativo de colecistite aguda)",
      "Sinal de Blumberg",
      "Sinal de Rovsing",
      "Sinal de Giordano"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Murphy positivo é dor à palpação do ponto cístico com parada inspiratória, clássico da colecistite aguda.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q96",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #96).\n\nA dor à descompressão súbita da parede abdominal no ponto de McBurney na fossa ilíaca direita é o:",
    "options": [
      "Sinal de Blumberg (indicativo de peritonite/apendicite)",
      "Sinal de Murphy",
      "Sinal de Cullen",
      "Sinal de Grey-Turner"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Blumberg representa irritação peritoneal local por inflamação do apêndice cecal.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q97",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame do Abdome",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #97).\n\nA palpação da fossa ilíaca esquerda desencadeando dor na fossa ilíaca direita devido ao deslocamento de gases no cólon é o:",
    "options": [
      "Sinal de Rovsing",
      "Sinal do Psoas",
      "Sinal do Obturador",
      "Sinal de Dunphy"
    ],
    "correctIndex": 0,
    "explanation": "O sinal de Rovsing ocorre na apendicite aguda quando a compressão retrógrada do cólon esquerdo distende o ceco inflamado.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q98",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Semiologia Vascular",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #98).\n\nA aferição da pressão arterial pelo método auscultatório identifica o aparecimento do primeiro som de Korotkoff (Fase I) como a:",
    "options": [
      "Pressão arterial sistólica (PAS)",
      "Pressão arterial diastólica (PAD)",
      "Pressão arterial média (PAM)",
      "Pressão de pulso"
    ],
    "correctIndex": 0,
    "explanation": "O aparecimento dos sons de Korotkoff (Fase I) determina a PAS, e o abafamento/desaparecimento (Fase V) determina a PAD.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q99",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Exame Físico Geral",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #99).\n\nA coloração amarelada da pele e mucosas decorrente da elevação da bilirrubina sérica acima de 2 a 2,5 mg/dL denomina-se:",
    "options": [
      "Icterícia",
      "Cianose",
      "Palidez cutâneo-mucosa",
      "Eritema"
    ],
    "correctIndex": 0,
    "explanation": "A icterícia fica visível clinicamente na esclera e freio da língua com bilirrubina total > 2,0-2,5 mg/dL.",
    "difficulty": "medium"
  },
  {
    "id": "basico_semiologia_q100",
    "cycle": "Ciclo Básico",
    "subject": "Semiologia",
    "subSubject": "Ausculta Pulmonar",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #100).\n\nRuídos adventícios contínuos de tom musical agudo provocados pelo estreitamento do calibre das vias aéreas inferiores são os:",
    "options": [
      "Sibilos",
      "Estertores grossos (bolhosos)",
      "Atrito pleural",
      "Gorgolejo"
    ],
    "correctIndex": 0,
    "explanation": "Sibilos resultam do broncoespasmo, edema ou secreção afunilando os bronquíolos na expiração (ex: asma e DPOC).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q1",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #1).\n\nO número de casos novos de uma doença que surgem em uma população em risco durante um período específico mede a:",
    "options": [
      "Incidência",
      "Prevalência",
      "Letalidade",
      "Mortalidade proporcional"
    ],
    "correctIndex": 0,
    "explanation": "Incidência quantifica a velocidade de surgimento de novos casos na população sob risco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q2",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #2).\n\nA proporção do número total de casos (novos e antigos) existentes de uma doença em um ponto determinado no tempo é a:",
    "options": [
      "Prevalência",
      "Incidência acumulada",
      "Densidade de incidência",
      "Taxa de ataque"
    ],
    "correctIndex": 0,
    "explanation": "Prevalência mede a carga total da doença (casos acumulados) em um momento específico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q3",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #3).\n\nUm estudo epidemiológico observacional analítico que seleciona doentes (casos) e não doentes (controles) investigando retrospectivamente a exposição é o:",
    "options": [
      "Estudo caso-controle",
      "Estudo de coorte",
      "Estudo transversal (inquérito)",
      "Ensaio clínico randomizado"
    ],
    "correctIndex": 0,
    "explanation": "Estudos caso-controle partem do desfecho (doença) para investigar o passado de exposição (medida de associação = Odds Ratio).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q4",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #4).\n\nUm estudo que acompanha indivíduos expostos e não expostos ao longo do tempo avaliando o surgimento do desfecho é o:",
    "options": [
      "Estudo de coorte (prospectivo ou retrospectivo)",
      "Estudo caso-controle",
      "Estudo ecológico",
      "Série de casos"
    ],
    "correctIndex": 0,
    "explanation": "Estudos de coorte partem da exposição e acompanham os grupos no tempo para medir a incidência (medida de associação = Risco Relativo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q5",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #5).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente doentes entre todos os doentes é a:",
    "options": [
      "Sensibilidade",
      "Especificidade",
      "Valor preditivo positivo",
      "Acurácia global"
    ],
    "correctIndex": 0,
    "explanation": "Sensibilidade = VP / (VP + FN). Mede a proporção de testes positivos entre os doentes reais.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q6",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #6).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente sadios entre todos os não doentes é a:",
    "options": [
      "Especificidade",
      "Sensibilidade",
      "Valor preditivo negativo",
      "Razão de verossimilhança positiva"
    ],
    "correctIndex": 0,
    "explanation": "Especificidade = VN / (VN + FP). Mede a proporção de testes negativos entre os indivíduos sadios.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q7",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #7).\n\nA probabilidade de um indivíduo com teste positivo ter realmente a doença é o:",
    "options": [
      "Valor Preditivo Positivo (VPP)",
      "Valor Preditivo Negativo (VPN)",
      "Sensibilidade do teste",
      "Risco atribuível"
    ],
    "correctIndex": 0,
    "explanation": "O VPP depende fortemente da prevalência da doença na população testada.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q8",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Associação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #8).\n\nA razão entre a incidência nos expostos e a incidência nos não expostos em um estudo de coorte é o:",
    "options": [
      "Risco Relativo (RR)",
      "Razão de Chances (Odds Ratio)",
      "Risco Atribuível no População",
      "Odds do Desfecho"
    ],
    "correctIndex": 0,
    "explanation": "Risco Relativo (RR) = Incidência nos Expostos / Incidência nos Não Expostos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q9",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Vigilância Epidemiológica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #9).\n\nO conjunto de ações que proporciona o conhecimento e acompanhamento de doenças para adoção de medidas de controle é a:",
    "options": [
      "Vigilância epidemiológica",
      "Atenção terciária hospitalar",
      "Auditoria médica",
      "Acreditação sanitária"
    ],
    "correctIndex": 0,
    "explanation": "A Vigilância Epidemiológica coleta, analisa e dissemina dados de saúde para intervenções coletivas em tempo oportuno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q10",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Níveis de Prevenção",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #10).\n\nMedidas de imunização (vacinas) e orientação nutricional populacional enquadram-se na:",
    "options": [
      "Prevenção primária",
      "Prevenção secundária",
      "Prevenção terciária",
      "Prevenção quaternária"
    ],
    "correctIndex": 0,
    "explanation": "Prevenção primária evita o aparecimento da doença, atuando sobre os fatores de risco antes do desfecho.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q11",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #11).\n\nO número de casos novos de uma doença que surgem em uma população em risco durante um período específico mede a:",
    "options": [
      "Incidência",
      "Prevalência",
      "Letalidade",
      "Mortalidade proporcional"
    ],
    "correctIndex": 0,
    "explanation": "Incidência quantifica a velocidade de surgimento de novos casos na população sob risco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q12",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #12).\n\nA proporção do número total de casos (novos e antigos) existentes de uma doença em um ponto determinado no tempo é a:",
    "options": [
      "Prevalência",
      "Incidência acumulada",
      "Densidade de incidência",
      "Taxa de ataque"
    ],
    "correctIndex": 0,
    "explanation": "Prevalência mede a carga total da doença (casos acumulados) em um momento específico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q13",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #13).\n\nUm estudo epidemiológico observacional analítico que seleciona doentes (casos) e não doentes (controles) investigando retrospectivamente a exposição é o:",
    "options": [
      "Estudo caso-controle",
      "Estudo de coorte",
      "Estudo transversal (inquérito)",
      "Ensaio clínico randomizado"
    ],
    "correctIndex": 0,
    "explanation": "Estudos caso-controle partem do desfecho (doença) para investigar o passado de exposição (medida de associação = Odds Ratio).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q14",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #14).\n\nUm estudo que acompanha indivíduos expostos e não expostos ao longo do tempo avaliando o surgimento do desfecho é o:",
    "options": [
      "Estudo de coorte (prospectivo ou retrospectivo)",
      "Estudo caso-controle",
      "Estudo ecológico",
      "Série de casos"
    ],
    "correctIndex": 0,
    "explanation": "Estudos de coorte partem da exposição e acompanham os grupos no tempo para medir a incidência (medida de associação = Risco Relativo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q15",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #15).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente doentes entre todos os doentes é a:",
    "options": [
      "Sensibilidade",
      "Especificidade",
      "Valor preditivo positivo",
      "Acurácia global"
    ],
    "correctIndex": 0,
    "explanation": "Sensibilidade = VP / (VP + FN). Mede a proporção de testes positivos entre os doentes reais.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q16",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #16).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente sadios entre todos os não doentes é a:",
    "options": [
      "Especificidade",
      "Sensibilidade",
      "Valor preditivo negativo",
      "Razão de verossimilhança positiva"
    ],
    "correctIndex": 0,
    "explanation": "Especificidade = VN / (VN + FP). Mede a proporção de testes negativos entre os indivíduos sadios.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q17",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #17).\n\nA probabilidade de um indivíduo com teste positivo ter realmente a doença é o:",
    "options": [
      "Valor Preditivo Positivo (VPP)",
      "Valor Preditivo Negativo (VPN)",
      "Sensibilidade do teste",
      "Risco atribuível"
    ],
    "correctIndex": 0,
    "explanation": "O VPP depende fortemente da prevalência da doença na população testada.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q18",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Associação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #18).\n\nA razão entre a incidência nos expostos e a incidência nos não expostos em um estudo de coorte é o:",
    "options": [
      "Risco Relativo (RR)",
      "Razão de Chances (Odds Ratio)",
      "Risco Atribuível no População",
      "Odds do Desfecho"
    ],
    "correctIndex": 0,
    "explanation": "Risco Relativo (RR) = Incidência nos Expostos / Incidência nos Não Expostos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q19",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Vigilância Epidemiológica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #19).\n\nO conjunto de ações que proporciona o conhecimento e acompanhamento de doenças para adoção de medidas de controle é a:",
    "options": [
      "Vigilância epidemiológica",
      "Atenção terciária hospitalar",
      "Auditoria médica",
      "Acreditação sanitária"
    ],
    "correctIndex": 0,
    "explanation": "A Vigilância Epidemiológica coleta, analisa e dissemina dados de saúde para intervenções coletivas em tempo oportuno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q20",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Níveis de Prevenção",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #20).\n\nMedidas de imunização (vacinas) e orientação nutricional populacional enquadram-se na:",
    "options": [
      "Prevenção primária",
      "Prevenção secundária",
      "Prevenção terciária",
      "Prevenção quaternária"
    ],
    "correctIndex": 0,
    "explanation": "Prevenção primária evita o aparecimento da doença, atuando sobre os fatores de risco antes do desfecho.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q21",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #21).\n\nO número de casos novos de uma doença que surgem em uma população em risco durante um período específico mede a:",
    "options": [
      "Incidência",
      "Prevalência",
      "Letalidade",
      "Mortalidade proporcional"
    ],
    "correctIndex": 0,
    "explanation": "Incidência quantifica a velocidade de surgimento de novos casos na população sob risco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q22",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #22).\n\nA proporção do número total de casos (novos e antigos) existentes de uma doença em um ponto determinado no tempo é a:",
    "options": [
      "Prevalência",
      "Incidência acumulada",
      "Densidade de incidência",
      "Taxa de ataque"
    ],
    "correctIndex": 0,
    "explanation": "Prevalência mede a carga total da doença (casos acumulados) em um momento específico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q23",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #23).\n\nUm estudo epidemiológico observacional analítico que seleciona doentes (casos) e não doentes (controles) investigando retrospectivamente a exposição é o:",
    "options": [
      "Estudo caso-controle",
      "Estudo de coorte",
      "Estudo transversal (inquérito)",
      "Ensaio clínico randomizado"
    ],
    "correctIndex": 0,
    "explanation": "Estudos caso-controle partem do desfecho (doença) para investigar o passado de exposição (medida de associação = Odds Ratio).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q24",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #24).\n\nUm estudo que acompanha indivíduos expostos e não expostos ao longo do tempo avaliando o surgimento do desfecho é o:",
    "options": [
      "Estudo de coorte (prospectivo ou retrospectivo)",
      "Estudo caso-controle",
      "Estudo ecológico",
      "Série de casos"
    ],
    "correctIndex": 0,
    "explanation": "Estudos de coorte partem da exposição e acompanham os grupos no tempo para medir a incidência (medida de associação = Risco Relativo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q25",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #25).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente doentes entre todos os doentes é a:",
    "options": [
      "Sensibilidade",
      "Especificidade",
      "Valor preditivo positivo",
      "Acurácia global"
    ],
    "correctIndex": 0,
    "explanation": "Sensibilidade = VP / (VP + FN). Mede a proporção de testes positivos entre os doentes reais.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q26",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #26).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente sadios entre todos os não doentes é a:",
    "options": [
      "Especificidade",
      "Sensibilidade",
      "Valor preditivo negativo",
      "Razão de verossimilhança positiva"
    ],
    "correctIndex": 0,
    "explanation": "Especificidade = VN / (VN + FP). Mede a proporção de testes negativos entre os indivíduos sadios.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q27",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #27).\n\nA probabilidade de um indivíduo com teste positivo ter realmente a doença é o:",
    "options": [
      "Valor Preditivo Positivo (VPP)",
      "Valor Preditivo Negativo (VPN)",
      "Sensibilidade do teste",
      "Risco atribuível"
    ],
    "correctIndex": 0,
    "explanation": "O VPP depende fortemente da prevalência da doença na população testada.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q28",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Associação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #28).\n\nA razão entre a incidência nos expostos e a incidência nos não expostos em um estudo de coorte é o:",
    "options": [
      "Risco Relativo (RR)",
      "Razão de Chances (Odds Ratio)",
      "Risco Atribuível no População",
      "Odds do Desfecho"
    ],
    "correctIndex": 0,
    "explanation": "Risco Relativo (RR) = Incidência nos Expostos / Incidência nos Não Expostos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q29",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Vigilância Epidemiológica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #29).\n\nO conjunto de ações que proporciona o conhecimento e acompanhamento de doenças para adoção de medidas de controle é a:",
    "options": [
      "Vigilância epidemiológica",
      "Atenção terciária hospitalar",
      "Auditoria médica",
      "Acreditação sanitária"
    ],
    "correctIndex": 0,
    "explanation": "A Vigilância Epidemiológica coleta, analisa e dissemina dados de saúde para intervenções coletivas em tempo oportuno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q30",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Níveis de Prevenção",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #30).\n\nMedidas de imunização (vacinas) e orientação nutricional populacional enquadram-se na:",
    "options": [
      "Prevenção primária",
      "Prevenção secundária",
      "Prevenção terciária",
      "Prevenção quaternária"
    ],
    "correctIndex": 0,
    "explanation": "Prevenção primária evita o aparecimento da doença, atuando sobre os fatores de risco antes do desfecho.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q31",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #31).\n\nO número de casos novos de uma doença que surgem em uma população em risco durante um período específico mede a:",
    "options": [
      "Incidência",
      "Prevalência",
      "Letalidade",
      "Mortalidade proporcional"
    ],
    "correctIndex": 0,
    "explanation": "Incidência quantifica a velocidade de surgimento de novos casos na população sob risco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q32",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #32).\n\nA proporção do número total de casos (novos e antigos) existentes de uma doença em um ponto determinado no tempo é a:",
    "options": [
      "Prevalência",
      "Incidência acumulada",
      "Densidade de incidência",
      "Taxa de ataque"
    ],
    "correctIndex": 0,
    "explanation": "Prevalência mede a carga total da doença (casos acumulados) em um momento específico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q33",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #33).\n\nUm estudo epidemiológico observacional analítico que seleciona doentes (casos) e não doentes (controles) investigando retrospectivamente a exposição é o:",
    "options": [
      "Estudo caso-controle",
      "Estudo de coorte",
      "Estudo transversal (inquérito)",
      "Ensaio clínico randomizado"
    ],
    "correctIndex": 0,
    "explanation": "Estudos caso-controle partem do desfecho (doença) para investigar o passado de exposição (medida de associação = Odds Ratio).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q34",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #34).\n\nUm estudo que acompanha indivíduos expostos e não expostos ao longo do tempo avaliando o surgimento do desfecho é o:",
    "options": [
      "Estudo de coorte (prospectivo ou retrospectivo)",
      "Estudo caso-controle",
      "Estudo ecológico",
      "Série de casos"
    ],
    "correctIndex": 0,
    "explanation": "Estudos de coorte partem da exposição e acompanham os grupos no tempo para medir a incidência (medida de associação = Risco Relativo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q35",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #35).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente doentes entre todos os doentes é a:",
    "options": [
      "Sensibilidade",
      "Especificidade",
      "Valor preditivo positivo",
      "Acurácia global"
    ],
    "correctIndex": 0,
    "explanation": "Sensibilidade = VP / (VP + FN). Mede a proporção de testes positivos entre os doentes reais.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q36",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #36).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente sadios entre todos os não doentes é a:",
    "options": [
      "Especificidade",
      "Sensibilidade",
      "Valor preditivo negativo",
      "Razão de verossimilhança positiva"
    ],
    "correctIndex": 0,
    "explanation": "Especificidade = VN / (VN + FP). Mede a proporção de testes negativos entre os indivíduos sadios.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q37",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #37).\n\nA probabilidade de um indivíduo com teste positivo ter realmente a doença é o:",
    "options": [
      "Valor Preditivo Positivo (VPP)",
      "Valor Preditivo Negativo (VPN)",
      "Sensibilidade do teste",
      "Risco atribuível"
    ],
    "correctIndex": 0,
    "explanation": "O VPP depende fortemente da prevalência da doença na população testada.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q38",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Associação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #38).\n\nA razão entre a incidência nos expostos e a incidência nos não expostos em um estudo de coorte é o:",
    "options": [
      "Risco Relativo (RR)",
      "Razão de Chances (Odds Ratio)",
      "Risco Atribuível no População",
      "Odds do Desfecho"
    ],
    "correctIndex": 0,
    "explanation": "Risco Relativo (RR) = Incidência nos Expostos / Incidência nos Não Expostos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q39",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Vigilância Epidemiológica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #39).\n\nO conjunto de ações que proporciona o conhecimento e acompanhamento de doenças para adoção de medidas de controle é a:",
    "options": [
      "Vigilância epidemiológica",
      "Atenção terciária hospitalar",
      "Auditoria médica",
      "Acreditação sanitária"
    ],
    "correctIndex": 0,
    "explanation": "A Vigilância Epidemiológica coleta, analisa e dissemina dados de saúde para intervenções coletivas em tempo oportuno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q40",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Níveis de Prevenção",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #40).\n\nMedidas de imunização (vacinas) e orientação nutricional populacional enquadram-se na:",
    "options": [
      "Prevenção primária",
      "Prevenção secundária",
      "Prevenção terciária",
      "Prevenção quaternária"
    ],
    "correctIndex": 0,
    "explanation": "Prevenção primária evita o aparecimento da doença, atuando sobre os fatores de risco antes do desfecho.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q41",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #41).\n\nO número de casos novos de uma doença que surgem em uma população em risco durante um período específico mede a:",
    "options": [
      "Incidência",
      "Prevalência",
      "Letalidade",
      "Mortalidade proporcional"
    ],
    "correctIndex": 0,
    "explanation": "Incidência quantifica a velocidade de surgimento de novos casos na população sob risco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q42",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #42).\n\nA proporção do número total de casos (novos e antigos) existentes de uma doença em um ponto determinado no tempo é a:",
    "options": [
      "Prevalência",
      "Incidência acumulada",
      "Densidade de incidência",
      "Taxa de ataque"
    ],
    "correctIndex": 0,
    "explanation": "Prevalência mede a carga total da doença (casos acumulados) em um momento específico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q43",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #43).\n\nUm estudo epidemiológico observacional analítico que seleciona doentes (casos) e não doentes (controles) investigando retrospectivamente a exposição é o:",
    "options": [
      "Estudo caso-controle",
      "Estudo de coorte",
      "Estudo transversal (inquérito)",
      "Ensaio clínico randomizado"
    ],
    "correctIndex": 0,
    "explanation": "Estudos caso-controle partem do desfecho (doença) para investigar o passado de exposição (medida de associação = Odds Ratio).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q44",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #44).\n\nUm estudo que acompanha indivíduos expostos e não expostos ao longo do tempo avaliando o surgimento do desfecho é o:",
    "options": [
      "Estudo de coorte (prospectivo ou retrospectivo)",
      "Estudo caso-controle",
      "Estudo ecológico",
      "Série de casos"
    ],
    "correctIndex": 0,
    "explanation": "Estudos de coorte partem da exposição e acompanham os grupos no tempo para medir a incidência (medida de associação = Risco Relativo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q45",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #45).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente doentes entre todos os doentes é a:",
    "options": [
      "Sensibilidade",
      "Especificidade",
      "Valor preditivo positivo",
      "Acurácia global"
    ],
    "correctIndex": 0,
    "explanation": "Sensibilidade = VP / (VP + FN). Mede a proporção de testes positivos entre os doentes reais.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q46",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #46).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente sadios entre todos os não doentes é a:",
    "options": [
      "Especificidade",
      "Sensibilidade",
      "Valor preditivo negativo",
      "Razão de verossimilhança positiva"
    ],
    "correctIndex": 0,
    "explanation": "Especificidade = VN / (VN + FP). Mede a proporção de testes negativos entre os indivíduos sadios.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q47",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #47).\n\nA probabilidade de um indivíduo com teste positivo ter realmente a doença é o:",
    "options": [
      "Valor Preditivo Positivo (VPP)",
      "Valor Preditivo Negativo (VPN)",
      "Sensibilidade do teste",
      "Risco atribuível"
    ],
    "correctIndex": 0,
    "explanation": "O VPP depende fortemente da prevalência da doença na população testada.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q48",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Associação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #48).\n\nA razão entre a incidência nos expostos e a incidência nos não expostos em um estudo de coorte é o:",
    "options": [
      "Risco Relativo (RR)",
      "Razão de Chances (Odds Ratio)",
      "Risco Atribuível no População",
      "Odds do Desfecho"
    ],
    "correctIndex": 0,
    "explanation": "Risco Relativo (RR) = Incidência nos Expostos / Incidência nos Não Expostos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q49",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Vigilância Epidemiológica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #49).\n\nO conjunto de ações que proporciona o conhecimento e acompanhamento de doenças para adoção de medidas de controle é a:",
    "options": [
      "Vigilância epidemiológica",
      "Atenção terciária hospitalar",
      "Auditoria médica",
      "Acreditação sanitária"
    ],
    "correctIndex": 0,
    "explanation": "A Vigilância Epidemiológica coleta, analisa e dissemina dados de saúde para intervenções coletivas em tempo oportuno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q50",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Níveis de Prevenção",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #50).\n\nMedidas de imunização (vacinas) e orientação nutricional populacional enquadram-se na:",
    "options": [
      "Prevenção primária",
      "Prevenção secundária",
      "Prevenção terciária",
      "Prevenção quaternária"
    ],
    "correctIndex": 0,
    "explanation": "Prevenção primária evita o aparecimento da doença, atuando sobre os fatores de risco antes do desfecho.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q51",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #51).\n\nO número de casos novos de uma doença que surgem em uma população em risco durante um período específico mede a:",
    "options": [
      "Incidência",
      "Prevalência",
      "Letalidade",
      "Mortalidade proporcional"
    ],
    "correctIndex": 0,
    "explanation": "Incidência quantifica a velocidade de surgimento de novos casos na população sob risco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q52",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #52).\n\nA proporção do número total de casos (novos e antigos) existentes de uma doença em um ponto determinado no tempo é a:",
    "options": [
      "Prevalência",
      "Incidência acumulada",
      "Densidade de incidência",
      "Taxa de ataque"
    ],
    "correctIndex": 0,
    "explanation": "Prevalência mede a carga total da doença (casos acumulados) em um momento específico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q53",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #53).\n\nUm estudo epidemiológico observacional analítico que seleciona doentes (casos) e não doentes (controles) investigando retrospectivamente a exposição é o:",
    "options": [
      "Estudo caso-controle",
      "Estudo de coorte",
      "Estudo transversal (inquérito)",
      "Ensaio clínico randomizado"
    ],
    "correctIndex": 0,
    "explanation": "Estudos caso-controle partem do desfecho (doença) para investigar o passado de exposição (medida de associação = Odds Ratio).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q54",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #54).\n\nUm estudo que acompanha indivíduos expostos e não expostos ao longo do tempo avaliando o surgimento do desfecho é o:",
    "options": [
      "Estudo de coorte (prospectivo ou retrospectivo)",
      "Estudo caso-controle",
      "Estudo ecológico",
      "Série de casos"
    ],
    "correctIndex": 0,
    "explanation": "Estudos de coorte partem da exposição e acompanham os grupos no tempo para medir a incidência (medida de associação = Risco Relativo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q55",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #55).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente doentes entre todos os doentes é a:",
    "options": [
      "Sensibilidade",
      "Especificidade",
      "Valor preditivo positivo",
      "Acurácia global"
    ],
    "correctIndex": 0,
    "explanation": "Sensibilidade = VP / (VP + FN). Mede a proporção de testes positivos entre os doentes reais.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q56",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #56).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente sadios entre todos os não doentes é a:",
    "options": [
      "Especificidade",
      "Sensibilidade",
      "Valor preditivo negativo",
      "Razão de verossimilhança positiva"
    ],
    "correctIndex": 0,
    "explanation": "Especificidade = VN / (VN + FP). Mede a proporção de testes negativos entre os indivíduos sadios.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q57",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #57).\n\nA probabilidade de um indivíduo com teste positivo ter realmente a doença é o:",
    "options": [
      "Valor Preditivo Positivo (VPP)",
      "Valor Preditivo Negativo (VPN)",
      "Sensibilidade do teste",
      "Risco atribuível"
    ],
    "correctIndex": 0,
    "explanation": "O VPP depende fortemente da prevalência da doença na população testada.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q58",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Associação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #58).\n\nA razão entre a incidência nos expostos e a incidência nos não expostos em um estudo de coorte é o:",
    "options": [
      "Risco Relativo (RR)",
      "Razão de Chances (Odds Ratio)",
      "Risco Atribuível no População",
      "Odds do Desfecho"
    ],
    "correctIndex": 0,
    "explanation": "Risco Relativo (RR) = Incidência nos Expostos / Incidência nos Não Expostos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q59",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Vigilância Epidemiológica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #59).\n\nO conjunto de ações que proporciona o conhecimento e acompanhamento de doenças para adoção de medidas de controle é a:",
    "options": [
      "Vigilância epidemiológica",
      "Atenção terciária hospitalar",
      "Auditoria médica",
      "Acreditação sanitária"
    ],
    "correctIndex": 0,
    "explanation": "A Vigilância Epidemiológica coleta, analisa e dissemina dados de saúde para intervenções coletivas em tempo oportuno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q60",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Níveis de Prevenção",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #60).\n\nMedidas de imunização (vacinas) e orientação nutricional populacional enquadram-se na:",
    "options": [
      "Prevenção primária",
      "Prevenção secundária",
      "Prevenção terciária",
      "Prevenção quaternária"
    ],
    "correctIndex": 0,
    "explanation": "Prevenção primária evita o aparecimento da doença, atuando sobre os fatores de risco antes do desfecho.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q61",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #61).\n\nO número de casos novos de uma doença que surgem em uma população em risco durante um período específico mede a:",
    "options": [
      "Incidência",
      "Prevalência",
      "Letalidade",
      "Mortalidade proporcional"
    ],
    "correctIndex": 0,
    "explanation": "Incidência quantifica a velocidade de surgimento de novos casos na população sob risco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q62",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #62).\n\nA proporção do número total de casos (novos e antigos) existentes de uma doença em um ponto determinado no tempo é a:",
    "options": [
      "Prevalência",
      "Incidência acumulada",
      "Densidade de incidência",
      "Taxa de ataque"
    ],
    "correctIndex": 0,
    "explanation": "Prevalência mede a carga total da doença (casos acumulados) em um momento específico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q63",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #63).\n\nUm estudo epidemiológico observacional analítico que seleciona doentes (casos) e não doentes (controles) investigando retrospectivamente a exposição é o:",
    "options": [
      "Estudo caso-controle",
      "Estudo de coorte",
      "Estudo transversal (inquérito)",
      "Ensaio clínico randomizado"
    ],
    "correctIndex": 0,
    "explanation": "Estudos caso-controle partem do desfecho (doença) para investigar o passado de exposição (medida de associação = Odds Ratio).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q64",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #64).\n\nUm estudo que acompanha indivíduos expostos e não expostos ao longo do tempo avaliando o surgimento do desfecho é o:",
    "options": [
      "Estudo de coorte (prospectivo ou retrospectivo)",
      "Estudo caso-controle",
      "Estudo ecológico",
      "Série de casos"
    ],
    "correctIndex": 0,
    "explanation": "Estudos de coorte partem da exposição e acompanham os grupos no tempo para medir a incidência (medida de associação = Risco Relativo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q65",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #65).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente doentes entre todos os doentes é a:",
    "options": [
      "Sensibilidade",
      "Especificidade",
      "Valor preditivo positivo",
      "Acurácia global"
    ],
    "correctIndex": 0,
    "explanation": "Sensibilidade = VP / (VP + FN). Mede a proporção de testes positivos entre os doentes reais.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q66",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #66).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente sadios entre todos os não doentes é a:",
    "options": [
      "Especificidade",
      "Sensibilidade",
      "Valor preditivo negativo",
      "Razão de verossimilhança positiva"
    ],
    "correctIndex": 0,
    "explanation": "Especificidade = VN / (VN + FP). Mede a proporção de testes negativos entre os indivíduos sadios.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q67",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #67).\n\nA probabilidade de um indivíduo com teste positivo ter realmente a doença é o:",
    "options": [
      "Valor Preditivo Positivo (VPP)",
      "Valor Preditivo Negativo (VPN)",
      "Sensibilidade do teste",
      "Risco atribuível"
    ],
    "correctIndex": 0,
    "explanation": "O VPP depende fortemente da prevalência da doença na população testada.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q68",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Associação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #68).\n\nA razão entre a incidência nos expostos e a incidência nos não expostos em um estudo de coorte é o:",
    "options": [
      "Risco Relativo (RR)",
      "Razão de Chances (Odds Ratio)",
      "Risco Atribuível no População",
      "Odds do Desfecho"
    ],
    "correctIndex": 0,
    "explanation": "Risco Relativo (RR) = Incidência nos Expostos / Incidência nos Não Expostos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q69",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Vigilância Epidemiológica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #69).\n\nO conjunto de ações que proporciona o conhecimento e acompanhamento de doenças para adoção de medidas de controle é a:",
    "options": [
      "Vigilância epidemiológica",
      "Atenção terciária hospitalar",
      "Auditoria médica",
      "Acreditação sanitária"
    ],
    "correctIndex": 0,
    "explanation": "A Vigilância Epidemiológica coleta, analisa e dissemina dados de saúde para intervenções coletivas em tempo oportuno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q70",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Níveis de Prevenção",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #70).\n\nMedidas de imunização (vacinas) e orientação nutricional populacional enquadram-se na:",
    "options": [
      "Prevenção primária",
      "Prevenção secundária",
      "Prevenção terciária",
      "Prevenção quaternária"
    ],
    "correctIndex": 0,
    "explanation": "Prevenção primária evita o aparecimento da doença, atuando sobre os fatores de risco antes do desfecho.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q71",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #71).\n\nO número de casos novos de uma doença que surgem em uma população em risco durante um período específico mede a:",
    "options": [
      "Incidência",
      "Prevalência",
      "Letalidade",
      "Mortalidade proporcional"
    ],
    "correctIndex": 0,
    "explanation": "Incidência quantifica a velocidade de surgimento de novos casos na população sob risco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q72",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #72).\n\nA proporção do número total de casos (novos e antigos) existentes de uma doença em um ponto determinado no tempo é a:",
    "options": [
      "Prevalência",
      "Incidência acumulada",
      "Densidade de incidência",
      "Taxa de ataque"
    ],
    "correctIndex": 0,
    "explanation": "Prevalência mede a carga total da doença (casos acumulados) em um momento específico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q73",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #73).\n\nUm estudo epidemiológico observacional analítico que seleciona doentes (casos) e não doentes (controles) investigando retrospectivamente a exposição é o:",
    "options": [
      "Estudo caso-controle",
      "Estudo de coorte",
      "Estudo transversal (inquérito)",
      "Ensaio clínico randomizado"
    ],
    "correctIndex": 0,
    "explanation": "Estudos caso-controle partem do desfecho (doença) para investigar o passado de exposição (medida de associação = Odds Ratio).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q74",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #74).\n\nUm estudo que acompanha indivíduos expostos e não expostos ao longo do tempo avaliando o surgimento do desfecho é o:",
    "options": [
      "Estudo de coorte (prospectivo ou retrospectivo)",
      "Estudo caso-controle",
      "Estudo ecológico",
      "Série de casos"
    ],
    "correctIndex": 0,
    "explanation": "Estudos de coorte partem da exposição e acompanham os grupos no tempo para medir a incidência (medida de associação = Risco Relativo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q75",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #75).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente doentes entre todos os doentes é a:",
    "options": [
      "Sensibilidade",
      "Especificidade",
      "Valor preditivo positivo",
      "Acurácia global"
    ],
    "correctIndex": 0,
    "explanation": "Sensibilidade = VP / (VP + FN). Mede a proporção de testes positivos entre os doentes reais.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q76",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #76).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente sadios entre todos os não doentes é a:",
    "options": [
      "Especificidade",
      "Sensibilidade",
      "Valor preditivo negativo",
      "Razão de verossimilhança positiva"
    ],
    "correctIndex": 0,
    "explanation": "Especificidade = VN / (VN + FP). Mede a proporção de testes negativos entre os indivíduos sadios.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q77",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #77).\n\nA probabilidade de um indivíduo com teste positivo ter realmente a doença é o:",
    "options": [
      "Valor Preditivo Positivo (VPP)",
      "Valor Preditivo Negativo (VPN)",
      "Sensibilidade do teste",
      "Risco atribuível"
    ],
    "correctIndex": 0,
    "explanation": "O VPP depende fortemente da prevalência da doença na população testada.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q78",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Associação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #78).\n\nA razão entre a incidência nos expostos e a incidência nos não expostos em um estudo de coorte é o:",
    "options": [
      "Risco Relativo (RR)",
      "Razão de Chances (Odds Ratio)",
      "Risco Atribuível no População",
      "Odds do Desfecho"
    ],
    "correctIndex": 0,
    "explanation": "Risco Relativo (RR) = Incidência nos Expostos / Incidência nos Não Expostos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q79",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Vigilância Epidemiológica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #79).\n\nO conjunto de ações que proporciona o conhecimento e acompanhamento de doenças para adoção de medidas de controle é a:",
    "options": [
      "Vigilância epidemiológica",
      "Atenção terciária hospitalar",
      "Auditoria médica",
      "Acreditação sanitária"
    ],
    "correctIndex": 0,
    "explanation": "A Vigilância Epidemiológica coleta, analisa e dissemina dados de saúde para intervenções coletivas em tempo oportuno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q80",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Níveis de Prevenção",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #80).\n\nMedidas de imunização (vacinas) e orientação nutricional populacional enquadram-se na:",
    "options": [
      "Prevenção primária",
      "Prevenção secundária",
      "Prevenção terciária",
      "Prevenção quaternária"
    ],
    "correctIndex": 0,
    "explanation": "Prevenção primária evita o aparecimento da doença, atuando sobre os fatores de risco antes do desfecho.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q81",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #81).\n\nO número de casos novos de uma doença que surgem em uma população em risco durante um período específico mede a:",
    "options": [
      "Incidência",
      "Prevalência",
      "Letalidade",
      "Mortalidade proporcional"
    ],
    "correctIndex": 0,
    "explanation": "Incidência quantifica a velocidade de surgimento de novos casos na população sob risco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q82",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #82).\n\nA proporção do número total de casos (novos e antigos) existentes de uma doença em um ponto determinado no tempo é a:",
    "options": [
      "Prevalência",
      "Incidência acumulada",
      "Densidade de incidência",
      "Taxa de ataque"
    ],
    "correctIndex": 0,
    "explanation": "Prevalência mede a carga total da doença (casos acumulados) em um momento específico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q83",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #83).\n\nUm estudo epidemiológico observacional analítico que seleciona doentes (casos) e não doentes (controles) investigando retrospectivamente a exposição é o:",
    "options": [
      "Estudo caso-controle",
      "Estudo de coorte",
      "Estudo transversal (inquérito)",
      "Ensaio clínico randomizado"
    ],
    "correctIndex": 0,
    "explanation": "Estudos caso-controle partem do desfecho (doença) para investigar o passado de exposição (medida de associação = Odds Ratio).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q84",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #84).\n\nUm estudo que acompanha indivíduos expostos e não expostos ao longo do tempo avaliando o surgimento do desfecho é o:",
    "options": [
      "Estudo de coorte (prospectivo ou retrospectivo)",
      "Estudo caso-controle",
      "Estudo ecológico",
      "Série de casos"
    ],
    "correctIndex": 0,
    "explanation": "Estudos de coorte partem da exposição e acompanham os grupos no tempo para medir a incidência (medida de associação = Risco Relativo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q85",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #85).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente doentes entre todos os doentes é a:",
    "options": [
      "Sensibilidade",
      "Especificidade",
      "Valor preditivo positivo",
      "Acurácia global"
    ],
    "correctIndex": 0,
    "explanation": "Sensibilidade = VP / (VP + FN). Mede a proporção de testes positivos entre os doentes reais.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q86",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #86).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente sadios entre todos os não doentes é a:",
    "options": [
      "Especificidade",
      "Sensibilidade",
      "Valor preditivo negativo",
      "Razão de verossimilhança positiva"
    ],
    "correctIndex": 0,
    "explanation": "Especificidade = VN / (VN + FP). Mede a proporção de testes negativos entre os indivíduos sadios.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q87",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #87).\n\nA probabilidade de um indivíduo com teste positivo ter realmente a doença é o:",
    "options": [
      "Valor Preditivo Positivo (VPP)",
      "Valor Preditivo Negativo (VPN)",
      "Sensibilidade do teste",
      "Risco atribuível"
    ],
    "correctIndex": 0,
    "explanation": "O VPP depende fortemente da prevalência da doença na população testada.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q88",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Associação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #88).\n\nA razão entre a incidência nos expostos e a incidência nos não expostos em um estudo de coorte é o:",
    "options": [
      "Risco Relativo (RR)",
      "Razão de Chances (Odds Ratio)",
      "Risco Atribuível no População",
      "Odds do Desfecho"
    ],
    "correctIndex": 0,
    "explanation": "Risco Relativo (RR) = Incidência nos Expostos / Incidência nos Não Expostos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q89",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Vigilância Epidemiológica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #89).\n\nO conjunto de ações que proporciona o conhecimento e acompanhamento de doenças para adoção de medidas de controle é a:",
    "options": [
      "Vigilância epidemiológica",
      "Atenção terciária hospitalar",
      "Auditoria médica",
      "Acreditação sanitária"
    ],
    "correctIndex": 0,
    "explanation": "A Vigilância Epidemiológica coleta, analisa e dissemina dados de saúde para intervenções coletivas em tempo oportuno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q90",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Níveis de Prevenção",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #90).\n\nMedidas de imunização (vacinas) e orientação nutricional populacional enquadram-se na:",
    "options": [
      "Prevenção primária",
      "Prevenção secundária",
      "Prevenção terciária",
      "Prevenção quaternária"
    ],
    "correctIndex": 0,
    "explanation": "Prevenção primária evita o aparecimento da doença, atuando sobre os fatores de risco antes do desfecho.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q91",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Durante discussão de caso clínico em seminário da graduação médica (Caso #91).\n\nO número de casos novos de uma doença que surgem em uma população em risco durante um período específico mede a:",
    "options": [
      "Incidência",
      "Prevalência",
      "Letalidade",
      "Mortalidade proporcional"
    ],
    "correctIndex": 0,
    "explanation": "Incidência quantifica a velocidade de surgimento de novos casos na população sob risco.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q92",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Frequência",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Em avaliação prática de simulação clínica para estudantes de medicina (Caso #92).\n\nA proporção do número total de casos (novos e antigos) existentes de uma doença em um ponto determinado no tempo é a:",
    "options": [
      "Prevalência",
      "Incidência acumulada",
      "Densidade de incidência",
      "Taxa de ataque"
    ],
    "correctIndex": 0,
    "explanation": "Prevalência mede a carga total da doença (casos acumulados) em um momento específico.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q93",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Ao examinar prontuário e achados laboratoriais de paciente em investigação (Caso #93).\n\nUm estudo epidemiológico observacional analítico que seleciona doentes (casos) e não doentes (controles) investigando retrospectivamente a exposição é o:",
    "options": [
      "Estudo caso-controle",
      "Estudo de coorte",
      "Estudo transversal (inquérito)",
      "Ensaio clínico randomizado"
    ],
    "correctIndex": 0,
    "explanation": "Estudos caso-controle partem do desfecho (doença) para investigar o passado de exposição (medida de associação = Odds Ratio).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q94",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Delineamento de Estudos",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Durante aula prática de bancada e análise de exames complementares (Caso #94).\n\nUm estudo que acompanha indivíduos expostos e não expostos ao longo do tempo avaliando o surgimento do desfecho é o:",
    "options": [
      "Estudo de coorte (prospectivo ou retrospectivo)",
      "Estudo caso-controle",
      "Estudo ecológico",
      "Série de casos"
    ],
    "correctIndex": 0,
    "explanation": "Estudos de coorte partem da exposição e acompanham os grupos no tempo para medir a incidência (medida de associação = Risco Relativo).",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q95",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Em estudo dirigido de monitoria acadêmica no módulo de tutoria (Caso #95).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente doentes entre todos os doentes é a:",
    "options": [
      "Sensibilidade",
      "Especificidade",
      "Valor preditivo positivo",
      "Acurácia global"
    ],
    "correctIndex": 0,
    "explanation": "Sensibilidade = VP / (VP + FN). Mede a proporção de testes positivos entre os doentes reais.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q96",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2026,
    "text": "Ao analisar laudo de exame complementar e correlacionar com a clínica (Caso #96).\n\nA capacidade de um teste diagnóstico em identificar corretamente os indivíduos verdadeiramente sadios entre todos os não doentes é a:",
    "options": [
      "Especificidade",
      "Sensibilidade",
      "Valor preditivo negativo",
      "Razão de verossimilhança positiva"
    ],
    "correctIndex": 0,
    "explanation": "Especificidade = VN / (VN + FP). Mede a proporção de testes negativos entre os indivíduos sadios.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q97",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Testes Diagnósticos",
    "banca": "Trilha Estudante",
    "year": 2025,
    "text": "Durante atendimento ambulatorial sob supervisão do professor docente (Caso #97).\n\nA probabilidade de um indivíduo com teste positivo ter realmente a doença é o:",
    "options": [
      "Valor Preditivo Positivo (VPP)",
      "Valor Preditivo Negativo (VPN)",
      "Sensibilidade do teste",
      "Risco atribuível"
    ],
    "correctIndex": 0,
    "explanation": "O VPP depende fortemente da prevalência da doença na população testada.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q98",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Medidas de Associação",
    "banca": "Trilha Estudante",
    "year": 2024,
    "text": "Em reunião de discussão multidisciplinar de casos complexos (Caso #98).\n\nA razão entre a incidência nos expostos e a incidência nos não expostos em um estudo de coorte é o:",
    "options": [
      "Risco Relativo (RR)",
      "Razão de Chances (Odds Ratio)",
      "Risco Atribuível no População",
      "Odds do Desfecho"
    ],
    "correctIndex": 0,
    "explanation": "Risco Relativo (RR) = Incidência nos Expostos / Incidência nos Não Expostos.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q99",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Vigilância Epidemiológica",
    "banca": "Trilha Estudante",
    "year": 2023,
    "text": "Ao avaliar a evolução clínica e os parâmetros fisiopatológicos do paciente (Caso #99).\n\nO conjunto de ações que proporciona o conhecimento e acompanhamento de doenças para adoção de medidas de controle é a:",
    "options": [
      "Vigilância epidemiológica",
      "Atenção terciária hospitalar",
      "Auditoria médica",
      "Acreditação sanitária"
    ],
    "correctIndex": 0,
    "explanation": "A Vigilância Epidemiológica coleta, analisa e dissemina dados de saúde para intervenções coletivas em tempo oportuno.",
    "difficulty": "medium"
  },
  {
    "id": "basico_epidemiologia_q100",
    "cycle": "Ciclo Básico",
    "subject": "Epidemiologia",
    "subSubject": "Níveis de Prevenção",
    "banca": "Trilha Estudante",
    "year": 2022,
    "text": "Durante rodízio prático acadêmico no centro de estudos da faculdade (Caso #100).\n\nMedidas de imunização (vacinas) e orientação nutricional populacional enquadram-se na:",
    "options": [
      "Prevenção primária",
      "Prevenção secundária",
      "Prevenção terciária",
      "Prevenção quaternária"
    ],
    "correctIndex": 0,
    "explanation": "Prevenção primária evita o aparecimento da doença, atuando sobre os fatores de risco antes do desfecho.",
    "difficulty": "medium"
  }
];
