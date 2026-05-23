import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso legal — PLEXAI",
  description:
    "Información sobre el titular, el ámbito y el uso de la web de PLEXAI (versión MVP).",
};

function LegalHeader() {
  return (
    <header className="border-b border-white/10 bg-zinc-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-[0.24em] text-white"
        >
          PLEXAI
        </Link>
        <Link
          href="/"
          className="text-xs text-zinc-400 transition-colors hover:text-white sm:text-sm"
        >
          Volver a la landing
        </Link>
      </div>
    </header>
  );
}

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <LegalHeader />

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
          Información legal
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Aviso legal
        </h1>

        <div className="mt-6 rounded-2xl border border-amber-500/25 bg-amber-950/20 px-4 py-3 text-sm leading-relaxed text-amber-100/90">
          <p>
            Texto informativo de versión MVP. No constituye asesoría legal
            definitiva ni garantía de cumplimiento normativo completo.
          </p>
        </div>

        <article className="mt-10 space-y-8 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <section>
            <h2 className="text-lg font-semibold text-white">
              Datos identificativos
            </h2>
            <p className="mt-3">
              Titular / responsable: Luis Alejandro Hernandez de Andrade.
            </p>
            <p className="mt-2">
              Forma jurídica: autónomo / persona física profesional.
            </p>
            <p className="mt-2">DNI/NIF: 17515047H.</p>
            <p className="mt-2">
              Domicilio: no publicado en esta versión MVP.
            </p>
            <p className="mt-2">
              Email de contacto:{" "}
              <a
                href="mailto:l.a.hernandez.da@gmail.com"
                className="text-violet-300 transition-colors hover:text-violet-200"
              >
                l.a.hernandez.da@gmail.com
              </a>
              .
            </p>
            <p className="mt-2">Ámbito geográfico: España.</p>
            <p className="mt-2">
              Dominio previsto del proyecto: plexai.es (email profesional del
              dominio pendiente de configuración).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              Naturaleza de PLEXAI
            </h2>
            <p className="mt-3">
              PLEXAI es una marca y proyecto comercial especializado en
              automatización inteligente y análisis de procesos para negocios,
              con orientación principalmente B2B, sin excluir otros contactos
              interesados en los servicios descritos.
            </p>
            <p className="mt-3">
              PLEXAI no es un servicio clínico, sanitario ni de atención a la
              salud. La información y los canales de contacto de esta web no
              sustituyen el criterio profesional, legal ni sanitario que
              corresponda a cada usuario o negocio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              Objeto de la web
            </h2>
            <p className="mt-3">
              Este sitio web tiene carácter informativo y comercial. Su finalidad
              es presentar los servicios de PLEXAI relacionados con el análisis
              de procesos y la automatización útil de tareas repetitivas en
              negocios de servicios.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              Sobre los servicios de PLEXAI
            </h2>
            <p className="mt-3">
              PLEXAI ofrece servicios de análisis y automatización de procesos
              orientados a ordenar solicitudes, contactos y tareas operativas.
              Las propuestas se adaptan al contexto de cada negocio y se
              implementan de forma progresiva, según lo acordado en cada caso.
            </p>
            <p className="mt-3">
              La información publicada no constituye asesoramiento legal,
              sanitario ni financiero. Las decisiones relevantes siguen bajo
              responsabilidad del cliente y su equipo.
            </p>
            <p className="mt-3">
              En esta versión MVP no se prometen funcionalidades, integraciones
              ni resultados que no estén implementados o acordados expresamente
              con el cliente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              Datos que no debes enviar
            </h2>
            <p className="mt-3">
              No envíes por los canales de esta web datos clínicos, datos de
              pacientes, datos de salud, información especialmente sensible ni
              datos de terceros sin la autorización correspondiente. Los
              formularios y medios de contacto están pensados para información
              general sobre tu negocio y tus procesos operativos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              Sin garantía de resultados
            </h2>
            <p className="mt-3">
              Los contenidos de la web no garantizan resultados concretos ni
              mejoras automáticas. Cada caso depende del proceso analizado, de
              la adopción del equipo y de las condiciones operativas del
              negocio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              Uso correcto de la información
            </h2>
            <p className="mt-3">
              El usuario se compromete a hacer un uso lícito de la web y de los
              canales de contacto, sin introducir contenidos ilícitos, ofensivos
              o que vulneren derechos de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              Propiedad intelectual
            </h2>
            <p className="mt-3">
              Los textos, diseños, marcas y elementos visuales de esta web
              están protegidos por la normativa aplicable. Queda prohibida su
              reproducción o distribución sin autorización expresa del titular,
              salvo los usos permitidos por la ley.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              Enlaces y responsabilidad
            </h2>
            <p className="mt-3">
              PLEXAI no se hace responsable del contenido de sitios externos a
              los que se pueda acceder mediante enlaces, ni de los daños
              derivados del uso de la información publicada en esta web más allá
              de lo exigido por la normativa aplicable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">Legislación</h2>
            <p className="mt-3">
              La relación con los usuarios de esta web se regirá por la
              normativa española y europea aplicable en cada momento, sin
              perjuicio de las normas imperativas que correspondan al usuario.
            </p>
          </section>
        </article>

        <p className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
          <Link
            href="/"
            className="font-medium text-violet-300 transition-colors hover:text-violet-200"
          >
            ← Volver a la landing
          </Link>
        </p>
      </main>
    </div>
  );
}
