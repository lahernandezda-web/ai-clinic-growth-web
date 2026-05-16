export type AutomationEventName =
  | "test.automation"
  | "conversation.created"
  | "message.created"
  | "conversation.title_generated"
  | "conversation.summary_updated"
  | "lead.detected"
  | "human_followup_requested"
  | "audit_request.created";

export const AUTOMATION_EVENT_SOURCE = "cursor-ai-building-system" as const;
export const PLEXAI_AUTOMATION_SOURCE = "plexai_landing" as const;

/** Eventos con envelope heredado (`data`), origen sistema base. */
export type StandardAutomationEventPayload = {
  event: Exclude<AutomationEventName, "audit_request.created">;
  occurred_at: string;
  source: typeof AUTOMATION_EVENT_SOURCE;
  data: Record<string, unknown>;
};

/** Lead auditoría PLEXAI: envelope alineado con SPEC (sin `data`, sin metadatos extra). */
export type AuditRequestCreatedAutomationPayload = {
  event: "audit_request.created";
  occurred_at: string;
  source: typeof PLEXAI_AUTOMATION_SOURCE;
  audit_request: {
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
    created_at: string;
  };
};

export type AutomationEventPayload =
  | StandardAutomationEventPayload
  | AuditRequestCreatedAutomationPayload;

export type AutomationSendError =
  | "disabled"
  | "not_configured"
  | "timeout"
  | "network_error"
  | "bad_status";

export type AutomationSendResult =
  | { ok: true; status: number }
  | { ok: false; error: AutomationSendError; status?: number };

/** Entrada para emitir `conversation.created` (sin mensajes ni summary). */
export type EmitConversationCreatedEventInput = {
  conversation_id: string;
  created_at: string;
  title?: string | null;
  origin?: "chat";
};

/** Respuesta de `GET /api/automations/status` (solo booleanos; sin secretos ni URL). */
export type AutomationServerStatusPayload = {
  enabled: boolean;
  has_webhook_url: boolean;
  has_webhook_secret: boolean;
  configured: boolean;
};
