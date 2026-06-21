import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Warehouse Surveillance Solutions | Raksha",
  description: "Surveillance for 3PL, logistics, and fulfillment centers. Reduce pilferage.",
};

const data = getLandingPageBySlug("warehouse-surveillance-solutions");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
