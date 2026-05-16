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

**MVP 3A — Lead Event Emitter completado localmente.**

- Landing MVP (MVP 1): completada y documentada.
- Formulario de auditoría gratuita, API de persistencia e integración en landing: implementados y verificados en local.
- Emisión server-side del evento `audit_request.created`: implementada y verificada con automatización desactivada.

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
- No se activó n8n.
- No se envían emails todavía.
- No se conecta Google Sheets todavía.
- No se ha hecho deployment.
- No se han documentado valores reales de variables.
- `web/.env.local` sigue siendo local y no versionable.

## Current capabilities

- La web presenta la propuesta comercial de PLEXAI y enlaces/anclas por secciones.
- El visitante puede enviar una solicitud de auditoría gratuita vía formulario; los datos pueden persistirse en Supabase vía API.
- Tras guardar un lead, el backend puede emitir el evento `audit_request.created` hacia el cliente de automatizaciones si la integración está configurada y activada.
- **No están activados:** n8n, email transaccional, Google Sheets, WhatsApp, calendario, chatbot ni voz.
- **No hay:** login, dashboard, multi-tenant ni deployment público automatizado desde este estado documentado.

## Not implemented yet

- Gestión interna de leads / flujo de revisión post-envío (más allá del guardado)
- Workflow n8n real para `audit_request.created` (email interno y registro opcional en Google Sheets)
- Deployment (Vercel u otro), dominio dedicado y legal/pages legales en producción
- Integraciones de mensajería, agenda o asistentes
- Variables de entorno reales documentadas en repo (por diseño: no deben aparecer valores secretos)

## Environment (sin valores)

- `web/.env.local` puede existir en máquinas de desarrollo para ejecutar API y cliente; **no debe versionarse** ni documentarse con valores reales.
- No exponer ni listar secretos en documentación ni en commits.

## Verification (último checkpoint documentado)

- `npm.cmd run lint`: OK  
- `npx tsc --noEmit`: OK  
- `POST /api/audit-requests`: OK (HTTP 200) con automatización desactivada  
- Prueba manual del formulario en UI: OK  
- Sin lectura ni exposición de secretos.
- Sin activación de integraciones externas.

## Safety notes

- No se usan datos clínicos ni datos de pacientes en el alcance pretendido del formulario; el usuario debe advertirse en UI.
- No presentar PLEXAI como sistema clínico.
- No prometer integraciones no implementadas.
- No leer, imprimir ni versionar `.env`, `.env.local` ni `web/.env.local`.
- Integraciones nuevas requieren SPEC previa.

## Siguiente fase recomendada

**MVP 3B — Configure n8n workflow for internal email and Google Sheets**

Pendiente de SPEC/BUILD separado. El siguiente bloque debe:

- Configurar manualmente n8n.
- Probar el webhook con datos ficticios.
- Enviar email interno.
- Opcionalmente registrar el lead en Google Sheets.
- Añadir variables manualmente en `web/.env.local` sin imprimir valores.
- Verificar que `AUTOMATIONS_ENABLED=true` solo se active cuando el workflow esté listo.

No activar integraciones externas ni ampliar alcance sin SPEC previa.
