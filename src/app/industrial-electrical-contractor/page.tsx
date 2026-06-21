import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Industrial Electrical Contractor | Raksha",
  description: "Turnkey electrification for factories and industrial facilities.",
};

const data = getLandingPageBySlug("industrial-electrical-contractor");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
