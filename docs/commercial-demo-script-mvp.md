# Guion de demo comercial PLEXAI — MVP 4

---

## Objetivo del documento

Este documento es una **guía interna** para presentar PLEXAI en una reunión comercial presencial o por Zoom.

Sirve para:

- Explicar la propuesta con claridad y sin improvisar de más.
- Seguir un ritmo coherente en demos de 10 o 20–30 minutos.
- **No prometer funcionalidades que el MVP actual no implementa.**

No sustituye la SPEC técnica ni el one-pager; los complementa como guion hablado imprimible.

**Referencias internas:** `docs/spec-demo-commercial-mvp.md`, `docs/commercial-one-pager-mvp.md`, `docs/product-current-state.md`.

---

## Duración recomendada

| Versión | Duración | Cuándo usarla |
|---------|----------|---------------|
| **Corta** | 10 minutos | Primera llamada, intro rápida, prospecto con poco tiempo |
| **Extendida** | 20–30 minutos | Reunión con dueño/gerente, más preguntas, interés en procesos |

En ambas versiones, deja 2–5 minutos extra para preguntas si el interlocutor participa.

---

## Mensaje central

Repite esta idea a lo largo de la demo (sin leerla como un anuncio):

> **"Analizamos los procesos de tu negocio, detectamos tareas repetitivas y diseñamos automatizaciones con IA solo donde realmente aportan valor."**

Principios asociados:

- Empezamos por el **proceso**, no por la herramienta.
- No vendemos magia ni sustitución de personal.
- El MVP actual demuestra **captura de leads y aviso interno**; no es un CRM completo ni software clínico.

---

## Antes de empezar la demo

Checklist breve (revisar el mismo día o 30 minutos antes):

- [ ] Tener la web en **local** (`npm run dev` en `web/`) o el entorno que vayas a usar **probado** (formulario enviado con éxito reciente).
- [ ] Tener **claro el sector** del prospecto (clínica, academia, negocio local, etc.) para adaptar ejemplos.
- [ ] **No prometer** WhatsApp, calendario, voz, CRM completo ni otras integraciones si no están implementadas.
- [ ] **No decir** que PLEXAI sustituye personas; siempre: apoya al equipo, quita tareas repetitivas.
- [ ] **No pedir ni usar** datos clínicos, datos de pacientes ni información sensible en la demo (solo datos ficticios de prueba).
- [ ] Tener abierta la **landing** (`/` o `/#auditoria` según el momento del guion).
- [ ] Tener claro el **CTA**: pedir **auditoría gratuita** (formulario o acuerdo de seguimiento).
- [ ] (Opcional, demo técnica interna) Registro, automatización, email o Sheets preparados en pestañas de fondo — **sin mostrar secretos ni `.env.local`**; al cliente, narrar formulario → registro → aviso → hoja.
- [ ] Zoom / pantalla compartida y audio probados.

---

## Guion de apertura

*Texto sugerido — adapta nombres y sector; no lo leas palabra por palabra si suena robótico.*

---

Hola, [nombre]. Gracias por el tiempo.

Soy [tu nombre] y hoy te enseño **PLEXAI**. No es un discurso de “la IA lo hace todo”: es cómo ayudamos a negocios como el tuyo a **ordenar procesos** y quitar tareas repetitivas **solo donde tiene sentido**.

En unos minutos verás la web que tenemos hoy: qué problema aborda, qué hace el formulario de auditoría gratuita y qué pasa por detrás cuando alguien se interesa. También te diré con claridad **qué no hace** todavía el producto, para no generar expectativas falsas.

El objetivo de esta llamada no es venderte un paquete cerrado, sino ver si tiene sentido una **auditoría gratuita** de vuestros procesos. Si no hay oportunidad real, te lo diremos igual.

¿Te parece bien si comparto pantalla y vamos al grano?

---

## Demo de 10 minutos

Estructura **minuto a minuto**. Ajusta si el interlocutor interrumpe con preguntas.

### Minuto 0–1 — Presentación breve

- Saludo y confirmación de tiempo (~10 min + preguntas).
- Una frase de PLEXAI: automatización con criterio para negocios de servicios.
- Objetivo de la llamada: ver si encaja una auditoría gratuita.

### Minuto 1–3 — Problema del negocio

- Reflejar o preguntar: leads por web, email, WhatsApp o teléfono sin un sitio único; respuestas tardías; Excel o notas sueltas; equipo en tareas que no generan ingresos.
- Frase clave: *"No suele ser falta de ganas; es falta de sistema."*
- Conectar con su sector en una frase (ej. recepción saturada, consultas repetidas).

### Minuto 3–5 — Propuesta PLEXAI

