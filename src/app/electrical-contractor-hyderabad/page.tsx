import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Industrial Electrical Contractor Hyderabad | Raksha",
  description: "HT/LT panels, transformers, power distribution in Hyderabad.",
};

const data = getLandingPageBySlug("electrical-contractor-hyderabad");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
