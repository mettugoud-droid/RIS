import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Electrical AMC Services | Raksha",
  description: "Preventive maintenance for panels, transformers, DG sets.",
};

const data = getLandingPageBySlug("electrical-amc-services");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
