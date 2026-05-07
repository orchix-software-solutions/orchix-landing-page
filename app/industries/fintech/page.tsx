import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import FaqAccordion from "./faq-accordion";
import CtaButton from "@/app/services/ai-intelligent-automation/cta-button";

export const metadata: Metadata = {
  title: "FinTech Software Development | Payment Systems & Banking Apps",
  description:
    "OrchiX builds secure, compliant fintech software — payment systems, banking apps, lending platforms, and trading platforms. PCI-DSS aware. Built for audit, scale, and the regulators who will eventually ask questions.",
  keywords: [
    "fintech software development",
    "fintech app development company",
    "payment system development",
    "banking app development",
    "fintech software development company India",
    "trading platform development",
    "lending platform development",
    "digital banking software",
    "payment gateway development",
    "neobank app development",
    "KYC software development",
    "PCI-DSS compliant software development",
  ],
  alternates: { canonical: "https://orchixsoftwaresolutions.com/industries/fintech" },
  openGraph: {
    title: "FinTech Software Development | OrchiX Software Solutions",
    description:
      "OrchiX builds secure, compliant fintech software — payment systems, banking apps, lending platforms, and trading platforms. PCI-DSS aware. Built for audit, scale, and the regulators who will eventually ask questions.",
    url: "https://orchixsoftwaresolutions.com/industries/fintech",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX Software Solutions" }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "FinTech Software Development",
  description:
    "OrchiX builds secure, compliant fintech software — payment systems, banking apps, lending platforms, and trading platforms.",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  serviceType: "FinTech Software Development",
  areaServed: "Worldwide",
  url: "https://orchixsoftwaresolutions.com/industries/fintech",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://orchixsoftwaresolutions.com" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://orchixsoftwaresolutions.com/industries" },
      { "@type": "ListItem", position: 3, name: "FinTech", item: "https://orchixsoftwaresolutions.com/industries/fintech" },
    ],
  },
};

const services = [
  {
    icon: "💳",
    title: "Payment System Development",
    desc: "Payment processing, settlement, reconciliation, refund handling, dispute management — built with proper idempotency, transaction atomicity, and audit logging so every rupee, pound, or dollar is accounted for. We integrate with Razorpay, Stripe, PayU, Cashfree, PayPal, and Adyen — and handle the edge cases that don't show up in the documentation.",
    note: "Platforms that need to move money — marketplaces, subscription businesses, B2B invoicing tools.",
  },
  {
    icon: "🏦",
    title: "Digital Banking & Neobank Apps",
    desc: "Account management, transfers, statements, card management, and notifications — built with proper encryption at rest and in transit, session management, and multi-factor authentication. Core banking integrations via Setu, Finicity, Plaid, and Banking Circle where applicable.",
    note: "Neobanks, challenger banks, co-operative banks building digital products, BaaS platforms.",
  },
  {
    icon: "📋",
    title: "Lending & Credit Platform Development",
    desc: "Loan origination workflows, credit scoring integrations, KYC and document verification, disbursement automation, EMI scheduling, and collections management. Built to handle the states that exist between 'approved' and 'repaid' — because that's where most of the complexity actually lives.",
    note: "Digital lending startups, NBFC software, BNPL platforms, personal and business loan products.",
  },
  {
    icon: "📈",
    title: "Trading & Investment Platforms",
    desc: "Order management, real-time market data feeds, portfolio tracking, P&L calculation, and reporting — built for the latency and correctness requirements that financial markets demand. Broker API integrations (Zerodha Kite, Upstox, IBKR, Alpaca) for execution. Risk controls built into the system, not bolted on.",
    note: "Retail trading platforms, robo-advisors, portfolio management tools, algo trading systems.",
  },
  {
    icon: "🔍",
    title: "KYC & Compliance Infrastructure",
    desc: "Identity verification, document OCR, face match, AML screening, and sanctions list checking — integrated into your onboarding flow rather than treated as an afterthought. We connect with Digio, Signzy, Onfido, Jumio, and CKYC, and build the internal workflows for review, rejection, re-submission, and record keeping that regulators will want to see.",
    note: "Any financial product that onboards users in a regulated jurisdiction.",
  },
  {
    icon: "📊",
    title: "Wealth Management & Personal Finance Apps",
    desc: "Goal-based investing tools, portfolio dashboards, financial planning calculators, and investment recommendation engines — built with proper data security for the personally sensitive financial information they handle. MF and stock data integrations via BSE StarMF, MFCentral, or broker APIs.",
    note: "Wealth management platforms, robo-advisors, personal finance apps, financial wellness tools.",
  },
  {
    icon: "⚙️",
    title: "Payment Gateway & API Development",
    desc: "Building a payment gateway or financial API product? We handle the infrastructure: payment routing logic, merchant onboarding, fee calculation, payout scheduling, webhook delivery with retry logic, and the developer-facing API documentation that determines whether your product gets adopted or abandoned. PCI-DSS scope management included.",
    note: "Payment aggregators, white-label payment platforms, fintech infrastructure companies.",
  },
];

