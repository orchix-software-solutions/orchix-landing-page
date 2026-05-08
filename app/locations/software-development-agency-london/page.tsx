import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Software Development Agency London | OrchiX",
  description:
    "OrchiX is a software development agency serving London businesses. We build SaaS platforms, CRM/ERP systems, AI automation, and web applications for London's FinTech, PropTech, media, and enterprise markets — without the £150–£300/hr London agency rates.",
  keywords: [
    "software development agency London",
    "software development company London",
    "custom software development London",
    "web app development London",
    "SaaS development London",
    "AI automation London",
    "enterprise software London",
    "fintech software London",
    "bespoke software London",
    "software agency UK",
    "software development London",
    "CRM development London",
    "ERP development London",
    "Open Banking integration London",
    "FCA compliant software London",
  ],
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/software-development-agency-london",
  },
  openGraph: {
    title: "Software Development Agency London | OrchiX",
    description:
      "OrchiX builds custom software for London businesses — SaaS platforms, AI automation, CRM/ERP systems, and web applications built for London's pace and scale.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/locations/software-development-agency-london",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX — Software Development Agency London" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OrchiX Software Solutions — London",
  description:
    "Software development agency serving London businesses. We build SaaS platforms, CRM/ERP systems, AI automation, and web applications for London's FinTech, PropTech, media, and enterprise sectors.",
  url: "https://orchixsoftwaresolutions.com/locations/software-development-agency-london",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  areaServed: {
    "@type": "City",
    name: "London",
    "@id": "https://www.wikidata.org/wiki/Q84",
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
        name: "Software Development Agency London",
        item: "https://orchixsoftwaresolutions.com/locations/software-development-agency-london",
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
      name: "Do you work with London-based businesses remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work remotely with clients across London and the wider UK. All collaboration happens async and over scheduled calls — no unnecessary meetings in Shoreditch co-working spaces. We align our working hours with UK time to ensure fast turnaround on decisions and reviews.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily serve FinTech & financial services (City of London, Canary Wharf), PropTech & real estate, media & AdTech, and healthcare & MedTech businesses in London. Our most common engagements involve replacing off-the-shelf tools with custom software, building SaaS platforms, and automating complex operational workflows.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a custom software project take for a London business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused MVP or core feature build typically runs 6–12 weeks. Full enterprise systems and SaaS platforms take 3–6 months depending on scope. We scope everything upfront with a fixed deliverable list so you know exactly what you're getting and when — before a single line of code is written.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate with UK financial systems such as Open Banking and FCA-regulated platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We have experience integrating with Open Banking APIs, FCA-regulated data providers, Plaid, Stripe, GoCardless, Salesforce, and a range of financial data platforms common in London's financial services sector. Compliance-aware architecture — audit trails, access controls, data residency — is built in from day one.",
      },
    },
    {
      "@type": "Question",
      name: "What makes OrchiX different from a London software development agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "London agencies typically charge £150–£300 per hour and distribute senior engineers across many client projects simultaneously. We work on fixed scope with a dedicated team — you get direct access to the engineers writing your code, not account managers. And because we're not paying EC2 or Shoreditch office rents, we deliver the same engineering quality at a significantly lower cost.",
      },
    },
  ],
};

const services = [
  {
    icon: "🖥️",
    title: "Custom Web & App Development",
    desc: "Web applications, internal tools, and client-facing platforms built specifically for your London business workflows — not adapted from a template. From complex dashboards serving City traders to multi-sided property marketplaces, built to handle the data volumes and uptime expectations London businesses demand.",
  },
  {
    icon: "☁️",
    title: "SaaS Product Development",
    desc: "End-to-end SaaS builds for London founders and product teams. Architecture, backend, frontend, billing integration, multi-tenancy, and everything needed to ship a product that can scale across the UK and European markets — not just launch.",
  },
  {
    icon: "🤖",
    title: "AI & Intelligent Automation",
    desc: "AI agents, LLM integrations, document processing pipelines, and RAG systems built for London's high-stakes business environments — financial compliance checking, contract analysis, client onboarding automation. Built for production use in regulated industries, not just demos.",
  },
  {
    icon: "🔄",
    title: "Business Process Automation",
    desc: "Identifying and automating the operational bottlenecks that slow London businesses down. Workflow automation, data pipeline orchestration, and system integrations that remove manual hand-offs between teams — from back-office finance operations to client reporting workflows.",
  },
  {
    icon: "📊",
    title: "CRM & ERP Development",
    desc: "Custom CRM and ERP systems built around how London's sales, operations, and compliance teams actually work — not how Salesforce or Microsoft Dynamics assumes they do. Replacing tools your team has outgrown or that were never built with UK financial regulation in mind.",
  },
  {
    icon: "🛠️",
    title: "Software Maintenance & Support",
    desc: "Ongoing engineering support for existing systems — bug fixes, performance improvements, security patches, and feature development. Particularly valuable for London financial services and healthcare businesses that need reliable, compliant systems without the cost of a full in-house engineering function.",
  },
];

