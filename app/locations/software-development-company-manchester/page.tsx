import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Software Development Company Manchester | OrchiX",
  description:
    "OrchiX is a software development company serving Manchester businesses. We build SaaS platforms, CRM/ERP systems, AI automation, and web applications for Manchester's digital, retail, manufacturing, and healthtech sectors — without the agency bloat.",
  keywords: [
    "software development company Manchester",
    "software development agency Manchester",
    "custom software development Manchester",
    "web app development Manchester",
    "SaaS development Manchester",
    "AI automation Manchester",
    "e-commerce development Manchester",
    "bespoke software Manchester",
    "software development Manchester",
    "Manchester tech agency",
    "CRM development Manchester",
    "ERP development Manchester",
    "manufacturing software Manchester",
    "MediaCity software development",
    "Northern Powerhouse software",
  ],
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/software-development-company-manchester",
  },
  openGraph: {
    title: "Software Development Company Manchester | OrchiX",
    description:
      "OrchiX builds custom software for Manchester businesses — SaaS platforms, AI automation, CRM/ERP systems, and e-commerce solutions built for Manchester's digital ambition.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/locations/software-development-company-manchester",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX — Software Development Company Manchester" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OrchiX Software Solutions — Manchester",
  description:
    "Software development company serving Manchester businesses. We build SaaS platforms, CRM/ERP systems, AI automation, and web applications for Manchester's digital, retail, manufacturing, and healthtech sectors.",
  url: "https://orchixsoftwaresolutions.com/locations/software-development-company-manchester",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  areaServed: {
    "@type": "City",
    name: "Manchester",
    "@id": "https://www.wikidata.org/wiki/Q18125",
  },
  serviceType: "Custom Software Development",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://orchixsoftwaresolutions.com" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://orchixsoftwaresolutions.com/locations" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Software Development Company Manchester",
        item: "https://orchixsoftwaresolutions.com/locations/software-development-company-manchester",
      },
    ],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Web & App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Product Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & Intelligent Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM & ERP Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Process Automation" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work with Manchester businesses remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work remotely with clients across Manchester and the wider North West. All collaboration happens async and over scheduled calls — aligned to UK working hours. You get a structured delivery process, clear communication, and working software every week, without needing us in an office on Spinningfields.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve in Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily serve digital & media businesses (including MediaCity UK), retail & e-commerce, manufacturing & Industry 4.0, and HealthTech & life sciences companies in Manchester. Our most common engagements involve replacing legacy systems, building SaaS platforms, scaling e-commerce infrastructure, and automating manufacturing workflows.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a custom software project take for a Manchester business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused MVP or core feature build typically runs 6–12 weeks. Full enterprise systems and SaaS platforms take 3–6 months depending on scope. We scope everything upfront with a fixed deliverable list so you know exactly what you're getting and when — before a single line of code is written.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate with Shopify, ERP systems, and manufacturing platforms common in Manchester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We integrate with Shopify, WooCommerce, SAP, Microsoft Dynamics, SAGE, and a range of manufacturing MES and ERP platforms common in Manchester's retail and industrial sectors. Custom API connections, data pipeline builds, and legacy system bridges are standard project components — not specialist extras.",
      },
    },
    {
      "@type": "Question",
      name: "What makes OrchiX different from a Manchester software development agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many Manchester agencies operate on open-ended retainers with senior time spread thin across multiple clients. We work on fixed scope with a dedicated team — you get direct access to the engineers writing your code. We don't do WordPress or Shopify theme builds. Every engagement is a proper engineering project with architecture decisions, code review, and production-grade delivery standards.",
      },
    },
  ],
};

