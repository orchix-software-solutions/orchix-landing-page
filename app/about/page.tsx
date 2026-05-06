import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  title: "About OrchiX — Our Story, Mission & Founder",
  description:
    "OrchiX was founded by Parit Bhardwaj to build enterprise software differently — radical transparency, shared repos, weekly demos, and deadlines that actually mean something.",
  alternates: { canonical: "https://orchixsoftwaresolutions.com/about" },
  openGraph: {
    title: "About OrchiX — Our Story, Mission & Founder",
    description:
      "OrchiX was founded by Parit Bhardwaj to build enterprise software differently — radical transparency, shared repos, weekly demos, and deadlines that actually mean something.",
    url: "https://orchixsoftwaresolutions.com/about",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630 }],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://orchixsoftwaresolutions.com/about/#webpage",
  url: "https://orchixsoftwaresolutions.com/about",
  name: "About OrchiX — Our Story, Mission & Founder",
  description:
    "OrchiX was founded by Parit Bhardwaj to build enterprise software with radical transparency.",
  isPartOf: { "@id": "https://orchixsoftwaresolutions.com/#website" },
  about: { "@id": "https://orchixsoftwaresolutions.com/#organization" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://orchixsoftwaresolutions.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://orchixsoftwaresolutions.com/about" },
    ],
  },
};

const values = [
  {
    title: "Radical Transparency",
    desc: "You get access to the repo, weekly demos you can touch, and real progress updates — not status meetings with slides.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
  {
    title: "Deadlines We Actually Hit",
    desc: "We scope tightly, communicate early, and deliver on time. If something changes, you hear it from us first — not after the fact.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Long-Term Partnership",
    desc: "We don't vanish after the invoice. Every project ends with documentation, handover, and an open door if you ever need us.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Built to Scale",
    desc: "Everything we build is production-grade — clean architecture, tested code, and infrastructure that can grow with your business.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
];

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "5+", label: "Years of Experience" },
  { value: "4.9★", label: "Avg. Client Rating" },
  { value: "100%", label: "On-time Delivery" },
];

export default function AboutPage() {
  return (
    <main className="flex-1 bg-[#0a0a0a] text-[#f5f2eb]">
      <JsonLd schema={aboutSchema} />

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-[1fr_420px] gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-10">
          {/* Left — text */}
          <div>
            <h1
              className="font-syne font-extrabold tracking-[-0.04em] leading-[1.1] text-[#f5f2eb] mb-6"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}
            >
              We build software<br />
              <span className="font-playfair italic font-normal text-[#a78bfa]">the honest way.</span>
            </h1>
            <p className="text-[0.95rem] leading-[1.85] text-[#8a8680] mb-5 max-w-[540px]">
              OrchiX was founded in 2026 by Parit Bhardwaj after years of watching great client ideas get buried by agencies that overpromise, underdeliver, and vanish after the invoice.
            </p>
            <p className="text-[0.95rem] leading-[1.85] text-[#8a8680] mb-8 max-w-[540px]">
              We&apos;re a boutique software agency specialising in enterprise applications, CRMs, ERPs, SaaS products, and AI systems. Every client gets shared access to their repo, weekly demos, and a founder who actually picks up the phone.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 max-[480px]:grid-cols-2">
              {stats.map((s) => (
                <div key={s.label} className="rounded-[14px] border border-[rgba(255,255,255,0.07)] bg-[rgba(14,14,14,0.9)] px-5 py-4">
                  <p className="font-syne font-extrabold tracking-[-0.03em] text-[#a78bfa] leading-none mb-1" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                    {s.value}
                  </p>
                  <p className="text-[0.72rem] text-[#8a8680]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — founder card */}
          <div className="relative rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[#111111] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(124,91,245,0.7), transparent)" }} aria-hidden="true" />
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/parit-bhardwaj-orchix-founder.jpg"
                alt="Parit Bhardwaj — Founder of OrchiX Software Solutions"
                fill
                className="object-cover object-top"
                sizes="(max-width: 900px) 100vw, 420px"
                priority
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(10,10,10,0.95) 100%)" }} />
            </div>
            <div className="px-6 py-6">
              <p className="font-syne font-bold text-[1rem] text-[#f5f2eb] mb-0.5">Parit Bhardwaj</p>
              <p className="text-[0.72rem] text-[#a78bfa] font-semibold tracking-[0.05em] mb-3">Founder & Lead Engineer</p>
              <p className="text-[0.82rem] leading-[1.7] text-[#8a8680] italic">
                &ldquo;I review every project personally. When you work with OrchiX, you work with me — not a project manager three layers removed.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a href="https://www.linkedin.com/in/paritbhardwaj/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center border border-[rgba(124,91,245,0.25)] bg-[rgba(124,91,245,0.08)] text-[#a78bfa] hover:bg-[rgba(124,91,245,0.18)] transition-colors duration-200">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-label="LinkedIn"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://x.com/whynotparit" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center border border-[rgba(124,91,245,0.25)] bg-[rgba(124,91,245,0.08)] text-[#a78bfa] hover:bg-[rgba(124,91,245,0.18)] transition-colors duration-200">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-label="X / Twitter"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-[rgba(255,255,255,0.05)] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[0.68rem] uppercase tracking-[0.15em] font-semibold text-[#a78bfa] mb-3 block">How We Work</span>
            <h2 className="font-syne font-extrabold tracking-[-0.03em] text-[#f5f2eb]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Our values aren&apos;t{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">wall art.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-5 max-[640px]:grid-cols-1">
            {values.map((v) => (
              <div key={v.title} className="rounded-[18px] border border-[rgba(255,255,255,0.07)] bg-[rgba(14,14,14,0.9)] px-6 py-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border border-[rgba(124,91,245,0.2)] bg-[rgba(124,91,245,0.08)]">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={v.icon} />
                  </svg>
                </div>
                <h3 className="font-syne font-bold text-[0.95rem] text-[#f5f2eb] mb-2 tracking-[-0.01em]">{v.title}</h3>
                <p className="text-[0.82rem] leading-[1.75] text-[#8a8680]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <p className="text-[0.88rem] text-[#8a8680] mb-3">Ready to work with a team that actually delivers?</p>
          <h2 className="font-syne font-extrabold text-[1.6rem] tracking-[-0.03em] text-[#f5f2eb] mb-6">
            Let&apos;s build something{" "}
            <span className="font-playfair italic font-normal text-[#a78bfa]">real.</span>
          </h2>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-[0.9rem] bg-[#7c5bf5] text-white text-[0.88rem] font-semibold rounded-full tracking-[0.02em] transition-all duration-300 no-underline shadow-[0_0_30px_rgba(124,91,245,0.35)] hover:bg-[#6a4ae0] hover:shadow-[0_0_55px_rgba(124,91,245,0.5)] hover:-translate-y-[1px]"
            >
              Get in Touch
              <svg className="transition-transform duration-300 group-hover:translate-x-[3px]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
