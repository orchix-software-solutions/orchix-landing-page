import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import FaqAccordion from "./faq-accordion";
import CtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Custom SaaS Product Development Services | MVP to Scale | OrchiX",
  description:
    "OrchiX builds revenue-generating SaaS products from MVP to scale. Custom SaaS development with weekly demos, shared repos, and zero lock-in. Trusted by founders and product teams.",
  keywords: [
    "custom SaaS development",
    "SaaS product development company",
    "SaaS MVP development",
    "build SaaS product",
    "SaaS application development services",
    "SaaS development agency India",
    "SaaS platform development",
    "MVP development services",
    "SaaS product engineering",
    "cloud SaaS development",
    "B2B SaaS development",
    "SaaS startup development",
  ],
  alternates: { canonical: "https://orchixsoftwaresolutions.com/services/saas-product-development" },
  openGraph: {
    title: "Custom SaaS Product Development Services | OrchiX Software Solutions",
    description:
      "OrchiX builds revenue-generating SaaS products from MVP to scale. Custom SaaS development with weekly demos, shared repos, and zero lock-in.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/services/saas-product-development",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX Software Solutions" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom SaaS Product Development",
  description:
    "OrchiX builds revenue-generating SaaS products from MVP to scale — with architecture that holds when you hit 10,000 users, not just 10.",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  serviceType: "SaaS Product Development",
  areaServed: "Worldwide",
  url: "https://orchixsoftwaresolutions.com/services/saas-product-development",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://orchixsoftwaresolutions.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://orchixsoftwaresolutions.com/services" },
      {
        "@type": "ListItem",
        position: 3,
        name: "SaaS Product Development",
        item: "https://orchixsoftwaresolutions.com/services/saas-product-development",
      },
    ],
  },
};

const services = [
  {
    icon: "🚀",
    title: "SaaS MVP Development",
    desc: "Building an MVP is not about building less. It's about building the right thing first — the core workflow your users actually need, nothing else. We scope, design, and ship a functional MVP in 6–10 weeks. It's not a prototype. It's a product you can charge for.",
  },
  {
    icon: "🏢",
    title: "B2B SaaS Platform Development",
    desc: "B2B SaaS has specific requirements: multi-tenancy, role-based access, audit logs, team management, and invoicing. We build these systems with proper tenant isolation and data architecture from the start — not bolted on later when a big client asks for them.",
  },
  {
    icon: "⚡",
    title: "SaaS Product Scaling & Re-architecture",
    desc: "Your MVP worked. Then you got 500 paying customers and the database is slow. We come in, audit the codebase, identify the failure points, and re-architect the parts that need it — without shutting everything down.",
  },
  {
    icon: "🔗",
    title: "SaaS API & Integration Development",
    desc: "We build clean, documented REST and GraphQL APIs — the kind your enterprise clients' IT teams can actually work with. We also handle third-party integrations: payment gateways, CRM connectors, ERP systems, data warehouses, and more.",
  },
  {
    icon: "🏷️",
    title: "White-Label SaaS Development",
    desc: "You have the market and the brand. We build the product. White-label SaaS platforms with full customization support — separate branding per client, configurable features, and tenant-level settings.",
  },
  {
    icon: "☁️",
    title: "SaaS Cloud Infrastructure & DevOps",
    desc: "We set up CI/CD pipelines, containerized deployments, auto-scaling, monitoring, and alerting so your team ships confidently and your product stays up. AWS, Azure, or GCP — we work with what makes sense for your product.",
  },
];

