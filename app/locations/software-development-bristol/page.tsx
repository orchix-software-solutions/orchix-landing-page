import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Software Development Company Bristol | OrchiX",
  description:
    "OrchiX is a software development company serving Bristol businesses. We build custom software, SaaS platforms, CRM/ERP systems, and AI automation for Bristol's aerospace, creative tech, healthcare, and fintech sectors.",
  keywords: [
    "software development company Bristol",
    "software development agency Bristol",
    "custom software development Bristol",
    "web app development Bristol",
    "SaaS development Bristol",
    "aerospace software Bristol",
    "AI automation Bristol",
    "creative tech Bristol",
    "bespoke software Bristol",
    "software company South West",
  ],
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/software-development-bristol",
  },
  openGraph: {
    title: "Software Development Company Bristol | OrchiX",
    description:
      "OrchiX builds custom software for Bristol businesses — SaaS platforms, AI automation, CRM/ERP systems, and engineering-grade software for aerospace, creative tech, healthcare, and fintech.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/locations/software-development-bristol",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX — Software Development Company Bristol" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OrchiX Software Solutions — Bristol",
  description:
    "Software development company serving Bristol businesses. We build custom software, SaaS platforms, CRM/ERP systems, and AI automation for Bristol's aerospace, creative tech, healthcare, and fintech sectors.",
  url: "https://orchixsoftwaresolutions.com/locations/software-development-bristol",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  areaServed: {
    "@type": "City",
    name: "Bristol",
    "@id": "https://www.wikidata.org/wiki/Q23154",
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
        name: "Software Development Company Bristol",
        item: "https://orchixsoftwaresolutions.com/locations/software-development-bristol",
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
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Process Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM & ERP Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software Maintenance & Support" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work with Bristol-based businesses remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work remotely with clients across Bristol and the South West. We align with UK business hours, all collaboration is structured around scheduled calls and async updates — keeping projects moving without unnecessary travel overhead.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve in Bristol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily serve aerospace and defence, creative and digital media, healthcare and life sciences, and fintech and professional services businesses in Bristol. Our most common engagements involve building engineering-grade operational software, scalable media platforms, and NHS-compliant healthcare systems.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a custom software project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused MVP or core feature build typically takes 6–12 weeks. Full enterprise systems take 3–6 months. Everything is scoped upfront with a fixed deliverable list — no surprises.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle aerospace and defence-grade software requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build software with the documentation standards, testing coverage, traceability, and security practices expected in aerospace and defence environments. While we're not an ITAR-registered contractor, we have experience with defence-adjacent software requirements and can work within your programme's compliance framework.",
      },
    },
    {
      "@type": "Question",
      name: "What makes OrchiX different from a Bristol development agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work exclusively on custom software engineering. Every engagement is a proper engineering project — architecture decisions, code review, production-grade delivery standards — not a project managed by an account manager with a rotating team. And we charge less than Bristol agencies without compromising on engineering quality.",
      },
    },
  ],
};

const painPoints = [
  {
    icon: "💸",
    title: "Bristol Engineering Talent Is Expensive and Scarce",
    desc: "Bristol's aerospace and tech talent is highly competitive and agencies reflect that in their rates. We offer dedicated senior engineering capacity at a price point that reflects operational efficiency, not Bristol office costs — with fixed scope and direct access to the engineers writing your code.",
  },
  {
    icon: "✈️",
    title: "Aerospace and Defence Needs Engineering-Grade Software",
    desc: "Airbus, Rolls-Royce, and the defence contractors around Bristol require software built to engineering-grade standards — documentation, traceability, testing coverage, and security practices that match the sector's expectations. That's our baseline.",
  },
  {
    icon: "🎨",
    title: "Creative Sector Needs Scalable Platforms, Not Templates",
    desc: "Bristol's creative and digital media economy is growing fast. Creative agencies, production companies, and content platforms need custom software — not a WordPress theme or a Squarespace site. We build the platforms your creative business needs to operate at scale.",
  },
  {
    icon: "🛡️",
    title: "Healthcare and FinTech Compliance From Day One",
    desc: "Bristol's healthcare and fintech businesses operate under NHS, ICO, and FCA requirements. We build with compliance baked in from the architecture stage — audit logging, data governance, role-based access — not retrofitted at launch.",
  },
];

