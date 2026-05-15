import {
  AUDIT_BUSINESS_TYPES,
  AUDIT_IMPROVEMENT_AREAS,
  auditRequestErrorMessages,
  type AuditBusinessType,
  type AuditImprovementArea,
  type AuditMetadata,
  type AuditRequestValidatedInput,
  type AuditRequestValidationResult,
} from "./types";

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 180;
const MAX_PHONE_LENGTH = 60;
const MAX_CITY_LENGTH = 120;
const MAX_WEBSITE_LENGTH = 240;
const MAX_MAIN_PROBLEM_LENGTH = 1200;

const EMAIL_BASIC =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isAuditBusinessType(v: string): v is AuditBusinessType {
  return (AUDIT_BUSINESS_TYPES as readonly string[]).includes(v);
}

function isAuditImprovementArea(v: string): v is AuditImprovementArea {
  return (AUDIT_IMPROVEMENT_AREAS as readonly string[]).includes(v);
}

function normalizeOptionalText(
  raw: unknown,
  field:
    | "phone"
    | "city"
    | "website_or_instagram",
): { ok: true; value: string | null } | { ok: false; error: string } {
  if (raw === undefined || raw === null) {
    return { ok: true, value: null };
  }
  if (typeof raw !== "string") {
    if (field === "phone") {
      return {
        ok: false,
        error: auditRequestErrorMessages.phoneMustBeStringOrNull,
      };
    }
    if (field === "city") {
      return {
        ok: false,
        error: auditRequestErrorMessages.cityMustBeStringOrNull,
      };
    }
    return {
      ok: false,
      error: auditRequestErrorMessages.websiteMustBeStringOrNull,
    };
  }
  const trimmed = raw.trim();
  if (trimmed === "") {
    return { ok: true, value: null };
  }
  return { ok: true, value: trimmed };
}

function parseMetadata(
  raw: unknown,
): { ok: true; value: AuditMetadata } | { ok: false; error: string } {
  if (raw === undefined) {
    return { ok: true, value: {} };
  }
  if (raw === null || typeof raw !== "object" || Array.isArray(raw)) {
    return {
      ok: false,
      error: auditRequestErrorMessages.metadataMustBeObject,
    };
  }
  const out: AuditMetadata = {};
  for (const [key, value] of Object.entries(raw)) {
    if (
      value === null ||
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      out[key] = value;
      continue;
    }
    return {
      ok: false,
      error: auditRequestErrorMessages.metadataInvalidValues,
    };
  }
  return { ok: true, value: out };
}

/**
 * Valida y normaliza el body ya parseado de `POST /api/audit-requests`.
 */
