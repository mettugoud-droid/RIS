import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Warehouse Electrical Works | Raksha",
  description: "Complete power infrastructure for modern warehouses.",
};

const data = getLandingPageBySlug("warehouse-electrical-works");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
