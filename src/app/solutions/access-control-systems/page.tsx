import type { Metadata } from "next";
import { AccessControlPage } from "./AccessControlPage";

export const metadata: Metadata = {
  title: "Access Control Systems | Raksha Integrated Solutions",
  description:
    "Biometric access control, RFID systems, boom barriers, turnstiles, and integrated security solutions for corporate offices, factories, and warehouses.",
  keywords: [
    "access control systems",
    "biometric access control",
    "RFID access system",
    "boom barrier installation",
    "turnstile installation",
    "visitor management system",
  ],
};

export default function Page() {
  return <AccessControlPage />;
}
