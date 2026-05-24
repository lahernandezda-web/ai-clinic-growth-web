# Informe de revisión comercial — PLEXAI

**Fecha de revisión:** 2026-05-24 (bloque de limpieza documental)  
**Rama:** `docs/commercial-sector-playbooks`  
**Alcance revisado:** `docs/commercial-*` (playbooks, sales-system, quality-system, one-pagers, guiones demo)  
**Método:** búsqueda de patrones de riesgo (velocidad/SLA, jerga técnica en demo) + endurecimiento quirúrgico + checklist `claim-review-checklist.md`

---

## Aviso de uso

- **Material interno de trabajo.** No enviar a clientes sin revisión humana, adaptación al caso y comprobación de promesas, alcance e **integraciones realmente activas**.
- **No implica** promesas de integración activa (WhatsApp, calendario, voz, CRM, etc.) salvo lo verificado en el MVP del momento.
- **No sustituye** contrato, propuesta económica cerrada ni asesoría legal.
- **La rama no debe mergearse a `main` sin** revisión humana de muestra y decisión explícita de merge.

---

## Resumen ejecutivo

El material tiene **alto valor** como base interna (límites explícitos, objeciones, tablas “no prometer”). Una revisión anterior **marcó como corregidos** algunos archivos (p. ej. `prospecting-messages.md`, escenario D2 en `demo-scenarios.md`) pero **persistían** formulaciones de velocidad (“instantáneo”, “al instante”, “en segundos”, “inmediato”) y menciones **Supabase/n8n** en guiones orientados a demo comercial.

En este bloque se aplicó **limpieza quirúrgica** en playbooks sectoriales, guiones MVP, one-pagers y READMEs. **No** se reescribió el sistema completo.

---

## Correcciones aplicadas en este bloque (2026-05-24)

| Área | Archivos tocados | Qué se hizo |
|------|------------------|-------------|
| Velocidad / SLA | 6 playbooks sectoriales, `objections-bank.md`, `demo-scenarios.md`, one-pagers, `commercial-demo-script-mvp.md`, `follow-up-sequences.md`, `use-case-library.md`, `short-video-brief-mvp.md` | Sustitución de “instantáneo”, “al instante”, “en segundos”, “inmediato”, “respuesta en minutos” por lenguaje prudente (aviso interno, flujo demostrable, sin tiempos exactos) |
| Demo / jerga técnica | `demo-scenarios.md`, `podiatry-clinics.md`, `physio-osteopathy.md`, `commercial-demo-script-mvp.md`, `commercial-one-pager-mvp.md`, README sectorial | Narrativa cliente: formulario → registro interno → aviso al equipo → hoja de seguimiento |
| USO INTERNO | READMEs de playbooks, sales-system, quality-system, test-lab | Aviso reforzado en cabecera |
| Este informe | `commercial-review-report.md` | Estado real; corrección de filas que decían “Corregido” sin serlo en toda la rama |

**Ya estaban endurecidos antes de este bloque (verificado):** `prospecting-messages.md` (sin patrones de velocidad); escenario D2 en `demo-scenarios.md` (matiz demo sin SLA fijo).

---

## Pendiente / revisión humana

| ID | Tema | Nota |
|----|------|------|
| H1 | `docs/commercial-test-lab/` | “Quiere voz inmediata” en señales rojas describe **expectativa del lead ficticio**, no promesa PLEXAI — revisar si unificar redacción |
| H2 | `forbidden-and-approved-phrases.md`, `commercial-safety-rules.md`, `night-work-plan.md` | Mencionan patrones prohibidos **a propósito** — no son claims comerciales |
| H3 | `sales-assets-index.md` | “encontrar en segundos” = índice interno, no SLA al cliente — bajo riesgo |
| H4 | `commercial-demo-checklist-mvp.md`, `short-video-brief-mvp.md` | Aún listan Supabase/n8n en checklist **interno** (no mostrar al cliente) — coherente |
| H5 | `mvp-proposal-template.md`, `objections-bank.md` (Zapier/n8n) | Contexto técnico interno o objeción — OK con revisión al copiar al cliente |
| H6 | Playbooks sectoriales | Revisión muestral línea a línea antes de primer envío real |
| H7 | URLs `[enlace]` / `[URL]` | Sustituir por URLs públicas antes de envío |
| H8 | Merge a `main` | **No recomendado** hasta QA humano y alineación con estado real del producto |

