import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "CCTV Installation Services in Mumbai | Raksha",
  description: "Warehouse, factory, and corporate CCTV in Mumbai. 500+ projects. Free site survey.",
};

const data = getLandingPageBySlug("cctv-installation-mumbai");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
