# Plantilla de informe post-auditoría — PLEXAI

**Uso:** completar tras la auditoría gratuita. Enviar al cliente en PDF o email (texto). Ajustar tono al sector con el playbook correspondiente.

**Confidencialidad:** no incluir datos personales reales de terceros ni información clínica.

---

## Portada (texto)

```
INFORME DE AUDITORÍA DE PROCESOS
Preparado para: [Nombre del negocio]
Fecha: [DD/MM/AAAA]
Elaborado por: PLEXAI
Alcance: revisión comercial-operativa (captación, seguimiento y tareas repetitivas)
```

---

## 1. Resumen ejecutivo

**Instrucciones:** 150–250 palabras. Sin jerga técnica.

**Plantilla:**

> Tras la reunión del [fecha], revisamos cómo [negocio] recibe y gestiona solicitudes comerciales. El principal hallazgo es [dolor #1 en lenguaje del cliente]. Hoy el proceso depende de [herramientas/hábitos], lo que genera [consecuencia: retrasos, pérdidas, desgaste].
>
> Recomendamos empezar por un **MVP acotado**: [automatización #1], medible con [métrica]. PLEXAI diseña automatizaciones con IA **solo donde aportan valor**, manteniendo **control humano** en decisiones importantes.
>
> Este informe no incluye precio ni plazo cerrado; el siguiente paso es [propuesta MVP / segunda reunión / demo acotada].

---

## 2. Contexto del negocio

| Campo | Contenido |
|-------|-----------|
| Sector | [Ej. clínica dental] |
| Servicios principales | |
| Equipo relevante | [Recepción, dirección…] |
| Volumen estimado solicitudes | [Rango semanal/mensual] |
| Canales de captación | [Web, teléfono, IG…] |
| Herramientas actuales | [Email, hoja, CRM ligero…] |

**Narrativa breve:** cómo describieron su operación el día de la auditoría.

---

## 3. Problemas detectados

Enumerar 3–5 problemas en lenguaje de negocio (no “falta de API”).

| # | Problema | Evidencia (cita o hecho) | Impacto cualitativo |
|---|----------|-------------------------|---------------------|
| 1 | | | Alto / Medio / Bajo |
| 2 | | | |
| 3 | | | |

Ejemplos de redacción:

- “Las solicitudes del fin de semana no se registran hasta el lunes.”
- “No hay criterio único para clasificar urgencias.”
- “El seguimiento depende de la memoria de cada persona.”

---

## 4. Procesos repetitivos identificados

| Proceso | Frecuencia estimada | Quién lo hace | ¿Automatizable en fase 1? |
|---------|---------------------|---------------|---------------------------|
| Copiar datos del formulario a la hoja | Diaria | Admin | Sí |
| Clasificar tipo de servicio | Por lead | Recepción | Parcial (con reglas) |
| Avisar al responsable | Por lead | Manual | Sí (aviso interno) |

---

## 5. Impacto estimado (cualitativo)

**No usar porcentajes garantizados.** Usar rangos y condiciones.

> Si se centraliza el registro de solicitudes y se reduce el tiempo hasta la primera respuesta interna, es razonable esperar **menos solicitudes olvidadas** y **mayor trazabilidad**. El impacto económico dependerá del volumen real y de la disciplina del equipo al usar el flujo acordado.

Opcional: escenario conservador / moderado (sin cifras inventadas si no hay datos).

---

## 6. Automatización recomendada 1 (prioridad alta)

**Nombre:** [Ej. Registro centralizado de solicitudes web]

**Problema que resuelve:**

**Qué haría el MVP:**

- [Paso 1: formulario / entrada acordada]
- [Paso 2: registro en hoja o herramienta]
- [Paso 3: aviso al responsable]
- [Control humano: quién valida antes de responder al cliente]

**Datos necesarios (solo comerciales):** nombre, contacto, servicio, origen, mensaje.

**Qué NO hace:** WhatsApp automático, calendario, datos clínicos.

**Métrica sugerida:** % solicitudes registradas en < 24 h; tiempo hasta aviso interno.

---

## 7. Automatización recomendada 2 (prioridad media)

[Misma estructura que #6. Ej. clasificación por tipo de tratamiento con reglas escritas.]

---

## 8. Automatización recomendada 3 (fase posterior)

[Misma estructura. Marcar explícitamente **fase 2** si requiere integraciones no validadas.]

---

## 9. Priorización

| Orden | Automatización | Esfuerzo relativo | Impacto | Recomendación |
|-------|----------------|-------------------|---------|---------------|
| 1 | | Bajo | Alto | MVP inicial |
| 2 | | Medio | Medio | Tras validar MVP |
| 3 | | Alto | Variable | Fase 2 |

---

## 10. MVP recomendado

**Alcance en una frase:**

> Implementar [automatización #1] con [métrica única] durante [ventana sugerida, sin comprometer fecha legalmente].

**Incluido:**

- Diseño del flujo acordado
- Configuración de automatización acotada
- Documentación breve de uso
- Revisión conjunta al cierre

**Fuera de alcance en MVP:**

- [Listar: WhatsApp API, voz, CRM completo, integraciones no diagnosticadas]

---

## 11. Riesgos

| Riesgo | Mitigación |
|--------|------------|
| Baja adopción del equipo | Responsable interno + formación 30 min |
| Datos incompletos en formulario | Campos obligatorios mínimos |
| Expectativa de canal no disponible | Comunicar límites por escrito |
| Cambios de alcance mid-project | Proceso de cambio documentado |

---

## 12. Límites

- PLEXAI no presta servicios sanitarios ni gestiona historiales clínicos.
- Las automatizaciones **asisten**; no sustituyen el criterio profesional del negocio.
- Integraciones adicionales requieren diagnóstico y propuesta aparte.
- Resultados dependen del uso consistente del proceso acordado.

---

## 13. Siguiente paso

| Acción | Responsable | Fecha objetivo |
|--------|-------------|----------------|
| Revisión de este informe | Cliente | |
| Llamada de 20 min para dudas | Ambos | |
| Envío de propuesta MVP (si procede) | PLEXAI | |

---

## 14. Texto listo para enviar al cliente

```
Asunto: Informe tras auditoría — [Nombre negocio]

Hola [Nombre],

Gracias por el tiempo en la auditoría del [fecha].

Adjunto / debajo encontrarás un resumen de cómo está hoy vuestro flujo de solicitudes, los cuellos de botella que vimos y una propuesta de primer MVP acotado: [una línea].

Lo más prioritario sería [automatización #1], para poder medir [métrica] sin prometer canales que aún no forman parte del piloto (por ejemplo WhatsApp o calendario integrado automático).

Si te encaja, agendamos [20 min] para resolver dudas y, si quieres avanzar, te envío propuesta MVP con alcance y plazos para que los reviséis con calma.

Un saludo,
[Nombre]
PLEXAI
```

---

## Checklist interno antes de enviar

- [ ] Sin datos personales de pacientes ni ejemplos reales identificables
- [ ] Sin promesas de WhatsApp/calendario/voz no implementados
- [ ] Sin porcentajes mágicos garantizados
- [ ] Métrica clara para el MVP
- [ ] Siguiente paso con fecha
- [ ] Revisión de red flags del lead

---

*Plantilla interna PLEXAI — no constituye contrato ni oferta vinculante.*
