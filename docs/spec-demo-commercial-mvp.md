# SPEC — Demo Comercial MVP 4 (PLEXAI)

## Estado

- **Fase:** SPEC
- **Implementación:** Pendiente
- **Objetivo:** Preparar una demo comercial vendible
- **Deployment:** No requerido en esta fase

---

## 1. Objetivo

Preparar una demo clara, profesional y vendible para presentar PLEXAI por Zoom o reunión comercial a negocios locales.

La demo debe explicar:

- Qué problema resuelve PLEXAI.
- Cómo funciona el flujo actual.
- Qué está implementado realmente.
- Qué beneficios puede percibir un negocio.
- Qué límites tiene el MVP.
- Cómo cerrar con una auditoría gratuita.

---

## 2. Público objetivo

La demo está pensada para:

- Clínicas dentales.
- Clínicas estéticas.
- Fisioterapeutas.
- Podólogos.
- Academias.
- Negocios locales de servicios.
- Pequeños equipos con procesos repetitivos.

Perfil típico: dueño, gerente o responsable de operaciones que pierde tiempo en tareas manuales (respuestas, recordatorios, organización interna) y busca mejorar sin contratar más personal ni invertir en software complejo.

---

## 3. Mensaje central

PLEXAI no vende "IA por vender".

**Mensaje principal:**

> "Analizamos los procesos de tu negocio, detectamos tareas repetitivas y diseñamos automatizaciones con IA solo donde realmente aportan valor."

Principios que deben quedar claros:

- Empezamos por el proceso, no por la herramienta.
- No prometemos magia ni sustitución de personal.
- El MVP actual demuestra captura de leads y automatización interna básica, no un producto clínico ni un CRM completo.

---

## 4. Qué se puede mostrar en la demo actual

Elementos verificados y demostrables en local:

| Elemento | Qué mostrar |
|----------|-------------|
| **Landing** | Propuesta de valor, sectores, método, FAQ, CTA de auditoría gratuita |
| **Propuesta de valor** | Problema operativo, automatización práctica, enfoque por procesos |
| **Sectores objetivo** | Bloques de audiencias en la landing (clínicas, academias, negocios locales) |
| **Formulario de auditoría gratuita** | Envío en vivo con datos de prueba (nombre ficticio, email de prueba) |
| **Envío de lead de prueba** | Submit desde navegador; mensaje de éxito en UI |
| **Recepción en Supabase** | Fila nueva en `public.audit_requests` (panel Supabase abierto en otra pestaña) |
| **Ejecución n8n** | Workflow `PLEXAI — Audit Request Created` con ejecución exitosa |
| **Email interno** | Bandeja preparada con aviso de nuevo lead |
| **Google Sheets** | Hoja con fila añadida automáticamente |
| **Páginas legales provisionales** | Aviso legal, política de privacidad, consentimiento y protección de datos (si el interlocutor pregunta) |
| **Explicación del flujo completo** | Narrativa de extremo a extremo (ver sección 6 y 7) |

**Flujo técnico confirmado (MVP 3B):**

```
Formulario PLEXAI
  → POST /api/audit-requests
  → Supabase (audit_requests)
  → evento audit_request.created
  → n8n Webhook
  → email interno + Google Sheets
```

---

## 5. Qué NO se debe prometer

Límites explícitos de la demo y del MVP actual. No decir ni insinuar lo siguiente:

| Prohibido prometer | Por qué |
|--------------------|---------|
| WhatsApp activo | No implementado en el flujo actual |
| Voz / agentes de voz | Fuera de alcance del MVP |
| CRM avanzado | Solo captura de leads + Sheets; no hay panel CRM |
| Integración con calendarios | No implementado |
| Automatizar todo el negocio | Enfoque incremental por proceso |
| "Empresa líder" / "equipo internacional" | No corresponde a la realidad del proyecto |
| Sustituir al personal | PLEXAI apoya al equipo, no lo reemplaza |
| Decisiones autónomas de la IA | Las automatizaciones siguen reglas definidas; el equipo mantiene control |
| Sistema clínico / historial médico | PLEXAI es comercial-operativo, no software sanitario |
| Uso de datos clínicos o de pacientes | Prohibido en formulario y en toda la narrativa |

Si preguntan por WhatsApp, voz o calendario: reconocer interés, explicar que está en roadmap potencial y que la auditoría gratuita sirve para priorizar qué automatizar primero.

---

## 6. Guion demo corto — 10 minutos

Estructura para una primera reunión comercial rápida.

### 1. Apertura breve (1 min)

- Presentación personal y PLEXAI en una frase.
- Confirmar tiempo disponible y objetivo de la llamada: "Ver si tiene sentido una auditoría gratuita de procesos."

