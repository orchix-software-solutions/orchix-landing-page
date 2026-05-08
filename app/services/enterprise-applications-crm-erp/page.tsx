import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import FaqAccordion from "./faq-accordion";
import CtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Custom CRM & ERP Development Services | OrchiX",
  description:
    "OrchiX builds custom CRM systems, ERP platforms, and enterprise business management software tailored to your exact workflows — with radical transparency, weekly demos, and shared repos.",
  keywords: [
    "custom CRM development",
    "ERP software development",
    "enterprise application development",
    "CRM development services",
    "custom ERP development company",
    "business management system development",
    "enterprise resource planning software",
    "CRM integration services",
    "cloud ERP development",
    "custom CRM software India",
  ],
  alternates: { canonical: "https://orchixsoftwaresolutions.com/services/enterprise-applications-crm-erp" },
  openGraph: {
    title: "Custom CRM & ERP Development Services | OrchiX Software Solutions",
    description:
      "We build enterprise-grade CRM systems, ERP platforms, and business management software with radical transparency. Custom-built for your workflows — not a one-size-fits-all solution.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/services/enterprise-applications-crm-erp",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX Software Solutions" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom CRM & ERP Development",
  description:
    "OrchiX builds custom CRM systems, ERP platforms, and enterprise business management applications tailored to your unique business processes.",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  serviceType: "Enterprise Application Development",
  areaServed: "Worldwide",
  url: "https://orchixsoftwaresolutions.com/services/enterprise-applications-crm-erp",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://orchixsoftwaresolutions.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://orchixsoftwaresolutions.com/services" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Enterprise Applications & CRM/ERP",
        item: "https://orchixsoftwaresolutions.com/services/enterprise-applications-crm-erp",
      },
    ],
  },
};

const services = [
  {
    icon: "🧩",
    title: "Custom CRM Development",
    desc: "Purpose-built customer relationship management systems designed around your sales cycle, customer journeys, and team workflows — not generic templates.",
  },
  {
    icon: "⚙️",
    title: "Custom ERP Software Development",
    desc: "End-to-end enterprise resource planning platforms integrating finance, inventory, HR, procurement, and operations into a single source of truth.",
  },
  {
    icon: "🔗",
    title: "CRM & ERP Integration Services",
    desc: "Connect your existing CRM or ERP with third-party tools, APIs, and legacy systems. Eliminate data silos and build seamless cross-platform workflows.",
  },
  {
    icon: "☁️",
    title: "Cloud ERP Migration",
    desc: "Migrate on-premise ERP systems to scalable cloud infrastructure on AWS or Azure — with zero disruption to daily operations and full data integrity.",
  },
  {
    icon: "📊",
    title: "Business Management Systems",
    desc: "Custom back-office platforms for project management, resource planning, approval workflows, and reporting — built to replace spreadsheets at scale.",
  },
  {
    icon: "🛠️",
    title: "ERP Customization & Support",
    desc: "Extend and customize existing platforms like Salesforce, Microsoft Dynamics, or Odoo with bespoke modules, automations, and integrations.",
  },
];

const whyItems = [
  {
    icon: "🔍",
    title: "Weekly Demos You Can Touch",
    desc: "Every Friday, a working build lands in your hands. No endless planning cycles, no surprises at delivery.",
  },
  {
    icon: "📁",
    title: "Shared Repos, Full Access",
    desc: "You own every line of code from day one. Shared GitHub access — no lock-in, no hostage code.",
  },
  {
    icon: "⚡",
    title: "Prototype in 7 Days",
    desc: "We ship a working prototype within the first week so you can validate before committing to the full build.",
  },
  {
    icon: "🏗️",
    title: "Built to Scale",
    desc: "Architecture designed for 10x growth from day one — microservices, cloud-native, and horizontally scalable.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Requirements Mapping",
    desc: "We map your workflows, pain points, and growth goals — and turn them into a technical spec you actually understand.",
  },
  {
    num: "02",
    title: "Architecture & UI Design",
    desc: "System design, data models, and UX wireframes before a single line of production code is written.",
  },
  {
    num: "03",
    title: "Agile Build with Weekly Demos",
    desc: "2-week sprints. Working demos every Friday. Adjust direction in real time — not at the end of a 6-month contract.",
  },
  {
    num: "04",
    title: "QA, Migration & Go-Live",
    desc: "Thorough testing, data migration support, team training, and a smooth launch with 0 downtime.",
  },
  {
    num: "05",
    title: "Ongoing Support & Scaling",
    desc: "Post-launch maintenance, feature additions, and performance optimization as your business grows.",
  },
];

