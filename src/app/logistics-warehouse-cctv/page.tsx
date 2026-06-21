import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "CCTV for Logistics & Warehouses | Raksha",
  description: "Purpose-built surveillance for 3PL operators and distribution hubs.",
};

const data = getLandingPageBySlug("logistics-warehouse-cctv");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
