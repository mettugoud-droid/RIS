"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Users,
  Zap,
  Award,
  Globe,
  HardHat,
  FileCheck,
  Clock,
  ArrowRight,
  Phone,
  CheckCircle,
} from "lucide-react";

const coreValues = [
  { icon: ShieldCheck, title: "Safety First", desc: "Every installation meets IS, NBC, and CEIG safety standards without compromise." },
  { icon: Award, title: "Quality Engineering", desc: "We engineer solutions, not just install equipment. Design-led execution." },
  { icon: Clock, title: "On-Time Delivery", desc: "Guaranteed project timelines with milestone tracking and daily reporting." },
  { icon: Users, title: "Client Partnership", desc: "We become your infrastructure partner, not just a one-time contractor." },
  { icon: FileCheck, title: "Complete Documentation", desc: "Every project includes BOQ, SLD, as-built drawings, and test reports." },
  { icon: Globe, title: "Pan-India Reach", desc: "Standardized quality across 15+ cities with local execution teams." },
];

const milestones = [
  { year: "2016", event: "Founded in Hyderabad with a focus on warehouse CCTV" },
  { year: "2018", event: "Expanded to industrial electrification services" },
  { year: "2019", event: "Crossed 100 project milestone, added networking division" },
  { year: "2020", event: "Pan-India expansion to 10+ cities" },
  { year: "2022", event: "Launched integrated solutions — single vendor for all infra needs" },
  { year: "2023", event: "500+ projects completed, serving 50+ enterprise clients" },
  { year: "2024", event: "Introduced AMC division with 99%+ uptime guarantee" },
];

const team = [
  { name: "Founder & CEO", role: "Strategy & Business Development", exp: "15+ years in industrial infrastructure" },
  { name: "Head of Engineering", role: "Technical Design & Execution", exp: "12+ years in electrification projects" },
  { name: "VP Operations", role: "Project Delivery & Quality", exp: "10+ years in project management" },
  { name: "Sales Director", role: "Client Relations & Growth", exp: "8+ years in B2B enterprise sales" },
];

const certifications = [
  "MSME Registered Enterprise",
  "GST Registered & Compliant",
  "ISO Process Standards",
  "Hikvision Certified Partner",
  "Schneider Electric Channel Partner",
  "Honeywell Authorized Installer",
  "ABB Approved Contractor",
  "CEIG Documentation Certified",
];

function StatCounter({ value, suffix, label, isInView }: { value: number; suffix: string; label: string; isInView: boolean }) {
  const count = useCountUp(value, 2000, isInView);
  return (
    <div className="text-center">
      <div className="flex items-baseline justify-center gap-0.5">
        <span className="text-4xl sm:text-5xl font-extrabold text-white">{count}</span>
        <span className="text-2xl font-bold text-electric-500">{suffix}</span>
      </div>
      <p className="text-sm font-medium text-grey-400 uppercase tracking-wider mt-2">{label}</p>
    </div>
  );
}

export function AboutPage() {
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.3 });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900">
        {/* HERO */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 dot-grid opacity-30" />
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-grey-300 mb-6">
                <HardHat className="w-4 h-4 text-electric-500" />
                Established 2016 | Hyderabad, India
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Securing & Powering <span className="gradient-text">Industrial Infrastructure</span>
              </h1>
              <p className="text-lg sm:text-xl text-grey-400 max-w-3xl mx-auto leading-relaxed">
                We are India&apos;s trusted partner for enterprise-grade CCTV, electrification, networking, and security infrastructure. From design to execution to lifetime maintenance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* STATS */}
        <section ref={statsRef} className="py-16 px-4 border-y border-navy-700">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatCounter value={500} suffix="+" label="Projects Completed" isInView={statsInView} />
            <StatCounter value={50} suffix="+" label="Enterprise Clients" isInView={statsInView} />
            <StatCounter value={15} suffix="+" label="Cities Served" isInView={statsInView} />
            <StatCounter value={8} suffix="+" label="Years Experience" isInView={statsInView} />
          </div>
        </section>

        {/* COMPANY STORY */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-xs font-semibold text-electric-500 uppercase tracking-[0.1em]">OUR STORY</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">From Warehouse Security to Industrial Infrastructure Leader</h2>
              <div className="space-y-4 text-grey-400 leading-relaxed">
                <p>Raksha Integrated Solutions was founded in 2016 with a clear mission: bring enterprise-grade infrastructure quality to India&apos;s rapidly growing warehouse and logistics sector.</p>
                <p>Starting with CCTV installations for warehouses in Hyderabad, we quickly realized that our clients needed a single, accountable partner for all their infrastructure needs — from surveillance to power distribution to networking.</p>
                <p>Today, we serve 50+ enterprise clients across 15+ cities, delivering integrated solutions that combine CCTV, electrification, networking, access control, and fire safety under one roof. Our engineering-first approach ensures every project is designed for decades of reliable performance.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {/* Timeline */}
              <div className="space-y-4">
                {milestones.map((m, i) => (
                  <motion.div key={m.year} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-sm font-bold text-electric-400">{m.year}</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-electric-500 mt-2 flex-shrink-0" />
                    <p className="text-sm text-grey-300">{m.event}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-20 px-4 border-t border-navy-700">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-8">
              <Target className="w-10 h-10 text-electric-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-grey-400 leading-relaxed">To provide Indian enterprises with world-class industrial infrastructure — designed with engineering precision, executed with safety excellence, and maintained for lifetime performance.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass rounded-2xl p-8">
              <Eye className="w-10 h-10 text-electric-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-grey-400 leading-relaxed">To become India&apos;s #1 integrated industrial infrastructure company — the first call for every warehouse, factory, and enterprise that needs reliable CCTV, power, and security systems.</p>
            </motion.div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-electric-500 uppercase tracking-[0.1em]">CORE VALUES</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">What Drives Us</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, i) => (
                <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass rounded-2xl p-7 glass-hover">
                  <value.icon className="w-10 h-10 text-electric-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-grey-400 leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LEADERSHIP TEAM */}
        <section className="py-20 px-4 border-t border-navy-700">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-electric-500 uppercase tracking-[0.1em]">LEADERSHIP</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Management Team</h2>
              <p className="text-grey-400 mt-3">Combined 45+ years of industrial infrastructure experience.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-electric-500/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-electric-500" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-electric-400 mt-1">{member.role}</p>
                  <p className="text-xs text-grey-500 mt-2">{member.exp}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold text-electric-500 uppercase tracking-[0.1em]">CERTIFICATIONS & PARTNERSHIPS</span>
              <h2 className="text-3xl font-bold text-white mt-3">Trusted & Verified</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <motion.div key={cert} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center gap-3 glass rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-sm font-medium text-grey-200">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 border-t border-navy-700">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Work Together?</h2>
            <p className="text-lg text-grey-400 mb-8">Get a free site survey and discover how Raksha can transform your facility&apos;s infrastructure.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/rfq" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-lg hover:-translate-y-0.5 transition-all">
                Submit RFQ <ArrowRight className="w-4 h-4" />
              </a>
              <a href="tel:+919999999999" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border border-grey-600 hover:border-electric-500 transition-colors">
                <Phone className="w-4 h-4" /> Call Us
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