### 2. Problema del negocio (1,5 min)

- Preguntar o reflejar: llamadas sin contestar, mensajes repetidos, Excel desordenado, tiempo del equipo en tareas que no generan ingresos.
- "No es falta de ganas; es falta de sistema."

### 3. Qué propone PLEXAI (1,5 min)

- Mensaje central (sección 3).
- Tres pasos: detectar → diseñar pequeña automatización → probar y medir.

### 4. Recorrido por la landing (2 min)

- Compartir pantalla en `/`.
- Hero → problema → propuesta → sectores → método → CTA auditoría.
- No leer todo; destacar 2–3 bloques relevantes al sector del interlocutor.

### 5. Demostración del formulario (2 min)

- Rellenar con datos ficticios (ej.: "Clínica Demo", email de prueba).
- Enviar y mostrar mensaje de éxito.
- "Esto es lo que haría un cliente real interesado en la auditoría."

### 6. Explicación del flujo interno (1,5 min)

- Mostrar Supabase (nueva fila), n8n (ejecución), email o Sheets (según lo preparado).
- "En segundos el equipo recibe el aviso sin revisar manualmente la web."

### 7. Beneficio práctico (0,5 min)

- Menos leads perdidos por avisos manuales; lead centralizado; base para automatizaciones futuras por proceso.

### 8. Cierre con auditoría gratuita (0,5 min)

- Frase de cierre (sección 12).
- Proponer fecha o enviar enlace al formulario real cuando exista deployment.

**Duración total aproximada:** 10 minutos + preguntas breves.

---

## 7. Guion demo extendido — 20 a 30 minutos

Estructura para reuniones con más profundidad comercial o técnica ligera.

### 1. Contexto del negocio (3 min)

- Preguntas: tipo de negocio, tamaño del equipo, canales de contacto (teléfono, web, redes), qué les quita más tiempo.
- Tomar notas; usar sus palabras en ejemplos posteriores.

### 2. Dolor operativo (3 min)

- Amplificar el coste invisible: interrupciones, duplicidad de datos, leads que se enfrían.
- Ejemplo concreto según sector (ver sección 9).

### 3. Coste invisible de tareas repetitivas (2 min)

- Horas/semana en tareas que no requieren criterio humano complejo.
- "No hace falta un ERP enorme; a veces basta con conectar dos pasos que hoy son manuales."

### 4. Qué hace PLEXAI (3 min)

- Análisis de procesos, diseño de automatizaciones pequeñas, IA donde aporta.
- Demo del flujo actual como prueba de capacidad de ejecución, no como producto final cerrado.

### 5. Qué no hace PLEXAI (2 min)

- Repasar sección 5 con honestidad.
- Diferenciar de software clínico, chatbots genéricos y promesas de "IA que lo hace todo".

### 6. Demo visual de la landing (4 min)

- Recorrido completo con pausa en FAQ si surgen dudas legales o de datos.
- Mostrar páginas legales provisionales si preguntan por RGPD.

### 7. Demo formulario (3 min)

- Envío en vivo + verificación en backend (Supabase, n8n, email/Sheets).
- Explicar consentimiento y que no se piden datos clínicos.

### 8. Explicación técnica simple del flujo (3 min)

- Diagrama verbal: formulario → API → base de datos → automatización → avisos.
- Secretos y validaciones en servidor; el cliente no ve complejidad.

### 9. Ejemplos por sector (4 min)

- 1–2 casos de la sección 9 alineados con el interlocutor.
- Enfatizar beneficio y límite honesto.

### 10. Objeciones (3 min)

- Anticipar 2–3 objeciones frecuentes (sección 10).
- Dejar espacio para preguntas abiertas.

### 11. Siguiente paso (2 min)

- Auditoría gratuita: qué incluye, qué no incluye, plazo orientativo de respuesta manual.
- Cierre comercial (sección 12).

**Duración total aproximada:** 20–30 minutos según profundidad de preguntas.

---

## 8. Narrativa comercial

Narrativa sencilla para repetir en voz alta durante la demo:

1. **"No empezamos por la herramienta, empezamos por el proceso."**  
   Primero entendemos cómo trabaja el negocio hoy.

2. **"Primero detectamos dónde se pierde tiempo."**  
   Llamadas, mensajes, copiar datos, recordatorios manuales.

3. **"Después diseñamos una automatización pequeña."**  
   Un flujo concreto, medible, no un proyecto de seis meses.

4. **"Se prueba, se mide y se mejora."**  
   Iteración con feedback del equipo.

5. **"El equipo mantiene el control."**  
   La IA ejecuta reglas acordadas; las decisiones importantes siguen siendo humanas.

