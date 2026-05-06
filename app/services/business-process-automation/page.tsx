import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import FaqAccordion from "./faq-accordion";
import CtaButton from "./cta-button";

export const metadata: Metadata = {
  title: "Business Process Automation Services | Automate Workflows & Save Hours | OrchiX",
  description:
    "OrchiX automates repetitive workflows, connects your existing systems, and eliminates manual work your team shouldn't be doing. Custom BPA solutions built around your actual processes — not generic templates.",
  keywords: [
    "business process automation",
    "workflow automation services",
    "business process automation company",
    "automate business workflows",
    "BPA services",
    "process automation software development",
    "robotic process automation services",
    "workflow integration services",
    "business automation solutions",
    "custom automation development",
    "API integration services",
    "enterprise workflow automation",
  ],
  alternates: { canonical: "https://orchixsoftwaresolutions.com/services/business-process-automation" },
  openGraph: {
    title: "Business Process Automation Services | OrchiX Software Solutions",
    description:
      "OrchiX automates repetitive workflows, connects your existing systems, and eliminates manual work your team shouldn't be doing.",
    type: "website",
    url: "https://orchixsoftwaresolutions.com/services/business-process-automation",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX Software Solutions" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Process Automation",
  description:
    "OrchiX automates repetitive workflows, connects existing systems, and eliminates manual work — custom-built around your actual processes.",
  provider: {
    "@type": "Organization",
    name: "OrchiX Software Solutions",
    url: "https://orchixsoftwaresolutions.com",
  },
  serviceType: "Business Process Automation",
  areaServed: "Worldwide",
  url: "https://orchixsoftwaresolutions.com/services/business-process-automation",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://orchixsoftwaresolutions.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://orchixsoftwaresolutions.com/services" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Business Process Automation",
        item: "https://orchixsoftwaresolutions.com/services/business-process-automation",
      },
    ],
  },
};

const services = [
  {
    icon: "⚙️",
    title: "Workflow Automation Development",
    desc: "Rule-based work that follows the same steps every time is automatable. We identify those workflows, map the logic, and build automation that runs them reliably — with proper exception handling for the cases that don't fit the standard path.",
  },
  {
    icon: "🔗",
    title: "System Integration & API Connectivity",
    desc: "Your CRM doesn't talk to your accounting tool. Your project management system doesn't update your client portal. We connect them — via native APIs, webhooks, middleware, or custom integration layers — so data flows without anyone moving it manually.",
  },
  {
    icon: "✅",
    title: "Approval & Document Workflow Automation",
    desc: "We build structured approval workflows with routing logic, escalation rules, deadline reminders, and a full history of who approved what and when. Document generation, e-signature integration, and automated filing included.",
  },
  {
    icon: "📄",
    title: "Data Extraction & Processing Automation",
    desc: "Pulling data from PDFs, emails, forms, or spreadsheets and entering it somewhere else shouldn't require a person. We build extraction pipelines using OCR, structured parsing, and AI-assisted classification that capture and process data automatically.",
  },
  {
    icon: "👤",
    title: "Customer-Facing Process Automation",
    desc: "Onboarding sequences, support ticket routing, follow-up reminders, renewal workflows, and billing notifications — all running without manual intervention while still feeling personal.",
  },
  {
    icon: "🤖",
    title: "Robotic Process Automation (RPA)",
    desc: "For legacy systems with no API, RPA interacts with the interface the way a person would — navigating screens, entering data, extracting outputs — in seconds instead of minutes. It works when nothing else does.",
  },
  {
    icon: "🗺️",
    title: "Automation Audits & Process Mapping",
    desc: "Not sure where automation would save you time? We run a structured audit — interviewing your team, mapping current workflows, and identifying every step that could be eliminated or automated — with estimated time savings for each.",
  },
];

