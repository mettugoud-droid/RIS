import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "HT & LT Panel Installation Services | Raksha",
  description: "Design, supply, and installation of HT panels and LT distribution boards.",
};

const data = getLandingPageBySlug("ht-lt-panel-installation");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
