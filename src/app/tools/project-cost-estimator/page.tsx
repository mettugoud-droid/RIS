import type { Metadata } from "next";
import { ProjectCostEstimator } from "./ProjectCostEstimator";

export const metadata: Metadata = {
  title: "Project Cost Estimator | Raksha Integrated Solutions",
  description:
    "Get an instant budget estimate for your CCTV, electrification, networking, or security project. Input your requirements and receive a detailed cost breakdown.",
};

export default function Page() {
  return <ProjectCostEstimator />;
}
