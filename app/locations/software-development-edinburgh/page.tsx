import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Software Development Company Edinburgh | OrchiX",
  description:
    "OrchiX is a software development company serving Edinburgh businesses. We build custom software, SaaS platforms, CRM/ERP systems, and AI automation for Scotland's financial services, government, and tech sectors.",
  keywords: [
    "software development company Edinburgh",
    "software development agency Edinburgh",
    "custom software development Edinburgh",
    "web app development Edinburgh",
    "SaaS development Edinburgh",
    "fintech software Edinburgh",
    "AI automation Edinburgh",
    "enterprise software Scotland",
    "bespoke software Edinburgh",
    "software company Scotland",
  ],
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/software-development-edinburgh",
  },
  openGraph: {
    title: "Software Development Company Edinburgh | OrchiX",
    description:
      "OrchiX is a software development company serving Edinburgh businesses. We build custom software, SaaS platforms, CRM/ERP systems, and AI automation for Scotland's financial services, government, and tech sectors.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/locations/software-development-edinburgh",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX — Software Development Company Edinburgh" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OrchiX Software Solutions — Edinburgh",
  description:
    "Software development company serving Edinburgh businesses. We build custom software, SaaS platforms, CRM/ERP systems, and AI automation for Scotland's financial services, government, and tech sectors.",
  url: "https://orchixsoftwaresolutions.com/locations/software-development-edinburgh",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  areaServed: {
    "@type": "City",
    name: "Edinburgh",
    "@id": "https://www.wikidata.org/wiki/Q23436",
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
        name: "Software Development Company Edinburgh",
        item: "https://orchixsoftwaresolutions.com/locations/software-development-edinburgh",
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
      name: "Do you work with Edinburgh-based businesses remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work remotely with clients across Edinburgh and the wider Scotland region. We align our working hours with UK business hours for fast turnaround, and all collaboration is structured around scheduled calls and async updates — keeping projects moving without unnecessary overhead.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve in Edinburgh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily serve financial services, Scottish Government and public sector, tourism and hospitality, and life sciences businesses in Edinburgh. Common engagements include building compliance-grade financial software, public sector digital services, and healthcare data platforms.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a custom software project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused MVP or core feature build typically takes 6–12 weeks. Full enterprise systems and SaaS platforms take 3–6 months. Everything is scoped upfront with a fixed deliverable list — so you know exactly what you're getting before work begins.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle Scottish public sector compliance requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build with UK government security standards, NCSC guidelines, and Scottish Government data handling requirements in mind. Systems include audit logging, role-based access controls, UK data residency, and accessibility compliance (WCAG 2.1 AA) as standard.",
      },
    },
  ],
};

const painPoints = [
  {
    icon: "💸",
    title: "Edinburgh's Developer Talent Is Scarce and Expensive",
    desc: "Edinburgh's tech talent pool is small relative to demand. Local agencies charge a premium for access to engineers often split across multiple clients. We offer dedicated team capacity at a fraction of the cost — with direct access to the engineers writing your code.",
  },
  {
    icon: "🏛️",
    title: "Scottish FS Compliance Requires Specialist Knowledge",
    desc: "Edinburgh's financial sector — RBS/NatWest, Standard Life, Baillie Gifford — operates under FCA, PRA, and Solvency II requirements. We build with compliance requirements baked in from the architecture stage, not retrofitted at the end.",
  },
  {
    icon: "🔒",
    title: "Government and Public Sector Needs Secure Data Handling",
    desc: "Scottish Government and public sector work demands ISO 27001 security practices, data residency within the UK, and detailed audit logging. We design systems to meet these requirements from day one.",
  },
  {
    icon: "📡",
    title: "Complex Integrations Are Standard for Us",
    desc: "Edinburgh businesses rely on Bloomberg terminals, FactSet, Temenos core banking, and Government Gateway APIs. We integrate with them. Complex API work and legacy system connections are standard scope items, not extras.",
  },
];

const services = [
  {
    icon: "🖥️",
    title: "Custom Web & App Development",
    desc: "Web applications and internal tools built for Edinburgh's specific industry demands — whether a FCA-compliant investment reporting tool, a government service interface, or a visitor experience platform for Edinburgh's tourism sector. No templates, no shortcuts.",
  },
  {
    icon: "☁️",
    title: "SaaS Product Development",
    desc: "End-to-end SaaS builds for Edinburgh founders and product teams. Architecture, backend, frontend, billing, multi-tenancy, and the compliance scaffolding that Scotland's regulated industries require — everything needed to ship a product that can scale and satisfy auditors.",
  },
  {
    icon: "🤖",
    title: "AI & Intelligent Automation",
    desc: "AI agents, LLM integrations, document intelligence pipelines, and RAG systems built for Edinburgh's data-rich, compliance-sensitive industries. Whether automating fund reporting for an asset manager or processing public sector documentation, we build for production with appropriate data governance.",
  },
  {
    icon: "🔄",
    title: "Business Process Automation",
    desc: "Identifying and eliminating operational bottlenecks across Edinburgh's financial services, government, and life sciences businesses. Workflow automation, document processing, and system integrations that remove manual hand-offs while maintaining the audit trails regulated organisations require.",
  },
  {
    icon: "📊",
    title: "CRM & ERP Development",
    desc: "Custom CRM and ERP systems built for how Edinburgh's financial services, fund management, and professional services firms actually operate. Replacing the tools teams have outgrown — or off-the-shelf platforms never designed for Scotland's specific regulatory and reporting requirements.",
  },
  {
    icon: "🛠️",
    title: "Software Maintenance & Support",
    desc: "Ongoing engineering support for existing systems — security patches, performance optimisation, feature development, and legacy modernisation — for Edinburgh businesses that need reliable, compliant technical delivery without a full in-house engineering function.",
  },
];

