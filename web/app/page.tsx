import Link from "next/link";

import { AuditRequestForm } from "@/components/AuditRequestForm";
import { HeroSvgBackground } from "@/components/HeroSvgBackground";

const auditHref = "#auditoria";

const improvements = [
  {
    title: "Captación de solicitudes",
    body: "Convierte formularios y consultas en oportunidades más claras desde el primer contacto.",
  },
  {
    title: "Seguimiento de oportunidades",
    body: "Reduce contactos olvidados con próximos pasos visibles para el equipo.",
  },
  {
    title: "Organización de contactos",
    body: "Ordena la información mínima necesaria para actuar sin depender de memoria o notas sueltas.",
  },
  {
    title: "Automatización de tareas repetitivas",
    body: "Alivia avisos, registros y coordinación interna cuando aportan eficiencia real.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Analizamos tu proceso",
    body: "Entendemos cómo llegan las solicitudes, quién las gestiona y dónde se pierde contexto.",
  },
  {
    step: "02",
    title: "Detectamos cuellos de botella",
    body: "Priorizamos tareas repetitivas con impacto operativo, no ideas bonitas sin uso real.",
  },
  {
    step: "03",
    title: "Diseñamos una automatización útil",
    body: "Proponemos un flujo pequeño, comprensible y alineado con la forma de trabajar del equipo.",
  },
  {
    step: "04",
    title: "Medimos y mejoramos",
    body: "Revisamos si funciona, ajustamos lo necesario y escalamos solo cuando tiene sentido.",
  },
];

const sectors = [
  "Clínicas dentales",
  "Centros de estética",
  "Academias",
  "Negocios locales de servicios",
];

const flowItems = [
  {
    label: "Formulario",
    title: "Nueva solicitud",
    body: "El contacto deja los datos necesarios para revisar el caso.",
  },
  {
    label: "Registro",
    title: "Información ordenada",
    body: "La oportunidad queda preparada para consultarla sin perder contexto.",
  },
  {
    label: "Aviso interno",
    title: "Equipo informado",
    body: "La persona adecuada sabe que hay una acción pendiente.",
  },
  {
    label: "Seguimiento",
    title: "Próximo paso definido",
    body: "El flujo deja claro qué hacer después y cuándo revisarlo.",
  },
];

const reasons = [
  {
    title: "Automatización con criterio",
    body: "No todo debe automatizarse. Elegimos procesos donde el beneficio es claro y medible.",
  },
  {
    title: "Implementación progresiva",
    body: "Empezamos por un MVP concreto antes de ampliar sistemas o añadir complejidad.",
  },
  {
    title: "Control humano",
    body: "La automatización ordena y acelera, pero las decisiones importantes siguen en manos del equipo.",
  },
];

