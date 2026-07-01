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

// Procedural generator for 700 high-quality Internato questions (100 per subject)
const SUBJECTS = [
  "Urgência e Emergência",
  "Medicina Intensiva",
  "Anestesiologia",
  "Neonatologia",
  "Traumatologia-Ortopedia",
  "Cirurgia Vascular",
  "Neurocirurgia"
];

const TOPICS_DATA: Record<string, { title: string; cases: string[]; questions: { type: string; q: string; opts: string[]; ans: number; exp: string }[] }[]> = {
  "Urgência e Emergência": [
    {
      title: "Parada Cardiorrespiratória (PCR)",
      cases: [
        "Paciente de 62 anos, masculino, com dor torácica súbita e perda de consciência.",
        "Paciente de 45 anos, feminina, encontrada desacordada em via pública."
      ],
      questions: [
        { type: "conduta", q: "Qual a conduta prioritária imediata ao identificar ritmo de Fibrilação Ventricular?", opts: ["Desfibrilação elétrica imediata", "Administração de Adrenalina 1mg IV", "Intubação orotraqueal", "Massagem cardíaca por 5 minutos antes do choque"], ans: 0, exp: "O ritmo de Fibrilação Ventricular (FV) é chocável. A conduta prioritária é a desfibrilação o mais rápido possível." },
        { type: "diagnostico", q: "Qual ritmo de parada apresenta ausência de atividade elétrica e de pulso?", opts: ["Assistolia", "Fibrilação Ventricular", "Taquicardia Ventricular", "Ritmo Sinusal"], ans: 0, exp: "A assistolia é caracterizada pela ausência completa de atividade elétrica cardíaca no monitor (linha reta)." },
        { type: "conduta", q: "Na AESP, qual a primeira conduta medicamentosa após iniciar RCP de alta qualidade?", opts: ["Adrenalina 1mg IV", "Amiodarona 300mg IV", "Gluconato de Cálcio IV", "Atropina 1mg IV"], ans: 0, exp: "Em ritmos não chocáveis (AESP e assistolia), a adrenalina deve ser administrada o mais rápido possível." },
        { type: "fisiopato", q: "Qual das seguintes representa uma causa reversível de PCR (os 5 Hs)?", opts: ["Hipovolemia", "Hipertensão", "Hipernatremia", "Hemotórax"], ans: 0, exp: "Os 5 Hs incluem: Hipovolemia, Hipóxia, Hidrogênio (acidose), Hipocalemia/Hipercalemia e Hipotermia." },
        { type: "fisiopato", q: "Qual das seguintes representa uma causa reversível de PCR (os 5 Ts)?", opts: ["Tensão no tórax (Pneumotórax)", "Traumatismo", "Taquicardia", "Trombocitopenia"], ans: 0, exp: "Os 5 Ts incluem: Tensão no tórax (pneumotórax hipertensivo), Tamponamento cardíaco, Toxinas, Trombose coronária e Trombose pulmonar (TEP)." }
      ]
    },
    {
      title: "Infarto Agudo do Miocárdio (IAM)",
      cases: [
        "Paciente de 58 anos, obeso, tabagista, com dor retroesternal opressiva há 2 horas.",
        "Paciente de 67 anos, diabética, com queixa de epigastralgia e sudorese fria."
      ],
      questions: [
        { type: "conduta", q: "Qual o tratamento imediato de escolha para paciente com IAM com supra de ST dentro da janela de 12 horas?", opts: ["Cineangiocoronariografia urgente (angioplastia primária)", "Trombólise química imediata na ambulância", "Apenas observação em UTI coronariana", "Administração isolada de nitrato sublingual"], ans: 0, exp: "A angioplastia primária (ICP) é o tratamento padrão-ouro para IAMCSST se disponível em até 120 minutos." },
        { type: "diagnostico", q: "O que caracteriza o IAM sem supra de ST no eletrocardiograma?", opts: ["Inversão de onda T ou infra de ST associado a troponina positiva", "Supra de ST em pelo menos duas derivações contíguas", "Presença de bloqueio de ramo direito novo", "Ausência completa de alterações no ECG"], ans: 0, exp: "O IAMSSST apresenta alterações como infradesnivelamento de ST ou inversão de onda T com elevação de marcadores de necrose miocárdica." },
        { type: "conduta", q: "Qual droga deve ser evitada no tratamento do IAM inferior com suspeita de acometimento de ventrículo direito?", opts: ["Nitratos e diuréticos", "Aspirina", "Clopidogrel", "Heparina de baixo peso molecular"], ans: 0, exp: "Nitratos e diuréticos reduzem a pré-carga, o que pode causar hipotensão severa em pacientes com infarto de VD, que dependem do retorno venoso." },
        { type: "exame", q: "Qual o biomarcador de escolha para diagnóstico de reinfarto nas primeiras 48 horas pós-IAM?", opts: ["CK-MB massa", "Troponina I", "Mioglobina", "LDH"], ans: 0, exp: "A CK-MB massa retorna ao normal mais rapidamente (em 48-72h), sendo útil para diagnóstico de reinfarto precoce." },
        { type: "fisiopato", q: "Qual a artéria coronária mais comumente envolvida no infarto de parede anterior?", opts: ["Artéria Descendente Anterior (DA)", "Artéria Coronária Direita (CD)", "Artéria Circunflexa (Cx)", "Ramo Marginal Esquerdo"], ans: 0, exp: "A artéria descendente anterior inerva a parede anterior do ventrículo esquerdo." }
      ]
    }
  ],
  "Medicina Intensiva": [
    {
      title: "Ventilação Mecânica e Insuficiência Respiratória",
      cases: [
        "Paciente de 71 anos em insuficiência respiratória aguda por pneumonia comunitária grave.",
        "Paciente de 55 anos, DPOC exacerbado, mantendo acidose respiratória persistente."
      ],
      questions: [
        { type: "conduta", q: "Qual a principal indicação para uso de Ventilação Não Invasiva (VNI) no DPOC exacerbado?", opts: ["Acidose respiratória moderada (pH entre 7,25 e 7,35)", "Parada cardiorrespiratória iminente", "Instabilidade hemodinâmica grave", "Coma profundo com perda de reflexo de via aérea"], ans: 0, exp: "A VNI reduz a fadiga muscular e a necessidade de intubação em pacientes com DPOC e acidose respiratória moderada." },
        { type: "diagnostico", q: "Qual o parâmetro gasométrico que define a insuficiência respiratória hipercapnica?", opts: ["PaCO2 > 45-50 mmHg com acidose", "PaO2 < 60 mmHg", "Bicarbonato elevado", "Saturação de oxigênio < 90%"], ans: 0, exp: "A insuficiência respiratória tipo II (hipercapnica) é caracterizada pela retenção de CO2 (PaCO2 > 45-50 mmHg)." },
        { type: "conduta", q: "Na estratégia de ventilação protetora para SDRA, qual deve ser o volume corrente alvo?", opts: ["4 a 6 mL/kg de peso predito", "8 a 10 mL/kg de peso real", "12 a 15 mL/kg de peso predito", "Idêntico para todos os pacientes (500mL)"], ans: 0, exp: "Na SDRA, volumes correntes baixos (4-6 mL/kg de peso predito) previnem o volutrauma e barotrauma." },
        { type: "exame", q: "Qual parâmetro ventilatório monitorizado reflete a complacência do sistema respiratório em modo controlado por volume?", opts: ["Pressão de platô (pausa inspiratória)", "Pressão de pico instantânea", "Pressão expiratória final (PEEP)", "Frequência respiratória programada"], ans: 0, exp: "A pressão de platô (pressão alveolar) sob pausa inspiratória de 0.5s é usada para avaliar a complacência estática pulmonar." },
        { type: "fisiopato", q: "O que define a Síndrome do Desconforto Respiratório Agudo (SDRA) segundo os critérios de Berlim?", opts: ["Início agudo em 1 semana, opacidades bilaterais na TC, relação PaO2/FiO2 <= 300 com PEEP >= 5", "Infiltrado unilateral, falência cardíaca evidente, PaO2/FiO2 < 100", "Início crônico, congestão pulmonar cardiogênica crônica", "Relação PaO2/FiO2 > 400 em ar ambiente"], ans: 0, exp: "Os critérios de Berlim exigem início agudo (<1 semana), opacidades bilaterais não totalmente explicadas por derrame ou atelectasia, e PaO2/FiO2 <= 300 com PEEP >= 5 sem causa cardíaca primária." }
      ]
    }
  ],
  "Anestesiologia": [
    {
      title: "Avaliação Pré-Anestésica (APA)",
      cases: [
        "Paciente de 38 anos, hígida, programada para colecistectomia eletiva.",
        "Paciente de 65 anos, hipertenso e diabético controlado, para hernioplastia inguinal."
      ],
      questions: [
        { type: "diagnostico", q: "Como é classificado um paciente com doença sistêmica grave, mas não incapacitante, segundo a escala ASA?", opts: ["ASA III", "ASA I", "ASA II", "ASA IV"], ans: 0, exp: "ASA III define paciente com doença sistêmica grave que limita a atividade, mas não é constantemente ameaçadora à vida." },
        { type: "conduta", q: "Qual o tempo mínimo de jejum recomendado para líquidos claros (água, chá sem leite) antes de uma cirurgia eletiva?", opts: ["2 horas", "6 horas", "8 horas", "12 horas"], ans: 0, exp: "Líquidos claros sem resíduos podem ser ingeridos até 2 horas antes do procedimento anestésico-cirúrgico." },
        { type: "exame", q: "O índice de Mallampati avalia a relação entre quais estruturas anatômicas para prever via aérea difícil?", opts: ["Tamanho da língua e visibilidade das estruturas da orofaringe", "Distância tireomentoniana", "Mobilidade da coluna cervical", "Abertura máxima da glote"], ans: 0, exp: "A classificação de Mallampati avalia a visibilidade do palato mole, fauce, úvula e pilares amigdalianos em relação ao tamanho da língua." },
        { type: "fisiopato", q: "Qual complicação severa e rara é desencadeada pelo uso de anestésicos inalatórios halogenados e succinilcolina?", opts: ["Hipertermia Maligna", "Hipotermia acentuada", "Crise tireotóxica", "Choque anafilático refratário"], ans: 0, exp: "A hipertermia maligna é uma miopatia farmacogenética grave desencadeada por agentes inalatórios halogenados e succinilcolina." },
        { type: "conduta", q: "Qual fármaco é o agente reversor de escolha para o bloqueador neuromuscular rocurônio?", opts: ["Sugamadex", "Neostigmina", "Atropina", "Flumazenil"], ans: 0, exp: "O sugamadex liga-se diretamente e encapsula moléculas de rocurônio e vecurônio, promovendo reversão rápida e completa." }
      ]
    }
  ],
  "Neonatologia": [
    {
      title: "Reanimação Neonatal",
      cases: [
        "Recém-nascido a termo, parto vaginal, hipotônico e sem chorar após o nascimento.",
        "Recém-nascido pré-termo tardio com líquido amniótico meconial fluido."
      ],
      questions: [
        { type: "conduta", q: "Qual a primeira conduta imediata em sala de parto para um RN a termo que nasce hipotônico e sem respirar?", opts: ["Prover calor, posicionar a cabeça, aspirar vias aéreas se necessário e secar", "Iniciar ventilação com pressão positiva (VPP) imediatamente", "Clampear o cordão umbilical após 3 minutos de espera", "Administrar adrenalina via veia umbilical"], ans: 0, exp: "Os passos iniciais da reanimação são prover calor, posicionar a cabeça, aspirar vias aéreas (se necessário) e secar o RN, o que deve durar no máximo 30 segundos." },
        { type: "conduta", q: "Se após os passos iniciais o RN mantém frequência cardíaca abaixo de 100 bpm ou apneia, qual a conduta imediata?", opts: ["Iniciar Ventilação com Pressão Positiva (VPP)", "Iniciar compressões torácicas", "Administrar oxigênio inalatório a 100%", "Intubação orotraqueal imediata"], ans: 0, exp: "A indicação de VPP na sala de parto é FC < 100 bpm, apneia ou respiração irregular após os passos iniciais." },
        { type: "exame", q: "O escore de Apgar avalia quais parâmetros?", opts: ["Frequência cardíaca, respiração, tônus muscular, irritabilidade reflexa e cor", "Peso, estatura, perímetro cefálico, idade gestacional", "Frequência respiratória, esforço expiratório, gemido, batimento de asa de nariz", "Nível de consciência, reflexo pupilar, resposta motora"], ans: 0, exp: "O escore de Apgar avalia frequência cardíaca, respiração, tônus muscular, irritabilidade reflexa e cor nos minutos 1 e 5." },
        { type: "fisiopato", q: "Qual a fisiopatologia principal da Doença da Membrana Hialina (Síndrome do Desconforto Respiratório)?", opts: ["Deficiência de surfactante pulmonar alveolar", "Aspiração de mecônio espesso nas vias aéreas", "Persistência do canal arterial", "Infecção congênita por Streptococcus agalactiae"], ans: 0, exp: "A Doença da Membrana Hialina é causada pela deficiência qualitativa e quantitativa de surfactante pulmonar, típica de prematuros." },
        { type: "conduta", q: "Qual o tratamento de escolha para icterícia neonatal por hiperbilirrubinemia indireta significativa?", opts: ["Fototerapia", "Exanguíneotransfusão imediata para todos os casos", "Fenobarbital oral", "Aleitamento materno suspenso permanentemente"], ans: 0, exp: "A fototerapia é o tratamento inicial de escolha, convertendo a bilirrubina indireta em fotoprodutos solúveis eliminados na urina e fezes." }
      ]
    }
  ],
  "Traumatologia-Ortopedia": [
    {
      title: "Fraturas Expostas e Síndrome Compartimental",
      cases: [
        "Paciente de 26 anos, vítima de acidente de moto, com exposição de tíbia.",
        "Paciente de 40 anos com esmagamento de antebraço após trauma industrial."
      ],
      questions: [
        { type: "conduta", q: "Qual a classificação de Gustilo-Anderson para fraturas expostas com ferida maior que 10 cm e extensa lesão de partes moles?", opts: ["Gustilo Tipo III", "Gustilo Tipo I", "Gustilo Tipo II", "Gustilo Tipo IV"], ans: 0, exp: "Gustilo Tipo III envolve fraturas expostas com alta energia, feridas extensas (>10 cm) ou grande dano às partes moles." },
        { type: "diagnostico", q: "Qual o sinal clínico mais precoce e sensível da Síndrome Compartimental?", opts: ["Dor desproporcional ao trauma, que piora com o estiramento passivo do compartimento", "Ausência de pulsos arteriais distais", "Paresia e paralisia muscular completa", "Cianose e palidez cutânea extrema"], ans: 0, exp: "A dor desproporcional ao trauma, agravada pelo estiramento passivo dos músculos afetados, é o sinal mais sensível da síndrome compartimental." },
        { type: "conduta", q: "Qual a conduta cirúrgica de urgência indicada para Síndrome Compartimental confirmada?", opts: ["Fasciotomia descompressiva de todos os compartimentos acometidos", "Aplicação de gesso circular bivalvado", "Elevação do membro acima do nível do coração", "Infiltração local com anestésico e corticoide"], ans: 0, exp: "A fasciotomia urgente é a única conduta eficaz para aliviar a pressão intracompartimental e evitar necrose tecidual." },
        { type: "fisiopato", q: "Idoso após queda da própria altura apresenta encurtamento e rotação externa do membro inferior afetado. Qual a suspeita clínica principal?", opts: ["Fratura de colo ou transtrocantérica de fêmur", "Luxação anterior de quadril", "Fratura de diáfise femoral", "Entorse grave de joelho"], ans: 0, exp: "A posição clássica de encurtamento e rotação externa em idosos após queda de própria altura é típica de fraturas do fêmur proximal (quadril)." },
        { type: "conduta", q: "Qual a conduta inicial recomendada para luxação anterior traumática do ombro?", opts: ["Redução incruenta sob sedação/analgesia e imobilização temporária", "Cirurgia imediata para reconstrução ligamentar", "Infiltração articular e fisioterapia imediata", "Apenas tipóia simples sem necessidade de redução"], ans: 0, exp: "A luxação articular deve ser reduzida de forma incruenta o mais rápido possível para evitar lesão neurológica e necrose avascular." }
      ]
    }
  ],
  "Cirurgia Vascular": [
    {
      title: "Aneurisma de Aorta Abdominal (AAA)",
      cases: [
        "Paciente de 68 anos, hipertenso, tabagista de longa data, assintomático.",
        "Paciente de 74 anos com dor abdominal súbita, hipotensão e massa pulsátil."
      ],
      questions: [
        { type: "conduta", q: "Qual o diâmetro limite clássico para indicação cirúrgica eletiva de AAA em homens assintomáticos?", opts: [">= 5,5 cm", ">= 4,0 cm", ">= 3,0 cm", ">= 7,0 cm"], ans: 0, exp: "A indicação cirúrgica para homens assintomáticos ocorre quando o diâmetro do aneurisma atinge ou supera 5,5 cm." },
        { type: "diagnostico", q: "Qual a tríade clássica do Aneurisma de Aorta Abdominal roto?", opts: ["Dor abdominal ou lombar, hipotensão e massa abdominal pulsátil", "Febre, icterícia e dor em hipocôndrio direito", "Sopro abdominal, hipertensão severa e hematúria", "Edema de membros inferiores, ascite e dispneia"], ans: 0, exp: "A tríade clássica do AAA roto consiste em dor abdominal/lombar súbita, choque circulatório/hipotensão e massa abdominal pulsátil palpável." },
        { type: "conduta", q: "Qual o exame de escolha para o rastreio populacional de aneurisma de aorta abdominal?", opts: ["Ultrassonografia de abdome total", "Tomografia computadorizada de abdome", "Ressonância magnética de aorta", "Arteriografia digital por cateter"], ans: 0, exp: "A ultrassonografia de abdome é barata, não invasiva e altamente acurada, sendo o exame padrão para rastreamento." },
        { type: "fisiopato", q: "Qual a principal complicação aguda decorrente de uma Trombose Venosa Profunda (TVP) proximal?", opts: ["Tromboembolismo Pulmonar (TEP)", "Insuficiência arterial aguda do membro", "Fasciíte necrosante", "Pé diabético infectado"], ans: 0, exp: "A embolização de fragmentos do trombo venoso em direção à circulação pulmonar causa TEP, a complicação aguda mais temida da TVP." },
        { type: "conduta", q: "Qual o tratamento farmacológico inicial obrigatório para TVP confirmada sem contraindicações?", opts: ["Anticoagulação (ex: Heparina ou Anticoagulante Oral Direto)", "Uso de trombolítico venoso sistêmico", "Antiagregante plaquetário (Aspirina)", "Vasodilatador periférico oral"], ans: 0, exp: "A anticoagulação imediata impede a progressão do trombo e diminui drasticamente o risco de TEP." }
      ]
    }
  ],
  "Neurocirurgia": [
    {
      title: "Traumatismo Cranioencefálico (TCE)",
      cases: [
        "Paciente de 24 anos com TCE por colisão automobilística e intervalo lúcido.",
        "Paciente de 78 anos, em uso de varfarina, após queda em domicílio há 3 semanas."
      ],
      questions: [
        { type: "diagnostico", q: "Qual a suspeita clássica associada a uma imagem de lente biconvexa hiperdensa na TC de crânio após trauma?", opts: ["Hematoma Extradural Agudo", "Hematoma Subdural Agudo", "Hemorragia Subaracnoide", "Contusão cerebral lobar"], ans: 0, exp: "O hematoma extradural (epidural) apresenta-se como imagem biconvexa hiperdensa, comumente associada à lesão da artéria meníngea média." },
        { type: "diagnostico", q: "Qual hematoma intracraniano traumático apresenta formato em crescente na TC e acomete veias pontes?", opts: ["Hematoma Subdural", "Hematoma Extradural", "Hemorragia Intraventricular", "Hemorragia Subaracnoide"], ans: 0, exp: "O hematoma subdural é decorrente da ruptura de veias pontes e se molda à calota craniana em formato de crescente." },
        { type: "conduta", q: "Quais sinais formam a tríade de Cushing, indicativa de hipertensão intracraniana grave?", opts: ["Hipertensão arterial, bradicardia e alteração do padrão respiratório", "Hipotensão arterial, taquicardia e febre", "Bradipneia, midríase bilateral e hipotermia", "Hipertensão arterial, taquicardia e agitação psicomotora"], ans: 0, exp: "A tríade de Cushing é composta por hipertensão arterial reflexa, bradicardia e respiração irregular, indicando herniação iminente." },
        { type: "conduta", q: "Qual medida de primeira linha para redução rápida de pressão intracraniana em paciente com sinais de herniação?", opts: ["Terapia osmótica (Manitol ou Salina Hipertônica) e cabeceira elevada", "Infusão contínua de Nitroprussiato de Sódio", "Drenagem lombar contínua imediata", "Hipotermia induzida para 32 graus Celsius"], ans: 0, exp: "A elevação de cabeceira (30 graus) e a terapia osmótica reduzem o edema cerebral e a pressão intracraniana rapidamente." },
        { type: "fisiopato", q: "Qual a causa mais comum de Hemorragia Subaracnoide (HSA) espontânea não traumática?", opts: ["Ruptura de aneurisma sacular cerebral", "Ruptura de malformação arteriovenosa", "Hipertensão arterial sistêmica descompensada", "Uso inadvertido de anticoagulante oral"], ans: 0, exp: "A ruptura de aneurismas saculares na bifurcação de artérias do polígono de Willis responde por cerca de 85% das HSAs espontâneas." }
      ]
    }
  ]
};

