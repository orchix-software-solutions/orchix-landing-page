/**
 * OrchiX — Schema.org JSON-LD helpers
 *
 * Usage (Server Component or layout):
 *   import { organizationSchema, websiteSchema } from "@/lib/schema";
 *   <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
 *
 * All schemas validated against Google Rich Results requirements (April 2026).
 */

// ─── 1. Organization ─────────────────────────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://orchixsoftwaresolutions.com/#organization",
  name: "OrchiX Software Solutions",
  alternateName: "OrchiX",
  url: "https://orchixsoftwaresolutions.com",
  logo: {
    "@type": "ImageObject",
    url: "https://orchixsoftwaresolutions.com/logo.png",
    width: 512,
    height: 512,
  },
  image: "https://orchixsoftwaresolutions.com/orchix-og-image.png",
  description:
    "OrchiX builds custom CRMs, ERPs, enterprise applications, SaaS products, and AI systems with radical transparency. Weekly demos, shared repos, and deadlines we actually hit.",
  slogan: "We ship. We stay. We deliver.",
  foundingDate: "2026",
  founder: {
    "@type": "Person",
    "@id": "https://orchixsoftwaresolutions.com/#parit-bhardwaj",
    name: "Parit Bhardwaj",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://orchixsoftwaresolutions.com/#contact",
    availableLanguage: ["English", "Arabic", "Spanish", "French", "German", "Portuguese", "Hindi", "Chinese", "Japanese"],
  },
  areaServed: "Worldwide",
  sameAs: [
    "https://www.linkedin.com/company/orchix-software-solutions",
    "https://x.com/orchixsoftwares",
    "https://github.com/orchix-software-solutions",
    "https://www.instagram.com/orchixsoftwaresolutions",
  ],
  knowsAbout: [
    "Custom CRM Development",
    "ERP Development",
    "Enterprise Application Development",
    "SaaS Product Development",
    "AI Integration",
    "Business Process Automation",
    "MCP Server Development",
    "Web Application Development",
    "Mobile Application Development",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "OrchiX Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise Applications & CRM/ERP",
          description:
            "Custom-built CRMs, ERPs, and business management systems — from sales pipelines to inventory, tailored to replace off-the-shelf tools that don't fit.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Process Automation",
          description:
            "Automate manual workflows, connect disparate systems, and build internal tools that save your team thousands of hours every year.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Product Development",
          description:
            "From MVP to scale — we plan, build, and grow revenue-generating SaaS platforms for founders and businesses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI & Intelligent Automation",
          description:
            "AI agents, MCP servers, RAG pipelines, and workflow automation that connect your tools and eliminate manual processes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web & App Development",
          description:
            "Secure, scalable web and mobile applications built with a focus on high performance and intuitive user experience.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Maintenance & Support",
          description:
            "Long-term partnership to ensure your software remains secure, optimized, and ready to scale as your business grows.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "1",
  },
};

// ─── 2. WebSite (with SearchAction) ──────────────────────────────────────────
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://orchixsoftwaresolutions.com/#website",
  name: "OrchiX Software Solutions",
  url: "https://orchixsoftwaresolutions.com",
  description:
    "Enterprise CRM, ERP, SaaS & AI Software Development Agency",
  publisher: {
    "@id": "https://orchixsoftwaresolutions.com/#organization",
  },
  inLanguage: ["en", "ar", "es", "fr", "de", "pt", "hi", "zh", "ja"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://orchixsoftwaresolutions.com/blogs?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// ─── 3. Person — Parit Bhardwaj (Founder) ────────────────────────────────────
export const founderPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://orchixsoftwaresolutions.com/#parit-bhardwaj",
  name: "Parit Bhardwaj",
  givenName: "Parit",
  familyName: "Bhardwaj",
  jobTitle: "Founder & Lead Engineer",
  description:
    "Founder of OrchiX Software Solutions. 5+ years building enterprise software, CRMs, ERPs, SaaS products, and AI systems with radical transparency.",
  image: "https://orchixsoftwaresolutions.com/parit-bhardwaj-orchix-founder.jpg",
  url: "https://orchixsoftwaresolutions.com",
  worksFor: {
    "@id": "https://orchixsoftwaresolutions.com/#organization",
  },
  sameAs: [
    "https://www.linkedin.com/company/orchix-software-solutions",
    "https://x.com/orchixsoftwares",
    "https://github.com/orchix-software-solutions",
  ],
  knowsAbout: [
    "Enterprise Software Development",
    "CRM Development",
    "ERP Systems",
    "SaaS Architecture",
    "AI Integration",
    "MCP Servers",
    "Business Process Automation",
  ],
};

