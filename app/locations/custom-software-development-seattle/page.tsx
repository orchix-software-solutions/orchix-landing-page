import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Custom Software Development Seattle | OrchiX",
  description:
    "OrchiX is a custom software development company serving Seattle businesses. We build cloud-native SaaS platforms, AI automation, CRM/ERP systems, and enterprise software for Seattle's tech, aerospace, healthcare, and gaming markets.",
  keywords: [
    "custom software development Seattle",
    "software development company Seattle",
    "software development agency Seattle",
    "Seattle software development company",
    "cloud-native software development Seattle",
    "SaaS development Seattle",
    "AI automation Seattle",
    "enterprise software Seattle",
    "web app development Seattle",
    "AWS software development Seattle",
    "Azure software development Seattle",
    "CRM development Seattle",
    "aerospace software Seattle",
    "Seattle tech software company",
    "custom software development Pacific Northwest",
  ],
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/custom-software-development-seattle",
  },
  openGraph: {
    title: "Custom Software Development Seattle | OrchiX",
    description:
      "OrchiX builds custom software for Seattle businesses — cloud-native SaaS platforms, AI automation, and enterprise systems for Seattle's tech, aerospace, healthcare, and gaming sectors.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-seattle",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX — Custom Software Development Seattle" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OrchiX Software Solutions — Seattle",
  description:
    "Custom software development company serving Seattle businesses. Cloud-native SaaS platforms, AI automation, and enterprise systems for Seattle's tech, aerospace, healthcare, and gaming sectors.",
  url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-seattle",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  areaServed: {
    "@type": "City",
    name: "Seattle",
    "@id": "https://www.wikidata.org/wiki/Q5083",
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
        name: "Custom Software Development Seattle",
        item: "https://orchixsoftwaresolutions.com/locations/custom-software-development-seattle",
      },
    ],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud-Native SaaS Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & Intelligent Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Enterprise Software Development" } },
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
      name: "Do you build cloud-native software for Seattle companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cloud-native architecture is our default, not an option. We build on AWS and Azure — the platforms Seattle companies use — with proper infrastructure-as-code, auto-scaling, and the observability setup that Seattle's engineering-literate teams expect from day one.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate with AWS and Microsoft Azure services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Deep AWS and Azure integrations are standard scope items for us. We work with S3, Lambda, RDS, DynamoDB, EC2, Azure Functions, Azure SQL, Cosmos DB, and the rest of the services Seattle's enterprise and startup teams rely on. These integrations don't inflate our timelines — they're what we do routinely.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve aerospace and defense companies in Seattle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Seattle's aerospace sector — anchored by Boeing and a dense ecosystem of suppliers and contractors — has specific software requirements around supply chain management, compliance documentation, and operational tracking. We build the software platforms that support these requirements, including audit trails and access controls appropriate for regulated aerospace environments.",
      },
    },
    {
      "@type": "Question",
      name: "What security standards do you build to for Seattle enterprise clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seattle's enterprise market — shaped by Amazon and Microsoft's engineering culture — holds software to a high security standard. We build with encryption at rest and in transit, role-based access control, audit logging, secrets management, and vulnerability scanning as baseline practices. For clients in regulated industries, we can align with SOC 2, HIPAA, and FedRAMP requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work with Seattle companies that have strong in-house engineering teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — this is common in Seattle. We work alongside existing engineering teams as a specialist build partner, handling specific product lines, platform migrations, or capacity overflow while your team stays focused on core product. We produce code at the standard Seattle's engineering culture expects: documented, tested, and built to be handed over cleanly.",
      },
    },
  ],
};

const services = [
  {
    icon: "☁️",
    title: "Cloud-Native SaaS Development",
    desc: "SaaS platforms built cloud-native from day one — not lifted-and-shifted from on-premise. Deployed on AWS or Azure, with infrastructure-as-code, auto-scaling, multi-region resilience, and the observability stack Seattle's engineering teams expect. Built to the standards Amazon and Microsoft alumni bring with them.",
  },
  {
    icon: "🤖",
    title: "AI & Intelligent Automation",
    desc: "AI agents, LLM integrations, and intelligent automation built for Seattle companies looking to operationalise AI — not just experiment with it. We build with proper grounding, guardrails, and monitoring so the AI performs reliably in production, not just in demos.",
  },
  {
    icon: "🖥️",
    title: "Enterprise Software Development",
    desc: "Custom enterprise platforms for Seattle's large and mid-market companies — internal tooling, operational systems, and B2B products built with the engineering rigour that Seattle's technical culture demands. Proper architecture, clean code, comprehensive documentation.",
  },
  {
    icon: "📊",
    title: "CRM & ERP Development",
    desc: "Custom CRM and ERP systems for Seattle companies that have outgrown Salesforce configurations or need something that integrates cleanly with their AWS or Azure infrastructure. Built for the workflows your sales, ops, and finance teams actually use.",
  },
  {
    icon: "🔄",
    title: "Business Process Automation",
    desc: "Automating the operational workflows that slow Seattle companies down — data pipeline orchestration, cross-system integrations, approval workflows, and the manual processes that don't scale as headcount grows. Built on cloud infrastructure that handles the load.",
  },
  {
    icon: "🛠️",
    title: "Software Maintenance & Support",
    desc: "Ongoing engineering support for Seattle businesses that need reliable development capacity alongside their in-house team or without one. Structured retainers covering bug fixes, security patches, performance improvements, and feature development to Seattle's engineering standards.",
  },
];