const services = [
  {
    icon: "🖥️",
    title: "Custom Web & App Development",
    desc: "Web applications and internal tools built around how Bristol businesses actually operate. From aerospace supply chain portals to media asset management systems to healthcare data dashboards, engineered for the complexity of Bristol's industrial and creative sectors.",
  },
  {
    icon: "☁️",
    title: "SaaS Product Development",
    desc: "End-to-end SaaS builds for Bristol founders and product teams. Architecture, backend, frontend, billing integration, multi-tenancy, and everything needed to ship a product that scales — from Bristol's university spin-outs to growing B2B SaaS companies.",
  },
  {
    icon: "🤖",
    title: "AI & Intelligent Automation",
    desc: "AI agents, LLM integrations, and intelligent processing pipelines built for production use in aerospace MRO, healthcare diagnostics support, and creative media workflows. Not demos — production systems with real operational reliability.",
  },
  {
    icon: "🔄",
    title: "Business Process Automation",
    desc: "Automating the operational bottlenecks in Bristol's manufacturing, creative, and professional services businesses. Workflow orchestration, data pipeline automation, and system integrations that remove manual hand-offs between teams and legacy tools.",
  },
  {
    icon: "📊",
    title: "CRM & ERP Development",
    desc: "Custom CRM and ERP systems built around how Bristol's businesses actually operate — not how SAP or Salesforce thinks they should. From aerospace project management to media production tracking to professional services client management.",
  },
  {
    icon: "🛠️",
    title: "Software Maintenance & Support",
    desc: "Ongoing engineering support for existing systems in Bristol's manufacturing, media, and healthcare businesses. Bug fixes, performance improvements, security patches, and feature development — reliable delivery without a full in-house engineering team.",
  },
];

const industries = [
  {
    icon: "✈️",
    name: "Aerospace & Defence",
    desc: "Bristol is the UK's aerospace capital. We build supply chain management platforms, MRO systems, compliance tracking tools, project management software, and technical documentation platforms for Airbus suppliers, defence contractors, and engineering firms across the Bristol and Bath aerospace cluster.",
  },
  {
    icon: "🎬",
    name: "Creative & Digital Media",
    desc: "Bristol's creative economy — from Aardman Animations to the city's growing digital media sector — needs software that handles complex content workflows. We build content management systems, production tracking platforms, rights management tools, and media asset management systems built for creative operations at scale.",
  },
  {
    icon: "🏥",
    name: "Healthcare & Life Sciences",
    desc: "Bristol's healthcare sector — University Hospitals Bristol, the Bristol BRC, and a growing health-tech ecosystem — demands software built to NHS Digital and ICO standards. We build patient management systems, clinical data platforms, research tools, and health-tech products with compliance and security from the ground up.",
  },
  {
    icon: "💳",
    name: "FinTech & Professional Services",
    desc: "Bristol's growing fintech cluster and professional services sector need FCA-compliant, scalable software. We build payment platforms, client management systems, compliance dashboards, and operational tooling for financial services businesses choosing Bristol over London.",
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

const faqs = [
  {
    q: "Do you work with Bristol-based businesses remotely?",
    a: "Yes. We work remotely with clients across Bristol and the South West. We align with UK business hours, all collaboration is structured around scheduled calls and async updates — keeping projects moving without unnecessary travel overhead.",
  },
  {
    q: "What industries do you serve in Bristol?",
    a: "We primarily serve aerospace and defence, creative and digital media, healthcare and life sciences, and fintech and professional services businesses in Bristol. Our most common engagements involve building engineering-grade operational software, scalable media platforms, and NHS-compliant healthcare systems.",
  },
  {
    q: "How long does a custom software project take?",
    a: "A focused MVP or core feature build typically takes 6–12 weeks. Full enterprise systems take 3–6 months. Everything is scoped upfront with a fixed deliverable list — no surprises.",
  },
  {
    q: "Can you handle aerospace and defence-grade software requirements?",
    a: "Yes. We build software with the documentation standards, testing coverage, traceability, and security practices expected in aerospace and defence environments. While we're not an ITAR-registered contractor, we have experience with defence-adjacent software requirements and can work within your programme's compliance framework.",
  },
  {
    q: "What makes OrchiX different from a Bristol development agency?",
    a: "We work exclusively on custom software engineering. Every engagement is a proper engineering project — architecture decisions, code review, production-grade delivery standards — not a project managed by an account manager with a rotating team. And we charge less than Bristol agencies without compromising on engineering quality.",
  },
];

export default function BristolPage() {
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
          <span className="text-[#a78bfa]">Bristol</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-4">
          🇬🇧 Bristol, UK · Software Development Company
        </p>
        <h1
          className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
        >
          Software Built for{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Bristol&apos;s Deep Tech and Creative Economy</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          OrchiX is a software development company working with Bristol businesses across aerospace and defence, creative and digital media, healthcare, and fintech. We build the software your team actually needs — scoped upfront, engineered for production, delivered on a clear timeline without the overhead of Bristol&apos;s tight local agency market.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <LocationCtaButton label="Start a Project in Bristol →" />
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

      {/* ── Why OrchiX for Bristol ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Why OrchiX for Bristol</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          What Bristol Businesses Need From{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">a Software Partner</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8] mb-14">
          <p>
            Bristol&apos;s economy spans the UK&apos;s most demanding software environments — aerospace and defence with engineering-grade documentation requirements, a creative and media sector that needs scalable content platforms, healthcare with NHS Digital compliance obligations, and a growing fintech cluster operating under FCA oversight.
          </p>
          <p>
            Local Bristol agencies are expensive relative to the South West market and often under-resourced for the engineering complexity that aerospace and healthcare engagements demand. You end up paying for an account manager rather than direct access to the senior engineers solving your problem.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">for Bristol Businesses</span>
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">in Bristol</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          Bristol&apos;s economy is concentrated in sectors with demanding software requirements. We understand the domain constraints, regulatory environment, and integration needs specific to each.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">Bristol Businesses</span>
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
