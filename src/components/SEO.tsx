import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords = "gold mining, mining consultancy, elution, mining equipment, mining chemicals", 
  canonical,
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png"
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = `${title} | Kodiak Solutions Limited`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", keywords);

    // Update canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonical || window.location.href);

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", `${title} | Kodiak Solutions Limited`);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) {
      ogImageTag.setAttribute("content", ogImage);
    }

    // Update Twitter Card tags
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute("content", ogImage);
    }

    // Add structured data for mining company
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Kodiak Solutions Limited",
      "description": "Professional gold mining consultancy, elution, chemicals, and equipment solutions",
      "url": window.location.origin,
      "logo": "/lovable-uploads/bd41d491-0ef4-4bf7-91f9-7e5ff7eab679.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+254 712 614 215",
        "contactType": "customer service"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "KIE Eldoret",
        "addressLocality": "Eldoret",
        "addressRegion": "Uasin Gishu",
        "postalCode": "12345"
      },
      "sameAs": [
        "https://linkedin.com",
        "https://facebook.com",
        "https://twitter.com"
      ]
    };

    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement("script");
      structuredDataScript.setAttribute("type", "application/ld+json");
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, canonical, ogImage]);

  return null;
};

export default SEO;