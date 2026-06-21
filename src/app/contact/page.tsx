import type { Metadata } from "next";
import { ContactPage } from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact Us — Raksha Integrated Solutions | Get Free Site Survey",
  description:
    "Contact Raksha Integrated Solutions for CCTV installation, electrification, networking, and security projects. Office in Hyderabad. Free site survey. 24/7 support.",
  keywords: [
    "contact raksha integrated solutions",
    "cctv installation enquiry",
    "industrial electrification quote",
    "free site survey hyderabad",
  ],
};

export default function Page() {
  return <ContactPage />;
}