const whyItems = [
  {
    icon: "🎯",
    title: "We Automate the Process, Not a Version of It",
    desc: "Off-the-shelf tools make you adapt your workflow to fit their logic. We map your actual process first — including the edge cases, the exceptions, and the steps that seem simple until you try to automate them.",
  },
  {
    icon: "🚨",
    title: "Proper Error Handling, Not Blind Hope",
    desc: "Every automated workflow has monitoring, logging, and alerting built in. If a step fails, the right person gets notified with enough context to fix it quickly. You don't find out something broke from a client.",
  },
  {
    icon: "📋",
    title: "Documentation Your Team Can Actually Use",
    desc: "Every workflow we automate is documented: what it does, what triggers it, what it connects to, and what to do when it fails. A clear reference your operations team can use without calling us.",
  },
  {
    icon: "💬",
    title: "Honest About What Needs Custom vs. Off-the-Shelf",
    desc: "If Zapier or Make can handle it, we'll tell you that and save you the development cost. We only build custom when it's genuinely the right answer — and we'll explain exactly why.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Process Discovery & Mapping (Week 1)",
    desc: "We interview the people doing the work, document the current process step by step, and identify exactly where automation fits and where it doesn't. You get a workflow map and a prioritised list of automation opportunities with honest time-saving estimates.",
  },
  {
    num: "02",
    title: "Architecture & Tool Selection (Weeks 1–2)",
    desc: "We decide what gets built custom, what uses an existing integration platform, and what connects via API. Integration points, data schemas, error handling logic, and monitoring strategy are all defined before we write a line of code.",
  },
  {
    num: "03",
    title: "Build & Integration (Weeks 2–6)",
    desc: "Custom development, API integration, and workflow configuration. First automation live within two weeks of kickoff. We build in stages — each workflow goes through testing before it touches live data.",
  },
  {
    num: "04",
    title: "Testing on Real Data",
    desc: "We test against real-world data including edge cases, malformed inputs, and system failures. Automation that works with clean test data and breaks on messy real data is not finished automation.",
  },
  {
    num: "05",
    title: "Handover, Training & Monitoring Setup",
    desc: "Your team gets trained on what was built, how to monitor it, and how to handle exceptions. Dashboards and alerts are configured before handover. We run a 30-day post-launch check to catch anything testing didn't surface.",
  },
];

const toolCategories = [
  { label: "Integration Platforms", tools: "Zapier, Make, n8n, Workato, Tray.io" },
  { label: "CRM", tools: "Salesforce, HubSpot, Zoho CRM, Pipedrive, Monday CRM" },
  { label: "Accounting & Finance", tools: "QuickBooks, Xero, Zoho Books, Tally, FreshBooks" },
  { label: "Project Management", tools: "Jira, Asana, Monday.com, Notion, ClickUp" },
  { label: "Communication", tools: "Slack, Microsoft Teams, Gmail, Outlook, Twilio, WhatsApp Business API" },
  { label: "eCommerce", tools: "Shopify, WooCommerce, Magento, BigCommerce, Amazon Seller" },
  { label: "HR & Payroll", tools: "BambooHR, Workday, Gusto, Darwinbox, Keka" },
  { label: "Cloud & Documents", tools: "Google Drive, SharePoint, Dropbox, DocuSign, Adobe Sign" },
  { label: "Data & Analytics", tools: "Google Sheets, Airtable, BigQuery, Snowflake, Power BI" },
  { label: "Custom APIs", tools: "REST, GraphQL, Webhooks, SOAP (legacy systems)" },
];

const useCases = [
  {
    icon: "🤝",
    title: "Client Onboarding Automation",
    desc: "New client signs a contract → welcome email sent, project folder created, kickoff meeting scheduled, Slack channel opened, task list created in Jira, invoice generated in Xero. All in under 60 seconds. A process that took 45 minutes of admin now takes none.",
  },
  {
    icon: "🧾",
    title: "Invoice Processing Automation",
    desc: "Supplier sends a PDF → OCR extracts vendor name, invoice number, and amounts → data pushed to accounting system → approval request sent to the relevant manager → on approval, payment scheduled and supplier notified. No manual data entry.",
  },
  {
    icon: "📊",
    title: "Lead Routing & Follow-Up",
    desc: "New lead fills a form → CRM record created, lead scored → routed to the right sales rep → personalised follow-up email sent within 5 minutes → rep notified in Slack → if no activity in 48 hours, reminder triggered automatically.",
  },
  {
    icon: "🚪",
    title: "Employee Offboarding Automation",
    desc: "HR marks employee as leaving → access revoked from all systems, IT ticket created, payroll notified, final payslip scheduled, exit interview booked, company directory updated. A process that needed coordination across four departments now runs in minutes.",
  },
];

