import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Software Development Agency Glasgow | OrchiX",
  description:
    "OrchiX is a software development agency serving Glasgow businesses. We build custom software, SaaS platforms, CRM/ERP systems, and AI automation for Scotland's financial services, energy, healthcare, and engineering sectors.",
  keywords: [
    "software development agency Glasgow",
    "software development company Glasgow",
    "custom software development Glasgow",
    "web app development Glasgow",
    "SaaS development Glasgow",
    "energy software Glasgow",
    "fintech software Glasgow",
    "AI automation Glasgow",
    "bespoke software Glasgow",
    "software agency Scotland",
  ],
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/software-development-glasgow",
  },
  openGraph: {
    title: "Software Development Agency Glasgow | OrchiX",
    description:
      "OrchiX builds custom software for Glasgow businesses — SaaS platforms, AI automation, CRM/ERP systems, and engineering-grade software for financial services, energy, healthcare, and engineering sectors.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/locations/software-development-glasgow",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX — Software Development Agency Glasgow" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OrchiX Software Solutions — Glasgow",
  description:
    "Software development agency serving Glasgow businesses. We build custom software, SaaS platforms, CRM/ERP systems, and AI automation for Scotland's financial services, energy, healthcare, and engineering sectors.",
  url: "https://orchixsoftwaresolutions.com/locations/software-development-glasgow",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  areaServed: {
    "@type": "City",
    name: "Glasgow",
    "@id": "https://www.wikidata.org/wiki/Q4093",
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
        name: "Software Development Agency Glasgow",
        item: "https://orchixsoftwaresolutions.com/locations/software-development-glasgow",
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
      name: "Do you work with Glasgow-based businesses remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work remotely with clients across Glasgow and Scotland. We align with UK business hours, all collaboration structured around scheduled calls and async updates — keeping projects moving without unnecessary overhead.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve in Glasgow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily serve financial services, energy and cleantech, healthcare and NHS Scotland, and engineering and manufacturing businesses in Glasgow. Common engagements include FCA-compliant financial software, energy asset management platforms, and NHS-connected healthcare systems.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a custom software project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused MVP or core feature build typically takes 6–12 weeks. Full enterprise systems take 3–6 months. Everything is scoped upfront with a fixed deliverable list — no scope creep, no surprises.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build energy and cleantech software for Scotland's Net Zero goals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We have experience building energy asset management platforms, grid monitoring systems, carbon accounting tools, and energy trading interfaces. We integrate with SCADA systems, energy market data feeds, and grid operator APIs as standard scope.",
      },
    },
    {
      "@type": "Question",
      name: "What makes OrchiX different from a Glasgow development agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work exclusively on custom software engineering — no website projects, no CMS configurations. Every engagement is a proper engineering project. We deliver the engineering quality Glasgow's financial and energy sector clients expect at a price point that reflects our operational model, not Glasgow city-centre agency rents.",
      },
    },
  ],
};

const painPoints = [
  {
    icon: "💸",
    title: "Glasgow's Growing Tech Hub Is Underserved by Agencies",
    desc: "Glasgow's status as a major tech hub for Barclays, JP Morgan, and Morgan Stanley creates demand that local agencies can't meet at scale. We provide engineering capacity at the level Glasgow's financial and tech businesses need — without Edinburgh or London price tags.",
  },
  {
    icon: "⚡",
    title: "Scotland's Net Zero Ambition Needs Real Software Engineering",
    desc: "Glasgow's energy and cleantech sector — offshore wind, hydrogen, grid management — is generating demand for operational software that nobody in the market is building well. We build the monitoring platforms, trading systems, and asset management tools Scotland's energy transition actually needs.",
  },
  {
    icon: "🏦",
    title: "Financial Sector Compliance Is Non-Negotiable",
    desc: "Glasgow's financial services businesses — Barclays' tech hub, JP Morgan's tech centre — operate under FCA, PRA, and MiFID II requirements. We build with compliance requirements embedded from the architecture stage, not added as an afterthought.",
  },
  {
    icon: "🔗",
    title: "Engineering Integrations Are Our Standard",
    desc: "Glasgow's engineering and manufacturing businesses rely on complex operational systems — SAP, Oracle, bespoke MES platforms. We integrate with them. Legacy system connections, industrial data feeds, and complex API work are standard scope items for us.",
  },
];

const services = [
  {
    icon: "🖥️",
    title: "Custom Web & App Development",
    desc: "Web applications and operational tools built for Glasgow's financial services, energy, healthcare, and engineering businesses. From Barclays-scale internal tools to offshore wind asset management dashboards, built to handle enterprise data volumes.",
  },
  {
    icon: "☁️",
    title: "SaaS Product Development",
    desc: "End-to-end SaaS builds for Glasgow founders and product teams — particularly in energy tech, healthcare, and FinTech. Architecture, backend, frontend, billing, multi-tenancy, and the technical depth Glasgow's demanding enterprise clients expect.",
  },
  {
    icon: "🤖",
    title: "AI & Intelligent Automation",
    desc: "AI agents and intelligent automation for Glasgow's financial services, energy, and healthcare sectors. Trading signal processing, energy forecasting models, clinical document automation — production systems with the reliability Glasgow's regulated industries require.",
  },
  {
    icon: "🔄",
    title: "Business Process Automation",
    desc: "Automating operational bottlenecks in Glasgow's financial, energy, and engineering businesses. Workflow orchestration, data pipeline automation, and system integrations that remove manual hand-offs across complex operational environments.",
  },
  {
    icon: "📊",
    title: "CRM & ERP Development",
    desc: "Custom CRM and ERP systems built around how Glasgow's businesses actually work. Financial services CRM with compliance workflows, energy asset management platforms, healthcare resource planning tools — not generic templates adapted to fit.",
  },
  {
    icon: "🛠️",
    title: "Software Maintenance & Support",
    desc: "Ongoing engineering for Glasgow's existing operational systems. Bug fixes, performance improvements, security patches, and feature development for teams that need reliable delivery capacity without full in-house engineering departments.",
  },
];