const industries = [
  {
    icon: "🏦",
    name: "FinTech & Financial Services",
    desc: "London is Europe's financial capital. We build trading tools, portfolio management platforms, Open Banking integrations, FCA compliance dashboards, client reporting software, and payment processing systems for hedge funds, wealth managers, fintechs, and financial services firms operating across the City of London and Canary Wharf.",
  },
  {
    icon: "🏙️",
    name: "PropTech & Real Estate",
    desc: "London's property market runs on data, speed, and complex deal structures. We build property management platforms, listing and search tools, deal pipeline CRMs, lease management systems, and investor reporting dashboards for estate agents, property developers, and asset managers across London and the wider UK market.",
  },
  {
    icon: "📺",
    name: "Media & AdTech",
    desc: "From content distribution platforms to programmatic ad operations tooling and rights management systems, we build the software infrastructure that powers London's media companies — including subscription platforms, content management systems, and audience data pipelines serving publishers across the UK and Europe.",
  },
  {
    icon: "🏥",
    name: "Healthcare & MedTech",
    desc: "Patient management systems, telehealth platforms, clinical data tools, and healthcare operations software built with NHS interoperability requirements, GDPR compliance, and the specific workflow demands of London's hospital networks, private medical practices, and health-tech startups.",
  },
];

const painPoints = [
  {
    icon: "💸",
    title: "London Agency Rates Without London Results",
    desc: "Software development agencies in London charge £150–£300 per hour and still miss deadlines. We deliver the same quality engineering at a fraction of the cost — with a fixed scope, clear timeline, and a dedicated team that treats your project like a product, not a billable hour running against a retainer.",
  },
  {
    icon: "⚡",
    title: "London Moves Fast. Your Software Should Too.",
    desc: "London's competitive business environment — particularly in financial services and technology — doesn't reward slow software decisions. We scope, start, and ship quickly, with a discovery process that takes days, not months, and a delivery cadence that keeps pace with how London businesses actually operate.",
  },
  {
    icon: "🔗",
    title: "Open Banking & FCA Integrations Are Our Default",
    desc: "London businesses in financial services run on Open Banking APIs, FCA-regulated data feeds, and complex third-party integrations. We integrate with them. Compliance-aware architecture, audit logging, and regulated API connections are standard scope items — not expensive add-ons from a specialist contractor.",
  },
  {
    icon: "🛡️",
    title: "Built for Regulated UK Environments",
    desc: "Financial services, healthcare, and professional services companies in London operate under FCA, ICO, and NHS data governance frameworks. We build with audit trails, role-based access controls, UK data residency requirements, and regulatory-grade security from day one — not retrofitted after an audit flags the gaps.",
  },
];

