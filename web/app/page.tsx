import Link from "next/link";

import { AuditRequestForm } from "@/components/AuditRequestForm";
import { HeroSvgBackground } from "@/components/HeroSvgBackground";

const auditHref = "#auditoria";

const productivityPanels = [
  {
    title: "Menos trabajo repetitivo",
    body: "Lo manual que no aporta valor sale del camino. El equipo deja de repetir lo mismo cada semana.",
    tone: "sky" as const,
    span: "tall" as const,
  },
  {
    title: "Más tiempo para lo importante",
    body: "Decisiones, clientes y crecimiento — no solo apagar incendios operativos.",
    tone: "peach" as const,
    span: "default" as const,
  },
  {
    title: "IA útil, bajo control",
    body: "Automatización clara y medible. Sin cajas negras ni procesos que nadie entiende.",
    tone: "lavender" as const,
    span: "wide" as const,
  },
];

const improvements = [
  {
    title: "Captación de solicitudes",
    body: "Convierte formularios y consultas en oportunidades más claras desde el primer contacto.",
    accent: "from-sky-500 via-cyan-400 to-amber-300",
  },
  {
    title: "Seguimiento de oportunidades",
    body: "Reduce contactos olvidados con próximos pasos visibles para el equipo.",
    accent: "from-violet-500 via-fuchsia-400 to-rose-300",
  },
  {
    title: "Organización de contactos",
    body: "Ordena la información mínima necesaria para actuar sin depender de memoria o notas sueltas.",
    accent: "from-emerald-500 to-teal-400",
  },
  {
    title: "Automatización de tareas repetitivas",
    body: "Alivia avisos, registros y coordinación interna cuando aportan eficiencia real.",
    accent: "from-amber-500 to-orange-300",
  },
];

const panelToneClass = {
  sky: "plexai-panel-sky",
  mint: "plexai-panel-mint",
  aqua: "plexai-panel-aqua",
  lavender: "plexai-panel-lavender",
  peach: "plexai-panel-peach",
} as const;

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

const businessSituations = [
  {
    title: "Seguimiento manual que se escapa",
    body: "Llegan solicitudes y contactos, pero sin un proceso claro se pierde tiempo recordando quién falta por atender.",
  },
  {
    title: "Solicitudes sin un orden claro",
    body: "Entra información por varios canales y el equipo no tiene una forma sencilla de saber qué hacer primero.",
  },
  {
    title: "Tareas repetitivas que saturan al equipo",
    body: "Avisos, registros y coordinación interna consumen horas que podrían dedicarse a vender o atender mejor.",
  },
  {
    title: "Quieres usar IA sin perder el control",
    body: "Te interesa automatizar, pero sin montar un sistema rígido ni delegar decisiones importantes a una caja negra.",
  },
];

const tailoredApproach = [
  {
    step: "01",
    title: "Entendemos tu operativa",
    body: "Revisamos cómo trabajas hoy: qué entra, quién lo gestiona y dónde se pierde tiempo o dinero de verdad.",
  },
  {
    step: "02",
    title: "Detectamos la mejor oportunidad",
    body: "Priorizamos el punto donde automatizar aporta más productividad, no la moda tecnológica del momento.",
  },
  {
    step: "03",
    title: "Diseñamos para tu caso",
    body: "Plantamos una solución concreta, comprensible y alineada con tu forma de trabajar — no un paquete genérico.",
  },
  {
    step: "04",
    title: "Puesta en marcha con control",
    body: "Lo activamos de forma progresiva, con claridad sobre qué hace la automatización y qué sigue en manos del equipo.",
  },
];

const reasons = [
  {
    title: "Automatización con criterio",
    body: "No todo debe automatizarse. Elegimos procesos donde el ahorro de tiempo y la productividad son claros y medibles.",
  },
  {
    title: "Empezamos por lo concreto",
    body: "Arrancamos con una mejora útil y acotada antes de ampliar. Así ganas resultados sin sobrecargar al equipo.",
  },
  {
    title: "Más orden, decisiones bajo control",
    body: "La tecnología ordena y acelera el trabajo repetitivo; las decisiones importantes siguen donde deben: en tu negocio.",
  },
];