const services = [
  {
    icon: "🖥️",
    title: "Custom Web & App Development",
    desc: "Web applications, internal tools, and client-facing platforms built for Manchester businesses — from e-commerce order management systems to MediaCity content platforms and manufacturing operations dashboards. Built for the data volumes and uptime expectations of real commercial operations, not just demos.",
  },
  {
    icon: "☁️",
    title: "SaaS Product Development",
    desc: "End-to-end SaaS builds for Manchester founders and scale-ups. Architecture, backend, frontend, billing integration, multi-tenancy, and everything needed to ship a product that can grow from a Manchester customer base to national and European scale — not just launch and stall.",
  },
  {
    icon: "🤖",
    title: "AI & Intelligent Automation",
    desc: "AI agents, LLM integrations, document processing pipelines, and intelligent automation for Manchester businesses — from retail demand forecasting and inventory optimisation to manufacturing defect detection and HealthTech clinical workflow automation. Built for production use, not proofs of concept.",
  },
  {
    icon: "🔄",
    title: "Business Process Automation",
    desc: "Identifying and automating the operational bottlenecks slowing Manchester businesses down. Workflow automation, ERP data synchronisation, e-commerce order routing, and manufacturing process orchestration that remove manual hand-offs and reduce costly operational delays across teams and systems.",
  },
  {
    icon: "📊",
    title: "CRM & ERP Development",
    desc: "Custom CRM and ERP systems built around how Manchester's sales, operations, and supply chain teams actually work — not how SAP or Salesforce assumes they do. Particularly valuable for manufacturers and retailers that have outgrown spreadsheet-driven operations and need proper systems without seven-figure enterprise licensing fees.",
  },
  {
    icon: "🛠️",
    title: "Software Maintenance & Support",
    desc: "Ongoing engineering support for existing systems — bug fixes, performance improvements, security patches, and feature development. Especially valuable for Manchester manufacturers and retailers running legacy systems that need modernisation in stages, without a full system replacement that disrupts live operations.",
  },
];

const industries = [
  {
    icon: "📡",
    name: "Digital & Media",
    desc: "Manchester's MediaCity UK makes it the UK's second largest media hub. We build content management platforms, broadcast operations tools, streaming infrastructure, audience data systems, and digital publishing platforms for broadcasters, production companies, and digital agencies operating from Salford Quays and across the North West.",
  },
  {
    icon: "🛍️",
    name: "Retail & E-commerce",
    desc: "Manchester has a long retail heritage and a growing e-commerce ecosystem. We build custom e-commerce platforms, Shopify integrations and extensions, order management systems, warehouse fulfilment tools, and customer data platforms for Manchester retailers scaling beyond what out-of-the-box platforms can handle.",
  },
  {
    icon: "⚙️",
    name: "Manufacturing & Industry 4.0",
    desc: "The North West has deep manufacturing roots and a growing appetite for industrial digitalisation. We build MES integrations, production tracking dashboards, supply chain visibility tools, quality management systems, and IoT data pipelines for Manchester-area manufacturers modernising legacy operations without replacing entire production lines.",
  },
  {
    icon: "🧬",
    name: "HealthTech & Life Sciences",
    desc: "Manchester has a strong life sciences cluster anchored by the University of Manchester and Manchester University NHS Foundation Trust. We build clinical data platforms, patient management tools, research data pipelines, and healthcare operations software built with NHS interoperability standards and GDPR compliance built into the architecture from day one.",
  },
];

const painPoints = [
  {
    icon: "💸",
    title: "Manchester Agency Bloat, Without the Results",
    desc: "Many Manchester development agencies operate on open-ended retainers — charging for hours that stretch indefinitely without clear deliverables. We work on fixed scope with a defined timeline and a team that owns the outcome. You know what you're getting, when you're getting it, and what it costs — before we start.",
  },
  {
    icon: "⚡",
    title: "The Northern Powerhouse Needs Software That Keeps Pace",
    desc: "Manchester's ambition — in retail, media, manufacturing, and digital — demands software that moves as fast as the businesses using it. We scope, start, and ship quickly. Our discovery process takes days, not months, and our weekly demo cadence means you see real progress throughout the build, not just at the end.",
  },
  {
    icon: "🔗",
    title: "Legacy Manufacturing & ERP Integrations Are Our Default",
    desc: "Manchester's manufacturing and retail sectors run on SAP, Sage, Microsoft Dynamics, and a range of legacy MES systems. We integrate with them. Building bridges between modern web applications and entrenched industrial systems is standard project scope for us — not a specialist engagement that adds months and budget.",
  },
  {
    icon: "🛒",
    title: "E-commerce Infrastructure That Scales Beyond Shopify",
    desc: "Manchester's e-commerce businesses consistently hit the ceiling of what Shopify or WooCommerce can handle out of the box — custom fulfilment logic, multi-warehouse routing, complex pricing rules, and wholesale portals. We build the custom layer on top, or replace the platform entirely, without losing your operational continuity.",
  },
];

