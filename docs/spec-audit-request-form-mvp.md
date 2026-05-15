# SPEC — Audit Request Form MVP

## Status

- **Fase:** SPEC
- **Implementación:** pendiente
- **SQL:** pendiente
- **API:** pendiente
- **UI:** pendiente
- **Automatizaciones:** fuera de alcance
- **Deployment:** fuera de alcance

---

## Goal

El objetivo es permitir que un **negocio** solicite una **auditoría gratuita** desde la web PLEXAI. El formulario debe captar **leads comerciales mínimos** (nombre, contacto comercial y contexto del negocio) y preparar el terreno para **automatizaciones futuras**, sin entrar en detalle sanitario ni en tratamientos.

---

## Business context

PLEXAI **no vende IA por vender**: prioriza analizar procesos operativos y detectar **oportunidades reales** de automatización con impacto práctico. El formulario debe ayudar a entender, de forma rápida y voluntaria por parte del solicitante:

- **Qué tipo de negocio** es (rubro/local).
- **Qué problema o fricción** percibe en su día a día (lenguaje negocio, no clínico).
- **Qué procesos repetitivos** quiere mejorar (contacto, organización interna, etc.).
- **Si hay interés suficiente** para una conversación o demo posterior, sujeto a disponibilidad y criterios comerciales de PLEXAI.

---

## In scope

- Diseño del formulario de solicitud de auditoría gratuita.
- Definición de campos, tipos de control y etiquetas en español.
- Reglas de validación lado cliente y lado servidor en implementación posterior.
- **Tabla futura** en Supabase (solo como diseño documentado aquí).
- **Endpoint futuro** (solo como contrato/documentación aquí).
- Integración visual en la landing (sección auditoría gratuita existente).
- Estados de UX: envío en curso, éxito, error sin filtrar detalles internos.
- Copy de privacidad básico orientado al usuario (uso comercial únicamente).
- Documentación de seguridad en esta SPEC (alcance MVP, límites, qué no se captura).

---

## Out of scope

Lo siguiente **no forma parte del MVP 2** descrito aquí como entregable funcionando:

- n8n.
- Envío automático de email al usuario o equipo.
- WhatsApp.
- Agenda / calendario / reserva de llamadas automatizada.
- Chatbot conversacional funcional integrado en el mismo flujo.
- Voz / asistentes de voz.
- Dashboard privado, panel CRM o vistas internas persistentes sin autenticación definida.
- Login, roles o multi-tenant.
- CRM completo ni scoring predictivo avanzado.
- Cualquier dato **clínico**, de pacientes, diagnósticos, tratamientos o documentación médica sensible.
- Deployment Productivo hasta que existan aviso legal / políticas y decisiones pendientes aclaradas.
- Promesa explícita de integraciones futuras como si ya fueran parte del producto (email, WhatsApp, calendario, voz o CRM como “activados”).

---

## Proposed user flow

1. El usuario llega a la landing PLEXAI en `/`.
2. Hace clic en el ancla o botón **«Pide una auditoría gratuita»**.
3. Navega (scroll suave si aplica) hasta el bloque donde vive el formulario de auditoría.
4. Rellena los **datos comerciales mínimos** definidos en Form fields.
5. Marca **consentimiento básico** de contacto.
6. Envía la solicitud.
7. Ve un **mensaje de éxito** claro (sin prometer SLA de respuesta automatizada si no existe).
8. La solicitud queda **persistida para revisión manual** cuando exista tabla + API implementadas (en esta SPEC solo está diseñado el destino pretendido).

---

## Form fields

### 1. `name`

- **label:** Nombre  
- **required:** yes  
- **type:** text  

### 2. `email`

- **label:** Email  
- **required:** yes  
- **type:** email  

### 3. `phone`

- **label:** Teléfono  
- **required:** no  
- **type:** text  

### 4. `business_type`

- **label:** Tipo de negocio  
- **required:** yes  
- **type:** select  
- **options:**
  - Clínica dental
  - Podología
  - Clínica estética
  - Fisioterapia / osteopatía
  - Clínica privada
  - Academia / formación
  - Otro negocio local

### 5. `city`

- **label:** Ciudad  
- **required:** no  
- **type:** text  

### 6. `website_or_instagram`

- **label:** Web o Instagram  
- **required:** no  
- **type:** text  

### 7. `main_problem`

- **label:** ¿Qué proceso te gustaría mejorar?  
- **required:** yes  
- **type:** textarea  
- **helper:** No incluyas datos clínicos ni información de pacientes.

### 8. `improvement_area`

- **label:** Área principal de interés  
- **required:** yes  
- **type:** select  
- **options:**
  - Responder consultas
  - Captar más leads
  - Organizar contactos
  - Hacer seguimiento
  - Automatizar tareas internas
  - Conectar herramientas
  - No lo tengo claro todavía

