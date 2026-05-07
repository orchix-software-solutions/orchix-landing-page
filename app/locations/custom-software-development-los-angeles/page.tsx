import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LocationCtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Software Development Company Los Angeles | OrchiX",
  description:
    "OrchiX is a software development company serving Los Angeles businesses. We build custom SaaS platforms, AI automation, e-commerce systems, and web & mobile apps for LA's entertainment, media, DTC, and creative tech markets.",
  keywords: [
    "software development company Los Angeles",
    "custom software development Los Angeles",
    "software development agency Los Angeles",
    "custom software development LA",
    "Los Angeles software development company",
    "SaaS development Los Angeles",
    "AI automation Los Angeles",
    "web app development Los Angeles",
    "e-commerce software development Los Angeles",
    "entertainment software development LA",
    "media tech software Los Angeles",
    "DTC software development Los Angeles",
    "mobile app development Los Angeles",
    "software company Los Angeles",
    "custom software development Hollywood",
  ],
  alternates: {
    canonical: "https://orchixsoftwaresolutions.com/locations/custom-software-development-los-angeles",
  },
  openGraph: {
    title: "Software Development Company Los Angeles | OrchiX",
    description:
      "OrchiX builds custom software for Los Angeles businesses — SaaS platforms, AI automation, e-commerce systems, and media tech built for LA's entertainment, DTC, and creative economy.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-los-angeles",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX — Software Development Company Los Angeles" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OrchiX Software Solutions — Los Angeles",
  description:
    "Software development company serving Los Angeles businesses. Custom SaaS platforms, AI automation, e-commerce systems, and web & mobile apps for LA's entertainment, media, DTC, and creative tech sectors.",
  url: "https://orchixsoftwaresolutions.com/locations/custom-software-development-los-angeles",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  areaServed: {
    "@type": "City",
    name: "Los Angeles",
    "@id": "https://www.wikidata.org/wiki/Q65",
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
        name: "Software Development Company Los Angeles",
        item: "https://orchixsoftwaresolutions.com/locations/custom-software-development-los-angeles",
      },
    ],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Web & App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Product Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & Intelligent Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce Platform Development" } },
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
      name: "Do you build software for entertainment and media companies in Los Angeles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. LA's entertainment industry has unique software requirements around content rights management, production scheduling, talent platforms, and digital distribution. We build the operational and consumer-facing software for studios, production companies, streaming platforms, and media tech businesses across Los Angeles.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build e-commerce and DTC platforms for LA brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Los Angeles is home to some of the US's most successful DTC brands and e-commerce companies. We build custom storefronts, headless commerce platforms, subscription management systems, and the operational back-office software that high-volume DTC brands need to manage inventory, fulfilment, and customer data at scale.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build mobile apps for Los Angeles consumer brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Consumer mobile apps are a core part of our work with LA companies — from creator platforms and content apps to loyalty programmes and branded shopping experiences. We build iOS and Android apps with the performance and polish that LA's consumer market expects.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build creator economy and content monetisation platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Los Angeles is the global hub of the creator economy. We build creator monetisation platforms, fan subscription systems, content marketplace platforms, and the backend infrastructure that powers creator-to-audience businesses — including payment processing, content delivery, and rights management.",
      },
    },
    {
      "@type": "Question",
      name: "What's your experience with high-traffic consumer-facing applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We architect consumer applications for scale from the start. Database design, caching strategy, CDN configuration, and API design are all optimised for high read volumes and traffic spikes — the kind that happen when a LA creator drops a product or a studio releases a campaign. We don't build systems that need re-architecting after the first viral moment.",
      },
    },
  ],
};

