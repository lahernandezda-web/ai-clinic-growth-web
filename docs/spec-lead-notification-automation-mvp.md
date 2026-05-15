# SPEC — Lead Notification Automation MVP

## 1. Objetivo

El MVP **Lead Notification Automation** busca notificar internamente cada nueva solicitud de auditoría gratuita recibida desde PLEXAI, de modo que el equipo pueda actuar sin depender exclusivamente del panel de Supabase. El diseño prioriza un sistema **simple**, **seguro** y **útil para demos comerciales** (por ejemplo, en Zoom), sin abrir canales innecesarios ni exponer datos sensibles.

## 2. Contexto actual

En el repositorio ya existen:

- Landing PLEXAI.
- Formulario de auditoría gratuita integrado en la landing.
- Endpoint `POST /api/audit-requests`.
- Tabla `public.audit_requests` en Supabase.
- Inserción verificada en Supabase tras envío del formulario.
- Documentación del MVP 2 (formulario y API de solicitudes de auditoría).

## 3. Problema que resuelve

Guardar leads en Supabase es correcto para persistencia y consulta, pero en un uso comercial real y en demostraciones hace falta que el negocio **reciba un aviso inmediato** y pueda revisar el lead **sin entrar manualmente** al panel de Supabase cada vez. Este MVP define cómo enlazar el guardado del lead con una notificación interna automatizada, manteniendo el flujo de captura actual.

## 4. Flujo propuesto

Flujo deseado de extremo a extremo:

**Landing PLEXAI** → **formulario de auditoría gratuita** → **`POST /api/audit-requests`** → **guardado en Supabase** → **evento `audit_request.created`** → **envío server-side a n8n** → **email interno** → **Google Sheets (opcional)**.

El usuario del formulario no debe percibir complejidad adicional; la automatización ocurre en segundo plano en el servidor.

## 5. Alcance del MVP

Dentro del alcance:

- Preparar un **evento interno** al crear correctamente un `audit_request`.
- **Reutilizar** el patrón de automatizaciones ya existente en la base del proyecto (cuando se implemente).
- Enviar a n8n un **payload mínimo** coherente con el evento.
- Permitir desde n8n el envío de un **email interno** de aviso.
- Permitir desde n8n el **registro en Google Sheets** como opción de demo y seguimiento ligero.
- Mantener **todo server-side** (sin secretos en el cliente).
- **No exponer secretos** (URLs firmadas, tokens, claves) en respuestas ni en el navegador.
- **No enviar datos clínicos** ni información que no sea la del propio formulario de lead.
- **No enviar historial** ni datos innecesarios fuera del objeto de solicitud de auditoría.

## 6. Fuera de alcance

Explícitamente fuera de alcance en esta SPEC (y no objetivo del MVP 3 tal como se documenta aquí):

- WhatsApp.
- Llamadas telefónicas.
- Voz (agentes de voz, IVR, etc.).
- Calendario (reservas, sincronización con agendas).
- CRM completo.
- Dashboard interno propio.
- Login / autenticación de usuarios finales.
- Multi-tenant.
- Scoring automático de leads.
- Respuestas automáticas al lead (chat o email al cliente).
- Envío de email **al cliente** desde este flujo.
- Campañas de marketing o newsletters.
- Deployment, dominio y Vercel (quedan para fases posteriores).
- Captchas avanzados.
- Legal avanzado (solo se asume cumplimiento básico con datos de contacto comerciales).
- Procesamiento de datos clínicos o de pacientes.

## 7. Evento propuesto

**Nombre del evento:** `audit_request.created`

**Payload mínimo sugerido** (todos los valores son ejemplos ilustrativos; en implementación real vendrán de la fila insertada y metadatos seguros):

```json
{
  "event": "audit_request.created",
  "source": "plexai_landing",
  "occurred_at": "ISO timestamp",
  "audit_request": {
    "id": "...",
    "name": "...",
    "email": "...",
    "phone": "...",
    "business_type": "...",
    "city": "...",
    "website_or_instagram": "...",
    "main_problem": "...",
    "improvement_area": "...",
    "status": "new",
    "created_at": "..."
  }
}
```

**Restricciones:**

- No incluir secretos, API keys, tokens de servicio ni claves de ningún tipo.
- No incluir datos clínicos ni identificadores de pacientes.
- Mantener el payload alineado con los campos del formulario / tabla, sin campos internos innecesarios.

## 8. Email interno propuesto

**Asunto sugerido:**

`Nuevo lead de auditoría gratuita — PLEXAI`

**Cuerpo (campos a incluir en el aviso):**

- Nombre
- Email
- Teléfono
- Tipo de negocio
- Ciudad
- Web / Instagram
- Proceso que quiere mejorar (`main_problem`)
- Área de interés (`improvement_area`)
- Fecha de la solicitud
- ID de la solicitud (para cruce con Supabase)

**Nota:** Este email es **exclusivamente interno** para el equipo; **no** es confirmación ni comunicación al cliente. El cliente ya recibe feedback adecuado en la UI del formulario según lo definido en MVP 2.

## 9. Google Sheets (opcional)

**Columnas propuestas** (orden sugerido para facilitar lectura en demos):

| Concepto            | Columna sugerida      |
|---------------------|------------------------|
| Fecha de creación   | `created_at`           |
| Identificador       | `id`                   |
| Nombre              | `name`                 |
| Email               | `email`                |
| Teléfono            | `phone`                |
| Tipo de negocio     | `business_type`        |
| Ciudad              | `city`                 |
| Web / Instagram     | `website_or_instagram` |
| Área de interés     | `improvement_area`     |
| Proceso a mejorar   | `main_problem`         |
| Estado              | `status`               |
| Origen              | `source`               |

