import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "Best CCTV Company in Hyderabad | Raksha Infra",
  description:
    "Rated 4.9/5 on Google. 500+ projects completed. Enterprise-grade surveillance for businesses in Hyderabad. Free site survey, 3-year warranty.",
};

export default function Page() {
  const data = getLandingPageBySlug("best-cctv-company-hyderabad")!;
  return <SEOLandingTemplate data={data} />;
}