const services = [
  {
    icon: "🖥️",
    title: "Custom Web & App Development",
    desc: "Consumer-facing web applications and marketing platforms built for LA's visually demanding audience. From immersive brand experiences to high-traffic product launches and content platforms — built for performance, designed for the aesthetic standards LA companies hold their digital products to.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "iOS and Android apps for LA's consumer brands, creator platforms, and media companies. Native performance, polished UX, and the backend infrastructure to handle the traffic spikes that come with influencer mentions, press coverage, and campaign launches.",
  },
  {
    icon: "🛒",
    title: "E-commerce & DTC Platforms",
    desc: "Custom headless commerce platforms, subscription management systems, and DTC storefronts for LA brands that have outgrown Shopify's constraints. Built for high order volumes, complex product catalogues, and the omnichannel experiences that modern LA consumers expect.",
  },
  {
    icon: "☁️",
    title: "SaaS Product Development",
    desc: "End-to-end SaaS builds for LA founders and media tech companies launching products for entertainment, creative, and consumer markets. Architecture, backend, frontend, billing, and the infrastructure to handle a consumer-scale user base from launch.",
  },
  {
    icon: "🤖",
    title: "AI & Intelligent Automation",
    desc: "AI-powered content tools, recommendation engines, personalisation systems, and intelligent automation for LA companies in entertainment, e-commerce, and media. We build AI that works reliably with real users at scale — not demos that perform well in controlled conditions.",
  },
  {
    icon: "🔄",
    title: "Business Process Automation",
    desc: "Automating the operational complexity behind LA's creative businesses — rights clearance workflows, talent management processes, production scheduling, and the back-office operations that keep entertainment and DTC companies running behind the scenes.",
  },
];

const industries = [
  {
    icon: "🎬",
    name: "Entertainment & Media",
    desc: "Hollywood is the world's entertainment capital and its software needs are as complex as its productions. We build content rights management systems, production scheduling platforms, talent portals, streaming infrastructure, and the digital distribution tools that studios, networks, and independent production companies rely on to operate.",
  },
  {
    icon: "🛍️",
    name: "E-commerce & DTC Brands",
    desc: "Los Angeles is home to a dense cluster of DTC brands — fashion, beauty, wellness, food, and lifestyle. We build the custom platforms these brands need when Shopify stops being enough: headless storefronts with full creative control, inventory and fulfilment systems, subscription platforms, and customer data infrastructure that actually works at scale.",
  },
  {
    icon: "🎮",
    name: "Gaming & Interactive Media",
    desc: "LA's gaming industry — from indie studios to major publishers — needs custom software beyond game engines. We build player portals, in-game economy systems, analytics dashboards, live ops tooling, and the operational platforms that support games-as-a-service products post-launch.",
  },
  {
    icon: "✨",
    name: "Creator Economy & AdTech",
    desc: "The creator economy was born in Los Angeles. We build the platforms that power it — creator monetisation tools, fan subscription systems, brand partnership marketplaces, and the analytics infrastructure that helps creators and agencies understand what content performs and why.",
  },
];

const painPoints = [
  {
    icon: "🎨",
    title: "LA Products Are Judged on Experience, Not Just Function",
    desc: "Los Angeles has the highest concentration of design-aware consumers in the country. A functional but ugly product doesn't survive the LA market. We build software where engineering and design work together from day one — not engineering first, design applied at the end as a skin.",
  },
  {
    icon: "📈",
    title: "Traffic Spikes Are the Default, Not the Exception",
    desc: "A LA creator posts about your product. A Netflix show features your brand. A campaign goes viral. Your platform needs to handle 50x normal traffic without going down. We architect for these moments from the start — not as an expensive retrofit after the first crash.",
  },
  {
    icon: "🔐",
    title: "IP and Rights Management Is Non-Negotiable",
    desc: "LA's entertainment and creator economy runs on intellectual property. The software that handles content distribution, rights licensing, and creator agreements needs to track who owns what, what's been licensed where, and what's still under embargo. We build these systems with the rigour the entertainment industry demands.",
  },
  {
    icon: "🌐",
    title: "Omnichannel Is the Baseline for LA Consumers",
    desc: "LA's consumer market expects seamless experiences across web, mobile, social, and in-store. We build the unified backend infrastructure that makes this possible — a single source of truth for inventory, customer data, and content that powers every channel without the duplication and sync errors of bolted-together systems.",
  },
];

