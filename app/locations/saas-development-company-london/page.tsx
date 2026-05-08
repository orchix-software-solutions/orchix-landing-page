import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "SaaS Development Company London | OrchiX",
  description:
    "OrchiX is a specialist SaaS development company serving London founders and product teams. We build B2B SaaS products from MVP to scale — multi-tenancy, Stripe billing, API integrations, and the architecture decisions that determine whether your SaaS survives its first 1,000 customers.",
  keywords: [
    "SaaS development company London",
    "SaaS development agency London",
    "SaaS product development London",
    "MVP development London",
    "B2B SaaS development London",
    "SaaS startup London",
    "multi-tenant SaaS development",
    "SaaS architecture London",
    "SaaS MVP London",
    "Stripe billing integration London",
    "SaaS backend development London",
    "SaaS scaling London",
    "vertical SaaS development London",
    "enterprise SaaS development London",
  ],
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/saas-development-company-london",
  },
  openGraph: {
    title: "SaaS Development Company London | OrchiX",
    description:
      "OrchiX builds SaaS products for London founders and product teams — from MVP architecture through multi-tenancy, Stripe billing, and the scaling challenges that come with real product growth.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/locations/saas-development-company-london",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX — SaaS Development Company London" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OrchiX Software Solutions — SaaS Development London",
  description:
    "Specialist SaaS development company serving London founders and product teams. We build B2B SaaS products from MVP through scale — multi-tenancy architecture, Stripe billing integration, API development, and the performance engineering that production SaaS products demand.",
  url: "https://orchixsoftwaresolutions.com/locations/saas-development-company-london",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  areaServed: {
    "@type": "City",
    name: "London",
    "@id": "https://www.wikidata.org/wiki/Q84",
  },
  serviceType: "SaaS Product Development",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://orchixsoftwaresolutions.com" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://orchixsoftwaresolutions.com/locations" },
      {
        "@type": "ListItem",
        position: 3,
        name: "SaaS Development Company London",
        item: "https://orchixsoftwaresolutions.com/locations/saas-development-company-london",
      },
    ],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SaaS Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Architecture & MVP" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-Tenancy & Auth" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Billing & Subscription (Stripe)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "API Development & Third-Party Integrations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Performance & Scalability" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Maintenance & Iteration" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you build a SaaS MVP from scratch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — building SaaS MVPs from a blank canvas is our most common engagement type. We handle everything from the initial architecture decisions (database design, API structure, auth model, infrastructure choices) through to a production-deployed, user-testable MVP. We deliberately scope MVPs tightly — the goal is the smallest working product that validates your core assumption, not a feature list that grows until your runway doesn't.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle multi-tenancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multi-tenancy is an architecture decision, not a feature — and getting it wrong early is expensive to fix later. We evaluate three patterns based on your product: shared database with tenant ID isolation (lowest cost, most common for early-stage B2B SaaS), schema-per-tenant (better isolation, practical for regulated verticals), and database-per-tenant (highest isolation, justified for enterprise deals with strict data segregation requirements). We recommend the right model for your stage and customer profile, document it clearly, and implement it so it can evolve as your requirements do.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate Stripe billing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Stripe billing integration is a standard part of most of our SaaS builds. We implement Stripe Billing (subscription plans, trial periods, proration), Stripe Customer Portal (self-serve plan upgrades, cancellations, invoice history), Stripe Connect where required for marketplace or multi-vendor SaaS models, and the webhook infrastructure needed to keep your application's subscription state in sync with Stripe reliably. We've handled the edge cases — failed payments, dunning flows, plan migrations, and usage-based billing — so you don't discover them in production.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between an MVP and a full SaaS build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An MVP is a production-deployed application with the minimum feature set needed to test your core product hypothesis with real users. It is built on the same architectural foundations as a full product — proper auth, multi-tenancy if needed, real database design — but with deliberate scope constraints. A full SaaS build is an iterative process that follows a validated MVP: adding features your paying customers have asked for, hardening performance and reliability for larger user loads, and building the integrations and workflows that convert a useful tool into a product people depend on.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to ship a production SaaS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused SaaS MVP — covering core user flows, auth, multi-tenancy where required, and Stripe billing — typically takes 8–12 weeks. The timeline depends heavily on the complexity of the core domain and the number of third-party integrations in scope. We scope precisely before starting: you receive a fixed deliverable list and timeline before we begin, so there are no surprises. After MVP launch, we move into iterative sprints — typically 2-week cycles — based on what your first users tell you.",
      },
    },
  ],
};