const faqs = [
  {
    q: "¿Sirve solo para clínicas?",
    a: "No. Las clínicas son un ejemplo, pero PLEXAI está pensado para negocios de servicios con solicitudes, seguimiento y tareas repetitivas.",
  },
  {
    q: "¿Sustituye al equipo?",
    a: "No. El objetivo es reducir carga manual, mejorar el orden y mantener el control humano en las decisiones relevantes.",
  },
  {
    q: "¿Por dónde se empieza?",
    a: "Por una auditoría gratuita: revisamos un proceso concreto y detectamos si merece la pena automatizarlo.",
  },
  {
    q: "¿Se puede adaptar a mi negocio?",
    a: "Sí, si hay un flujo repetitivo y medible. La propuesta se adapta al proceso real, no al revés.",
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 sm:justify-start">
          <Link
            href="/"
            className="font-mono text-sm font-semibold tracking-[0.24em] text-white"
          >
            PLEXAI
          </Link>
          <a
            href={auditHref}
            className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-zinc-950 shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:bg-violet-100 sm:hidden"
          >
            Auditoría gratis
          </a>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-zinc-400 sm:justify-start sm:text-sm">
          <a href="#mejoras" className="transition-colors hover:text-white">
            Mejoras
          </a>
          <a href="#metodo" className="transition-colors hover:text-white">
            Método
          </a>
          <a href="#sectores" className="transition-colors hover:text-white">
            Sectores
          </a>
          <a href="#flujo" className="transition-colors hover:text-white">
            Flujo
          </a>
        </nav>
        <a
          href={auditHref}
          className="hidden shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:bg-violet-100 sm:inline-flex"
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
  theme = "dark",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  theme?: "dark" | "light";
}) {
  const isLight = theme === "light";

  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${
            isLight ? "text-violet-700" : "text-violet-300"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-2xl font-semibold tracking-tight sm:text-4xl ${
          isLight ? "text-zinc-950" : "text-white"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-sm leading-relaxed sm:text-base ${
            isLight ? "text-zinc-600" : "text-zinc-400"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-lg lg:ml-auto">
      <div
        aria-hidden={true}
        className="absolute -inset-8 rounded-full bg-violet-500/25 blur-3xl"
      />
      <div
        aria-hidden={true}
        className="plexai-float absolute -right-3 top-10 h-24 w-24 rounded-full border border-violet-300/20 bg-violet-400/10 blur-sm"
      />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-4 shadow-2xl shadow-violet-950/50 backdrop-blur">
        <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950/90 p-5">
          <div className="flex items-center gap-2 border-b border-white/10 pb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
            <span className="ml-auto rounded-full border border-white/10 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              Flow OS
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-4">
              <p className="text-xs font-medium uppercase tracking-widest text-violet-200">
                Solicitudes
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">24</p>
              <p className="mt-1 text-xs text-zinc-400">
                6 requieren seguimiento
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                Estado
              </p>
              <div className="mt-4 space-y-2">
                {["Registrado", "Aviso interno", "Siguiente paso"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs text-zinc-300"
                    >
                      <span className="plexai-pulse-dot h-2 w-2 rounded-full bg-violet-300" />
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="relative mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div
              aria-hidden={true}
              className="plexai-scan absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent"
            />
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Flujo sugerido
            </p>
            <div className="mt-4 space-y-3">
              {[
                "Formulario recibido",
                "Contacto creado",
                "Equipo avisado",
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-semibold text-zinc-950">
                    {index + 1}
                  </span>
                  <div className="h-2 flex-1 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-300"
                      style={{ width: `${82 - index * 14}%` }}
                    />
                  </div>
                  <span className="w-28 text-xs text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AmbientBlob({
  className,
  variant = "primary",
}: {
  className: string;
  variant?: "primary" | "light" | "blue";
}) {
  const palette = {
    primary:
      "from-violet-500/45 via-fuchsia-400/25 to-blue-400/25 mix-blend-screen",
    light: "from-violet-200/70 via-fuchsia-100/65 to-sky-200/60",
    blue: "from-blue-400/30 via-violet-400/35 to-fuchsia-300/25 mix-blend-screen",
  };

  return (
    <div
      aria-hidden={true}
      className={`plexai-organic absolute rounded-[42%_58%_64%_36%/46%_42%_58%_54%] bg-gradient-to-br ${palette[variant]} blur-3xl ${className}`}
    />
  );
}

function MotionBackground({
  className,
  variant = "hero",
}: {
  className: string;
  variant?: "hero" | "soft" | "cta";
}) {
  const orbClassName = {
    hero: "plexai-motion-orb plexai-motion-orb-hero",
    soft: "plexai-motion-orb plexai-motion-orb-soft",
    cta: "plexai-motion-orb plexai-motion-orb-cta",
  }[variant];
  const dotClassName = {
    hero: "plexai-motion-dot plexai-motion-dot-hero",
    soft: "plexai-motion-dot plexai-motion-dot-soft",
    cta: "plexai-motion-dot plexai-motion-dot-cta",
  }[variant];

  return (
    <div
      aria-hidden={true}
      className={`pointer-events-none absolute overflow-hidden ${className}`}
    >
      <div className={orbClassName} />
      <div className={dotClassName} />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />

      <main>
        <section className="plexai-hero-section relative isolate overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
          <div
            aria-hidden={true}
            className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.28),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(217,70,239,0.18),transparent_26%),linear-gradient(135deg,#09090b_0%,#181020_48%,#09090b_100%)]"
          />
          <HeroSvgBackground />
          <div
            aria-hidden={true}
            className="absolute inset-0 z-[2] bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20"
          />
          <div className="relative z-10 mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-violet-100">
                Automatización inteligente
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.02]">
                Automatización inteligente para negocios que quieren crecer con
                más orden
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                Analizamos tus procesos, detectamos tareas repetitivas y
                diseñamos automatizaciones útiles, medibles y bajo control
                humano.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={auditHref}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 shadow-xl shadow-violet-500/25 transition hover:-translate-y-0.5 hover:bg-violet-100"
                >
                  Pide una auditoría gratuita
                </a>
                <a
                  href="#metodo"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-violet-200/50 hover:bg-white/10"
                >
                  Ver cómo funciona
                </a>
              </div>
              <p className="mt-5 max-w-lg text-xs leading-relaxed text-zinc-500">
                Empezamos por un proceso concreto. Sin sistemas gigantes. Sin
                promesas vacías.
              </p>
            </div>
            <HeroVisual />
          </div>
        </section>

        <section
          id="mejoras"
          className="relative scroll-mt-24 overflow-hidden bg-zinc-50 px-4 py-20 text-zinc-950 sm:px-6 sm:py-24"
        >
          <AmbientBlob
            className="-left-28 top-12 h-72 w-96 opacity-80"
            variant="light"
          />
          <div
            aria-hidden={true}
            className="absolute right-[-12rem] top-16 h-80 w-80 rounded-full bg-[conic-gradient(from_160deg,rgba(124,58,237,0.16),rgba(56,189,248,0.12),rgba(217,70,239,0.14),transparent_72%)] blur-2xl"
          />
          <MotionBackground
            className="inset-0"
            variant="soft"
          />
          <div
            aria-hidden={true}
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-300/60 to-transparent"
          />
          <div className="relative mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Qué puede mejorar PLEXAI"
              title="Menos fricción en los procesos que más se repiten"
              description="PLEXAI ayuda a ordenar solicitudes, contactos y tareas operativas para que tu equipo tenga más claridad y menos trabajo manual."
              theme="light"
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {improvements.map((card) => (
                <article
                  key={card.title}
                  className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/10"
                >
                  <div className="mb-8 h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 shadow-lg shadow-violet-500/20 transition group-hover:scale-105" />
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="metodo"
          className="relative scroll-mt-24 overflow-hidden border-y border-white/10 bg-zinc-950 px-4 py-20 sm:px-6 sm:py-24"
        >
          <div
            aria-hidden={true}
            className="absolute left-1/2 top-36 h-px w-[76rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-300/30 to-transparent"
          />
          <div
            aria-hidden={true}
            className="plexai-flow-dust absolute inset-0 opacity-40"
          />
          <div className="relative mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Cómo funciona"
              title="Un proceso simple, útil y por fases"
              description="La auditoría evita empezar por la herramienta. Primero entendemos qué ocurre, luego decidimos qué automatización merece la pena."
            />
            <ol className="mt-12 grid gap-4 lg:grid-cols-4">
              {processSteps.map((item) => (
                <li
                  key={item.step}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:bg-white/[0.07]"
                >
                  <div
                    aria-hidden={true}
                    className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-500/10 blur-2xl transition group-hover:bg-violet-500/20"
                  />
                  <span className="font-mono text-xs font-semibold text-violet-300">
                    {item.step}
                  </span>
                  <span
                    aria-hidden={true}
                    className="plexai-pulse-dot absolute right-6 top-6 h-2 w-2 rounded-full bg-sky-300/80 shadow-lg shadow-sky-300/30"
                  />
                  <h3 className="mt-8 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="sectores"
          className="relative scroll-mt-24 overflow-hidden bg-white px-4 py-20 text-zinc-950 sm:px-6 sm:py-24"
        >
          <div
            aria-hidden={true}
            className="absolute -right-24 bottom-10 h-72 w-[28rem] rounded-[60%_40%_35%_65%/45%_55%_45%_55%] bg-gradient-to-br from-violet-100 via-fuchsia-50 to-sky-100 opacity-80 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700">
                Dónde aporta valor
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Pensado para equipos de servicios con mucho trabajo operativo
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-zinc-600 sm:text-base">
                Los sectores son ejemplos, no una caja cerrada. PLEXAI encaja
                mejor cuando hay solicitudes, coordinación diaria y seguimiento
                que hoy consumen demasiado tiempo.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {sectors.map((sector) => (
                <div
                  key={sector}
                  className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:shadow-xl hover:shadow-violet-950/10"
                >
                  <span className="mb-10 block h-1.5 w-12 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-400" />
                  <p className="text-lg font-semibold text-zinc-950">
                    {sector}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="flujo"
          className="relative scroll-mt-24 overflow-hidden bg-zinc-100 px-4 py-20 text-zinc-950 sm:px-6 sm:py-24"
        >
          <AmbientBlob
            className="left-[18%] top-8 h-80 w-[34rem] opacity-60"
            variant="light"
          />
          <div className="relative mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Cómo se ve en la práctica"
              title="De una solicitud suelta a un flujo con seguimiento"
              description="Una automatización bien diseñada puede registrar una solicitud, avisar al equipo y dejar claro qué acción viene después."
              theme="light"
            />
            <div className="mt-12 rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-2xl shadow-zinc-950/10 sm:p-8">
              <div
                aria-hidden={true}
                className="relative mb-6 hidden h-12 overflow-hidden rounded-full border border-violet-100 bg-gradient-to-r from-violet-50 via-white to-sky-50 lg:block"
              >
                <span className="absolute left-8 right-8 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-violet-300 via-fuchsia-300 to-sky-300" />
                <span className="plexai-flow-runner absolute left-8 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-violet-600 shadow-lg shadow-violet-500/40" />
              </div>
              <div className="grid gap-4 lg:grid-cols-4">
                {flowItems.map((item, index) => (
                  <article
                    key={item.label}
                    className="relative rounded-3xl border border-zinc-200 bg-zinc-50 p-5"
                  >
                    {index < flowItems.length - 1 ? (
                      <span
                        aria-hidden={true}
                        className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-zinc-950 text-xs text-white lg:flex"
                      >
                        →
                      </span>
                    ) : null}
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-700">
                      {item.label}
                    </p>
                    <h3 className="mt-8 text-lg font-semibold text-zinc-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-zinc-950 px-4 py-20 sm:px-6 sm:py-24">
          <div
            aria-hidden={true}
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/60 to-transparent"
          />
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Por qué PLEXAI"
              title="Automatización práctica, sin perder criterio"
              description="La tecnología debe ordenar el trabajo, no añadir ruido. El foco está en procesos concretos, adopción progresiva y decisiones bajo control humano."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {reasons.map((reason) => (
                <article
                  key={reason.title}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-violet-300/40"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {reason.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-50 px-4 py-20 text-zinc-950 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <SectionTitle
              eyebrow="FAQ"
              title="Preguntas rápidas"
              description="Respuestas breves antes de pedir la auditoría."
              theme="light"
            />
            <div className="mt-10 space-y-3">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-zinc-950">
                    {item.q}
                    <span className="text-violet-700 transition group-open:rotate-180">
                      ▾
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="auditoria"
          className="relative scroll-mt-24 overflow-hidden bg-zinc-950 px-4 py-20 sm:px-6 sm:py-24"
        >
          <div
            aria-hidden={true}
            className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(124,58,237,0.28),transparent_30%),radial-gradient(circle_at_78%_15%,rgba(56,189,248,0.16),transparent_28%),linear-gradient(180deg,#09090b_0%,#120b1f_55%,#09090b_100%)]"
          />
          <AmbientBlob className="-bottom-24 left-10 h-[340px] w-[520px] opacity-40" />
          <AmbientBlob
            className="-right-24 top-14 h-[380px] w-[520px] opacity-45"
            variant="blue"
          />
          <MotionBackground
            className="inset-0"
            variant="cta"
          />
          <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-8 shadow-2xl shadow-violet-950/30 backdrop-blur">
              <div
                aria-hidden={true}
                className="absolute -right-20 -top-24 h-52 w-52 rounded-full bg-violet-400/15 blur-3xl"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                CTA final
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Empieza por una auditoría gratuita
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-zinc-300 sm:text-base">
                Detecta qué procesos merece la pena automatizar antes de
                invertir en soluciones innecesarias.
              </p>
              <a
                href={auditHref}
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-violet-500/25 transition hover:-translate-y-0.5 hover:bg-violet-100"
              >
                Solicitar auditoría gratuita
              </a>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-violet-400/25 bg-gradient-to-br from-violet-950/70 via-zinc-950/95 to-fuchsia-950/40 p-6 text-center shadow-2xl shadow-violet-950/40 backdrop-blur sm:p-8">
              <div
                aria-hidden={true}
                className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-200/80 to-transparent"
              />
              <div
                aria-hidden={true}
                className="absolute -right-16 top-20 h-44 w-44 rounded-[55%_45%_62%_38%/45%_60%_40%_55%] bg-fuchsia-400/10 blur-3xl"
              />
              <h3 className="text-2xl font-semibold text-white">
                Pide una auditoría gratuita
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300">
                Cuéntanos cómo llegan tus solicitudes y qué tareas se repiten
                más. Revisaremos si hay una primera automatización útil, clara y
                medible.
              </p>
              <p className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-zinc-500">
                Envía información general de tu negocio. No incluyas datos
                sensibles en el formulario.
              </p>
              <AuditRequestForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-zinc-950 px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center text-xs text-zinc-500 sm:flex-row sm:items-start sm:text-left">
          <span className="font-mono font-semibold tracking-[0.18em] text-zinc-300">
            PLEXAI
          </span>
          <p className="max-w-md">
            Automatización inteligente para negocios, procesos y equipos que
            quieren operar con más orden.
          </p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-end"
            aria-label="Enlaces legales"
          >
            <Link
              href="/privacidad"
              className="transition-colors hover:text-zinc-300"
            >
              Política de privacidad
            </Link>
            <Link
              href="/aviso-legal"
              className="transition-colors hover:text-zinc-300"
            >
              Aviso legal
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
