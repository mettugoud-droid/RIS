import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Professional CCTV Installation in Bangalore | Raksha",
  description: "Enterprise-grade CCTV installation in Bangalore. 4K IP cameras, AI analytics, 3-year warranty. Free site survey.",
};

const data = getLandingPageBySlug("cctv-installation-bangalore");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
