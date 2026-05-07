import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Software Development Agency Chicago | OrchiX",
  description:
    "OrchiX is a software development agency serving Chicago businesses. We build custom CRM/ERP systems, SaaS platforms, AI automation, and web & mobile apps for Chicago's finance, logistics, healthcare, and enterprise markets.",
  keywords: [
    "software development agency Chicago",
    "custom software development Chicago",
    "software development company Chicago",
    "enterprise software development Chicago",
    "Chicago software development agency",
    "CRM development Chicago",
    "ERP development Chicago",
    "SaaS development Chicago",
    "AI automation Chicago",
    "web app development Chicago",
    "legacy system modernisation Chicago",
    "logistics software Chicago",
    "healthcare software Chicago",
    "fintech software Chicago",
    "Chicago software company",
  ],
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/custom-software-development-chicago",
  },
  openGraph: {
    title: "Software Development Agency Chicago | OrchiX",
    description:
      "OrchiX builds custom software for Chicago's enterprise market — CRM/ERP systems, SaaS platforms, AI automation, and legacy modernisation for finance, logistics, healthcare, and manufacturing.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-chicago",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX — Software Development Agency Chicago" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OrchiX Software Solutions — Chicago",
  description:
    "Software development agency serving Chicago businesses. Custom CRM/ERP systems, SaaS platforms, AI automation, and legacy modernisation for Chicago's finance, logistics, healthcare, and enterprise markets.",
  url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-chicago",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  areaServed: {
    "@type": "City",
    name: "Chicago",
    "@id": "https://www.wikidata.org/wiki/Q1297",
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
        name: "Software Development Agency Chicago",
        item: "https://orchixsoftwaresolutions.com/locations/custom-software-development-chicago",
      },
    ],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM & ERP Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Legacy System Modernisation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Product Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & Intelligent Automation" } },
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
      name: "Do you modernise legacy systems for Chicago enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — legacy modernisation is one of our most common Chicago engagements. Many established Chicago businesses run on systems built in the 1990s and 2000s that are expensive to maintain, hard to integrate with modern tools, and impossible to scale. We migrate data, rebuild core functionality on modern infrastructure, and integrate with your existing tech stack without disrupting live operations.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build software for Chicago's financial and trading sector?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Chicago is home to the CME Group, major trading firms, and a significant financial services sector. We build portfolio management tools, trade reporting dashboards, compliance platforms, and operational software for financial services companies that need accuracy, auditability, and performance above all else.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle HIPAA compliance for Chicago healthcare software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build healthcare software with HIPAA compliance as a baseline requirement — not an afterthought. This covers data encryption, access control, audit logging, and secure data handling practices from the first line of code. We work with Chicago hospital networks, medical groups, and health-tech companies navigating these requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate with Chicago's logistics and supply chain systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Chicago's position as a major logistics hub means many of our clients need software that integrates with freight systems, warehouse management platforms, carrier APIs, and supply chain data feeds. We build these integrations as standard scope items — not complex custom work that inflates timelines.",
      },
    },
    {
      "@type": "Question",
      name: "What does your engagement process look like for Chicago enterprise clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For enterprise clients, we start with a structured discovery phase that maps existing systems, data flows, and integration requirements before scoping the build. We produce a fixed deliverable list, architecture document, and timeline — so there are no moving targets or scope surprises mid-project. Enterprise builds typically run 3–6 months for core system delivery.",
      },
    },
  ],
};

const services = [
  {
    icon: "📊",
    title: "CRM & ERP Development",
    desc: "Custom CRM and ERP systems built for Chicago's enterprise complexity — not Salesforce configurations that still don't fit, or SAP implementations that cost more than the software. We build systems around your actual sales motion, operations structure, and reporting requirements.",
  },
  {
    icon: "🔧",
    title: "Legacy System Modernisation",
    desc: "Replacing and migrating ageing systems without disrupting live operations. We audit your existing infrastructure, design a modern replacement, migrate data cleanly, and cut over in controlled phases — so the business never stops while the rebuild is happening.",
  },
  {
    icon: "☁️",
    title: "SaaS Product Development",
    desc: "End-to-end SaaS builds for Chicago companies launching new product lines or spinning out internal tools as standalone products. Architecture, backend, frontend, multi-tenancy, billing, and the infrastructure to handle enterprise clients from day one.",
  },
  {
    icon: "🤖",
    title: "AI & Intelligent Automation",
    desc: "AI agents, document processing pipelines, and intelligent workflow automation for Chicago enterprises handling high volumes of variable, unstructured work — contract review, claims processing, logistics decisions, and financial analysis that currently require manual handling.",
  },
  {
    icon: "🔄",
    title: "Business Process Automation",
    desc: "Mapping and automating the operational processes that slow Chicago enterprises down — approval workflows, data reconciliation, cross-system reporting, and the manual hand-offs between departments that create bottlenecks at scale.",
  },
  {
    icon: "🛠️",
    title: "Software Maintenance & Support",
    desc: "Ongoing engineering support for Chicago enterprises that need reliable development capacity without expanding headcount. Structured retainers covering bug fixes, security patches, performance improvements, and ongoing feature development.",
  },
];

