import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "Industrial Electrical Contractor in Bangalore | Raksha Infra",
  description:
    "Factory, warehouse, and commercial electrification across Bangalore & Karnataka. HT/LT panels, power distribution, transformers, 3-year warranty.",
};

export default function Page() {
  const data = getLandingPageBySlug("electrical-contractor-bangalore")!;
  return <SEOLandingTemplate data={data} />;
}
