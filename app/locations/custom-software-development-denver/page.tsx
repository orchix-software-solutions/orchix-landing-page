import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Custom Software Development Denver | SaaS, CleanTech & AI Systems",
  description:
    "OrchiX builds custom software for Denver's CleanTech, aerospace, outdoor tech, and SaaS companies. Cloud-native. Prototype in 7 days. Direct founder access.",
  keywords: [
    "custom software development Denver",
    "software development agency Denver",
    "Denver SaaS development",
    "CleanTech software Denver",
    "Denver AI development",
    "aerospace software Denver",
    "outdoor tech software Denver",
    "Colorado software development",
    "Denver CRM development",
    "Denver startup software",
    "enterprise software Denver",
    "clean energy software Colorado",
    "government tech software Denver",
    "Denver software company",
    "cloud software development Denver",
  ],
  openGraph: {
    title: "Custom Software Development Denver | OrchiX",
    description:
      "Custom software for Denver's CleanTech, aerospace, outdoor tech, and SaaS companies. Cloud-native. Prototype in 7 days.",
    url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-denver",
  },
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/custom-software-development-denver",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://orchixsoftwaresolutions.com/locations/custom-software-development-denver/#service",
  name: "Custom Software Development — Denver, CO",
  description:
    "OrchiX builds cloud-native SaaS platforms, CleanTech systems, and AI automation for Denver's tech-forward industries.",
  url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-denver",
  provider: {
    "@id": "https://orchixsoftwaresolutions.com/#organization",
  },
  areaServed: {
    "@type": "City",
    name: "Denver",
    sameAs: "https://www.wikidata.org/wiki/Q16554",
  },
  serviceType: [
    "SaaS Product Development",
    "CleanTech Software",
    "AI Integration",
    "Custom CRM Development",
    "Cloud-Native Architecture",
    "Outdoor & Lifestyle Tech",
    "Government Technology",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you build energy monitoring and clean energy software for Denver companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build carbon tracking platforms, renewable energy monitoring dashboards, utility management systems, and ESG reporting tools for CleanTech and energy companies in the Denver/Colorado market. We understand the intersection of sensor data, IoT integrations, and business reporting that clean energy operations require.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build software for Denver outdoor and lifestyle brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Denver has a strong outdoor and lifestyle industry. We build e-commerce platforms, inventory management systems, dealer/retailer portals, warranty management tools, and custom CRMs for outdoor brands — designed for multi-channel distribution across direct-to-consumer and wholesale.",
      },
    },
    {
      "@type": "Question",
      name: "We're a Colorado government contractor. Can you build GovTech software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build government-facing platforms with the compliance, accessibility (WCAG 2.1 AA), and security requirements that government contracts demand. Procurement portals, case management systems, citizen-facing applications, and internal operations tools — all with FedRAMP-aligned security architecture.",
      },
    },
    {
      "@type": "Question",
      name: "What's your experience with SaaS for the Denver startup ecosystem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Denver's startup scene is growing fast and we work well with early-stage founders who need an MVP without the agency overhead. We scope tightly, deliver a production-ready MVP in 8–12 weeks, and design the architecture for scale so you're not rebuilding when you raise your Series A.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate with aerospace and defence data systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build the operational and data-layer software that interfaces with aerospace operations — maintenance tracking systems, supplier management platforms, document control tools, and custom reporting for the Colorado aerospace supply chain. We work at the application layer and don't touch ITAR-controlled systems directly.",
      },
    },
  ],
};

