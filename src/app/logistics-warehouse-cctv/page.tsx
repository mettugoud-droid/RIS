import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "CCTV for Logistics & Warehouses | Raksha Infra",
  description:
    "Purpose-built surveillance for 3PL operators, fulfillment centers, and distribution hubs. ANPR, multi-location dashboard, AI-based counting.",
};

export default function Page() {
  const data = getLandingPageBySlug("logistics-warehouse-cctv")!;
  return <SEOLandingTemplate data={data} />;
}