const industries = [
  {
    icon: "🏦",
    name: "Financial Services",
    desc: "Glasgow is a major UK financial hub with Barclays, JP Morgan, and Morgan Stanley technology centres. We build trading platforms, compliance management systems, risk dashboards, client reporting tools, and operational CRM software for Glasgow's financial services businesses — FCA-compliant from the architecture stage.",
  },
  {
    icon: "⚡",
    name: "Energy & CleanTech",
    desc: "Glasgow's commitment to net zero and Scotland's renewable energy leadership is driving demand for operational software. We build energy asset management platforms, grid monitoring systems, carbon accounting tools, offshore wind operational dashboards, and energy trading platforms for Scotland's energy sector.",
  },
  {
    icon: "⚕️",
    name: "Healthcare & NHS Scotland",
    desc: "Glasgow's NHS Greater Glasgow and Clyde — the UK's largest NHS board — and a growing healthtech ecosystem need software that meets NHS Digital, IG Toolkit, and Scottish Government data standards. We build patient management systems, clinical data platforms, and healthcare operations tools.",
  },
  {
    icon: "⚙️",
    name: "Engineering & Manufacturing",
    desc: "Glasgow's engineering heritage and modern advanced manufacturing base — Thales, BAE Systems, and a range of precision engineering firms — generates demand for custom MES systems, quality management platforms, supply chain tools, and CAD/CAM integration software.",
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
    q: "Do you work with Glasgow-based businesses remotely?",
    a: "Yes. We work remotely with clients across Glasgow and Scotland. We align with UK business hours, all collaboration structured around scheduled calls and async updates — keeping projects moving without unnecessary overhead.",
  },
  {
    q: "What industries do you serve in Glasgow?",
    a: "We primarily serve financial services, energy and cleantech, healthcare and NHS Scotland, and engineering and manufacturing businesses in Glasgow. Common engagements include FCA-compliant financial software, energy asset management platforms, and NHS-connected healthcare systems.",
  },
  {
    q: "How long does a custom software project take?",
    a: "A focused MVP or core feature build typically takes 6–12 weeks. Full enterprise systems take 3–6 months. Everything is scoped upfront with a fixed deliverable list — no scope creep, no surprises.",
  },
  {
    q: "Can you build energy and cleantech software for Scotland's Net Zero goals?",
    a: "Yes. We have experience building energy asset management platforms, grid monitoring systems, carbon accounting tools, and energy trading interfaces. We integrate with SCADA systems, energy market data feeds, and grid operator APIs as standard scope.",
  },
  {
    q: "What makes OrchiX different from a Glasgow development agency?",
    a: "We work exclusively on custom software engineering — no website projects, no CMS configurations. Every engagement is a proper engineering project. We deliver the engineering quality Glasgow's financial and energy sector clients expect at a price point that reflects our operational model, not Glasgow city-centre agency rents.",
  },
];

export default function GlasgowPage() {
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
          <span className="text-[#a78bfa]">Glasgow</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-4">
          🇬🇧 Glasgow, Scotland · Software Development Agency
        </p>
        <h1
          className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
        >
          Software Built for{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Glasgow&apos;s Tech and Innovation Hub</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          OrchiX is a software development agency working with Glasgow businesses across financial services, energy and cleantech, healthcare, and engineering. We build software your team actually needs — scoped upfront, engineered for production, delivered without the premium that Glasgow&apos;s limited local agency supply commands.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <LocationCtaButton label="Start a Project in Glasgow →" />
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

      {/* ── Why OrchiX for Glasgow ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Why OrchiX for Glasgow</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          What Glasgow Businesses Need From{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">a Software Partner</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8] mb-14">
          <p>
            Glasgow&apos;s economy spans some of the UK&apos;s most demanding software environments — financial services with FCA and MiFID II compliance requirements, an energy sector driving Scotland&apos;s net zero transition, NHS Scotland&apos;s healthcare operations, and advanced manufacturing with complex systems integration needs.
          </p>
          <p>
            The local agency market in Glasgow is constrained. The best engineering talent in Scotland gravitates to Edinburgh or moves to London. What remains is often under-resourced for the complexity that financial and energy sector clients actually need.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">for Glasgow Businesses</span>
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">in Glasgow</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          Glasgow&apos;s economy is built around sectors with demanding, regulated software requirements. We understand the domain constraints, compliance environment, and integration challenges specific to each.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">Glasgow Businesses</span>
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
