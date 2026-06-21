import type { Metadata } from "next";
import { WhitepapersPage } from "./WhitepapersPage";

export const metadata: Metadata = {
  title: "Whitepapers & Guides — Raksha Integrated Solutions",
  description:
    "Download free guides on warehouse security, industrial electrification, CCTV planning, and facility management from Raksha Integrated Solutions.",
};

export default function Page() {
  return <WhitepapersPage />;
}
