import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import FaqAccordion from "./faq-accordion";
import CtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "AI & Intelligent Automation Services | AI Agents, MCP Servers & Workflow Automation | OrchiX",
  description:
    "OrchiX builds AI agents, MCP servers, and intelligent automation systems that handle complex decisions — not just rule-based tasks. Custom AI solutions built for your business, not demos that don't scale.",
  keywords: [
    "AI intelligent automation",
    "AI agents development",
    "custom AI development services",
    "AI workflow automation",
    "MCP server development",
    "intelligent automation services",
    "AI agent development company",
    "LLM integration services",
    "RAG development services",
    "AI automation solutions",
    "generative AI development",
    "enterprise AI development",
  ],
  alternates: { canonical: "https://orchixsoftwaresolutions.com/services/ai-intelligent-automation" },
  openGraph: {
    title: "AI & Intelligent Automation Services | OrchiX Software Solutions",
    description:
      "OrchiX builds AI agents, MCP servers, and intelligent automation systems that handle complex decisions — not just rule-based tasks.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/services/ai-intelligent-automation",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX Software Solutions" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI & Intelligent Automation",
  description:
    "OrchiX builds AI agents, MCP servers, and intelligent automation systems that read context, make decisions, and take action — built for production, not proofs of concept.",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  serviceType: "AI & Intelligent Automation",
  areaServed: "Worldwide",
  url: "https://orchixsoftwaresolutions.com/services/ai-intelligent-automation",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://orchixsoftwaresolutions.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://orchixsoftwaresolutions.com/services" },
      {
        "@type": "ListItem",
        position: 3,
        name: "AI & Intelligent Automation",
        item: "https://orchixsoftwaresolutions.com/services/ai-intelligent-automation",
      },
    ],
  },
};

const services = [
  {
    icon: "🤖",
    title: "AI Agent Development",
    desc: "AI agents that plan, execute multi-step tasks, use tools, and adapt based on what they encounter. They browse the web, query databases, call APIs, write and run code — and hand off to humans when a decision falls outside their confidence threshold.",
  },
  {
    icon: "🔌",
    title: "MCP Server Development",
    desc: "Custom Model Context Protocol servers that give your AI systems controlled, auditable access to internal tools, databases, and services — with proper authentication, rate limiting, and audit logging so you know exactly what your AI is touching.",
  },
  {
    icon: "🧠",
    title: "RAG Systems & Knowledge Base AI",
    desc: "Retrieval-Augmented Generation that lets AI answer questions using your actual data — internal documentation, product knowledge, historical records — with proper chunking, embedding selection, and re-ranking so the system surfaces accurate information, not just confident-sounding information.",
  },
  {
    icon: "⚡",
    title: "LLM Integration & Fine-Tuning",
    desc: "Integrating GPT-4o, Claude, Gemini, Llama, and Mistral into production products — with deliberate prompt architecture, context window management, output parsing, latency optimisation, and cost control. Fine-tuning only when genuinely needed.",
  },
  {
    icon: "📄",
    title: "AI-Powered Document Processing",
    desc: "Document intelligence pipelines that extract, classify, and validate data from contracts, invoices, medical records, and legal filings — using OCR, layout analysis, and LLM-based extraction for the cases that rule-based parsing can't handle.",
  },
  {
    icon: "🔄",
    title: "Intelligent Workflow Automation",
    desc: "Workflows that use AI to handle variable inputs — classifying incoming requests, extracting information from unstructured messages, making routing decisions based on context, and generating responses that match the situation. The workflow runs itself; AI handles the judgement calls.",
  },
  {
    icon: "💬",
    title: "AI Chatbots & Conversational Interfaces",
    desc: "Actual conversational AI that understands context, maintains thread across a conversation, knows when to answer and when to escalate, and integrates with your backend systems to take action — not just provide information.",
  },
];

