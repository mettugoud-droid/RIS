import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "Industrial Electrical Contractor | Raksha Infra",
  description:
    "Turnkey electrification for factories, plants, and industrial facilities. Greenfield & brownfield projects. Pan-India execution, 100% CEIG compliance.",
};

export default function Page() {
  const data = getLandingPageBySlug("industrial-electrical-contractor")!;
  return <SEOLandingTemplate data={data} />;
}
