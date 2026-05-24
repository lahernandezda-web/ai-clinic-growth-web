# Checkpoint — Commercial Sector Playbooks merged

Fecha: 2026-05-24

## Estado

El pack comercial sectorial de PLEXAI fue mergeado a main y respaldado en GitHub.

## Commit de merge

0c6dd2c docs: merge commercial sector playbooks

## Alcance incorporado

- docs/commercial-sector-playbooks/
- docs/commercial-sales-system/
- docs/commercial-quality-system/
- docs/commercial-test-lab/
- actualizaciones menores en documentos comerciales MVP existentes

## Validaciones realizadas antes del merge

- Revisión documental inicial.
- Limpieza de lenguaje comercial/SLA.
- QA final muestral.
- Confirmación de que todos los archivos incorporados estaban bajo docs/.
- Confirmación de que no se tocó código, web/, APIs, Supabase, n8n, Vercel ni .env.

## Uso previsto

Este material es de uso interno para PLEXAI.

No debe enviarse directamente a clientes sin:
- revisión humana;
- adaptación al caso concreto;
- aplicación del claim-review-checklist;
- comprobación de promesas, alcance e integraciones activas.

## Riesgos pendientes

- Revisar expresiones residuales como "aviso al momento" antes de campañas reales.
- Sustituir placeholders tipo [enlace] o [URL] antes de enviar materiales.
- Revisar cada pieza comercial final antes de contacto real con clientes.

## Próximo bloque recomendado

Continuar con Vercel Preview Deploy siguiendo:

docs/spec-vercel-preview-deploy-mvp.md

Recomendación:
- primer preview con AUTOMATIONS_ENABLED=false;
- dominio temporal de Vercel;
- sin automatizaciones reales activas inicialmente;
- sin dominio plexai.es todavía.