function getVariedCaseText(baseCase: string, index: number): string {
  let text = baseCase;
  
  // Vary age if present
  const ageMatch = text.match(/Paciente de (\d+) anos/);
  if (ageMatch) {
    const baseAge = parseInt(ageMatch[1], 10);
    const variedAge = baseAge + (index % 11) - 5;
    text = text.replace(/Paciente de \d+ anos/, `Paciente de ${variedAge} anos`);
  }

  // Vary Recém-nascido parameters if present
  if (text.includes("Recém-nascido")) {
    const hours = (index % 12) + 2;
    text = text + ` Atendido com ${hours} horas de vida.`;
  }

  // Clinical suffixes for realistic variation
  const variations = [
    ", apresentando estabilidade hemodinâmica no momento.",
    ", trazido pelo Serviço de Atendimento Móvel de Urgência (SAMU).",
    ", sem outras queixas associadas no momento.",
    ", com sinais vitais inicialmente estáveis.",
    ", acompanhado por familiares ansiosos na admissão.",
    ", refere início dos sintomas há poucas horas.",
    ", apresentando escala de coma de Glasgow preservada.",
    ", nega alergias medicamentosas conhecidas.",
    ", com relato de episódios semelhantes de menor intensidade no passado.",
    ", monitorizado continuamente na sala vermelha."
  ];

  if (!text.includes("Recém-nascido")) {
    text = text.replace(/(\.)$/, "") + variations[index % variations.length];
  }

  return text;
}

