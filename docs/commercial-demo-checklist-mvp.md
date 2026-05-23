# Checklist operativo de demo comercial PLEXAI — MVP 4

---

## Objetivo del documento

Checklist **interno** para preparar una demo comercial de PLEXAI antes de una reunión, llamada o Zoom.

Sirve para:

- Revisar que lo técnico y lo comercial estén listos.
- Reducir improvisación y olvidos.
- Recordar límites del MVP antes de compartir pantalla.

**No sustituye** el guion (`docs/commercial-demo-script-mvp.md`) ni la SPEC (`docs/spec-demo-commercial-mvp.md`).

---

## Cuándo usar este checklist

Usar este documento:

- [ ] Antes de una **demo con un posible cliente**.
- [ ] Antes de una **llamada exploratoria** comercial.
- [ ] Antes de una **presentación interna** del MVP.
- [ ] Antes de **enseñar el MVP a alguien externo** (socio, mentor, inversor ligero).

**Momento recomendado:** el mismo día de la reunión o **30–60 minutos antes**.

---

## Preparación técnica

- [ ] Confirmar que el proyecto correcto es **ai-clinic-growth-web** (marca PLEXAI).
- [ ] Confirmar que **NO** se está trabajando en **CURSOR.p1**.
- [ ] Confirmar que **NO** se está trabajando en **business-assistant-mvp**.
- [ ] Abrir la **landing local** si se usa entorno local (`npm run dev` en `web/`).
- [ ] Confirmar que la ruta **`/`** funciona.
- [ ] Confirmar que **`/#auditoria`** funciona (formulario visible).
- [ ] Confirmar que **`/privacidad`** funciona.
- [ ] Confirmar que **`/aviso-legal`** funciona.
- [ ] Confirmar que el **formulario** está visible y usable.
- [ ] Confirmar que **no** se muestran errores en consola visibles para el usuario (revisión rápida en navegador).
- [ ] Confirmar que **no** se muestran datos sensibles en pantalla (ni en UI ni en pestañas abiertas).

*(Opcional, demo extendida con flujo en vivo: probar un envío de prueba reciente con datos ficticios — sin mostrar backend si no está preparado.)*

---

## Preparación comercial

- [ ] Identificar **sector** del prospecto (clínica, academia, negocio local, etc.).
- [ ] Identificar **1–3 posibles procesos repetitivos** del negocio (avisos, copiar datos, seguimiento de leads, etc.).
- [ ] Preparar **ejemplos específicos** para ese sector (ver guion y one-pager).
- [ ] Tener claro que la propuesta es **auditoría gratuita**, no venta agresiva.
- [ ] Tener abierto el **one-pager comercial** (`docs/commercial-one-pager-mvp.md`).
- [ ] Tener abierto el **guion de demo** (`docs/commercial-demo-script-mvp.md`).
- [ ] Preparar una **frase de apertura** (adaptar del guion).
- [ ] Preparar una **pregunta inicial** sobre procesos repetitivos (ej.: «¿Qué tarea repetís cada semana que os quita tiempo sin aportar valor directo?»).
- [ ] Preparar **cierre con siguiente paso** (auditoría gratuita, formulario o fecha de seguimiento).

---

## Límites que deben recordarse antes de la demo

- [ ] **No** prometer WhatsApp activo.
- [ ] **No** prometer calendario activo.
- [ ] **No** prometer voz activa.
- [ ] **No** prometer CRM completo.
- [ ] **No** prometer sustitución de personal.
- [ ] **No** prometer automatización total del negocio.
- [ ] **No** prometer uso clínico ni gestión de pacientes.
- [ ] **No** pedir datos clínicos, datos de pacientes ni información sensible.
- [ ] **No** decir que PLEXAI es una empresa grande o consolidada.
- [ ] **No** decir que el sistema está en **producción pública** si no se ha hecho deployment.
- [ ] **No** ocultar que hay **elementos pendientes** antes de producción pública (datos legales reales, deployment según checklist Vercel).

---

## Flujo de demo recomendado

Seguir este orden (versión corta o extendida según tiempo):

