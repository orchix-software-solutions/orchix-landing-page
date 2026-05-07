import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Custom Software Development Miami | FinTech, Real Estate & Global SaaS",
  description:
    "OrchiX builds custom software for Miami's FinTech, real estate, crypto, and international trade companies. Multilingual-ready platforms. Prototype in 7 days.",
  keywords: [
    "custom software development Miami",
    "software development agency Miami",
    "Miami FinTech software",
    "Miami real estate tech",
    "crypto software development Miami",
    "Miami blockchain development",
    "SaaS development Miami",
    "international trade software Miami",
    "AI automation Miami",
    "Miami startup software development",
    "Latin America software development",
    "multilingual software Miami",
    "PropTech Miami",
    "enterprise software Miami",
    "Miami software company",
  ],
  openGraph: {
    title: "Custom Software Development Miami | OrchiX",
    description:
      "Custom software for Miami's FinTech, real estate, crypto, and international trade companies. Multilingual-ready. Prototype in 7 days.",
    url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-miami",
  },
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/custom-software-development-miami",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://orchixsoftwaresolutions.com/locations/custom-software-development-miami/#service",
  name: "Custom Software Development — Miami, FL",
  description:
    "OrchiX builds custom FinTech, PropTech, crypto, and international trade software for Miami's globally-connected business ecosystem.",
  url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-miami",
  provider: {
    "@id": "https://orchixsoftwaresolutions.com/#organization",
  },
  areaServed: {
    "@type": "City",
    name: "Miami",
    sameAs: "https://www.wikidata.org/wiki/Q8652",
  },
  serviceType: [
    "FinTech Software Development",
    "Real Estate Technology",
    "Crypto & Blockchain Software",
    "International Trade Platforms",
    "Multilingual SaaS Development",
    "AI Integration",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you build crypto and blockchain-related software for Miami companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build crypto portfolio trackers, token management dashboards, DeFi-adjacent tooling, and compliance platforms for digital asset businesses. We don't build smart contracts or trading infrastructure, but we do build the operational and compliance software that surrounds those systems.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build multilingual software for Miami companies serving Latin American markets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Miami is a gateway to Latin America and multilingual requirements are built into our engagements from day one — Spanish, Portuguese, and English UI, localised date/currency formatting, and region-specific compliance requirements for markets in Brazil, Mexico, Colombia, and beyond.",
      },
    },
    {
      "@type": "Question",
      name: "We're a Miami real estate company. What PropTech can you build for us?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build custom CRMs for real estate brokerages, deal management platforms for investment firms, property listing and transaction portals, investor reporting dashboards, and short-term rental management systems. Miami's high-volume, international real estate market has specific needs — we build for that.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle international data privacy requirements for global Miami businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We design with GDPR (EU), LGPD (Brazil), and US state privacy laws (CCPA/CPRA) in mind for companies with international user bases. Data residency, consent management, and privacy-by-design architecture are built into the project from the first sprint.",
      },
    },
    {
      "@type": "Question",
      name: "What's your experience with payment and FinTech integrations for Miami companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We've integrated Stripe, Plaid, MX, Dwolla, and international payment processors for FinTech and marketplace clients. For Miami companies processing cross-border payments, we build the reconciliation logic, FX handling, and compliance reporting that makes international transactions work cleanly.",
      },
    },
  ],
};