Esta narrativa conecta el MVP actual (captura + aviso interno) con la propuesta de valor a largo plazo (más automatizaciones por proceso).

---

## 9. Casos de uso por sector

Cada caso incluye problema, automatización posible, beneficio y límite honesto.

### Clínica dental

| Aspecto | Detalle |
|---------|---------|
| **Problema típico** | Muchas llamadas para citas y recordatorios; recepción saturada; leads de web sin seguimiento rápido. |
| **Automatización posible** | Aviso interno al recibir solicitud web; más adelante: recordatorios o clasificación de consultas frecuentes (fuera del MVP actual). |
| **Beneficio esperado** | Respuesta más rápida al lead; menos tiempo revisando la web a mano. |
| **Límite honesto** | No es software de historias clínicas; no gestiona agenda médica en este MVP. |

### Clínica estética

| Aspecto | Detalle |
|---------|---------|
| **Problema típico** | Consultas por Instagram/WhatsApp sin registro único; duplicidad en Excel. |
| **Automatización posible** | Centralizar leads del formulario web + notificación al equipo; futuro: enrutar consultas repetitivas. |
| **Beneficio esperado** | Un solo sitio donde ver solicitudes nuevas; menos leads olvidados. |
| **Límite honesto** | WhatsApp no está conectado en la demo actual; hay que definirlo en auditoría. |

### Fisioterapia

| Aspecto | Detalle |
|---------|---------|
| **Problema típico** | Pacientes preguntan horarios y disponibilidad una y otra vez; el fisio interrumpe sesiones. |
| **Automatización posible** | Captura estructurada de solicitudes desde web; aviso al administrador. |
| **Beneficio esperado** | Menos interrupciones; datos del interesado ya organizados antes de llamar. |
| **Límite honesto** | No sustituye valoración clínica ni reserva automática de citas hoy. |

### Podología

| Aspecto | Detalle |
|---------|---------|
| **Problema típico** | Consultas sobre tratamientos y precios por teléfono; poca trazabilidad de quién llamó primero. |
| **Automatización posible** | Formulario con tipo de consulta + notificación interna inmediata. |
| **Beneficio esperado** | Cola visible de interesados; priorización comercial. |
| **Límite honesto** | No da diagnósticos ni consejo médico automatizado. |

### Academia

| Aspecto | Detalle |
|---------|---------|
| **Problema típico** | Inscripciones y dudas repetitivas (horarios, precios, niveles); respuestas manuales en email. |
| **Automatización posible** | Lead capture + hoja de seguimiento (Sheets) + email interno al responsable comercial. |
| **Beneficio esperado** | Lista única de interesados; menos copy-paste entre canales. |
| **Límite honesto** | No incluye plataforma de matriculación ni pagos en este MVP. |

### Negocio local general (peluquería, taller, gestoría ligera, etc.)

| Aspecto | Detalle |
|---------|---------|
| **Problema típico** | Dueño hace de todo; olvida responder; no hay CRM. |
| **Automatización posible** | Mismo flujo demo: web → aviso → registro en Sheets para seguimiento manual ordenado. |
| **Beneficio esperado** | Primer paso hacia orden operativo sin software caro. |
| **Límite honesto** | PLEXAI propone pasos incrementales; no "digitaliza tu negocio en un día". |

---

## 10. Objeciones frecuentes

### "Esto suena caro."

**Respuesta:** La auditoría gratuita sirve precisamente para ver si hay un proceso pequeño con retorno claro antes de invertir. Empezamos por lo que más duele, no por un paquete cerrado grande.

### "Mi negocio es pequeño."

**Respuesta:** Los negocios pequeños suelen perder más proporción de tiempo en tareas repetitivas. Una automatización bien elegida puede ser una sola conexión (como el aviso que acabas de ver), no un departamento de IT.

### "No quiero sustituir a mi equipo."

**Respuesta:** PLEXAI no sustituye personas; quita carga repetitiva para que el equipo atienda mejor al cliente. El control y las decisiones siguen en el negocio.

### "No entiendo de IA."

**Respuesta:** No hace falta entender IA. Hace falta saber qué tarea os quita tiempo. Nosotros traducimos eso a un flujo concreto y lo explicamos sin jerga.

### "Ya uso WhatsApp / Excel."

**Respuesta:** Perfecto; no pedimos tirar lo que funciona. El objetivo es que WhatsApp y Excel dejen de ser el único sistema y que los datos importantes no se pierdan entre chats.

### "¿Esto cumple protección de datos?"