const whyItems = [
  {
    icon: "📝",
    title: "Every transaction needs an audit trail.",
    desc: "Financial systems need to answer 'what happened and when' for every significant event — not just for debugging, but for regulatory compliance and dispute resolution. We instrument event logging into the data model from the start. Into the core transaction flow, not as a logging service that might miss events.",
  },
  {
    icon: "🔁",
    title: "Idempotency is non-negotiable in payment flows.",
    desc: "Network failures in payment systems don't mean the transaction didn't go through — they mean you don't know. Without idempotency keys and proper duplicate detection, retries create double charges. We design payment flows to handle network uncertainty correctly, which is one of those things that sounds simple and isn't.",
  },
  {
    icon: "🔒",
    title: "Security architecture before features.",
    desc: "Encryption at rest and in transit, proper secret management (no hardcoded API keys), rate limiting on all endpoints, token expiry, session invalidation, and input validation on every API surface. We treat these as baseline requirements, not optional hardening.",
  },
  {
    icon: "⚖️",
    title: "Compliance isn't a checkbox — it's architecture.",
    desc: "PCI-DSS scope reduction, data residency requirements, GDPR-appropriate data handling, RBI data localisation, KYC record retention — these affect your database design, your infrastructure choices, your logging strategy, and your vendor selection. We design for the regulatory environment your product operates in.",
  },
  {
    icon: "🚨",
    title: "Failure modes need explicit design.",
    desc: "What happens when a payment gateway times out at 2am? What happens when a KYC provider is down during peak onboarding hours? What happens when a market data feed goes stale? Financial products need explicit, tested answers to these questions — not 'we'll handle it if it comes up.'",
  },
];

const techCategories = [
  { label: "Payment Gateways", tools: "Razorpay, Stripe, PayU, Cashfree, Paytm, Adyen, PayPal, Braintree, Airwallex" },
  { label: "Banking & Open Banking APIs", tools: "Setu, Finbox, Plaid, Finicity, Yodlee, Banking Circle, RBI NACH" },
  { label: "KYC & Verification", tools: "Digio, Signzy, Onfido, Jumio, IDfy, CKYC Registry, VideoKYC providers" },
  { label: "Capital Markets", tools: "Zerodha Kite Connect, Upstox API, IBKR TWS, Alpaca, BSE StarMF, NSE APIs" },
  { label: "Card Issuance", tools: "M2P Fintech, Zeta, GPS (Global Processing Services), Marqeta" },
  { label: "AML & Compliance", tools: "Refinitiv World-Check, ComplyAdvantage, ACTICO" },
  { label: "Infrastructure", tools: "AWS (with GovCloud for data residency), Microsoft Azure, Google Cloud" },
  { label: "Backend", tools: "Python (FastAPI / Django), Node.js, Go — chosen based on latency requirements" },
  { label: "Databases", tools: "PostgreSQL, TimescaleDB (time-series financial data), Redis, ClickHouse" },
  { label: "Security", tools: "HashiCorp Vault, AWS Secrets Manager, OWASP-aligned API security" },
];

const compliance = [
  {
    region: "India",
    desc: "RBI guidelines for payment aggregators and digital lending, SEBI regulations for investment platforms, IRDAI for insurance tech, PPI licence requirements, NACH and eNACH integration, CKYC and VideoKYC requirements, UPI integration via payment gateways.",
  },
  {
    region: "UK & Europe",
    desc: "FCA regulated activity considerations, GDPR data handling requirements, PSD2 and open banking compliance, MiFID II reporting requirements for trading platforms, DORA readiness for financial institutions.",
  },
  {
    region: "United States",
    desc: "PCI-DSS scope management for card processing, FinCEN BSA/AML considerations, SEC reporting API requirements, state money transmitter licence awareness.",
  },
  {
    region: "International",
    desc: "FATF AML guidelines, SWIFT integration, cross-border payment compliance, sanctions screening requirements.",
  },
];

