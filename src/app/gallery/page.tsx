import type { Metadata } from "next";
import { GalleryPage } from "./GalleryPage";

export const metadata: Metadata = {
  title: "Project Gallery — Raksha Integrated Solutions",
  description: "Browse our project gallery — CCTV installations, electrical panels, networking infrastructure, access control, and fire alarm systems across India.",
  keywords: ["cctv installation photos", "electrical panel gallery", "warehouse security images", "industrial project gallery"],
};

export default function Page() {
  return <GalleryPage />;
}