const techStack = [
  { name: "Node.js",            svg: "/svgs/nodejs-icon-logo-svgrepo-com.svg" },
  { name: "React",              svg: "/svgs/react-svgrepo-com (1).svg" },
  { name: "Next.js",            svg: "/svgs/nextjs-svgrepo-com.svg" },
  { name: "TypeScript",         svg: "/svgs/typescript-official-svgrepo-com.svg" },
  { name: "Python / Django",    svg: "/svgs/python-svgrepo-com (1).svg" },
  { name: "PostgreSQL",         svg: "/svgs/postgresql-svgrepo-com.svg" },
  { name: "MongoDB",            svg: "/svgs/mongodb-svgrepo-com (1).svg" },
  { name: "AWS",                svg: "/svgs/aws-svgrepo-com (2).svg" },
  { name: "Microsoft Azure",    svg: "/svgs/azure-icon-svgrepo-com (1).svg" },
  { name: "Docker / Kubernetes",svg: "/svgs/docker-svgrepo-com.svg" },
  { name: "GraphQL",            svg: "/svgs/graphql-svgrepo-com.svg" },
  { name: "Redis",              svg: "/svgs/redis-logo-svgrepo-com.svg" },
  { name: "Salesforce",         svg: "/svgs/salesforce-2-logo-svgrepo-com.svg" },
  { name: "REST APIs",          svg: null },
  { name: "Microservices",      svg: null },
];

const industries = [
  { icon: "🏦", title: "Fintech & Banking", desc: "Loan origination, KYC workflows, client portals, compliance tracking" },
  { icon: "🏥", title: "Healthcare", desc: "Patient management, billing systems, EHR integrations, HIPAA-ready" },
  { icon: "🏭", title: "Manufacturing", desc: "Inventory management, supply chain, production planning, MRP systems" },
  { icon: "🚚", title: "Logistics", desc: "Fleet management, dispatch systems, real-time tracking, vendor portals" },
  { icon: "🛍️", title: "Retail & eCommerce", desc: "Omnichannel CRM, order management, loyalty programs, demand forecasting" },
  { icon: "🏗️", title: "Real Estate", desc: "Property management, lead pipelines, contract workflows, tenant portals" },
  { icon: "🎓", title: "Education", desc: "Student information systems, admissions CRM, course management platforms" },
  { icon: "💼", title: "Professional Services", desc: "Project tracking, retainer billing, client portals, resource utilization" },
];

export default function CrmErpServicePage() {
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
            <span className="text-[#a78bfa]">Enterprise Applications &amp; CRM/ERP</span>
          </nav>
        </div>

        {/* ── Hero ── */}
        <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
          <h1 className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
            Custom{" "}
            <span className="font-playfair italic font-normal text-[#a78bfa]">CRM &amp; ERP</span>
            <br />
            Built Around Your Business —{" "}
            <span className="font-playfair italic font-normal text-[#a78bfa]">Not the Other Way Around</span>
          </h1>

          <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[600px] mb-8">
            We design and build custom CRM systems, ERP platforms, and enterprise business management software that fit your exact workflows — with weekly demos, shared repos, and zero black boxes.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <CtaButton label="Get a Free Consultation" />
          </div>
        </section>

        {/* Divider */}
        <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

        {/* ── Services Grid ── */}
        <section id="services" className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
          <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">What We Build</p>
          <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
            Custom{" "}
            <span className="font-playfair italic font-normal text-[#a78bfa]">CRM &amp; ERP</span>{" "}
            Development Services
          </h2>
          <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-5">
            From greenfield builds to legacy modernization — we cover the full spectrum of enterprise application development, tailored to your industry and processes.
          </p>
          <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
            Every architecture decision — monolith, modular monolith, or microservices — gets made intentionally based on your team size, traffic patterns, and operational maturity.{" "}
            <Link
              href="/blogs/microservices-vs-monolith"
              className="text-[#a78bfa] underline underline-offset-2 hover:text-[#c4b5fd] transition-colors duration-200"
            >
              See how we think about architecture decisions →
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
                Enterprise Software<br />
                <span className="font-playfair italic font-normal text-[#a78bfa]">Without the Enterprise BS</span>
              </h2>
              <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] mb-8">
                Most agencies treat enterprise projects as black boxes. We don&apos;t. Radical transparency is our operating model — not a tagline.
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
                How We{" "}
                <span className="font-playfair italic font-normal text-[#a78bfa]">Deliver</span>
              </h2>
              <div className="flex flex-col">
                {processSteps.map((step, i) => (
                  <div key={step.num} className="flex gap-5 pb-7 relative">
                    {/* Connecting line */}
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
            Built With the{" "}
            <span className="font-playfair italic font-normal text-[#a78bfa]">Right Stack</span>{" "}
            for Your Scale
          </h2>
          <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[540px] mx-auto mb-10">
            We choose technologies based on your requirements — not our convenience. Here&apos;s what we work with.
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
            CRM &amp; ERP for{" "}
            <span className="font-playfair italic font-normal text-[#a78bfa]">Your Industry</span>
          </h2>
          <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[540px] mb-12">
            Every industry has different workflows, compliance needs, and data structures. We build systems that reflect that.
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

        {/* ── FAQ ── */}
        <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
          <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">FAQ</p>
          <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-10" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
            Questions About{" "}
            <span className="font-playfair italic font-normal text-[#a78bfa]">Custom CRM &amp; ERP</span>{" "}
            Development
          </h2>
          <FaqAccordion />
        </section>

    </main>
  );
}