const industries = [
  {
    icon: "☁️",
    name: "Cloud & Enterprise Tech",
    desc: "Seattle is the cloud computing capital of the world. Amazon Web Services and Microsoft Azure both call it home, and the companies that orbit them — ISVs, SaaS startups, system integrators — carry the engineering expectations that come with that proximity. We build to those standards: cloud-native architecture, proper DevOps practices, and software that an Amazon or Microsoft engineer would respect.",
  },
  {
    icon: "✈️",
    name: "Aerospace & Defense",
    desc: "Boeing's global headquarters and a vast supplier ecosystem make Seattle one of the world's most important aerospace hubs. The software needs of aerospace companies — supply chain visibility, compliance documentation, quality management, MRO tracking — are specialised and regulation-aware. We build operational platforms that meet the auditability and access control requirements of this sector.",
  },
  {
    icon: "🏥",
    name: "Healthcare & Life Sciences",
    desc: "Seattle's healthcare sector — anchored by Providence, Swedish, UW Medicine, and a growing life sciences community — requires software built with HIPAA compliance, clinical workflow understanding, and the data security practices that patient information demands. We build patient management systems, clinical data platforms, and healthcare operations software for Seattle's medical institutions and health-tech startups.",
  },
  {
    icon: "🎮",
    name: "Gaming & Interactive Entertainment",
    desc: "Seattle's gaming ecosystem — home to Valve, Bungie, Nintendo of America, and dozens of independent studios — needs software beyond game engines. We build player portals, live ops platforms, in-game economy systems, analytics infrastructure, and the operational tooling that keeps games-as-a-service products running smoothly post-launch.",
  },
];

const painPoints = [
  {
    icon: "🏗️",
    title: "Seattle Expects Cloud-Native by Default",
    desc: "Companies in Seattle — shaped by Amazon and Microsoft's engineering culture — don't accept software that runs on a single server or needs manual scaling. We build cloud-native by default: infrastructure-as-code, containerised services, managed databases, and auto-scaling configured from day one, not retrofitted after the first traffic incident.",
  },
  {
    icon: "🔐",
    title: "Security Is an Architecture Decision, Not a Feature",
    desc: "Seattle's enterprise market holds software to security standards shaped by two of the world's most security-conscious companies. We build with encryption, secrets management, role-based access, audit logging, and vulnerability scanning as baseline requirements — the same approach Amazon and Microsoft engineers apply internally.",
  },
  {
    icon: "🔗",
    title: "Deep AWS and Azure Integration Is the Expectation",
    desc: "Seattle companies run on AWS or Azure — often both. The software we build integrates deeply with these ecosystems: S3 for storage, Lambda for compute, RDS for databases, SQS for queuing, Azure AD for authentication. These integrations are standard scope, not expensive add-ons that inflate your timeline.",
  },
  {
    icon: "👥",
    title: "We Work Alongside Strong Engineering Teams",
    desc: "Many Seattle companies have exceptional in-house engineers — they need a specialist partner, not a team to replace them. We integrate cleanly alongside your existing team, follow your code standards, participate in your review processes, and produce work that your engineers are proud to maintain after we hand it over.",
  },
];

