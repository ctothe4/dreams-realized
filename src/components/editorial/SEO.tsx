import { useEffect } from "react";
import { useLocation } from "react-router-dom";
interface SEOProps { title: string; description: string; type?: string; noindex?: boolean; schema?: Record<string, unknown>; }
export function SEO({ title, description, type = "website", noindex = false, schema }: SEOProps) {
  const { pathname } = useLocation();
  const schemaJson = schema ? JSON.stringify(schema) : undefined;
  useEffect(() => {
    document.title = `${title} | Alexander Sakala`;
    const setMeta = (key: string, content: string, property = false) => {
      const attribute = property ? "property" : "name";
      let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!tag) { tag = document.createElement("meta"); tag.setAttribute(attribute, key); document.head.appendChild(tag); }
      tag.content = content;
    };
    setMeta("description", description); setMeta("og:title", document.title, true); setMeta("og:description", description, true); setMeta("og:type", type, true); setMeta("og:url", `https://alexandersakala.com${pathname === "/" ? "/" : pathname}`, true); setMeta("twitter:card", "summary_large_image"); setMeta("twitter:title", document.title); setMeta("twitter:description", description); setMeta("robots", noindex ? "noindex, nofollow" : "index, follow");
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = `https://alexandersakala.com${pathname}`;
    document.getElementById("page-schema")?.remove();
    if (schemaJson) { const script = document.createElement("script"); script.id = "page-schema"; script.type = "application/ld+json"; script.textContent = schemaJson; document.head.appendChild(script); }
    return () => { document.getElementById("page-schema")?.remove(); };
  }, [title, description, type, pathname, noindex, schemaJson]);
  return null;
}
export const personSchema = { "@context": "https://schema.org", "@type": "Person", name: "Alexander Mumba Sakala", url: "https://alexandersakala.com", description: "Entrepreneur, community-minded leader and public figure in Zambia." };