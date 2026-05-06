"use client";

import { useState, useMemo } from "react";

/* ─── Data ─────────────────────────────────────────────── */

const APP_TYPES = [
  {
    id: "simple",
    label: "Simple",
    sublabel: "Landing page / brochure site",
    base: 1299,
    moduleLimit: 3,
  },
  {
    id: "standard",
    label: "Standard",
    sublabel: "Web app / SaaS MVP",
    base: 2999,
    moduleLimit: 5,
  },
  {
    id: "complex",
    label: "Complex",
    sublabel: "Full product / multi-feature SaaS",
    base: 7999,
    moduleLimit: 10,
  },
] as const;

type AppTypeId = (typeof APP_TYPES)[number]["id"];

const MODULES = [
  { id: "auth", label: "User Authentication & Sessions", price: 300 },
  { id: "oauth", label: "Social Login (OAuth / SSO)", price: 200 },
  { id: "payments", label: "Payment Processing", price: 500 },
  { id: "email", label: "Email & Notifications", price: 250 },
  { id: "files", label: "File Upload & Storage", price: 300 },
  { id: "realtime", label: "Real-time Features (WebSockets)", price: 600 },
  { id: "analytics", label: "Analytics Dashboard", price: 400 },
  { id: "search", label: "Search & Filtering", price: 250 },
  { id: "api", label: "Third-party API Integrations", price: 350 },
  { id: "reports", label: "Reporting & Data Exports", price: 350 },
];

const ADMIN_OPTIONS = [
  { id: "none", label: "No Admin Panel", price: 0 },
  { id: "basic", label: "Basic (CRUD + user management)", price: 400 },
  { id: "advanced", label: "Advanced (analytics + role permissions)", price: 800 },
];

const ROLES_OPTIONS = [
  { id: "1-2", label: "1–2 roles", price: 0 },
  { id: "3-5", label: "3–5 roles", price: 300 },
  { id: "6plus", label: "6+ roles", price: 600 },
];

const ARCHITECTURE_OPTIONS = [
  {
    id: "single",
    label: "Single-tenant",
    sublabel: "One instance per client",
    price: 0,
  },
  {
    id: "multi",
    label: "Multi-tenant",
    sublabel: "Shared infra, isolated data",
    price: 1200,
  },
];

const TIMELINE_OPTIONS = [
  { id: "flexible", label: "Flexible", sublabel: "6+ weeks", rush: 0 },
  { id: "standard", label: "Standard", sublabel: "3–5 weeks", rush: 0 },
  { id: "rush", label: "Rush", sublabel: "~2 weeks", rush: 600 },
  { id: "express", label: "Express", sublabel: "~1 week", rush: 1500 },
];

/* ─── Sub-components ────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.68rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">
      {children}
    </p>
  );
}

function CheckRow({
  checked,
  onChange,
  label,
  price,
  disabled,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
  price: number;
  disabled?: boolean;
}) {
  return (
    <label
      className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer select-none ${
        disabled && !checked
          ? "opacity-40 cursor-not-allowed border-[rgba(255,255,255,0.04)] bg-transparent"
          : checked
          ? "border-[rgba(124,91,245,0.4)] bg-[rgba(124,91,245,0.08)]"
          : "border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(124,91,245,0.25)] hover:bg-[rgba(124,91,245,0.04)]"
      }`}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        {/* Custom checkbox */}
        <div
          className={`w-4 h-4 shrink-0 rounded-[4px] border flex items-center justify-center transition-all duration-200 ${
            checked
              ? "bg-[#7c5bf5] border-[#7c5bf5]"
              : "border-[rgba(255,255,255,0.2)] bg-transparent"
          }`}
          onClick={disabled && !checked ? undefined : onChange}
        >
          {checked && (
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          )}
        </div>
        <span className="text-[0.8rem] text-[#c4bfb8] truncate">{label}</span>
      </div>
      <span className="text-[0.75rem] font-semibold text-[#a78bfa] shrink-0">
        +${price.toLocaleString()}
      </span>
    </label>
  );
}

