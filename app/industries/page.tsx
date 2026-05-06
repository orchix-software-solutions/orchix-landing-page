import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Industries We Serve — FinTech, Healthcare, E-Commerce & More | OrchiX",
  description:
    "OrchiX builds custom software across FinTech, Healthcare, E-Commerce, Real Estate, EdTech, Logistics, Manufacturing, HR, Legal, and Travel — tailored to each industry's unique needs.",
  alternates: { canonical: "https://orchixsoftwaresolutions.com/industries" },
  openGraph: {
    title: "Industries We Serve — FinTech, Healthcare, E-Commerce & More | OrchiX",
    description:
      "OrchiX builds custom software across FinTech, Healthcare, E-Commerce, Real Estate, EdTech, Logistics, Manufacturing, HR, Legal, and Travel.",
    url: "https://orchixsoftwaresolutions.com/industries",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630 }],
  },
};

const industriesSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://orchixsoftwaresolutions.com/industries/#webpage",
  url: "https://orchixsoftwaresolutions.com/industries",
  name: "Industries We Serve — OrchiX Software Solutions",
  description:
    "OrchiX builds custom CRMs, ERPs, SaaS products, and AI systems for FinTech, Healthcare, E-Commerce, Real Estate, EdTech, Logistics, Manufacturing, HR, Legal, and Travel.",
  isPartOf: { "@id": "https://orchixsoftwaresolutions.com/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://orchixsoftwaresolutions.com" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://orchixsoftwaresolutions.com/industries" },
    ],
  },
};

const industries = [
  {
    title: "FinTech",
    desc: "Payment systems, banking apps, trading platforms, and financial dashboards. We build secure, compliant, and high-performance fintech products that handle real money with confidence.",
    tags: ["Payment Gateways", "Trading Platforms", "Banking Apps", "Compliance Systems"],
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    accent: "#22d3ee",
    slug: "fintech",
  },
  {
    title: "Healthcare",
    desc: "Patient portals, EHR systems, telehealth apps, and clinic management tools. Built with HIPAA-awareness and a focus on usability for both patients and practitioners.",
    tags: ["Patient Portals", "EHR Systems", "Telehealth", "Clinic Management"],
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
    accent: "#34d399",
    slug: "healthcare",
  },
  {
    title: "E-Commerce",
    desc: "Custom storefronts, multi-vendor marketplaces, inventory management systems, and checkout flows — built to convert and scale beyond what off-the-shelf platforms can handle.",
    tags: ["Marketplaces", "Inventory Systems", "Custom Storefronts", "Order Management"],
    icon: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z M3 6h18 M16 10a4 4 0 01-8 0",
    accent: "#fb923c",
    slug: "ecommerce",
  },
  {
    title: "Real Estate",
    desc: "Property listing platforms, real estate CRMs, lead management tools, and valuation engines. Whether you're an agent network or a PropTech startup, we build for scale.",
    tags: ["Listing Platforms", "Real Estate CRM", "Lead Management", "Valuation Tools"],
    icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10",
    accent: "#a78bfa",
    slug: "real-estate",
  },
  {
    title: "EdTech",
    desc: "Learning management systems, e-learning platforms, student portals, and assessment tools. We build educational software that actually helps people learn — not just clock hours.",
    tags: ["LMS Platforms", "E-Learning Apps", "Student Portals", "Assessment Tools"],
    icon: "M4 19.5A2.5 2.5 0 016.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z",
    accent: "#fbbf24",
    slug: "edtech",
  },
  {
    title: "Logistics",
    desc: "Fleet tracking, supply chain management, delivery dispatch apps, and warehouse systems. We build logistics software that gives you visibility and control over every moving part.",
    tags: ["Fleet Tracking", "Supply Chain", "Dispatch Apps", "Warehouse Systems"],
    icon: "M1 3h15v13H1z M16 8h4l3 3v5h-7V8z M5.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z M18.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
    accent: "#60a5fa",
    slug: "logistics",
  },
  {
    title: "Manufacturing",
    desc: "IoT dashboards, production monitoring systems, MES platforms, and quality control tools. We connect your factory floor to your business intelligence — in real time.",
    tags: ["IoT Dashboards", "MES Platforms", "Production Monitoring", "Quality Control"],
    icon: "M12 12m-3 0a3 3 0 106 0 3 3 0 10-6 0 M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z",
    accent: "#f472b6",
    slug: "manufacturing",
  },
  {
    title: "HR & Staffing",
    desc: "Recruitment CRMs, applicant tracking systems, onboarding platforms, and workforce management tools. We help HR teams spend less time on admin and more time on people.",
    tags: ["Recruitment CRM", "ATS", "Onboarding Tools", "Workforce Management"],
    icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 100 8 4 4 0 000-8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75",
    accent: "#a3e635",
    slug: "hr-staffing",
  },
  {
    title: "Legal & Compliance",
    desc: "Contract management tools, document automation, compliance tracking systems, and legal AI integrations. We build software that handles the complexity legal teams face every day.",
    tags: ["Contract Tools", "Document Automation", "Compliance Tracking", "Legal AI"],
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    accent: "#e879f9",
    slug: "legal-compliance",
  },
  {
    title: "Travel & Hospitality",
    desc: "Booking engines, guest experience portals, hotel operations systems, and travel aggregators. We build for the full guest journey — from discovery to checkout.",
    tags: ["Booking Engines", "Guest Portals", "Hotel Operations", "Travel Aggregators"],
    icon: "M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.4-.1.9.3 1.1L11 12l-2 3H6l-1 1 3 2 2 3 1-1v-3l3-2 3.7 7.3c.2.4.7.5 1.1.3l.5-.3c.4-.2.6-.6.5-1.1z",
    accent: "#38bdf8",
    slug: "travel-hospitality",
  },
];

