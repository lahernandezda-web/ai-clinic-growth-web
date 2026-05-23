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

**MVP 4 — Demo Comercial: pack documental completo (SPEC, one-pager, guion imprimible, checklist operativo, brief Canva/PDF one-pager, brief/guion vídeo corto) creado, commiteado y pusheado a `origin/main`. Legal Data Readiness: SPEC legal, páginas `/aviso-legal` y `/privacidad` con datos confirmados, validadas (lint/tsc), commiteadas (`8fbf0f9`) y pusheadas. Corrección técnica hydration mismatch hero SVG background: iframe decorativo extraído a Client Component (`e58d36b`), validada (lint/tsc), commiteada y pusheada; repo `main` sincronizado con `origin/main`. Sin deployment; Vercel no conectado; proyecto sin publicación en producción.**

- Landing MVP (MVP 1): completada y documentada.
- Rediseño visual/comercial de landing (post-MVP 3B): completado y commiteado (`2b5c185`); formulario end-to-end post-rediseño revalidado (2026-05-23).
- Deployment readiness — SPEC creada (`4a23225`); Bloque A + B reducido implementado (`9e27e50`): rutas legales, footer y consentimiento del formulario; Bloque C completado (`97bf97e`): plantilla `web/.env.example` versionada y variables de producción documentadas por nombre (sin valores reales); Bloque D completado a nivel documental (`3ec7d55`): checklist Vercel / deployment en `docs/checklist-vercel-deployment-mvp.md`; sin deployment; Vercel no conectado.
- Legal Data Readiness — SPEC (`9c57ef5`): `docs/spec-legal-data-readiness-mvp.md`; implementación mínima en páginas legales (`8fbf0f9`): `/aviso-legal` y `/privacidad` con datos confirmados del titular; sin placeholders legales principales; domicilio no publicado en MVP; email profesional del dominio pendiente; `npm.cmd run lint` y `npx tsc --noEmit` OK; pusheado a `origin/main`; sin deployment; Vercel no conectado.
- Hydration mismatch hero SVG background — corrección mínima (`e58d36b`): `web/components/HeroSvgBackground.tsx` (Client Component); iframe animado del hero ya no se renderiza directamente en SSR; `web/app/page.tsx` sustituye bloque inline por `<HeroSvgBackground />`; sin cambio de copy, formulario, páginas legales ni APIs; sin dependencias nuevas; lint/tsc OK; verificación local OK; pusheado a `origin/main`; sin deployment; Vercel no conectado.
- Formulario de auditoría gratuita, API de persistencia e integración en landing: implementados y verificados en local.
- Emisión server-side del evento `audit_request.created`: implementada en MVP 3A y verificada ahora dentro del flujo MVP 3B.
- Workflow n8n para notificación interna y Google Sheets: configurado y verificado en local.
- MVP 3B — n8n Lead Notification Workflow: completado, verificado en local y funcionando de extremo a extremo.
- MVP 4 Demo Comercial — SPEC documental (`f127ea1`): `docs/spec-demo-commercial-mvp.md`; guiones demo, narrativa, objeciones y checklist pre-demo en SPEC; sin código ni deployment.
- MVP 4 Demo Comercial — One-pager documental (`8f19de6`): `docs/commercial-one-pager-mvp.md`; resumen comercial imprimible/convertible; sin código ni deployment.
- MVP 4 Demo Comercial — Guion imprimible (`b88237c`): `docs/commercial-demo-script-mvp.md`; guion hablado 10 min / 20–30 min, límites y objeciones; cerrado y pusheado.
- MVP 4 Demo Comercial — Checklist operativo (`ab1c4f8`): `docs/commercial-demo-checklist-mvp.md`; preparación pre-demo y post-demo; cerrado y pusheado.
- MVP 4 Demo Comercial — Brief Canva/PDF one-pager (`7d6fb05`): `docs/commercial-one-pager-canva-brief-mvp.md`; guía de diseño visual; cerrado y pusheado; sin PDF ni archivo binario creado.
- MVP 4 Demo Comercial — Brief/guion vídeo corto (`694ca7f`): `docs/commercial-short-video-brief-mvp.md`; guiones 60 s / 90 s, visuales, overlays y límites; cerrado y pusheado; sin vídeo real ni archivo multimedia.

