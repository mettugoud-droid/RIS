"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import {
  Camera,
  Zap,
  Network,
  ShieldCheck,
  Flame,
  Wrench,
  ArrowRight,
  Phone,
  Check,
  Warehouse,
  TrendingDown,
  FileCheck,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Camera,
    title: "Warehouse CCTV & Surveillance",
    desc: "4K IP cameras with AI analytics, 30-90 day storage, loading dock monitoring, and ANPR at gates.",
    features: ["4K IP Cameras", "AI Motion Analytics", "ANPR at Gates", "Cloud Backup"],
  },
  {
    icon: Zap,
    title: "Electrification & Lighting",
    desc: "Complete power distribution, high-bay LED lighting, DG backup, and EV/MHE charging infrastructure.",
    features: ["High-Bay LEDs", "Power Distribution", "DG Backup", "EV Charging"],
  },
  {
    icon: Network,
    title: "Networking & Cabling",
    desc: "Cat6/Cat6A structured cabling, fiber backbone, Wi-Fi 6 coverage, and WMS network support.",
    features: ["Cat6A Cabling", "Fiber Optic", "Wi-Fi 6", "WMS Integration"],
  },
  {
    icon: ShieldCheck,
    title: "Access Control Systems",
    desc: "Biometric entry, boom barriers, RFID cards, visitor management, and attendance integration.",
    features: ["Biometric Access", "Boom Barriers", "Visitor Management", "HR Integration"],
  },
  {
    icon: Flame,
    title: "Fire Alarm & Safety",
    desc: "Addressable fire detection, smoke detectors, PA/EVAC systems, and NBC compliance.",
    features: ["Addressable Systems", "Voice Evacuation", "NBC Compliance", "Fire NOC"],
  },
  {
    icon: Wrench,
    title: "Annual Maintenance (AMC)",
    desc: "Preventive maintenance, 24/7 breakdown support, quarterly PM visits, and health reports.",
    features: ["Quarterly PM", "24/7 Breakdown", "2hr Response", "Health Reports"],
  },
];

const whyStats = [
  { icon: AlertTriangle, value: "₹4,000 Cr", label: "Annual warehouse theft in India" },
  { icon: TrendingDown, value: "40%", label: "Theft reduction with CCTV" },
  { icon: FileCheck, value: "100%", label: "Insurance compliance needed" },
];

function StatCounter({
  value,
  suffix,
  label,
  isInView,
}: {
  value: number;
  suffix: string;
  label: string;
  isInView: boolean;
}) {
  const count = useCountUp(value, 2000, isInView);
  return (
    <div className="text-center">
      <div className="flex items-baseline justify-center gap-0.5">
        <span className="text-3xl sm:text-4xl font-extrabold text-white">{count}</span>
        <span className="text-xl font-bold text-electric-500">{suffix}</span>
      </div>
      <p className="text-xs font-medium text-grey-400 uppercase tracking-wider mt-1">{label}</p>
    </div>
  );
}

export function ThreePLWarehousesPage() {
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    requirement: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "3pl-logistics-warehouses" }),
      });
      setFormSubmitted(true);
    } catch {
      // handle silently
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900">
        {/* Hero */}
        <section className="relative pt-28 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 dot-grid opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-radial-blue opacity-30" />

          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <Warehouse className="w-4 h-4 text-electric-500" />
                <span className="text-sm text-grey-300">3PL &amp; Logistics Infrastructure</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto">
                Infrastructure Solutions for{" "}
                <span className="gradient-text">3PL, Logistics &amp; Warehouses</span>
              </h1>
              <p className="text-lg text-grey-400 max-w-3xl mx-auto mb-8">
                End-to-end CCTV, electrification, networking, access control, and fire safety for
                warehouses, fulfillment centers, and distribution hubs across India.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/rfq"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-cta text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-electric-500/20"
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-grey-600 text-white font-semibold hover:border-electric-500 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Warehouses Need Us */}
        <section className="py-16 px-4 border-t border-navy-700">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Why Warehouses Need Professional Infrastructure
              </h2>
              <p className="text-grey-400 max-w-2xl mx-auto">
                The logistics industry faces unique challenges — high-value inventory, compliance
                requirements, and 24/7 operations demand enterprise-grade solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {whyStats.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 text-center glass-hover"
                >
                  <item.icon className="w-10 h-10 text-electric-500 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">{item.value}</div>
                  <p className="text-sm text-grey-400">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services for Warehouses */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Complete Warehouse Infrastructure Services
              </h2>
              <p className="text-grey-400 max-w-2xl mx-auto">
                One partner for all your warehouse infrastructure needs — from security to power to
                connectivity.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass rounded-2xl p-6 glass-hover group"
                >
                  <service.icon className="w-10 h-10 text-electric-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-grey-400 mb-4">{service.desc}</p>
                  <div className="space-y-2">
                    {service.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-electric-500 shrink-0" />
                        <span className="text-xs text-grey-300">{f}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Success Stats */}
        <section ref={statsRef} className="py-16 px-4 border-t border-navy-700">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Trusted by India&apos;s Leading Warehouse Operators
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCounter value={200} suffix="+" label="Warehouses" isInView={statsInView} />
              <StatCounter value={40} suffix="%" label="Theft Reduction" isInView={statsInView} />
              <StatCounter value={15} suffix="+" label="Cities" isInView={statsInView} />
              <StatCounter value={99} suffix="%" label="Uptime" isInView={statsInView} />
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <section className="py-16 px-4">
          <div className="max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-8"
            >
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-grey-400">Our team will contact you within 2 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-white mb-1 text-center">
                    Get a Free Warehouse Assessment
                  </h3>
                  <p className="text-sm text-grey-400 mb-6 text-center">
                    Our engineers will visit your site and provide a detailed proposal
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
                    <select
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white focus:outline-none focus:border-electric-500 transition-colors"
                    >
                      <option value="">Select Service Needed</option>
                      <option value="cctv">CCTV & Surveillance</option>
                      <option value="electrification">Electrification & Lighting</option>
                      <option value="networking">Networking & Cabling</option>
                      <option value="access-control">Access Control</option>
                      <option value="fire-alarm">Fire Alarm Systems</option>
                      <option value="amc">AMC / Maintenance</option>
                      <option value="complete">Complete Infrastructure</option>
                    </select>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg gradient-cta text-white font-semibold hover:scale-[1.02] transition-transform shadow-lg shadow-electric-500/20"
                    >
                      Get Free Assessment
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