- Mensaje central (sección anterior).
- Tres pasos: **detectar** procesos → **diseñar** una automatización pequeña → **probar y medir**.
- Aclarar: el MVP demuestra **captura + aviso interno**, no “digitalizar todo el negocio”.

### Minuto 5–7 — Recorrido por la landing

- Compartir pantalla en `/`.
- Recorrido rápido: hero → problema → propuesta → **sectores** (destacar el suyo) → método → CTA auditoría.
- No leer todo; 2–3 bloques relevantes al interlocutor.
- FAQ solo si pregunta (datos, legal).

### Minuto 7–8 — Formulario de auditoría gratuita

- Ir a `/#auditoria` o bloque del formulario.
- Explicar campos: datos comerciales mínimos, consentimiento, **no datos clínicos ni de pacientes**.
- Rellenar con **datos ficticios** (ej. “Clínica Demo”, email de prueba) y enviar.
- Mostrar mensaje de éxito: *"Esto es lo que haría un interesado real."*

### Minuto 8–9 — Qué ocurre internamente tras una solicitud

*Narrativa conceptual; mostrar backend solo si está preparado y no alarga demasiado.*

- Flujo verbal: **formulario → registro centralizado → aviso al equipo → seguimiento ordenado** (email interno + hoja, según entorno demo).
- Beneficio: mejor control del seguimiento — el equipo sabe que hay una solicitud nueva sin revisar la web a mano al final del día (sin prometer tiempos exactos).
- Si muestras paneles técnicos (solo demo interna): una captura o pestaña, sin secretos ni URLs sensibles; al cliente, mantener lenguaje de negocio.

### Minuto 9–10 — Cierre y siguiente paso

- Resumen en una frase: PLEXAI ordena el primer paso (captura + aviso); el resto se define en auditoría.
- CTA: **auditoría gratuita** — revisar procesos, detectar 1–3 automatizaciones útiles, proponer una primera versión pequeña.
- Preguntar si quieren rellenar el formulario hoy o agendar seguimiento.

---

## Demo extendida de 20–30 minutos

Estructura por **bloques**. Duración orientativa por bloque; flexibiliza según preguntas.

### Bloque 1 — Contexto del negocio (3–4 min)

- Preguntas: tipo de negocio, tamaño del equipo, canales (web, teléfono, redes), qué les quita más tiempo.
- Tomar notas; usar sus palabras más adelante.

### Bloque 2 — Problemas repetitivos (3–4 min)

- Amplificar el coste invisible: interrupciones, duplicidad, leads que se enfrían.
- Horas/semana en copiar datos, avisar al equipo, buscar en varios sitios.
- *"No hace falta un ERP enorme; a veces basta con conectar dos pasos que hoy son manuales."*

### Bloque 3 — Automatización con criterio (3–4 min)

- Mensaje central y método PLEXAI (auditoría → mapa → automatización pequeña → prueba).
- Diferencia: IA donde aporta; control humano en decisiones importantes.
- El flujo actual es **prueba de ejecución**, no producto final cerrado.

### Bloque 4 — Recorrido por la landing (4–5 min)

- Recorrido completo: hero, problema, propuesta, sectores, método, servicios, FAQ, CTA.
- Páginas legales provisionales (`/privacidad`, `/aviso-legal`) solo si preguntan por datos o RGPD — mencionar placeholders pendientes antes de producción pública.

### Bloque 5 — Explicación del formulario (3–4 min)

- Campos, consentimiento, advertencia de no enviar datos sensibles.
- Envío en vivo con datos ficticios.
- Qué ve el usuario vs. qué recibe el equipo.

### Bloque 6 — Flujo interno (conceptual y opcional en vivo) (3–4 min)

```
Formulario PLEXAI
  → API (guardado del lead)
  → Registro centralizado
  → Automatización interna supervisada
  → Email interno + registro en hoja (Sheets)
```

- El lead se guarda aunque falle un aviso automático; prioridad: no perder la solicitud.
- Validaciones en servidor; el cliente no ve la complejidad.
- **No mostrar** secretos, URLs de webhook ni contenido de `.env.local`.

### Bloque 7 — Ejemplos por sector (4–5 min)

Elegir **1–2** alineados con el prospecto. En cada uno: problema → automatización posible → beneficio → **límite honesto**.

| Sector | Problema típico | Qué encaja hoy | Límite honesto |
|--------|-----------------|----------------|----------------|
| Clínica dental | Muchas consultas de citas; leads web sin seguimiento | Aviso interno al enviar formulario | No es historial clínico ni agenda médica |
| Clínica estética | Consultas por redes sin registro único | Centralizar leads web + aviso | WhatsApp no conectado en MVP |
| Fisioterapia | Preguntas de horarios que interrumpen | Captura estructurada + aviso | No sustituye valoración ni reserva automática |
| Podología | Consultas de precios sin trazabilidad | Formulario + notificación interna | No diagnósticos automatizados |
| Academia | Dudas repetitivas (horarios, precios) | Lead + hoja + email interno | No matriculación ni pagos |
| Negocio local | Dueño hace de todo; olvida responder | Mismo flujo demo | Pasos incrementales, no “todo en un día” |

