import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Software Development Agency Leeds | OrchiX",
  description:
    "OrchiX is a software development agency serving Leeds businesses. We build custom software, SaaS platforms, CRM/ERP systems, and AI automation for Yorkshire's financial services, healthcare, legal, and e-commerce sectors.",
  keywords: [
    "software development agency Leeds",
    "software development company Leeds",
    "custom software development Leeds",
    "web app development Leeds",
    "SaaS development Leeds",
    "healthcare software Leeds",
    "fintech software Leeds",
    "AI automation Leeds",
    "bespoke software Leeds",
    "software agency Yorkshire",
  ],
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/software-development-leeds",
  },
  openGraph: {
    title: "Software Development Agency Leeds | OrchiX",
    description:
      "OrchiX is a software development agency serving Leeds businesses. We build custom software, SaaS platforms, CRM/ERP systems, and AI automation for Yorkshire's financial services, healthcare, legal, and e-commerce sectors.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/locations/software-development-leeds",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX — Software Development Agency Leeds" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OrchiX Software Solutions — Leeds",
  description:
    "Software development agency serving Leeds businesses. We build custom software, SaaS platforms, CRM/ERP systems, and AI automation for Yorkshire's financial services, healthcare, legal, and e-commerce sectors.",
  url: "https://orchixsoftwaresolutions.com/locations/software-development-leeds",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  areaServed: {
    "@type": "City",
    name: "Leeds",
    "@id": "https://www.wikidata.org/wiki/Q1465",
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
        name: "Software Development Agency Leeds",
        item: "https://orchixsoftwaresolutions.com/locations/software-development-leeds",
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
      name: "Do you work with Leeds-based businesses remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work remotely with clients across Leeds and Yorkshire. We align working hours with UK business hours, structure all collaboration around scheduled calls and async updates, and keep projects moving without unnecessary in-person overhead.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve in Leeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily serve financial and legal services, NHS and healthcare, retail and e-commerce, and education technology businesses in Leeds. Our most common engagements involve building compliance-grade operational software, NHS-connected healthcare platforms, and custom e-commerce infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a custom software project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused MVP or core feature build typically takes 6–12 weeks. Full enterprise systems take 3–6 months. Everything is scoped upfront with a fixed deliverable list — no surprises, no scope creep.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build NHS and healthcare-compliant software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build software that meets NHS Digital standards, Data Security and Protection Toolkit requirements, clinical safety guidelines (DCB0129/DCB0160), and WCAG 2.1 AA accessibility standards. HIPAA-equivalent data handling and IG Toolkit compliance are standard scope items.",
      },
    },
  ],
};

const painPoints = [
  {
    icon: "💸",
    title: "Northern Agency Rates Are Rising — Results Aren't",
    desc: "Leeds development agencies are charging London-approaching rates without London-level delivery. We offer dedicated engineering capacity at a price point that reflects our model, not Yorkshire office overheads, with fixed scope and direct engineer access.",
  },
  {
    icon: "⚕️",
    title: "NHS Digital Transformation Needs Real Engineers",
    desc: "Leeds' NHS trusts and healthcare businesses are under pressure to digitise. We build NHS-compliant patient management systems, clinical data platforms, and healthcare operations software — not off-the-shelf systems that need expensive customisation.",
  },
  {
    icon: "🏦",
    title: "Financial and Legal Compliance Is Non-Negotiable",
    desc: "Leeds is a major UK financial and legal centre. FCA-regulated financial software and solicitor-facing platforms need audit trails, role-based access, and data governance built in from day one — not added as an afterthought.",
  },
  {
    icon: "🛒",
    title: "E-commerce Businesses Are Outgrowing Their Tech Stack",
    desc: "Yorkshire's retail and e-commerce sector is growing fast. When Shopify and Magento can no longer handle your operational complexity, custom software — custom inventory, custom fulfilment, custom CRM — is the only answer.",
  },
];

const services = [
  {
    icon: "🖥️",
    title: "Custom Web & App Development",
    desc: "Web applications and internal tools built around how Leeds businesses actually operate. From NHS-connected clinical dashboards to e-commerce operations portals, built to handle enterprise data volumes and integrate with the systems your teams already run.",
  },
  {
    icon: "☁️",
    title: "SaaS Product Development",
    desc: "End-to-end SaaS builds for Leeds founders and product teams. Architecture, backend, frontend, billing, multi-tenancy, and everything needed to ship a product that can scale beyond its first customers — not just launch.",
  },
  {
    icon: "🤖",
    title: "AI & Intelligent Automation",
    desc: "AI agents, LLM integrations, and document processing pipelines that handle the complex, variable tasks falling apart in traditional rule-based automation. Built for production use in healthcare, financial services, and legal environments.",
  },
  {
    icon: "🔄",
    title: "Business Process Automation",
    desc: "Automating the operational bottlenecks slowing Leeds businesses down. Workflow automation, data pipeline orchestration, and system integrations that remove manual hand-offs across teams and tools.",
  },
  {
    icon: "📊",
    title: "CRM & ERP Development",
    desc: "Custom CRM and ERP systems built around how your sales, operations, and finance teams actually work. Replacing the tools your business has outgrown or that never fit Yorkshire operational realities to begin with.",
  },
  {
    icon: "🛠️",
    title: "Software Maintenance & Support",
    desc: "Ongoing engineering for existing systems — bug fixes, performance improvements, security patches, and feature development for teams that need reliable delivery without a full in-house engineering function.",
  },
];

