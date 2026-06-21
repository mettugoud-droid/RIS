import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Industrial CCTV Installation | Raksha",
  description: "Heavy-duty surveillance for manufacturing plants and industrial facilities.",
};

const data = getLandingPageBySlug("industrial-cctv-installation");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