Commits de referencia (Legal Data Readiness):

- `9c57ef5` — docs: add legal data readiness spec
- `8fbf0f9` — feat: update legal pages with confirmed data
- `eeb06f9` — docs: add legal data readiness checkpoint

Commits de referencia (hydration mismatch hero):

- `e58d36b` — fix: avoid hero iframe hydration mismatch

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
- `f95425d` — docs: update commercial pack checkpoint
- `7d6fb05` — docs: add commercial canva brief
- `694ca7f` — docs: add commercial short video brief

## Implemented so far

**Landing `/` (MVP 1 + rediseño visual/comercial)**

- Header con navegación por anclas, hero, problema, propuesta de valor, audiencias, automatización, método, demo conceptual, servicios, bloque de auditoría, FAQ, CTA final
- Metadata/lang en layout; smooth scroll y estilos globales en `web/app/globals.css`
- Rediseño premium/tecnológico: copy generalista (negocios de servicios), alternancia oscuro/claro, hero con SVG animado (`web/public/plexai-flow-hero.svg`) montado en cliente vía `web/components/HeroSvgBackground.tsx` (ver checkpoints rediseño e hydration mismatch hero), CTA «Pide una auditoría gratuita» y formulario de auditoría conservados

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
- **Pendiente decidir siguiente fase:** revisión visual local de rutas legales, preview deploy Vercel, creación real Canva/PDF o grabación de vídeo si se decide (pack documental MVP 4 completo; datos legales confirmados en páginas — ver checkpoint Legal Data Readiness).

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

Pendiente antes de producción (histórico de este bloque; ver checkpoint Legal Data Readiness):

- ~~Completar datos reales del titular en páginas legales~~ — completado en `8fbf0f9` (checkpoint Legal Data Readiness).

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
- Pendiente: email profesional del dominio `plexai.es` (configuración pendiente); publicación de domicilio si se decide en fase posterior.
- Pendiente: decidir primer preview deploy en Vercel o revisión visual local de rutas legales antes.

Verificación:

- Solo documentación; sin modificación de código.
- Sin lectura ni exposición de `web/.env.local`.
- Sin modificación de Supabase, n8n ni Google Sheets.
- Sin deployment ni conexión a Vercel.

## Checkpoint — Legal Data Readiness (páginas legales MVP)

**Estado: DATOS LEGALES CONFIRMADOS APLICADOS, VALIDADOS, COMMITEADOS Y PUSHEADOS (sin deployment, sin Vercel conectado, sin publicación en producción).**

SPEC:

- `9c57ef5` — docs: add legal data readiness spec (`docs/spec-legal-data-readiness-mvp.md`)

Implementación:

- `8fbf0f9` — feat: update legal pages with confirmed data

Archivos:

- `web/app/aviso-legal/page.tsx` — ruta `/aviso-legal`
- `web/app/privacidad/page.tsx` — ruta `/privacidad`

Datos confirmados aplicados (sin inventar domicilio):

- Titular / responsable del tratamiento: Luis Alejandro Hernandez de Andrade.
- Forma jurídica: autónomo / persona física profesional.
- DNI/NIF: 17515047H.
- Contacto general y privacidad: l.a.hernandez.da@gmail.com.
- Ámbito: España.
- Dominio previsto: plexai.es.
- Email profesional del dominio: pendiente de configuración.
- Domicilio: no publicado en esta versión MVP (texto explícito en ambas páginas).
- Enfoque comercial: principalmente B2B / negocios, sin excluir otros contactos interesados.

Incluye en páginas legales:

- Ya no hay placeholders legales principales (`[NOMBRE...]`, `[EMAIL...]`, etc.) en `/aviso-legal` ni `/privacidad`.
- Aviso MVP: texto informativo; no constituye asesoría legal definitiva ni garantía de cumplimiento normativo completo.
- PLEXAI descrito como marca/proyecto comercial de automatización inteligente para negocios; no como servicio clínico ni sanitario.
- Advertencia explícita: no enviar datos clínicos, datos de pacientes, datos de salud ni información especialmente sensible.
- En aviso legal: no prometer funcionalidades, integraciones ni resultados no implementados en esta versión MVP.
- En privacidad: finalidades (auditoría gratuita, contacto comercial, análisis inicial), legitimación por consentimiento del formulario, datos tratados, conservación, no venta de datos, proveedores técnicos operativos (listado genérico) y derechos con canal de contacto.

