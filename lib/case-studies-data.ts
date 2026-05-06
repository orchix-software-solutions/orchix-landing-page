export type CaseStudy = {
  slug: string;
  tag: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string | null;
  videoUrl: string;
  liveUrl: string;
  accent: string;
  location: string;
  flag: string;
  year: string;
  metrics: { value: string; label: string }[];
  challenge: string;
  solution: string;
  outcome: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "neo-bank-payment-infrastructure",
    tag: "FinTech",
    title: "Payment Infrastructure for a Neo-Bank",
    shortDesc:
      "Built a real-time payment processing engine with multi-currency support, fraud detection, and a compliance-ready audit trail — reducing settlement time from T+2 to near-instant.",
    fullDesc:
      "A fast-growing neo-bank needed to move away from a legacy payment processor that couldn't handle their transaction volume or multi-currency needs. We designed and shipped a new payment infrastructure layer from scratch — real-time settlement, fraud scoring, compliance hooks, and a fully auditable ledger.",
    image: null,
    videoUrl: "#",
    liveUrl: "#",
    accent: "#7c5bf5",
    location: "Mumbai, India",
    flag: "🇮🇳",
    year: "2024",
    metrics: [
      { value: "2.4M+", label: "Transactions / month" },
      { value: "99.98%", label: "Uptime SLA" },
      { value: "62%", label: "Ops cost reduced" },
    ],
    challenge:
      "The client's legacy processor was capped at 50k transactions/day, had no multi-currency support, and couldn't produce audit-ready logs required for their banking licence renewal.",
    solution:
      "We re-architected the entire payments layer using an event-sourced ledger, integrated real-time fraud scoring via a rule engine, and built a compliance dashboard that auto-generates audit reports.",
    outcome:
      "Settlement dropped from T+2 to under 3 seconds for 94% of transactions. The platform now handles 2.4M transactions per month with zero downtime incidents in 18 months of production.",
  },
  {
    slug: "ai-recruitment-saas",
    tag: "HR Tech",
    title: "AI-Powered Recruitment SaaS Platform",
    shortDesc:
      "Designed and shipped a multi-tenant SaaS that automated candidate screening, interview scheduling, and offer management — cutting time-to-hire by more than half.",
    fullDesc:
      "A recruitment agency wanted to productise their internal workflow into a SaaS they could sell to mid-market HR teams. We took them from zero to a live, revenue-generating multi-tenant platform in 3 weeks.",
    image: null,
    videoUrl: "#",
    liveUrl: "#",
    accent: "#a78bfa",
    location: "Bengaluru, India",
    flag: "🇮🇳",
    year: "2024",
    metrics: [
      { value: "10k+", label: "Active recruiters" },
      { value: "54%", label: "Faster time-to-hire" },
      { value: "3 weeks", label: "MVP delivered in" },
    ],
    challenge:
      "The client had a strong internal process but no way to scale it. They needed a SaaS product that non-technical recruiters could use, with AI screening that didn't feel like a black box.",
    solution:
      "We built a multi-tenant platform with per-tenant customisation, GPT-powered CV screening with explainable scoring, a Calendly-style scheduling layer, and a Kanban offer pipeline.",
    outcome:
      "10,000+ recruiters onboarded within 90 days of launch. Average time-to-hire dropped from 34 days to 15.6 days across their customer base.",
  },
  {
    slug: "headless-commerce-marketplace",
    tag: "E-Commerce",
    title: "Headless Marketplace with Real-Time Inventory",
    shortDesc:
      "Re-architected a legacy storefront into a headless commerce platform with live inventory sync across 12 warehouses, a vendor portal, and a 94-point Lighthouse score.",
    fullDesc:
      "A multi-brand retailer was losing conversions due to a slow, monolithic storefront. We rebuilt their entire front-end as a headless platform with real-time inventory sync, a self-serve vendor portal, and performance scores that put them ahead of every competitor.",
    image: null,
    videoUrl: "#",
    liveUrl: "#",
    accent: "#6366f1",
    location: "Delhi NCR, India",
    flag: "🇮🇳",
    year: "2025",
    metrics: [
      { value: "94", label: "Lighthouse score" },
      { value: "3.2×", label: "Conversion lift" },
      { value: "12", label: "Warehouses synced" },
    ],
    challenge:
      "Their legacy Magento store scored 28 on Lighthouse, took 8+ seconds to load on mobile, and had no real-time stock visibility — leading to oversells and customer complaints.",
    solution:
      "Full headless rebuild with Next.js on the front-end, real-time WebSocket inventory sync across all 12 warehouses, a React-based vendor portal, and edge-cached product pages.",
    outcome:
      "Page load dropped from 8.2s to 1.1s. Conversion rate increased 3.2× within 30 days of go-live. Zero oversell incidents since launch.",
  },
];