### 9. `consent`

- **label:** Acepto que PLEXAI me contacte para revisar mi solicitud.  
- **required:** yes  
- **type:** checkbox  

---

## Validation rules

- **`name`:** obligatorio; string después de trim **no vacío**; rechazar solo espacios.
- **`email`:** obligatorio; validación de **formato email básico** (implementación práctica típica: regex saneada + normalización lowercase del dominio opcionalmente documentada implementación posterior).
- **`phone`:** opcional; si vacío después de trim, tratar como **null**/ausente en persistencia; si presente, string con longitud máxima razonable (p. ej. 40 caracteres definidos en implementación).
- **`business_type`:** obligatorio; valor debe coincidir **exactamente** con una de las opciones permitidas (lista blanca en servidor obligatoria cuando exista API).
- **`city`:** opcional; vacío → null; si presente, string con máximo razonable (p. ej. 120 caracteres implementación posterior).
- **`website_or_instagram`:** opcional; vacío → null; máximo largo moderado por URL/red social (definible en código; no hacer scraping ni validación de existencia obligatoria en MVP).
- **`main_problem`:** obligatorio; string no vacío tras trim; **longitud máxima razonable** (ej. objetivo típico 2000–4000 caracteres a fijar en implementación para evitar abuso/costes).
- **`improvement_area`:** obligatorio; debe estar en opciones permitidas (lista blanca servidor).
- **`consent`:** debe ser **`true`**; si falta o es false → solicitud rechazada (400 cuando exista API).
- **Opcionales vacíos** se persisten como **SQL `NULL`** (o equivalente en modelo), no como string vacío, salvo decisión posterior explícita y documentada.
- **`metadata` futura:** objeto **JSON plano** (solo claves/valores escalares o estructuras pequeñas acordadas) para usar en siguientes iteraciones sin reescalar esquema; por defecto `{}` hasta que se necesite contenido revisado por SPEC.

---

## Proposed database table

**Nombre propuesto:** `public.audit_requests`

**Campos:**

| Columna | Tipo | Nullable | Detalle |
| --- | --- | --- | --- |
| `id` | `uuid` | NOT NULL | `PRIMARY KEY` con `DEFAULT gen_random_uuid()` |
| `name` | `text` | NOT NULL | |
| `email` | `text` | NOT NULL | |
| `phone` | `text` | NULL | |
| `business_type` | `text` | NOT NULL | |
| `city` | `text` | NULL | |
| `website_or_instagram` | `text` | NULL | |
| `main_problem` | `text` | NOT NULL | |
| `improvement_area` | `text` | NOT NULL | |
| `status` | `text` | NOT NULL | `DEFAULT 'new'` |
| `source` | `text` | NOT NULL | `DEFAULT 'plexai_landing'` |
| `consent` | `boolean` | NOT NULL | `DEFAULT false` (solo filas válidas guardarían `true` por regla negocio) |
| `metadata` | `jsonb` | NOT NULL | `DEFAULT '{}'::jsonb` |
| `created_at` | `timestamptz` | NOT NULL | `DEFAULT now()` |
| `updated_at` | `timestamptz` | NOT NULL | `DEFAULT now()` |

**Valores documentados para `status` (texto libre permitido hasta que se formalice proceso):**

- `new`
- `reviewed`
- `contacted`
- `qualified`
- `not_fit`
- `archived`

**Decisiones:**

- No usar tipos ENUM de Postgres en MVP: columnas **`text`** con validación aplicación donde corresponda.
- **RLS:** no activar solo por esta SPEC si el modelo de seguridad será **solo service role servidor** vía rutas backend; igualmente debe documentarse que una **implementación producción madura** requerirá **estrategia de acceso revisada** (RLS/políticas, rotación credenciales, rate limiting, registros minimizados).

---

## Proposed API

**Endpoint futuro:**

`POST /api/audit-requests`

**Comportamiento previsto:**

- Aceptar cuerpo **JSON** con los campos del formulario (nombres alineados a esta SPEC).
- **Validar** todos los campos según Validation rules en servidor.
- Rechazo con **`400`** y payload de errores por campo cuando aplique (sin fugas internas).
- Persistencia **server-side en Supabase** cuando existan credenciales y cliente seguro fuera del navegador.
- Respuesta de éxito: por ejemplo **`{ "request": { "id": "...", "...campos públicos necesarios..." } }`** o objeto **acotado**, sin exponer secretos ni stack traces.
- **No exponer errores internos** (bases de datos, stack, texto de cliente Supabase raw).
- **No enviar datos a n8n** en MVP 2 inicial.
- **No enviar emails** en MVP 2 inicial.

