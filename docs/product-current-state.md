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
- Rediseño visual/comercial de landing (post-MVP 3B): completado y commiteado (`2b5c185`); formulario end-to-end post-rediseño revalidado (2026-05-23).
- Deployment readiness — SPEC creada (`4a23225`); Bloque A + B reducido implementado (`9e27e50`): páginas legales provisionales, footer y consentimiento del formulario; Bloque C completado (`97bf97e`): plantilla `web/.env.example` versionada y variables de producción documentadas por nombre (sin valores reales); sin deployment.
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

Commit de referencia (rediseño landing):

- `2b5c185` — feat: redesign plexai landing

Commits de referencia (deployment readiness):

- `4a23225` — docs: add deployment readiness spec
- `9e27e50` — feat: add legal pages and privacy consent
- `1ffae37` — docs: add legal pages verification checkpoint
- `97bf97e` — chore: document production env variables

## Implemented so far

**Landing `/` (MVP 1 + rediseño visual/comercial)**

- Header con navegación por anclas, hero, problema, propuesta de valor, audiencias, automatización, método, demo conceptual, servicios, bloque de auditoría, FAQ, CTA final
- Metadata/lang en layout; smooth scroll y estilos globales en `web/app/globals.css`
- Rediseño premium/tecnológico: copy generalista (negocios de servicios), alternancia oscuro/claro, hero con SVG animado (`web/public/plexai-flow-hero.svg`), CTA «Pide una auditoría gratuita» y formulario de auditoría conservados (ver checkpoint rediseño)

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

## Checkpoint — Rediseño visual/comercial landing

**Estado: COMPLETADO Y VERIFICADO (revisión visual OK).**

Commit:

- `2b5c185` — feat: redesign plexai landing

Archivos principales:

- `web/app/page.tsx`
- `web/app/globals.css`
- `web/public/plexai-flow-hero.svg`

Cambios realizados:

- Landing más premium, tecnológica y comercial.
- Enfoque más generalista, menos clínico/paciente.
- Copy orientado a negocios de servicios.
- CTA «Pide una auditoría gratuita» conservado.
- Formulario de auditoría mantenido (sin cambios de API/integración en este bloque).
- SVG animado integrado en hero.
- Secciones con alternancia visual oscuro/claro.
- Estética tipo agencia premium / tecnología creativa.

Estado del bloque:

- Rediseño cerrado.
- **Formulario end-to-end post-rediseño:** OK (revalidado 2026-05-23).
- **Pendiente decidir siguiente fase:** optimización ligera, RGPD/deployment readiness o demo comercial (MVP 4).

Verificación formulario post-rediseño (2026-05-23):

- URL usada: `http://localhost:3001/#auditoria` (puerto 3001; 3000 ocupado).
- Resultado general: OK.
- UI éxito: OK.
- n8n Success: OK (Webhook Trigger → Validate Security → Check Security → Validate Payload → Send Internal Email → Append Lead to Google Sheets → Respond Success).
- Email interno: OK.
- Google Sheets: OK.
- Datos de prueba: nombre «Test Post Rediseño», email `test.post.redesign@example.com`, teléfono `600000000`, tipo `dental_clinic`, ciudad «A Coruña», web `https://example.com`, área `follow_up`.

## Checkpoint — Deployment readiness (Bloque A + B reducido)

**Estado: PREPARACIÓN LEGAL MÍNIMA INICIAL COMPLETADA (provisional, sin deployment).**

SPEC de referencia:

- `4a23225` — docs: add deployment readiness spec (`docs/spec-deployment-readiness-mvp.md`)

Implementación:

- `9e27e50` — feat: add legal pages and privacy consent

Archivos:

- `web/app/privacidad/page.tsx` — ruta `/privacidad`
- `web/app/aviso-legal/page.tsx` — ruta `/aviso-legal`
- `web/app/page.tsx` — enlaces legales en footer
- `web/components/AuditRequestForm.tsx` — texto de consentimiento actualizado

