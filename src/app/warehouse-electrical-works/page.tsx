import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "Warehouse Electrical Works | Raksha Infra",
  description:
    "Complete power infrastructure for modern warehouses: high-bay LED lighting, power distribution, DG backup, and EV/MHE charging infrastructure.",
};

export default function Page() {
  const data = getLandingPageBySlug("warehouse-electrical-works")!;
  return <SEOLandingTemplate data={data} />;
}
