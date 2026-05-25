import type {
  BusinessTypeId,
  ChatOption,
  GoalId,
  SituationId,
} from "./types";

export const WIDGET_TITLE = "Asistente PLEXAI";
export const WIDGET_SUBTITLE = "Detecta ideas de automatización para tu negocio";
export const FLOATING_BUTTON_LABEL = "¿Qué podrías automatizar?";

export const WELCOME_MESSAGE =
  "Hola, soy el asistente demo de PLEXAI. Te haré unas preguntas rápidas para orientarte sobre qué procesos podrían automatizarse en tu negocio.";

export const situationOptions: ChatOption<SituationId>[] = [
  {
    id: "manual_followup",
    label: "Pierdo tiempo haciendo seguimiento manual",
  },
  {
    id: "disordered_requests",
    label: "Recibo solicitudes desordenadas",
  },
  {
    id: "repetitive_admin",
    label: "Repito tareas administrativas",
  },
  {
    id: "ai_unsure",
    label: "Quiero usar IA, pero no sé por dónde empezar",
  },
];

export const businessTypeOptions: ChatOption<BusinessTypeId>[] = [
  { id: "professional_services", label: "Servicios profesionales" },
  { id: "private_clinic", label: "Clínica o centro privado" },
  { id: "academy", label: "Academia o formación" },
  { id: "local_services", label: "Negocio local de servicios" },
  { id: "other", label: "Otro tipo de negocio" },
];

export const goalOptions: ChatOption<GoalId>[] = [
  { id: "save_time", label: "Ahorrar tiempo" },
  { id: "order_requests", label: "Ordenar solicitudes" },
  { id: "improve_followup", label: "Mejorar seguimiento" },
  { id: "gain_productivity", label: "Ganar productividad" },
  { id: "start_ai_simple", label: "Empezar con IA sin complicarme" },
];

export const QUESTION_SITUATION =
  "¿Qué describe mejor tu situación ahora mismo?";
export const QUESTION_BUSINESS = "¿Qué tipo de negocio tienes?";
export const QUESTION_GOAL = "¿Qué te gustaría conseguir primero?";

export const DISCLAIMER =
  "Esto es solo una orientación inicial. Para saber qué tendría sentido en tu caso, lo ideal es revisar tu proceso concreto en una auditoría breve. Pide tu auditoría gratuita y vemos juntos qué proceso tendría más sentido automatizar primero.";

export const CTA_AUDIT = {
  label: "Pedir auditoría gratuita",
  href: "#auditoria",
};

export const CTA_RESTART = "Empezar de nuevo";

export const recommendationIdeas = {
  centralizeRequests: "Centralizar solicitudes entrantes",
  followUpFlow: "Crear un flujo de seguimiento interno",
  reminders: "Preparar avisos o recordatorios para que nada se quede sin responder",
  priority: "Clasificar solicitudes por prioridad",
  supervisedReplies: "Crear respuestas iniciales supervisadas",
  detectRepetitive: "Detectar tareas repetitivas que consumen tiempo al equipo",
} as const;

export const situationLabels: Record<SituationId, string> = {
  manual_followup: "seguimiento manual",
  disordered_requests: "solicitudes desordenadas",
  repetitive_admin: "tareas administrativas repetitivas",
  ai_unsure: "empezar con IA sin complicar la operación",
};

export const goalLabels: Record<GoalId, string> = {
  save_time: "ahorrar tiempo",
  order_requests: "ordenar solicitudes",
  improve_followup: "mejorar el seguimiento",
  gain_productivity: "ganar productividad",
  start_ai_simple: "empezar con IA sin complicarte",
};

export const businessContext: Record<BusinessTypeId, string> = {
  professional_services: "en un negocio de servicios profesionales",
  private_clinic: "en una clínica o centro privado",
  academy: "en una academia o centro de formación",
  local_services: "en un negocio local de servicios",
  other: "en tu tipo de negocio",
};
