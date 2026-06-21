"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import {
  Camera, Shield, Clock, Phone, ArrowRight, Check, MapPin, Star,
} from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Projects" },
  { value: 50, suffix: "+", label: "Clients" },
  { value: 15, suffix: "+", label: "Cities" },
  { value: 2, suffix: "hr", label: "Response" },
];

const features = [
  "Free Site Survey & Design",
  "4K Ultra HD IP Cameras",
  "30-90 Days Recording Storage",
  "Remote Mobile Viewing 24/7",
  "AI-Based Motion Analytics",
  "Night Vision (up to 80m)",
  "3-Year Warranty on All Equipment",
  "24/7 AMC Support Available",
];

const process = [
  { step: "1", title: "Free Site Survey", desc: "Our engineers visit your warehouse and assess requirements" },
  { step: "2", title: "Custom Design", desc: "We create a detailed camera layout with BOQ" },
  { step: "3", title: "Professional Installation", desc: "Certified team installs with zero disruption" },
  { step: "4", title: "Handover & Training", desc: "Complete training for your team + documentation" },
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

export function WarehouseCCTVLanding() {
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.3 });
  const { ref: formRef, isInView: formInView } = useInView({ threshold: 0.2 });

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
              {/* Left: Content */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-electric-400" />
                  <span className="text-sm font-medium text-electric-400">Hyderabad, Telangana</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                  #1 Warehouse CCTV Installation in{" "}
                  <span className="gradient-text">Hyderabad</span>
                </h1>
                <p className="text-lg text-grey-400 mb-8 leading-relaxed">
                  Protect your warehouse with enterprise-grade surveillance. 4K cameras, AI analytics, and remote monitoring — installed by Hyderabad&apos;s most trusted CCTV experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="#get-quote" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:-translate-y-0.5 transition-all">
                    Get Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="tel:+919999999999" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/20 hover:border-electric-500 transition-all">
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </div>
                {/* Trust indicators */}
                <div className="flex items-center gap-4 text-sm text-grey-400">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 text-warning fill-warning" />)}
                  </div>
                  <span>4.9/5 on Google (120+ reviews)</span>
                </div>
              </motion.div>

              {/* Right: Quick Form */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} id="get-quote" className="glass rounded-3xl p-8">
                <h2 className="text-xl font-bold text-white mb-2">Get Free Site Survey</h2>
                <p className="text-sm text-grey-400 mb-6">Our team will visit within 24 hours</p>
                <div className="space-y-4">
                  <input type="text" placeholder="Your Name *" className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 outline-none transition-all" />
                  <input type="tel" placeholder="Phone Number *" className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 outline-none transition-all" />
                  <input type="text" placeholder="Company Name" className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 outline-none transition-all" />
                  <select className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-electric-500 outline-none appearance-none">
                    <option value="" className="bg-navy-700">Warehouse Size (sqft)</option>
                    <option value="10000" className="bg-navy-700">Under 10,000 sqft</option>
                    <option value="50000" className="bg-navy-700">10,000 - 50,000 sqft</option>
                    <option value="100000" className="bg-navy-700">50,000 - 1,00,000 sqft</option>
                    <option value="100001" className="bg-navy-700">Above 1,00,000 sqft</option>
                  </select>
                  <button className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:-translate-y-0.5 transition-all">
                    Book Free Survey <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-grey-500 mt-4 text-center">No obligation. 100% free. Response in 2 hours.</p>
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

        {/* FEATURES */}
        <section className="py-16 sm:py-24 bg-navy-900">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What You Get</h2>
              <p className="text-lg text-grey-400">Enterprise-grade warehouse surveillance, done right.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3 glass rounded-xl p-5">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-sm font-medium text-grey-200">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16 sm:py-24 bg-navy-800">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our 4-Step Process</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p) => (
                <div key={p.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-electric-500 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">{p.step}</div>
                  <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-grey-400">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 sm:py-24" style={{ background: "linear-gradient(135deg, #0F1629, #141D38)" }}>
          <div className="max-w-[600px] mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get Your Free Quote Today</h2>
            <p className="text-lg text-grey-400 mb-8">Join 50+ Hyderabad businesses that trust Raksha for warehouse security.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#get-quote" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:-translate-y-0.5 transition-all">
                Book Free Site Survey <ArrowRight className="w-4 h-4" />
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
