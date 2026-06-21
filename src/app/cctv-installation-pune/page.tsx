import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "CCTV Installation Experts in Pune | Raksha Infra",
  description:
    "Factory, warehouse, and office surveillance in Pune. IP camera systems, enterprise NVR, ANPR cameras. Pune's leading industrial CCTV contractor.",
};

export default function Page() {
  const data = getLandingPageBySlug("cctv-installation-pune")!;
  return <SEOLandingTemplate data={data} />;
}
