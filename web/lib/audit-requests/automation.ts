import { sendAutomationEvent } from "@/lib/automations/client";
import {
  PLEXAI_AUTOMATION_SOURCE,
  type AuditRequestCreatedAutomationPayload,
  type AutomationSendResult,
} from "@/lib/automations/types";
import type { AuditRequestRow } from "./types";

function buildAuditRequestCreatedPayload(
  row: AuditRequestRow,
): AuditRequestCreatedAutomationPayload {
  return {
    event: "audit_request.created",
    occurred_at: new Date().toISOString(),
    source: PLEXAI_AUTOMATION_SOURCE,
    audit_request: {
      id: row.id,
      name: row.name,
      email: row.email,
      phone: row.phone,
      business_type: row.business_type,
      city: row.city,
      website_or_instagram: row.website_or_instagram,
      main_problem: row.main_problem,
      improvement_area: row.improvement_area,
      status: row.status,
      created_at: row.created_at,
    },
  };
}

/**
 * Emite `audit_request.created` hacia n8n solo si `AUTOMATIONS_ENABLED=true`
 * y el webhook está configurado. No lanza; errores de red/HTTP se devuelven en el resultado.
 */
export async function emitAuditRequestCreatedEvent(
  row: AuditRequestRow,
): Promise<AutomationSendResult> {
  const payload = buildAuditRequestCreatedPayload(row);
  return sendAutomationEvent(payload);
}
