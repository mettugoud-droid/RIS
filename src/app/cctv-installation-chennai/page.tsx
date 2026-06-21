import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "CCTV Installation Company in Chennai | Raksha",
  description: "Industrial surveillance and warehouse monitoring across Chennai. Free survey.",
};

const data = getLandingPageBySlug("cctv-installation-chennai");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