const whyItems = [
  {
    icon: "🖥️",
    title: "Weekly Demos You Can Actually Touch",
    desc: "Not a slide deck. Not a Loom recording. Every Friday, a working build you can click through, test, and give feedback on — so you can redirect the product in real time.",
  },
  {
    icon: "📁",
    title: "Shared Repos From Day One",
    desc: "Your GitHub organisation. Your repository. Your code. You're not dependent on us to access your own product. If you want to bring development in-house, you can — without negotiating a handover.",
  },
  {
    icon: "🏗️",
    title: "Architecture for Your Next Stage",
    desc: "Most MVPs are built to demo. We design for where you're going — modular services, clean data models, horizontal scaling — so growth doesn't require a rebuild.",
  },
  {
    icon: "⚡",
    title: "7-Day First Prototype",
    desc: "We deliver a working prototype in the first week so you can validate direction before committing to the full build. Real code, real product — not a Figma file.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Product Discovery (Week 1)",
    desc: "We map the user journey, define the core workflow, and write a technical spec that's readable by non-engineers. You leave knowing exactly what we're building, why, and in what order. No surprises.",
  },
  {
    num: "02",
    title: "Architecture & Design (Week 2)",
    desc: "System architecture, database schema, API design, and UI wireframes — all before a line of production code is written. This is where most expensive mistakes get caught cheaply.",
  },
  {
    num: "03",
    title: "Sprint-Based Build with Weekly Demos (Weeks 3–10+)",
    desc: "Two-week sprints. Working demos every Friday. You give feedback, we incorporate it the following sprint. The product evolves with your thinking — not against it.",
  },
  {
    num: "04",
    title: "QA & Performance Testing",
    desc: "Automated test coverage, load testing, security review, and browser/device compatibility before anything goes live. We've seen what happens when this step gets rushed. We don't rush it.",
  },
  {
    num: "05",
    title: "Launch & Post-Launch Support",
    desc: "Staged rollout, real-time monitoring, and a 90-day support window after launch. Because launch day is when you find out what you missed.",
  },
];

const techStack = [
  { name: "React",              svg: "/svgs/react-svgrepo-com (1).svg" },
  { name: "Next.js",            svg: "/svgs/nextjs-svgrepo-com.svg" },
  { name: "TypeScript",         svg: "/svgs/typescript-official-svgrepo-com.svg" },
  { name: "Vue.js",             svg: "/svgs/vue-svgrepo-com.svg" },
  { name: "Node.js",            svg: "/svgs/nodejs-icon-logo-svgrepo-com.svg" },
  { name: "Python / FastAPI",   svg: "/svgs/python-svgrepo-com (1).svg" },
  { name: "Go",                 svg: "/svgs/go-svgrepo-com.svg" },
  { name: "PostgreSQL",         svg: "/svgs/postgresql-svgrepo-com.svg" },
  { name: "MongoDB",            svg: "/svgs/mongodb-svgrepo-com (1).svg" },
  { name: "Redis",              svg: "/svgs/redis-logo-svgrepo-com.svg" },
  { name: "AWS",                svg: "/svgs/aws-svgrepo-com (2).svg" },
  { name: "Microsoft Azure",    svg: "/svgs/azure-icon-svgrepo-com (1).svg" },
  { name: "Docker / Kubernetes",svg: "/svgs/docker-svgrepo-com.svg" },
  { name: "GraphQL",            svg: "/svgs/graphql-svgrepo-com.svg" },
  { name: "Stripe / Payments",  svg: "/svgs/stripe-svgrepo-com.svg" },
];

const industries = [
  { icon: "💳", title: "Fintech SaaS", desc: "Lending platforms, wealth management dashboards, payment infrastructure, compliance reporting. PCI-DSS and SOC 2 experience." },
  { icon: "🏥", title: "Healthcare SaaS", desc: "Patient engagement platforms, clinical workflow tools, telehealth systems. HIPAA-ready architecture." },
  { icon: "👥", title: "HR & Workforce SaaS", desc: "Payroll, scheduling, performance management, employee self-service portals." },
  { icon: "🚚", title: "Logistics & Supply Chain SaaS", desc: "Shipment tracking, warehouse management, route optimisation, carrier integrations." },
  { icon: "🎓", title: "EdTech SaaS", desc: "Learning management systems, assessment platforms, cohort-based tools, content delivery at scale." },
  { icon: "🏗️", title: "Real Estate SaaS", desc: "Property management platforms, CRM systems for agents, tenant portals, document automation." },
  { icon: "📊", title: "Marketing & Analytics SaaS", desc: "Campaign management, attribution dashboards, CRM integrations, white-label reporting." },
  { icon: "🛍️", title: "eCommerce SaaS", desc: "Multi-vendor platforms, subscription commerce, inventory management, fulfilment integrations." },
];

