"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you only maintain software you built?",
    a: "No. Roughly half our maintenance clients come to us with products built by other agencies or in-house teams. The codebase audit at the start of the engagement is specifically designed for this — we learn the product before we're responsible for it.",
  },
  {
    q: "What if our codebase is in bad shape?",
    a: "We'll tell you upfront what we find in the audit. If there's significant technical debt or structural problems, we'll give you a clear picture of what it means practically — how it affects maintainability, what risks it creates, and what it would cost to address over time. You decide what to prioritise. We don't refuse to maintain products because they're messy — messy is normal.",
  },
  {
    q: "How quickly can you respond to a critical production issue?",
    a: "Within 4 hours for confirmed critical issues — system down, data loss risk, security breach. We have on-call coverage for maintenance clients. Response times for lower-priority issues are 24 hours (high) and 72 hours (standard).",
  },
  {
    q: "What's included in the monthly engineering hours?",
    a: "Bug fixes, small feature additions, dependency updates, refactoring, documentation, code reviews, and deployment work. Anything that requires significant scoping and design work — a new feature that would take more than 10 hours — we'll flag as a separate project rather than drawing from the retainer without discussion.",
  },
  {
    q: "Can we scale the retainer up or down?",
    a: "Yes. Retainer size is reviewed every three months. If your product's needs change — you're launching a new market, you've reduced scope, you're preparing for an acquisition — we adjust accordingly.",
  },
  {
    q: "Do you handle both the application and the infrastructure?",
    a: "Yes. Application code, third-party integrations, cloud infrastructure, and deployment pipelines. If you're already using a managed hosting provider or have a separate DevOps team handling infrastructure, we can scope the retainer to application-only.",
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
