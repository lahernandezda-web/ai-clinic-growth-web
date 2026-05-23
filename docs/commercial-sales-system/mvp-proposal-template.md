# Plantilla de propuesta MVP — PLEXAI

**Uso:** documento comercial previo al contrato. Completar tras auditoría o demo. **No incluir precios inventados** — dejar campos en blanco o “a acordar”.

---

## Portada textual

```
PROPUESTA MVP — AUTOMATIZACIÓN ACOTADA
Cliente: [Razón social o nombre comercial]
Proyecto: [Título corto, ej. "Registro y aviso de solicitudes web"]
Fecha: [DD/MM/AAAA]
Versión: 1.0
Presentado por: PLEXAI

Mensaje: Analizamos procesos, detectamos tareas repetitivas y diseñamos
automatizaciones con IA solo donde aportan valor, con control humano.
```

---

## 1. Resumen del problema

Describir el dolor en palabras del cliente (3–5 frases). Ejemplo:

> [Negocio] recibe solicitudes por [canales]. Hoy el registro y el aviso al equipo dependen de [proceso manual], lo que provoca [retrasos / pérdidas / falta de trazabilidad]. El objetivo de esta propuesta no es digitalizar todo el negocio, sino **resolver un cuello de botella concreto** y medir resultado antes de escalar.

---

## 2. Objetivo del MVP

**Un solo objetivo principal** (medible):

> En [plazo a acordar], disponer de un flujo donde [evento disparador] genere [resultado: registro + aviso + clasificación básica] con intervención humana en [punto concreto].

**Objetivos secundarios (opcionales, máx. 2):**

- 
- 

---

## 3. Alcance incluido

| # | Entregable | Descripción |
|---|------------|-------------|
| 1 | Diseño de flujo | Diagrama o descripción acordada |
| 2 | Implementación automatización | [Describir sin prometer stack cerrado] |
| 3 | Punto de entrada | [Ej. formulario web existente o nuevo] |
| 4 | Registro centralizado | [Ej. hoja, base acordada] |
| 5 | Aviso interno | [Ej. email a responsable] |
| 6 | Documentación de uso | Guía breve para el equipo |
| 7 | Sesión de validación | 1 reunión de cierre |

**Flujo funcional (narrativa):**

1. El visitante completa [entrada].
2. El sistema registra [campos comerciales].
3. Se notifica a [rol interno].
4. Una persona humana [acción: llama, escribe, agenda manualmente].
5. El estado se actualiza en [herramienta].

---

## 4. Fuera de alcance

Listar explícitamente para evitar malentendidos:

- WhatsApp Business API o mensajería automática al cliente final (salvo fase 2 acordada).
- Integración con calendario / agenda online.
- Agentes de voz o telefonía IA.
- CRM completo, historial de pacientes o datos clínicos.
- Campañas de marketing masivo o scraping.
- Integraciones con [ERP/software] no evaluadas en auditoría.
- Formación extensa o cambio organizacional completo.
- Mantenimiento ilimitado más allá del periodo acordado.

---

## 5. Herramientas posibles (sin stack definitivo)

> La implementación usará herramientas adecuadas al alcance (por ejemplo: formulario web, automatización tipo n8n, email transaccional, hoja de cálculo o base acordada). La selección final se confirma en kickoff según **lo que ya uséis** y límites de seguridad, sin obligaros a migrar todo vuestro stack.

**Principio:** reutilizar lo existente cuando sea razonable; no imponer licencias innecesarias.

---

## 6. Responsabilidades del cliente

| Responsabilidad | Detalle |
|-----------------|---------|
| Punto de contacto | 1 persona operativa + 1 decisor |
| Contenidos | Textos del formulario, emails tipo |
| Validación | Probar en 48–72 h y dar feedback |
| Accesos | Crear invitaciones (no contraseñas por chat) |
| Uso del flujo | Aplicar el proceso acordado el día a día |
| Legal / privacidad | Avisos en web si aplica; no enviar datos clínicos |

---

## 7. Responsabilidades de PLEXAI

| Responsabilidad | Detalle |
|-----------------|---------|
| Diseño | Flujo alineado con auditoría |
| Implementación | MVP según alcance |
| Comunicación | Updates según plan acordado |
| Documentación | Guía de uso básica |
| Soporte en piloto | [Ventana a acordar, ej. 30 días post-entrega] |
| Honestidad de límites | No prometer integraciones no incluidas |

---

## 8. Datos necesarios

**Solo datos comerciales permitidos:**

| Campo | Obligatorio | Uso |
|-------|-------------|-----|
| Nombre | Sí | Contacto |
| Email o teléfono | Sí | Respuesta humana |
| Servicio de interés | Sí | Clasificación |
| Origen / UTM | Recomendado | Reporting |
| Mensaje libre | Opcional | Contexto |

**Datos que NO deben solicitarse en este MVP:**

- Historial clínico, diagnósticos, DNI completo salvo necesidad legal demostrada, datos de salud.

---

## 9. Seguridad y privacidad

- Los datos se tratan según vuestra política de privacidad y el aviso del formulario.
- Accesos por invitación; rotación si alguien deja el equipo.
- No almacenar credenciales en documentos compartidos.
- PLEXAI no es responsable del uso indebido de datos que el cliente pida capturar fuera de alcance.

---

## 10. Criterios de éxito

| Métrica | Línea base (hoy) | Objetivo MVP (orientativo) |
|---------|------------------|----------------------------|
| % solicitudes registradas | [A medir] | Mejora observable |
| Tiempo hasta aviso interno | [A medir] | Reducción cualitativa |
| Leads sin seguimiento > 48 h | [A medir] | Reducción |

> Los objetivos numéricos se afinan en kickoff con datos reales. No se garantizan porcentajes fijos.

---

## 11. Fases

| Fase | Actividad | Duración orientativa |
|------|-----------|----------------------|
| 0 | Kickoff y accesos | [A acordar] |
| 1 | Diseño validado | [A acordar] |
| 2 | Implementación | [A acordar] |
| 3 | Pruebas con cliente | [A acordar] |
| 4 | Entrega y formación breve | [A acordar] |

---

## 12. Validación

- Checklist de pruebas conjuntas (casos: solicitud normal, urgente, campo vacío).
- Aceptación por escrito del responsable (email vale).
- Lista de ajustes menores vs. cambios de alcance (ver `scope-control-playbook.md`).

---

## 13. Inversión y plazos (espacios en blanco)

```
Inversión MVP: _______________ (EUR, a acordar)
Forma de pago: _______________ (ej. 50 % inicio / 50 % entrega)
Plazo estimado: _______________ semanas desde kickoff y accesos completos
Validez de la propuesta: _______________ días
```

**Condiciones:** el plazo no comienza hasta recibir accesos, contenidos y validación del diseño.

---

## 14. Siguiente paso

1. Cliente confirma alcance por email.
2. Firma de condiciones / contrato si aplica.
3. Pago según acordado (si procede).
4. Reunión de kickoff (`project-kickoff-template.md`).

---

## 15. Aceptación (texto)

```
Aceptamos el alcance descrito en esta propuesta MVP versión 1.0,
entendiendo las exclusiones listadas.

Nombre: ___________________
Cargo: ___________________
Fecha: ___________________
Firma / “Aceptado por email”: ___________________
```

---

*Plantilla interna PLEXAI — la propuesta firmada y el contrato prevalecen sobre este borrador.*
