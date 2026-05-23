# Biblioteca de casos de uso — PLEXAI (50 casos)

**Leyenda:** Complejidad **B** baja | **M** media | **A** alta. MVP = encaja como piloto inicial | **F2** = fase posterior.

**Nota:** automatizaciones con control humano; sin datos clínicos; sin prometer WhatsApp/calendario/voz salvo F2 explícito.

---

## Captación y entrada

### UC01 — Registro centralizado desde formulario web
- **Problema:** Solicitudes web no llegan a la hoja.
- **Sector:** Todos.
- **Automatización:** Web → fila hoja + email interno.
- **Datos:** nombre, contacto, servicio, mensaje.
- **No debe:** diagnosticar ni pedir historial médico.
- **Complejidad:** B | **MVP**
- **Métrica:** % registradas < 24 h.

### UC02 — Clasificación por tipo de servicio
- **Problema:** Todo mezclado en una columna.
- **Sector:** Dental, estética, academias.
- **Automatización:** Reglas por palabra clave + revisión humana.
- **Datos:** servicio, mensaje.
- **No debe:** decidir tratamiento.
- **B** | **MVP**
- **Métrica:** % con categoría.

### UC03 — Etiquetado de urgencia comercial
- **Problema:** Urgencias reales perdidas entre consultas.
- **Sector:** Servicios locales, dental.
- **Automatización:** Flag “urgente” por reglas + aviso prioritario.
- **Datos:** mensaje, checkbox.
- **No debe:** prometer SLA médico.
- **B** | **MVP**

### UC04 — Captura de origen / UTM
- **Problema:** No saben qué campaña funciona.
- **Sector:** Marketing activo.
- **Automatización:** Campos UTM → hoja.
- **Datos:** utm_source, medium.
- **No debe:** atribución perfecta sin analytics.
- **B** | **MVP**

### UC05 — Duplicados por mismo email
- **Problema:** Dos filas mismo lead.
- **Sector:** Todos.
- **Automatización:** Alerta si email existe en 30 días.
- **Datos:** email.
- **No debe:** fusionar sin revisión humana.
- **M** | **F2**

### UC06 — Entrada manual unificada (recepción)
- **Problema:** Llamadas no pasan al digital.
- **Sector:** Clínicas.
- **Automatización:** Formulario interno rápido → misma hoja.
- **Datos:** comerciales básicos.
- **No debe:** grabar llamada sin consentimiento.
- **B** | **MVP**

### UC07 — Solicitudes fuera de horario
- **Problema:** Nadie ve hasta el lunes.
- **Sector:** Retail salud, academias.
- **Automatización:** Aviso inmediato al responsable de guardia.
- **Datos:** timestamp.
- **No debe:** chatbot 24/7 al cliente sin supervisión.
- **B** | **MVP**

### UC08 — Formulario multipaso abandonado
- **Problema:** Dejan a medias.
- **Sector:** Estética, cursos online.
- **Automatización:** Email interno “borrador” si implementado en web.
- **Datos:** paso alcanzado.
- **No debe:** perseguir sin consentimiento marketing.
- **M** | **F2**

---

## Atención y primera respuesta

### UC09 — Aviso interno al responsable del día
- **Problema:** Nadie sabe que entró lead.
- **Sector:** Todos.
- **Automatización:** Email/push interno.
- **Datos:** asignación por calendario rotativo manual.
- **No debe:** asignar cita automática.
- **B** | **MVP**

### UC10 — Plantilla de primera respuesta sugerida (interna)
- **Problema:** Cada uno escribe distinto.
- **Sector:** Todos.
- **Automatización:** Texto sugerido en notificación (humano envía).
- **Datos:** tipo servicio.
- **No debe:** enviar al cliente sin humano.
- **B** | **MVP**

### UC11 — Cola “sin asignar”
- **Problema:** Leads huérfanos.
- **Sector:** Equipos >3 personas.
- **Automatización:** Estado default + informe diario.
- **Datos:** estado.
- **B** | **MVP**

