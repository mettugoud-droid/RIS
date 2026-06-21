import type { Metadata } from "next";
import { BlogListingPage } from "./BlogListingPage";

export const metadata: Metadata = {
  title: "Blog — Security, Electrification & Infrastructure Insights | Raksha Infra",
  description:
    "Expert guides on CCTV installation costs, warehouse security design, industrial electrification, fire compliance, access control, and AMC best practices.",
  keywords: [
    "cctv installation guide",
    "warehouse security blog",
    "industrial electrification tips",
    "fire alarm compliance",
    "infrastructure blog",
  ],
};

export default function Page() {
  return <BlogListingPage />;
}
