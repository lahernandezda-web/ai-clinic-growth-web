# Registro de red flags y riesgos comerciales — PLEXAI

**Uso:** evaluar leads y proyectos; respuestas tipo sin comprometer límites. Mínimo 25 riesgos documentados.

**Complemento:** reglas y frases en `docs/commercial-quality-system/commercial-safety-rules.md` y `forbidden-and-approved-phrases.md`.

---

## Cómo usar este registro

| Columna | Significado |
|---------|-------------|
| **ID** | Referencia interna |
| **Riesgo** | Descripción |
| **Señal** | Cómo detectarlo |
| **Impacto** | Bajo / Medio / Alto / Crítico |
| **Respuesta recomendada** | Qué decir/hacer |
| **Decisión** | Seguir / Condicionar / Rechazar |

---

## Riesgos de lead y pre-venta

### R01 — Quiere automatización total del negocio
- **Señal:** “Quiero que la IA haga todo.”
- **Impacto:** Alto
- **Respuesta:** Enfoque por proceso; MVP único primero.
- **Decisión:** Condicionar a auditoría; rechazar si insiste.

### R02 — Datos sensibles o clínicos en el flujo
- **Señal:** Pide historial, diagnósticos, DNI+salud.
- **Impacto:** Crítico
- **Respuesta:** Fuera de alcance PLEXAI; solo datos comerciales.
- **Decisión:** Rechazar si no acepta.

### R03 — Sin proceso actual definido
- **Señal:** “Cada uno lo hace a su manera” sin mapa.
- **Impacto:** Alto
- **Respuesta:** Auditoría para estandarizar antes de automatizar.
- **Decisión:** Nutrir o auditoría; no MVP directo.

### R04 — Precio sin diagnóstico
- **Señal:** Primer mensaje “¿cuánto cuesta todo?”
- **Impacto:** Medio
- **Respuesta:** Alcance tras 20 min o auditoría.
- **Decisión:** Nutrir; no enviar precio cerrado.

### R05 — Garantías imposibles de resultados
- **Señal:** “Garantizad +30 % ventas.”
- **Impacto:** Alto
- **Respuesta:** Métricas operativas, no facturación garantizada.
- **Decisión:** Rechazar si exige garantía.

### R06 — Copiar sistema enterprise
- **Señal:** “Queremos como Salesforce/HubSpot completo.”
- **Impacto:** Alto
- **Respuesta:** MVP + fases; honestidad de tamaño PLEXAI.
- **Decisión:** Condicionar o rechazar.

### R07 — Acceso a datos de pacientes
- **Señal:** Exportaciones de expedientes.
- **Impacto:** Crítico
- **Respuesta:** No; cumplimiento y ética.
- **Decisión:** Rechazar.

### R08 — Ghosting tras 3 toques cualificados
- **Señal:** Sin respuesta 14+ días.
- **Impacto:** Bajo
- **Respuesta:** Archivar; reactivación 90 días.
- **Decisión:** Pausar.

### R09 — Cambio de alcance en negociación
- **Señal:** Cada email añade integración.
- **Impacto:** Alto
- **Respuesta:** Propuesta versionada; fase 2.
- **Decisión:** Condicionar contrato estricto.

### R10 — WhatsApp obligatorio día 1
- **Señal:** “Sin WhatsApp no firmo.”
- **Impacto:** Alto
- **Respuesta:** MVP sin WhatsApp API; fase 2.
- **Decisión:** Rechazar si innegociable.

### R11 — Calendario obligatorio día 1
- **Señal:** Integración agenda como requisito.
- **Impacto:** Medio
- **Respuesta:** Registro + aviso; cita manual.
- **Decisión:** Condicionar.

### R12 — Voz / telefonía IA exigida
- **Señal:** “Robot que conteste llamadas.”
- **Impacto:** Alto
- **Respuesta:** Fuera de MVP actual.
- **Decisión:** Rechazar o fase futura sin fecha.

### R13 — Sustituir personal / despidos
- **Señal:** “Para no contratar recepción.”
- **Impacto:** Alto
- **Respuesta:** Asistencia, no sustitución.
- **Decisión:** Rechazar narrativa.

### R14 — Uso ilegal o spam
- **Señal:** Listas compradas, mensajes masivos no consentidos.
- **Impacto:** Crítico
- **Respuesta:** No participamos.
- **Decisión:** Rechazar.

### R15 — Tono abusivo o desprecio
- **Señal:** Insultos, “sois caros y lentos” sin constructivo.
- **Impacto:** Medio
- **Respuesta:** Límite profesional; terminar conversación.
- **Decisión:** Rechazar.

### R16 — Indecisión crónica sin decisor
- **Señal:** “Lo miro” ×5 sin socio.
- **Impacto:** Medio
- **Respuesta:** Reunión con decisor o archivo.
- **Decisión:** Nutrir con fecha límite.

### R17 — Comparación solo por precio más bajo
- **Señal:** “El otro lo hace por X.”
- **Impacto:** Medio
- **Respuesta:** Alcance y límites; no carrera al fondo.
- **Decisión:** Condicionar o rechazar.