- [ ] **Presentación breve** de PLEXAI.
- [ ] **Problema del negocio** (leads dispersos, tareas repetitivas, falta de sistema).
- [ ] **Propuesta de automatización con criterio** (proceso primero; IA donde aporta).
- [ ] **Recorrido por la landing** (`/` — hero, propuesta, sectores, método, CTA).
- [ ] **Explicación del formulario** (`/#auditoria` — datos comerciales, consentimiento, sin datos clínicos).
- [ ] **Explicación conceptual del flujo interno** (formulario → registro → aviso interno → seguimiento).
- [ ] **Ejemplos adaptados al sector** (1–2 casos con límite honesto).
- [ ] **Límites honestos** (qué no hace el MVP hoy).
- [ ] **Propuesta de auditoría gratuita**.
- [ ] **Próximo paso** concreto (formulario, llamada de seguimiento, envío de resumen).

---

## Validación antes de compartir pantalla

- [ ] Cerrar **pestañas innecesarias**.
- [ ] **No** mostrar Gmail personal.
- [ ] **No** mostrar n8n con secretos (URLs de webhook, headers, credenciales).
- [ ] **No** mostrar Supabase con datos internos sensibles o filas de clientes reales.
- [ ] **No** mostrar Google Sheets con **datos reales de terceros**.
- [ ] **No** mostrar terminal con rutas o variables sensibles.
- [ ] **No** mostrar `.env`, `.env.local`, `web/.env.local` ni paneles con claves.
- [ ] Usar **datos ficticios** si se rellena el formulario en vivo.
- [ ] Tener preparada una **pestaña limpia** con la landing (`/` o `/#auditoria`).
- [ ] Zoom / Meet: **audio y compartir pantalla** probados.

---

## Después de la demo

- [ ] Anotar **sector** y tipo de negocio.
- [ ] Anotar **problemas repetitivos** mencionados por el prospecto.
- [ ] Anotar **objeciones** (precio, WhatsApp, equipo, datos, etc.).
- [ ] Anotar **posibles automatizaciones útiles** (1–3, pequeñas y medibles).
- [ ] Definir si **merece auditoría gratuita** (sí / no / más información).
- [ ] Definir **siguiente contacto** (fecha, canal, quién escribe).
- [ ] **No** comprometer precios o plazos sin análisis.
- [ ] **No** prometer integraciones sin validar (WhatsApp, CRM, calendario, voz).

---

## Criterio para considerar demo exitosa

La demo se considera **exitosa** si se cumple lo siguiente:

- [ ] El prospecto **entendió qué hace PLEXAI** (orden de procesos + automatizaciones pequeñas).
- [ ] El prospecto **entendió que no es IA por moda** (criterio, control humano, empezar pequeño).
- [ ] Se **detectó al menos un proceso repetitivo real** en su negocio.
- [ ] Se pudo explicar **una primera automatización pequeña y medible** (ej. solicitud web → aviso interno → registro).
- [ ] Quedó **claro el siguiente paso** (auditoría gratuita u otra acción acordada).

*Una demo puede ser exitosa aunque el prospecto diga que no sigue ahora; el objetivo es claridad y honestidad, no cerrar en la llamada.*

---

## Notas internas

- Documento **interno** del equipo PLEXAI.
- **No sustituye** propuesta económica, contrato ni documentación legal.
- **No** enviar al cliente como compromiso formal.
- Debe **actualizarse** si se implementan nuevas integraciones o cambia el alcance del MVP (ver `docs/product-current-state.md`).

**Referencias del pack comercial MVP 4:**

| Documento | Uso |
|-----------|-----|
| `docs/spec-demo-commercial-mvp.md` | SPEC, casos por sector, objeciones ampliadas |
| `docs/commercial-one-pager-mvp.md` | Resumen comercial |
| `docs/commercial-demo-script-mvp.md` | Guion hablado imprimible |
| `docs/product-current-state.md` | Estado técnico actual |

---

## Estado

| Campo | Valor |
|-------|--------|
| **Documento** | Creado como parte del **pack comercial MVP 4** |
| **Tipo** | Checklist operativo interno |
| **Implementación de código** | Ninguna |
| **Pendiente** | Conversión futura a **PDF** o formato imprimible si el equipo lo decide |

---

*PLEXAI — Checklist operativo de demo comercial MVP 4. Uso interno.*
