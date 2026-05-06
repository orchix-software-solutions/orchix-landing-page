"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How is this different from just using ChatGPT or Copilot?",
    a: "Consumer AI tools are general-purpose. They don't know your data, your systems, or your processes — and they're not integrated into your workflows. What we build connects AI to your specific context: your documents, your databases, your tools, your business logic. The output isn't a conversation — it's an action taken inside your system, or a structured result that feeds into your operations.",
  },
  {
    q: "What if our data isn't clean or well-organised?",
    a: "Most isn't. A data audit is part of our process before we build anything. We'll tell you what state your data is in, what's usable as-is, and what needs preparation before an AI system can work with it reliably. \"Our data is a mess\" is a common starting point — not a blocker.",
  },
  {
    q: "How do we make sure the AI doesn't give wrong answers?",
    a: "There's no guarantee of zero errors — any AI system will make mistakes, and anyone who tells you otherwise is selling something. What we do is design systems that catch and contain errors: grounding responses in retrieved facts, flagging low-confidence outputs for human review, building feedback loops so the system improves over time, and monitoring for failure patterns in production.",
  },
  {
    q: "We're not sure if we need AI or just better automation. How do we decide?",
    a: "Rule-based automation is the right tool for tasks that follow consistent rules with structured inputs. AI is the right tool for tasks involving unstructured data, variable inputs, natural language, or judgement calls. Many workflows need both — AI for the intake and classification, traditional automation for the execution. We assess this properly before recommending anything.",
  },
  {
    q: "How long does an AI project take?",
    a: "A focused AI integration — one use case, one model, one system — typically takes 4 to 8 weeks from scoping to production. A multi-agent system or full intelligent automation platform takes 10 to 20 weeks. The timeline depends heavily on data readiness and how well-defined the success criteria are before we start.",
  },
  {
    q: "What does AI development cost?",
    a: "A focused LLM integration or single AI agent runs $8,000–$20,000. A full RAG system with custom knowledge infrastructure runs $15,000–$40,000. Multi-agent workflows and end-to-end intelligent automation platforms start at $30,000. We scope properly before committing to numbers.",
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
