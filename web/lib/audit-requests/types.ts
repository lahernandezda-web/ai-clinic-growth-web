/**
 * Tipos y constantes para `POST /api/audit-requests` (MVP auditoría gratuita).
 * Los valores de negocio se normalizan a códigos estables (`business_type`,
 * `improvement_area`) alineados con la validación servidor.
 */

export const AUDIT_BUSINESS_TYPES = [
  "dental_clinic",
  "podiatry",
  "aesthetic_clinic",
  "physiotherapy_osteopathy",
  "private_clinic",
  "academy_training",
  "other_local_business",
] as const;

export type AuditBusinessType = (typeof AUDIT_BUSINESS_TYPES)[number];

export const AUDIT_IMPROVEMENT_AREAS = [
  "answer_questions",
  "capture_leads",
  "organize_contacts",
  "follow_up",
  "automate_internal_tasks",
  "connect_tools",
  "not_sure",
] as const;

export type AuditImprovementArea = (typeof AUDIT_IMPROVEMENT_AREAS)[number];

/** Metadatos admitidos: objeto plano con valores escalares JSON. */
export type AuditMetadata = Record<
  string,
  string | number | boolean | null
>;

export type AuditRequestValidatedInput = {
  name: string;
  email: string;
  phone: string | null;
  business_type: AuditBusinessType;
  city: string | null;
  website_or_instagram: string | null;
  main_problem: string;
  improvement_area: AuditImprovementArea;
  consent: true;
  metadata: AuditMetadata;
};

/** Fila devuelta por Supabase tras el insert (sin secretos ni campos internos extra). */
export type AuditRequestRow = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  business_type: string;
  city: string | null;
  website_or_instagram: string | null;
  main_problem: string;
  improvement_area: string;
  status: string;
  source: string;
  consent: boolean;
  metadata: AuditMetadata | Record<string, unknown>;
  created_at: string;
  updated_at: string;
};

export const auditRequestErrorMessages = {
  invalidJsonBody: "El cuerpo de la petición no es JSON válido.",
  bodyMustBeObject: "Se esperaba un objeto JSON.",
  nameRequired: "El nombre es obligatorio.",
  nameMustBeString: "El nombre debe ser texto.",
  nameTooLong: "El nombre supera la longitud máxima permitida.",
  emailRequired: "El email es obligatorio.",
  emailMustBeString: "El email debe ser texto.",
  emailInvalid: "El email no tiene un formato válido.",
  emailTooLong: "El email supera la longitud máxima permitida.",
  phoneMustBeStringOrNull:
    "El teléfono debe ser texto o no enviarse (null).",
  phoneTooLong: "El teléfono supera la longitud máxima permitida.",
  businessTypeRequired: "El tipo de negocio es obligatorio.",
  businessTypeMustBeString: "El tipo de negocio debe ser texto.",
  businessTypeInvalid: "El tipo de negocio no es un valor admitido.",
  cityMustBeStringOrNull:
    "La ciudad debe ser texto o no enviarse (null).",
  cityTooLong: "La ciudad supera la longitud máxima permitida.",
  websiteMustBeStringOrNull:
    "Web o Instagram debe ser texto o no enviarse (null).",
  websiteTooLong: "Web o Instagram supera la longitud máxima permitida.",
  mainProblemRequired: "La descripción del proceso es obligatoria.",
  mainProblemMustBeString: "La descripción del proceso debe ser texto.",
  mainProblemTooLong:
    "La descripción del proceso supera la longitud máxima permitida.",
  improvementAreaRequired: "El área de interés es obligatoria.",
  improvementAreaMustBeString: "El área de interés debe ser texto.",
  improvementAreaInvalid: "El área de interés no es un valor admitido.",
  consentRequired: "Debes aceptar el consentimiento de contacto.",
  consentMustBeTrue: "El consentimiento debe ser verdadero para continuar.",
  metadataMustBeObject: "metadata debe ser un objeto JSON (no un array ni texto).",
  metadataInvalidValues:
    "metadata solo admite valores simples (texto, número, booleano o null).",
} as const;

export type AuditRequestValidationSuccess = {
  ok: true;
  input: AuditRequestValidatedInput;
};

export type AuditRequestValidationFailure = {
  ok: false;
  error: string;
};

export type AuditRequestValidationResult =
  | AuditRequestValidationSuccess
  | AuditRequestValidationFailure;