const faqs = [
  {
    q: "Do you work with London-based businesses remotely?",
    a: "Yes. We work remotely with clients across London and the wider UK. All collaboration happens async and over scheduled calls — no unnecessary meetings in Shoreditch co-working spaces. We align our working hours with UK time to ensure fast turnaround on decisions and reviews.",
  },
  {
    q: "What industries do you serve in London?",
    a: "We primarily serve FinTech & financial services (City of London, Canary Wharf), PropTech & real estate, media & AdTech, and healthcare & MedTech businesses in London. Our most common engagements involve replacing off-the-shelf tools with custom software, building SaaS platforms from scratch, and automating complex operational workflows.",
  },
  {
    q: "How long does a custom software project take for a London business?",
    a: "A focused MVP or core feature build typically runs 6–12 weeks. Full enterprise systems and SaaS platforms take 3–6 months depending on scope. We scope everything upfront with a fixed deliverable list so you know exactly what you're getting and when — before a single line of code is written.",
  },
  {
    q: "Can you integrate with UK financial systems such as Open Banking and FCA-regulated platforms?",
    a: "Yes. We have experience integrating with Open Banking APIs, FCA-regulated data providers, Plaid, Stripe, GoCardless, Salesforce, and a range of financial data platforms common in London's financial services sector. Compliance-aware architecture — audit trails, access controls, UK data residency — is built in from day one.",
  },
  {
    q: "What makes OrchiX different from a London software development agency?",
    a: "London agencies typically charge £150–£300 per hour and distribute senior engineers across many client projects simultaneously. We work on fixed scope with a dedicated team — you get direct access to the engineers writing your code, not account managers. And because we're not paying EC2 or Shoreditch office rents, we deliver the same engineering quality at a significantly lower cost.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Scope Definition (Week 1)",
    desc: "A structured session to map your requirements, define success criteria, identify technical risks — including any FCA compliance or data governance constraints — and produce a fixed deliverable list. You leave with a clear scope document, not a vague proposal.",
  },
  {
    num: "02",
    title: "Architecture & Technical Design (Week 1–2)",
    desc: "We design the system before we build it. Database schema, API contracts, infrastructure plan, and third-party integrations — including Open Banking, payment gateways, or NHS data systems — are all defined upfront so there are no expensive surprises mid-build.",
  },
  {
    num: "03",
    title: "Iterative Build with Weekly Demos (Weeks 2–8+)",
    desc: "You see working software every week — not a reveal at the end. Each demo is a functional increment you can review, test, and give feedback on. Scope changes are handled explicitly, not silently absorbed into an unbounded retainer.",
  },
  {
    num: "04",
    title: "QA, Security Review & Launch",
    desc: "Cross-browser testing, performance profiling, security review, and deployment to your production infrastructure. We don't hand off a zip file — we deploy, monitor the first 48 hours, and fix anything that surfaces. For regulated industries, we support compliance sign-off documentation.",
  },
  {
    num: "05",
    title: "Post-Launch Support & Iteration",
    desc: "30-day post-launch support included. After that, we offer structured retainer engagements for London businesses that need ongoing development velocity — new features, integrations, and performance improvements — without the cost of a full in-house engineering team.",
  },
];

export default function LondonPage() {
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
          <span className="text-[#a78bfa]">London</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-4">
          🇬🇧 London, UK · Software Development Agency
        </p>
        <h1
          className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
        >
          Custom Software Built for{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">London&apos;s Pace and Scale</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          OrchiX is a software development agency working with London businesses across FinTech, PropTech, media, and enterprise. We build the software your team actually needs — engineered for production, scoped to your budget, delivered without the £150–£300/hr London agency overhead. From Open Banking integrations for City of London fintechs to full SaaS platforms for UK scale-ups.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <LocationCtaButton label="Start a Project in London →" />
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

      {/* ── Why OrchiX for London ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Why OrchiX for London</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          What London Businesses Need From{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">a Software Partner</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8] mb-14">
          <p>
            London businesses operate under a unique combination of pressures: the regulatory complexity of FCA oversight, the integration demands of Open Banking and financial data APIs, and a market that simply doesn&apos;t tolerate slow or brittle software. Generic SaaS tools and off-the-shelf platforms weren&apos;t designed for the compliance requirements, data volumes, or client expectations of London&apos;s financial services and enterprise sectors.
          </p>
          <p>
            The alternative — hiring a local London agency — means paying for EC2 office overheads in Shoreditch or Soho. £150–£300 per hour for engineers whose senior capacity is spread across multiple client retainers simultaneously. You get scheduled time slots, not a team that owns your product&apos;s outcome.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">for London Businesses</span>
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">in London</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          London&apos;s economy is concentrated in a few high-complexity sectors. We&apos;ve built software for each of them and understand the domain constraints, regulatory environment, and integration requirements specific to each.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">London Businesses</span>
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
