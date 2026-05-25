# Checkpoint — Vercel Preview with Landing Demo Chatbot V1

Fecha: 2026-05-25

## Estado

PLEXAI está desplegado online en Vercel con landing rediseñada y chatbot demo V1 integrado.

## URL pública

https://plexai-web-preview.vercel.app

## Commits relevantes

- 54ba3a2 chore: trigger vercel deployment
- 3dc94f4 feat: add landing demo chatbot V1
- 3a9c807 feat: polish landing visuals and add demo chatbot spec

## Configuración Vercel

- Framework: Next.js
- Root Directory: web
- Build Command: npm run build
- Install Command: npm install
- Output Directory: Next.js default / vacío
- Environment: Production
- Branch: main

## Variables configuradas

- AUTOMATIONS_ENABLED=false
- AI_PROVIDER=stub

No se configuraron en este bloque:
- Supabase real
- n8n
- Anthropic/Claude
- dominio plexai.es

## Alcance del deploy

Incluye:
- landing comercial PLEXAI;
- páginas legales;
- formulario visual de auditoría;
- chatbot demo V1 scripted/local;
- CTA hacia auditoría gratuita.

No incluye todavía:
- automatizaciones reales;
- envío a n8n;
- Google Sheets/email;
- IA real;
- calendario;
- WhatsApp;
- dominio propio;
- formulario validado end-to-end en Vercel con Supabase.

## Incidencias resueltas

1. Primer deployment mostró 404 porque el proyecto quedó inicialmente con Framework Preset incorrecto.
   Solución:
   - Framework: Next.js
   - Root Directory: web
   - Output Directory vacío/default

2. Deployment del chatbot fue bloqueado porque el email del commit no coincidía con GitHub.
   Solución:
   - configurar email local del repo:
     285023595+lahernandezda-web@users.noreply.github.com
   - crear commit vacío:
     54ba3a2 chore: trigger vercel deployment

## Uso actual recomendado

Este deploy debe usarse como demo privada para revisión y llamadas de Zoom.

No debe usarse todavía como lanzamiento público completo.

## Próximos pasos posibles

1. QA visual online completa.
2. Probar /api/automations/status.
3. Decidir si configurar Supabase en Vercel para probar formulario real.
4. Decidir si activar n8n más adelante.
5. Decidir si conectar plexai.es.
6. Preparar guion de demo comercial para llamadas Zoom.
