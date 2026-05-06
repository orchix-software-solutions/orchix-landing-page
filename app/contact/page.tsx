import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact OrchiX — Book a Call or Send a Message",
  description:
    "Have a project in mind? Reach out to OrchiX. Book a free discovery call, email us directly, or drop a message — Parit responds personally within 24 hours.",
  alternates: { canonical: "https://orchixsoftwaresolutions.com/contact" },
  openGraph: {
    title: "Contact OrchiX — Book a Call or Send a Message",
    description:
      "Have a project in mind? Reach out to OrchiX. Book a free discovery call, email us directly, or drop a message — Parit responds personally within 24 hours.",
    url: "https://orchixsoftwaresolutions.com/contact",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630 }],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://orchixsoftwaresolutions.com/contact/#webpage",
  url: "https://orchixsoftwaresolutions.com/contact",
  name: "Contact OrchiX — Book a Call or Send a Message",
  description: "Reach out to OrchiX Software Solutions. Book a discovery call or send a message.",
  isPartOf: { "@id": "https://orchixsoftwaresolutions.com/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://orchixsoftwaresolutions.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://orchixsoftwaresolutions.com/contact" },
    ],
  },
};

const channels: { label: string; value: string; href: string | null; note: string; svg: ReactNode }[] = [
  {
    label: "Email",
    value: "hey@orchixsoftwaresolutions.com",
    href: "mailto:hey@orchixsoftwaresolutions.com",
    note: "Reply within 24 hours",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "India — serving clients worldwide",
    href: null,
    note: "Remote-first, globally available",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "OrchiX Software Solutions",
    href: "https://www.linkedin.com/company/orchix-software-solutions/",
    note: "Connect with us",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="flex-1 bg-[#0a0a0a] text-[#f5f2eb]">
      <JsonLd schema={contactSchema} />

      <div className="max-w-[1200px] mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="mb-14 max-w-[560px]">
          <h1
            className="font-syne font-extrabold tracking-[-0.04em] leading-[1.1] text-[#f5f2eb] mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Let&apos;s talk about{" "}
            <span className="font-playfair italic font-normal text-[#a78bfa]">your project.</span>
          </h1>
          <p className="text-[0.95rem] leading-[1.8] text-[#8a8680]">
            Whether you have a detailed brief or just an idea — reach out. Parit will personally review every message and respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-[1fr_400px] gap-10 max-[900px]:grid-cols-1">
          {/* Left — form */}
          <ContactForm />

          {/* Right — contact info */}
          <div className="space-y-4">
            {/* Channel cards */}
            {channels.map((c) => (
              <div
                key={c.label}
                className="rounded-[16px] border border-[rgba(255,255,255,0.07)] bg-[rgba(14,14,14,0.9)] px-5 py-5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-[rgba(124,91,245,0.2)] bg-[rgba(124,91,245,0.08)] shrink-0">
                    {c.svg}
                  </div>
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#8a8680] mb-0.5">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-[0.88rem] font-medium text-[#f5f2eb] hover:text-[#a78bfa] transition-colors duration-200 no-underline">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-[0.88rem] font-medium text-[#f5f2eb]">{c.value}</p>
                    )}
                    <p className="text-[0.7rem] text-[#8a8680] mt-0.5">{c.note}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Founder note */}
            <div className="rounded-[16px] border border-[rgba(124,91,245,0.15)] bg-[rgba(124,91,245,0.05)] px-5 py-5">
              <div className="flex items-start gap-3">
                <img
                  src="/parit-bhardwaj-orchix-founder.jpg"
                  alt="Parit Bhardwaj"
                  className="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-[rgba(124,91,245,0.4)]"
                />
                <div>
                  <p className="text-[0.8rem] leading-[1.65] text-[#c4bfb8] italic">
                    &ldquo;I read every message myself. No ticket system, no bot — just me, responding directly.&rdquo;
                  </p>
                  <p className="mt-1.5 text-[0.68rem] font-semibold text-[#a78bfa] tracking-[0.05em]">
                    Parit Bhardwaj &mdash; Founder, OrchiX
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="rounded-[16px] border border-[rgba(255,255,255,0.07)] bg-[rgba(14,14,14,0.9)] px-5 py-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#8a8680] mb-3">Follow Us</p>
              <div className="flex items-center gap-2">
                {[
                  { href: "https://www.linkedin.com/in/paritbhardwaj/", label: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" },
                  { href: "https://github.com/orchix-software-solutions", label: "GitHub", icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" },
                  { href: "https://www.instagram.com/orchixsoftwaresolutions", label: "Instagram", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01 M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2z" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center border border-[rgba(124,91,245,0.2)] bg-[rgba(124,91,245,0.07)] text-[#a78bfa] hover:bg-[rgba(124,91,245,0.18)] hover:border-[rgba(124,91,245,0.35)] transition-all duration-200"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={s.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>
    </main>
  );
}