const faqs = [
  {
    q: "Do you work with Manchester businesses remotely?",
    a: "Yes. We work remotely with clients across Manchester and the wider North West. All collaboration happens async and over scheduled calls — aligned to UK working hours. You get a structured delivery process, clear communication, and working software every week, without needing us in an office on Spinningfields.",
  },
  {
    q: "What industries do you serve in Manchester?",
    a: "We primarily serve digital & media businesses (including MediaCity UK), retail & e-commerce, manufacturing & Industry 4.0, and HealthTech & life sciences companies in Manchester. Our most common engagements involve replacing legacy systems, building SaaS platforms, scaling e-commerce infrastructure, and automating manufacturing workflows.",
  },
  {
    q: "How long does a custom software project take for a Manchester business?",
    a: "A focused MVP or core feature build typically runs 6–12 weeks. Full enterprise systems and SaaS platforms take 3–6 months depending on scope. We scope everything upfront with a fixed deliverable list so you know exactly what you're getting and when — before a single line of code is written.",
  },
  {
    q: "Can you integrate with Shopify, ERP systems, and manufacturing platforms common in Manchester?",
    a: "Yes. We integrate with Shopify, WooCommerce, SAP, Microsoft Dynamics, SAGE, and a range of manufacturing MES and ERP platforms common in Manchester's retail and industrial sectors. Custom API connections, data pipeline builds, and legacy system bridges are standard project components — not specialist extras.",
  },
  {
    q: "What makes OrchiX different from a Manchester software development agency?",
    a: "Many Manchester agencies operate on open-ended retainers with senior time spread thin across multiple clients. We work on fixed scope with a dedicated team — you get direct access to the engineers writing your code. We don't do WordPress or Shopify theme builds. Every engagement is a proper engineering project with architecture decisions, code review, and production-grade delivery standards.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Scope Definition (Week 1)",
    desc: "A structured session to map your requirements, define success criteria, identify technical risks — including legacy system constraints and integration dependencies — and produce a fixed deliverable list. You leave with a clear scope document, not a vague proposal full of caveats.",
  },
  {
    num: "02",
    title: "Architecture & Technical Design (Week 1–2)",
    desc: "We design the system before we build it. Database schema, API contracts, infrastructure plan, and third-party integrations — including Shopify APIs, ERP connectors, or manufacturing data feeds — are all defined upfront so there are no expensive surprises mid-build.",
  },
  {
    num: "03",
    title: "Iterative Build with Weekly Demos (Weeks 2–8+)",
    desc: "You see working software every week — not a reveal at the end. Each demo is a functional increment you can review, test, and give feedback on. Scope changes are handled explicitly and priced transparently — not silently absorbed into an ever-expanding retainer.",
  },
  {
    num: "04",
    title: "QA, Security Review & Launch",
    desc: "Cross-browser testing, performance profiling, security review, and deployment to your production infrastructure. We don't hand off a zip file — we deploy, monitor the first 48 hours, and fix anything that surfaces. For manufacturing and retail clients, we support parallel-run periods alongside existing systems.",
  },
  {
    num: "05",
    title: "Post-Launch Support & Iteration",
    desc: "30-day post-launch support included. After that, we offer structured retainer engagements for Manchester businesses that need ongoing development velocity — new features, additional integrations, and performance improvements — without the overhead of a full in-house engineering team.",
  },
];

