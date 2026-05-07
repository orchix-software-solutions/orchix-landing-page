import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Custom Software Development Boston | CRM, ERP & AI Systems",
  description:
    "OrchiX builds custom CRMs, ERPs, SaaS products, and AI systems for Boston's life sciences, HealthTech, EdTech, and FinTech companies. Prototype in 7 days. Direct founder access.",
  keywords: [
    "custom software development Boston",
    "software development agency Boston",
    "Boston CRM development",
    "Boston ERP development",
    "life sciences software Boston",
    "HealthTech software development Boston",
    "EdTech software Boston",
    "FinTech software Boston",
    "biotech software development Boston",
    "Kendall Square software agency",
    "SaaS development Boston",
    "AI integration Boston",
    "enterprise software Boston",
    "Boston startup software development",
    "clinical trial management software",
  ],
  openGraph: {
    title: "Custom Software Development Boston | OrchiX",
    description:
      "Custom CRMs, ERPs, SaaS products, and AI systems for Boston's life sciences, HealthTech, EdTech, and FinTech companies. Prototype in 7 days.",
    url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-boston",
  },
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/custom-software-development-boston",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://orchixsoftwaresolutions.com/locations/custom-software-development-boston/#service",
  name: "Custom Software Development — Boston, MA",
  description:
    "OrchiX delivers custom CRMs, ERPs, SaaS platforms, and AI systems for Boston's life sciences, HealthTech, EdTech, and FinTech sectors.",
  url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-boston",
  provider: {
    "@id": "https://orchixsoftwaresolutions.com/#organization",
  },
  areaServed: {
    "@type": "City",
    name: "Boston",
    sameAs: "https://www.wikidata.org/wiki/Q100",
  },
  serviceType: [
    "Custom CRM Development",
    "ERP Development",
    "SaaS Product Development",
    "AI Integration",
    "Life Sciences Software",
    "HealthTech Development",
    "EdTech Platform Development",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you build HIPAA-compliant software for Boston healthcare companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We architect healthcare applications with HIPAA compliance from day one — encrypted data at rest and in transit, access controls, audit logs, and BAA-ready infrastructure. We've worked with HealthTech companies building patient management systems, telemedicine platforms, and clinical workflow tools.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help Boston life sciences companies digitise their research workflows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We build custom LIMS (Laboratory Information Management Systems), clinical trial management tools, regulatory submission trackers, and data pipeline integrations for biotech and life sciences companies in the Kendall Square ecosystem.",
      },
    },
    {
      "@type": "Question",
      name: "We're an EdTech startup coming out of MIT. How do you work with early-stage teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work well with founder-led teams who need to move fast without wasting budget. You get a working prototype within 7 days, weekly Friday demos, and full GitHub repo access from day one. We scope tightly so you can validate before scaling.",
      },
    },
    {
      "@type": "Question",
      name: "What's your typical engagement for a Boston FinTech compliance platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FinTech compliance platforms typically run 10–20 weeks from discovery to production, depending on integration complexity. We handle the full stack — audit trails, role-based permissions, regulator-ready reporting, and API connections to financial data providers.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with OrchiX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Book a discovery call. We'll spend 30 minutes understanding your workflow, data, and goals — then send you a scoped proposal within 48 hours. No obligation, no sales deck.",
      },
    },
  ],
};

