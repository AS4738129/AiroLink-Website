import { useEffect } from "react";

// Lightweight SEO helper (no extra dependency) that sets the document title
// and updates/creates the key meta tags for each page.
export default function Seo({ title, description, path = "/" }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | AiroLink IT and Security Services Consultancy`
      : "AiroLink IT and Security Services Consultancy";
    document.title = fullTitle;

    const setMeta = (name, content, attr = "name") => {
      if (!content) return;
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("twitter:card", "summary_large_image", "name");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://www.airolink.example${path}`);
  }, [title, description, path]);

  return null;
}