const useCases = [
  {
    icon: "🏗️",
    title: "Digital Lending Platform",
    desc: "Full loan origination flow — borrower onboarding with VideoKYC, credit bureau integration (CIBIL, Experian), automated underwriting rules engine, digital loan agreement with eSign, Razorpay disbursement, EMI scheduling, and automated payment reminders via SMS and WhatsApp. Went from wireframes to live borrowers in 14 weeks.",
  },
  {
    icon: "🔄",
    title: "B2B Payment Reconciliation Tool",
    desc: "Finance teams spending 15+ hours weekly reconciling payments across three bank accounts and two payment gateways. We built an automated reconciliation engine that pulls transaction data via banking APIs, matches against invoices in their ERP, flags exceptions, and generates a daily report. Reconciliation time: 15 hours to 25 minutes per week.",
  },
  {
    icon: "📉",
    title: "Retail Trading Platform",
    desc: "Web and mobile trading platform with Zerodha Kite Connect integration for order execution, real-time market data via WebSocket feeds, portfolio P&L calculation, options chain viewer, and GTT order support. Risk controls — position limits, exposure warnings, margin checks — built into the order flow, not the UI.",
  },
  {
    icon: "🪪",
    title: "Neobank Onboarding & Account Management",
    desc: "KYC onboarding with Aadhaar eKYC and VideoKYC fallback, virtual account issuance via M2P, UPI registration, transaction history, and statement generation. Full audit log of every state change in the account lifecycle. RBI-compliant data handling throughout.",
  },
];


const divider = (
  <div
    className="h-px max-w-[1200px] mx-auto"
    style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }}
  />
);