const faqs = [
  {
    q: "Do you build cloud-native software for Seattle companies?",
    a: "Yes. Cloud-native architecture is our default, not an option. We build on AWS and Azure — the platforms Seattle companies use — with proper infrastructure-as-code, auto-scaling, and the observability setup that Seattle's engineering-literate teams expect from day one.",
  },
  {
    q: "Can you integrate with AWS and Microsoft Azure services?",
    a: "Yes. Deep AWS and Azure integrations are standard scope items for us. We work with S3, Lambda, RDS, DynamoDB, EC2, Azure Functions, Azure SQL, Cosmos DB, and the rest of the services Seattle's enterprise and startup teams rely on. These integrations don't inflate our timelines — they're what we do routinely.",
  },
  {
    q: "Do you serve aerospace and defense companies in Seattle?",
    a: "Yes. Seattle's aerospace sector — anchored by Boeing and a dense ecosystem of suppliers and contractors — has specific software requirements around supply chain management, compliance documentation, and operational tracking. We build the software platforms that support these requirements, including audit trails and access controls appropriate for regulated aerospace environments.",
  },
  {
    q: "What security standards do you build to for Seattle enterprise clients?",
    a: "Seattle's enterprise market — shaped by Amazon and Microsoft's engineering culture — holds software to a high security standard. We build with encryption at rest and in transit, role-based access control, audit logging, secrets management, and vulnerability scanning as baseline practices. For clients in regulated industries, we can align with SOC 2, HIPAA, and FedRAMP requirements.",
  },
  {
    q: "Can you work with Seattle companies that have strong in-house engineering teams?",
    a: "Yes — this is common in Seattle. We work alongside existing engineering teams as a specialist build partner, handling specific product lines, platform migrations, or capacity overflow while your team stays focused on core product. We produce code at the standard Seattle's engineering culture expects: documented, tested, and built to be handed over cleanly.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Technical Discovery & Architecture Review (Week 1)",
    desc: "For Seattle clients, we go deeper on technical discovery. We review existing infrastructure, assess cloud architecture decisions, map integration requirements with AWS or Azure services, and identify where the current stack creates constraints before scoping a single feature.",
  },
  {
    num: "02",
    title: "Cloud Architecture & Infrastructure Design (Weeks 1–2)",
    desc: "We design the cloud infrastructure before writing application code. VPC configuration, service selection, database design, CI/CD pipeline, secrets management, and observability stack are all defined and reviewed with your team before the build starts.",
  },
  {
    num: "03",
    title: "Iterative Build with Weekly Engineering Reviews (Weeks 2–10+)",
    desc: "Working software every week with full engineering review access. Seattle clients often want to see pull requests, review architecture decisions, and participate in technical discussions. We welcome that — it's how we produce software your team is confident maintaining.",
  },
  {
    num: "04",
    title: "Security Audit, Load Testing & Production Deployment",
    desc: "Security review covering OWASP top 10 and any industry-specific requirements, load testing under realistic traffic projections, and production deployment with monitoring, alerting, and runbook documentation. We deploy to your AWS or Azure environment, not ours.",
  },
  {
    num: "05",
    title: "Knowledge Transfer & Ongoing Support",
    desc: "Full documentation, architecture decision records, and a structured handover to your team. 30-day post-launch support included. After that, ongoing retainer engagements for Seattle companies that want continued development velocity with a team that already knows their systems.",
  },
];

export default function SeattlePage() {
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
          <span className="text-[#a78bfa]">Seattle</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-4">
          🇺🇸 Seattle, WA · Custom Software Development
        </p>
        <h1
          className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
        >
          Cloud-Native Software Built for{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Seattle&apos;s Engineering Standards</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          OrchiX is a custom software development company working with Seattle businesses across cloud tech, aerospace, healthcare, and gaming. We build to the engineering standards that Amazon and Microsoft have established as the baseline in Seattle — cloud-native architecture, deep AWS and Azure integration, and security practices that hold up to enterprise scrutiny.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <LocationCtaButton label="Start a Project in Seattle →" />
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

      {/* ── Why OrchiX for Seattle ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Why OrchiX for Seattle</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          What Seattle Companies Need From{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">a Software Partner</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8] mb-14">
          <p>
            Seattle has the most technically demanding software culture in the country. Two decades of Amazon and Microsoft setting the standard for how software is built, deployed, and maintained has raised the bar for every company in the region. A Seattle engineering team doesn&apos;t accept a single-server deployment, undocumented code, or a system with no observability. They know what good looks like — and they expect it.
          </p>
          <p>
            Finding a development partner that meets that standard is the challenge. Most agencies don&apos;t build cloud-native. Most don&apos;t have real AWS or Azure depth. Most produce code that an experienced Seattle engineer would need to significantly rework before trusting it in production.
          </p>
          <p className="text-[#f5f2eb] font-semibold">
            We build the way Seattle expects software to be built. Cloud-native, well-documented, security-conscious, and handed over in a state your team is proud to own.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">for Seattle Businesses</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          Cloud-native by default, security-conscious by design, and built to the engineering standards Seattle&apos;s technical culture demands.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">in Seattle</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          Seattle&apos;s economy is concentrated in sectors that demand serious engineering — cloud tech, aerospace, healthcare, and gaming. We understand the specific technical, regulatory, and operational requirements each one carries.
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
          From Technical Discovery to{" "}
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">Seattle Businesses</span>
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
