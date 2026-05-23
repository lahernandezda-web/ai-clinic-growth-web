# Checklist — Vercel Deployment MVP (PLEXAI)

## Estado

- **Fase:** Bloque D / Deployment readiness
- **Implementación:** Pendiente
- **Deployment real:** No ejecutado
- **Objetivo:** preparar checklist antes de publicar

---

## 1. Objetivo

Preparar PLEXAI para deployment controlado en Vercel o plataforma equivalente, sin publicar todavía ni exponer secretos.

---

## 2. Precondiciones ya completadas

- Landing completada.
- Formulario funcionando.
- Supabase funcionando.
- n8n / email / Sheets funcionando en local.
- Rediseño completado.
- Páginas legales provisionales creadas.
- Consentimiento actualizado.
- `web/.env.example` creado.
- `main` sincronizada con `origin/main`.
- No hay deployment real todavía.

---

## 3. Datos que faltan antes de producción

- [ ] Datos reales del titular para `/privacidad` y `/aviso-legal`.
- [ ] Email real de contacto legal/privacidad.
- [ ] Decidir dominio.
- [ ] Confirmar si se usará Vercel.
- [ ] Confirmar entorno de n8n para producción.
- [ ] Confirmar hoja Google Sheets de producción o separar hoja de pruebas.
- [ ] Confirmar email interno definitivo.
- [ ] Revisar si se limpian o marcan datos de prueba.

---

## 4. Configuración prevista en Vercel

- [ ] Importar repo desde GitHub.
- [ ] Seleccionar repo `ai-clinic-growth-web`.
- [ ] Configurar root directory como `web/` si Vercel no lo detecta.
- [ ] Framework: Next.js.
- [ ] Build command: `npm run build`.
- [ ] Output: configuración por defecto de Next.js.
- [ ] Deploy automático desde `main`: decidir si activar o revisar manualmente.
- [ ] Preview deployments: decidir política.

---

## 5. Variables de entorno en Vercel

No incluir valores reales. Configurar solo en el panel de Vercel (Production y/o Preview según corresponda).

| Variable | Entorno | Uso | Notas |
| --- | --- | --- | --- |
| `ANTHROPIC_API_KEY` | Production / Preview | Solo servidor | Requerida si `AI_PROVIDER=claude`. Nunca exponer al cliente. |
| `NEXT_PUBLIC_SUPABASE_URL` | Production / Preview | Cliente (pública) | URL del proyecto Supabase. Expuesta al navegador vía `NEXT_PUBLIC_*`. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Production / Preview | Cliente (pública) | Clave anon de Supabase. Revisar RLS y permisos antes de publicar. |
| `SUPABASE_SERVICE_ROLE_KEY` | Production / Preview | Solo servidor | Bypass de RLS; nunca usar en código cliente ni commitear. |
| `AUTOMATIONS_ENABLED` | Production / Preview | Solo servidor | `true`/`false`. Activar solo cuando n8n de producción esté listo. |
| `N8N_WEBHOOK_URL` | Production / Preview | Solo servidor | URL del webhook n8n de producción. No documentar valor real en el repo. |
| `N8N_WEBHOOK_SECRET` | Production / Preview | Solo servidor | Compartido con n8n; validación header `X-Automation-Secret`. Nunca en cliente. |
| `AI_PROVIDER` | Production / Preview | Solo servidor | Por defecto `stub` hasta integrar Claude de forma controlada. |
| `ANTHROPIC_MODEL` | Production / Preview | Solo servidor | Modelo Anthropic (p. ej. `claude-haiku-4-5`) si se usa IA. |

**Notas generales:**

- `SUPABASE_SERVICE_ROLE_KEY` solo servidor.
- `N8N_WEBHOOK_SECRET` solo servidor.
- `NEXT_PUBLIC_*` son públicas (visibles en el bundle del cliente).
- Valores reales solo en panel Vercel.
- No pegar secretos en chats.
- No commitear valores reales.
- Referencia de nombres: `web/.env.example` (sin secretos).

---

