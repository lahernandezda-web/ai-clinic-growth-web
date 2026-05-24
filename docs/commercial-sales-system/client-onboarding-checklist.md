# Checklist de onboarding de cliente — PLEXAI

**Cuándo usar:** el cliente ha aceptado por escrito la propuesta MVP (email o firma). Objetivo: arrancar sin fricción, sin datos sensibles y sin promesas fuera de alcance.

---

## Fase 0 — Confirmación comercial

| # | Ítem | Hecho | Notas |
|---|------|-------|-------|
| 0.1 | Propuesta MVP aceptada (versión y fecha) | ☐ | |
| 0.2 | Alcance y exclusiones releídos con el cliente | ☐ | |
| 0.3 | Inversión y calendario de pagos acordados | ☐ | |
| 0.4 | Contacto decisor + contacto operativo confirmados | ☐ | |
| 0.5 | Fecha objetivo de kickoff | ☐ | |

---

## 1. Confirmar objetivo

| Pregunta al cliente | Respuesta registrada |
|---------------------|----------------------|
| ¿Cuál es el único objetivo del MVP? | |
| ¿Qué métrica definirá éxito? | |
| ¿Qué NO es objetivo de este proyecto? | |

**Criterio de cierre:** una frase de objetivo compartida por email.

---

## 2. Confirmar alcance

- [ ] Lista de entregables de la propuesta copiada al proyecto
- [ ] Fuera de alcance repasado (WhatsApp API, calendario, voz, CRM completo, datos clínicos)
- [ ] Cliente entiende que peticiones nuevas = proceso de cambio de alcance

---

## 3. Confirmar datos necesarios

| Dato | ¿Se usará? | Fuente | Responsable cliente |
|------|------------|--------|---------------------|
| Nombre contacto | | Formulario | |
| Email / teléfono | | Formulario | |
| Servicio interés | | Formulario | |
| Origen / campaña | | UTM / manual | |

- [ ] Confirmado: **no** se captarán datos de salud ni expedientes clínicos
- [ ] Política de privacidad del cliente enlazada en formulario si aplica

---

## 4. Confirmar herramientas actuales

| Herramienta | Uso actual | ¿Se mantiene en MVP? |
|-------------|------------|----------------------|
| Email | | |
| Hoja / base | | |
| Formulario web | | |
| CRM | | |
| Automatización | | |

---

## 5. Confirmar accesos (sin claves por chat)

| Acceso | Método seguro | Estado |
|--------|---------------|--------|
| Invitación email herramienta X | Invitación | ☐ |
| Editor formulario | Invitación | ☐ |
| Carpeta documentación | Enlace con permiso | ☐ |

**Reglas comunicadas al cliente:**

- No enviar contraseñas por WhatsApp, SMS ni email sin cifrar.
- Usar invitaciones con rol mínimo necesario.
- Revocar accesos de personas que dejen el equipo.

---

## 6. Confirmar responsable interno

| Rol | Nombre | Disponibilidad respuesta |
|-----|--------|--------------------------|
| Sponsor / decisor | | |
| Operativo día a día | | |
| Técnico / web (si aplica) | | |

---

## 7. Confirmar canal de comunicación

- [ ] Canal principal: [email / Slack / otro acordado]
- [ ] Tiempo de respuesta esperado cliente: [ej. 48 h hábiles]
- [ ] Tiempo de respuesta PLEXAI: [ej. 48 h hábiles]
- [ ] Personas en copia obligatorias

---

## 8. Confirmar qué datos NO se deben enviar

Enviar al cliente este bloque (copiar/pegar):

> Por favor no enviéis: historiales clínicos, diagnósticos, DNI completo salvo requisito legal vuestro, contraseñas, datos de tarjetas, listas de pacientes. Solo datos comerciales necesarios para el MVP.

- [ ] Cliente confirma lectura

---

## 9. Confirmar límites

- [ ] Sin promesa de WhatsApp/calendario/voz en este MVP
- [ ] Control humano en respuesta al cliente final
- [ ] PLEXAI no presta servicios sanitarios

---

## 10. Confirmar criterios de éxito

| Métrica | Línea base | Objetivo | Cómo se medirá |
|---------|------------|----------|----------------|
| | | | |
| | | | |

- [ ] Fecha de revisión de métricas acordada (ej. 30 días post-entrega)

---

## 11. Confirmar siguiente reunión

- [ ] Kickoff agendado: fecha / hora / enlace
- [ ] Asistentes confirmados
- [ ] Agenda enviada (`project-kickoff-template.md`)

---

## Checklist pre-build (interno PLEXAI)

| # | Ítem | Hecho |
|---|------|-------|
| P1 | Carpeta de proyecto creada | ☐ |
| P2 | Copia de propuesta y emails de aceptación | ☐ |
| P3 | Diagrama de flujo borrador | ☐ |
| P4 | Entorno de prueba si aplica | ☐ |
| P5 | Lista de contenidos pendientes del cliente | ☐ |
| P6 | Riesgos del `red-flags-and-risk-register.md` revisados | ☐ |
| P7 | Playbook sectorial consultado | ☐ |
| P8 | Plan de comunicación semanal | ☐ |

---

## Email de bienvenida (plantilla)

```
Asunto: Bienvenida al MVP — [Nombre proyecto]

Hola [Nombre],

Gracias por confirmar el proyecto. Resumen:
- Objetivo: [una línea]
- Kickoff: [fecha y enlace]
- Necesitamos de vosotros antes del kickoff: [lista]
- Recordatorio: no enviar datos clínicos ni contraseñas por chat.

Próximo paso: reunión de kickoff con la agenda adjunta.

Un saludo,
[Nombre] — PLEXAI
```

---

## Señales de pausar el onboarding

- Cliente insiste en datos clínicos en el flujo.
- No hay responsable operativo.
- Piden empezar sin pagar según acuerdo (política interna).
- Cambios de alcance antes del kickoff sin documentar.

---

*Checklist interno PLEXAI — complementa `project-kickoff-template.md`.*
