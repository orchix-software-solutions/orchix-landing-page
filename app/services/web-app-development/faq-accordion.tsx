"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to build a web or mobile app?",
    a: "A focused web application with a clear scope takes 8–14 weeks from kickoff to launch. A mobile app (iOS or Android) typically takes 10–16 weeks. Cross-platform (both platforms, one codebase) adds two to three weeks. These timelines assume design assets are ready — if you need design work done first, add four to six weeks.",
  },
  {
    q: "Should we build a native app or a cross-platform app?",
    a: "If your app needs deep integration with device hardware (Bluetooth, ARKit, high-performance graphics, background processing), native is worth the cost. For most B2B tools and content-driven consumer apps, React Native or Flutter gives you 95% of the native experience at 60% of the cost. We'll give you a specific recommendation after hearing about your use case — we don't have a default answer we apply to everything.",
  },
  {
    q: "What does web and app development cost?",
    a: "A focused web application runs $5,000–$15,000 depending on scope. A mobile app (single platform) runs $8,000–$20,000. Cross-platform mobile (iOS + Android) runs $12,000–$25,000. These are starting ranges — the actual number comes from a proper scoping session, not an estimate off a brief.",
  },
  {
    q: "We already have a design. Can you just build it?",
    a: "Yes. We work from Figma, Sketch, or Adobe XD files and implement them accurately. We'll do a design review before we start to flag anything that would cause problems in development — responsive edge cases, animation complexity, missing states — and resolve them upfront rather than mid-build.",
  },
  {
    q: "Can you take over a project that's already in progress?",
    a: "We do this regularly. We start with a codebase audit to understand what's there, what's broken, and what's safe to build on. You'll get an honest report — not a sales pitch — and a recommended path forward. Some things are worth saving. Some aren't. We'll tell you which is which.",
  },
  {
    q: "Do you build the backend too, or just the frontend?",
    a: "Full stack. We build the frontend, the API, the database, the cloud infrastructure, and the integrations. One team, end to end. If you already have a backend and only need frontend work, we do that too.",
  },
];

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3 max-w-[780px]">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] overflow-hidden transition-all duration-200 hover:border-[rgba(124,91,245,0.3)]"
        >
          <button
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
            aria-expanded={openIdx === i}
          >
            <span className="font-syne font-semibold text-[0.95rem] text-[#f5f2eb] leading-snug">
              {faq.q}
            </span>
            <span
              className={`flex-shrink-0 w-7 h-7 rounded-full border border-[rgba(124,91,245,0.35)] flex items-center justify-center text-[#a78bfa] text-lg transition-transform duration-300 ${
                openIdx === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-350 ${
              openIdx === i ? "max-h-[300px]" : "max-h-0"
            }`}
          >
            <p className="px-6 pb-5 text-[0.88rem] text-[#8a8680] leading-[1.7]">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