export default function ManchesterPage() {
  return (
    <main className="bg-[#0a0a0a] text-[#f5f2eb]">
      <JsonLd schema={schema} />
      <JsonLd schema={faqSchema} />

      {/* ── Breadcrumb ── */}
      <div className="max-w-[1200px] mx-auto px-[3rem] pt-40 max-[1100px]:px-6 max-[900px]:pt-36">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.78rem] text-[#8a8680]">
          <Link href="/" className="hover:text-[#a78bfa] transition-colors duration-200">Home</Link>
          <span className="text-[#8a8680]/40">›</span>
          <Link href="/locations" className="hover:text-[#a78bfa] transition-colors duration-200">Locations</Link>
          <span className="text-[#8a8680]/40">›</span>
          <span className="text-[#a78bfa]">Manchester</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-4">
          🇬🇧 Manchester, UK · Software Development Company
        </p>
        <h1
          className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
        >
          Custom Software Built for{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Manchester&apos;s Digital Ambition</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          OrchiX is a software development company working with Manchester businesses across digital media, retail, manufacturing, and HealthTech. We build the software your team actually needs — engineered for production, scoped to your budget, delivered without the agency bloat. From Shopify integrations and ERP connections for Northern retailers to full SaaS platforms for MediaCity scale-ups.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <LocationCtaButton label="Start a Project in Manchester →" />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-syne font-semibold text-[0.9rem] text-[#f5f2eb] border border-[rgba(255,255,255,0.1)] transition-all duration-200 hover:border-[rgba(124,91,245,0.4)] hover:bg-[rgba(124,91,245,0.05)]"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Why OrchiX for Manchester ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Why OrchiX for Manchester</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          What Manchester Businesses Need From{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">a Software Partner</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8] mb-14">
          <p>
            Manchester is home to some of the UK&apos;s fastest-growing digital businesses, a deep manufacturing base, and an emerging tech scene that&apos;s drawing serious investment. But the software challenges are just as serious: legacy ERP systems that haven&apos;t kept pace with growth, e-commerce platforms hitting their ceiling, and manufacturing operations that run on spreadsheets and institutional knowledge rather than proper systems.
          </p>
          <p>
            The local agency market in Manchester is improving, but it&apos;s still dominated by open-ended retainers with senior engineering time spread thin across too many clients. You end up paying for availability, not outcomes. Projects stretch. Scopes expand without explanation. The final bill looks nothing like the original quote.
          </p>
          <p className="text-[#f5f2eb] font-semibold">
            We work differently. Fixed scope, dedicated team, direct access to the engineers writing your code.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 max-[700px]:grid-cols-1">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] p-7 transition-all duration-250 hover:border-[rgba(124,91,245,0.4)] hover:bg-[rgba(124,91,245,0.05)] hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-[rgba(124,91,245,0.12)] border border-[rgba(124,91,245,0.15)] flex items-center justify-center text-xl mb-5">
                {point.icon}
              </div>
              <h3 className="font-syne font-bold text-[0.95rem] text-[#f5f2eb] mb-2">{point.title}</h3>
              <p className="text-[0.84rem] text-[#8a8680] leading-[1.65]">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Services ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">What We Build</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          Custom Software Services{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">for Manchester Businesses</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          Every engagement is a focused engineering project — not a retainer that stretches forever, and not a template that gets dressed up as custom work.
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

      {/* ── Industries ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Industries</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          Sectors We Serve{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">in Manchester</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          Manchester&apos;s economy spans digital media, manufacturing, retail, and life sciences. We&apos;ve built software for each of them and understand the domain constraints, integration requirements, and operational realities specific to each sector.
        </p>

        <div className="grid grid-cols-2 gap-5 max-[700px]:grid-cols-1">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] p-7 transition-all duration-250 hover:border-[rgba(124,91,245,0.4)] hover:bg-[rgba(124,91,245,0.05)] hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-[rgba(124,91,245,0.12)] border border-[rgba(124,91,245,0.15)] flex items-center justify-center text-xl mb-5">
                {ind.icon}
              </div>
              <h3 className="font-syne font-bold text-[1rem] text-[#f5f2eb] mb-3">{ind.name}</h3>
              <p className="text-[0.84rem] text-[#8a8680] leading-[1.7]">{ind.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Process ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">How It Works</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-10"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          From First Call to{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Production-Ready Software</span>
        </h2>

        <div className="flex flex-col max-w-[640px]">
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
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── FAQ ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">FAQ</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-10"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          Questions From{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Manchester Businesses</span>
        </h2>

        <div className="flex flex-col gap-4 max-w-[780px]">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] px-7 py-6"
            >
              <h3 className="font-syne font-bold text-[0.95rem] text-[#f5f2eb] mb-3">{faq.q}</h3>
              <p className="text-[0.86rem] text-[#8a8680] leading-[1.75]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
