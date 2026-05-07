import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import FaqAccordion from "./faq-accordion";
import CtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Software Maintenance & Support Services | OrchiX",
  description:
    "OrchiX provides ongoing software maintenance, security patching, performance monitoring, and technical support for web apps, mobile apps, and SaaS products. A real engineering team — not a helpdesk ticket.",
  keywords: [
    "software maintenance and support",
    "software maintenance services",
    "application maintenance and support",
    "software support services",
    "ongoing software maintenance",
    "web application maintenance services",
    "software maintenance company India",
    "application support services",
    "post-launch software support",
    "software security maintenance",
    "SaaS maintenance services",
    "software performance monitoring",
  ],
  alternates: { canonical: "https://orchixsoftwaresolutions.com/services/software-maintenance-support" },
  openGraph: {
    title: "Software Maintenance & Support Services | OrchiX Software Solutions",
    description:
      "OrchiX provides ongoing software maintenance, security patching, performance monitoring, and technical support. A real engineering team — not a helpdesk ticket.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/services/software-maintenance-support",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX Software Solutions" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Software Maintenance & Support",
  description:
    "OrchiX provides ongoing software maintenance, security patching, performance monitoring, and technical support — as a long-term engineering partner, not a helpdesk.",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  serviceType: "Software Maintenance & Support",
  areaServed: "Worldwide",
  url: "https://orchixsoftwaresolutions.com/services/software-maintenance-support",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://orchixsoftwaresolutions.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://orchixsoftwaresolutions.com/services" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Software Maintenance & Support",
        item: "https://orchixsoftwaresolutions.com/services/software-maintenance-support",
      },
    ],
  },
};

const services = [
  {
    icon: "🐛",
    title: "Bug Fixes & Issue Resolution",
    desc: "Bugs found in production get fixed with proper diagnosis — addressing the root cause, not the symptom — plus a regression test so the same issue doesn't surface again. Critical issues within 4 hours. High priority within 24 hours. Standard within 72 hours.",
  },
  {
    icon: "🔐",
    title: "Security Patching & Vulnerability Management",
    desc: "We monitor for CVE disclosures relevant to your stack, assess the actual risk to your specific product, and apply patches within 24 hours for critical vulnerabilities. Quarterly security audits catch issues that don't make headlines.",
  },
  {
    icon: "📊",
    title: "Performance Monitoring & Optimisation",
    desc: "We monitor response times, error rates, database query performance, memory usage, and Core Web Vitals. When something degrades, we catch it before your users do — and fix the underlying causes rather than just scaling up the server.",
  },
  {
    icon: "🔄",
    title: "Dependency & Framework Updates",
    desc: "Running outdated dependencies is one of the most common and most ignored security risks in software. We manage updates systematically — testing in staging, reviewing breaking changes, updating documentation — so your stack stays current without surprises.",
  },
  {
    icon: "☁️",
    title: "Infrastructure & Cloud Management",
    desc: "Server costs creeping up. Deployments that occasionally fail. Backups that have never been tested. SSL certificates that expire. We manage the infrastructure your product runs on — keeping it properly configured, cost-optimised, and resilient.",
  },
  {
    icon: "✨",
    title: "Feature Development & Enhancements",
    desc: "A fixed number of hours per month for feature work — small improvements, UX refinements, new integrations, and functionality changes. Predictable development capacity without spinning up a new project every time you want to add something.",
  },
  {
    icon: "🧹",
    title: "Code Refactoring & Technical Debt Reduction",
    desc: "We identify the highest-impact areas of technical debt and refactor them incrementally — reducing complexity without rewriting the whole product and without disrupting what's already working.",
  },
  {
    icon: "📥",
    title: "Codebase Takeover & Onboarding",
    desc: "We take over maintenance of software we didn't build. It starts with a structured two-to-three week audit — reading the codebase, running the tests, documenting what's there, and identifying risks. Then we take responsibility for it.",
  },
];

const whyItems = [
  {
    icon: "📖",
    title: "We Learn Your Product Properly First",
    desc: "The first thing we do with any new maintenance client is a full codebase audit. Not a quick scan — a thorough read of the architecture, data models, deployment setup, and the parts clearly built in a hurry. By the time we're responsible, we understand it.",
  },
  {
    icon: "👥",
    title: "You Get Engineers, Not a Support Queue",
    desc: "Our maintenance clients work with a named team — two or three engineers who know the codebase and the context. Not a rotating cast of people reading tickets with no background. When something goes wrong, the person responding already knows your product.",
  },
  {
    icon: "🔧",
    title: "We Fix Things Properly, Not Quickly",
    desc: "A quick fix that doesn't address the root cause saves time this week and creates a worse problem next month. We take the time to understand why something broke before we change it. Everything we fix is documented and tested.",
  },
  {
    icon: "💬",
    title: "We Tell You What Your Product Needs",
    desc: "If your product is accumulating technical debt that's going to cause serious problems in 12 months, we'll tell you — with a specific explanation of what it is and what it would take to address it. You make the call with the full picture.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Codebase Audit (Weeks 1–2)",
    desc: "We read the code, run the tests, map the architecture, review the infrastructure setup, and document everything we find. You get a written audit report covering what's in good shape, what needs attention, and the priority order for addressing it.",
  },
  {
    num: "02",
    title: "Monitoring & Alerting Setup (Week 2)",
    desc: "Error tracking, uptime monitoring, performance dashboards, and alerting configured before we take formal responsibility. We need to see what's happening before we're accountable for what happens.",
  },
  {
    num: "03",
    title: "Handover & Knowledge Transfer (Weeks 2–3)",
    desc: "We sit with whoever knows the product best — the original developers if possible — and fill in the gaps the codebase doesn't explain. Business logic, customer-specific setups, known quirks, upcoming changes.",
  },
  {
    num: "04",
    title: "Active Maintenance Begins",
    desc: "From this point, we're responsible. Issues get logged, triaged, and fixed within agreed response times. Monthly reports go out at the end of each billing period. Quarterly security audits run automatically.",
  },
];

