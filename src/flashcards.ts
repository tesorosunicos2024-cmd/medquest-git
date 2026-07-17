export interface RealFlashcard {
  id: string;
  subject: string;
  front: string;
  back: string;
  explanation: string;
}

export const REAL_FLASHCARDS: RealFlashcard[] = [
  // ── CLÍNICA MÉDICA ──
  {
    id: "fc_cm_001",
    subject: "Clínica Médica",
    front: "Qual é o achado clássico no eletrocardiograma que sugere hiperpotassemia grave precoce?",
    back: "Onda T alta, simétrica e pontiaguda (em tenda).",
    explanation: "Referência: Porto (Semiologia Médica) / Harrison (Medicina Interna). Conforme a potassemia se eleva, as alterações eletrocardiográficas progridem de onda T em tenda para achatamento da onda P, prolongamento do intervalo PR, alargamento do complexo QRS e, por fim, ritmo em onda sinusoidal."
  },
  {
    id: "fc_cm_002",
    subject: "Clínica Médica",
    front: "Na cetoacidose diabética (CAD), qual é o critério de resolução para suspender a infusão contínua de insulina endovenosa?",
    back: "Glicemia < 200 mg/dL associada a pelo menos dois dos seguintes: pH > 7,30, bicarbonato ≥ 15 mEq/L ou gap aniônico ≤ 12.",
    explanation: "Referência: Harrison (Medicina Interna). A correção do pH e do gap aniônico (indicando fim da cetogênese) é o indicador real de resolução, e não a normalização isolada da glicemia."
  },
  {
    id: "fc_cm_003",
    subject: "Clínica Médica",
    front: "Qual é o principal anticorpo marcador e exame de triagem inicial para o diagnóstico de Doença Celíaca?",
    back: "Anticorpo Antitransglutaminase Tecidual da classe IgA (anti-tTG IgA), acompanhado de dosagem de IgA sérica total.",
    explanation: "Referência: Goldman-Cecil (Tratado de Medicina Interna). Em caso de deficiência congênita de IgA (comum nesses pacientes), deve-se solicitar o anticorpo IgG (como anti-tTG IgG ou anti-DGP IgG)."
  },
  {
    id: "fc_cm_004",
    subject: "Clínica Médica",
    front: "Qual distúrbio eletrolítico está associado ao risco de Mielinólise Pontina Central se for corrigido muito rapidamente?",
    back: "Hiponatremia crônica.",
    explanation: "Referência: Harrison (Medicina Interna). A correção rápida da hiponatremia causa desidratação osmótica dos neurônios pontinos. O limite seguro de correção é de até 8 a 10 mEq/L em 24 horas."
  },
  {
    id: "fc_cm_005",
    subject: "Clínica Médica",
    front: "Quais são os componentes da Tríade de Beck, indicativa de Tamponamento Cardíaco agudo?",
    back: "Hipotensão arterial, turgência jugular patológica e hipofonese de bulhas cardíacas.",
    explanation: "Referência: Sabiston (Tratado de Cirurgia) / Harrison. É um sinal clássico de emergência que reflete a restrição ao enchimento diastólico do ventrículo direito devido ao acúmulo de líquido no espaço pericárdico."
  },
  {
    id: "fc_cm_006",
    subject: "Clínica Médica",
    front: "Qual é a alteração pupilar clássica encontrada na herniação uncal (compressão do III par craniano)?",
    back: "Anisocoria com pupila ipsilateral midriática e fotorreagente lenta ou arreativa.",
    explanation: "Referência: Adams and Victor (Neurologia). O unco do lobo temporal comprime o nervo oculomotor ipsilateral, bloqueando as fibras parassimpáticas constritoras da pupila, levando à midríase."
  },
  {
    id: "fc_cm_007",
    subject: "Clínica Médica",
    front: "Qual é a tríade clínica clássica da Encefalopatia de Wernicke e qual sua etiologia?",
    back: "Tríade: Ataxia de marcha, oftalmoplegia/nistagmo e confusão mental. Etiologia: Deficiência de Tiamina (Vitamina B1).",
    explanation: "Referência: Harrison. Comum em etilistas crônicos e pacientes desnutridos. A administração de glicose antes da tiamina pode exacerbar ou desencadear o quadro de forma irreversível."
  },
  {
    id: "fc_cm_008",
    subject: "Clínica Médica",
    front: "Qual o achado urinário microscópico clássico e patognomônico de Necrose Tubular Aguda (NTA)?",
    back: "Cilindros granulosos epiteliais de coloração marrom-escura ('muddy brown' ou marrom-lama).",
    explanation: "Referência: Cecil (Medicina Interna). Esses cilindros contêm células epiteliais tubulares renais descamadas e degeneradas, diferenciando a NTA da azotemia pré-renal."
  },
  {
    id: "fc_cm_009",
    subject: "Clínica Médica",
    front: "Qual a tríade clássica da Síndrome de Guillain-Barré na apresentação neurológica periférica?",
    back: "Paralisia flácida, simétrica, ascendente e arreflexia.",
    explanation: "Referência: Adams and Victor (Neurologia). É uma polineuropatia desmielinizante inflamatória aguda, frequentemente desencadeada por infecção prévia (ex: Campylobacter jejuni)."
  },
  {
    id: "fc_cm_010",
    subject: "Clínica Médica",
    front: "Qual é o tratamento empírico inicial de escolha para neutropenia febril de alto risco?",
    back: "Monoterapia com betalactâmico antipseudomonas intravenoso (ex: Cefepime, Piperacilina/Tazobactam ou Meropenem).",
    explanation: "Referência: Diretrizes de IDSA / Harrison. A cobertura precoce de Pseudomonas aeruginosa é fundamental devido ao alto risco de sepse rápida e óbito nesses doentes."
  },

  // ── CIRURGIA GERAL ──
  {
    id: "fc_cg_001",
    subject: "Cirurgia Geral",
    front: "Qual é a tríade clínica clássica da colangite aguda conhecida como Tríade de Charcot?",
    back: "Febre com calafrios, icterícia e dor abdominal em hipocôndrio direito.",
    explanation: "Referência: Sabiston (Tratado de Cirurgia). Indica infecção bacteriana ascendente das vias biliares decorrente de obstrução, necessitando de antibioticoterapia e drenagem das vias biliares."
  },
  {
    id: "fc_cg_002",
    subject: "Cirurgia Geral",
    front: "O que caracteriza a Pêntade de Reynolds na colangite aguda obstrutiva supurativa?",
    back: "Tríade de Charcot (febre, icterícia e dor) acrescida de choque obstrutivo (hipotensão) e alteração do nível de consciência.",
    explanation: "Referência: Sabiston. Representa uma urgência médica extrema que sinaliza sepse de foco biliar de altíssima mortalidade, exigindo descompressão biliar imediata por CPRE ou cirurgia."
  },
  {
    id: "fc_cg_003",
    subject: "Cirurgia Geral",
    front: "Qual a definição anatômica que diferencia uma hérnia inguinal direta de uma indireta?",
    back: "A hérnia direta surge medialmente aos vasos epigástricos inferiores, enquanto a indireta surge lateralmente a eles (pelo anel inguinal profundo).",
    explanation: "Referência: Sabiston. A hérnia direta ocorre por fraqueza da parede posterior (triângulo de Hesselbach), enquanto a indireta decorre da patência do conduto peritoneovaginal."
  },
  {
    id: "fc_cg_004",
    subject: "Cirurgia Geral",
    front: "O que caracteriza a Hérnia de Littre e qual sua particularidade?",
    back: "É a presença do divertículo de Meckel dentro do saco herniário.",
    explanation: "Referência: Townsend (Sabiston - Tratado de Cirurgia). Difere de outras hérnias por conter uma anomalia congênita (divertículo de Meckel), que pode inflamar ou obstruir."
  },
  {
    id: "fc_cg_005",
    subject: "Cirurgia Geral",
    front: "O que é uma Hérnia de Richter?",
    back: "É o estrangulamento ou pinçamento apenas da borda antimesentérica da alça intestinal, sem causar obstrução da luz do órgão.",
    explanation: "Referência: Sabiston. Por não causar obstrução intestinal mecânica completa imediata, o diagnóstico costuma ser tardio, com alto risco de necrose silenciosa e perfuração."
  },
  {
    id: "fc_cg_006",
    subject: "Cirurgia Geral",
    front: "Qual é o tumor benigno de fígado mais comum e qual sua conduta padrão se assintomático?",
    back: "Hemangioma cavernoso. Conduta: Conservadora/Observação (não requer cirurgia ou ressecção).",
    explanation: "Referência: Sabiston. É uma lesão vascular congênita, diagnosticada por exames de imagem característicos (como captação globular periférica progressiva na TC/RM). Baixo risco de ruptura."
  },
  {
    id: "fc_cg_007",
    subject: "Cirurgia Geral",
    front: "Na avaliação do trauma abdominal, quais são as 4 janelas anatômicas avaliadas no exame FAST padrão?",
    back: "Saco pericárdico, espaço hepatorrenal (Morison), espaço esplenorrenal e recesso pélvico (fundo de saco de Douglas/suprapúbico).",
    explanation: "Referência: ATLS (Suporte Avançado de Vida no Trauma). O FAST busca identificar líquido livre (sangue) nesses recessos em pacientes vítimas de trauma agudo."
  },
  {
    id: "fc_cg_008",
    subject: "Cirurgia Geral",
    front: "Quais são as indicações clássicas de toracotomia de reanimação de emergência na sala de trauma?",
    back: "Trauma torácico penetrante com parada cardiorrespiratória (PCR) presenciada ou com sinais de vida recentes na sala de emergência.",
    explanation: "Referência: ATLS. No trauma contuso, a taxa de sobrevida com este procedimento é extremamente baixa (geralmente < 1%), sendo indicada quase que exclusivamente para o trauma penetrante."
  },
  {
    id: "fc_cg_009",
    subject: "Cirurgia Geral",
    front: "Qual é o principal agente etiológico implicado na etiologia da pancreatite aguda biliar?",
    back: "Cálculos biliares (microlitíase biliar que obstrui transitoriamente a ampola de Vater).",
    explanation: "Referência: Sabiston. A litíase biliar é a principal causa de pancreatite aguda no mundo ocidental, seguida do etilismo."
  },
  {
    id: "fc_cg_010",
    subject: "Cirurgia Geral",
    front: "Qual é a tríade da obstrução intestinal simples no exame físico e radiológico?",
    back: "Dor abdominal em cólica, distensão abdominal e visualização de níveis hidroaéreos com empilhamento de moedas no raio-X de abdome.",
    explanation: "Referência: Sabiston. O sinal de 'empilhamento de moedas' reflete o edema de alças de intestino delgado com visualização das pregas coniventes (válvulas conniventes)."
  },

  // ── PEDIATRIA ──
  {
    id: "fc_ped_001",
    subject: "Pediatria",
    front: "Qual é o achado radiológico clássico na radiografia de tórax de um lactente com Laringotraqueobronquite Aguda (Crupe)?",
    back: "Sinal do estreitamento subglótico ou 'sinal da ponta de lápis' (ou sinal da torre).",
    explanation: "Referência: Nelson (Tratado de Pediatria). Decorre do edema inflamatório simétrico da via aérea subglótica, comumente causado pelo vírus Parainfluenza."
  },
  {
    id: "fc_ped_002",
    subject: "Pediatria",
    front: "Qual é a manobra de triagem física utilizada no recém-nascido para identificar um quadril luxável/deslocável?",
    back: "Manobra de Barlow.",
    explanation: "Referência: Nelson. A manobra consiste em aduzir o quadril exercendo uma pressão posterior sobre o fêmur para tentar deslocá-lo do acetábulo."
  },
  {
    id: "fc_ped_003",
    subject: "Pediatria",
    front: "Qual é a manobra de triagem física utilizada no recém-nascido para reduzir um quadril já luxado?",
    back: "Manobra de Ortolani.",
    explanation: "Referência: Nelson. Realiza-se a abdução do quadril empurrando o grande trocanter anteriormente; sente-se um 'clique' ou 'estalo' de redução quando positivo."
  },
  {
    id: "fc_ped_004",
    subject: "Pediatria",
    front: "Qual é a principal complicação infecciosa bacteriana da Varicela (catapora) na infância?",
    back: "Infecção secundária de pele e partes moles (celulite, impetigo, abscesso por S. aureus ou S. pyogenes).",
    explanation: "Referência: Nelson. As lesões pruriginosas rompidas pelo ato de coçar servem de porta de entrada para a flora bacteriana da própria pele."
  },
  {
    id: "fc_ped_005",
    subject: "Pediatria",
    front: "Qual o agente etiológico mais comum da Bronquiolite Viral Aguda em lactentes?",
    back: "Vírus Sincicial Respiratório (VSR).",
    explanation: "Referência: SBP (Sociedade Brasileira de Pediatria) / Nelson. Atinge principalmente lactentes jovens menores de 2 anos, caracterizando-se por pródromos catarrais, sibilância, taquipneia e sinais de esforço respiratório."
  },
  {
    id: "fc_ped_006",
    subject: "Pediatria",
    front: "Quais os três sinais cardinais clássicos da Estenose Hipertrófica do Piloro na infância?",
    back: "Vômitos não-biliosos em jato, oliva pilórica palpável em abdome e alcalose metabólica hipoclorêmica.",
    explanation: "Referência: Nelson. Ocorre tipicamente entre a 2ª e a 8ª semanas de vida em lactentes (preferencialmente primogênitos do sexo masculino). A perda de ácido clorídrico gástrico gera a alcalose hipoclorêmica."
  },
  {
    id: "fc_ped_007",
    subject: "Pediatria",
    front: "Quais são as manchas patognomônicas do Sarampo e onde se localizam?",
    back: "Manchas de Koplik, localizadas na mucosa oral, na altura do segundo molar superior.",
    explanation: "Referência: Nelson. São pequenas pápulas esbranquiçadas ou azuladas sobre uma base eritematosa, surgindo antes do exantema maculopapular morbiliforme."
  },
  {
    id: "fc_ped_008",
    subject: "Pediatria",
    front: "Qual é a principal causa de parada cardiorrespiratória (PCR) na população pediátrica?",
    back: "Hipóxia / Insuficiência respiratória (causa hipóxica primária).",
    explanation: "Referência: PALS / Nelson. Diferente dos adultos (onde a causa primária costuma ser cardíaca/isquêmica), em pediatria a PCR é quase sempre o estágio final de insuficiência respiratória ou choque não tratados."
  },
  {
    id: "fc_ped_009",
    subject: "Pediatria",
    front: "Qual é a vacina do calendário nacional que protege contra formas graves de tuberculose (miliar e meníngea) e quando deve ser aplicada?",
    back: "Vacina BCG, aplicada em dose única ao nascimento.",
    explanation: "Referência: Ministério da Saúde. Ela não evita a infecção primária pulmonar, mas confere alta proteção contra a disseminação hematogênica grave da doença."
  },
  {
    id: "fc_ped_010",
    subject: "Pediatria",
    front: "Qual é o principal agente bacteriano causador de Epiglotite Aguda na infância em populações não vacinadas?",
    back: "Haemophilus influenzae tipo b.",
    explanation: "Referência: Nelson. Com a introdução da vacina pentavalente, a incidência dessa emergência respiratória grave (que cursa com estridor e posição de tripé) despencou drasticamente."
  },

  // ── GINECOLOGIA & OBSTETRÍCIA ──
  {
    id: "fc_go_001",
    subject: "Ginecologia & Obstetrícia",
    front: "Qual é a principal causa infecciosa de corrimento vaginal associada a 'clue cells' (células-alvo) e teste do KOH positivo (odor fétido)?",
    back: "Vaginose Bacteriana (causada principalmente por Gardnerella vaginalis).",
    explanation: "Referência: Febrasgo / Berek & Novak. Caracteriza-se por corrimento homogêneo acinzentado, pH vaginal > 4,5 e ausência de processo inflamatório proeminente (sem leucócitos abundantes)."
  },
  {
    id: "fc_go_002",
    subject: "Ginecologia & Obstetrícia",
    front: "Qual é a droga de escolha para a profilaxia e controle de crises convulsivas na Pré-eclâmpsia grave?",
    back: "Sulfato de Magnésio (MgSO4).",
    explanation: "Referência: Williams Obstetrícia / Rezende. Atua como neuroprotetor central. É obrigatório monitorar o reflexo patelar, a frequência respiratória e a diurese para rastrear toxicidade."
  },
  {
    id: "fc_go_003",
    subject: "Ginecologia & Obstetrícia",
    front: "O que caracteriza o Sinal do Lambda ou Sinal do Y no ultrassom obstétrico de primeiro trimestre?",
    back: "Gestação gemelar dicoriônica e diamniótica.",
    explanation: "Referência: Rezende Obstetrícia. Indica que há uma projeção de tecido placentário entre as duas membranas amnióticas, confirmando placentas distintas."
  },
  {
    id: "fc_go_004",
    subject: "Ginecologia & Obstetrícia",
    front: "Qual é a causa mais comum de Hemorragia Pós-Parto (HPP) imediata?",
    back: "Atonia uterina (falha na contração pós-parto).",
    explanation: "Referência: Williams Obstetrícia. Faz parte dos '4 Ts' da HPP (Tônus, Trauma, Tecido, Trombina), correspondendo a cerca de 70-80% dos casos. Trata-se inicialmente com massagem uterina e ocitocina."
  },
  {
    id: "fc_go_005",
    subject: "Ginecologia & Obstetrícia",
    front: "Qual o tratamento de escolha para Sífilis primária, secundária ou latente recente em gestantes?",
    back: "Penicilina G Benzatina, 2,4 milhões de UI, por via intramuscular em dose única.",
    explanation: "Referência: Febrasgo / Ministério da Saúde. É o único tratamento capaz de cruzar a barreira placentária de forma eficaz e prevenir a sífilis congênita no feto."
  },
  {
    id: "fc_go_006",
    subject: "Ginecologia & Obstetrícia",
    front: "Quais os tipos de HPV oncogênicos mais frequentemente associados ao carcinoma escamoso do colo uterino?",
    back: "HPV 16 e HPV 18 (responsáveis por cerca de 70% dos casos de câncer cervical).",
    explanation: "Referência: Berek & Novak. Os subtipos 6 e 11 são não-oncogênicos e estão associados a condilomas acuminados (verrugas genitais)."
  },
  {
    id: "fc_go_007",
    subject: "Ginecologia & Obstetrícia",
    front: "Qual é a tríade clínica clássica da Endometriose?",
    back: "Dismenorreia grave, dispareunia de profundidade e infertilidade.",
    explanation: "Referência: Febrasgo. Decorre da presença de estroma e glândulas endometriais fora da cavidade uterina, sofrendo influência cíclica estrogênica."
  },
  {
    id: "fc_go_008",
    subject: "Ginecologia & Obstetrícia",
    front: "Na amniorrexe prematura, qual achado no exame físico vaginal imediato contraindica toques vaginais repetidos?",
    back: "Ausência de trabalho de parto ativo (para evitar infecção ascendente / corioamnionite).",
    explanation: "Referência: Williams Obstetrícia. O toque vaginal deve ser evitado e substituído pelo exame especular estéril para minimizar o risco de introduzir bactérias no ambiente uterino."
  },
  {
    id: "fc_go_009",
    subject: "Ginecologia & Obstetrícia",
    front: "Qual é a definição de abortamento habitual ou recorrente?",
    back: "Perda espontânea de 3 ou mais gestações consecutivas antes de 20-22 semanas.",
    explanation: "Referência: Febrasgo. Exige investigação etiológica de causas anatômicas (como incompetência istmocervical), endócrinas, genéticas ou imunológicas (como SAF)."
  },
  {
    id: "fc_go_010",
    subject: "Ginecologia & Obstetrícia",
    front: "Qual é o principal marcador tumoral sérico utilizado no acompanhamento do adenocarcinoma de ovário epitelial?",
    back: "CA-125.",
    explanation: "Referência: Berek & Novak. Não é altamente específico para diagnóstico isolado (pode elevar em endometriose ou gravidez), mas é excelente para monitorar recorrência tumoral pós-tratamento."
  },

  // ── MEDICINA DE FAMÍLIA / SUS ──
  {
    id: "fc_sus_001",
    subject: "Medicina de Família/SUS",
    front: "Quais são os quatro atributos essenciais da Atenção Primária à Saúde (APS) segundo Barbara Starfield?",
    back: "Acesso de Primeiro Contato, Longitudinalidade, Coordenação do Cuidado e Integralidade.",
    explanation: "Referência: Duncan (Medicina Ambulatorial e de Família) / Starfield. Existem também os atributos derivados (orientação familiar, orientação comunitária e competência cultural)."
  },
  {
    id: "fc_sus_002",
    subject: "Medicina de Família/SUS",
    front: "Qual é a diferença básica entre Prevenção Primária e Prevenção Secundária?",
    back: "A prevenção primária reduz a incidência de uma doença removendo fatores de risco, enquanto a secundária detecta a doença em fase inicial assintomática.",
    explanation: "Referência: Duncan. Exemplo de primária: Vacinação. Exemplo de secundária: Rastreamento por mamografia ou preventivo (Papanicolau)."
  },
  {
    id: "fc_sus_003",
    subject: "Medicina de Família/SUS",
    front: "Qual é a definição de Prevenção Quaternária?",
    back: "Ações que visam identificar pacientes em risco de sobrediagnóstico ou sobretratamento, protegendo-os de intervenções médicas desnecessárias ou iatrogênicas.",
    explanation: "Referência: Marc Jamoulle / Duncan. Baseia-se no princípio ético da não-maleficência ('primum non nocere')."
  },
  {
    id: "fc_sus_004",
    subject: "Medicina de Família/SUS",
    front: "De acordo com as leis orgânicas do SUS (Lei 8.080/90), o que reza o princípio da Integralidade?",
    back: "Garantia de assistência à saúde em todos os níveis de complexidade, englobando ações promocionais, preventivas, curativas e reabilitadoras.",
    explanation: "Referência: Lei 8.080/90. Trata-se de um princípio doutrinário do SUS que enxerga o cidadão de forma holística e articulada."
  },
  {
    id: "fc_sus_005",
    subject: "Medicina de Família/SUS",
    front: "Qual lei dispõe sobre a participação da comunidade na gestão do SUS e as transferências intergovernamentais de recursos?",
    back: "Lei Federal nº 8.142/1990.",
    explanation: "Referência: Lei 8.142/90. Instituiu os Conselhos de Saúde (caráter permanente e deliberativo) e as Conferências de Saúde (reúnem-se a cada 4 anos)."
  },
  {
    id: "fc_sus_006",
    subject: "Medicina de Família/SUS",
    front: "Qual é a proporção de representação dos usuários nos Conselhos de Saúde estabelecida por lei?",
    back: "Paritária (50% de representantes de usuários, enquanto os outros 50% dividem-se entre trabalhadores da saúde, prestadores de serviço e governo).",
    explanation: "Referência: Lei 8.142/90 / Resolução 453 do CNS. Garante a participação popular direta no controle social das políticas de saúde pública."
  },
  {
    id: "fc_sus_007",
    subject: "Medicina de Família/SUS",
    front: "Qual ferramenta do Método Clínico Centrado na Pessoa (MCCP) foca na experiência subjetiva da doença pelo paciente?",
    back: "Componente S.I.F.E. (Sentimentos, Ideias, Funcionamento e Expectativas).",
    explanation: "Referência: McWhinney / Duncan. Ajuda a compreender o que a doença significa na vida da pessoa, fortalecendo a relação médico-paciente e a adesão."
  },
  {
    id: "fc_sus_008",
    subject: "Medicina de Família/SUS",
    front: "No âmbito do SUS, o que significa o termo Referência e Contrarreferência?",
    back: "Referência é o encaminhamento do paciente para serviços de maior complexidade, e contrarreferência é o retorno do paciente ao serviço de origem (APS) com as condutas anotadas.",
    explanation: "Referência: Portarias do MS. É a base da rede hierarquizada e regionalizada do SUS, garantindo o fluxo contínuo de cuidado."
  },

  // ── CARDIOLOGIA ──
  {
    id: "fc_card_001",
    subject: "Cardiologia",
    front: "Qual é a indicação imediata de intervenção em um paciente com Angina Instável ou Infarto sem supra de ST de muito alto risco?",
    back: "Estratégia invasiva imediata (cineangiocoronariografia / cateterismo) em até 2 horas.",
    explanation: "Referência: Diretrizes da SBC / Braunwald. Indicado em pacientes com instabilidade hemodinâmica, choque cardiogênico, dor torácica refratária ou arritmias ventriculares ameaçadoras da vida."
  },
  {
    id: "fc_card_002",
    subject: "Cardiologia",
    front: "Qual classe farmacológica anti-hipertensiva demonstrou retardar a progressão da nefropatia diabética com albuminúria?",
    back: "Inibidores da Enzima Conversora de Angiotensina (IECA) ou Bloqueadores dos Receptores de Angiotensina (BRA).",
    explanation: "Referência: Diretriz de Hipertensão Arterial da SBC / Harrison. Promovem vasodilatação da arteríola eferente glomerular, reduzindo a pressão intraglomerular e a proteinúria."
  },
  {
    id: "fc_card_003",
    subject: "Cardiologia",
    front: "Qual arritmia cardíaca cursa classicamente com ausência de onda P, intervalos R-R totalmente irregulares e presença de ondas f?",
    back: "Fibrilação Atrial (FA).",
    explanation: "Referência: Braunwald. É a arritmia sustentada mais comum na prática clínica, intimamente associada a risco de acidente vascular cerebral isquêmico embólico."
  },
  {
    id: "fc_card_004",
    subject: "Cardiologia",
    front: "Quais são as drogas que compõem a terapia quádrupla ('quarteto fantástico') com benefício de sobrevida na ICFEr?",
    back: "Beta-bloqueador, IECA/BRA ou Sacubitril/Valsartana, Antagonista de Receptor Mineralocorticoide (Espironolactona) e Inibidor de SGLT2 (Gliflozina).",
    explanation: "Referência: Diretrizes de IC da SBC / ESC. Essa combinação sinérgica reduz acentuadamente a mortalidade por todas as causas e as internações por insuficiência cardíaca."
  },
  {
    id: "fc_card_005",
    subject: "Cardiologia",
    front: "O que caracteriza a Estenose Aórtica grave no exame físico cardíaco?",
    back: "Sopro sistólico ejetivo rude (em diamante), com irradiação para as carótidas, associado a pulso parvus et tardus.",
    explanation: "Referência: Braunwald. À medida que a estenose progride, o pico do sopro torna-se mais tardio e a segunda bulha (B2) pode apresentar desdobramento paradoxal ou hipofonese."
  },
  {
    id: "fc_card_006",
    subject: "Cardiologia",
    front: "Qual o sinal eletrocardiográfico patognomônico de alternância elétrica de amplitude do QRS e o que sugere?",
    back: "Alternância elétrica de QRS; sugere tamponamento cardíaco ou derrame pericárdico volumoso.",
    explanation: "Referência: Harrison / Braunwald. Decorre da oscilação mecânica oscilatória do coração ('swinging heart') dentro do saco pericárdico repleto de líquido durante o ciclo cardíaco."
  },
  {
    id: "fc_card_007",
    subject: "Cardiologia",
    front: "Na endocardite infecciosa, quais são as lesões eritematosas, planas, indolores, localizadas nas palmas e plantas, e qual sua de origem?",
    back: "Lesões de Janeway. Origem: Microêmbolos sépticos que causam microabscessos locais.",
    explanation: "Referência: Harrison (Medicina Interna). São manifestações vasculares periféricas de endocardite e diferem dos nódulos de Osler por serem indolores e de origem embólica."
  },
  {
    id: "fc_card_008",
    subject: "Cardiologia",
    front: "Na endocardite infecciosa, quais são as lesões nodulares, dolorosas, localizadas nas polpas digitais, e qual sua causa?",
    back: "Nódulos de Osler. Causa: Deposição de imunocomplexos circulantes (reação imunológica).",
    explanation: "Referência: Harrison (Medicina Interna). São manifestações imunológicas da endocardite, ao passo que as lesões de Janeway são manifestações vasculares."
  },

  // ── PNEUMOLOGIA ──
  {
    id: "fc_pneu_001",
    subject: "Pneumologia",
    front: "Qual é o achado obrigatório na espirometria pós-broncodilatador que estabelece o diagnóstico de DPOC?",
    back: "Relação VEF1/CVF < 0,70.",
    explanation: "Referência: GOLD (Global Initiative for Chronic Obstructive Lung Disease) / SBPT. Confirma a presença de limitação de fluxo aéreo persistente e não totalmente reversível."
  },
  {
    id: "fc_pneu_002",
    subject: "Pneumologia",
    front: "Quais os critérios do escore CURB-65 para estratificação de gravidade e definição de internação na PAC?",
    back: "Confusão mental, Ureia ≥ 43 mg/dL, Frequência Respiratória ≥ 30 irpm, Pressão arterial (Sistólica < 90 ou Diastólica ≤ 60 mmHg) e Idade ≥ 65 anos.",
    explanation: "Referência: Diretrizes de PAC da SBPT. Pontuações de 0 a 1 sugerem tratamento ambulatorial; 2 sugerem avaliação para internação hospitalar curta; ≥ 3 indicam internação mandatória."
  },
  {
    id: "fc_pneu_003",
    subject: "Pneumologia",
    front: "Qual o teste genético indicado para pacientes jovens que desenvolvem enfisema panacinar em bases pulmonares, sem história de tabagismo?",
    back: "Dosagem sérica e genotipagem da Alfa-1-Antitripse.",
    explanation: "Referência: Fishman (Pneumologia). A deficiência congênita de alfa-1-antitripse acarreta destruição do parênquima pulmonar mediada por elastase neutrofílica sem oposição."
  },
  {
    id: "fc_pneu_004",
    subject: "Pneumologia",
    front: "Qual o sinal radiológico clássico de tromboembolismo pulmonar que consiste em uma cunha de opacidade periférica voltada para a pleura?",
    back: "Cunha de Hampton.",
    explanation: "Referência: Fishman / Harrison. É um sinal clássico, porém pouco frequente, que indica infarto pulmonar periférico decorrente de oclusão arterial."
  },
  {
    id: "fc_pneu_005",
    subject: "Pneumologia",
    front: "Qual o sinal radiológico de tromboembolismo pulmonar que corresponde a uma área de hipoperfusão/oligoemia focal?",
    back: "Sinal de Westermark.",
    explanation: "Referência: Fishman / Harrison. Representa a oligoemia distal à artéria obstruída pelo êmbolo, visualizada como hipertransparência focal na radiografia."
  },

  // ── GASTROENTEROLOGIA ──
  {
    id: "fc_gastro_001",
    subject: "Gastroenterologia",
    front: "Qual é o principal marcador sorológico associado à Colangite Biliar Primária (CBP)?",
    back: "Anticorpo Antimitocôndria (AMA).",
    explanation: "Referência: Sleisenger (Tratado de Gastroenterologia). CBP é uma doença autoimune caracterizada pela destruição progressiva dos ductos biliares intra-hepáticos de pequeno e médio calibre, cursando com colestase crônica."
  },
  {
    id: "fc_gastro_002",
    subject: "Gastroenterologia",
    front: "Quais são as duas principais causas etiológicas de Pancreatite Aguda no Brasil?",
    back: "Litíase Biliar e Etilismo.",
    explanation: "Referência: Sleisenger / Federação Brasileira de Gastroenterologia. A litíase biliar decorre da migração de cálculos que causam obstrução biliar e pancreática transitória."
  },
  {
    id: "fc_gastro_003",
    subject: "Gastroenterologia",
    front: "Qual é a conduta farmacológica prioritária para controle de sangramento por varizes esofágicas na admissão hospitalar?",
    back: "Infusão intravenosa de vasoconstritores esplâncnicos (Terlipressina, Octreotida ou Somatostatina).",
    explanation: "Referência: Consenso de Baveno / Sleisenger. Essas drogas reduzem a pressão portal e devem ser administradas antes mesmo da realização da endoscopia terapêutica."
  },

  // ── INFECTOLOGIA ──
  {
    id: "fc_inf_001",
    subject: "Infectologia",
    front: "Qual esquema preferencial é recomendado pelo Ministério da Saúde para Profilaxia Pós-Exposição (PEP) ao HIV?",
    back: "Tenofovir (TDF) + Lamivudina (3TC) + Dolutegravir (DTG) por 28 dias.",
    explanation: "Referência: Protocolo Clínico e Diretrizes Terapêuticas (PCDT) do Ministério da Saúde. Deve ser iniciada idealmente nas primeiras 2 horas após a exposição, com limite máximo de 72 horas."
  },
  {
    id: "fc_inf_002",
    subject: "Infectologia",
    front: "Qual é o achado clássico ao esfregaço direto ou histopatológico que confirma o diagnóstico de Paracoccidioidomicose?",
    back: "Leveduras multibrotantes com aspecto de 'roda de leme' (ou 'orelha de Mickey').",
    explanation: "Referência: Veronesi (Infectologia). Paracoccidioides brasiliensis é um fungo dimórfico prevalente na América Latina, afetando principalmente trabalhadores rurais."
  },
  {
    id: "fc_inf_003",
    subject: "Infectologia",
    front: "Qual antibiótico empírico deve ser associado em suspeita de meningite bacteriana aguda em idosos ou imunodeprimidos, além de Cefalosporina de 3ª geração?",
    back: "Ampicilina (visando cobertura de Listeria monocytogenes).",
    explanation: "Referência: Mandell (Princípios de Infectologia) / Harrison. A Listeria é um patógeno oportunista intracelular facultativo que apresenta resistência intrínseca às cefalosporinas."
  },

  // ── ENDOCRINOLOGIA ──
  {
    id: "fc_endo_001",
    subject: "Endocrinologia",
    front: "Qual é o anticorpo mais específico e frequentemente encontrado na Tireoidite de Hashimoto?",
    back: "Anticorpo Anti-tireoperoxidase (Anti-TPO).",
    explanation: "Referência: Williams Textbook of Endocrinology. Indica processo autoimune de infiltração linfocitária da tireoide, culminando em hipotireoidismo primário."
  },
  {
    id: "fc_endo_002",
    subject: "Endocrinologia",
    front: "Quais as alterações eletrolíticas características encontradas em um paciente com Crise Adrenal Aguda por hipoaldosteronismo primário?",
    back: "Hiponatremia e Hiperpotassemia (associadas a acidose metabólica).",
    explanation: "Referência: Williams. A falta de aldosterona impede a reabsorção de sódio e a excreção urinária de potássio e hidrogênio nos túbulos coletores renais."
  },
  {
    id: "fc_endo_003",
    subject: "Endocrinologia",
    front: "Quais são os três testes de triagem recomendados para o diagnóstico de Síndrome de Cushing?",
    back: "Cortisol salivar à meia-noite, teste de supressão com dexametasona 1mg (overnight) ou cortisol livre urinário de 24 horas.",
    explanation: "Referência: Williams Textbook of Endocrinology / Diretrizes SBEM. Exigem confirmação em pelo menos dois testes alterados para prosseguir na investigação etiológica."
  },

  // ── NEUROLOGIA ──
  {
    id: "fc_neuro_001",
    subject: "Neurologia",
    front: "Qual é o tempo de janela terapêutica máxima aprovado para trombólise química endovenosa com r-tPA no AVC isquêmico agudo?",
    back: "Até 4,5 horas do início dos sintomas (ou do último momento visto normal).",
    explanation: "Referência: Diretrizes de AVC (AHA/ASA) / Adams and Victor. Em casos selecionados de oclusão de grande vaso, a trombectomia mecânica pode ser realizada em janelas maiores (de 6 até 24h)."
  },
  {
    id: "fc_neuro_002",
    subject: "Neurologia",
    front: "Qual é a tríade clínica clássica da Hidrocefalia de Pressão Normal (Síndrome de Hakim-Adams)?",
    back: "Apraxia da marcha ('marcha magnética'), incontinência urinária e demência progressiva subcortical.",
    explanation: "Referência: Adams and Victor (Neurologia). O 'tap test' (retirada de liquor de alívio) ajuda a predizer se o paciente se beneficiará de uma derivação ventriculoperitoneal."
  },
  {
    id: "fc_neuro_003",
    subject: "Neurologia",
    front: "Qual anticorpo sérico está presente na maioria dos pacientes com Miastenia Gravis generalizada?",
    back: "Anticorpo Anti-Receptor de Acetilcolina (Anti-AChR).",
    explanation: "Referência: Adams and Victor. Atua bloqueando e destruindo os receptores pós-sinápticos na junção neuromuscular, levando a fadiga flutuante pior ao fim do dia."
  },

  // ── REUMATOLOGIA ──
  {
    id: "fc_reuma_001",
    subject: "Reumatologia",
    front: "Qual é o padrão clássico de acometimento articular periférico na Artrite Reumatoide?",
    back: "Poliartrite simétrica, aditiva, crônica, acometendo principalmente pequenas articulações (poupando as interfalangianas distais).",
    explanation: "Referência: Kelley (Tratado de Reumatologia). Apresenta rigidez matinal superior a 1 hora e melhora com a atividade física, acometendo punhos, MCFs e MTFs."
  },
  {
    id: "fc_reuma_002",
    subject: "Reumatologia",
    front: "Quais são os anticorpos mais específicos para o diagnóstico de Lúpus Eritematoso Sistêmico (LES)?",
    back: "Anticorpo Anti-DNA de dupla hélice (nativo) e Anticorpo Anti-Sm.",
    explanation: "Referência: Kelley / Critérios ACR/EULAR. O FAN é altamente sensível, mas possui baixa especificidade, sendo o Anti-Sm o marcador de maior especificidade para o LES."
  },
  {
    id: "fc_reuma_003",
    subject: "Reumatologia",
    front: "Qual achado na análise do líquido sinovial por microscopia de luz polarizada confirma o diagnóstico de Gota?",
    back: "Presença de cristais de urato monossódico em formato de agulhas com forte birrefringência negativa.",
    explanation: "Referência: Kelley. Diferencia-se da pseudogota (depósito de pirofosfato de cálcio), que exibe cristais romboides com birrefringência fracamente positiva."
  }
];
