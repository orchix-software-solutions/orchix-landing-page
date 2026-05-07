import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Custom Software Development Company New York | OrchiX",
  description:
    "OrchiX is a custom software development company serving New York businesses. We build SaaS platforms, CRM/ERP systems, AI automation, and web & mobile apps for NYC's finance, media, real estate, and enterprise markets.",
  keywords: [
    "custom software development New York",
    "software development company New York",
    "custom software development NYC",
    "software development agency New York",
    "NYC software development company",
    "web app development New York",
    "SaaS development New York",
    "AI automation New York",
    "enterprise software New York",
    "CRM development New York",
    "ERP development NYC",
    "mobile app development New York",
    "fintech software development New York",
    "software company New York City",
    "bespoke software development NYC",
  ],
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/custom-software-development-new-york",
  },
  openGraph: {
    title: "Custom Software Development Company New York | OrchiX",
    description:
      "OrchiX builds custom software for New York businesses — SaaS platforms, AI automation, CRM/ERP systems, and web & mobile apps built for NYC's pace and scale.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-new-york",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX — Custom Software Development New York" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OrchiX Software Solutions — New York",
  description:
    "Custom software development company serving New York businesses. We build SaaS platforms, CRM/ERP systems, AI automation, and web & mobile applications for NYC's finance, media, real estate, and enterprise sectors.",
  url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-new-york",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  areaServed: {
    "@type": "City",
    name: "New York",
    "@id": "https://www.wikidata.org/wiki/Q60",
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
        name: "Custom Software Development New York",
        item: "https://orchixsoftwaresolutions.com/locations/custom-software-development-new-york",
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
      name: "Do you work with New York-based businesses remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work remotely with clients across New York City and the greater New York metro area. All collaboration happens async and over scheduled calls — no time wasted in unnecessary meetings. We align our working hours with US Eastern Time to ensure fast turnaround.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve in New York?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily serve FinTech, PropTech, media & entertainment, healthcare, and enterprise businesses in New York. Our most common engagements involve replacing off-the-shelf tools with custom software, building SaaS platforms from scratch, and automating complex operational workflows.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a custom software project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused MVP or core feature build typically runs 6–12 weeks. Full enterprise systems and SaaS platforms take 3–6 months depending on scope. We scope everything upfront with a fixed deliverable list so you know exactly what you're getting and when.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate with financial and enterprise systems used in New York?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We have experience integrating with Bloomberg APIs, Plaid, Stripe, Salesforce, SAP, and a range of financial data providers and enterprise platforms common in New York's finance and professional services sectors.",
      },
    },
  ],
};

const services = [
  {
    icon: "🖥️",
    title: "Custom Web & App Development",
    desc: "Web applications, internal tools, and client-facing platforms built specifically for your workflows — not adapted from a template. From complex dashboards to multi-sided marketplaces, built to handle New York-scale traffic and data volumes.",
  },
  {
    icon: "☁️",
    title: "SaaS Product Development",
    desc: "End-to-end SaaS builds for founders and product teams. Architecture, backend, frontend, billing integration, multi-tenancy, and everything needed to ship a product that can scale — not just launch.",
  },
  {
    icon: "🤖",
    title: "AI & Intelligent Automation",
    desc: "AI agents, LLM integrations, document processing pipelines, and RAG systems that handle complex, variable tasks — the ones that fall apart in traditional rule-based automation. Built for production, not demos.",
  },
  {
    icon: "🔄",
    title: "Business Process Automation",
    desc: "Identifying and automating the operational bottlenecks that slow growing businesses down. Workflow automation, data pipeline orchestration, and system integrations that remove manual hand-offs between teams and tools.",
  },
  {
    icon: "📊",
    title: "CRM & ERP Development",
    desc: "Custom CRM and ERP systems built around how your sales, operations, and finance teams actually work — not how Salesforce or SAP thinks they should work. Replacing tools your team has outgrown or never fit to begin with.",
  },
  {
    icon: "🛠️",
    title: "Software Maintenance & Support",
    desc: "Ongoing engineering support for existing systems — bug fixes, performance improvements, security patches, and feature development — for teams that need reliable delivery without hiring a full in-house engineering function.",
  },
];

const industries = [
  {
    icon: "🏦",
    name: "FinTech & Financial Services",
    desc: "New York is the world's financial capital. We build trading tools, portfolio management platforms, payment processing systems, compliance dashboards, and client reporting software for hedge funds, RIAs, fintechs, and financial services firms operating in the New York market.",
  },
  {
    icon: "🏙️",
    name: "PropTech & Real Estate",
    desc: "New York's real estate market runs on data and speed. We build property management platforms, listing search tools, deal pipeline CRMs, lease management systems, and investor reporting dashboards for brokerages, developers, and property managers across the five boroughs.",
  },
  {
    icon: "🎬",
    name: "Media & Entertainment",
    desc: "From content distribution platforms to rights management systems and creator tools, we build the software infrastructure that powers New York's media companies — including subscription platforms, content management systems, and ad operations tooling.",
  },
  {
    icon: "🏥",
    name: "Healthcare & MedTech",
    desc: "Patient management systems, telehealth platforms, clinical data tools, and healthcare operations software built with HIPAA compliance and the specific workflow requirements of New York's hospital networks, medical practices, and health-tech startups.",
  },
];

