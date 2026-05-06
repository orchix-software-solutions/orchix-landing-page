import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Services | Custom Software Development & AI Solutions | OrchiX",
  description:
    "OrchiX builds enterprise applications, SaaS products, web & mobile apps, AI agents, and automation systems — with radical transparency, weekly demos, and shared repos.",
  alternates: { canonical: "https://orchixsoftwaresolutions.com/services" },
  openGraph: {
    title: "Services | OrchiX Software Solutions",
    description:
      "Custom CRM/ERP, SaaS development, web & mobile apps, AI automation, business process automation, and software maintenance — built the honest way.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/services",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX Software Solutions" }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Services — OrchiX Software Solutions",
  description: "Custom software development, AI automation, and long-term engineering partnerships.",
  url: "https://orchixsoftwaresolutions.com/services",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://orchixsoftwaresolutions.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://orchixsoftwaresolutions.com/services" },
    ],
  },
};

const services = [
  {
    href: "/services/enterprise-applications-crm-erp",
    eyebrow: "CRM · ERP · BMS",
    title: "Enterprise Applications & CRM/ERP",
    desc: "Custom-built CRMs, ERPs, and business management systems — from sales pipelines to inventory, tailored to replace off-the-shelf tools that don't fit your workflows.",
    highlights: ["Custom CRM Development", "ERP Software Development", "CRM & ERP Integration", "Cloud ERP Migration", "Business Management Systems"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
  },
  {
    href: "/services/saas-product-development",
    eyebrow: "MVP · B2B SaaS · Scale",
    title: "SaaS Product Development",
    desc: "From MVP to scale — we plan, build, and grow revenue-generating SaaS platforms for founders and businesses. Architecture that holds at 10,000 users, not just 10.",
    highlights: ["SaaS MVP Development", "B2B SaaS Platforms", "SaaS Re-architecture", "API & Integration Development", "White-Label SaaS"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    href: "/services/web-app-development",
    eyebrow: "Web · iOS · Android",
    title: "Web & App Development",
    desc: "Pixel-perfect web applications and mobile apps that hold up under real traffic. Weekly demos, shared repos, and no surprises — from first line of code to launch.",
    highlights: ["Custom Web Applications", "iOS & Android Apps", "Cross-Platform Development", "Progressive Web Apps", "Performance Optimisation"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" />
      </svg>
    ),
  },
  {
    href: "/services/business-process-automation",
    eyebrow: "Workflows · Integrations · RPA",
    title: "Business Process Automation",
    desc: "Automate manual workflows, connect disparate systems, and eliminate work your team shouldn't be doing. Custom-built around your actual processes — not off-the-shelf templates.",
    highlights: ["Workflow Automation", "System Integration & APIs", "Approval & Document Workflows", "Data Extraction & Processing", "RPA for Legacy Systems"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    href: "/services/ai-intelligent-automation",
    eyebrow: "AI Agents · MCP · RAG · LLMs",
    title: "AI & Intelligent Automation",
    desc: "AI agents, MCP servers, RAG pipelines, and intelligent workflows that read context, make decisions, and take action — built for production, not proofs of concept.",
    highlights: ["AI Agent Development", "MCP Server Development", "RAG & Knowledge Base AI", "LLM Integration & Fine-Tuning", "AI Document Processing"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    href: "/services/software-maintenance-support",
    eyebrow: "Retainer · Security · Support",
    title: "Software Maintenance & Support",
    desc: "Long-term engineering partnership — security patching, performance monitoring, bug fixes, and ongoing feature development. A real team, not a helpdesk ticket.",
    highlights: ["Bug Fixes & Issue Resolution", "Security Patching", "Performance Monitoring", "Dependency & Framework Updates", "Codebase Takeover"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const pillars = [
  { icon: "📅", title: "Weekly Demos", desc: "A working build every Friday — not a status update. Test it, break it, redirect it." },
  { icon: "📁", title: "Shared Repos", desc: "Your code in your repository from day one. No lock-in, no hostage handovers." },
  { icon: "⚡", title: "7-Day Prototype", desc: "Working prototype in the first week so you validate before committing to the full build." },
  { icon: "🏗️", title: "Built to Scale", desc: "Architecture designed for where you're going — not just where you are today." },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#0a0a0a] text-[#f5f2eb]">
      <JsonLd schema={pageSchema} />

      {/* ── Breadcrumb ── */}
      <div className="max-w-[1200px] mx-auto px-[3rem] pt-40 max-[1100px]:px-6 max-[900px]:pt-36">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.78rem] text-[#8a8680]">
          <Link href="/" className="hover:text-[#a78bfa] transition-colors duration-200">Home</Link>
          <span className="text-[#8a8680]/40">›</span>
          <span className="text-[#a78bfa]">Services</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pb-12">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-4">What We Do</p>
        <h1
          className="font-syne font-extrabold leading-[1.1] tracking-[-0.03em] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)" }}
        >
          Software Built Around{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Your Growth</span>
        </h1>
        <p className="text-[1rem] text-[#8a8680] leading-[1.8] max-w-[620px] mb-10">
          We build enterprise applications, SaaS products, web &amp; mobile apps, and AI systems — with radical transparency, weekly demos, and shared repos. Every engagement, every service, every time.
        </p>

        {/* Pillars */}
        <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] px-5 py-5">
              <span className="text-[1.4rem] mb-3 block">{p.icon}</span>
              <p className="font-syne font-bold text-[0.88rem] text-[#f5f2eb] mb-1">{p.title}</p>
              <p className="text-[0.78rem] text-[#8a8680] leading-[1.6]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Services List ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">All Services</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-12"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          Six Services.{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">One Standard.</span>
        </h2>

        <div className="flex flex-col gap-5">
          {services.map((svc, i) => (
            <Link
              key={svc.href}
              href={svc.href}
              className="group relative rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] p-8 transition-all duration-300 hover:border-[rgba(124,91,245,0.4)] hover:bg-[rgba(124,91,245,0.04)] hover:-translate-y-[2px] hover:shadow-[0_16px_40px_rgba(124,91,245,0.08)] no-underline flex gap-8 items-start max-[700px]:flex-col max-[700px]:gap-5"
            >
              {/* Number */}
              <span className="font-syne font-extrabold text-[2.5rem] leading-none tracking-[-0.05em] text-[rgba(124,91,245,0.15)] group-hover:text-[rgba(124,91,245,0.3)] transition-colors duration-300 min-w-[3rem] mt-1 max-[700px]:hidden">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(124,91,245,0.1)] border border-[rgba(124,91,245,0.15)] flex items-center justify-center text-[#a78bfa] group-hover:bg-[rgba(124,91,245,0.18)] transition-colors duration-300">
                    {svc.icon}
                  </div>
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#a78bfa]/70">
                    {svc.eyebrow}
                  </span>
                </div>
                <h3 className="font-syne font-extrabold text-[1.25rem] tracking-[-0.02em] text-[#f5f2eb] mb-2 group-hover:text-white transition-colors duration-200">
                  {svc.title}
                </h3>
                <p className="text-[0.88rem] text-[#8a8680] leading-[1.7] max-w-[580px] mb-4">
                  {svc.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {svc.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-[0.7rem] font-medium px-2.5 py-1 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-[#8a8680] group-hover:border-[rgba(124,91,245,0.2)] group-hover:text-[#c4bfb8] transition-all duration-200"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#8a8680] group-hover:border-[rgba(124,91,245,0.4)] group-hover:text-[#a78bfa] group-hover:bg-[rgba(124,91,245,0.08)] transition-all duration-300 self-center max-[700px]:hidden">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Not sure CTA ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <div className="grid grid-cols-2 gap-12 items-center max-[700px]:grid-cols-1 max-[700px]:gap-8">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Not Sure Where to Start?</p>
            <h2
              className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4"
              style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
            >
              Tell Us What You&apos;re Building.{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">We&apos;ll Figure Out the Rest.</span>
            </h2>
            <p className="text-[0.9rem] text-[#8a8680] leading-[1.8]">
              Book a free 45-minute call. We&apos;ll ask the right questions, tell you which service fits your situation, and give you a straight answer on what it would take to build — before any commitment.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "Building a new product from scratch?", a: "SaaS Product Development or Web & App Development" },
              { q: "Connecting systems or cutting manual work?", a: "Business Process Automation" },
              { q: "Adding AI to an existing product?", a: "AI & Intelligent Automation" },
              { q: "Need someone to take over a live product?", a: "Software Maintenance & Support" },
            ].map((item) => (
              <div key={item.q} className="rounded-xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] px-5 py-4">
                <p className="text-[0.8rem] font-semibold text-[#f5f2eb] mb-1">{item.q}</p>
                <p className="text-[0.75rem] text-[#a78bfa]">→ {item.a}</p>
              </div>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-[0.9rem] bg-[#7c5bf5] text-white text-[0.88rem] font-semibold rounded-full tracking-[0.02em] transition-all duration-300 no-underline shadow-[0_0_30px_rgba(124,91,245,0.35)] hover:bg-[#6a4ae0] hover:shadow-[0_0_55px_rgba(124,91,245,0.55)] hover:-translate-y-[2px] mt-2"
            >
              Book a Free Discovery Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
