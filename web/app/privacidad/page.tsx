import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de privacidad — PLEXAI",
  description:
    "Información provisional sobre el tratamiento de datos en solicitudes de auditoría y contacto comercial de PLEXAI.",
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

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <LegalHeader />

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
          Información legal
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Política de privacidad
        </h1>

        <div className="mt-6 rounded-2xl border border-amber-500/25 bg-amber-950/20 px-4 py-3 text-sm leading-relaxed text-amber-100/90">
          <p>
            Esta es una versión provisional con placeholders. Debe completarse con
            los datos reales del titular antes de publicar en producción.
          </p>
        </div>

        <article className="mt-10 space-y-8 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <section>
            <h2 className="text-lg font-semibold text-white">Responsable</h2>
            <p className="mt-3">
              Responsable del tratamiento: [NOMBRE DEL TITULAR O RESPONSABLE].
            </p>
            <p className="mt-2">
              Contacto: [EMAIL DE CONTACTO].
            </p>
            <p className="mt-2">
              Domicilio / datos legales (si aplica): [DOMICILIO / DATOS LEGALES SI
              APLICA].
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">Finalidad</h2>
            <p className="mt-3">
              Los datos personales que nos facilites se tratarán para responder a
              tu solicitud de auditoría gratuita y para el contacto comercial
              relacionado con los servicios de análisis y automatización de
              procesos ofrecidos por PLEXAI.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              Datos que recogemos
            </h2>
            <p className="mt-3">
              A través del formulario de la web podemos recoger, según lo que
              indiques:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-400">
              <li>Nombre</li>
              <li>Email</li>
              <li>Teléfono (opcional)</li>
              <li>Tipo de negocio</li>
              <li>Ciudad (opcional)</li>
              <li>Web o Instagram (opcional)</li>
              <li>Descripción del problema principal o proceso a mejorar</li>
              <li>Área principal de interés</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              Datos que no debes enviar
            </h2>
            <p className="mt-3">
              No envíes datos clínicos, datos de pacientes ni información sensible
              o especialmente protegida a través del formulario. El canal está
              pensado para información general sobre tu negocio y tus procesos
              operativos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              Base legitimadora
            </h2>
            <p className="mt-3">
              El tratamiento se basa en tu consentimiento al enviar el formulario y,
              cuando corresponda, en el interés legítimo de atender solicitudes de
              información y contacto comercial relacionadas con nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">Conservación</h2>
            <p className="mt-3">
              Conservaremos los datos el tiempo necesario para gestionar tu
              solicitud y las comunicaciones derivadas, y después durante los plazos
              legalmente aplicables o hasta que solicites su supresión cuando proceda.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              Encargados y herramientas
            </h2>
            <p className="mt-3">
              Para prestar el servicio podemos apoyarnos en proveedores que actúan
              como encargados del tratamiento o prestadores técnicos, de forma
              genérica:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-400">
              <li>Proveedor de hosting de la web</li>
              <li>Supabase (almacenamiento y gestión de solicitudes)</li>
              <li>n8n (automatización de flujos internos)</li>
              <li>Proveedor de email (notificaciones operativas)</li>
              <li>Google Sheets (registro operativo complementario)</li>
            </ul>
            <p className="mt-3">
              Estos proveedores tratan los datos conforme a sus condiciones y a los
              acuerdos aplicables. No se publican aquí URLs de webhooks ni
              credenciales de acceso.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">Tus derechos</h2>
            <p className="mt-3">
              Puedes ejercer, cuando corresponda, los derechos de acceso,
              rectificación, supresión, oposición, limitación del tratamiento y, si
              aplica, portabilidad de tus datos personales, escribiendo a [EMAIL DE
              CONTACTO].
            </p>
            <p className="mt-3">
              También puedes presentar una reclamación ante la autoridad de control
              competente si consideras que el tratamiento no se ajusta a la
              normativa vigente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">Actualizaciones</h2>
            <p className="mt-3">
              Esta política puede actualizarse para reflejar cambios legales o
              operativos. La versión publicada en la web será la aplicable en cada
              momento.
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
