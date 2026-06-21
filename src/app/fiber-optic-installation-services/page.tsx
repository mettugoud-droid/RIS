import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Fiber Optic Installation Services | Raksha",
  description: "Single-mode and multi-mode fiber for campus and inter-building connectivity.",
};

const data = getLandingPageBySlug("fiber-optic-installation-services");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
