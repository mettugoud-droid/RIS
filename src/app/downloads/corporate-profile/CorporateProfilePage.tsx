"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { Download, FileText, Check, ArrowRight, Lock } from "lucide-react";

const includes = [
  "Company Overview & Vision",
  "Service Capabilities (All Verticals)",
  "50+ Key Projects & Case Studies",
  "Client Testimonials & References",
  "Certifications & Compliance",
  "Team & Infrastructure",
  "AMC & Support Framework",
  "Brand Partnerships",
];

export function CorporateProfilePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production: call /api/downloads
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-navy-900 pt-32 pb-20">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Preview */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-electric-400 bg-electric-500/10 border border-electric-500/20 mb-6">
                <FileText className="w-3.5 h-3.5" /> FREE DOWNLOAD
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Download Our <span className="gradient-text">Corporate Profile</span>
              </h1>
              <p className="text-lg text-grey-400 mb-8">
                Complete overview of our capabilities, certifications, and track record. Share with your procurement team.
              </p>

              {/* Profile Preview */}
              <div className="glass rounded-2xl p-8 mb-8">
                <div className="aspect-[3/4] max-w-[200px] mx-auto rounded-xl bg-gradient-to-br from-electric-500/20 to-navy-700 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <FileText className="w-12 h-12 text-electric-400 mx-auto mb-3" />
                    <p className="text-sm font-bold text-white">CORPORATE</p>
                    <p className="text-sm font-bold text-white">PROFILE</p>
                    <p className="text-xs text-grey-400 mt-2">Raksha Integrated Solutions</p>
                  </div>
                </div>
                <div className="text-center text-sm text-grey-400">
                  <p>📄 40 Pages | PDF | 8 MB</p>
                </div>
              </div>

              {/* What's Inside */}
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">What&apos;s Inside</h3>
              <ul className="space-y-2.5">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-grey-300">
                    <Check className="w-4 h-4 text-success flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              {!submitted ? (
                <div className="glass rounded-3xl p-8">
                  <h2 className="text-xl font-bold text-white mb-2">Get Instant Access</h2>
                  <p className="text-sm text-grey-400 mb-6">Fill in your details to download immediately.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-grey-300 mb-2">Full Name <span className="text-error">*</span></label>
                      <input type="text" required placeholder="Rajesh Kumar" className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-grey-300 mb-2">Work Email <span className="text-error">*</span></label>
                      <input type="email" required placeholder="rajesh@company.com" className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-grey-300 mb-2">Phone <span className="text-error">*</span></label>
                      <input type="tel" required placeholder="+91 98765 43210" className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-grey-300 mb-2">Company</label>
                      <input type="text" placeholder="Your Company Pvt Ltd" className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-grey-300 mb-2">Designation</label>
                      <input type="text" placeholder="Procurement Head" className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 outline-none transition-all" />
                    </div>
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:-translate-y-0.5 transition-all">
                      <Download className="w-4 h-4" /> Download Now
                    </button>
                  </form>
                  <div className="flex items-center justify-center gap-4 mt-4 text-xs text-grey-500">
                    <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> No spam</span>
                    <span>Unsubscribe anytime</span>
                  </div>
                </div>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-3xl p-10 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 15 }} className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-success" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white mb-3">Your Download is Ready!</h2>
                  <p className="text-grey-400 mb-6">Click below to download the corporate profile.</p>
                  <a href="/files/raksha-corporate-profile-2024.pdf" download className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:-translate-y-0.5 transition-all">
                    <Download className="w-5 h-5" /> Download PDF (8 MB)
                  </a>
                  <p className="text-sm text-grey-400 mt-6">Want to discuss a project?</p>
                  <a href="/rfq" className="inline-flex items-center gap-1 text-sm font-medium text-electric-400 hover:text-white mt-2 transition-colors">
                    Submit an RFQ <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingButtons />
    </>
  );
}