### UC12 — SLA interno (aviso si >24 h sin contacto)
- **Problema:** Olvidos.
- **Sector:** Todos.
- **Automatización:** Recordatorio interno.
- **Datos:** fecha entrada, fecha contacto.
- **No debe:** prometer SLA al paciente/cliente.
- **M** | **MVP**

### UC13 — Priorización por valor estimado (reglas)
- **Problema:** Tratan igual implante y limpieza.
- **Sector:** Dental.
- **Automatización:** Score simple por servicio.
- **Datos:** servicio seleccionado.
- **No debe:** precios dinámicos automáticos.
- **M** | **F2**

### UC14 — Traducción de mensaje para equipo interno
- **Problema:** Turistas escriben en otro idioma.
- **Sector:** Turismo salud, estética costa.
- **Automatización:** Borrador traducción para revisión.
- **Datos:** mensaje.
- **No debe:** traducción médica certificada.
- **M** | **F2**

---

## Seguimiento comercial

### UC15 — Recordatorio interno 48 h sin contacto
- **Problema:** Leads fríos.
- **Sector:** Todos.
- **Automatización:** Tarea/email al owner.
- **Datos:** fechas estado.
- **B** | **MVP**

### UC16 — Secuencia de seguimiento (tareas internas)
- **Problema:** Sin cadencia.
- **Sector:** B2B servicios.
- **Automatización:** 3 recordatorios internos D+2,5,10.
- **Datos:** estado.
- **No debe:** email masivo al cliente sin opt-in.
- **M** | **F2**

### UC17 — Reapertura de leads archivados “precio”
- **Problema:** Oportunidades dormidas.
- **Sector:** Reformas, estética.
- **Automatización:** Lista mensual para llamada humana.
- **Datos:** motivo archivo.
- **B** | **F2**

### UC18 — Seguimiento post-presupuesto enviado
- **Problema:** Presupuestos sin respuesta.
- **Sector:** Local services.
- **Automatización:** Aviso interno D+3 si estado=presupuesto enviado.
- **Datos:** estado, fecha.
- **B** | **MVP**

### UC19 — Confirmación humana de cita (recordatorio interno)
- **Problema:** Olvidan llamar para confirmar.
- **Sector:** Clínicas.
- **Automatización:** Recordatorio día anterior a la cita (fecha manual en hoja).
- **Datos:** fecha cita (comercial).
- **No debe:** integrar calendario automático en MVP.
- **M** | **F2**

### UC20 — Nurturing de lista espera academia
- **Problema:** Curso lleno, lista parada.
- **Sector:** Academias.
- **Automatización:** Aviso interno cuando hay plaza.
- **Datos:** curso, prioridad.
- **B** | **F2**

---

## Presupuestos y ventas

### UC21 — Checklist antes de enviar presupuesto
- **Problema:** Presupuestos incompletos.
- **Sector:** Reformas, B2B.
- **Automatización:** Tareas internas generadas al cambiar estado.
- **Datos:** campos obligatorios.
- **B** | **MVP**

### UC22 — Plantilla presupuesto PDF desde datos hoja
- **Problema:** Copiar/pegar a Word.
- **Sector:** Servicios locales.
- **Automatización:** Generación borrador (humano valida).
- **Datos:** líneas comerciales, no clínicas.
- **M** | **F2**

### UC23 — Alerta margen bajo (reglas comerciales)
- **Problema:** Descuentos excesivos.
- **Sector:** B2B.
- **Automatización:** Flag si descuento > X % (regla cliente).
- **Datos:** importe, descuento.
- **A** | **F2**

### UC24 — Pipeline visual básico por estados
- **Problema:** No ven embudo.
- **Sector:** Todos.
- **Automatización:** Columnas estado en hoja + informe.
- **Datos:** estado.
- **B** | **MVP**

