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

**MVP 4 — Demo Comercial: pack documental (SPEC, one-pager, guion imprimible, checklist operativo) creado, commiteado y pusheado a `origin/main`. Sin implementación de código ni deployment; Vercel no conectado.**

- Landing MVP (MVP 1): completada y documentada.
- Rediseño visual/comercial de landing (post-MVP 3B): completado y commiteado (`2b5c185`); formulario end-to-end post-rediseño revalidado (2026-05-23).
- Deployment readiness — SPEC creada (`4a23225`); Bloque A + B reducido implementado (`9e27e50`): páginas legales provisionales, footer y consentimiento del formulario; Bloque C completado (`97bf97e`): plantilla `web/.env.example` versionada y variables de producción documentadas por nombre (sin valores reales); Bloque D completado a nivel documental (`3ec7d55`): checklist Vercel / deployment en `docs/checklist-vercel-deployment-mvp.md`; sin deployment; Vercel no conectado.
- Formulario de auditoría gratuita, API de persistencia e integración en landing: implementados y verificados en local.
- Emisión server-side del evento `audit_request.created`: implementada en MVP 3A y verificada ahora dentro del flujo MVP 3B.
- Workflow n8n para notificación interna y Google Sheets: configurado y verificado en local.
- MVP 3B — n8n Lead Notification Workflow: completado, verificado en local y funcionando de extremo a extremo.
- MVP 4 Demo Comercial — SPEC documental (`f127ea1`): `docs/spec-demo-commercial-mvp.md`; guiones demo, narrativa, objeciones y checklist pre-demo en SPEC; sin código ni deployment.
- MVP 4 Demo Comercial — One-pager documental (`8f19de6`): `docs/commercial-one-pager-mvp.md`; resumen comercial imprimible/convertible; sin código ni deployment.
- MVP 4 Demo Comercial — Guion imprimible (`b88237c`): `docs/commercial-demo-script-mvp.md`; guion hablado 10 min / 20–30 min, límites y objeciones; cerrado y pusheado.
- MVP 4 Demo Comercial — Checklist operativo (`ab1c4f8`): `docs/commercial-demo-checklist-mvp.md`; preparación pre-demo y post-demo; cerrado y pusheado.

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
- `55113aa` — docs: add env readiness checkpoint
- `3ec7d55` — docs: add Vercel deployment checklist

Commits de referencia (MVP 4 Demo Comercial):

- `f127ea1` — docs: add commercial demo spec
- `7873a92` — docs: add commercial demo checkpoint
- `8f19de6` — docs: add commercial one-pager
- `4257726` — docs: add commercial one-pager checkpoint
- `b88237c` — docs: add commercial demo script
- `ab1c4f8` — docs: add commercial demo checklist

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
- **Pendiente decidir siguiente fase:** materiales comerciales opcionales MVP 4, datos legales reales o preview deploy Vercel (ver pack MVP 4 Demo Comercial).

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
- **Bloque D** completado a nivel documental (ver checkpoint Bloque D).

## Checkpoint — Deployment readiness (Bloque D)

**Estado: CHECKLIST VERCEL / DEPLOYMENT PREPARADO (documental, sin deployment, sin Vercel conectado).**

Commit:

- `3ec7d55` — docs: add Vercel deployment checklist

Archivo:

- `docs/checklist-vercel-deployment-mvp.md` — creado

Incluye:

- Precondiciones ya completadas antes de deployment.
- Datos faltantes antes de producción (titular legal, dominio, n8n/Sheets prod, etc.).
- Configuración prevista en Vercel (repo, root `web/`, Next.js, build, política de deploy/preview).
- Variables de entorno en Vercel documentadas por nombre (sin valores reales).
- Checklist de seguridad pre-deploy.
- Checklist funcional post-deploy.
- Riesgos específicos del deployment.
- Plan futuro de ejecución (no ejecutado).
- Criterios de aceptación del Bloque D.

Estado del bloque:

- Deployment checklist preparado y versionado en repo.
- No se ha hecho deployment.
- No se ha conectado Vercel.
- Pendiente: completar datos legales reales antes de producción pública.
- Pendiente: decidir si crear primer preview deploy en Vercel o completar primero datos reales/dominio.