## 6. Checklist de seguridad antes del primer deploy

- [ ] `web/.env.local` no versionado (debe estar en `.gitignore`).
- [ ] `web/.env.example` sin secretos.
- [ ] No hay URLs reales de webhook en docs públicas.
- [ ] No hay claves en commits.
- [ ] `SUPABASE_SERVICE_ROLE_KEY` no se usa en cliente.
- [ ] `N8N_WEBHOOK_SECRET` no se usa en cliente.
- [ ] Payload n8n no incluye datos clínicos ni secretos.
- [ ] Formulario advierte no enviar datos clínicos/pacientes.
- [ ] Páginas legales siguen con placeholders o datos reales confirmados.
- [ ] Si siguen placeholders, no hacer producción pública.

---

## 7. Checklist funcional post-deploy

- [ ] Abrir landing pública.
- [ ] Revisar desktop.
- [ ] Revisar mobile.
- [ ] Abrir `/privacidad`.
- [ ] Abrir `/aviso-legal`.
- [ ] Probar enlaces footer.
- [ ] Probar enlace política privacidad desde consentimiento.
- [ ] Enviar lead de prueba.
- [ ] Confirmar fila en Supabase.
- [ ] Confirmar n8n Success.
- [ ] Confirmar email interno.
- [ ] Confirmar Google Sheets.
- [ ] Confirmar mensaje de éxito.
- [ ] Confirmar que no hay errores críticos en logs.
- [ ] Confirmar que no se imprimen secretos.

---

## 8. Riesgos específicos del deployment

| Riesgo | Impacto | Mitigación |
| --- | --- | --- |
| Variables mal configuradas | Build fallido o runtime roto | Copiar nombres desde `web/.env.example`; verificar en preview antes de production |
| Root directory incorrecto | Build falla o despliega app vacía | Root = `web/` |
| Automatizaciones activadas con webhook incorrecto | Leads perdidos o enviados a entorno de prueba | `AUTOMATIONS_ENABLED=false` hasta confirmar URL y secreto de producción |
| Uso accidental de datos de prueba | Contaminación de Supabase/Sheets | Separar hoja y proyecto; marcar o limpiar datos de prueba |
| Publicar con placeholders legales | Riesgo legal/compliance | Completar datos legales o mantener preview privado |
| Dominio sin HTTPS | Tráfico no cifrado | Vercel provee HTTPS; verificar certificado al conectar dominio |
| Webhook expuesto sin secreto | Abuso del endpoint n8n | Siempre configurar `N8N_WEBHOOK_SECRET` y validar en n8n |
| Confundir entorno preview y production | Secretos o datos mezclados | Etiquetar variables por entorno en Vercel; probar en preview primero |
| Activar deploy automático demasiado pronto | Cambios en `main` publicados sin revisión | Desactivar auto-deploy o usar branch protection hasta checklist completo |

---

## 9. Plan recomendado de ejecución futura

> No ejecutar ahora. Solo plan de referencia.

1. Completar datos legales reales o decidir mantener sitio en preview privado.
2. Crear proyecto Vercel.
3. Configurar root `web/`.
4. Configurar variables en Vercel (Production y Preview según política).
5. Hacer primer preview deploy.
6. Ejecutar checklist funcional (sección 7).
7. Corregir si hace falta.
8. Decidir production deploy.
9. Documentar checkpoint final.

---

## 10. Criterios de aceptación

La fase **Bloque D** queda lista cuando:

- [ ] Checklist creado y revisado.
- [ ] No se ha hecho deploy sin permiso.
- [ ] Se sabe qué datos faltan (sección 3).
- [ ] Se sabe qué variables configurar (sección 5).
- [ ] Se sabe cómo verificar production/preview (sección 7).
- [ ] El siguiente paso está claro (sección 9).

---

## Referencias

- `docs/spec-deployment-readiness-mvp.md` — SPEC general de deployment readiness
- `web/.env.example` — Plantilla de variables (sin secretos)
- Último checkpoint env: commit `55113aa` — `docs: add env readiness checkpoint`