const retainerIncludes = [
  {
    icon: "📡",
    title: "Monitoring & Alerts",
    desc: "24/7 uptime monitoring, error tracking, and performance alerts. You get notified when something goes wrong; we get notified first and start working on it.",
  },
  {
    icon: "⏱️",
    title: "Guaranteed Response Times",
    desc: "Critical issues within 4 hours. High-priority bugs within 24 hours. Standard requests within 72 hours. Actual response times we hold ourselves to — not SLA language buried in a contract.",
  },
  {
    icon: "🕐",
    title: "Monthly Engineering Hours",
    desc: "A fixed allocation of engineering time each month for bug fixes, small features, dependency updates, and refactoring. Hours roll over for up to 60 days if unused.",
  },
  {
    icon: "📋",
    title: "Monthly Report",
    desc: "A plain-language summary of what we did, what we found, what we fixed, and anything you should know about your product's health. Readable in 10 minutes.",
  },
];

export default function SoftwareMaintenanceSupportPage() {
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
          <span className="text-[#a78bfa]">Software Maintenance &amp; Support</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <h1 className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
          Your Software Doesn&apos;t Stop Needing Engineering After Launch.{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Neither Should Your Team.</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          Dependencies go out of date. Security vulnerabilities get discovered. Traffic grows and performance degrades. Bugs surface in edge cases nobody tested. We handle all of it — as a long-term engineering partner, not a helpdesk that closes tickets.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <CtaButton label="Talk to Us About Your Product" />
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Pain Section ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">The Real Problem</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          What Happens to Software After the Agency{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">That Built It Disappears</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8]">
          <p>
            Most software projects end the same way. The agency delivers the product, hands over the credentials, and moves on to the next client. You&apos;re left with a codebase you didn&apos;t write, running on infrastructure you didn&apos;t configure, with no documentation about why things were built the way they were.
          </p>
          <p>
            For a while, it&apos;s fine. Then something breaks. A third-party dependency releases an update that changes its API and your integration silently fails. A security researcher publishes a vulnerability in a library you&apos;re using and you don&apos;t find out for three weeks. Traffic grows faster than expected and your server starts timing out at 9am on Monday mornings.
          </p>
          <p>
            None of these are catastrophic in isolation. But without an engineering team watching the product, they stack up. The cost of fixing accumulated neglect is significantly higher than the cost of preventing it.
          </p>
          <p className="text-[#f5f2eb] font-semibold">We take over the product, learn it properly, and keep it running well.</p>
          <p>
            Not as a retainer that pays for access to a Jira board — as an extension of your team that actually knows your codebase.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Services Grid ── */}
      <section id="services" className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">What We Cover</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          Software Maintenance &amp;{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Support Services</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          Everything your product needs after launch — from critical bug fixes and security patches through to feature development and infrastructure management.
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
              What &ldquo;Long-Term Partnership&rdquo;{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">Actually Means</span>
            </h2>
            <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] mb-8">
              Every agency says they want a long-term relationship. Most mean they&apos;d like you to keep paying for new projects. Long-term partnership in maintenance means something specific to us.
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
              <span className="font-playfair italic font-normal text-[#a78bfa]">Take Over a Product</span>
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

      {/* ── Retainer Section ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">How It Works</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          How Maintenance{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Retainers Work</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          Every retainer is sized based on what your product actually needs — not a package that sounds good on a pricing page. Retainers start at <span className="text-[#f5f2eb] font-semibold">$1,500/month.</span>
        </p>

        <div className="grid grid-cols-2 gap-5 max-[700px]:grid-cols-1">
          {retainerIncludes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] p-7 transition-all duration-250 hover:border-[rgba(124,91,245,0.4)] hover:bg-[rgba(124,91,245,0.05)] hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-[rgba(124,91,245,0.12)] border border-[rgba(124,91,245,0.15)] flex items-center justify-center text-xl mb-5">
                {item.icon}
              </div>
              <h3 className="font-syne font-bold text-[0.95rem] text-[#f5f2eb] mb-2">{item.title}</h3>
              <p className="text-[0.84rem] text-[#8a8680] leading-[1.7]">{item.desc}</p>
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">Software Maintenance &amp; Support</span>
        </h2>
        <FaqAccordion />
      </section>
    </main>
  );
}