const industries = [
  {
    icon: "💹",
    name: "Finance & Trading",
    desc: "Chicago is the world's derivatives trading capital. We build trading operations software, portfolio management dashboards, trade reporting systems, compliance platforms, and financial data tools for the firms and institutions that operate in and around Chicago's financial markets.",
  },
  {
    icon: "🚛",
    name: "Logistics & Supply Chain",
    desc: "Chicago's position as the US's central freight hub means logistics is one of the city's defining industries. We build freight management platforms, warehouse operations software, carrier integration systems, supply chain visibility dashboards, and the operational tools that keep goods moving at scale.",
  },
  {
    icon: "🏥",
    name: "Healthcare & MedTech",
    desc: "Chicago hosts some of the country's largest hospital systems and a growing MedTech sector. We build patient management platforms, clinical data systems, healthcare operations software, and health-tech products with HIPAA compliance as a baseline and an understanding of the specific workflows of Chicago's medical institutions.",
  },
  {
    icon: "🏭",
    name: "Manufacturing & Industrial",
    desc: "Chicago's manufacturing sector — one of the largest in the Midwest — is undergoing a significant digital transformation. We build the ERP systems, production tracking platforms, quality management software, and operational dashboards that connect Chicago's factory floors to modern business intelligence.",
  },
];

const painPoints = [
  {
    icon: "🔧",
    title: "Legacy Systems Are Costing Chicago Enterprises More Than a Rebuild",
    desc: "Many Chicago businesses are paying six-figure annual maintenance bills for systems that can't integrate with modern tools, can't scale with the business, and require specialists who are increasingly hard to find. We build the modern replacement — with data migration, phased cutover, and zero disruption to live operations.",
  },
  {
    icon: "🔗",
    title: "Chicago's Complexity Requires Real Integration Experience",
    desc: "Finance, logistics, healthcare, and manufacturing all run on dense ecosystems of specialist platforms. Bloomberg feeds, freight APIs, EMR systems, ERP databases. We integrate with all of them — and we've done it enough times to know where the complexity hides before it surfaces mid-build.",
  },
  {
    icon: "📋",
    title: "Enterprise Software Needs Audit Trails and Access Controls",
    desc: "Chicago's regulated industries — finance, healthcare, legal — require software that logs who did what, when, and why. We build these controls as architectural decisions from the start: role-based access, immutable audit logs, and data residency configurations that satisfy compliance teams without bolting them on later.",
  },
  {
    icon: "📈",
    title: "Midwest Standards: Reliable Delivery Over Flashy Promises",
    desc: "Chicago enterprises have been burned by agencies that promise and under-deliver. We operate on fixed scope, fixed timeline, and weekly demos — so there are no surprises at the end of a six-month engagement. You see the software every week. You know exactly where you stand.",
  },
];

