import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Industrial Electrical Contractor Bangalore | Raksha",
  description: "Factory and warehouse electrification across Bangalore and Karnataka.",
};

const data = getLandingPageBySlug("electrical-contractor-bangalore");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
