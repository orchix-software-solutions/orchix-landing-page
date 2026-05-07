import type { Metadata } from "next";
import { DM_Serif_Display, Syne, Space_Grotesk, Playfair_Display, Cairo, Dancing_Script, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import CustomCursor from "@/components/custom-cursor";
import JsonLd from "@/components/json-ld";
import SiteShell from "@/components/site-shell";
import { organizationSchema, websiteSchema, founderPersonSchema } from "@/lib/schema";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-var",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk-var",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo-var",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-var",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OrchiX — CRM, ERP, SaaS & AI Software Development Agency",
    template: "%s | OrchiX Software Solutions",
  },
  description:
    "OrchiX builds custom CRMs, ERPs, enterprise applications, SaaS products, and AI systems with radical transparency. Weekly demos, shared repos, and deadlines we actually hit.",
  keywords: [
    "custom CRM development",
    "ERP development agency",
    "enterprise application development",
    "SaaS development agency",
    "AI integration",
    "business automation",
    "custom software development",
    "MCP server development",
    "web app development",
    "software agency",
    "OrchiX",
  ],
  authors: [{ name: "Parit Bhardwaj", url: "https://orchixsoftwaresolutions.com" }],
  creator: "OrchiX Software Solutions",
  metadataBase: new URL("https://orchixsoftwaresolutions.com"),
  openGraph: {
    type: "website",
    url: "https://orchixsoftwaresolutions.com",
    title: "OrchiX — CRM, ERP, SaaS & AI Software Development Agency",
    description:
      "We build custom CRMs, ERPs, enterprise applications, SaaS products, and AI systems with radical transparency. Weekly demos, shared repos, deadlines we actually hit.",
    siteName: "OrchiX Software Solutions",
    images: [{ url: "/orchix-og-image.png", width: 1200, height: 630, alt: "OrchiX Software Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OrchiX — CRM, ERP, SaaS & AI Software Development Agency",
    description:
      "We build custom CRMs, ERPs, enterprise applications, SaaS products, and AI systems with radical transparency.",
    images: ["/orchix-og-image.png"],
    creator: "@orchixdev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Sitewide structured data — present on every page */}
        <JsonLd schema={organizationSchema as Record<string, unknown>} />
        <JsonLd schema={websiteSchema as Record<string, unknown>} />
        <JsonLd schema={founderPersonSchema as Record<string, unknown>} />
      </head>
      <body
        className={`${dmSerifDisplay.variable} ${syne.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable} ${cairo.variable} ${dancingScript.variable} ${plusJakartaSans.variable} overflow-x-hidden antialiased`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          <SiteShell>
            {children}
          </SiteShell>
          <CustomCursor />
        </LanguageProvider>
      </body>
    </html>
  );
}
