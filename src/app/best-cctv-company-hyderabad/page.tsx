import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Best CCTV Company in Hyderabad | Raksha",
  description: "Rated 4.9/5 on Google. 500+ projects. Enterprise-grade surveillance.",
};

const data = getLandingPageBySlug("best-cctv-company-hyderabad");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
