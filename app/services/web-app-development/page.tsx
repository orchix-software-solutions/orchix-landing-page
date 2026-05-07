import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import FaqAccordion from "./faq-accordion";
import CtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Web & App Development Services | OrchiX",
  description:
    "OrchiX builds scalable web and mobile applications — pixel-perfect, fast, and built to grow. Custom web development, iOS, Android, and cross-platform apps. Weekly demos, shared repos, zero lock-in.",
  keywords: [
    "web and app development",
    "custom web application development",
    "mobile app development services",
    "web and mobile app development company",
    "scalable web development",
    "custom app development India",
    "cross-platform app development",
    "React app development",
    "iOS app development",
    "Android app development",
    "progressive web app development",
    "full stack web development services",
  ],
  alternates: { canonical: "https://orchixsoftwaresolutions.com/services/web-app-development" },
  openGraph: {
    title: "Web & App Development Services | OrchiX Software Solutions",
    description:
      "OrchiX builds scalable web and mobile applications — pixel-perfect, fast, and built to grow. Custom web development, iOS, Android, and cross-platform apps.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/services/web-app-development",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX Software Solutions" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web & App Development",
  description:
    "OrchiX builds scalable web and mobile applications — pixel-perfect, fast, and built to grow. Custom web development, iOS, Android, and cross-platform apps.",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  serviceType: "Web & App Development",
  areaServed: "Worldwide",
  url: "https://orchixsoftwaresolutions.com/services/web-app-development",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://orchixsoftwaresolutions.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://orchixsoftwaresolutions.com/services" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Web & App Development",
        item: "https://orchixsoftwaresolutions.com/services/web-app-development",
      },
    ],
  },
};

const services = [
  {
    icon: "🖥️",
    title: "Custom Web Application Development",
    desc: "Not websites. Web applications — tools people log into, use daily, and depend on for real work. Clean component structure, well-documented APIs, and a codebase your team can actually hand off without a six-hour onboarding session.",
  },
  {
    icon: "📱",
    title: "Mobile App Development (iOS & Android)",
    desc: "Native iOS and Android when performance and platform features matter. Every app we ship is tested on real devices, not just simulators. That sounds obvious. It isn't always done.",
  },
  {
    icon: "🔀",
    title: "Cross-Platform App Development",
    desc: "One codebase, both platforms. We use React Native and Flutter where it makes sense and add native modules where it doesn't — so you're not paying for two codebases or compromising on user experience.",
  },
  {
    icon: "⚡",
    title: "Progressive Web Apps (PWA)",
    desc: "A web app that installs on a phone, works offline, and feels like a native app — without the App Store review cycle or the cost of a separate mobile build.",
  },
  {
    icon: "🎨",
    title: "Frontend Development & UI Implementation",
    desc: "Figma to production — without the interpretation layer where designs get adjusted because the developer found them difficult. Responsive across every breakpoint, consistent across every browser, smooth on every device.",
  },
  {
    icon: "📈",
    title: "Web App Performance Optimisation",
    desc: "We audit, profile, and fix: Core Web Vitals, server response times, bundle sizes, image optimization, caching strategy. The kind of work that makes a measurable difference to retention and SEO both.",
  },
];

const whyItems = [
  {
    icon: "🎯",
    title: "Pixel-Perfect Means Designers Sign Off",
    desc: "Not \"close enough.\" We QA against the original designs at every screen size before anything ships. Our developers work directly in Figma. Discrepancies are fixed — not logged as change requests.",
  },
  {
    icon: "🏗️",
    title: "Scalable Means 50x Your Current Load",
    desc: "Real scalability is about architecture decisions made early — database indexing, caching layers, stateless services, async processing. We document these so your next hire understands why things were built the way they were.",
  },
  {
    icon: "📅",
    title: "Weekly Demos, Real Redirects",
    desc: "Every Friday, a working build you can use. If a feature doesn't feel right in the actual product, you redirect it the following sprint — not after a six-month engagement ends.",
  },
  {
    icon: "📁",
    title: "Shared Repos, Zero Dependency",
    desc: "Your code lives in your GitHub organisation from the first commit. Bring development in-house, hand it to another agency, or give a technical co-founder access — without negotiating a handover.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Technical Scoping (Week 1)",
    desc: "We map the user flows, define the technical requirements, and agree on what success looks like. You get a scoping document in plain language — no jargon, no ambiguity about what's included.",
  },
  {
    num: "02",
    title: "Design Review & Architecture (Week 2)",
    desc: "We review designs for technical feasibility, flag anything that would create problems in development, and settle system architecture, component hierarchy, API contracts, and third-party integrations.",
  },
  {
    num: "03",
    title: "Sprint Build with Friday Demos (Weeks 3–12+)",
    desc: "Two-week sprints. Working demos every Friday. You test the product as it's being built, catch problems early, and give feedback that actually gets incorporated — not logged in a backlog for later.",
  },
  {
    num: "04",
    title: "QA on Real Devices",
    desc: "Cross-browser testing (Chrome, Safari, Firefox, Edge), cross-device testing on actual iOS and Android hardware, performance testing, accessibility audit (WCAG 2.1 AA), and security review.",
  },
  {
    num: "05",
    title: "Launch & Handover",
    desc: "Staged deployment, real-time error monitoring, and performance tracking set up before go-live. Full documentation of the codebase and deployment process — so any competent engineer can pick it up without calling us first.",
  },
];

