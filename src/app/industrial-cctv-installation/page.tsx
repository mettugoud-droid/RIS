import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "Industrial CCTV Installation | Raksha Infra",
  description:
    "Heavy-duty surveillance for manufacturing plants, processing units, and industrial facilities. Explosion-proof cameras, thermal imaging, IP67 rated.",
};

export default function Page() {
  const data = getLandingPageBySlug("industrial-cctv-installation")!;
  return <SEOLandingTemplate data={data} />;
}