### Bloque 8 — Límites honestos (2–3 min)

- Repasar sección «Qué NO se debe prometer» (más abajo).
- Diferenciar de software clínico, chatbots genéricos y “IA que lo hace todo”.
- Cumplimiento legal: páginas provisionales; revisión antes de producción pública.

### Bloque 9 — Siguiente paso (2–3 min)

- Cierre comercial (sección dedicada).
- Objeciones si surgen (sección de objeciones).
- Acordar acción concreta: formulario, fecha de auditoría o envío de one-pager.

---

## Qué se puede mostrar

Elementos **alineados con el MVP actual** (local o entorno preparado):

| Elemento | Qué explicar |
|----------|--------------|
| **Landing** | Propuesta de valor, sectores, método, FAQ, CTA |
| **Propuesta de valor** | Proceso primero; tareas repetitivas; automatización práctica |
| **Sectores objetivo** | Clínicas, academias, negocios locales de servicios |
| **Formulario de auditoría gratuita** | Captura estructurada; consentimiento; sin datos clínicos |
| **Flujo conceptual** | Formulario → registro → aviso interno → seguimiento comercial |
| **Demo en vivo del envío** | Mensaje de éxito en UI |
| **Registro interno (opcional, demo técnica)** | Nueva solicitud registrada; aviso al equipo; hoja de seguimiento |
| **One-pager comercial** | `docs/commercial-one-pager-mvp.md` — resumen para dejar o enviar después (versión interna; convertir a PDF si aplica) |
| **Páginas legales provisionales** | Si preguntan; con aviso de placeholders |

---

## Qué NO se debe prometer

Decir **no** o “aún no, lo valoramos en auditoría” si preguntan por:

| No prometer | Motivo breve para la demo |
|-------------|---------------------------|
| **WhatsApp activo** | No implementado en el flujo actual |
| **Integración con calendarios** | No implementado |
| **Llamadas de voz / agentes de voz** | Fuera de alcance del MVP |
| **CRM completo** | Solo captura + registro para seguimiento; no panel CRM |
| **Automatización total del negocio** | Enfoque incremental por proceso |
| **Sustitución de personal** | PLEXAI apoya al equipo |
| **Uso clínico o gestión de pacientes** | Comercial-operativo; no software sanitario |
| **Cumplimiento legal definitivo** | Páginas legales con placeholders; revisar antes de producción |
| **Producción pública ya lista** | Pendiente completar datos legales y deployment según checklist |
| **“Empresa líder” / claims inflados** | No corresponde a la realidad del proyecto |
| **Decisiones autónomas de la IA** | Reglas acordadas; control humano |

Si muestran interés en WhatsApp, calendario o voz: reconocerlo, explicar que puede estar en roadmap y que la **auditoría gratuita** sirve para priorizar qué automatizar primero con retorno real.

---

## Frases útiles durante la demo

Frases cortas para usar cuando encaje el momento:

**Automatización con criterio**
- *"No empezamos por la herramienta; empezamos por cómo trabajáis hoy."*
- *"La IA entra solo donde el proceso lo justifica, no por moda."*

**Control humano**
- *"La automatización ejecuta reglas que acordamos; las decisiones importantes siguen en vuestro equipo."*
- *"No es una caja negra que decide por vosotros."*

**Empezar pequeño**
- *"Un flujo concreto y medible vale más que un proyecto de seis meses."*
- *"Primero un proceso que duele; después, si tiene sentido, el siguiente."*

**Ahorro de tareas repetitivas**
- *"Quitamos copiar datos, avisar a mano y buscar en tres sitios distintos."*
- *"El tiempo que recuperáis es el que hoy se va en tareas que no requieren criterio humano completo."*

**Seguimiento comercial**
- *"Cuando alguien rellena el formulario, el equipo recibe aviso interno con registro ordenado — no al final del día revisando la web a mano."*
- *"Un solo sitio donde ver interesados nuevos antes de que se enfríen."*

**IA útil vs. IA por moda**
- *"Si un proceso se puede resolver con una regla clara, no hace falta 'más IA'."*
- *"Nuestro trabajo es traducir vuestro dolor operativo a un flujo que podáis medir."*

---

## Objeciones frecuentes y respuestas

Respuestas **honestas**, orientadas al MVP. No inventar precios ni plazos cerrados.

### «¿Esto sustituye a mi equipo?»

