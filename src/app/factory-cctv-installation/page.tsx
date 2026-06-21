import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "Factory CCTV Installation Services | Raksha Infra",
  description:
    "Production floor monitoring, safety compliance, and theft prevention for manufacturing units. Vandal-proof cameras, MES integration.",
};

export default function Page() {
  const data = getLandingPageBySlug("factory-cctv-installation")!;
  return <SEOLandingTemplate data={data} />;
}
