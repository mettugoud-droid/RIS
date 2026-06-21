import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy — Raksha Integrated Solutions",
  description: "Cookie Policy for Raksha Integrated Solutions. Learn about how we use cookies and tracking technologies.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900 pt-32 pb-20 px-4">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Cookie Policy</h1>
          <p className="text-grey-400 mb-8 text-sm">Last updated: June 2026</p>

          <div className="space-y-8 text-grey-300 leading-relaxed text-sm">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. What Are Cookies</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and understand how you interact with the site.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Cookies We Use</h2>

              <h3 className="text-base font-medium text-white mt-4 mb-2">2.1 Essential Cookies</h3>
              <p>Required for website functionality. Cannot be disabled.</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Session management</li>
                <li>Security tokens</li>
                <li>Form submission tracking</li>
              </ul>

              <h3 className="text-base font-medium text-white mt-4 mb-2">2.2 Analytics Cookies</h3>
              <p>Help us understand website usage and improve performance.</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Google Analytics 4 (_ga, _ga_*)</strong> — Page views, sessions, user behavior. Retention: 26 months.</li>
                <li><strong>Session ID (ris_session)</strong> — Session tracking for conversion analytics. Retention: Session only.</li>
              </ul>

              <h3 className="text-base font-medium text-white mt-4 mb-2">2.3 Marketing Cookies</h3>
              <p>Used for advertising and remarketing.</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Meta Pixel (_fbp)</strong> — Facebook/Instagram ad optimization. Retention: 90 days.</li>
                <li><strong>LinkedIn Insight (li_sugr, bcookie)</strong> — LinkedIn ad targeting. Retention: 90 days.</li>
                <li><strong>Google Ads (_gcl_*)</strong> — Google Ads conversion tracking. Retention: 90 days.</li>
              </ul>

              <h3 className="text-base font-medium text-white mt-4 mb-2">2.4 Functional Cookies</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>UTM Parameters (ris_utm)</strong> — Campaign attribution. Retention: Session only.</li>
                <li><strong>Form Progress</strong> — Saves multi-step form progress. Retention: Session only.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Third-Party Cookies</h2>
              <table className="w-full text-xs border border-navy-600 rounded-lg overflow-hidden mt-3">
                <thead className="bg-navy-700">
                  <tr><th className="p-2 text-left text-grey-300">Service</th><th className="p-2 text-left text-grey-300">Purpose</th><th className="p-2 text-left text-grey-300">Provider</th></tr>
                </thead>
                <tbody className="divide-y divide-navy-600">
                  <tr><td className="p-2">Google Analytics</td><td className="p-2">Usage analytics</td><td className="p-2">Google LLC</td></tr>
                  <tr><td className="p-2">Google Tag Manager</td><td className="p-2">Tag management</td><td className="p-2">Google LLC</td></tr>
                  <tr><td className="p-2">Meta Pixel</td><td className="p-2">Ad optimization</td><td className="p-2">Meta Platforms</td></tr>
                  <tr><td className="p-2">LinkedIn Insight</td><td className="p-2">B2B advertising</td><td className="p-2">LinkedIn Corp</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Managing Cookies</h2>
              <p>You can control cookies through your browser settings:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                <li><strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
              </ul>
              <p className="mt-2">Note: Disabling cookies may affect website functionality.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Opt-Out Links</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-electric-400" target="_blank" rel="noopener noreferrer">Google Analytics Opt-Out</a></li>
                <li>Meta: <a href="https://www.facebook.com/settings/?tab=ads" className="text-electric-400" target="_blank" rel="noopener noreferrer">Facebook Ad Preferences</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/psettings/advertising" className="text-electric-400" target="_blank" rel="noopener noreferrer">LinkedIn Ad Settings</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Updates</h2>
              <p>We may update this Cookie Policy as we add or change tracking technologies. Check this page periodically for updates.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Contact</h2>
              <p>For cookie-related queries:<br />Email: <a href="mailto:info@raksha.work" className="text-electric-400">info@raksha.work</a></p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
