import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Custom Software Development Company Austin | OrchiX",
  description:
    "OrchiX is a custom software development company serving Austin businesses. We build SaaS platforms, AI automation, CRM/ERP systems, and web & mobile apps for Austin's fast-growing tech, manufacturing, and startup ecosystem.",
  keywords: [
    "custom software development Austin",
    "software development company Austin",
    "software development agency Austin TX",
    "custom software development Austin TX",
    "Austin software development company",
    "SaaS development Austin",
    "AI automation Austin",
    "web app development Austin",
    "startup software development Austin",
    "enterprise software Austin",
    "CRM development Austin",
    "MVP development Austin",
    "software company Austin Texas",
    "Silicon Hills software development",
    "tech startup software Austin",
  ],
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/custom-software-development-austin",
  },
  openGraph: {
    title: "Custom Software Development Company Austin | OrchiX",
    description:
      "OrchiX builds custom software for Austin's fastest-growing companies — SaaS platforms, AI automation, CRM/ERP systems, and web & mobile apps engineered for Austin's scale-up pace.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-austin",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX — Custom Software Development Austin" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OrchiX Software Solutions — Austin",
  description:
    "Custom software development company serving Austin businesses. We build SaaS platforms, AI automation, CRM/ERP systems, and web & mobile applications for Austin's tech, manufacturing, and startup sectors.",
  url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-austin",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  areaServed: {
    "@type": "City",
    name: "Austin",
    "@id": "https://www.wikidata.org/wiki/Q16559",
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
        name: "Custom Software Development Austin",
        item: "https://orchixsoftwaresolutions.com/locations/custom-software-development-austin",
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
      name: "Do you work with Austin-based startups and scaleups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Austin's startup scene is one of the fastest-growing in the US and we work with companies at every stage — from pre-seed founders validating an idea to Series B companies replacing tools they've outgrown. We understand Austin's growth pace and scope projects accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "Can you replace off-the-shelf tools our Austin business has outgrown?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — this is one of our most common Austin engagements. Companies that scaled quickly on HubSpot, Monday.com, or Airtable hit a ceiling where the tool can't keep up with their actual workflows. We audit what you're using, identify the gaps, and build a custom system that fits exactly how your team operates.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve manufacturing and hardware tech companies in Austin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Austin's manufacturing and hardware sector — driven by companies like Tesla, Samsung, and NXP Semiconductors — has specific software needs around operations management, supply chain visibility, and production tracking. We build the operational platforms that connect physical production to digital oversight.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you start a project with an Austin company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can typically start within one to two weeks of a signed agreement. Our discovery and scoping process runs in parallel with contract finalisation, so we're not losing time. Austin companies tell us this is significantly faster than local agency timelines they've experienced.",
      },
    },
    {
      "@type": "Question",
      name: "What makes OrchiX different from Austin-based development agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We focus exclusively on complex custom software — not websites, Shopify stores, or template-based builds. Every engagement is a proper engineering project with architecture decisions, code review, and production-grade standards. We also work at a price point that reflects not paying Austin office rents, without the quality trade-off.",
      },
    },
  ],
};

const services = [
  {
    icon: "🖥️",
    title: "Custom Web & App Development",
    desc: "Web applications, internal tools, and client-facing platforms built around how your Austin business actually operates. From operations dashboards to customer portals and multi-sided marketplaces — engineered to handle the growth Austin companies experience.",
  },
  {
    icon: "☁️",
    title: "SaaS Product Development",
    desc: "Full SaaS builds for Austin founders — architecture, backend, frontend, billing, multi-tenancy, and the infrastructure to scale. Whether you're raising a seed round and need an MVP or post-Series A and need a production-grade rebuild, we scope and ship it.",
  },
  {
    icon: "🤖",
    title: "AI & Intelligent Automation",
    desc: "AI agents, LLM integrations, and intelligent workflow automation for Austin companies looking to do more without scaling headcount proportionally. We build AI that works reliably in production — not demos that impress in presentations and break in real use.",
  },
  {
    icon: "🔄",
    title: "Business Process Automation",
    desc: "Replacing the manual hand-offs and spreadsheet-based processes that slow fast-growing Austin companies down. Workflow automation, system integrations, and data pipeline orchestration that eliminate bottlenecks before they become growth ceilings.",
  },
  {
    icon: "📊",
    title: "CRM & ERP Development",
    desc: "Custom CRM and ERP systems for Austin companies that have outgrown Salesforce configurations, Monday.com workarounds, and Airtable hacks. Built specifically for your sales motion, your operations, and your reporting requirements.",
  },
  {
    icon: "🛠️",
    title: "Software Maintenance & Support",
    desc: "Ongoing engineering support for Austin businesses that need reliable development velocity without building a full in-house team. Bug fixes, performance improvements, security patches, and feature development on a predictable retainer.",
  },
];

