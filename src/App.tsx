/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo, useRef, useCallback, type ReactNode } from 'react';
import { QUESTIONS as ALL_QUESTIONS_IMPORTED } from "./questions";
import { useAuth } from './AuthContext';
import LoginScreen from './LoginScreen';
import { PaywallModal, CheckoutReturnModal, type PaywallReason } from './Paywall';
import { Mascot, mascotPhrasesFor, pickPhrase, MASCOT_PERSONALITIES, type MascotPersonality } from './Mascot';
import { normalizeQuestion, isUsableQuestion } from './questionNormalize';
import { ENARE_EXTRA_QUESTIONS } from './enare_extra_questions';
import { ENARE_2024_FULL as ENARE_2024_QUESTIONS } from './enare_2024_questions';
import { ANAT_QUESTIONS } from './estudante_basico_anat';
import { IAMSPE_EXTRA_QUESTIONS } from './iamspe_extra_questions';
import { IAMSPE_REAL_QUESTIONS_PACK1 } from './iamspe_real_questions_pack1';
import { COMVEST_UNICAMP_QUESTIONS } from './comvest_unicamp_questions';
import { COMVEST_UNICAMP_2025_ALL } from './comvest_unicamp_2025_all';
import { COMVEST_UNICAMP_2025_EXTENDED } from './comvest_unicamp_2025_extended';
import { COMVEST_UNICAMP_2025_V2 } from './comvest_unicamp_2025_v2';
import { PUCPR_2010_QUESTIONS } from './pucpr_2010_questions';
import { COMVEST_UNICAMP_2025_V3 } from './comvest_unicamp_2025_v3';
import { UFPR_2019_101_QUESTIONS } from './ufpr_2019_101_questions';
import { UFPR_2021_102_QUESTIONS } from './ufpr_2021_102_questions';
import { UFRJ_2024_QUESTIONS } from './ufrj_2024_questions';
import { UFRJ_EXTRA_QUESTIONS } from './ufrj_extra_questions';
import { HCPA_2024_QUESTIONS } from './hcpa_2024_questions';
import { HCPA_2023_QUESTIONS } from './hcpa_2023_questions';
import { HCPA_2022_QUESTIONS } from './hcpa_2022_questions';
import { PSU_MG_2025_QUESTIONS } from './psu_mg_2025_questions';
import { PSU_MG_2026_QUESTIONS } from './psu_mg_2026_questions';
import { AMRIGS_2023_QUESTIONS } from './amrigs_2023_questions';
import { AMRIGS_2024_QUESTIONS } from './amrigs_2024_questions';
import { AMRIGS_2025_QUESTIONS } from './amrigs_2025_questions';
import { EINSTEIN_2026_QUESTIONS } from './einstein_2026_questions';
import { EINSTEIN_MEDWAY_2025_QUESTIONS } from './einstein_medway_2025_questions';
import { UNIFESP_2024_QUESTIONS } from './unifesp_2024_questions';
import { UNIFESP_2025_QUESTIONS } from './unifesp_2025_questions';
import { UNIFESP_2026_QUESTIONS } from './unifesp_2026_questions';
import { UFSC_2010_R3_CIRURGIA_QUESTIONS } from './ufsc_2010_r3_cirurgia_questions';
import { UFSC_2011_QUESTIONS } from './ufsc_2011_questions';
import { UFSC_2014_QUESTIONS } from './ufsc_2014_questions';
import { Q_BASICO_1 } from './q_basico_1';
import { Q_BASICO_2 } from './q_basico_2';
import { Q_BASICO_3 } from './q_basico_3';
import { Q_CLINICO_1 } from './q_clinico_1';
import { Q_CLINICO_2 } from './q_clinico_2';
import { Q_CLINICO_3 } from './q_clinico_3';
import { Q_CLINICO_4 } from './q_clinico_4';
import { Q_INTERNATO_1 } from './q_internato_1';
import { REAL_FLASHCARDS } from './flashcards';
import { BASICO_QUESTIONS } from './basico_questions';
import { CLINICO_QUESTIONS } from './clinico_questions';
import { INTERNATO_QUESTIONS } from './internato_questions';
import { ENAMED_2025_QUESTIONS } from './enamed_2025_questions';
import { ENAMED_INEDITA_QUESTIONS } from './enamed_inedita_questions';
import { ENAMED_INEDITA_2_QUESTIONS } from './enamed_inedita_2_questions';
import DoctordleMode from './DoctordleMode';
import { setSfxEnabled, playCorrect, playWrong, playLevelUp, playTick, playTimeout } from './sfx';
import {
  ensureFriendCode, addFriendByCode, acceptFriend, watchFriendships,
  createBattle, getBattle, submitBattleScore, markRewarded, watchBattles,
  createRoom, findRoomByCode, joinRoom, watchRoom, updateRoom, answerRoom,
  bumpWin, fetchWins, fetchProfiles,
  type Friendship, type Battle, type Room, type PublicProfile,
} from './social';
import {
  Trophy,
  Flame,
  Zap,
  Heart,
  Snowflake,
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  User,
  UserPlus,
  Search,
  Camera,
  Edit2,
  Check,
  Activity,
  Copy,
  Link,
  Clock,
  RotateCcw,
  AlertTriangle,
  Users,
  Eye,
  Brain,
  Baby,
  Droplets,
  Droplet,
  FlaskConical,
  Bug,
  Dna,
  Microscope,
  Stethoscope,
  Skull,
  Scissors,
  Bone,
  Ear,
  Sun,
  Wind,
  Pill,
  MessageCircle,
  LayoutDashboard, 
  BookOpen, 
  Award,
  CircleHelp,
  ArrowLeft,
  Share2,
  Swords,
  Plus,
  Layers,
  RotateCw,
  RefreshCcw,
  Volume2,
  VolumeX,
  Timer,
  TimerOff,
  BarChart3,
  Target,
  Thermometer,
  Hospital,
  TrendingUp,
  LineChart as LineChartIcon,
  Shield,
  Diamond,
  Crown,
  UserCircle,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  TrendingDown,
  CalendarDays,
  BarChart2,
  Star,
  Building2,
  Leaf,
  Trash2,
  Bell
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  ReferenceLine,
  Cell
} from 'recharts';
import { motion, AnimatePresence } from 'motion/react';

const LOADING_TEXTS = [
  'Analisando seu histórico...',
  'Selecionando questão difícil...',
  'Calibrando dificuldade...',
  'Buscando questões de banca...',
  'Preparando seu desafio...',
];

/// --- Types ---

type Cycle = 'Ciclo Básico' | 'Ciclo Clínico' | 'Internato';

type Subject = 
  | 'Anatomia' | 'Fisiologia' | 'Bioquímica' | 'Histologia' | 'Embriologia' | 'Microbiologia' | 'Imunologia' | 'Genética' | 'Farmacologia'
  | 'Clínica Médica' | 'Clínica Cirúrgica' | 'Ginecologia & Obstetrícia' | 'Pediatria' | 'Psiquiatria' | 'Dermatologia' | 'Oftalmologia' | 'Otorrinolaringologia' | 'Medicina de Família/SUS'
  | 'Cardiologia' | 'Neurologia' | 'Pneumologia' | 'Gastroenterologia' | 'Endocrinologia' | 'Nefrologia' | 'Reumatologia' | 'Hematologia' | 'Infectologia' | 'Cirurgia Geral'
  | 'Urgência e Emergência' | 'Medicina Intensiva' | 'Ortopedia' | 'Neonatologia' | 'Anestesiologia' | 'Traumatologia-Ortopedia'
  | 'Patologia' | 'Parasitologia' | 'Semiologia' | 'Epidemiologia'
  | 'Urologia' | 'Geriatria' | 'Radiologia'
  | 'Cirurgia Vascular' | 'Neurocirurgia';

export interface Question {
  id: string;
  cycle: Cycle;
  subject: Subject;
  subSubject?: string;
  banca?: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

interface UserState {
  name: string;
  profileImage?: string;
  xp: number;
  level: number;
  streak: number;
  hearts: number;
  dailyGoalDone: number;
  dailyGoalTotal: number;
  weeklyGoalDone: number;
  weeklyGoalTotal: number;
  friends: string[];
  mastery: Record<string, number>;
  subjectAttempts: Record<string, number>;
  planStartDate: string;
  missedQuestionIds: string[];
  dailyQuestionsUsed: number;
  lastActiveDate: string;
  // Registro real de atividade por dia (data ISO 'YYYY-MM-DD' -> nº de questões respondidas).
  activityLog: Record<string, number>;
  // Matérias estudadas em cada dia (data ISO 'YYYY-MM-DD' -> matéria -> nº de questões respondidas).
  activitySubjects: Record<string, Record<string, number>>;
  // Último dia em que o usuário efetivamente estudou (para o streak diário).
  lastStudyDate: string;
  // Congelamentos de sequência disponíveis (estilo Duolingo Streak Freeze).
  // Protege o streak automaticamente quando 1 dia é perdido. Máx. 2 guardados.
  streakFreezes: number;
  // Dias (ISO 'YYYY-MM-DD') em que o streak foi salvo por um congelamento —
  // usado pra mostrar o ícone de gelo no heatmap em vez de dia vazio/perdido.
  frozenDays: string[];
  // Flashcards criados pela própria pessoa (pergunta/resposta livres).
  customFlashcards: CustomFlashcard[];
  // Agenda de provas/atividades marcadas pelo usuário (lembretes + estudo do dia).
  agenda: AgendaEvent[];
  // Personalidade do mascote Dr. Quest (muda as falas durante o quiz).
  mascotPersonality: MascotPersonality;
}

// Evento na agenda: prova ou atividade marcada para um dia, opcionalmente
// vinculada a uma matéria (para o app oferecer questões do assunto).
export interface AgendaEvent {
  id: string;
  title: string;                 // ex.: "Prova de Cardiologia"
  subject: string;               // matéria para gerar questões ('' = sem vínculo)
  date: string;                  // 'YYYY-MM-DD' (dia do evento)
  type: 'prova' | 'atividade';
  createdAt: number;
}

export interface CustomFlashcard {
  id: string;
  subject: string;
  front: string;
  back: string;
  explanation?: string;
  createdAt: number;
}

// Máximo de corações (recarrega para este valor a cada novo dia).
const MAX_HEARTS = 5;

// Limite diário do plano free. Premium (por trilha) = ilimitado. O gate nunca
// trava sem aviso: o contador fica visível no header e, ao esgotar, abre o
// paywall com os planos (Estudante 29,90 / Residência 79,90 — ver Paywall.tsx).
const FREE_DAILY_LIMIT = 10;

// Streak Freeze (estilo Duolingo): protege a sequência quando a pessoa perde
// um dia de estudo. Guarda no máximo 2; ganha +1 a cada 7 dias de streak.
const MAX_STREAK_FREEZES = 2;
const FREEZE_MILESTONE_DAYS = 7;

// Embaralhamento uniforme (Fisher-Yates) — substitui o enviesado sort(()=>Math.random()-0.5).
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Modos de estudo ────────────────────────────────────────────────────────
// foco: cronômetro por questão; a velocidade da resposta vale XP extra.
// zen : sem cronômetro; todo acerto vale sempre o mesmo XP.
export type QuizMode = 'foco' | 'zen';

const ZEN_XP = 50;          // XP fixo por acerto no modo zen
const FOCO_BASE_XP = 50;    // base do modo foco (sobe com o combo)

// Simulado montado pelo usuário: prova longa de até 100 questões.
const SIMULADO_SIZE = 100;
// No simulado de residência, mistura questões da própria banca com questões
// "baseadas na banca" (mesmos assuntos, de outras fontes). Alvo de ~70% da banca.
const SIMULADO_BANCA_SHARE = 0.7;

// Bônus de rapidez (modo foco): quanto mais rápido o acerto, mais XP.
function speedBonusFor(seconds: number): number {
  if (seconds <= 10) return 50;
  if (seconds <= 20) return 30;
  if (seconds <= 35) return 15;
  return 0;
}

// XP de um acerto. No zen o combo não conta — o ganho é sempre o mesmo.
function xpForCorrect(mode: QuizMode, combo: number, seconds: number): number {
  if (mode === 'zen') return ZEN_XP;
  const base = combo >= 5 ? 100 : combo >= 3 ? 75 : FOCO_BASE_XP;
  return base + speedBonusFor(seconds);
}

// Chave de dia (YYYY-MM-DD) no fuso do usuário.
// toISOString() devolve a data em UTC: no Brasil (UTC-3), qualquer estudo feito
// depois das 21h seria contabilizado no dia seguinte, e o calendário mostraria o
// dia errado à noite. Por isso montamos a chave a partir da data local.
function dateKey(d: Date = new Date()): string {
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${mm}-${dd}`;
}

// Progresso é salvo por conta (uid), nunca numa chave global compartilhada —
// senão um usuário novo no mesmo aparelho herdaria os dados de quem usou antes.
const LAST_UID_KEY = 'mq_last_uid';
function userStorageKey(uid: string): string {
  return `mq_user_${uid}`;
}

// Estado zerado de um usuário novo. Usado tanto no primeiro carregamento
// quanto sempre que detectamos uma conta diferente da que estava carregada.
function makeDefaultUserState(): UserState {
  const today = dateKey();
  return {
    name: '',
    profileImage: undefined,
    xp: 0,
    level: 1,
    streak: 0,
    hearts: MAX_HEARTS,
    dailyGoalDone: 0,
    dailyGoalTotal: 10,
    weeklyGoalDone: 0,
    weeklyGoalTotal: 70,
    friends: [],
    mastery: {
      'Clínica Médica': 0, 'Clínica Cirúrgica': 0, 'Pediatria': 0,
      'Ginecologia & Obstetrícia': 0, 'Medicina de Família/SUS': 0,
      'Anatomia': 0, 'Fisiologia': 0, 'Histologia': 0,
      'Embriologia': 0, 'Microbiologia': 0, 'Imunologia': 0, 'Farmacologia': 0,
    },
    subjectAttempts: {},
    planStartDate: today,
    missedQuestionIds: [],
    dailyQuestionsUsed: 0,
    lastActiveDate: today,
    activityLog: {},
    activitySubjects: {},
    lastStudyDate: '',
    streakFreezes: 1,
    frozenDays: [],
    customFlashcards: [],
    agenda: [],
    mascotPersonality: 'motivador',
  };
}

// Lê o snapshot local (se houver) de uma conta específica e mescla com os
// padrões, aplicando o reset diário de corações/meta quando já é outro dia.
function loadLocalUserState(uid: string): UserState {
  const defaults = makeDefaultUserState();
  try {
    const saved = localStorage.getItem(userStorageKey(uid));
    if (!saved) return defaults;
    const parsed: UserState = JSON.parse(saved);
    const isNewDay = parsed.lastActiveDate !== defaults.lastActiveDate;
    return {
      ...defaults,
      ...parsed,
      hearts: isNewDay ? MAX_HEARTS : (parsed.hearts ?? MAX_HEARTS),
      dailyGoalDone: isNewDay ? 0 : (parsed.dailyGoalDone ?? 0),
      dailyQuestionsUsed: isNewDay ? 0 : (parsed.dailyQuestionsUsed ?? 0),
      activityLog: parsed.activityLog ?? {},
      activitySubjects: parsed.activitySubjects ?? {},
      lastStudyDate: parsed.lastStudyDate ?? '',
      streakFreezes: parsed.streakFreezes ?? defaults.streakFreezes,
      frozenDays: parsed.frozenDays ?? [],
      customFlashcards: parsed.customFlashcards ?? [],
      agenda: parsed.agenda ?? [],
      mascotPersonality: parsed.mascotPersonality ?? 'motivador',
      lastActiveDate: defaults.lastActiveDate,
    };
  } catch {
    return defaults;
  }
}

// Atualiza streak (dias consecutivos) e registra a atividade real do dia.
// Chamado a cada questão respondida (certa ou errada).
//
// Streak Freeze (estilo Duolingo): se a pessoa pulou dias e tem gelo
// suficiente guardado, o streak é preservado automaticamente em vez de
// zerar — cada dia pulado consome 1 gelo. Sem gelo suficiente, reinicia
// em 1 como antes. A cada marco de 7 dias de streak, ganha +1 gelo (máx. 2).
function dailyProgress(prev: UserState, subject?: string): Pick<UserState, 'streak' | 'lastStudyDate' | 'activityLog' | 'activitySubjects' | 'streakFreezes' | 'frozenDays'> {
  const today = dateKey();
  const yesterday = dateKey(new Date(Date.now() - 86400000));
  let streak = prev.streak;
  let lastStudyDate = prev.lastStudyDate;
  let streakFreezes = prev.streakFreezes ?? 0;
  let frozenDays = prev.frozenDays ?? [];

  if (prev.lastStudyDate !== today) {
    if (prev.lastStudyDate === '') {
      streak = 1; // primeiro estudo de todos
    } else if (prev.lastStudyDate === yesterday) {
      streak = prev.streak + 1; // continuação normal
    } else {
      // Quantos dias corridos ficaram sem nenhum estudo entre o último
      // dia estudado e hoje (exclusive nas duas pontas).
      const lastDate = new Date(prev.lastStudyDate + 'T00:00:00');
      const todayDate = new Date(today + 'T00:00:00');
      const daysMissed = Math.round((todayDate.getTime() - lastDate.getTime()) / 86400000) - 1;

      if (daysMissed > 0 && streakFreezes >= daysMissed) {
        streakFreezes -= daysMissed;
        const newlyFrozen: string[] = [];
        for (let i = 1; i <= daysMissed; i++) {
          const d = new Date(lastDate);
          d.setDate(d.getDate() + i);
          newlyFrozen.push(dateKey(d));
        }
        frozenDays = [...frozenDays, ...newlyFrozen];
        streak = prev.streak + 1;
      } else {
        streak = 1; // sem gelo suficiente pra cobrir os dias perdidos
      }
    }
    lastStudyDate = today;
    if (streak > 0 && streak % FREEZE_MILESTONE_DAYS === 0) {
      streakFreezes = Math.min(MAX_STREAK_FREEZES, streakFreezes + 1);
    }
  }

  const activityLog = { ...prev.activityLog, [today]: (prev.activityLog[today] || 0) + 1 };
  const todaySubjects = prev.activitySubjects?.[today] || {};
  const activitySubjects = subject
    ? { ...prev.activitySubjects, [today]: { ...todaySubjects, [subject]: (todaySubjects[subject] || 0) + 1 } }
    : prev.activitySubjects || {};
  return { streak, lastStudyDate, activityLog, activitySubjects, streakFreezes, frozenDays };
}

interface SessionResult {
  correct: number;
  total: number;
  xpGained: number;
}

// --- Mock Data ---

const HIERARCHY: Record<Cycle, Partial<Record<Subject, string[]>>> = {
  'Ciclo Básico': {
    // Com questões
    'Anatomia': [],
    'Fisiologia': [],
    'Bioquímica': [],
    'Histologia': [],
    'Embriologia': [],
    'Microbiologia': [],
    'Imunologia': [],
    'Genética': [],
    'Farmacologia': [],
    // Em breve
    'Patologia': [],
    'Parasitologia': [],
    'Semiologia': [],
    'Epidemiologia': []
  },
  'Ciclo Clínico': {
    // Grandes blocos (≥20 questões)
    'Ginecologia & Obstetrícia': [],
    'Pediatria': [],
    'Medicina de Família/SUS': [],
    'Cirurgia Geral': [],
    // Especialidades com questões
    'Cardiologia': [],
    'Pneumologia': [],
    'Gastroenterologia': [],
    'Infectologia': [],
    'Endocrinologia': [],
    'Clínica Médica': [],
    'Clínica Cirúrgica': [],
    'Psiquiatria': [],
    'Reumatologia': [],
    'Nefrologia': [],
    // Em breve
    'Neurologia': [],
    'Hematologia': [],
    'Dermatologia': [],
    'Oftalmologia': [],
    'Otorrinolaringologia': [],
    'Ortopedia': [],
    'Urologia': [],
    'Geriatria': [],
    'Radiologia': []
  },
  'Internato': {
    'Urgência e Emergência': [],
    'Medicina Intensiva': [],
    'Anestesiologia': [],
    'Neonatologia': [],
    'Traumatologia-Ortopedia': [],
    'Cirurgia Vascular': [],
    'Neurocirurgia': []
  }
};

// Metadados visuais por matéria, usados para montar o Roteiro da Semana
// dinamicamente a partir do ciclo escolhido (ver buildWeekPlan).
const SUBJECT_META: Partial<Record<Subject, { emoji: string; shortLabel: string; tip: string; color: string }>> = {
  // Ciclo Básico
  'Anatomia':                   { emoji: '📖', shortLabel: 'Anatomia',   tip: 'Estruturas fundamentais que sustentam todas as especialidades.',   color: '#6366F1' },
  'Fisiologia':                 { emoji: '🫀', shortLabel: 'Fisiologia', tip: 'Como o corpo funciona — a base pra entender toda doença.',          color: '#0e9f43' },
  'Bioquímica':                 { emoji: '🧪', shortLabel: 'Bioquímica', tip: 'As reações que explicam metabolismo e doenças metabólicas.',        color: '#f1c100' },
  'Histologia':                 { emoji: '🔬', shortLabel: 'Histologia', tip: 'Tecidos ao microscópio — a ponte entre anatomia e patologia.',      color: '#7C3AED' },
  'Embriologia':                { emoji: '🐣', shortLabel: 'Embriologia',tip: 'Desenvolvimento humano, da fecundação às malformações.',            color: '#DB2777' },
  'Microbiologia':              { emoji: '🦠', shortLabel: 'Microbio',   tip: 'Bactérias, vírus e fungos — a base da infectologia.',                color: '#12b449' },
  'Imunologia':                 { emoji: '🛡️', shortLabel: 'Imuno',      tip: 'Como o corpo se defende — essencial pra entender autoimunidade.',    color: '#00a7e1' },
  'Genética':                   { emoji: '🧬', shortLabel: 'Genética',   tip: 'Herança, mutações e as doenças genéticas mais cobradas.',            color: '#6366F1' },
  'Farmacologia':                { emoji: '💊', shortLabel: 'Farmaco',    tip: 'Os fármacos mais cobrados. Base pra toda prescrição.',               color: '#EA580C' },
  'Patologia':                  { emoji: '🔬', shortLabel: 'Patologia',  tip: 'O mecanismo por trás de cada doença clínica.',                       color: '#64748B' },
  'Parasitologia':              { emoji: '🪱', shortLabel: 'Parasito',   tip: 'Parasitoses endêmicas no Brasil — clássico de prova.',                color: '#0e9f43' },
  'Semiologia':                 { emoji: '🩺', shortLabel: 'Semiologia', tip: 'A arte de examinar — a base de todo diagnóstico clínico.',           color: '#00658a' },
  'Epidemiologia':              { emoji: '📊', shortLabel: 'Epidemio',   tip: 'Indicadores de saúde e desenho de estudos. Sempre cai.',             color: '#00a7e1' },
  // Ciclo Clínico
  'Ginecologia & Obstetrícia':  { emoji: '🤰', shortLabel: 'Gineco',     tip: 'Pré-natal, parto, puerpério e ginecologia geral.',                   color: '#DB2777' },
  'Pediatria':                  { emoji: '👶', shortLabel: 'Pediatria',  tip: 'Do neonato à adolescência. Alta frequência nas principais bancas.',  color: '#7C3AED' },
  'Medicina de Família/SUS':    { emoji: '🩺', shortLabel: 'Família',    tip: 'Atenção primária e políticas de saúde pública. Muito cobrado!',      color: '#0e9f43' },
  'Cirurgia Geral':             { emoji: '🏨', shortLabel: 'Cir. Geral', tip: 'Abdome agudo, trauma e pré/pós-operatório.',                         color: '#DC2626' },
  'Cardiologia':                { emoji: '❤️', shortLabel: 'Cardio',     tip: 'Síndromes coronarianas, IC e arritmias. Alto peso nas bancas.',      color: '#ba1a1a' },
  'Pneumologia':                { emoji: '💨', shortLabel: 'Pneumo',     tip: 'Asma, DPOC e pneumonias — recorrente em todas as provas.',           color: '#00a7e1' },
  'Gastroenterologia':          { emoji: '🫁', shortLabel: 'Gastro',     tip: 'Doenças do trato digestivo e hepatobiliares.',                       color: '#EA580C' },
  'Infectologia':               { emoji: '🦠', shortLabel: 'Infecto',    tip: 'Doenças infecciosas prevalentes no Brasil.',                         color: '#12b449' },
  'Endocrinologia':             { emoji: '💉', shortLabel: 'Endocrino',  tip: 'Diabetes, tireoide e distúrbios hormonais.',                         color: '#f1c100' },
  'Clínica Médica':             { emoji: '🏥', shortLabel: 'Clínica M.',  tip: 'A matéria com maior peso nas provas de residência do Brasil.',       color: '#00658a' },
  'Clínica Cirúrgica':          { emoji: '🔬', shortLabel: 'Clínica C.',  tip: 'Urgências, trauma e procedimentos cirúrgicos essenciais.',            color: '#DC2626' },
  'Psiquiatria':                { emoji: '💬', shortLabel: 'Psiquiatria',tip: 'Transtornos mentais e psicofarmacologia.',                           color: '#7C3AED' },
  'Reumatologia':               { emoji: '🦴', shortLabel: 'Reumato',    tip: 'Doenças autoimunes e articulares.',                                  color: '#EA580C' },
  'Nefrologia':                 { emoji: '🫘', shortLabel: 'Nefro',      tip: 'Distúrbios renais e hidroeletrolíticos.',                            color: '#0e9f43' },
  'Neurologia':                 { emoji: '🧠', shortLabel: 'Neuro',      tip: 'AVC, epilepsia e emergências neurológicas.',                         color: '#6366F1' },
  'Hematologia':                { emoji: '🩸', shortLabel: 'Hemato',     tip: 'Anemias, coagulopatias e neoplasias hematológicas.',                 color: '#ba1a1a' },
  'Dermatologia':               { emoji: '🧴', shortLabel: 'Dermato',    tip: 'Lesões de pele mais cobradas nas provas.',                           color: '#DB2777' },
  'Oftalmologia':               { emoji: '👁️', shortLabel: 'Oftalmo',    tip: 'Urgências oftalmológicas e doenças prevalentes.',                    color: '#00a7e1' },
  'Otorrinolaringologia':       { emoji: '👂', shortLabel: 'Otorrino',   tip: 'Vias aéreas superiores e audição.',                                  color: '#f1c100' },
  'Ortopedia':                  { emoji: '🦴', shortLabel: 'Orto',       tip: 'Fraturas, luxações e afecções do aparelho locomotor.',               color: '#64748B' },
  'Urologia':                   { emoji: '💧', shortLabel: 'Uro',        tip: 'Afecções do trato urinário e próstata.',                             color: '#00658a' },
  'Geriatria':                  { emoji: '👴', shortLabel: 'Geriatria',  tip: 'Síndromes geriátricas e polifarmácia.',                              color: '#7C3AED' },
  'Radiologia':                 { emoji: '🩻', shortLabel: 'Radio',      tip: 'Interpretação de exames de imagem essenciais.',                      color: '#64748B' },
  // Internato
  'Urgência e Emergência':      { emoji: '🚨', shortLabel: 'Urgência',   tip: 'Suporte de vida e condutas na sala de emergência.',                  color: '#DC2626' },
  'Medicina Intensiva':         { emoji: '🫀', shortLabel: 'UTI',        tip: 'Cuidados críticos e suporte multiorgânico.',                         color: '#ba1a1a' },
  'Anestesiologia':             { emoji: '💉', shortLabel: 'Anestesia',  tip: 'Farmacologia anestésica e manejo perioperatório.',                   color: '#6366F1' },
  'Neonatologia':               { emoji: '👼', shortLabel: 'Neonato',    tip: 'Cuidados com o recém-nascido, do parto à UTI neonatal.',             color: '#DB2777' },
  'Traumatologia-Ortopedia':    { emoji: '🩹', shortLabel: 'Trauma-Orto',tip: 'Trauma ortopédico e condutas de urgência.',                          color: '#EA580C' },
  'Cirurgia Vascular':          { emoji: '🫀', shortLabel: 'Cir. Vasc.', tip: 'Doenças arteriais e venosas mais cobradas.',                         color: '#00658a' },
  'Neurocirurgia':              { emoji: '🧠', shortLabel: 'Neurocir.',  tip: 'Emergências neurocirúrgicas essenciais pro internato.',              color: '#6366F1' },
};

interface WeekPlanItem { emoji: string; shortLabel: string; label: string; subject: Subject; cycle: Cycle; tip: string; color: string }

// Monta o roteiro de 7 dias a partir do ciclo escolhido, usando só matérias
// que de fato têm questões no pool passado (evita "Iniciar" cair em vazio).
// Repete a lista quando o ciclo tem menos de 7 matérias com conteúdo.
function buildWeekPlan(cycle: Cycle, pool: Question[]): WeekPlanItem[] {
  const withQuestions = (Object.keys(HIERARCHY[cycle]) as Subject[])
    .map(subject => ({ subject, count: pool.reduce((n, q) => n + (q.subject === subject ? 1 : 0), 0) }))
    .filter(s => s.count > 0)
    .sort((a, b) => b.count - a.count);

  if (withQuestions.length === 0) return [];

  return Array.from({ length: 7 }, (_, i) => {
    const { subject } = withQuestions[i % withQuestions.length];
    const meta = SUBJECT_META[subject] ?? { emoji: '📚', shortLabel: subject.slice(0, 10), tip: '', color: '#00658a' };
    return { ...meta, label: subject, subject, cycle };
  });
}


const QUESTIONS: Question[] = ALL_QUESTIONS_IMPORTED;

// Trilha Estudante: questões sem banca (conteúdo educacional próprio) ou marcadas
// explicitamente como 'Trilha Estudante' (banco gerado para os 3 ciclos).
// Questões de banca real (ENARE, CERMAM, IAMSPE, etc.) são exclusivas da Trilha Residência.
const QUESTIONS_ESTUDANTE = QUESTIONS.filter(q => !q.banca || q.banca === 'Trilha Estudante');

type LeaguePlayer = { name: string; initials: string; xp: number; level: number; active: boolean; trend: number; currentUser?: boolean; streak?: number };
type LeagueTier = 'bronze' | 'prata' | 'ouro' | 'platina' | 'diamante';
const LEAGUE_XP: Record<LeagueTier, number> = { bronze: 0, prata: 1000, ouro: 5000, platina: 10000, diamante: 18000 };
function getUserLeague(xp: number): LeagueTier {
  if (xp >= 18000) return 'diamante';
  if (xp >= 10000) return 'platina';
  if (xp >= 5000)  return 'ouro';
  if (xp >= 1000)  return 'prata';
  return 'bronze';
}
const LEAGUE_CONFIG: Record<LeagueTier, { label: string; next: LeagueTier | null; trophyColor: string; gradFrom: string; gradVia: string; gradTo: string }> = {
  bronze:   { label: 'Liga Bronze',   next: 'prata',    trophyColor: '#CD7F32', gradFrom: 'from-amber-700',  gradVia: 'via-amber-800',  gradTo: 'to-amber-950'  },
  prata:    { label: 'Liga Prata',    next: 'ouro',     trophyColor: '#CBD5E1', gradFrom: 'from-slate-400',  gradVia: 'via-slate-600',  gradTo: 'to-slate-800'  },
  ouro:     { label: 'Liga Ouro',     next: 'platina',  trophyColor: '#FCD34D', gradFrom: 'from-amber-500',  gradVia: 'via-cyan-700',   gradTo: 'to-amber-800'  },
  platina:  { label: 'Liga Platina',  next: 'diamante', trophyColor: '#93C5FD', gradFrom: 'from-cyan-500',   gradVia: 'via-cyan-700',   gradTo: 'to-cyan-900'   },
  diamante: { label: 'Liga Diamante', next: null,       trophyColor: '#67E8F9', gradFrom: 'from-cyan-500',   gradVia: 'via-cyan-700',   gradTo: 'to-cyan-900'   },
};

const CHART_DATA: Record<string, Array<{name: string; value: number}>> = {
  '7d': [
    { name: 'Seg', value: 72 }, { name: 'Ter', value: 68 }, { name: 'Qua', value: 75 },
    { name: 'Qui', value: 80 }, { name: 'Sex', value: 74 }, { name: 'Sáb', value: 70 }, { name: 'Dom', value: 74 }
  ],
  '30d': [
    { name: 'Sem 1', value: 58 }, { name: 'Sem 2', value: 65 },
    { name: 'Sem 3', value: 70 }, { name: 'Sem 4', value: 74 }
  ],
  'total': [
    { name: 'Jan', value: 50 }, { name: 'Fev', value: 55 }, { name: 'Mar', value: 61 },
    { name: 'Abr', value: 68 }, { name: 'Mai', value: 74 }
  ]
};

// --- Components ---

// Update SUBJECT_ICONS keys to match
const SUBJECT_ICONS: Record<string, any> = {
  // Básicos
  'Anatomia': { image: 'https://cdn-icons-png.flaticon.com/512/2867/2867197.png', icon: Skull, color: 'bg-emerald-500', ringColor: '#12b449', textColor: 'text-white', shadow: 'shadow-emerald-500/40' },
  'Fisiologia': { image: 'https://cdn-icons-png.flaticon.com/512/4964/4964056.png', icon: Heart, color: 'bg-rose-500', ringColor: '#F43F5E', textColor: 'text-white', shadow: 'shadow-rose-500/40' },
  'Bioquímica': { image: 'https://cdn-icons-png.flaticon.com/512/4507/4507090.png', icon: FlaskConical, color: 'bg-cyan-500', ringColor: '#00a7e1', textColor: 'text-white', shadow: 'shadow-cyan-500/40' },
  'Histologia': { image: 'https://cdn-icons-png.flaticon.com/512/4068/4068596.png', icon: Microscope, color: 'bg-indigo-500', ringColor: '#6366F1', textColor: 'text-white', shadow: 'shadow-indigo-500/40' },
  'Embriologia': { image: 'https://cdn-icons-png.flaticon.com/512/9091/9091638.png', icon: Baby, color: 'bg-pink-500', ringColor: '#EC4899', textColor: 'text-white', shadow: 'shadow-pink-500/40' },
  'Microbiologia': { image: 'https://cdn-icons-png.flaticon.com/512/8986/8986435.png', icon: Bug, color: 'bg-amber-500', ringColor: '#f1c100', textColor: 'text-white', shadow: 'shadow-amber-500/40' },
  'Imunologia': { image: 'https://cdn-icons-png.flaticon.com/512/15192/15192824.png', icon: Shield, color: 'bg-indigo-600', ringColor: '#4F46E5', textColor: 'text-white', shadow: 'shadow-indigo-600/40' },
  'Farmacologia': { image: 'https://cdn-icons-png.flaticon.com/512/18383/18383210.png', icon: Pill, color: 'bg-purple-500', ringColor: '#8B5CF6', textColor: 'text-white', shadow: 'shadow-purple-500/40' },
  'Patologia Geral': { icon: Microscope, color: 'bg-slate-500/20', ringColor: '#64748B', textColor: 'text-slate-500', shadow: 'shadow-slate-500/20' },
  'Genética': { image: 'https://cdn-icons-png.flaticon.com/512/8986/8986421.png', icon: Dna, color: 'bg-teal-500', ringColor: '#14B8A6', textColor: 'text-white', shadow: 'shadow-teal-500/40' },

  // Clínicos e Especialidades - Duolingo Aesthetics
  'Cardiologia Clínica': { image: '/6176500.png', icon: Heart, color: 'bg-rose-500', ringColor: '#F43F5E', textColor: 'text-white', shadow: 'shadow-rose-500/40' },
  'Cardiologia': { image: '/6176500.png', icon: Heart, color: 'bg-rose-500', ringColor: '#F43F5E', textColor: 'text-white', shadow: 'shadow-rose-500/40' },
  'Neurologia': { image: '/11666655.png', icon: Brain, color: 'bg-indigo-500', ringColor: '#6366F1', textColor: 'text-white', shadow: 'shadow-indigo-500/40' },
  'Pediatria': { image: '/10154448.png', icon: Baby, color: 'bg-emerald-500', ringColor: '#12b449', textColor: 'text-white', shadow: 'shadow-emerald-500/40' },
  'Ginecologia & Obstetrícia': { image: '/2885280.png', icon: Baby, color: 'bg-pink-500', ringColor: '#EC4899', textColor: 'text-white', shadow: 'shadow-pink-500/40' },
  'Cirurgia Geral': { image: '/10154417.png', icon: Scissors, color: 'bg-orange-500', ringColor: '#f1c100', textColor: 'text-white', shadow: 'shadow-orange-500/40' },
  'Clínica Cirúrgica': { image: '/10154417.png', icon: Scissors, color: 'bg-orange-500', ringColor: '#f1c100', textColor: 'text-white', shadow: 'shadow-orange-500/40' },
  'Clínica Médica': { image: '/3028573.png', icon: Heart, color: 'bg-rose-500', ringColor: '#F43F5E', textColor: 'text-white', shadow: 'shadow-rose-500/40' },
  'Medicina de Família/SUS': { image: '/12370055.png', icon: Users, color: 'bg-cyan-500', ringColor: '#06B6D4', textColor: 'text-white', shadow: 'shadow-cyan-500/40' },
  'Psiquiatria': { image: '/12024688.png', icon: Brain, color: 'bg-purple-500', ringColor: '#8B5CF6', textColor: 'text-white', shadow: 'shadow-purple-500/40' },
  'Dermatologia': { image: '/10154433.png', icon: Droplet, color: 'bg-amber-400', ringColor: '#f1c100', textColor: 'text-white', shadow: 'shadow-amber-500/40' },
  'Oftalmologia': { image: '/2007207.png', icon: Eye, color: 'bg-teal-500', ringColor: '#14B8A6', textColor: 'text-white', shadow: 'shadow-teal-500/40' },
  'Otorrinolaringologia': { image: '/9340044.png', icon: Ear, color: 'bg-violet-500', ringColor: '#8B5CF6', textColor: 'text-white', shadow: 'shadow-violet-500/40' },
  'Pneumologia': { image: '/10154419.png', icon: Wind, color: 'bg-sky-500', ringColor: '#0EA5E9', textColor: 'text-white', shadow: 'shadow-sky-500/40' },
  'Gastroenterologia': { image: '/6490965.png', icon: Activity, color: 'bg-green-600', ringColor: '#16A34A', textColor: 'text-white', shadow: 'shadow-green-500/40' },
  'Endocrinologia': { image: '/15192810.png', icon: Pill, color: 'bg-yellow-500', ringColor: '#EAB308', textColor: 'text-white', shadow: 'shadow-yellow-500/40' },
  'Nefrologia': { image: '/12024712.png', icon: Stethoscope, color: 'bg-cyan-600', ringColor: '#00658a', textColor: 'text-white', shadow: 'shadow-cyan-500/40' },
  'Reumatologia': { image: '/12024718.png', icon: Bone, color: 'bg-slate-500', ringColor: '#64748B', textColor: 'text-white', shadow: 'shadow-slate-500/40' },
  'Hematologia': { image: '/6176756.png', icon: Droplet, color: 'bg-red-700', ringColor: '#B91C1C', textColor: 'text-white', shadow: 'shadow-red-500/40' },
  'Infectologia': { image: '/10154483.png', icon: Bug, color: 'bg-lime-600', ringColor: '#65A30D', textColor: 'text-white', shadow: 'shadow-lime-500/40' },
  'Urgência e Emergência': { image: 'https://cdn-icons-png.flaticon.com/512/3914/3914688.png', icon: AlertTriangle, color: 'bg-red-600', ringColor: '#DC2626', textColor: 'text-white', shadow: 'shadow-red-600/40' },
  'Medicina Intensiva': { image: 'https://cdn-icons-png.flaticon.com/512/978/978957.png', icon: Activity, color: 'bg-slate-700', ringColor: '#334155', textColor: 'text-white', shadow: 'shadow-slate-700/40' },
  'Ortopedia': { image: '/ORTOP.png', icon: Bone, color: 'bg-stone-500', ringColor: '#78716C', textColor: 'text-white', shadow: 'shadow-stone-500/40' },
  'Neonatologia': { image: 'https://cdn-icons-png.flaticon.com/512/14365/14365115.png', icon: Baby, color: 'bg-sky-400', ringColor: '#38BDF8', textColor: 'text-white', shadow: 'shadow-sky-400/40' },
  'Anestesiologia': { image: 'https://cdn-icons-png.flaticon.com/512/5793/5793712.png', icon: Thermometer, color: 'bg-gray-500', ringColor: '#6B7280', textColor: 'text-white', shadow: 'shadow-gray-500/40' },
  'Traumatologia-Ortopedia': { image: 'https://cdn-icons-png.flaticon.com/512/11071/11071552.png', icon: Bone, color: 'bg-amber-700', ringColor: '#B45309', textColor: 'text-white', shadow: 'shadow-amber-700/40' },
  'Patologia': { image: 'https://cdn-icons-png.flaticon.com/512/9340/9340149.png', icon: Microscope, color: 'bg-slate-600', ringColor: '#475569', textColor: 'text-white', shadow: 'shadow-slate-600/40' },
  'Parasitologia': { image: 'https://cdn-icons-png.flaticon.com/512/8099/8099004.png', icon: Bug, color: 'bg-green-700', ringColor: '#15803D', textColor: 'text-white', shadow: 'shadow-green-700/40' },
  'Semiologia': { image: 'https://cdn-icons-png.flaticon.com/512/2666/2666112.png', icon: Stethoscope, color: 'bg-cyan-500', ringColor: '#06B6D4', textColor: 'text-white', shadow: 'shadow-cyan-500/40' },
  'Epidemiologia': { image: 'https://cdn-icons-png.flaticon.com/512/1753/1753380.png', icon: BarChart2, color: 'bg-cyan-500', ringColor: '#00a7e1', textColor: 'text-white', shadow: 'shadow-cyan-500/40' },
  'Urologia': { image: 'https://cdn-icons-png.flaticon.com/512/4006/4006204.png', icon: Droplets, color: 'bg-yellow-600', ringColor: '#CA8A04', textColor: 'text-white', shadow: 'shadow-yellow-600/40' },
  'Geriatria': { image: 'https://cdn-icons-png.flaticon.com/512/978/978915.png', icon: Users, color: 'bg-orange-500', ringColor: '#F97316', textColor: 'text-white', shadow: 'shadow-orange-500/40' },
  'Radiologia': { image: '/RADIOLOIA.png', icon: Search, color: 'bg-gray-600', ringColor: '#4B5563', textColor: 'text-white', shadow: 'shadow-gray-600/40' },
  'Cirurgia Vascular': { image: 'https://cdn-icons-png.flaticon.com/512/8670/8670744.png', icon: Activity, color: 'bg-red-800', ringColor: '#991B1B', textColor: 'text-white', shadow: 'shadow-red-800/40' },
  'Neurocirurgia': { image: 'https://cdn-icons-png.flaticon.com/512/9710/9710955.png', icon: Brain, color: 'bg-violet-700', ringColor: '#6D28D9', textColor: 'text-white', shadow: 'shadow-violet-700/40' }
};

// ── MEDQUEST LOGO COMPONENT ──────────────────────────────────────────
function MedQuestLogoIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mq-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#040B1A"/>
          <stop offset="100%" stopColor="#0E1D4A"/>
        </linearGradient>
        <radialGradient id="mq-ambient" cx="50%" cy="42%" r="56%">
          <stop offset="0%" stopColor="#00658a" stopOpacity="0.38"/>
          <stop offset="100%" stopColor="#00658a" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="mq-qmark" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF"/>
          <stop offset="100%" stopColor="#7DD3FC"/>
        </linearGradient>
        <radialGradient id="mq-dot" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#7cd0ff"/>
          <stop offset="100%" stopColor="#004c69"/>
        </radialGradient>
        <filter id="mq-qglow" x="-55%" y="-55%" width="210%" height="210%">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="mq-dotglow" x="-90%" y="-90%" width="280%" height="280%">
          <feGaussianBlur stdDeviation="4.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="100" height="100" rx="22" fill="url(#mq-bg)"/>
      <rect width="100" height="100" rx="22" fill="url(#mq-ambient)"/>
      <rect x="1" y="1" width="98" height="98" rx="21.5"
            fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5"/>

      {/* ECG line — subtle medical accent */}
      <path d="M 6,76 L 18,76 L 21,66 L 24,86 L 27,58 L 30,93 L 34,76 L 66,76 L 69,66 L 72,86 L 75,58 L 78,93 L 82,76 L 94,76"
            fill="none" stroke="#00a7e1" strokeWidth="1.3"
            strokeLinecap="round" strokeLinejoin="round" opacity="0.13"/>

      {/* ? soft glow */}
      <path d="M 36,52 C 36,22 64,22 64,43 C 64,59 51,65 50,70"
            fill="none" stroke="#00a7e1" strokeWidth="15"
            strokeLinecap="round" strokeLinejoin="round" opacity="0.28"/>

      {/* ? main stroke */}
      <path d="M 36,52 C 36,22 64,22 64,43 C 64,59 51,65 50,70"
            fill="none" stroke="url(#mq-qmark)" strokeWidth="7.5"
            strokeLinecap="round" strokeLinejoin="round"
            filter="url(#mq-qglow)"/>

      {/* Dot outer glow */}
      <circle cx="50" cy="84" r="12" fill="#00658a" opacity="0.22" filter="url(#mq-dotglow)"/>
      {/* Dot body */}
      <circle cx="50" cy="84" r="7" fill="url(#mq-dot)" filter="url(#mq-qglow)"/>
      <circle cx="50" cy="84" r="7" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1"/>
      {/* Medical cross */}
      <line x1="50" y1="79.8" x2="50" y2="88.2" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
      <line x1="45.8" y1="84" x2="54.2" y2="84" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
      {/* Shine */}
      <circle cx="47.5" cy="81.5" r="1.4" fill="white" opacity="0.5"/>
    </svg>
  );
}

function MedQuestLogo({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: collapsed ? 0 : 10 }}>
      <MedQuestLogoIcon size={38} />
      {!collapsed && (
        <div style={{ lineHeight: 1, userSelect: 'none' }}>
          <span style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 300,
            fontSize: 18,
            letterSpacing: '-0.03em',
            color: '#1E293B',
          }}>Med</span>
          <span style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 900,
            fontSize: 18,
            letterSpacing: '-0.04em',
            color: '#00658a',
          }}>Quest</span>
        </div>
      )}
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────

interface GamePathNodeProps {
  subject: string;
  progress: number;
  index: number;
  isSelected: boolean;
  onClick: () => void;
  questionCount?: number;
  key?: string | number;
}

const GamePathNode = ({
  subject,
  progress,
  index,
  isSelected,
  onClick,
  questionCount = 0,
}: GamePathNodeProps) => {
  const iconData = SUBJECT_ICONS[subject] || { icon: BookOpen, color: 'bg-slate-400', ringColor: '#CBD5E1' };
  const Icon = iconData.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ delay: index * 0.05, duration: 0.4, y: { type: 'spring', stiffness: 300, damping: 20, delay: 0 } }}
      className="flex flex-col items-center gap-3 relative py-2 group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        {/* Anel de progresso */}
        <div className={`relative w-24 h-24 rounded-full flex items-center justify-center p-2 transition-all duration-300 ${
          isSelected ? 'bg-white shadow-lg' : 'bg-white shadow-[0_2px_14px_rgba(15,23,42,0.07)] group-hover:shadow-lg'
        }`}>
          {/* Progress Circular Stroke */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 z-10">
            <circle
              cx="48"
              cy="48"
              r="44"
              fill="transparent"
              stroke="#E2E8F0"
              strokeWidth="6"
            />
            <motion.circle
              cx="48"
              cy="48"
              r="44"
              fill="transparent"
              stroke={iconData.ringColor || "#12b449"}
              strokeWidth="6"
              strokeDasharray="276.46"
              initial={{ strokeDashoffset: 276.46 }}
              animate={{ strokeDashoffset: 276.46 - (276.46 * progress) / 100 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              strokeLinecap="round"
            />
          </svg>

          {/* Icon Bubble — sombra na cor da matéria em vez de borda 3D */}
          <div
            className={`relative z-20 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden ${
              isSelected ? 'scale-110' : 'group-hover:scale-105'
            } ${iconData.color || 'bg-brand-primary'}`}
            style={{ boxShadow: `0 8px 18px ${iconData.ringColor || '#12b449'}40` }}>
             {iconData.image ? (
               <img 
                 src={iconData.image} 
                 alt={subject} 
                 className={`w-12 h-12 object-contain aspect-square ${subject === 'Anatomia' ? '-translate-y-1' : ''}`} 
                 referrerPolicy="no-referrer"
               />
             ) : (
               <Icon size={26} className="text-white" strokeWidth={3} />
             )}
          </div>

          {/* Level Crown Badge - Duolingo Style */}
          {(() => {
            const lv = Math.floor(progress / 20); // 0–5 conforme mastery
            const badgeBg  = lv === 0 ? '#94A3B8' : lv < 3 ? '#f1c100' : lv < 5 ? '#00a7e1' : '#8B5CF6';
            const badgePip = lv === 0 ? '#64748B' : lv < 3 ? '#D97706' : lv < 5 ? '#00658a' : '#7C3AED';
            return (
              <div
                className="absolute bottom-0 right-0 z-30 w-7 h-7 rounded-lg flex items-center justify-center shadow-md border-2 border-white group-hover:scale-110 transition-transform"
                style={{ background: badgeBg }}
              >
                <Trophy size={13} className="text-white" fill="currentColor" />
                <span
                  className="absolute -top-3 -right-1 text-white text-[8px] font-black px-1.5 rounded-full border border-white"
                  style={{ background: badgePip }}
                >
                  LV.{lv}
                </span>
              </div>
            );
          })()}
        </div>
      </div>
      
      {/* Label - Below the icon */}
      <div className="text-center flex flex-col items-center gap-1">
        <h4 className={`text-[10px] sm:text-[11px] font-black uppercase tracking-tight leading-tight max-w-[110px] break-words ${
          isSelected ? 'text-slate-900 scale-105' : 'text-slate-500'
        } transition-all`}>
          {subject}
        </h4>
        {questionCount > 0 ? (
          <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
            {questionCount} {questionCount === 1 ? 'questão' : 'questões'}
          </span>
        ) : (
          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-400 border border-slate-200">
            em breve
          </span>
        )}
      </div>
    </motion.div>
  );
};

const BANCAS = [
  { id: 'enare',       short: 'ENARE',          name: 'Exame Nacional de Residência Médica',               uf: 'BR' },
  { id: 'enamed',      short: 'ENAMED',         name: 'Exame Nacional de Avaliação da Formação Médica',    uf: 'BR' },
  { id: 'enamedined',  short: 'ENAMED (inédita)', name: 'Questões originais no estilo do ENAMED',           uf: 'BR' },
  { id: 'usp',         short: 'USP',             name: 'Universidade de São Paulo',                        uf: 'SP' },
  { id: 'unifesp',     short: 'UNIFESP',         name: 'Universidade Federal de São Paulo',                uf: 'SP' },
  { id: 'einstein',    short: 'Einstein',        name: 'Hospital Israelita Albert Einstein',               uf: 'SP' },
  { id: 'hcor',        short: 'HCor',            name: 'Hospital do Coração',                              uf: 'SP' },
  { id: 'iamspe',      short: 'IAMSPE',         name: 'Instituto de Assistência Médica ao Servidor Público', uf: 'SP' },
  { id: 'siriolib',    short: 'Sírio-Libanês',   name: 'Hospital Sírio-Libanês',                          uf: 'SP' },
  { id: 'sussp',       short: 'SUS-SP',          name: 'Secretaria Estadual de Saúde de São Paulo',       uf: 'SP' },
  { id: 'santacasa',   short: 'Santa Casa SP',   name: 'Santa Casa de Misericórdia de São Paulo',         uf: 'SP' },
  { id: 'unesp',       short: 'UNESP',           name: 'Universidade Estadual Paulista',                   uf: 'SP' },
  { id: 'hcfmusp',     short: 'HC-FMUSP',        name: 'Hospital das Clínicas da FMUSP',                  uf: 'SP' },
  { id: 'barretos',    short: 'Barretos',        name: 'Hospital de Câncer de Barretos',                  uf: 'SP' },
  { id: 'claretiano',  short: 'Claretiano',      name: 'Centro Universitário de Rio Claro',               uf: 'SP' },
  { id: 'ufrj',        short: 'UFRJ',            name: 'Universidade Federal do Rio de Janeiro',          uf: 'RJ' },
  { id: 'uerj',        short: 'UERJ',            name: 'Universidade Estadual do Rio de Janeiro',         uf: 'RJ' },
  { id: 'inca',        short: 'INCA',            name: 'Instituto Nacional do Câncer',                    uf: 'RJ' },
  { id: 'afamci',      short: 'AFAMCI',          name: 'Hospital dos Plantadores de Cana',                uf: 'RJ' },
  { id: 'chn',         short: 'CHN',             name: 'Complexo Hospitalar de Niterói',                  uf: 'RJ' },
  { id: 'ufrgs',       short: 'UFRGS',           name: 'Universidade Federal do Rio Grande do Sul',       uf: 'RS' },
  { id: 'amrigs',      short: 'AMRIGS',          name: 'Associação Médica do Rio Grande do Sul',          uf: 'RS' },
  { id: 'hcpa',        short: 'HCPA',            name: 'Hospital de Clínicas de Porto Alegre',            uf: 'RS' },
  { id: 'moinhos',     short: 'Moinhos',         name: 'Hospital Moinhos de Vento',                       uf: 'RS' },
  { id: 'ufpr',        short: 'UFPR',            name: 'Universidade Federal do Paraná',                  uf: 'PR' },
  { id: 'pucpr',       short: 'PUC-PR',          name: 'Pontifícia Universidade Católica do Paraná',      uf: 'PR' },
  { id: 'amp',         short: 'AMP',             name: 'Associação Médica do Paraná',                     uf: 'PR' },
  { id: 'ams',         short: 'AMS',             name: 'Autarquia Municipal de Saúde de Apucarana',       uf: 'PR' },
  { id: 'psumg',       short: 'PSU-MG',          name: 'Processo Seletivo Unificado de Minas Gerais',      uf: 'MG' },
    { id: 'ufsc',        short: 'UFSC',            name: 'Universidade Federal de Santa Catarina',          uf: 'SC' },
  { id: 'ufba',        short: 'UFBA',            name: 'Universidade Federal da Bahia',                   uf: 'BA' },
  { id: 'saorafael',   short: 'São Rafael',      name: 'Hospital São Rafael',                             uf: 'BA' },
  { id: 'ufc',         short: 'UFC',             name: 'Universidade Federal do Ceará',                   uf: 'CE' },
  { id: 'ufpe',        short: 'UFPE',            name: 'Universidade Federal de Pernambuco',              uf: 'PE' },
  { id: 'ufpb',        short: 'UFPB',            name: 'Universidade Federal da Paraíba',                 uf: 'PB' },
  { id: 'unb',         short: 'UnB',             name: 'Universidade de Brasília',                        uf: 'DF' },
  { id: 'ufg',         short: 'UFG',             name: 'Universidade Federal de Goiás',                   uf: 'GO' },
  { id: 'ufms',        short: 'UFMS',            name: 'Universidade Federal de Mato Grosso do Sul',      uf: 'MS' },
  { id: 'cerem',       short: 'CEREM-MS',        name: 'Comissão Estadual de Residência Médica do MS',   uf: 'MS' },
  { id: 'cermam',      short: 'CERMAM',          name: 'Comissão Estadual de Residência Médica do AM',   uf: 'AM' },
  { id: 'ufam',        short: 'UFAM',            name: 'Universidade Federal do Amazonas',               uf: 'AM' },
  { id: 'ufpa',        short: 'UFPA',            name: 'Universidade Federal do Pará',                    uf: 'PA' },
  { id: 'cesupa',      short: 'CESUPA',          name: 'Centro Universitário do Estado do Pará',          uf: 'PA' },
  { id: 'ufmt',        short: 'UFMT',            name: 'Universidade Federal do Mato Grosso',             uf: 'MT' },
  { id: 'comvest',     short: 'UNICAMP',         name: 'COMVEST - Universidade Estadual de Campinas',    uf: 'SP' },
];

const BANCAS_PER_PAGE = 6;

const MEDICAL_AVATARS = [
  { id: 'stethoscope', emoji: '🩺', label: 'Clínica Geral',    bg: '#EFF6FF', ring: '#00a7e1' },
  { id: 'heart',       emoji: '🫀', label: 'Cardiologia',      bg: '#FEE2E2', ring: '#DC2626' },
  { id: 'brain',       emoji: '🧠', label: 'Neurologia',       bg: '#EDE9FE', ring: '#7C3AED' },
  { id: 'lungs',       emoji: '🫁', label: 'Pneumologia',      bg: '#DBEAFE', ring: '#00658a' },
  { id: 'bone',        emoji: '🦴', label: 'Ortopedia',        bg: '#FEF3C7', ring: '#D97706' },
  { id: 'eye',         emoji: '👁️', label: 'Oftalmologia',    bg: '#DCFCE7', ring: '#16A34A' },
  { id: 'baby',        emoji: '👶', label: 'Pediatria',        bg: '#FDF4FF', ring: '#A855F7' },
  { id: 'pill',        emoji: '💊', label: 'Farmacologia',     bg: '#ECFDF5', ring: '#0e9f43' },
  { id: 'scope',       emoji: '🔬', label: 'Patologia',        bg: '#FFF7ED', ring: '#EA580C' },
  { id: 'xray',        emoji: '🩻', label: 'Radiologia',       bg: '#F0F9FF', ring: '#0369A1' },
  { id: 'syringe',     emoji: '💉', label: 'Anestesiologia',   bg: '#FFF1F2', ring: '#E11D48' },
  { id: 'dna',         emoji: '🧬', label: 'Genética',         bg: '#F0FDF4', ring: '#22C55E' },
  { id: 'tooth',       emoji: '🦷', label: 'Odontologia',      bg: '#F0F9FF', ring: '#0284C7' },
  { id: 'flask',       emoji: '🧪', label: 'Pesquisa Clínica', bg: '#FDF2F8', ring: '#EC4899' },
  { id: 'hospital',    emoji: '🏥', label: 'Saúde Pública',    bg: '#ECFDF5', ring: '#12b449' },
  { id: 'scalpel',     emoji: '🩹', label: 'Cirurgia Geral',   bg: '#F8FAFC', ring: '#475569' },
  { id: 'kidneys',     emoji: '🫘', label: 'Nefrologia',       bg: '#FFF7ED', ring: '#C2410C' },
  { id: 'stomach',     emoji: '🫃', label: 'Gastroenterologia',bg: '#FEF9C3', ring: '#CA8A04' },
  { id: 'skin',        emoji: '🌡️', label: 'Infectologia',    bg: '#FFF1F2', ring: '#BE123C' },
  { id: 'psychiatry',  emoji: '🧘', label: 'Psiquiatria',      bg: '#FAF5FF', ring: '#9333EA' },
];

export default function App() {
  const { currentUser, plan, planTier, isGuestMode, startCheckout, loading: authLoading, signOut, saveUserProgress, loadUserProgress } = useAuth();

  const [view, setView] = useState<'landing' | 'home' | 'quiz' | 'summary' | 'ranking' | 'profile' | 'progress' | 'revision' | 'residencia-onboarding' | 'amigos' | 'desafios' | 'sala' | 'doctordle' | 'flashcards' | 'simulado' | 'agenda'>(() => {
    try {
      const lastUid = localStorage.getItem(LAST_UID_KEY);
      if (lastUid) {
        const saved = localStorage.getItem(userStorageKey(lastUid));
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.name) return 'home';
        }
      }
    } catch { /* noop */ }
    return 'landing';
  });
  const [chartType, setChartType] = useState<'bar' | 'line'>('bar');
  const [rankingTab, setRankingTab] = useState<'global' | 'friends'>('global');
  const [activeLeague, setActiveLeague] = useState<LeagueTier>('bronze');
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<'estudante' | 'residencia' | null>(() => {
    try { return (localStorage.getItem('mq_track') as 'estudante' | 'residencia') || null; } catch { return null; }
  });
  const [showBenefits, setShowBenefits] = useState(false);
  const [selectedBanca, setSelectedBanca] = useState<string | null>(null);
  const [quizBancaFilter, setQuizBancaFilter] = useState<string | null>(null);
  // Simulado ("monte sua prova"): sessão longa de até 100 questões.
  const [isSimulado, setIsSimulado] = useState(false);
  const [simuladoLabel, setSimuladoLabel] = useState('');
  const [simuladoSubject, setSimuladoSubject] = useState<Subject | null>(null);
  const [simuladoBanca, setSimuladoBanca] = useState<string | null>(null);
  const [bancaSearch, setBancaSearch] = useState('');
  const [bancaPage, setBancaPage] = useState(0);
  const [bancaUfFilter, setBancaUfFilter] = useState<string>('TODAS');
  const [userAvatar, setUserAvatar] = useState<string>('stethoscope');
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [selectedCycle, setSelectedCycle] = useState<Cycle>('Ciclo Clínico');
  const [selectedSubject, setSelectedSubject] = useState<Subject>('Clínica Médica');
  const [selectedSubSubject, setSelectedSubSubject] = useState<string | null>(null);

  const [progressFilter, setProgressFilter] = useState<'7d' | '30d' | 'total'>('30d');
  const [hoveredCell, setHoveredCell] = useState<{ date: Date; count: number; subjects: Record<string, number>; frozen: boolean; x: number; y: number; col: number } | null>(null);

  const [user, setUser] = useState<UserState>(() => {
    try {
      const lastUid = localStorage.getItem(LAST_UID_KEY);
      if (lastUid) return loadLocalUserState(lastUid);
    } catch { /* noop */ }
    return makeDefaultUserState();
  });
  // Uid cujos dados estão carregados em `user` no momento — usado para detectar
  // troca de conta (login de outro usuário no mesmo aparelho) e resetar o
  // estado em vez de herdar os dados de quem usou antes. useRef não tem
  // inicialização lazy como useState, então o valor é resolvido inline aqui.
  const loadedUidRef = useRef<string | null>((() => {
    try { return localStorage.getItem(LAST_UID_KEY); } catch { return null; }
  })());

  const heatmapData = useMemo(() => {
    const data = [];
    const now = new Date();
    const dayOfWeek = now.getDay();
    const startDate = new Date(now);
    // Align to Sunday of 4 weeks ago
    startDate.setDate(now.getDate() - dayOfWeek - 21);

    for (let i = 0; i < 28; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      // Atividade real do dia (questões respondidas), a partir do activityLog.
      const iso = dateKey(date);
      const count = date <= now ? (user.activityLog[iso] || 0) : 0;
      const subjects = date <= now ? (user.activitySubjects?.[iso] || {}) : {};
      const frozen = date <= now && (user.frozenDays ?? []).includes(iso);
      data.push({ date, count, subjects, frozen });
    }
    return data;
  }, [user.activityLog, user.activitySubjects, user.frozenDays]);

  // Série real de questões respondidas, derivada do activityLog.
  const currentChartData = useMemo(() => {
    const now = new Date();
    const out: { name: string; value: number }[] = [];
    if (progressFilter === 'total') {
      // 12 semanas (soma por semana).
      for (let w = 11; w >= 0; w--) {
        let sum = 0;
        for (let d = 0; d < 7; d++) {
          const dt = new Date(now);
          dt.setDate(now.getDate() - (w * 7 + d));
          sum += user.activityLog[dateKey(dt)] || 0;
        }
        out.push({ name: `S${12 - w}`, value: sum });
      }
    } else {
      const days = progressFilter === '7d' ? 7 : 30;
      for (let i = days - 1; i >= 0; i--) {
        const dt = new Date(now);
        dt.setDate(now.getDate() - i);
        out.push({
          name: dt.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
          value: user.activityLog[dateKey(dt)] || 0,
        });
      }
    }
    return out;
  }, [progressFilter, user.activityLog]);
  const hasActivity = currentChartData.some(d => d.value > 0);
  const chartBest = Math.max(...currentChartData.map(d => d.value));
  const chartWorst = Math.min(...currentChartData.map(d => d.value));
  const chartGain = currentChartData.length > 1
    ? currentChartData[currentChartData.length - 1].value - currentChartData[0].value
    : 0;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      weekday: 'short',
      day: '2-digit',
      month: 'short'
    });
  };

  const formatTimer = (s: number) =>
    `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;


  const getIntensity = (count: number) => {
    if (count === 0) return 'bg-white/5';
    if (count < 4) return 'bg-brand-primary/20';
    if (count < 8) return 'bg-brand-primary/50';
    if (count < 12) return 'bg-brand-primary/80';
    return 'bg-brand-primary';
  };
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const carouselRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ufFilterRef = useRef<HTMLDivElement>(null);
  const ufDragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      if (carouselRef.current && contentRef.current) {
        const parentWidth = carouselRef.current.offsetWidth;
        const contentWidth = contentRef.current.scrollWidth;
        const availableScroll = contentWidth - parentWidth;
        
        // Exact constraints based on content with a small elastic buffer
        setDragConstraints({
          left: -Math.max(0, availableScroll),
          right: 0
        });
      }
    };

    updateConstraints();
    const timer = setTimeout(updateConstraints, 100);
    const timer2 = setTimeout(updateConstraints, 500); // Back-up for slow loads
    
    window.addEventListener('resize', updateConstraints);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      window.removeEventListener('resize', updateConstraints);
    };
  }, [selectedCycle, view, selectedTrack]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [isRevisionMode, setIsRevisionMode] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
  const [sessionResults, setSessionResults] = useState<SessionResult>({ correct: 0, total: 0, xpGained: 0 });
  const [sessionHistory, setSessionHistory] = useState<{questionId: string, selectedIndex: number}[]>([]);
  // Reforço: questões erradas durante a sessão, reapresentadas no fim.
  const [retryIds, setRetryIds] = useState<string[]>([]);
  const [isRetryPhase, setIsRetryPhase] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [tempName, setTempName] = useState('');
  const [landingStep, setLandingStep] = useState<0 | 1>(0);
  const [nameInput, setNameInput] = useState('');
  const [showAllSpecialties, setShowAllSpecialties] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showStreakLostModal, setShowStreakLostModal] = useState(false);
  const [lostStreakCount, setLostStreakCount] = useState(0);
  const [showNoHearts, setShowNoHearts] = useState(false);
  const [quizTimer, setQuizTimer] = useState(0);
  const [combo, setCombo] = useState(0);
  // Som + vibração (ligado por padrão, persistido).
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    try { return localStorage.getItem('mq_sound') !== 'off'; } catch { return true; }
  });
  // Modo de estudo (persistido):
  //   foco → cronômetro por questão; quanto mais rápido acertar, mais XP.
  //   zen  → sem cronômetro; XP fixo por acerto, sem pressa e sem bônus.
  const [quizMode, setQuizMode] = useState<QuizMode>(() => {
    try {
      const saved = localStorage.getItem('mq_mode');
      if (saved === 'foco' || saved === 'zen') return saved;
      // Migra a preferência antiga do "modo prova".
      return localStorage.getItem('mq_exam') === 'off' ? 'zen' : 'foco';
    } catch { return 'foco'; }
  });
  const isFoco = quizMode === 'foco';
  const QUESTION_SECONDS = 60; // tempo por questão no modo foco
  const [questionTimeLeft, setQuestionTimeLeft] = useState(QUESTION_SECONDS);
  const questionStartRef = useRef<number>(Date.now());

  // ── Social / Batalhas ──
  const BATTLE_XP_REWARD = 150;
  const [friendCode, setFriendCode] = useState<string>('');
  const [friendships, setFriendships] = useState<Friendship[]>([]);
  const [battles, setBattles] = useState<Battle[]>([]);
  const [addFriendInput, setAddFriendInput] = useState('');
  const [addFriendMsg, setAddFriendMsg] = useState('');
  const [challengeFriend, setChallengeFriend] = useState<{ uid: string; name: string } | null>(null);
  const [battleCtx, setBattleCtx] = useState<{ id: string; role: 'challenger' | 'opponent'; subject: string; opponentName: string } | null>(null);
  const [battleCorrect, setBattleCorrect] = useState(0);
  const [pendingBattleLink, setPendingBattleLink] = useState<string | null>(null);
  const [socialToast, setSocialToast] = useState<string>('');
  const [winsMap, setWinsMap] = useState<Record<string, { name: string; wins: number }>>({});
  // Perfis reais dos amigos (nome/XP/nível) para o ranking da Liga.
  const [friendProfiles, setFriendProfiles] = useState<Record<string, PublicProfile>>({});
  // Flashcards
  const [flashStage, setFlashStage] = useState<'pick' | 'study' | 'done'>('pick');
  const [flashDeck, setFlashDeck] = useState<Question[]>([]);
  const [flashIndex, setFlashIndex] = useState(0);
  const [flashFlipped, setFlashFlipped] = useState(false);
  const [flashUnknown, setFlashUnknown] = useState<string[]>([]);
  const [flashKnown, setFlashKnown] = useState(0);
  const [flashReview, setFlashReview] = useState(false);
  const [flashSubject, setFlashSubject] = useState<string>('');
  // Criar flashcard próprio
  const [showCreateFlashcard, setShowCreateFlashcard] = useState(false);
  const [newFlashSubject, setNewFlashSubject] = useState<Subject>('Clínica Médica');
  const [newFlashFront, setNewFlashFront] = useState('');
  const [newFlashBack, setNewFlashBack] = useState('');
  const [newFlashExplanation, setNewFlashExplanation] = useState('');
  // Salas em grupo (Kahoot)
  const [roomId, setRoomId] = useState<string | null>(null);
  const [room, setRoom] = useState<Room | null>(null);
  const [joinCodeInput, setJoinCodeInput] = useState('');
  const [roomPickTopic, setRoomPickTopic] = useState(false);
  const [roomSelectedOption, setRoomSelectedOption] = useState<number | null>(null);
  const [roomNow, setRoomNow] = useState(Date.now());
  const [showXpFloat, setShowXpFloat] = useState(false);
  const [summaryXP, setSummaryXP] = useState(0);
  const [summaryTimer, setSummaryTimer] = useState(0);
  const [loadingTextIdx, setLoadingTextIdx] = useState(0);
  const confettiData = useRef(
    Array.from({ length: 22 }).map((_, i) => ({
      x: 4 + (i / 22) * 92,
      color: ['#00658a','#12b449','#f1c100','#ba1a1a','#8B5CF6','#EC4899'][i % 6],
      duration: 1.1 + (i % 5) * 0.18,
      delay: (i % 9) * 0.05,
      rotate: (i * 43) % 360,
      isSquare: i % 2 === 0,
    }))
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Quiz timer
  useEffect(() => {
    if (view !== 'quiz') { setQuizTimer(0); return; }
    const id = setInterval(() => setQuizTimer((t: number) => t + 1), 1000);
    return () => clearInterval(id);
  }, [view]);

  // Preferências de som / modo prova (persistência + sincroniza com o sfx).
  useEffect(() => {
    setSfxEnabled(soundEnabled);
    try { localStorage.setItem('mq_sound', soundEnabled ? 'on' : 'off'); } catch { /* ignore */ }
  }, [soundEnabled]);
  useEffect(() => {
    try { localStorage.setItem('mq_mode', quizMode); } catch { /* ignore */ }
  }, [quizMode]);

  // Tempo esgotado numa questão (modo foco): revela a resposta sem tirar vida.
  const handleTimeout = useCallback(() => {
    if (isFeedbackVisible) return;
    const currentQuestion = activeQuestions[currentQuestionIndex];
    if (!currentQuestion) return;
    setSelectedOption(-1);
    setIsFeedbackVisible(true);
    setCombo(0);
    playTimeout();
    if (isRetryPhase) return;
    setSessionHistory(prev => [...prev, { questionId: currentQuestion.id, selectedIndex: -1 }]);
    setRetryIds(prev => prev.includes(currentQuestion.id) ? prev : [...prev, currentQuestion.id]);
    setUser(prev => ({
      ...prev,
      ...dailyProgress(prev, currentQuestion.subject),
      subjectAttempts: { ...prev.subjectAttempts, [currentQuestion.subject]: (prev.subjectAttempts[currentQuestion.subject] || 0) + 1 },
      dailyQuestionsUsed: prev.dailyQuestionsUsed + 1,
      lastActiveDate: dateKey(),
      missedQuestionIds: Array.from(new Set([...prev.missedQuestionIds, currentQuestion.id])),
    }));
  }, [isFeedbackVisible, activeQuestions, currentQuestionIndex, isRetryPhase]);

  // Cronômetro POR QUESTÃO (modo foco). Reinicia a cada nova questão.
  // No modo zen o cronômetro nem chega a rodar — só marcamos o início da questão.
  useEffect(() => {
    if (view !== 'quiz' || isFeedbackVisible || battleCtx) return;
    questionStartRef.current = Date.now();
    if (!isFoco) return;
    setQuestionTimeLeft(QUESTION_SECONDS);
    const id = setInterval(() => {
      setQuestionTimeLeft((s) => {
        if (s <= 1) { clearInterval(id); handleTimeout(); return 0; }
        if (s <= 6) playTick(); // tique tenso nos últimos segundos
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, isFoco, currentQuestionIndex, isFeedbackVisible]);

  // Loading text rotation
  useEffect(() => {
    if (!isThinking) { setLoadingTextIdx(0); return; }
    const id = setInterval(() => setLoadingTextIdx((i: number) => (i + 1) % LOADING_TEXTS.length), 550);
    return () => clearInterval(id);
  }, [isThinking]);

  // Summary XP counter animation
  useEffect(() => {
    if (view !== 'summary') { setSummaryXP(0); return; }
    const target = sessionResults.xpGained;
    if (target === 0) { setSummaryXP(0); return; }
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 28));
    const id = setInterval(() => {
      current = Math.min(current + step, target);
      setSummaryXP(current);
      if (current >= target) clearInterval(id);
    }, 35);
    return () => clearInterval(id);
  }, [view, sessionResults.xpGained]);

  // Load progress from Firestore when user logs in
  useEffect(() => {
    if (!currentUser) return;
    const uid = currentUser.uid;

    // Troca de conta (login de outra pessoa neste aparelho, ou primeiro
    // carregamento real depois do palpite otimista do useState inicial):
    // garante que o estado em memória é o dessa conta, não sobras de quem
    // usou o app antes. Sem isso, um usuário novo herdaria o progresso de
    // outra conta usada anteriormente neste navegador.
    if (loadedUidRef.current !== uid) {
      setUser(loadLocalUserState(uid));
      loadedUidRef.current = uid;
      try { localStorage.setItem(LAST_UID_KEY, uid); } catch { /* noop */ }
    }

    loadUserProgress().then((saved) => {
      if (!saved) return;
      const today = dateKey();
      const isNewDay = (saved.lastActiveDate as string) !== today;
      setUser((prev) => ({
        ...prev,
        name: (saved.name as string) || currentUser.displayName || prev.name,
        xp: (saved.xp as number) ?? prev.xp,
        level: (saved.level as number) ?? prev.level,
        streak: (saved.streak as number) ?? prev.streak,
        // Corações recarregam para o máximo em um novo dia (também no login em nuvem).
        hearts: isNewDay ? MAX_HEARTS : ((saved.hearts as number) ?? prev.hearts),
        mastery: (saved.mastery as Record<string, number>) ?? prev.mastery,
        subjectAttempts: (saved.subjectAttempts as Record<string, number>) ?? prev.subjectAttempts,
        missedQuestionIds: (saved.missedQuestionIds as string[]) ?? prev.missedQuestionIds,
        planStartDate: (saved.planStartDate as string) ?? prev.planStartDate,
        activityLog: (saved.activityLog as Record<string, number>) ?? prev.activityLog,
        activitySubjects: (saved.activitySubjects as Record<string, Record<string, number>>) ?? prev.activitySubjects,
        lastStudyDate: (saved.lastStudyDate as string) ?? prev.lastStudyDate,
        streakFreezes: (saved.streakFreezes as number) ?? prev.streakFreezes,
        frozenDays: (saved.frozenDays as string[]) ?? prev.frozenDays,
        customFlashcards: (saved.customFlashcards as CustomFlashcard[]) ?? prev.customFlashcards,
        agenda: (saved.agenda as AgendaEvent[]) ?? prev.agenda,
        mascotPersonality: (saved.mascotPersonality as MascotPersonality) ?? prev.mascotPersonality,
        dailyGoalDone: isNewDay ? 0 : ((saved.dailyGoalDone as number) ?? 0),
        weeklyGoalDone: (saved.weeklyGoalDone as number) ?? prev.weeklyGoalDone,
        dailyQuestionsUsed: isNewDay ? 0 : ((saved.dailyQuestionsUsed as number) ?? 0),
        lastActiveDate: today,
      }));
      if (saved.selectedTrack) setSelectedTrack(saved.selectedTrack as 'estudante' | 'residencia');
      if ((saved.name as string) || currentUser.displayName) {
        setView('home');
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  // Social: garante código de amigo e observa amizades/batalhas em tempo real.
  useEffect(() => {
    if (!currentUser) { setFriendships([]); setBattles([]); setFriendCode(''); return; }
    const name = currentUser.displayName || user.name || 'Colega';
    ensureFriendCode(currentUser.uid, name).then((c) => { if (c) setFriendCode(c); });
    const un1 = watchFriendships(currentUser.uid, setFriendships);
    const un2 = watchBattles(currentUser.uid, setBattles);
    return () => { un1(); un2(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  // Observa a sala em grupo (Kahoot) em tempo real.
  useEffect(() => {
    if (!roomId) { setRoom(null); return; }
    return watchRoom(roomId, setRoom);
  }, [roomId]);

  // Relógio para o cronômetro sincronizado da sala.
  useEffect(() => {
    if (view !== 'sala' || room?.state !== 'question') return;
    const id = setInterval(() => setRoomNow(Date.now()), 250);
    return () => clearInterval(id);
  }, [view, room?.state]);

  // Zera a seleção quando a sala muda de questão/estado.
  useEffect(() => { setRoomSelectedOption(null); }, [room?.currentIndex, room?.state]);

  // Recompensa do vencedor: +XP e +1 coração, uma única vez por batalha.
  useEffect(() => {
    if (!currentUser) return;
    for (const b of battles) {
      if (b.status === 'finished' && b.winnerUid === currentUser.uid && !b.rewarded?.[currentUser.uid]) {
        markRewarded(b.id, currentUser.uid);
        bumpWin(currentUser.uid, currentUser.displayName || user.name || 'Você'); // placar de vitórias
        setUser(prev => ({ ...prev, xp: prev.xp + BATTLE_XP_REWARD, hearts: prev.hearts + 1 }));
        setSocialToast(`🏆 Você venceu a batalha! +${BATTLE_XP_REWARD} XP e +1 coração`);
        setTimeout(() => setSocialToast(''), 4000);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [battles, currentUser]);

  // Carrega o ranking de vitórias (eu + amigos) ao abrir Desafios/Amigos.
  useEffect(() => {
    if (!currentUser || (view !== 'desafios' && view !== 'amigos')) return;
    const friendUids = friendships
      .filter(f => f.status === 'accepted')
      .map(f => (f.requesterUid === currentUser.uid ? f.addresseeUid : f.requesterUid));
    fetchWins([currentUser.uid, ...friendUids]).then(setWinsMap);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, view, friendships, battles]);

  // Carrega os perfis reais (XP/nível) dos amigos ao abrir a Liga.
  useEffect(() => {
    if (!currentUser || view !== 'ranking') return;
    const friendUids = friendships
      .filter(f => f.status === 'accepted')
      .map(f => (f.requesterUid === currentUser.uid ? f.addresseeUid : f.requesterUid));
    if (friendUids.length === 0) { setFriendProfiles({}); return; }
    fetchProfiles(friendUids).then(setFriendProfiles);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, view, friendships]);

  // Deep-links: ?battle=<id> abre uma batalha para jogar; ?add=<code> pré-preenche adicionar amigo.
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const addCode = params.get('add');
      if (addCode) { setAddFriendInput(addCode.toUpperCase()); setView('amigos'); }
      const bId = params.get('battle');
      if (bId && currentUser) {
        getBattle(bId).then((b) => {
          if (b && b.opponentUid === currentUser.uid && b.opponentScore == null) {
            openBattlePlay(b, 'opponent');
          } else {
            setView('amigos');
          }
        });
      }
      if (addCode || bId) window.history.replaceState({}, '', window.location.pathname);
    } catch { /* noop */ }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const saveProgress = useCallback(() => {
    if (!currentUser) return;
    saveUserProgress({
      name: user.name,
      xp: user.xp,
      level: user.level,
      streak: user.streak,
      hearts: user.hearts,
      mastery: user.mastery,
      subjectAttempts: user.subjectAttempts,
      missedQuestionIds: user.missedQuestionIds,
      planStartDate: user.planStartDate,
      dailyGoalDone: user.dailyGoalDone,
      weeklyGoalDone: user.weeklyGoalDone,
      dailyQuestionsUsed: user.dailyQuestionsUsed,
      lastActiveDate: user.lastActiveDate,
      activityLog: user.activityLog,
      activitySubjects: user.activitySubjects,
      lastStudyDate: user.lastStudyDate,
      streakFreezes: user.streakFreezes,
      frozenDays: user.frozenDays,
      customFlashcards: user.customFlashcards,
      agenda: user.agenda,
      mascotPersonality: user.mascotPersonality,
      selectedTrack: selectedTrack ?? '',
    });
  }, [currentUser, user, saveUserProgress, selectedTrack]);

  // Auto-save progress whenever user state changes (debounced via useEffect)
  useEffect(() => {
    if (!currentUser || !user.name) return;
    const id = setTimeout(() => saveProgress(), 2000);
    return () => clearTimeout(id);
  }, [currentUser, user, saveProgress]);

  // localStorage save — funciona sem Firebase, e mantém o snapshot local
  // desta conta específica disponível para o próximo carregamento/dia.
  useEffect(() => {
    if (!user.name || !currentUser) return;
    try { localStorage.setItem(userStorageKey(currentUser.uid), JSON.stringify(user)); } catch { /* noop */ }
  }, [user, currentUser]);

  useEffect(() => {
    if (!selectedTrack) return;
    try { localStorage.setItem('mq_track', selectedTrack); } catch { /* noop */ }
  }, [selectedTrack]);

  // Se o usuário está logado e foi direto pro home sem trilha selecionada, pede para escolher
  useEffect(() => {
    if (!currentUser) return;
    if (view === 'home' && !selectedTrack) {
      setLandingStep(1);
      setView('landing');
    }
  }, [view, selectedTrack, currentUser]);

  const copyInviteLink = () => {
    const inviteLink = `https://med-ia.app/invite/${user.name.toLowerCase().replace(/\s+/g, '-')}`;
    navigator.clipboard.writeText(inviteLink);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // Removed unstable sessionQuestions useMemo
  
  const selectTrack = (track: 'estudante' | 'residencia') => {
    setSelectedTrack(track);
    setIsRevisionMode(false);
    if (track === 'residencia') setSelectedCycle('Ciclo Clínico');
    setView('home');
  };

  // ── Batalhas: adicionar amigo, desafiar, jogar ──
  const handleAddFriend = async () => {
    if (!currentUser || !addFriendInput.trim()) return;
    const res = await addFriendByCode(
      { uid: currentUser.uid, name: currentUser.displayName || user.name || 'Colega' },
      addFriendInput.trim().toUpperCase()
    );
    setAddFriendMsg(res.message);
    if (res.ok) setAddFriendInput('');
    setTimeout(() => setAddFriendMsg(''), 4000);
  };

  // Abre a tela de jogo para uma batalha (mesmas questões para os dois).
  const openBattlePlay = (b: Battle, role: 'challenger' | 'opponent') => {
    const qs = b.questionIds
      .map(id => QUESTIONS.find(q => q.id === id))
      .filter((q): q is Question => Boolean(q));
    if (qs.length === 0) { setView('amigos'); return; }
    setBattleCtx({ id: b.id, role, subject: b.subject, opponentName: role === 'challenger' ? b.opponentName : b.challengerName });
    setBattleCorrect(0);
    setActiveQuestions(qs);
    setSessionResults({ correct: 0, total: qs.length, xpGained: 0 });
    setSessionHistory([]);
    setRetryIds([]);
    setIsRetryPhase(false);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setCombo(0);
    setQuizTimer(0);
    setIsFeedbackVisible(false);
    setView('quiz');
  };

  // Cria a batalha (desafiante escolhe o tópico) e já começa a jogar.
  const createAndPlayBattle = async (friend: { uid: string; name: string }, subject: Subject) => {
    if (!currentUser) return;
    const pool = QUESTIONS.filter(q => q.subject === subject);
    const ids = shuffle(pool).slice(0, 10).map(q => q.id);
    if (ids.length < 3) { setSocialToast('Poucas questões nesse tópico.'); setTimeout(() => setSocialToast(''), 3000); return; }
    const me = { uid: currentUser.uid, name: currentUser.displayName || user.name || 'Você' };
    const id = await createBattle(me, friend, subject, ids);
    setChallengeFriend(null);
    if (!id) { setSocialToast('Não foi possível criar a batalha.'); setTimeout(() => setSocialToast(''), 3000); return; }
    const link = `${window.location.origin}${window.location.pathname}?battle=${id}`;
    setPendingBattleLink(link);
    openBattlePlay(
      { id, participants: [me.uid, friend.uid], challengerUid: me.uid, challengerName: me.name, opponentUid: friend.uid, opponentName: friend.name, subject, questionIds: ids, challengerScore: null, opponentScore: null, status: 'pending', winnerUid: null, rewarded: {} },
      'challenger'
    );
  };

  // ── Salas em grupo (Kahoot) ──
  const ROOM_SECONDS = 20;
  const createGroupRoom = async (subject: Subject) => {
    if (!currentUser) return;
    const ids = shuffle(QUESTIONS.filter(q => q.subject === subject)).slice(0, 10).map(q => q.id);
    if (ids.length < 3) { setSocialToast('Poucas questões nesse tópico.'); setTimeout(() => setSocialToast(''), 3000); return; }
    const res = await createRoom({ uid: currentUser.uid, name: currentUser.displayName || user.name || 'Host' }, subject, ids);
    setRoomPickTopic(false);
    if (!res) { setSocialToast('Não foi possível criar a sala.'); setTimeout(() => setSocialToast(''), 3000); return; }
    setRoomId(res.id);
    setView('sala');
  };
  const joinGroupRoom = async () => {
    if (!currentUser || joinCodeInput.trim().length < 4) return;
    const id = await findRoomByCode(joinCodeInput.trim());
    if (!id) { setSocialToast('Sala não encontrada.'); setTimeout(() => setSocialToast(''), 3000); return; }
    await joinRoom(id, { uid: currentUser.uid, name: currentUser.displayName || user.name || 'Colega' });
    setJoinCodeInput('');
    setRoomId(id);
    setView('sala');
  };
  const roomHostStart = () => { if (room) updateRoom(room.id, { state: 'question', currentIndex: 0, questionStartAt: Date.now() }); };
  const roomHostReveal = () => { if (room) updateRoom(room.id, { state: 'reveal' }); };
  const roomHostNext = () => {
    if (!room) return;
    const next = room.currentIndex + 1;
    if (next >= room.questionIds.length) updateRoom(room.id, { state: 'finished' });
    else updateRoom(room.id, { state: 'question', currentIndex: next, questionStartAt: Date.now() });
  };
  const roomAnswer = (index: number) => {
    if (!room || !currentUser || room.state !== 'question') return;
    const me = room.players[currentUser.uid];
    if (me && me.lastAnsweredIndex === room.currentIndex) return; // já respondeu
    const q = QUESTIONS.find(qq => qq.id === room.questionIds[room.currentIndex]);
    if (!q) return;
    const correct = index === q.correctIndex;
    if (correct) playCorrect(); else playWrong();
    const elapsed = room.questionStartAt ? (Date.now() - room.questionStartAt) / 1000 : ROOM_SECONDS;
    const frac = Math.max(0, 1 - elapsed / ROOM_SECONDS);
    const points = correct ? Math.round(500 + 500 * frac) : 0;
    setRoomSelectedOption(index);
    answerRoom(room.id, currentUser.uid, room.currentIndex, points);
  };
  const leaveRoom = () => { setRoomId(null); setRoom(null); setView('desafios'); };

  // ── Flashcards ──
  const startFlashcards = (subject: Subject) => {
    const realDeck = REAL_FLASHCARDS.filter(fc => fc.subject === subject);
    let deck: Question[] = [];
    if (realDeck.length > 0) {
      deck = shuffle(realDeck).slice(0, 15).map(fc => ({
        id: fc.id,
        cycle: 'Ciclo Clínico',
        subject: fc.subject as Subject,
        text: fc.front,
        options: [fc.back],
        correctIndex: 0,
        explanation: fc.explanation,
      }));
    } else {
      deck = shuffle(QUESTIONS.filter(q => q.subject === subject)).slice(0, 15);
    }
    if (deck.length === 0) { setSocialToast('Sem cartas nesse tópico.'); setTimeout(() => setSocialToast(''), 2500); return; }
    setFlashSubject(subject);
    setFlashDeck(deck);
    setFlashIndex(0);
    setFlashFlipped(false);
    setFlashUnknown([]);
    setFlashKnown(0);
    setFlashReview(false);
    setFlashStage('study');
  };
  // Estuda o baralho de flashcards criados pela própria pessoa.
  const startCustomFlashcards = () => {
    const deck: Question[] = shuffle<CustomFlashcard>(user.customFlashcards).map(c => ({
      id: c.id,
      cycle: 'Ciclo Clínico',
      subject: c.subject as Subject,
      text: c.front,
      options: [c.back],
      correctIndex: 0,
      explanation: c.explanation,
    }));
    if (deck.length === 0) { setSocialToast('Você ainda não criou nenhum flashcard.'); setTimeout(() => setSocialToast(''), 2500); return; }
    setFlashSubject('Meus Flashcards');
    setFlashDeck(deck);
    setFlashIndex(0);
    setFlashFlipped(false);
    setFlashUnknown([]);
    setFlashKnown(0);
    setFlashReview(false);
    setFlashStage('study');
  };
  // Cria um flashcard próprio (pergunta/resposta livres) e guarda na conta.
  const saveNewFlashcard = () => {
    const front = newFlashFront.trim();
    const back = newFlashBack.trim();
    if (!front || !back) return;
    const card: CustomFlashcard = {
      id: `custom_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      subject: newFlashSubject,
      front,
      back,
      explanation: newFlashExplanation.trim() || undefined,
      createdAt: Date.now(),
    };
    setUser(prev => ({ ...prev, customFlashcards: [...prev.customFlashcards, card] }));
    setNewFlashFront('');
    setNewFlashBack('');
    setNewFlashExplanation('');
    setSocialToast('Flashcard criado! ✨');
    setTimeout(() => setSocialToast(''), 2000);
  };
  const deleteCustomFlashcard = (id: string) => {
    setUser(prev => ({ ...prev, customFlashcards: prev.customFlashcards.filter(c => c.id !== id) }));
  };

  // ── AGENDA (provas/atividades + lembretes) ────────────────────────────────
  const [agendaTitle, setAgendaTitle] = useState('');
  const [agendaSubject, setAgendaSubject] = useState('');
  const [agendaDate, setAgendaDate] = useState('');
  const [agendaType, setAgendaType] = useState<'prova' | 'atividade'>('prova');

  const addAgendaEvent = () => {
    const title = agendaTitle.trim();
    if (!title || !agendaDate) return;
    const ev: AgendaEvent = {
      id: `ag_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      title,
      subject: agendaSubject,
      date: agendaDate,
      type: agendaType,
      createdAt: Date.now(),
    };
    setUser(prev => ({ ...prev, agenda: [...prev.agenda, ev] }));
    setAgendaTitle(''); setAgendaSubject(''); setAgendaDate(''); setAgendaType('prova');
    setSocialToast('Evento salvo na agenda! 📅');
    setTimeout(() => setSocialToast(''), 2000);
  };
  const removeAgendaEvent = (id: string) => {
    setUser(prev => ({ ...prev, agenda: prev.agenda.filter(e => e.id !== id) }));
  };

  // Dias entre hoje e a data (>0 futuro, 0 hoje, <0 passado). Datas locais.
  const daysUntil = (isoDate: string): number => {
    const today = new Date(dateKey() + 'T00:00:00');
    const target = new Date(isoDate + 'T00:00:00');
    return Math.round((target.getTime() - today.getTime()) / 86400000);
  };
  // Próximos eventos (hoje ou futuro), ordenados por data.
  const upcomingAgenda = useMemo(
    () => [...user.agenda]
      .filter(e => daysUntil(e.date) >= 0)
      .sort((a, b) => a.date.localeCompare(b.date)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user.agenda],
  );
  // Inicia questões do assunto de um evento da agenda. Puxa do banco inteiro por
  // matéria, para sempre encontrar conteúdo (independente da trilha).
  const studyForEvent = (ev: AgendaEvent) => {
    if (ev.subject) {
      const pool = QUESTIONS.filter(q => q.subject === ev.subject);
      if (pool.length > 0) { startQuizWithPool(pool); return; }
    }
    startQuiz();
  };

  // ── LIGA: jogadores REAIS (você + amigos com perfil carregado) ────────────
  // Sem usuários fictícios: cada pessoa entra na liga do seu XP real.
  const initialsOf = (name: string): string => {
    const clean = name.trim().split(/\s+/).filter(p => !/^dr\.?a?\.?$/i.test(p));
    const src = clean.length ? clean : name.trim().split(/\s+/);
    return ((src[0]?.[0] || '?') + (src[1]?.[0] || '')).toUpperCase();
  };
  const leaguePlayersFor = (tier: LeagueTier): LeaguePlayer[] => {
    const me: LeaguePlayer = {
      name: user.name || 'Você',
      initials: initialsOf(user.name || 'Você'),
      xp: user.xp, level: user.level, active: true, trend: 0,
      currentUser: true, streak: user.streak,
    };
    const acceptedUids = friendships
      .filter(f => f.status === 'accepted')
      .map(f => (f.requesterUid === currentUser?.uid ? f.addresseeUid : f.requesterUid));
    const friends: LeaguePlayer[] = acceptedUids
      .map(uid => friendProfiles[uid])
      .filter((p): p is PublicProfile => !!p && !!p.name)
      .map(p => ({ name: p.name, initials: initialsOf(p.name), xp: p.xp, level: p.level, active: true, trend: 0 }));
    return [me, ...friends]
      .filter(p => getUserLeague(p.xp) === tier)
      .sort((a, b) => b.xp - a.xp);
  };
  // Avalia a carta atual: sabia (known) ou não. As "não sabia" voltam no fim.
  const rateFlash = (known: boolean) => {
    const card = flashDeck[flashIndex];
    if (known) { playCorrect(); setFlashKnown(k => k + 1); }
    else playWrong();
    const newUnknown = (!flashReview && !known && !flashUnknown.includes(card.id)) ? [...flashUnknown, card.id] : flashUnknown;
    if (newUnknown !== flashUnknown) setFlashUnknown(newUnknown);
    const next = flashIndex + 1;
    if (next < flashDeck.length) { setFlashIndex(next); setFlashFlipped(false); return; }
    // Fim do baralho: se houve cartas não sabidas, entra na rodada de reforço.
    if (!flashReview && newUnknown.length > 0) {
      const reviewDeck = flashDeck.filter(q => newUnknown.includes(q.id));
      setFlashDeck(shuffle(reviewDeck));
      setFlashIndex(0);
      setFlashFlipped(false);
      setFlashReview(true);
      return;
    }
    setFlashStage('done');
  };
  const exitFlashcards = () => { setFlashStage('pick'); setFlashDeck([]); setFlashFlipped(false); setView('home'); };

  const startQuizWithPool = (pool: Question[]) => {
    if (guardFreeLimit()) return;
    setIsThinking(true);
    setIsRevisionMode(false);
    setIsSimulado(false);
    setBattleCtx(null);
    const selected = shuffle(pool).slice(0, 10);
    setTimeout(() => {
      setIsThinking(false);
      setActiveQuestions(selected);
      setSessionResults({ correct: 0, total: selected.length, xpGained: 0 });
      setSessionHistory([]);
      setRetryIds([]);
      setIsRetryPhase(false);
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setCombo(0);
      setQuizTimer(0);
      setIsFeedbackVisible(false);
      setView('quiz');
    }, 800);
  };

  // ── SIMULADO ("monte sua prova") ──────────────────────────────────────────
  // Estudante: 100 questões de um assunto, tiradas do banco inteiro (o pool sem
  // banca é pequeno demais para 100 por matéria).
  const buildSimuladoEstudante = (subject: Subject): Question[] =>
    shuffle(QUESTIONS.filter(q => q.subject === subject)).slice(0, SIMULADO_SIZE);

  // Residência: mistura questões da própria banca com questões "baseadas na
  // banca" — mesmos assuntos que a banca cobra, vindas de outras fontes.
  const buildSimuladoResidencia = (bancaShort: string): Question[] => {
    const own = QUESTIONS.filter(q => q.banca === bancaShort);
    const subjects = new Set(own.map(q => q.subject));
    const related = QUESTIONS.filter(q => q.banca !== bancaShort && subjects.has(q.subject));

    const ownShuffled = shuffle(own);
    const ownTarget = Math.min(ownShuffled.length, Math.ceil(SIMULADO_SIZE * SIMULADO_BANCA_SHARE));
    const picked = ownShuffled.slice(0, ownTarget);

    // Completa até 100 com as "baseadas na banca"; se faltar, usa mais da própria.
    const seen = new Set(picked.map(q => q.id));
    for (const q of [...shuffle(related), ...ownShuffled.slice(ownTarget)]) {
      if (picked.length >= SIMULADO_SIZE) break;
      if (seen.has(q.id)) continue;
      seen.add(q.id);
      picked.push(q);
    }
    return shuffle(picked);
  };

  // ── PAYWALL / LIMITE FREE ──────────────────────────────────────────
  const [paywallReason, setPaywallReason] = useState<PaywallReason | null>(null);
  const [checkoutReturnOpen, setCheckoutReturnOpen] = useState(false);

  const questionsToday = user.activityLog[dateKey()] || 0;
  // Premium Residência libera tudo; Estudante libera a trilha Estudante.
  // Contas premium antigas (sem tier) continuam com tudo liberado.
  const hasUnlimited =
    planTier === 'residencia' ||
    (planTier === 'estudante' && selectedTrack === 'estudante') ||
    (plan === 'premium' && planTier === 'free');

  // true = bloqueado (abre o paywall). Chamado na ENTRADA da sessão — no meio
  // de uma sessão já iniciada ninguém é interrompido.
  const guardFreeLimit = (): boolean => {
    if (hasUnlimited || questionsToday < FREE_DAILY_LIMIT) return false;
    setPaywallReason('limit');
    return true;
  };

  // Retorno do checkout do Mercado Pago (/?checkout=retorno).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('checkout') === 'retorno') {
      setCheckoutReturnOpen(true);
      params.delete('checkout');
      const qs = params.toString();
      window.history.replaceState({}, '', window.location.pathname + (qs ? `?${qs}` : ''));
    }
  }, []);

  // Celebra quando o webhook confirmar (free → premium), mesmo que o usuário
  // tenha fechado o modal de "processando".
  const prevPlanRef = useRef(plan);
  useEffect(() => {
    if (prevPlanRef.current === 'free' && plan === 'premium') setCheckoutReturnOpen(true);
    prevPlanRef.current = plan;
  }, [plan]);

  const startSimulado = (questions: Question[], label: string) => {
    // Simulado de 100 questões é recurso premium.
    if (!hasUnlimited) { setPaywallReason('simulado'); return; }
    if (questions.length === 0) return;
    setIsThinking(true);
    setIsRevisionMode(false);
    setBattleCtx(null);
    setIsSimulado(true);
    setSimuladoLabel(label);
    setTimeout(() => {
      setIsThinking(false);
      setActiveQuestions(questions);
      setSessionResults({ correct: 0, total: questions.length, xpGained: 0 });
      setSessionHistory([]);
      setRetryIds([]);
      setIsRetryPhase(false);
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setCombo(0);
      setQuizTimer(0);
      setIsFeedbackVisible(false);
      setView('quiz');
    }, 900);
  };

  const startQuiz = (revision: boolean = false, overrideSubject?: Subject, overrideSubSubject?: string | null) => {
    if (!selectedTrack) { setLandingStep(1); setView('landing'); return; }
    if (guardFreeLimit()) return;
    setIsThinking(true);
    setIsRevisionMode(revision);
    setIsSimulado(false);
    setBattleCtx(null);
    const activeSubject = overrideSubject ?? selectedSubject;
    const activeSubSubject = overrideSubSubject !== undefined ? overrideSubSubject : selectedSubSubject;

    // Select questions once at the start of the session
    const pool = selectedTrack === 'estudante' ? QUESTIONS_ESTUDANTE : QUESTIONS;
    let filtered = [...pool];
    if (revision) {
      filtered = pool.filter(q => user.missedQuestionIds.includes(q.id));
      if (filtered.length === 0) filtered = [...pool].slice(0, 5);
    } else {
      // Filter by subject (subject names are unique per cycle, so no need to also filter cycle)
      filtered = pool.filter(q => q.subject === activeSubject);
      if (activeSubSubject) {
        filtered = filtered.filter(q => q.subSubject === activeSubSubject);
      }
      // Filter by banca if one is selected in the quiz banca filter (residência only)
      if (quizBancaFilter && selectedTrack === 'residencia') {
        const bancaFiltered = filtered.filter(q => q.banca === quizBancaFilter);
        if (bancaFiltered.length > 0) filtered = bancaFiltered;
      }
    }

    const selected = filtered.length > 0
      ? shuffle(filtered).slice(0, 10)
      : shuffle(pool.filter(q => q.subject === activeSubject)).slice(0, 10);

    setTimeout(() => {
      setIsThinking(false);
      setActiveQuestions(selected);
      setSessionResults({ correct: 0, total: selected.length, xpGained: 0 });
      setSessionHistory([]);
      setRetryIds([]);
      setIsRetryPhase(false);
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setCombo(0);
      setQuizTimer(0);
      setIsFeedbackVisible(false);
      setView('quiz');
    }, 2000);
  };

  const handleOptionSelect = (index: number) => {
    if (isFeedbackVisible || !selectedTrack || currentQuestionIndex >= activeQuestions.length) return;
    setSelectedOption(index);

    // Auto-check answer on click
    setIsFeedbackVisible(true);
    const currentQuestion = activeQuestions[currentQuestionIndex];
    const isCorrect = index === currentQuestion.correctIndex;

    // Modo BATALHA: conta acertos, sem mexer em vidas/XP/estatísticas.
    if (battleCtx) {
      setSessionHistory(prev => [...prev, { questionId: currentQuestion.id, selectedIndex: index }]);
      if (isCorrect) { playCorrect(); setBattleCorrect(c => c + 1); setCombo(c => c + 1); }
      else { playWrong(); setCombo(0); }
      return;
    }

    // Fase de reforço (reapresentação dos erros): não pontua, não perde vida e
    // não altera estatísticas — apenas remove do caderno de erros ao acertar.
    if (isRetryPhase) {
      if (isCorrect) {
        playCorrect();
        setCombo(0);
        setUser(prev => ({
          ...prev,
          missedQuestionIds: prev.missedQuestionIds.filter((id: string) => id !== currentQuestion.id),
        }));
      } else {
        playWrong();
      }
      return;
    }

    setSessionHistory(prev => [...prev, { questionId: currentQuestion.id, selectedIndex: index }]);

    if (isCorrect) {
      playCorrect();
      const newCombo = combo + 1;
      setCombo(newCombo);
      setShowXpFloat(true);
      setTimeout(() => setShowXpFloat(false), 900);
      // Foco: combo + bônus de rapidez. Zen: XP fixo, sem pressa.
      const answeredIn = (Date.now() - questionStartRef.current) / 1000;
      const xpEarned = xpForCorrect(quizMode, newCombo, answeredIn);
      setSessionResults(prev => ({ ...prev, correct: prev.correct + 1, xpGained: prev.xpGained + xpEarned }));
      setUser(prev => {
        const subj = currentQuestion.subject;
        const attempts = (prev.subjectAttempts[subj] || 0) + 1;
        const currentMastery = prev.mastery[subj] || 0;
        const newMastery = Math.min(100, Math.round(currentMastery + (100 - currentMastery) * 0.15));
        return {
          ...prev,
          ...dailyProgress(prev, subj),
          mastery: { ...prev.mastery, [subj]: newMastery },
          subjectAttempts: { ...prev.subjectAttempts, [subj]: attempts },
          dailyGoalDone: Math.min(prev.dailyGoalTotal, prev.dailyGoalDone + 1),
          dailyQuestionsUsed: prev.dailyQuestionsUsed + 1,
          lastActiveDate: dateKey(),
          missedQuestionIds: isRevisionMode
            ? prev.missedQuestionIds.filter((id: string) => id !== currentQuestion.id)
            : prev.missedQuestionIds,
        };
      });
    } else {
      playWrong();
      setCombo(0);
      // Enfileira a questão errada para reapresentar no fim da atividade (reforço).
      setRetryIds(prev => prev.includes(currentQuestion.id) ? prev : [...prev, currentQuestion.id]);
      setUser(prev => {
        const subj = currentQuestion.subject;
        const attempts = (prev.subjectAttempts[subj] || 0) + 1;
        const currentMastery = prev.mastery[subj] || 0;
        const newMastery = Math.max(0, Math.round(currentMastery - currentMastery * 0.08));
        return {
          ...prev,
          ...dailyProgress(prev, subj),
          hearts: Math.max(0, prev.hearts - 1),
          mastery: { ...prev.mastery, [subj]: newMastery },
          subjectAttempts: { ...prev.subjectAttempts, [subj]: attempts },
          dailyQuestionsUsed: prev.dailyQuestionsUsed + 1,
          lastActiveDate: dateKey(),
          missedQuestionIds: Array.from(new Set([...prev.missedQuestionIds, currentQuestion.id])),
        };
      });
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      // Ficar sem corações NÃO interrompe mais a sessão: o usuário termina as 10
      // questões, vê a explicação de cada uma e chega ao resumo. O aviso de vidas
      // zeradas é dado no fim (ver abaixo), não no meio do estudo.
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsFeedbackVisible(false);
    } else {
      // Fim da BATALHA: envia o placar e volta para a tela de amigos.
      if (battleCtx) {
        const total = activeQuestions.length;
        const role = battleCtx.role;
        if (currentUser) submitBattleScore(battleCtx.id, currentUser.uid, battleCorrect);
        setSocialToast(
          `Você fez ${battleCorrect}/${total}. ` +
          (role === 'challenger' ? 'Envie o link para o seu amigo jogar!' : 'Resultado computado!')
        );
        setTimeout(() => setSocialToast(''), 5000);
        setBattleCtx(null);
        setIsFeedbackVisible(false);
        setSelectedOption(null);
        setView('amigos');
        return;
      }
      // Fim da lista atual.
      if (!isRetryPhase) {
        // Fim da fase pontuada: consolida XP/nível/meta semanal.
        // (streak diário já é atualizado ao responder, em dailyProgress)
        setSummaryTimer(quizTimer);
        setIsThinking(false);
        setIsFeedbackVisible(false);
        const xpGained = sessionResults.xpGained;
        const correct = sessionResults.correct;
        setUser(prev => {
          const newXp = prev.xp + xpGained;
          const newLevel = Math.floor(newXp / 1000) + 1;
          if (newLevel > prev.level) playLevelUp(); // subiu de nível
          const newWeeklyDone = Math.min(prev.weeklyGoalTotal, prev.weeklyGoalDone + correct);
          return { ...prev, xp: newXp, level: newLevel, weeklyGoalDone: newWeeklyDone };
        });
        // Havendo erros, entra na fase de reforço reapresentando essas questões.
        // O simulado é uma prova: não re-apresenta os erros, vai direto ao resultado.
        const retryQs = isSimulado ? [] : retryIds
          .map(id => activeQuestions.find(q => q.id === id))
          .filter((q): q is Question => Boolean(q));
        if (retryQs.length > 0) {
          setActiveQuestions(retryQs);
          setCurrentQuestionIndex(0);
          setSelectedOption(null);
          setIsFeedbackVisible(false);
          setCombo(0);
          setIsRetryPhase(true);
          return;
        }
      }
      // Sessão completa. Só agora avisamos que as vidas acabaram — o estudo não
      // foi interrompido, e o resumo com todas as explicações fica acessível.
      if (user.hearts <= 0) setShowNoHearts(true);
      setView('summary');
    }
  };

  // Auth gating
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#040B1A] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  if (!currentUser) {
    return <LoginScreen />;
  }

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-slate-900 overflow-x-hidden">
      {/* Header / Stats Bar (2 linhas: logo+perfil em cima, stats completos embaixo) */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-3 py-2.5 shadow-sm">
        <div className="max-w-4xl mx-auto flex flex-col gap-2">
          {/* Linha 1 */}
          <div className="flex items-center justify-between">
            <div className="cursor-pointer" onClick={() => setView('home')}>
              <MedQuestLogo />
            </div>
            <div className="flex items-center gap-1">
              {/* Agenda — provas/atividades */}
              <button
                onClick={() => setView('agenda')}
                className={`relative p-2.5 hover:bg-slate-100 rounded-xl transition-all shrink-0 active:scale-90 ${view === 'agenda' ? 'bg-slate-100 text-brand-primary' : ''}`}
                title="Agenda de provas e atividades"
              >
                <CalendarDays size={20} className={view === 'agenda' ? 'text-brand-primary' : 'text-slate-400'} />
                {upcomingAgenda.some(e => daysUntil(e.date) <= 2) && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-red border border-white" />
                )}
              </button>
              <button
                onClick={() => setView('profile')}
                className={`p-2.5 hover:bg-slate-100 rounded-xl transition-all shrink-0 active:scale-90 ${view === 'profile' ? 'bg-slate-100 text-brand-primary' : ''}`}
              >
                <User size={20} className={view === 'profile' ? 'text-brand-primary' : 'text-slate-400'} />
              </button>
            </div>
          </div>

          {/* Linha 2 — indicadores em chips soltos (mais leve que a caixa única) */}
          <div className="w-full flex items-center gap-1.5">
            <div className="flex-1 flex items-center justify-center gap-1.5 bg-white rounded-xl py-1.5 border border-slate-200/70 shadow-sm">
              <Flame size={16} className="text-brand-orange fill-brand-orange shrink-0" />
              <span className="font-black text-slate-900 text-sm">{user.streak}</span>
            </div>
            <div className="flex-1 flex items-center justify-center gap-1.5 bg-white rounded-xl py-1.5 border border-slate-200/70 shadow-sm">
              <Target size={16} className="text-rose-500 shrink-0" />
              <span className="font-black text-rose-600 text-sm">{Math.max(0, user.dailyGoalTotal - user.dailyGoalDone)}</span>
            </div>
            <button
              className="flex-1 flex items-center justify-center gap-1.5 bg-white rounded-xl py-1.5 border border-slate-200/70 shadow-sm active:scale-95 transition-transform"
              onClick={() => setView('ranking')}
            >
              <Trophy size={16} className="text-brand-orange shrink-0" />
              <span className="font-black text-slate-900 text-[10px] uppercase tracking-tighter">Liga</span>
            </button>
            <div className="flex-1 flex items-center justify-center gap-1.5 bg-white rounded-xl py-1.5 border border-slate-200/70 shadow-sm">
              <Heart size={16} className="text-brand-red fill-brand-red shrink-0" />
              <span className="font-black text-slate-900 text-sm">{user.hearts}</span>
            </div>
            {/* Questões grátis restantes hoje (free) ou coroa (premium) */}
            {hasUnlimited ? (
              <div className="flex-1 flex items-center justify-center gap-1.5 bg-white rounded-xl py-1.5 border border-slate-200/70 shadow-sm" title="MedQuest Premium ativo">
                <Crown size={15} className="text-yellow-500 fill-yellow-500 shrink-0" />
              </div>
            ) : (
              <button
                onClick={() => setPaywallReason('limit')}
                className="flex-1 flex items-center justify-center gap-1.5 bg-white rounded-xl py-1.5 border border-slate-200/70 shadow-sm active:scale-95 transition-transform"
                title={`Questões grátis restantes hoje — toque para ver o Premium`}
              >
                <BookOpen size={15} className="text-brand-primary shrink-0" />
                <span className={`font-black text-sm ${questionsToday >= FREE_DAILY_LIMIT ? 'text-brand-red' : 'text-slate-900'}`}>
                  {Math.max(0, FREE_DAILY_LIMIT - questionsToday)}
                </span>
              </button>
            )}
            <div className="flex-[1.3] flex items-center justify-center bg-white rounded-xl py-1 px-2 border border-slate-200/70 shadow-sm">
              <div className="flex flex-col items-end w-full">
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden mb-1 shadow-inner">
                  <div
                    className="h-full bg-brand-primary transition-all duration-700"
                    style={{ width: `${(user.xp % 1000) / 10}%` }}
                  />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-black text-brand-primary leading-none">{user.xp.toLocaleString()} XP</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Nív. {user.level}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Paywall Premium + retorno do checkout Mercado Pago */}
      <PaywallModal
        open={paywallReason !== null}
        reason={paywallReason ?? 'limit'}
        usedToday={questionsToday}
        dailyLimit={FREE_DAILY_LIMIT}
        isGuest={isGuestMode}
        defaultPlan={selectedTrack === 'residencia' ? 'residencia' : 'estudante'}
        onClose={() => setPaywallReason(null)}
        onSubscribe={startCheckout}
        onCreateAccount={() => { setPaywallReason(null); signOut(); }}
      />
      <CheckoutReturnModal
        open={checkoutReturnOpen}
        isPremium={plan === 'premium'}
        planTier={planTier}
        onClose={() => setCheckoutReturnOpen(false)}
      />

      <main className="max-w-4xl mx-auto p-4 md:p-6 pb-32">
        {/* Thinking Overlay */}
        <AnimatePresence>
          {isThinking && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gradient-to-b from-cyan-950 via-slate-900 to-cyan-950 z-[100] flex flex-col items-center justify-center gap-12"
            >
              {/* Pulse rings + icon */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.25, 0, 0.25] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute w-40 h-40 rounded-full bg-cyan-500/20"
                />
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.35, 0.05, 0.35] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="absolute w-28 h-28 rounded-full bg-cyan-500/30"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-20 h-20 rounded-full border-2 border-dashed border-cyan-400/30"
                />
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-[1.75rem] flex items-center justify-center text-white shadow-2xl shadow-cyan-500/50 z-10">
                  <Zap size={36} fill="currentColor" />
                </div>
              </div>

              {/* Rotating text */}
              <div className="text-center space-y-5">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={loadingTextIdx}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl font-black text-white tracking-tight"
                  >
                    {LOADING_TEXTS[loadingTextIdx]}
                  </motion.p>
                </AnimatePresence>
                {/* Dot progress */}
                <div className="flex justify-center gap-2">
                  {LOADING_TEXTS.map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ width: i === loadingTextIdx ? 24 : 6 }}
                      className={`h-1.5 rounded-full transition-colors duration-300 ${i === loadingTextIdx ? 'bg-cyan-400' : 'bg-cyan-800'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          
          {/* LANDING VIEW */}
          {view === 'landing' && (
            <motion.div 
              key="landing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col gap-10 py-12 px-4"
            >
              {landingStep === 0 ? (
                /* ── STEP 0: captura de nome ── */
                <div className="flex flex-col items-center gap-8 py-4">
                  <div className="flex flex-col items-center gap-5 text-center">
                    <div className="w-24 h-24 bg-cyan-50 rounded-[2rem] flex items-center justify-center shadow-inner border border-cyan-100">
                      <Stethoscope size={44} className="text-brand-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-slate-900 tracking-tighter leading-tight">
                        Bem-vindo ao <span className="text-brand-primary">MedQuest</span>!
                      </h2>
                      <p className="text-slate-500 font-medium mt-2 text-sm leading-snug">
                        Vamos personalizar sua experiência de estudo.
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">
                      Como devemos te chamar?
                    </label>
                    <input
                      type="text"
                      placeholder='Ex: "Dr. Silva" ou apenas "João"'
                      value={nameInput}
                      onChange={e => setNameInput(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === 'Enter' && nameInput.trim()) {
                          setUser(prev => ({ ...prev, name: nameInput.trim() }));
                          setLandingStep(1);
                        }
                      }}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-brand-primary focus:outline-none text-slate-900 font-bold text-base bg-white shadow-sm transition-colors"
                      autoFocus
                    />
                    <p className="text-[10px] text-slate-400 font-medium px-1 leading-snug">
                      Use "Dr. Sobrenome" se for médico ou residente, ou apenas seu primeiro nome.
                    </p>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      if (nameInput.trim()) {
                        setUser(prev => ({ ...prev, name: nameInput.trim() }));
                        setLandingStep(1);
                      }
                    }}
                    disabled={!nameInput.trim()}
                    className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all
                      ${nameInput.trim()
                        ? 'bg-brand-primary text-white shadow-xl shadow-cyan-500/25 hover:scale-[1.02]'
                        : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                  >
                    <span>Continuar</span>
                    {nameInput.trim() && <ChevronRight size={18} strokeWidth={3} />}
                  </motion.button>
                </div>
              ) : (
                /* ── STEP 1: seleção de trilha ── */
                <>
                  <div className="text-center space-y-4 flex flex-col items-center">
                    <div className="px-6 py-2 bg-slate-100/80 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] backdrop-blur-sm">
                      Plataforma Médica Completa
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 max-w-sm leading-snug">
                      Plataforma completa para <span className="text-brand-primary border-b-2 border-brand-primary/30">estudantes</span> e <span className="text-brand-primary border-b-2 border-brand-primary/30">médicos</span>, da graduação ao título de especialista.
                    </h2>
                    <button
                      onClick={() => setShowBenefits(true)}
                      className="flex items-center gap-2 px-8 py-4 mt-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-2xl shadow-sm hover:bg-slate-50 transition-all uppercase text-[10px] tracking-[0.15em] active:scale-95"
                    >
                      <BookOpen size={18} className="text-brand-primary" />
                      Conheça as Vantagens
                    </button>
                  </div>

                  <div className="flex flex-col items-center gap-8 w-full max-w-md mx-auto">
                    {/* Trilha Estudante Card */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      onClick={() => selectTrack('estudante')}
                      className="w-full bg-white p-10 rounded-[3rem] border border-slate-200/80 shadow-2xl cursor-pointer group transition-all relative overflow-hidden flex flex-col"
                    >
                      <div className="flex justify-between items-start mb-12">
                        <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center text-brand-primary border border-cyan-150 shadow-inner">
                          <BookOpen size={36} />
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Assinatura</p>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-black text-slate-900 tracking-tighter">R$29,90</span>
                            <span className="text-slate-400 text-sm font-bold">/mês</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <h3 className="text-4xl font-black text-slate-900 tracking-tighter leading-none">Trilha Estudante</h3>
                        <p className="text-slate-500 font-medium text-base leading-relaxed">
                          Questões por sistema alinhadas ao currículo da faculdade — do ciclo básico ao internato, sem precisar abrir o Harrison.
                        </p>
                        <div className="space-y-4 pt-4">
                          {['XP DIÁRIO & STREAKS','+20 MIL QUESTÕES','ROTEIRO SEMANAL DE ESTUDOS','QUESTÕES DO BÁSICO AO INTERNATO','LIGAS & DESAFIOS COM AMIGOS'].map(item => (
                            <div key={item} className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                              <CheckCircle2 size={18} className="text-brand-primary fill-cyan-50" strokeWidth={2.5} />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Trilha Residência Card */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      onClick={() => { setSelectedBanca(null); setBancaSearch(''); setBancaPage(0); setBancaUfFilter('TODAS'); setView('residencia-onboarding'); }}
                      className="w-full bg-slate-900 p-10 rounded-[3rem] shadow-2xl cursor-pointer group transition-all relative overflow-hidden flex flex-col"
                    >
                      <div className="absolute top-0 right-0 py-2.5 px-6 bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest rounded-bl-3xl shadow-lg z-10">
                        Mais Popular
                      </div>
                      <div className="flex justify-between items-start mb-12 relative z-10">
                        <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-cyan-500/20">
                          <Zap size={36} fill="currentColor" />
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Assinatura</p>
                          <div className="flex items-baseline gap-1 text-white">
                            <span className="text-3xl font-black tracking-tighter">R$79,90</span>
                            <span className="text-slate-400 text-sm font-bold">/mês</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6 relative z-10">
                        <h3 className="text-4xl font-black text-white tracking-tighter leading-none">Trilha Residência</h3>
                        <p className="text-slate-400 font-medium text-base leading-relaxed">
                          Estude com as provas que realmente vão cair na sua residência: 43 bancas reais, simulados cronometrados e um raio-x completo do seu desempenho a cada questão.
                        </p>
                        <div className="space-y-4 pt-4">
                          {['ENARE, CERMAM, USP E +40 BANCAS','+30 MIL QUESTÕES','SIMULADO OFICIAL DA SUA BANCA','FLASHCARDS PARA REVISÃO RÁPIDA','MODO DIAGNÓSTICO: DESVENDE O CASO','PONTOS FRACOS MAPEADOS POR IA','DESAFIOS AO VIVO COM AMIGOS'].map(item => (
                            <div key={item} className="flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                              <CheckCircle2 size={18} className="text-brand-primary fill-slate-800" strokeWidth={2.5} />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    <div className="flex flex-col items-center gap-4 mt-8">
                      <button
                        onClick={() => selectTrack('estudante')}
                        className="text-brand-primary font-black uppercase text-[11px] tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform"
                      >
                        Começar Agora <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          )}

          {/* RESIDÊNCIA ONBOARDING */}
          {view === 'residencia-onboarding' && (() => {
            const filtered = BANCAS.filter(b => {
              const q = bancaSearch.toLowerCase();
              const matchSearch = !q || b.short.toLowerCase().includes(q) || b.name.toLowerCase().includes(q);
              const matchUf = bancaUfFilter === 'TODAS' || b.uf === bancaUfFilter;
              return matchSearch && matchUf;
            });
            const totalPages = Math.max(1, Math.ceil(filtered.length / BANCAS_PER_PAGE));
            const safePage = Math.min(bancaPage, totalPages - 1);
            const pageBancas = filtered.slice(safePage * BANCAS_PER_PAGE, (safePage + 1) * BANCAS_PER_PAGE);
            return (
              <motion.div
                key="residencia-onboarding"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col h-screen"
              >
                {/* Header */}
                <div className="flex items-center gap-3 px-4 pt-4 pb-4 border-b border-slate-100 bg-brand-bg">
                  <button
                    onClick={() => setView('landing')}
                    className="p-2 -ml-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <div className="flex-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Trilha Residência</p>
                    <p className="text-sm font-black text-slate-900 tracking-tight mt-0.5">Escolha sua banca-alvo</p>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <div className="w-5 h-1.5 rounded-full bg-brand-primary" />
                    <div className="w-2 h-1.5 rounded-full bg-slate-200" />
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto px-4 pt-5 pb-4">
                  {/* Hero */}
                  <div className="flex items-start gap-3 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-brand-primary flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0">
                      <Zap size={22} fill="currentColor" className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-black text-slate-900 tracking-tight leading-snug">
                        Para qual banca você<br />quer se preparar?
                      </h2>
                      <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                        Personalizamos questões e simulados com foco total na sua instituição-alvo.
                      </p>
                    </div>
                  </div>

                  {/* Search */}
                  <div className="relative mb-3">
                    <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Buscar instituição..."
                      value={bancaSearch}
                      onChange={e => { setBancaSearch(e.target.value); setBancaPage(0); }}
                      className="w-full bg-white border border-slate-200 rounded-2xl pl-10 pr-4 py-3 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary shadow-sm"
                    />
                  </div>

                  {/* UF Filters */}
                  <div
                    ref={ufFilterRef}
                    className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 mb-4 cursor-grab active:cursor-grabbing select-none"
                    onMouseDown={e => {
                      const el = ufFilterRef.current;
                      if (!el) return;
                      ufDragRef.current = { isDown: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
                    }}
                    onMouseLeave={() => { ufDragRef.current.isDown = false; }}
                    onMouseUp={() => { ufDragRef.current.isDown = false; }}
                    onMouseMove={e => {
                      const el = ufFilterRef.current;
                      if (!ufDragRef.current.isDown || !el) return;
                      e.preventDefault();
                      const x = e.pageX - el.offsetLeft;
                      el.scrollLeft = ufDragRef.current.scrollLeft - (x - ufDragRef.current.startX);
                    }}
                  >
                    {['Todas', 'BR', 'SP', 'RJ', 'RS', 'PR', 'MG', 'SC', 'BA', 'CE', 'PE', 'DF', 'GO', 'MS', 'AM', 'PA'].map(uf => {
                      const key = uf === 'Todas' ? 'TODAS' : uf;
                      const active = bancaUfFilter === key;
                      return (
                        <button
                          key={uf}
                          onClick={() => { setBancaUfFilter(key); setBancaPage(0); }}
                          className={`shrink-0 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all
                            ${active ? 'bg-brand-primary text-white shadow-md shadow-cyan-500/20' : 'bg-white text-slate-500 border border-slate-200'}`}
                        >
                          {uf}
                        </button>
                      );
                    })}
                  </div>

                  {/* Category label */}
                  <div className="flex items-center gap-2 mb-3">
                    <Hospital size={14} className="text-brand-primary" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Residência Médica</span>
                    <span className="ml-auto text-[10px] font-black text-brand-primary bg-cyan-50 px-2 py-0.5 rounded-full">
                      {filtered.length} instituições
                    </span>
                  </div>

                  {/* Todas as Bancas option */}
                  {!bancaSearch && bancaUfFilter === 'TODAS' && (
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedBanca(selectedBanca === 'todas' ? null : 'todas')}
                      className={`w-full flex items-center gap-3 p-3.5 rounded-2xl border-2 transition-all text-left mb-2
                        ${selectedBanca === 'todas' ? 'bg-cyan-50 border-brand-primary shadow-md shadow-cyan-500/10' : 'bg-white border-transparent shadow-sm'}`}
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors
                        ${selectedBanca === 'todas' ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                        <BookOpen size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-[11px] font-black uppercase tracking-wide leading-none mb-0.5 ${selectedBanca === 'todas' ? 'text-brand-primary' : 'text-slate-900'}`}>
                          Todas as Bancas
                        </p>
                        <p className="text-[11px] text-slate-500 font-medium">Questões de todas as instituições</p>
                      </div>
                      <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                        ${selectedBanca === 'todas' ? 'bg-brand-primary border-brand-primary' : 'border-slate-300'}`}>
                        {selectedBanca === 'todas' && <Check size={10} strokeWidth={3.5} className="text-white" />}
                      </div>
                    </motion.button>
                  )}

                  {/* Institution list */}
                  <div className="space-y-2 mb-4">
                    {pageBancas.length === 0 ? (
                      <div className="text-center py-10 text-slate-400">
                        <Hospital size={28} className="mx-auto mb-2 opacity-30" />
                        <p className="text-xs font-medium">Nenhuma instituição encontrada</p>
                      </div>
                    ) : pageBancas.map(banca => {
                      const isSel = selectedBanca === banca.id;
                      return (
                        <motion.button
                          key={banca.id}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedBanca(isSel ? null : banca.id)}
                          className={`w-full flex items-center gap-3 p-3.5 rounded-2xl border-2 transition-all text-left
                            ${isSel ? 'bg-cyan-50 border-brand-primary shadow-md shadow-cyan-500/10' : 'bg-white border-transparent shadow-sm'}`}
                        >
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors
                            ${isSel ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                            <Hospital size={16} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-[11px] font-black uppercase tracking-wide leading-none mb-0.5 ${isSel ? 'text-brand-primary' : 'text-slate-900'}`}>
                              {banca.short}
                            </p>
                            <p className="text-[11px] text-slate-500 font-medium truncate">{banca.name}</p>
                          </div>
                          <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                            ${isSel ? 'bg-brand-primary border-brand-primary' : 'border-slate-300'}`}>
                            {isSel && <Check size={10} strokeWidth={3.5} className="text-white" />}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-between py-2">
                      <button
                        onClick={() => setBancaPage(p => Math.max(0, p - 1))}
                        disabled={safePage === 0}
                        className="p-2 rounded-xl text-slate-400 hover:text-slate-700 disabled:opacity-30 hover:bg-white transition-all"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        Página {safePage + 1} de {totalPages}
                      </span>
                      <button
                        onClick={() => setBancaPage(p => Math.min(totalPages - 1, p + 1))}
                        disabled={safePage >= totalPages - 1}
                        className="p-2 rounded-xl text-slate-400 hover:text-slate-700 disabled:opacity-30 hover:bg-white transition-all"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="px-4 py-4 bg-brand-bg border-t border-slate-100 shrink-0">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => { if (selectedBanca) selectTrack('residencia'); }}
                    disabled={!selectedBanca}
                    className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-2
                      ${selectedBanca
                        ? 'bg-brand-primary text-white shadow-xl shadow-cyan-500/25'
                        : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                  >
                    {selectedBanca
                      ? <><span>Continuar</span><ChevronRight size={18} strokeWidth={3} /></>
                      : <span>Selecione uma banca para continuar</span>
                    }
                  </motion.button>
                </div>
              </motion.div>
            );
          })()}

          {/* Thinking Overlay */}
          {/* Moved outside AnimatePresence */}

          {/* BENEFITS MODAL */}
          <AnimatePresence>
            {showBenefits && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
              >
                <motion.div 
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  className="bg-white w-full max-w-lg rounded-[3rem] p-10 shadow-2xl relative overflow-hidden"
                >
                  <button 
                    onClick={() => setShowBenefits(false)}
                    className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <XCircle size={24} />
                  </button>
                  <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Vantagens MedQuest</h3>
                  <div className="space-y-6">
                    {[
                      { icon: Zap, title: 'IA Mentoria', desc: 'Respostas detalhadas e planos de estudo personalizados.' },
                      { icon: Activity, title: 'Simulados Reais', desc: 'Provas íntegras das principais bancas (USP, Einstein).' },
                      { icon: Trophy, title: 'Gamificação Social', desc: 'Estude com amigos, suba nas ligas e ganhe prêmios.' }
                    ].map((benefit, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center text-brand-primary shrink-0">
                          <benefit.icon size={24} fill={i === 0 ? "currentColor" : i === 2 ? "currentColor" : "none"} />
                        </div>
                        <div>
                          <h4 className="font-black text-slate-900 uppercase tracking-tighter">{benefit.title}</h4>
                          <p className="text-sm text-slate-500 font-medium">{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => setShowBenefits(false)}
                    className="w-full mt-10 py-5 bg-brand-primary text-white font-black rounded-2xl shadow-xl shadow-cyan-500/20 uppercase tracking-widest hover:scale-105 transition-all text-center flex items-center justify-center"
                  >
                    Entendi!
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>



          {/* HOME VIEW */}
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col gap-5 pb-24"
            >
              {/* Hero Card */}
              <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-xl mt-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-56 h-56 bg-brand-primary/8 rounded-full -mr-24 -mt-24 pointer-events-none blur-2xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-orange/10 rounded-full -ml-16 -mb-16 pointer-events-none blur-2xl" />
                <div className="relative z-10">
                  {/* Greeting row: mascot + text side by side */}
                  <div className="flex items-center gap-3 mb-5">
                    <button
                      onClick={() => setShowAvatarPicker(true)}
                      className="relative shrink-0 -ml-1"
                    >
                      {(() => {
                        const av = MEDICAL_AVATARS.find(a => a.id === userAvatar) ?? MEDICAL_AVATARS[0];
                        return (
                          <div
                            className="w-16 h-16 rounded-2xl p-[2.5px] shadow-md"
                            style={{ background: `linear-gradient(135deg, ${av.ring}, ${av.ring}00)` }}
                          >
                            <div
                              className="w-full h-full rounded-[0.9rem] flex items-center justify-center text-4xl select-none"
                              style={{ background: av.bg }}
                            >
                              {av.emoji}
                            </div>
                          </div>
                        );
                      })()}
                      {user.streak > 0 && (
                        <div className="absolute -top-1 -left-1 w-5 h-5 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                          <Flame size={10} className="text-white fill-white" />
                        </div>
                      )}
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full border border-slate-200 flex items-center justify-center shadow-sm">
                        <Edit2 size={10} className="text-slate-400" />
                      </div>
                    </button>
                    <div className="min-w-0">
                      <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
                        {(() => { const h = new Date().getHours(); return h < 12 ? 'Bom dia,' : h < 18 ? 'Boa tarde,' : 'Boa noite,'; })()}{' '}<br className="hidden sm:inline" />
                        <span className="text-brand-primary">{user.name.split(' ')[0] === 'Dr.' ? user.name.split(' ').slice(0,2).join(' ') : user.name.split(' ')[0] || 'Estudante'}</span>!
                      </h2>
                      <p className="text-[11px] font-bold text-slate-400 mt-0.5 truncate">
                        {(() => {
                          const d = new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
                          return d.charAt(0).toUpperCase() + d.slice(1);
                        })()}
                      </p>
                    </div>
                  </div>
                  {/* Stat rail */}
                  <div className="grid grid-cols-3 rounded-2xl border border-slate-100 bg-slate-50/60 mb-5 overflow-hidden">
                    {[
                      { icon: Flame, value: `${user.streak}`,         label: 'dias',  iconBg: 'bg-orange-50', iconColor: 'text-orange-500' },
                      { icon: Heart, value: `${user.hearts}`,         label: 'vidas', iconBg: 'bg-red-50',    iconColor: 'text-red-500' },
                      { icon: Zap,   value: user.xp.toLocaleString(), label: 'xp',    iconBg: 'bg-cyan-50',   iconColor: 'text-brand-primary' },
                    ].map((s, i) => (
                      <div key={s.label} className={`relative flex flex-col items-center justify-center gap-1 py-3 ${i !== 0 ? 'border-l border-slate-200/70' : ''}`}>
                        <div className={`relative w-7 h-7 rounded-lg flex items-center justify-center ${s.iconBg}`}>
                          <s.icon size={13} className={`${s.iconColor} fill-current`} />
                          {i === 0 && user.streakFreezes > 0 && (
                            <div
                              className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-sky-400 border-2 border-white flex items-center justify-center shadow-sm"
                              title={`${user.streakFreezes} ${user.streakFreezes === 1 ? 'congelamento disponível' : 'congelamentos disponíveis'} — protege seu streak se você perder um dia`}
                            >
                              <Snowflake size={8} className="text-white" strokeWidth={3} />
                            </div>
                          )}
                        </div>
                        <span className="text-sm font-black text-slate-900 leading-none">{s.value}</span>
                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">{s.label}</span>
                      </div>
                    ))}
                  </div>
                  {/* Daily goal bar */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Meta de hoje</span>
                    <span className="text-[10px] font-black text-slate-700">
                      {user.dailyGoalDone}/{user.dailyGoalTotal}
                      <span className="text-slate-400 font-bold"> · {Math.min(100, Math.round((user.dailyGoalDone / user.dailyGoalTotal) * 100))}%</span>
                    </span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, (user.dailyGoalDone / user.dailyGoalTotal) * 100)}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #00a7e1, #00658a)' }}
                    />
                  </div>
                </div>
              </div>

              {/* Dr. Quest — mensagem do dia */}
              {(() => {
                const metaOk = user.dailyGoalDone >= user.dailyGoalTotal;
                const faltam = user.dailyGoalTotal - user.dailyGoalDone;
                // "Ontem" está em frozenDays só no único dia seguinte a um congelamento
                // ter sido usado — dá pra avisar sem precisar de um flag transiente à parte.
                const yesterday = dateKey(new Date(Date.now() - 86400000));
                const justFroze = (user.frozenDays ?? []).includes(yesterday);
                const msg = justFroze
                  ? `Você perdeu um dia, mas seu Streak Freeze ❄️ salvou a sequência de ${user.streak} dias! Restam ${user.streakFreezes} ${user.streakFreezes === 1 ? 'gelo' : 'gelos'}.`
                  : metaOk
                    ? 'Meta de hoje concluída! Que tal um desafio extra pra turbinar o XP? 🏆'
                    : user.dailyGoalDone > 0
                      ? `Faltam só ${faltam} ${faltam === 1 ? 'questão' : 'questões'} para fechar a meta de hoje. Bora?`
                      : user.streak >= 3
                        ? `Streak de ${user.streak} dias em jogo! Responda uma questão para mantê-lo aceso. 🔥`
                        : 'Pronto para o plantão de hoje? Sua meta te espera!';
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`flex items-center gap-3 bg-white rounded-3xl border shadow-lg px-4 py-3 ${justFroze ? 'border-sky-200' : 'border-slate-100'}`}
                  >
                    <Mascot expression={justFroze ? 'happy' : metaOk ? 'cheer' : 'confident'} className="w-14 h-14 shrink-0" />
                    <div className="min-w-0">
                      <span className={`text-[9px] font-black uppercase tracking-[0.25em] ${justFroze ? 'text-sky-500' : 'text-brand-secondary'}`}>Dr. Quest</span>
                      <p className="text-xs font-bold text-slate-600 leading-snug">{msg}</p>
                    </div>
                  </motion.div>
                );
              })()}

              {/* Lembrete de agenda — próxima prova/atividade */}
              {upcomingAgenda.length > 0 && (() => {
                const ev = upcomingAgenda[0];
                const n = daysUntil(ev.date);
                const hoje = n === 0;
                const dTxt = n === 0 ? 'é hoje!' : n === 1 ? 'é amanhã' : `em ${n} dias`;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className={`rounded-3xl border shadow-lg p-4 ${hoje ? 'bg-gradient-to-br from-brand-primary to-cyan-900 border-transparent text-white' : 'bg-white border-slate-100'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${hoje ? 'bg-white/15' : 'bg-brand-primary/10'}`}>
                        <Bell size={20} className={hoje ? 'text-white' : 'text-brand-primary'} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-[9px] font-black uppercase tracking-[0.2em] leading-none mb-1 ${hoje ? 'text-cyan-100/80' : 'text-brand-secondary'}`}>
                          {ev.type === 'prova' ? 'Sua prova' : 'Sua atividade'} {dTxt}
                        </p>
                        <p className={`text-sm font-black leading-tight truncate ${hoje ? 'text-white' : 'text-slate-900'}`}>{ev.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      {ev.subject && (
                        <button
                          onClick={() => studyForEvent(ev)}
                          className={`flex-1 flex items-center justify-center gap-1.5 text-[11px] font-black uppercase tracking-widest px-4 py-2.5 rounded-xl active:scale-95 transition-transform ${
                            hoje ? 'bg-white text-brand-primary' : 'bg-brand-primary text-white'
                          }`}
                        >
                          <Zap size={13} fill="currentColor" /> Treinar {ev.subject}
                        </button>
                      )}
                      <button
                        onClick={() => setView('agenda')}
                        className={`text-[11px] font-black uppercase tracking-widest px-4 py-2.5 rounded-xl active:scale-95 transition-transform ${
                          hoje ? 'bg-white/15 text-white' : ev.subject ? 'bg-slate-100 text-slate-500' : 'flex-1 bg-brand-primary text-white'
                        }`}
                      >
                        Ver agenda
                      </button>
                    </div>
                  </motion.div>
                );
              })()}

              {/* Modo de estudo — vale para todas as sessões de questões */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-4">
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Modo de estudo</span>
                  <span className="text-[10px] font-black text-slate-500">
                    {isFoco ? 'Até 150 XP por acerto' : `${ZEN_XP} XP por acerto`}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {([
                    {
                      mode: 'foco' as QuizMode,
                      icon: Timer,
                      title: 'Foco',
                      desc: `${QUESTION_SECONDS}s por questão. Quanto mais rápido acertar, mais XP.`,
                      active: 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20',
                      idle: 'bg-white text-slate-500 border-slate-200 hover:border-brand-primary/40',
                    },
                    {
                      mode: 'zen' as QuizMode,
                      icon: Leaf,
                      title: 'Zen',
                      desc: `Sem cronômetro. Todo acerto vale ${ZEN_XP} XP.`,
                      active: 'bg-brand-green text-white border-brand-green shadow-lg shadow-brand-green/20',
                      idle: 'bg-white text-slate-500 border-slate-200 hover:border-brand-green/40',
                    },
                  ]).map(({ mode, icon: Icon, title, desc, active, idle }) => {
                    const on = quizMode === mode;
                    return (
                      <button
                        key={mode}
                        onClick={() => setQuizMode(mode)}
                        className={`text-left p-4 rounded-2xl border-2 transition-all active:scale-95 ${on ? active : idle}`}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <Icon size={16} strokeWidth={3} />
                          <span className="text-sm font-black uppercase tracking-wider">{title}</span>
                          {on && <Check size={14} strokeWidth={4} className="ml-auto" />}
                        </div>
                        <p className={`text-[11px] font-bold leading-snug ${on ? 'text-white/80' : 'text-slate-400'}`}>
                          {desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedTrack === 'estudante' ? (
                <div className="flex flex-col gap-5">
                  {/* AI Insight Pill */}
                  <div className="flex bg-white p-1 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="flex items-center gap-2 px-3 py-2 shrink-0">
                      <div className="bg-brand-primary/10 p-1.5 rounded-lg text-brand-primary">
                        <Activity size={15} />
                      </div>
                      <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest hidden sm:block">Dr. Quest IA</span>
                    </div>
                    <div
                      onClick={() => setView('revision')}
                      className="flex-1 bg-slate-50 rounded-xl px-3 py-2 flex items-center justify-between group cursor-pointer hover:bg-slate-100 transition-colors min-w-0"
                    >
                      <span className="text-xs font-bold text-slate-600 truncate">Revisar Cardiologia Avançada</span>
                      <ChevronRight size={13} className="text-slate-400 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                    </div>
                  </div>

                  {/* Monte seu Simulado */}
                  <button
                    onClick={() => setView('simulado')}
                    className="flex items-center gap-3 bg-gradient-to-br from-cyan-600 to-cyan-900 rounded-3xl p-4 text-white shadow-lg active:scale-[0.98] transition-transform text-left"
                  >
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-white/15 shrink-0">
                      <Award size={22} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-200/80 leading-none mb-1">Monte sua prova</p>
                      <p className="text-sm font-black leading-tight">Simulado de até {SIMULADO_SIZE} questões por assunto</p>
                    </div>
                    <ChevronRight size={18} className="text-white/60 shrink-0" />
                  </button>

                  {/* Flashcards */}
                  <button
                    onClick={() => { setFlashStage('pick'); setView('flashcards'); }}
                    className="flex items-center gap-3 bg-gradient-to-br from-violet-600 to-purple-900 rounded-3xl p-4 text-white shadow-lg active:scale-[0.98] transition-transform text-left"
                  >
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-white/15 shrink-0">
                      <Layers size={22} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-purple-200/80 leading-none mb-1">Memorização Ativa</p>
                      <p className="text-sm font-black leading-tight">Flashcards Personalizados</p>
                    </div>
                    <ChevronRight size={18} className="text-white/60 shrink-0" />
                  </button>

                  {/* Roteiro Semanal — muda de acordo com o ciclo selecionado no toggle abaixo */}
                  {(() => {
                    const PLAN = buildWeekPlan(selectedCycle, QUESTIONS_ESTUDANTE);

                    if (PLAN.length === 0) {
                      return (
                        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-lg p-6 text-center">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Roteiro da Semana</span>
                          <p className="text-xs font-bold text-slate-400 mt-2">Ainda não temos questões suficientes no {selectedCycle} pra montar um roteiro. Escolha outro ciclo no seletor abaixo.</p>
                        </div>
                      );
                    }

                    // Posição no plano, contada desde o dia em que o usuário começou.
                    // O roteiro reinicia a cada 7 dias (% 7) — antes o índice era
                    // travado em 6 e, passada a primeira semana, a última matéria
                    // ficava sendo sugerida pra sempre.
                    const startDate = new Date(user.planStartDate + 'T00:00:00');
                    const nowDate   = new Date(dateKey() + 'T00:00:00');
                    const daysSinceStart = Math.max(0, Math.round((nowDate.getTime() - startDate.getTime()) / 86400000));
                    const planDayIndex = daysSinceStart % 7;
                    const todayPlan = PLAN[planDayIndex];

                    // As 7 datas da semana corrente do roteiro — ancorar na primeira
                    // semana deixava a fita presa no passado, e aí o dia de hoje nunca
                    // aparecia nela e os marcadores de concluído/perdido não batiam.
                    const weekStart = new Date(startDate);
                    weekStart.setDate(weekStart.getDate() + Math.floor(daysSinceStart / 7) * 7);
                    const stripDays = Array.from({ length: 7 }, (_, i) => {
                      const d = new Date(weekStart);
                      d.setDate(d.getDate() + i);
                      return d;
                    });

                    return (
                      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-lg overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 pt-4 pb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: todayPlan.color + '18' }}>
                              <CalendarDays size={13} style={{ color: todayPlan.color }} />
                            </div>
                            <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Roteiro da Semana</span>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">· {selectedCycle}</span>
                          </div>
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            Dia {planDayIndex + 1} de 7
                          </span>
                        </div>

                        {/* 7-day strip */}
                        <div className="flex px-4 pb-4 gap-1.5">
                          {PLAN.map((p, i) => {
                            const isPastDay = i < planDayIndex;
                            const isToday   = i === planDayIndex;
                            const date      = stripDays[i];
                            const dayNum    = date.getDate();
                            const month     = date.getMonth() + 1;
                            // Cumprido de verdade = respondeu ao menos 1 questão dessa matéria naquele dia
                            // (activitySubjects), não "qualquer dia que já passou".
                            const done = (user.activitySubjects?.[dateKey(date)]?.[p.subject] || 0) > 0;
                            const missed = isPastDay && !done;
                            return (
                              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                <span className="text-[7px] font-black text-slate-400">{dayNum}/{month}</span>
                                <motion.div
                                  animate={isToday && !done ? { scale: [1, 1.09, 1] } : {}}
                                  transition={{ repeat: Infinity, duration: 2.5 }}
                                  className="w-7 h-7 rounded-full flex items-center justify-center text-[12px]"
                                  style={
                                    done ? { background: '#DCFCE7' }
                                    : missed ? { background: '#FEE2E2' }
                                    : isToday ? { background: p.color, boxShadow: `0 4px 12px ${p.color}55` }
                                    : { background: '#F1F5F9' }
                                  }
                                >
                                  {done
                                    ? <span className="text-green-600 font-black text-[10px]">✓</span>
                                    : missed
                                      ? <span className="text-red-500 font-black text-[10px]">✕</span>
                                      : <span>{p.emoji}</span>}
                                </motion.div>
                                <span
                                  className="text-[7px] font-bold truncate w-full text-center leading-tight"
                                  style={{ color: done ? '#16A34A' : missed ? '#DC2626' : isToday ? p.color : '#94A3B8' }}
                                >
                                  {p.shortLabel}
                                </span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-slate-100" />

                        {/* Today detail */}
                        <div className="flex items-center gap-3 p-4">
                          <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                            style={{ background: todayPlan.color + '15' }}
                          >
                            {todayPlan.emoji}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: todayPlan.color }}>Hoje</span>
                              <span className="text-[9px] text-slate-300 font-bold">·</span>
                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">{todayPlan.cycle}</span>
                            </div>
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight leading-none mb-1">{todayPlan.label}</h3>
                            <p className="text-[10px] text-slate-500 font-medium leading-snug">{todayPlan.tip}</p>
                          </div>
                          <button
                            onClick={() => {
                              setSelectedCycle(todayPlan.cycle);
                              setSelectedSubject(todayPlan.subject);
                              setSelectedSubSubject(null);
                              startQuiz(false, todayPlan.subject, null);
                            }}
                            className="shrink-0 px-4 py-2.5 rounded-xl text-white font-black text-xs shadow-lg hover:scale-105 active:scale-95 transition-all uppercase tracking-widest"
                            style={{ background: todayPlan.color, boxShadow: `0 4px 16px ${todayPlan.color}44` }}
                          >
                            Iniciar
                          </button>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Cycle Toggle */}
                  <div className="flex bg-slate-100 p-1 rounded-2xl w-fit mx-auto shadow-inner">
                    {(['Ciclo Básico', 'Ciclo Clínico', 'Internato'] as Cycle[]).map((cycle) => (
                      <button
                        key={cycle}
                        onClick={() => {
                          setSelectedCycle(cycle);
                          const firstSubj = Object.keys(HIERARCHY[cycle])[0] as Subject;
                          setSelectedSubject(firstSubj);
                          setSelectedSubSubject(null);
                        }}
                        className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
                          selectedCycle === cycle ? 'bg-white text-brand-primary shadow-md' : 'text-slate-400 hover:text-slate-600'
                        }`}
                      >
                        {cycle}
                      </button>
                    ))}
                  </div>

                  {/* Subject Grid */}
                  <div className="py-6 px-5 flex flex-col items-center bg-white rounded-[2.5rem] border border-slate-200/80 shadow-xl overflow-visible">
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-4">
                      {(Object.keys(HIERARCHY[selectedCycle]) as Subject[]).map((subj, idx) => {
                        const trackPool = selectedTrack === 'estudante' ? QUESTIONS_ESTUDANTE : QUESTIONS;
                        const allQs = trackPool.filter(q => q.subject === subj);
                        const pool = allQs;
                        return (
                          <GamePathNode
                            key={`path-${subj}-${idx}`}
                            subject={subj}
                            progress={Number(user.mastery[subj] || 0)}
                            index={idx}
                            isSelected={selectedSubject === subj}
                            questionCount={pool.length}
                            onClick={() => {
                              if (pool.length > 0) {
                                setSelectedSubject(subj);
                                setSelectedSubSubject(null);
                                startQuizWithPool(pool);
                              }
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* Sub-subjects */}
                  {HIERARCHY[selectedCycle][selectedSubject] && HIERARCHY[selectedCycle][selectedSubject]!.length > 0 && (
                    <div className="space-y-8 bg-white p-8 rounded-[3rem] border border-slate-200/80 shadow-xl">
                      <div className="flex items-center gap-3 px-4">
                        <div className="h-px flex-1 bg-slate-200" />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] whitespace-nowrap">Selecione o Sub-foco</span>
                        <div className="h-px flex-1 bg-slate-200" />
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-4 w-full">
                        {HIERARCHY[selectedCycle][selectedSubject]!.map((sub, idx) => (
                          <GamePathNode
                            key={`sub-${sub}-${idx}`}
                            subject={sub}
                            progress={0}
                            index={idx}
                            isSelected={selectedSubSubject === sub}
                            onClick={() => { setSelectedSubSubject(sub); startQuiz(false, selectedSubject, sub); }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Daily Missions */}
                  {(() => {
                    const missions = [
                      { id: 'q10',    icon: '🎯', label: 'Acerte 10 questões hoje',         done: user.dailyGoalDone, total: 10,  xp: 50,  color: '#00658a', bg: '#EFF6FF' },
                      { id: 'streak', icon: '🔥', label: 'Mantenha seu streak ativo',        done: user.streak > 0 ? 1 : 0, total: 1, xp: 30, color: '#EA580C', bg: '#FFF7ED' },
                      { id: 'rev',    icon: '🧠', label: 'Revise 1 tópico com o Dr. Quest',   done: 0, total: 1,  xp: 40,  color: '#7C3AED', bg: '#F5F3FF' },
                    ];
                    const allDone = missions.every(m => m.done >= m.total);
                    return (
                      <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-xl">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-amber-50 rounded-xl flex items-center justify-center">
                              <Target size={16} className="text-amber-500" />
                            </div>
                            <span className="text-sm font-black text-slate-900 uppercase tracking-tight">Missões de Hoje</span>
                          </div>
                          {allDone ? (
                            <span className="text-[10px] font-black text-green-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-200 uppercase tracking-widest">Completas!</span>
                          ) : (
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{missions.filter(m => m.done >= m.total).length}/{missions.length} feitas</span>
                          )}
                        </div>
                        <div className="flex flex-col gap-3">
                          {missions.map((m, i) => {
                            const pct = Math.min(1, m.done / m.total);
                            const completed = pct >= 1;
                            return (
                              <motion.div
                                key={m.id}
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="flex items-center gap-3"
                              >
                                <div
                                  className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg shrink-0 transition-transform"
                                  style={{ background: m.bg, opacity: completed ? 1 : 0.8 }}
                                >
                                  {completed ? '✅' : m.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className={`text-xs font-bold leading-tight ${completed ? 'text-slate-400 line-through' : 'text-slate-700'}`}>{m.label}</span>
                                    <span className="text-[9px] font-black ml-2 shrink-0" style={{ color: m.color }}>+{m.xp} XP</span>
                                  </div>
                                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={{ width: `${pct * 100}%` }}
                                      transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
                                      className="h-full rounded-full"
                                      style={{ background: completed ? '#22C55E' : m.color }}
                                    />
                                  </div>
                                  {m.total > 1 && (
                                    <span className="text-[9px] text-slate-400 font-bold mt-0.5 block">{m.done}/{m.total}</span>
                                  )}
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Quick links: Liga + Amigos */}
                  <div className="grid grid-cols-2 gap-4">
                    {(() => {
                      const userLeague = getUserLeague(user.xp);
                      const cfg = LEAGUE_CONFIG[userLeague];
                      const players = leaguePlayersFor(userLeague);
                      const rank   = players.findIndex(p => p.currentUser) + 1;
                      const rankLabel = user.xp === 0 ? 'Começando' : `${rank}º lugar`;
                      return (
                        <button
                          onClick={() => { setActiveLeague(userLeague); setView('ranking'); }}
                          className={`bg-gradient-to-br ${cfg.gradFrom} ${cfg.gradVia} ${cfg.gradTo} p-5 rounded-[2rem] flex flex-col gap-3 text-white shadow-lg hover:scale-[1.02] active:scale-95 transition-all text-left`}
                        >
                          <Trophy size={22} fill="currentColor" style={{ color: cfg.trophyColor }} />
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/60 leading-none mb-1">{cfg.label}</p>
                            <p className="text-base font-black leading-none">{rankLabel}</p>
                          </div>
                        </button>
                      );
                    })()}
                    <button
                      onClick={() => setView('amigos')}
                      className="bg-white border border-slate-200 p-5 rounded-[2rem] flex flex-col gap-3 shadow-lg hover:bg-slate-50 hover:scale-[1.02] active:scale-95 transition-all text-left"
                    >
                      <Swords size={22} className="text-brand-primary" />
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Social</p>
                        <p className="text-base font-black text-slate-900 leading-none">Batalhas</p>
                      </div>
                    </button>
                  </div>
                </div>
              ) : (() => {
                const banca     = BANCAS.find(b => b.id === selectedBanca);
                const bancaShort = banca?.short ?? 'Residência';
                const bancaName  = banca?.name  ?? 'Prova de Residência Médica';
                const bancaUF    = banca?.uf ?? '';
                const attemptsVals   = Object.values(user.subjectAttempts) as number[];
                const masteryVals    = Object.values(user.mastery) as number[];
                const totalAttempts  = attemptsVals.reduce((a, b) => a + b, 0);
                const avgMastery     = masteryVals.length > 0
                  ? Math.round(masteryVals.reduce((a, b) => a + b, 0) / masteryVals.length)
                  : 0;
                return (
                  <div className="flex flex-col gap-4 pb-6">

                    {/* Banca Header — dark premium */}
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl" style={{ background: '#0D1628' }}>
                      {/* blue radial glow top-right */}
                      <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,101,138,0.18) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
                      {/* faint bottom-left accent */}
                      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

                      <div className="relative z-10 p-6">
                        {/* Top row */}
                        <div className="flex items-start justify-between mb-5">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border border-cyan-500/30"
                              style={{ background: 'linear-gradient(135deg, #00658a 0%, #00384e 100%)', boxShadow: '0 4px 20px rgba(0,101,138,0.45)' }}
                            >
                              <span className="text-white font-black text-[11px] tracking-tight leading-none select-none">
                                {bancaShort.slice(0, 3).toUpperCase()}
                              </span>
                            </div>
                            <div>
                              <p className="text-[9px] font-black uppercase tracking-[0.25em] leading-none mb-1" style={{ color: '#7cd0ff' }}>Banca-alvo</p>
                              <h3 className="text-xl font-black text-white tracking-tight leading-none">
                                {bancaShort}{bancaUF ? <span className="font-bold text-base" style={{ color: 'rgba(255,255,255,0.35)' }}> · {bancaUF}</span> : ''}
                              </h3>
                            </div>
                          </div>
                          <button
                            onClick={() => setView('residencia-onboarding')}
                            className="flex items-center gap-1.5 transition-colors text-[10px] font-black uppercase tracking-widest pt-1"
                            style={{ color: 'rgba(255,255,255,0.35)' }}
                          >
                            <RefreshCcw size={11} />
                            Trocar
                          </button>
                        </div>

                        <p className="text-xs font-medium mb-5 leading-snug" style={{ color: 'rgba(255,255,255,0.35)' }}>{bancaName}</p>

                        {/* Stats strip */}
                        <div className="grid grid-cols-3 gap-2 mb-5">
                          {[
                            { label: 'Simulados', value: '0',                      icon: BookOpen,   color: '#7cd0ff' },
                            { label: 'Aproveit.',  value: `${avgMastery}%`,         icon: Target,     color: '#34D399' },
                            { label: 'Questões',   value: String(totalAttempts),    icon: CheckCircle2, color: '#A78BFA' },
                          ].map(s => (
                            <div key={s.label} className="rounded-2xl px-3 py-3 text-center border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.07)' }}>
                              <s.icon size={14} className="mx-auto mb-1.5" style={{ color: s.color }} />
                              <p className="text-base font-black text-white leading-none">{s.value}</p>
                              <p className="text-[9px] font-bold uppercase tracking-widest mt-0.5" style={{ color: 'rgba(255,255,255,0.28)' }}>{s.label}</p>
                            </div>
                          ))}
                        </div>

                        {/* Main CTA */}
                        <motion.button
                          whileTap={{ scale: 0.97 }}
                          onClick={() => { const sb = BANCAS.find(b => b.id === selectedBanca)?.short; setQuizBancaFilter(sb && QUESTIONS.some(q => q.banca === sb) ? sb : null); startQuiz(false, selectedSubject, null); }}
                          className="group w-full relative overflow-hidden rounded-2xl py-4 flex items-center justify-between px-5"
                          style={{ background: 'linear-gradient(135deg, #00658a 0%, #004c69 100%)', boxShadow: '0 8px 32px rgba(0,101,138,0.40)' }}
                        >
                          <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: '200%' }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12"
                          />
                          <div className="flex items-center gap-3 relative z-10">
                            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
                              <Zap size={18} fill="currentColor" className="text-white" />
                            </div>
                            <div className="text-left">
                              <p className="text-[9px] font-black uppercase tracking-[0.2em] leading-none mb-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>Simulado Oficial</p>
                              <p className="text-sm font-black text-white leading-none">{bancaShort} — 10 Questões</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 rounded-xl px-3 py-1.5 relative z-10" style={{ background: 'rgba(255,255,255,0.15)' }}>
                            <span className="text-[11px] font-black text-white uppercase tracking-widest">Iniciar</span>
                            <ChevronRight size={14} className="text-white" />
                          </div>
                        </motion.button>
                      </div>
                    </div>

                    {/* ── ESCOLHA DE MATÉRIA ── */}
                    <div className="flex flex-col gap-3">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-1">Estudar por Matéria</p>

                      {/* Cycle Toggle */}
                      <div className="flex bg-slate-100 p-1 rounded-2xl w-fit mx-auto shadow-inner overflow-x-auto">
                        {(['Ciclo Clínico', 'Internato'] as Cycle[]).map((cycle) => (
                          <button
                            key={cycle}
                            onClick={() => {
                              setSelectedCycle(cycle);
                              const firstSubj = Object.keys(HIERARCHY[cycle])[0] as Subject;
                              setSelectedSubject(firstSubj);
                              setSelectedSubSubject(null);
                            }}
                            className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
                              selectedCycle === cycle ? 'bg-white text-brand-primary shadow-md' : 'text-slate-400 hover:text-slate-600'
                            }`}
                          >
                            {cycle}
                          </button>
                        ))}
                      </div>

                      {/* Subject Grid */}
                      <div className="py-6 px-5 flex flex-col items-center bg-white rounded-[2.5rem] border border-slate-200/80 shadow-xl overflow-visible">
                        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-4">
                          {(Object.keys(HIERARCHY[selectedCycle as Cycle]) as Subject[]).map((subj, idx) => {
                            const pool2 = QUESTIONS.filter(q => q.subject === subj);
                            return (
                              <GamePathNode
                                key={`res-path-${subj}-${idx}`}
                                subject={subj}
                                progress={Number(user.mastery[subj] || 0)}
                                index={idx}
                                isSelected={selectedSubject === subj}
                                questionCount={pool2.length}
                                onClick={() => { if (pool2.length > 0) { setSelectedSubject(subj); setSelectedSubSubject(null); startQuizWithPool(pool2); } }}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Modos de estudo */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2 px-1">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: '#00658a18' }}>
                          <Zap size={13} style={{ color: '#00658a' }} />
                        </div>
                        <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Modos de Estudo</span>
                      </div>

                      <div className="bg-white rounded-[2rem] border border-slate-200/80 shadow-xl p-4 flex flex-col gap-3">
                        {/* Simulado — modo em destaque (prova completa de 100 questões) */}
                        <motion.button
                          whileTap={{ scale: 0.97 }}
                          onClick={() => { setSimuladoBanca(BANCAS.find(b => b.id === selectedBanca)?.short ?? null); setView('simulado'); }}
                          className="group relative w-full overflow-hidden rounded-2xl py-4 px-4 flex items-center justify-between gap-3"
                          style={{ background: 'linear-gradient(135deg,#00a7e1 0%,#00658a 100%)', boxShadow: '0 8px 24px rgba(0,101,138,0.35)' }}
                        >
                          <motion.div
                            initial={{ x: '-120%' }}
                            animate={{ x: '220%' }}
                            transition={{ duration: 2.6, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                          />
                          <div className="flex items-center gap-3 relative z-10 min-w-0">
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.18)' }}>
                              <Award size={22} className="text-white" />
                            </div>
                            <div className="text-left min-w-0">
                              <p className="text-sm font-black text-white uppercase tracking-tight leading-none mb-1">Simulado</p>
                              <p className="text-[11px] font-medium truncate" style={{ color: 'rgba(255,255,255,0.7)' }}>Prova de {SIMULADO_SIZE} questões da banca</p>
                            </div>
                          </div>
                          <ChevronRight size={18} className="text-white/80 shrink-0 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { icon: BookOpen, label: 'Questões Avulsas', desc: 'Pratique no seu ritmo', color: '#00658a', action: startQuiz },
                            { icon: Layers, label: 'Flashcards', desc: 'Memorize com cartas', color: '#00a7e1', action: () => { setFlashStage('pick'); setView('flashcards'); } },
                            { icon: RotateCcw, label: 'Revisão de Erros', desc: `${user.missedQuestionIds.length} questões pendentes`, color: '#DC2626', action: () => startQuiz(true) },
                            { icon: TrendingUp, label: 'Pontos Fracos', desc: 'Análise Dr. Quest IA', color: '#7C3AED', action: () => setView('revision') },
                            { icon: BarChart2, label: 'Meu Desempenho', desc: 'Veja sua evolução', color: '#0e9f43', action: () => setView('progress') },
                          ].map(mode => (
                            <motion.button
                              key={mode.label}
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.96 }}
                              onClick={mode.action}
                              className="bg-white rounded-2xl p-4 text-left border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
                            >
                              <div
                                className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                                style={{ background: mode.color, boxShadow: `0 6px 14px ${mode.color}40` }}
                              >
                                <mode.icon size={19} className="text-white" />
                              </div>
                              <p className="text-xs font-black text-slate-900 uppercase tracking-tight leading-tight mb-0.5">{mode.label}</p>
                              <p className="text-[10px] text-slate-400 font-medium leading-tight">{mode.desc}</p>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* ── ROTEIRO SEMANAL ── */}
                    {(() => {
                      // Mesma lógica da trilha estudante: monta os 7 dias a partir do banco cheio
                      // de questões (aqui não filtra por banca), misturando as matérias do Ciclo
                      // Clínico com mais volume de questões em vez de uma lista fixa.
                      const RES_PLAN = buildWeekPlan('Ciclo Clínico', QUESTIONS);

                      if (RES_PLAN.length === 0) {
                        return (
                          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-lg p-6 text-center">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Roteiro da Semana</span>
                            <p className="text-xs font-bold text-slate-400 mt-2">Ainda não temos questões suficientes pra montar um roteiro.</p>
                          </div>
                        );
                      }

                      // O roteiro reinicia a cada 7 dias (% 7) e a fita é ancorada na
                      // semana corrente — antes travava no dia 7 da primeira semana.
                      const startDate      = new Date(user.planStartDate + 'T00:00:00');
                      const nowDate        = new Date(dateKey() + 'T00:00:00');
                      const daysSinceStart = Math.max(0, Math.round((nowDate.getTime() - startDate.getTime()) / 86400000));
                      const planDayIndex   = daysSinceStart % 7;
                      const todayPlan      = RES_PLAN[planDayIndex];
                      const weekStart      = new Date(startDate);
                      weekStart.setDate(weekStart.getDate() + Math.floor(daysSinceStart / 7) * 7);
                      const stripDays      = Array.from({ length: 7 }, (_, i) => { const d = new Date(weekStart); d.setDate(d.getDate() + i); return d; });
                      return (
                        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-lg overflow-hidden">
                          <div className="flex items-center justify-between px-5 pt-4 pb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: todayPlan.color + '18' }}>
                                <CalendarDays size={13} style={{ color: todayPlan.color }} />
                              </div>
                              <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Roteiro da Semana</span>
                            </div>
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Dia {planDayIndex + 1} de 7</span>
                          </div>
                          <div className="flex px-4 pb-4 gap-1.5">
                            {RES_PLAN.map((p, i) => {
                              const isPastDay = i < planDayIndex;
                              const isToday   = i === planDayIndex;
                              const date      = stripDays[i];
                              // Cumprido de verdade = respondeu ao menos 1 questão dessa matéria naquele dia
                              // (activitySubjects), não "qualquer dia que já passou".
                              const done = (user.activitySubjects?.[dateKey(date)]?.[p.subject] || 0) > 0;
                              const missed = isPastDay && !done;
                              return (
                                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                  <span className="text-[7px] font-black text-slate-400">{date.getDate()}/{date.getMonth()+1}</span>
                                  <motion.div
                                    animate={isToday && !done ? { scale: [1, 1.09, 1] } : {}}
                                    transition={{ repeat: Infinity, duration: 2.5 }}
                                    className="w-7 h-7 rounded-full flex items-center justify-center text-[12px]"
                                    style={
                                      done ? { background: '#DCFCE7' }
                                      : missed ? { background: '#FEE2E2' }
                                      : isToday ? { background: p.color, boxShadow: `0 4px 12px ${p.color}55` }
                                      : { background: '#F1F5F9' }
                                    }
                                  >
                                    {done
                                      ? <span className="text-green-600 font-black text-[10px]">✓</span>
                                      : missed
                                        ? <span className="text-red-500 font-black text-[10px]">✕</span>
                                        : <span>{p.emoji}</span>}
                                  </motion.div>
                                  <span className="text-[7px] font-bold truncate w-full text-center leading-tight" style={{ color: done ? '#16A34A' : missed ? '#DC2626' : isToday ? p.color : '#94A3B8' }}>
                                    {p.shortLabel}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                          <div className="h-px bg-slate-100" />
                          <div className="flex items-center gap-3 p-4">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0" style={{ background: todayPlan.color + '15' }}>
                              {todayPlan.emoji}
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: todayPlan.color }}>Hoje · Ciclo Clínico</span>
                              <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight leading-none mb-1 mt-0.5">{todayPlan.label}</h3>
                              <p className="text-[10px] text-slate-500 font-medium leading-snug">{todayPlan.tip}</p>
                            </div>
                            <button
                              onClick={() => { setSelectedCycle('Ciclo Clínico'); setSelectedSubject(todayPlan.subject); startQuiz(false, todayPlan.subject, null); }}
                              className="shrink-0 px-4 py-2.5 rounded-xl text-white font-black text-xs shadow-lg hover:scale-105 active:scale-95 transition-all uppercase tracking-widest"
                              style={{ background: todayPlan.color, boxShadow: `0 4px 16px ${todayPlan.color}44` }}
                            >
                              Iniciar
                            </button>
                          </div>
                        </div>
                      );
                    })()}

                    {/* ── MAPA DE DOMÍNIO ── */}
                    {(() => {
                      const ALL_SPECIALTIES: { subj: Subject; emoji: string; short: string }[] = [
                        { subj: 'Clínica Médica',            emoji: '🏥', short: 'Clínica Médica' },
                        { subj: 'Clínica Cirúrgica',         emoji: '✂️', short: 'Clínica Cirúrg.' },
                        { subj: 'Cardiologia',               emoji: '❤️', short: 'Cardiologia' },
                        { subj: 'Neurologia',                emoji: '🧠', short: 'Neurologia' },
                        { subj: 'Pediatria',                 emoji: '👶', short: 'Pediatria' },
                        { subj: 'Ginecologia & Obstetrícia', emoji: '🤰', short: 'Gineco & Obste.' },
                        { subj: 'Medicina de Família/SUS',   emoji: '🩺', short: 'Família / SUS' },
                        { subj: 'Pneumologia',               emoji: '💨', short: 'Pneumologia' },
                        { subj: 'Gastroenterologia',         emoji: '🫁', short: 'Gastroentero.' },
                        { subj: 'Endocrinologia',            emoji: '💊', short: 'Endocrinologia' },
                        { subj: 'Infectologia',              emoji: '🦠', short: 'Infectologia' },
                        { subj: 'Psiquiatria',               emoji: '💬', short: 'Psiquiatria' },
                        { subj: 'Nefrologia',                emoji: '🫘', short: 'Nefrologia' },
                        { subj: 'Reumatologia',              emoji: '🦴', short: 'Reumatologia' },
                        { subj: 'Hematologia',               emoji: '🩸', short: 'Hematologia' },
                        { subj: 'Dermatologia',              emoji: '🧴', short: 'Dermatologia' },
                        { subj: 'Oftalmologia',              emoji: '👁️', short: 'Oftalmologia' },
                        { subj: 'Otorrinolaringologia',      emoji: '👂', short: 'Otorrino' },
                        { subj: 'Cirurgia Geral',            emoji: '🏨', short: 'Cirurgia Geral' },
                        { subj: 'Urgência e Emergência',     emoji: '🚨', short: 'Urgência' },
                        { subj: 'Medicina Intensiva',        emoji: '🫀', short: 'UTI' },
                        { subj: 'Ortopedia',                 emoji: '🦴', short: 'Ortopedia' },
                        { subj: 'Neonatologia',              emoji: '👼', short: 'Neonatologia' },
                        { subj: 'Anestesiologia',            emoji: '💉', short: 'Anestesiologia' },
                        { subj: 'Traumatologia-Ortopedia',   emoji: '🩹', short: 'Traumato-Orto' },
                        { subj: 'Patologia',                 emoji: '🔬', short: 'Patologia' },
                        { subj: 'Parasitologia',             emoji: '🦠', short: 'Parasitologia' },
                        { subj: 'Semiologia',                emoji: '🩺', short: 'Semiologia' },
                        { subj: 'Epidemiologia',             emoji: '📊', short: 'Epidemiologia' },
                        { subj: 'Urologia',                  emoji: '💧', short: 'Urologia' },
                        { subj: 'Geriatria',                 emoji: '👴', short: 'Geriatria' },
                        { subj: 'Radiologia',                emoji: '🩻', short: 'Radiologia' },
                        { subj: 'Cirurgia Vascular',         emoji: '🫀', short: 'Cir. Vascular' },
                        { subj: 'Neurocirurgia',             emoji: '🧠', short: 'Neurocirurgia' },
                      ];
                      const VISIBLE_COUNT = 8;
                      const displayed = showAllSpecialties ? ALL_SPECIALTIES : ALL_SPECIALTIES.slice(0, VISIBLE_COUNT);
                      const hidden = ALL_SPECIALTIES.length - VISIBLE_COUNT;
                      return (
                        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-lg p-5">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 bg-cyan-50 rounded-xl flex items-center justify-center">
                                <BarChart3 size={14} className="text-brand-primary" />
                              </div>
                              <div>
                                <p className="text-[11px] font-black text-slate-800 uppercase tracking-widest leading-none">Mapa de Domínio</p>
                                <p className="text-[9px] text-slate-400 font-medium mt-0.5">Domínio por especialidade</p>
                              </div>
                            </div>
                            <span className="text-[9px] font-black text-brand-primary bg-cyan-50 px-2.5 py-1 rounded-full uppercase tracking-widest border border-cyan-100">{bancaShort}</span>
                          </div>

                          <div className="flex flex-col gap-3">
                            {displayed.map(({ subj, emoji, short }) => {
                              const mastery  = user.mastery[subj] || 0;
                              const attempts = user.subjectAttempts[subj] || 0;
                              const barColor =
                                attempts === 0 ? '#CBD5E1'
                                : mastery >= 70 ? '#22C55E'
                                : mastery >= 40 ? '#f1c100'
                                : '#ba1a1a';
                              const statusLabel =
                                attempts === 0 ? 'Não iniciado'
                                : mastery >= 70 ? 'Dominado ✓'
                                : mastery >= 40 ? 'Em progresso'
                                : 'Atenção';
                              const statusColor =
                                attempts === 0 ? '#94A3B8'
                                : mastery >= 70 ? '#16A34A'
                                : mastery >= 40 ? '#D97706'
                                : '#DC2626';
                              return (
                                <div key={subj} className="flex items-center gap-3">
                                  <span className="text-base w-5 text-center shrink-0 leading-none">{emoji}</span>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="text-[10px] font-black text-slate-700 truncate">{short}</span>
                                      <span className="text-[8px] font-black ml-2 shrink-0 uppercase tracking-wide" style={{ color: statusColor }}>{statusLabel}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                      <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${mastery}%` }}
                                        transition={{ duration: 0.7, delay: 0.05 }}
                                        className="h-full rounded-full"
                                        style={{ background: barColor }}
                                      />
                                    </div>
                                  </div>
                                  <span className="text-[9px] font-black text-slate-400 w-7 text-right shrink-0">{mastery}%</span>
                                </div>
                              );
                            })}
                          </div>

                          {/* Expand / Collapse */}
                          <motion.button
                            onClick={() => setShowAllSpecialties((v: boolean) => !v)}
                            whileTap={{ scale: 0.97 }}
                            className="w-full mt-4 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors"
                          >
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                              {showAllSpecialties ? 'Ver menos' : `Ver mais ${hidden} matérias`}
                            </span>
                            <motion.div animate={{ rotate: showAllSpecialties ? 180 : 0 }} transition={{ duration: 0.25 }}>
                              <ChevronDown size={14} className="text-slate-400" />
                            </motion.div>
                          </motion.button>

                          <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-slate-100">
                            {[
                              { color: '#22C55E', label: 'Dominado (70%+)' },
                              { color: '#f1c100', label: 'Em progresso' },
                              { color: '#ba1a1a', label: 'Atenção' },
                              { color: '#CBD5E1', label: 'Não iniciado' },
                            ].map(leg => (
                              <div key={leg.label} className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: leg.color }} />
                                <span className="text-[8px] font-bold text-slate-400 leading-tight">{leg.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })()}

                    {/* ── CONQUISTAS PREMIUM ── */}
                    {(() => {
                      const achievements = [
                        { id: 'first',   emoji: '🎯', title: 'Primeiro Passo',  desc: 'Responda sua 1ª questão',     done: totalAttempts >= 1 },
                        { id: 'streak5', emoji: '🔥', title: 'Em Chamas',        desc: '5 dias seguidos de estudo',   done: user.streak >= 5 },
                        { id: 'q50',     emoji: '⚡', title: '50 Questões',       desc: 'Responda 50 questões',        done: totalAttempts >= 50 },
                        { id: 'cardio',  emoji: '❤️', title: 'Mestre Cardio',     desc: '70%+ em Cardiologia',         done: (user.mastery['Cardiologia'] || 0) >= 70 },
                        { id: 'q100',    emoji: '💎', title: '100 Questões',      desc: 'Responda 100 questões',       done: totalAttempts >= 100 },
                        { id: 'zeroed',  emoji: '🏆', title: 'Sem Pendências',    desc: 'Zere a fila de revisão',      done: user.missedQuestionIds.length === 0 && totalAttempts > 0 },
                      ];
                      const unlocked = achievements.filter(a => a.done).length;
                      return (
                        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-lg p-5">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 bg-amber-50 rounded-xl flex items-center justify-center">
                                <Award size={14} className="text-amber-500" />
                              </div>
                              <div>
                                <p className="text-[11px] font-black text-slate-800 uppercase tracking-widest leading-none">Conquistas Premium</p>
                                <p className="text-[9px] text-slate-400 font-medium mt-0.5">Exclusivo para assinantes</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-base font-black text-slate-900 leading-none">{unlocked}/{achievements.length}</p>
                              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">desbloqueadas</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-2.5">
                            {achievements.map(a => (
                              <div
                                key={a.id}
                                className="flex flex-col items-center gap-1.5 p-3 rounded-2xl border transition-all"
                                style={{ background: a.done ? '#F0FDF4' : '#F8FAFC', borderColor: a.done ? '#86EFAC' : '#E2E8F0' }}
                              >
                                <span className="text-2xl leading-none" style={{ filter: a.done ? 'none' : 'grayscale(1) opacity(0.35)' }}>{a.emoji}</span>
                                <p className="text-[9px] font-black text-slate-700 text-center leading-tight uppercase tracking-tight">{a.title}</p>
                                <p className="text-[8px] text-slate-400 font-medium text-center leading-tight">{a.desc}</p>
                                {a.done
                                  ? <span className="text-[8px] font-black text-green-600 uppercase tracking-widest bg-green-50 px-1.5 py-0.5 rounded-full">Desbloqueada</span>
                                  : <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Bloqueada</span>
                                }
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })()}

                    {/* ── RELATÓRIO DA SEMANA ── */}
                    <div className="relative rounded-[2rem] overflow-hidden" style={{ background: '#0D1628' }}>
                      <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,101,138,0.16) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
                      <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />
                      <div className="relative z-10 p-5">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,101,138,0.25)' }}>
                              <TrendingUp size={14} style={{ color: '#7cd0ff' }} />
                            </div>
                            <div>
                              <p className="text-[11px] font-black uppercase tracking-widest leading-none" style={{ color: '#93C5FD' }}>Relatório da Semana</p>
                              <p className="text-[9px] font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.28)' }}>Seu resumo de evolução</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full" style={{ background: 'rgba(0,101,138,0.2)', border: '1px solid rgba(0,101,138,0.3)' }}>
                            <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: '#7cd0ff' }}>Premium</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2.5">
                          {[
                            { label: 'Questões respondidas', value: String(totalAttempts), icon: '📝', color: '#7cd0ff' },
                            { label: 'Aproveitamento geral', value: `${avgMastery}%`,      icon: '🎯', color: '#34D399' },
                            { label: 'XP conquistado',       value: user.xp.toLocaleString(), icon: '⚡', color: '#FBBF24' },
                            { label: 'Sequência atual',      value: `${user.streak} dias`, icon: '🔥', color: '#F87171' },
                          ].map(item => (
                            <div key={item.label} className="rounded-2xl p-3.5 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.07)' }}>
                              <span className="text-xl leading-none">{item.icon}</span>
                              <p className="text-lg font-black leading-none mt-2" style={{ color: item.color }}>{item.value}</p>
                              <p className="text-[9px] font-bold uppercase tracking-wide mt-0.5" style={{ color: 'rgba(255,255,255,0.28)' }}>{item.label}</p>
                            </div>
                          ))}
                        </div>
                        {totalAttempts === 0 && (
                          <div className="mt-4 rounded-2xl p-3 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px dashed rgba(255,255,255,0.1)' }}>
                            <p className="text-[10px] font-bold" style={{ color: 'rgba(255,255,255,0.35)' }}>Comece a estudar para ver sua evolução aqui</p>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                );
              })()}
            </motion.div>
          )}

          {/* QUIZ VIEW */}
          {view === 'quiz' && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="flex flex-col gap-8 pb-32"
            >
              {/* Progress Bar + Timer + Combo */}
              <div className="flex flex-col gap-2 py-4 px-2">
                <div className="w-full flex items-center gap-3">
                  <button
                    onClick={() => setView('home')}
                    className="text-slate-400 hover:text-slate-600 transition-colors bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm shrink-0"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200 p-0.5">
                    <motion.div
                      className="h-full bg-brand-primary rounded-full shadow-[0_0_15px_rgba(0,101,138,0.2)]"
                      animate={{ width: `${(currentQuestionIndex / activeQuestions.length) * 100}%` }}
                    />
                  </div>
                  {/* Cronômetro: por questão (modo foco) ou da sessão (modo zen) */}
                  {isFoco ? (
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-black text-xs border shadow-sm shrink-0 transition-colors ${
                      questionTimeLeft <= 6 ? 'bg-red-50 text-red-600 border-red-200 animate-pulse' :
                      questionTimeLeft <= 15 ? 'bg-amber-50 text-amber-600 border-amber-200' :
                      'bg-white text-slate-900 border-slate-200'
                    }`}>
                      <Timer size={12} />
                      {questionTimeLeft}s
                    </div>
                  ) : (
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-black text-xs border shadow-sm shrink-0 transition-colors ${
                      quizTimer > 480 ? 'bg-red-50 text-red-600 border-red-200' :
                      quizTimer > 300 ? 'bg-amber-50 text-amber-600 border-amber-200' :
                      'bg-white text-slate-900 border-slate-200'
                    }`}>
                      <Clock size={12} />
                      {formatTimer(quizTimer)}
                    </div>
                  )}
                  <div className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm shrink-0">
                    <span className="text-xs font-black text-slate-900">{currentQuestionIndex + 1}/{activeQuestions.length}</span>
                  </div>
                  {/* Alterna Foco ⇄ Zen no meio da sessão */}
                  <button
                    onClick={() => setQuizMode(m => (m === 'foco' ? 'zen' : 'foco'))}
                    title={isFoco
                      ? 'Modo Foco: 60s por questão, respostas rápidas valem mais XP. Toque para mudar para Zen.'
                      : 'Modo Zen: sem cronômetro, XP fixo por acerto. Toque para mudar para Foco.'}
                    className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl border shadow-sm shrink-0 transition-colors font-black text-[10px] uppercase tracking-widest ${
                      isFoco
                        ? 'bg-brand-primary text-white border-brand-primary'
                        : 'bg-brand-green/10 text-brand-green border-brand-green/30'
                    }`}
                  >
                    {isFoco ? <Timer size={14} /> : <Leaf size={14} />}
                    <span className="hidden sm:inline">{isFoco ? 'Foco' : 'Zen'}</span>
                  </button>
                  {/* Toggle som */}
                  <button
                    onClick={() => setSoundEnabled(v => !v)}
                    title={soundEnabled ? 'Som ligado' : 'Som desligado'}
                    className={`p-2 rounded-xl border shadow-sm shrink-0 transition-colors ${soundEnabled ? 'bg-white text-brand-primary border-slate-200' : 'bg-white text-slate-300 border-slate-200'}`}
                  >
                    {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                  </button>
                </div>
                {/* Banner de reforço (reapresentação dos erros) */}
                {isRetryPhase && (
                  <div className="flex items-center justify-center gap-2 mt-1 py-2 px-4 rounded-xl bg-brand-orange/10 border border-brand-orange/20">
                    <RefreshCcw size={13} className="text-brand-orange" />
                    <span className="text-[11px] font-black text-brand-orange uppercase tracking-widest">
                      Revisão dos erros · fixe o aprendizado
                    </span>
                  </div>
                )}
                {/* Banner de batalha */}
                {battleCtx && (
                  <div className="flex items-center justify-center gap-2 mt-1 py-2 px-4 rounded-xl bg-brand-primary/10 border border-brand-primary/20">
                    <Swords size={13} className="text-brand-primary" />
                    <span className="text-[11px] font-black text-brand-primary uppercase tracking-widest">
                      Batalha vs {battleCtx.opponentName} · {battleCorrect} acertos
                    </span>
                  </div>
                )}
                {/* Combo badge — só no modo foco, onde a sequência realmente vale XP extra */}
                <AnimatePresence>
                  {isFoco && combo >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.6, y: -8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -4 }}
                      className="flex justify-center"
                    >
                      <div className={`flex items-center gap-2 px-5 py-1.5 rounded-full font-black text-xs uppercase tracking-widest shadow-lg ${
                        combo >= 5
                          ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-orange-400/30'
                          : 'bg-orange-500/10 text-orange-600 border border-orange-400/25'
                      }`}>
                        <Flame size={13} fill="currentColor" />
                        Combo x{combo}{combo >= 5 ? ' 🔥' : '!'}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Question Card */}
              <div className="bg-white p-8 md:p-10 rounded-[3rem] border border-slate-200 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary/20" />
                <div className="flex items-center gap-2 mb-6 flex-wrap">
                  {(() => {
                    const iconData = SUBJECT_ICONS[activeQuestions[currentQuestionIndex].subject];
                    const Icon = iconData?.icon;
                    return (
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden shrink-0 ${iconData?.color || 'bg-slate-200'}`}>
                        {iconData?.image ? (
                          <img src={iconData.image} alt="" className="w-6 h-6 object-contain" referrerPolicy="no-referrer" />
                        ) : Icon ? (
                          <Icon size={18} className="text-white" />
                        ) : null}
                      </div>
                    );
                  })()}
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] border border-slate-200">
                    {activeQuestions[currentQuestionIndex].subject}
                  </span>
                  {/* Banca de origem — só existe nas questões da Trilha Residência */}
                  {activeQuestions[currentQuestionIndex].banca && (
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 rounded-lg text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] border border-brand-primary/20">
                      <Building2 size={11} strokeWidth={3} />
                      {activeQuestions[currentQuestionIndex].banca}
                    </span>
                  )}
                </div>
                <h3 className="reading text-xl md:text-2xl font-semibold text-slate-900">
                  {activeQuestions[currentQuestionIndex].text}
                </h3>

                <div className="mt-8 space-y-3">
                  {activeQuestions[currentQuestionIndex].options.map((option, idx) => {
                    let optionStyle = "border-slate-200 hover:border-brand-primary/50 hover:shadow-md hover:-translate-y-0.5 bg-white text-slate-600 shadow-sm";

                    if (isFeedbackVisible) {
                      if (idx === activeQuestions[currentQuestionIndex].correctIndex) {
                        optionStyle = "border-brand-green bg-brand-green/10 text-brand-green font-bold shadow-sm";
                      } else if (idx === selectedOption) {
                        optionStyle = "border-brand-red bg-brand-red/10 text-brand-red font-bold shadow-sm";
                      } else {
                        optionStyle = "border-slate-200/50 opacity-40";
                      }
                    } else if (selectedOption === idx) {
                      optionStyle = "border-brand-primary bg-cyan-50 text-brand-primary font-bold shadow-md";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleOptionSelect(idx)}
                        disabled={isFeedbackVisible}
                        className={`group w-full text-left p-4 md:p-5 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between gap-5 ${optionStyle}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0 transition-all border-2 ${
                            isFeedbackVisible ? (
                              idx === activeQuestions[currentQuestionIndex].correctIndex ? 'bg-brand-green border-transparent text-white' :
                              idx === selectedOption ? 'bg-brand-red border-transparent text-white' : 'bg-slate-100 border-slate-200 text-slate-500'
                            ) : (
                              selectedOption === idx ? 'bg-brand-primary border-transparent text-white scale-110' : 'bg-slate-50 border-slate-200 text-slate-500 group-hover:border-brand-primary/40 group-hover:text-brand-primary group-hover:bg-brand-primary/5'
                            )
                          }`}>
                            {String.fromCharCode(65 + idx)}
                          </div>
                          <span className="font-semibold text-[15px] md:text-lg leading-snug">{option}</span>
                        </div>
                        
                        {isFeedbackVisible && (
                          <div className="shrink-0">
                            {idx === activeQuestions[currentQuestionIndex].correctIndex ? (
                              <CheckCircle2 size={24} />
                            ) : idx === selectedOption ? (
                              <XCircle size={24} />
                            ) : null}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Bar — com a explicação embutida (sem precisar rolar) */}
              <div
                className={`fixed bottom-0 left-0 right-0 p-5 md:p-6 transition-all duration-500 transform translate-y-0 z-50 rounded-t-[2rem] ${
                isFeedbackVisible ?
                (selectedOption === activeQuestions[currentQuestionIndex].correctIndex
                  ? 'bg-brand-green shadow-[0_-12px_40px_rgba(14,159,67,0.35)]'
                  : 'bg-brand-red shadow-[0_-12px_40px_rgba(220,38,38,0.35)]') :
                'bg-white/85 backdrop-blur-xl border-t border-slate-100 shadow-[0_-8px_30px_rgba(15,23,42,0.06)]'
              }`}>
                {/* Dr. Quest reage à resposta, espiando por cima da barra (estilo Duolingo) */}
                <AnimatePresence>
                  {isFeedbackVisible && (() => {
                    const cq = activeQuestions[currentQuestionIndex];
                    if (!cq) return null;
                    const acertou = selectedOption === cq.correctIndex;
                    const timedOut = selectedOption === -1;
                    const emCombo = acertou && combo >= 3;
                    const falas = mascotPhrasesFor(user.mascotPersonality);
                    const phrase = timedOut
                      ? pickPhrase(falas.timeout, cq.id)
                      : acertou
                        ? (emCombo ? pickPhrase(falas.combo, cq.id) : pickPhrase(falas.correct, cq.id))
                        : pickPhrase(falas.wrong, cq.id);
                    return (
                      <motion.div
                        key={`mascot-${currentQuestionIndex}-${isRetryPhase ? 'r' : 'q'}`}
                        initial={{ y: 120, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 120, opacity: 0 }}
                        transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
                        className="absolute -top-[6.5rem] right-2 md:right-10 flex items-end gap-2 pointer-events-none select-none"
                      >
                        <div className={`relative mb-12 max-w-[12rem] px-4 py-2.5 rounded-2xl rounded-br-sm bg-white text-[11px] leading-snug font-black shadow-xl border-2 ${
                          timedOut ? 'border-amber-400 text-amber-600' :
                          acertou ? 'border-brand-green text-brand-green' : 'border-brand-red text-brand-red'
                        }`}>
                          {phrase}
                        </div>
                        <Mascot
                          expression={timedOut ? 'worried' : acertou ? (emCombo ? 'cheer' : 'happy') : 'sad'}
                          className="w-24 h-24 md:w-28 md:h-28 drop-shadow-2xl"
                        />
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {isFeedbackVisible ? (() => {
                    const cq = activeQuestions[currentQuestionIndex];
                    const acertou = selectedOption === cq.correctIndex;
                    return (
                    <>
                      <div className="flex items-start gap-3 text-white flex-1 min-w-0">
                        <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md shrink-0">
                          {acertou ? <CheckCircle2 size={26} className="text-white" /> : <XCircle size={26} className="text-white" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-black text-lg tracking-tight leading-none mb-1.5">
                            {selectedOption === -1 ? 'Tempo esgotado' : acertou ? 'Resposta Correta!' : 'Resposta Errada!'}
                          </h4>
                          {!acertou && (
                            <p className="text-white text-xs font-bold mb-1.5">
                              Correta: {String.fromCharCode(65 + cq.correctIndex)}) {cq.options[cq.correctIndex]}
                            </p>
                          )}
                          {/* Fade no fim em vez de corte seco — sinaliza que dá pra rolar */}
                          <div
                            className="max-h-36 overflow-y-auto pr-1 hide-scrollbar"
                            style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 78%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 78%, transparent 100%)' }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <p className="reading text-white/95 text-[15px] font-medium pb-5">
                              {cq.explanation || (
                                // Mensagem automática quando a questão não tem
                                // gabarito comentado: gabarito + tema pra revisar.
                                acertou
                                  ? `Você acertou! O gabarito é ${String.fromCharCode(65 + cq.correctIndex)}) ${cq.options[cq.correctIndex]}. Tema: ${cq.subSubject ? `${cq.subject} — ${cq.subSubject}` : cq.subject}. Esta questão ainda não tem comentário do gabarito.`
                                  : `Tema pra revisar: ${cq.subSubject ? `${cq.subject} — ${cq.subSubject}` : cq.subject}. Esta questão foi pro seu caderno — refaça depois em Revisão de Erros pra fixar.`
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextQuestion(); }}
                        className="w-full md:w-auto px-12 py-4 bg-white text-slate-900 font-black rounded-2xl shadow-lg transition-all hover:scale-105 active:scale-95 text-lg shrink-0"
                      >
                        PRÓXIMA
                      </button>
                    </>
                    );
                  })() : (
                    <div className="w-full flex items-center justify-center gap-2.5 p-2">
                       <Mascot expression="focus" crop="head" className="w-9 h-9 shrink-0" />
                       <p className="text-slate-400 font-bold animate-pulse">
                         Toque em uma resposta para verificar
                       </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* +XP Float */}
              <AnimatePresence>
                {showXpFloat && (
                  <motion.div
                    initial={{ opacity: 1, y: 0, scale: 0.8 }}
                    animate={{ opacity: 0, y: -90, scale: 1.2 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.85, ease: 'easeOut' }}
                    className="fixed bottom-52 left-1/2 -translate-x-1/2 z-[60] pointer-events-none"
                  >
                    <div className="flex items-center gap-2 bg-brand-green text-white px-6 py-3 rounded-2xl font-black text-lg shadow-2xl shadow-green-500/40 border border-white/20">
                      <Zap size={18} fill="currentColor" />
                      +50 XP
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Spacer for fixed bottom bar */}
              <div className="h-40" />
            </motion.div>
          )}

          {/* SUMMARY VIEW */}
          {view === 'summary' && (
            <motion.div
              key="summary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col gap-10 pb-24 px-4 min-h-screen"
            >
              {/* Fallback if data is missing */}
              {!sessionResults.total ? (
                <div className="w-full p-10 bg-white rounded-[3rem] border border-slate-200 shadow-xl text-center mt-10">
                  <h2 className="text-3xl font-black text-slate-900 mb-4">Sessão Concluída! 🎉</h2>
                  <p className="text-slate-500 mb-6">Carregando resultados...</p>
                  <button
                    onClick={() => setView('home')}
                    className="px-8 py-3 bg-cyan-600 text-white rounded-xl font-black"
                  >
                    Voltar para Home
                  </button>
                </div>
              ) : null}

              {/* Header Section */}
              <div className="bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-900 rounded-[3rem] p-10 text-white text-center relative overflow-hidden shadow-2xl shadow-cyan-500/30">
                {/* decorative blobs */}
                <div className="absolute top-0 right-0 w-56 h-56 bg-white/5 rounded-full -mr-28 -mt-28 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -ml-20 -mb-20 pointer-events-none" />

                {/* confetti particles (perfect score only) */}
                {sessionResults.correct === sessionResults.total && sessionResults.total > 0 &&
                  confettiData.current.map((p: typeof confettiData.current[0], i: number) => (
                    <motion.div
                      key={i}
                      initial={{ y: 120, opacity: 1 }}
                      animate={{ y: -120, opacity: 0, rotate: p.rotate }}
                      transition={{ duration: p.duration, delay: p.delay, ease: 'easeOut' }}
                      className={`absolute w-2.5 h-2.5 pointer-events-none ${p.isSquare ? 'rounded-sm' : 'rounded-full'}`}
                      style={{ backgroundColor: p.color, left: `${p.x}%`, bottom: 0 }}
                    />
                  ))
                }

                {/* Dr. Quest comemora o resultado */}
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', bounce: 0.55, delay: 0.1 }}
                  className="w-32 h-32 bg-white/15 backdrop-blur-sm rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl border border-white/20"
                >
                  <Mascot
                    expression={
                      sessionResults.correct === sessionResults.total && sessionResults.total > 0
                        ? 'cheer'
                        : sessionResults.correct >= sessionResults.total / 2
                          ? 'happy'
                          : 'confident'
                    }
                    className="w-28 h-28 drop-shadow-xl"
                  />
                </motion.div>

                {isSimulado && simuladoLabel && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-white text-[10px] font-black uppercase tracking-[0.2em]"
                  >
                    <Award size={12} /> Simulado · {simuladoLabel}
                  </motion.div>
                )}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl font-black text-white mb-2 uppercase tracking-tighter"
                >
                  {sessionResults.correct === sessionResults.total && sessionResults.total > 0
                    ? (isSimulado ? 'Prova Perfeita! 🎉' : 'Sessão Perfeita! 🎉')
                    : (isSimulado ? 'Simulado Concluído' : 'Sessão Concluída')}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-cyan-200/80 font-medium mb-8 leading-relaxed max-w-sm mx-auto"
                >
                  {sessionResults.correct === sessionResults.total && sessionResults.total > 0
                    ? `${sessionResults.correct} de ${sessionResults.total} acertos em ${selectedSubject}.`
                    : `Você acertou ${sessionResults.correct} de ${sessionResults.total} questões.`}
                  {' '}Continue assim — sua evolução é constante!
                </motion.p>

                {/* Animated XP counter */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', bounce: 0.45, delay: 0.4 }}
                  className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-black text-lg border border-white/20 shadow-xl"
                >
                  <Zap size={22} fill="currentColor" className="text-amber-300" />
                  +{summaryXP} XP{sessionResults.correct === sessionResults.total ? ' • bônus perfeição!' : ' ganhos'}
                </motion.div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: 'Acertos', val: sessionResults.correct, color: 'text-brand-green' },
                  { label: 'Erros', val: sessionResults.total - sessionResults.correct, color: 'text-brand-red' },
                  { label: 'Tempo', val: formatTimer(summaryTimer), color: 'text-slate-900' }
                ].map((stat, i) => (
                  <div key={stat.label} className="bg-white p-6 rounded-[2.5rem] border border-slate-200/80 text-center shadow-lg">
                    <div className={`text-3xl font-black mb-1 ${stat.color}`}>{stat.val}</div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Revisão completa da sessão (acertos e erros) */}
              {sessionHistory.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between px-4">
                    <h4 className="text-[12px] font-black text-slate-800 uppercase tracking-[0.2em]">Revisão da Sessão</h4>
                    <span className="text-[10px] font-black text-brand-green bg-brand-green/10 px-3 py-1 rounded-full uppercase tracking-widest">
                      {sessionResults.correct}/{sessionResults.total} acertos
                    </span>
                  </div>
                  <div className="space-y-4">
                    {sessionHistory.map((h, i) => {
                      const q = activeQuestions.find(qi => qi.id === h.questionId) || QUESTIONS.find(qi => qi.id === h.questionId);
                      if (!q) return null;
                      const isCorrect = q.correctIndex === h.selectedIndex;
                      return (
                        <div key={`${h.questionId}-${i}`} className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl relative overflow-hidden">
                          <div className={`absolute top-0 left-0 w-1.5 h-full ${isCorrect ? 'bg-brand-green' : 'bg-brand-red'}`} />
                          <div className="p-6 pl-8">
                            <div className="flex items-center gap-3 mb-4">
                              <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${isCorrect ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-red/10 text-brand-red'}`}>
                                {isCorrect ? `Acerto #${i + 1}` : `Erro #${i + 1}`}
                              </span>
                              <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{q.subject}</span>
                            </div>
                            <h5 className="reading text-slate-900 font-semibold text-lg mb-6">{q.text}</h5>
                            <div className="space-y-3">
                              <div className={`p-4 rounded-2xl flex items-center justify-between ${isCorrect ? 'bg-brand-green/5 border border-brand-green/10' : 'bg-brand-red/5 border border-brand-red/10'}`}>
                                <div className="flex items-center gap-3">
                                  <div className={`h-8 px-3 rounded-lg flex items-center justify-center text-white font-black text-[10px] uppercase tracking-wide shrink-0 whitespace-nowrap ${isCorrect ? 'bg-brand-green' : 'bg-brand-red'}`}>Sua</div>
                                  <span className={`text-sm font-bold ${isCorrect ? 'text-brand-green' : 'text-brand-red'}`}>{q.options[h.selectedIndex]}</span>
                                </div>
                                {isCorrect ? <CheckCircle2 size={18} className="text-brand-green shrink-0" /> : <XCircle size={18} className="text-brand-red shrink-0" />}
                              </div>
                              {!isCorrect && (
                                <div className="p-4 rounded-2xl bg-brand-green/5 border border-brand-green/10 flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="h-8 px-3 rounded-lg bg-brand-green flex items-center justify-center text-white font-black text-[10px] uppercase tracking-wide shrink-0 whitespace-nowrap">Correta</div>
                                    <span className="text-sm font-bold text-brand-green">{q.options[q.correctIndex]}</span>
                                  </div>
                                  <CheckCircle2 size={18} className="text-brand-green shrink-0" />
                                </div>
                              )}
                            </div>
                            {q.explanation && (
                              <div className="mt-6 pt-6 border-t border-slate-200">
                                <div className="flex items-start gap-4">
                                  <div className="bg-brand-primary/10 p-2 rounded-xl text-brand-primary shrink-0">
                                    <Zap size={20} fill="currentColor" />
                                  </div>
                                  <p className="reading text-slate-500 text-[15px] font-medium italic">{q.explanation}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Theme Performance */}
              {(() => {
                const themeColors = ['bg-brand-primary', 'bg-cyan-400', 'bg-brand-green', 'bg-amber-400', 'bg-purple-400', 'bg-rose-400'];
                const bySubject: Record<string, { correct: number; total: number }> = {};
                sessionHistory.forEach((h: { questionId: string; selectedIndex: number }) => {
                  const q = activeQuestions.find((q: Question) => q.id === h.questionId);
                  if (!q) return;
                  if (!bySubject[q.subject]) bySubject[q.subject] = { correct: 0, total: 0 };
                  bySubject[q.subject].total++;
                  if (h.selectedIndex === q.correctIndex) bySubject[q.subject].correct++;
                });
                const themes = Object.entries(bySubject).map(([name, s], i) => ({
                  name,
                  color: themeColors[i % themeColors.length],
                  progress: s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0,
                  label: `${s.correct}/${s.total}`,
                }));
                if (themes.length === 0) return null;
                return (
                  <div className="space-y-6">
                    <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] px-4">Desempenho por tema</h4>
                    <div className="bg-slate-900 rounded-[3rem] p-8 border border-slate-800 space-y-8 shadow-2xl">
                      {themes.map((theme, i) => (
                        <div key={theme.name} className="space-y-3">
                          <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                            <div className="flex items-center gap-3">
                              <div className={`w-2.5 h-2.5 rounded-full ${theme.color}`} />
                              <span className="text-slate-300">{theme.name}</span>
                            </div>
                            <span className="text-white">{theme.label}</span>
                          </div>
                          <div className="h-4 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-1">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${theme.progress}%` }}
                              transition={{ duration: 1.5, delay: i * 0.2 }}
                              className={`h-full ${theme.color} rounded-full`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Insight Cards */}
              {(() => {
                // Calcula o tema com pior desempenho na sessão atual
                const bySubj: Record<string, { correct: number; total: number }> = {};
                sessionHistory.forEach((h: { questionId: string; selectedIndex: number }) => {
                  const q = activeQuestions.find((q: Question) => q.id === h.questionId);
                  if (!q) return;
                  if (!bySubj[q.subject]) bySubj[q.subject] = { correct: 0, total: 0 };
                  bySubj[q.subject].total++;
                  if (h.selectedIndex === q.correctIndex) bySubj[q.subject].correct++;
                });
                const worstEntry = Object.entries(bySubj)
                  .filter(([, s]) => s.total > 0)
                  .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total))[0];
                const worstSubject = worstEntry ? worstEntry[0] : selectedSubject;
                const worstRate = worstEntry
                  ? Math.round(((worstEntry[1].total - worstEntry[1].correct) / worstEntry[1].total) * 100)
                  : 0;
                const hasErrors = sessionResults.correct < sessionResults.total;
                return hasErrors ? (
                <div className="bg-brand-orange/10 p-8 rounded-[3rem] border border-brand-orange/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-brand-orange/5">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-brand-orange/20 rounded-[1.5rem] flex items-center justify-center text-brand-orange shrink-0">
                      <AlertTriangle size={32} />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter">Ponto fraco detectado</h3>
                      <p className="text-slate-500 text-sm font-medium mt-1">
                        {worstSubject}: você errou {worstRate}% das questões nesta sessão. Revisar agora?
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => { setSelectedSubject(worstSubject as any); startQuiz(false, worstSubject as any, null); }}
                    className="w-full md:w-auto bg-brand-orange px-8 py-4 rounded-2xl text-black font-black text-sm shadow-xl shadow-brand-orange/20 hover:scale-105 transition-all uppercase tracking-widest whitespace-nowrap"
                  >
                    Revisar
                  </button>
                </div>
                ) : (
                <div className="bg-brand-green/10 p-8 rounded-[3rem] border border-brand-green/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-brand-green/5">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-brand-green/20 rounded-[1.5rem] flex items-center justify-center text-brand-green shrink-0">
                      <Zap size={32} fill="currentColor" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter">Sessão perfeita! 🎯</h3>
                      <p className="text-slate-500 text-sm font-medium mt-1">Acertou tudo em {worstSubject}. Continue assim e suba de liga!</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedSubject(selectedSubject);
                      startQuiz();
                    }}
                    className="w-full md:w-auto bg-brand-green px-8 py-4 rounded-2xl text-black font-black text-sm shadow-xl shadow-brand-green/20 hover:scale-105 transition-all uppercase tracking-widest whitespace-nowrap"
                  >
                    Tentar
                  </button>
                </div>
                );
              })()}

              <div className="bg-slate-900 border border-slate-800 p-8 rounded-[3rem] flex items-center gap-6 shadow-2xl relative overflow-hidden">
                <div className="bg-slate-800 p-4 rounded-2xl text-brand-orange shadow-inner">
                  <Flame size={32} fill="currentColor" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter">Streak mantido — {user.streak} dias!</h3>
                  <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Volte amanhã para não perder sua sequência.</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 mt-2">
                <button
                  onClick={() => setView('home')}
                  className="w-full py-5 bg-brand-primary text-white font-black rounded-2xl shadow-xl shadow-cyan-600/20 hover:scale-[1.02] active:scale-95 transition-all text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3"
                >
                  <Zap size={18} fill="currentColor" />
                  Continuar
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-slate-800 transition-all active:scale-95">
                    <Share2 size={16} />
                    Compartilhar
                  </button>
                  <button
                    onClick={() => startQuiz()}
                    className="flex items-center justify-center gap-2 py-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-slate-800 transition-all active:scale-95"
                  >
                    <RotateCcw size={16} />
                    Repetir
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* REVISION VIEW */}
          {view === 'revision' && (() => {
            // Compute weak subject: lowest mastery among subjects the user has attempted
            const attempted = (Object.entries(user.subjectAttempts) as [string, number][]).filter(([, n]) => n > 0);
            const weakEntry = attempted.length > 0
              ? attempted.sort((a, b) => (user.mastery[a[0]] ?? 0) - (user.mastery[b[0]] ?? 0))[0]
              : null;
            const weakSubject = weakEntry ? weakEntry[0] : null;
            const weakMastery = weakSubject ? Math.round(user.mastery[weakSubject] ?? 0) : 0;
            const weakAttempts = weakSubject ? (user.subjectAttempts[weakSubject] ?? 0) : 0;

            // Compute critical topics: subSubjects (or subjects) most present in missed questions
            const missedQs = QUESTIONS.filter(q => user.missedQuestionIds.includes(q.id));
            const topicMap: Record<string, { label: string; subject: string; count: number }> = {};
            missedQs.forEach(q => {
              const key = q.subSubject || q.subject;
              if (!topicMap[key]) topicMap[key] = { label: key, subject: q.subject, count: 0 };
              topicMap[key].count++;
            });
            const criticalTopics = Object.values(topicMap).sort((a, b) => b.count - a.count).slice(0, 5);

            // Accuracy by subject for the performance bar section
            const performanceRows = (Object.entries(user.subjectAttempts) as [string, number][])
              .filter(([, n]) => n > 0)
              .map(([subj, n]) => ({ subj, attempts: n, mastery: Math.round(user.mastery[subj] ?? 0) }))
              .sort((a, b) => a.mastery - b.mastery)
              .slice(0, 4);

            return (
              <motion.div
                key="revision"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6 pb-32"
              >
                <div className="flex items-center justify-between mt-6 px-2">
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Sua Revisão</h2>
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange border border-brand-orange/20">
                    <RotateCcw size={24} />
                  </div>
                </div>

                {/* Ponto Fraco — dinâmico */}
                <div className="bg-[#1a1a18] p-7 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange shadow-inner shrink-0">
                      <Activity size={22} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-white uppercase tracking-tighter leading-none mb-1">
                        {weakSubject ? 'Ponto Fraco Detectado' : 'Análise de Desempenho'}
                      </h3>
                      <p className="text-neutral-500 text-[10px] font-black uppercase tracking-widest leading-none">
                        {weakSubject ? `${weakSubject} • ${weakAttempts} questões respondidas` : 'Baseado no seu histórico'}
                      </p>
                    </div>
                  </div>

                  {weakSubject ? (
                    <>
                      <p className="text-slate-400 font-medium mb-6 leading-relaxed italic text-sm">
                        "Seu aproveitamento em <span className="text-brand-orange font-black not-italic">{weakSubject}</span> está em {weakMastery}%. Recomendamos reforçar esse tema para subir sua pontuação."
                      </p>
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Aproveitamento atual</span>
                          <span className="text-[11px] font-black" style={{ color: weakMastery < 40 ? '#ba1a1a' : weakMastery < 70 ? '#f1c100' : '#22C55E' }}>{weakMastery}%</span>
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${weakMastery}%` }}
                            transition={{ duration: 1 }}
                            className="h-full rounded-full"
                            style={{ background: weakMastery < 40 ? '#ba1a1a' : weakMastery < 70 ? '#f1c100' : '#22C55E' }}
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => { setSelectedSubject(weakSubject as any); startQuiz(false, weakSubject as any, null); }}
                        className="w-full bg-brand-orange py-4 rounded-2xl text-black font-black text-sm shadow-xl shadow-brand-orange/20 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest"
                      >
                        Revisar {weakSubject} Agora
                      </button>
                    </>
                  ) : (
                    <div className="flex flex-col items-center py-6 gap-3 text-center">
                      <span className="text-4xl">🎯</span>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed">
                        Responda questões para que o Dr. Quest identifique seus pontos fracos automaticamente.
                      </p>
                      <button
                        onClick={() => setView('home')}
                        className="mt-2 px-6 py-3 bg-brand-orange/20 text-brand-orange rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-orange/30 transition-all"
                      >
                        Começar a Jogar
                      </button>
                    </div>
                  )}
                </div>

                {/* Performance por matéria */}
                {performanceRows.length > 0 && (
                  <div className="bg-[#1a1a18] p-6 rounded-[2.5rem] border border-white/5 shadow-2xl flex flex-col gap-4">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="bg-cyan-500/10 p-2 rounded-lg text-cyan-400">
                        <BarChart2 size={16} />
                      </div>
                      <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Seu Desempenho por Matéria</span>
                    </div>
                    <div className="space-y-4">
                      {performanceRows.map(row => (
                        <div key={row.subj}>
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-xs font-bold text-slate-300 truncate">{row.subj}</span>
                            <span className="text-[10px] font-black shrink-0 ml-2" style={{ color: row.mastery < 40 ? '#ba1a1a' : row.mastery < 70 ? '#f1c100' : '#22C55E' }}>{row.mastery}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${row.mastery}%` }}
                              transition={{ duration: 0.8 }}
                              className="h-full rounded-full"
                              style={{ background: row.mastery < 40 ? '#ba1a1a' : row.mastery < 70 ? '#f1c100' : '#22C55E' }}
                            />
                          </div>
                          <span className="text-[9px] text-neutral-600 font-bold">{row.attempts} questão{row.attempts !== 1 ? 'ões' : ''} respondida{row.attempts !== 1 ? 's' : ''}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Temas Críticos — dinâmico */}
                  <div className="bg-[#1a1a18] p-6 rounded-[2.5rem] border border-white/5 shadow-2xl flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-500/10 p-2 rounded-lg text-red-400">
                        <AlertTriangle size={16} />
                      </div>
                      <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Temas Críticos</span>
                    </div>
                    {criticalTopics.length > 0 ? (
                      <div className="space-y-2">
                        {criticalTopics.map(topic => (
                          <button
                            key={topic.label}
                            onClick={() => { setSelectedSubject(topic.subject as any); startQuiz(false, topic.subject as any, null); }}
                            className="w-full flex justify-between items-center bg-white/5 hover:bg-white/10 active:scale-95 transition-all p-3 rounded-xl"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 text-[9px] font-black flex items-center justify-center shrink-0">{topic.count}</span>
                              <span className="text-xs font-bold text-slate-300 truncate">{topic.label}</span>
                            </div>
                            <ChevronRight size={13} className="text-neutral-600 shrink-0" />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center py-4 gap-2 text-center">
                        <span className="text-2xl">✅</span>
                        <p className="text-neutral-500 text-xs font-medium">Nenhum tema crítico ainda.<br/>Continue jogando!</p>
                      </div>
                    )}
                  </div>

                  {/* Simulado de Erros */}
                  <div className="bg-slate-900 p-7 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                      <h4 className="text-lg font-black uppercase tracking-tighter mb-2">Simulado de Erros</h4>
                      <p className="text-slate-400 text-xs font-medium mb-5 leading-relaxed">Refazer apenas as {user.missedQuestionIds.length} questão{user.missedQuestionIds.length !== 1 ? 'ões' : ''} que você errou.</p>
                      <button
                        onClick={() => startQuiz(true)}
                        disabled={user.missedQuestionIds.length === 0}
                        className="w-full py-3 bg-white text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {user.missedQuestionIds.length === 0 ? 'Sem erros pendentes' : `Gerar Simulado (${user.missedQuestionIds.length})`}
                      </button>
                      {user.missedQuestionIds.length > 0 && (
                        <p className="text-[9px] font-black text-cyan-400/50 uppercase tracking-widest mt-3 text-center">
                          {user.missedQuestionIds.length} questão{user.missedQuestionIds.length !== 1 ? 'ões' : ''} disponível{user.missedQuestionIds.length !== 1 ? 'ais' : ''}
                        </p>
                      )}
                    </div>
                    <RotateCcw className="absolute bottom-[-20px] right-[-20px] w-28 h-28 text-white/5 -rotate-12" />
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {view === 'ranking' && (
            <motion.div 
              key="ranking"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-0 pb-32 min-h-screen bg-gradient-to-b from-cyan-950 via-slate-900 to-cyan-950"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6">
                <button onClick={() => setView('home')} className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-white/60 hover:text-white transition-all active:scale-90">
                  <ArrowLeft size={20} />
                </button>
                <h2 className="text-lg font-black text-white/90 uppercase tracking-[0.1em]">Copa médica</h2>
                <button 
                  onClick={() => setShowAddFriend(true)}
                  className="w-10 h-10 flex items-center justify-center bg-cyan-600 rounded-full text-white shadow-lg shadow-cyan-600/20 active:scale-90"
                >
                  <UserPlus size={20} />
                </button>
              </div>

              {/* League Tabs */}
              <div className="px-6 mb-8">
                <div className="flex overflow-x-auto bg-white/5 p-1 rounded-2xl border border-white/10 gap-0.5 scrollbar-none">
                  {([
                    { id: 'bronze'  as LeagueTier, label: 'Bronze',   icon: Shield  },
                    { id: 'prata'   as LeagueTier, label: 'Prata',    icon: Star    },
                    { id: 'ouro'    as LeagueTier, label: 'Ouro',     icon: Trophy  },
                    { id: 'platina' as LeagueTier, label: 'Platina',  icon: Diamond },
                    { id: 'diamante'as LeagueTier, label: 'Diamante', icon: Crown   },
                  ] as { id: LeagueTier; label: string; icon: typeof Trophy }[]).map((league) => (
                    <button
                      key={league.id}
                      onClick={() => setActiveLeague(league.id)}
                      className={`flex-1 min-w-[64px] flex items-center justify-center gap-1.5 py-3 rounded-xl transition-all whitespace-nowrap ${
                        activeLeague === league.id
                        ? 'bg-gradient-to-r from-cyan-500 to-cyan-700 text-white shadow-lg shadow-cyan-600/30 border border-cyan-400/20'
                        : 'text-white/40 hover:text-white/60'
                      }`}
                    >
                      <league.icon size={12} className={activeLeague === league.id ? 'text-white' : 'text-neutral-500'} />
                      <span className="text-[9px] font-black uppercase tracking-[0.12em]">{league.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Global/Friends Tabs */}
              <div className="px-10 mb-8 mt-2">
                <div className="flex border-b border-white/5">
                  <button 
                    onClick={() => setRankingTab('global')}
                    className={`flex-1 pb-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all relative ${
                      rankingTab === 'global' ? 'text-white' : 'text-neutral-500'
                    }`}
                  >
                    Global
                    {rankingTab === 'global' && <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-full" />}
                  </button>
                  <button 
                    onClick={() => setRankingTab('friends')}
                    className={`flex-1 pb-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all relative ${
                      rankingTab === 'friends' ? 'text-white' : 'text-neutral-500'
                    }`}
                  >
                    Amigos
                    {rankingTab === 'friends' && <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-full" />}
                  </button>
                </div>
              </div>

              {/* Podium - só no Global e só quando há gente real na liga */}
              {rankingTab === 'global' && (() => {
                const leaguePlayers = leaguePlayersFor(activeLeague as LeagueTier);
                if (leaguePlayers.length === 0) return null;
                const first  = leaguePlayers[0];
                const second = leaguePlayers[1];
                const third  = leaguePlayers[2];
                const shortName = (p?: LeaguePlayer) => p ? p.name.split(' ').slice(0, 2).join(' ') : '—';
                return (
                  <motion.div
                    key={activeLeague + '-podium'}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex justify-center items-end gap-2 px-4 mb-10 mt-20 relative h-[240px]"
                  >
                    {/* 2nd place */}
                    <div className="flex flex-col items-center flex-1 max-w-[100px]">
                      <div className="relative mb-3">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base border-4 border-cyan-900 shadow-xl shadow-cyan-900/50 ${second ? 'bg-gradient-to-br from-slate-300 to-slate-400' : 'bg-white/5 border-white/10'}`}>{second ? second.initials : '—'}</div>
                      </div>
                      <span className="text-[10px] font-bold text-white/60 mb-1 leading-none">{shortName(second)}</span>
                      <span className="text-[11px] font-black text-cyan-300 mb-2 leading-none">{second ? second.xp.toLocaleString() : ''}</span>
                      <div className="w-full h-28 bg-gradient-to-t from-cyan-700/70 to-cyan-500/40 rounded-t-2xl flex items-center justify-center text-3xl font-black text-white/50 border-t border-x border-cyan-500/20">2</div>
                    </div>

                    {/* 1st place */}
                    <div className="flex flex-col items-center flex-1 max-w-[110px] z-10 scale-110">
                      <div className="relative mb-3">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-amber-400">
                          <motion.div animate={{ rotate: [0, -5, 5, 0], y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
                            <Crown size={26} fill="currentColor" />
                          </motion.div>
                        </div>
                        <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-xl scale-125" />
                        <div className="w-18 h-18 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center text-white font-bold text-xl border-4 border-amber-400 shadow-[0_0_40px_rgba(241,193,0,0.6)] relative z-10">{first.initials}</div>
                      </div>
                      <span className="text-[11px] font-bold text-white mb-1 leading-none">{shortName(first)}</span>
                      <span className="text-[12px] font-black text-cyan-300 mb-2 leading-none">{first.xp.toLocaleString()}</span>
                      <div className="w-full h-40 bg-gradient-to-t from-cyan-700 to-cyan-400 rounded-t-2xl flex items-center justify-center text-5xl font-black text-white/70 shadow-[0_-15px_40px_rgba(0,101,138,0.5)] border-t border-x border-cyan-400/30">1</div>
                    </div>

                    {/* 3rd place */}
                    <div className="flex flex-col items-center flex-1 max-w-[100px]">
                      <div className="relative mb-3">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base border-4 border-cyan-900 shadow-xl shadow-cyan-900/50 ${third ? 'bg-gradient-to-br from-orange-300 to-orange-400' : 'bg-white/5 border-white/10'}`}>{third ? third.initials : '—'}</div>
                      </div>
                      <span className="text-[10px] font-bold text-white/60 mb-1 leading-none">{shortName(third)}</span>
                      <span className="text-[11px] font-black text-cyan-300 mb-2 leading-none">{third ? third.xp.toLocaleString() : ''}</span>
                      <div className="w-full h-24 bg-gradient-to-t from-cyan-700/50 to-cyan-500/20 rounded-t-2xl flex items-center justify-center text-3xl font-black text-white/30 border-t border-x border-cyan-500/10">3</div>
                    </div>
                  </motion.div>
                );
              })()}

              {/* Player List Container */}
              <div className="bg-cyan-950/60 backdrop-blur-sm rounded-t-[3.5rem] flex-1 px-4 pt-10 pb-4 border-t border-cyan-800/30">
                {rankingTab === 'friends' && user.friends.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 px-10 text-center gap-8">
                    <div className="w-24 h-24 bg-white/5 rounded-[2.5rem] flex items-center justify-center text-white/20">
                      <Search size={40} />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-black text-white uppercase tracking-tight">Estude em grupo</h4>
                      <p className="text-neutral-500 text-xs font-medium max-w-[240px] mx-auto leading-relaxed">
                        Conecte-se com colegas para <span className="text-cyan-400 font-bold">dominar o pódio juntos!</span>
                      </p>
                    </div>
                    <button
                      onClick={() => setShowAddFriend(true)}
                      className="px-10 py-4 bg-cyan-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-xl shadow-cyan-600/20 active:scale-95"
                    >
                      Buscar Amigos
                    </button>
                  </div>
                ) : (
                  <motion.div
                    key={activeLeague + '-list'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    {(() => {
                      const all = leaguePlayersFor(activeLeague as LeagueTier);
                      const rows = rankingTab === 'global' ? all.slice(3) : all;
                      if (rows.length === 0) {
                        return (
                          <div className="flex flex-col items-center justify-center py-14 px-8 text-center gap-4">
                            <Trophy size={34} className="text-white/15" />
                            <p className="text-neutral-500 text-xs font-medium max-w-[260px] leading-relaxed">
                              {rankingTab === 'global'
                                ? 'Você é o único desta liga por enquanto. Convide colegas para o ranking encher!'
                                : 'Adicione amigos para disputar a liga com eles.'}
                            </p>
                            <button onClick={() => setShowAddFriend(true)} className="px-8 py-3 bg-cyan-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest active:scale-95">
                              Convidar colegas
                            </button>
                          </div>
                        );
                      }
                      return rows.map((player: LeaguePlayer, idx: number) => {
                      const absoluteRank = rankingTab === 'global' ? idx + 4 : idx + 1;
                      return (
                        <div 
                          key={player.name}
                          className={`flex items-center gap-4 p-4 rounded-[2rem] border transition-all ${
                            player.currentUser 
                            ? 'bg-cyan-600/10 border-cyan-500/30 shadow-[0_8px_30px_rgba(0,101,138,0.1)]' 
                            : 'bg-white/5 border-transparent'
                          }`}
                        >
                          <div className={`w-6 font-black text-sm text-center ${player.currentUser ? 'text-cyan-400' : 'text-neutral-600'}`}>
                            {absoluteRank}
                          </div>
                          
                          <div className="relative shrink-0">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm text-white shadow-lg ${
                              player.currentUser ? 'bg-cyan-600' : 'bg-[#1e1e1c]'
                            }`}>
                              {player.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </div>
                            {player.active && (
                              <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 bg-brand-green rounded-full border-2 border-[#262624]" />
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <h4 className={`text-[13px] font-black uppercase tracking-tight truncate ${player.currentUser ? 'text-cyan-400' : 'text-white/90'}`}>
                              {player.name} {player.currentUser && <span className="text-[10px] text-cyan-400 lowercase">(você)</span>}
                            </h4>
                            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Nív. {player.level} • Mestre</p>
                          </div>

                          <div className="text-right shrink-0 min-w-[70px]">
                            <div className="flex items-baseline gap-1 justify-end">
                              <span className="text-[15px] font-black leading-none text-white">{player.xp.toLocaleString()}</span>
                              <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">XP</span>
                            </div>
                            <div className="flex items-center gap-2 justify-end mt-1.5">
                              {!!player.streak && (
                                <div className="flex items-center gap-0.5">
                                  <Flame size={10} className="text-orange-500" fill="currentColor" />
                                  <span className="text-[10px] font-black text-orange-500">{player.streak}</span>
                                </div>
                              )}
                              {player.trend !== 0 && (
                                <div className={`flex items-center gap-0.5 ${player.trend > 0 ? 'text-brand-green' : 'text-red-500'}`}>
                                  {player.trend > 0 ? <TrendingUp size={11} strokeWidth={3} /> : <TrendingDown size={11} strokeWidth={3} />}
                                  <span className="text-[10px] font-black tracking-tighter">{player.trend > 0 ? `+${player.trend}` : player.trend}</span>
                                </div>
                              )}
                              {player.trend === 0 && !player.streak && (
                                <div className="h-[2px] w-3 bg-neutral-600 rounded-full" />
                              )}
                            </div>
                          </div>
                        </div>
                      );
                      });
                    })()}

                    {/* Promotion Banner — regra genérica da próxima liga */}
                    {LEAGUE_CONFIG[activeLeague as LeagueTier].next && (
                    <div className="bg-brand-green/10 p-5 rounded-[2rem] border border-brand-green/20 flex items-center gap-5 mt-6 mb-2">
                       <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-green/20 flex items-center justify-center text-brand-green">
                          <TrendingUp size={22} strokeWidth={3} />
                       </div>
                       <p className="text-[12px] font-bold text-brand-green/90 leading-tight">
                          Suba para a liga <span className="font-black text-brand-green uppercase">{LEAGUE_CONFIG[LEAGUE_CONFIG[activeLeague as LeagueTier].next as LeagueTier].label.replace('Liga ', '')}</span> acumulando mais XP!
                       </p>
                    </div>
                    )}

                    {/* Sua posição — real, só quando você está nesta liga */}
                    {(() => {
                      const players = leaguePlayersFor(activeLeague as LeagueTier);
                      const myIdx = players.findIndex(p => p.currentUser);
                      if (myIdx < 0) return null;
                      const cfg = LEAGUE_CONFIG[activeLeague as LeagueTier];
                      const nextXp = cfg.next ? LEAGUE_XP[cfg.next as LeagueTier] : null;
                      const faltam = nextXp !== null ? Math.max(0, nextXp - user.xp) : 0;
                      const pct = nextXp !== null && nextXp > 0 ? Math.min(100, Math.round((user.xp / nextXp) * 100)) : 100;
                      return (
                    <div className="bg-[#1a1a18] p-6 rounded-[2.5rem] mt-6 border border-white/5 space-y-4 shadow-2xl">
                       <div className="flex justify-between items-end">
                          <p className="text-[11px] font-black text-neutral-500 uppercase tracking-widest leading-none">Sua posição: {myIdx + 1}º lugar</p>
                          {cfg.next
                            ? <p className="text-[11px] font-black text-white/50 uppercase tracking-widest leading-none">+{faltam.toLocaleString()} XP p/ {LEAGUE_CONFIG[cfg.next as LeagueTier].label.replace('Liga ', '')}</p>
                            : <p className="text-[11px] font-black text-cyan-300 uppercase tracking-widest leading-none">Liga máxima 🏆</p>}
                       </div>
                       <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${pct}%` }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="h-full bg-cyan-600 shadow-[0_0_15px_rgba(0,101,138,0.6)]"
                          />
                       </div>
                    </div>
                      );
                    })()}

                    {/* Scroll to Top */}
                    <div className="flex justify-center mt-6">
                       <button
                         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                         className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full text-white/40 border border-white/5 hover:bg-white/10 hover:text-white transition-all active:scale-95 cursor-pointer shadow-lg"
                       >
                          <ChevronUp size={24} />
                       </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {view === 'progress' && (
            <motion.div 
              key="progress"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col gap-10 pb-32"
            >
              {/* Progress Hero */}
              <div className="bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-900 rounded-[3rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-cyan-500/30 mt-4">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-cyan-200 text-[10px] font-black uppercase tracking-widest">Dashboard</p>
                    <div className="flex bg-white/10 border border-white/20 p-1 rounded-xl shrink-0 shadow-inner">
                      {(['7D', '30D', 'Total'] as const).map((f) => (
                        <button
                          key={f}
                          onClick={() => setProgressFilter(f.toLowerCase() as any)}
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                            progressFilter === f.toLowerCase()
                              ? 'bg-white text-cyan-700 shadow-lg'
                              : 'text-white/50 hover:text-white/80'
                          }`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-tighter leading-tight">Meu Progresso</h2>
                </div>
                <div className="relative z-10 grid grid-cols-3 gap-3">
                  {[
                    { label: 'Respondidas', val: '312', icon: BookOpen },
                    { label: 'Taxa Acerto', val: '74%', icon: Target },
                    { label: 'Streak', val: `${user.streak}d`, icon: Flame }
                  ].map((card) => (
                    <div key={card.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 pb-4 text-center border border-white/15 hover:bg-white/20 transition-all">
                      <card.icon size={18} className="text-cyan-200 mx-auto mb-2" />
                      <div className="text-xl font-black text-white tracking-tighter leading-none">{card.val}</div>
                      <div className="text-[9px] font-black text-cyan-200/70 uppercase tracking-wider mt-2 leading-tight break-words">{card.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Heatmap */}
              <div className="space-y-6">
                <h4 className="text-[12px] font-black text-slate-800 uppercase tracking-widest px-4">Atividade — últimos 28 dias</h4>
                <div className="bg-gradient-to-br from-cyan-950 to-slate-900 rounded-[2.5rem] sm:rounded-[3rem] p-4 sm:p-10 border border-cyan-800/40 shadow-2xl shadow-cyan-900/20 relative overflow-visible" onMouseLeave={() => setHoveredCell(null)}>
                  <div className="relative">
                    {/* Tooltip Overlay */}
                    <AnimatePresence>
                      {hoveredCell && (
                        <motion.div
                          initial={{ opacity: 0, y: 5, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.95 }}
                          className="absolute z-[100] bg-slate-900/95 backdrop-blur-sm text-white p-3.5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-none border border-white/10 flex flex-col items-center justify-center text-center transition-all whitespace-nowrap"
                          style={hoveredCell.col >= 4
                            ? { right: `${100 - hoveredCell.x}%`, top: `${hoveredCell.y}%`, transform: 'translateY(-135%)' }
                            : { left: `${hoveredCell.x}%`, top: `${hoveredCell.y}%`, transform: `translate(${hoveredCell.col <= 2 ? 0 : -50}%, -135%)` }
                          }
                        >
                          <div className="text-[10px] font-black text-neutral-400 uppercase tracking-widest leading-none whitespace-nowrap">
                            {formatDate(hoveredCell.date)}
                          </div>
                          <div className="text-[14px] font-black text-white leading-none mt-1.5 whitespace-nowrap">
                            {hoveredCell.count} {hoveredCell.count === 1 ? 'questão' : 'questões'}
                          </div>
                          {hoveredCell.frozen && (
                            <div className="flex items-center gap-1.5 mt-1.5 whitespace-nowrap">
                              <Snowflake size={11} className="text-sky-400" strokeWidth={2.5} />
                              <span className="text-[10px] font-black text-sky-400">Streak protegido por gelo</span>
                            </div>
                          )}
                          {Object.keys(hoveredCell.subjects).length > 0 && (
                            <div className="flex flex-col gap-1 mt-2 max-w-[13rem] w-full">
                              {(Object.entries(hoveredCell.subjects) as [string, number][])
                                .sort((a, b) => b[1] - a[1])
                                .map(([subj, n]) => (
                                  <div key={subj} className="flex items-center justify-between gap-3 text-[10px] font-bold whitespace-normal">
                                    <span className="text-cyan-300 text-left leading-snug">{subj}</span>
                                    <span className="text-white font-black shrink-0">{n}</span>
                                  </div>
                                ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="grid grid-cols-7 gap-1.5 sm:gap-3 mb-6">
                      {heatmapData.map((data, i) => {
                        const col = i % 7;
                        const row = Math.floor(i / 7);
                        const x = ((col + 0.5) / 7) * 100;
                        const y = ((row + 0.5) / 4) * 100;

                        return (
                          <motion.div
                            key={i}
                            onMouseEnter={() => setHoveredCell({ ...data, x, y, col })}
                            onTouchStart={() => setHoveredCell({ ...data, x, y, col })}
                            onClick={() => setHoveredCell({ ...data, x, y, col })}
                            whileHover={{ scale: 1.1, zIndex: 30 }}
                            whileTap={{ scale: 0.95 }}
                            className={`aspect-square rounded-lg shadow-sm cursor-pointer transition-colors border flex items-center justify-center ${
                              data.frozen
                                ? 'bg-sky-500/25 border-sky-400/60 hover:border-sky-300'
                                : `${getIntensity(data.count)} border-transparent hover:border-cyan-500/50`
                            }`}
                          >
                            {data.frozen && <Snowflake size={11} className="text-sky-300" strokeWidth={2.5} />}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1.5 sm:gap-3 text-[10px] font-black text-cyan-400/50 text-center uppercase tracking-widest">
                    {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, idx) => {
                      const fullDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
                      return (
                        <span key={idx} className="truncate">
                          <span className="sm:hidden">{day}</span>
                          <span className="hidden sm:inline">{fullDays[idx]}</span>
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap justify-end items-center mt-8 text-[10px] font-black text-cyan-400/50 uppercase tracking-widest gap-4">
                    <span>Vazio</span>
                    <div className="flex gap-2">
                       {['bg-slate-800', 'bg-cyan-600/30', 'bg-cyan-600/60', 'bg-cyan-600/80', 'bg-cyan-600'].map(c => (
                          <div key={c} className={`w-3 h-3 rounded-full ${c}`} />
                       ))}
                    </div>
                    <span>Meta</span>
                    <div className="flex items-center gap-1.5">
                      <Snowflake size={11} className="text-sky-400" strokeWidth={2.5} />
                      <span>Protegido</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weekly Accuracy Chart */}
              <div className="space-y-6">
                <div className="flex justify-between items-center px-4">
                  <div className="space-y-1">
                    <h4 className="text-[12px] font-black text-slate-800 uppercase tracking-widest">Taxa de acerto quinzenal</h4>
                    <p className="text-[11px] text-slate-700 font-bold tracking-tight">Evolução nas últimas 4 semanas</p>
                  </div>
                  <div className="flex items-center gap-2 bg-brand-green/10 px-3 py-1.5 rounded-xl border border-brand-green/20">
                    <TrendingUp size={12} className="text-brand-green" />
                    <span className="text-[10px] font-black text-brand-green">{chartGain >= 0 ? '+' : ''}{chartGain}%</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-950 to-slate-900 rounded-[3rem] p-8 sm:p-10 border border-cyan-800/40 shadow-2xl shadow-cyan-900/20 overflow-hidden transition-all duration-300">
                  <div className="flex justify-center mb-12">
                    <div className="inline-flex p-1 bg-white/5 rounded-2xl border border-white/5 self-center">
                      {(['Barras', 'Linha'] as const).map(t => (
                        <button 
                          key={t}
                          onClick={() => setChartType(t === 'Barras' ? 'bar' : 'line')}
                          className={`px-6 sm:px-8 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                            chartType === (t === 'Barras' ? 'bar' : 'line') ? 'bg-cyan-600 text-white shadow-xl shadow-cyan-600/20' : 'text-neutral-500 hover:text-neutral-300'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="h-[280px] w-full relative mb-12">
                    {!hasActivity && (
                      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
                        <p className="text-white/70 font-black uppercase tracking-widest text-sm mb-1">Sem dados ainda</p>
                        <p className="text-white/40 text-xs font-medium">Responda questões para ver sua evolução real aqui.</p>
                      </div>
                    )}
                    <ResponsiveContainer width="100%" height="100%">
                      {chartType === 'bar' ? (
                        <BarChart data={currentChartData} margin={{ top: 20, right: 0, left: -25, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#ffffff10" />
                          <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#666', fontSize: 10, fontWeight: 900 }}
                            dy={15}
                          />
                          <YAxis 
                            domain={[0, 100]} 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#666', fontSize: 10, fontWeight: 900 }}
                            ticks={[40, 60, 80, 95]}
                            tickFormatter={(v) => `${v}%`}
                          />
                          <Tooltip 
                            cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="bg-[#1a1a18] border border-white/10 px-4 py-3 rounded-2xl shadow-2xl text-center">
                                    <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest leading-none mb-1">{payload[0].payload.name}</p>
                                    <p className="text-xl font-black text-white">{payload[0].value}% <span className="text-[10px] text-cyan-400 font-black ml-1 uppercase">acerto</span></p>
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                          <ReferenceLine y={80} stroke="#10b98140" strokeDasharray="5 5" strokeWidth={2} />
                          <Bar 
                            dataKey="value" 
                            radius={[12, 12, 12, 12]}
                            animationDuration={1200}
                            barSize={40}
                          >
                            {currentChartData.map((d, i) => (
                              <Cell
                                key={`cell-${i}`}
                                fill={d.value < 60 ? '#1e3a8a' : d.value < 70 ? '#1e40af' : d.value < 74 ? '#2563eb' : '#3b82f6'}
                              />
                            ))}
                          </Bar>
                        </BarChart>
                      ) : (
                        <LineChart data={currentChartData} margin={{ top: 20, right: 20, left: -25, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#ffffff10" />
                          <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#666', fontSize: 10, fontWeight: 900 }}
                            dy={15}
                          />
                          <YAxis 
                            domain={[0, 100]} 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#666', fontSize: 10, fontWeight: 900 }}
                            ticks={[40, 60, 80, 95]}
                            tickFormatter={(v) => `${v}%`}
                          />
                          <Tooltip 
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="bg-[#1a1a18] border border-white/10 px-4 py-3 rounded-2xl shadow-2xl text-center">
                                    <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest leading-none mb-1">{payload[0].payload.name}</p>
                                    <p className="text-xl font-black text-white">{payload[0].value}%</p>
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                          <ReferenceLine y={80} stroke="#10b98140" strokeDasharray="5 5" strokeWidth={2} />
                          <Line 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#3b82f6" 
                            strokeWidth={6} 
                            dot={{ fill: '#3b82f6', strokeWidth: 4, r: 6, stroke: '#1e1e1c' }}
                            activeDot={{ r: 10, strokeWidth: 4, stroke: '#1e1e1c' }}
                            animationDuration={1200}
                          />
                        </LineChart>
                      )}
                    </ResponsiveContainer>
                  </div>

                  {/* Legend */}
                  <div className="flex justify-center gap-6 sm:gap-10 px-2 mb-12">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-lg bg-cyan-500 shadow-xl shadow-cyan-500/30" />
                      <span className="text-[10px] font-black text-cyan-400/60 uppercase tracking-widest">Taxa de acerto</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-lg border-2 border-cyan-400/30 border-dashed" />
                      <span className="text-[10px] font-black text-cyan-400/60 uppercase tracking-widest">Meta (80%)</span>
                    </div>
                  </div>

                  {/* Insight Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { val: `${chartBest}%`, label: 'Melhor\nresultado', color: 'text-brand-green' },
                      { val: `${chartWorst}%`, label: 'Pior\nresultado', color: 'text-brand-orange' },
                      { val: `${chartGain >= 0 ? '+' : ''}${chartGain}pp`, label: 'Ganho\nno período', color: 'text-white' }
                    ].map((i, idx) => (
                      <div key={idx} className="bg-white/5 p-4 sm:p-6 rounded-[2.5rem] border border-white/5 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-all min-h-[100px]">
                        <p className={`text-xl sm:text-2xl font-black ${i.color} leading-none mb-3`}>{i.val}</p>
                        <p className="text-[8px] sm:text-[10px] font-black text-neutral-600 uppercase tracking-widest leading-tight whitespace-pre-wrap">{i.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Specialty Mastery — dados reais do usuário (user.mastery / subjectAttempts).
                  Só entram matérias com pelo menos 1 questão respondida; sem isso, mostra
                  um estado vazio em vez de inventar números. */}
              {(() => {
                const attemptedSubjects = Object.keys(user.subjectAttempts)
                  .filter(s => (user.subjectAttempts[s] || 0) > 0)
                  .sort((a, b) => (user.mastery[b] || 0) - (user.mastery[a] || 0))
                  .slice(0, 6);
                return (
                  <div className="space-y-6">
                    <h4 className="text-[12px] font-black text-slate-800 uppercase tracking-widest px-4">Domínio por especialidade</h4>
                    <div className="bg-gradient-to-br from-cyan-950 to-slate-900 rounded-[3rem] p-8 sm:p-10 border border-cyan-800/40 shadow-2xl shadow-cyan-900/20">
                      {attemptedSubjects.length === 0 ? (
                        <p className="text-cyan-200/60 text-sm font-medium text-center leading-relaxed">
                          Você ainda não respondeu nenhuma questão. Comece a estudar e seu domínio por especialidade aparece aqui.
                        </p>
                      ) : (
                        <div className="space-y-10">
                          {attemptedSubjects.map((subj) => {
                            const mastery = Math.round(user.mastery[subj] || 0);
                            const attempts = user.subjectAttempts[subj] || 0;
                            const color = SUBJECT_ICONS[subj]?.ringColor || '#00a7e1';
                            return (
                              <div key={subj} className="space-y-4">
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 rounded-full shrink-0" style={{ background: color, boxShadow: `0 0 15px ${color}` }} />
                                    <span className="text-sm font-black text-white uppercase tracking-tighter">{subj}</span>
                                  </div>
                                  <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-black text-cyan-200/40 whitespace-nowrap">{attempts} {attempts === 1 ? 'questão' : 'questões'}</span>
                                    <span className="text-xs font-black text-neutral-500">{mastery}%</span>
                                  </div>
                                </div>
                                <div className="h-4 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-1">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${mastery}%` }}
                                    transition={{ duration: 1.5, ease: 'easeOut' }}
                                    className="h-full rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                                    style={{ background: color }}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()}

              {/* Insight Card — gerado a partir do desempenho real do usuário, não fixo. */}
              {(() => {
                const attempted = Object.keys(user.subjectAttempts).filter(s => (user.subjectAttempts[s] || 0) > 0);
                const sorted = [...attempted].sort((a, b) => (user.mastery[b] || 0) - (user.mastery[a] || 0));
                const best = sorted[0];
                const worst = sorted[sorted.length - 1];

                let message: ReactNode;
                if (attempted.length === 0) {
                  message = 'Você ainda não respondeu nenhuma questão. Comece a estudar para desbloquear insights personalizados sobre seu desempenho.';
                } else if (attempted.length === 1 || best === worst) {
                  const bestMastery = Math.round(user.mastery[best] || 0);
                  message = (
                    <>Você já respondeu {user.subjectAttempts[best]} {user.subjectAttempts[best] === 1 ? 'questão' : 'questões'} de <span className="text-cyan-300 font-bold">{best}</span>, com {bestMastery}% de domínio. Continue praticando outras matérias para termos mais insights sobre seu desempenho.</>
                  );
                } else {
                  const bestMastery = Math.round(user.mastery[best] || 0);
                  const worstMastery = Math.round(user.mastery[worst] || 0);
                  // Dias desde a última vez que essa matéria apareceu no registro real de atividade.
                  let daysSince: number | null = null;
                  const todayD = new Date();
                  for (let i = 0; i < 60; i++) {
                    const d = new Date(todayD);
                    d.setDate(todayD.getDate() - i);
                    if (user.activitySubjects?.[dateKey(d)]?.[worst]) { daysSince = i; break; }
                  }
                  message = (
                    <>
                      Você domina bem <span className="text-cyan-300 font-bold">{best}</span> ({bestMastery}%) mas está mais fraco em <span className="text-cyan-300 font-bold">{worst}</span> ({worstMastery}%)
                      {daysSince !== null && daysSince > 0 ? ` — não pratica há ${daysSince} ${daysSince === 1 ? 'dia' : 'dias'}.` : '.'} Que tal reforçar {worst} hoje?
                    </>
                  );
                }

                return (
                  <div className="bg-gradient-to-br from-cyan-950 to-slate-900 p-8 sm:p-10 rounded-[3rem] border border-cyan-800/40 shadow-2xl shadow-cyan-900/20 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-110 transition-transform" />
                     <div className="flex items-center gap-4 mb-4">
                        <div className="bg-cyan-500/20 p-3 rounded-xl text-cyan-400">
                          <Zap size={24} fill="currentColor" />
                        </div>
                        <h4 className="text-sm font-black text-white uppercase tracking-widest">Insight do app</h4>
                     </div>
                     <p className="text-cyan-200/70 text-sm font-medium leading-relaxed tracking-tight">
                       {message}
                     </p>
                  </div>
                );
              })()}

              {/* Weekly Streak Bubbles */}
              <div className="space-y-4">
                <h4 className="text-[12px] font-black text-slate-800 uppercase tracking-[0.2em] px-4">Comprometimento Semanal</h4>
                <div className="bg-gradient-to-br from-cyan-950 to-slate-900 p-6 rounded-[2.5rem] border border-cyan-800/40 shadow-2xl shadow-cyan-900/20 overflow-hidden">
                  <div className="flex justify-between items-center gap-1 min-w-0 overflow-x-auto hide-scrollbar py-2">
                    {(() => {
                      // Semana real do usuário (segunda a domingo), ancorada na data de hoje.
                      // Cada dia é marcado como concluído a partir do activityLog — nada aqui é fixo.
                      const LABELS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
                      const now = new Date();
                      const todayKey = dateKey(now);
                      // getDay(): 0 = domingo. Convertido para semana começando na segunda.
                      const mondayOffset = (now.getDay() + 6) % 7;
                      const monday = new Date(now);
                      monday.setDate(now.getDate() - mondayOffset);

                      return LABELS.map((label, i) => {
                        const d = new Date(monday);
                        d.setDate(monday.getDate() + i);
                        const key = dateKey(d);
                        const isToday = key === todayKey;
                        const isFuture = key > todayKey;
                        const isDone = !isFuture && (user.activityLog[key] || 0) > 0;
                        return (
                          <div key={key} className="flex flex-col items-center gap-2 min-w-[42px] sm:min-w-[60px] shrink-0">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center border-2 transition-all shadow-md ${
                              isToday ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 scale-110 shadow-cyan-500/20' :
                              isDone ? 'bg-cyan-600 border-cyan-500 text-white shadow-cyan-600/30' :
                              'bg-white/5 border-white/10 text-white/20'
                            }`}>
                              {isDone ? <Check size={20} strokeWidth={4} /> : isToday ? <Flame size={20} fill="currentColor" /> : <div className="w-1.5 h-1.5 rounded-full bg-white/20" />}
                            </div>
                            <span className={`text-[10px] font-black uppercase tracking-tighter ${isToday ? 'text-cyan-300' : isDone ? 'text-cyan-400/70' : 'text-white/20'}`}>
                              {isToday
                                ? <span className="bg-cyan-500/20 px-1.5 py-0.5 rounded text-cyan-300">Hoje</span>
                                : label}
                            </span>
                          </div>
                        );
                      });
                    })()}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SIMULADO — monte sua prova */}
          {view === 'simulado' && (() => {
            const isEstud = selectedTrack === 'estudante';

            // Assuntos disponíveis (estudante) — do banco inteiro, com contagem.
            const subjCounts: Record<string, number> = {};
            QUESTIONS.forEach(q => { subjCounts[q.subject] = (subjCounts[q.subject] || 0) + 1; });
            const subjects = (Object.keys(subjCounts) as Subject[])
              .filter(s => subjCounts[s] >= 10)
              .sort((a, b) => subjCounts[b] - subjCounts[a]);

            // Bancas disponíveis (residência) — só as que têm questões.
            const bancaCounts: Record<string, number> = {};
            QUESTIONS.forEach(q => { if (q.banca) bancaCounts[q.banca] = (bancaCounts[q.banca] || 0) + 1; });
            const bancas = Object.keys(bancaCounts).sort((a, b) => bancaCounts[b] - bancaCounts[a]);
            const bancaFullName = (short: string) => BANCAS.find(b => b.short === short)?.name ?? short;

            const chosen = isEstud ? simuladoSubject : simuladoBanca;
            const previewSize = isEstud
              ? (simuladoSubject ? Math.min(SIMULADO_SIZE, subjCounts[simuladoSubject] || 0) : SIMULADO_SIZE)
              : SIMULADO_SIZE;

            const gerar = () => {
              if (isEstud && simuladoSubject) {
                startSimulado(buildSimuladoEstudante(simuladoSubject), simuladoSubject);
              } else if (!isEstud && simuladoBanca) {
                startSimulado(buildSimuladoResidencia(simuladoBanca), simuladoBanca);
              }
            };

            return (
              <motion.div
                key="simulado"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col gap-6 pb-40 px-1 pt-4"
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <button onClick={() => setView('home')} className="text-slate-400 hover:text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
                    <ArrowLeft size={20} />
                  </button>
                  <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-2">
                    <Award size={20} className="text-brand-primary" /> Simulado
                  </h2>
                  <div className="w-10" />
                </div>

                {/* Hero explicativo */}
                <div className="bg-gradient-to-br from-cyan-600 to-cyan-900 rounded-[2.5rem] p-6 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20 pointer-events-none" />
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200/80 mb-1">Monte sua prova</p>
                  <h3 className="text-2xl font-black tracking-tight leading-tight mb-2">
                    {isEstud ? `Simulado de até ${SIMULADO_SIZE} questões` : `Prova de ${SIMULADO_SIZE} questões`}
                  </h3>
                  <p className="text-sm text-cyan-100/90 font-medium leading-snug">
                    {isEstud
                      ? 'Escolha um assunto e receba uma bateria focada nele para treinar de verdade.'
                      : 'Escolha uma banca e receba uma prova com questões da própria banca e questões baseadas no estilo dela.'}
                  </p>
                </div>

                {/* Seletor */}
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 px-1">
                    {isEstud ? 'Escolha o assunto' : 'Escolha a banca'}
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {(isEstud ? subjects : bancas).map(item => {
                      const on = chosen === item;
                      const count = isEstud ? subjCounts[item] : bancaCounts[item];
                      return (
                        <button
                          key={item}
                          onClick={() => isEstud ? setSimuladoSubject(item as Subject) : setSimuladoBanca(item)}
                          className={`text-left p-3.5 rounded-2xl border-2 transition-all active:scale-95 ${
                            on ? 'border-brand-primary bg-brand-primary/5 shadow-md' : 'border-slate-200 bg-white hover:border-brand-primary/40'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1 mb-0.5">
                            <span className={`text-xs font-black leading-tight ${on ? 'text-brand-primary' : 'text-slate-800'}`}>{item}</span>
                            {on && <CheckCircle2 size={15} className="text-brand-primary shrink-0" />}
                          </div>
                          <span className="text-[10px] font-bold text-slate-400">
                            {isEstud ? `${count} questões` : bancaFullName(item)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Barra fixa: gerar */}
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/85 backdrop-blur-xl border-t border-slate-100 z-40">
                  <div className="max-w-4xl mx-auto flex items-center gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                        {chosen ? (isEstud ? 'Assunto' : 'Banca') : 'Selecione acima'}
                      </p>
                      <p className="text-sm font-black text-slate-900 truncate">
                        {chosen ? `${chosen} · ${previewSize} questões` : '—'}
                      </p>
                    </div>
                    <button
                      onClick={gerar}
                      disabled={!chosen}
                      className={`px-7 py-3.5 rounded-2xl font-black text-sm uppercase tracking-widest shrink-0 transition-all ${
                        chosen ? 'bg-brand-primary text-white shadow-lg active:scale-95' : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      Gerar
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* AGENDA — provas/atividades + lembretes */}
          {view === 'agenda' && (() => {
            // Matérias disponíveis (com questões) para vincular ao evento.
            const subjCounts: Record<string, number> = {};
            QUESTIONS.forEach(q => { subjCounts[q.subject] = (subjCounts[q.subject] || 0) + 1; });
            const subjects = Object.keys(subjCounts).filter(s => subjCounts[s] >= 10).sort();
            const past = [...user.agenda].filter(e => daysUntil(e.date) < 0).sort((a, b) => b.date.localeCompare(a.date));
            const fmtDate = (iso: string) => {
              const d = new Date(iso + 'T00:00:00');
              return d.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short' });
            };
            const dLabel = (n: number) => n === 0 ? 'Hoje' : n === 1 ? 'Amanhã' : `Em ${n} dias`;

            return (
              <motion.div
                key="agenda"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col gap-6 pb-28 px-1 pt-4"
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <button onClick={() => setView('home')} className="text-slate-400 hover:text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
                    <ArrowLeft size={20} />
                  </button>
                  <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-2">
                    <CalendarDays size={20} className="text-brand-primary" /> Agenda
                  </h2>
                  <div className="w-10" />
                </div>

                {/* Formulário: novo evento */}
                <div className="bg-white rounded-[2rem] border border-slate-100 shadow-lg p-5 flex flex-col gap-3">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Marcar prova ou atividade</p>

                  <input
                    value={agendaTitle}
                    onChange={e => setAgendaTitle(e.target.value)}
                    placeholder="Ex.: Prova de Cardiologia"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-primary focus:outline-none text-slate-900 font-bold text-sm"
                  />

                  {/* Tipo */}
                  <div className="grid grid-cols-2 gap-2">
                    {(['prova', 'atividade'] as const).map(t => (
                      <button
                        key={t}
                        onClick={() => setAgendaType(t)}
                        className={`py-2.5 rounded-xl border-2 text-xs font-black uppercase tracking-widest transition-all ${
                          agendaType === t ? 'border-brand-primary bg-brand-primary/5 text-brand-primary' : 'border-slate-200 text-slate-400'
                        }`}
                      >
                        {t === 'prova' ? '📝 Prova' : '📌 Atividade'}
                      </button>
                    ))}
                  </div>

                  {/* Data */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Data</label>
                    <input
                      type="date"
                      value={agendaDate}
                      min={dateKey()}
                      onChange={e => setAgendaDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-primary focus:outline-none text-slate-900 font-bold text-sm"
                    />
                  </div>

                  {/* Matéria (opcional, para o app mandar questões do assunto) */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Assunto (para treinar questões)</label>
                    <select
                      value={agendaSubject}
                      onChange={e => setAgendaSubject(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-primary focus:outline-none text-slate-900 font-bold text-sm bg-white"
                    >
                      <option value="">Sem assunto específico</option>
                      {subjects.map(s => <option key={s} value={s}>{s} ({subjCounts[s]})</option>)}
                    </select>
                  </div>

                  <button
                    onClick={addAgendaEvent}
                    disabled={!agendaTitle.trim() || !agendaDate}
                    className={`mt-1 py-3.5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                      agendaTitle.trim() && agendaDate ? 'bg-brand-primary text-white shadow-lg active:scale-95' : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    <Plus size={16} strokeWidth={3} /> Adicionar à agenda
                  </button>
                </div>

                {/* Próximos eventos */}
                <div className="flex flex-col gap-3">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-1">Próximos</p>
                  {upcomingAgenda.length === 0 ? (
                    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 text-center">
                      <CalendarDays size={32} className="text-slate-300 mx-auto mb-2" />
                      <p className="text-sm font-bold text-slate-400">Nenhuma prova ou atividade marcada.</p>
                    </div>
                  ) : upcomingAgenda.map(ev => {
                    const n = daysUntil(ev.date);
                    const urgent = n <= 2;
                    return (
                      <div key={ev.id} className={`bg-white rounded-3xl border shadow-sm p-4 ${urgent ? 'border-brand-primary/40' : 'border-slate-100'}`}>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-lg shrink-0">{ev.type === 'prova' ? '📝' : '📌'}</span>
                            <div className="min-w-0">
                              <p className="text-sm font-black text-slate-900 leading-tight truncate">{ev.title}</p>
                              <p className="text-[11px] font-bold text-slate-400 capitalize">{fmtDate(ev.date)}{ev.subject ? ` · ${ev.subject}` : ''}</p>
                            </div>
                          </div>
                          <button onClick={() => removeAgendaEvent(ev.id)} className="text-slate-300 hover:text-brand-red p-1 shrink-0">
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${
                            urgent ? 'bg-brand-primary/10 text-brand-primary' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {dLabel(n)}
                          </span>
                          {ev.subject && (
                            <button
                              onClick={() => studyForEvent(ev)}
                              className="flex items-center gap-1.5 bg-brand-primary text-white text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-xl active:scale-95 transition-transform"
                            >
                              <Zap size={13} fill="currentColor" /> Treinar
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Passados */}
                {past.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-1">Concluídos</p>
                    {past.slice(0, 8).map(ev => (
                      <div key={ev.id} className="flex items-center justify-between gap-2 bg-slate-50 rounded-2xl border border-slate-100 px-4 py-2.5">
                        <div className="flex items-center gap-2 min-w-0 opacity-60">
                          <span className="shrink-0">{ev.type === 'prova' ? '📝' : '📌'}</span>
                          <p className="text-xs font-bold text-slate-500 truncate">{ev.title} · {fmtDate(ev.date)}</p>
                        </div>
                        <button onClick={() => removeAgendaEvent(ev.id)} className="text-slate-300 hover:text-brand-red p-1 shrink-0">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })()}

          {/* FLASHCARDS */}
          {view === 'flashcards' && (() => {
            const card = flashDeck[flashIndex];
            const pct = flashDeck.length ? Math.round((flashIndex / flashDeck.length) * 100) : 0;
            return (
              <motion.div key="flashcards" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col gap-5 pb-28 px-4 pt-4">

                {/* Header */}
                <div className="flex items-center justify-between">
                  <button onClick={() => flashStage === 'study' ? setFlashStage('pick') : setView('home')} className="text-slate-400 hover:text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm"><ArrowLeft size={20} /></button>
                  <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-2"><Layers size={20} className="text-brand-primary" /> Flashcards</h2>
                  <div className="w-10" />
                </div>

                {/* ESCOLHER TÓPICO */}
                {flashStage === 'pick' && (
                  selectedTrack === 'estudante' ? (
                    <>
                      <div className="relative rounded-[2rem] overflow-hidden shadow-xl" style={{ background: 'linear-gradient(135deg,#7C3AED 0%,#2E1065 100%)' }}>
                        <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)', transform: 'translate(30%,-30%)' }} />
                        <div className="relative z-10 p-6">
                          <p className="text-[10px] font-black text-white/80 uppercase tracking-[0.25em] mb-1">Trilha do Estudante</p>
                          <h3 className="text-2xl font-black text-white tracking-tight leading-tight">Seus Flashcards<br/>Personalizados</h3>
                          <p className="text-white/70 text-sm font-medium mt-2">Crie suas próprias cartas de estudo e teste seus conhecimentos a qualquer momento.</p>
                        </div>
                      </div>

                      {/* Lista de flashcards criados */}
                      {user.customFlashcards.length > 0 ? (
                        <button onClick={startCustomFlashcards} className="group relative w-full text-left rounded-[2rem] overflow-hidden shadow-xl active:scale-[0.98] transition-transform" style={{ background: 'linear-gradient(135deg,#7C3AED 0%,#2E1065 100%)' }}>
                          <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.35) 0%, transparent 70%)', transform: 'translate(30%,-30%)' }} />
                          <div className="relative z-10 p-5 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.15)' }}>
                              <User size={22} className="text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-black text-white tracking-tight leading-none mb-1">Estudar Meus Flashcards</h3>
                              <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>{user.customFlashcards.length} {user.customFlashcards.length === 1 ? 'carta criada' : 'cartas criadas'} por você</p>
                            </div>
                            <ChevronRight size={18} className="text-white/70 shrink-0 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </button>
                      ) : (
                        <div className="flex flex-col items-center justify-center p-8 bg-white border-2 border-dashed border-slate-200 rounded-3xl text-center shadow-sm">
                          <Layers className="text-slate-300 mb-3" size={40} />
                          <p className="text-sm font-black text-slate-700">Nenhum flashcard criado ainda</p>
                          <p className="text-xs text-slate-500 mt-1">Toque no botão abaixo para criar suas cartas personalizadas de estudo.</p>
                        </div>
                      )}

                      {/* Criar um flashcard próprio */}
                      <button
                        onClick={() => {
                          setNewFlashSubject(selectedTrack === 'estudante' ? 'Anatomia' : 'Clínica Médica');
                          setShowCreateFlashcard(true);
                        }}
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-dashed border-slate-300 text-slate-500 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/5 transition-colors font-black text-sm uppercase tracking-widest"
                      >
                        <Plus size={18} /> Criar meu flashcard
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="relative rounded-[2rem] overflow-hidden shadow-xl" style={{ background: 'linear-gradient(135deg,#00a7e1 0%,#00658a 100%)' }}>
                        <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)', transform: 'translate(30%,-30%)' }} />
                        <div className="relative z-10 p-6">
                          <p className="text-[10px] font-black text-white/80 uppercase tracking-[0.25em] mb-1">Memorize com cartas</p>
                          <h3 className="text-2xl font-black text-white tracking-tight leading-tight">Escolha um tópico<br/>para estudar</h3>
                          <p className="text-white/70 text-sm font-medium mt-2">Veja a pergunta, tente lembrar e vire a carta. O que você não souber volta no fim.</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2.5">
                        {['Clínica Médica','Cirurgia Geral','Pediatria','Ginecologia & Obstetrícia','Medicina de Família/SUS','Cardiologia','Pneumologia','Gastroenterologia','Infectologia','Endocrinologia','Neurologia','Reumatologia'].filter(s => QUESTIONS.some(q => q.subject === s)).map((s, i) => {
                          const ic = SUBJECT_ICONS[s] || {}; const Ic = ic.icon;
                          return (
                            <motion.button key={s} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03, type: 'spring', stiffness: 300, damping: 20 }} whileHover={{ y: -3 }} whileTap={{ scale: 0.94 }} onClick={() => startFlashcards(s as Subject)} className="flex flex-col items-center gap-2 p-3.5 rounded-2xl border-2 border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg transition-colors">
                              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-md overflow-hidden" style={{ background: ic.ringColor || '#00658a' }}>
                                {ic.image ? <img src={ic.image} alt="" className="w-6 h-6 object-contain" referrerPolicy="no-referrer" /> : Ic ? <Ic size={20} className="text-white" /> : null}
                              </div>
                              <span className="text-[11px] font-black text-slate-700 text-center leading-tight">{s}</span>
                            </motion.button>
                          );
                        })}
                      </div>

                      {/* Meus flashcards — criados pela própria pessoa */}
                      {user.customFlashcards.length > 0 && (
                        <button onClick={startCustomFlashcards} className="group relative w-full text-left rounded-[2rem] overflow-hidden shadow-xl active:scale-[0.98] transition-transform" style={{ background: 'linear-gradient(135deg,#7C3AED 0%,#2E1065 100%)' }}>
                          <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.35) 0%, transparent 70%)', transform: 'translate(30%,-30%)' }} />
                          <div className="relative z-10 p-5 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.15)' }}>
                              <User size={22} className="text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-black text-white tracking-tight leading-none mb-1">Meus Flashcards</h3>
                              <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>{user.customFlashcards.length} {user.customFlashcards.length === 1 ? 'carta criada' : 'cartas criadas'} por você</p>
                            </div>
                            <ChevronRight size={18} className="text-white/70 shrink-0 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </button>
                      )}

                      {/* Criar um flashcard próprio */}
                      <button
                        onClick={() => {
                          setNewFlashSubject(selectedTrack === 'estudante' ? 'Anatomia' : 'Clínica Médica');
                          setShowCreateFlashcard(true);
                        }}
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-dashed border-slate-300 text-slate-500 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/5 transition-colors font-black text-sm uppercase tracking-widest"
                      >
                        <Plus size={18} /> Criar meu flashcard
                      </button>
                    </>
                  )
                )}

                {/* ESTUDAR */}
                {flashStage === 'study' && card && (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2.5 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div className="h-full bg-brand-primary rounded-full" animate={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-xs font-black text-slate-500">{flashIndex + 1}/{flashDeck.length}</span>
                    </div>
                    {flashReview && (
                      <div className="flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-brand-orange/10 border border-brand-orange/20">
                        <RotateCw size={13} className="text-brand-orange" />
                        <span className="text-[11px] font-black text-brand-orange uppercase tracking-widest">Revisão · cartas que você não soube</span>
                      </div>
                    )}

                    {/* Carta que vira */}
                    <div style={{ perspective: 1200 }} className="w-full">
                      <motion.div onClick={() => !flashFlipped && setFlashFlipped(true)} animate={{ rotateY: flashFlipped ? 180 : 0 }} transition={{ duration: 0.5 }} style={{ transformStyle: 'preserve-3d' }} className="relative w-full h-[360px] cursor-pointer">
                        {/* Frente */}
                        <div className="absolute inset-0 rounded-[2rem] border border-slate-200 shadow-xl bg-white p-6 flex flex-col" style={{ backfaceVisibility: 'hidden' }}>
                          <span className="self-start text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-brand-primary/10 mb-4">{flashSubject}</span>
                          <div className="flex-1 overflow-y-auto hide-scrollbar">
                            <p className="text-slate-900 font-bold text-lg leading-relaxed">{card.text}</p>
                          </div>
                          <p className="text-center text-slate-400 text-[11px] font-black uppercase tracking-widest mt-4 animate-pulse">Toque para ver a resposta</p>
                        </div>
                        {/* Verso */}
                        <div className="absolute inset-0 rounded-[2rem] shadow-xl p-6 flex flex-col" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: 'linear-gradient(160deg,#f0fdf4 0%,#ffffff 60%)', border: '1px solid rgba(18,180,73,0.3)' }}>
                          <span className="self-start text-[10px] font-black text-brand-green uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-brand-green/10 mb-3">Resposta</span>
                          <p className="text-brand-green font-black text-lg leading-snug mb-3">
                            {card.options && card.options.length > 1 ? `${String.fromCharCode(65 + card.correctIndex)}) ${card.options[card.correctIndex]}` : (card.options?.[0] || '')}
                          </p>
                          <div className="flex-1 overflow-y-auto hide-scrollbar">
                            <p className="reading text-slate-600 text-[15px]">{card.explanation || 'Sem explicação disponível para esta carta.'}</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Ações */}
                    {!flashFlipped ? (
                      <button onClick={() => setFlashFlipped(true)} className="w-full py-4 bg-brand-primary text-white font-black rounded-2xl uppercase tracking-widest text-sm shadow-lg active:scale-95 transition-transform">Ver resposta</button>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        <button onClick={() => rateFlash(false)} className="py-4 rounded-2xl font-black uppercase tracking-widest text-sm border-2 border-brand-red/30 text-brand-red bg-brand-red/5 active:scale-95 transition-transform flex items-center justify-center gap-2"><XCircle size={18} /> Não sabia</button>
                        <button onClick={() => rateFlash(true)} className="py-4 rounded-2xl font-black uppercase tracking-widest text-sm text-white bg-brand-green active:scale-95 transition-transform flex items-center justify-center gap-2"><CheckCircle2 size={18} /> Sabia</button>
                      </div>
                    )}
                  </>
                )}

                {/* RESUMO */}
                {flashStage === 'done' && (
                  <>
                    <div className="bg-gradient-to-br from-brand-primary to-[#00384e] rounded-[2.5rem] p-8 text-center shadow-xl text-white">
                      <div className="w-20 h-20 rounded-3xl bg-white/15 flex items-center justify-center mx-auto mb-4"><Layers size={40} /></div>
                      <h2 className="text-3xl font-black tracking-tight mb-1">Baralho concluído!</h2>
                      <p className="text-white/70 font-medium">{flashSubject}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white rounded-2xl p-5 text-center border border-slate-200 shadow-sm">
                        <p className="text-3xl font-black text-brand-green">{flashKnown}</p>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Você sabia</p>
                      </div>
                      <div className="bg-white rounded-2xl p-5 text-center border border-slate-200 shadow-sm">
                        <p className="text-3xl font-black text-brand-orange">{flashUnknown.length}</p>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Revisou</p>
                      </div>
                    </div>
                    <button onClick={() => { if (flashSubject === 'Meus Flashcards') { startCustomFlashcards(); } else { startFlashcards(flashSubject as Subject); } }} className="w-full py-4 bg-brand-primary text-white font-black rounded-2xl uppercase tracking-widest text-sm shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"><RotateCw size={18} /> Estudar de novo</button>
                    <button onClick={() => setFlashStage('pick')} className="w-full py-4 bg-white text-slate-700 font-black rounded-2xl uppercase tracking-widest text-sm border border-slate-200 active:scale-95 transition-transform">Outro tópico</button>
                  </>
                )}
              </motion.div>
            );
          })()}

          {/* DESAFIOS HUB */}
          {view === 'desafios' && (() => {
            const uid = currentUser?.uid;
            const friendList = friendships.filter(f => f.status === 'accepted').map(f =>
              f.requesterUid === uid ? { uid: f.addresseeUid, name: f.addresseeName } : { uid: f.requesterUid, name: f.requesterName });
            const myWins = battles.filter(b => b.status === 'finished' && b.winnerUid === uid).length;
            const totalDone = battles.filter(b => b.status === 'finished').length;
            const pendingChallenges = battles.filter(b => b.opponentUid === uid && b.opponentScore == null).length;
            const ranking = [
              { uid: uid || 'me', name: 'Você', wins: Math.max(myWins, winsMap[uid || '']?.wins || 0), me: true },
              ...friendList.map(fr => ({ uid: fr.uid, name: winsMap[fr.uid]?.name || fr.name, wins: winsMap[fr.uid]?.wins || 0, me: false })),
            ].sort((a, b) => b.wins - a.wins);
            const medal = ['#f1c100', '#9ca3af', '#b45309'];
            return (
              <motion.div key="desafios" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col gap-5 pb-28 px-4 pt-4">

                {/* Hero + painel de estatísticas */}
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl" style={{ background: '#0D1628' }}>
                  <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,167,225,0.22) 0%, transparent 70%)', transform: 'translate(30%,-30%)' }} />
                  <div className="absolute bottom-0 left-0 w-52 h-52 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(241,193,0,0.12) 0%, transparent 70%)', transform: 'translate(-30%,30%)' }} />
                  <div className="relative z-10 p-6">
                    <div className="flex items-center justify-between mb-5">
                      <button onClick={() => setView('home')} className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors">
                        <ArrowLeft size={18} />
                      </button>
                      <span className="text-[9px] font-black uppercase tracking-[0.25em] px-3 py-1.5 rounded-full" style={{ color: '#7cd0ff', background: 'rgba(0,167,225,0.15)', border: '1px solid rgba(0,167,225,0.25)' }}>Modo Competitivo</span>
                    </div>
                    <div className="flex items-center gap-3 mb-5">
                      <motion.div animate={{ rotate: [0, -12, 12, -8, 0] }} transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 3 }} className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#00a7e1 0%,#00658a 100%)', boxShadow: '0 4px 20px rgba(0,167,225,0.5)' }}>
                        <Swords size={24} className="text-white" />
                      </motion.div>
                      <div>
                        <h2 className="text-3xl font-black text-white tracking-tighter leading-none">Desafios</h2>
                        <p className="text-[11px] font-bold mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Compita e aprenda com os colegas</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: 'Vitórias', value: myWins, color: '#f1c100', icon: Trophy },
                        { label: 'Batalhas', value: totalDone, color: '#7cd0ff', icon: Swords },
                        { label: 'Te chamaram', value: pendingChallenges, color: '#12b449', icon: Users },
                      ].map((s, i) => (
                        <motion.div key={s.label} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 + i * 0.08 }} className="rounded-2xl px-2 py-3 text-center border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.07)' }}>
                          <s.icon size={15} className="mx-auto mb-1" style={{ color: s.color }} />
                          <p className="text-2xl font-black text-white leading-none">{s.value}</p>
                          <p className="text-[9px] font-bold uppercase tracking-widest mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card A — Diagnóstico (Doctordle) */}
                <button onClick={() => setView('doctordle')} className="group relative w-full text-left rounded-[2rem] overflow-hidden shadow-xl active:scale-[0.98] transition-transform" style={{ background: 'linear-gradient(135deg,#00a7e1 0%,#00658a 70%)' }}>
                  <div className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,167,225,0.35) 0%, transparent 70%)', transform: 'translate(35%,-35%)' }} />
                  <motion.div initial={{ x: '-120%' }} animate={{ x: '220%' }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent skew-x-12 pointer-events-none" />
                  <div className="relative z-10 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#00c2ff 0%,#00a7e1 100%)', boxShadow: '0 6px 20px rgba(0,167,225,0.5)' }}>
                        <Brain size={26} className="text-white" />
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full text-white" style={{ background: 'rgba(255,255,255,0.12)' }}>Diagnóstico</span>
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight mb-1.5">🩺 Diagnóstico</h3>
                    <p className="text-sm leading-snug mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>Descubra o diagnóstico em até 6 tentativas. A cada erro, uma <span className="text-white font-bold">nova pista clínica</span> é revelada. Vista o jaleco de detetive!</p>
                    <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest" style={{ color: '#7cd0ff' }}>
                      Começar <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>

                {/* Card B — Batalha 1x1 */}
                <button onClick={() => setView('amigos')} className="group relative w-full text-left rounded-[2rem] overflow-hidden shadow-xl active:scale-[0.98] transition-transform" style={{ background: 'linear-gradient(135deg,#00658a 0%,#0D1628 70%)' }}>
                  <div className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,167,225,0.3) 0%, transparent 70%)', transform: 'translate(35%,-35%)' }} />
                  <motion.div initial={{ x: '-120%' }} animate={{ x: '220%' }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent skew-x-12 pointer-events-none" />
                  <div className="relative z-10 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#00a7e1 0%,#00658a 100%)', boxShadow: '0 6px 20px rgba(0,167,225,0.5)' }}>
                        <Swords size={26} className="text-white" />
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full text-white" style={{ background: 'rgba(255,255,255,0.12)' }}>1 vs 1</span>
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight mb-1.5">Batalha com amigo</h3>
                    <p className="text-sm leading-snug mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>Desafie um amigo no tópico que escolher. Quem acerta mais leva <span className="text-white font-bold">XP + 1 coração</span>.</p>
                    <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest" style={{ color: '#7cd0ff' }}>
                      Jogar agora <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>

                {/* Card — Flashcards */}
                <button onClick={() => { setFlashStage('pick'); setView('flashcards'); }} className="group relative w-full text-left rounded-[2rem] overflow-hidden shadow-xl active:scale-[0.98] transition-transform" style={{ background: 'linear-gradient(135deg,#7C3AED 0%,#2E1065 70%)' }}>
                  <div className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.35) 0%, transparent 70%)', transform: 'translate(35%,-35%)' }} />
                  <motion.div initial={{ x: '-120%' }} animate={{ x: '220%' }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent skew-x-12 pointer-events-none" />
                  <div className="relative z-10 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#A78BFA 0%,#7C3AED 100%)', boxShadow: '0 6px 20px rgba(124,58,237,0.5)' }}>
                        <Layers size={26} className="text-white" />
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full text-white" style={{ background: 'rgba(255,255,255,0.12)' }}>Memorização</span>
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight mb-1.5">Flashcards</h3>
                    <p className="text-sm leading-snug mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>Memorize conceitos rápido com cartas que viram — revise no seu ritmo e reforce o que errar.</p>
                    <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest" style={{ color: '#c4b5fd' }}>
                      Estudar agora <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>

                {/* Card C — Sala em grupo */}
                <div className="bg-white rounded-[2rem] p-6 border border-slate-200/80 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,101,138,0.12) 0%, transparent 70%)', transform: 'translate(35%,-35%)' }} />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#00a7e1 0%,#00658a 100%)', boxShadow: '0 6px 20px rgba(0,101,138,0.45)' }}>
                        <Users size={26} className="text-white" />
                      </motion.div>
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full text-brand-primary inline-flex items-center gap-1.5" style={{ background: 'rgba(0,101,138,0.1)' }}>
                        <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Ao vivo
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-1.5">Sala em grupo</h3>
                    <p className="text-sm text-slate-500 leading-snug mb-5">Responda ao vivo com vários amigos — todos na mesma pergunta e <span className="text-slate-900 font-bold">placar em tempo real</span>.</p>
                    <motion.button whileTap={{ scale: 0.97 }} onClick={() => setRoomPickTopic(true)} className="group relative w-full overflow-hidden py-4 rounded-2xl flex items-center justify-center gap-2 text-white font-black uppercase tracking-widest text-sm mb-4" style={{ background: 'linear-gradient(135deg,#00a7e1 0%,#00658a 100%)', boxShadow: '0 8px 24px rgba(0,101,138,0.35)' }}>
                      <motion.div initial={{ x: '-120%' }} animate={{ x: '220%' }} transition={{ duration: 2.6, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                      <Plus size={18} className="relative z-10" /> <span className="relative z-10">Criar sala</span>
                    </motion.button>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-px flex-1 bg-slate-200" />
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">ou entre em uma sala</span>
                      <div className="h-px flex-1 bg-slate-200" />
                    </div>
                    <div className="flex gap-2">
                      <input value={joinCodeInput} onChange={e => setJoinCodeInput(e.target.value.replace(/\D/g, '').slice(0, 6))} placeholder="000000" inputMode="numeric" className="flex-1 px-4 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-brand-primary outline-none font-black text-slate-900 tracking-[0.4em] text-center text-lg bg-slate-50 transition-colors" />
                      <button onClick={joinGroupRoom} className="px-6 rounded-2xl bg-slate-900 text-white font-black text-sm active:scale-95 transition-transform">Entrar</button>
                    </div>
                  </div>
                </div>

                {/* Ranking de vitórias */}
                <div className="bg-white rounded-[2rem] p-5 border border-slate-200/80 shadow-xl">
                  <div className="flex items-center justify-between mb-4 px-1">
                    <div className="flex items-center gap-2">
                      <Trophy size={18} style={{ color: '#f1c100' }} fill="currentColor" />
                      <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Ranking de vitórias</h3>
                    </div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{ranking.length} {ranking.length === 1 ? 'jogador' : 'jogadores'}</span>
                  </div>
                  {ranking.length <= 1 && (
                    <p className="text-xs text-slate-400 font-medium px-1 pb-2">Adicione amigos e vença batalhas para subir no ranking. 🏆</p>
                  )}
                  <div className="space-y-1.5">
                    {ranking.map((p, i) => (
                      <motion.div key={p.uid} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                        className={`flex items-center gap-3 py-2.5 px-3 rounded-2xl ${p.me ? 'bg-brand-primary/5 border border-brand-primary/20' : ''}`}>
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0" style={i < 3 ? { background: medal[i], color: '#fff' } : { background: '#f1f5f9', color: '#94a3b8' }}>{i + 1}</div>
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black shrink-0 text-white" style={{ background: p.me ? '#00658a' : '#64748b' }}>{(p.name || '?').charAt(0).toUpperCase()}</div>
                        <span className="font-black text-slate-900 flex-1 truncate">{p.name}{p.me && <span className="text-[10px] text-brand-primary ml-2 uppercase tracking-widest">você</span>}</span>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="font-black text-lg text-slate-900">{p.wins}</span>
                          <Trophy size={14} style={{ color: '#f1c100' }} fill="currentColor" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Modal escolher tópico da sala */}
                <AnimatePresence>
                  {roomPickTopic && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[200] flex items-end sm:items-center justify-center p-4" onClick={() => setRoomPickTopic(false)}>
                      <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 60, opacity: 0 }} className="bg-white w-full max-w-sm rounded-[2.5rem] p-6 shadow-2xl max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.25em] mb-1">Sala em grupo</p>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-1">Escolha o tópico</h3>
                        <p className="text-xs text-slate-400 font-medium mb-5">10 perguntas ao vivo com a galera</p>
                        <div className="grid grid-cols-2 gap-2.5">
                          {['Clínica Médica','Cirurgia Geral','Pediatria','Ginecologia & Obstetrícia','Medicina de Família/SUS','Cardiologia','Pneumologia','Gastroenterologia','Infectologia','Endocrinologia','Neurologia','Reumatologia'].filter(s => QUESTIONS.some(q => q.subject === s)).map((s, i) => {
                            const ic = SUBJECT_ICONS[s] || {};
                            const Ic = ic.icon;
                            return (
                              <motion.button key={s} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03, type: 'spring', stiffness: 300, damping: 20 }} whileHover={{ y: -3 }} whileTap={{ scale: 0.94 }} onClick={() => createGroupRoom(s as Subject)} className="flex flex-col items-center gap-2 p-3.5 rounded-2xl border-2 border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 hover:shadow-lg transition-colors">
                                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-md overflow-hidden" style={{ background: ic.ringColor || '#00658a' }}>
                                  {ic.image ? <img src={ic.image} alt="" className="w-6 h-6 object-contain" referrerPolicy="no-referrer" /> : Ic ? <Ic size={20} className="text-white" /> : null}
                                </div>
                                <span className="text-[11px] font-black text-slate-700 text-center leading-tight">{s}</span>
                              </motion.button>
                            );
                          })}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })()}

          {/* SALA (KAHOOT) */}
          {view === 'sala' && (() => {
            const uid = currentUser?.uid;
            if (!room) return (
              <motion.div key="sala-load" className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <div className="w-10 h-10 border-4 border-brand-green border-t-transparent rounded-full animate-spin" />
                <p className="text-slate-400 font-bold">Conectando à sala...</p>
                <button onClick={leaveRoom} className="text-slate-400 font-black uppercase text-xs tracking-widest">Voltar</button>
              </motion.div>
            );
            const isHost = room.hostUid === uid;
            const players = Object.entries(room.players).map(([id, p]) => ({ id, ...(p as { name: string; score: number; lastAnsweredIndex: number }) })).sort((a, b) => b.score - a.score);
            const cq = QUESTIONS.find(q => q.id === room.questionIds[room.currentIndex]);
            const me = uid ? room.players[uid] : undefined;
            const answered = !!me && me.lastAnsweredIndex === room.currentIndex;
            const timeLeft = room.questionStartAt ? Math.max(0, Math.ceil(ROOM_SECONDS - (roomNow - room.questionStartAt) / 1000)) : ROOM_SECONDS;
            return (
              <motion.div key="sala" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-5 pb-28 px-4 pt-4">
                <div className="flex items-center justify-between">
                  <button onClick={leaveRoom} className="text-slate-400 hover:text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm"><ArrowLeft size={20} /></button>
                  <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">{room.subject}</span>
                  <div className="w-10" />
                </div>

                {/* LOBBY */}
                {room.state === 'lobby' && (
                  <>
                    <div className="bg-brand-green rounded-[2.5rem] p-8 text-center shadow-xl">
                      <p className="text-[11px] font-black uppercase tracking-widest text-white/70 mb-1">Código da sala</p>
                      <p className="text-5xl font-black text-white tracking-[0.3em] mb-4">{room.code}</p>
                      <button onClick={() => { try { navigator.clipboard.writeText(room.code); setSocialToast('Código copiado!'); setTimeout(() => setSocialToast(''), 2000); } catch { /* noop */ } }} className="px-5 py-2.5 bg-white/15 text-white font-black rounded-xl text-xs border border-white/20 inline-flex items-center gap-2"><Copy size={14} /> Copiar código</button>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest px-2">Na sala ({players.length})</p>
                      {players.map(p => (
                        <div key={p.id} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-brand-green/10 flex items-center justify-center font-black text-brand-green">{p.name.charAt(0).toUpperCase()}</div>
                          <span className="font-black text-slate-900">{p.name}{p.id === room.hostUid && <span className="text-[10px] text-brand-green ml-2 uppercase tracking-widest">host</span>}</span>
                        </div>
                      ))}
                    </div>
                    {isHost ? (
                      <button onClick={roomHostStart} disabled={players.length < 1} className="w-full py-4 bg-brand-primary text-white font-black rounded-2xl uppercase tracking-widest text-sm shadow-lg">Iniciar jogo</button>
                    ) : (
                      <p className="text-center text-slate-400 font-bold text-sm py-4">Aguardando o host iniciar...</p>
                    )}
                  </>
                )}

                {/* QUESTION */}
                {room.state === 'question' && cq && (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-slate-500">Pergunta {room.currentIndex + 1}/{room.questionIds.length}</span>
                      <span className={`px-3 py-1 rounded-xl font-black text-sm ${timeLeft <= 5 ? 'bg-red-50 text-red-600' : 'bg-brand-green/10 text-brand-green'}`}>{timeLeft}s</span>
                    </div>
                    <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-xl">
                      <h3 className="reading text-lg font-semibold text-slate-900">{cq.text}</h3>
                    </div>
                    <div className="space-y-3">
                      {cq.options.map((opt, idx) => (
                        <button key={idx} onClick={() => roomAnswer(idx)} disabled={answered || timeLeft <= 0}
                          className={`w-full text-left p-4 rounded-2xl border-2 font-bold flex items-center gap-4 transition-all ${
                            roomSelectedOption === idx ? 'border-brand-primary bg-cyan-50 text-brand-primary' :
                            answered ? 'border-slate-200/50 opacity-50' : 'border-slate-200 hover:border-brand-primary/50 text-slate-700'}`}>
                          <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-black text-sm shrink-0">{String.fromCharCode(65 + idx)}</span>
                          <span className="text-sm leading-tight">{opt}</span>
                        </button>
                      ))}
                    </div>
                    {answered && <p className="text-center text-brand-green font-black text-sm">Resposta enviada! Aguarde os demais.</p>}
                    {isHost && (
                      <button onClick={roomHostReveal} className="w-full py-3.5 bg-slate-900 text-white font-black rounded-2xl uppercase tracking-widest text-xs">Revelar resposta</button>
                    )}
                  </>
                )}

                {/* REVEAL */}
                {room.state === 'reveal' && cq && (
                  <>
                    <div className="bg-brand-green/5 border-2 border-brand-green/30 p-6 rounded-[2rem]">
                      <p className="text-[11px] font-black text-brand-green uppercase tracking-widest mb-2">Resposta correta</p>
                      <p className="font-black text-slate-900 mb-3">{String.fromCharCode(65 + cq.correctIndex)}) {cq.options[cq.correctIndex]}</p>
                      <p className="reading text-slate-500 text-[15px] italic">{cq.explanation}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest px-2">Placar</p>
                      {players.map((p, i) => (
                        <div key={p.id} className={`rounded-2xl p-4 border flex items-center justify-between ${i === 0 ? 'bg-amber-50 border-amber-200' : 'bg-white border-slate-200'}`}>
                          <div className="flex items-center gap-3"><span className="font-black text-slate-400 w-5">{i + 1}</span><span className="font-black text-slate-900">{p.name}</span></div>
                          <span className="font-black text-brand-primary">{p.score}</span>
                        </div>
                      ))}
                    </div>
                    {isHost && (
                      <button onClick={roomHostNext} className="w-full py-4 bg-brand-primary text-white font-black rounded-2xl uppercase tracking-widest text-sm">{room.currentIndex + 1 >= room.questionIds.length ? 'Ver resultado final' : 'Próxima pergunta'}</button>
                    )}
                    {!isHost && <p className="text-center text-slate-400 font-bold text-sm py-2">Aguardando o host...</p>}
                  </>
                )}

                {/* FINISHED */}
                {room.state === 'finished' && (
                  <>
                    <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-[2.5rem] p-8 text-center shadow-xl">
                      <Trophy size={48} fill="currentColor" className="text-white mx-auto mb-3" />
                      <h2 className="text-2xl font-black text-white uppercase tracking-tight">{players[0]?.name} venceu! 🎉</h2>
                    </div>
                    <div className="space-y-2">
                      {players.map((p, i) => (
                        <div key={p.id} className={`rounded-2xl p-4 border-2 flex items-center justify-between ${i === 0 ? 'bg-amber-50 border-amber-300' : 'bg-white border-slate-200'}`}>
                          <div className="flex items-center gap-3"><span className="font-black text-slate-400 w-5">{i + 1}º</span><span className="font-black text-slate-900">{p.name}</span></div>
                          <span className="font-black text-brand-primary text-lg">{p.score}</span>
                        </div>
                      ))}
                    </div>
                    <button onClick={leaveRoom} className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl uppercase tracking-widest text-sm">Sair da sala</button>
                  </>
                )}
              </motion.div>
            );
          })()}

          {/* AMIGOS & BATALHAS VIEW */}
          {view === 'amigos' && (() => {
            const uid = currentUser?.uid;
            const friends = friendships.filter(f => f.status === 'accepted').map(f =>
              f.requesterUid === uid ? { uid: f.addresseeUid, name: f.addresseeName } : { uid: f.requesterUid, name: f.requesterName });
            const incoming = friendships.filter(f => f.status === 'pending' && f.addresseeUid === uid);
            const outgoing = friendships.filter(f => f.status === 'pending' && f.requesterUid === uid);
            const toPlay = battles.filter(b => b.opponentUid === uid && b.opponentScore == null);
            const waiting = battles.filter(b => b.status === 'pending' && (
              (b.challengerUid === uid && b.challengerScore != null && b.opponentScore == null) ||
              (b.opponentUid === uid && b.opponentScore != null && b.challengerScore == null)));
            const finished = battles.filter(b => b.status === 'finished').slice(0, 8);
            const copy = (txt: string, msg: string) => { try { navigator.clipboard.writeText(txt); setSocialToast(msg); setTimeout(() => setSocialToast(''), 2500); } catch { /* noop */ } };
            return (
              <motion.div key="amigos" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col gap-5 pb-28 px-4 pt-4">
                <div className="flex items-center justify-between">
                  <button onClick={() => setView('home')} className="text-slate-400 hover:text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm"><ArrowLeft size={20} /></button>
                  <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-2"><Swords size={20} className="text-brand-primary" /> Batalhas</h2>
                  <div className="w-10" />
                </div>

                {/* Link da batalha recém-criada */}
                {pendingBattleLink && (
                  <div className="bg-brand-primary/10 border-2 border-brand-primary/20 rounded-[2rem] p-5">
                    <p className="text-[11px] font-black text-brand-primary uppercase tracking-widest mb-2">Batalha criada! Envie para o amigo</p>
                    <div className="flex gap-2">
                      <button onClick={() => copy(pendingBattleLink, 'Link copiado!')} className="flex-1 py-3 bg-brand-primary text-white font-black rounded-xl text-sm flex items-center justify-center gap-2"><Link size={16} /> Copiar link</button>
                      <button onClick={() => setPendingBattleLink(null)} className="px-4 py-3 bg-white text-slate-500 font-black rounded-xl text-sm border border-slate-200">OK</button>
                    </div>
                  </div>
                )}

                {/* Meu código */}
                <div className="bg-slate-900 rounded-[2rem] p-6 text-center shadow-xl">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">Seu código de amigo</p>
                  <p className="text-3xl font-black text-white tracking-widest mb-4">{friendCode || '···'}</p>
                  <div className="flex gap-2">
                    <button onClick={() => copy(friendCode, 'Código copiado!')} className="flex-1 py-2.5 bg-white/10 text-white font-black rounded-xl text-xs border border-white/15 flex items-center justify-center gap-2"><Copy size={14} /> Código</button>
                    <button onClick={() => copy(`${window.location.origin}${window.location.pathname}?add=${friendCode}`, 'Link de convite copiado!')} className="flex-1 py-2.5 bg-white/10 text-white font-black rounded-xl text-xs border border-white/15 flex items-center justify-center gap-2"><Link size={14} /> Link</button>
                  </div>
                </div>

                {/* Adicionar amigo */}
                <div className="bg-white rounded-[2rem] p-5 border border-slate-200 shadow-sm">
                  <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-3">Adicionar amigo por código</p>
                  <div className="flex gap-2">
                    <input value={addFriendInput} onChange={e => setAddFriendInput(e.target.value.toUpperCase())} placeholder="MED-XXXXX" className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-primary outline-none font-black text-slate-900 tracking-widest text-sm" />
                    <button onClick={handleAddFriend} className="px-5 py-3 bg-brand-primary text-white font-black rounded-xl text-sm">Enviar</button>
                  </div>
                  {addFriendMsg && <p className="text-xs font-bold text-slate-500 mt-2">{addFriendMsg}</p>}
                </div>

                {/* Pedidos recebidos */}
                {incoming.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest px-2">Pedidos de amizade</p>
                    {incoming.map(f => (
                      <div key={f.id} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center justify-between">
                        <span className="font-black text-slate-900">{f.requesterName}</span>
                        <button onClick={() => acceptFriend(f.id)} className="px-4 py-2 bg-brand-green text-white font-black rounded-xl text-xs uppercase tracking-widest">Aceitar</button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Batalhas: sua vez de jogar */}
                {toPlay.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-[11px] font-black text-brand-red uppercase tracking-widest px-2">Sua vez de jogar!</p>
                    {toPlay.map(b => (
                      <div key={b.id} className="bg-brand-red/5 rounded-2xl p-4 border-2 border-brand-red/20 shadow-sm flex items-center justify-between">
                        <div>
                          <p className="font-black text-slate-900">{b.challengerName} te desafiou</p>
                          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{b.subject}</p>
                        </div>
                        <button onClick={() => openBattlePlay(b, 'opponent')} className="px-4 py-2 bg-brand-red text-white font-black rounded-xl text-xs uppercase tracking-widest flex items-center gap-1.5"><Swords size={14} /> Jogar</button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Amigos (desafiar) */}
                <div className="space-y-2">
                  <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest px-2">Amigos ({friends.length})</p>
                  {friends.length === 0 && <p className="text-sm text-slate-400 font-medium px-2">Adicione amigos pelo código para começar a batalhar.</p>}
                  {friends.map(fr => (
                    <div key={fr.uid} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center font-black text-brand-primary">{fr.name.charAt(0).toUpperCase()}</div>
                        <span className="font-black text-slate-900">{fr.name}</span>
                      </div>
                      <button onClick={() => setChallengeFriend(fr)} className="px-4 py-2 bg-brand-primary text-white font-black rounded-xl text-xs uppercase tracking-widest flex items-center gap-1.5"><Swords size={14} /> Desafiar</button>
                    </div>
                  ))}
                  {outgoing.map(f => (
                    <div key={f.id} className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex items-center justify-between opacity-70">
                      <span className="font-bold text-slate-500">{f.addresseeName}</span>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Convite enviado</span>
                    </div>
                  ))}
                </div>

                {/* Aguardando amigo */}
                {waiting.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-[11px] font-black text-amber-500 uppercase tracking-widest px-2">Aguardando o amigo jogar</p>
                    {waiting.map(b => (
                      <div key={b.id} className="bg-amber-50 rounded-2xl p-4 border border-amber-200 flex items-center justify-between">
                        <div>
                          <p className="font-black text-slate-900">vs {b.challengerUid === uid ? b.opponentName : b.challengerName}</p>
                          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{b.subject} · você fez {b.challengerUid === uid ? b.challengerScore : b.opponentScore}/{b.questionIds.length}</p>
                        </div>
                        <button onClick={() => copy(`${window.location.origin}${window.location.pathname}?battle=${b.id}`, 'Link copiado!')} className="px-3 py-2 bg-white text-brand-primary font-black rounded-xl text-xs border border-slate-200 flex items-center gap-1.5"><Link size={13} /> Link</button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Finalizadas */}
                {finished.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest px-2">Resultados</p>
                    {finished.map(b => {
                      const meChallenger = b.challengerUid === uid;
                      const myScore = meChallenger ? b.challengerScore : b.opponentScore;
                      const opScore = meChallenger ? b.opponentScore : b.challengerScore;
                      const opName = meChallenger ? b.opponentName : b.challengerName;
                      const won = b.winnerUid === uid;
                      const draw = b.winnerUid == null;
                      return (
                        <div key={b.id} className={`rounded-2xl p-4 border-2 flex items-center justify-between ${draw ? 'bg-slate-50 border-slate-200' : won ? 'bg-brand-green/5 border-brand-green/30' : 'bg-brand-red/5 border-brand-red/20'}`}>
                          <div>
                            <p className={`font-black ${draw ? 'text-slate-600' : won ? 'text-brand-green' : 'text-brand-red'}`}>{draw ? 'Empate' : won ? 'Você venceu! 🏆' : 'Você perdeu'}</p>
                            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">vs {opName} · {b.subject}</p>
                          </div>
                          <span className="font-black text-slate-900 text-lg">{myScore} <span className="text-slate-300">×</span> {opScore}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Modal: escolher tópico da batalha */}
                <AnimatePresence>
                  {challengeFriend && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[200] flex items-end sm:items-center justify-center p-4" onClick={() => setChallengeFriend(null)}>
                      <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 60, opacity: 0 }} className="bg-white w-full max-w-sm rounded-[2.5rem] p-6 shadow-2xl max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <p className="text-[11px] font-black text-brand-primary uppercase tracking-widest mb-1">Desafiar {challengeFriend.name}</p>
                        <h3 className="text-xl font-black text-slate-900 mb-4">Escolha o tópico</h3>
                        <div className="space-y-2">
                          {['Clínica Médica','Cirurgia Geral','Pediatria','Ginecologia & Obstetrícia','Medicina de Família/SUS','Cardiologia','Pneumologia','Gastroenterologia','Infectologia','Endocrinologia','Neurologia','Reumatologia'].filter(s => QUESTIONS.some(q => q.subject === s)).map(s => (
                            <button key={s} onClick={() => createAndPlayBattle(challengeFriend, s as Subject)} className="w-full text-left px-4 py-3 rounded-xl border-2 border-slate-200 hover:border-brand-primary hover:bg-cyan-50 font-black text-slate-700 text-sm transition-all">{s}</button>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })()}

          {view === 'doctordle' && (
            <DoctordleMode onExit={() => setView('desafios')} />
          )}

          {view === 'profile' && (
            <motion.div 
              key="profile"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-8 pb-32"
            >
              <div className="bg-white p-10 rounded-[3rem] border border-slate-200/80 shadow-xl text-center relative overflow-hidden group">
                
                {!isEditingProfile && (
                  <button 
                    onClick={() => {
                      setIsEditingProfile(true);
                      setTempName(user.name);
                    }}
                    className="absolute top-6 right-6 p-3 bg-slate-100 border border-slate-200 text-slate-500 hover:text-brand-primary rounded-xl transition-all shadow-sm"
                  >
                    <Edit2 size={20} />
                  </button>
                )}
                
                <div className="relative inline-block mb-8">
                  <div className="w-32 h-32 bg-slate-100/80 rounded-[2.5rem] flex items-center justify-center text-slate-900 text-5xl font-black shadow-inner overflow-hidden border border-slate-200 group-hover:scale-105 transition-transform">
                    {user.profileImage ? (
                      <img src={user.profileImage} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                      user.name.charAt(0)
                    )}
                  </div>
                  {isEditingProfile ? (
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute -bottom-2 -right-2 bg-brand-primary text-white p-3 rounded-2xl shadow-xl shadow-cyan-600/20 border-2 border-white hover:scale-110 transition-all"
                    >
                      <Camera size={20} />
                    </button>
                  ) : (
                    <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow-lg border border-slate-200">
                      <div className="bg-brand-green w-4 h-4 rounded-full shadow-[0_0_10px_rgba(59,201,137,0.5)]" />
                    </div>
                  )}
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setUser(prev => ({ ...prev, profileImage: reader.result as string }));
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </div>

                <div className="space-y-4 max-w-xs mx-auto">
                  {isEditingProfile ? (
                    <div className="flex gap-2">
                       <input 
                         value={tempName}
                         onChange={(e) => setTempName(e.target.value)}
                         className="flex-1 bg-slate-50 border border-slate-200 text-slate-900 p-3 rounded-xl font-black focus:border-brand-primary outline-none"
                         autoFocus
                       />
                       <button 
                         onClick={() => {
                           setUser(prev => ({ ...prev, name: tempName }));
                           setIsEditingProfile(false);
                         }}
                         className="bg-brand-primary p-3 rounded-xl text-white shadow-lg shadow-cyan-600/20"
                       >
                         <Check size={20} strokeWidth={3} />
                       </button>
                    </div>
                  ) : (
                    <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                      {user.name} {user.level >= 20 && <span className="text-[10px] bg-brand-primary text-white px-2 py-0.5 rounded ml-2 font-black uppercase">Mestre</span>}
                    </h3>
                  )}
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Estudante de Medicina • {selectedTrack === 'estudante' ? 'Trilha Estudante' : 'Trilha Residente'}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10">
                   <div className="bg-slate-100/80 p-6 rounded-2xl border border-slate-200/80 shadow-inner hover:bg-slate-100 transition-colors">
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 leading-none">Nível</div>
                      <div className="text-2xl font-black text-brand-primary leading-none mt-1">{user.level}</div>
                   </div>
                   <div className="bg-slate-100/80 p-6 rounded-2xl border border-slate-200/80 shadow-inner hover:bg-slate-100 transition-colors">
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 leading-none">Total XP</div>
                      <div className="text-2xl font-black text-slate-950 leading-none mt-1">{user.xp.toLocaleString()}</div>
                   </div>
                   <div className="bg-slate-100/80 p-6 rounded-2xl border border-slate-200/80 shadow-inner hover:bg-slate-100 transition-colors">
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 leading-none">Streak</div>
                      <div className="text-2xl font-black text-brand-red leading-none mt-1">{user.streak}</div>
                   </div>
                </div>
              </div>

              {/* Plano / assinatura */}
              <div className="space-y-4">
                <h4 className="text-[12px] font-black text-slate-800 uppercase tracking-[0.2em] px-4">Meu Plano</h4>
                {plan === 'premium' ? (
                  <div
                    className="relative overflow-hidden rounded-[2.5rem] p-6 text-white shadow-xl"
                    style={{ background: 'linear-gradient(135deg,#00a7e1 0%,#00658a 100%)' }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.18)' }}>
                        <Crown size={28} className="text-yellow-300" fill="currentColor" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-black uppercase tracking-tight leading-none mb-1">
                          Premium {planTier === 'residencia' ? 'Residência' : planTier === 'estudante' ? 'Estudante' : ''}
                        </p>
                        <p className="text-[11px] font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>
                          Questões ilimitadas · Renovação mensal automática
                        </p>
                      </div>
                    </div>
                    <a
                      href="https://www.mercadopago.com.br/subscriptions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block w-full text-center rounded-2xl py-3 text-[11px] font-black uppercase tracking-widest transition-colors"
                      style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}
                    >
                      Gerenciar assinatura no Mercado Pago
                    </a>
                  </div>
                ) : (
                  <div className="bg-white rounded-[2.5rem] p-6 border border-slate-200 shadow-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0">
                        <BookOpen size={26} className="text-slate-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-black text-slate-900 uppercase tracking-tight leading-none mb-1">Plano Grátis</p>
                        <p className="text-[11px] text-slate-500 font-medium">
                          {Math.max(0, FREE_DAILY_LIMIT - questionsToday)} de {FREE_DAILY_LIMIT} questões grátis restantes hoje
                        </p>
                      </div>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setPaywallReason('limit')}
                      className="w-full rounded-2xl py-3.5 text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                      style={{ background: 'linear-gradient(135deg,#00a7e1 0%,#00658a 100%)', boxShadow: '0 8px 24px rgba(0,101,138,0.35)' }}
                    >
                      <Crown size={15} className="text-yellow-300" fill="currentColor" /> Conhecer o Premium
                    </motion.button>
                  </div>
                )}
              </div>

              {/* Personalidade do Dr. Quest — muda as falas durante o quiz */}
              <div className="space-y-4">
                <h4 className="text-[12px] font-black text-slate-800 uppercase tracking-[0.2em] px-4">Personalidade do Dr. Quest</h4>
                <div className="bg-white rounded-[2.5rem] p-6 border border-slate-200 shadow-xl">
                  {(() => {
                    const atual = MASCOT_PERSONALITIES.find(p => p.id === user.mascotPersonality) ?? MASCOT_PERSONALITIES[0];
                    const previa = pickPhrase(mascotPhrasesFor(user.mascotPersonality).correct, 'preview');
                    const expr = user.mascotPersonality === 'durao' ? 'confident'
                      : user.mascotPersonality === 'paciente' ? 'focus'
                      : user.mascotPersonality === 'engracado' ? 'cheer' : 'happy';
                    return (
                      <>
                        {/* Prévia: mascote + balão da personalidade atual */}
                        <div className="flex items-center gap-3 mb-5">
                          <Mascot expression={expr} className="w-16 h-16 shrink-0" />
                          <div className="relative flex-1 min-w-0 bg-brand-primary/5 border-2 border-brand-primary/15 rounded-2xl rounded-bl-sm px-4 py-3">
                            <p className="reading text-sm text-slate-700 leading-snug">{previa}</p>
                          </div>
                        </div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 px-1">Escolha o jeito dele</p>
                        <div className="grid grid-cols-2 gap-3">
                          {MASCOT_PERSONALITIES.map(p => {
                            const on = user.mascotPersonality === p.id;
                            return (
                              <button
                                key={p.id}
                                onClick={() => setUser(prev => ({ ...prev, mascotPersonality: p.id }))}
                                className={`text-left p-4 rounded-2xl border-2 transition-all active:scale-95 ${
                                  on ? 'border-brand-primary bg-brand-primary/5 shadow-md' : 'border-slate-200 bg-white hover:border-brand-primary/40'
                                }`}
                              >
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-lg">{p.emoji}</span>
                                  <span className={`text-sm font-black uppercase tracking-tight ${on ? 'text-brand-primary' : 'text-slate-800'}`}>{p.label}</span>
                                  {on && <Check size={14} strokeWidth={4} className="ml-auto text-brand-primary" />}
                                </div>
                                <p className="text-[11px] font-medium text-slate-400 leading-snug">{p.desc}</p>
                              </button>
                            );
                          })}
                        </div>
                        <p className="text-[11px] text-slate-400 font-medium mt-4 leading-relaxed px-1">
                          Personalidade atual: <span className="font-black text-slate-600">{atual.emoji} {atual.label}</span>. As reações dele nas questões mudam conforme a escolha.
                        </p>
                      </>
                    );
                  })()}
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-[12px] font-black text-slate-800 uppercase tracking-[0.2em] px-4">Assinatura e Plano</h4>
                <div className="bg-white rounded-[3rem] p-8 border border-slate-200 shadow-xl flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center text-brand-primary">
                      <Award size={32} />
                    </div>
                    <div>
                      <div className="text-lg font-black text-slate-900 uppercase tracking-tighter">MedQuest Premium</div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                        {(() => {
                          const d = new Date(); d.setFullYear(d.getFullYear() + 1);
                          return `Renovação em ${d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}`;
                        })()}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-slate-400 group-hover:text-brand-primary transition-colors" />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[12px] font-black text-slate-800 uppercase tracking-[0.2em] px-4">Estatísticas</h4>
                <button
                  onClick={() => setView('progress')}
                  className="w-full bg-white rounded-[3rem] p-8 border border-slate-200 shadow-xl flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-primary border border-slate-100">
                      <BarChart3 size={32} />
                    </div>
                    <div>
                      <div className="text-lg font-black text-slate-900 uppercase tracking-tighter">Meu Progresso</div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Heatmap, gráficos e domínio</div>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-slate-400 group-hover:text-brand-primary transition-colors" />
                </button>
              </div>

              <button
                onClick={() => {
                  if (currentUser) localStorage.removeItem(userStorageKey(currentUser.uid));
                  localStorage.removeItem(LAST_UID_KEY);
                  localStorage.removeItem('mq_track');
                  loadedUidRef.current = null;
                  signOut();
                  setView('landing');
                }}
                className="w-full bg-white border border-slate-100 py-8 rounded-[3rem] text-brand-red font-black uppercase tracking-widest hover:bg-brand-red/5 transition-all shadow-xl"
              >
                Sair da Conta
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Benefits Modal */}
        <AnimatePresence>
          {showBenefits && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xl z-[100] flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setShowBenefits(false)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                className="bg-white w-full max-w-lg rounded-[3.5rem] p-10 shadow-2xl border border-slate-100 overflow-hidden relative my-auto"
                onClick={e => e.stopPropagation()}
              >
                
                <button 
                  onClick={() => setShowBenefits(false)}
                  className="absolute top-8 right-8 text-slate-300 hover:text-slate-900 transition-colors bg-slate-50 p-2 rounded-full"
                >
                  <XCircle size={28} />
                </button>

                <div className="text-center mb-10">
                  <div className="w-20 h-20 bg-cyan-50 rounded-[2.5rem] flex items-center justify-center text-brand-primary shadow-inner mx-auto mb-6">
                    <Zap size={40} fill="currentColor" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Vantagens MedQuest</h3>
                  <p className="text-slate-500 font-medium mt-2">Tecnologia a serviço da sua aprovação.</p>
                </div>

                <div className="space-y-6 mb-10">
                  {[
                    { icon: Target, title: 'IA Mentor (Dr. Quest)', desc: 'Análise automática de pontos fracos e sugestão de temas.' },
                    { icon: BookOpen, title: 'Questões Ilimitadas', desc: 'Acesso a mais de 50.000 questões comentadas.' },
                    { icon: Award, title: 'Simulados de Elite', desc: 'Provas reais das maiores bancas do Brasil.' },
                    { icon: Trophy, title: 'Gamificação Progressiva', desc: 'Ganhe XP, suba de liga e mantenha sua rotina.' }
                  ].map((benefit, i) => (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={benefit.title} 
                      className="flex gap-5"
                    >
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-primary shrink-0 border border-slate-100 shadow-sm">
                        <benefit.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{benefit.title}</h4>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button 
                  onClick={() => setShowBenefits(false)}
                  className="w-full py-5 bg-brand-primary text-white rounded-2xl font-black text-sm hover:bg-cyan-700 transition-all uppercase tracking-[0.2em] shadow-xl shadow-cyan-600/30 active:scale-95"
                >
                  Entendi, Tudo Ótimo!
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Avatar Picker */}
        <AnimatePresence>
          {showAvatarPicker && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-end justify-center"
              onClick={() => setShowAvatarPicker(false)}
            >
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                className="bg-white w-full max-w-lg rounded-t-[2.5rem] p-6 pb-10 shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-5" />
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight text-center mb-1">Escolha seu Avatar</h3>
                <p className="text-xs text-slate-400 font-medium text-center mb-5">Selecione sua especialidade favorita</p>
                <div className="grid grid-cols-4 gap-3">
                  {MEDICAL_AVATARS.map(av => (
                    <button
                      key={av.id}
                      onClick={() => { setUserAvatar(av.id); setShowAvatarPicker(false); }}
                      className="flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all active:scale-95"
                      style={userAvatar === av.id ? { background: av.bg, boxShadow: `0 0 0 2px ${av.ring}` } : {}}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm"
                        style={{ background: av.bg }}
                      >
                        {av.emoji}
                      </div>
                      <span className="text-[9px] font-bold text-slate-500 leading-tight text-center">{av.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Criar flashcard próprio */}
          {showCreateFlashcard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-end justify-center"
              onClick={() => setShowCreateFlashcard(false)}
            >
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                className="bg-white w-full max-w-lg rounded-t-[2.5rem] p-6 pb-8 shadow-2xl max-h-[88vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-5" />
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight text-center mb-1">Criar Flashcard</h3>
                <p className="text-xs text-slate-400 font-medium text-center mb-5">Escreva sua própria pergunta e resposta pra memorizar</p>

                <div className="flex flex-col gap-3">
                  <div>
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5 block px-1">Matéria</label>
                    <select
                      value={newFlashSubject}
                      onChange={e => setNewFlashSubject(e.target.value as Subject)}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-brand-primary outline-none font-bold text-slate-900 bg-slate-50 transition-colors"
                    >
                      {(selectedTrack === 'estudante'
                        ? ['Anatomia', 'Fisiologia', 'Bioquímica', 'Histologia', 'Embriologia', 'Microbiologia', 'Imunologia', 'Genética', 'Farmacologia', 'Clínica Médica', 'Clínica Cirúrgica', 'Pediatria', 'Ginecologia & Obstetrícia', 'Medicina de Família/SUS']
                        : ['Clínica Médica', 'Cirurgia Geral', 'Pediatria', 'Ginecologia & Obstetrícia', 'Medicina de Família/SUS', 'Cardiologia', 'Pneumologia', 'Gastroenterologia', 'Infectologia', 'Endocrinologia', 'Neurologia', 'Reumatologia']
                      ).map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5 block px-1">Pergunta (frente da carta)</label>
                    <textarea
                      value={newFlashFront}
                      onChange={e => setNewFlashFront(e.target.value)}
                      placeholder="Ex: Qual a tríade de Charcot?"
                      rows={2}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-brand-primary outline-none font-medium text-slate-900 bg-slate-50 transition-colors resize-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5 block px-1">Resposta (verso da carta)</label>
                    <textarea
                      value={newFlashBack}
                      onChange={e => setNewFlashBack(e.target.value)}
                      placeholder="Ex: Febre, icterícia e dor abdominal"
                      rows={2}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-brand-primary outline-none font-medium text-slate-900 bg-slate-50 transition-colors resize-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5 block px-1">Explicação (opcional)</label>
                    <textarea
                      value={newFlashExplanation}
                      onChange={e => setNewFlashExplanation(e.target.value)}
                      placeholder="Detalhes extras que ajudam a fixar"
                      rows={2}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-brand-primary outline-none font-medium text-slate-900 bg-slate-50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    onClick={saveNewFlashcard}
                    disabled={!newFlashFront.trim() || !newFlashBack.trim()}
                    className="w-full py-4 bg-brand-primary text-white font-black rounded-2xl uppercase tracking-widest text-sm shadow-lg active:scale-95 transition-transform disabled:opacity-40 disabled:active:scale-100 flex items-center justify-center gap-2"
                  >
                    <Plus size={18} /> Adicionar carta
                  </button>
                </div>

                {user.customFlashcards.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 px-1">
                      Suas cartas ({user.customFlashcards.length})
                    </p>
                    <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
                      {[...user.customFlashcards].reverse().map(c => (
                        <div key={c.id} className="flex items-center gap-3 bg-slate-50 rounded-xl px-3.5 py-2.5 border border-slate-100">
                          <div className="flex-1 min-w-0">
                            <p className="text-[9px] font-black text-brand-primary uppercase tracking-widest">{c.subject}</p>
                            <p className="text-xs font-bold text-slate-700 truncate">{c.front}</p>
                          </div>
                          <button onClick={() => deleteCustomFlashcard(c.id)} className="shrink-0 text-slate-300 hover:text-brand-red transition-colors p-1">
                            <XCircle size={18} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toast social / batalha (global) */}
        <AnimatePresence>
          {socialToast && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[300] bg-slate-900 text-white font-black text-sm px-5 py-3 rounded-2xl shadow-2xl max-w-[90vw] text-center"
            >
              {socialToast}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Streak Lost Modal */}
        <AnimatePresence>
          {showStreakLostModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[200] flex items-end sm:items-center justify-center p-4"
              onClick={() => setShowStreakLostModal(false)}
            >
              <motion.div
                initial={{ y: 80, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 80, opacity: 0 }}
                transition={{ type: 'spring', bounce: 0.3 }}
                className="bg-white w-full max-w-sm rounded-[3rem] p-10 shadow-2xl text-center relative overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300" />

                {/* Dr. Quest triste pelo streak perdido */}
                <motion.div
                  initial={{ rotate: -10 }}
                  animate={{ rotate: [0, -8, 8, -6, 6, 0] }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-28 h-28 bg-slate-100 rounded-[2rem] flex items-center justify-center mx-auto mb-6 border-2 border-dashed border-slate-200"
                >
                  <Mascot expression="sad" className="w-24 h-24" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2"
                >
                  Streak Perdido
                </motion.h2>
                <p className="text-slate-500 font-medium mb-1">
                  Seu streak de <span className="font-black text-slate-900">{lostStreakCount} {lostStreakCount === 1 ? 'dia' : 'dias'}</span> acabou.
                </p>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  Você ficou sem vidas. Com o Plano Premium você pode proteger seu streak com um escudo.
                </p>

                <button className="w-full py-4 mb-3 bg-amber-500 text-white font-black rounded-2xl shadow-lg shadow-amber-500/25 flex items-center justify-center gap-3 uppercase tracking-widest text-sm hover:bg-amber-600 transition-all active:scale-95">
                  <Shield size={18} fill="currentColor" />
                  Proteger Streak (Premium)
                </button>
                <button
                  onClick={() => setShowStreakLostModal(false)}
                  className="w-full py-4 bg-slate-100 text-slate-600 font-black rounded-2xl text-sm uppercase tracking-widest hover:bg-slate-200 transition-all active:scale-95"
                >
                  Recomeçar do Zero
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sem corações Modal */}
        <AnimatePresence>
          {showNoHearts && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[200] flex items-end sm:items-center justify-center p-4"
              onClick={() => setShowNoHearts(false)}
            >
              <motion.div
                initial={{ y: 80, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 80, opacity: 0 }}
                transition={{ type: 'spring', bounce: 0.3 }}
                className="bg-white w-full max-w-sm rounded-[3rem] p-10 shadow-2xl text-center relative overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-300 via-brand-red to-red-300" />
                <div className="w-28 h-28 bg-red-50 rounded-[2rem] flex items-center justify-center mx-auto mb-6 border-2 border-red-100 relative">
                  <Mascot expression="worried" className="w-24 h-24" />
                  <div className="absolute -bottom-2 -right-2 w-9 h-9 bg-white rounded-full border border-red-100 shadow-sm flex items-center justify-center">
                    <Heart size={18} className="text-brand-red" fill="currentColor" />
                  </div>
                </div>
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">
                  Sem corações
                </h2>
                <p className="text-slate-500 font-medium mb-1">
                  Você usou seus {MAX_HEARTS} corações de hoje.
                </p>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  Eles se recarregam amanhã. Seu streak continua seguro — volte para manter a ofensiva! 🔥
                </p>
                <button
                  onClick={() => setShowNoHearts(false)}
                  className="w-full py-4 bg-brand-primary text-white font-black rounded-2xl text-sm uppercase tracking-widest hover:brightness-110 transition-all active:scale-95"
                >
                  Entendi
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add Friend Modal */}
        <AnimatePresence>
          {showAddFriend && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setShowAddFriend(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-gradient-to-b from-cyan-950 via-slate-900 to-cyan-950 w-full max-w-sm rounded-[3rem] p-8 shadow-2xl border border-cyan-800/30 overflow-hidden relative my-auto"
                onClick={e => e.stopPropagation()}
              >
                {/* decorative blob */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full -mr-24 -mt-24 blur-3xl pointer-events-none" />

                <button
                  onClick={() => setShowAddFriend(false)}
                  className="absolute top-6 right-6 text-white/20 hover:text-white/70 transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full z-10"
                >
                  <XCircle size={22} />
                </button>

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-4 mb-8 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-cyan-500/40 relative">
                    <UserPlus size={34} strokeWidth={2} />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand-green rounded-full border-2 border-cyan-950 shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Fazer Conexões</h3>
                    <p className="text-cyan-300/60 text-sm font-medium mt-1">Busque sua turma e cresça junto.</p>
                  </div>
                </div>

                {/* Invite link */}
                <div className="mb-5 bg-white/5 p-5 rounded-[2rem] border border-cyan-800/30 relative z-10">
                  <span className="text-[10px] font-black text-cyan-400/50 uppercase tracking-[0.2em] block mb-3">Link de Convite</span>
                  <button
                    onClick={copyInviteLink}
                    className="w-full p-4 bg-white/5 border border-cyan-700/30 rounded-[1.5rem] flex items-center justify-between group hover:bg-white/10 hover:border-cyan-500/50 transition-all active:scale-95"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-cyan-600/20 rounded-xl flex items-center justify-center text-cyan-400">
                        <Link size={20} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black text-cyan-400/50 uppercase tracking-widest leading-none mb-1">Copiar Link</p>
                        <p className="text-xs font-black text-cyan-300 truncate max-w-[130px]">medquest.app/invite/{user.name.toLowerCase().replace(/\s+/g, '-') || 'usuario'}</p>
                      </div>
                    </div>
                    <div className="bg-cyan-600/20 p-2.5 rounded-xl text-cyan-400 group-hover:bg-cyan-500/30 group-hover:text-cyan-300 transition-all">
                      <Copy size={16} />
                    </div>
                  </button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="h-px bg-cyan-800/30 flex-1" />
                  <span className="text-[10px] font-black text-cyan-400/40 uppercase tracking-widest">Código do amigo</span>
                  <div className="h-px bg-cyan-800/30 flex-1" />
                </div>

                {/* Adicionar amigo REAL pelo código MED-XXXXX */}
                <div className="relative z-10 space-y-3">
                  <div className="bg-white/5 p-4 rounded-[1.5rem] border border-cyan-800/30">
                    <span className="text-[10px] font-black text-cyan-400/50 uppercase tracking-[0.2em] block mb-2">Seu código</span>
                    <div className="flex items-center gap-2">
                      <p className="flex-1 text-lg font-black text-white tracking-widest">{friendCode || '···'}</p>
                      <button onClick={() => { try { navigator.clipboard.writeText(friendCode); setSocialToast('Código copiado!'); setTimeout(() => setSocialToast(''), 2000); } catch { /* noop */ } }} className="px-3 py-2 bg-cyan-600/20 text-cyan-300 rounded-xl text-[10px] font-black uppercase tracking-widest active:scale-95">Copiar</button>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input
                      value={addFriendInput}
                      onChange={e => setAddFriendInput(e.target.value.toUpperCase())}
                      placeholder="MED-XXXXX"
                      className="flex-1 px-4 py-3 bg-white/5 border border-cyan-800/40 rounded-[1.5rem] focus:border-cyan-500/60 outline-none font-black text-white tracking-widest text-sm placeholder:text-cyan-400/30"
                    />
                    <button onClick={handleAddFriend} className="px-5 py-3 bg-cyan-600 text-white font-black rounded-[1.5rem] text-sm active:scale-95">Enviar</button>
                  </div>
                  {addFriendMsg && <p className="text-xs font-bold text-cyan-300/70">{addFriendMsg}</p>}
                  <p className="text-[10px] text-cyan-400/40 font-medium leading-relaxed pt-1">
                    Peça o código do seu colega (ou compartilhe o seu). Só entram na sua Liga pessoas reais que você adicionar.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toast Notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[200] bg-slate-900 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl flex items-center gap-3 border border-white/10"
            >
              <Check size={16} className="text-brand-green" strokeWidth={4} />
              Link copiado com sucesso!
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Navegação principal — aparece na página inicial e nas abas principais (desafios, progresso, liga, perfil e amigos). */}
      {['home', 'desafios', 'progress', 'ranking', 'profile', 'amigos'].includes(view) && (
        <nav className={`fixed bottom-0 left-0 right-0 backdrop-blur-xl border-t px-6 py-4 flex justify-around z-40
          md:bottom-6 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-auto md:justify-center md:gap-12 md:px-10 md:rounded-[2rem] md:border ${
          view === 'ranking' || view === 'progress' || view === 'revision'
            ? 'bg-[#1a1a18]/95 border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] md:shadow-[0_10px_40px_rgba(0,0,0,0.35)]'
            : 'bg-white/80 border-slate-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] md:shadow-[0_10px_40px_rgba(0,0,0,0.12)]'
        }`}>
          {[
            { id: 'home', icon: <LayoutDashboard size={24} />, label: 'Início' },
            { id: 'desafios', icon: <Swords size={24} />, label: 'Desafios' },
            { id: 'progress', icon: <BarChart3 size={24} />, label: 'Progresso' },
            { id: 'ranking', icon: <Trophy size={24} />, label: 'Liga' },
            { id: 'profile', icon: <User size={24} />, label: 'Perfil' }
          ].map((item) => {
            const isActive = view === item.id || (item.id === 'desafios' && (view === 'amigos' || view === 'sala'));
            const isDark = view === 'ranking' || view === 'progress' || view === 'revision';
            return (
              <button
                key={item.id}
                onClick={() => setView(item.id as any)}
                className={`flex flex-col items-center gap-1.5 transition-all relative ${
                  isActive ? 'text-brand-primary' : isDark ? 'text-neutral-500' : 'text-slate-400'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-bg"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    className={`absolute -inset-x-3 -inset-y-2 rounded-2xl ${isDark ? 'bg-white/10' : 'bg-brand-primary/10'}`}
                  />
                )}
                <motion.div
                  className="relative"
                  animate={isActive ? { scale: 1.12, y: -1 } : { scale: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                >
                  {item.icon}
                </motion.div>
                <span className="text-[10px] font-black uppercase tracking-widest relative">{item.label}</span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}
