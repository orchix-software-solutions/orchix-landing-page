import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Custom Software Development Company San Francisco | OrchiX",
  description:
    "OrchiX is a custom software development company serving San Francisco and Bay Area businesses. We build SaaS platforms, AI automation, CRM/ERP systems, and web & mobile apps for SF's startup, FinTech, and enterprise markets.",
  keywords: [
    "custom software development San Francisco",
    "software development company San Francisco",
    "custom software development Bay Area",
    "software development agency San Francisco",
    "San Francisco software development company",
    "SaaS development San Francisco",
    "AI automation San Francisco",
    "startup software development San Francisco",
    "web app development San Francisco",
    "software company SF",
    "MVP development San Francisco",
    "enterprise software San Francisco",
    "fintech software development San Francisco",
    "Bay Area software agency",
    "custom software development Silicon Valley",
  ],
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/custom-software-development-san-francisco",
  },
  openGraph: {
    title: "Custom Software Development Company San Francisco | OrchiX",
    description:
      "OrchiX builds custom software for San Francisco and Bay Area businesses — SaaS platforms, AI automation, CRM/ERP systems, and web & mobile apps built for the speed of Silicon Valley.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-san-francisco",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX — Custom Software Development San Francisco" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OrchiX Software Solutions — San Francisco",
  description:
    "Custom software development company serving San Francisco and Bay Area businesses. We build SaaS platforms, AI-powered products, CRM/ERP systems, and web & mobile applications for SF's startup, FinTech, and enterprise sectors.",
  url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-san-francisco",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  areaServed: {
    "@type": "City",
    name: "San Francisco",
    "@id": "https://www.wikidata.org/wiki/Q62",
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
        name: "Custom Software Development San Francisco",
        item: "https://orchixsoftwaresolutions.com/locations/custom-software-development-san-francisco",
      },
    ],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Product Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & Intelligent Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "MVP Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Web & App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM & ERP Development" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work with early-stage startups in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with seed and Series A startups across San Francisco and the Bay Area. Our MVP engagements are scoped for early-stage budgets — a focused 6–10 week build covering core functionality, not a bloated feature list. We help founders ship something real, get user feedback, and iterate.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build AI-first products for SF-based companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI integration is one of our core capabilities. We build LLM-powered features, RAG systems, AI agents, and intelligent automation for San Francisco companies ranging from pre-seed startups to growth-stage SaaS businesses. We work with GPT-4o, Claude, Gemini, and open-source models depending on your requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle the time zone difference with Bay Area clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We align a significant portion of our working hours with US Pacific Time to ensure real-time collaboration with San Francisco clients. Daily async updates, weekly video syncs, and on-demand availability via Slack means you're never blocked waiting for a response.",
      },
    },
    {
      "@type": "Question",
      name: "What does a typical SaaS MVP engagement look like for a SF startup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical MVP engagement runs 6–10 weeks and covers: core user flows, authentication, database design, API layer, and a deployable frontend. We scope it to the minimum viable feature set that lets you get real users and real data — not the version with every feature you eventually want.",
      },
    },
    {
      "@type": "Question",
      name: "Do you integrate with tools common in the Bay Area startup stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We regularly integrate with Stripe, Segment, Intercom, HubSpot, Salesforce, Mixpanel, OpenAI APIs, Anthropic APIs, Twilio, and the rest of the modern SaaS stack that SF startups rely on. These are standard scope items, not extras.",
      },
    },
  ],
};

