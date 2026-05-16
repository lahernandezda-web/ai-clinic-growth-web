# Product Current State — PLEXAI / ai-clinic-growth-web

## Project identity

- Nombre del proyecto: ai-clinic-growth-web
- Marca: PLEXAI
- Nivel: Nivel 3 (Cursor / AI Building System — PLEXAI)
- Tipo: web comercial propia / marca personal tecnológica
- Base original: copia limpia desde CURSOR.p1 (`CURSOR.p1`)
- No es business-assistant-mvp
- No se construye dentro de CURSOR.p1

## Current status

**MVP 3B — n8n Lead Notification Workflow completado, verificado en local y funcionando de extremo a extremo.**

- Landing MVP (MVP 1): completada y documentada.
- Formulario de auditoría gratuita, API de persistencia e integración en landing: implementados y verificados en local.
- Emisión server-side del evento `audit_request.created`: implementada en MVP 3A y verificada ahora dentro del flujo MVP 3B.
- Workflow n8n para notificación interna y Google Sheets: configurado y verificado en local.

Commits de referencia (MVP auditoría):

- `4489752` — db: add audit requests schema  
- `781e2d9` — feat: add audit request API  
- `e6df33d` — feat: add audit request form UI  

Commit de referencia (landing inicial):

- `0eb0f81` feat: add plexai landing MVP

Commit de referencia (MVP 3A):

- `d858373` — feat: emit audit request automation event

## Implemented so far

**Landing `/` (MVP 1)**

- Header con navegación por anclas, hero, problema, propuesta de valor, audiencias, automatización, método, demo conceptual, servicios, bloque de auditoría, FAQ, CTA final
- Metadata/lang en layout; smooth scroll y ajustes globales mínimos en CSS

**MVP 2 — Audit request**

- Formulario en la landing (captura de solicitudes de auditoría gratuita)
- API `POST /api/audit-requests` (respuesta HTTP 200 verificada)
- Tabla `public.audit_requests` en Supabase (schema aplicado en proyecto)
- Validaciones básicas en cliente/servidor según implementación actual
- Consentimiento básico y advertencia visible: no incluir datos clínicos ni información de pacientes
- Prueba manual desde navegador e inserción confirmada en Supabase (p. ej. fila de prueba manual tipo «Demo Formulario PLEXAI Manual»)
- Problema de hidratación corregido en la UI del formulario

**MVP 3A — Lead Event Emitter**

- Se implementó emisión server-side del evento `audit_request.created`.
- El evento se emite después de que `POST /api/audit-requests` guarda correctamente el lead en Supabase.
- Se reutilizó el patrón existente de automatizaciones:
  - `web/lib/automations/client.ts`
  - `web/lib/automations/events.ts`
  - `web/lib/automations/types.ts`
- Se añadió:
  - `web/lib/audit-requests/automation.ts`
- Se modificó:
  - `web/app/api/audit-requests/route.ts`
  - `web/lib/automations/events.ts`
  - `web/lib/automations/types.ts`
- La automatización queda desactivada por defecto si `AUTOMATIONS_ENABLED` no es `"true"` o si faltan variables requeridas.
- Si la automatización falla, no rompe el guardado del lead ni la respuesta exitosa del endpoint.
- En el checkpoint MVP 3A todavía no se había activado n8n.
- En el checkpoint MVP 3A todavía no se enviaban emails.
- En el checkpoint MVP 3A todavía no se conectaba Google Sheets.
- No se ha hecho deployment.
- No se han documentado valores reales de variables.
- `web/.env.local` sigue siendo local y no versionable.

**MVP 3B — n8n Lead Notification Workflow**

Estado: **COMPLETADO, VERIFICADO EN LOCAL Y FUNCIONANDO DE EXTREMO A EXTREMO.**

Flujo confirmado:

`Formulario PLEXAI local`
→ `POST /api/audit-requests`
→ `Supabase public.audit_requests`
→ `emit audit_request.created`
→ `n8n Production Webhook`
→ `Validate Security mediante X-Automation-Secret`
→ `Validate Payload`
→ `Send Internal Email`
→ `Append Lead to Google Sheets`
→ `Respond Success`

Workflow n8n:

- Nombre: `PLEXAI — Audit Request Created`

Nodos configurados:

- `Webhook Trigger`
- `Validate Security`
- `Check Security`
- `Validate Payload`
- `Send Internal Email`
- `Append Lead to Google Sheets`
- `Respond Success`
- `Respond Unauthorized`
- `Respond Error`

