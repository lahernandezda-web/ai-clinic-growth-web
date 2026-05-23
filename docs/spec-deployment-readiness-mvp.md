# SPEC — Deployment Readiness MVP (PLEXAI)

## Estado

| Campo | Valor |
| --- | --- |
| Fase | SPEC |
| Implementación | Pendiente |
| Alcance | Preparación segura y mínima para publicación en producción |
| Código | No modificar en esta fase |
| Deployment | No ejecutar en esta fase |
| Secretos | No documentar valores reales |

---

## 1. Objetivo

Preparar **PLEXAI** para una publicación segura y mínima en producción, sin sobreingeniería.

Esta SPEC define qué revisar, qué verificar y qué implementar en bloques pequeños antes de exponer la landing y el formulario de auditoría gratuita al público. No implementa cambios; solo orienta el siguiente trabajo.

---

## 2. Alcance

| Área | Qué cubre |
| --- | --- |
| Landing | Copy, estructura, CTAs, claims comerciales, mobile/desktop, hero/SVG |
| Formulario de auditoría | UX, validaciones, mensajes, consentimiento, flujo end-to-end |
| Variables de entorno de producción | Nombres requeridos, uso server-side vs público (sin valores reales) |
| Plataforma de hosting | Vercel o equivalente (build, dominio, HTTPS) |
| Dominio | DNS, certificado, URL canónica |
| Política de privacidad | Página o sección básica, visible y enlazable |
| Aviso legal básico | Página o sección mínima |
| Consentimiento del formulario | Texto claro, finalidad, checkbox o equivalente |
| Protección de datos de leads comerciales | Supabase, retención, acceso, no datos clínicos |
| n8n Production Webhook | URL de producción, secreto, validación X-Automation-Secret |
| Email interno | Notificación operativa ante nuevo lead |
| Google Sheets | Registro operativo complementario (no fuente de verdad) |
| Checklist pre-publicación | Legal, técnico y funcional unificado |

---

## 3. Fuera de alcance

Queda explícitamente fuera de esta fase:

- Autenticación de usuarios
- Multi-tenant
- Panel admin
- CRM avanzado
- WhatsApp
- Voz
- Pagos y facturación
- Datos clínicos o de pacientes
- Automatizaciones nuevas
- Refactor grande
- Docker / microservicios
- Cambios en CURSOR.p1
- Cambios en business-assistant-mvp
- Deployment real
- Creación de variables con valores reales

---

## 4. Estado actual

| MVP / hito | Estado |
| --- | --- |
| MVP 1 — Landing PLEXAI | Completado |
| MVP 2 — Formulario de auditoría | Completado |
| MVP 3A — Event emitter | Completado |
| MVP 3B — n8n / email / Sheets | Completado y verificado en local |
| Rediseño landing | Completado (2b5c185) |
| Revalidación formulario post-rediseño | Completada el 2026-05-23 (dae8241) |
| Rama main | Sincronizada con origin/main |

Flujo operativo actual verificado en local:

- Landing PLEXAI
- Formulario de auditoría gratuita
- POST /api/audit-requests
- Supabase public.audit_requests
- Evento audit_request.created, si AUTOMATIONS_ENABLED y variables están configuradas
- n8n Production Webhook protegido con X-Automation-Secret
- Email interno
- Google Sheets

No se ha desplegado a producción pública en el momento de esta SPEC.

---

## 5. Riesgos antes de publicar

