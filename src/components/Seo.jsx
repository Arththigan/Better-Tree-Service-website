import { useEffect } from "react";

export default function Seo({ title, description, path = "/" }) {
  useEffect(() => {
    document.title = title;
    const upsert = (selector, attribute, value, content) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement(selector.startsWith("link") ? "link" : "meta");
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
      if (content) element.setAttribute("content", content);
    };

    upsert('meta[name="description"]', "name", "description", description);
    upsert('meta[property="og:title"]', "property", "og:title", title);
    upsert('meta[property="og:description"]', "property", "og:description", description);
    upsert('meta[property="og:type"]', "property", "og:type", "website");
    upsert('meta[property="og:url"]', "property", "og:url", `https://bettertreeservice.com${path}`);
    upsert('meta[property="og:image"]', "property", "og:image", "https://images.unsplash.com/photo-1754321860056-ca7254d5e7ac?auto=format&fit=crop&w=1200&q=82");
    upsert('link[rel="canonical"]', "rel", "canonical");
    document.head.querySelector('link[rel="canonical"]').setAttribute("href", `https://bettertreeservice.com${path}`);

    let schema = document.head.querySelector("#local-business-schema");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "local-business-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TreeService",
      name: "Better Tree Service",
      url: `https://bettertreeservice.com${path}`,
      telephone: "+1-315-660-7687",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5006 Aitchison Rd",
        addressLocality: "Syracuse",
        addressRegion: "NY",
        postalCode: "13215",
        addressCountry: "US"
      },
      areaServed: {
        "@type": "City",
        name: "Syracuse"
      }
    });
  }, [title, description, path]);

  return null;
}
