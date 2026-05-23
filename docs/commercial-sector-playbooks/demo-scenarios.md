# Escenarios de demo — PLEXAI por sector

**Reglas para todas las demos**

- Mostrar solo lo implementado: landing, formulario de auditoría/solicitud, registro, automatización n8n, email interno, Google Sheets, páginas legales si preguntan.
- Datos de prueba ficticios; no datos reales de pacientes ni clínicos.
- Recordar: no WhatsApp activo, no voz, no calendario, no CRM completo.
- Cerrar con auditoría gratuita o piloto de un flujo + métrica.

---

## Clínicas dentales

### Escenario D1 — Primera visita sin respuesta rápida

**Contexto narrativo:** Clínica de 3 sillones; recepción compartida; leads por Instagram y teléfono.

**Dolor:** Interesados en ortodoncia que no reciben llamada en 48 h.

**Qué mostrar:** Envío formulario “Solicitud de información” → éxito UI → Supabase → ejecución n8n → email interno → fila Sheets.

**Qué decir:** “Esto no es vuestra agenda; es el primer eslabón para que recepción llame con datos ya estructurados.”

**Cierre:** Piloto midiendo horas hasta primera llamada.

### Escenario D2 — Presupuesto de implantes

**Contexto:** Lead pide presupuesto por formulario web de noche.

**Dolor:** El odontólogo ve el mensaje al día siguiente.

**Qué mostrar:** Mismo flujo; destacar campos nombre, teléfono, motivo (sin datos clínicos).

**Qué decir:** Aviso al móvil/email del responsable comercial en segundos.

**Cierre:** Auditoría para definir campos (tipo tratamiento).

### Escenario D3 — Dueño escéptico con “ya tenemos software”

**Contexto:** Usan agenda digital; leads fuera de la agenda.

**Dolor:** Duplicar datos en Excel.

**Qué mostrar:** Demo + límites explícitos en tabla “qué no prometemos”.

**Qué decir:** Complemento, no sustitución de software clínico.

**Cierre:** Segunda reunión con recepción.

---

## Podología

### Escenario P1 — DM de Instagram perdidos

**Contexto:** Podólogo unipersonal; DMs mientras está en consulta.

**Dolor:** Quiropodia urgente no priorizada.

**Qué mostrar:** Formulario web como canal paralelo + aviso interno.

**Cierre:** Campo “urgencia” en piloto.

### Escenario P2 — Primera visita plantillas

**Contexto:** Consulta biomecánica; muchas preguntas de precio.

**Dolor:** Misma explicación repetida por teléfono.

**Qué mostrar:** Captura motivo + aviso; FAQs siguen siendo humanas.

**Cierre:** Métrica % contactados en 24 h.

### Escenario P3 — Sin web

**Contexto:** Solo Google Maps y teléfono.

**Dolor:** Cero registro de quién llamó.

**Qué mostrar:** Landing mínima o enlace de auditoría PLEXAI como patrón.

**Cierre:** Auditoría para decidir primer canal digital.

---

## Clínicas estéticas

### Escenario E1 — Campaña Instagram

**Contexto:** Promoción láser facial; pico de DMs.

**Dolor:** Comercial no sabe cuántos leads hubo.

**Qué mostrar:** Formulario con “tratamiento de interés” + Sheets.

**Cierre:** Etiquetar campaña en piloto.

### Escenario E2 — Valoración premium

**Contexto:** Clínica posicionamiento alto; miedo a “bots”.

**Dolor:** Respuesta lenta resta marca.

**Qué mostrar:** Automatización invisible al cliente final; humano llama rápido.

**Cierre:** Tono premium + velocidad interna.

### Escenario E3 — Recepción vs comercial

**Contexto:** Dos roles; leads se pierden entre ellos.

**Dolor:** Nadie asume seguimiento.

**Qué mostrar:** Email interno a rol acordado + hoja compartida.

**Cierre:** Definir responsable en auditoría.

---

## Fisioterapia y osteopatía

### Escenario F1 — Teléfono en horario de sesión

**Contexto:** Centro 4 fisios; sin recepción a tiempo completo.

