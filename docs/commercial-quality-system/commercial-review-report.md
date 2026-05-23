# Informe de revisión comercial — PLEXAI

**Fecha de revisión:** trabajo nocturno en rama `docs/commercial-sector-playbooks`  
**Alcance revisado:** `docs/commercial-sector-playbooks/`, `docs/commercial-sales-system/`  
**Método:** lectura completa de archivos prioritarios + búsqueda de patrones de riesgo + checklist `claim-review-checklist.md`

---

## Resumen ejecutivo

El material existente es **sólido en límites explícitos** (tablas “no prometer” en READMEs, objeciones 23–27, post-demo en prospección). Los principales riesgos residuales son **matices de velocidad** (“instantáneo”, “en segundos”), **referencias técnicas** en demos (Supabase/n8n) sin traducir a lenguaje cliente, y **repetición** entre packs que puede desalinear versiones si solo se edita uno.

Se recomienda usar el nuevo **commercial-quality-system** como capa obligatoria pre-envío. Correcciones quirúrgicas aplicadas en 8 archivos de Fase 3; playbooks sectoriales individuales (dental, etc.) **no reescritos** — revisión humana muestral sugerida.

---

## docs/commercial-sector-playbooks/

### Fortalezas

| Documento | Fortaleza |
|-----------|-----------|
| `README.md` | Tabla límites comercial clara; enlaces de uso |
| `objections-bank.md` | 45+ objeciones con respuestas alineadas a MVP |
| `prospecting-messages.md` | Límites en cabecera; mensajes post-demo con WhatsApp/calendario |
| `demo-scenarios.md` | Reglas globales demo; narrativa por sector |
| `prospecting-messages.md` § post-demo | Refuerzo datos no clínicos |

### Riesgos detectados

| ID | Archivo | Riesgo | Severidad | Acción |
|----|---------|--------|-----------|--------|
| P1 | `prospecting-messages.md` | “al instante” / “aviso instantáneo” puede leerse como SLA al cliente final | Media | Endurecido → “aviso interno en flujo demostrable” |
| P2 | `demo-scenarios.md` | “en segundos” (escenario D2) | Media | Endurecido → matiz demo, sin SLA |
| P3 | `demo-scenarios.md` | Mención Supabase/n8n en guion demo | Baja | OK para demo interna; al cliente preferir “registro” y “automatización” |
| P4 | `prospecting-messages.md` | “liderás” en LinkedIn | Baja | Tono corporativo leve; aceptable |
| P5 | Playbooks sectoriales (6 archivos) | Posible vocabulario “paciente” en contexto comercial | Media | Revisión humana: distinguir “cliente/persona interesada” vs dato clínico |
| P6 | `demo-scenarios.md` | “Landing mínima” en P3 podía sonar promesa web | Baja | Mantener “patrón” / “se valora” |

### Repeticiones

- Límites WhatsApp/calendario/voz repetidos en README, demo-scenarios, objections — **coherente**, no redundancia problemática.  
- Mensaje central repetido — **deseable** para refuerzo.

### Mejoras de tono sugeridas (no todas aplicadas)

- Unificar “lead” vs “solicitud” en español cliente (preferir **solicitud**).  
- En IG DM mensaje 4 emoji — aceptable; no abusar en email frío.

### Documentos más fuertes

1. `objections-bank.md`  
2. `README.md` (sectorial)  
3. `demo-scenarios.md`

### Requiere revisión humana

- Los 6 playbooks sectoriales línea a línea (tiempo estimado 2–3 h).  
- Coherencia con `docs/commercial-demo-script-mvp.md` fuera de este commit (no modificado).  
- URLs reales de landing en mensajes `[enlace]` antes de enviar.

---

## docs/commercial-sales-system/

### Fortalezas

| Documento | Fortaleza |
|-----------|-----------|
| `red-flags-and-risk-register.md` | 32 riesgos con respuesta |
| `mvp-proposal-template.md` | Exclusiones explícitas |
| `follow-up-sequences.md` | Sección 9 WhatsApp/calendario/voz honesta |
| `use-case-library.md` | “No debe” por caso; MVP vs F2 |
| `lead-qualification-framework.md` | Scoring y señales rojas |
| `scope-control-playbook.md` | Scope creep bien documentado |

### Riesgos detectados

| ID | Archivo | Riesgo | Severidad | Acción |
|----|---------|--------|-----------|--------|
| S1 | `follow-up-sequences.md` | Volumen alto de mensajes; riesgo copiar sin personalizar | Media | Refuerzo reglas + enlace quality system |
| S2 | `use-case-library.md` | UC49 veterinaria — aclarar solo comercial | Baja | Nota cabecera reforzada |
| S3 | `offer-packaging.md` | “Fase 2 integraciones” podría leerse como compromiso | Baja | Matiz “previa revisión” |
| S4 | `mvp-proposal-template.md` | Campos precio en blanco — bien; riesgo rellenar apresurado | Media | Checklist pre-envío añadido |
| S5 | Varios | “CRM ligero” — OK si no se vende como CRM completo | Baja | Mantener |

### Repeticiones

- Flujo web → aviso → hoja aparece en 10+ archivos — coherente con mensaje central.  
- `sales-assets-index.md` y README — solapamiento útil; actualizar índice con quality pack.

### Documentos más fuertes

1. `red-flags-and-risk-register.md`  
2. `scope-control-playbook.md`  
3. `lead-qualification-framework.md`

### Requiere revisión humana

- `discovery-call-scripts.md` — ensayo con rol-play.  
- `value-metrics-library.md` — validar métricas con primer cliente real.  
- `audit-report-template.md` — ejemplo relleno interno antes de enviar a cliente real.

---

## Frases que podían sonar demasiado prometedoras (corregidas o mitigadas)

| Frase original (aprox.) | Ubicación | Estado |
|-------------------------|-----------|--------|
| “al instante” | prospecting-messages | Corregido |
| “aviso instantáneo” | prospecting-messages | Corregido |
| “en segundos” | demo-scenarios D2 | Corregido |
| “demo gratis” sin matiz | IG prospección | Aceptable; significa sin coste de demo, no producto gratis |

---

## Coherencia entre packs

| Tema | ¿Alineado? | Nota |
|------|------------|------|
| WhatsApp no activo | Sí | |
| Calendario no activo | Sí | |
| Voz no activa | Sí | |
| No datos clínicos | Sí | |
| Control humano | Sí | |
| No precios en frío | Sí | |
| Quality system referenciado | Tras este commit | READMEs + índices |

---

## Acciones realizadas en esta revisión

1. Creado `docs/commercial-quality-system/` completo.  
2. Endurecimiento quirúrgico de 8 archivos Fase 3.  
3. `master-commercial-map.md` + enlaces en READMEs/índice.  
4. Este informe para seguimiento humano.

---

## Pendientes post-revisión (humano)

- [ ] Revisar 6 playbooks sectoriales con `claim-review-checklist.md`  
- [ ] Sustituir `[URL]` por URLs públicas reales antes de envío  
- [ ] Primer envío real con revisión de frase en `forbidden-and-approved-phrases.md`  
- [ ] Actualizar este informe tras primer cliente piloto con lecciones aprendidas  
- [ ] Decidir si unificar término “lead” → “solicitud” en segunda pasada

---

*Informe interno PLEXAI — no enviar al cliente.*
