import type { Metadata } from "next";
import { AboutPage } from "./AboutPage";

export const metadata: Metadata = {
  title: "About Us — Raksha Integrated Solutions | Industrial Infrastructure Experts",
  description:
    "8+ years securing and powering industrial infrastructure across India. 500+ projects, 50+ enterprise clients, 15+ cities. Meet the team behind India's trusted CCTV & electrification company.",
  keywords: [
    "about raksha integrated solutions",
    "industrial infrastructure company india",
    "cctv installation company",
    "electrification contractor about",
  ],
};

export default function Page() {
  return <AboutPage />;
}