const faqs = [
  {
    q: "¿Esto sirve para cualquier negocio?",
    a: "Sí, si tienes procesos repetitivos, solicitudes o coordinación diaria que consumen tiempo. No importa el sector: importa si hay margen real para ordenar y automatizar.",
  },
  {
    q: "¿Cómo sé si merece la pena automatizar algo?",
    a: "En la auditoría gratuita revisamos un proceso concreto: frecuencia, tiempo que consume y si una automatización aportaría productividad sin añadir caos.",
  },
  {
    q: "¿Qué tipo de tareas se pueden automatizar?",
    a: "Registro de solicitudes, avisos internos, seguimiento de contactos, recordatorios y coordinación repetitiva. Siempre priorizando lo que libera tiempo al equipo.",
  },
  {
    q: "¿Hace falta saber de tecnología o IA?",
    a: "No. Nosotros traducimos la oportunidad a una solución clara. Tú aportas cómo funciona tu negocio; nosotros el diseño y la puesta en marcha.",
  },
  {
    q: "¿La automatización sustituye al equipo?",
    a: "No. Quita carga manual y repetitiva para que el equipo se centre en atender, vender y decidir. Las decisiones relevantes siguen siendo humanas.",
  },
  {
    q: "¿Por dónde se empieza y cómo se adapta a mi negocio?",
    a: "Por la auditoría gratuita. A partir de tu operativa real definimos el primer paso útil — adaptado a tu caso, no a una plantilla igual para todos.",
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
          <a href="#situaciones" className="transition-colors hover:text-white">
            Tu situación
          </a>
          <a href="#enfoque" className="transition-colors hover:text-white">
            Enfoque
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
              Diagnóstico
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-4">
              <p className="text-xs font-medium uppercase tracking-widest text-violet-200">
                Tiempo recuperable
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">12 h</p>
              <p className="mt-1 text-xs text-zinc-400">
                /semana en tareas repetitivas
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                Avance
              </p>
              <div className="mt-4 space-y-2">
                {["Detectado", "Priorizado", "Bajo control"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-zinc-300"
                  >
                    <span className="plexai-pulse-dot h-2 w-2 rounded-full bg-violet-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div
              aria-hidden={true}
              className="plexai-scan absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent"
            />
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Oportunidad
            </p>
            <div className="mt-4 space-y-3">
              {[
                "Proceso repetitivo",
                "Automatización útil",
                "Equipo con más foco",
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
                  <span className="w-32 shrink-0 text-xs text-zinc-300">
                    {item}
                  </span>
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
  variant?: "primary" | "light" | "blue" | "warm";
}) {
  const palette = {
    primary:
      "from-violet-500/45 via-fuchsia-400/25 to-blue-400/25 mix-blend-screen",
    light: "from-sky-200/65 via-emerald-100/55 to-violet-100/60",
    blue: "from-blue-400/30 via-emerald-300/20 to-violet-400/30 mix-blend-screen",
    warm: "plexai-warm-blob",
  };

  const gradientClass =
    variant === "warm"
      ? palette.warm
      : `bg-gradient-to-br ${palette[variant]}`;

  return (
    <div
      aria-hidden={true}
      className={`plexai-organic absolute rounded-[42%_58%_64%_36%/46%_42%_58%_54%] ${gradientClass} blur-3xl ${className}`}
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
                Productividad y automatización
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Recupera tiempo y dinero quitando del medio lo que tu negocio
                repite sin aportar
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                Analizamos cómo trabajas, detectamos procesos que consumen horas
                innecesarias y diseñamos automatización con IA útil y bajo tu
                control — para que ganes productividad y puedas centrarte en
                hacer crecer el negocio.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={auditHref}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 shadow-xl shadow-violet-500/20 shadow-orange-200/30 transition hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-violet-50 hover:to-orange-50"
                >
                  Pide una auditoría gratuita
                </a>
                <a
                  href="#enfoque"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-violet-200/50 hover:bg-white/10"
                >
                  Ver cómo trabajamos
                </a>
              </div>
              <p className="mt-5 max-w-lg text-xs leading-relaxed text-zinc-500">
                Sin promesas vacías. Empezamos por un proceso concreto donde el
                ahorro de tiempo y dinero sea real.
              </p>
            </div>
            <HeroVisual />
          </div>
        </section>

        <section
          id="mejoras"
          className="plexai-section-sky relative scroll-mt-24 overflow-hidden px-4 py-20 text-zinc-950 sm:px-6 sm:py-28"
        >
          <AmbientBlob
            className="-left-28 top-12 h-72 w-96 opacity-90"
            variant="light"
          />
          <AmbientBlob
            className="right-[-6rem] bottom-4 h-64 w-80 opacity-70"
            variant="warm"
          />
          <div
            aria-hidden={true}
            className="absolute right-[-10rem] top-8 h-96 w-96 rounded-full bg-[conic-gradient(from_140deg,rgba(56,189,248,0.22),rgba(255,231,214,0.18),rgba(167,139,250,0.16),rgba(52,211,153,0.14),transparent_70%)] blur-2xl"
          />
          <MotionBackground
            className="inset-0"
            variant="soft"
          />
          <div
            aria-hidden={true}
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 via-sky-400/50 to-transparent"
          />
          <div className="relative mx-auto max-w-6xl">
            <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <div className="lg:sticky lg:top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-800">
                  Qué ganas con PLEXAI
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.65rem]">
                  Más productividad donde hoy se repite el mismo trabajo
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-600">
                  La automatización no va de hacer más cosas: va de quitar
                  repetición inútil y liberar tiempo para lo que hace crecer tu
                  negocio — con procesos más claros y sin perder el control.
                </p>
                <p className="mt-4 hidden max-w-sm text-sm leading-relaxed text-zinc-500 lg:block">
                  Ordenamos solicitudes, contactos y tareas operativas para que
                  tu equipo deje de perder horas en lo manual.
                </p>
              </div>

              <div className="grid min-h-[22rem] grid-cols-2 grid-rows-2 gap-4 sm:min-h-[26rem] sm:gap-5">
                {productivityPanels.map((panel) => {
                  const gridClass =
                    panel.span === "tall"
                      ? "col-span-1 row-span-2"
                      : panel.span === "wide"
                        ? "col-span-2 row-span-1"
                        : "col-span-1 row-span-1";

                  return (
                    <article
                      key={panel.title}
                      className={`plexai-panel-tile ${panelToneClass[panel.tone]} flex flex-col justify-between rounded-[1.75rem] p-6 sm:p-7 ${gridClass}`}
                    >
                      <span
                        aria-hidden={true}
                        className="mb-4 block h-1 w-10 rounded-full bg-zinc-950/15"
                      />
                      <div>
                        <h3 className="text-xl font-semibold leading-snug tracking-tight text-zinc-950 sm:text-2xl">
                          {panel.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-700/90 sm:text-[0.9375rem]">
                          {panel.body}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="mt-16 border-t border-sky-200/50 pt-14 sm:mt-20 [border-top-color:rgba(254,243,199,0.65)]">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Cómo se traduce en tu día a día
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {improvements.map((card) => (
                  <article
                    key={card.title}
                    className="plexai-improvement-compact group rounded-2xl border p-5 transition duration-300 hover:-translate-y-0.5"
                  >
                    <div
                      className={`mb-5 h-1 w-14 rounded-full bg-gradient-to-r ${card.accent}`}
                    />
                    <h3 className="text-base font-semibold tracking-tight text-zinc-950">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                      {card.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="metodo"
          className="relative scroll-mt-24 overflow-hidden border-y border-white/10 bg-zinc-950 px-4 py-20 sm:px-6 sm:py-28"
        >
          <div
            aria-hidden={true}
            className="absolute left-1/2 top-36 h-px w-[76rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-400/25 via-violet-300/35 to-transparent"
          />
          <div
            aria-hidden={true}
            className="plexai-flow-dust absolute inset-0 opacity-40"
          />
          <div className="relative mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <SectionTitle
                eyebrow="Cómo funciona"
                title="Un proceso simple, útil y por fases"
                description="La auditoría evita empezar por la herramienta. Primero entendemos qué ocurre, luego decidimos qué automatización merece la pena."
              />
            </div>
            <ol className="mt-14 space-y-0 lg:mt-16">
              {processSteps.map((item, index) => (
                <li
                  key={item.step}
                  className="group relative grid gap-6 border-t border-white/10 py-8 first:border-t-0 first:pt-0 lg:grid-cols-[5rem_1fr] lg:items-start lg:gap-10 lg:py-10"
                >
                  <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:gap-0">
                    <span className="font-mono text-2xl font-semibold text-violet-300 lg:text-3xl">
                      {item.step}
                    </span>
                    {index < processSteps.length - 1 ? (
                      <span
                        aria-hidden={true}
                        className="plexai-step-rail hidden h-full min-h-[4rem] w-px lg:block"
                      />
                    ) : null}
                  </div>
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.06] to-transparent p-6 transition duration-300 hover:border-sky-400/30 sm:p-7">
                    <div
                      aria-hidden={true}
                      className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sky-500/10 blur-2xl transition group-hover:bg-violet-500/15"
                    />
                    <h3 className="relative text-xl font-semibold text-white sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="relative mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="situaciones"
          className="plexai-section-lavender relative scroll-mt-24 overflow-hidden px-4 py-20 text-zinc-950 sm:px-6 sm:py-28"
        >
          <AmbientBlob
            className="left-[-5rem] top-32 h-56 w-72 opacity-50"
            variant="warm"
          />
          <div
            aria-hidden={true}
            className="absolute -right-24 bottom-10 h-72 w-[28rem] rounded-[60%_40%_35%_65%/45%_55%_45%_55%] bg-gradient-to-br from-orange-200/40 via-rose-100/35 via-violet-200/45 to-sky-200/50 opacity-95 blur-3xl"
          />
          <div className="relative mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <SectionTitle
                eyebrow="¿Te suena familiar?"
                title="Si pierdes tiempo y dinero en procesos que podrían estar mejor organizados, esto puede ser para ti"
                description="No importa el sector. Importa si hoy hay tareas repetitivas, seguimiento manual o desorden que frena la productividad de tu equipo."
                theme="light"
              />
            </div>
            <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:grid-rows-2 lg:gap-6">
              <article className="plexai-situation-featured rounded-[1.75rem] border p-8 transition duration-300 hover:-translate-y-1 lg:col-span-7 lg:row-span-2 lg:p-10">
                <span className="mb-6 inline-flex rounded-full bg-gradient-to-r from-orange-50 to-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-orange-900/90 ring-1 ring-orange-200/60">
                  Muy habitual
                </span>
                <h3 className="text-2xl font-semibold leading-snug tracking-tight text-zinc-950 sm:text-3xl">
                  {businessSituations[0].title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600">
                  {businessSituations[0].body}
                </p>
              </article>
              {businessSituations.slice(1).map((item, index) => (
                <article
                  key={item.title}
                  className={`plexai-card-light rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 lg:col-span-5 ${
                    index === 0 ? "lg:col-start-8" : "lg:col-start-8"
                  }`}
                >
                  <span
                    className={`mb-5 block h-1 w-10 rounded-full bg-gradient-to-r ${
                      index === 0
                        ? "from-emerald-500 to-teal-400"
                        : index === 1
                          ? "from-amber-500 to-orange-300"
                          : "from-violet-500 to-fuchsia-400"
                    }`}
                  />
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="enfoque"
          className="plexai-section-mint relative scroll-mt-24 overflow-hidden px-4 py-20 text-zinc-950 sm:px-6 sm:py-28"
        >
          <AmbientBlob
            className="left-[18%] top-8 h-80 w-[34rem] opacity-65"
            variant="light"
          />
          <AmbientBlob
            className="right-[-4rem] bottom-8 h-56 w-72 opacity-55"
            variant="warm"
          />
          <div
            aria-hidden={true}
            className="absolute right-[-10rem] top-24 h-64 w-64 rounded-full bg-gradient-to-br from-amber-100/35 via-teal-200/30 to-sky-200/30 blur-3xl"
          />
          <div className="relative mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-start lg:gap-16">
              <div className="lg:sticky lg:top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-800">
                  Acompañamiento a medida
                </p>
                <h2 className="mt-4 text-left text-2xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                  No empezamos por una herramienta. Empezamos por tu negocio.
                </h2>
                <p className="mt-4 text-left text-sm leading-relaxed text-zinc-600 sm:text-base">
                  Vemos tu forma de trabajar, detectamos dónde pierdes tiempo o
                  dinero y planteamos una automatización útil, concreta y bajo
                  control — no el mismo sistema para todos.
                </p>
              </div>
              <ol className="space-y-4">
                {tailoredApproach.map((item, index) => (
                  <li
                    key={item.step}
                    className="plexai-card-light group relative flex gap-5 overflow-hidden rounded-2xl border p-6 transition duration-300 hover:-translate-y-0.5 sm:gap-6 sm:p-7"
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-mono text-sm font-semibold text-white shadow-lg ${
                        index === 0
                          ? "bg-gradient-to-br from-sky-500 to-cyan-400 shadow-sky-500/25"
                          : index === 1
                            ? "bg-gradient-to-br from-violet-500 to-fuchsia-400 shadow-violet-500/25"
                            : index === 2
                              ? "bg-gradient-to-br from-emerald-500 to-teal-400 shadow-emerald-500/25"
                              : "bg-gradient-to-br from-amber-500 to-orange-400 shadow-amber-500/25"
                      }`}
                    >
                      {item.step}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-zinc-950 px-4 py-20 sm:px-6 sm:py-28">
          <div
            aria-hidden={true}
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/40 via-violet-300/60 to-transparent"
          />
          <div
            aria-hidden={true}
            className="absolute left-0 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl"
          />
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Por qué PLEXAI"
              title="Automatización práctica, sin perder criterio"
              description="Ayudamos a que el negocio funcione mejor: más productividad, menos carga manual y avances progresivos — sin dejar fuera las decisiones importantes."
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-12">
              <article className="rounded-[1.75rem] border border-violet-400/25 border-orange-400/10 bg-gradient-to-br from-violet-950/50 via-zinc-950 to-orange-950/15 p-8 shadow-2xl shadow-violet-950/30 shadow-orange-950/10 transition duration-300 hover:-translate-y-1 lg:col-span-5 lg:p-10">
                <h3 className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
                  {reasons[0].title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-zinc-300">
                  {reasons[0].body}
                </p>
              </article>
              <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
                {reasons.slice(1).map((reason, index) => (
                  <article
                    key={reason.title}
                    className={`rounded-2xl border border-white/10 bg-gradient-to-br p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 ${
                      index === 0
                        ? "from-sky-950/30 to-zinc-950"
                        : "from-emerald-950/20 to-zinc-950"
                    }`}
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
          </div>
        </section>

        <section className="plexai-section-faq relative overflow-hidden px-4 py-20 text-zinc-950 sm:px-6 sm:py-28">
          <div
            aria-hidden={true}
            className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-sky-300/50 via-amber-200/55 via-violet-300/40 to-emerald-300/40 sm:w-1.5"
          />
          <div className="mx-auto max-w-5xl pl-6 sm:pl-10">
            <SectionTitle
              eyebrow="FAQ"
              title="Preguntas frecuentes"
              description="Respuestas claras antes de pedir la auditoría gratuita."
              theme="light"
            />
            <div className="mt-12 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="plexai-card-light group rounded-2xl border px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-zinc-950">
                    {item.q}
                    <span className="shrink-0 text-sky-700 transition group-open:rotate-180">
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
            className="left-1/3 top-20 h-48 w-64 -translate-x-1/2 opacity-30"
            variant="warm"
          />
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
            Más productividad, menos tareas repetitivas y automatización con IA
            bajo control para negocios que quieren crecer con más orden.
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