const faqs = [
  {
    q: "Do you build software for entertainment and media companies in Los Angeles?",
    a: "Yes. LA's entertainment industry has unique software requirements around content rights management, production scheduling, talent platforms, and digital distribution. We build the operational and consumer-facing software for studios, production companies, streaming platforms, and media tech businesses across Los Angeles.",
  },
  {
    q: "Can you build e-commerce and DTC platforms for LA brands?",
    a: "Yes. Los Angeles is home to some of the US's most successful DTC brands and e-commerce companies. We build custom storefronts, headless commerce platforms, subscription management systems, and the operational back-office software that high-volume DTC brands need to manage inventory, fulfilment, and customer data at scale.",
  },
  {
    q: "Do you build mobile apps for Los Angeles consumer brands?",
    a: "Yes. Consumer mobile apps are a core part of our work with LA companies — from creator platforms and content apps to loyalty programmes and branded shopping experiences. We build iOS and Android apps with the performance and polish that LA's consumer market expects.",
  },
  {
    q: "Can you build creator economy and content monetisation platforms?",
    a: "Yes. Los Angeles is the global hub of the creator economy. We build creator monetisation platforms, fan subscription systems, content marketplace platforms, and the backend infrastructure that powers creator-to-audience businesses — including payment processing, content delivery, and rights management.",
  },
  {
    q: "What's your experience with high-traffic consumer-facing applications?",
    a: "We architect consumer applications for scale from the start. Database design, caching strategy, CDN configuration, and API design are all optimised for high read volumes and traffic spikes — the kind that happen when a LA creator drops a product or a studio releases a campaign. We don't build systems that need re-architecting after the first viral moment.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Creative Alignment (Week 1)",
    desc: "We map your product requirements alongside your brand and design direction. For LA companies, the experience is part of the product — so we establish design principles and UX expectations in the first week, not after the build is done.",
  },
  {
    num: "02",
    title: "Architecture for Scale (Weeks 1–2)",
    desc: "Consumer applications for LA's market need to be designed for traffic spikes, not average load. We make the database, caching, CDN, and API decisions that determine whether your platform stays up when the moment comes — before writing a line of application code.",
  },
  {
    num: "03",
    title: "Iterative Build with Weekly Demos (Weeks 2–8+)",
    desc: "Working software every week — visually finished, not just functional. For LA companies, a rough demo isn't good enough. We build and present increments that reflect the final quality, so you're never surprised by the end result.",
  },
  {
    num: "04",
    title: "Performance Testing & Launch Readiness",
    desc: "Load testing under simulated traffic spikes, cross-device and cross-browser QA, and a deployment to production infrastructure with monitoring configured from day one. We don't launch and hope — we test for the worst case before it happens.",
  },
  {
    num: "05",
    title: "Post-Launch Support & Growth Features",
    desc: "30-day post-launch support included. After that, ongoing development retainers for LA companies building new features, expanding to new channels, or responding to what user data reveals after launch.",
  },
];

export default function LosAngelesPage() {
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
          <span className="text-[#a78bfa]">Los Angeles</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-4">
          🇺🇸 Los Angeles, CA · Software Development Company
        </p>
        <h1
          className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
        >
          Software Built for LA&apos;s{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Creative Economy</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          OrchiX is a software development company working with Los Angeles businesses across entertainment, e-commerce, media, and the creator economy. We build consumer-grade products, DTC platforms, and media tech software that meets the visual and performance standards LA&apos;s market demands — without the cost of a West Coast agency billing at West Coast rates.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <LocationCtaButton label="Start a Project in Los Angeles →" />
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

      {/* ── Why OrchiX for LA ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Why OrchiX for Los Angeles</p>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          What LA Businesses Need From{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">a Software Partner</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8] mb-14">
          <p>
            Los Angeles has a software problem that no other market has quite the same way. The products here are judged by their appearance as much as their function. A consumer app that works but looks dated doesn&apos;t survive. A DTC storefront that converts but feels cheap loses to a competitor that converts at 80% the rate but feels premium. Software in LA has to earn its place visually.
          </p>
          <p>
            At the same time, LA&apos;s entertainment and creator economy creates genuinely complex technical requirements — content rights management, multi-platform distribution, creator payout infrastructure, and the systems that handle traffic when a campaign lands. These aren&apos;t problems a website agency can solve.
          </p>
          <p className="text-[#f5f2eb] font-semibold">
            We build the software that sits at that intersection: technically capable, visually considered, built for the scale LA moments demand.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">for Los Angeles Businesses</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          Consumer apps, media platforms, DTC storefronts, and creator economy infrastructure — built with the performance and polish LA&apos;s market demands.
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">in Los Angeles</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          LA&apos;s economy is defined by entertainment, commerce, and culture. The software that powers these industries requires a different set of capabilities than enterprise back-office systems — and we&apos;ve built for all of them.
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
          From Creative Brief to{" "}
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">Los Angeles Businesses</span>
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
