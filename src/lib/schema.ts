// === ADVANCED DYNAMIC JSON-LD STRUCTURED DATA ===
// Generates schema markup for all page types

const SITE_URL = "https://www.raksha.work";
const COMPANY_NAME = "Raksha Integrated Solutions";
const PHONE = "+91-99999-99999";
const EMAIL = "info@raksha.work";

// === ORGANIZATION ===
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    alternateName: "Raksha Infra",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: "India's leading industrial CCTV installation & electrification contractor. Warehouse surveillance, power distribution, networking, and AMC services.",
    foundingDate: "2016",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 50, maxValue: 100 },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hyderabad",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500000",
      addressCountry: "IN",
    },
    contactPoint: [
      { "@type": "ContactPoint", telephone: PHONE, contactType: "sales", availableLanguage: ["English", "Hindi", "Telugu"] },
      { "@type": "ContactPoint", telephone: "+91-99999-88888", contactType: "customer support", contactOption: "TollFree", availableLanguage: ["English", "Hindi"] },
    ],
    sameAs: [
      "https://www.linkedin.com/company/raksha-integrated-solutions",
      "https://www.youtube.com/@raksha",
      "https://www.instagram.com/raksha.work",
    ],
    areaServed: { "@type": "Country", name: "India" },
  };
}

// === LOCAL BUSINESS ===
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: COMPANY_NAME,
    image: `${SITE_URL}/logo.png`,
    telephone: PHONE,
    email: EMAIL,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hyderabad",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500000",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: "17.385", longitude: "78.4867" },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "19:00" },
    ],
    priceRange: "₹₹₹",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "120", bestRating: "5" },
  };
}

// === WEBSITE ===
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/projects?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

// === SERVICE (Dynamic per service page) ===
export function getServiceSchema(service: { name: string; description: string; url: string; category?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${SITE_URL}${service.url}`,
    serviceType: service.category || service.name,
    provider: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "India" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Services`,
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: service.name } },
      ],
    },
  };
}

// === FAQ (Dynamic per page) ===
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

// === REVIEW / TESTIMONIAL ===
export function getReviewSchema(reviews: { author: string; rating: number; text: string; date?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY_NAME,
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
      datePublished: r.date || "2024-01-01",
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: String(reviews.length),
      bestRating: "5",
    },
  };
}

// === BREADCRUMB ===
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

// === ARTICLE (Blog posts) ===
export function getArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}${article.url}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: { "@type": "Organization", name: COMPANY_NAME },
    publisher: {
      "@type": "Organization",
      name: COMPANY_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    image: article.image || `${SITE_URL}/og/default.jpg`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${article.url}` },
  };
}

// === PROJECT (Portfolio items) ===
export function getProjectSchema(project: {
  name: string;
  description: string;
  url: string;
  location: string;
  client?: string;
  value?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url: `${SITE_URL}${project.url}`,
    creator: { "@type": "Organization", name: COMPANY_NAME },
    locationCreated: { "@type": "Place", name: project.location },
    ...(project.client && { about: { "@type": "Organization", name: project.client } }),
  };
}

// === CONTACT PAGE ===
export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Raksha Integrated Solutions",
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: COMPANY_NAME,
      telephone: PHONE,
      email: EMAIL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
    },
  };
}

// === ABOUT PAGE ===
export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Raksha Integrated Solutions",
    url: `${SITE_URL}/about`,
    mainEntity: {
      "@type": "Organization",
      name: COMPANY_NAME,
      foundingDate: "2016",
      foundingLocation: "Hyderabad, India",
      description: "India's trusted partner for enterprise-grade CCTV, electrification, networking, and security infrastructure.",
    },
  };
}

// === HELPER: Render JSON-LD as script tag content ===
export function jsonLd(schema: Record<string, unknown> | Record<string, unknown>[]): string {
  return JSON.stringify(schema);
}