Incluye:

- `/privacidad` provisional con placeholders (`[NOMBRE DEL TITULAR O RESPONSABLE]`, `[EMAIL DE CONTACTO]`, `[DOMICILIO / DATOS LEGALES SI APLICA]`).
- `/aviso-legal` provisional con placeholders (`[NIF/CIF SI APLICA]`, etc.).
- Enlaces en footer: Política de privacidad y Aviso legal.
- Consentimiento del formulario con enlace a `/privacidad` y advertencia de no enviar datos clínicos, de pacientes ni información sensible.
- Sin URLs de webhook ni secretos en las páginas legales.

Verificación:

- `npm.cmd run lint`: OK
- `npx tsc --noEmit`: OK
- `npm.cmd run build`: OK (rutas estáticas `/privacidad` y `/aviso-legal`)
- Sin deployment
- Sin modificación de Supabase, n8n ni Google Sheets
- Sin lectura ni exposición de secretos (`web/.env.local` no tocado)

Pendiente antes de producción:

- Completar datos reales del titular en páginas legales (sustituir placeholders).

Siguiente bloque:

- **Bloque D:** Vercel / deployment checklist (ver checkpoint Bloque C)

### Verificación visual/manual y funcional post Bloque A + B reducido (2026-05-23)

**Revisión visual/manual:**

- Landing visual: OK.
- Footer legal: OK.
- `/privacidad`: OK (placeholders legales visibles y claros; sin datos legales inventados).
- `/aviso-legal`: OK (placeholders legales visibles y claros; sin datos legales inventados).
- Consentimiento del formulario: OK.
- Enlace a política de privacidad desde el consentimiento: OK.

**Revisión funcional (formulario end-to-end tras cambio de consentimiento):**

- URL: `http://localhost:3000/#auditoria`
- Datos de prueba: nombre «Test Legal Consent», email `test.legal.consent@example.com`, teléfono `600000000`, tipo `aesthetic_clinic`, ciudad «A Coruña», web `https://example.com`, área `follow_up`; problema principal: comprobar que el formulario sigue funcionando después de páginas legales y consentimiento.
- Formulario end-to-end: OK.
- UI éxito: OK.
- n8n Success: OK (Webhook Trigger → Validate Security → Check Security → Validate Payload → Send Internal Email → Append Lead to Google Sheets → Respond Success).
- Email interno: OK.
- Google Sheets: OK.
- Sin deployment.
- Sin cambios en Supabase, n8n ni Google Sheets.

## Checkpoint — Deployment readiness (Bloque C)

**Estado: PREPARACIÓN DE VARIABLES DE PRODUCCIÓN DOCUMENTADA (sin valores reales, sin deployment).**

Commit:

- `97bf97e` — chore: document production env variables

Archivos:

- `web/.env.example` — creado y versionado (plantilla sin secretos)
- `web/.gitignore` — excepción `!.env.example` para permitir versionar la plantilla sin versionar `web/.env.local`

Incluye:

