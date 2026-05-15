import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { AuditRequestRow, AuditRequestValidatedInput } from "./types";

/**
 * Persistencia de solicitudes de auditoría gratuita en Supabase (solo servidor).
 * Usa service role mediante `createSupabaseServerClient()`. Errores de BD no se exponen al cliente.
 */

export type AuditRequestPersistenceErrorCode =
  | "not_configured"
  | "db_error";

export type AuditRequestPersistenceResult =
  | { ok: true; data: AuditRequestRow }
  | { ok: false; error: AuditRequestPersistenceErrorCode };

export async function insertAuditRequest(
  input: AuditRequestValidatedInput,
): Promise<AuditRequestPersistenceResult> {
  const client = createSupabaseServerClient();
  if (!client) {
    return { ok: false, error: "not_configured" };
  }

  const payload = {
    name: input.name,
    email: input.email,
    phone: input.phone,
    business_type: input.business_type,
    city: input.city,
    website_or_instagram: input.website_or_instagram,
    main_problem: input.main_problem,
    improvement_area: input.improvement_area,
    status: "new",
    source: "plexai_landing",
    consent: true,
    metadata: input.metadata,
  };

  const { data, error } = await client
    .from("audit_requests")
    .insert(payload)
    .select()
    .single();

  if (error || !data) {
    return { ok: false, error: "db_error" };
  }

  return { ok: true, data: data as AuditRequestRow };
}
