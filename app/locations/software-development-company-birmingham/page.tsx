import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Software Development Agency Birmingham | OrchiX",
  description:
    "OrchiX is a software development agency serving Birmingham businesses. We build custom software, SaaS platforms, CRM/ERP systems, and AI automation for West Midlands manufacturing, finance, and enterprise.",
  keywords: [
    "software development agency Birmingham",
    "software development company Birmingham",
    "custom software development Birmingham",
    "web app development Birmingham",
    "SaaS development Birmingham",
    "AI automation Birmingham",
    "manufacturing software Birmingham",
    "ERP development Birmingham",
    "bespoke software Birmingham",
    "software agency West Midlands",
  ],
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/software-development-company-birmingham",
  },
  openGraph: {
    title: "Software Development Agency Birmingham | OrchiX",
    description:
      "OrchiX is a software development agency serving Birmingham businesses. We build custom software, SaaS platforms, CRM/ERP systems, and AI automation for West Midlands manufacturing, finance, and enterprise.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/locations/software-development-company-birmingham",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX — Software Development Agency Birmingham" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OrchiX Software Solutions — Birmingham",
  description:
    "Software development agency serving Birmingham businesses. We build custom software, SaaS platforms, CRM/ERP systems, and AI automation for West Midlands manufacturing, finance, and enterprise.",
  url: "https://orchixsoftwaresolutions.com/locations/software-development-company-birmingham",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  areaServed: {
    "@type": "City",
    name: "Birmingham",
    "@id": "https://www.wikidata.org/wiki/Q2256",
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
        name: "Software Development Agency Birmingham",
        item: "https://orchixsoftwaresolutions.com/locations/software-development-company-birmingham",
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
      name: "Do you work with Birmingham-based businesses remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work remotely with clients across Birmingham and the wider West Midlands region. All collaboration happens over scheduled calls and async updates — we align working hours with UK business hours to ensure fast turnaround on decisions and reviews.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve in Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily serve manufacturing and engineering, financial services, retail and logistics, and healthcare businesses in Birmingham. Our most common engagements involve building custom operational software to replace tools that no longer fit, automating complex workflows, and integrating modern platforms with legacy systems.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a custom software project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused MVP or core feature build typically runs 6–12 weeks. Full enterprise systems and SaaS platforms take 3–6 months depending on scope. We define everything upfront with a fixed deliverable list — so you know exactly what you're getting and when before a single line of code is written.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate with manufacturing ERP and MES systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We have experience integrating with SAP, Oracle ERP, Microsoft Dynamics, and a range of manufacturing execution systems and industrial data platforms. Complex integration work is standard scope — not an expensive add-on.",
      },
    },
  ],
};

const painPoints = [
  {
    icon: "💸",
    title: "Birmingham Agency Rates Without the Results",
    desc: "Birmingham dev agencies charge £120–£200/hr and still miss deadlines. We deliver the same quality engineering for significantly less — with fixed scope, a clear timeline, and a team focused entirely on your project.",
  },
  {
    icon: "⚙️",
    title: "Manufacturing Needs More Than Generic Software",
    desc: "West Midlands manufacturers run on complex ERP, MES, and supply chain systems. We integrate with them. Industry 4.0 connectivity, custom MES dashboards, and production automation are standard scope items for us — not expensive additions.",
  },
  {
    icon: "🔗",
    title: "Legacy System Integrations Done Properly",
    desc: "Birmingham's industrial and financial businesses carry decades of legacy infrastructure. We connect modern software to legacy systems — SAP, Oracle, bespoke databases — without rewriting everything from scratch.",
  },
  {
    icon: "🛡️",
    title: "Built for Regulated West Midlands Industries",
    desc: "Financial services and healthcare businesses in Birmingham operate under FCA, ICO, and NHS compliance requirements. We build with audit trails, access controls, and data governance from the start.",
  },
];

const services = [
  {
    icon: "🖥️",
    title: "Custom Web & App Development",
    desc: "Web applications and internal tools built around how Birmingham businesses actually operate. From complex manufacturing dashboards to client-facing portals, built to handle enterprise data volumes and integrate with the systems your team already runs.",
  },
  {
    icon: "☁️",
    title: "SaaS Product Development",
    desc: "End-to-end SaaS builds for Birmingham founders and product teams. Architecture, backend, frontend, billing, multi-tenancy, and everything needed to ship a product that can scale beyond its first customers — not just launch.",
  },
  {
    icon: "🤖",
    title: "AI & Intelligent Automation",
    desc: "AI agents, LLM integrations, and document processing pipelines that handle the complex, variable tasks falling apart in traditional rule-based automation. Built for production use in manufacturing, logistics, and financial services environments.",
  },
  {
    icon: "🔄",
    title: "Business Process Automation",
    desc: "Automating the operational bottlenecks slowing Birmingham businesses down. Workflow automation, data pipeline orchestration, and system integrations that remove manual hand-offs across teams and tools.",
  },
  {
    icon: "📊",
    title: "CRM & ERP Development",
    desc: "Custom CRM and ERP systems built around how your sales, operations, and finance teams actually work. Replacing the tools your business has outgrown or that never fit West Midlands operational realities to begin with.",
  },
  {
    icon: "🛠️",
    title: "Software Maintenance & Support",
    desc: "Ongoing engineering for existing systems — bug fixes, performance improvements, security patches, and feature development for teams that need reliable delivery without a full in-house engineering function.",
  },
];

