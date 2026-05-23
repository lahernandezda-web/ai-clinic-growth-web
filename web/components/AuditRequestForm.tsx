"use client";

import Link from "next/link";
import { FormEvent, useCallback, useState } from "react";

const BUSINESS_TYPE_OPTIONS = [
  { value: "dental_clinic", label: "Clínica dental" },
  { value: "podiatry", label: "Podología" },
  { value: "aesthetic_clinic", label: "Clínica estética" },
  {
    value: "physiotherapy_osteopathy",
    label: "Fisioterapia / osteopatía",
  },
  { value: "private_clinic", label: "Clínica privada" },
  { value: "academy_training", label: "Academia / formación" },
  { value: "other_local_business", label: "Otro negocio local" },
] as const;

const IMPROVEMENT_AREA_OPTIONS = [
  { value: "answer_questions", label: "Responder consultas" },
  { value: "capture_leads", label: "Captar más leads" },
  { value: "organize_contacts", label: "Organizar contactos" },
  { value: "follow_up", label: "Hacer seguimiento" },
  {
    value: "automate_internal_tasks",
    label: "Automatizar tareas internas",
  },
  { value: "connect_tools", label: "Conectar herramientas" },
  { value: "not_sure", label: "No lo tengo claro todavía" },
] as const;

type SubmitUiState = "idle" | "submitting" | "success";

const INITIAL_FIELDS = {
  name: "",
  email: "",
  phone: "",
  business_type: "",
  city: "",
  website_or_instagram: "",
  main_problem: "",
  improvement_area: "",
  consent: false,
};

const inputClassName =
  "w-full rounded-lg border border-white/15 bg-zinc-950/60 px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30";

