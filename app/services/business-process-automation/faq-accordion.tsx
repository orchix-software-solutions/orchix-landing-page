"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How do I know which processes are worth automating?",
    a: "The best candidates are processes that run frequently (daily or weekly), follow consistent rules, involve moving data between systems, and don't require human judgment at every step. Approval workflows, data entry, notifications, report generation, and onboarding sequences are almost always worth it. We run a process audit before recommending anything — we won't suggest automating something that isn't going to save meaningful time.",
  },
  {
    q: "How long does it take to see results?",
    a: "First automation live within two weeks. Most clients see measurable time savings in the first month. The full audit-to-implementation cycle for a medium-complexity automation programme typically takes 6–10 weeks.",
  },
  {
    q: "Do we need to change our existing tools to use automation?",
    a: "Usually not. We build automation around what you're already using. Replacing tools is almost never the answer — better integrations between your existing tools usually are.",
  },
  {
    q: "What happens when something breaks?",
    a: "Every automation we build has monitoring and alerting configured before it goes live. When something fails, the right person gets a notification with enough information to act quickly. We also include a 30-day post-launch support window to catch and fix anything that surfaces in the first month of real use.",
  },
  {
    q: "Is custom automation worth it compared to Zapier or Make?",
    a: "For simple, low-volume workflows between popular apps — Zapier is fine and we'll tell you that. For anything that runs at scale, involves complex conditional logic, handles sensitive data, or needs to be reliable enough that failures have real consequences — custom is worth it. The break-even point is lower than most people expect.",
  },
  {
    q: "Can you automate processes that use legacy systems with no API?",
    a: "Yes. RPA (robotic process automation) handles systems that have no API by interacting with the interface directly — the same way a person would, but faster and without errors. It's not our first choice, but it works when nothing else does.",
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
