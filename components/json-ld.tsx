/**
 * JsonLd — thin server component wrapper for Schema.org JSON-LD injection.
 *
 * Usage:
 *   import JsonLd from "@/components/json-ld";
 *   import { organizationSchema, websiteSchema } from "@/lib/schema";
 *
 *   <JsonLd schema={organizationSchema} />
 *   <JsonLd schema={websiteSchema} />
 *
 * Place inside any Server Component (layout.tsx, page.tsx, etc.).
 * Multiple <JsonLd /> blocks on the same page are fully supported by Google.
 */
export default function JsonLd({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
