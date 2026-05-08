import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "FinTech Software Development Company London | OrchiX",
  description:
    "OrchiX is a specialist FinTech software development company serving London's financial markets. We build Open Banking integrations, trading platforms, RegTech compliance systems, and payments infrastructure for London fintechs, banks, and asset managers.",
  keywords: [
    "fintech software development London",
    "fintech development company London",
    "fintech software company London",
    "Open Banking development London",
    "payments software development London",
    "RegTech development London",
    "WealthTech development London",
    "financial software development London",
    "FCA compliant software development",
    "trading platform development London",
    "PSD2 integration London",
    "fintech agency London",
    "banking software development London",
    "InsurTech software development London",
  ],
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/fintech-software-development-london",
  },
  openGraph: {
    title: "FinTech Software Development Company London | OrchiX",
    description:
      "OrchiX builds specialist FinTech software for London's financial markets — Open Banking integrations, RegTech platforms, trading systems, and payments infrastructure built for FCA-regulated environments.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/locations/fintech-software-development-london",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX — FinTech Software Development London" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OrchiX Software Solutions — FinTech London",
  description:
    "Specialist FinTech software development company serving London's financial markets. We build Open Banking integrations, trading and portfolio platforms, RegTech compliance systems, and payments infrastructure for London fintechs, banks, WealthTech firms, and asset managers.",
  url: "https://orchixsoftwaresolutions.com/locations/fintech-software-development-london",
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
  serviceType: "FinTech Software Development",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://orchixsoftwaresolutions.com" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://orchixsoftwaresolutions.com/locations" },
      {
        "@type": "ListItem",
        position: 3,
        name: "FinTech Software Development London",
        item: "https://orchixsoftwaresolutions.com/locations/fintech-software-development-london",
      },
    ],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "FinTech Software Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trading & Portfolio Platforms" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Open Banking Integrations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "RegTech & Compliance Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Payments & Wallet Infrastructure" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI for Financial Data" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit Trail & Risk Systems" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you build FCA-regulated software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build software for FCA-regulated firms and understand the compliance requirements that come with it — audit trails, access control logs, data residency obligations, and the specific record-keeping rules that apply to regulated financial activities. We are not ourselves FCA-regulated, but we work closely with your compliance team and legal counsel to ensure the software we deliver meets your regulatory obligations under SYSC, COBS, and relevant FCA guidance.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate with Open Banking APIs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We have direct experience integrating with Open Banking APIs under PSD2 — including TrueLayer, Plaid, Yapily, and direct bank APIs. We handle OAuth 2.0 consent flows, AIS and PIS API calls, webhook management, and the data normalisation layer needed to make raw Open Banking data usable in your application.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle financial data security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Financial data security is built into our architecture from day one — not added as an afterthought. We implement encryption at rest and in transit, strict role-based access control, comprehensive audit logging, secrets management via environment-isolated vaults, and infrastructure-level network segmentation. For systems handling personal financial data, we design with UK GDPR and FCA data handling requirements in mind throughout.",
      },
    },
    {
      "@type": "Question",
      name: "What FinTech systems and APIs can you integrate with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have integration experience across the major FinTech infrastructure stack used in London: Stripe (payments, Connect, billing), TrueLayer and Yapily (Open Banking), Plaid (financial data), Modulr and ClearBank (banking-as-a-service), FIX protocol (trading), Bloomberg and Refinitiv/LSEG data feeds, Temenos and Finastra (core banking), Salesforce Financial Services Cloud, and a range of KYC/AML providers including Onfido and Jumio.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a FinTech build typically take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused FinTech MVP — for example, a payments dashboard with Open Banking data aggregation, or a regulatory reporting module — typically runs 8–14 weeks. Full trading platforms, WealthTech portals, or core compliance systems are 4–8 months depending on the integration surface area and the regulatory complexity involved. We scope everything precisely before starting, so you know the timeline and cost before a line of code is written.",
      },
    },
  ],
};

const services = [
  {
    icon: "📈",
    title: "Trading & Portfolio Platforms",
    desc: "Order management systems, portfolio analytics dashboards, trade blotter UIs, and P&L reporting tools built for asset managers, hedge funds, and trading desks. FIX protocol connectivity, real-time market data feeds (Bloomberg, Refinitiv/LSEG), and multi-asset class support handled as standard.",
  },
  {
    icon: "🏦",
    title: "Open Banking Integrations",
    desc: "PSD2-compliant AIS and PIS integrations via TrueLayer, Yapily, and Plaid. We handle the full integration stack — OAuth 2.0 consent flows, token management, webhook processing, data normalisation, and the reconciliation logic that makes raw Open Banking data actionable inside your product.",
  },
  {
    icon: "📋",
    title: "RegTech & Compliance Automation",
    desc: "Regulatory reporting engines, transaction monitoring systems, KYC/AML workflow automation, and FCA compliance dashboards. We build the audit trail infrastructure, suspicious activity report (SAR) pipelines, and COBS/MiFID II reporting modules that regulated firms need to operate without manual overhead.",
  },
  {
    icon: "💳",
    title: "Payments & Wallet Infrastructure",
    desc: "Payments platform architecture using Stripe, Modulr, ClearBank, or direct Faster Payments / SEPA rails. Multi-currency wallets, reconciliation engines, payout automation, and merchant settlement systems built for the transaction volumes and latency requirements of production financial services.",
  },
  {
    icon: "🤖",
    title: "AI for Financial Data",
    desc: "LLM-powered document processing for financial statements, contracts, and prospectuses. ML-based anomaly detection for transaction monitoring. AI-assisted portfolio commentary generation and automated risk narrative reporting. Built for production accuracy requirements — not financial demos.",
  },
  {
    icon: "🛡️",
    title: "Audit Trail & Risk Systems",
    desc: "Immutable audit log infrastructure, data lineage tracking, counterparty risk dashboards, and operational risk registers built to satisfy FCA SYSC requirements and internal audit demands. Every action logged, timestamped, and attributable — with query performance that doesn't slow your ops team down.",
  },
];

