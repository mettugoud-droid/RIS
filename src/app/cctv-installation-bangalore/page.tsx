import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "Professional CCTV Installation in Bangalore | Raksha Infra",
  description:
    "Enterprise-grade CCTV installation in Bangalore for warehouses, offices, and factories. 4K IP cameras, AI analytics, 3-year warranty. Free site survey.",
};

export default function Page() {
  const data = getLandingPageBySlug("cctv-installation-bangalore")!;
  return <SEOLandingTemplate data={data} />;
}