const techStack = [
  { name: "React",              svg: "/svgs/react-svgrepo-com (1).svg" },
  { name: "Next.js",            svg: "/svgs/nextjs-svgrepo-com.svg" },
  { name: "TypeScript",         svg: "/svgs/typescript-official-svgrepo-com.svg" },
  { name: "Vue.js",             svg: "/svgs/vue-svgrepo-com.svg" },
  { name: "Node.js",            svg: "/svgs/nodejs-icon-logo-svgrepo-com.svg" },
  { name: "Python / FastAPI",   svg: "/svgs/python-svgrepo-com (1).svg" },
  { name: "Go",                 svg: "/svgs/go-svgrepo-com.svg" },
  { name: "PostgreSQL",         svg: "/svgs/postgresql-svgrepo-com.svg" },
  { name: "MongoDB",            svg: "/svgs/mongodb-svgrepo-com (1).svg" },
  { name: "Redis",              svg: "/svgs/redis-logo-svgrepo-com.svg" },
  { name: "AWS",                svg: "/svgs/aws-svgrepo-com (2).svg" },
  { name: "Microsoft Azure",    svg: "/svgs/azure-icon-svgrepo-com (1).svg" },
  { name: "Docker",             svg: "/svgs/docker-svgrepo-com.svg" },
  { name: "React Native",       svg: "/svgs/react-svgrepo-com (1).svg" },
  { name: "Flutter",            svg: null },
];

const industries = [
  { icon: "💳", title: "Fintech", desc: "Trading platforms, personal finance dashboards, lending portals, KYC flows. Performance and security treated as non-negotiable." },
  { icon: "🏥", title: "Healthcare", desc: "Patient portals, appointment booking, telemedicine apps, clinical tools. HIPAA-aware architecture built for non-technical users." },
  { icon: "🛍️", title: "eCommerce & Retail", desc: "Custom storefronts, B2B ordering portals, inventory management interfaces, loyalty apps. Fast checkout flows that hold during peak traffic." },
  { icon: "🚚", title: "Logistics & Field Ops", desc: "Driver apps, dispatch dashboards, real-time tracking, offline-capable field tools. Built to run on mid-range Android in poor network conditions." },
  { icon: "🏢", title: "SaaS & B2B Tools", desc: "The core product your customers log into every day. Multi-tenant, role-based, and designed to add features without breaking what's already there." },
  { icon: "📰", title: "Media & Content", desc: "High-traffic editorial platforms, content management tools, video streaming interfaces, subscription-gated content. Performance at scale is the whole job." },
];

export default function WebAppDevelopmentPage() {
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
          <span className="text-[#a78bfa]">Web &amp; App Development</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <h1 className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
          Web and Mobile Apps That{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Actually Work at Scale</span>
          {" "}— Not Just in the Demo
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[620px] mb-8">
          We build web applications and mobile apps that hold up under real traffic, look exactly like the design, and don&apos;t need a rewrite six months after launch. Weekly demos. Your repo. No surprises.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <CtaButton label="Start Your Project" />
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Pain Section ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">The Real Problem</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          Why Most Web and App{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Projects Go Wrong</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8]">
          <p>
            You briefed the agency. They built something. It looked fine in staging. Then real users showed up. The app slowed to a crawl on Android. The checkout flow broke on Safari. The mobile layout fell apart on a screen size nobody tested. And every fix took two weeks and a new estimate.
          </p>
          <p>
            Most web and app projects fail gradually. The first release looks okay. But the codebase is messy, the performance was never properly tested, and the design got &quot;interpreted&quot; along the way instead of actually implemented.
          </p>
          <p className="text-[#f5f2eb] font-semibold">We work differently.</p>
          <p>
            You see a working build every Friday. Not a progress update — an actual clickable product. You can test it, break it, and redirect it before two months of work goes in the wrong direction. When we say pixel-perfect, we mean your designers can open the live product next to the Figma file and find them identical.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Services Grid ── */}
      <section id="services" className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">What We Build</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          Custom{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Web &amp; Mobile App</span>{" "}
          Development Services
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          From internal tools to consumer-facing apps — we cover the full spectrum of web and mobile development, built around your users and your scale.
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
              What &ldquo;Pixel-Perfect&rdquo;<br />
              <span className="font-playfair italic font-normal text-[#a78bfa]">Actually Means Here</span>
            </h2>
            <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] mb-8">
              Every agency uses these words. Here&apos;s what they specifically mean when we say them.
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
              How We Build{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">Web &amp; Mobile Apps</span>
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

      {/* ── Tech Stack ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 text-center max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Technology</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          The Stack{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">We Work With</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[540px] mx-auto mb-10">
          We don&apos;t push a single stack on every project. The right technology depends on your performance requirements, your team&apos;s existing skills, and what you&apos;re building.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center gap-3 w-[120px] h-[110px] rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] transition-all duration-300 hover:border-[rgba(124,91,245,0.4)] hover:bg-[rgba(124,91,245,0.06)] hover:shadow-[0_0_24px_rgba(124,91,245,0.1)] hover:-translate-y-0.5 cursor-default"
            >
              {tech.svg ? (
                <img src={tech.svg} alt={tech.name} className="w-10 h-10 object-contain" />
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
          Web &amp; App Development{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Across Industries</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[540px] mb-12">
          Every industry has different performance, compliance, and user experience requirements. We build for those specifics — not a generic template.
        </p>
        <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] p-6 transition-all duration-200 hover:border-[rgba(124,91,245,0.35)] hover:-translate-y-1"
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">Web &amp; App Development</span>
        </h2>
        <FaqAccordion />
      </section>
    </main>
  );
}