No. PLEXAI quita carga repetitiva (avisar, copiar datos, revisar la web a mano) para que el equipo atienda mejor. Las personas siguen decidiendo y hablando con clientes. Si no hay proceso claro, primero lo ordenamos en la auditoría.

### «¿Esto ya funciona con WhatsApp?»

En el MVP actual **no** hay WhatsApp conectado. Lo que sí demostramos es captura desde la web y aviso interno configurado según el alcance del MVP. Si WhatsApp es crítico para vosotros, lo tratamos en la auditoría para ver si merece ser el siguiente paso y con qué prioridad.

### «¿Puede conectarse con mi CRM?»

Hoy no es un CRM completo: es **captura de lead + registro + aviso**. Se puede valorar integración con vuestro CRM en fases posteriores si el proceso lo justifica. Empezamos por no perder solicitudes antes de añadir capas.

### «¿Esto sirve para clínicas?»

Sirve para **procesos comerciales y operativos** de clínicas (leads, consultas iniciales, seguimiento), no para historias clínicas, citas médicas ni datos de pacientes. No usamos ni pedimos datos sanitarios en el formulario.

### «¿Es una solución cerrada o personalizada?»

No vendemos un paquete único para todos. La auditoría gratuita mira **vuestros** procesos y propone **automatizaciones pequeñas** a medida. El MVP que ves es una base demostrable; lo siguiente depende del mapa de procesos.

### «¿Cuánto cuesta?»

No hay tarifa cerrada en esta demo: depende del alcance que salga de la auditoría (cuántos procesos, integraciones, mantenimiento). La auditoría gratuita sirve para ver si hay un primer flujo con retorno claro **antes** de hablar de inversión concreta.

### «¿Cuánto tarda en implementarse?»

Depende del proceso. El flujo que ves (formulario + aviso interno) ya está operativo en **entorno de demo**. Cada automatización nueva se dimensiona en la auditoría; evitamos prometer “X semanas” sin conocer vuestro caso.

**Otras objeciones útiles (si surgen):**

- *«Suena caro»* → La auditoría gratuita evita invertir en algo grande sin retorno claro.
- *«Mi negocio es pequeño»* → A menudo perdéis más proporción de tiempo en repetición; una sola conexión bien elegida puede bastar.
- *«No entiendo de IA»* → No hace falta; hace falta saber qué tarea os quita tiempo.
- *«¿Cumple protección de datos?»* → Datos comerciales mínimos, consentimiento, páginas legales provisionales; no datos clínicos. Despliegue productivo requiere revisar titular y proveedores.
- *«¿Y si falla la automatización?»* → El lead queda guardado; el aviso se puede revisar manualmente.

---

## Cierre recomendado

*Texto sugerido — tono suave, sin presión.*

---

Gracias por el tiempo. Resumiendo: PLEXAI no os vende “más IA”, sino **orden en procesos** y automatizaciones pequeñas donde tienen sentido.

Lo que habéis visto hoy es la base real del MVP: **landing, formulario de auditoría gratuita y flujo interno de aviso y registro**. No es el producto final de todo vuestro negocio; es la prueba de que sabemos ejecutar el primer paso.

El siguiente paso que propongo es una **auditoría gratuita**: revisamos cómo trabajáis, detectamos **una a tres** automatizaciones que merezcan la pena y, si encaja, planteamos una **primera versión pequeña y medible** — sin paquete cerrado ni humo.

Si no vemos oportunidad clara, os lo diremos con la misma claridad.

¿Os encaja que [rellenéis el formulario hoy / agendemos la auditoría / os envíe el resumen en cuanto tengamos la web en producción]?

---

## Notas internas

- **Documento interno** del equipo PLEXAI. No enviar al cliente como contrato ni como compromiso legal.
- **No sustituye** contrato, propuesta económica, SLA ni documentación legal.
- **No debe usarse** como documento legal ante terceros.
- Revisar este guion **antes de usarlo en producción pública** (copy legal, deployment, materiales actualizados).
- En demo en vivo: **nunca** mostrar `web/.env.local`, secretos, URLs de webhook ni datos reales de clientes.
- Materiales relacionados: `docs/spec-demo-commercial-mvp.md`, `docs/commercial-one-pager-mvp.md`.

---

## Estado

| Campo | Valor |
|-------|--------|
| **Documento** | Creado como parte del **MVP 4 comercial** |
| **Tipo** | Guion imprimible interno |
| **Implementación de código** | Ninguna (solo documentación) |
| **Pendiente** | Conversión futura a **PDF** o **Canva** si el equipo lo decide |
| **Derivado de** | SPEC demo comercial (`docs/spec-demo-commercial-mvp.md`) y one-pager (`docs/commercial-one-pager-mvp.md`) |

---

*PLEXAI — Guion de demo comercial MVP 4. Uso interno.*