| Riesgo | Descripción | Mitigación |
| --- | --- | --- |
| Datos personales comerciales | El formulario recoge nombre, email, teléfono y contexto de negocio | Política de privacidad, consentimiento explícito, minimización de datos |
| Consentimiento y finalidad | Tratamiento sin base legal clara | Checkbox y texto de finalidad: responder solicitud de auditoría gratuita |
| Política de privacidad visible | Usuario no sabe cómo se usan sus datos | Enlace en footer y cerca del formulario |
| Aviso legal | Falta identificación del responsable o condiciones de uso web | Aviso legal básico con placeholders hasta datos reales del titular |
| Datos de prueba | Filas de prueba en Supabase o Sheets en entorno compartido | Limpiar o marcar antes de producción; no usar datos reales de terceros en demos persistentes |
| Secretos en producción | Claves en cliente, logs o repo | Solo nombres en docs; valores solo en panel del host (Vercel, etc.) |
| Webhook n8n público | Endpoint expuesto sin validación | N8N_WEBHOOK_SECRET y header X-Automation-Secret; rechazar si no coincide |
| Promesas comerciales exageradas | Claims que no se pueden cumplir | Revisar copy de landing y FAQ; tono MVP honesto |
| Integraciones no activas | Mencionar WhatsApp, voz, CRM, etc. sin estar operativos | Copy solo sobre lo activo: formulario, seguimiento interno, automatización básica |
| Datos clínicos / pacientes | RGPD y responsabilidad sanitaria | Advertencia en formulario; no recoger ni procesar; revisar payloads y Sheets |
| Rendimiento hero / SVG | plexai-flow-hero.svg animado puede afectar LCP o móvil bajo | Medir en producción; reducir animación o peso si hace falta |

---

## 6. Checklist legal mínimo

RGPD básico — pendiente de implementación. Marcar como pendiente hasta que existan páginas o textos publicados:

- [ ] Política de privacidad básica (página dedicada o sección legal)
- [ ] Aviso legal básico (titular, uso del sitio, limitación de responsabilidad mínima)
- [ ] Texto de consentimiento del formulario (vinculado a envío)
- [ ] Finalidad del tratamiento: responder a la solicitud de auditoría gratuita y contacto comercial relacionado
- [ ] Datos recogidos (lista explícita en política y/o junto al formulario):

  - Nombre
  - Email
  - Teléfono
  - Tipo de negocio
  - Ciudad
  - Web o Instagram
  - Problema principal
  - Área de mejora

- [ ] Responsable del tratamiento: [PLACEHOLDER — razón social / titular] (no inventar datos reales)
- [ ] Contacto privacidad: [PLACEHOLDER — email de contacto] (no inventar datos reales)
- [ ] Conservación: definir plazo en implementación futura (documentar en política)
- [ ] Derechos RGPD informados: acceso, rectificación, supresión, oposición, limitación del tratamiento (y portabilidad si aplica)
- [ ] No recoger datos clínicos ni de pacientes — reforzar en formulario, política y validación de copy
- [ ] Encargados / subcontratación (cuando se implemente): mencionar Supabase, proveedor de email, Google (Sheets), n8n, hosting — sin URLs ni credenciales reales en documentación pública del repo

---

## 7. Checklist técnico de producción

### 7.1 Calidad de código pre-deploy

- [ ] Build de producción limpio (npm run build o equivalente en web/)
- [ ] Lint limpio
- [ ] TypeScript sin errores

### 7.2 Variables de entorno

Configurar en el panel del proveedor de hosting. No commitear valores reales.

| Variable | Uso esperado |
| --- | --- |
| ANTHROPIC_API_KEY | Server-side (revisar si es necesaria para MVP landing + formulario) |
| NEXT_PUBLIC_SUPABASE_URL | Público (cliente) |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Público (cliente; permisos RLS) |
| SUPABASE_SERVICE_ROLE_KEY | Solo server-side — nunca exponer al navegador |
| AUTOMATIONS_ENABLED | Server-side — true en producción solo cuando el flujo esté listo |
| N8N_WEBHOOK_URL | Server-side — URL del webhook de producción (no documentar URL real en repo) |
| N8N_WEBHOOK_SECRET | Solo server-side — compartido con validación en n8n |

### 7.3 Seguridad de integraciones

- [ ] Confirmar que SUPABASE_SERVICE_ROLE_KEY solo se usa en código server (API routes, server actions)
- [ ] Confirmar que N8N_WEBHOOK_SECRET solo se usa server-side
- [ ] Confirmar que el cliente de automatizaciones envía header X-Automation-Secret con el valor configurado
- [ ] Confirmar que n8n rechaza peticiones sin secreto válido
- [ ] Confirmar que payloads a n8n no incluyen secretos ni datos clínicos

