import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — Raksha Integrated Solutions",
  description: "Terms and Conditions for Raksha Integrated Solutions website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900 pt-32 pb-20 px-4">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Terms & Conditions</h1>
          <p className="text-grey-400 mb-8 text-sm">Last updated: June 2026</p>

          <div className="space-y-8 text-grey-300 leading-relaxed text-sm">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>By accessing www.raksha.work, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Services</h2>
              <p>Raksha Integrated Solutions provides industrial infrastructure services including CCTV installation, electrification, networking, access control, fire alarm systems, and annual maintenance contracts. Service scope, pricing, and timelines are defined in individual project proposals and contracts.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Website Use</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>The website is for informational and lead generation purposes</li>
                <li>Cost estimates from calculators are approximate and non-binding</li>
                <li>Final pricing is provided only through formal quotations</li>
                <li>You agree not to misuse forms or submit false information</li>
                <li>Automated scraping or bot access is prohibited</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. RFQ Submissions</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>RFQ submissions are treated as enquiries, not purchase orders</li>
                <li>We aim to respond within 48 hours but do not guarantee response time</li>
                <li>Submitted documents are treated as confidential</li>
                <li>We reserve the right to decline any RFQ</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Quotations & Proposals</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Quotations are valid for 30 days unless stated otherwise</li>
                <li>Prices are subject to change based on site conditions</li>
                <li>A formal purchase order or work order is required to begin work</li>
                <li>Payment terms are defined in individual proposals</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Intellectual Property</h2>
              <p>All content on this website — including text, images, designs, logos, and code — is the property of Raksha Integrated Solutions and is protected by intellectual property laws. Unauthorized reproduction is prohibited.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
              <p>Raksha Integrated Solutions shall not be liable for any indirect, incidental, or consequential damages arising from use of this website or reliance on calculator estimates. Our total liability is limited to the value of services contracted.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Warranty & Support</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Product warranties are as per manufacturer terms</li>
                <li>Installation workmanship warranty: 1-3 years (project-specific)</li>
                <li>AMC terms are defined in individual AMC agreements</li>
                <li>Warranty is void if equipment is tampered with by unauthorized personnel</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Governing Law</h2>
              <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Hyderabad, Telangana.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
              <p>For questions about these terms:<br /><strong>Raksha Integrated Solutions</strong><br />Email: <a href="mailto:info@raksha.work" className="text-electric-400">info@raksha.work</a><br />Phone: +91 99999 99999</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
