"use client";

import { useState } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import {
  AlertTriangle,
  Phone,
  MessageCircle,
  Camera,
  Zap,
  Flame,
  Network,
  Clock,
  Check,
  ShieldAlert,
  Loader2,
} from "lucide-react";

const emergencyServices = [
  {
    icon: Camera,
    title: "CCTV System Failure",
    description: "Cameras offline, NVR crash, recording failure, or complete system down.",
    response: "2 hours",
  },
  {
    icon: Zap,
    title: "Electrical Breakdown",
    description: "Power failure, panel trip, short circuit, transformer issues, or DG failure.",
    response: "2 hours",
  },
  {
    icon: Flame,
    title: "Fire Alarm Emergency",
    description: "False alarms, panel fault, zone failure, or detector malfunction.",
    response: "2 hours",
  },
  {
    icon: Network,
    title: "Network Down",
    description: "Internet outage, switch failure, Wi-Fi down, or structured cabling issues.",
    response: "4 hours",
  },
];

const responseTiers = [
  {
    tier: "Critical (P1)",
    time: "2 Hours",
    description: "Complete system down — no surveillance, no power, or fire alarm failure.",
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
  },
  {
    tier: "High (P2)",
    time: "4 Hours",
    description: "Partial system failure — some cameras down, intermittent issues, or degraded performance.",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
  },
];

export function EmergencySupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    issue: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "emergency-support", urgent: false }),
      });
      setSubmitted(true);
    } catch {
      // Handle silently
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900">
        {/* Hero */}
        <section className="relative pt-28 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-navy-900" />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-6">
              <ShieldAlert className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-300 font-medium">Emergency Response Team</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              24/7 Emergency <span className="text-red-400">Support</span>
            </h1>
            <p className="text-lg text-grey-400 max-w-2xl mx-auto mb-8">
              System down? Our emergency response team is available round the clock. Guaranteed
              response within 2 hours for critical issues.
            </p>

            {/* Emergency Contact */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="tel:+919999988888"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-red-500 text-white font-bold text-lg hover:bg-red-600 transition-colors shadow-lg shadow-red-500/30"
              >
                <Phone className="w-6 h-6" />
                Call Emergency: +91 99999 88888
              </a>
              <a
                href="https://wa.me/919999988888?text=EMERGENCY%3A%20System%20down"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-green-600 text-white font-bold text-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-600/30"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Emergency
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-grey-400">
              <Clock className="w-4 h-4 text-electric-500" />
              <span>Available 24/7 including weekends and holidays</span>
            </div>
          </div>
        </section>

        {/* Emergency Services */}
        <section className="py-16 px-4 border-t border-navy-700">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-10">
              We Respond To
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergencyServices.map((service) => (
                <div key={service.title} className="glass rounded-2xl p-6 text-center">
                  <service.icon className="w-10 h-10 text-red-400 mx-auto mb-4" />
                  <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-xs text-grey-400 mb-4">{service.description}</p>
                  <div className="flex items-center justify-center gap-1 text-sm font-semibold text-electric-500">
                    <Clock className="w-4 h-4" />
                    {service.response}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Response Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-10">
              Response Time Guarantees
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {responseTiers.map((tier) => (
                <div
                  key={tier.tier}
                  className={`rounded-2xl p-6 ${tier.bgColor} border ${tier.borderColor}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className={`w-5 h-5 ${tier.color}`} />
                    <h3 className={`text-lg font-bold ${tier.color}`}>{tier.tier}</h3>
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-2">{tier.time}</div>
                  <p className="text-sm text-grey-400">{tier.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 glass rounded-xl p-6">
              <h3 className="text-base font-bold text-white mb-3">What&apos;s Included</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Remote troubleshooting within 30 mins",
                  "On-site engineer within guaranteed time",
                  "Spare parts inventory for common failures",
                  "Escalation to OEM if hardware replacement needed",
                  "Post-incident report within 24 hours",
                  "Root cause analysis and prevention plan",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-electric-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-grey-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Non-Emergency Form */}
        <section className="py-16 px-4 border-t border-navy-700">
          <div className="max-w-lg mx-auto">
            <div className="glass rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Request Received</h3>
                  <p className="text-grey-400">Our team will contact you within 2 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-white mb-1 text-center">
                    Non-Emergency Request
                  </h3>
                  <p className="text-sm text-grey-400 mb-6 text-center">
                    Not urgent? Fill this form and we will get back to you within 2 hours during
                    business hours.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder:text-grey-500 focus:outline-none focus:border-electric-500 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder:text-grey-500 focus:outline-none focus:border-electric-500 transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder:text-grey-500 focus:outline-none focus:border-electric-500 transition-colors"
                    />
                    <textarea
                      placeholder="Describe your issue *"
                      required
                      rows={3}
                      value={formData.issue}
                      onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder:text-grey-500 focus:outline-none focus:border-electric-500 transition-colors resize-none"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 rounded-lg gradient-cta text-white font-semibold hover:scale-[1.02] transition-transform disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                      {loading ? "Submitting..." : "Submit Request"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
