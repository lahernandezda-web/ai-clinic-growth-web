const auditHref = "#auditoria";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 sm:justify-start">
          <a
            href="#"
            className="font-mono text-sm font-semibold tracking-[0.2em] text-white"
          >
            PLEXAI
          </a>
          <a
            href={auditHref}
            className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-2 text-xs font-medium text-white shadow-lg shadow-violet-500/20 transition hover:opacity-95 sm:hidden"
          >
            Auditoría gratis
          </a>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-zinc-400 sm:justify-start sm:text-sm">
          <a
            href="#problema"
            className="transition-colors hover:text-white"
          >
            Problema
          </a>
          <a
            href="#soluciones"
            className="transition-colors hover:text-white"
          >
            Soluciones
          </a>
          <a href="#metodo" className="transition-colors hover:text-white">
            Método
          </a>
          <a
            href={auditHref}
            className="transition-colors hover:text-white"
          >
            Auditoría
          </a>
        </nav>
        <a
          href={auditHref}
          className="hidden shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:opacity-95 sm:inline-flex"
        >
          Pide una auditoría gratuita
        </a>
      </div>
    </header>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-violet-400/90">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/5 px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.22),transparent)]"
          />
          <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-violet-400/90">
                Automatización con criterio
              </p>
              <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
                Automatiza lo que realmente hace crecer tu negocio
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-zinc-400">
                En PLEXAI analizamos tus procesos, detectamos tareas repetitivas
                y diseñamos soluciones con IA solo donde aportan valor real.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={auditHref}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:opacity-95"
                >
                  Pide una auditoría gratuita
                </a>
                <a
                  href="#metodo"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/25 hover:bg-white/10"
                >
                  Ver cómo funciona
                </a>
              </div>
            </div>
            <div className="relative lg:justify-self-end">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-500/20 via-transparent to-fuchsia-500/10 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 shadow-xl shadow-black/40">
                <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                  <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
                  <span className="h-2 w-2 rounded-full bg-amber-400/90" />
                  <span className="h-2 w-2 rounded-full bg-zinc-600" />
                  <span className="ml-auto font-mono text-[10px] text-zinc-500">
                    flujo · concepto
                  </span>
                </div>
                <div className="mt-5 space-y-3 font-mono text-xs text-zinc-300 sm:text-sm">
                  <div className="rounded-lg border border-white/5 bg-zinc-950/50 px-3 py-2">
                    <span className="text-violet-400">→</span> consultas y
                    solicitudes ordenadas
                  </div>
                  <div className="rounded-lg border border-white/5 bg-zinc-950/50 px-3 py-2">
                    <span className="text-fuchsia-400">→</span> tareas repetivas
                    identificadas
                  </div>
                  <div className="rounded-lg border border-white/5 bg-zinc-950/50 px-3 py-2">
                    <span className="text-emerald-400/90">→</span> MVP pequeño,
                    medible y con control humano
                  </div>
                </div>
                <p className="mt-5 text-xs leading-relaxed text-zinc-500">
                  Visual conceptual. Las soluciones reales se definen contigo en
                  la auditoría.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problema */}
        <section
          id="problema"
          className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Diagnóstico"
              title="Muchos negocios pierden oportunidades por cómo están organizados los procesos"
              description="No siempre falta personal: a veces falta orden y automatización donde realmente compensa."
            />
            <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Consultas y mensajes sin responder a tiempo",
                "Seguimiento comercial manual y disperso",
                "Tareas repetitivas que comen horas cada semana",
                "Información en varios sitios sin un flujo claro",
                "Procesos sin sistema: cada persona lo hace distinto",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/10 bg-zinc-900/40 px-4 py-4 text-sm leading-relaxed text-zinc-300"
                >
                  <span className="mr-2 text-violet-400">·</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 text-center">
              <a
                href={auditHref}
                className="text-sm font-medium text-violet-400 underline-offset-4 hover:text-violet-300 hover:underline"
              >
                Pide una auditoría gratuita
              </a>
            </div>
          </div>
        </section>

        {/* Propuesta de valor → Soluciones */}
        <section
          id="soluciones"
          className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Enfoque"
              title="No automatizamos por moda: primero analizamos, luego priorizamos"
              description="Analizamos los procesos de tu negocio, detectamos tareas repetitivas y diseñamos automatizaciones con IA solo donde realmente aportan valor."
            />
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
              {[
                {
                  title: "Criterio antes de herramientas",
                  body: "Evitamos automatizar por impulso. Si no mejora algo medible o reduce carga real, no lo forzamos.",
                },
                {
                  title: "Propuestas útiles y realistas",
                  body: "Te decimos qué tiene sentido ahora y qué puede esperar a una segunda fase.",
                },
                {
                  title: "Empezar pequeño",
                  body: "Un MVP acotado que puedas validar rápido, sin comprometer todo tu día a día.",
                },
                {
                  title: "Control humano",
                  body: "En lo sensible, la decisión sigue siendo tuya. La IA apoya; no sustituye tu criterio.",
                },
              ].map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-6 shadow-lg shadow-black/20"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href={auditHref}
                className="inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Pide una auditoría gratuita
              </a>
            </div>
          </div>
        </section>

        {/* Para quién */}
        <section className="border-b border-white/5 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Audiencia"
              title="Pensado para negocios locales con procesos repetitivos"
              description="Si tu valor es la atención cercana, la automatización debe apoyarte: menos tareas repetitivas y más margen para lo importante."
            />
            <div className="mx-auto mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Clínicas dentales",
                "Podólogos",
                "Clínicas de estética",
                "Fisioterapeutas y osteópatas",
                "Clínicas privadas pequeñas",
                "Academias y centros de formación",
                "Negocios locales de servicios",
              ].map((label) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-zinc-900/35 px-5 py-4 text-center text-sm font-medium text-zinc-200"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qué podemos automatizar */}
        <section className="border-b border-white/5 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Ámbitos"
              title="Qué podemos automatizar (si encaja con tu operación)"
              description="Las integraciones concretas dependen del proyecto. Algunas son fase inicial; otras, futuras y se acuerdan con transparencia."
            />
            <div className="mx-auto mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Respuestas frecuentes",
                  body: "Base de respuestas y plantillas con revisión humana cuando hace falta.",
                },
                {
                  title: "Captación de leads",
                  body: "Ordenar solicitudes entrantes y preparar siguientes pasos comerciales.",
                },
                {
                  title: "Organización de contactos",
                  body: "Estructurar información comercial sin convertirlo en un CRM “gigante” de primeras.",
                },
                {
                  title: "Seguimiento comercial",
                  body: "Recordatorios internos y preparación de mensajes; tú decides cuándo enviar.",
                },
                {
                  title: "Recordatorios internos",
                  body: "Alertas para el equipo sobre pasos pendientes (administrativos, no clínicos).",
                },
                {
                  title: "Preparación de mensajes",
                  body: "Borradores y clasificación para que respondas más rápido con criterio.",
                },
                {
                  title: "Conexión futura con herramientas",
                  body: "Diseño pensando en integraciones progresivas cuando tenga sentido técnico y de negocio.",
                },
              ].map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col rounded-xl border border-white/10 bg-zinc-900/40 p-5"
                >
                  <h3 className="text-sm font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-zinc-400">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-zinc-500">
              En esta fase no tratamos datos clínicos ni de pacientes en la web.
              Los alcances sanitarios o médicos quedan fuera del alcance de esta
              landing.
            </p>
            <div className="mt-8 text-center">
              <a
                href={auditHref}
                className="text-sm font-medium text-violet-400 underline-offset-4 hover:text-violet-300 hover:underline"
              >
                Pide una auditoría gratuita
              </a>
            </div>
          </div>
        </section>

        {/* Cómo trabajamos */}
        <section
          id="metodo"
          className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Método"
              title="Cómo trabajamos"
              description="Un camino claro, en fases, para reducir incertidumbre y medir antes de escalar."
            />
            <ol className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
              {[
                {
                  step: "1",
                  title: "Auditoría",
                  body: "Revisión de captación, atención y seguimiento para detectar oportunidades reales (sin humo).",
                },
                {
                  step: "2",
                  title: "Mapa de procesos",
                  body: "Visualizamos cómo fluye el trabajo hoy y dónde se pierde tiempo o calidad.",
                },
                {
                  step: "3",
                  title: "MVP funcional",
                  body: "Construimos algo pequeño que puedas usar y evaluar en semanas, no meses eternos.",
                },
                {
                  step: "4",
                  title: "Mejora progresiva",
                  body: "Ajustamos con datos y experiencia; la siguiente iteración solo si tiene sentido para ambos.",
                },
              ].map((item) => (
                <li
                  key={item.step}
                  className="relative flex gap-4 rounded-2xl border border-white/10 bg-zinc-900/45 p-6"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-500/20 font-mono text-sm font-semibold text-violet-300">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10 text-center">
              <a
                href={auditHref}
                className="inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Pide una auditoría gratuita
              </a>
            </div>
          </div>
        </section>

        {/* Demo conceptual */}
        <section className="border-b border-white/5 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Ejemplo"
              title="Demo conceptual (no es un chatbot real todavía)"
              description="Ilustración de flujo genérico. La implementación real se define contigo."
            />
            <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-violet-500/25 bg-gradient-to-br from-violet-950/40 to-zinc-950/80 p-8 shadow-xl shadow-violet-950/30">
              <p className="text-center text-sm font-medium text-zinc-300">
                Flujo tipo
              </p>
              <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-2">
                {[
                  "Consulta recibida",
                  "IA prepara borrador",
                  "Humano revisa",
                  "Seguimiento registrado",
                ].map((label, i, arr) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className="rounded-lg border border-white/10 bg-zinc-900/70 px-3 py-2 text-center text-xs font-medium text-zinc-200 sm:text-sm">
                      {label}
                    </span>
                    {i < arr.length - 1 ? (
                      <span
                        className="hidden text-zinc-600 sm:inline"
                        aria-hidden
                      >
                        →
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-xs leading-relaxed text-zinc-500">
                Esto es un ejemplo visual. No hay conversación en vivo ni captura
                de datos en esta página.
              </p>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="border-b border-white/5 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Servicios"
              title="Qué podemos hacer contigo"
              description="Oferta de alto nivel. El detalle técnico se acota en la auditoría y en cada propuesta."
            />
            <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
              {[
                "Auditoría de automatización",
                "Chatbots bajo control humano",
                "Automatización de seguimiento",
                "Integraciones progresivas",
                "Sistemas internos a medida",
              ].map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-900/35 px-4 py-3 text-sm text-zinc-200"
                >
                  <span className="text-violet-400">✓</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Auditoría gratuita */}
        <section
          id="auditoria"
          className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6"
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-950/50 via-zinc-950 to-fuchsia-950/30 p-8 text-center shadow-2xl shadow-violet-950/40 sm:p-12">
            <h2 className="text-balance text-2xl font-semibold text-white sm:text-3xl">
              Pide una auditoría gratuita
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-300 sm:text-base">
              Revisamos captación, atención al cliente potencial y seguimiento
              comercial para detectar oportunidades reales de orden y
              automatización — sin prometer integraciones que aún no tocan tu
              proyecto.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-zinc-500">
              Todavía no activamos formulario ni guardamos datos en esta versión.
              Cuando lo habilitemos, te pediremos solo información comercial
              mínima.
            </p>
            <a
              href={auditHref}
              className="mt-8 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
            >
              Pide una auditoría gratuita
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-white/5 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <SectionTitle eyebrow="FAQ" title="Preguntas frecuentes" />
            <div className="mt-10 space-y-3">
              {[
                {
                  q: "¿PLEXAI sustituye a mi equipo?",
                  a: "No. Diseñamos procesos más ordenados y con menos fricción para que el equipo pueda enfocarse en lo que aporta valor. La tecnificación apoya; no elimina personas.",
                },
                {
                  q: "¿Necesito saber de tecnología?",
                  a: "No hace falta ser experto. Explicamos las decisiones en lenguaje claro y documentamos lo esencial para tu día a día.",
                },
                {
                  q: "¿Todo se automatiza?",
                  a: "No. Automatizar con criterio significa dejar fuera lo que es frágil o poco rentable. Priorizamos lo que más te alivia con riesgo acotado.",
                },
                {
                  q: "¿Funciona ya con WhatsApp?",
                  a: "Hoy no vendemos WhatsApp como producto activo. Si en tu proyecto encaja, las integraciones con canales de mensajería se plantean como fase futura y con alcance definido.",
                },
                {
                  q: "¿Es para clínicas?",
                  a: "Trabajamos con negocios locales, incluidas clínicas, como organización comercial y operativa. PLEXAI no es un sistema clínico, software médico ni historial de pacientes.",
                },
                {
                  q: "¿La IA toma decisiones sola?",
                  a: "No. La IA prepara, clasifica o sugiere; las decisiones sensibles las controlas tú o tu equipo.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-white/10 bg-zinc-900/40 px-4 py-3 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-medium text-white">
                    {item.q}
                    <span className="text-zinc-500 transition group-open:rotate-180">
                      ▾
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
            <p className="mt-10 text-center">
              <a
                href={auditHref}
                className="text-sm font-medium text-violet-400 underline-offset-4 hover:text-violet-300 hover:underline"
              >
                Pide una auditoría gratuita
              </a>
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Siguiente paso
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              Compromiso claro: automatización útil, control humano y propuestas
              alineadas con tu negocio local — sin prometer un SaaS gigante ni
              funciones que aún no están en tu alcance.
            </p>
            <a
              href={auditHref}
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:opacity-95"
            >
              Pide una auditoría gratuita
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-xs text-zinc-500 sm:flex-row sm:text-left">
          <span className="font-mono font-semibold tracking-[0.15em] text-zinc-400">
            PLEXAI
          </span>
          <p>
            Automatización inteligente para negocios locales. No somos sistema
            clínico ni software médico.
          </p>
        </div>
      </footer>
    </div>
  );
}