- Variables documentadas por nombre (sin valores reales en el repo):
  - `AI_PROVIDER=stub`
  - `ANTHROPIC_API_KEY=`
  - `ANTHROPIC_MODEL=claude-haiku-4-5`
  - `NEXT_PUBLIC_SUPABASE_URL=`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY=`
  - `SUPABASE_SERVICE_ROLE_KEY=`
  - `AUTOMATIONS_ENABLED=false`
  - `N8N_WEBHOOK_URL=`
  - `N8N_WEBHOOK_SECRET=`
- Notas en plantilla: no commitear `web/.env.local`; no pegar claves en chats; producción en panel del hosting (p. ej. Vercel); plantilla sin secretos.
- `SUPABASE_SERVICE_ROLE_KEY` y `N8N_WEBHOOK_SECRET`: solo servidor.
- `N8N_WEBHOOK_URL`: no documentar valor real en el repo.
- `NEXT_PUBLIC_*`: variables públicas expuestas al navegador (revisar RLS/permisos).
- `web/.env.local` no leído ni tocado en este bloque.

Estado del bloque:

- Documentación de variables de producción completada en repo.
- Pendiente: configurar valores reales solo en el panel del hosting cuando llegue el deployment.
- Pendiente: **Bloque D** — Vercel / deployment checklist.

## Current capabilities

- La web presenta la propuesta comercial de PLEXAI y enlaces/anclas por secciones.
- El visitante puede enviar una solicitud de auditoría gratuita vía formulario; los datos pueden persistirse en Supabase vía API.
- Tras guardar un lead, el backend emite el evento `audit_request.created` hacia n8n cuando la integración está configurada y activada.
- n8n puede validar seguridad, validar payload, enviar email interno, registrar el lead en Google Sheets y responder éxito.
- **No están activados:** WhatsApp, calendario, chatbot ni voz.
- **No hay:** login, dashboard, multi-tenant ni deployment público automatizado desde este estado documentado.

## Not implemented yet

- Gestión interna de leads / flujo de revisión post-envío (más allá del guardado)
- Deployment (Vercel u otro), dominio dedicado y publicación en producción
- Datos legales reales del titular en `/privacidad` y `/aviso-legal` (placeholders sustituidos)
- Integraciones de mensajería, agenda o asistentes
- Chatbot PLEXAI
- Dashboard interno de leads
- Gestión avanzada de leads
- Valores reales de variables de producción en el panel del hosting (Vercel u otro); la plantilla `web/.env.example` solo tiene nombres y comentarios
- Datos clínicos o de pacientes en pruebas o flujos

## Environment (sin valores)

- Plantilla versionada: `web/.env.example` (nombres y comentarios; sin secretos). Copiar a `web/.env.local` en desarrollo.
- `web/.env.local` puede existir en máquinas de desarrollo para ejecutar API y cliente; **no debe versionarse** ni documentarse con valores reales.
- No exponer ni listar secretos en documentación ni en commits.
- Variables documentadas en `web/.env.example` (solo nombres aquí):
  - `AI_PROVIDER`, `ANTHROPIC_API_KEY`, `ANTHROPIC_MODEL`
  - `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
  - `AUTOMATIONS_ENABLED`, `N8N_WEBHOOK_URL`, `N8N_WEBHOOK_SECRET`

## Verification (último checkpoint documentado)

**Rediseño landing (`2b5c185`):**

- `npm.cmd run lint`: OK
- `npx tsc --noEmit`: OK
- `npm.cmd run build`: OK
- `npm.cmd run start` en `http://localhost:3000`: OK
- Revisión visual manual: OK
- Formulario end-to-end post-rediseño: OK (2026-05-23, `http://localhost:3001/#auditoria`)

**MVP 3B (flujo n8n):**

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

**Inmediato (post Bloque C):**

1. **Bloque D:** Vercel / deployment checklist (`docs/spec-deployment-readiness-mvp.md`, sección Bloque D).
2. Antes de deploy real: completar datos legales reales del titular (sustituir placeholders en `/privacidad` y `/aviso-legal`).
3. Al desplegar: configurar valores reales de variables solo en el panel del hosting (p. ej. Vercel); no commitear secretos.
4. Otras líneas (no mutuamente excluyentes):
   - Optimización ligera de landing (performance, SEO básico, pulido).
   - Demo comercial (MVP 4 abajo).

**MVP 4 — Demo Polish / Zoom Demo Script**

Descripción: preparar una demo comercial vendible para enseñar PLEXAI:

- Narrativa de la demo.
- Qué mostrar en la landing.
- Cómo enseñar formulario, email y Google Sheets.
- Cómo explicar valor para clínica dental, estética, podología, fisioterapia, academia o negocio local.
- Límites honestos de lo que ya está implementado y lo que todavía no.

No activar integraciones externas ni ampliar alcance sin SPEC previa.