Fuera de alcance de este bloque:

- Modificación del formulario, APIs, Supabase, n8n, `.env.example` o `web/.env.local`.
- Deployment y conexión a Vercel.
- Publicación de domicilio físico.
- Email profesional en dominio propio (pendiente).

Verificación técnica (pre-commit documentado):

- `npm.cmd run lint`: OK
- `npx tsc --noEmit`: OK
- Revisión del diff: OK (sin placeholders restantes, sin domicilio inventado, sin promesas fuera de alcance detectadas en el alcance revisado)

Estado Git:

- Commit `8fbf0f9` pusheado a `origin/main`.
- `## main...origin/main` (sincronizado).

Próximo paso posible (no ejecutado):

- Revisar visualmente `/aviso-legal` y `/privacidad` en local (`npm.cmd run dev`), o
- Decidir primer preview deploy en Vercel según `docs/checklist-vercel-deployment-mvp.md` (requiere configurar email profesional del dominio y demás precondiciones del checklist cuando corresponda).

## Checkpoint — Hydration mismatch hero SVG background

**Estado: CORRECCIÓN MÍNIMA APLICADA, VALIDADA, COMMITEADA Y PUSHEADA (sin deployment, sin Vercel conectado, sin publicación en producción).**

Problema detectado:

- Hydration mismatch en desarrollo asociado al iframe decorativo del hero SVG background (`/plexai-flow-hero.svg`) renderizado directamente en SSR dentro de `web/app/page.tsx`.
- No rompía la carga de la landing, pero generaba overlay de hydration mismatch en desarrollo al interactuar con `#auditoria` y debía corregirse antes de un preview deploy.

Implementación:

- `e58d36b` — fix: avoid hero iframe hydration mismatch

Archivos:

- `web/components/HeroSvgBackground.tsx` — creado (Client Component; iframe montado solo en cliente con `useSyncExternalStore`)
- `web/app/page.tsx` — modificado (sustituye bloque inline del iframe por `<HeroSvgBackground />`)

Alcance de la corrección:

- Corrección mínima y acotada al fondo animado del hero.
- El iframe del SVG animado ya no se renderiza directamente en SSR.
- Sin cambio de copy comercial.
- Sin modificación del formulario.
- Sin modificación de páginas legales.
- Sin modificación de APIs.
- Sin instalación de dependencias nuevas.
- Sin secretos ni URLs privadas añadidas.

Fuera de alcance de este bloque:

- Modificación de formulario, páginas legales, APIs, Supabase, n8n, `.env.example` o `web/.env.local`.
- Deployment y conexión a Vercel.

Verificación técnica:

- `npm.cmd run lint`: OK
- `npx tsc --noEmit`: OK
- Verificación local: OK (`/`, `/#auditoria`, `/privacidad`, `/aviso-legal`)
- Hydration mismatch del iframe del hero: corregido en código (iframe fuera de SSR)

Estado Git:

- Commit `e58d36b` pusheado a `origin/main`.
- `## main...origin/main` (sincronizado).

Próximo paso posible (no ejecutado):

- Decidir primer preview deploy en Vercel según `docs/checklist-vercel-deployment-mvp.md` cuando corresponda (proyecto más preparado técnicamente para esa decisión; aún no ejecutado).

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
- Pendiente fuera del repo (pack documental MVP 4 completo — ver checkpoints Brief Canva y Brief vídeo corto):
  - Posible creación real en Canva/PDF del one-pager si se decide.
  - Posible conversión a PDF / formato imprimible (guion, checklist) si se decide.
  - Posible grabación/edición real del vídeo corto si se decide (brief/guion documental completado — `694ca7f`).

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
- Pendiente antes de producción pública: email profesional del dominio; preview/producción según checklist Vercel (datos legales principales ya en páginas — `8fbf0f9`).
- Pendiente fuera del repo (brief Canva y brief vídeo corto documentales completados):
  - Posible creación real en Canva/PDF del one-pager si se decide.
  - Posible grabación/edición real del vídeo corto si se decide (brief `694ca7f`).

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

