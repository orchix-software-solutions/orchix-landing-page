"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Industry = {
  title: string;
  desc: string;
  icon: string;
  accent: string;
  slug: string;
};

function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  return (
    <motion.div
      id={industry.slug}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
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

        <p className="text-[0.82rem] leading-[1.75] text-[#8a8680]">{industry.desc}</p>
      </div>
    </motion.div>
  );
}

export function IndustriesGrid({ industries }: { industries: Industry[] }) {
  return (
    <div className="grid grid-cols-2 gap-5 max-[700px]:grid-cols-1">
      {industries.map((industry, i) => (
        <IndustryCard key={industry.slug} industry={industry} index={i} />
      ))}
    </div>
  );
}

export function IndustriesCta() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative border-t border-[rgba(255,255,255,0.05)] py-28 overflow-hidden">
      {/* Ambient glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-[600px] h-[300px] rounded-full bg-[#7c5bf5] opacity-[0.07] blur-[90px]" />
      </motion.div>

      <div className="relative max-w-[720px] mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(124,91,245,0.3)] bg-[rgba(124,91,245,0.07)] mb-7"
        >
          <span className="w-[5px] h-[5px] rounded-full bg-[#7c5bf5]" aria-hidden="true" />
          <span className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-[#a78bfa]">Don&apos;t see your industry?</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="font-syne font-extrabold tracking-[-0.04em] leading-[1.1] text-[#f5f2eb] mb-5"
          style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
        >
          If there&apos;s a problem worth{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">solving,</span>
          <br />we&apos;ll learn your domain.
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="text-[0.88rem] leading-[1.85] text-[#8a8680] mb-10 max-w-[480px] mx-auto"
        >
          We don&apos;t need to have shipped in your vertical to understand it.
          Give us a week and we&apos;ll know your workflow well enough to build for it.
        </motion.p>
      </div>
    </section>
  );
}
