"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to build a SaaS MVP?",
    a: "For a focused MVP — one core user workflow, basic authentication, and subscription billing — 6 to 10 weeks is realistic. We deliver a working prototype in the first week so you can validate direction before committing to the full build. Scope is the biggest variable: every feature you add to v1 adds time.",
  },
  {
    q: "What's the difference between an MVP and a prototype?",
    a: "A prototype demonstrates a concept. An MVP is a working product people can actually use and pay for. We build MVPs — not demos. By the end of the engagement, you have a deployable, production-ready product.",
  },
  {
    q: "Do you work with early-stage startups or only established companies?",
    a: "Both. We work with pre-seed founders validating an idea, Series A companies scaling their infrastructure, and established businesses launching new SaaS products. The process adapts to where you are — we don't apply a one-size-fits-all engagement model.",
  },
  {
    q: "Will we own the code when the project is done?",
    a: "From the first commit. We work in your repository, on your infrastructure. There's no handover document, no access negotiation. The code is yours throughout the entire project.",
  },
  {
    q: "Can you take over a SaaS product that another team built?",
    a: "Yes, and we do this often. We start with a codebase audit — typically 3 to 5 days — to document what's there, identify the riskiest parts, and plan a path forward. We give you an honest assessment of what can be improved incrementally versus what needs to be replaced.",
  },
  {
    q: "What happens after launch?",
    a: "We include a 90-day post-launch support window on all projects. After that, we offer ongoing retainer arrangements for feature development, infrastructure management, and technical support. Most clients stay with us — but there's no obligation.",
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
