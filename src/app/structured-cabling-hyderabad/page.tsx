import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "Structured Cabling Services in Hyderabad | Raksha Infra",
  description:
    "Cat6/Cat6A cabling, fiber optics, and complete network infrastructure for offices and data centers in Hyderabad. 50,000+ points, 25-year warranty.",
};

export default function Page() {
  const data = getLandingPageBySlug("structured-cabling-hyderabad")!;
  return <SEOLandingTemplate data={data} />;
}