export default function BostonPage() {
  return (
    <>
      <JsonLd schema={professionalServiceSchema as Record<string, unknown>} />
      <JsonLd schema={faqSchema as Record<string, unknown>} />

      <main className="bg-[#0a0a0a] text-[#f5f2eb] min-h-screen">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="px-[3rem] pt-8 max-[600px]:px-4"
        >
          <ol className="flex items-center gap-2 text-[0.72rem] text-[#8a8680] max-w-[1200px] mx-auto flex-wrap">
            <li><Link href="/" className="hover:text-[#a78bfa] transition-colors">Home</Link></li>
            <li aria-hidden="true" className="opacity-40">›</li>
            <li><Link href="/locations" className="hover:text-[#a78bfa] transition-colors">Locations</Link></li>
            <li aria-hidden="true" className="opacity-40">›</li>
            <li className="text-[#f5f2eb]">Boston, MA</li>
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
              🏛️ Boston, Massachusetts
            </span>
            <h1
              className="font-syne font-extrabold tracking-[-0.04em] leading-[1.08] text-[#f5f2eb] mb-6 max-w-[800px]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              Enterprise Software for{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">
                Boston&apos;s Innovation Corridor
              </span>
            </h1>
            <p className="text-[1.05rem] leading-[1.7] text-[#8a8680] max-w-[600px] mb-8 font-space-grotesk">
              From Kendall Square biotech to Back Bay FinTech — OrchiX builds the custom software that powers Boston&apos;s most demanding industries. HIPAA-ready, compliance-aware, built to scale with your funding rounds.
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

        {/* Why OrchiX for Boston */}
        <section className="px-[3rem] py-16 max-[600px]:px-4 max-[600px]:py-10">
          <div className="max-w-[1200px] mx-auto">
            <span className="inline-block text-[0.7rem] uppercase tracking-[0.15em] font-semibold text-[#a78bfa] mb-3">
              Why OrchiX
            </span>
            <h2
              className="font-syne font-extrabold tracking-[-0.03em] leading-[1.1] text-[#f5f2eb] mb-10"
              style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}
            >
              Boston teams choose us because we understand{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">high-stakes software.</span>
            </h2>
            <div className="grid grid-cols-2 gap-5 max-[700px]:grid-cols-1">
              {[
                {
                  icon: "🧬",
                  title: "Compliance from Day One",
                  body: "Life sciences and healthcare software in Boston can&apos;t retrofit compliance after launch. We design HIPAA-ready, FDA-aware architectures before writing the first line of code.",
                },
                {
                  icon: "🎓",
                  title: "Spin-Out to Scale",
                  body: "MIT and Harvard spin-outs need to move fast but build right. We take academic prototypes and R&D tools and commercialise them into production-grade platforms investors can trust.",
                },
                {
                  icon: "💰",
                  title: "Investor-Ready Engineering",
                  body: "Boston&apos;s FinTech and BioTech investors scrutinise technical diligence hard. We document architecture decisions, write clean APIs, and hand over repos your CTO or technical advisors can audit.",
                },
                {
                  icon: "🔬",
                  title: "Deep Domain Integrations",
                  body: "EHR integrations (Epic, Cerner), lab data pipelines, financial APIs, and institutional data providers — we build the connectors Boston&apos;s regulated industries depend on.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="p-6 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(124,91,245,0.2)] transition-colors duration-300"
                >
                  <div className="text-2xl mb-3">{card.icon}</div>
                  <h3 className="font-syne font-bold text-[1rem] text-[#f5f2eb] mb-2">{card.title}</h3>
                  <p className="text-[0.82rem] leading-[1.65] text-[#8a8680]" dangerouslySetInnerHTML={{ __html: card.body }} />
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
              What we build for Boston companies
            </h2>
            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[580px]:grid-cols-1">
              {[
                {
                  title: "Life Sciences & LIMS Software",
                  desc: "Custom LIMS, clinical trial trackers, regulatory submission portals, and lab data pipelines for biotech and pharma companies.",
                  href: "/services/enterprise-applications-crm-erp",
                },
                {
                  title: "HealthTech Platforms",
                  desc: "HIPAA-compliant patient management, telemedicine, clinical workflows, and EHR integrations for Boston-area healthcare innovators.",
                  href: "/services/web-app-development",
                },
                {
                  title: "FinTech Compliance Systems",
                  desc: "Audit-trail systems, regulatory reporting dashboards, risk management platforms, and trading tools for Boston's financial sector.",
                  href: "/services/enterprise-applications-crm-erp",
                },
                {
                  title: "EdTech & Learning Platforms",
                  desc: "LMS builds, adaptive learning tools, assessment platforms, and EdTech products coming out of Boston's university ecosystem.",
                  href: "/services/saas-product-development",
                },
                {
                  title: "SaaS MVP Development",
                  desc: "Founders and startups get a production-ready SaaS MVP in 8–12 weeks — architected for 10,000 users from the first sprint.",
                  href: "/services/saas-product-development",
                },
                {
                  title: "AI & Research Automation",
                  desc: "AI agents, RAG pipelines, and research workflow automation that turn unstructured lab and clinical data into actionable intelligence.",
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
              Boston&apos;s industries we serve
            </h2>
            <div className="grid grid-cols-2 gap-4 max-[580px]:grid-cols-1">
              {[
                { name: "BioTech & Life Sciences", detail: "LIMS, clinical trial management, regulatory data pipelines, lab automation integrations" },
                { name: "HealthTech & Hospital Systems", detail: "EHR integrations, HIPAA platforms, patient portals, telemedicine infrastructure" },
                { name: "FinTech & Asset Management", detail: "Compliance platforms, audit systems, trading dashboards, risk analytics for Fidelity-ecosystem firms" },
                { name: "EdTech & Higher Education", detail: "Learning management systems, adaptive assessments, university spin-out platforms" },
                { name: "InsurTech", detail: "Underwriting automation, claims management, policy tracking, actuarial data tools" },
                { name: "CleanTech & Energy", detail: "Energy monitoring dashboards, carbon tracking systems, smart grid data applications" },
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
              How we deliver for Boston teams
            </h2>
            <div className="relative flex flex-col gap-0">
              {[
                {
                  step: "01",
                  title: "Compliance & Domain Discovery",
                  detail: "Week 1: We map your regulatory environment — HIPAA, FDA, SEC, FERPA — alongside your technical requirements. Compliance architecture is defined before any code is written.",
                },
                {
                  step: "02",
                  title: "Architecture & Data Modelling",
                  detail: "Weeks 2–3: We design your data schema, API surface, and infrastructure with the scale and audit requirements of Boston's regulated industries in mind.",
                },
                {
                  step: "03",
                  title: "Prototype & Stakeholder Review",
                  detail: "Week 4: A clickable, testable prototype is deployed. Your technical advisors, compliance team, or investors can review it directly.",
                },
                {
                  step: "04",
                  title: "Build & Weekly Demos",
                  detail: "Weeks 5–12: Every Friday you get a working demo of production code. No status reports — you see real, deployed functionality you can test and click.",
                },
                {
                  step: "05",
                  title: "Launch & Regulatory Handover",
                  detail: "Final week: Production deployment, documentation package (architecture diagrams, API docs, compliance runbooks), and a handover session with your team.",
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
              Questions from Boston teams
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
              Ready to build something serious in Boston?
            </h2>
            <p className="text-[0.88rem] leading-[1.7] text-[#8a8680] mb-8 font-space-grotesk">
              Book a 30-minute discovery call. You&apos;ll get a scoped proposal within 48 hours and a working prototype within 7 days.
            </p>
            <LocationCtaButton label="Start Your Discovery Call" />
          </div>
        </section>
      </main>
    </>
  );
}