Seguridad:

- La integración usa `X-Automation-Secret`.
- El secreto real no está documentado.
- El secreto real solo vive en n8n y en `web/.env.local`.
- `web/.env.local` no está versionado.
- No se deben imprimir ni commitear secretos.
- La URL real del webhook no debe documentarse.

Variables locales necesarias, solo nombres y sin valores:

- `AUTOMATIONS_ENABLED`
- `N8N_WEBHOOK_URL`
- `N8N_WEBHOOK_SECRET`

Verificación realizada:

- Prueba manual desde `http://localhost:3000/#auditoria`.
- UI mostró éxito.
- Supabase recibió fila.
- n8n recibió ejecución correcta.
- Email interno llegó.
- Google Sheets añadió fila.
- `npm.cmd run lint`: OK.
- `npx tsc --noEmit`: OK.
- `git status --short`: limpio antes de documentar.
- No se leyeron secretos.

Fuera de alcance:

- Deployment.
- Dominio.
- WhatsApp.
- Calendario.
- Chatbot PLEXAI.
- Dashboard interno.
- Gestión avanzada de leads.
- Datos clínicos o de pacientes.

## Current capabilities

- La web presenta la propuesta comercial de PLEXAI y enlaces/anclas por secciones.
- El visitante puede enviar una solicitud de auditoría gratuita vía formulario; los datos pueden persistirse en Supabase vía API.
- Tras guardar un lead, el backend emite el evento `audit_request.created` hacia n8n cuando la integración está configurada y activada.
- n8n puede validar seguridad, validar payload, enviar email interno, registrar el lead en Google Sheets y responder éxito.
- **No están activados:** WhatsApp, calendario, chatbot ni voz.
- **No hay:** login, dashboard, multi-tenant ni deployment público automatizado desde este estado documentado.

## Not implemented yet

- Gestión interna de leads / flujo de revisión post-envío (más allá del guardado)
- Deployment (Vercel u otro), dominio dedicado y legal/pages legales en producción
- Integraciones de mensajería, agenda o asistentes
- Chatbot PLEXAI
- Dashboard interno de leads
- Gestión avanzada de leads
- Variables de entorno reales documentadas en repo (por diseño: no deben aparecer valores secretos)
- Datos clínicos o de pacientes en pruebas o flujos

## Environment (sin valores)

- `web/.env.local` puede existir en máquinas de desarrollo para ejecutar API y cliente; **no debe versionarse** ni documentarse con valores reales.
- No exponer ni listar secretos en documentación ni en commits.
- Variables locales necesarias para MVP 3B, solo nombres:
  - `AUTOMATIONS_ENABLED`
  - `N8N_WEBHOOK_URL`
  - `N8N_WEBHOOK_SECRET`

## Verification (último checkpoint documentado)

- Prueba manual desde `http://localhost:3000/#auditoria`: OK
- UI mostró éxito.
- `POST /api/audit-requests`: OK.
- Supabase recibió fila en `public.audit_requests`.
- n8n recibió ejecución correcta.
- Validación de `X-Automation-Secret`: OK.
- `Validate Payload`: OK.
- Email interno llegó.
- Google Sheets añadió fila.
- `Respond Success`: OK.
- `npm.cmd run lint`: OK
- `npx tsc --noEmit`: OK
- `git status --short`: limpio antes de documentar.
- Sin lectura ni exposición de secretos.

## Safety notes

- No se usan datos clínicos ni datos de pacientes en el alcance pretendido del formulario; el usuario debe advertirse en UI.
- No presentar PLEXAI como sistema clínico.
- No prometer integraciones no implementadas.
- No leer, imprimir ni versionar `.env`, `.env.local` ni `web/.env.local`.
- Integraciones nuevas requieren SPEC previa.

## Siguiente fase recomendada

**MVP 4 — Demo Polish / Zoom Demo Script**

Descripción: preparar una demo comercial vendible para enseñar PLEXAI:

- Narrativa de la demo.
- Qué mostrar en la landing.
- Cómo enseñar formulario, email y Google Sheets.
- Cómo explicar valor para clínica dental, estética, podología, fisioterapia, academia o negocio local.
- Límites honestos de lo que ya está implementado y lo que todavía no.

No activar integraciones externas ni ampliar alcance sin SPEC previa.
