"use client";

import PricingCalculator from "@/components/pricing-calculator";
import { useBooking } from "@/lib/booking-context";

const plans = [
  {
    name: "Starter",
    price: "$1,499",
    tagline: "Launch your digital presence",
    description:
      "A polished website or landing page built to convert — perfect for businesses ready to go online.",
    features: [
      "Up to 5 pages / screens",
      "Responsive, pixel-perfect design",
      "Basic SEO & performance setup",
      "Contact form & lead capture",
      "2 rounds of revision",
    ],
    cta: "Get Started",
    highlight: false,
    badge: null,
  },
  {
    name: "Business",
    price: "$4,999",
    tagline: "Your custom business system",
    description:
      "A tailored CRM, ERP module, or internal tool built around your workflows — replacing spreadsheets and off-the-shelf software.",
    features: [
      "Custom CRM / ERP / business tool",
      "Role-based access & dashboards",
      "Database design & migrations",
      "Third-party API integrations",
      "Workflow automation built-in",
      "3 rounds of revision",
    ],
    cta: "Most Popular",
    highlight: true,
    badge: "Best Value",
  },
  {
    name: "Enterprise",
    price: "$12,999+",
    tagline: "Full-scale enterprise platform",
    description:
      "Multi-module enterprise systems, SaaS platforms, or AI-powered products — for teams that need a dedicated technical partner.",
    features: [
      "Everything in Business",
      "Multi-tenant / SaaS architecture",
      "AI & intelligent automation",
      "Dedicated Slack channel",
      "Weekly progress calls",
      "60-day post-launch support",
    ],
    cta: "Book a Call",
    highlight: false,
    badge: null,
  },
];

export default function PricingSection() {
  const { openDialog } = useBooking();
  return (
    <section className="relative z-[2] max-w-[1200px] mx-auto px-[3rem] pt-[6rem] pb-[5rem] max-[1100px]:px-6 max-[1100px]:pt-16 max-[1100px]:pb-12 max-[600px]:px-4 max-[600px]:pt-12 max-[600px]:pb-8">
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,91,245,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="text-center mb-14 relative z-[1]">
        <span className="inline-block text-[0.7rem] uppercase tracking-[0.15em] font-semibold text-[#a78bfa] mb-4">
          Transparent Pricing
        </span>
        <h2
          className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb]"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          Simple pricing,{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">
            no surprises.
          </span>
        </h2>
        <p className="mt-4 text-[0.88rem] text-[#8a8680] max-w-[480px] mx-auto leading-[1.7]">
          Every project is fixed-price. You know the cost upfront — no hourly
          billing, no scope creep surprises.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1 max-[900px]:max-w-[480px] max-[900px]:mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`jelly-card relative flex flex-col rounded-[20px] overflow-hidden ${
              plan.highlight
                ? "border border-[rgba(124,91,245,0.5)] bg-[rgba(124,91,245,0.06)] shadow-[0_0_60px_rgba(124,91,245,0.18),0_0_0_1px_rgba(124,91,245,0.15)]"
                : "border border-[rgba(255,255,255,0.07)] bg-[rgba(14,14,14,0.9)]"
            }`}
          >
            {/* Top accent line for highlighted card */}
            {plan.highlight && (
              <div
                className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(124,91,245,0.8), transparent)",
                }}
                aria-hidden="true"
              />
            )}

            {/* Badge */}
            {plan.badge && (
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#7c5bf5] text-white text-[0.65rem] font-semibold tracking-[0.08em] uppercase">
                  <span
                    className="w-[5px] h-[5px] rounded-full bg-white opacity-80 animate-[blink_2s_ease-in-out_infinite]"
                    aria-hidden="true"
                  />
                  {plan.badge}
                </span>
              </div>
            )}

            <div className="px-7 pt-7 pb-6 flex flex-col flex-1">
              {/* Plan name + tagline */}
              <div className="mb-6">
                <p className="text-[0.7rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-2">
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1.5 mb-3 flex-wrap">
                  <span className="font-syne font-extrabold text-[2.6rem] leading-none tracking-[-0.04em] text-[#f5f2eb] max-[400px]:text-[2.2rem]">
                    {plan.price}
                  </span>
                  <span className="text-[0.78rem] text-[#8a8680]">
                    / project
                  </span>
                </div>
                <p className="text-[0.8rem] font-semibold text-[#c4bfb8] mb-1">
                  {plan.tagline}
                </p>
                <p className="text-[0.78rem] leading-[1.65] text-[#8a8680]">
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
              <div
                className={`w-full h-px mb-6 ${
                  plan.highlight
                    ? "bg-[rgba(124,91,245,0.2)]"
                    : "bg-[rgba(255,255,255,0.06)]"
                }`}
              />

              {/* Features */}
              <ul className="space-y-[10px] mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-[10px] text-[0.8rem] text-[#c4bfb8]"
                  >
                    <svg
                      className="shrink-0 mt-[2px]"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={plan.highlight ? "#a78bfa" : "#7c5bf5"}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={openDialog}
                className={`group/cta w-full inline-flex items-center justify-center gap-2 px-6 py-[0.85rem] rounded-full text-[0.85rem] font-semibold tracking-[0.02em] transition-all duration-300 cursor-pointer font-space-grotesk ${
                  plan.highlight
                    ? "bg-[#7c5bf5] text-white shadow-[0_0_30px_rgba(124,91,245,0.35)] hover:bg-[#6a4ae0] hover:shadow-[0_0_50px_rgba(124,91,245,0.5)] hover:-translate-y-[1px]"
                    : "bg-transparent border border-[rgba(255,255,255,0.14)] text-[#f5f2eb] hover:bg-[rgba(124,91,245,0.1)] hover:border-[rgba(124,91,245,0.35)]"
                }`}
              >
                {plan.cta}
                <svg
                  className="transition-transform duration-300 group-hover/cta:translate-x-[3px]"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* <PricingCalculator /> */}

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
