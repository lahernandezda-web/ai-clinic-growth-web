# SPEC OPERATIVA — n8n Lead Notification Workflow MVP

## 1. Objetivo

Configurar un workflow en n8n para recibir cada evento `audit_request.created` emitido por PLEXAI y convertirlo en una notificacion interna por email mas un registro operativo en Google Sheets.

El objetivo es mantener una automatizacion simple, segura y util para demo en Zoom, sin sustituir a Supabase como fuente principal de datos.

## 2. Estado previo del sistema

- `POST /api/audit-requests` ya guarda solicitudes en Supabase.
- `audit_request.created` ya se emite server-side despues de un insert exitoso.
- n8n todavia no esta activo.
- email todavia no esta activo.
- Google Sheets todavia no esta activo.
- La activacion dependera de variables manuales en `web/.env.local`.

## 3. Flujo deseado

```text
Formulario PLEXAI
-> POST /api/audit-requests
-> Supabase audit_requests
-> evento audit_request.created
-> webhook n8n
-> validacion de secreto
-> email interno
-> Google Sheets
```

## 4. Payload esperado desde PLEXAI

Payload esperado:

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

Este payload no debe incluir secretos, claves, tokens, datos clinicos, datos de pacientes, diagnosticos, tratamientos ni documentos adjuntos.

## 5. Header de seguridad

El backend enviara el header:

```text
X-Automation-Secret
```

No se documenta ningun valor real para este header.

n8n debe validar `X-Automation-Secret` contra un valor secreto configurado manualmente dentro del workflow o mediante una credencial/variable segura de n8n. Si el header falta o no coincide, el workflow debe rechazar el evento y no ejecutar email ni Google Sheets.

## 6. Workflow n8n propuesto

Nodos sugeridos:

1. Webhook Trigger
   - Method: `POST`
   - Path sugerido: `plexai-audit-request-created`
   - Response: `200` rapido cuando el evento se acepta correctamente.

2. IF / Code / Function node para validar
   - `event === "audit_request.created"`
   - header `X-Automation-Secret` coincide con el secreto configurado en n8n.
   - `audit_request` existe.

3. Set / Edit Fields node
   - Normalizar campos para email y Google Sheets.
   - Preparar valores vacios de forma legible cuando algun campo opcional no venga informado.

4. Email node
   - Enviar email interno de aviso.
   - No responder automaticamente al lead desde este workflow.

5. Google Sheets node
   - Append row en la hoja operativa de leads.

6. Respond to Webhook
   - Devolver success controlado.
   - No exponer detalles internos ni secretos en la respuesta.

## 7. Email interno

Asunto propuesto:

```text
Nuevo lead de auditoria gratuita — PLEXAI
```

Cuerpo propuesto:

```text
Nuevo lead recibido desde PLEXAI.

Nombre:
Email:
Telefono:
Tipo de negocio:
Ciudad:
Web/Instagram:
Area de interes:
Proceso que quiere mejorar:
Fecha:
ID de solicitud:

Este aviso es interno. No responder automaticamente sin revision humana.
```

## 8. Google Sheets

Nombre de hoja propuesto:

```text
PLEXAI Leads
```

Columnas propuestas:

```text
created_at
id
name
email
phone
business_type
city
website_or_instagram
improvement_area
main_problem
status
source
```

Supabase sigue siendo la fuente principal. Google Sheets es un apoyo visual y operativo para revisar leads durante pruebas, demos y seguimiento interno.

## 9. Variables necesarias en la app local

Nombres de variables:

```text
AUTOMATIONS_ENABLED
N8N_WEBHOOK_URL
N8N_WEBHOOK_SECRET
```

Aclaraciones:

- Se anadiran manualmente a `web/.env.local`.
- No se documentan valores.
- No se imprimen valores.
- No se suben a Git.
- `AUTOMATIONS_ENABLED` debe pasar a `true` solo cuando el workflow n8n este listo.

## 10. Prueba segura

Prueba futura:

1. Crear workflow en n8n.
2. Obtener URL de webhook.
3. Definir secreto.
4. Anadir manualmente variables en `web/.env.local`.
5. Reiniciar `npm run dev`.
6. Enviar formulario demo.
7. Confirmar:
   - `POST /api/audit-requests` sigue respondiendo `200`.
   - Llega email interno.
   - Aparece fila en Google Sheets.
   - Aparece fila en Supabase.
8. No usar datos reales ni clinicos.

## 11. Politica de errores

- Si Supabase falla, la API responde error.
- Si Supabase guarda pero n8n falla, el lead no se pierde porque Supabase ya contiene el registro principal.
- El usuario no debe ver detalles tecnicos de la automatizacion.
- Los logs no deben incluir secretos.
- La demo debe mostrar que la automatizacion es apoyo operativo, no fuente principal.

## 12. Privacidad

- No datos clinicos.
- No datos de pacientes.
- No documentos adjuntos.
- No diagnosticos.
- No tratamientos.
- No campanas automaticas.
- Control humano antes de contactar.

## 13. Checklist de configuracion n8n

- [ ] Crear workflow nuevo.
- [ ] Anadir Webhook Trigger.
- [ ] Configurar metodo `POST`.
- [ ] Copiar URL de produccion/test segun corresponda.
- [ ] Anadir validacion del header.
- [ ] Anadir nodo email.
- [ ] Probar email interno.
- [ ] Crear Google Sheet.
- [ ] Anadir nodo Google Sheets append row.
- [ ] Probar con payload ficticio.
- [ ] Activar workflow.
- [ ] Anadir variables manualmente en `web/.env.local`.
- [ ] Reiniciar servidor local.
- [ ] Probar formulario real.
- [ ] Verificar email + Sheets + Supabase.

## 14. Decisiones pendientes

- Correo destino del aviso interno.
- Proveedor de email en n8n.
- Si se usara Gmail, SMTP u otra integracion.
- Si Google Sheets sera obligatorio en MVP 3B o parte de MVP 3C.
- Si se guardara un log interno de `automation_events` en Supabase mas adelante.
- Si el workflow debe responder inmediatamente o esperar a email/Sheets.

## 15. Criterios de aceptacion

- SPEC operativa creada.
- No se implementa codigo.
- No se activan integraciones.
- No se leen secretos.
- Queda claro el flujo n8n.
- Queda claro que variables se anadiran manualmente.
- Siguiente paso requiere aprobacion humana.
