# Product Current State — PLEXAI / ai-clinic-growth-web

## Project identity

- Nombre del proyecto: ai-clinic-growth-web
- Marca provisional: PLEXAI
- Tipo: web comercial propia / marca personal tecnológica
- Origen técnico: copia limpia desde CURSOR.p1
- No es business-assistant-mvp
- No se construye dentro de CURSOR.p1

## Current status

Landing PLEXAI MVP 1 completada.

Commit:

`0eb0f81` feat: add plexai landing MVP

## Implemented so far

- Landing en ruta `/`
- Header con navegación por anclas
- Hero principal
- Bloque de problema
- Propuesta de valor
- Audiencias objetivo
- Áreas de automatización
- Método de trabajo
- Demo conceptual no funcional
- Servicios
- Bloque de auditoría gratuita
- FAQ honesta
- CTA final
- Metadata/lang ajustados en layout
- Smooth scroll y ajuste global mínimo en CSS

## Current capabilities

- La web muestra la propuesta comercial de PLEXAI.
- Permite navegar por secciones.
- Presenta el CTA «Pide una auditoría gratuita».
- Explica servicios y enfoque.
- No captura datos todavía.
- No tiene backend nuevo.
- No tiene chatbot funcional todavía.
- No tiene automatizaciones activas.

## Not implemented yet

- Formulario real de auditoría
- Guardado de leads en Supabase
- Chatbot integrado
- APIs nuevas
- n8n
- Google Sheets
- Email automático
- WhatsApp
- Calendario
- Voz
- Login
- Dashboard privado
- Multi-tenant
- Deployment
- Dominio
- Sistema clínico

## Verification

- `npm.cmd ci`: OK
- `npm.cmd run lint`: OK
- `npx tsc --noEmit`: OK
- Git status final tras commit: limpio

## Safety notes

- No se usan datos clínicos.
- No se capturan datos de pacientes.
- No se debe presentar PLEXAI como sistema clínico.
- No se deben prometer integraciones no implementadas.
- No se deben leer ni versionar `.env`, `.env.local` ni `web/.env.local`.
- Las integraciones futuras requieren SPEC previa.

## Next recommended phase

**MVP 2 — Formulario de auditoría gratuita**

Objetivo futuro:

- Crear SPEC del formulario.
- Definir datos mínimos comerciales.
- Crear endpoint y persistencia solo si se aprueba.
- Guardar leads comerciales en Supabase en una fase posterior.
- No manejar datos clínicos.