const industries = [
  {
    icon: "🚀",
    name: "Tech Startups & Scaleups",
    desc: "Austin has become one of the top destinations for tech startups relocating from San Francisco and New York. We work with the companies landing in Silicon Hills — building their core products, replacing tools they've outgrown mid-growth, and adding engineering capacity without the overhead of local hiring.",
  },
  {
    icon: "🏭",
    name: "Manufacturing & Hardware Tech",
    desc: "Austin's manufacturing sector — anchored by Tesla's Gigafactory, Samsung's chip plant, and a growing hardware ecosystem — needs software that bridges physical operations and digital management. We build production tracking systems, supply chain dashboards, operational ERPs, and IoT data platforms.",
  },
  {
    icon: "🏥",
    name: "Healthcare & HealthTech",
    desc: "Austin's healthcare sector is expanding rapidly alongside the city's population growth. We build patient management platforms, telehealth tools, healthcare operations software, and clinical data systems with HIPAA compliance and the specific workflow requirements of Austin's medical groups and health-tech companies.",
  },
  {
    icon: "⚡",
    name: "Energy & GovTech",
    desc: "Texas's energy market and Austin's role as the state capital create unique software requirements around energy management platforms, grid data systems, and government-adjacent operational tools. We build the software for companies operating in these regulated, data-heavy environments.",
  },
];

const painPoints = [
  {
    icon: "📈",
    title: "Austin Companies Scale Fast and Break Their Tools",
    desc: "Austin's growth rate is exceptional — and off-the-shelf software that worked at 20 employees breaks at 200. We specialise in building the custom systems that replace the patchwork of tools growing companies accumulate. One system, built for how you actually work, that scales with you.",
  },
  {
    icon: "🧩",
    title: "Bay Area Standards Without Bay Area Prices",
    desc: "Austin attracted a wave of tech talent and companies from San Francisco — bringing Silicon Valley expectations without Silicon Valley budgets. We deliver the same engineering quality those companies are used to, at a price point that makes sense for Austin's market.",
  },
  {
    icon: "⚡",
    title: "Fast Decisions Need Fast Delivery",
    desc: "Austin moves quickly. Companies here make faster decisions and expect their software partners to keep up. We scope in days, start within weeks, and ship working software in fortnightly increments — no six-month discovery phases, no slow project management overhead.",
  },
  {
    icon: "🔗",
    title: "Physical-Digital Integration Is the Hard Part",
    desc: "Austin's manufacturing and hardware companies need software that connects physical operations — production lines, equipment sensors, supply chains — with digital management and reporting. Building across this boundary is where most generalist agencies struggle. It's where we specialise.",
  },
];