const painPoints = [
  {
    icon: "💸",
    title: "NYC Agency Rates Without NYC Results",
    desc: "Local New York development agencies charge $250–400/hour and still miss deadlines. We deliver the same quality engineering at a fraction of the cost — with a fixed scope, clear timeline, and a team that treats your project like a product, not a billable hour.",
  },
  {
    icon: "⚡",
    title: "New York Moves Fast. Your Software Should Too.",
    desc: "New York's competitive business environment doesn't reward slow software decisions. We scope, start, and ship quickly — with a discovery process that takes days, not months, and a delivery cadence that keeps pace with how New York businesses actually operate.",
  },
  {
    icon: "🔗",
    title: "Complex Integrations Are Our Default",
    desc: "New York businesses run on Bloomberg terminals, Salesforce, SAP, and dozens of financial data feeds. We integrate with them. Complex API work, legacy system connections, and data pipeline architecture are standard scope items, not expensive add-ons.",
  },
  {
    icon: "🛡️",
    title: "Built for Regulated Environments",
    desc: "Financial services, healthcare, and professional services companies in New York operate under strict compliance requirements. We build with audit trails, access controls, data residency requirements, and regulatory-grade security practices from day one — not retrofitted after the fact.",
  },
];

const faqs = [
  {
    q: "Do you work with New York-based businesses remotely?",
    a: "Yes. We work remotely with clients across New York City and the greater New York metro area. All collaboration happens async and over scheduled calls — no time wasted in unnecessary meetings. We align our working hours with US Eastern Time to ensure fast turnaround on decisions and reviews.",
  },
  {
    q: "What industries do you serve in New York?",
    a: "We primarily serve FinTech, PropTech, media & entertainment, healthcare, and enterprise businesses in New York. Our most common engagements involve replacing off-the-shelf tools with custom software, building SaaS platforms from scratch, and automating complex operational workflows.",
  },
  {
    q: "How long does a custom software project take for a New York business?",
    a: "A focused MVP or core feature build typically runs 6–12 weeks. Full enterprise systems and SaaS platforms take 3–6 months depending on scope. We scope everything upfront with a fixed deliverable list so you know exactly what you're getting and when — before a single line of code is written.",
  },
  {
    q: "Can you integrate with financial and enterprise systems common in New York?",
    a: "Yes. We have experience integrating with Bloomberg APIs, Plaid, Stripe, Salesforce, SAP, and a range of financial data providers and enterprise platforms common in New York's finance and professional services sectors.",
  },
  {
    q: "What makes OrchiX different from a New York-based dev agency?",
    a: "We work exclusively on custom software — no website projects, no Shopify themes, no WordPress builds. Every engagement is a proper engineering project with architecture decisions, code review, and production-grade delivery standards. And because we're not paying Midtown Manhattan rent, we can charge significantly less while maintaining the same engineering quality.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Scope Definition (Week 1)",
    desc: "A structured session to map your requirements, define success criteria, identify technical risks, and produce a fixed deliverable list. You leave with a clear scope document — not a vague proposal.",
  },
  {
    num: "02",
    title: "Architecture & Technical Design (Week 1–2)",
    desc: "We design the system before we build it. Database schema, API contracts, infrastructure plan, and third-party integrations are all defined upfront so there are no expensive surprises mid-build.",
  },
  {
    num: "03",
    title: "Iterative Build with Weekly Demos (Weeks 2–8+)",
    desc: "You see working software every week — not a reveal at the end. Each demo is a functional increment you can review, test, and give feedback on. Scope changes are handled explicitly, not silently absorbed.",
  },
  {
    num: "04",
    title: "QA, Security Review & Launch",
    desc: "Cross-browser testing, performance profiling, security review, and deployment to your production infrastructure. We don't hand off a zip file — we deploy, monitor the first 48 hours, and fix anything that surfaces.",
  },
  {
    num: "05",
    title: "Post-Launch Support & Iteration",
    desc: "30-day post-launch support included. After that, we offer structured retainer engagements for teams that need ongoing development velocity without hiring in-house.",
  },
];

export default function NewYorkPage() {
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
          <span className="text-[#a78bfa]">New York</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-4">
          🇺🇸 New York, NY · Custom Software Development
        </p>
        <h1
          className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
        >
          Custom Software Built for{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">New York&apos;s Pace and Scale</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          OrchiX is a custom software development company working with New York businesses across FinTech, PropTech, media, and enterprise. We build the software your team actually needs — not the closest off-the-shelf approximation. Engineered for production, scoped to your budget, delivered on a timeline that keeps pace with how New York moves.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <LocationCtaButton label="Start a Project in New York →" />
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

      {/* ── Why OrchiX for New York ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Why OrchiX for New York</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          What New York Businesses Need From{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">a Software Partner</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8] mb-14">
          <p>
            New York businesses operate at a pace and complexity that generic software can&apos;t keep up with. The CRM that works for a Chicago consultancy doesn&apos;t handle the deal velocity of a Wall Street trading desk. The SaaS platform template that works for a San Francisco startup wasn&apos;t designed for New York&apos;s financial regulation requirements or the specific data integrations your compliance team needs.
          </p>
          <p>
            The alternative — hiring a local New York agency — means paying for Midtown Manhattan overhead. $250–$400 per hour for engineers whose senior capacity is often split across a dozen client projects simultaneously. You&apos;re not getting a dedicated team; you&apos;re getting scheduled time slots.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">for New York Businesses</span>
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">in New York</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          New York&apos;s economy is concentrated in a few high-complexity sectors. We&apos;ve built software for each of them and understand the domain constraints, regulatory environment, and integration requirements specific to each.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">New York Businesses</span>
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
