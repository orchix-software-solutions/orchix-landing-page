import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Custom Software Development Liverpool | OrchiX",
  description:
    "OrchiX provides custom software development for Liverpool businesses. We build SaaS platforms, CRM/ERP systems, logistics software, and AI automation for Merseyside's logistics, healthcare, retail, and digital sectors.",
  keywords: [
    "custom software development Liverpool",
    "software development company Liverpool",
    "software development agency Liverpool",
    "web app development Liverpool",
    "SaaS development Liverpool",
    "logistics software Liverpool",
    "AI automation Liverpool",
    "healthcare software Liverpool",
    "bespoke software Liverpool",
    "software company Merseyside",
  ],
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/software-development-liverpool",
  },
  openGraph: {
    title: "Custom Software Development Liverpool | OrchiX",
    description:
      "OrchiX builds custom software for Liverpool businesses — SaaS platforms, logistics software, AI automation, and CRM/ERP systems for Merseyside's logistics, healthcare, retail, and digital sectors.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/locations/software-development-liverpool",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX — Custom Software Development Liverpool" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OrchiX Software Solutions — Liverpool",
  description:
    "Custom software development for Liverpool businesses. We build SaaS platforms, CRM/ERP systems, logistics software, and AI automation for Merseyside's logistics, healthcare, retail, and digital sectors.",
  url: "https://orchixsoftwaresolutions.com/locations/software-development-liverpool",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  areaServed: {
    "@type": "City",
    name: "Liverpool",
    "@id": "https://www.wikidata.org/wiki/Q24826",
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
        name: "Custom Software Development Liverpool",
        item: "https://orchixsoftwaresolutions.com/locations/software-development-liverpool",
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
      name: "Do you work with Liverpool-based businesses remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work remotely with clients across Liverpool and Merseyside. We align with UK business hours, all collaboration is structured around scheduled calls and async updates — no travel overhead, no wasted meetings.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve in Liverpool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily serve logistics and maritime, healthcare and NHS, retail and e-commerce, and creative and cultural businesses in Liverpool. Our most common engagements involve building custom logistics platforms, NHS-compliant healthcare software, and custom e-commerce infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a custom software project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused MVP or core feature build typically takes 6–12 weeks. Full enterprise systems take 3–6 months. Everything is scoped upfront — fixed deliverables, fixed timeline, no surprises.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build logistics and supply chain software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We have experience building WMS systems, freight tracking platforms, customs management tools, and supply chain visibility software. We integrate with carrier APIs, port systems, ERP platforms, and logistics data feeds as standard scope.",
      },
    },
    {
      "@type": "Question",
      name: "What makes OrchiX different from a Liverpool development agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work exclusively on custom software engineering — no website projects, no CMS builds. Every engagement has architecture decisions, code review, and production-grade delivery standards. We provide Liverpool businesses with dedicated engineering capacity at a price point that local agencies — or Manchester agencies billing travel time — can't match.",
      },
    },
  ],
};

const painPoints = [
  {
    icon: "💸",
    title: "Generic Software Doesn't Fit Liverpool's Logistics Operations",
    desc: "Liverpool's port and logistics businesses run on operational complexity that Shopify and off-the-shelf WMS tools can't handle. Custom logistics software — built around Peel Ports' workflows, your carrier integrations, your inventory reality — is the only solution that actually works.",
  },
  {
    icon: "⚕️",
    title: "NHS Merseyside Needs Software Built for Healthcare Reality",
    desc: "NHS Trusts and healthcare businesses in Liverpool need software that meets NHS Digital standards, IG Toolkit requirements, and clinical safety guidelines. We build healthcare software that actually works in clinical environments — not demos that can't survive a ward round.",
  },
  {
    icon: "🔗",
    title: "Legacy System Integration Is Where Projects Die",
    desc: "Liverpool's industrial and retail businesses carry significant legacy infrastructure. We connect modern software to legacy systems — old WMS platforms, bespoke databases, aging ERP installations — without the full-system replacement that disrupts operations.",
  },
  {
    icon: "🚀",
    title: "Liverpool's Tech Scene Is Growing Fast",
    desc: "Liverpool's digital economy is growing beyond what local agencies can serve. We provide the engineering capacity to build ambitious software products without waiting for Liverpool's limited agency availability — or paying Manchester rates for remote teams.",
  },
];