const industries = [
  {
    icon: "🏦",
    name: "Financial Services",
    desc: "Edinburgh is the UK's second financial centre. We build portfolio management platforms, compliance dashboards, client reporting systems, and operational tools for asset managers, insurers, and financial services firms headquartered in Edinburgh — from Standard Life-scale enterprises to FinTech startups.",
  },
  {
    icon: "🏛️",
    name: "Government & Public Sector",
    desc: "Scottish Government and public sector bodies need secure, compliant, and accessible software. We build case management systems, public-facing digital services, data management platforms, and operational tooling that meets UK government security and accessibility standards.",
  },
  {
    icon: "🏨",
    name: "Tourism & Hospitality Tech",
    desc: "Edinburgh's tourism economy is one of the UK's most significant. We build booking management systems, guest experience platforms, event management tools, and revenue management software for Edinburgh's hotels, venues, and hospitality businesses.",
  },
  {
    icon: "🔬",
    name: "Life Sciences & HealthTech",
    desc: "Edinburgh's life sciences cluster — anchored by Edinburgh University and the BioQuarter — generates significant demand for clinical data systems, research collaboration platforms, regulatory submission tools, and NHS-integrated healthcare software.",
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
    q: "Do you work with Edinburgh-based businesses remotely?",
    a: "Yes. We work remotely with clients across Edinburgh and the wider Scotland region. We align our working hours with UK business hours for fast turnaround, and all collaboration is structured around scheduled calls and async updates — keeping projects moving without unnecessary overhead.",
  },
  {
    q: "What industries do you serve in Edinburgh?",
    a: "We primarily serve financial services, Scottish Government and public sector, tourism and hospitality, and life sciences businesses in Edinburgh. Common engagements include building compliance-grade financial software, public sector digital services, and healthcare data platforms.",
  },
  {
    q: "How long does a custom software project take?",
    a: "A focused MVP or core feature build typically takes 6–12 weeks. Full enterprise systems and SaaS platforms take 3–6 months. Everything is scoped upfront with a fixed deliverable list — so you know exactly what you're getting before work begins.",
  },
  {
    q: "Can you handle Scottish public sector compliance requirements?",
    a: "Yes. We build with UK government security standards, NCSC guidelines, and Scottish Government data handling requirements in mind. Systems include audit logging, role-based access controls, UK data residency, and accessibility compliance (WCAG 2.1 AA) as standard.",
  },
  {
    q: "What makes OrchiX different from an Edinburgh development agency?",
    a: "Edinburgh's local agency market is limited and expensive. We offer the same engineering quality with a dedicated team, fixed scope, and direct access to senior engineers — at a price point that reflects our operational model, not Edinburgh office rents.",
  },
];

export default function EdinburghPage() {
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
          <span className="text-[#a78bfa]">Edinburgh</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-4">
          🇬🇧 Edinburgh, Scotland · Software Development Company
        </p>
        <h1
          className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
        >
          Custom Software Built for{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Edinburgh&apos;s Innovation Economy</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          OrchiX is a software development company working with Edinburgh businesses across financial services, government, tourism, and life sciences. We build software your team actually needs — scoped upfront, engineered for production, and delivered on a clear timeline without the overhead of Edinburgh&apos;s scarce local agency market.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <LocationCtaButton label="Start a Project in Edinburgh →" />
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

      {/* ── Why OrchiX for Edinburgh ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Why OrchiX for Edinburgh</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          What Edinburgh Businesses Need From{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">a Software Partner</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8] mb-14">
          <p>
            Edinburgh punches well above its population weight as a financial centre. NatWest Group, Standard Life, and Baillie Gifford make Scotland&apos;s capital one of Europe&apos;s most important financial hubs outside London. Alongside that, the Scottish Government&apos;s digital transformation agenda, a thriving life sciences cluster, and a year-round international tourism economy create diverse, demanding software requirements.
          </p>
          <p>
            The problem is supply. Edinburgh&apos;s software agency market is thin relative to the demand it services. Businesses pay a premium for the few established local agencies — or settle for remote teams with no understanding of FCA compliance, Scottish Government procurement, or the operational reality of running regulated financial services businesses here.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">for Edinburgh Businesses</span>
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">in Edinburgh</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          Edinburgh&apos;s economy is concentrated in sectors where software quality and regulatory compliance are non-negotiable. We understand the domain constraints, data governance requirements, and integration complexity specific to each.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">Edinburgh Businesses</span>
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