## Checkpoint — MVP 4 Demo Comercial (Brief Canva/PDF one-pager)

**Estado: BRIEF CANVA/PDF CREADO, COMMITEADO Y PUSHEADO (documental, sin PDF ni archivo binario en repo, sin deployment).**

Commit:

- `7d6fb05` — docs: add commercial canva brief

Archivo:

- `docs/commercial-one-pager-canva-brief-mvp.md`

Incluye:

- Formato recomendado (A4 / 16:9), estilo visual y jerarquía de la pieza.
- Copy breve visual derivado del one-pager; bloques e iconografía sugeridos.
- Advertencias comerciales, titulares/cierres alternativos y checklist pre-diseño Canva.
- Estado explícito: pendiente creación real en Canva/PDF si se decide.

Estado del bloque:

- Brief Canva/PDF del one-pager **cerrado** y respaldado en `origin/main`.
- **No** se creó PDF real ni archivo binario en el repositorio.
- No se implementó código.
- No se hizo deployment.
- No se conectó Vercel.

Verificación:

- Solo documentación; sin modificación de código.
- Sin lectura ni exposición de `web/.env.local`.
- Sin modificación de Supabase, n8n ni Google Sheets.
- Sin deployment ni conexión a Vercel.
- Sin PDF ni archivos binarios añadidos al repo.

## Checkpoint — MVP 4 Demo Comercial (Brief/guion vídeo corto)

**Estado: BRIEF/GUION VÍDEO CORTO CREADO, COMMITEADO Y PUSHEADO (documental, sin vídeo real ni archivo multimedia en repo, sin deployment).**

Commit:

- `694ca7f` — docs: add commercial short video brief

Archivo:

- `docs/commercial-short-video-brief-mvp.md`

Incluye:

- Objetivo del documento y del vídeo; duración recomendada (45–60 s / ~90 s).
- Público objetivo, mensaje central y tono (profesional, cercano, sin humo).
- Guiones 60 s y 90 s; ideas visuales; textos para overlays.
- Qué no decir (límites MVP); CTAs; checklist antes de grabar.
- Estado explícito: vídeo real pendiente si el equipo decide grabar.

Estado del bloque:

- Brief/guion del vídeo corto **cerrado** y respaldado en `origin/main`.
- **Pack comercial MVP 4 completo a nivel documental** (SPEC, one-pager, guion demo, checklist, brief Canva, brief vídeo corto).
- **No** se creó vídeo real, audio ni archivo multimedia en el repositorio.
- **No** se creó archivo binario en el repositorio.
- No se implementó código.
- No se hizo deployment.
- No se conectó Vercel.

Pendiente en fases posteriores (fuera de este bloque documental):

- Email profesional del dominio `plexai.es` y decisión preview deploy / producción (datos legales principales en páginas — `8fbf0f9`).
- Creación real en Canva/PDF del one-pager si se decide.
- Grabación/edición real del vídeo corto si se decide.
- Decisión posterior sobre preview deploy en Vercel.

Verificación:

- Solo documentación; sin modificación de código.
- Sin lectura ni exposición de `web/.env.local`.
- Sin modificación de Supabase, n8n ni Google Sheets.
- Sin deployment ni conexión a Vercel.
- Sin vídeo ni archivos multimedia añadidos al repo.

## Current capabilities

- La web presenta la propuesta comercial de PLEXAI y enlaces/anclas por secciones.
- El visitante puede enviar una solicitud de auditoría gratuita vía formulario; los datos pueden persistirse en Supabase vía API.
- Tras guardar un lead, el backend emite el evento `audit_request.created` hacia n8n cuando la integración está configurada y activada.
- n8n puede validar seguridad, validar payload, enviar email interno, registrar el lead en Google Sheets y responder éxito.
- **No están activados:** WhatsApp, calendario, chatbot ni voz.
- Las rutas `/aviso-legal` y `/privacidad` publican datos legales confirmados del titular (MVP; domicilio no publicado; aviso no vinculante).
- **No hay:** login, dashboard, multi-tenant ni deployment público automatizado desde este estado documentado.

