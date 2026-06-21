import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Structured Cabling Services Hyderabad | Raksha",
  description: "Cat6/Cat6A cabling, fiber optics for offices and data centers in Hyderabad.",
};

const data = getLandingPageBySlug("structured-cabling-hyderabad");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