export function AuditRequestForm() {
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [submitUi, setSubmitUi] = useState<SubmitUiState>("idle");
  const [validationMessage, setValidationMessage] = useState<string | null>(
    null,
  );
  const [submitError, setSubmitError] = useState<string | null>(null);

  const updateField = useCallback(
    <K extends keyof typeof INITIAL_FIELDS>(key: K, value: (typeof INITIAL_FIELDS)[K]) => {
      setFields((prev) => ({ ...prev, [key]: value }));
      setValidationMessage(null);
      setSubmitError(null);
    },
    [],
  );

  const validate = useCallback(() => {
    if (!fields.name.trim()) {
      return "Indica tu nombre.";
    }
    if (!fields.email.trim()) {
      return "Indica tu email.";
    }
    if (!fields.business_type) {
      return "Selecciona el tipo de negocio.";
    }
    if (!fields.main_problem.trim()) {
      return "Describe qué proceso te gustaría mejorar.";
    }
    if (!fields.improvement_area) {
      return "Selecciona el área principal de interés.";
    }
    if (!fields.consent) {
      return "Debes aceptar el consentimiento de contacto para continuar.";
    }
    return null;
  }, [fields]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    const v = validate();
    if (v) {
      setValidationMessage(v);
      return;
    }
    setValidationMessage(null);

    const payload = {
      name: fields.name.trim(),
      email: fields.email.trim(),
      ...(fields.phone.trim() ? { phone: fields.phone.trim() } : {}),
      business_type: fields.business_type,
      ...(fields.city.trim() ? { city: fields.city.trim() } : {}),
      ...(fields.website_or_instagram.trim()
        ? { website_or_instagram: fields.website_or_instagram.trim() }
        : {}),
      main_problem: fields.main_problem.trim(),
      improvement_area: fields.improvement_area,
      consent: true as const,
      metadata: { form: "landing_audit_request" },
    };

    setSubmitUi("submitting");

    try {
      const res = await fetch("/api/audit-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setSubmitError(
          "No se pudo enviar la solicitud en este momento. Inténtalo de nuevo en unos minutos.",
        );
        setSubmitUi("idle");
        return;
      }

      setSubmitUi("success");
      setFields({ ...INITIAL_FIELDS });
    } catch {
      setSubmitError(
        "No se pudo enviar la solicitud en este momento. Inténtalo de nuevo en unos minutos.",
      );
      setSubmitUi("idle");
    }
  };

  if (submitUi === "success") {
    return (
      <div
        role="status"
        className="mx-auto mt-10 max-w-xl rounded-2xl border border-emerald-500/35 bg-emerald-950/30 px-6 py-8 text-center"
      >
        <p className="text-base font-medium leading-relaxed text-emerald-100/95 sm:text-lg">
          Solicitud recibida. Te contactaremos para revisar tu caso y valorar
          si una automatización puede ayudarte.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 max-w-xl text-left">
      {submitUi === "submitting" ? (
        <p
          className="mb-6 text-center text-sm font-medium text-violet-200/95"
          aria-live="polite"
        >
          Enviando solicitud...
        </p>
      ) : null}

      {validationMessage ? (
        <p
          className="mb-4 rounded-lg border border-amber-500/30 bg-amber-950/25 px-3 py-2 text-sm text-amber-100/90"
          role="alert"
        >
          {validationMessage}
        </p>
      ) : null}

      {submitError ? (
        <p
          className="mb-4 rounded-lg border border-red-500/30 bg-red-950/25 px-3 py-2 text-sm text-red-100/90"
          role="alert"
        >
          {submitError}
        </p>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="audit-name" className="block text-sm text-zinc-300">
            Nombre <span className="text-violet-400">*</span>
          </label>
          <input
            id="audit-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            disabled={submitUi === "submitting"}
            value={fields.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={`${inputClassName} mt-1.5`}
          />
        </div>

        <div>
          <label htmlFor="audit-email" className="block text-sm text-zinc-300">
            Email <span className="text-violet-400">*</span>
          </label>
          <input
            id="audit-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={submitUi === "submitting"}
            value={fields.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={`${inputClassName} mt-1.5`}
          />
        </div>

        <div>
          <label htmlFor="audit-phone" className="block text-sm text-zinc-300">
            Teléfono
          </label>
          <input
            id="audit-phone"
            name="phone"
            type="text"
            autoComplete="tel"
            disabled={submitUi === "submitting"}
            value={fields.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={`${inputClassName} mt-1.5`}
            placeholder="Opcional"
          />
        </div>

        <div>
          <label
            htmlFor="audit-business-type"
            className="block text-sm text-zinc-300"
          >
            Tipo de negocio <span className="text-violet-400">*</span>
          </label>
          <select
            id="audit-business-type"
            name="business_type"
            required
            disabled={submitUi === "submitting"}
            value={fields.business_type}
            onChange={(e) => updateField("business_type", e.target.value)}
            className={`${inputClassName} mt-1.5`}
          >
            <option value="">Selecciona una opción</option>
            {BUSINESS_TYPE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="audit-city" className="block text-sm text-zinc-300">
            Ciudad
          </label>
          <input
            id="audit-city"
            name="city"
            type="text"
            disabled={submitUi === "submitting"}
            value={fields.city}
            onChange={(e) => updateField("city", e.target.value)}
            className={`${inputClassName} mt-1.5`}
            placeholder="Opcional"
          />
        </div>

        <div>
          <label
            htmlFor="audit-website"
            className="block text-sm text-zinc-300"
          >
            Web o Instagram
          </label>
          <input
            id="audit-website"
            name="website_or_instagram"
            type="text"
            disabled={submitUi === "submitting"}
            value={fields.website_or_instagram}
            onChange={(e) =>
              updateField("website_or_instagram", e.target.value)
            }
            className={`${inputClassName} mt-1.5`}
            placeholder="Opcional"
          />
        </div>

        <div>
          <label
            htmlFor="audit-main-problem"
            className="block text-sm text-zinc-300"
          >
            ¿Qué proceso te gustaría mejorar?{" "}
            <span className="text-violet-400">*</span>
          </label>
          <textarea
            id="audit-main-problem"
            name="main_problem"
            required
            rows={4}
            disabled={submitUi === "submitting"}
            value={fields.main_problem}
            onChange={(e) => updateField("main_problem", e.target.value)}
            className={`${inputClassName} mt-1.5 min-h-[104px] resize-y`}
          />
          <p className="mt-2 text-xs leading-relaxed text-zinc-500">
            No incluyas datos clínicos ni información de pacientes.
          </p>
        </div>

        <div>
          <label
            htmlFor="audit-improvement-area"
            className="block text-sm text-zinc-300"
          >
            Área principal de interés{" "}
            <span className="text-violet-400">*</span>
          </label>
          <select
            id="audit-improvement-area"
            name="improvement_area"
            required
            disabled={submitUi === "submitting"}
            value={fields.improvement_area}
            onChange={(e) => updateField("improvement_area", e.target.value)}
            className={`${inputClassName} mt-1.5`}
          >
            <option value="">Selecciona una opción</option>
            {IMPROVEMENT_AREA_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-950/40 px-3 py-3">
          <input
            id="audit-consent"
            name="consent"
            type="checkbox"
            required
            disabled={submitUi === "submitting"}
            checked={fields.consent}
            onChange={(e) => updateField("consent", e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 rounded border-white/25 bg-zinc-900 text-violet-600 focus:ring-violet-500/40"
          />
          <label
            htmlFor="audit-consent"
            className="text-sm leading-relaxed text-zinc-300"
          >
            <span className="text-violet-400">*</span> He leído y acepto la{" "}
            <Link
              href="/privacidad"
              className="font-medium text-violet-300 underline decoration-violet-400/40 underline-offset-2 transition-colors hover:text-violet-200"
            >
              política de privacidad
            </Link>
            . Los datos se usarán para responder a mi solicitud de auditoría
            gratuita y contacto relacionado. No incluyas datos clínicos, de
            pacientes ni información sensible.
          </label>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={submitUi === "submitting"}
            className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-lg transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[220px]"
          >
            Enviar solicitud
          </button>
          <p className="mt-3 text-xs text-zinc-500">
            Solo usamos estos datos para valorar tu solicitud. Sin datos
            clínicos ni información de pacientes.
          </p>
        </div>
      </form>
    </div>
  );
}
