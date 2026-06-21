import type { Metadata } from "next";
import { CaseStudiesPage } from "./CaseStudiesPage";

export const metadata: Metadata = {
  title: "Case Studies — Raksha Integrated Solutions",
  description:
    "Explore our featured project case studies across CCTV installation, industrial electrification, networking, and facility management. Real results from real projects.",
};

export default function Page() {
  return <CaseStudiesPage />;
}