const services = [
  {
    icon: "🏗️",
    title: "SaaS Architecture & MVP",
    desc: "Full-stack SaaS architecture from day one — database schema, API design, auth model, infrastructure choices, and the multi-tenancy strategy that fits your customer profile. Then we build the MVP: tight scope, production deployment, real users. No feature creep, no scope drift, no six-month disappearing acts.",
  },
  {
    icon: "🏢",
    title: "Multi-Tenancy & Auth",
    desc: "Shared-database, schema-per-tenant, or database-per-tenant — we implement the right multi-tenancy model for your stage and enterprise requirements. Role-based access control (RBAC), SSO via SAML 2.0 or OIDC, organisation-level permissions, and the invitation / onboarding flows B2B SaaS customers expect out of the box.",
  },
  {
    icon: "💳",
    title: "Billing & Subscription (Stripe)",
    desc: "End-to-end Stripe Billing implementation: subscription plans, free trials, proration, Stripe Customer Portal, usage-based billing, Stripe Connect for marketplace SaaS, and the webhook infrastructure that keeps your application's subscription state reliable under real-world conditions — including failed payments, dunning, and plan migrations.",
  },
  {
    icon: "🔌",
    title: "API Development & Third-Party Integrations",
    desc: "RESTful and GraphQL API design built for developer-facing SaaS products. Webhook systems, OAuth 2.0 third-party integrations, and the integration layer that connects your SaaS to the tools your customers already use — Slack, HubSpot, Salesforce, Zapier-compatible webhooks, and the sector-specific platforms your vertical demands.",
  },
  {
    icon: "⚡",
    title: "SaaS Performance & Scalability",
    desc: "Database query optimisation, caching strategy (Redis, edge caching), background job architecture, and infrastructure scaling for SaaS products moving past their first 100, 1,000, or 10,000 customers. We identify the performance bottlenecks before they become outages and implement the infrastructure changes needed to grow without breaking.",
  },
  {
    icon: "🔧",
    title: "SaaS Maintenance & Iteration",
    desc: "Ongoing engineering for post-launch SaaS products — feature development driven by customer feedback, dependency upgrades, security patches, performance monitoring, and the continuous integration cadence that keeps a production SaaS product healthy. Structured retainer engagements for teams that need consistent delivery velocity without a full in-house team.",
  },
];

const industries = [
  {
    icon: "🚀",
    name: "B2B SaaS Startups",
    desc: "London's B2B SaaS startup scene is one of the most active in Europe. We work with early-stage founders who have validated demand and need a proper engineering partner to build the product — not an agency that treats SaaS projects like website builds. We understand ARR, churn, expansion revenue, and the product decisions that affect all three.",
  },
  {
    icon: "🏛️",
    name: "Enterprise SaaS (Internal Tools Productised)",
    desc: "Large organisations that have built internal tools that solve a real problem — and want to turn them into a commercial SaaS product. We handle the architectural transformation from single-tenant internal system to multi-tenant SaaS, the auth and billing layer, and the self-serve onboarding flows that let external customers get started without a sales call.",
  },
  {
    icon: "🔀",
    name: "Marketplace Platforms",
    desc: "Two-sided and multi-sided marketplace platforms where Stripe Connect handles split payments, provider onboarding, and payout management. We build the matching logic, the trust and verification layer, the transaction ledger, and the admin tooling that marketplace operators need to manage a live platform at scale.",
  },
  {
    icon: "🎯",
    name: "Vertical SaaS (Industry-Specific Software)",
    desc: "SaaS products built for a specific industry vertical — legal tech, property management, construction, recruitment, healthcare operations, professional services. Vertical SaaS wins on depth of fit. We build the domain-specific workflows, integrations, and compliance requirements that horizontal SaaS tools can never address properly.",
  },
];

