import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Complete Warehouse Security Systems | Raksha",
  description: "End-to-end warehouse security: CCTV, access control, perimeter protection.",
};

const data = getLandingPageBySlug("warehouse-security-systems");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
