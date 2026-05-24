# SPEC — Landing Demo Chatbot MVP

## Objetivo

Añadir un **chatbot demo integrado** en la landing de PLEXAI (`web/app/page.tsx`) para orientar al visitante sobre posibles procesos automatizables y derivarlo a una **auditoría gratuita** o **llamada de diagnóstico**, sin activar integraciones reales.

El chatbot debe sentirse alineado con el mensaje de marca y con la biblioteca comercial interna en `docs/`, pero implementarse como **capa guiada y controlada**, no como asistente genérico ni diagnóstico técnico.

---

## Por qué ahora

- La landing PLEXAI ya está **visualmente avanzada** y lista para demos comerciales (Zoom, presencial).
- Antes de seguir con **Vercel Preview Deploy**, conviene valorar un **diferenciador interactivo** que muestre el enfoque de PLEXAI: detectar tareas repetitivas y proponer automatizaciones pequeñas con control humano.
- Permite **enseñar valor en vivo** sin depender de explicar solo slides o scroll estático.
- No requiere Supabase, n8n, WhatsApp, calendario ni IA real para ser útil en la primera demo.

---

## Relación con la biblioteca comercial existente

El diseño del guion, las categorías de negocio, los dolores y las recomendaciones deben **basarse conceptualmente** en material ya documentado:

| Fuente en `docs/` | Uso para el chatbot |
|-------------------|-------------------|
| `commercial-sector-playbooks/` | Sectores, dolores habituales, límites por vertical |
| `commercial-sector-playbooks/demo-scenarios.md` | Narrativa de demo y cierres |
| `commercial-sales-system/use-case-library.md` | Ideas de automatización MVP (UC01–UC11, etc.) |
| `commercial-sales-system/free-audit-methodology.md` | Estructura de diagnóstico y preguntas por área |
| `commercial-sales-system/lead-qualification-framework.md` | Señales de buen encaje y red flags |
| `commercial-sales-system/mvp-proposal-template.md` | Tono de alcance, exclusiones, un flujo + una métrica |
| `commercial-quality-system/` | Frases prohibidas, claims seguros, reglas de seguridad |
| `commercial-test-lab/` | Casos simulados, informes y propuestas de ejemplo |

### Aclaraciones V1

- **No** leerá archivos de `docs/` en runtime.
- **No** RAG, embeddings ni base de conocimiento dinámica.
- En V1 se **extraerá manualmente** una síntesis segura (sectores, dolores, 2–3 recomendaciones por combinación, disclaimers, CTAs) y se codificará en **objetos locales** dentro del componente o un módulo `web/lib/landing-demo-chatbot/`.
- `docs/` sigue siendo la **fuente interna de verdad** para redactar y revisar guiones; cualquier cambio comercial se refleja en código mediante PR humano, no en caliente.
- Evoluciones futuras (Claude, KB curada, calendario, leads en Supabase) quedan **fuera de V1**.

---

## Principio de implementación

Primera versión recomendada:

| Sí (V1) | No (V1) |
|---------|---------|
| Chatbot **guiado / scripted** | IA real (Claude, Anthropic) |
| Widget flotante en landing | Backend / API routes |
| Estado local React (`useState`) | Supabase, persistencia |
| Contenido en arrays/objetos TS | n8n, webhooks, CRM |
| CTA a `#auditoria` o URL externa configurable | Calendario real, OAuth |
| Copy revisado con reglas comerciales | WhatsApp, voz |
| Disclaimer orientativo visible | RAG / lectura de `docs/` |
| Sin dependencias nuevas | Variables de entorno nuevas |
| Reutilizar estilos Tailwind de la landing | Simular “he analizado tu negocio” |

**No reutilizar** en V1 la ruta `/chat` ni `POST /api/chat/turn`: ese stack es producto interno (Claude + Supabase) y contradice el objetivo de demo simple, segura y sin backend.

---

## Alcance funcional V1

El chatbot debe poder:

1. **Abrirse y cerrarse** como widget flotante (botón fijo, p. ej. esquina inferior derecha).
2. **Saludar** con mensaje de PLEXAI y propósito (orientación, no diagnóstico).
3. Preguntar **situación / dolor principal** (opciones botón).
4. Preguntar **tipo de negocio** (opciones botón; no excluyentes con la anterior).
5. Preguntar **objetivo** (ahorrar tiempo, mejorar orden, mejorar seguimiento, empezar con IA).
6. Opcionalmente una pregunta corta sobre **volumen o canal** (botones: web, teléfono/redes, mixto, no lo tengo claro) — solo si no alarga demasiado la demo Zoom.
7. Devolver **2–3 automatizaciones orientativas** según mapa local `situation × businessType × goal`.
8. Incluir **disclaimer**: orientación inicial, no diagnóstico definitivo, no sustituye auditoría humana.
9. **CTA final**: “Pide una auditoría gratuita” → scroll a `#auditoria` / foco en formulario; opcional “Agenda una llamada” → enlace externo configurable (constante en código, sin `.env` obligatorio en V1).
10. **Reiniciar** conversación desde el widget.
11. Ser **responsive** y accesible (focus, `aria-label` en botón abrir/cerrar).