const services = [
  {
    icon: "☁️",
    title: "SaaS Product Development",
    desc: "End-to-end SaaS builds for Bay Area founders and product teams. Architecture, backend, frontend, billing, multi-tenancy, and the infrastructure to scale from your first 100 users to your first 100,000. Built to support fundraising milestones, not just launch.",
  },
  {
    icon: "🤖",
    title: "AI & Intelligent Automation",
    desc: "LLM integrations, AI agents, RAG systems, and intelligent workflow automation for companies that want to be genuinely AI-powered — not just have an AI feature bolted onto an existing product. We work with GPT-4o, Claude, Gemini, Llama, and open-source models.",
  },
  {
    icon: "🚀",
    title: "MVP Development",
    desc: "Focused MVP builds for founders who need to validate fast. We scope the minimum viable feature set, cut everything non-essential, and ship working software in 6–10 weeks. Not a prototype — a deployable product you can put in front of real users.",
  },
  {
    icon: "🖥️",
    title: "Custom Web & App Development",
    desc: "Web applications and mobile apps built for the Bay Area's demanding users. From complex internal tools to consumer-facing platforms — engineered for performance, designed for experience, and built to handle growth without rewriting from scratch.",
  },
  {
    icon: "📊",
    title: "CRM & ERP Development",
    desc: "Custom CRM and ERP systems built around how your SF team actually works — not a Salesforce customisation project that ends up costing more than building from scratch. For sales-led companies that have outgrown spreadsheets and generic CRMs.",
  },
  {
    icon: "🔄",
    title: "Business Process Automation",
    desc: "Automating the operational overhead that slows growing Bay Area companies down. Workflow automation, data pipeline orchestration, and system integrations that eliminate manual hand-offs so your team can focus on the work that actually matters.",
  },
];

const industries = [
  {
    icon: "🚀",
    name: "Startups & VC-Backed Companies",
    desc: "San Francisco's startup density is unlike anywhere else. We work with seed through Series B companies building their first real product, replacing a prototype with something production-grade, or adding the engineering capacity to hit their next funding milestone without growing the team by five engineers.",
  },
  {
    icon: "🤖",
    name: "AI & Machine Learning Companies",
    desc: "The Bay Area is the global epicentre of AI development. We build the surrounding product infrastructure for AI companies — the interfaces, pipelines, API layers, and operational tooling that sit around the model and turn it into something users can actually interact with.",
  },
  {
    icon: "🏦",
    name: "FinTech & Payments",
    desc: "From consumer fintech apps to B2B payment infrastructure and embedded finance platforms, we build the software layer for San Francisco's financial technology companies. Stripe integrations, Plaid connections, real-time transaction processing, and compliance-aware data handling.",
  },
  {
    icon: "🌱",
    name: "CleanTech & Deep Tech",
    desc: "San Francisco's climate tech and deep tech ecosystem needs software that handles complex data, scientific workflows, and hardware integrations. We build the operational platforms, data dashboards, and customer-facing products for companies working on problems that actually matter.",
  },
];

const painPoints = [
  {
    icon: "💸",
    title: "SF Engineering Costs Are Unsustainable for Most Projects",
    desc: "Bay Area senior engineers cost $200k–$350k+ per year in salary alone. For a startup building an MVP or a growth-stage company adding a new product line, hiring in-house isn't the right move. We give you senior engineering output without the overhead of a full-time team.",
  },
  {
    icon: "⚡",
    title: "Speed-to-Market Defines Who Wins in SF",
    desc: "In San Francisco, being six months slower than your competitor is a company-defining problem. Our scoping process takes days, not months. We start building within the first week. And we ship increments you can show investors and users every week, not a big reveal at the end.",
  },
  {
    icon: "🧠",
    title: "AI Integration Without the Hallucination Risk",
    desc: "Every SF company wants to be AI-powered. Most AI integrations are demos that fall apart in production. We build AI systems with proper grounding, guardrails, and fallback logic — so the AI does what you promise it does, consistently, with users who don't work at your company.",
  },
  {
    icon: "📈",
    title: "Built to Scale with Your Funding Rounds",
    desc: "We architect systems that don't need to be rewritten when you raise your Series A. The database schema, API design, and infrastructure decisions we make at MVP stage are deliberate — designed to handle 10x growth without a painful rebuild six months into traction.",
  },
];