const whyItems = [
  {
    icon: "🏗️",
    title: "Hallucination Is an Architecture Problem",
    desc: "You don't fix a hallucinating AI by switching models. You fix it by grounding every response in retrieved facts, validating outputs against known constraints, and routing low-confidence responses to a human. We build the grounding infrastructure first.",
  },
  {
    icon: "🚨",
    title: "Agents Need Failure Modes, Not Just Success Paths",
    desc: "Every AI agent we build has explicit logic for what happens when it's wrong, stuck, or uncertain. It logs what it did and why. It alerts the right person when it can't proceed. It doesn't silently fail or confidently complete a task incorrectly.",
  },
  {
    icon: "👤",
    title: "The User Interface Is Half the Product",
    desc: "The best AI system creates problems if people don't trust it or can't correct it when it's wrong. We design the human-AI interaction alongside the AI system — feedback mechanisms, confidence indicators, correction flows, and audit trails.",
  },
  {
    icon: "🎯",
    title: "Production-First, Not Demo-First",
    desc: "The projects we're proudest of aren't the ones with impressive demos — they're the ones running quietly in the background, handling real work, with failure rates low enough that clients stop thinking about them. That's the standard we build to.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "AI Feasibility & Use Case Definition (Week 1)",
    desc: "We assess whether AI is actually the right tool — and if it is, which approach makes sense. We map the task, define what good performance looks like, identify data requirements, and flag risks. An honest assessment, not a pitch for the most complex solution.",
  },
  {
    num: "02",
    title: "Data Audit & Architecture Design (Weeks 1–2)",
    desc: "AI systems are only as good as the data they work with. We audit your existing data, identify gaps, and design the retrieval or training architecture before touching a model. This is where most projects either get set up to succeed or quietly doomed.",
  },
  {
    num: "03",
    title: "Prototype on Real Data (Weeks 2–3)",
    desc: "A working prototype using your actual data — not a curated demo dataset. This surfaces edge cases and failure modes early, when they're cheap to address. You see real performance before significant development investment is made.",
  },
  {
    num: "04",
    title: "Production Build with Safety Rails (Weeks 3–8+)",
    desc: "Full system build with monitoring, logging, guardrails, and fallback logic. Every AI decision is traceable. Every failure triggers the right alert. Human-in-the-loop handoff points are designed and tested, not added as an afterthought.",
  },
  {
    num: "05",
    title: "Evaluation, Tuning & Deployment",
    desc: "Systematic evaluation across representative test cases — measuring accuracy, latency, cost, and failure rate. We tune until the numbers justify production deployment, then monitor for 30 days and adjust based on real-world performance.",
  },
];

const techCategories = [
  { label: "LLMs & Foundation Models", tools: "GPT-4o / o1, Claude 3.5 / 3.7, Gemini 1.5 Pro, Llama 3, Mistral, Cohere" },
  { label: "AI Frameworks", tools: "LangChain, LangGraph, LlamaIndex, AutoGen, CrewAI, Haystack" },
  { label: "Vector Databases", tools: "Pinecone, Weaviate, Qdrant, ChromaDB, pgvector" },
  { label: "Orchestration & Agents", tools: "MCP (Model Context Protocol), OpenAI Assistants API, custom agent frameworks" },
  { label: "Document Processing", tools: "AWS Textract, Azure Document Intelligence, custom OCR pipelines, Unstructured.io" },
  { label: "Embedding Models", tools: "OpenAI text-embedding-3, Cohere Embed, Sentence Transformers" },
  { label: "Infrastructure", tools: "AWS Bedrock, Azure OpenAI Service, Google Vertex AI, self-hosted GPU instances" },
  { label: "Monitoring & Evaluation", tools: "LangSmith, Arize, Helicone, custom evaluation pipelines" },
];

