"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { Zap, Shield, Clock, Phone, ArrowRight, Check, MapPin, Star } from "lucide-react";

const stats = [
  { value: 200, suffix: "+", label: "Electrical Projects" },
  { value: 5000, suffix: "+", label: "kVA Installed" },
  { value: 100, suffix: "%", label: "CEIG Compliance" },
  { value: 3, suffix: "yr", label: "Warranty" },
];

const services = [
  "HT/LT Panel Installation",
  "Transformer Installation & Commissioning",
  "DG Synchronization & AMF Panels",
  "Bus Bar Trunking Systems",
  "Power Distribution (MDB/SMDB/DB)",
  "Cable Tray & Cable Laying",
  "Earthing & Lightning Protection",
  "Industrial LED Lighting",
  "APFC Panel Installation",
  "Energy Metering & Monitoring",
  "CEIG Inspection Documentation",
  "24/7 Electrical AMC",
];

function StatCounter({ value, suffix, label, isInView }: { value: number; suffix: string; label: string; isInView: boolean }) {
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

export function ElectrificationLanding() {
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.3 });

  return (
    <>
      <Header />
      <main className="bg-navy-900">
        {/* HERO */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-800 to-navy-900" />
          <div className="absolute inset-0 dot-grid opacity-40" />
          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-electric-400" />
                  <span className="text-sm font-medium text-electric-400">Hyderabad & Telangana</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                  Industrial Electrification Contractor in{" "}
                  <span className="gradient-text">Hyderabad</span>
                </h1>
                <p className="text-lg text-grey-400 mb-8 leading-relaxed">
                  Complete electrical infrastructure for factories, warehouses, and industrial facilities. HT/LT panels, transformers, DG sync, and power distribution — turnkey execution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="#get-quote" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:-translate-y-0.5 transition-all">
                    Get Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="tel:+919999999999" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/20 hover:border-electric-500 transition-all">
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </div>
                <div className="flex items-center gap-4 text-sm text-grey-400">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 text-warning fill-warning" />)}
                  </div>
                  <span>4.8/5 on Google (90+ reviews)</span>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} id="get-quote" className="glass rounded-3xl p-8">
                <h2 className="text-xl font-bold text-white mb-2">Get Electrification Quote</h2>
                <p className="text-sm text-grey-400 mb-6">Free site survey within 48 hours</p>
                <div className="space-y-4">
                  <input type="text" placeholder="Your Name *" className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 outline-none transition-all" />
                  <input type="tel" placeholder="Phone Number *" className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 outline-none transition-all" />
                  <input type="text" placeholder="Company / Factory Name" className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 outline-none transition-all" />
                  <select className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-electric-500 outline-none appearance-none">
                    <option value="" className="bg-navy-700">Required Load (kVA)</option>
                    <option value="100" className="bg-navy-700">Up to 100 kVA</option>
                    <option value="500" className="bg-navy-700">100 - 500 kVA</option>
                    <option value="1000" className="bg-navy-700">500 - 1000 kVA</option>
                    <option value="2000" className="bg-navy-700">1000 - 2000 kVA</option>
                    <option value="2001" className="bg-navy-700">Above 2000 kVA</option>
                  </select>
                  <button className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:-translate-y-0.5 transition-all">
                    Get Free Quote <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-grey-500 mt-4 text-center">No obligation. CEIG documentation included.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section ref={statsRef} className="py-12 bg-navy-800 border-y border-white/5">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((s) => <StatCounter key={s.label} {...s} isInView={statsInView} />)}
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 sm:py-24 bg-navy-900">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Electrification Services</h2>
              <p className="text-lg text-grey-400">Complete turnkey electrical solutions under one roof.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s) => (
                <div key={s} className="flex items-center gap-3 glass rounded-xl p-5">
                  <Zap className="w-5 h-5 text-electric-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-grey-200">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 sm:py-24" style={{ background: "linear-gradient(135deg, #0F1629, #141D38)" }}>
          <div className="max-w-[600px] mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Power Your Industry Today</h2>
            <p className="text-lg text-grey-400 mb-8">Get a detailed proposal with BOQ, timeline, and guaranteed pricing.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#get-quote" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:-translate-y-0.5 transition-all">
                Request Proposal <ArrowRight className="w-4 h-4" />
              </a>
              <a href="tel:+919999999999" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/20 hover:border-electric-500 transition-all">
                <Phone className="w-4 h-4" /> Call +91 99999 99999
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