const faqs = [
  {
    q: "Do you work with early-stage startups in San Francisco?",
    a: "Yes. We work with seed and Series A startups across San Francisco and the Bay Area. Our MVP engagements are scoped for early-stage budgets — a focused 6–10 week build covering core functionality, not a bloated feature list. We help founders ship something real, get user feedback, and iterate.",
  },
  {
    q: "Can you build AI-first products for SF-based companies?",
    a: "Yes. AI integration is one of our core capabilities. We build LLM-powered features, RAG systems, AI agents, and intelligent automation for San Francisco companies ranging from pre-seed startups to growth-stage SaaS businesses. We work with GPT-4o, Claude, Gemini, and open-source models depending on your requirements.",
  },
  {
    q: "How do you handle the time zone difference with Bay Area clients?",
    a: "We align a significant portion of our working hours with US Pacific Time to ensure real-time collaboration with San Francisco clients. Daily async updates, weekly video syncs, and on-demand availability via Slack means you're never blocked waiting for a response.",
  },
  {
    q: "What does a typical SaaS MVP engagement look like for a SF startup?",
    a: "A typical MVP engagement runs 6–10 weeks and covers: core user flows, authentication, database design, API layer, and a deployable frontend. We scope it to the minimum viable feature set that lets you get real users and real data — not the version with every feature you eventually want.",
  },
  {
    q: "Do you integrate with tools common in the Bay Area startup stack?",
    a: "Yes. We regularly integrate with Stripe, Segment, Intercom, HubSpot, Salesforce, Mixpanel, OpenAI APIs, Anthropic APIs, Twilio, and the rest of the modern SaaS stack that SF startups rely on. These are standard scope items, not extras.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Scoping & Feasibility (Week 1)",
    desc: "We map your requirements against your timeline and budget, cut what isn't essential for the first version, and produce a fixed deliverable list with clear acceptance criteria. You leave with certainty, not a vague estimate.",
  },
  {
    num: "02",
    title: "Architecture & Stack Decision (Week 1–2)",
    desc: "We choose the right stack for your scale requirements — not the most fashionable one. Database design, API contracts, third-party integrations, and infrastructure are all defined before we write a line of application code.",
  },
  {
    num: "03",
    title: "Weekly Build Increments (Weeks 2–8+)",
    desc: "You see working software every week. Each increment is deployable — not a component in isolation. You can share it with investors, test it with early users, and give feedback that actually influences what we build next.",
  },
  {
    num: "04",
    title: "QA & Production Launch",
    desc: "Full test coverage on core flows, performance profiling, and deployment to production infrastructure. We don't just push to staging — we deploy, monitor, and stay available for 48 hours post-launch to catch and fix anything that surfaces.",
  },
  {
    num: "05",
    title: "Post-Launch Iteration",
    desc: "30-day post-launch support included. After that, structured retainer engagements for teams that want continued velocity without hiring in-house. Most of our SF clients move into a retainer after their MVP launch.",
  },
];

export default function SanFranciscoPage() {
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
          <span className="text-[#a78bfa]">San Francisco</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-4">
          🇺🇸 San Francisco, CA · Custom Software Development
        </p>
        <h1
          className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
        >
          Custom Software for the Bay Area&apos;s{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Boldest Builders</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          OrchiX is a custom software development company working with San Francisco startups, scaleups, and enterprise teams. We build SaaS platforms, AI-powered products, and the operational software that keeps Bay Area companies moving — without the cost of an in-house Bay Area engineering team.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <LocationCtaButton label="Start a Project in San Francisco →" />
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

      {/* ── Why OrchiX for San Francisco ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Why OrchiX for San Francisco</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          What SF Companies Need From{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">a Software Partner</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8] mb-14">
          <p>
            San Francisco has the highest concentration of technical talent in the world — and the highest cost of accessing it. A mid-level engineer in the Bay Area costs what a senior team costs elsewhere. For most companies, building everything in-house isn&apos;t just expensive, it&apos;s the wrong model for how software development actually works.
          </p>
          <p>
            The alternative isn&apos;t offshore outsourcing with communication overhead and missed context. It&apos;s a focused engineering partner that works like an extension of your team — with the same standards, the same urgency, and the ability to go from scoping to shipping in days, not months.
          </p>
          <p className="text-[#f5f2eb] font-semibold">
            Senior engineers. Bay Area standards. Without Bay Area overhead.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">for San Francisco Businesses</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          From pre-seed MVPs to enterprise platform rebuilds — we build the software that Bay Area companies need to ship fast, raise confidently, and scale without painful rewrites.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">in San Francisco</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          San Francisco&apos;s economy runs on technology. We&apos;ve built for the sectors that define the Bay Area — with an understanding of the specific technical constraints, investor expectations, and competitive pressures each one carries.
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
          From Discovery Call to{" "}
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">San Francisco Businesses</span>
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
