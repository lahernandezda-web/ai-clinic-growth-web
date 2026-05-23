# SPEC — Legal Data Readiness PLEXAI MVP

## Estado

| Campo | Valor |
| --- | --- |
| Fase | SPEC |
| Implementación | Pendiente |
| Alcance | Datos legales reales antes de preview deploy público o producción |
| Código | No modificar en esta fase |
| Deployment | No ejecutar en esta fase |
| Secretos | No leer ni documentar `web/.env.local` |

---

## 1. Objetivo

Definir qué datos legales faltan antes de cualquier **preview deploy público** o **producción** de PLEXAI.

Evitar publicar páginas legales con placeholders visibles para usuarios finales.

Preparar una actualización controlada y documentada de las rutas `/privacidad` y `/aviso-legal`, separada de deployment y de cambios en integraciones.

---

## 2. Estado actual

| Elemento | Situación |
| --- | --- |
| Páginas legales | Existen `/privacidad` y `/aviso-legal` en el proyecto web |
| Contenido legal | Incluyen **placeholders legales pendientes** (versión provisional explícita en copy) |
| Deployment | **No realizado** |
| Vercel | **No conectado** |
| Repo | `main` sincronizada con `origin/main` |
| Pack documental comercial MVP 4 | Cerrado y pusheado (briefs comerciales; sin relación directa con datos legales) |

**Regla operativa:** no se deben publicar páginas legales incompletas en un entorno accesible al público (preview o producción).

---

## 3. Fuera de alcance

Esta SPEC **no** incluye:

- Asesoría legal definitiva ni dictamen jurídico vinculante
- Validación formal de cumplimiento RGPD/LOPDGDD por abogado o DPO
- Redacción de contrato de prestación de servicios
- Política legal compleja (cookies avanzadas, DPA, subencargados, etc.) más allá del mínimo MVP
- Deployment, preview deploy ni conexión a Vercel
- Modificación de código, rutas, Supabase, n8n o variables de entorno
- Lectura o uso de `web/.env.local`
- Inventar o rellenar datos legales no confirmados por el titular del proyecto

---

## 4. Datos pendientes por confirmar

Checklist de confirmación **antes** de implementar cambios en páginas legales:

- [ ] **Nombre legal** del titular / responsable del tratamiento
- [ ] **NIF/CIF** (solo si aplica y el titular decide publicarlo)
- [ ] **Email de contacto** general y/o de privacidad
- [ ] **Domicilio** o datos legales de contacto (si aplica y se desea publicar)
- [ ] **País** y **ámbito geográfico** de prestación del servicio
- [ ] **Forma jurídica:** persona física, autónomo, sociedad mercantil o marca comercial operando bajo otra entidad
- [ ] **Texto correcto** para contacto de privacidad (email dedicado o el mismo de contacto general, según decisión)
- [ ] **Dominio propio** previsto (sí/no y cuál)
- [ ] **Email profesional** del dominio (sí/no y cuál)
- [ ] **Captación de leads:** confirmar si el enfoque es **solo B2B** (clínicas, negocios, profesionales)
- [ ] **Datos sensibles:** confirmar que **no** se captarán datos de salud, datos de pacientes ni información sensible en formularios o flujos del MVP

> Hasta que estos ítems estén confirmados por escrito (mensaje, doc interno o checklist marcado), las páginas legales permanecen en estado provisional y **no aptas para publicación pública**.

---

## 5. Riesgos actuales

| Riesgo | Impacto |
| --- | --- |
| Publicar con placeholders | Impresión de falta de seriedad; posible incumplimiento de transparencia mínima |
| Formularios captando leads sin datos legales completos | Tratamiento de datos sin información clara del responsable |
| Confundir PLEXAI con servicio clínico | Expectativas erróneas; posible captación indebida de contexto sanitario |
| Captar datos sensibles por error | Riesgo grave de privacidad y de modelo de negocio |
| Promesas comerciales no alineadas con el MVP | Desalineación legal-comercial; reclamaciones o malentendidos |
| Activar producción o preview público antes de datos mínimos | Exposición prematura de textos incompletos o incorrectos |

---

## 6. Reglas para la actualización legal

Cuando se ejecute la fase de implementación (fuera de esta SPEC):

