import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";
import { landingPages } from "@/lib/data/landing-pages";

const BASE_URL = "https://www.raksha.work";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/projects`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/rfq`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE_URL}/downloads/corporate-profile`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/industries/3pl-logistics-warehouses`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  // Solution pages
  const solutionSlugs = [
    "warehouse-cctv-installation",
    "industrial-electrification",
    "access-control-systems",
    "fire-alarm-systems",
    "networking-solutions",
    "amc-services",
  ];
  const solutionPages: MetadataRoute.Sitemap = solutionSlugs.map((slug) => ({
    url: `${BASE_URL}/solutions/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Tool pages
  const toolSlugs = ["cctv-calculator", "electrical-load-calculator", "project-cost-estimator", "amc-cost-calculator"];
  const toolPages: MetadataRoute.Sitemap = toolSlugs.map((slug) => ({
    url: `${BASE_URL}/tools/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Project detail pages
  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // SEO landing pages
  const landingPageRoutes: MetadataRoute.Sitemap = landingPages.map((lp) => ({
    url: `${BASE_URL}/${lp.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...solutionPages,
    ...toolPages,
    ...projectPages,
    ...landingPageRoutes,
  ];
}
