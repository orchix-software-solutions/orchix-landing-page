"use client";

import Link from "next/link";
import { CASE_STUDIES, CaseStudy } from "@/lib/case-studies-data";

/* ── Shared mockup visual ─────────────────────────── */
function Mockup({ accent, tall }: { accent: string; tall?: boolean }) {
  return (
    <div
      className={`relative w-full ${tall ? "h-[220px]" : "h-[140px]"} overflow-hidden rounded-xl border border-[rgba(255,255,255,0.07)]`}
      style={{ background: `linear-gradient(135deg, ${accent}14 0%, #0a0a0a 100%)` }}
    >
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[rgba(255,255,255,0.05)]">
        <span className="w-2 h-2 rounded-full bg-[#ff5f57] opacity-70" />
        <span className="w-2 h-2 rounded-full bg-[#febc2e] opacity-70" />
        <span className="w-2 h-2 rounded-full bg-[#28c840] opacity-70" />
        <div className="flex-1 h-3 rounded-full bg-[rgba(255,255,255,0.04)] mx-2" />
      </div>
      {/* Dashboard rows */}
      <div className="px-3 pt-3 space-y-2">
        <div className="flex gap-2">
          <div className="h-3 rounded bg-[rgba(255,255,255,0.05)] w-1/3" />
          <div className="h-3 rounded w-1/4" style={{ background: `${accent}30` }} />
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {[0.6, 1, 0.4].map((o, i) => (
            <div key={i} className="h-12 rounded-lg border border-[rgba(255,255,255,0.05)]"
              style={{ background: i === 1 ? `${accent}16` : "rgba(255,255,255,0.02)", opacity: o }} />
          ))}
        </div>
        {tall && (
          <div className="h-10 rounded-lg mt-1"
            style={{ background: `linear-gradient(90deg, ${accent}12, transparent)` }} />
        )}
      </div>
      {/* Play overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/cs:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[rgba(255,255,255,0.15)]"
          style={{ background: `${accent}bb` }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
        </div>
      </div>
    </div>
  );
}

/* ── Featured card (large left) ──────────────────── */
function FeaturedCard({ cs, index }: { cs: CaseStudy; index: number }) {
  return (
    <Link
      href={`/case-studies/${cs.slug}`}
      className="group/cs relative flex flex-col rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[rgba(12,12,12,0.95)] overflow-hidden no-underline transition-all duration-500 hover:border-[rgba(124,91,245,0.25)] hover:shadow-[0_0_60px_rgba(124,91,245,0.12)]"
    >
      {/* Top colour strip */}
      <div className="h-[2px] shrink-0" style={{ background: `linear-gradient(90deg, ${cs.accent}, transparent 70%)` }} />

      {/* Decorative index */}
      <div
        className="absolute top-5 right-6 font-syne font-extrabold text-[4rem] leading-none tracking-[-0.05em] select-none pointer-events-none opacity-[0.06]"
        style={{ color: cs.accent }}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="p-7 flex flex-col gap-5 flex-1">
        {/* Meta row */}
        <div className="flex items-center justify-between gap-4">
          <span
            className="text-[0.62rem] uppercase tracking-[0.14em] font-semibold px-2.5 py-1 rounded-full border"
            style={{ color: cs.accent, borderColor: `${cs.accent}35`, background: `${cs.accent}0e` }}
          >
            {cs.tag}
          </span>
          <span className="text-[0.65rem] text-[#8a8680] tabular-nums">{cs.year}</span>
        </div>

        {/* Mockup */}
        <Mockup accent={cs.accent} tall />

        {/* Title */}
        <h3
          className="font-syne font-extrabold leading-[1.2] tracking-[-0.03em] text-[#f5f2eb] group-hover/cs:text-[#c4b5fd] transition-colors duration-300"
          style={{ fontSize: "clamp(1.2rem, 2vw, 1.55rem)" }}
        >
          {cs.title}
        </h3>

        <p className="text-[0.8rem] leading-[1.75] text-[#8a8680]">{cs.shortDesc}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[rgba(255,255,255,0.06)]">
          {cs.metrics.map((m) => (
            <div key={m.label}>
              <p className="font-syne font-extrabold text-[1.3rem] tracking-[-0.04em] leading-none mb-1" style={{ color: cs.accent }}>
                {m.value}
              </p>
              <p className="text-[0.62rem] text-[#8a8680] leading-[1.4]">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(cs.videoUrl, "_blank"); }}
            className="inline-flex items-center gap-1.5 text-[0.72rem] font-semibold transition-opacity duration-200 hover:opacity-70"
            style={{ color: cs.accent }}
          >
            <span className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: `${cs.accent}22`, border: `1px solid ${cs.accent}44` }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
            </span>
            Watch demo
          </button>
          <span className="inline-flex items-center gap-1 text-[0.72rem] font-semibold text-[#8a8680] group-hover/cs:text-[#a78bfa] transition-colors duration-300">
            View case study
            <svg className="transition-transform duration-300 group-hover/cs:translate-x-[3px]" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ── Compact card (right column) ─────────────────── */
function CompactCard({ cs, index }: { cs: CaseStudy; index: number }) {
  return (
    <Link
      href={`/case-studies/${cs.slug}`}
      className="group/cs relative flex flex-col rounded-[20px] border border-[rgba(255,255,255,0.07)] bg-[rgba(12,12,12,0.95)] overflow-hidden no-underline transition-all duration-500 hover:border-[rgba(124,91,245,0.22)] hover:shadow-[0_0_40px_rgba(124,91,245,0.1)] flex-1"
    >
      <div className="h-[2px] shrink-0" style={{ background: `linear-gradient(90deg, ${cs.accent}, transparent 70%)` }} />

      {/* Decorative index */}
      <div
        className="absolute top-4 right-5 font-syne font-extrabold text-[3rem] leading-none tracking-[-0.05em] select-none pointer-events-none opacity-[0.06]"
        style={{ color: cs.accent }}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Meta */}
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="text-[0.6rem] uppercase tracking-[0.13em] font-semibold px-2 py-[3px] rounded-full border"
            style={{ color: cs.accent, borderColor: `${cs.accent}35`, background: `${cs.accent}0e` }}
          >
            {cs.tag}
          </span>
          <span className="text-[0.62rem] text-[#8a8680] ml-auto tabular-nums">{cs.year}</span>
        </div>

        {/* Mockup */}
        <Mockup accent={cs.accent} />

        {/* Title */}
        <h3 className="font-syne font-bold text-[0.95rem] leading-[1.3] tracking-[-0.02em] text-[#f5f2eb] group-hover/cs:text-[#c4b5fd] transition-colors duration-300">
          {cs.title}
        </h3>

        {/* Metrics — inline row */}
        <div className="flex items-center gap-4 pt-3 border-t border-[rgba(255,255,255,0.06)]">
          {cs.metrics.slice(0, 2).map((m) => (
            <div key={m.label}>
              <p className="font-syne font-extrabold text-[1rem] tracking-[-0.03em] leading-none" style={{ color: cs.accent }}>
                {m.value}
              </p>
              <p className="text-[0.6rem] text-[#8a8680] mt-0.5">{m.label}</p>
            </div>
          ))}
          <span className="ml-auto inline-flex items-center gap-1 text-[0.68rem] font-semibold text-[#8a8680] group-hover/cs:text-[#a78bfa] transition-colors duration-300 shrink-0">
            View
            <svg className="transition-transform duration-300 group-hover/cs:translate-x-[3px]" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ── Section ──────────────────────────────────────── */
export default function CaseStudiesSection() {
  const [featured, ...rest] = CASE_STUDIES;

  return (
    <section className="relative z-[2] max-w-[1200px] mx-auto px-[3rem] pt-[6rem] pb-[5rem] max-[1100px]:px-6 max-[1100px]:pt-16 max-[1100px]:pb-12 max-[600px]:px-4 max-[600px]:pt-12 max-[600px]:pb-8">

      {/* Background large ghost text */}
      <div
        className="absolute -top-4 left-0 font-syne font-extrabold text-[clamp(4rem,10vw,9rem)] leading-none tracking-[-0.05em] select-none pointer-events-none opacity-[0.025] uppercase"
        aria-hidden="true"
      >
        Work
      </div>

      {/* Header */}
      <div className="flex items-end justify-between gap-6 mb-10 flex-wrap relative z-[1]">
        <div>
          <span className="inline-block text-[0.7rem] uppercase tracking-[0.15em] font-semibold text-[#a78bfa] mb-3">
            Case Studies
          </span>
          <h2
            className="font-syne font-extrabold tracking-[-0.04em] leading-[1.1] text-[#f5f2eb]"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)" }}
          >
            Real clients.{" "}
            <span className="font-playfair italic font-normal text-[#a78bfa]">Real results.</span>
          </h2>
        </div>
        <Link
          href="/case-studies"
          className="group inline-flex items-center gap-2 text-[0.8rem] font-semibold text-[#8a8680] hover:text-[#a78bfa] transition-colors duration-200 no-underline shrink-0"
        >
          All case studies
          <svg className="transition-transform duration-300 group-hover:translate-x-[3px]" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Editorial grid: featured left, stacked right */}
      <div className="grid grid-cols-[1fr_340px] gap-5 max-[900px]:grid-cols-1">
        <FeaturedCard cs={featured} index={0} />

        <div className="flex flex-col gap-5 max-[900px]:grid max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {rest.map((cs, i) => (
            <CompactCard key={cs.slug} cs={cs} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
