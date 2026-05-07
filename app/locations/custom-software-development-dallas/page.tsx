import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Custom Software Development Dallas | CRM, ERP & Enterprise Systems",
  description:
    "OrchiX builds custom CRMs, ERPs, and enterprise software for Dallas energy, finance, healthcare, and logistics companies. Prototype in 7 days. Direct founder access.",
  keywords: [
    "custom software development Dallas",
    "software development agency Dallas",
    "Dallas CRM development",
    "Dallas ERP development",
    "energy software Dallas",
    "enterprise software Dallas",
    "Dallas FinTech software",
    "Dallas healthcare software",
    "logistics software Dallas",
    "oil and gas software development",
    "SaaS development Dallas",
    "AI automation Dallas",
    "legacy system modernisation Dallas",
    "Dallas startup software",
    "enterprise application development Dallas TX",
  ],
  openGraph: {
    title: "Custom Software Development Dallas | OrchiX",
    description:
      "Custom CRMs, ERPs, and enterprise software for Dallas energy, finance, healthcare, and logistics companies. Prototype in 7 days.",
    url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-dallas",
  },
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/custom-software-development-dallas",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://orchixsoftwaresolutions.com/locations/custom-software-development-dallas/#service",
  name: "Custom Software Development — Dallas, TX",
  description:
    "OrchiX builds custom CRMs, ERPs, enterprise platforms, and AI systems for Dallas energy, finance, healthcare, and logistics companies.",
  url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-dallas",
  provider: {
    "@id": "https://orchixsoftwaresolutions.com/#organization",
  },
  areaServed: {
    "@type": "City",
    name: "Dallas",
    sameAs: "https://www.wikidata.org/wiki/Q16557",
  },
  serviceType: [
    "Custom CRM Development",
    "ERP Development",
    "Energy Sector Software",
    "Enterprise Application Development",
    "Legacy System Modernisation",
    "SaaS Development",
    "AI Integration",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you modernise legacy oil and gas software for Dallas energy companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Legacy modernisation is one of our core competencies in Dallas. We migrate outdated ERP systems, SCADA-adjacent data tools, and field reporting software to modern web-based platforms — with zero downtime during the transition and full data migration.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build ERP systems for Dallas manufacturing and logistics companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We build custom ERP systems tailored to manufacturing workflows, supply chain visibility, freight dispatch, and warehouse management. Unlike off-the-shelf ERPs, our builds match your exact process rather than forcing you to change your workflow to fit the software.",
      },
    },
    {
      "@type": "Question",
      name: "We're a Dallas-based FinTech company. What financial compliance experience do you have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build audit-trail systems, regulatory reporting dashboards, and transaction monitoring platforms with SOX, PCI-DSS, and financial compliance requirements in mind. We work with architecture that satisfies technical diligence from institutional investors and compliance auditors.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a custom CRM build typically take for a Dallas mid-market company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused CRM build for a mid-market company — covering contact management, pipeline tracking, activity logging, and reporting — typically runs 8–12 weeks. You have a clickable prototype by week 4, and weekly Friday demos from there to launch.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with Dallas companies that have existing dev teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We often slot in alongside in-house teams — taking on a specific product build, a new module, or a modernisation sprint while your internal team focuses on other priorities. Full repo access means your team is never locked out.",
      },
    },
  ],
};

