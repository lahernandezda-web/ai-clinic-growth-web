# SPEC — PLEXAI Landing Redesign MVP

## Estado

| Campo | Valor |
|--------|--------|
| **Fase** | SPEC |
| **Implementación** | Pendiente |
| **Alcance** | Rediseño visual, estructura y copy de la home `/` |
| **Código** | No modificar en esta fase |
| **Integraciones** | Mantener las existentes; no rediseñar sistema técnico interno |

---

## 1. Objetivo del rediseño

Rediseñar la home/landing de **PLEXAI** para que se perciba más **premium, visual, tecnológica, clara y profesional**, manteniendo una filosofía MVP: una página corta-media, fácil de entender, orientada a conversión y sin sobreingeniería.

El rediseño debe reforzar que PLEXAI es una marca especializada en **automatización inteligente para negocios locales y equipos de servicios**, no una web centrada únicamente en clínicas, pacientes o contexto sanitario.

La landing debe dirigir al usuario hacia un CTA principal claro:

**Pide una auditoría gratuita**

---

## 2. Problemas de la landing actual

- Se percibe demasiado simple para una marca tecnológica premium.
- El fondo oscuro resulta uniforme y reduce contraste visual entre secciones.
- Hay poco dinamismo visual, poca sensación de producto y poca vida.
- El texto es más largo de lo necesario para una landing comercial.
- Algunas secciones explican demasiado y convierten la home en una página documental.
- El lenguaje está demasiado inclinado hacia clínicas, pacientes y contexto sanitario.
- Falta una demostración visual simple del flujo real de valor: solicitud, registro, aviso interno y seguimiento.
- La propuesta de PLEXAI puede parecer limitada a un nicho concreto, cuando debe sonar más generalista.

---

## 3. Objetivos visuales y comerciales

- Elevar la percepción de marca: más premium, tecnológica y cuidada.
- Comunicar el valor en pocos segundos: menos tareas repetitivas, más orden operativo y mejor seguimiento.
- Mostrar que PLEXAI empieza con automatizaciones pequeñas, útiles y medibles.
- Mantener el control humano como parte central del posicionamiento.
- Reducir texto corrido y sustituirlo por bloques visuales, cards, pasos y microcopys.
- Crear una experiencia más memorable sin introducir complejidad técnica innecesaria.
- Conseguir que el CTA de auditoría gratuita se entienda como el siguiente paso natural.
- Evitar promesas exageradas, lenguaje grandilocuente o apariencia de empresa sobredimensionada.

---

## 4. Dirección estética

Dirección elegida: **tecnológica con creatividad visual**, mezclando referencias de infraestructura AI moderna tipo Nebius con la claridad comercial de una agencia premium.

La estética debe sentirse:

- Premium, pero no corporativa fría.
- Tecnológica, pero entendible para negocios no técnicos.
- Visual, pero no recargada.
- Comercial, pero sin humo.
- Generalista, pero con ejemplos concretos de sectores.

Principios de diseño:

- Alternar secciones oscuras y claras para dar ritmo.
- Usar cards con bordes suaves, sombras sutiles y profundidad moderada.
- Incluir visuales abstractos de automatización, nodos, flujos y señales.
- Incluir mockups conceptuales, no capturas reales de herramientas internas.
- Priorizar una narrativa corta: qué mejora, cómo funciona, dónde aporta valor y por qué PLEXAI.

---

## 5. Paleta y atmósfera visual

Base visual:

- **Negro / grafito** como base premium.
- **Morado PLEXAI** como color principal de marca.
- **Lavanda / violeta suave** para glows, estados hover y detalles.
- **Blanco cálido o gris muy claro** para secciones claras.
- **Grises azulados** para texto secundario, bordes y fondos técnicos.

Atmósfera:

- Fondo inicial oscuro con gradientes elegantes.
- Glow suave detrás del visual del hero, nunca agresivo.
- Secciones claras con aire, respiración y contraste editorial.
- Cards premium con bordes finos, blur ligero o sombras suaves.
- Detalles visuales tipo líneas, nodos, chips, etiquetas y módulos de flujo.

Evitar:

- Pantalla completamente oscura de principio a fin.
- Neones muy intensos.
- Gradientes demasiado saturados.
- Estética de dashboard enterprise pesado.
- Imágenes genéricas de stock.
- Exceso de ilustraciones decorativas sin función.

---

## 6. Movimiento y microinteracciones

Nivel de movimiento: **medio**.

Permitido:

- Apariciones suaves por sección.
- Hover en cards con elevación o borde más visible.
- Transiciones de color en CTAs.
- Pequeño movimiento flotante en elementos abstractos del hero.
- Animación sutil de líneas, puntos o chips en el bloque visual de flujo.
- Scroll suave hacia secciones internas.

No permitido:

- WebGL pesado.
- Animaciones 3D complejas.
- Dependencias nuevas solo para animación.
- Efectos que distraigan del CTA.
- Movimiento excesivo en mobile.
- Animaciones que empeoren rendimiento o accesibilidad.

Preferencia técnica:

- CSS y Tailwind si ya están disponibles.
- Animaciones simples con `transition`, `transform`, `opacity` y keyframes ligeros si hace falta.
- Respetar `prefers-reduced-motion` si se implementan animaciones más visibles.

---

## 7. Nueva arquitectura de la home

La home debe ser corta-media y seguir este orden:

1. **Hero potente**
2. **Qué puede mejorar PLEXAI**
3. **Cómo funciona**
4. **Dónde aporta valor**
5. **Bloque visual de demo/flujo**
6. **Por qué PLEXAI**
7. **FAQ muy corta**
8. **CTA final**

### 7.1 Hero potente

Objetivo: explicar PLEXAI en segundos, elevar percepción visual y dirigir al CTA.

Debe incluir:

- Headline corto y premium.
- Subheadline claro.
- CTA principal: **Pide una auditoría gratuita**
- CTA secundaria: **Ver cómo funciona**
- Visual tipo mezcla de abstracto + mockup.

Visual sugerido:

- Panel oscuro con una tarjeta tipo mockup.
- Chips de flujo: solicitud recibida, contacto registrado, aviso interno, seguimiento pendiente.
- Fondo con gradiente morado, líneas finas y nodos abstractos.

### 7.2 Qué puede mejorar PLEXAI

Objetivo: traducir automatización a problemas operativos concretos.

Cards:

- Captación de solicitudes
- Seguimiento de oportunidades
- Organización de contactos
- Automatización de tareas repetitivas

### 7.3 Cómo funciona

Objetivo: presentar un método simple, progresivo y con criterio.

Pasos:

1. Analizamos tu proceso
2. Detectamos cuellos de botella
3. Diseñamos una automatización útil
4. Medimos y mejoramos

### 7.4 Dónde aporta valor

Objetivo: mostrar nichos sin encerrar la marca en sanidad.

Sectores visibles:

- Clínicas dentales
- Estética
- Academias
- Negocios locales de servicios

### 7.5 Bloque visual de demo/flujo

Objetivo: explicar de forma visual el sistema actual sin entrar en detalle técnico.

Debe mostrar conceptualmente:

**Formulario → registro → aviso interno → seguimiento**

El bloque debe ser conceptual, no una demo técnica conectada ni una captura real de Supabase, n8n o Google Sheets.

### 7.6 Por qué PLEXAI

Objetivo: diferenciar la marca desde criterio, progresión y control.

Razones:

- Automatización con criterio
- Implementación progresiva
- Control humano

### 7.7 FAQ muy corta

Objetivo: resolver objeciones básicas sin alargar la landing.

Máximo 4 preguntas.

### 7.8 CTA final

Headline fijo:

**Empieza por una auditoría gratuita**

Debe cerrar con un mensaje breve, directo y orientado a acción.

---

## 8. Copy estratégico por sección

### Hero

**Headline recomendado:**

Automatización inteligente para negocios que quieren operar mejor.

**Alternativas:**

- Procesos más claros. Seguimiento más fácil. Menos tareas repetidas.
- Automatiza lo repetitivo sin perder el control.
- PLEXAI convierte procesos manuales en flujos simples y medibles.

**Subheadline recomendado:**

Analizamos cómo trabaja tu equipo, detectamos cuellos de botella y diseñamos automatizaciones pequeñas que ayudan a captar, ordenar y seguir oportunidades sin complicar tu operación.

**CTA principal:**

Pide una auditoría gratuita

**CTA secundaria:**

Ver cómo funciona

**Microcopy opcional:**

Empezamos por un flujo concreto. Sin sistemas gigantes. Sin promesas vacías.

### Qué puede mejorar PLEXAI

**Título:**

Menos fricción en los procesos que más se repiten

**Texto breve:**

PLEXAI ayuda a ordenar solicitudes, contactos y tareas operativas para que tu equipo tenga más claridad y menos trabajo manual.

**Cards:**

- **Captación de solicitudes:** convierte formularios y consultas en oportunidades mejor organizadas.
- **Seguimiento de oportunidades:** evita que contactos interesados se pierdan por falta de respuesta o continuidad.
- **Organización de contactos:** centraliza la información mínima necesaria para actuar con más orden.
- **Automatización de tareas repetitivas:** reduce pasos manuales en avisos, registros y comunicaciones internas.

### Cómo funciona

**Título:**

Un proceso simple, útil y por fases

**Pasos:**

1. **Analizamos tu proceso:** entendemos cómo entran las solicitudes y dónde se atasca el trabajo.
2. **Detectamos cuellos de botella:** priorizamos tareas repetitivas con impacto real.
3. **Diseñamos una automatización útil:** construimos un flujo pequeño, comprensible y alineado con tu equipo.
4. **Medimos y mejoramos:** revisamos resultados y decidimos si tiene sentido escalar.

### Dónde aporta valor

**Título:**

Pensado para equipos de servicios con mucho trabajo operativo

**Texto breve:**

PLEXAI puede aportar valor en negocios donde las solicitudes, el seguimiento y la coordinación diaria consumen tiempo.

**Sectores visibles:**

- Clínicas dentales
- Estética
- Academias
- Negocios locales de servicios

Nota de tono: clínicas dentales puede aparecer como sector permitido, pero no debe dominar la narrativa ni convertir la landing en una web sanitaria.

### Demo/flujo visual

**Título:**

De una solicitud suelta a un flujo con seguimiento

**Texto breve:**

Una automatización bien diseñada puede registrar una solicitud, avisar al equipo y dejar claro qué acción viene después.

**Flujo conceptual:**

Formulario → registro → aviso interno → seguimiento

**Labels sugeridos:**

- Nueva solicitud
- Registro creado
- Equipo avisado
- Próximo paso definido

### Por qué PLEXAI

**Título:**

Automatización práctica, sin perder criterio

**Razones:**

- **Automatización con criterio:** no todo debe automatizarse; elegimos lo que aporta valor.
- **Implementación progresiva:** empezamos por un MVP concreto antes de escalar.
- **Control humano:** las decisiones importantes siguen en manos del equipo.

### FAQ

**Título:**

Preguntas rápidas

Preguntas sugeridas:

1. **¿Tengo que cambiar todas mis herramientas?**  
   No. La auditoría empieza entendiendo lo que ya usas y buscando mejoras realistas.

2. **¿PLEXAI es solo para clínicas?**  
   No. Trabajamos con negocios locales y equipos de servicios que tienen procesos repetitivos.