export default function SaasProductDevelopmentPage() {
  return (
    <main className="bg-[#0a0a0a] text-[#f5f2eb]">
      <JsonLd schema={serviceSchema} />

      {/* ── Breadcrumb ── */}
      <div className="max-w-[1200px] mx-auto px-[3rem] pt-40 max-[1100px]:px-6 max-[900px]:pt-36">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.78rem] text-[#8a8680]">
          <Link href="/" className="hover:text-[#a78bfa] transition-colors duration-200">Home</Link>
          <span className="text-[#8a8680]/40">›</span>
          <Link href="/services" className="hover:text-[#a78bfa] transition-colors duration-200">Services</Link>
          <span className="text-[#8a8680]/40">›</span>
          <span className="text-[#a78bfa]">SaaS Product Development</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <h1 className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
          Most SaaS Products Don&apos;t Fail Because of the Idea.{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">They Fail Because of How They Were Built.</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[620px] mb-8">
          We build SaaS products from MVP to scale — with architecture that holds when you hit 10,000 users, not just 10. Weekly demos, shared repos, no black boxes.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <CtaButton label="Get a Free Product Review" />
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Pain Section ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">The Real Problem</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          The Real Problem with{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Most SaaS Builds</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8]">
          <p>
            You hired a development agency. They gave you a timeline, a price, and a Figma file. Six months later, you&apos;ve got a product that works — barely — and a codebase you can&apos;t maintain without them.
          </p>
          <p>
            Most SaaS development engagements fail in one of three ways: the architecture can&apos;t handle real user load, the code is so tangled that adding a feature takes four weeks, or the agency disappears after delivery and leaves you holding a system nobody else understands.
          </p>
          <p className="text-[#f5f2eb] font-semibold">
            The fix isn&apos;t a better agency. It&apos;s a different model.
          </p>
          <p>
            We don&apos;t deliver a product at the end of a six-month engagement. We ship working software every two weeks, run demos every Friday, and give you full repository access from day one. You always know exactly where the project is — because you can see it running.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Services Grid ── */}
      <section id="services" className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">What We Build</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          Custom{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">SaaS Development</span>{" "}
          Services
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-5">
          Every SaaS product we build starts with a question most agencies skip: what does this need to handle in two years, not just today? The answer shapes every architectural decision.
        </p>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          Not sure whether your product needs a monolith, modular monolith, or microservices?{" "}
          <Link
            href="/blogs/microservices-vs-monolith"
            className="text-[#a78bfa] underline underline-offset-2 hover:text-[#c4b5fd] transition-colors duration-200"
          >
            Read our honest architecture decision guide for founders and CTOs →
          </Link>
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

      {/* ── Why OrchiX + Process ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <div className="grid grid-cols-2 gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-12">
          {/* Why OrchiX */}
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Why OrchiX</p>
            <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
              Why Product Teams<br />
              <span className="font-playfair italic font-normal text-[#a78bfa]">Choose OrchiX</span>
            </h2>
            <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] mb-8">
              The most common thing we hear from new clients: &quot;Our last agency gave us weekly status updates. We had no idea what they were actually building until it was done.&quot; We fixed that.
            </p>
            <div className="flex flex-col gap-4">
              {whyItems.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 items-start p-5 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] transition-all duration-200 hover:border-[rgba(124,91,245,0.3)]"
                >
                  <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-[rgba(124,91,245,0.12)] border border-[rgba(124,91,245,0.15)] flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-syne font-bold text-[0.9rem] text-[#f5f2eb] mb-1">{item.title}</h4>
                    <p className="text-[0.82rem] text-[#8a8680] leading-[1.65]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Our Process</p>
            <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-10" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
              From Idea to{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">Launch</span>
            </h2>
            <div className="flex flex-col">
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
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Tech Stack ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 text-center max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Technology</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          Built With the Stack Your{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Product Actually Needs</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[540px] mx-auto mb-10">
          We don&apos;t have a favourite framework we push on every client. We match the stack to your product&apos;s requirements — data volume, team skills, compliance needs.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center gap-3 w-[120px] h-[110px] rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] transition-all duration-300 hover:border-[rgba(124,91,245,0.4)] hover:bg-[rgba(124,91,245,0.06)] hover:shadow-[0_0_24px_rgba(124,91,245,0.1)] hover:-translate-y-0.5 cursor-default"
            >
              {tech.svg ? (
                <img
                  src={tech.svg}
                  alt={tech.name}
                  className="w-10 h-10 object-contain"
                />
              ) : (
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[rgba(124,91,245,0.12)] border border-[rgba(124,91,245,0.2)]">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M4 6h16M4 10h16M4 14h8M14 17h6M17 14v6" />
                  </svg>
                </div>
              )}
              <span className="text-[0.72rem] font-medium text-[#8a8680] group-hover:text-[#c4bfb8] transition-colors duration-200 text-center leading-tight px-2">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Industries ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Industries</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          SaaS Products We&apos;ve Shipped{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Across Industries</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[540px] mb-12">
          Every industry has different workflows, compliance needs, and data structures. We build SaaS products that reflect that reality.
        </p>
        <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] p-6 text-center transition-all duration-200 hover:border-[rgba(124,91,245,0.35)] hover:-translate-y-1"
            >
              <span className="block text-[1.8rem] mb-3">{ind.icon}</span>
              <h4 className="font-syne font-bold text-[0.88rem] text-[#f5f2eb] mb-2">{ind.title}</h4>
              <p className="text-[0.78rem] text-[#8a8680] leading-[1.6]">{ind.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Pricing ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Pricing</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          What Does Custom{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">SaaS Development Cost?</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8]">
          <p>Founders ask this every time. Fair question.</p>
          <div className="grid grid-cols-2 gap-4 max-[560px]:grid-cols-1">
            <div className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] p-6">
              <p className="font-syne font-bold text-[#f5f2eb] text-[1rem] mb-1">Focused MVP</p>
              <p className="text-[#a78bfa] font-syne font-extrabold text-[1.4rem] mb-2">$4,999 – $6,999</p>
              <p className="text-[0.82rem] leading-[1.6]">Single core workflow, one user role, basic billing integration. 8–12 weeks.</p>
            </div>
            <div className="rounded-2xl border border-[rgba(124,91,245,0.3)] bg-[rgba(124,91,245,0.05)] p-6">
              <p className="font-syne font-bold text-[#f5f2eb] text-[1rem] mb-1">Full B2B SaaS Platform</p>
              <p className="text-[#a78bfa] font-syne font-extrabold text-[1.4rem] mb-2">$10,000 – $30,000</p>
              <p className="text-[0.82rem] leading-[1.6]">Multi-tenancy, multiple user roles, integrations, and admin tooling.</p>
            </div>
          </div>
          <p>
            We scope every project properly before giving a number. The discovery phase (Week 1) produces a detailed breakdown by feature set — so you can make informed decisions about what to build first versus what to defer to v2.
          </p>
          <p>We also offer fixed-price milestones. You know what you&apos;re paying for before each sprint starts.</p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── FAQ ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">FAQ</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-10" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          Common Questions About{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">SaaS Product Development</span>
        </h2>
        <FaqAccordion />
      </section>

    </main>
  );
}
