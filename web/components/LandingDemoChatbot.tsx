"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
  businessTypeOptions,
  CTA_AUDIT,
  CTA_RESTART,
  FLOATING_BUTTON_LABEL,
  goalOptions,
  QUESTION_BUSINESS,
  QUESTION_GOAL,
  QUESTION_SITUATION,
  situationOptions,
  WELCOME_MESSAGE,
  WIDGET_SUBTITLE,
  WIDGET_TITLE,
} from "@/lib/landing-demo-chatbot/content";
import {
  getOptionLabel,
  getRecommendations,
} from "@/lib/landing-demo-chatbot/get-recommendations";
import type {
  BusinessTypeId,
  ChatMessage,
  ChatStep,
  GoalId,
  SituationId,
} from "@/lib/landing-demo-chatbot/types";

function createMessage(role: ChatMessage["role"], content: string): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    content,
  };
}

function getInitialMessages(): ChatMessage[] {
  return [
    createMessage("bot", WELCOME_MESSAGE),
    createMessage("bot", QUESTION_SITUATION),
  ];
}

export function LandingDemoChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ChatStep>("situation");
  const [messages, setMessages] = useState<ChatMessage[]>(getInitialMessages);
  const [situation, setSituation] = useState<SituationId | null>(null);
  const [business, setBusiness] = useState<BusinessTypeId | null>(null);
  const [goal, setGoal] = useState<GoalId | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages, step, scrollToBottom]);

  const resetConversation = useCallback(() => {
    setStep("situation");
    setSituation(null);
    setBusiness(null);
    setGoal(null);
    setMessages(getInitialMessages());
  }, []);

  const handleSituationSelect = (id: SituationId) => {
    const label = getOptionLabel(situationOptions, id);
    setSituation(id);
    setMessages((prev) => [
      ...prev,
      createMessage("user", label),
      createMessage("bot", QUESTION_BUSINESS),
    ]);
    setStep("business");
  };

  const handleBusinessSelect = (id: BusinessTypeId) => {
    const label = getOptionLabel(businessTypeOptions, id);
    setBusiness(id);
    setMessages((prev) => [
      ...prev,
      createMessage("user", label),
      createMessage("bot", QUESTION_GOAL),
    ]);
    setStep("goal");
  };

  const handleGoalSelect = (id: GoalId) => {
    const label = getOptionLabel(goalOptions, id);
    setGoal(id);
    setMessages((prev) => [...prev, createMessage("user", label)]);
    setStep("results");
  };

  const handleAuditClick = () => {
    setIsOpen(false);
    const target = document.getElementById("auditoria");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", CTA_AUDIT.href);
    }
  };

  const recommendations =
    situation && business && goal
      ? getRecommendations({ situation, business, goal })
      : null;

  return (
    <div
      className="fixed bottom-4 right-4 z-[60] sm:bottom-6 sm:right-6"
      aria-live="polite"
    >
      {isOpen ? (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="plexai-demo-chat-title"
          className="flex w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-[1.75rem] border border-white/15 bg-zinc-950/95 shadow-2xl shadow-violet-950/50 backdrop-blur-xl sm:w-[400px]"
          style={{ maxHeight: "min(640px, calc(100vh - 2rem))" }}
        >
          <header className="relative border-b border-white/10 bg-gradient-to-r from-violet-950/80 via-zinc-950 to-fuchsia-950/40 px-5 py-4">
            <div
              aria-hidden={true}
              className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-violet-200/60 to-transparent"
            />
            <div className="flex items-start justify-between gap-3">
              <div>
                <p
                  id="plexai-demo-chat-title"
                  className="text-sm font-semibold text-white"
                >
                  {WIDGET_TITLE}
                </p>
                <p className="mt-0.5 text-xs text-zinc-400">{WIDGET_SUBTITLE}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar asistente"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:border-violet-300/40 hover:bg-white/10 hover:text-white"
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
          </header>

          <div
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            style={{ minHeight: "280px" }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "rounded-br-md bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-900/30"
                      : "rounded-bl-md border border-white/10 bg-white/[0.06] text-zinc-200"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {step === "situation" ? (
              <OptionGroup
                options={situationOptions}
                onSelect={handleSituationSelect}
              />
            ) : null}

            {step === "business" ? (
              <OptionGroup
                options={businessTypeOptions}
                onSelect={handleBusinessSelect}
              />
            ) : null}

            {step === "goal" ? (
              <OptionGroup options={goalOptions} onSelect={handleGoalSelect} />
            ) : null}

            {step === "results" && recommendations ? (
              <div className="space-y-3 pt-1">
                <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 px-3.5 py-3 text-sm leading-relaxed text-zinc-100">
                  {recommendations.intro}
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-3.5 py-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-200">
                    Ideas orientativas
                  </p>
                  <ul className="mt-3 space-y-2">
                    {recommendations.ideas.map((idea) => (
                      <li
                        key={idea}
                        className="flex items-start gap-2 text-sm leading-relaxed text-zinc-300"
                      >
                        <span
                          aria-hidden={true}
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300"
                        />
                        {idea}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-amber-300/20 bg-amber-300/5 px-3.5 py-3 text-xs leading-relaxed text-zinc-400">
                  {recommendations.disclaimer}
                </div>

                <div className="flex flex-col gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleAuditClick}
                    className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:bg-violet-100"
                  >
                    {CTA_AUDIT.label}
                  </button>
                  <button
                    type="button"
                    onClick={resetConversation}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-violet-200/40 hover:bg-white/10 hover:text-white"
                  >
                    {CTA_RESTART}
                  </button>
                </div>
              </div>
            ) : null}

            <div ref={messagesEndRef} />
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir asistente demo de PLEXAI"
          aria-expanded={isOpen}
          className="group inline-flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full border border-violet-300/25 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-violet-950/40 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-violet-900/50 sm:px-5"
        >
          <span
            aria-hidden={true}
            className="plexai-pulse-dot flex h-2 w-2 shrink-0 rounded-full bg-white/90"
          />
          <span className="truncate">{FLOATING_BUTTON_LABEL}</span>
        </button>
      )}
    </div>
  );
}

function OptionGroup<T extends string>({
  options,
  onSelect,
}: {
  options: { id: T; label: string }[];
  onSelect: (id: T) => void;
}) {
  return (
    <div className="flex flex-col gap-2 pt-1">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => onSelect(option.id)}
          className="rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-left text-sm leading-snug text-zinc-200 transition hover:-translate-y-0.5 hover:border-violet-300/35 hover:bg-violet-400/10 hover:text-white"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
