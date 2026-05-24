# Playbook de control de alcance — PLEXAI

## Qué es scope creep

**Scope creep** es la expansión no acordada del trabajo: nuevas funciones, integraciones, canales o responsabilidades que no estaban en la propuesta MVP aceptada, sin ajustar plazo ni inversión.

En proyectos PLEXAI suele aparecer como:

- “¿Puede también mandar WhatsApp al cliente?”
- “Aprovechad y conectad el calendario.”
- “Solo una cosilla más…” (×10).
- “Queremos el mismo informe pero con otra métrica cada día.”
- “La IA debería decidir precios / prioridades clínicas.”

---

## Cómo detectarlo pronto

| Señal | Dónde aparece |
|-------|---------------|
| “Es rápido, ¿no?” | Chat informal |
| Petición sin ticket/email | WhatsApp personal |
| Comparación con software grande | Reuniones |
| Urgencia artificial | “Lo necesitamos para el lunes” |
| Nuevos stakeholders | Mitad de proyecto |

**Regla:** si no está en la propuesta firmada o addendum, es creep hasta demostrar lo contrario.

---

## Principios PLEXAI

1. **MVP = un cuello de botella.**  
2. **Todo cambio material se documenta.**  
3. **Decir no con alternativa** (fase 2, manual temporal, reducir otra parte).  
4. **Proteger margen y foco** — un proyecto bien entregado vende más que tres a medias.  
5. **No prometer improvisado** en llamada.

---

## Frases para decir no sin perder al cliente

| Situación | Frase |
|-----------|-------|
| WhatsApp API | “En este MVP dejamos el aviso interno; WhatsApp automático al cliente va en fase 2 con diagnóstico de número y plantillas.” |
| Calendario | “La cita la sigue cerrando una persona; podemos registrar la solicitud y avisar. Integrar agenda es otro alcance.” |
| “Solo es un campo más” | “Lo apunto: si afecta al flujo o pruebas, os paso impacto en 24 h.” |
| Descuento a cambio de más scope | “Prefiero ajustar alcance que meter funciones sin tiempo de prueba.” |
| Datos clínicos | “Eso queda fuera de nuestro ámbito y de compliance; trabajamos solo datos comerciales.” |
| Urgencia | “Podemos priorizar X si movemos Y a fase 2 o ampliamos plazo.” |

Tono: calmado, consultivo, sin disculparse por tener límites.

---

## Cómo pasar una petición a fase 2

1. Agradecer la idea (“tiene sentido para más adelante”).  
2. Explicar dependencias (API, legal, operación).  
3. Ofrecer **mini nota de fase 2** (1 página: qué, por qué, orden sugerido).  
4. No comprometer fecha ni precio en la llamada.  
5. Incluir en propuesta de mantenimiento o segundo proyecto.

Plantilla email:

```
Hola [Nombre],

Recibimos la petición de [X]. Queda fuera del MVP actual
(firmado el [fecha]) porque [razón breve].

Propuesta: incluirlo en Fase 2 tras validar métricas del MVP.
Os enviamos alcance y estimación aparte.

El MVP sigue enfocado en [objetivo] para entregar en [plazo].

Gracias,
PLEXAI
```

---

## Cómo documentar cambios

| Tipo | Tratamiento |
|------|-------------|
| Typo en copy del formulario | Incluido si < 15 min |
| Campo nuevo obligatorio | Evaluar impacto; puede ser menor o creep |
| Nuevo canal (WhatsApp) | Fase 2 |
| Nuevo informe semanal | Creep o mantenimiento |
| Cambio de herramienta | Addendum |

**Siempre:** email con descripción, decisión, impacto plazo/coste.

---

## Cómo evitar promesas improvisadas

- No decir “sí” en llamada; decir “lo reviso y te confirmo por escrito”.  
- Tener la propuesta abierta en kickoff.  
- Un solo canal de solicitudes de cambio (email proyecto).  
- Si el cliente usa WhatsApp personal para scope, redirigir a email.

---

## Cómo proteger margen

| Táctica | Detalle |
|---------|---------|
| Paquetes cerrados por fase | MVP vs. integraciones |
| Horas de cambio incluidas (límite) | Ej. 2 h en MVP pequeño |
| Tarifa hora fase 2 | Definida antes de empezar extra |
| Pago por hitos | Ligado a entregables |
| Parar trabajo si creep no pagado | Política interna clara |

---

## Ejemplos de situaciones

### Ejemplo 1 — “¿Puede la IA responder al paciente?”

**Respuesta:** La respuesta al cliente final la da una persona; la automatización registra y avisa. No sustituimos criterio profesional ni sanitario.

### Ejemplo 2 — Campo “fecha de nacimiento” para marketing

**Respuesta:** Evaluar necesidad; si no es imprescindible para el MVP, fase 2 o eliminar (minimización de datos).

### Ejemplo 3 — Integrar HubSpot “ya que estamos”

**Respuesta:** Requiere mapeo de campos y pruebas; propuesta fase 2 con checklist de integración.

### Ejemplo 4 — El socio quiere dashboard distinto cada semana

**Respuesta:** Un dashboard MVP acordado en kickoff; cambios de reporting = nuevo alcance.

### Ejemplo 5 — “Hacedlo gratis, es publicidad”

**Respuesta:** Política interna de no trabajo gratis fuera de auditoría acotada; ofrecer caso de estudio escrito si aceptan alcance estándar.

### Ejemplo 6 — Presión “si no hay WhatsApp no firmo”

**Respuesta:** Honestidad: no está en MVP; ofrecer manual + aviso interno o declinar proyecto.

---

## Matriz rápida: ¿dentro o fuera?

| Petición | MVP | Fase 2 |
|----------|-----|--------|
| Aviso email interno | ✓ | |
| Clasificación por reglas simples | ✓ | |
| Formulario web → hoja | ✓ | |
| WhatsApp al cliente automático | | ✓ |
| Calendario bidireccional | | ✓ |
| Voz | | ✓ |
| CRM completo | | ✓ |
| Datos clínicos | ✗ prohibido | ✗ |

---

## Escalación interna

Si el cliente insiste tras dos emails educados:

1. Llamada de 15 min con decisor.  
2. Opciones: addendum de pago, recorte de otra parte, pausa proyecto.  
3. Si viola límites éticos/legal: terminar proyecto con acta.

---

*Playbook interno PLEXAI — usar junto a `mvp-proposal-template.md` y `red-flags-and-risk-register.md`.*