export default function DallasPage() {
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
            <li className="text-[#f5f2eb]">Dallas, TX</li>
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
              🤠 Dallas, Texas
            </span>
            <h1
              className="font-syne font-extrabold tracking-[-0.04em] leading-[1.08] text-[#f5f2eb] mb-6 max-w-[800px]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              Custom Software for Dallas&apos;s{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">
                Enterprise Powerhouses
              </span>
            </h1>
            <p className="text-[1.05rem] leading-[1.7] text-[#8a8680] max-w-[600px] mb-8 font-space-grotesk">
              Energy, finance, logistics, healthcare — Dallas runs on complex operations. OrchiX builds the CRMs, ERPs, and enterprise platforms that replace duct-taped legacy systems and give your teams real visibility into the business.
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

        {/* Why OrchiX for Dallas */}
        <section className="px-[3rem] py-16 max-[600px]:px-4 max-[600px]:py-10">
          <div className="max-w-[1200px] mx-auto">
            <span className="inline-block text-[0.7rem] uppercase tracking-[0.15em] font-semibold text-[#a78bfa] mb-3">
              Why OrchiX
            </span>
            <h2
              className="font-syne font-extrabold tracking-[-0.03em] leading-[1.1] text-[#f5f2eb] mb-10"
              style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}
            >
              Dallas companies choose us when{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">off-the-shelf stops working.</span>
            </h2>
            <div className="grid grid-cols-2 gap-5 max-[700px]:grid-cols-1">
              {[
                {
                  icon: "⚡",
                  title: "Legacy Modernisation Without Downtime",
                  body: "Dallas energy and manufacturing companies run on systems that are 10–20 years old. We migrate critical infrastructure to modern platforms without operational disruption — data intact, team retrained, zero lost history.",
                },
                {
                  icon: "🏗️",
                  title: "Built for Enterprise Scale",
                  body: "Mid-market and enterprise Dallas companies need software that handles thousands of users, complex permissions, multi-entity structures, and integrations with SAP, Oracle, or Salesforce. We build for that from day one.",
                },
                {
                  icon: "🔗",
                  title: "Multi-System Integration",
                  body: "Dallas operations often span multiple business units with different tools. We build the integration layer that connects your ERP, CRM, field tools, and financial systems into a single source of truth.",
                },
                {
                  icon: "📊",
                  title: "Operational Intelligence",
                  body: "Beyond building the platform — we build the reporting and analytics layer that gives your operations team, finance team, and executives real-time dashboards they can actually make decisions from.",
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
              What we build for Dallas companies
            </h2>
            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[580px]:grid-cols-1">
              {[
                {
                  title: "Legacy System Modernisation",
                  desc: "Migrate ageing on-premise ERP, CRM, and reporting systems to modern, cloud-based platforms — with full data migration and zero operational downtime.",
                  href: "/services/enterprise-applications-crm-erp",
                },
                {
                  title: "Energy & Field Operations Software",
                  desc: "Field reporting tools, asset management platforms, production monitoring dashboards, and compliance tracking for energy and oil & gas companies.",
                  href: "/services/enterprise-applications-crm-erp",
                },
                {
                  title: "Custom ERP & Supply Chain",
                  desc: "Purpose-built ERP platforms for Dallas manufacturing, logistics, and distribution companies that don't fit Dynamics or SAP out of the box.",
                  href: "/services/enterprise-applications-crm-erp",
                },
                {
                  title: "FinTech & Compliance Platforms",
                  desc: "Audit-trail systems, regulatory reporting, transaction monitoring, and risk management tools for Dallas financial services firms.",
                  href: "/services/saas-product-development",
                },
                {
                  title: "Healthcare Revenue Cycle",
                  desc: "Custom RCM tools, prior authorisation automation, claims dashboards, and patient financial software for Dallas-area health systems.",
                  href: "/services/business-process-automation",
                },
                {
                  title: "Business Process Automation",
                  desc: "Automate approvals, reporting, data entry, and cross-system synchronisation for operations teams running complex multi-entity businesses.",
                  href: "/services/business-process-automation",
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
              Dallas industries we serve
            </h2>
            <div className="grid grid-cols-2 gap-4 max-[580px]:grid-cols-1">
              {[
                { name: "Energy & Oil/Gas", detail: "Field operations software, asset tracking, production dashboards, compliance tools for upstream and midstream energy" },
                { name: "Financial Services & FinTech", detail: "Audit systems, regulatory reporting, payment platforms, wealth management tools for DFW's financial sector" },
                { name: "Healthcare & Hospital Systems", detail: "Revenue cycle management, clinical operations, prior auth automation, patient engagement for Dallas-area health systems" },
                { name: "Manufacturing & Industrial", detail: "Custom ERP builds, supply chain visibility, quality management, MES integrations for DFW manufacturers" },
                { name: "Logistics & Transportation", detail: "Dispatch platforms, freight management, real-time tracking, carrier integration for Dallas logistics companies" },
                { name: "Real Estate & PropTech", detail: "Property management platforms, deal tracking CRMs, investor portals, transaction management for Dallas real estate" },
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
              How we work with Dallas enterprises
            </h2>
            <div className="relative flex flex-col gap-0">
              {[
                {
                  step: "01",
                  title: "Systems Audit & Current State Analysis",
                  detail: "Week 1: We map your existing systems, data flows, and integration points. For legacy modernisation projects, this audit becomes the migration plan.",
                },
                {
                  step: "02",
                  title: "Architecture & Integration Design",
                  detail: "Weeks 2–3: We design the target architecture, including all third-party integrations (SAP, Salesforce, Oracle, industry-specific tools), data migration plan, and access control structure.",
                },
                {
                  step: "03",
                  title: "Prototype & Operations Review",
                  detail: "Week 4: A working prototype deployed in a staging environment. Your operations team, finance team, and IT leaders can test real workflows before a line of production code is committed.",
                },
                {
                  step: "04",
                  title: "Build, Integrate & Demo Weekly",
                  detail: "Weeks 5–14: Production build with weekly Friday demos. Integrations to your existing systems are built and tested progressively — nothing is a surprise at launch.",
                },
                {
                  step: "05",
                  title: "Migration, Launch & Team Enablement",
                  detail: "Final 2 weeks: Data migration (with validation), production launch, user training sessions, and a runbook so your IT team can manage the system long-term.",
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
              Questions from Dallas businesses
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
              Ready to modernise your Dallas operations?
            </h2>
            <p className="text-[0.88rem] leading-[1.7] text-[#8a8680] mb-8 font-space-grotesk">
              Book a 30-minute discovery call. We&apos;ll scope your project within 48 hours and deliver a working prototype in 7 days.
            </p>
            <LocationCtaButton label="Start Your Discovery Call" />
          </div>
        </section>
      </main>
    </>
  );
}
