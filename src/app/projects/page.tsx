import type { Metadata } from "next";
import { ProjectsPortfolio } from "./ProjectsPortfolio";

export const metadata: Metadata = {
  title: "Our Projects — 500+ Completed | Raksha Infra",
  description:
    "Browse 500+ successful CCTV, electrification, networking, and security projects across warehouses, factories, corporate offices, and industrial parks in India.",
  keywords: [
    "cctv installation projects",
    "warehouse security projects",
    "industrial electrification portfolio",
    "infrastructure project case studies",
  ],
};

export default function Page() {
  return <ProjectsPortfolio />;
}