### 7.4 Infraestructura y SEO mínimo

- [ ] Dominio personalizado configurado y apuntando al proyecto
- [ ] HTTPS activo (certificado del proveedor)
- [ ] robots.txt y metadata básica revisados (title, description, lang)
- [ ] Página 404 razonable si aplica en App Router
- [ ] Revisar performance del hero y SVG animado en móvil y desktop (Lighthouse o equivalente)

### 7.5 Documentación operativa

- [ ] Actualizar .env.example solo con nombres y comentarios de uso, si hace falta en Bloque C (sin valores reales)
- [ ] Checklist de deployment en Bloque D (Vercel o equivalente)

---

## 8. Checklist funcional antes de publicar

Ejecutar en entorno de producción (o preview con mismas variables) una vez desplegado:

- [ ] Abrir landing / sin errores de consola críticos
- [ ] Revisar layout mobile (navegación, formulario, CTAs)
- [ ] Revisar layout desktop
- [ ] Enviar formulario de prueba con datos ficticios claramente identificables como prueba
- [ ] Confirmar fila en Supabase (public.audit_requests)
- [ ] Confirmar ejecución en n8n (historial del workflow)
- [ ] Confirmar email interno recibido
- [ ] Confirmar fila en Google Sheets
- [ ] Confirmar mensaje de éxito visible al usuario
- [ ] Confirmar que si n8n falla, el formulario sigue guardando en Supabase y muestra éxito al usuario
- [ ] Confirmar que logs del servidor no imprimen emails completos, teléfonos, secretos ni payloads con claves

---

## 9. Propuesta de implementación futura por bloques

Implementación incremental recomendada (cada bloque = PR o commit acotado):

### Bloque A — Páginas legales básicas

- Crear /privacidad (o equivalente) y /aviso-legal (o sección legal en footer)
- Enlaces en footer y referencia desde el formulario
- Placeholders claramente marcados hasta que el titular proporcione datos reales

### Bloque B — Copy del formulario y consentimiento

- Revisar labels, ayudas y mensaje de éxito
- Añadir o mejorar checkbox de consentimiento con enlace a privacidad
- Reforzar advertencia: no enviar datos clínicos ni de pacientes

### Bloque C — Variables de producción y .env.example

- Documentar nombres y comentarios en .env.example (sin valores)
- Lista de variables en README o doc de deployment interno (sin secretos)

### Bloque D — Vercel / deployment checklist

- Proyecto conectado al repo
- Root directory web/ si aplica
- Variables configuradas en dashboard
- Dominio y redirects
- Preview vs production

### Bloque E — Prueba en producción

- Deploy a preview o production
- Ejecutar checklist funcional (sección 8)
- Limpiar datos de prueba si procede

### Bloque F — Checkpoint documental

- Añadir docs/checkpoint-deployment-readiness-mvp.md con fecha, entorno, resultados de checklists y commits de referencia
- Actualizar docs/product-current-state.md si corresponde

---

## 10. Criterios de aceptación de esta fase SPEC

La fase SPEC — Deployment readiness se considera lista cuando:

- [ ] Esta SPEC ha sido revisada y aprobada por el titular del proyecto
- [ ] No se han leído ni expuesto secretos de web/.env.local ni de producción
- [ ] No se ha desplegado sin plan explícito (Bloques A–F)
- [ ] Existen checklists legal, técnico y funcional claros y accionables
- [ ] Se sabe exactamente qué implementar en el siguiente bloque (recomendado: Bloque A o Bloque B según prioridad legal)

---

## Referencias internas

Documentación relacionada (sin secretos):

- docs/spec-plexai-landing-mvp.md
- docs/spec-plexai-landing-redesign-mvp.md
- docs/spec-audit-request-form-mvp.md
- docs/spec-n8n-lead-notification-workflow-mvp.md
- docs/product-current-state.md

Commits recientes:

- dae8241
- 55574c8
- 2b5c185
- c0ee823
- f3c8db9

---

Documento creado en fase SPEC. No sustituye asesoramiento legal. Para textos legales definitivos, validar con el titular o asesoría jurídica.