export default function MiamiPage() {
  return (
    <>
      <JsonLd schema={professionalServiceSchema as Record<string, unknown>} />
      <JsonLd schema={faqSchema as Record<string, unknown>} />

      <main className="bg-[#0a0a0a] text-[#f5f2eb] min-h-screen">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="px-[3rem] pt-8 max-[600px]:px-4">
          <ol className="flex items-center gap-2 text-[0.72rem] text-[#8a8680] max-w-[1200px] mx-auto flex-wrap">
            <li><Link href="/" className="hover:text-[#a78bfa] transition-colors">Home</Link></li>
            <li aria-hidden="true" className="opacity-40">›</li>
            <li><Link href="/locations" className="hover:text-[#a78bfa] transition-colors">Locations</Link></li>
            <li aria-hidden="true" className="opacity-40">›</li>
            <li className="text-[#f5f2eb]">Miami, FL</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="relative px-[3rem] pt-16 pb-20 max-[600px]:px-4 max-[600px]:pt-10 max-[600px]:pb-14 overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(124,91,245,0.09) 0%, transparent 65%)" }}
            aria-hidden="true"
          />
          <div className="max-w-[1200px] mx-auto relative z-[1]">
            <span className="inline-block text-[0.7rem] uppercase tracking-[0.15em] font-semibold text-[#a78bfa] mb-4">
              🌴 Miami, Florida
            </span>
            <h1
              className="font-syne font-extrabold tracking-[-0.04em] leading-[1.08] text-[#f5f2eb] mb-6 max-w-[800px]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              Software Built for{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">
                Miami&apos;s Global Ambition
              </span>
            </h1>
            <p className="text-[1.05rem] leading-[1.7] text-[#8a8680] max-w-[600px] mb-8 font-space-grotesk">
              Miami&apos;s business community is uniquely global — FinTech, real estate, crypto, and international trade all converge here. OrchiX builds the custom software platforms that let Miami companies serve US and Latin American markets from a single, scalable system.
            </p>
            <div className="flex flex-wrap gap-3">
              <LocationCtaButton label="Book a Discovery Call" />
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-syne font-semibold text-[0.9rem] text-[#a78bfa] border border-[rgba(124,91,245,0.3)] transition-all duration-200 hover:border-[rgba(124,91,245,0.6)] hover:bg-[rgba(124,91,245,0.06)]"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* Why OrchiX */}
        <section className="px-[3rem] py-16 max-[600px]:px-4 max-[600px]:py-10">
          <div className="max-w-[1200px] mx-auto">
            <span className="inline-block text-[0.7rem] uppercase tracking-[0.15em] font-semibold text-[#a78bfa] mb-3">
              Why OrchiX
            </span>
            <h2
              className="font-syne font-extrabold tracking-[-0.03em] leading-[1.1] text-[#f5f2eb] mb-10"
              style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}
            >
              Miami businesses choose us when they need{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">software without borders.</span>
            </h2>
            <div className="grid grid-cols-2 gap-5 max-[700px]:grid-cols-1">
              {[
                {
                  icon: "🌎",
                  title: "Built for Bilingual Markets",
                  body: "Miami companies serve both US and Latin American clients. We build multilingual UIs, localised compliance flows, and cross-border payment handling into your platform from sprint one.",
                },
                {
                  icon: "🔐",
                  title: "Financial Compliance Architecture",
                  body: "FinTech and crypto companies in Miami face layered compliance requirements. We architect with KYC/AML workflows, audit trails, transaction monitoring, and regulatory reporting built in — not bolted on.",
                },
                {
                  icon: "🏠",
                  title: "Real Estate at Miami Speed",
                  body: "Miami's real estate market moves fast and deals involve international buyers, complex commission structures, and multilingual documents. We build the PropTech that keeps your team ahead of the pace.",
                },
                {
                  icon: "⚡",
                  title: "Prototype in 7 Days",
                  body: "Miami moves fast and so do we. You have a testable prototype in your hands within 7 days of starting — not a wireframe, a deployed application you can actually click through.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="p-6 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(124,91,245,0.2)] transition-colors duration-300"
                >
                  <div className="text-2xl mb-3">{card.icon}</div>
                  <h3 className="font-syne font-bold text-[1rem] text-[#f5f2eb] mb-2">{card.title}</h3>
                  <p className="text-[0.82rem] leading-[1.65] text-[#8a8680]">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="px-[3rem] py-16 max-[600px]:px-4 max-[600px]:py-10 bg-[rgba(255,255,255,0.015)]">
          <div className="max-w-[1200px] mx-auto">
            <span className="inline-block text-[0.7rem] uppercase tracking-[0.15em] font-semibold text-[#a78bfa] mb-3">
              Services
            </span>
            <h2
              className="font-syne font-extrabold tracking-[-0.03em] leading-[1.1] text-[#f5f2eb] mb-10"
              style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}
            >
              What we build for Miami companies
            </h2>
            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[580px]:grid-cols-1">
              {[
                {
                  title: "FinTech & Payments Platforms",
                  desc: "Payment processing integrations, cross-border transaction tools, compliance dashboards, and financial workflow automation for Miami FinTech companies.",
                  href: "/services/saas-product-development",
                },
                {
                  title: "Real Estate & PropTech CRMs",
                  desc: "Custom CRMs for high-volume brokerages, investment firm deal trackers, short-term rental management, and international buyer portals.",
                  href: "/services/enterprise-applications-crm-erp",
                },
                {
                  title: "Crypto Operations Software",
                  desc: "Portfolio management dashboards, compliance tracking, KYC/AML workflow tools, and operational platforms for digital asset businesses.",
                  href: "/services/enterprise-applications-crm-erp",
                },
                {
                  title: "Multilingual SaaS Platforms",
                  desc: "SaaS products built from the ground up for Spanish, Portuguese, and English markets — localisation, data residency, and regional compliance included.",
                  href: "/services/saas-product-development",
                },
                {
                  title: "International Trade & Logistics",
                  desc: "Customs documentation tools, freight management platforms, import/export compliance trackers, and port operations software for Miami trade companies.",
                  href: "/services/business-process-automation",
                },
                {
                  title: "AI Automation for Miami Businesses",
                  desc: "AI agents and workflow automation for Miami companies handling multilingual customer interactions, document processing, and cross-market data operations.",
                  href: "/services/ai-intelligent-automation",
                },
              ].map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group p-5 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(14,14,14,0.9)] hover:border-[rgba(124,91,245,0.25)] hover:shadow-[0_0_30px_rgba(124,91,245,0.08)] transition-all duration-300 no-underline"
                >
                  <h3 className="font-syne font-bold text-[0.92rem] text-[#f5f2eb] mb-2 group-hover:text-[#a78bfa] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-[0.78rem] leading-[1.6] text-[#8a8680]">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="px-[3rem] py-16 max-[600px]:px-4 max-[600px]:py-10">
          <div className="max-w-[1200px] mx-auto">
            <span className="inline-block text-[0.7rem] uppercase tracking-[0.15em] font-semibold text-[#a78bfa] mb-3">
              Industries
            </span>
            <h2
              className="font-syne font-extrabold tracking-[-0.03em] leading-[1.1] text-[#f5f2eb] mb-10"
              style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}
            >
              Miami industries we serve
            </h2>
            <div className="grid grid-cols-2 gap-4 max-[580px]:grid-cols-1">
              {[
                { name: "FinTech & Digital Banking", detail: "Payment platforms, lending tools, KYC/AML systems, and cross-border financial infrastructure" },
                { name: "Real Estate & PropTech", detail: "Brokerage CRMs, investment deal tracking, short-term rental management, investor reporting portals" },
                { name: "Crypto & Digital Assets", detail: "Portfolio dashboards, compliance tooling, operational software for exchanges and digital asset platforms" },
                { name: "International Trade & Logistics", detail: "Import/export platforms, customs documentation, freight management for Miami's port-adjacent businesses" },
                { name: "Tourism & Hospitality Tech", detail: "Booking systems, guest management platforms, revenue management tools for hospitality operators" },
                { name: "Healthcare & Telehealth", detail: "Telehealth platforms, HIPAA-compliant patient portals, and bilingual healthcare applications for Miami's diverse patient population" },
              ].map((ind) => (
                <div
                  key={ind.name}
                  className="flex items-start gap-4 p-5 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.018)]"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7c5bf5] shrink-0 mt-[0.45rem]" />
                  <div>
                    <p className="font-syne font-semibold text-[0.88rem] text-[#f5f2eb] mb-1">{ind.name}</p>
                    <p className="text-[0.76rem] leading-[1.55] text-[#8a8680]">{ind.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-[3rem] py-16 max-[600px]:px-4 max-[600px]:py-10 bg-[rgba(255,255,255,0.015)]">
          <div className="max-w-[1200px] mx-auto">
            <span className="inline-block text-[0.7rem] uppercase tracking-[0.15em] font-semibold text-[#a78bfa] mb-3">
              Process
            </span>
            <h2
              className="font-syne font-extrabold tracking-[-0.03em] leading-[1.1] text-[#f5f2eb] mb-12"
              style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}
            >
              How we deliver for Miami teams
            </h2>
            <div className="relative flex flex-col gap-0">
              {[
                {
                  step: "01",
                  title: "Market & Compliance Scoping",
                  detail: "Week 1: We identify the markets your platform serves (US, Brazil, Mexico, Colombia, etc.), map the compliance requirements for each, and scope the localisation needs — before architecture begins.",
                },
                {
                  step: "02",
                  title: "Multilingual Architecture Design",
                  detail: "Weeks 2–3: Data models, API design, and UI architecture built with i18n from the start. Right-to-left language support, currency formatting, timezone handling, and data residency decisions made up front.",
                },
                {
                  step: "03",
                  title: "Prototype & Market Validation",
                  detail: "Week 4: A working prototype you can test in all target languages and markets. Great for showing to investors, partners, or pilot customers in different regions.",
                },
                {
                  step: "04",
                  title: "Build & Cross-Market Testing",
                  detail: "Weeks 5–12: Weekly Friday demos of production code. Cross-market testing happens continuously — we don't leave localisation QA to the end.",
                },
                {
                  step: "05",
                  title: "Launch & Regional Handover",
                  detail: "Final week: Production deployment with full documentation for each market — API guides, compliance runbooks per region, and translation handover so your team can update copy independently.",
                },
              ].map((step, i, arr) => (
                <div key={step.step} className="relative flex gap-6 pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[rgba(124,91,245,0.12)] border border-[rgba(124,91,245,0.3)] flex items-center justify-center shrink-0">
                      <span className="text-[0.65rem] font-syne font-bold text-[#a78bfa]">{step.step}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="w-px flex-1 bg-[rgba(124,91,245,0.15)] my-1" style={{ minHeight: "3rem" }} />
                    )}
                  </div>
                  <div className="pb-10">
                    <h3 className="font-syne font-bold text-[0.95rem] text-[#f5f2eb] mb-1.5">{step.title}</h3>
                    <p className="text-[0.8rem] leading-[1.65] text-[#8a8680]">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-[3rem] py-16 max-[600px]:px-4 max-[600px]:py-10">
          <div className="max-w-[800px] mx-auto">
            <span className="inline-block text-[0.7rem] uppercase tracking-[0.15em] font-semibold text-[#a78bfa] mb-3">
              FAQ
            </span>
            <h2
              className="font-syne font-extrabold tracking-[-0.03em] leading-[1.1] text-[#f5f2eb] mb-10"
              style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}
            >
              Questions from Miami businesses
            </h2>
            <div className="flex flex-col gap-4">
              {faqSchema.mainEntity.map((item) => (
                <div
                  key={item.name}
                  className="p-6 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)]"
                >
                  <h3 className="font-syne font-bold text-[0.92rem] text-[#f5f2eb] mb-3">{item.name}</h3>
                  <p className="text-[0.8rem] leading-[1.7] text-[#8a8680]">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="px-[3rem] py-16 max-[600px]:px-4 max-[600px]:py-10 bg-[rgba(124,91,245,0.05)] border-t border-[rgba(124,91,245,0.12)]">
          <div className="max-w-[700px] mx-auto text-center">
            <h2
              className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
            >
              Building something global from Miami?
            </h2>
            <p className="text-[0.88rem] leading-[1.7] text-[#8a8680] mb-8 font-space-grotesk">
              Book a 30-minute discovery call. Scoped proposal in 48 hours, working prototype in 7 days — ready for your US and Latin American markets.
            </p>
            <LocationCtaButton label="Start Your Discovery Call" />
          </div>
        </section>
      </main>
    </>
  );
}
