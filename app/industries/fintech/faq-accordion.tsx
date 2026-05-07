"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is your team familiar with RBI and SEBI regulations?",
    a: "We understand the technical requirements that flow from Indian financial regulations — data localisation, KYC record retention, audit logging, NACH integration requirements. We're not a compliance consultancy and we don't give regulatory advice. For regulatory interpretation, you need a qualified compliance officer or legal team alongside the engineering work — and we're used to working with them.",
  },
  {
    q: "Can you build on top of a Banking-as-a-Service provider?",
    a: "Yes. We've integrated with BaaS providers including M2P, Zeta, and similar platforms. BaaS significantly reduces the regulatory surface area for most fintech products — you get the financial infrastructure without needing a banking licence. We'll help you evaluate which BaaS provider fits your product and build on top of their APIs.",
  },
  {
    q: "How do you handle PCI-DSS compliance?",
    a: "We design payment flows to minimise PCI-DSS scope — typically by tokenising card data at the point of capture using the gateway's hosted fields or SDK, so raw card numbers never touch our servers. For products that require more extensive PCI scope, we document the cardholder data environment, implement the required controls, and produce the evidence needed for your QSA assessment. We don't do QSA assessments ourselves.",
  },
  {
    q: "How long does a fintech product take to build?",
    a: "A focused fintech MVP — one core workflow with proper security and basic compliance infrastructure — typically takes 12–16 weeks. More complex products (full lending platforms, trading systems with real-time data) take 20–36 weeks. The compliance and security requirements that distinguish fintech from general software add time upfront and save significant time and cost later.",
  },
  {
    q: "What does fintech software development cost?",
    a: "Fintech MVP builds typically run $50,000–$120,000 depending on scope and compliance requirements. Full platforms run $120,000–$400,000+. The range is wide because the compliance surface area varies significantly by product type and jurisdiction. We scope properly before committing to numbers.",
  },
  {
    q: "Do you sign NDAs for fintech projects?",
    a: "Yes, before any detailed discussion of your product. Financial product ideas and architecture are legitimately sensitive. Standard NDA is available for signature before scoping conversations.",
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
              openIdx === i ? "max-h-[400px]" : "max-h-0"
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
