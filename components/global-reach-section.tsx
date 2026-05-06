"use client";

export default function GlobalReachSection() {
  return (
    <section className="relative z-[2] overflow-hidden py-[5rem] max-[600px]:py-12">

      {/* Top / bottom rules */}
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(124,91,245,0.25),transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(124,91,245,0.25),transparent)" }} />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(124,91,245,0.07) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-[3rem] max-[1100px]:px-6 max-[600px]:px-4">

        {/* Main statement */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.16em] font-semibold text-[#a78bfa] mb-5">
            <span className="w-5 h-px bg-[rgba(124,91,245,0.6)]" />
            Who We Build For
            <span className="w-5 h-px bg-[rgba(124,91,245,0.6)]" />
          </span>

          <h2
            className="font-syne font-extrabold tracking-[-0.04em] leading-[1.1] text-[#f5f2eb] mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            We onboard clients from{" "}
            <span className="font-playfair italic font-normal text-[#a78bfa]">
              every corner of the world.
            </span>
          </h2>

          <p className="text-[0.88rem] text-[#8a8680] max-w-[500px] mx-auto leading-[1.8]">
            Timezone doesn&apos;t matter. Industry doesn&apos;t limit us. If you have a real problem worth solving, we want to build it with you.
          </p>
        </div>

      </div>
    </section>
  );
}
