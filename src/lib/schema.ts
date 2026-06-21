// JSON-LD Structured Data for SEO

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Raksha Integrated Solutions",
    alternateName: "Raksha Infra",
    url: "https://raksha.co.in",
    logo: "https://raksha.co.in/logo.png",
    description: "India's leading industrial CCTV installation & electrification contractor. Warehouse surveillance, power distribution, networking, and AMC services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hyderabad",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500000",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-99999-99999",
      contactType: "sales",
      availableLanguage: ["English", "Hindi", "Telugu"],
    },
    sameAs: [
      "https://www.linkedin.com/company/raksha-integrated-solutions",
      "https://www.youtube.com/@raksha",
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
      maxValue: 100,
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://raksha.co.in",
    name: "Raksha Integrated Solutions",
    image: "https://raksha.co.in/og/default.jpg",
    telephone: "+91-99999-99999",
    email: "info@raksha.co.in",
    url: "https://raksha.co.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hyderabad",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500000",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.385",
      longitude: "78.4867",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "₹₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120",
      bestRating: "5",
    },
  };
}

export function getServiceSchema(service: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Raksha Integrated Solutions",
      url: "https://raksha.co.in",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url: service.url,
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
