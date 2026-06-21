import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Raksha Integrated Solutions",
  description: "Privacy Policy for Raksha Integrated Solutions. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900 pt-32 pb-20 px-4">
        <article className="max-w-3xl mx-auto prose prose-invert prose-sm">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-grey-400 mb-8">Last updated: June 2026</p>

          <div className="space-y-8 text-grey-300 leading-relaxed text-sm">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
              <p>Raksha Integrated Solutions (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website www.raksha.work. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
              <p className="mt-2">We comply with the India Digital Personal Data Protection (DPDP) Act 2023, and align with GDPR principles for international users.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
              <h3 className="text-base font-medium text-white mt-4 mb-2">2.1 Personal Information (Provided by You)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name, email address, phone number</li>
                <li>Company name and designation</li>
                <li>Project location and requirements</li>
                <li>Budget range and timeline preferences</li>
                <li>Documents uploaded via RFQ forms</li>
              </ul>
              <h3 className="text-base font-medium text-white mt-4 mb-2">2.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>IP address and browser type</li>
                <li>Device information and screen resolution</li>
                <li>Pages visited, time spent, click patterns</li>
                <li>Referral source and UTM parameters</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>To respond to your enquiries and provide quotations</li>
                <li>To schedule site surveys and project consultations</li>
                <li>To process RFQ submissions and generate proposals</li>
                <li>To send project updates via WhatsApp or email</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
                <li>To prevent fraud and ensure security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Services</h2>
              <p>We use the following third-party services that may process your data:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Zoho CRM</strong> — Customer relationship management and lead tracking</li>
                <li><strong>WhatsApp Business API (Meta)</strong> — Communication and notifications</li>
                <li><strong>Google Analytics 4</strong> — Website analytics and conversion tracking</li>
                <li><strong>Google Tag Manager</strong> — Tag management</li>
                <li><strong>Meta Pixel (Facebook)</strong> — Advertising optimization</li>
                <li><strong>LinkedIn Insight Tag</strong> — B2B advertising</li>
                <li><strong>Vercel</strong> — Website hosting and deployment</li>
                <li><strong>Supabase/PostgreSQL</strong> — Database storage</li>
              </ul>
              <p className="mt-2">Each service has its own privacy policy. We ensure all processors comply with applicable data protection laws.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Data Retention</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Lead data: Retained for 3 years from last interaction</li>
                <li>Project data: Retained for 7 years (contractual obligation)</li>
                <li>Analytics data: Retained for 26 months</li>
                <li>Communication logs: Retained for 2 years</li>
              </ul>
              <p className="mt-2">You may request deletion at any time by contacting us at info@raksha.work.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights (DPDP Act & GDPR)</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Right to Access</strong> — Request a copy of your personal data</li>
                <li><strong>Right to Correction</strong> — Request correction of inaccurate data</li>
                <li><strong>Right to Erasure</strong> — Request deletion of your data</li>
                <li><strong>Right to Withdraw Consent</strong> — Withdraw consent at any time</li>
                <li><strong>Right to Grievance Redressal</strong> — File a complaint with us or the Data Protection Board</li>
                <li><strong>Right to Nominate</strong> — Nominate a person to exercise rights on your behalf</li>
              </ul>
              <p className="mt-2">To exercise any right, email: <a href="mailto:info@raksha.work" className="text-electric-400">info@raksha.work</a></p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. WhatsApp Communication</h2>
              <p>When you provide your phone number, we may send:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Acknowledgment of enquiry receipt</li>
                <li>RFQ status updates</li>
                <li>Site survey confirmations</li>
                <li>Proposal notifications</li>
              </ul>
              <p className="mt-2">You can opt out of WhatsApp messages at any time by replying &quot;STOP&quot; or contacting us.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Security Measures</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>SSL/TLS encryption for all data in transit</li>
                <li>Rate limiting and bot protection on forms</li>
                <li>Access controls and authentication for internal systems</li>
                <li>Regular security audits</li>
                <li>Data encryption at rest</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Cookie Policy</h2>
              <p>We use cookies for analytics and advertising. See our <a href="/cookie-policy" className="text-electric-400">Cookie Policy</a> for details.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Contact — Data Protection</h2>
              <p>For privacy-related queries:</p>
              <p className="mt-2"><strong>Raksha Integrated Solutions</strong><br />Email: info@raksha.work<br />Phone: +91 99999 99999<br />Address: Hyderabad, Telangana, India</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">11. Changes to This Policy</h2>
              <p>We may update this policy periodically. Changes will be posted on this page with an updated date. Continued use of our website constitutes acceptance of the revised policy.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
