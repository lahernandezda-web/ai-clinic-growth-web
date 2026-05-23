# SPEC — Vercel Preview Deploy PLEXAI MVP

---

## 2. Objetivo

Definir cómo preparar un **preview deploy controlado** en Vercel para PLEXAI MVP.

- Evitar deployment improvisado.
- Separar preparación documental de ejecución real.
- Asegurar que no se expongan secretos ni variables reales en documentación ni en repositorio.

Esta SPEC **no ejecuta** el deployment; solo deja checklist, riesgos, decisiones y plan por bloques listos para cuando se conecte Vercel.

---

## 3. Estado actual

| Aspecto | Estado |
| --- | --- |
| Repo | Sincronizado con `origin/main` (`main...origin/main`) |
| Build local de producción | OK (`npm.cmd run build`) |
| Typecheck | OK (`npx tsc --noEmit`) |
| Lint | OK (`npm.cmd run lint`) |
| Producción local | OK (puerto 3001) |
| Páginas legales | Actualizadas con datos confirmados |
| Formulario | Funcional en local |
| Automatización n8n | Probada previamente en local |
| Pack comercial MVP 4 | Cerrado |
| Legal Data Readiness | Cerrado |
| Hydration mismatch (hero) | Corregido |
| Validación local pre-deploy | OK |
| Deployment | **No hay deployment** |
| Vercel | **No está conectado** |

---

## 4. Fuera de alcance

En esta SPEC **no** se realiza:

- Deployment (preview ni producción).
- Conexión del repositorio a Vercel.
- Configuración de dominio propio.
- Configuración de DNS.
- Activación de producción pública.
- Modificación de código, APIs, formulario o páginas legales.
- Lectura ni uso de `web/.env.local`.
- Pegar claves reales en documentación.
- Modificar `.env.example`, Supabase, n8n ni nuevas integraciones.
- Instalar dependencias.

---

## 5. Requisitos previos antes de conectar Vercel

Checklist a completar **antes** de crear o vincular el proyecto en Vercel:

- [ ] Git limpio (sin cambios pendientes no revisados).
- [ ] Rama `main` sincronizada con `origin/main`.
- [ ] `npm.cmd run lint` — OK.
- [ ] `npx tsc --noEmit` — OK.
- [ ] `npm.cmd run build` — OK.
- [ ] Revisión visual local OK (landing, hero, formulario, legales).
- [ ] Páginas legales sin placeholders principales.
- [ ] Formulario con consentimiento y advertencia de no datos sensibles visibles.
- [ ] Variables de entorno identificadas **por nombre**, no por valor.
- [ ] Decisión tomada: preview con automatizaciones activadas o desactivadas.
- [ ] Decisión tomada: dominio temporal de Vercel vs dominio propio más adelante.

---

## 6. Variables de entorno necesarias en Vercel

Solo **nombres** (configurar valores únicamente en el panel de Vercel; nunca en el repo ni en esta SPEC):

| Variable |
| --- |
| `AI_PROVIDER` |
| `ANTHROPIC_API_KEY` |
| `ANTHROPIC_MODEL` |
| `NEXT_PUBLIC_SUPABASE_URL` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` |
| `SUPABASE_SERVICE_ROLE_KEY` |
| `AUTOMATIONS_ENABLED` |
| `N8N_WEBHOOK_URL` |
| `N8N_WEBHOOK_SECRET` |

### Notas

- No documentar valores reales.
- `SUPABASE_SERVICE_ROLE_KEY` — solo server-side.
- `N8N_WEBHOOK_SECRET` — solo server-side.
- `NEXT_PUBLIC_*` — públicas (visibles en el cliente).
- Para preview inicial se puede valorar `AUTOMATIONS_ENABLED=false` si se quiere evitar disparos reales a n8n, email o Sheets.

---

## 7. Riesgos

| Riesgo |
| --- |
| Exponer variables reales en repo, docs o capturas |
| Activar automatizaciones reales sin querer |
| Recibir leads reales antes de estar preparado |
| Formularios públicos sin revisión final |
| SEO / indexación prematura |
| Costes o consumo de APIs (Anthropic, etc.) |
| Error en variables de entorno (nombres, entorno Preview vs Production) |
| Diferencias entre comportamiento local y Vercel |
| Mostrar dominio temporal antes de decidir marca / dominio definitivo |

---

## 8. Decisiones pendientes antes del preview

1. Preview con `AUTOMATIONS_ENABLED=true` o `false`.
2. Usar Supabase real o entorno separado.
3. Usar n8n production webhook real o no activar automatización en primer bloque.
4. Permitir que el formulario guarde leads reales o solo probar manualmente con datos ficticios.
5. Añadir protección temporal (password, equipo) o no compartir URL.
6. Usar dominio temporal Vercel (`*.vercel.app`) o esperar dominio `PLEXAI.es`.
7. Definir si el preview será privado, compartido solo por enlace o público.

---

## 9. Plan futuro por bloques

| Bloque | Acción |
| --- | --- |
| **A** | Revisar checklist final pre-deploy (sección 5) |
| **B** | Crear proyecto en Vercel conectado al repositorio |
| **C** | Configurar variables de entorno en panel Vercel |
| **D** | Ejecutar preview deploy |
| **E** | Revisar rutas públicas: `/`, `/#auditoria`, `/privacidad`, `/aviso-legal` |
| **F** | Probar formulario con datos ficticios |
| **G** | Verificar Supabase / n8n / email / Sheets si se activa automatización |
| **H** | Documentar checkpoint de preview deploy |
| **I** | Decidir dominio o mantener preview privado |

---

## 10. Criterios de aceptación

- [ ] Deploy preview generado correctamente.
- [ ] `/` carga.
- [ ] `/#auditoria` carga.
- [ ] `/privacidad` carga.
- [ ] `/aviso-legal` carga.
- [ ] Formulario visible.
- [ ] Consentimiento visible.
- [ ] Advertencia de no datos sensibles visible.
- [ ] No hay errores visibles en UI crítica.
- [ ] No hay secretos expuestos.
- [ ] Variables funcionan según configuración elegida.
- [ ] Si automatización está desactivada, el sistema no intenta llamar a n8n.
- [ ] Si automatización está activada, se prueba solo con datos ficticios.
- [ ] Se documenta resultado en `product-current-state.md`.

---

## 11. Recomendación inicial

Opción prudente para el **primer** preview:

1. `AUTOMATIONS_ENABLED=false`.
2. Usar dominio temporal de Vercel.
3. No compartir públicamente hasta verificar.
4. Probar rutas legales y formulario visualmente.
5. Activar automatizaciones después en un segundo bloque si se decide explícitamente.

---

## 12. Estado

| Ítem | Estado |
| --- | --- |
| SPEC creada | Sí |
| Deployment | Pendiente |
| Vercel | Pendiente |
| Dominio | Pendiente |
| Variables reales | Pendientes de configurar solo en panel seguro |

---

*Documento de preparación MVP. Separar documentación, preparación y ejecución.*
