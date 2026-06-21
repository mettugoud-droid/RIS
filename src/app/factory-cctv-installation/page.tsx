import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Factory CCTV Installation Services | Raksha",
  description: "Production floor monitoring, safety compliance, theft prevention for factories.",
};

const data = getLandingPageBySlug("factory-cctv-installation");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
