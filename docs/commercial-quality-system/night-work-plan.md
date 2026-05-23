# Plan de trabajo nocturno — Calidad comercial PLEXAI

**Rama:** `docs/commercial-sector-playbooks`  
**Fecha orientativa:** trabajo autónomo de auditoría y endurecimiento  
**Alcance:** solo `docs/`

---

## Objetivo del trabajo nocturno

Auditar, ordenar, mejorar y **endurecer** el material comercial ya creado (playbooks sectoriales + sales system) mediante un **sistema de control de calidad** nuevo, correcciones quirúrgicas en textos de alto riesgo y mapas de navegación entre packs — **sin tocar código, web, APIs ni despliegue**.

Resultado esperado: documentación interna más segura para enviar a clientes, con reglas explícitas, frases prohibidas/aprobadas e informe de revisión para el humano.

---

## Documentos a revisar

### Pack sectorial (`docs/commercial-sector-playbooks/`)

| Archivo | Acción |
|---------|--------|
| `README.md` | Enlace a quality system |
| `prospecting-messages.md` | Endurecer promesas de velocidad/canales |
| `objections-bank.md` | Matizar respuestas si hace falta |
| `demo-scenarios.md` | Endurecer SLAs implícitos; reforzar límites MVP |
| `dental-clinics.md` | Lectura muestral (sin reescritura masiva) |
| `podiatry-clinics.md` | Idem |
| `aesthetic-clinics.md` | Idem |
| `physio-osteopathy.md` | Idem |
| `academies.md` | Idem |
| `local-services.md` | Idem |
| `demo-scenarios.md` | Edición prioritaria |
| `prospecting-messages.md` | Edición prioritaria |
| `objections-bank.md` | Edición prioritaria |

### Pack comercial-operativo (`docs/commercial-sales-system/`)

| Archivo | Acción |
|---------|--------|
| `README.md` | Enlace a quality system |
| `sales-assets-index.md` | Tercer pack + checklist pre-envío |
| `follow-up-sequences.md` | Endurecer reglas y mensajes sensibles |
| `use-case-library.md` | Nota de cumplimiento en cabecera |
| `red-flags-and-risk-register.md` | Cross-ref calidad |
| `offer-packaging.md` | Matizar ofertas |
| `mvp-proposal-template.md` | Reforzar exclusiones y pre-envío |
| Resto del pack | Referenciados en informe de revisión |

### Pack nuevo (`docs/commercial-quality-system/`)

Crear README, reglas de seguridad, checklist, tono, 80+ frases, informe de revisión, mapa maestro.

---

## Riesgos comerciales a detectar

1. Promesas de **WhatsApp, calendario, voz o CRM completo** como activos hoy.  
2. Lenguaje de **automatización total** o sustitución de personal.  
3. **Claims** de empresa grande, líder, internacional o agencia top.  
4. Uso **clínico/sanitario** o captación de datos de pacientes / sensibles.  
5. **SLA absolutos** (“en segundos”, “garantizado”, “100 %”).  
6. **Precios/plazos cerrados** sin diagnóstico.  
7. **Integraciones** no demostrables en MVP.  
8. Tono **demasiado corporativo falso** o demasiado informal.  
9. **Repetición** innecesaria entre packs sin valor añadido.  
10. Secretos, URLs privadas o variables de entorno en texto.

---

## Criterios de corrección

- Cambios **quirúrgicos**: matizar, no reescribir todo.  
- Añadir formulaciones: “se puede valorar”, “fase posterior”, “previa revisión”, “en el MVP demostrable”.  
- Reforzar **control humano** y **empezar pequeño**.  
- Mantener mensaje central PLEXAI sin distorsionar.  
- Cada frase enviable al cliente debe pasar `claim-review-checklist.md`.  
- Alternativas en `forbidden-and-approved-phrases.md`.

---

## Qué se puede editar

- Todo bajo `docs/commercial-quality-system/` (nuevo).  
- Archivos listados en Fase 3 del encargo (playbooks + sales subset).  
- README e índices de playbooks y sales system **solo para enlaces** relativos al quality system.  
- `docs/commercial-quality-system/commercial-review-report.md` (hallazgos documentados).

---

## Qué NO se puede editar

- `web/`, código fuente, formulario, páginas legales, APIs.  
- `.env`, `.env.example`, `web/.env.local` (no leer ni tocar).  
- Supabase, n8n, Vercel, dependencias, deployment.  
- Cualquier ruta fuera de `docs/`.  
- PDFs, imágenes, binarios.  
- Inventar funcionalidades no implementadas en MVP demostrable.

---

## Orden de ejecución

1. Confirmar rama y `git status -sb`.  
2. Crear este plan (`night-work-plan.md`).  
3. Crear `commercial-quality-system/` (README, reglas, checklist, tono, frases, informe).  
4. Revisar packs existentes y redactar `commercial-review-report.md`.  
5. Limpieza quirúrgica Fase 3 (8 archivos).  
6. Crear `master-commercial-map.md` y actualizar índices/READMEs.  
7. Revisión final de seguridad (grep mental + checklist).  
8. `git add docs/` y commit `docs: add commercial quality system`.  
9. **No push.**

---

## Criterios de finalización

- [ ] Existe `docs/commercial-quality-system/` con 7 archivos mínimos + plan.  
- [ ] `forbidden-and-approved-phrases.md` tiene ≥ 80 entradas.  
- [ ] `commercial-review-report.md` documenta riesgos y mejoras en ambos packs.  
- [ ] 8 archivos Fase 3 editados donde había riesgo detectado.  
- [ ] Mapa maestro e índices enlazan quality system.  
- [ ] Solo cambios bajo `docs/`.  
- [ ] Commit en rama `docs/commercial-sector-playbooks` sin push.

---

## Confirmación de límites técnicos

Este trabajo **no** modifica código, **no** modifica `web/`, **no** toca APIs, Supabase, n8n, Vercel, `.env` ni realiza deployment. Es documentación comercial interna exclusivamente.

---

*Plan interno PLEXAI — ejecución autónoma en rama docs/commercial-sector-playbooks.*