const faqs = [
  {
    q: "Do you work with Austin-based startups and scaleups?",
    a: "Yes. Austin's startup scene is one of the fastest-growing in the US and we work with companies at every stage — from pre-seed founders validating an idea to Series B companies replacing tools they've outgrown. We understand Austin's growth pace and scope projects accordingly.",
  },
  {
    q: "Can you replace off-the-shelf tools our Austin business has outgrown?",
    a: "Yes — this is one of our most common Austin engagements. Companies that scaled quickly on HubSpot, Monday.com, or Airtable hit a ceiling where the tool can't keep up with their actual workflows. We audit what you're using, identify the gaps, and build a custom system that fits exactly how your team operates.",
  },
  {
    q: "Do you serve manufacturing and hardware tech companies in Austin?",
    a: "Yes. Austin's manufacturing and hardware sector — driven by companies like Tesla, Samsung, and NXP Semiconductors — has specific software needs around operations management, supply chain visibility, and production tracking. We build the operational platforms that connect physical production to digital oversight.",
  },
  {
    q: "How quickly can you start a project with an Austin company?",
    a: "We can typically start within one to two weeks of a signed agreement. Our discovery and scoping process runs in parallel with contract finalisation, so we're not losing time. Austin companies tell us this is significantly faster than local agency timelines they've experienced.",
  },
  {
    q: "What makes OrchiX different from Austin-based development agencies?",
    a: "We focus exclusively on complex custom software — not websites, Shopify stores, or template-based builds. Every engagement is a proper engineering project with architecture decisions, code review, and production-grade standards. We also work at a price point that reflects not paying Austin office rents, without the quality trade-off.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Scope Definition (Week 1)",
    desc: "A structured session to map your requirements, cut non-essential scope, identify risks, and produce a fixed deliverable list with clear acceptance criteria. You leave with certainty about what you're getting and when — before signing anything.",
  },
  {
    num: "02",
    title: "Architecture & Technical Design (Weeks 1–2)",
    desc: "Database schema, API design, infrastructure plan, and third-party integrations defined before a single line of application code is written. The decisions that determine whether your system scales are made here — not discovered mid-build.",
  },
  {
    num: "03",
    title: "Fortnightly Increments with Live Demos (Weeks 2–8+)",
    desc: "Working software every two weeks — not a reveal at the end. Each increment is deployable and demonstrable. You can share it with investors, test it with early users, and give feedback that shapes what we build next.",
  },
  {
    num: "04",
    title: "QA, Security Review & Production Launch",
    desc: "Full test coverage on core flows, performance profiling under realistic load, and deployment to production infrastructure. We monitor the first 48 hours post-launch and fix anything that surfaces — no hand-off and disappear.",
  },
  {
    num: "05",
    title: "Post-Launch Support & Ongoing Development",
    desc: "30-day post-launch support included as standard. After that, structured retainer engagements for Austin teams that want continued development velocity without building an in-house engineering function.",
  },
];

export default function AustinPage() {
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
          <span className="text-[#a78bfa]">Austin</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-4">
          🇺🇸 Austin, TX · Custom Software Development
        </p>
        <h1
          className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
        >
          Custom Software for Austin&apos;s{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Fastest-Growing Companies</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          OrchiX is a custom software development company working with Austin startups, scaleups, and enterprise businesses. We build the software that keeps pace with Austin&apos;s growth — from SaaS MVPs for Silicon Hills founders to operational platforms for manufacturing and healthcare companies expanding across Texas.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <LocationCtaButton label="Start a Project in Austin →" />
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

      {/* ── Why OrchiX for Austin ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Why OrchiX for Austin</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          What Austin Businesses Need From{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">a Software Partner</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8] mb-14">
          <p>
            Austin is growing faster than almost any major US city — and the companies here feel it. Teams that hit product-market fit on a set of duct-taped tools suddenly need real systems. Companies relocating from San Francisco and New York arrive expecting Silicon Valley engineering quality but are working with Austin-sized budgets. Manufacturers expanding their Texas footprint need software that didn&apos;t exist when they were smaller.
          </p>
          <p>
            Most software agencies in Austin handle websites and marketing builds. Complex custom software — the kind that replaces a stack of off-the-shelf tools, integrates with physical operations, or powers a SaaS product from MVP to scale — is a different discipline entirely.
          </p>
          <p className="text-[#f5f2eb] font-semibold">
            That&apos;s the work we do. Not websites. Not templates. Proper engineering.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">for Austin Businesses</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          Every engagement is a focused engineering project — scoped clearly, priced honestly, and delivered on a timeline that keeps up with Austin&apos;s pace.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">in Austin</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          Austin&apos;s economy is uniquely diverse — tech and startups alongside manufacturing, healthcare, and government. We build for each, with an understanding of the specific operational and regulatory requirements each sector brings.
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
          From First Conversation to{" "}
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">Austin Businesses</span>
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