const useCases = [
  {
    icon: "🔍",
    title: "AI-Powered Sales Research Agent",
    desc: "Sales rep enters a company name → AI agent pulls data from web sources, LinkedIn, and CRM history → generates a personalised briefing with pain points, recent news, likely objections, and talking points → delivered before the call. 30 minutes of research now takes 90 seconds.",
  },
  {
    icon: "📑",
    title: "Contract Intelligence System",
    desc: "Legal team uploads a contract → AI extracts key terms, flags non-standard clauses, compares against internal playbook, highlights missing provisions, and generates a risk summary → lawyer reviews and makes final judgement calls. Review time cut from 4 hours to 45 minutes.",
  },
  {
    icon: "🎧",
    title: "Intelligent Customer Support Triage",
    desc: "Incoming ticket arrives → AI classifies issue type and urgency, extracts relevant account info from CRM, checks knowledge base for known solutions → generates a draft response if confidence is high enough → routes to the right specialist with full context pre-populated.",
  },
  {
    icon: "💡",
    title: "Internal Knowledge Assistant",
    desc: "8 years of documentation across SharePoint, Notion, and Google Drive — none of it easily searchable. RAG-powered assistant indexes all of it, lets staff ask questions in plain language, and returns accurate answers with source citations. Onboarding time for new hires cut by 40%.",
  },
];