3. **¿La automatización sustituye al equipo?**  
   No. La idea es reducir tareas manuales y mejorar seguimiento, manteniendo control humano.

4. **¿Qué ocurre después de pedir la auditoría?**  
   Revisamos tu caso, detectamos oportunidades de mejora y proponemos un primer flujo pequeño.

### CTA final

**Headline:**

Empieza por una auditoría gratuita

**Texto breve:**

Cuéntanos cómo llegan tus solicitudes y qué tareas se repiten más. Te ayudamos a encontrar una primera automatización útil, clara y medible.

**CTA:**

Pide una auditoría gratuita

---

## 9. Secciones a reducir/eliminar

Reducir:

- Bloques largos de explicación metodológica.
- Texto repetido sobre negocios locales.
- Explicaciones técnicas internas del sistema.
- Mensajes demasiado defensivos sobre lo que PLEXAI no es.
- Listas extensas de servicios o automatizaciones posibles.

Eliminar o fusionar:

- Secciones de problema demasiado largas si el nuevo bloque de cards ya cubre la fricción operativa.
- Bloques separados de servicios si repiten lo explicado en "Qué puede mejorar" y "Cómo funciona".
- Demo textual larga si se sustituye por un flujo visual.
- CTAs redundantes que no aporten ritmo.

Mantener:

- CTA principal visible en hero y CTA final.
- Una FAQ breve.
- Mensaje de control humano.
- Enfoque MVP, progresivo y sin promesas exageradas.

---

## 10. Nichos/sectores visibles permitidos

Sectores visibles en la home:

- Clínicas dentales
- Estética
- Academias
- Negocios locales de servicios

Reglas:

- Mostrar pocos sectores, como ejemplos, no como catálogo completo.
- No convertir clínicas dentales en el eje principal de la marca.
- Evitar repetir "paciente" salvo que sea estrictamente necesario; preferir "cliente", "contacto", "solicitud", "oportunidad" o "persona interesada".
- Evitar lenguaje sanitario como foco principal.
- No mencionar datos clínicos, historial clínico o software médico como parte de la propuesta.

---

## 11. Reglas de tono y lenguaje

Tono deseado:

- Profesional
- Tecnológico
- Comercial
- Claro
- Premium
- Breve
- Generalista
- Sin vender humo

Palabras y conceptos a priorizar:

- Automatización inteligente
- Procesos
- Solicitudes
- Oportunidades
- Seguimiento
- Eficiencia operativa
- Control humano
- Flujo
- Equipo
- Tareas repetitivas
- Empezar pequeño
- Escalar con criterio

Evitar:

- Repetición de "paciente".
- Repetición excesiva de "clínica".
- Promesas tipo "multiplica tus ventas" o "automatiza todo".
- Tono de gran consultora o agencia sobredimensionada.
- Mensajes que hagan parecer PLEXAI un SaaS completo o una empresa enterprise.
- Lenguaje técnico innecesario en la superficie comercial.

Regla editorial:

Cada sección debe responder una pregunta simple:

- Hero: ¿Qué es PLEXAI y por qué me importa?
- Qué mejora: ¿Qué problemas operativos resuelve?
- Cómo funciona: ¿Cómo empezamos?
- Dónde aporta valor: ¿Es para mi tipo de negocio?
- Demo/flujo: ¿Cómo se ve una automatización simple?
- Por qué PLEXAI: ¿Por qué confiar en este enfoque?
- FAQ: ¿Qué objeciones básicas debo resolver?
- CTA final: ¿Qué hago ahora?

---

## 12. Requisitos técnicos y restricciones

Restricciones obligatorias para esta fase SPEC:

- No modificar código todavía.
- No tocar APIs.
- No tocar Supabase.
- No tocar n8n.
- No tocar `.env.local`.
- No rediseñar el sistema técnico interno.
- No instalar dependencias nuevas.
- No hacer commit.
- No hacer push.

Restricciones para la futura fase BUILD:

- Mantener la ruta `/`.
- Mantener el formulario real y su comportamiento actual, salvo ajuste visual superficial si se aprueba en BUILD.
- Mantener `POST /api/audit-requests`.
- Mantener persistencia en Supabase.
- Mantener emisión de `audit_request.created`.
- Mantener webhook production de n8n y validación `X-Automation-Secret`.
- No exponer secretos en cliente, logs ni documentación.
- No añadir dependencias salvo necesidad real y justificada.
- Evitar WebGL, librerías pesadas de animación o assets sobredimensionados.
- Mantener performance razonable en mobile.
- Mantener accesibilidad básica: contraste, foco visible, estructura semántica y CTAs claros.

---

## 13. Plan de implementación por archivos

> Este plan es orientativo para una fase BUILD posterior. No se implementa en esta fase.

Archivos probables a revisar/modificar:

- `web/app/page.tsx`  
  Rediseño de la estructura de la home, secciones, copy y orden narrativo.

- `web/app/globals.css`  
  Ajustes globales mínimos si hacen falta para fondos, scroll, animaciones suaves o variables visuales existentes.

- Componentes locales existentes, si los hay en la landing actual  
  Reutilizar o simplificar según estructura real. Evitar crear una arquitectura profunda si la landing puede mantenerse clara en pocos componentes.

Posible modularización mínima:

- `HeroSection`
- `ImprovementCardsSection`
- `ProcessSection`
- `SectorsSection`
- `FlowDemoSection`
- `WhyPlexaiSection`
- `FAQSection`
- `FinalCTASection`

Regla MVP:

Si la landing actual está concentrada en `web/app/page.tsx`, se permite mantener el rediseño ahí o separar solo componentes realmente útiles. No crear carpetas, sistemas de diseño ni abstracciones prematuras solo para una landing.

---

## 14. Riesgos / evitar sobreingeniería

Riesgos principales:

- Convertir el rediseño en una reconstrucción completa del producto.
- Tocar integraciones que ya funcionan y no forman parte del problema actual.
- Añadir dependencias visuales innecesarias.
- Crear demasiados componentes para una landing corta-media.
- Usar animaciones que compliquen rendimiento y mantenimiento.
- Hacer el copy demasiado genérico y perder concreción comercial.
- Volver a centrar la marca en clínicas/pacientes.
- Prometer capacidades que todavía no existen.
- Sobrecargar la página con explicaciones técnicas.

Decisión de alcance:

El rediseño debe mejorar **presentación, claridad, ritmo visual y conversión**, no reabrir la arquitectura técnica. El sistema actual ya funciona como MVP y debe protegerse.

---

## 15. Criterios de verificación

La SPEC se considera lista si:

- Existe el archivo `docs/spec-plexai-landing-redesign-mvp.md`.
- La SPEC deja claro que esta fase no modifica código.
- La nueva home propuesta contiene las 8 secciones acordadas.
- El CTA principal es **Pide una auditoría gratuita**.
- El CTA secundario del hero es **Ver cómo funciona**.
- El CTA final usa el headline **Empieza por una auditoría gratuita**.
- La marca se presenta como automatización inteligente para negocios locales y equipos de servicios.
- El lenguaje evita centrar la narrativa en clínicas o pacientes.
- Los sectores visibles se limitan a clínicas dentales, estética, academias y negocios locales de servicios.
- Se explicita la mezcla visual oscuro/claro, negro/morado, glow suave, gradientes y cards premium.
- Se limita el movimiento a nivel medio, sin WebGL pesado ni dependencias innecesarias.
- Se documenta que no deben tocarse APIs, Supabase, n8n ni `.env.local`.
- Se incluye un plan de implementación por archivos para una fase BUILD posterior.
- Se incluyen riesgos claros para evitar sobreingeniería.

---

*Documento de especificación. Implementación pendiente y fuera de alcance en esta fase.*