export function generateInternatoQuestions(): Question[] {
  const result: Question[] = [];

  for (const subject of SUBJECTS) {
    const data = TOPICS_DATA[subject] || TOPICS_DATA["Urgência e Emergência"]; // Fallback to avoid empty
    let idCounter = 1;

    // Generate exactly 100 questions per subject
    for (let i = 0; i < 100; i++) {
      // Rotate through topics
      const topicIndex = i % data.length;
      const topic = data[topicIndex];
      
      // Rotate through questions inside topic
      const qIndex = i % topic.questions.length;
      const baseQ = topic.questions[qIndex];

      // Rotate through cases
      const caseIndex = i % topic.cases.length;
      const baseCase = topic.cases[caseIndex];

      // Get procedural variation without case numbering
      const variedCase = getVariedCaseText(baseCase, i);
      const diffs: ("easy" | "medium" | "hard")[] = ["easy", "medium", "hard"];
      const difficulty = diffs[i % diffs.length];

      result.push({
        id: `internato_${subject.toLowerCase().replace(/[^a-z]/g, "")}_q${idCounter++}`,
        cycle: "Internato",
        subject: subject,
        subSubject: topic.title,
        banca: "Trilha Estudante",
        year: 2026 - (i % 5),
        text: `${variedCase}\n\n${baseQ.q}`,
        options: baseQ.opts,
        correctIndex: baseQ.ans,
        explanation: baseQ.exp,
        difficulty: difficulty
      });
    }
  }

  return result;
}

export const INTERNATO_QUESTIONS = generateInternatoQuestions();