Google Sheets es útil para **demo en Zoom** y **seguimiento simple** por parte del negocio, pero **no sustituye** a Supabase como **fuente de verdad** del lead. Cualquier inconsistencia debe resolverse contra la base de datos.

## 10. Arquitectura técnica propuesta

**Opción recomendada:**

1. El endpoint `POST /api/audit-requests` **primero persiste** el registro en Supabase (comportamiento actual como base).
2. Si el guardado es **correcto**, invoca una **función server-side** dedicada a automatizaciones (o módulo equivalente), que emita el evento y envíe el payload al webhook de n8n.
3. El envío a n8n está **condicionado** a algo equivalente a `AUTOMATIONS_ENABLED=true` en el servidor; si está desactivado, no se llama al webhook.
4. Si **n8n falla** (red, timeout, respuesta de error), la API **no debe invalidar** el guardado del lead: el lead ya está en Supabase.
5. La **respuesta HTTP al usuario** debe seguir siendo **correcta** cuando el lead se guardó con éxito, sin revelar fallos internos de n8n.
6. Los fallos de automatización deben **registrarse de forma segura** en logs server-side (sin URLs completas con secretos, sin tokens, sin volcar el cuerpo de peticiones firmadas).

Esta separación asegura **resiliencia** del flujo principal (captura del lead) frente a la cadena de automatización.

## 11. Variables de entorno previstas

Solo **nombres** de variables (sin valores, sin ejemplos de URLs reales):

- `AUTOMATIONS_ENABLED`
- `N8N_WEBHOOK_URL`
- `N8N_WEBHOOK_SECRET`

**Aclaraciones:**

- No documentar valores en esta SPEC.
- No imprimir valores en código, logs o documentación pública.
- No leer ni incluir contenido de `.env`, `.env.local` ni `web/.env.local` en ningún paso de esta fase documental.
- Estas variables se añadirán **manualmente** en el entorno cuando corresponda la fase de implementación (BUILD).

## 12. Política de errores

- **Si Supabase falla:** responder **error** al usuario (el lead no se ha guardado); mismo principio que un MVP de formulario robusto.
- **Si Supabase guarda pero n8n falla:** mantener el **lead guardado**; la API puede responder **éxito** al cliente final sin detalle técnico.
- Para este MVP se recomienda **no mostrar warnings técnicos** al usuario (ni mensajes que expliquen fallos de n8n).
- **No exponer** errores internos, stack traces ni mensajes de proveedores en el frontend.

Opcionalmente, en implementación futura, el servidor puede marcar internamente intentos fallidos (métricas, log estructurado) sin cambiar la experiencia del usuario.

## 13. Privacidad y seguridad

- **No** tratar ni transmitir datos clínicos ni de pacientes en este flujo.
- **Payload mínimo:** solo lo necesario para notificación interna y registro opcional en hoja de cálculo.
- **Secretos solo server-side:** webhooks y credenciales de n8n, email o Google nunca en el cliente.
- **No logs con claves:** ni API keys, ni `N8N_WEBHOOK_SECRET`, ni tokens en claro.
- **No enviar información innecesaria** (p. ej. metadatos de sesión extensos, headers completos).
- **Control humano** sobre el seguimiento del lead: la automatización avisa y opcionalmente copia a Sheets; la decisión comercial sigue siendo humana.

## 14. Plan de implementación futuro

Bloques pequeños sugeridos (solo después de aprobación humana de esta SPEC):

**Bloque 1:** Revisar el patrón de automatizaciones existente heredado de la base del proyecto.

**Bloque 2:** Crear función o librería para emitir `audit_request.created` y construir el payload mínimo.

**Bloque 3:** Integrar la emisión **después** del insert exitoso en `POST /api/audit-requests`.

**Bloque 4:** Verificar con `AUTOMATIONS_ENABLED=false` (u omitido) que el flujo actual no se rompe.

**Bloque 5:** Configurar n8n **manualmente** en el entorno de desarrollo (sin activar nada en esta fase SPEC).

**Bloque 6:** Probar el webhook con **datos ficticios** antes de usar datos reales de leads.

**Bloque 7:** Crear workflow en n8n para el **email interno** según la sección 8.

**Bloque 8 (opcional):** Añadir nodo Google Sheets al workflow.

**Bloque 9:** Documentar checkpoint de MVP 3 en la documentación del proyecto.

## 15. Criterios de aceptación

- Esta SPEC está creada y versionada en el repositorio como documento independiente.
- **No** se implementa código en la fase SPEC.
- **No** se activan integraciones (n8n, email, Sheets) como parte de esta fase documental.
- **No** se leen ni documentan secretos.
- El **diseño técnico** (evento, flujo, errores, variables previstas) queda **claro** para la siguiente fase.
- La fase siguiente deberá ser **BUILD** únicamente **después de aprobación humana** explícita.

## 16. Decisiones pendientes

Preguntas abiertas para cerrar antes o durante el BUILD:

- ¿Cuál es el **correo de destino** (o lista) del aviso interno?
- ¿Google Sheets entra en el **MVP 3** u se deja como **MVP 3B** / opcional explícito?
- Si falla n8n, ¿el comportamiento debe ser **totalmente silencioso** hacia operaciones o conviene un **warning interno** (solo servidor/monitorización)?
- ¿Se necesitará una tabla `automation_events` (o similar) más adelante para trazabilidad y reintentos?
- ¿Se reutiliza **exactamente** el patrón de automatizaciones existente en la base o se introduce una **capa específica** para leads de PLEXAI (por claridad y evolución futura)?