const industries = [
  {
    icon: "🏛️",
    name: "Payments & Banking (Open Banking, PSD2)",
    desc: "London's payments infrastructure runs on Open Banking rails, FPS, and SEPA. We build for payment service providers, e-money institutions, and banking-as-a-service platforms that need PSD2-compliant integrations, real-time payment processing, reconciliation automation, and the FCA-grade security controls that regulated payments businesses require.",
  },
  {
    icon: "💼",
    name: "WealthTech & Asset Management",
    desc: "Portfolio management platforms, client reporting portals, model portfolio engines, and robo-advisory infrastructure for discretionary fund managers, IFAs, and WealthTech startups. We understand the MiFID II reporting obligations, suitability assessment workflows, and COBS requirements that govern investment management software in the UK.",
  },
  {
    icon: "🔒",
    name: "InsurTech",
    desc: "Quote and bind platforms, claims management systems, policy administration engines, and broker portal software for London's insurance market — including Lloyd's syndicate tooling. We build the integrations with MGA infrastructure, reinsurance data feeds, and the FCA-regulated product approval workflows that InsurTechs navigate.",
  },
  {
    icon: "⚖️",
    name: "RegTech & Compliance",
    desc: "Transaction monitoring platforms, regulatory reporting automation (FCA, PRA, Bank of England returns), KYC/AML orchestration, and sanctions screening infrastructure. Built for compliance teams that are drowning in manual work and need software that actually understands what a Suspicious Activity Report or a COBS 9 suitability record looks like.",
  },
];

const painPoints = [
  {
    icon: "⚖️",
    title: "FCA Compliance Complexity Requires Engineering Depth",
    desc: "Most generalist agencies don't know what SYSC 10 means, let alone how to build audit trail infrastructure that satisfies it. We design FCA compliance requirements into the architecture from day one — access controls, immutable logs, data residency, and reporting pipelines — so compliance isn't a costly retrofit after your first regulatory review.",
  },
  {
    icon: "🔗",
    title: "Open Banking Integration Is Not a Commodity Task",
    desc: "PSD2 consent flows, token refresh handling, AIS/PIS API differences between providers, and the data normalisation needed to make Open Banking data usable in a real application are genuinely complex engineering problems. We've solved them before and don't charge you to learn on the job.",
  },
  {
    icon: "🏚️",
    title: "Legacy Core Banking Integration Kills Timelines",
    desc: "London's incumbent banks run on Temenos, Finastra, or decades-old mainframe systems with underdocumented APIs and brittle integration patterns. We know how to build reliable adapter layers, event-driven sync mechanisms, and data transformation pipelines that bridge legacy core banking with modern FinTech applications — without destabilising production.",
  },
  {
    icon: "💸",
    title: "London FinTech Agency Rates Without the Depth to Match",
    desc: "London's FinTech-specialist agencies charge premium rates but often assign junior engineers to FinTech projects while senior staff pitch new clients. We are a tight team where the architects and engineers who design your system are the ones building it — and at a rate that doesn't assume you're backed by a Series B.",
  },
];