const faqs = [
  {
    q: "Do you modernise legacy systems for Chicago enterprises?",
    a: "Yes — legacy modernisation is one of our most common Chicago engagements. Many established Chicago businesses run on systems built in the 1990s and 2000s that are expensive to maintain, hard to integrate with modern tools, and impossible to scale. We migrate data, rebuild core functionality on modern infrastructure, and integrate with your existing tech stack without disrupting live operations.",
  },
  {
    q: "Can you build software for Chicago's financial and trading sector?",
    a: "Yes. Chicago is home to the CME Group, major trading firms, and a significant financial services sector. We build portfolio management tools, trade reporting dashboards, compliance platforms, and operational software for financial services companies that need accuracy, auditability, and performance above all else.",
  },
  {
    q: "Do you handle HIPAA compliance for Chicago healthcare software?",
    a: "Yes. We build healthcare software with HIPAA compliance as a baseline requirement — not an afterthought. This covers data encryption, access control, audit logging, and secure data handling practices from the first line of code. We work with Chicago hospital networks, medical groups, and health-tech companies navigating these requirements.",
  },
  {
    q: "Can you integrate with Chicago's logistics and supply chain systems?",
    a: "Yes. Chicago's position as a major logistics hub means many of our clients need software that integrates with freight systems, warehouse management platforms, carrier APIs, and supply chain data feeds. We build these integrations as standard scope items — not complex custom work that inflates timelines.",
  },
  {
    q: "What does your engagement process look like for Chicago enterprise clients?",
    a: "For enterprise clients, we start with a structured discovery phase that maps existing systems, data flows, and integration requirements before scoping the build. We produce a fixed deliverable list, architecture document, and timeline — so there are no moving targets or scope surprises mid-project. Enterprise builds typically run 3–6 months for core system delivery.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Enterprise Discovery & Systems Audit (Week 1–2)",
    desc: "For Chicago enterprise engagements, we start by mapping your existing systems, data flows, and integration dependencies. We identify what can be preserved, what must be rebuilt, and where the hidden complexity lives — before scoping or pricing anything.",
  },
  {
    num: "02",
    title: "Architecture & Migration Planning (Week 2–3)",
    desc: "We design the new system architecture and, where applicable, the data migration strategy. For legacy modernisation projects, this includes a phased cutover plan that keeps live operations running throughout the build.",
  },
  {
    num: "03",
    title: "Phased Build with Weekly Demos (Weeks 3–16+)",
    desc: "Enterprise builds run in controlled phases. You see working software every week. Each phase delivers functional, testable increments — so your team can validate behaviour against real workflows, not just a spec document written months earlier.",
  },
  {
    num: "04",
    title: "UAT, Security Audit & Controlled Cutover",
    desc: "User acceptance testing with your actual team, security review, performance testing under realistic load, and a controlled cutover plan that minimises disruption. For regulated industries, we provide documentation that satisfies compliance and audit requirements.",
  },
  {
    num: "05",
    title: "Post-Launch Support & Ongoing Development",
    desc: "60-day post-launch support for enterprise engagements. After that, structured retainer arrangements for Chicago enterprises that need ongoing development capacity and a team that already understands their systems inside out.",
  },
];

export default function ChicagoPage() {
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
          <span className="text-[#a78bfa]">Chicago</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-4">
          🇺🇸 Chicago, IL · Software Development Agency
        </p>
        <h1
          className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
        >
          Enterprise Software Built for{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Chicago&apos;s Complexity</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          OrchiX is a software development agency working with Chicago enterprises across finance, logistics, healthcare, and manufacturing. We build custom CRM and ERP systems, modernise legacy platforms, and deliver the operational software that Chicago&apos;s established businesses need to compete — without the six-month discovery phases and moving-target budgets that define too many enterprise software engagements.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <LocationCtaButton label="Start a Project in Chicago →" />
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

      {/* ── Why OrchiX for Chicago ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Why OrchiX for Chicago</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          What Chicago Enterprises Need From{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">a Software Partner</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8] mb-14">
          <p>
            Chicago&apos;s enterprise market is different from the coasts. Decision-makers here are experienced, sceptical, and have often been through failed software projects before. They don&apos;t want a pitch about revolutionary technology — they want a clear scope, a realistic timeline, and a team that delivers what it says it will.
          </p>
          <p>
            The challenge is finding that partner. Most Chicago agencies handle website projects and digital marketing builds. The firms that do enterprise software are large consultancies charging enterprise consultancy rates, with delivery models that match. The gap between &ldquo;too small to trust with our systems&rdquo; and &ldquo;too expensive to justify&rdquo; is where most Chicago companies get stuck.
          </p>
          <p className="text-[#f5f2eb] font-semibold">
            We sit in that gap. Senior engineering, enterprise-grade delivery, without the bloated consultancy overhead.
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
          Software Development Services{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">for Chicago Businesses</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          From enterprise CRM and ERP builds to legacy modernisation and AI-powered process automation — engineered for Chicago&apos;s regulated, integration-heavy business environment.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">in Chicago</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          Chicago&apos;s economy is built on industries that require serious software — finance, logistics, healthcare, and manufacturing. We understand the domain constraints, regulatory environment, and integration requirements each one carries.
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
          Our Enterprise Delivery Process{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">for Chicago Clients</span>
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">Chicago Businesses</span>
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