No debe:

- Pedir nombre, email, teléfono ni datos personales.
- Guardar historial en servidor o `localStorage` (opcional: permitir solo reinicio en sesión; sin PII).
- Hacer llamadas `fetch` externas.

---

## Tipos de negocio / situaciones base

Categorías **no excluyentes** (el visitante elige la más cercana; el mapa puede usar la combinación situación + negocio):

### Situaciones (dolor / contexto)

- Negocio con **muchas solicitudes** entrantes
- Negocio con **seguimiento manual** (leads que se enfrían)
- **Solicitudes desordenadas** (varios canales sin registro único)
- **Tareas administrativas repetitivas** (copiar, avisar, clasificar)
- **Citas, reservas o consultas** sin flujo claro (sin prometer calendario)
- **Respuestas tardías** o fuera de horario sin aviso interno
- **Datos dispersos** (hoja, email, WhatsApp personal sin criterio)
- Quiere **usar IA pero no sabe por dónde empezar**
- **Equipo comercial pequeño** sin priorización
- **Otros** (respuesta genérica prudente + CTA auditoría)

### Tipos de negocio (alineados con playbooks y `AuditRequestForm`)

- Servicios profesionales / estudio
- Clínica dental
- Clínica estética
- Podología
- Fisioterapia / osteopatía
- Clínica o centro privado (genérico)
- Academia o formación
- Negocio local de servicios
- Otro

### Objetivos (cuarta pregunta sugerida)

- Ahorrar tiempo en tareas repetitivas
- Mejorar orden de solicitudes y contactos
- Mejorar seguimiento de oportunidades
- Empezar con IA de forma prudente (piloto pequeño)

---

## Problemas frecuentes que el chatbot puede “detectar”

Lista orientativa extraída de playbooks, auditoría y casos de uso (el bot **no diagnostica**; refleja la opción elegida):

| Problema | Señal en conversación |
|----------|----------------------|
| Pérdida de tiempo en tareas repetitivas | “Repito tareas administrativas” |
| Solicitudes desordenadas | Varios canales, sin registro único |
| Falta de seguimiento | Leads sin próximo paso |
| Respuestas tardías | Nadie ve solicitudes fuera de horario |
| Trabajo duplicado | Copiar formulario a hoja, reescribir datos |
| Datos dispersos | Email + Excel + DMs |
| Agenda / citas manuales | Solicitud sin aviso al responsable |
| Consultas repetidas | Misma explicación por teléfono |
| Falta de priorización | Urgencias mezcladas con consultas |
| No saber por dónde empezar con IA | Objetivo “empezar con IA” |
| Fin de semana sin registro | Casos A01, escenarios demo |
| Campañas sin trazabilidad | Origen/UTM (mención suave, F2) |

---

## Posibles respuestas orientativas (2–3 por flujo)

Ideas prudentes alineadas con UC01–UC11 y metodología de auditoría. Siempre con matiz “podríamos empezar revisando…”:

1. **Registro centralizado** de solicitudes web (o canal acordado) → fila en hoja / herramienta + aviso interno.
2. **Clasificación por tipo de servicio** con reglas escritas + revisión humana.
3. **Etiquetado de urgencia comercial** (flag + aviso prioritario; sin SLA médico).
4. **Aviso interno al responsable del día** cuando entra una solicitud.
5. **Plantilla de primera respuesta sugerida** solo para el equipo (humano envía al cliente).
6. **Cola “sin asignar”** visible para no perder leads huérfanos.
7. **Formulario interno rápido** para llamadas que hoy no pasan al digital.
8. **Recordatorio interno** de seguimiento (no persecución automática al cliente sin consentimiento).

Frases a evitar en respuestas: ver sección Seguridad.

---

## Copy sugerido (guion V1)

### Apertura

> Hola, soy el asistente de orientación de PLEXAI. Puedo ayudarte a ver si hay tareas repetitivas en tu negocio que **podrían** automatizarse con control humano. Es una orientación inicial, no un diagnóstico cerrado.

### Pregunta 1 — Situación

> ¿Qué describe mejor tu situación ahora mismo?

Opciones (botones):

- Pierdo tiempo haciendo seguimiento manual
- Recibo solicitudes desordenadas
- Repito tareas administrativas cada semana
- Tengo citas o consultas difíciles de organizar
- Quiero usar IA pero no sé por dónde empezar
- Otro

