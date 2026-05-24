# Plantilla de reunión de kickoff — PLEXAI

**Duración sugerida:** 60–90 minutos.  
**Participantes:** decisor cliente, responsable operativo, PLEXAI.

---

## Agenda de reunión

| Min | Tema | Resultado esperado |
|-----|------|-------------------|
| 0–5 | Bienvenida y objetivos de la reunión | Todos alineados |
| 5–15 | Repaso problema y MVP | Una frase de éxito acordada |
| 15–30 | Flujo detallado paso a paso | Diagrama validado |
| 30–40 | Datos, privacidad y exclusiones | Límites firmes |
| 40–50 | Herramientas y accesos | Lista de pendientes con fechas |
| 50–60 | Roles, comunicación y ritmo | Plan de checkpoints |
| 60–70 | Riesgos y dependencias | Top 5 riesgos |
| 70–80 | Criterios de aceptación | Checklist de pruebas |
| 80–90 | Próximos pasos y Q&A | Fechas en calendario |

---

## Preguntas obligatorias

### Negocio y proceso

1. ¿Podéis describir el flujo ideal desde que entra una solicitud hasta primera respuesta humana?
2. ¿Qué excepciones hay (urgencias, fuera de horario)?
3. ¿Qué mensajes tipo usáis hoy?

### Datos

4. ¿Qué campos son obligatorios para vuestro equipo?
5. ¿Confirmáis que no incluiremos datos clínicos?
6. ¿Dónde debe quedar la “fuente de verdad”?

### Operación

7. ¿Quién recibe el aviso interno y en qué horario?
8. ¿Qué pasa si esa persona no está disponible?
9. ¿Cómo mediremos el éxito en 30 días?

### Técnico (sin prometer stack)

10. ¿Qué herramientas no podemos cambiar en esta fase?
11. ¿Hay campañas o temporadas que debamos tener en cuenta?

---

## Decisiones (tabla a completar en vivo)

| # | Decisión | Opción elegida | Responsable | Fecha |
|---|----------|----------------|-------------|-------|
| D1 | Canal de aviso interno | Email / otro | | |
| D2 | Campos del formulario | Lista | Cliente | |
| D3 | Clasificación inicial | Reglas escritas | Cliente | |
| D4 | Idioma y tono mensajes | | Cliente | |
| D5 | Entorno de prueba | | PLEXAI | |

---

## Riesgos (registro inicial)

| Riesgo | Prob. | Impacto | Mitigación | Dueño |
|--------|-------|---------|------------|-------|
| Retraso contenidos cliente | Media | Alto | Fecha límite en email | Cliente |
| Scope creep | Media | Alto | Playbook alcance | PLEXAI |
| Baja adopción equipo | Media | Medio | Mini formación | Cliente |
| Accesos tardíos | Alta | Alto | Invitaciones día 1 | Cliente |
| Expectativa WhatsApp | Media | Alto | Recordar exclusión | Ambos |

---

## Alcance (reconfirmación escrita)

**Incluido en MVP:**

- 

**Fuera de alcance:**

- WhatsApp automático al cliente
- Calendario integrado
- Voz / telefonía IA
- CRM completo
- Datos clínicos

---

## Entregables

| Entregable | Descripción | Fecha orientativa |
|------------|-------------|-------------------|
| Diseño de flujo | | |
| Implementación | | |
| Guía de uso | | |
| Sesión validación | | |

---

## Criterios de aceptación

El MVP se acepta cuando:

1. [ ] Caso test: solicitud estándar registrada y aviso recibido en < [X] min (entorno acordado).
2. [ ] Caso test: campo obligatorio vacío manejado según regla.
3. [ ] Caso test: clasificación [tipo A/B] correcta según reglas documentadas.
4. [ ] Responsable operativo confirma que puede usar la guía sin soporte constante.
5. [ ] No se capturan datos fuera de la lista acordada.

---

## Plan de comunicación

| Ritual | Frecuencia | Canal | Participantes |
|--------|------------|-------|---------------|
| Update async | Semanal | Email | Operativo + PLEXAI |
| Revisión bloqueos | Según necesidad | Videollamada 20 min | |
| Demo intermedia | Mitad del proyecto | 30 min | Decisor opcional |

**Regla:** cambios de alcance por escrito, no solo verbal.

---

## Cómo documentar cambios

1. Cliente describe el cambio por email.
2. PLEXAI indica si es **dentro de MVP**, **ajuste menor** o **fase 2**.
3. Si es fase 2: mini-propuesta con impacto en plazo y coste.
4. Nada se implementa fuera de alcance sin confirmación.

Plantilla de cambio:

```
Solicitud de cambio #[n]
Descripción:
Motivo de negocio:
Impacto en plazo: 
Impacto en inversión:
Decisión: Aprobado / Fase 2 / Rechazado
Fecha:
```

---

## Si el cliente cambia el alcance en kickoff

**Frase:**

> Podemos apuntarlo como mejora para fase 2; si es imprescindible para el arranque, revisamos plazo e inversión y os envío addendum hoy.

No decir “sí” inmediato a integraciones no previstas.

---

## Acta de kickoff (enviar tras la reunión)

```
Resumen kickoff — [Cliente] — [Fecha]

Objetivo MVP: ...
Flujo acordado: (adjunto o enlace)
Decisiones: D1…Dn
Pendientes cliente: [lista con fechas]
Pendientes PLEXAI: [lista con fechas]
Riesgos top 3: ...
Próxima reunión: ...
```

---

## Checklist PLEXAI post-kickoff

- [ ] Acta enviada en 24 h
- [ ] Diagrama actualizado
- [ ] Tareas en tablero interno
- [ ] Recordatorio exclusiones al equipo del cliente
- [ ] Fecha demo intermedia en calendario

---

*Plantilla interna PLEXAI — no sustituye contrato.*
