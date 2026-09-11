# PLEXAI

Web personal creada para presentar y ofrecer servicios de automatización con inteligencia artificial a pequeños negocios.

PLEXAI nació como un proyecto personal para explorar cómo aplicar inteligencia artificial, automatización e integración entre diferentes herramientas para resolver tareas repetitivas dentro de un negocio.

## Objetivo

La idea de PLEXAI era ofrecer soluciones de automatización adaptadas a las necesidades de cada negocio.

La web permite presentar el servicio y captar solicitudes de potenciales clientes, utilizando además un flujo automatizado para procesar esas solicitudes.

## Automatización implementada

El proyecto incluye un flujo funcional de captación de solicitudes:

```text
Formulario web
      ↓
API
      ↓
Supabase
      ↓
Evento
      ↓
n8n
      ↓
Validación
      ↓
Email interno
      ↓
Google Sheets

```
El código de la aplicación web está en `web/`. Para ejecutarla en desarrollo: `cd web`, luego `npm run dev` y abre `http://localhost:3000`.
