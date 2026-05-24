# Biblioteca de métricas de valor — PLEXAI

**Uso:** vender y validar MVPs con datos honestos. Preferir **antes/después** con línea base medida 1–2 semanas, no promesas absolutas.

---

## Métricas de captación

| Métrica | Definición | Cómo medir | Sector ejemplo |
|---------|------------|------------|----------------|
| Solicitudes totales / semana | Entradas nuevas comerciales | Conteo en hoja por fecha | Todas |
| % con origen conocido | Tienen campo origen/UTM | Filtrar vacíos | Marketing activo |
| Solicitudes fuera de horario | Fuera de L–V 9–18 | Timestamp formulario | Clínicas, retail |
| Coste por solicitud (si hay ads) | Inversión / solicitudes | Ads + registro | Academias |
| Canal dominante | % por web/tel/IG | Agrupación | Local services |

**Meta cualitativa:** “Sabemos de dónde viene cada lead.”

---

## Métricas de seguimiento

| Métrica | Definición | Cómo medir |
|---------|------------|------------|
| Leads sin contacto 48 h | Sin primera acción humana | Estado en hoja |
| Intentos de seguimiento / lead | Nº de touchpoints | Log manual o CRM |
| Tiempo en etapa “nuevo” | Días hasta cambio estado | Fechas columnas |
| Tasa de archivo sin motivo | Cerrados sin razón | Campo motivo obligatorio |
| Reactivaciones / mes | Contactos a inactivos | Campaña acordada |

**Dental / podología:** leads de higiene o revisión sin cita en 7 días.  
**Estética:** consultas de tratamiento sin presupuesto enviado en 72 h.  
**Academias:** prueba gratuita sin confirmación en 48 h.

---

## Métricas de respuesta

| Métrica | Definición | Cómo medir |
|---------|------------|------------|
| Tiempo hasta aviso interno | Minutos desde solicitud a email interno | Log automatización |
| Tiempo hasta primera respuesta humana al cliente | Horas | Marca manual “contactado” |
| % respondidos mismo día hábil | < 24 h laborables | Conteo |
| Mensajes tipo usados | % vs. improvisados | Auditoría muestral |

**No prometer:** “respuesta en 5 minutos” si el equipo no puede sostenerlo.

---

## Métricas de conversión (comercial, no clínica)

| Métrica | Definición | Nota |
|---------|------------|------|
| Solicitud → cita agendada (manual) | % que llegan a cita | Cita la pone persona |
| Solicitud → presupuesto enviado | % con presupuesto | |
| Presupuesto → aceptado | % cierre | Sensibilidad precio |
| Solicitud → no-show | % no presentados | Recordatorios fase 2 |

**Fisioterapia / osteopatía:** primera visita valoración → paquete sesiones.  
**Servicios locales:** presupuesto visita → trabajo cerrado.

---

## Métricas de reducción de tareas repetitivas

| Métrica | Definición |
|---------|------------|
| Minutos / día copiando datos | Autoinforme equipo antes/después |
| Errores de transcripción / semana | Duplicados, teléfonos mal |
| Pasos manuales por solicitud | Conteo en mapa de proceso |
| Personas que tocan el mismo lead | Ideal → 1 responsable + aviso |

**Objetivo MVP:** eliminar 1–2 pasos manuales medibles, no “ahorrar 20 h” sin medir.

---

## Métricas cualitativas

| Métrica | Cómo capturar |
|---------|---------------|
| Claridad del equipo | Encuesta 1–5 post-MVP |
| Confianza en el dato | “¿Fiáis de la hoja?” entrevista |
| Estrés en picos (lunes) | Escala antes/después |
| Quejas de clientes por “no contestan” | Reseñas / verbal |

Útiles cuando el volumen es bajo pero el dolor es alto.

---

## Métricas que NO prometer

| Métrica prohibida en venta | Por qué |
|----------------------------|---------|
| +X % facturación garantizado | Demasiados factores externos |
| ROI exacto en 30 días | Sin línea base fiable |
| 0 leads perdidos | Irreal |
| 100 % automatización | Contradice control humano |
| Sustitución de FTE | Ética y expectativa |
| Tiempo de respuesta al cliente < Y sin equipo | Depende de humanos |
| Cumplimiento legal garantizado | Requiere asesor |
| Integración “sin fallos” | Sistemas de terceros |

---

## Cómo medir antes / después

### Semana 0 (línea base)

1. Definir 1–3 métricas en kickoff.  
2. Medir 7–14 días sin cambiar proceso (solo observar).  
3. Documentar: volumen, tiempos medios, % huecos.

### Durante MVP

- No cambiar definición de métrica a mitad.  
- Misma fuente de verdad (hoja acordada).

### Semana 4–8 (después)

1. Mismas métricas, mismos días de la semana si hay estacionalidad.  
2. Comparar en informe interno cualitativo + números si hay datos.  
3. Decidir: escalar, mantenimiento o fase 2.

Plantilla:

```
Métrica: Tiempo hasta aviso interno
Antes (media): 4 h
Después (media): 12 min
Condiciones: mismo volumen, mismo horario recepción
Conclusión: MVP cumple criterio Sí/Parcial/No
```

---

## Métricas por sector (resumen)

### Clínicas dentales

- Solicitudes fin de semana registradas lunes  
- Leads implante sin seguimiento 72 h  
- Presupuestos enviados / solicitud  

### Podología

- Consultas dolor pie vs. revisión clasificadas  
- Tiempo hasta llamada de confirmación  

### Estética / medicina estética

- Consultas tratamiento alto valor sin segunda touch  
- Origen campaña IG vs. web  

### Fisioterapia / osteopatía

- Derivaciones médicas registradas (solo comercial, sin dato clínico)  
- Paquetes propuestos tras valoración  

### Academias y formación

- Leads curso X vs. curso Y  
- Prueba gratuita → matrícula (manual)  

### Servicios locales (fontanería, reformas, etc.)

- Urgencias etiquetadas vs. presupuesto  
- Tiempo hasta visita presupuesto  

---

## Dashboard mínimo recomendado (reporting básico)

| Indicador | Frecuencia |
|-----------|------------|
| Solicitudes nuevas | Semanal |
| Pendientes > 48 h | Diario interno |
| Por origen | Semanal |
| Por categoría servicio | Semanal |
| Motivo archivo | Mensual |

---

## Vincular métrica a oferta PLEXAI

| Oferta | Métrica principal |
|--------|-------------------|
| MVP registro | % registradas < 24 h |
| Seguimiento | Leads sin contacto 48 h |
| Captación/clasificación | % con origen + categoría |
| Reporting | Uso semanal del informe por decisor |

---

## Frases comerciales con métricas (sin humo)

- “Medimos juntos el tiempo hasta que alguien del equipo recibe el aviso.”  
- “En 30 días vemos si bajan los leads sin seguimiento; si no, ajustamos o paramos.”  
- “No garantizamos porcentaje de ventas; sí trazabilidad de solicitudes.”

---

*Biblioteca interna PLEXAI — complementa `use-case-library.md` y playbooks sectoriales.*
