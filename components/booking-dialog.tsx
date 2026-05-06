"use client";

import { useState, useEffect } from "react";
import { useBooking } from "@/lib/booking-context";

type FormState = "idle" | "submitting" | "success" | "error";

export default function BookingDialog() {
  const { isOpen, closeDialog } = useBooking();
  const [closing, setClosing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Reset form when dialog opens
  useEffect(() => {
    if (isOpen) {
      setClosing(false);
      setName("");
      setEmail("");
      setNotes("");
      setFormState("idle");
      setErrorMsg("");
    }
  }, [isOpen]);

  const dismiss = () => {
    setClosing(true);
    setTimeout(() => {
      closeDialog();
      setClosing(false);
    }, 380);
  };

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

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[9500] flex items-center justify-center px-4 transition-opacity duration-380 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
      style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(10px)" }}
      onClick={(e) => e.target === e.currentTarget && dismiss()}
    >
      {/* Card */}
      <div
        className={`relative w-full max-w-[500px] rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[#111111] shadow-[0_40px_100px_rgba(0,0,0,0.7),0_0_0_1px_rgba(124,91,245,0.1)] overflow-hidden transition-all duration-380 ${
          closing
            ? "opacity-0 scale-95 translate-y-3"
            : "opacity-100 scale-100 translate-y-0"
        }`}
        style={{
          animation: closing ? "none" : "bookingDialogIn 0.45s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        {/* Top purple glow line */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(124,91,245,0.7), transparent)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -top-14 left-1/2 -translate-x-1/2 w-[300px] h-[120px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(124,91,245,0.14) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] text-[#8a8680] hover:text-[#f5f2eb] hover:bg-[rgba(255,255,255,0.1)] transition-all duration-200 z-10"
          aria-label="Close"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="px-8 pt-8 pb-8">
          {formState === "success" ? (
            /* ── Thank you state ── */
            <div className="flex flex-col items-center text-center py-4">
              {/* Animated checkmark */}
              <div
                className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6"
                style={{
                  background: "radial-gradient(circle, rgba(124,91,245,0.15) 0%, transparent 70%)",
                  border: "1.5px solid rgba(124,91,245,0.3)",
                  boxShadow: "0 0 40px rgba(124,91,245,0.2)",
                  animation: "successPop 0.5s cubic-bezier(0.34,1.56,0.64,1) both",
                }}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ animation: "checkDraw 0.4s ease 0.2s both" }}
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" strokeDasharray="20" strokeDashoffset="0" />
                </svg>
              </div>

              {/* Headline */}
              <h2
                className="font-syne font-extrabold text-[1.5rem] leading-[1.2] tracking-[-0.03em] text-[#f5f2eb] mb-2"
                style={{ animation: "fadeInUp 0.4s ease 0.25s both" }}
              >
                Request{" "}
                <span className="font-playfair italic font-normal text-[#a78bfa]">Received!</span>
              </h2>
              <p
                className="text-[0.85rem] leading-[1.7] text-[#8a8680] mb-8 max-w-[340px]"
                style={{ animation: "fadeInUp 0.4s ease 0.35s both" }}
              >
                Thanks for reaching out. Parit will personally review your request and get back to you within{" "}
                <span className="text-[#c4bfb8] font-medium">24 hours</span>.
              </p>

              {/* Founder note */}
              <div
                className="w-full flex items-start gap-3 mb-7 px-4 py-3 rounded-xl bg-[rgba(124,91,245,0.06)] border border-[rgba(124,91,245,0.12)]"
                style={{ animation: "fadeInUp 0.4s ease 0.45s both" }}
              >
                <img
                  src="/parit-bhardwaj-orchix-founder.jpg"
                  alt="Parit Bhardwaj"
                  className="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-[rgba(124,91,245,0.4)]"
                />
                <div className="text-left">
                  <p className="text-[0.78rem] leading-[1.6] text-[#c4bfb8] italic">
                    &ldquo;I review every inquiry personally — you&apos;ll hear from me, not a bot.&rdquo;
                  </p>
                  <p className="mt-1 text-[0.7rem] font-semibold text-[#a78bfa] tracking-[0.05em]">
                    Parit Bhardwaj &mdash; Founder, OrchiX
                  </p>
                </div>
              </div>

              {/* What happens next */}
              <div
                className="w-full space-y-3 mb-7 text-left"
                style={{ animation: "fadeInUp 0.4s ease 0.55s both" }}
              >
                {[
                  { step: "1", text: "Parit reviews your request and project scope" },
                  { step: "2", text: "You get a calendar link to pick a time that works" },
                  { step: "3", text: "30-min discovery call — no pitch, just real answers" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-6 h-6 min-w-[24px] rounded-full bg-[rgba(124,91,245,0.15)] border border-[rgba(124,91,245,0.25)] flex items-center justify-center">
                      <span className="text-[0.65rem] font-bold text-[#a78bfa]">{item.step}</span>
                    </div>
                    <p className="text-[0.8rem] text-[#c4bfb8] leading-[1.6] pt-[2px]">{item.text}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={dismiss}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-[0.9rem] rounded-full bg-[rgba(124,91,245,0.12)] border border-[rgba(124,91,245,0.25)] text-[#a78bfa] text-[0.85rem] font-semibold tracking-[0.02em] transition-all duration-300 hover:bg-[rgba(124,91,245,0.2)] hover:border-[rgba(124,91,245,0.4)]"
                style={{ animation: "fadeInUp 0.4s ease 0.65s both" }}
              >
                Close
              </button>
            </div>
          ) : (
            /* ── Form state ── */
            <>
              {/* Headline */}
              <h2 className="font-syne font-extrabold text-[1.3rem] leading-[1.25] tracking-[-0.03em] text-[#f5f2eb] mb-2">
                Let&apos;s talk about{" "}
                <span className="font-playfair italic font-normal text-[#a78bfa] text-[1.7rem] leading-[1]">
                  your project.
                </span>
              </h2>
              <p className="text-[0.83rem] leading-[1.65] text-[#8a8680] mb-6">
                Fill in the details below and Parit will personally reach out within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#8a8680] mb-1.5"
                  >
                    Your Name <span className="text-[#7c5bf5]">*</span>
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Smith"
                    required
                    disabled={formState === "submitting"}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] text-[#f5f2eb] text-[0.88rem] placeholder-[#4a4642] outline-none transition-all duration-200 focus:border-[rgba(124,91,245,0.5)] focus:bg-[rgba(124,91,245,0.04)] focus:shadow-[0_0_0_3px_rgba(124,91,245,0.08)] disabled:opacity-60"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="booking-email"
                    className="block text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#8a8680] mb-1.5"
                  >
                    Email Address <span className="text-[#7c5bf5]">*</span>
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    required
                    disabled={formState === "submitting"}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] text-[#f5f2eb] text-[0.88rem] placeholder-[#4a4642] outline-none transition-all duration-200 focus:border-[rgba(124,91,245,0.5)] focus:bg-[rgba(124,91,245,0.04)] focus:shadow-[0_0_0_3px_rgba(124,91,245,0.08)] disabled:opacity-60"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label
                    htmlFor="booking-notes"
                    className="block text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#8a8680] mb-1.5"
                  >
                    Tell us about your project
                    <span className="ml-1.5 text-[#4a4642] normal-case tracking-normal font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="booking-notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Briefly describe what you're building, your timeline, or any questions you have..."
                    rows={3}
                    disabled={formState === "submitting"}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] text-[#f5f2eb] text-[0.88rem] placeholder-[#4a4642] outline-none transition-all duration-200 focus:border-[rgba(124,91,245,0.5)] focus:bg-[rgba(124,91,245,0.04)] focus:shadow-[0_0_0_3px_rgba(124,91,245,0.08)] resize-none disabled:opacity-60"
                  />
                </div>

                {/* Error message */}
                {formState === "error" && (
                  <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-[rgba(220,38,38,0.06)] border border-[rgba(220,38,38,0.2)]">
                    <svg className="shrink-0 mt-[1px]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                    </svg>
                    <p className="text-[0.8rem] text-[#f87171] leading-[1.5]">{errorMsg}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === "submitting" || !name.trim() || !email.trim()}
                  className="group/submit w-full inline-flex items-center justify-center gap-2 px-6 py-[0.9rem] bg-[#7c5bf5] text-white text-[0.88rem] font-semibold rounded-full tracking-[0.02em] transition-all duration-300 shadow-[0_0_30px_rgba(124,91,245,0.3)] hover:bg-[#6a4ae0] hover:shadow-[0_0_50px_rgba(124,91,245,0.5)] hover:-translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_0_30px_rgba(124,91,245,0.3)] font-space-grotesk"
                >
                  {formState === "submitting" ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <path d="M21 12a9 9 0 11-6.219-8.56" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Book My Discovery Call
                      <svg
                        className="transition-transform duration-300 group-hover/submit:translate-x-[3px]"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-[0.72rem] text-[#4a4642] leading-[1.6]">
                  No spam, ever. Your details stay private and are only used to respond to your inquiry.
                </p>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes bookingDialogIn {
          from { opacity: 0; transform: scale(0.93) translateY(18px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes successPop {
          from { opacity: 0; transform: scale(0.6); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