**Respuesta:** El formulario pide datos comerciales mínimos, incluye consentimiento y páginas legales provisionales. No se recogen datos clínicos ni de pacientes. Para un despliegue productivo completo se revisan avisos legales y proveedores (Supabase, email, etc.) según el caso.

### "¿Qué pasa si falla la automatización?"

**Respuesta:** El lead se guarda en base de datos aunque falle el aviso automático; el diseño prioriza no perder la solicitud. Se puede revisar manualmente y corregir el flujo.

### "¿Cuánto tarda en implementarse?"

**Respuesta:** Depende del proceso. El flujo que ves (formulario + aviso interno) ya está operativo en entorno de demo. Automatizaciones nuevas se dimensionan en la auditoría; evitamos prometer plazos genéricos sin conocer el caso.

---

## 11. Checklist antes de una demo real

Comprobar **el mismo día** o **30 minutos antes** de la reunión:

- [ ] App corriendo en local (`npm run dev` en `web/`) o preview URL si ya existe deployment.
- [ ] Formulario probado con envío de prueba reciente (éxito en UI).
- [ ] n8n activo y workflow `PLEXAI — Audit Request Created` publicado.
- [ ] Email interno operativo (bandeja accesible para mostrar aviso).
- [ ] Google Sheets abierto con hoja correcta y permisos OK.
- [ ] Datos de prueba preparados (nombres ficticios, emails de prueba).
- [ ] **No usar datos reales de clientes** en la demo en vivo.
- [ ] Navegador limpio (sin extensiones raras, zoom 100 %, pestañas innecesarias cerradas).
- [ ] Zoom abierto; compartir pantalla probada; audio OK.
- [ ] Guion impreso o en segunda pantalla (corto o extendido según reunión).
- [ ] Cierre preparado (frase sección 12 + propuesta de auditoría).
- [ ] Supabase panel listo (opcional, pestaña en segundo plano).
- [ ] Variables de automatización activas en entorno local (`AUTOMATIONS_ENABLED`, secretos configurados en `.env.local` — **sin mostrar valores en demo**).

---

## 12. Cierre comercial sugerido

Frase de cierre recomendada:

> "El siguiente paso no es venderte una automatización cerrada, sino hacer una auditoría gratuita para detectar si realmente hay procesos donde PLEXAI pueda aportar valor."

Variantes según contexto:

- **Si hay interés alto:** "¿Te encaja que rellenes el formulario hoy y te contactemos con un primer mapa de procesos?"
- **Si hay dudas:** "Sin compromiso: la auditoría solo tiene sentido si vemos oportunidades reales; si no, te lo diremos igualmente."
- **Sin deployment público aún:** "Puedo enviarte el enlace en cuanto esté la web en producción; mientras tanto, podemos agendar la auditoría por esta misma vía."

---

## 13. Materiales pendientes

Documentos y assets a crear en fases posteriores (fuera de esta SPEC de contenido):

| Material | Descripción | Prioridad sugerida |
|----------|-------------|-------------------|
| PDF o documento de guion demo | Versión imprimible de secciones 6 y 7 | Alta |
| One-pager comercial | Una página: problema, método, CTA auditoría | Alta |
| Checklist interno | Versión operativa de sección 11 para el equipo | Media |
| Vídeo corto de presentación | 2–3 min para enviar antes de Zoom | Media |
| Versión en Canva | One-pager y slides ligeras con marca PLEXAI | Media |
| Página demo pública | URL estable cuando deployment en Vercel esté listo | Alta (post-deployment) |

Ninguno de estos materiales bloquea una demo en local con pantalla compartida.

---

## 14. Criterios de aceptación

La fase **SPEC — Demo Comercial MVP 4** queda lista cuando:

- [x] Existe una narrativa clara (secciones 3 y 8).
- [x] Existe estructura de demo corta (10 min) y extendida (20–30 min).
- [x] Están claras las promesas permitidas (sección 4) y prohibidas (sección 5).
- [x] Hay objeciones preparadas (sección 10).
- [x] Hay checklist pre-demo (sección 11).
- [x] Sabemos qué material crear en el siguiente bloque (sección 13).

**Siguiente bloque sugerido (implementación documental/comercial, no código):** generar one-pager, PDF de guion y checklist operativo; opcionalmente grabar vídeo corto. **Deployment** sigue siendo fase aparte según `docs/checklist-vercel-deployment-mvp.md`.

---

## Referencias internas

- `docs/product-current-state.md` — estado técnico actual (MVP 3B verificado).
- `docs/spec-audit-request-form-mvp.md` — formulario y límites de datos.
- `docs/spec-lead-notification-automation-mvp.md` — flujo n8n, email, Sheets.
- `docs/checklist-vercel-deployment-mvp.md` — cuando exista demo pública.
