import {
  businessContext,
  DISCLAIMER,
  goalLabels,
  recommendationIdeas,
  situationLabels,
} from "./content";
import type {
  BusinessTypeId,
  ChatAnswers,
  GoalId,
  RecommendationResult,
  SituationId,
} from "./types";

const ALL_IDEAS = Object.values(recommendationIdeas);

function uniqueIdeas(ideas: string[]): string[] {
  return [...new Set(ideas)].slice(0, 3);
}

function ideasForSituation(situation: SituationId): string[] {
  switch (situation) {
    case "manual_followup":
      return [
        recommendationIdeas.followUpFlow,
        recommendationIdeas.reminders,
        recommendationIdeas.priority,
      ];
    case "disordered_requests":
      return [
        recommendationIdeas.centralizeRequests,
        recommendationIdeas.priority,
        recommendationIdeas.followUpFlow,
      ];
    case "repetitive_admin":
      return [
        recommendationIdeas.detectRepetitive,
        recommendationIdeas.reminders,
        recommendationIdeas.supervisedReplies,
      ];
    case "ai_unsure":
      return [
        recommendationIdeas.detectRepetitive,
        recommendationIdeas.centralizeRequests,
        recommendationIdeas.supervisedReplies,
      ];
  }
}

function ideasForGoal(goal: GoalId): string[] {
  switch (goal) {
    case "save_time":
      return [
        recommendationIdeas.detectRepetitive,
        recommendationIdeas.reminders,
      ];
    case "order_requests":
      return [
        recommendationIdeas.centralizeRequests,
        recommendationIdeas.priority,
      ];
    case "improve_followup":
      return [
        recommendationIdeas.followUpFlow,
        recommendationIdeas.reminders,
      ];
    case "gain_productivity":
      return [
        recommendationIdeas.detectRepetitive,
        recommendationIdeas.followUpFlow,
      ];
    case "start_ai_simple":
      return [
        recommendationIdeas.supervisedReplies,
        recommendationIdeas.centralizeRequests,
      ];
  }
}

function ideasForBusiness(business: BusinessTypeId): string[] {
  switch (business) {
    case "professional_services":
      return [
        recommendationIdeas.followUpFlow,
        recommendationIdeas.priority,
      ];
    case "private_clinic":
      return [
        recommendationIdeas.centralizeRequests,
        recommendationIdeas.supervisedReplies,
      ];
    case "academy":
      return [
        recommendationIdeas.centralizeRequests,
        recommendationIdeas.reminders,
      ];
    case "local_services":
      return [
        recommendationIdeas.reminders,
        recommendationIdeas.priority,
      ];
    case "other":
      return [recommendationIdeas.centralizeRequests];
  }
}

function buildIntro(
  situation: SituationId,
  business: BusinessTypeId,
  goal: GoalId,
): string {
  const situationText = situationLabels[situation];
  const goalText = goalLabels[goal];
  const businessText = businessContext[business];

  if (situation === "disordered_requests") {
    return `Por lo que cuentas, podríamos empezar revisando una automatización sencilla para ordenar solicitudes, reducir seguimiento manual y darte más control sobre las oportunidades que llegan al negocio ${businessText}, con foco en ${goalText}.`;
  }

  if (situation === "manual_followup") {
    return `Por lo que cuentas, podría tener sentido empezar por un flujo de seguimiento interno con control humano, para que ${goalText} ${businessText} sin complicar tu operación diaria.`;
  }

  if (situation === "repetitive_admin") {
    return `Por lo que cuentas, podríamos revisar qué tareas administrativas se repiten cada semana ${businessText} y plantear una automatización sencilla que te ayude a ${goalText}.`;
  }

  return `Por lo que cuentas, podríamos empezar con un piloto pequeño y supervisado ${businessText}, orientado a ${situationText} y ${goalText}, con control humano y sin complicar tu operación.`;
}

export function getRecommendations(
  answers: Required<ChatAnswers>,
): RecommendationResult {
  const { situation, business, goal } = answers;

  const ideas = uniqueIdeas([
    ...ideasForSituation(situation),
    ...ideasForGoal(goal),
    ...ideasForBusiness(business),
    ...ALL_IDEAS,
  ]);

  return {
    intro: buildIntro(situation, business, goal),
    ideas,
    disclaimer: DISCLAIMER,
  };
}

export function getOptionLabel<T extends string>(
  options: { id: T; label: string }[],
  id: T,
): string {
  return options.find((option) => option.id === id)?.label ?? id;
}