### Pregunta 2 — Tipo de negocio

> ¿Qué tipo de negocio tienes?

Opciones:

- Servicios profesionales
- Clínica o centro privado
- Clínica dental / estética / podología / fisio (agrupar o desglosar según espacio UI)
- Academia o formación
- Negocio local de servicios
- Otro

### Pregunta 3 — Objetivo

> ¿Qué te gustaría mejorar primero?

Opciones:

- Ahorrar tiempo en lo repetitivo
- Ordenar solicitudes y contactos
- Mejorar el seguimiento
- Empezar con un piloto de IA pequeño

### Respuesta orientativa (plantilla)

> Por lo que comentas, **podríamos empezar** revisando:
> 1. [Recomendación A — p. ej. registro centralizado + aviso interno]
> 2. [Recomendación B — p. ej. clasificación por tipo de servicio]
> 3. [Recomendación C opcional — p. ej. cola sin asignar]
>
> Esto es una **orientación inicial**. En una auditoría gratuita revisamos tu flujo real, priorizamos **un MVP medible** y dejamos claro qué no incluye la fase 1.

### Disclaimer (obligatorio antes del CTA)

> No sustituyo a tu equipo ni a una auditoría humana. No gestiono datos clínicos. WhatsApp, calendario y CRM completo **no forman parte** del piloto que mostramos hoy; se valoran después si el primer flujo funciona.

### CTA

> **Pide una auditoría gratuita** — te llevo al formulario de la página.  
> **Prefieres una llamada breve** — [enlace externo opcional, p. ej. Calendly cuando exista]

Texto de cierre agenda (sin calendario real):

> Para revisar tu caso con detalle, lo mejor es una llamada breve de diagnóstico. Puedes dejar tus datos en el formulario y te proponemos disponibilidad.

---

## Agenda / disponibilidad

| V1 | Futuro |
|----|--------|
| Sin Google Calendar ni OAuth | Calendly / Google Calendar |
| Sin slots dinámicos | Sincronización real |
| CTA primario: `#auditoria` + `AuditRequestForm` existente | Lead a Supabase desde chat |
| CTA secundario: constante `EXTERNAL_CALL_URL` en código (vacía o placeholder) | Config vía env cuando se autorice |
| Texto estático de disponibilidad solo si hace falta en demo | n8n recordatorios |

El formulario de auditoría ya recoge: nombre, email, teléfono, tipo de negocio, ciudad, web/IG, problema, área de mejora, consentimiento — el chatbot **no duplica** esos campos.

---

## Seguridad y límites

Basado en `commercial-safety-rules.md`, `forbidden-and-approved-phrases.md` y `claim-review-checklist.md`:

### No hacer

- Pedir datos sensibles, clínicos, de pacientes o de salud.
- Prometer resultados, ROI, % de ventas o “100 % respondidos”.
- Dar presupuestos o plazos cerrados.
- Decir que WhatsApp, calendario, voz o CRM están activos en el producto actual.
- Decir que la IA sustituye a recepción o al equipo.
- Afirmar “he analizado tu negocio” tras 3–4 clics.
- Presentar el widget como chat con IA real si es scripted (etiqueta honesta: “asistente de orientación” / “demo guiada”).
- Mencionar Supabase, n8n o stack interno al visitante.
- Enviar datos del chat a servidores.

### Sí hacer

- Mensaje central PLEXAI: procesos → tareas repetitivas → automatización con control humano.
- Una idea de **MVP medible** (ej. % solicitudes registradas en <24 h) sin garantía numérica.
- Exclusiones claras en una línea (WhatsApp / calendario / voz / CRM / datos clínicos: fase posterior o fuera de alcance).
- Derivar a auditoría gratuita o llamada humana.
- Tono profesional, directo, sin humo.

### Frases aprobadas (referencia)

- “Analizamos procesos, detectamos tareas repetitivas y automatizamos con IA solo donde aporta valor.”
- “Empezamos por un MVP medible con control humano.”
- “El flujo que podemos demostrar: solicitud web → registro → aviso interno → seguimiento acordado.”

---

## Arquitectura propuesta

```
web/app/page.tsx
  └── import { LandingDemoChatbot } from "@/components/LandingDemoChatbot"

web/components/LandingDemoChatbot.tsx   ← "use client", widget + flujo
web/lib/landing-demo-chatbot/
  ├── content.ts          ← situationOptions, businessTypeOptions, maps, disclaimers
  ├── types.ts            ← tipos del estado del wizard
  └── get-recommendations.ts  ← función pura: inputs → 2-3 strings seguros
```

| Capa | Responsabilidad |
|------|-----------------|
| `LandingDemoChatbot.tsx` | UI: botón flotante, panel, mensajes, botones opción, CTA |
| `content.ts` | Copy y mapas (única fuente editable post-revisión comercial) |
| `page.tsx` | Una línea de import; sin lógica de chat |

