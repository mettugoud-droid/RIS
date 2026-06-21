import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "Transformer Installation & Commissioning | Raksha Infra",
  description:
    "Oil and dry-type transformers from 100 kVA to 5000 kVA. Professional installation, testing, commissioning, and CEIG documentation.",
};

export default function Page() {
  const data = getLandingPageBySlug("transformer-installation-services")!;
  return <SEOLandingTemplate data={data} />;
}
