import type { Metadata } from "next";
import { VideosPage } from "./VideosPage";

export const metadata: Metadata = {
  title: "Videos — Raksha Integrated Solutions",
  description:
    "Watch project walkthroughs, installation processes, client testimonials, and educational videos about CCTV, electrification, and industrial infrastructure.",
};

export default function Page() {
  return <VideosPage />;
}