export default function DenverPage() {
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
            <li className="text-[#f5f2eb]">Denver, CO</li>
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
              🏔️ Denver, Colorado
            </span>
            <h1
              className="font-syne font-extrabold tracking-[-0.04em] leading-[1.08] text-[#f5f2eb] mb-6 max-w-[800px]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              Custom Software for Denver&apos;s{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">
                Tech-Forward Economy
              </span>
            </h1>
            <p className="text-[1.05rem] leading-[1.7] text-[#8a8680] max-w-[600px] mb-8 font-space-grotesk">
              Denver is building the next generation of CleanTech, SaaS, outdoor tech, and aerospace software. OrchiX delivers cloud-native custom platforms that match Colorado&apos;s pace — from early-stage MVPs to complex enterprise systems for regulated industries.
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
              Denver companies choose us when they need{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">engineering that keeps up.</span>
            </h2>
            <div className="grid grid-cols-2 gap-5 max-[700px]:grid-cols-1">
              {[
                {
                  icon: "☁️",
                  title: "Cloud-Native by Default",
                  body: "Every system we build is designed for cloud — auto-scaling, containerised, infrastructure-as-code, and CI/CD from day one. Denver companies on AWS, Azure, or GCP get architectures built to the platform's strengths.",
                },
                {
                  icon: "🌱",
                  title: "CleanTech & ESG Systems",
                  body: "Denver's clean energy sector needs real software — not spreadsheets. We build carbon tracking platforms, energy monitoring dashboards, sustainability reporting systems, and IoT data pipelines for Colorado's CleanTech companies.",
                },
                {
                  icon: "🚀",
                  title: "Startup to Series A",
                  body: "Denver's startup ecosystem is maturing fast. We build MVPs that founders can pitch and investors can trust — clean architecture, documented APIs, and infrastructure that doesn't need to be rebuilt at Series A.",
                },
                {
                  icon: "🛡️",
                  title: "Government & Defence-Adjacent",
                  body: "Colorado has a major government and aerospace presence. We build the application-layer software — procurement portals, operations dashboards, case management — with the security and accessibility compliance those contracts require.",
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
              What we build for Denver companies
            </h2>
            <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[580px]:grid-cols-1">
              {[
                {
                  title: "CleanTech & Energy Platforms",
                  desc: "Carbon tracking dashboards, renewable energy monitoring, utility management, ESG reporting, and IoT data integration for Colorado's clean energy companies.",
                  href: "/services/enterprise-applications-crm-erp",
                },
                {
                  title: "SaaS MVP Development",
                  desc: "Production-ready SaaS MVPs built in 8–12 weeks for Denver founders. Clean architecture designed to scale — ready for investor diligence from day one.",
                  href: "/services/saas-product-development",
                },
                {
                  title: "Outdoor & Lifestyle Tech",
                  desc: "E-commerce platforms, dealer portals, inventory management, and custom CRMs for Colorado's outdoor, sporting goods, and lifestyle brands.",
                  href: "/services/web-app-development",
                },
                {
                  title: "Government & Civic Technology",
                  desc: "WCAG-compliant, secure government applications — procurement portals, citizen services tools, case management, and internal operations platforms.",
                  href: "/services/enterprise-applications-crm-erp",
                },
                {
                  title: "Aerospace Operations Software",
                  desc: "Maintenance tracking systems, supplier management platforms, document control, and quality management tools for Colorado's aerospace supply chain.",
                  href: "/services/business-process-automation",
                },
                {
                  title: "AI & Intelligent Automation",
                  desc: "AI agents, RAG pipelines, and workflow automation built for Denver companies handling complex data operations, document processing, or multi-system coordination.",
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
              Denver industries we serve
            </h2>
            <div className="grid grid-cols-2 gap-4 max-[580px]:grid-cols-1">
              {[
                { name: "CleanTech & Renewable Energy", detail: "Carbon tracking, solar/wind operations, ESG reporting, energy data pipelines for Colorado's clean energy sector" },
                { name: "Aerospace & Defence", detail: "Maintenance tracking, supplier management, document control, quality systems for Colorado's aerospace supply chain" },
                { name: "Outdoor & Lifestyle Brands", detail: "E-commerce platforms, dealer portals, inventory management, warranty systems for outdoor and sporting goods companies" },
                { name: "SaaS & B2B Technology", detail: "MVP builds, SaaS platforms, B2B tools, and growth-stage product development for Denver startups and scale-ups" },
                { name: "Government & Public Sector", detail: "Citizen-facing applications, procurement portals, case management systems, accessible GovTech for Colorado agencies" },
                { name: "Healthcare & BioScience", detail: "Health data platforms, clinical workflow tools, telehealth, and life sciences software for Colorado's growing health sector" },
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
              How we deliver for Denver teams
            </h2>
            <div className="relative flex flex-col gap-0">
              {[
                {
                  step: "01",
                  title: "Technical Discovery & Cloud Strategy",
                  detail: "Week 1: We assess your cloud environment (AWS/Azure/GCP), identify integration points, and define the infrastructure strategy. For CleanTech and regulated industries, compliance requirements are mapped before architecture is designed.",
                },
                {
                  step: "02",
                  title: "Cloud-Native Architecture Design",
                  detail: "Weeks 2–3: Infrastructure-as-code, containerisation strategy, CI/CD pipeline design, and API contracts defined before build begins. Denver engineering teams get full architecture documentation from day one.",
                },
                {
                  step: "03",
                  title: "Prototype & Technical Review",
                  detail: "Week 4: A deployed, testable prototype in your cloud environment. Your technical leads, CTO, or investors can evaluate the architecture and UX before full build begins.",
                },
                {
                  step: "04",
                  title: "Build & Weekly Demos",
                  detail: "Weeks 5–12: Production code shipped weekly with Friday demos. Automated testing and monitoring are built in from the start — not retrofitted before launch.",
                },
                {
                  step: "05",
                  title: "Deployment & Knowledge Transfer",
                  detail: "Final week: Production deployment with full architecture decision records (ADRs), runbooks, CI/CD documentation, and a handover session. Your team owns the system completely.",
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
              Questions from Denver teams
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
              Building something ambitious in Denver?
            </h2>
            <p className="text-[0.88rem] leading-[1.7] text-[#8a8680] mb-8 font-space-grotesk">
              Book a 30-minute discovery call. Scoped proposal in 48 hours, working prototype in 7 days — cloud-native from the first commit.
            </p>
            <LocationCtaButton label="Start Your Discovery Call" />
          </div>
        </section>
      </main>
    </>
  );
}
