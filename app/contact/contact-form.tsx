"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setFormState("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), notes: notes.trim() }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }
      setFormState("success");
    } catch (err: unknown) {
      setFormState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (formState === "success") {
    return (
      <div className="relative rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[#111111] overflow-hidden p-8 flex flex-col items-center text-center">
        <div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{ background: "linear-gradient(90deg, transparent, rgba(124,91,245,0.7), transparent)" }}
          aria-hidden="true"
        />
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
          style={{
            background: "radial-gradient(circle, rgba(124,91,245,0.15) 0%, transparent 70%)",
            border: "1.5px solid rgba(124,91,245,0.3)",
            boxShadow: "0 0 30px rgba(124,91,245,0.2)",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2 className="font-syne font-extrabold text-[1.4rem] tracking-[-0.03em] text-[#f5f2eb] mb-2">
          Message{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">received!</span>
        </h2>
        <p className="text-[0.85rem] leading-[1.7] text-[#8a8680] max-w-[360px]">
          Parit will personally review your message and get back to you within{" "}
          <span className="text-[#c4bfb8] font-medium">24 hours</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="relative rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[#111111] overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(124,91,245,0.7), transparent)" }}
        aria-hidden="true"
      />
      <div className="px-8 py-8 max-[480px]:px-5">
        <h2 className="font-syne font-extrabold text-[1.1rem] tracking-[-0.02em] text-[#f5f2eb] mb-1">
          Send a message
        </h2>
        <p className="text-[0.82rem] leading-[1.65] text-[#8a8680] mb-6">
          Describe your project and we&apos;ll get back to you with next steps.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid grid-cols-2 gap-4 max-[480px]:grid-cols-1">
            <div>
              <label htmlFor="contact-name" className="block text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#8a8680] mb-1.5">
                Your Name <span className="text-[#7c5bf5]">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Smith"
                required
                disabled={formState === "submitting"}
                className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] text-[#f5f2eb] text-[0.85rem] placeholder-[#4a4642] outline-none transition-all duration-200 focus:border-[rgba(124,91,245,0.5)] focus:bg-[rgba(124,91,245,0.04)] focus:shadow-[0_0_0_3px_rgba(124,91,245,0.08)] disabled:opacity-60"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#8a8680] mb-1.5">
                Email Address <span className="text-[#7c5bf5]">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@company.com"
                required
                disabled={formState === "submitting"}
                className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] text-[#f5f2eb] text-[0.85rem] placeholder-[#4a4642] outline-none transition-all duration-200 focus:border-[rgba(124,91,245,0.5)] focus:bg-[rgba(124,91,245,0.04)] focus:shadow-[0_0_0_3px_rgba(124,91,245,0.08)] disabled:opacity-60"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-notes" className="block text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#8a8680] mb-1.5">
              Tell us about your project
              <span className="ml-1.5 text-[#4a4642] normal-case tracking-normal font-normal">(optional)</span>
            </label>
            <textarea
              id="contact-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Describe what you're building, your timeline, budget range, or any questions..."
              rows={5}
              disabled={formState === "submitting"}
              className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] text-[#f5f2eb] text-[0.85rem] placeholder-[#4a4642] outline-none transition-all duration-200 focus:border-[rgba(124,91,245,0.5)] focus:bg-[rgba(124,91,245,0.04)] focus:shadow-[0_0_0_3px_rgba(124,91,245,0.08)] resize-none disabled:opacity-60"
            />
          </div>

          {formState === "error" && (
            <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-[rgba(220,38,38,0.06)] border border-[rgba(220,38,38,0.2)]">
              <svg className="shrink-0 mt-[1px]" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
              </svg>
              <p className="text-[0.78rem] text-[#f87171] leading-[1.5]">{errorMsg}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={formState === "submitting" || !name.trim() || !email.trim()}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-[0.9rem] bg-[#7c5bf5] text-white text-[0.88rem] font-semibold rounded-full tracking-[0.02em] transition-all duration-300 shadow-[0_0_28px_rgba(124,91,245,0.3)] hover:bg-[#6a4ae0] hover:shadow-[0_0_46px_rgba(124,91,245,0.5)] hover:-translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {formState === "submitting" ? (
              <>
                <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M21 12a9 9 0 11-6.219-8.56" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </>
            )}
          </button>

          <p className="text-center text-[0.68rem] text-[#4a4642] leading-[1.6]">
            No spam, ever. Your details are only used to respond to your inquiry.
          </p>
        </form>
      </div>
    </div>
  );
}