export default function FintechPage() {
  return (
    <main className="bg-[#0a0a0a] text-[#f5f2eb]">
      <JsonLd schema={pageSchema} />

      {/* Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-[3rem] pt-40 max-[1100px]:px-6 max-[900px]:pt-36">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.78rem] text-[#8a8680]">
          <Link href="/" className="hover:text-[#a78bfa] transition-colors duration-200">Home</Link>
          <span className="text-[#8a8680]/40">›</span>
          <Link href="/industries" className="hover:text-[#a78bfa] transition-colors duration-200">Industries</Link>
          <span className="text-[#8a8680]/40">›</span>
          <span className="text-[#22d3ee]">FinTech</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-16 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <h1
          className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
        >
          FinTech Software That&apos;s Built for{" "}
          <span className="font-playfair italic font-normal text-[#22d3ee]">Regulators, Not Just Investors.</span>
        </h1>
        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          Payment systems, banking apps, lending platforms, and trading tools — built with the security architecture, compliance controls, and audit trails that financial software actually requires. Not retrofitted after a regulator asks about them.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <CtaButton label="Discuss Your FinTech Project" />
        </div>
      </section>

      {divider}

      {/* Pain section */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#22d3ee] mb-3">The Real Problem</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          The Problem With Building FinTech{" "}
          <span className="font-playfair italic font-normal text-[#22d3ee]">the Normal Way</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8]">
          <p>
            Most software agencies build fintech products the same way they build everything else. Clean UI, working features, reasonable test coverage. Hand it over, move on.
          </p>
          <p>
            That works fine until a compliance audit asks where the transaction logs are. Or until a penetration tester finds that your API endpoints don&apos;t enforce rate limiting. Or until your payment gateway integration fails silently and money moves to the wrong account with no alert triggered. Or until you try to raise a Series A and the due diligence team asks for your SOC 2 report.
          </p>
          <p>
            Financial software isn&apos;t just software. It&apos;s software that handles money — subject to a different standard of correctness. A bug in a productivity app costs a user some time. A bug in a payment system costs someone money — possibly a lot of it, possibly in ways that take months to unwind.
          </p>
          <p className="text-[#f5f2eb] font-semibold">
            Security, compliance, and auditability aren&apos;t features you add to a fintech product. They&apos;re foundational decisions made in the first two weeks of architecture.
          </p>
        </div>
      </section>

      {divider}

      {/* Services */}
      <section id="services" className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#22d3ee] mb-3">What We Build</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          FinTech Software{" "}
          <span className="font-playfair italic font-normal text-[#22d3ee]">Development Services</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          From payment infrastructure to full lending platforms — covering every layer that financial software demands.
        </p>
        <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] p-7 transition-all duration-250 hover:border-[rgba(34,211,238,0.3)] hover:bg-[rgba(34,211,238,0.04)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(34,211,238,0.06)]"
            >
              <div className="w-11 h-11 rounded-xl bg-[rgba(34,211,238,0.1)] border border-[rgba(34,211,238,0.15)] flex items-center justify-center text-xl mb-5">
                {svc.icon}
              </div>
              <h3 className="font-syne font-bold text-[0.95rem] text-[#f5f2eb] mb-2">{svc.title}</h3>
              <p className="text-[0.84rem] text-[#8a8680] leading-[1.65]">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {divider}

      {/* Why OrchiX */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#22d3ee] mb-3">Why OrchiX</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          What Financial Software Requires That{" "}
          <span className="font-playfair italic font-normal text-[#22d3ee]">Most Agencies Don&apos;t Think About</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[560px] mb-10">
          Working in fintech means accepting that the normal bar for software quality isn&apos;t high enough.
        </p>
        <div className="flex flex-col gap-4 max-w-[760px]">
          {whyItems.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 items-start p-5 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] transition-all duration-200 hover:border-[rgba(34,211,238,0.25)]"
            >
              <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-[rgba(34,211,238,0.1)] border border-[rgba(34,211,238,0.15)] flex items-center justify-center text-lg">
                {item.icon}
              </div>
              <div>
                <h4 className="font-syne font-bold text-[0.9rem] text-[#f5f2eb] mb-1">{item.title}</h4>
                <p className="text-[0.82rem] text-[#8a8680] leading-[1.65]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {divider}

      {/* Tech stack */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#22d3ee] mb-3">Technology</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          Technology &amp; Financial{" "}
          <span className="font-playfair italic font-normal text-[#22d3ee]">Integrations We Work With</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[560px] mb-12">
          We don&apos;t lock into a single vendor or framework. We match the stack to your use case, latency requirements, and regulatory environment.
        </p>
        <div className="grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
          {techCategories.map((cat) => (
            <div
              key={cat.label}
              className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] px-6 py-5 transition-all duration-200 hover:border-[rgba(34,211,238,0.25)]"
            >
              <p className="font-syne font-bold text-[0.85rem] text-[#22d3ee] mb-1">{cat.label}</p>
              <p className="text-[0.8rem] text-[#8a8680] leading-[1.6]">{cat.tools}</p>
            </div>
          ))}
        </div>
      </section>

      {divider}

      {/* Compliance */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#22d3ee] mb-3">Compliance</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          Compliance We{" "}
          <span className="font-playfair italic font-normal text-[#22d3ee]">Design For</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[600px] mb-10">
          Compliance in fintech is jurisdiction-specific. We&apos;re software engineers, not lawyers — we build the technical infrastructure that supports compliance. We work alongside your legal and compliance team.
        </p>
        <div className="grid grid-cols-2 gap-4 max-[700px]:grid-cols-1">
          {compliance.map((c) => (
            <div
              key={c.region}
              className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] p-6 transition-all duration-200 hover:border-[rgba(34,211,238,0.25)]"
            >
              <h3 className="font-syne font-bold text-[0.9rem] text-[#22d3ee] mb-3">{c.region}</h3>
              <p className="text-[0.82rem] text-[#8a8680] leading-[1.7]">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {divider}

      {/* Use Cases */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#22d3ee] mb-3">In Practice</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          FinTech Products{" "}
          <span className="font-playfair italic font-normal text-[#22d3ee]">We&apos;ve Built</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[540px] mb-12">
          Concrete examples — so you can see what production-grade fintech software actually looks like before we scope yours.
        </p>
        <div className="grid grid-cols-2 gap-5 max-[700px]:grid-cols-1">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] p-7 transition-all duration-250 hover:border-[rgba(34,211,238,0.3)] hover:bg-[rgba(34,211,238,0.04)] hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-[rgba(34,211,238,0.1)] border border-[rgba(34,211,238,0.15)] flex items-center justify-center text-xl mb-5">
                {uc.icon}
              </div>
              <h3 className="font-syne font-bold text-[0.95rem] text-[#f5f2eb] mb-3">{uc.title}</h3>
              <p className="text-[0.84rem] text-[#8a8680] leading-[1.7]">{uc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {divider}

      {/* FAQ */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#22d3ee] mb-3">FAQ</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-10"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          Questions About{" "}
          <span className="font-playfair italic font-normal text-[#22d3ee]">FinTech Development</span>
        </h2>
        <FaqAccordion />
      </section>
    </main>
  );
}
