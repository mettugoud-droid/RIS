import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "CCTV Installation Experts in Pune | Raksha",
  description: "Factory, warehouse, and office CCTV in Pune. Leading industrial contractor.",
};

const data = getLandingPageBySlug("cctv-installation-pune");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