const industries = [
  {
    icon: "🏦",
    name: "Financial & Legal Services",
    desc: "Leeds is one of the UK's top financial centres outside London. We build compliance management systems, client portal software, document automation platforms, and operational CRM tools for financial services firms, law firms, and professional services businesses across Yorkshire.",
  },
  {
    icon: "⚕️",
    name: "Healthcare & NHS Digital",
    desc: "Leeds' NHS trusts and healthcare businesses need software that meets NHS Digital standards, IG Toolkit requirements, and clinical safety guidelines. We build patient-facing digital services, clinical data management systems, and operational tools for the healthcare sector.",
  },
  {
    icon: "🛒",
    name: "Retail & E-commerce",
    desc: "Yorkshire's retail sector has significant e-commerce presence. We build custom e-commerce platforms, inventory management systems, order management tools, and customer data platforms for retailers who have outgrown the limitations of Shopify or Magento.",
  },
  {
    icon: "🎓",
    name: "Education Technology",
    desc: "Leeds' university cluster and growing EdTech sector generates demand for learning management systems, student information platforms, assessment tools, and educational content platforms. We build EdTech products that are actually designed around how students and educators work.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Scope Definition (Week 1)",
    desc: "A structured session to map your requirements, define success criteria, identify technical risks, and produce a fixed deliverable list. You leave with a clear scope document — not a vague proposal with hourly estimates that balloon.",
  },
  {
    num: "02",
    title: "Architecture & Technical Design (Week 1–2)",
    desc: "We design the system before we build it. Database schema, API contracts, infrastructure plan, and integration architecture are all defined upfront — no expensive surprises mid-project.",
  },
  {
    num: "03",
    title: "Iterative Build with Weekly Demos (Weeks 2–8+)",
    desc: "You see working software every week. Each demo is a functional increment you can review, test, and give feedback on. Scope changes are handled explicitly — not silently absorbed into the budget.",
  },
  {
    num: "04",
    title: "QA, Security Review & Launch",
    desc: "Cross-browser testing, performance profiling, security review, and deployment to your production infrastructure. We don't hand off a zip file — we deploy, monitor the first 48 hours, and fix anything that surfaces.",
  },
  {
    num: "05",
    title: "Post-Launch Support & Iteration",
    desc: "30-day post-launch support included. After that, structured retainer engagements for teams that need ongoing development velocity without hiring in-house.",
  },
];

const faqs = [
  {
    q: "Do you work with Leeds-based businesses remotely?",
    a: "Yes. We work remotely with clients across Leeds and Yorkshire. We align working hours with UK business hours, structure all collaboration around scheduled calls and async updates, and keep projects moving without unnecessary in-person overhead.",
  },
  {
    q: "What industries do you serve in Leeds?",
    a: "We primarily serve financial and legal services, NHS and healthcare, retail and e-commerce, and education technology businesses in Leeds. Our most common engagements involve building compliance-grade operational software, NHS-connected healthcare platforms, and custom e-commerce infrastructure.",
  },
  {
    q: "How long does a custom software project take?",
    a: "A focused MVP or core feature build typically takes 6–12 weeks. Full enterprise systems take 3–6 months. Everything is scoped upfront with a fixed deliverable list — no surprises, no scope creep.",
  },
  {
    q: "Can you build NHS and healthcare-compliant software?",
    a: "Yes. We build software that meets NHS Digital standards, Data Security and Protection Toolkit requirements, clinical safety guidelines (DCB0129/DCB0160), and WCAG 2.1 AA accessibility standards. HIPAA-equivalent data handling and IG Toolkit compliance are standard scope items.",
  },
  {
    q: "What makes OrchiX different from a Leeds development agency?",
    a: "We work exclusively on custom software engineering — no website projects, no CMS configurations. Every engagement is a proper engineering project with architecture decisions and production-grade delivery. We charge significantly less than Leeds agencies without compromising on engineering quality or team dedication.",
  },
];

export default function LeedsPage() {
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
          <span className="text-[#a78bfa]">Leeds</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-4">
          🇬🇧 Leeds, UK · Software Development Agency
        </p>
        <h1
          className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
        >
          Software Built for{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Leeds&apos; Northern Powerhouse Economy</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          OrchiX is a software development agency working with Leeds businesses across financial services, healthcare, legal, and e-commerce. We build the software your team actually needs — not the closest off-the-shelf approximation. Fixed scope, dedicated team, delivered on a timeline that works for how Leeds moves.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <LocationCtaButton label="Start a Project in Leeds →" />
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

      {/* ── Why OrchiX for Leeds ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Why OrchiX for Leeds</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          What Leeds Businesses Need From{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">a Software Partner</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8] mb-14">
          <p>
            Leeds is one of the UK&apos;s most economically significant cities outside London — a major financial and legal centre, an NHS hub under pressure to digitise, a growing e-commerce economy, and a university cluster that generates real EdTech demand. The software serving these industries needs to be engineered properly, not assembled from off-the-shelf tools and templates.
          </p>
          <p>
            Local agencies have noticed the opportunity and raised their rates accordingly. But rates rising doesn&apos;t mean delivery has improved. Teams are still spread thin across too many clients, scopes are still vague, and projects still run over time and budget. The businesses bearing the cost are yours.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">for Leeds Businesses</span>
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">in Leeds</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          Leeds&apos; economy spans financial and legal services, NHS healthcare, growing e-commerce, and a strong education sector. We understand the compliance requirements, integration complexity, and domain constraints specific to each.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">Leeds Businesses</span>
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
