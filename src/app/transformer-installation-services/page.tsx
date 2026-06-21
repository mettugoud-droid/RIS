import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Transformer Installation & Commissioning | Raksha",
  description: "Transformers from 100 kVA to 5000 kVA. Installation and commissioning.",
};

const data = getLandingPageBySlug("transformer-installation-services");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