function RadioRow({
  selected,
  onSelect,
  label,
  sublabel,
  price,
  highlight,
}: {
  selected: boolean;
  onSelect: () => void;
  label: string;
  sublabel?: string;
  price?: number;
  highlight?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl border text-left transition-all duration-200 ${
        selected
          ? "border-[rgba(124,91,245,0.4)] bg-[rgba(124,91,245,0.08)]"
          : "border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(124,91,245,0.25)] hover:bg-[rgba(124,91,245,0.04)]"
      }`}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        {/* Radio dot */}
        <div
          className={`w-4 h-4 shrink-0 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            selected ? "border-[#7c5bf5]" : "border-[rgba(255,255,255,0.2)]"
          }`}
        >
          {selected && <div className="w-1.5 h-1.5 rounded-full bg-[#7c5bf5]" />}
        </div>
        <div className="min-w-0">
          <span className="text-[0.8rem] text-[#c4bfb8]">{label}</span>
          {sublabel && (
            <span className="text-[0.7rem] text-[#8a8680] ml-1.5">{sublabel}</span>
          )}
        </div>
      </div>
      {price !== undefined && (
        <span className={`text-[0.75rem] font-semibold shrink-0 ${highlight ? "text-[#a78bfa]" : price === 0 ? "text-[#8a8680]" : "text-[#a78bfa]"}`}>
          {price === 0 ? "Included" : `+$${price.toLocaleString()}`}
        </span>
      )}
    </button>
  );
}

/* ─── Main Component ────────────────────────────────────── */

export default function PricingCalculator() {
  const [appType, setAppType] = useState<AppTypeId>("standard");
  const [selectedModules, setSelectedModules] = useState<Set<string>>(new Set());
  const [adminPanel, setAdminPanel] = useState("none");
  const [roles, setRoles] = useState("1-2");
  const [architecture, setArchitecture] = useState("single");
  const [timeline, setTimeline] = useState("standard");

  const currentType = APP_TYPES.find((t) => t.id === appType)!;
  const moduleLimit = currentType.moduleLimit;

  const toggleModule = (id: string) => {
    setSelectedModules((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (next.size >= moduleLimit) return prev; // limit reached
        next.add(id);
      }
      return next;
    });
  };

  // Clear excess modules when app type changes
  const handleAppTypeChange = (id: AppTypeId) => {
    const newType = APP_TYPES.find((t) => t.id === id)!;
    setAppType(id);
    if (selectedModules.size > newType.moduleLimit) {
      const kept = [...selectedModules].slice(0, newType.moduleLimit);
      setSelectedModules(new Set(kept));
    }
  };

  const breakdown = useMemo(() => {
    const base = currentType.base;
    const modulesTotal = MODULES.filter((m) => selectedModules.has(m.id)).reduce(
      (s, m) => s + m.price,
      0
    );
    const adminPrice = ADMIN_OPTIONS.find((a) => a.id === adminPanel)?.price ?? 0;
    const rolesPrice = ROLES_OPTIONS.find((r) => r.id === roles)?.price ?? 0;
    const archPrice = ARCHITECTURE_OPTIONS.find((a) => a.id === architecture)?.price ?? 0;
    const rushPrice = TIMELINE_OPTIONS.find((t) => t.id === timeline)?.rush ?? 0;

    return { base, modulesTotal, adminPrice, rolesPrice, archPrice, rushPrice };
  }, [appType, selectedModules, adminPanel, roles, architecture, timeline, currentType.base]);

  const total =
    breakdown.base +
    breakdown.modulesTotal +
    breakdown.adminPrice +
    breakdown.rolesPrice +
    breakdown.archPrice +
    breakdown.rushPrice;

  return (
    <div className="mt-14 relative">
      {/* Section heading */}
      <div className="text-center mb-8">
        <span className="inline-block text-[0.7rem] uppercase tracking-[0.15em] font-semibold text-[#a78bfa] mb-3">
          Project Estimator
        </span>
        <h3
          className="font-syne font-extrabold tracking-[-0.03em] text-[#f5f2eb]"
          style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
        >
          Build your{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">
            custom quote.
          </span>
        </h3>
        <p className="mt-2 text-[0.82rem] text-[#8a8680] max-w-[420px] mx-auto">
          Configure your project and get an instant estimate — no sign-up needed.
        </p>
      </div>

      <div className="flex gap-6 items-start max-[900px]:flex-col">
        {/* ── Left: Options ── */}
        <div className="flex-1 space-y-6 min-w-0">

          {/* App Type */}
          <div className="rounded-[16px] border border-[rgba(255,255,255,0.07)] bg-[rgba(14,14,14,0.9)] px-5 py-5">
            <SectionLabel>1. Application Type</SectionLabel>
            <div className="space-y-2">
              {APP_TYPES.map((type) => (
                <RadioRow
                  key={type.id}
                  selected={appType === type.id}
                  onSelect={() => handleAppTypeChange(type.id)}
                  label={type.label}
                  sublabel={`— ${type.sublabel}`}
                  price={type.base}
                />
              ))}
            </div>
          </div>

          {/* Modules */}
          <div className="rounded-[16px] border border-[rgba(255,255,255,0.07)] bg-[rgba(14,14,14,0.9)] px-5 py-5">
            <div className="flex items-center justify-between mb-3">
              <SectionLabel>2. Modules</SectionLabel>
              <span className="text-[0.68rem] text-[#8a8680] mb-3">
                {selectedModules.size} / {moduleLimit} selected
              </span>
            </div>
            <div className="space-y-2">
              {MODULES.map((mod) => (
                <CheckRow
                  key={mod.id}
                  checked={selectedModules.has(mod.id)}
                  onChange={() => toggleModule(mod.id)}
                  label={mod.label}
                  price={mod.price}
                  disabled={!selectedModules.has(mod.id) && selectedModules.size >= moduleLimit}
                />
              ))}
            </div>
            {selectedModules.size >= moduleLimit && (
              <p className="mt-3 text-[0.72rem] text-[#f59e0b] flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                Module limit reached for {currentType.label} plan. Upgrade to Complex for up to 10.
              </p>
            )}
          </div>

          {/* Admin Panel */}
          <div className="rounded-[16px] border border-[rgba(255,255,255,0.07)] bg-[rgba(14,14,14,0.9)] px-5 py-5">
            <SectionLabel>3. Admin Panel</SectionLabel>
            <div className="space-y-2">
              {ADMIN_OPTIONS.map((opt) => (
                <RadioRow
                  key={opt.id}
                  selected={adminPanel === opt.id}
                  onSelect={() => setAdminPanel(opt.id)}
                  label={opt.label}
                  price={opt.price}
                />
              ))}
            </div>
          </div>

          {/* Roles + Architecture side by side */}
          <div className="grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
            <div className="rounded-[16px] border border-[rgba(255,255,255,0.07)] bg-[rgba(14,14,14,0.9)] px-5 py-5">
              <SectionLabel>4. User Roles</SectionLabel>
              <div className="space-y-2">
                {ROLES_OPTIONS.map((opt) => (
                  <RadioRow
                    key={opt.id}
                    selected={roles === opt.id}
                    onSelect={() => setRoles(opt.id)}
                    label={opt.label}
                    price={opt.price}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-[16px] border border-[rgba(255,255,255,0.07)] bg-[rgba(14,14,14,0.9)] px-5 py-5">
              <SectionLabel>5. Architecture</SectionLabel>
              <div className="space-y-2">
                {ARCHITECTURE_OPTIONS.map((opt) => (
                  <RadioRow
                    key={opt.id}
                    selected={architecture === opt.id}
                    onSelect={() => setArchitecture(opt.id)}
                    label={opt.label}
                    sublabel={opt.sublabel}
                    price={opt.price}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="rounded-[16px] border border-[rgba(255,255,255,0.07)] bg-[rgba(14,14,14,0.9)] px-5 py-5">
            <SectionLabel>6. Expected Timeline</SectionLabel>
            <div className="grid grid-cols-2 gap-2 max-[500px]:grid-cols-1">
              {TIMELINE_OPTIONS.map((opt) => (
                <RadioRow
                  key={opt.id}
                  selected={timeline === opt.id}
                  onSelect={() => setTimeline(opt.id)}
                  label={opt.label}
                  sublabel={opt.sublabel}
                  price={opt.rush}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Price Summary (sticky) ── */}
        <div className="w-[280px] shrink-0 max-[900px]:w-full sticky top-6">
          <div className="rounded-[16px] border border-[rgba(124,91,245,0.3)] bg-[rgba(124,91,245,0.05)] overflow-hidden shadow-[0_0_40px_rgba(124,91,245,0.1)]">
            {/* Top glow line */}
            <div
              className="h-[1px] w-full"
              style={{ background: "linear-gradient(90deg, transparent, rgba(124,91,245,0.7), transparent)" }}
              aria-hidden="true"
            />

            <div className="px-5 py-5">
              <p className="text-[0.68rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-4">
                Estimate Breakdown
              </p>

              {/* Line items */}
              <div className="space-y-2.5 text-[0.78rem]">
                <div className="flex justify-between text-[#c4bfb8]">
                  <span>Base ({currentType.label})</span>
                  <span>${breakdown.base.toLocaleString()}</span>
                </div>

                {breakdown.modulesTotal > 0 && (
                  <div className="flex justify-between text-[#c4bfb8]">
                    <span>Modules ({selectedModules.size})</span>
                    <span>+${breakdown.modulesTotal.toLocaleString()}</span>
                  </div>
                )}

                {breakdown.adminPrice > 0 && (
                  <div className="flex justify-between text-[#c4bfb8]">
                    <span>Admin Panel</span>
                    <span>+${breakdown.adminPrice.toLocaleString()}</span>
                  </div>
                )}

                {breakdown.rolesPrice > 0 && (
                  <div className="flex justify-between text-[#c4bfb8]">
                    <span>Roles</span>
                    <span>+${breakdown.rolesPrice.toLocaleString()}</span>
                  </div>
                )}

                {breakdown.archPrice > 0 && (
                  <div className="flex justify-between text-[#c4bfb8]">
                    <span>Multi-tenant</span>
                    <span>+${breakdown.archPrice.toLocaleString()}</span>
                  </div>
                )}

                {breakdown.rushPrice > 0 && (
                  <div className="flex justify-between text-[#f59e0b]">
                    <span>Rush fee</span>
                    <span>+${breakdown.rushPrice.toLocaleString()}</span>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="my-4 h-px bg-[rgba(124,91,245,0.2)]" />

              {/* Total */}
              <div className="flex items-end justify-between mb-1">
                <span className="text-[0.75rem] text-[#8a8680]">Estimated Total</span>
              </div>
              <div
                className="font-syne font-extrabold tracking-[-0.04em] text-[#f5f2eb] transition-all duration-300"
                style={{ fontSize: "clamp(2rem, 4vw, 2.6rem)" }}
              >
                ${total.toLocaleString()}
              </div>
              <p className="text-[0.68rem] text-[#8a8680] mt-1 mb-5">
                Fixed price · no hidden fees
              </p>

              {/* CTA */}
              <a
                href="#"
                className="group/cta w-full inline-flex items-center justify-center gap-2 px-5 py-[0.85rem] bg-[#7c5bf5] text-white text-[0.82rem] font-semibold rounded-full tracking-[0.02em] transition-all duration-300 no-underline shadow-[0_0_30px_rgba(124,91,245,0.3)] hover:bg-[#6a4ae0] hover:shadow-[0_0_50px_rgba(124,91,245,0.5)] hover:-translate-y-[1px] font-space-grotesk"
              >
                Book a Free Call
                <svg className="transition-transform duration-300 group-hover/cta:translate-x-[3px]" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <p className="text-center text-[0.68rem] text-[#8a8680] mt-3">
                We&apos;ll confirm exact scope on the call.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