Verificación:

- Solo documentación; sin modificación de código.
- Sin lectura ni exposición de `web/.env.local`.
- Sin modificación de Supabase, n8n ni Google Sheets.
- Sin deployment ni conexión a Vercel.

## Checkpoint — MVP 4 Demo Comercial (SPEC)

**Estado: SPEC COMERCIAL LISTA (documental, sin implementación de código, sin deployment).**

Commit:

- `f127ea1` — docs: add commercial demo spec

Archivo:

- `docs/spec-demo-commercial-mvp.md`

Incluye:

- Objetivo de demo comercial.
- Público objetivo.
- Mensaje central.
- Qué se puede mostrar en la demo actual.
- Qué no se debe prometer.
- Guion demo corto (10 minutos).
- Guion demo extendido (20–30 minutos).
- Narrativa comercial.
- Casos de uso por sector.
- Objeciones frecuentes.
- Checklist antes de demo.
- Cierre comercial sugerido.
- Materiales pendientes.
- Criterios de aceptación.

Estado del bloque:

- SPEC comercial lista y pusheada a `origin/main`.
- No se implementó código.
- No hay deployment.
- Pendiente crear materiales comerciales derivados opcionales (one-pager, guion y checklist operativo completados — ver checkpoints correspondientes):
  - Posible conversión a PDF / formato imprimible (guion, checklist, one-pager) si se decide.
  - Posible vídeo corto de presentación.
  - Posible versión en Canva del one-pager.

Verificación:

- Solo documentación; sin modificación de código.
- Sin lectura ni exposición de `web/.env.local`.
- Sin modificación de Supabase, n8n ni Google Sheets.
- Sin deployment ni conexión a Vercel.

## Checkpoint — MVP 4 Demo Comercial (One-pager)

**Estado: ONE-PAGER COMERCIAL CREADO, COMMITEADO Y PUSHEADO (documental, sin implementación de código, sin deployment).**

Commit:

- `8f19de6` — docs: add commercial one-pager

Archivo:

- `docs/commercial-one-pager-mvp.md`

Incluye:

- Encabezado y mensaje central de PLEXAI.
- Problema y propuesta de valor.
- Qué hace PLEXAI y qué demuestra el MVP actual.
- Sectores objetivo y ejemplos de automatización.
- Beneficios, límites honestos y método de trabajo.
- Cierre comercial con llamada a la acción (auditoría gratuita).
- Nota de versión texto para conversión a PDF, Canva o presentación breve.

Estado del bloque:

- One-pager comercial creado y pusheado a `origin/main`.
- MVP 4 comercial queda respaldado en remoto.
- No se implementó código.
- No se hizo deployment.
- No se conectó Vercel.
- Pendiente: completar datos legales reales antes de producción pública.
- Pendiente crear materiales comerciales opcionales (guion y checklist completados — ver checkpoints Guion y Checklist):
  - Posible conversión a PDF / formato imprimible si se decide.
  - Posible versión en Canva del one-pager.
  - Posible vídeo corto de presentación.

Verificación:

- Solo documentación; sin modificación de código.
- Sin lectura ni exposición de `web/.env.local`.
- Sin modificación de Supabase, n8n ni Google Sheets.
- Sin deployment ni conexión a Vercel.

## Checkpoint — MVP 4 Demo Comercial (Guion imprimible)

**Estado: GUION IMPRIMIBLE CREADO, COMMITEADO Y PUSHEADO (documental, sin implementación de código, sin deployment).**

Commit:

- `b88237c` — docs: add commercial demo script

Archivo:

- `docs/commercial-demo-script-mvp.md`

Incluye:

- Objetivo, duraciones (10 min / 20–30 min) y mensaje central.
- Checklist previo, guion de apertura y estructura minuto a minuto / por bloques.
- Qué mostrar y qué no prometer; frases útiles; objeciones con respuestas honestas.
- Cierre comercial, notas internas y estado (pendiente PDF/Canva si se decide).

Estado del bloque:

- Guion imprimible de demo **cerrado** y respaldado en `origin/main`.
- No se implementó código.
- No se hizo deployment.
- No se conectó Vercel.

Verificación:

- Solo documentación; sin modificación de código.
- Sin lectura ni exposición de `web/.env.local`.
- Sin modificación de Supabase, n8n ni Google Sheets.
- Sin deployment ni conexión a Vercel.

## Checkpoint — MVP 4 Demo Comercial (Checklist operativo)

**Estado: CHECKLIST OPERATIVO INTERNO CREADO, COMMITEADO Y PUSHEADO (documental, sin implementación de código, sin deployment).**

Commit:

- `ab1c4f8` — docs: add commercial demo checklist

Archivo:

- `docs/commercial-demo-checklist-mvp.md`

Incluye:

- Cuándo usar el checklist; preparación técnica y comercial.
- Límites del MVP antes de la demo; flujo recomendado.
- Validación antes de compartir pantalla (sin secretos ni datos reales).
- Tareas post-demo y criterio de demo exitosa.
- Notas internas y referencias al pack comercial MVP 4.

Estado del bloque:

- Checklist operativo interno **cerrado** y respaldado en `origin/main`.
- No se implementó código.
- No se hizo deployment.
- No se conectó Vercel.

Verificación:

- Solo documentación; sin modificación de código.
- Sin lectura ni exposición de `web/.env.local`.
- Sin modificación de Supabase, n8n ni Google Sheets.
- Sin deployment ni conexión a Vercel.

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
- Materiales comerciales opcionales del MVP 4 pendientes (conversión PDF/formato imprimible si se decide, vídeo corto, versión Canva del one-pager); pack base completado: SPEC (`f127ea1`), one-pager (`8f19de6`), guion (`b88237c`), checklist (`ab1c4f8`)

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

**Inmediato (post MVP 4 Demo Comercial — pack documental base listo y pusheado):**

Decidir el siguiente paso entre estas opciones (no mutuamente excluyentes en el medio plazo, pero conviene priorizar una):

- **A. Materiales comerciales opcionales del MVP 4** — según `docs/spec-demo-commercial-mvp.md` sección 13: posible conversión a PDF/formato imprimible (guion, checklist, one-pager), posible vídeo corto, posible versión Canva del one-pager (pack base: SPEC `f127ea1`, one-pager `8f19de6`, guion `b88237c`, checklist `ab1c4f8`).
- **B. Completar datos legales reales** — sustituir placeholders en `/privacidad` y `/aviso-legal`; email de contacto legal/privacidad; requisito antes de producción pública.
- **C. Preparar primer preview deploy en Vercel** — seguir `docs/checklist-vercel-deployment-mvp.md`: crear proyecto, root `web/`, variables en panel (sin commitear secretos), preview deploy y checklist funcional post-deploy.

Notas transversales:

- Al desplegar (cuando se decida): configurar valores reales de variables solo en el panel del hosting; no commitear secretos.
- Optimización ligera de landing (performance, SEO básico, pulido) sigue disponible como mejora incremental.

**MVP 4 — Demo Comercial (referencia — pack documental)**

| Material | Archivo | Commit |
|----------|---------|--------|
| SPEC | `docs/spec-demo-commercial-mvp.md` | `f127ea1` |
| One-pager | `docs/commercial-one-pager-mvp.md` | `8f19de6` |
| Guion imprimible | `docs/commercial-demo-script-mvp.md` | `b88237c` |
| Checklist operativo | `docs/commercial-demo-checklist-mvp.md` | `ab1c4f8` |

Alcance documentado: narrativa y guiones para enseñar PLEXAI (landing, formulario, flujo interno conceptual, límites honestos por sector); one-pager resumen; guion hablado imprimible; checklist operativo pre/post demo. Todo respaldado en GitHub (`origin/main`). Sin deployment; Vercel no conectado.

Pendiente en fases posteriores: datos legales reales antes de producción pública; materiales opcionales (PDF/formato imprimible, vídeo corto, Canva). No activar integraciones externas ni ampliar alcance sin SPEC previa.