**Dolor:** Llamadas perdidas.

**Qué mostrar:** Solicitud de cita web + aviso a admin.

**Cierre:** Métrica llamadas devueltas mismo día.

### Escenario F2 — Lista de espera

**Contexto:** Cancelación libera hueco; lista en papel.

**Dolor:** No se llama a lista a tiempo.

**Qué mostrar:** Captura nueva solicitud (piloto 1); lista de espera fase 2 sin prometer calendario.

**Cierre:** Un flujo primero.

### Escenario F3 — Derivación médica

**Contexto:** Leads de médicos y mutuas mezclados.

**Dolor:** Sin etiqueta de origen.

**Qué mostrar:** Campo origen en formulario → columna Sheets.

**Cierre:** Auditoría de campos.

---

## Academias

### Escenario A1 — Matrícula septiembre

**Contexto:** Academia idiomas; pico en agosto.

**Dolor:** Leads de Facebook sin centralizar.

**Qué mostrar:** Formulario “Información curso” + aviso comercial.

**Cierre:** Piloto antes del 15 de agosto.

### Escenario A2 — Open day

**Contexto:** 40 asistentes; seguimiento manual.

**Dolor:** Solo se llama a la mitad.

**Qué mostrar:** Registro único post-evento (formulario + hoja).

**Cierre:** Métrica contacto en 48 h post-open day.

### Escenario A3 — Padre compara academias

**Contexto:** Pregunta precio sábado noche.

**Dolor:** Respuesta el lunes = matrícula en otro sitio.

**Qué mostrar:** Aviso instantáneo al comercial.

**Cierre:** Tiempo de respuesta como KPI.

---

## Negocios locales de servicios

### Escenario L1 — Taller mecánico

**Contexto:** Presupuestos por WhatsApp del dueño.

**Dolor:** Averías urgentes mezcladas con revisiones.

**Qué mostrar:** Formulario con urgencia sí/no + aviso.

**Cierre:** Priorización en hoja.

### Escenario L2 — Peluquería

**Contexto:** Nuevas clientas por Instagram.

**Dolor:** No hay lista de callbacks.

**Qué mostrar:** Captura + aviso a encargada.

**Cierre:** Primera respuesta en <2 h como meta.

### Escenario L3 — Fontanería local

**Contexto:** Mensajes Google Maps sin leer.

**Dolor:** Pérdida de trabajos urgentes.

**Qué mostrar:** Web/formulario enlazado desde Maps + flujo demo.

**Cierre:** Auditoría de canales.

---

## Demo genérica (cualquier sector)

### Escenario G1 — Auditoría gratuita en vivo

**Contexto:** Prospecto frío; 10 minutos.

**Flujo:** Landing → `#auditoria` → envío prueba → backend → n8n → email → Sheets.

**Cierre:** Enlace para que rellenen auditoría real.

### Escenario G2 — Reunión con socio escéptico

**Contexto:** 20 minutos; dos decisores.

**Flujo:** Problema → demo → límites → objeciones → piloto.

**Cierre:** Segunda sesión técnica solo si la piden.

### Escenario G3 — Post-demo seguimiento

**Contexto:** Ya vieron demo hace una semana.

**Flujo:** Recapitular 2 min + preguntar métrica actual de respuesta + proponer auditoría.

**Cierre:** Fecha concreta.

---

## Checklist pre-demo (todos los sectores)

- [ ] `AUTOMATIONS_ENABLED=true` solo en entorno de demo acordado
- [ ] Email de prueba preparado
- [ ] Supabase y n8n abiertos en pestañas
- [ ] Hoja Sheets vacía o marcada para pruebas
- [ ] Playbook del sector leído
- [ ] Datos ficticios listos
- [ ] Límites comerciales repasados

---

## Checklist post-demo

- [ ] Resumen enviado (mensaje post-demo)
- [ ] Siguiente paso con fecha
- [ ] Objeciones anotadas
- [ ] No se prometió WhatsApp/voz/calendario/CRM
- [ ] No se pidieron datos clínicos en ejemplo
