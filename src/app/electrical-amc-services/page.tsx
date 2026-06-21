import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "Electrical AMC Services | Raksha Infra",
  description:
    "Preventive maintenance for panels, transformers, DG sets, and complete electrical infrastructure. Thermal imaging, 24/7 breakdown support, compliance reports.",
};

export default function Page() {
  const data = getLandingPageBySlug("electrical-amc-services")!;
  return <SEOLandingTemplate data={data} />;
}