const industries = [
  {
    icon: "⚙️",
    name: "Manufacturing & Engineering",
    desc: "Birmingham is the UK's manufacturing heartland. We build custom MES systems, production tracking dashboards, quality management platforms, supply chain visibility tools, and Industry 4.0 integrations for West Midlands manufacturers and engineering firms.",
  },
  {
    icon: "🏦",
    name: "Financial Services",
    desc: "With HSBC UK's HQ and a growing FinTech cluster, Birmingham's financial sector demands compliant, scalable software. We build lending platforms, compliance dashboards, client reporting systems, and operational tools for financial services firms across the West Midlands.",
  },
  {
    icon: "🛒",
    name: "Retail & Logistics",
    desc: "Birmingham's position as a logistics hub and retail centre drives demand for custom inventory management systems, warehouse automation software, e-commerce platforms, and last-mile delivery tools built around operational reality — not what an off-the-shelf SaaS vendor assumes.",
  },
  {
    icon: "🏥",
    name: "Healthcare & Life Sciences",
    desc: "Patient management systems, clinical data tools, and healthcare operations software built with NHS and ICO compliance requirements. Serving Birmingham's hospital networks, GP practices, and health-tech startups emerging from the city's life sciences cluster.",
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
    q: "Do you work with Birmingham-based businesses remotely?",
    a: "Yes. We work remotely with clients across Birmingham and the wider West Midlands region. All collaboration happens over scheduled calls and async updates — we align working hours with UK business hours to ensure fast turnaround on decisions and reviews.",
  },
  {
    q: "What industries do you serve in Birmingham?",
    a: "We primarily serve manufacturing and engineering, financial services, retail and logistics, and healthcare businesses in Birmingham. Our most common engagements involve building custom operational software to replace tools that no longer fit, automating complex workflows, and integrating modern platforms with legacy systems.",
  },
  {
    q: "How long does a custom software project take?",
    a: "A focused MVP or core feature build typically runs 6–12 weeks. Full enterprise systems and SaaS platforms take 3–6 months depending on scope. We define everything upfront with a fixed deliverable list — so you know exactly what you're getting and when before a single line of code is written.",
  },
  {
    q: "Can you integrate with manufacturing ERP and MES systems?",
    a: "Yes. We have experience integrating with SAP, Oracle ERP, Microsoft Dynamics, and a range of manufacturing execution systems and industrial data platforms. Complex integration work is standard scope — not an expensive add-on.",
  },
  {
    q: "What makes OrchiX different from a Birmingham development agency?",
    a: "We work exclusively on custom software engineering — no website projects, no CMS builds, no template customisation. Every engagement is a proper engineering project with architecture decisions, code review, and production-grade delivery standards. And we don't carry the overhead of a city-centre Birmingham office, which means we charge significantly less while maintaining the same engineering quality.",
  },
];

export default function BirminghamPage() {
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
          <span className="text-[#a78bfa]">Birmingham</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-4">
          🇬🇧 Birmingham, UK · Software Development Agency
        </p>
        <h1
          className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
        >
          Software Built for{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Birmingham&apos;s Growing Tech Economy</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          OrchiX is a software development agency working with Birmingham businesses across manufacturing, financial services, retail, and enterprise. We build custom software your team actually needs — not the closest off-the-shelf approximation. Scoped to your budget, engineered for production, delivered on time.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <LocationCtaButton label="Start a Project in Birmingham →" />
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

      {/* ── Why OrchiX for Birmingham ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Why OrchiX for Birmingham</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          What Birmingham Businesses Need From{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">a Software Partner</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8] mb-14">
          <p>
            Birmingham is the UK&apos;s second city and one of its most industrially diverse economies. West Midlands manufacturers are under pressure to modernise. Financial services firms need compliant, scalable platforms. And the local agency market too often delivers generalist work at specialist prices.
          </p>
          <p>
            The result: businesses end up with software that was built fast and needs rebuilding within two years, or with ERP integrations that barely work and cost a fortune to maintain. Neither outcome is acceptable when you&apos;re running a production line or managing regulated financial data.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">for Birmingham Businesses</span>
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">in Birmingham</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          Birmingham&apos;s economy is built on manufacturing depth, financial services, and logistics advantage. We understand the domain constraints, compliance requirements, and integration complexity specific to each sector.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">Birmingham Businesses</span>
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
