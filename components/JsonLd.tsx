import { site, instagramUrl, contactEmail } from "@/lib/site";

/**
 * Organization JSON-LD for richer search results. Rendered once in the root
 * layout. Social profiles are only included when configured.
 */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    email: contactEmail,
    logo: `${site.url}/assets/rabbit-mark.png`,
    image: `${site.url}${site.ogImage}`,
    ...(instagramUrl ? { sameAs: [instagramUrl] } : {})
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD is static, trusted, server-rendered content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