export default function AiIntelligentAutomationPage() {
  return (
    <main className="bg-[#0a0a0a] text-[#f5f2eb]">
      <JsonLd schema={serviceSchema} />

      {/* ── Breadcrumb ── */}
      <div className="max-w-[1200px] mx-auto px-[3rem] pt-40 max-[1100px]:px-6 max-[900px]:pt-36">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.78rem] text-[#8a8680]">
          <Link href="/" className="hover:text-[#a78bfa] transition-colors duration-200">Home</Link>
          <span className="text-[#8a8680]/40">›</span>
          <Link href="/services" className="hover:text-[#a78bfa] transition-colors duration-200">Services</Link>
          <span className="text-[#8a8680]/40">›</span>
          <span className="text-[#a78bfa]">AI &amp; Intelligent Automation</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <h1 className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
          Rule-Based Automation Handles the Predictable.{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">AI Handles Everything Else.</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          We build AI agents, MCP servers, and intelligent automation systems that read context, make decisions, and take action — on tasks too variable, too complex, or too unstructured for traditional automation. Built for production, not proofs of concept.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <CtaButton label="Explore What AI Can Automate for You" />
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Pain Section ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">The Real Problem</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          Most AI Projects Don&apos;t Fail{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Because of the Technology</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8]">
          <p>
            They fail because they were built as demos. A ChatGPT wrapper that impresses in a boardroom presentation. A document summarisation tool that works perfectly on clean PDFs and falls apart on the ones that actually come from clients. An AI chatbot that handles 40% of queries well and confidently gives wrong answers on the other 60% — with no way to know which is which.
          </p>
          <p>
            The gap between an AI proof of concept and an AI system you can trust with real business operations is wider than most people expect. It&apos;s not about the model — it&apos;s about what surrounds it. Retrieval architecture, grounding, guardrails, fallback logic, monitoring, and the human-in-the-loop design that determines when the AI acts autonomously and when it escalates.
          </p>
          <p className="text-[#f5f2eb] font-semibold">That&apos;s the standard we build to.</p>
          <p>
            We&apos;ve been building production AI systems since before &ldquo;AI agent&rdquo; became a buzzword. The projects we&apos;re proudest of aren&apos;t the ones with the most impressive demos — they&apos;re the ones running quietly in the background, handling real work, making real decisions, with failure rates low enough that clients stop thinking about them.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Services Grid ── */}
      <section id="services" className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">What We Build</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          AI &amp; Intelligent Automation{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Services</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          From single LLM integrations to full multi-agent systems — covering every layer of the AI stack, from data infrastructure through to production monitoring.
        </p>

        <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] p-7 transition-all duration-250 hover:border-[rgba(124,91,245,0.4)] hover:bg-[rgba(124,91,245,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(124,91,245,0.1)]"
            >
              <div className="w-11 h-11 rounded-xl bg-[rgba(124,91,245,0.12)] border border-[rgba(124,91,245,0.15)] flex items-center justify-center text-xl mb-5">
                {svc.icon}
              </div>
              <h3 className="font-syne font-bold text-[0.95rem] text-[#f5f2eb] mb-2">{svc.title}</h3>
              <p className="text-[0.84rem] text-[#8a8680] leading-[1.65]">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Why OrchiX + Process ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <div className="grid grid-cols-2 gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-12">
          {/* Why OrchiX */}
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Why OrchiX</p>
            <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
              AI That Works in{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">Production, Not Just Demos</span>
            </h2>
            <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] mb-8">
              Three things we&apos;ve learned building production AI systems that most people figure out the hard way.
            </p>
            <div className="flex flex-col gap-4">
              {whyItems.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 items-start p-5 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] transition-all duration-200 hover:border-[rgba(124,91,245,0.3)]"
                >
                  <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-[rgba(124,91,245,0.12)] border border-[rgba(124,91,245,0.15)] flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-syne font-bold text-[0.9rem] text-[#f5f2eb] mb-1">{item.title}</h4>
                    <p className="text-[0.82rem] text-[#8a8680] leading-[1.65]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Our Process</p>
            <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-10" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
              How We Build AI Systems{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">That Actually Work</span>
            </h2>
            <div className="flex flex-col">
              {processSteps.map((step, i) => (
                <div key={step.num} className="flex gap-5 pb-7 relative">
                  {i < processSteps.length - 1 && (
                    <div
                      className="absolute left-[17px] top-9 bottom-0 w-[2px]"
                      style={{ background: "linear-gradient(to bottom, rgba(124,91,245,0.4), transparent)" }}
                    />
                  )}
                  <div className="w-9 h-9 flex-shrink-0 rounded-full border-2 border-[rgba(124,91,245,0.5)] bg-[#0a0a0a] flex items-center justify-center font-syne font-extrabold text-[0.75rem] text-[#a78bfa] z-[1]">
                    {step.num}
                  </div>
                  <div className="pt-1.5">
                    <h4 className="font-syne font-bold text-[0.92rem] text-[#f5f2eb] mb-1">{step.title}</h4>
                    <p className="text-[0.82rem] text-[#8a8680] leading-[1.65]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Tech Stack ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Technology</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          Models, Frameworks &amp;{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Infrastructure We Work With</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[560px] mb-12">
          We don&apos;t lock into a single model or framework. We match the stack to your use case, your latency requirements, and your budget.
        </p>
        <div className="grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
          {techCategories.map((cat) => (
            <div
              key={cat.label}
              className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] px-6 py-5 transition-all duration-200 hover:border-[rgba(124,91,245,0.3)]"
            >
              <p className="font-syne font-bold text-[0.85rem] text-[#a78bfa] mb-1">{cat.label}</p>
              <p className="text-[0.8rem] text-[#8a8680] leading-[1.6]">{cat.tools}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Use Cases ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">In Practice</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          AI &amp; Intelligent Automation{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">in Practice</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[540px] mb-12">
          Concrete examples of AI systems we&apos;ve built — so you can see what production-grade AI actually looks like before we scope yours.
        </p>
        <div className="grid grid-cols-2 gap-5 max-[700px]:grid-cols-1">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] p-7 transition-all duration-250 hover:border-[rgba(124,91,245,0.4)] hover:bg-[rgba(124,91,245,0.05)] hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-[rgba(124,91,245,0.12)] border border-[rgba(124,91,245,0.15)] flex items-center justify-center text-xl mb-5">
                {uc.icon}
              </div>
              <h3 className="font-syne font-bold text-[0.95rem] text-[#f5f2eb] mb-3">{uc.title}</h3>
              <p className="text-[0.84rem] text-[#8a8680] leading-[1.7]">{uc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── FAQ ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">FAQ</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-10" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          Questions About{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">AI &amp; Intelligent Automation</span>
        </h2>
        <FaqAccordion />
      </section>
    </main>
  );
}
