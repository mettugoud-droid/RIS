import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Security System Integrator India | Raksha",
  description: "Pan-India security integration: CCTV, access control, fire safety, networking.",
};

const data = getLandingPageBySlug("security-system-integrator-india");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