const painPoints = [
  {
    icon: "🎭",
    title: "Burned by Agencies That Don't Understand SaaS Product",
    desc: "Most London agencies understand websites. Some understand web applications. Very few understand SaaS product — the architecture decisions around multi-tenancy, the billing edge cases, the onboarding flows that convert trials to paid, the feature prioritisation that reduces churn. We've worked in SaaS product contexts long enough to know the difference, and we make the right decisions without needing to be taught them.",
  },
  {
    icon: "📐",
    title: "MVP Scope Creep Kills London SaaS Projects",
    desc: "The most common way a SaaS MVP fails is scope expansion. Every stakeholder adds features; every edge case becomes a blocker; the \"MVP\" turns into a 12-month project that's obsolete before it ships. We define a hard scope boundary at the start, track to it rigorously, and defer everything else to a prioritised post-launch backlog — so you ship something real, on time, and with runway left to iterate.",
  },
  {
    icon: "🏗️",
    title: "Multi-Tenancy Architecture Mistakes Are Expensive",
    desc: "Choosing the wrong multi-tenancy model in week one means a costly rearchitecture in month six — usually triggered by an enterprise deal with data isolation requirements your schema can't meet. We evaluate your customer profile, regulatory environment, and expected growth trajectory before choosing an approach, and we document the decision so future engineers understand why it was made.",
  },
  {
    icon: "📊",
    title: "Billing and Subscription Complexity Catches Everyone",
    desc: "Stripe is not plug-and-play for SaaS billing at scale. Proration logic, dunning flows, failed payment handling, plan migration edge cases, and keeping your application's subscription state in sync with Stripe under webhook failure conditions — these are real engineering problems that bite SaaS products in production. We've solved them before and build the billing layer correctly the first time.",
  },
];

const faqs = [
  {
    q: "Can you build a SaaS MVP from scratch?",
    a: "Yes — building SaaS MVPs from a blank canvas is our most common engagement type. We handle everything from the initial architecture decisions (database design, API structure, auth model, infrastructure choices) through to a production-deployed, user-testable MVP. We deliberately scope MVPs tightly — the goal is the smallest working product that validates your core assumption, not a feature list that grows until your runway doesn't.",
  },
  {
    q: "How do you handle multi-tenancy?",
    a: "Multi-tenancy is an architecture decision, not a feature — and getting it wrong early is expensive to fix later. We evaluate three patterns based on your product: shared database with tenant ID isolation (lowest cost, most common for early-stage B2B SaaS), schema-per-tenant (better isolation, practical for regulated verticals), and database-per-tenant (highest isolation, justified for enterprise deals with strict data segregation requirements). We recommend the right model for your stage and customer profile, document it clearly, and implement it so it can evolve as your requirements do.",
  },
  {
    q: "Can you integrate Stripe billing?",
    a: "Yes. Stripe billing integration is a standard part of most of our SaaS builds. We implement Stripe Billing (subscription plans, trial periods, proration), Stripe Customer Portal (self-serve plan upgrades, cancellations, invoice history), Stripe Connect where required for marketplace or multi-vendor SaaS models, and the webhook infrastructure needed to keep your application's subscription state in sync with Stripe reliably. We've handled the edge cases — failed payments, dunning flows, plan migrations, and usage-based billing — so you don't discover them in production.",
  },
  {
    q: "What is the difference between an MVP and a full SaaS build?",
    a: "An MVP is a production-deployed application with the minimum feature set needed to test your core product hypothesis with real users. It is built on the same architectural foundations as a full product — proper auth, multi-tenancy if needed, real database design — but with deliberate scope constraints. A full SaaS build is an iterative process that follows a validated MVP: adding features your paying customers have asked for, hardening performance and reliability for larger user loads, and building the integrations and workflows that convert a useful tool into a product people depend on.",
  },
  {
    q: "How long does it take to ship a production SaaS?",
    a: "A focused SaaS MVP — covering core user flows, auth, multi-tenancy where required, and Stripe billing — typically takes 8–12 weeks. The timeline depends heavily on the complexity of the core domain and the number of third-party integrations in scope. We scope precisely before starting: you receive a fixed deliverable list and timeline before we begin, so there are no surprises. After MVP launch, we move into iterative sprints — typically 2-week cycles — based on what your first users tell you.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Product Discovery & SaaS Scoping (Week 1)",
    desc: "A structured session to define your core user problem, the minimum feature set that tests it, the multi-tenancy model your customer profile requires, and the third-party integrations in scope for v1. Output: a fixed deliverable list, timeline, and architecture decision record — before a line of code is written.",
  },
  {
    num: "02",
    title: "SaaS Architecture Design (Week 1–2)",
    desc: "Database schema, API contract design, multi-tenancy implementation strategy, auth provider selection (Auth0, Clerk, or custom), Stripe billing configuration, infrastructure plan (Vercel, Railway, AWS, or GCP), and background job architecture. Everything decided and documented before build begins.",
  },
  {
    num: "03",
    title: "Iterative Build with Weekly Demos (Weeks 2–10+)",
    desc: "Working software every week in a shared staging environment you can access, test, and share with early users. Each sprint delivers a functional increment — not a status update. Scope changes are handled explicitly and priced transparently, not silently absorbed into a growing backlog.",
  },
  {
    num: "04",
    title: "QA, Performance Testing & Production Launch",
    desc: "End-to-end testing across core user flows, load testing against your target concurrency, security review (auth bypass testing, OWASP API security top 10), and production deployment. We don't hand off a staging environment — we deploy, configure monitoring, and watch the first 48 hours of real traffic.",
  },
  {
    num: "05",
    title: "Post-Launch Iteration & Growth Engineering",
    desc: "30-day post-launch support included. After that, structured sprint-based retainers for ongoing feature development driven by your customer feedback loop — so you ship to paying users continuously rather than waiting for the next big release.",
  },
];