**Opcional posterior** (fuera alcance típico sin login):

- `GET /api/audit-requests` para paneles internos: solo después de modelo de auth y seguridad decididos por SPEC aparte.

---

## UI integration

El bloque actual de **«Auditoría gratuita»** en la landing se **reemplazará o ampliará** para incluir un formulario usable y accesible.

Debe:

- Mantener texto introductorio **breve** alineado a negocio y automatización, no sanitario clínico.
- Mostrar **campos claros** con etiquetas consistentes con Form fields y helpers donde proceda (`main_problem`).
- Mostrar texto de privacidad básico (ver Privacy and safety copy) **visible antes o junto al envío**.
- Manejar **estado de envío** (deshabilitar envío repetido durante request).
- **Mensaje de éxito** neutro tras guardado efectivo cuando exista backend.
- **Mensaje de error** usable (“No pudimos enviar…” + reintento) sin código internos.
- **No pedir** información clínica, de pacientes, diagnósticos ni documentos sanitarios sensibles en labels o placeholders.
- **No prometer** respuesta automatizada instantánea, integración WhatsApp/email/calendario activa si aún no lo está.

---

## Privacy and safety copy

**Texto visible propuesto:**

> «Usa este formulario solo para información comercial sobre tu negocio. No incluyas datos de pacientes, diagnósticos, tratamientos ni información clínica.»

**Texto de consentimiento (checkbox):**

> «Acepto que PLEXAI me contacte para revisar mi solicitud de auditoría gratuita.»

---

## Technical implementation plan

Orden recomendado en **fases futuras tras aprobar SPEC** (implementación posterior, no ejecutada aquí):

1. **SQL**  
   - Crear archivo de migración o script revisado (`supabase/product-audit-requests.sql` o naming acordado) con la tabla `public.audit_requests` descrita más arriba + triggers opcionales para `updated_at` si procede por convención del repo.

2. **API**  
   - Crear tipos, validación, persistencia y ruta HTTP:
     - `web/lib/audit-requests/types.ts`
     - `web/lib/audit-requests/validate-input.ts`
     - `web/lib/audit-requests/persistence.ts`
     - `web/app/api/audit-requests/route.ts`

3. **UI**  
   - Integrar formulario en `web/app/page.tsx` **o componente auxiliar dedicado**, manteniendo la landing legible.

4. **Verification**  
   - `npm.cmd run lint`  
   - `npx tsc --noEmit`  
   - Prueba manual `POST` (por ejemplo cliente HTTP contra entorno dev) cuando existan claves sólo locales seguras (.env ignorado repo).  
   - Prueba visual en `/`.

5. **Docs**  
   - Actualizar `docs/product-current-state.md` con nuevo estado cuando el MVP funcional exista.

---

## Acceptance criteria

- Esta SPEC existe y cubre objetivo del formulario MVP 2.
- **Sin código aplicación** nuevo en esta fase SPEC únicamente.
- **Sin archivos `.sql`** creados en el repositorio en esta fase (solo texto de diseño dentro de SPEC).
- **Sin rutas `/api`** creadas todavía.
- Campos definidos con labels, tipo y opciones donde aplica.
- Validaciones textuales coherentes servidor/cliente cuando se implementen.
- Tabla futura y estados normalizados en texto definidos (`audit_requests`).
- Endpoint futuro y contratos de comportamiento establecidos a alto nivel.
- Privacidad y límites de datos explícitos.
- Lista **In scope / Out of scope** clara y estable.

---

## Risks and pending decisions

- **Orden MVP 2:** decidir si se entrega primero solo **UI con envío stub** versus **pipeline completo** (Supabase real) antes de público abierto — impacta reputación técnica y expectativas.
- **Automatización n8n:** cuándo y bajo **qué eventos** enlazar después de tener leads estables en base.
- **Email interno al equipo:** si y cuándo notificar nueva solicitud; qué herramienta y qué tratamiento RGPD/consent aplicable antes de lanzamiento real.
- **Aspectos legales:** antes de captar datos reales de forma pública estable, obtener **bases legales y textos**: aviso legal, política de privacidad, referencia mínima a tratamiento datos personales locales (consultar profesional donde sea necesario; esta SPEC no es asesoría legal).
- **Seguridad acceso BD:** revisar modelo final (servicio servidor + posible **RLS** + rate limits + logging sin PII sensible).
- **No usar datos clínicos:** reforzar en copy, validación superficial de patrones prohibitivos sólo como capa opcional revisada posteriormente si se necesita barrera técnica (no sustituye responsabilidades legales y de proceso humano).

---

## References repository

- SPEC landing previa: `docs/spec-plexai-landing-mvp.md`
- Estado actual del producto documentado en: `docs/product-current-state.md`
