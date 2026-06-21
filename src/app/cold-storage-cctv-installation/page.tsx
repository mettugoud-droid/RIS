import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Cold Storage CCTV Installation | Raksha",
  description: "Cameras rated for -40C. Anti-fog technology. Temperature integration.",
};

const data = getLandingPageBySlug("cold-storage-cctv-installation");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