### UC25 — Propuesta MVP enviada → seguimiento interno
- **Problema:** Olvidan cerrar ventas PLEXAI-like internas.
- **Sector:** Meta (vuestros clientes).
- **Automatización:** Recordatorio comercial interno.
- **Datos:** fecha propuesta.
- **B** | **MVP**

---

## Administración y operaciones

### UC26 — Alta en hoja → carpeta Drive sugerida
- **Problema:** Documentos dispersos.
- **Sector:** Servicios con expediente comercial.
- **Automatización:** Crear carpeta con naming estándar (humano sube docs).
- **Datos:** nombre cliente comercial.
- **No debe:** almacenar historiales clínicos.
- **M** | **F2**

### UC27 — Checklist documentación cliente nuevo
- **Problema:** Falta DNI/firma (comercial).
- **Sector:** Academias (matrícula).
- **Automatización:** Tareas pendientes por campos vacíos.
- **Datos:** checklist comercial.
- **B** | **MVP**

### UC28 — Sincronización email “gracias por contactar” (humano aprueba)
- **Problema:** No confirman recepción.
- **Sector:** Todos.
- **Automatización:** Borrador email; envío manual o tras clic.
- **Datos:** email.
- **No debe:** prometer plazo médico.
- **M** | **F2**

### UC29 — Facturación: aviso interno oportunidad cerrada
- **Problema:** Venta cerrada, factura tarde.
- **Sector:** B2B.
- **Automatización:** Aviso a admin cuando estado=cerrado ganado.
- **Datos:** estado, importe.
- **B** | **MVP**

### UC30 — Onboarding cliente post-venta (tareas)
- **Problema:** Pasos olvidados tras matrícula.
- **Sector:** Academias, SaaS pequeño.
- **Automatización:** Lista tareas estándar por producto.
- **Datos:** producto.
- **M** | **F2**

---

## Recordatorios y no-shows (sin calendario integrado MVP)

### UC31 — Recordatorio interno cita mañana
- **Problema:** No-shows.
- **Sector:** Clínicas, fisio.
- **Automatización:** Email interno a recepción.
- **Datos:** fecha cita manual.
- **B** | **MVP**

### UC32 — Post no-show: tarea recontacto
- **Problema:** No reprograman.
- **Sector:** Salud comercial.
- **Automatización:** Estado no-show + tarea D+1.
- **Datos:** estado.
- **B** | **MVP**

### UC33 — Lista semanal de citas sin confirmar
- **Problema:** Agenda verbal.
- **Sector:** Podología, dental.
- **Automatización:** Informe viernes.
- **Datos:** columna confirmado sí/no.
- **B** | **MVP**

---

## Postventa y reputación

### UC34 — Solicitud reseña (disparo interno)
- **Problema:** No piden reseñas.
- **Sector:** Local, clínicas.
- **Automatización:** Recordatorio interno 24 h post visita (fecha manual).
- **Datos:** fecha visita.
- **No debe:** review automático sin experiencia real.
- **B** | **F2**

### UC35 — Detección sentimiento negativo en mensaje libre
- **Problema:** Quejas tarde.
- **Sector:** Todos.
- **Automatización:** Flag “revisar” por palabras clave + humano.
- **Datos:** mensaje.
- **No debe:** respuesta automática defensiva.
- **M** | **F2**

### UC36 — Reactivación clientes inactivos 6 meses
- **Problema:** Base dormida.
- **Sector:** Estética, academias.
- **Automatización:** Export lista para campaña humana.
- **Datos:** última compra comercial.
- **M** | **F2**

### UC37 — Encuesta NPS interna tras cierre
- **Problema:** Sin feedback servicio.
- **Sector:** B2B PLEXAI clientes.
- **Automatización:** Email encuesta tras entrega MVP.
- **Datos:** email contacto proyecto.
- **B** | **F2**

---

## Reporting y datos

### UC38 — Informe semanal solicitudes
- **Problema:** Sin visibilidad.
- **Sector:** Todos.
- **Automatización:** Email lunes con KPIs hoja.
- **Datos:** agregados hoja.
- **B** | **MVP**