1. **No añadir datos inventados** (nombres, NIF, domicilios, emails ficticios).
2. **No publicar NIF/CIF** si el titular no lo confirma expresamente.
3. **No publicar domicilio** si no se confirma; usar alternativa acordada (p. ej. solo email y país).
4. **No prometer cumplimiento legal definitivo** ni certificaciones no obtenidas.
5. **Mantener** la advertencia de no enviar datos clínicos, datos de pacientes ni información sensible.
6. **Mantener** tono claro, honesto y provisional solo donde siga siendo cierto (p. ej. “versión MVP” si aplica).
7. Alinear copy con `docs/product-current-state.md` y con claims del landing (sin sobreprometer).
8. Cambios en bloques pequeños: recopilar datos → actualizar páginas → verificar → documentar → decidir deploy.

---

## 7. Plan de implementación futuro

### Bloque A — Recopilar datos legales reales

- Responder la sección 10 (preguntas al usuario).
- Marcar checklist de la sección 4.
- Guardar decisiones en documentación interna (sin secretos ni `.env.local`).

### Bloque B — Actualizar `/privacidad` y `/aviso-legal`

- Sustituir placeholders por textos confirmados.
- Revisar coherencia entre ambas páginas (titular, contacto, finalidad, ámbito).
- No añadir cláusulas complejas no acordadas en MVP.

### Bloque C — Verificar rutas legales y formulario

- Comprobar enlaces desde footer y formulario hacia `/privacidad`.
- Verificar que el aviso de no enviar datos sensibles sigue visible en formulario y/o legal.
- Revisión manual en local (sin deploy en este bloque).

### Bloque D — Commit y push

- Commit descriptivo (docs + páginas legales cuando corresponda).
- Push a `main` según flujo habitual del repo.

### Bloque E — Decidir preview deploy

- Solo después de criterios de aceptación cumplidos.
- Coordinar con `docs/spec-deployment-readiness-mvp.md` y `docs/checklist-vercel-deployment-mvp.md`.
- Conectar Vercel y preview **fuera** de esta SPEC inicial.

---

## 8. Criterios de aceptación

La fase de implementación legal se considera lista cuando:

- [ ] **No quedan placeholders visibles** en `/privacidad` ni `/aviso-legal`.
- [ ] Las páginas muestran **datos reales confirmados** por el titular (nombre, contacto, ámbito; NIF/domicilio solo si se acordó publicarlos).
- [ ] El **formulario** enlaza correctamente a la política de privacidad.
- [ ] La **advertencia** de no enviar datos sensibles / clínicos / de pacientes sigue visible donde corresponda.
- [ ] **No se tocó** `web/.env.local` durante el bloque legal.
- [ ] **No se hizo deployment** durante este bloque (solo preparación y verificación local).
- [ ] Se **documenta** el cambio en `docs/product-current-state.md` (estado legal y fecha).

---

## 9. Preguntas necesarias para el usuario

Antes de implementar, el titular del proyecto debe responder:

1. ¿Cuál es el **nombre legal exacto** del responsable?
2. ¿Cuál es la **forma jurídica** (persona física, autónomo, SL/SA, marca comercial bajo otra entidad)?
3. ¿Se desea incluir **NIF/CIF** en las páginas públicas? Si sí, indicar el número.
4. ¿Cuál es el **email de contacto** y el de **privacidad** (¿mismo o distinto)?
5. ¿Se publicará **domicilio** completo? Si no, ¿qué texto alternativo (país, provincia, “contacto por email”)?
6. ¿Cuál es el **dominio previsto** para PLEXAI?
7. ¿Habrá **email profesional** en ese dominio (cuál)?
8. ¿Cuál es el **alcance geográfico** del servicio (España, UE, otro)?
9. ¿Se mantiene el enfoque **solo B2B** para leads y comunicaciones?
10. ¿Confirmas que los formularios **no** recogerán datos de salud, pacientes ni información sensible?

---

## 10. Estado de esta SPEC

| Ítem | Estado |
| --- | --- |
| SPEC creada | Sí |
| Datos legales reales recopilados | Pendiente |
| Implementación en páginas legales | Pendiente (si se decide) |
| Preview deploy / producción | Bloqueado hasta cumplir criterios de aceptación |

---

## Referencias

- `web/app/privacidad/page.tsx` — implementación actual (no modificar en esta fase)
- `web/app/aviso-legal/page.tsx` — implementación actual (no modificar en esta fase)
- `docs/spec-deployment-readiness-mvp.md` — readiness de deployment
- `docs/checklist-vercel-deployment-mvp.md` — checklist Vercel
- `docs/product-current-state.md` — estado del producto (actualizar tras implementación legal)
