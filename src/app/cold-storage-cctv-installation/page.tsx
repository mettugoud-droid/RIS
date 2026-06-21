import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "Cold Storage CCTV Installation | Raksha Infra",
  description:
    "Cameras rated for -40°C with anti-fog technology. Temperature event integration, condensation-proof cameras for cold storage surveillance.",
};

export default function Page() {
  const data = getLandingPageBySlug("cold-storage-cctv-installation")!;
  return <SEOLandingTemplate data={data} />;
}
