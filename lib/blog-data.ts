export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  metaDescription: string;
  content: BlogBlock[];
};

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "paragraph-highlight"; before: string; highlight: string; after?: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] };

export const blogPosts: BlogPost[] = [
  {
    slug: "aws-vs-azure-vs-google-cloud",
    title: "AWS vs Azure vs Google Cloud in 2025: We Compared All Three So You Don't Have To Pick the Wrong One",
    excerpt:
      "AWS holds 30% market share, Azure 20%, Google Cloud 13% — but market share won't tell you which cloud is right for your product. We break down pricing, AI services, and when to choose each one.",
    coverImage: "/blog-aws-vs-azure-vs-google-cloud-v2.png",
    date: "2026-05-07",
    readTime: "9 min read",
    metaDescription:
      "AWS holds 30% market share, Azure 20%, Google Cloud 13% — but market share won't tell you which cloud is right for your product. We break down pricing, AI services, and when to choose each one.",
    author: {
      name: "Parit Bhardwaj",
      role: "Founder & Lead Engineer",
      avatar: "/parit-bhardwaj-orchix-founder.jpg",
    },
    tags: ["Cloud & AWS", "Infrastructure", "Engineering"],
    content: [
      {
        type: "paragraph",
        text: "Every comparison article eventually says 'it depends on your use case' and leaves you no better off than when you started. This one won't do that. Yes, the right cloud depends on context — but the contexts aren't that complicated. By the end of this post, you'll know exactly which of the three makes sense for your situation, based on what your product actually does, what stack you're already running, and what 'good' looks like for your specific workload.",
      },
      {
        type: "heading",
        text: "The State of the Cloud Market in 2025",
      },
      {
        type: "paragraph",
        text: "The cloud infrastructure market hit $99 billion in Q2 2025 alone — a 25% year-over-year jump that added more than $20 billion in a single quarter. Full-year 2025 revenues are on track to exceed $400 billion for the first time. Three companies control most of it.",
      },
      {
        type: "list",
        items: [
          "AWS: ~30% market share — still the undisputed leader, generating approximately $115 billion in FY2025.",
          "Microsoft Azure: ~20% market share — growing faster than AWS in percentage terms, ~$100 billion in FY2025.",
          "Google Cloud: ~13% market share — fastest-growing of the three at 32% YoY growth, ~$48 billion in FY2025.",
        ],
      },
      {
        type: "paragraph",
        text: "Multi-cloud adoption hit 89% among enterprises in 2025, up from 76% in 2024. Most large organisations aren't choosing one provider — they're choosing which workloads go where.",
      },
      {
        type: "heading",
        text: "AWS: The One That Was There First and Still Hasn't Been Caught",
      },
      {
        type: "paragraph",
        text: "AWS launched in 2006. By the time Azure and Google Cloud became serious competitors, AWS had a decade of operational experience, a global infrastructure footprint, and a customer base that made switching painful. That lead hasn't disappeared.",
      },
      {
        type: "subheading",
        text: "The honest case for AWS",
      },
      {
        type: "paragraph",
        text: "AWS has more than 200 services. That's not a marketing number — it's a practical reality that matters when you need something specific. The ecosystem is genuinely unmatched: the AWS Partner Network, third-party tooling, the volume of Stack Overflow answers, the number of engineers who already know it. AWS also leads in global infrastructure — more regions, more availability zones, more edge locations than either competitor.",
      },
      {
        type: "subheading",
        text: "AWS pricing in 2025",
      },
      {
        type: "paragraph",
        text: "Reserved Instances offer up to 72% savings over on-demand rates. Spot Instances go up to 90% off for interruptible workloads. Lambda charges in 1ms increments.",
      },
      {
        type: "subheading",
        text: "The honest case against AWS",
      },
      {
        type: "paragraph",
        text: "AWS is complex. Egress costs — what you pay to move data out of AWS — are high and historically opaque. The sheer number of services also creates a different problem: for any given task, there are often three AWS services that could solve it, with overlapping features and different pricing models.",
      },
      {
        type: "quote",
        text: "Build on AWS if you need the broadest possible service catalog, the largest talent pool, and a proven platform for diverse enterprise workloads.",
      },
      {
        type: "heading",
        text: "Microsoft Azure: The Enterprise Cloud That Grew Up Around Office 365",
      },
      {
        type: "paragraph",
        text: "Azure launched in 2010, but it didn't start gaining real enterprise traction until Microsoft started bundling it with its existing enterprise relationships. If your company already pays Microsoft for Windows Server, SQL Server, Active Directory, or Office 365, Azure becomes very attractive very quickly.",
      },
      {
        type: "subheading",
        text: "The honest case for Azure",
      },
      {
        type: "paragraph",
        text: "If your organisation runs on Microsoft products, Azure integration is genuinely seamless. Azure's hybrid cloud story is also the strongest of the three — Azure Arc lets you manage on-premises infrastructure, other clouds, and Azure resources from a single control plane. On AI, Azure's exclusive partnership with OpenAI is a significant differentiator: Azure AI Studio is the primary deployment platform for GPT-4o and related models.",
      },
      {
        type: "subheading",
        text: "Azure pricing in 2025",
      },
      {
        type: "paragraph",
        text: "Azure eliminated charges for inbound data transfers in 2025 and cut egress costs by 10%. Spot Instances offer up to 80% off on-demand rates. For Arm-based compute, Azure offers the largest pricing gap between x86 and Arm CPUs — 65% on On-Demand and 69% on Spot.",
      },
      {
        type: "subheading",
        text: "The honest case against Azure",
      },
      {
        type: "paragraph",
        text: "Azure's interface is less intuitive than AWS or GCP for engineers who haven't grown up on Microsoft tooling. The service naming conventions are inconsistent — a legacy of Azure absorbing multiple Microsoft product lines rather than being designed from scratch.",
      },
      {
        type: "quote",
        text: "Build on Azure if your organisation is already deep in the Microsoft ecosystem, you need strong hybrid cloud, or your AI strategy is built around OpenAI models.",
      },
      {
        type: "heading",
        text: "Google Cloud: The One That's Winning on AI and Willing to Cut Prices to Win Everywhere Else",
      },
      {
        type: "paragraph",
        text: "Google Cloud is the youngest of the three — built on the same infrastructure that powers Google Search, YouTube, and Gmail. Google Cloud is the fastest-growing of the three because it's winning on two specific dimensions: AI infrastructure and pricing.",
      },
      {
        type: "subheading",
        text: "The honest case for Google Cloud",
      },
      {
        type: "paragraph",
        text: "Google Cloud's Tensor Processing Units (TPUs) are purpose-built for training and running large language models. The latest TPU v5p is one of the most powerful AI accelerators available. Vertex AI is a genuinely strong ML platform. Gemini multimodal models are natively integrated. GenAI-specific cloud services grew 160% in Q2 2025 — a significant portion of that growth landed on Google Cloud.",
      },
      {
        type: "subheading",
        text: "Google Cloud pricing in 2025",
      },
      {
        type: "paragraph",
        text: "Sustained Usage Discounts apply automatically — no commitment required — giving up to 30% savings on instances that run most of the month. BigQuery reserved pricing dropped by up to 40% on some workloads. GCP cut compute pricing by 8% across all regions in Q1 2026. For AI workloads specifically, GCP runs 5–10% cheaper than AWS and Azure.",
      },
      {
        type: "subheading",
        text: "The honest case against Google Cloud",
      },
      {
        type: "paragraph",
        text: "Google Cloud still has a smaller enterprise footprint than AWS or Azure. Fewer enterprise support options, fewer certified compliance frameworks, and a history of discontinuing products that makes some enterprise buyers nervous about long-term commitments.",
      },
      {
        type: "quote",
        text: "Build on Google Cloud if your workloads are AI/ML-heavy, you're doing serious data analytics with BigQuery, or you're building container-native architecture on Kubernetes.",
      },
      {
        type: "heading",
        text: "The Direct Comparison: What Actually Matters",
      },
      {
        type: "table",
        caption: "Compute Cost Comparison (on-demand, general purpose)",
        headers: ["Cost Type", "AWS", "Azure", "Google Cloud"],
        rows: [
          ["On-Demand", "Baseline", "Comparable to AWS", "~8% cheaper (Q1 2026 cuts)"],
          ["Reserved / Committed", "Up to 72% off", "Up to 72% off", "Sustained Usage Discounts (auto, up to 30%)"],
          ["Spot / Preemptible", "Up to 90% off", "Up to 80% off", "Up to 80% off"],
          ["Arm-based compute", "Graviton — competitive savings", "65% cheaper than x86 on-demand", "Tau T2A — competitive savings"],
          ["Egress costs", "High (reduced but notable)", "Eliminated inbound; 10% egress cut", "Competitive; free within same region"],
        ],
      },
      {
        type: "table",
        caption: "AI & ML Pricing Comparison",
        headers: ["Workload", "AWS", "Azure", "Google Cloud"],
        rows: [
          ["LLM inference (GPT-4o class)", "Via Bedrock (Anthropic/Meta)", "Native OpenAI — best pricing for GPT-4o", "Gemini native; 5–10% cheaper than AWS/Azure"],
          ["Model training hardware", "Trainium chips", "NVIDIA A100/H100", "TPU v5p — most cost-effective for large models"],
          ["ML pipeline (managed)", "SageMaker", "Azure ML Studio", "Vertex AI"],
          ["GenAI services growth (Q2 2025)", "Strong", "Strong (OpenAI partnership)", "160% YoY — fastest growing"],
          ["BigQuery / Analytics", "Redshift", "Synapse Analytics", "BigQuery — up to 40% price drop in 2025"],
        ],
      },
      {
        type: "table",
        caption: "Key Capabilities at a Glance",
        headers: ["Capability", "AWS", "Azure", "Google Cloud"],
        rows: [
          ["Service catalog", "200+ services (widest)", "200+ services", "~150 services"],
          ["Global regions", "Most regions worldwide", "Strong, fewer in S. Asia/LatAm", "Growing fast"],
          ["Hybrid cloud", "AWS Outposts (good)", "Azure Arc (best-in-class)", "Anthos (solid)"],
          ["Kubernetes", "EKS (strong)", "AKS (strong)", "GKE (native — best)"],
          ["OpenAI / GPT models", "Via Bedrock (3rd party)", "Exclusive partnership", "Gemini native"],
          ["Developer experience", "Largest knowledge base", "Best for Microsoft devs", "Cleanest API/console design"],
          ["Compliance certifications", "Most mature (20 yrs)", "Strong enterprise certs", "Catching up"],
          ["Multi-cloud mgmt", "AWS Control Tower", "Azure Arc (strongest)", "Google Cloud Anthos"],
        ],
      },
      {
        type: "subheading",
        text: "AI & Machine Learning",
      },
      {
        type: "list",
        items: [
          "AWS — Amazon Bedrock for foundation model access, SageMaker for full ML pipelines, custom Trainium and Inferentia chips. Broad model selection, strong tooling.",
          "Azure — Exclusive OpenAI partnership makes it the primary home for GPT-4o. Azure AI Studio, Copilot integration across Microsoft 365. Best if your AI strategy centres on OpenAI models.",
          "Google Cloud — TPU v5p for model training, Vertex AI for ML pipelines, Gemini natively integrated. Best raw infrastructure for training large models; most cost-effective for AI inference at scale.",
        ],
      },
      {
        type: "subheading",
        text: "Hybrid Cloud",
      },
      {
        type: "paragraph",
        text: "Azure wins this clearly. Azure Arc provides the broadest multi-cloud management capabilities. Enterprises running a mix of on-premises and cloud workloads — which is most large enterprises — find Azure's hybrid story more credible and more complete than AWS Outposts or Google Cloud's Anthos.",
      },
      {
        type: "subheading",
        text: "Developer Experience",
      },
      {
        type: "list",
        items: [
          "AWS — Largest knowledge base, most third-party tooling, highest chance that your specific problem has a documented solution.",
          "GCP — Cleanest console and API design, strongest Kubernetes experience, preferred by developers coming from open-source backgrounds.",
          "Azure — Most intuitive for engineers with Microsoft backgrounds, less intuitive for everyone else.",
        ],
      },
      {
        type: "heading",
        text: "The Decision Framework",
      },
      {
        type: "paragraph",
        text: "Stop trying to find the 'best' cloud provider. There isn't one. Here's how to actually choose:",
      },
      {
        type: "list",
        items: [
          "Choose AWS if you need the widest service catalog, the largest talent pool, and a proven platform for diverse enterprise workloads.",
          "Choose Azure if your organisation runs on Microsoft products, you need strong hybrid cloud, or your AI strategy is built around OpenAI models.",
          "Choose Google Cloud if you're building AI-heavy products, running serious data analytics, working container-native on Kubernetes, or pricing is a primary constraint.",
          "Consider multi-cloud if you're an enterprise with diverse workloads — 89% of enterprises already are.",
        ],
      },
      {
        type: "heading",
        text: "One Last Thing: Cloud Lock-In Is Real",
      },
      {
        type: "paragraph",
        text: "The comparison above assumes you're making a fresh choice. If you're evaluating a migration, the calculus changes. Cloud migrations are expensive, time-consuming, and disruptive. The technical differences between AWS, Azure, and GCP are real, but they're rarely large enough to justify a full migration unless there's a compelling business reason.",
      },
      {
        type: "paragraph",
        text: "If you're starting fresh: pick based on the framework above and build with portability in mind from day one — containerise workloads, avoid provider-specific services where open alternatives exist, and keep your data layer as provider-agnostic as possible.",
      },
      {
        type: "quote",
        text: "If you're migrating: make sure the expected benefit exceeds the migration cost — not just on paper, but with a realistic estimate of engineering time, downtime risk, and retraining.",
      },
    ],
  },
  {
    slug: "why-zoho-monday-airtable-keep-failing-your-growing-business",
    title: "Why Zoho, Monday, and Airtable Keep Failing Your Growing Business (And What to Build Instead)",
    excerpt:
      "Tried Zoho, Monday, or Airtable and watched them fall short past $1M in revenue? Here's why off-the-shelf tools fail growing SMBs — and what to build instead.",
    coverImage: "/blog-zoho-monday-airtable.png",
    date: "2026-04-25",
    readTime: "8 min read",
    metaDescription:
      "Tried Zoho, Monday, or Airtable and watched them fall short past $1M in revenue? Here's why off-the-shelf tools fail growing SMBs and what to build instead.",
    author: {
      name: "Parit Bhardwaj",
      role: "Founder & Lead Engineer",
      avatar: "/parit-bhardwaj-orchix-founder.jpg",
    },
    tags: ["Operations", "SMB", "Custom Software"],
    content: [
      {
        type: "paragraph-highlight",
        before: "You crossed $1M in revenue last year.",
        highlight: "Congratulations 🎉",
      },
      {
        type: "paragraph",
        text: "Now you're staring at four browser tabs, three spreadsheets, a WhatsApp group, and a Notion workspace nobody updates anymore. Your operations manager just asked you, again, where the latest client list lives. Your team spent 12 hours this week pulling a report they'll have to pull again next Friday.",
      },
      {
        type: "paragraph",
        text: "And somewhere on your laptop, there's a half-built Zoho dashboard you abandoned three months ago when you realized it would take another two months to make it actually work.",
      },
      {
        type: "paragraph",
        text: "You're not alone. Most founders who cross the $1M revenue mark hit the same wall: the SaaS tools that got them here can't take them further. The question isn't whether to fix it. It's whether to keep stacking new tools on top of broken ones, or to finally build something that fits how your business actually works.",
      },
      {
        type: "paragraph",
        text: "This post is for founders who've already tried Zoho, Monday, Airtable, HubSpot, Notion, or some combination of all of them and watched each one fall short. We'll cover why off-the-shelf tools fail at this stage, what \"custom software\" actually means in 2026 (it's not what you think), and a simple framework for whether to patch, switch, or build.",
      },
      {
        type: "heading",
        text: "Why Off-the-Shelf Tools Hit a Wall at $1M+",
      },
      {
        type: "paragraph",
        text: "Let's be clear about something. Zoho, Monday, and Airtable are good products. Millions of small businesses run on them happily.",
      },
      {
        type: "paragraph",
        text: "The problem isn't the tools. It's the assumption underneath them.",
      },
      {
        type: "paragraph",
        text: "These platforms are designed for the general case. A 5-person consultancy. A 12-person agency. A founder who wants a basic CRM, a project board, and somewhere to track expenses. For that, they're excellent.",
      },
      {
        type: "paragraph",
        text: "But once your business has its own shape, the general case starts to fight you. The specific way you onboard freight clients. The particular workflow for HVAC service tickets. The manufacturing process that doesn't match anyone else's. You start spending more time bending the tool to fit your operations than you save by using it.",
      },
      {
        type: "paragraph",
        text: "You hire someone to \"configure\" Monday. Six months later, the configuration is so brittle nobody wants to touch it. You buy three Zoho add-ons to cover what one custom workflow could do. You hire a freelancer to build automations on top of Airtable, and when they disappear, so does the institutional knowledge.",
      },
      {
        type: "quote",
        text: "You're not the problem. The architecture is.",
      },
      {
        type: "heading",
        text: "The Hidden Costs of Patching Together SaaS Tools",
      },
      {
        type: "paragraph",
        text: "When founders tally up what off-the-shelf tools \"cost,\" they look at the monthly subscription. That's the wrong number.",
      },
      {
        type: "paragraph",
        text: "Here's what actually adds up:",
      },
      {
        type: "list",
        items: [
          "Labor on manual work — If your team spends 10 hours a week reconciling data between three platforms at $30 an hour, that's $15,600 a year in labor alone. Not counting the mistakes that slip through.",
          "Lost institutional knowledge — When your operations live in someone's head, plus a Notion doc, plus a WhatsApp thread, every employee who leaves takes a piece of your business with them.",
          "Stalled growth — A new client wants to onboard. Your current setup can't handle their reporting requirements. You either turn them down or scramble to bolt on another tool.",
          "Decision lag — Without a single source of truth, every decision starts with 'let me get back to you on the numbers.' A week later, the moment has passed.",
        ],
      },
      {
        type: "paragraph",
        text: "Add it all up, and the SaaS stack you thought was saving money is usually costing you between $20,000 and $60,000 a year in hidden friction. That's the number to compare against — not the $49 a month line item.",
      },
      {
        type: "heading",
        text: "The 4 Signs You've Outgrown Your Stack",
      },
      {
        type: "paragraph",
        text: "You don't need a consultant to tell you when it's time. The signals are pretty consistent.",
      },
      {
        type: "subheading",
        text: "1. Your data lives in 4+ places",
      },
      {
        type: "paragraph",
        text: "Salesforce or Zoho for customers. A spreadsheet for projects. QuickBooks for finance. WhatsApp for ad hoc updates. If reconciling these has become a weekly job, that's a sign.",
      },
      {
        type: "subheading",
        text: "2. You can't answer basic questions in real time",
      },
      {
        type: "paragraph",
        text: '"How many active clients do we have right now?" "What\'s our monthly recurring revenue?" "Which projects are over budget?" If these take more than a minute to answer, your operations have outgrown your tools.',
      },
      {
        type: "subheading",
        text: "3. Manual reporting is a fixed weekly cost",
      },
      {
        type: "paragraph",
        text: "Someone — probably one of your most expensive operators — spends every Friday afternoon copy-pasting numbers into a deck. That work shouldn't exist.",
      },
      {
        type: "subheading",
        text: "4. New hires take 6+ weeks to be useful",
      },
      {
        type: "paragraph",
        text: "Because there's no system, only tribal knowledge, every new person needs someone else to explain how things actually work. That doesn't scale.",
      },
      {
        type: "paragraph",
        text: "If three or more of these are true for you, you're past the point where another SaaS subscription will help.",
      },
      {
        type: "heading",
        text: 'What "Custom Software" Actually Means in 2026',
      },
      {
        type: "paragraph",
        text: 'Here\'s where most founders get the wrong picture. They hear "custom software" and imagine a $200,000 enterprise project that takes a year and ships late.',
      },
      {
        type: "paragraph",
        text: "That used to be true. It isn't anymore.",
      },
      {
        type: "paragraph",
        text: "Modern custom builds for SMBs typically run $5,000 to $15,000, take 4 to 8 weeks, and deliver something specifically engineered for how your business operates. The difference between this and the failed freelancer projects you've heard about (or lived through) comes down to three things:",
      },
      {
        type: "list",
        items: [
          "Fixed scope, fixed price — You know exactly what you're getting and what it costs before you start. No hourly billing surprises.",
          "Weekly demos — You see working software every Friday during the build. If something's off, you catch it in week two, not month three.",
          "A real owner — One senior person leads the project from discovery to launch. No handoffs to juniors. No vanishing freelancer. The person who scopes it is the person who builds it.",
        ],
      },
      {
        type: "paragraph",
        text: "This is infrastructure spend, not a marketing experiment. Frame it that way internally and the budget conversation gets easier. You're not buying software. You're replacing a broken system.",
      },
      {
        type: "heading",
        text: "Patch, Switch, or Build: A Simple Decision Framework",
      },
      {
        type: "paragraph",
        text: "Not every business needs a custom build. Here's the honest breakdown.",
      },
      {
        type: "subheading",
        text: "Patch (stay with what you have) if:",
      },
      {
        type: "list",
        items: [
          "Revenue is under $1M",
          "Team is under 10 people",
          "Your operations are still in flux",
          "You don't yet know exactly what your workflow should look like",
        ],
      },
      {
        type: "subheading",
        text: "Switch (try a different SaaS tool) if:",
      },
      {
        type: "list",
        items: [
          "Your problem is genuinely common (basic CRM, basic project tracking)",
          "You're willing to bend your operations to fit the tool",
          "Your industry has a vertical SaaS leader that already exists (ServiceTitan for HVAC, FreightPOP for logistics, AppFolio for property management)",
        ],
      },
      {
        type: "subheading",
        text: "Build (commission custom software) if:",
      },
      {
        type: "list",
        items: [
          "Revenue is $1M+",
          "You have 10+ employees",
          "You know your workflow specifically and it doesn't match a generic template",
          "You've already tried two or more SaaS tools and outgrown them",
          "Manual reporting has become a fixed weekly cost",
          "You're losing deals or talent because of operational friction",
        ],
      },
      {
        type: "paragraph",
        text: "If you fall in the third bucket, the math almost always works in favor of building. The system typically pays for itself in 4 to 8 months from recovered labor alone — before you count the upside of better decisions and faster onboarding.",
      },
      {
        type: "heading",
        text: "A Real Scenario: From Patchwork to Platform",
      },
      {
        type: "paragraph",
        text: "Picture a freight forwarder doing $1.8M in revenue with 14 employees. Their setup looks like this: Zoho CRM for clients, a Google Sheet for shipments, QuickBooks for invoicing, and a WhatsApp group where the operations team coordinates everything that falls between the cracks.",
      },
      {
        type: "paragraph",
        text: "Every Friday, the operations lead spends 4 hours building a status report by pulling data from each system. New clients take 10 days to onboard because the team manually creates records in three places. When their best dispatcher leaves, two weeks of chaos follow because half the company's process lived in his head and his Google Drive.",
      },
      {
        type: "paragraph",
        text: "A custom build, scoped over 6 weeks, gives them a single dashboard pulling from their existing tools. Zoho and QuickBooks stay in place. The build connects them rather than replacing them. Shipments, invoices, and client status now live in one view. The Friday report generates itself. New client onboarding drops from 10 days to 2.",
      },
      {
        type: "quote",
        text: "Total project cost: under $12,000. Recovered labor in year one: roughly $32,000.",
      },
      {
        type: "paragraph",
        text: "The dispatcher problem doesn't go away entirely (people are still people), but the next time someone leaves, the process stays. That's the shape of a build that works.",
      },
      {
        type: "heading",
        text: "What to Do This Week",
      },
      {
        type: "paragraph",
        text: "If you've recognized your business in this post, here's the practical next step.",
      },
      {
        type: "paragraph",
        text: "Spend 30 minutes mapping your operations on a single page. Where does customer data live? Where do projects live? Where does finance live? Where does ad hoc communication happen? Draw lines between them. Note every place where work crosses systems manually.",
      },
      {
        type: "paragraph",
        text: "That map is the artifact. Once you can see it on one page, the decision becomes obvious. You're either patching (fine for now), switching to a vertical SaaS (sometimes the right call), or you've outgrown the off-the-shelf world entirely.",
      },
      {
        type: "paragraph",
        text: "If it's the third one, the next step is a discovery conversation with someone who can scope the build properly. A good partner won't push you toward a build if a $99 a month tool would actually solve your problem. They'll tell you the truth either way.",
      },
      {
        type: "paragraph",
        text: "Stop blaming yourself for the chaos. Zoho, Monday, and Airtable didn't fail because you used them wrong. They worked exactly as designed. You just outgrew the design.",
      },
      {
        type: "quote",
        text: "I should have done this a year earlier.",
        cite: "Common sentiment from founders who made the switch",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