### UC39 — Dashboard origen por canal
- **Problema:** Marketing a ciegas.
- **Sector:** Multi-canal.
- **Automatización:** Gráfico simple desde hoja.
- **Datos:** origen.
- **M** | **F2**

### UC40 — Export mensual para contabilidad (comercial)
- **Problema:** Copiar datos a gestor.
- **Sector:** PYME.
- **Automatización:** CSV leads cerrados.
- **Datos:** importes comerciales.
- **B** | **F2**

### UC41 — Calidad de datos (% campos vacíos)
- **Problema:** Hoja incompleta.
- **Sector:** Todos.
- **Automatización:** Informe % completitud.
- **Datos:** metadatos columnas.
- **B** | **MVP**

### UC42 — Alerta pico anómalo de solicitudes
- **Problema:** Campaña viral o spam.
- **Sector:** Estética promos.
- **Automatización:** Aviso si >2× media.
- **Datos:** conteo diario.
- **M** | **F2**

---

## Sector específico (ejemplos)

### UC43 — Dental: higiene vs. implante (routing)
- **Problema:** Mezclan prioridades.
- **Sector:** Dental.
- **Automatización:** Routing interno por servicio.
- **Datos:** servicio.
- **B** | **MVP**

### UC44 — Podología: dolor agudo flag
- **Problema:** Priorizar dolor.
- **Sector:** Podología.
- **Automatización:** Urgencia comercial por checkbox.
- **Datos:** motivo consulta texto.
- **No debe:** consejo médico.
- **B** | **MVP**

### UC45 — Estética: consulta tratamiento alto ticket
- **Problema:** Leads alto valor sin seguimiento.
- **Sector:** Estética.
- **Automatización:** Score + aviso director comercial.
- **Datos:** tratamiento interés.
- **M** | **MVP**

### UC46 — Fisio: derivación externa registrada
- **Problema:** No trazan quién refiere.
- **Sector:** Fisio/osteo.
- **Automatización:** Campo referidor obligatorio.
- **Datos:** nombre referidor (comercial).
- **B** | **MVP**

### UC47 — Academia: lead por curso
- **Problema:** Mezclan cursos.
- **Sector:** Academias.
- **Automatización:** Tag curso en hoja.
- **Datos:** curso_id.
- **B** | **MVP**

### UC48 — Servicios locales: urgencia fuga/agua
- **Problema:** Urgencias mezcladas con presupuesto.
- **Sector:** Fontanería, electricidad.
- **Automatización:** Prioridad máxima + SMS interno (manual al cliente).
- **Datos:** tipo incidencia.
- **B** | **MVP**

### UC49 — Clínica veterinaria (comercial, no clínico)
- **Problema:** Mismo caos de leads (si aplica política PLEXAI).
- **Sector:** Veterinaria (solo datos dueño mascota comercial).
- **Automatización:** Registro + aviso.
- **Datos:** nombre, tel, servicio.
- **No debe:** historial veterinario.
- **B** | **MVP**

### UC50 — Franquicia multi-sede: routing por código postal
- **Problema:** Lead a sede equivocada.
- **Sector:** Retail multi-sede.
- **Automatización:** Asignación sede por CP.
- **Datos:** CP.
- **M** | **F2**

---

## Índice rápido por complejidad MVP

| MVP inmediato (B, marcado MVP) | Fase 2 |
|------------------------------|--------|
| UC01,02,03,04,06,07,09–12,15,18,21,24–25,27,29,31–33,38,41,43–49 | UC05,08,13–14,16–17,19–20,22–23,26,28,30,34–37,39–40,42,50 |

---

## Cómo usar en venta

1. En auditoría, marcar UC que encajen con dolores.  
2. En informe, citar 1–3 UC por prioridad.  
3. En propuesta MVP, **un solo UC principal** como núcleo.  
4. Resto en roadmap fase 2 honesto.

---

*50 casos de uso — PLEXAI documentación interna.*
