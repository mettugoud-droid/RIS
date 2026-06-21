import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "Industrial Electrical Contractor in Hyderabad | Raksha Infra",
  description:
    "HT/LT panels, transformers, power distribution, and complete industrial electrification in Hyderabad. 5000+ kVA installed, 100% CEIG compliance.",
};

export default function Page() {
  const data = getLandingPageBySlug("electrical-contractor-hyderabad")!;
  return <SEOLandingTemplate data={data} />;
}