export default function SaasLondonPage() {
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
          <span className="text-[#a78bfa]">SaaS Development Company London</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-4">
          🇬🇧 London · SaaS Development
        </p>
        <h1
          className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
        >
          SaaS Products Built to{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Scale from London</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          OrchiX is a specialist SaaS development company working with London founders, product teams, and enterprises building B2B SaaS products. We build from MVP architecture through to scale — multi-tenancy, Stripe billing, API design, and the performance engineering that separates SaaS products that survive their first thousand customers from ones that don&apos;t. No templates, no generalist agencies, no scope creep.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <LocationCtaButton label="Start a SaaS Project →" />
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

      {/* ── Why OrchiX for London SaaS ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Why OrchiX for London SaaS</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          What London SaaS Founders Need From{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">a Development Partner</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8] mb-14">
          <p>
            London produces a significant share of Europe&apos;s B2B SaaS companies — and a significant share of them get burned by the same agency problem. The agency that builds websites takes on a SaaS project, doesn&apos;t understand multi-tenancy, builds a single-tenant application with shared tables and no proper isolation, and hands it over. The founder discovers the problem when their first enterprise prospect asks about data segregation.
          </p>
          <p>
            Or the scope creeps. The MVP that was supposed to take 10 weeks takes 10 months. By the time it ships, the market has moved, the runway is gone, and the product was never tested against real users during the build because there was nothing to test.
          </p>
          <p className="text-[#f5f2eb] font-semibold">
            We work differently. Tight scope, architectural decisions made before code is written, and working software in your hands every week — not a big reveal.
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
          SaaS Development Services{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">for London Product Teams</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          Every service we offer is oriented around one outcome: a SaaS product that works in production, scales with your customer growth, and can be iterated on quickly — not a codebase your next engineer has to rewrite.
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
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">SaaS Verticals</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          SaaS Product Types We Build{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">for London Clients</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          London&apos;s SaaS market spans from pre-seed startups to large enterprises productising internal tools. We work across all four contexts and understand the different engineering priorities each one demands.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">Production SaaS Product</span>
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">London SaaS Founders</span>
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
