import type { Metadata } from "next";
import { NetworkingSolutionsPage } from "./NetworkingSolutionsPage";

export const metadata: Metadata = {
  title: "Networking & Structured Cabling | Raksha Integrated Solutions",
  description:
    "Enterprise networking solutions including structured cabling, fiber optic installation, data center infrastructure, and Wi-Fi solutions for businesses and industries.",
  keywords: [
    "structured cabling contractor",
    "fiber optic installation",
    "enterprise networking solutions",
    "data center cabling",
    "Cat6 installation",
    "Wi-Fi solutions",
  ],
};

export default function Page() {
  return <NetworkingSolutionsPage />;
}