## Not implemented yet

- Gestión interna de leads / flujo de revisión post-envío (más allá del guardado)
- Deployment (Vercel u otro), dominio dedicado y publicación en producción
- Email profesional del dominio `plexai.es` (pendiente de configuración)
- Publicación de domicilio en páginas legales (no incluido en MVP actual; solo si el titular lo decide en fase posterior)
- Integraciones de mensajería, agenda o asistentes
- Chatbot PLEXAI
- Dashboard interno de leads
- Gestión avanzada de leads
- Valores reales de variables de producción en el panel del hosting (Vercel u otro); la plantilla `web/.env.example` solo tiene nombres y comentarios
- Datos clínicos o de pacientes en pruebas o flujos
- Materiales comerciales opcionales fuera del repo pendientes (creación real Canva/PDF del one-pager si se decide, conversión PDF de guion/checklist si se decide, grabación/edición real del vídeo corto si se decide); pack documental MVP 4 **completo**: SPEC (`f127ea1`), one-pager (`8f19de6`), guion (`b88237c`), checklist (`ab1c4f8`), brief Canva (`7d6fb05`), brief vídeo corto (`694ca7f`); sin PDF/binarios/vídeo multimedia versionados

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

**Inmediato (post Legal Data Readiness y corrección hydration mismatch hero — `8fbf0f9`, `e58d36b`; ambos pusheados; repo sincronizado con `origin/main`):**

Decidir el siguiente paso entre estas opciones (no mutuamente excluyentes en el medio plazo, pero conviene priorizar una):

- **A. Revisión visual local final pre-deploy** — `npm.cmd run dev` y comprobar `/`, `/#auditoria`, `/aviso-legal` y `/privacidad` (incl. ausencia de overlay de hydration mismatch del hero en desarrollo).
- **B. Materiales comerciales opcionales fuera del repo** — según `docs/spec-demo-commercial-mvp.md` sección 13: posible creación real en Canva/PDF del one-pager (brief `7d6fb05`), posible conversión PDF de guion/checklist, posible grabación/edición real del vídeo corto (brief `694ca7f`; pack documental: SPEC `f127ea1`, one-pager `8f19de6`, guion `b88237c`, checklist `ab1c4f8`, brief Canva `7d6fb05`, brief vídeo `694ca7f`).
- **C. Decidir primer preview deploy en Vercel (aún no ejecutado)** — seguir `docs/checklist-vercel-deployment-mvp.md`: crear proyecto, root `web/`, variables en panel (sin commitear secretos), preview deploy y checklist funcional post-deploy. Precondición legal mínima cumplida (`8fbf0f9`); corrección técnica hydration mismatch hero aplicada (`e58d36b`); el proyecto queda más preparado para esta decisión, pero **no se ha hecho deployment ni se ha conectado Vercel**; pendiente email profesional del dominio si se desea antes de producción.

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
| Brief Canva/PDF one-pager | `docs/commercial-one-pager-canva-brief-mvp.md` | `7d6fb05` |
| Brief/guion vídeo corto | `docs/commercial-short-video-brief-mvp.md` | `694ca7f` |

Alcance documentado: narrativa y guiones para enseñar PLEXAI (landing, formulario, flujo interno conceptual, límites honestos por sector); one-pager resumen; guion hablado imprimible; checklist operativo pre/post demo; brief de diseño para pieza visual del one-pager; brief/guion para vídeo corto de presentación (60 s / 90 s). **Pack documental MVP 4 completo.** Todo respaldado en GitHub (`origin/main`). Sin PDF, vídeo ni archivos binarios/multimedia en repo; sin deployment; Vercel no conectado.

Pendiente en fases posteriores: email profesional del dominio `plexai.es`; decisión y ejecución de primer preview deploy o producción en Vercel (checklist `docs/checklist-vercel-deployment-mvp.md`; aún no ejecutado); creación real Canva/PDF del one-pager si se decide; grabación/edición real del vídeo corto si se decide; conversión PDF opcional de otros materiales. Datos legales principales en `/aviso-legal` y `/privacidad` completados (`8fbf0f9`). Hydration mismatch del hero corregido (`e58d36b`). No activar integraciones externas ni ampliar alcance sin SPEC previa.
