import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "Warehouse Surveillance Solutions | Raksha Infra",
  description:
    "Designed for 3PL, logistics, and fulfillment centers. Reduce pilferage by 40%, improve accountability with AI-powered warehouse surveillance.",
};

export default function Page() {
  const data = getLandingPageBySlug("warehouse-surveillance-solutions")!;
  return <SEOLandingTemplate data={data} />;
}
