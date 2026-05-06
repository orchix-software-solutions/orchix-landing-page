"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to build a custom CRM or ERP system?",
    a: "A foundational CRM or ERP with core modules typically takes 3–6 months depending on complexity. We deliver a working prototype within the first 7 days so you can validate early, and build incrementally from there in 2-week sprints.",
  },
  {
    q: "Why build a custom CRM/ERP instead of using Salesforce or SAP?",
    a: "Off-the-shelf platforms are built for the average business. If your workflows are complex, your industry is specialized, or you're paying for 80% of features you don't use — a custom system pays for itself within 18 months through reduced licensing, better adoption, and exact-fit functionality.",
  },
  {
    q: "Can you integrate with our existing tools and systems?",
    a: "Yes. We build REST and GraphQL API integrations with virtually any third-party platform — accounting tools, payment gateways, marketing platforms, legacy databases, IoT systems, and more.",
  },
  {
    q: "Who owns the code after the project is complete?",
    a: "You do. 100%. We share all repos from day one and transfer full IP ownership at delivery. No vendor lock-in, no ongoing licensing fees to us.",
  },
  {
    q: "What does enterprise application development cost?",
    a: "We offer three tiers: Starter ($1,499) for websites and landing pages, Business ($4,999) for custom CRM/ERP modules and internal tools, and Enterprise ($12,999+) for full-scale platforms with AI, multi-tenancy, and dedicated support. Full pricing details are on our homepage.",
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
