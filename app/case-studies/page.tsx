"use client";

import { useState } from "react";
import Link from "next/link";

type FormState = "idle" | "submitting" | "success" | "error";

export default function CaseStudiesPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          notes: "Requested to see case studies via /case-studies page.",
        }),
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

  return (
    <main className="flex-1 bg-[#0a0a0a] text-[#f5f2eb] flex flex-col">
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-6 pt-32 pb-16">
        <div className="w-full max-w-[640px]">

          {/* Top badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(124,91,245,0.3)] bg-[rgba(124,91,245,0.07)]">
              <span className="w-[6px] h-[6px] rounded-full bg-[#7c5bf5] animate-[blink_2s_ease-in-out_infinite]" aria-hidden="true" />
              <span className="text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-[#a78bfa]">
                Page in progress
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mb-6">
            <h1
              className="font-syne font-extrabold tracking-[-0.04em] leading-[1.1] text-[#f5f2eb] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              We&apos;re crafting this{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">right now.</span>
            </h1>
            <p className="text-[0.92rem] leading-[1.8] text-[#8a8680] max-w-[480px] mx-auto">
              Our case studies page is currently being built. Every project we&apos;ve delivered deserves to be showcased properly — and we&apos;re making sure it is.
            </p>
          </div>

          {/* Decorative progress bar */}
          <div className="flex justify-center mb-10">
            <div className="w-[200px] h-[3px] rounded-full bg-[rgba(255,255,255,0.05)] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: "65%",
                  background: "linear-gradient(90deg, #7c5bf5, #a78bfa)",
                  boxShadow: "0 0 10px rgba(124,91,245,0.5)",
                }}
              />
            </div>
          </div>

          {/* What we've built strip */}
          <div className="grid grid-cols-3 gap-3 mb-10">
            {[
              { label: "Projects Delivered", value: "12+" },
              { label: "Industries Served", value: "6+" },
              { label: "Client Satisfaction", value: "100%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-[14px] border border-[rgba(255,255,255,0.07)] bg-[rgba(14,14,14,0.9)] px-4 py-4 text-center"
              >
                <p
                  className="font-syne font-extrabold tracking-[-0.03em] text-[#a78bfa] leading-none mb-1"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)" }}
                >
                  {stat.value}
                </p>
                <p className="text-[0.7rem] text-[#8a8680] leading-[1.4]">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Card */}
          <div className="relative rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[#111111] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
            {/* Top glow line */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{ background: "linear-gradient(90deg, transparent, rgba(124,91,245,0.7), transparent)" }}
              aria-hidden="true"
            />

            <div className="px-8 py-8 max-[480px]:px-5 max-[480px]:py-6">
              {formState === "success" ? (
                /* ── Success state ── */
                <div className="flex flex-col items-center text-center py-4">
                  <div
                    className="relative w-16 h-16 rounded-full flex items-center justify-center mb-5"
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
                    We&apos;ll be in touch{" "}
                    <span className="font-playfair italic font-normal text-[#a78bfa]">shortly.</span>
                  </h2>
                  <p className="text-[0.85rem] leading-[1.7] text-[#8a8680] max-w-[360px]">
                    Parit will personally reach out within <span className="text-[#c4bfb8] font-medium">24 hours</span> with a walkthrough of our work and real client results.
                  </p>
                  <div className="mt-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-[rgba(124,91,245,0.06)] border border-[rgba(124,91,245,0.12)] text-left w-full">
                    <img
                      src="/parit-bhardwaj-orchix-founder.jpg"
                      alt="Parit Bhardwaj"
                      className="w-9 h-9 rounded-full object-cover shrink-0 border-2 border-[rgba(124,91,245,0.4)]"
                    />
                    <p className="text-[0.77rem] leading-[1.6] text-[#c4bfb8] italic">
                      &ldquo;I&apos;ll show you exactly what we&apos;ve built — real demos, real results.&rdquo;
                    </p>
                  </div>
                  <Link
                    href="/"
                    className="mt-6 inline-flex items-center gap-2 px-6 py-[0.85rem] rounded-full bg-[rgba(124,91,245,0.1)] border border-[rgba(124,91,245,0.22)] text-[#a78bfa] text-[0.83rem] font-semibold tracking-[0.02em] transition-all duration-300 hover:bg-[rgba(124,91,245,0.18)] no-underline"
                  >
                    Back to home
                  </Link>
                </div>
              ) : (
                /* ── Form state ── */
                <>
                  <h2 className="font-syne font-extrabold text-[1.15rem] tracking-[-0.02em] text-[#f5f2eb] mb-1">
                    Want to see our work?
                  </h2>
                  <p className="text-[0.82rem] leading-[1.65] text-[#8a8680] mb-6">
                    Leave your details and Parit will personally reach out — with a private walkthrough of our case studies, demos, and client results. No pitch, just proof.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                    <div className="grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
                      <div>
                        <label htmlFor="cs-name" className="block text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#8a8680] mb-1.5">
                          Your Name <span className="text-[#7c5bf5]">*</span>
                        </label>
                        <input
                          id="cs-name"
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
                        <label htmlFor="cs-email" className="block text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#8a8680] mb-1.5">
                          Email Address <span className="text-[#7c5bf5]">*</span>
                        </label>
                        <input
                          id="cs-email"
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
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-[0.9rem] bg-[#7c5bf5] text-white text-[0.85rem] font-semibold rounded-full tracking-[0.02em] transition-all duration-300 shadow-[0_0_28px_rgba(124,91,245,0.3)] hover:bg-[#6a4ae0] hover:shadow-[0_0_46px_rgba(124,91,245,0.5)] hover:-translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 font-space-grotesk"
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
                          Request a Private Walkthrough
                          <svg className="transition-transform duration-300 group-hover:translate-x-[3px]" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Divider */}
                  <div className="flex items-center gap-3 my-5">
                    <div className="flex-1 h-px bg-[rgba(255,255,255,0.06)]" />
                    <span className="text-[0.68rem] text-[#4a4642] uppercase tracking-[0.1em]">or</span>
                    <div className="flex-1 h-px bg-[rgba(255,255,255,0.06)]" />
                  </div>

                  {/* Connect options */}
                  <div className="grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
                    <a
                      href="mailto:orchix.technologies@gmail.com"
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(124,91,245,0.25)] hover:bg-[rgba(124,91,245,0.04)] transition-all duration-300 no-underline"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[rgba(124,91,245,0.1)] border border-[rgba(124,91,245,0.18)] shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[0.72rem] font-semibold text-[#c4bfb8] leading-none mb-0.5">Email us directly</p>
                        <p className="text-[0.65rem] text-[#8a8680] leading-none">Get a reply within 24h</p>
                      </div>
                    </a>
                    <Link
                      href="/"
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(124,91,245,0.25)] hover:bg-[rgba(124,91,245,0.04)] transition-all duration-300 no-underline"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[rgba(124,91,245,0.1)] border border-[rgba(124,91,245,0.18)] shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[0.72rem] font-semibold text-[#c4bfb8] leading-none mb-0.5">Book a discovery call</p>
                        <p className="text-[0.65rem] text-[#8a8680] leading-none">30 min, no pitch</p>
                      </div>
                    </Link>
                  </div>

                  <p className="text-center text-[0.68rem] text-[#4a4642] leading-[1.6] mt-4">
                    No spam, ever. Your details are only used to respond to your inquiry.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Founder note */}
          <div className="mt-6 flex items-start gap-3 px-4 py-3 rounded-xl bg-[rgba(124,91,245,0.05)] border border-[rgba(124,91,245,0.1)]">
            <img
              src="/parit-bhardwaj-orchix-founder.jpg"
              alt="Parit Bhardwaj"
              className="w-9 h-9 rounded-full object-cover shrink-0 border-2 border-[rgba(124,91,245,0.35)]"
            />
            <div>
              <p className="text-[0.78rem] leading-[1.65] text-[#c4bfb8] italic">
                &ldquo;We&apos;d rather show you our work in person than put up a page that doesn&apos;t do it justice. Reach out — I&apos;ll walk you through everything.&rdquo;
              </p>
              <p className="mt-1 text-[0.68rem] font-semibold text-[#a78bfa] tracking-[0.05em]">
                Parit Bhardwaj &mdash; Founder, OrchiX
              </p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </main>
  );
}