// ─── 4. WebPage — Home ───────────────────────────────────────────────────────
export const homeWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://orchixsoftwaresolutions.com/#webpage",
  url: "https://orchixsoftwaresolutions.com",
  name: "OrchiX — Enterprise CRM, ERP, SaaS & AI Software Development Agency",
  description:
    "OrchiX builds custom CRMs, ERPs, enterprise applications, SaaS products, and AI systems with radical transparency. Weekly demos, shared repos, and deadlines we actually hit.",
  isPartOf: {
    "@id": "https://orchixsoftwaresolutions.com/#website",
  },
  about: {
    "@id": "https://orchixsoftwaresolutions.com/#organization",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://orchixsoftwaresolutions.com",
      },
    ],
  },
  inLanguage: "en",
  datePublished: "2026-01-01",
  dateModified: "2026-04-18",
};

// ─── 5. Blog Listing WebPage ─────────────────────────────────────────────────
export const blogListingSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://orchixsoftwaresolutions.com/blogs/#webpage",
  url: "https://orchixsoftwaresolutions.com/blogs",
  name: "Blog — Insights, Guides & Real Talk | OrchiX",
  description:
    "Practical insights from building enterprise software, SaaS products, and AI systems. No fluff, no buzzwords.",
  isPartOf: {
    "@id": "https://orchixsoftwaresolutions.com/#website",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://orchixsoftwaresolutions.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://orchixsoftwaresolutions.com/blogs",
      },
    ],
  },
  inLanguage: "en",
};

// ─── 6. BlogPosting generator (call per post) ─────────────────────────────────
export function blogPostSchema({
  slug,
  title,
  excerpt,
  coverImage,
  date,
  readTime,
  tags,
}: {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  tags: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://orchixsoftwaresolutions.com/blogs/${slug}/#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://orchixsoftwaresolutions.com/blogs/${slug}`,
    },
    headline: title,
    description: excerpt,
    image: coverImage.startsWith("http")
      ? coverImage
      : `https://orchixsoftwaresolutions.com${coverImage}`,
    datePublished: date,
    dateModified: date,
    author: {
      "@id": "https://orchixsoftwaresolutions.com/#parit-bhardwaj",
    },
    publisher: {
      "@id": "https://orchixsoftwaresolutions.com/#organization",
    },
    keywords: tags.join(", "),
    timeRequired: `PT${readTime.replace(/\D/g, "")}M`,
    inLanguage: "en",
    isPartOf: {
      "@id": "https://orchixsoftwaresolutions.com/blogs/#webpage",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://orchixsoftwaresolutions.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://orchixsoftwaresolutions.com/blogs",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: `https://orchixsoftwaresolutions.com/blogs/${slug}`,
        },
      ],
    },
  };
}

// ─── 7. LocalBusiness ────────────────────────────────────────────────────────
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://orchixsoftwaresolutions.com/#local-business",
  name: "OrchiX Software Solutions",
  alternateName: "OrchiX",
  description:
    "Custom CRM, ERP, SaaS & AI software development agency — remote-first, serving clients across the US, UK, and 12+ countries worldwide.",
  url: "https://orchixsoftwaresolutions.com",
  telephone: "+91-000-000-0000",
  email: "hey@orchixsoftwaresolutions.com",
  logo: "https://orchixsoftwaresolutions.com/logo.png",
  image: "https://orchixsoftwaresolutions.com/orchix-og-image.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "India",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 20.5937,
    longitude: 78.9629,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "USD, GBP, EUR, INR",
  paymentAccepted: "Bank Transfer, Credit Card",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "India" },
  ],
  sameAs: [
    "https://www.linkedin.com/company/orchix-software-solutions",
    "https://x.com/orchixsoftwares",
    "https://github.com/orchix-software-solutions",
    "https://www.instagram.com/orchixsoftwaresolutions",
  ],
  parentOrganization: {
    "@id": "https://orchixsoftwaresolutions.com/#organization",
  },
};

// ─── 8. Individual Service pages (call per service) ──────────────────────────
export function servicePageSchema({
  name,
  description,
  slug,
}: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://orchixsoftwaresolutions.com/services/${slug}/#service`,
    name,
    description,
    provider: {
      "@id": "https://orchixsoftwaresolutions.com/#organization",
    },
    areaServed: "Worldwide",
    url: `https://orchixsoftwaresolutions.com/services/${slug}`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://orchixsoftwaresolutions.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://orchixsoftwaresolutions.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name,
          item: `https://orchixsoftwaresolutions.com/services/${slug}`,
        },
      ],
    },
  };
}