export function validateAuditRequestBody(
  body: unknown,
): AuditRequestValidationResult {
  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return {
      ok: false,
      error: auditRequestErrorMessages.bodyMustBeObject,
    };
  }

  const record = body as Record<string, unknown>;

  const nameRaw = record.name;
  if (nameRaw === undefined || nameRaw === null) {
    return { ok: false, error: auditRequestErrorMessages.nameRequired };
  }
  if (typeof nameRaw !== "string") {
    return { ok: false, error: auditRequestErrorMessages.nameMustBeString };
  }
  const name = nameRaw.trim();
  if (name === "") {
    return { ok: false, error: auditRequestErrorMessages.nameRequired };
  }
  if (name.length > MAX_NAME_LENGTH) {
    return { ok: false, error: auditRequestErrorMessages.nameTooLong };
  }

  const emailRaw = record.email;
  if (emailRaw === undefined || emailRaw === null) {
    return { ok: false, error: auditRequestErrorMessages.emailRequired };
  }
  if (typeof emailRaw !== "string") {
    return { ok: false, error: auditRequestErrorMessages.emailMustBeString };
  }
  const email = emailRaw.trim();
  if (email === "") {
    return { ok: false, error: auditRequestErrorMessages.emailRequired };
  }
  if (email.length > MAX_EMAIL_LENGTH) {
    return { ok: false, error: auditRequestErrorMessages.emailTooLong };
  }
  if (!EMAIL_BASIC.test(email)) {
    return { ok: false, error: auditRequestErrorMessages.emailInvalid };
  }

  const phoneNorm = normalizeOptionalText(record.phone, "phone");
  if (!phoneNorm.ok) {
    return { ok: false, error: phoneNorm.error };
  }
  if (
    phoneNorm.value !== null &&
    phoneNorm.value.length > MAX_PHONE_LENGTH
  ) {
    return { ok: false, error: auditRequestErrorMessages.phoneTooLong };
  }

  const businessTypeRaw = record.business_type;
  if (
    businessTypeRaw === undefined ||
    businessTypeRaw === null ||
    businessTypeRaw === ""
  ) {
    return {
      ok: false,
      error: auditRequestErrorMessages.businessTypeRequired,
    };
  }
  if (typeof businessTypeRaw !== "string") {
    return {
      ok: false,
      error: auditRequestErrorMessages.businessTypeMustBeString,
    };
  }
  const businessType = businessTypeRaw.trim();
  if (!isAuditBusinessType(businessType)) {
    return {
      ok: false,
      error: auditRequestErrorMessages.businessTypeInvalid,
    };
  }

  const cityNorm = normalizeOptionalText(record.city, "city");
  if (!cityNorm.ok) {
    return { ok: false, error: cityNorm.error };
  }
  if (cityNorm.value !== null && cityNorm.value.length > MAX_CITY_LENGTH) {
    return { ok: false, error: auditRequestErrorMessages.cityTooLong };
  }

  const webNorm = normalizeOptionalText(
    record.website_or_instagram,
    "website_or_instagram",
  );
  if (!webNorm.ok) {
    return { ok: false, error: webNorm.error };
  }
  if (
    webNorm.value !== null &&
    webNorm.value.length > MAX_WEBSITE_LENGTH
  ) {
    return { ok: false, error: auditRequestErrorMessages.websiteTooLong };
  }

  const mainProblemRaw = record.main_problem;
  if (mainProblemRaw === undefined || mainProblemRaw === null) {
    return {
      ok: false,
      error: auditRequestErrorMessages.mainProblemRequired,
    };
  }
  if (typeof mainProblemRaw !== "string") {
    return {
      ok: false,
      error: auditRequestErrorMessages.mainProblemMustBeString,
    };
  }
  const main_problem = mainProblemRaw.trim();
  if (main_problem === "") {
    return {
      ok: false,
      error: auditRequestErrorMessages.mainProblemRequired,
    };
  }
  if (main_problem.length > MAX_MAIN_PROBLEM_LENGTH) {
    return {
      ok: false,
      error: auditRequestErrorMessages.mainProblemTooLong,
    };
  }

  const improvementAreaRaw = record.improvement_area;
  if (
    improvementAreaRaw === undefined ||
    improvementAreaRaw === null ||
    improvementAreaRaw === ""
  ) {
    return {
      ok: false,
      error: auditRequestErrorMessages.improvementAreaRequired,
    };
  }
  if (typeof improvementAreaRaw !== "string") {
    return {
      ok: false,
      error: auditRequestErrorMessages.improvementAreaMustBeString,
    };
  }
  const improvement_area = improvementAreaRaw.trim();
  if (!isAuditImprovementArea(improvement_area)) {
    return {
      ok: false,
      error: auditRequestErrorMessages.improvementAreaInvalid,
    };
  }

  const consentRaw = record.consent;
  if (consentRaw === undefined || consentRaw === null) {
    return { ok: false, error: auditRequestErrorMessages.consentRequired };
  }
  if (typeof consentRaw !== "boolean") {
    return {
      ok: false,
      error: auditRequestErrorMessages.consentMustBeTrue,
    };
  }
  if (!consentRaw) {
    return {
      ok: false,
      error: auditRequestErrorMessages.consentMustBeTrue,
    };
  }

  const parsedMeta = parseMetadata(record.metadata);
  if (!parsedMeta.ok) {
    return { ok: false, error: parsedMeta.error };
  }

  const input: AuditRequestValidatedInput = {
    name,
    email,
    phone: phoneNorm.value,
    business_type: businessType,
    city: cityNorm.value,
    website_or_instagram: webNorm.value,
    main_problem,
    improvement_area,
    consent: true,
    metadata: parsedMeta.value,
  };

  return { ok: true, input };
}
