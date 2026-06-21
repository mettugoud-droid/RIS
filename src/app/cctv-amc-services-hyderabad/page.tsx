import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "CCTV AMC Services Hyderabad | Raksha",
  description: "Annual maintenance for surveillance systems. 24/7 breakdown support.",
};

const data = getLandingPageBySlug("cctv-amc-services-hyderabad");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