export default function BusinessProcessAutomationPage() {
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
          <span className="text-[#a78bfa]">Business Process Automation</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-20 max-[1100px]:px-6 max-[900px]:pt-8 max-[900px]:pb-12">
        <h1 className="font-syne font-extrabold leading-[1.12] tracking-[-0.03em] text-[#f5f2eb] mb-6" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
          Your Team Is Spending Hours on Work That{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Shouldn&apos;t Require a Human</span>
        </h1>

        <p className="text-[1rem] text-[#8a8680] leading-[1.75] max-w-[640px] mb-8">
          Copy-pasting data between systems. Chasing approvals over email. Manually generating reports that pull from three different tools. We automate the workflows eating your team&apos;s time — custom-built around your processes, not off-the-shelf templates that sort of fit.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <CtaButton label="Map My Automation Opportunities" />
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Pain Section ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">The Real Problem</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          The Automation Problem Most Businesses{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Don&apos;t Realise They Have</span>
        </h2>
        <div className="max-w-[700px] space-y-5 text-[0.95rem] text-[#8a8680] leading-[1.8]">
          <p>
            Here&apos;s something worth counting: how many hours did your team spend last week on tasks that follow the exact same steps every time? Data entry that pulls from one system and pushes into another. Invoices generated from project records that already exist somewhere else. Approval requests that live in someone&apos;s inbox instead of a system that can track, remind, and escalate automatically.
          </p>
          <p>
            Most teams have a rough sense that some of this work is unnecessary. What they underestimate is the scale of it. When we audit a client&apos;s operations, the number almost always shocks them — typically 15 to 25 hours per week of work that&apos;s entirely rule-based and could run without anyone touching it.
          </p>
          <p className="text-[#f5f2eb] font-semibold">We map the waste, then we eliminate it.</p>
          <p>
            Custom automation built around your actual workflows — not a Zapier template with 47 steps that breaks every time one tool updates its API. Proper integrations, proper error handling, proper monitoring so you know when something goes wrong before a client does.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Services Grid ── */}
      <section id="services" className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">What We Do</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          Business Process{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Automation Services</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[580px] mb-12">
          From single workflow automation to full operational integration — we cover everything from discovery and mapping through to live monitoring and handover.
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
              Why Custom Automation Beats{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">Off-the-Shelf Tools</span>
            </h2>
            <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] mb-8">
              No-code platforms like Zapier and Make are genuinely useful for simple workflows. But most businesses outgrow them faster than they expect — and the failures are invisible until they become expensive.
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
              How We{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">Automate Your Operations</span>
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

      {/* ── Tools & Integrations ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">Integrations</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          What We{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Connect and Build With</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[560px] mb-12">
          If your tool isn&apos;t on this list, it almost certainly has an API. We&apos;ve built integrations with over 100 platforms — the categories below are just the common ones.
        </p>
        <div className="grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
          {toolCategories.map((cat) => (
            <div
              key={cat.label}
              className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] px-6 py-5 transition-all duration-200 hover:border-[rgba(124,91,245,0.3)]"
            >
              <p className="font-syne font-bold text-[0.85rem] text-[#a78bfa] mb-1">{cat.label}</p>
              <p className="text-[0.8rem] text-[#8a8680] leading-[1.6]">{cat.tools}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px max-w-[1200px] mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* ── Use Cases ── */}
      <section className="max-w-[1200px] mx-auto px-[3rem] py-20 max-[1100px]:px-6 max-[900px]:py-14">
        <p className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-[#a78bfa] mb-3">In Practice</p>
        <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          What Business Process Automation{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">Actually Looks Like</span>
        </h2>
        <p className="text-[0.9rem] text-[#8a8680] leading-[1.75] max-w-[540px] mb-12">
          Concrete examples of workflows we&apos;ve automated — so you can see what&apos;s possible before we map yours.
        </p>
        <div className="grid grid-cols-2 gap-5 max-[700px]:grid-cols-1">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] p-7 transition-all duration-250 hover:border-[rgba(124,91,245,0.4)] hover:bg-[rgba(124,91,245,0.05)] hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-[rgba(124,91,245,0.12)] border border-[rgba(124,91,245,0.15)] flex items-center justify-center text-xl mb-5">
                {uc.icon}
              </div>
              <h3 className="font-syne font-bold text-[0.95rem] text-[#f5f2eb] mb-3">{uc.title}</h3>
              <p className="text-[0.84rem] text-[#8a8680] leading-[1.7]">{uc.desc}</p>
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
          <span className="font-playfair italic font-normal text-[#a78bfa]">Business Process Automation</span>
        </h2>
        <FaqAccordion />
      </section>
    </main>
  );
}
