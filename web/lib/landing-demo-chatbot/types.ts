export type SituationId =
  | "manual_followup"
  | "disordered_requests"
  | "repetitive_admin"
  | "ai_unsure";

export type BusinessTypeId =
  | "professional_services"
  | "private_clinic"
  | "academy"
  | "local_services"
  | "other";

export type GoalId =
  | "save_time"
  | "order_requests"
  | "improve_followup"
  | "gain_productivity"
  | "start_ai_simple";

export type ChatStep = "welcome" | "situation" | "business" | "goal" | "results";

export type ChatMessage = {
  id: string;
  role: "bot" | "user";
  content: string;
};

export type ChatOption<T extends string = string> = {
  id: T;
  label: string;
};

export type RecommendationResult = {
  intro: string;
  ideas: string[];
  disclaimer: string;
};

export type ChatAnswers = {
  situation?: SituationId;
  business?: BusinessTypeId;
  goal?: GoalId;
};