- **Sin** `app/api/*` nuevas.
- **Sin** modificar `web/app/chat/page.tsx` ni rutas existentes.
- Estilos: reutilizar paleta violeta/zinc de la landing (`rounded-[2rem]`, bordes `white/10`, etc.).

---

## Modelo de datos local sugerido

```ts
// Conceptual — implementación posterior

type SituationId =
  | "manual_followup"
  | "disordered_requests"
  | "repetitive_admin"
  | "appointments_consultations"
  | "ai_unsure"
  | "other";

type BusinessTypeId =
  | "professional_services"
  | "private_clinic"
  | "dental"
  | "aesthetic"
  | "podiatry"
  | "physio"
  | "academy"
  | "local_services"
  | "other";

type GoalId =
  | "save_time"
  | "better_order"
  | "better_followup"
  | "start_ai_pilot";

type Recommendation = {
  title: string;
  body: string; // 1-2 frases, sin promesas
};

type RecommendationKey = `${SituationId}:${BusinessTypeId}:${GoalId}` | "fallback";

export const situationOptions: { id: SituationId; label: string }[];
export const businessTypeOptions: { id: BusinessTypeId; label: string }[];
export const goalOptions: { id: GoalId; label: string }[];

export const recommendationMap: Partial<
  Record<RecommendationKey, Recommendation[]>
> & { fallback: Recommendation[] };

export const safeDisclaimers: string[];

export const ctaOptions = {
  audit: { label: "Pide una auditoría gratuita", href: "#auditoria" },
  call: { label: "Agenda una llamada", href: "" }, // EXTERNAL_CALL_URL cuando exista
};
```

Lógica de resolución: intentar clave exacta → clave `situation:other:goal` → `fallback`.

---

## Alternativas consideradas

| Opción | Descripción | Decisión |
|--------|-------------|----------|
| **A) Widget scripted local** | React + mapas locales, CTA a formulario | **Recomendado V1** |
| B) Chat IA real (Claude) | Reutilizar `chat-engine` + API | Más adelante; riesgo de claims y coste |
| C) Chat + calendario | OAuth / Calendly API | Más adelante |
| D) Chat + n8n/Supabase | Persistencia y automatizaciones | Más adelante |
| E) RAG sobre `docs/` | Embeddings / lectura runtime | **No V1**; mantenimiento y seguridad |

---

## Criterios de aceptación

- [ ] Widget visible en landing (botón flotante reconocible).
- [ ] Abre y cierra sin errores; no bloquea scroll de la página.
- [ ] Flujo guiado completo: situación → negocio → objetivo → recomendaciones → CTA.
- [ ] Muestra disclaimer de orientación (no diagnóstico definitivo).
- [ ] No promete resultados ni integraciones no activas.
- [ ] No pide datos sensibles ni personales en el chat.
- [ ] CTA “auditoría” hace scroll/foco a `#auditoria` con formulario existente.
- [ ] Responsive móvil y desktop.
- [ ] `npm run lint` OK en archivos tocados.
- [ ] `tsc` / build Next OK.
- [ ] Sin variables de entorno nuevas obligatorias.
- [ ] Sin `fetch` a APIs externas desde el widget.
- [ ] Sin Supabase, n8n, Anthropic en runtime del widget.

---

## Plan de implementación posterior

| Bloque | Entregable |
|--------|------------|
| 1 | `web/lib/landing-demo-chatbot/*` + contenido revisado |
| 2 | `LandingDemoChatbot.tsx` + import en `page.tsx` |
| 3 | QA manual (flujos, copy, móvil, accesibilidad, checklist comercial) |
| 4 | Commit / push (cuando el usuario lo pida) |
| 5 | Vercel preview y demo Zoom |

Revisión comercial antes del merge: pasar copy del widget por `claim-review-checklist.md` (muestra acotada).

---

## Evolución futura (post-V1)

Tras validar la demo scripted:

- Conectar a **Claude** con system prompt comercial acotado y guardrails.
- **Base de conocimiento curada** (JSON exportado de `docs/`, no RAG crudo).
- **Calendario** (Calendly embed o API).
- **Leads** a Supabase desde formulario (ya parcialmente en proyecto; no desde chat V1).
- **n8n** para avisos internos.
- **WhatsApp** solo en fase 2 explícita.

---

## Recomendación final

**Implementar primero V1 scripted local**, basado en una **síntesis segura y manual** de `docs/` (playbooks, casos de uso, auditoría, calidad comercial), **no IA real**. Reutilizar el CTA y formulario de `#auditoria` ya existentes. No acoplar al stack `/chat` + Supabase hasta que el guion demo esté validado en llamadas comerciales.