const faqs = [
  {
    q: "Do you build FCA-regulated software?",
    a: "Yes. We build software for FCA-regulated firms and understand the compliance requirements that come with it — audit trails, access control logs, data residency obligations, and the specific record-keeping rules that apply to regulated financial activities. We are not ourselves FCA-regulated, but we work closely with your compliance team and legal counsel to ensure the software we deliver meets your regulatory obligations under SYSC, COBS, and relevant FCA guidance.",
  },
  {
    q: "Can you integrate with Open Banking APIs?",
    a: "Yes. We have direct experience integrating with Open Banking APIs under PSD2 — including TrueLayer, Plaid, Yapily, and direct bank APIs. We handle OAuth 2.0 consent flows, AIS and PIS API calls, webhook management, and the data normalisation layer needed to make raw Open Banking data usable in your application.",
  },
  {
    q: "How do you handle financial data security?",
    a: "Financial data security is built into our architecture from day one — not added as an afterthought. We implement encryption at rest and in transit, strict role-based access control, comprehensive audit logging, secrets management via environment-isolated vaults, and infrastructure-level network segmentation. For systems handling personal financial data, we design with UK GDPR and FCA data handling requirements in mind throughout.",
  },
  {
    q: "What FinTech systems and APIs can you integrate with?",
    a: "We have integration experience across the major FinTech infrastructure stack used in London: Stripe (payments, Connect, billing), TrueLayer and Yapily (Open Banking), Plaid (financial data), Modulr and ClearBank (banking-as-a-service), FIX protocol (trading), Bloomberg and Refinitiv/LSEG data feeds, Temenos and Finastra (core banking), Salesforce Financial Services Cloud, and a range of KYC/AML providers including Onfido and Jumio.",
  },
  {
    q: "How long does a FinTech build typically take?",
    a: "A focused FinTech MVP — for example, a payments dashboard with Open Banking data aggregation, or a regulatory reporting module — typically runs 8–14 weeks. Full trading platforms, WealthTech portals, or core compliance systems are 4–8 months depending on the integration surface area and the regulatory complexity involved. We scope everything precisely before starting, so you know the timeline and cost before a line of code is written.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "FinTech Discovery & Compliance Scoping (Week 1)",
    desc: "A structured session mapping your regulatory obligations, data flows, integration surface area, and technical requirements. We identify compliance constraints early — FCA permissions, data residency rules, audit requirements — so they shape the architecture from the start, not the end.",
  },
  {
    num: "02",
    title: "Architecture & Integration Design (Week 1–2)",
    desc: "We design the system before building it. API contracts, database schema, security model, third-party integration points (Open Banking providers, payment rails, market data feeds), and infrastructure plan are defined and documented before development begins.",
  },
  {
    num: "03",
    title: "Iterative Build with Weekly Demos (Weeks 2–10+)",
    desc: "Working software every week — not a reveal at the end. Each demo is a functional increment your compliance team, product team, and stakeholders can review against the agreed scope. Integration milestones are demonstrated in staging environments, not described in status updates.",
  },
  {
    num: "04",
    title: "Security Review, Penetration Testing Prep & Launch",
    desc: "Pre-launch security review covering OWASP top 10, financial API attack vectors, auth flow validation, and infrastructure hardening. We prepare the documentation your internal security or external pen test team needs, deploy to production, and monitor the first 72 hours closely.",
  },
  {
    num: "05",
    title: "Post-Launch Support & Regulatory Iteration",
    desc: "30-day post-launch support included. For FCA-regulated systems, we offer structured retainer engagements covering ongoing feature development, regulatory change management (as FCA rules evolve), and the continuous integration of new Open Banking providers or payment rails as your product grows.",
  },
];

export default function FintechLondonPage() {
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
          <span className="text-[#a78bfa]">FinTech Software Development London</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-4">
          🇬🇧 London · FinTech Software Development
        </p>
        <h1
          className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
        >
          FinTech Software Built for{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">London&apos;s Financial Markets</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          OrchiX is a specialist FinTech software development company working with London&apos;s fintechs, asset managers, payment service providers, and FCA-regulated firms. We build Open Banking integrations, trading platforms, RegTech compliance systems, and payments infrastructure — engineered for the regulatory complexity and integration demands of London&apos;s financial markets, not adapted from a generic software template.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <LocationCtaButton label="Start a FinTech Project →" />
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

      {/* ── Why OrchiX for London FinTech ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Why OrchiX for London FinTech</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          What London&apos;s Financial Sector Needs From{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">a FinTech Software Partner</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8] mb-14">
          <p>
            London is Europe&apos;s leading financial centre — and the most complex environment in the world to build financial software for. FCA authorisation requirements, PSD2 Open Banking obligations, MiFID II reporting rules, and the integration demands of a financial ecosystem that spans legacy core banking systems, modern API-first infrastructure, and real-time market data feeds all create an engineering challenge that generalist agencies cannot meet.
          </p>
          <p>
            Most London software agencies will take a FinTech brief, nod at the compliance requirements, and then build a standard CRUD application with a financial coat of paint. The audit trail is an afterthought. The Open Banking integration breaks on token refresh. The regulatory reporting engine can&apos;t handle the edge cases your compliance team will surface in the first week of operation.
          </p>
          <p className="text-[#f5f2eb] font-semibold">
            We build FinTech software with the domain depth it requires — from FCA-grade audit infrastructure to PSD2 consent flows built correctly the first time.
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
          FinTech Software Services{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">for London&apos;s Financial Sector</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          Every engagement is a specialist FinTech engineering project — with the domain knowledge, regulatory awareness, and integration depth that London&apos;s financial sector demands.
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
          FinTech Sectors We Serve{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">in London</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          London&apos;s financial ecosystem spans the full FinTech stack. We have built software across each of these sub-sectors and understand the regulatory frameworks, integration requirements, and operational constraints specific to each.
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
          From Discovery to{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Production-Ready FinTech Software</span>
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">London FinTech Teams</span>
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
