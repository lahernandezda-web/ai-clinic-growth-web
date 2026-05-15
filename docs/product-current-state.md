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

**MVP 2 — Audit Request Form completado localmente.**

- Landing MVP (MVP 1): completada y documentada.
- Formulario de auditoría gratuita, API de persistencia e integración en landing: implementados y verificados en local.

Commits de referencia (MVP auditoría):

- `4489752` — db: add audit requests schema  
- `781e2d9` — feat: add audit request API  
- `e6df33d` — feat: add audit request form UI  

Commit de referencia (landing inicial):

- `0eb0f81` feat: add plexai landing MVP

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

## Current capabilities

- La web presenta la propuesta comercial de PLEXAI y enlaces/anclas por secciones.
- El visitante puede enviar una solicitud de auditoría gratuita vía formulario; los datos pueden persistirse en Supabase vía API.
- **No están activados:** n8n, email transaccional, WhatsApp, calendario, chatbot ni voz.
- **No hay:** login, dashboard, multi-tenant ni deployment público automatizado desde este estado documentado.

## Not implemented yet

- Gestión interna de leads / flujo de revisión post-envío (más allá del guardado)
- Automatización `lead.created` (n8n, hojas, notificaciones)
- Deployment (Vercel u otro), dominio dedicado y legal/pages legales en producción
- Integraciones de mensajería, agenda o asistentes
- Variables de entorno reales documentadas en repo (por diseño: no deben aparecer valores secretos)

## Environment (sin valores)

- `web/.env.local` puede existir en máquinas de desarrollo para ejecutar API y cliente; **no debe versionarse** ni documentarse con valores reales.
- No exponer ni listar secretos en documentación ni en commits.

## Verification (último checkpoint documentado)

- `npm.cmd run lint`: OK  
- `npx tsc --noEmit`: OK  
- `POST /api/audit-requests`: OK (HTTP 200)  
- Prueba manual del formulario en UI: OK  

## Safety notes

- No se usan datos clínicos ni datos de pacientes en el alcance pretendido del formulario; el usuario debe advertirse en UI.
- No presentar PLEXAI como sistema clínico.
- No prometer integraciones no implementadas.
- No leer, imprimir ni versionar `.env`, `.env.local` ni `web/.env.local`.
- Integraciones nuevas requieren SPEC previa.

## Siguiente fase recomendada

**Decisión pendiente:** no se ha elegido todavía entre las líneas siguientes.

| Ref. | Dirección |
|------|-----------|
| **MVP 3 — Lead Management / Review Workflow** | Flujo interno para revisar solicitudes |
| **MVP 3 — Automatización `lead.created`** | Eventos y orquestación tras crear `audit_request` |

**Opción A — Lead Management interno mínimo**

- Ver solicitudes recibidas  
- Estados p. ej. `new` / `contacted` / `qualified` / `discarded`  
- Notas internas  
- Login elaborado inicialmente opcional (según decisión de producto)

**Opción B — Automatización `lead.created`**

- Emitir evento al crearse un `audit_request`  
- Enviar a n8n  
- Registrar en Google Sheets  
- Posible email interno  
- **Pendiente de SPEC**

**Opción C — Deployment**

- Publicar landing y formulario  
- Preparar Vercel (u otro host)  
- Configurar variables de entorno en el proveedor  
- Dominio y legal básico  
- **Pendiente de SPEC**

Tras decidir MVP 3, actualizar este documento y la SPEC correspondiente antes de ampliar alcance.