const services = [
  {
    icon: "🖥️",
    title: "Custom Web & App Development",
    desc: "Web applications and operational tools built for Liverpool's logistics, healthcare, and retail businesses. Custom WMS dashboards, patient-facing healthcare portals, and retail management systems built to handle real-world operational data volumes.",
  },
  {
    icon: "☁️",
    title: "SaaS Product Development",
    desc: "End-to-end SaaS builds for Liverpool founders and product teams. From logistics-tech platforms to healthcare SaaS products, we handle architecture, backend, frontend, billing, and the multi-tenancy requirements of B2B SaaS.",
  },
  {
    icon: "🤖",
    title: "AI & Intelligent Automation",
    desc: "AI agents and intelligent processing pipelines for Liverpool's logistics, healthcare, and creative businesses. Shipment exception handling, clinical document processing, and creative rights management automation — built for production reliability.",
  },
  {
    icon: "🔄",
    title: "Business Process Automation",
    desc: "Automating operational bottlenecks in Liverpool's port, logistics, retail, and healthcare businesses. Workflow orchestration, data pipeline automation, and system integrations that remove the manual hand-offs that slow operations down.",
  },
  {
    icon: "📊",
    title: "CRM & ERP Development",
    desc: "Custom CRM and ERP systems built around how Liverpool's businesses actually operate. Port operations management, healthcare resource planning, retail inventory management — not adapted from a generic ERP template.",
  },
  {
    icon: "🛠️",
    title: "Software Maintenance & Support",
    desc: "Ongoing engineering support for Liverpool's existing operational systems. Bug fixes, performance improvements, security patches, and feature development for businesses that need reliable delivery without full in-house engineering teams.",
  },
];

const industries = [
  {
    icon: "🚢",
    name: "Logistics & Maritime",
    desc: "The Port of Liverpool and Peel Ports make the city one of the UK's most important logistics hubs. We build customs management systems, warehouse management platforms, freight tracking tools, supply chain visibility software, and port operations dashboards for Liverpool's logistics and maritime businesses.",
  },
  {
    icon: "⚕️",
    name: "Healthcare & NHS Merseyside",
    desc: "Liverpool's NHS Trusts — including Liverpool University Hospitals — and a growing health-tech ecosystem demand software that meets NHS Digital standards, IG Toolkit requirements, and clinical safety guidelines. We build patient management systems, clinical data platforms, and operational healthcare tools.",
  },
  {
    icon: "🛒",
    name: "Retail & E-commerce",
    desc: "Liverpool's retail sector has significant online presence and growing e-commerce operations. We build custom e-commerce platforms, inventory management systems, order management tools, and customer data platforms for retailers who have outgrown off-the-shelf solutions.",
  },
  {
    icon: "🎨",
    name: "Creative & Cultural Technology",
    desc: "Liverpool's creative economy — music, arts, cultural tourism — generates demand for ticketing platforms, event management systems, content distribution tools, and creator-facing digital products built around the specific needs of the creative and cultural sector.",
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
    q: "Do you work with Liverpool-based businesses remotely?",
    a: "Yes. We work remotely with clients across Liverpool and Merseyside. We align with UK business hours, all collaboration is structured around scheduled calls and async updates — no travel overhead, no wasted meetings.",
  },
  {
    q: "What industries do you serve in Liverpool?",
    a: "We primarily serve logistics and maritime, healthcare and NHS, retail and e-commerce, and creative and cultural businesses in Liverpool. Our most common engagements involve building custom logistics platforms, NHS-compliant healthcare software, and custom e-commerce infrastructure.",
  },
  {
    q: "How long does a custom software project take?",
    a: "A focused MVP or core feature build typically takes 6–12 weeks. Full enterprise systems take 3–6 months. Everything is scoped upfront — fixed deliverables, fixed timeline, no surprises.",
  },
  {
    q: "Can you build logistics and supply chain software?",
    a: "Yes. We have experience building WMS systems, freight tracking platforms, customs management tools, and supply chain visibility software. We integrate with carrier APIs, port systems, ERP platforms, and logistics data feeds as standard scope.",
  },
  {
    q: "What makes OrchiX different from a Liverpool development agency?",
    a: "We work exclusively on custom software engineering — no website projects, no CMS builds. Every engagement has architecture decisions, code review, and production-grade delivery standards. We provide Liverpool businesses with dedicated engineering capacity at a price point that local agencies — or Manchester agencies billing travel time — can't match.",
  },
];

export default function LiverpoolPage() {
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
          <span className="text-[#a78bfa]">Liverpool</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-4">
          🇬🇧 Liverpool, UK · Custom Software Development
        </p>
        <h1
          className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
        >
          Custom Software Built for{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Liverpool&apos;s Digital Transformation</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          OrchiX provides custom software development for Liverpool businesses across logistics and maritime, healthcare, retail, and the creative sector. We build the software your team actually needs — not the generic SaaS tool that fits 80% of your requirements and breaks under operational load.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <LocationCtaButton label="Start a Project in Liverpool →" />
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

      {/* ── Why OrchiX for Liverpool ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Why OrchiX for Liverpool</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          What Liverpool Businesses Need From{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">a Software Partner</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8] mb-14">
          <p>
            Liverpool&apos;s economy spans logistics and maritime operations with world-class complexity, NHS healthcare with strict compliance demands, a growing retail and e-commerce sector, and a creative economy with unique platform needs. Each of these sectors has been underserved by the local agency market.
          </p>
          <p>
            The alternative — a Manchester agency — means paying for travel time and the premium of a larger market. What you actually get is a junior team managed by a senior account manager who visits once a quarter. The engineers writing your code are still junior.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">for Liverpool Businesses</span>
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">in Liverpool</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          Liverpool&apos;s economy spans high-complexity sectors. We understand the domain constraints, regulatory environment, and integration requirements specific to each.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">Liverpool Businesses</span>
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