export default function IndustriesPage() {
  return (
    <main className="flex-1 bg-[#0a0a0a] text-[#f5f2eb]">
      <JsonLd schema={industriesSchema} />

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 pt-32 pb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(124,91,245,0.3)] bg-[rgba(124,91,245,0.07)] mb-6">
          <span className="w-[6px] h-[6px] rounded-full bg-[#7c5bf5]" aria-hidden="true" />
          <span className="text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-[#a78bfa]">Industries We Serve</span>
        </div>
        <h1
          className="font-syne font-extrabold tracking-[-0.04em] leading-[1.1] text-[#f5f2eb] mb-5 max-w-[700px]"
          style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
        >
          Software built for{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">your industry.</span>
        </h1>
        <p className="text-[0.95rem] leading-[1.85] text-[#8a8680] max-w-[580px]">
          Every industry has its own workflows, compliance requirements, and technical constraints. We don&apos;t apply a one-size-fits-all approach — we build software that fits how your business actually works.
        </p>
      </section>

      {/* Industries grid */}
      <section className="max-w-[1200px] mx-auto px-6 pb-24">
        <div className="grid grid-cols-2 gap-5 max-[700px]:grid-cols-1">
          {industries.map((industry) => (
            <div
              key={industry.slug}
              id={industry.slug}
              className="group rounded-[20px] border border-[rgba(255,255,255,0.07)] bg-[rgba(12,12,12,0.95)] overflow-hidden transition-all duration-500 hover:border-[rgba(124,91,245,0.2)] hover:shadow-[0_0_50px_rgba(124,91,245,0.08)]"
            >
              {/* Top accent */}
              <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${industry.accent}, transparent 70%)` }} />

              <div className="px-6 py-6">
                {/* Icon + title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0"
                    style={{ background: `${industry.accent}14`, borderColor: `${industry.accent}28` }}
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={industry.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {industry.icon.split(" M").map((d, i) => (
                        <path key={i} d={i === 0 ? d : `M${d}`} />
                      ))}
                    </svg>
                  </div>
                  <h2 className="font-syne font-bold text-[1.05rem] text-[#f5f2eb] tracking-[-0.01em] mt-1">{industry.title}</h2>
                </div>

                <p className="text-[0.82rem] leading-[1.75] text-[#8a8680] mb-4">{industry.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {industry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.65rem] font-semibold px-2.5 py-1 rounded-full border"
                      style={{ color: industry.accent, borderColor: `${industry.accent}25`, background: `${industry.accent}0d` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgba(255,255,255,0.05)] py-20 text-center">
        <div className="max-w-[560px] mx-auto px-6">
          <p className="text-[0.88rem] text-[#8a8680] mb-3">Don&apos;t see your industry listed?</p>
          <h2 className="font-syne font-extrabold text-[1.6rem] tracking-[-0.03em] text-[#f5f2eb] mb-3">
            We&apos;ll figure it{" "}
            <span className="font-playfair italic font-normal text-[#a78bfa]">out together.</span>
          </h2>
          <p className="text-[0.85rem] text-[#8a8680] mb-7">
            If you have a problem worth solving, we&apos;ll learn your domain and build the right solution for it. Book a call and let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-[0.95rem] bg-[#7c5bf5] text-white text-[0.88rem] font-semibold rounded-full tracking-[0.02em] transition-all duration-300 no-underline shadow-[0_0_30px_rgba(124,91,245,0.35)] hover:bg-[#6a4ae0] hover:shadow-[0_0_55px_rgba(124,91,245,0.5)] hover:-translate-y-[1px]"
          >
            Book a Free Discovery Call
            <svg className="transition-transform duration-300 group-hover:translate-x-[3px]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