---

## docs/commercial-sector-playbooks/

### Fortalezas

| Documento | Fortaleza |
|-----------|-----------|
| `README.md` | Tabla límites comercial; aviso USO INTERNO |
| `objections-bank.md` | 45+ objeciones con respuestas alineadas a MVP |
| `prospecting-messages.md` | Sin patrones de velocidad detectados en búsqueda |
| `demo-scenarios.md` | Reglas globales demo; narrativa por sector |

### Riesgos (estado tras limpieza)

| ID | Archivo | Riesgo | Severidad | Estado |
|----|---------|--------|-----------|--------|
| P1 | Varios playbooks | Velocidad tipo SLA | Media | Endurecido en este bloque |
| P2 | `demo-scenarios.md` | Jerga Supabase/n8n en guion cliente | Baja | Endurecido → lenguaje negocio |
| P3 | Playbooks sectoriales | Vocabulario “paciente” vs interesado | Media | Revisión humana muestral |
| P4 | `demo-scenarios.md` L2 | “Primera respuesta en <2 h como meta” | Baja | Es meta acordada con cliente, no SLA del producto — matizar al usar |

---

## docs/commercial-sales-system/

### Riesgos (estado tras limpieza)

| ID | Archivo | Riesgo | Estado |
|----|---------|--------|--------|
| S1 | `follow-up-sequences.md` | Volumen alto; copiar sin personalizar | Sin cambio estructural |
| S2 | `use-case-library.md` | UC con aviso de guardia | Endurecido (sin SLA) |
| S3 | Resto del pack | Coherencia con MVP | Revisión humana pre-envío |

---

## Frases de velocidad — historial

| Frase (aprox.) | Ubicación | Estado |
|----------------|-----------|--------|
| “al instante” / “aviso instantáneo” | `prospecting-messages.md` | Corregido **antes** de este bloque |
| “en segundos” | `demo-scenarios.md` D2 | Corregido **antes** (matiz demo) |
| “instantáneo”, “inmediato”, “en segundos” | Playbooks, guiones, one-pagers | Corregido **en este bloque** |
| “aviso interno inmediato” | `commercial-demo-script-mvp.md`, etc. | Corregido **en este bloque** |

---

## Coherencia entre packs

| Tema | ¿Alineado? |
|------|------------|
| WhatsApp no activo | Sí |
| Calendario no activo | Sí |
| Voz no activa | Sí |
| Sin SLA de tiempo en copy comercial | Mejorado; vigilar copias nuevas |
| USO INTERNO en READMEs principales | Sí (tras este bloque) |

---

## Acciones realizadas (cronología)

1. Creación previa de `docs/commercial-quality-system/` y packs sales / test-lab.  
2. Endurecimiento parcial Fase 3 (8 archivos; `prospecting-messages`, D2).  
3. **Este bloque:** endurecimiento en ~20 archivos bajo `docs/` + informe actualizado + avisos README.

---

## Pendientes post-revisión (humano)

- [ ] Revisión muestral de los 6 playbooks sectoriales con `claim-review-checklist.md`  
- [ ] Decidir merge a `main` solo tras QA y estado producto  
- [ ] Primer envío real con paso por `forbidden-and-approved-phrases.md`  
- [ ] Actualizar este informe tras primer cliente piloto  

---

*Informe interno PLEXAI — no enviar al cliente. No usar como contrato ni propuesta final sin adaptación.*
