import type { Metadata } from "next";
import { CorporateProfilePage } from "./CorporateProfilePage";

export const metadata: Metadata = {
  title: "Download Corporate Profile | Raksha Integrated Solutions",
  description: "Download our comprehensive corporate profile. 40 pages covering capabilities, certifications, key projects, and client testimonials.",
};

export default function Page() {
  return <CorporateProfilePage />;
}