### R18 — Sector regulado sin asesor legal cliente
- **Señal:** Salud, legal, finanzas sin compliance interno.
- **Impacto:** Alto
- **Respuesta:** Derivación legal; datos mínimos.
- **Decisión:** Condicionar fuerte.

### R19 — Expectativa de diagnóstico médico / consejo sanitario
- **Señal:** “Que la IA diga si es grave.”
- **Impacto:** Crítico
- **Respuesta:** PLEXAI no es servicio sanitario.
- **Decisión:** Rechazar.

### R20 — Enviar contraseñas por chat
- **Señal:** “La clave es 1234” en WhatsApp.
- **Impacto:** Alto
- **Respuesta:** Invitaciones; rotar credencial.
- **Decisión:** Condicionar onboarding.

---

## Riesgos de proyecto

### R21 — Scope creep continuo
- **Señal:** “Solo una cosilla más” semanal.
- **Impacto:** Alto
- **Respuesta:** `scope-control-playbook.md`.
- **Decisión:** Addendum de pago.

### R22 — Retraso crónico en contenidos cliente
- **Señal:** Copy, accesos, reglas sin entregar.
- **Impacto:** Medio
- **Respuesta:** Plazo no corre hasta entrega; email formal.
- **Decisión:** Pausar proyecto.

### R23 — Múltiples stakeholders contradictorios
- **Señal:** Órdenes opuestas de socios.
- **Impacto:** Alto
- **Respuesta:** Un sponsor; decisiones por email.
- **Decisión:** Condicionar kickoff.

### R24 — Baja adopción del equipo
- **Señal:** No usan la hoja; siguen en chat personal.
- **Impacto:** Alto
- **Respuesta:** Formación 30 min; responsable interno.
- **Decisión:** No escalar a fase 2 hasta adopción.

### R25 — Micromanagement extremo
- **Señal:** Control hora a hora sin confianza.
- **Impacto:** Medio
- **Respuesta:** Ritual de comunicación acordado.
- **Decisión:** Condicionar o rechazar cliente.

### R26 — Pago tardío o disputa al final
- **Señal:** Historial de impagos con otros proveedores.
- **Impacto:** Alto
- **Respuesta:** Hitos de pago; no entregar sin aceptación.
- **Decisión:** Condicionar contrato.

### R27 — Pedir funcionalidades no implementadas como “ya incluidas”
- **Señal:** “Pensé que WhatsApp venía.”
- **Impacto:** Medio
- **Respuesta:** Releer propuesta; educación.
- **Decisión:** No ceder sin addendum.

### R28 — Volumen real mucho menor que el declarado
- **Señal:** “Tenemos 100 leads/semana” → son 5.
- **Impacto:** Bajo
- **Respuesta:** Ajustar MVP; métricas realistas.
- **Decisión:** Seguir con alcance reducido.

### R29 — Volumen real mucho mayor sin avisar
- **Señal:** Picos que rompen límites gratuitos de herramientas.
- **Impacto:** Medio
- **Respuesta:** Revisión arquitectura; coste cliente.
- **Decisión:** Addendum técnico.

### R30 — Rotación de contacto a mitad de proyecto
- **Señal:** Nuevo responsable sin contexto.
- **Impacto:** Medio
- **Respuesta:** Sesión handover 30 min.
- **Decisión:** Pausar hasta handover.

### R31 — Solicitar trabajo gratis por referidos múltiples
- **Señal:** “Si va bien traigo 10 clientes gratis.”
- **Impacto:** Medio
- **Respuesta:** Programa referidos por escrito, no trabajo gratis.
- **Decisión:** Rechazar trato informal.

### R32 — Publicidad engañosa usando PLEXAI
- **Señal:** Cliente promete “IA médica” en su web.
- **Impacto:** Crítico
- **Respuesta:** Desvincular o corregir copy.
- **Decisión:** Terminar si persiste.

---

## Matriz de respuesta rápida

| Tipo | Primera frase |
|------|----------------|
| Alcance | “Eso queda para fase 2; el MVP se centra en…” |
| Datos | “Solo trabajamos datos comerciales, no clínicos.” |
| Canal | “Hoy demostramos web → registro → aviso; WhatsApp automático es otro proyecto.” |
| Precio | “Te envío propuesta tras acordar alcance en el informe.” |
| Garantía | “Medimos indicadores operativos; no garantizamos facturación.” |

---

## Escalación y rechazo elegante

**Plantilla rechazo:**

> Gracias por la confianza. Con la información actual, no somos el encaje adecuado porque [razón concreta]. Os recomiendo [alternativa genérica: estandarizar proceso / proveedor especializado en X]. Si en el futuro [condición], podemos retomar.

**Cuándo escalar a asesoría legal externa:** datos regulados, contratos con cláusulas penales, tratamiento internacional de datos.

---

## Checklist pre-firma (riesgos)

- [ ] Sin datos clínicos en alcance  
- [ ] Sin WhatsApp/calendario/voz prometidos en MVP  
- [ ] Sin garantías de facturación  
- [ ] Sponsor identificado  
- [ ] Scope creep protocol acordado  
- [ ] Pago por hitos  
- [ ] Propuesta y exclusiones firmadas  

---

*Registro interno PLEXAI — revisar trimestralmente.*
