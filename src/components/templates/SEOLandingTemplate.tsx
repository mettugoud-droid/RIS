"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { Check, Phone, ArrowRight, MapPin, Star } from "lucide-react";
import { useState } from "react";
import type { LandingPageData } from "@/lib/data/landing-pages";

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
        <span className="text-3xl sm:text-4xl font-extrabold text-white">
          {count}
        </span>
        <span className="text-xl font-bold text-electric-500">{suffix}</span>
      </div>
      <p className="text-xs font-medium text-grey-400 uppercase tracking-wider mt-1">
        {label}
      </p>
    </div>
  );
}

export function SEOLandingTemplate({ data }: { data: LandingPageData }) {
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
        body: JSON.stringify({
          ...formData,
          source: data.slug,
          keyword: data.keyword,
        }),
      });
      setFormSubmitted(true);
    } catch {
      // Silently handle error
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900">
        {/* Hero Section */}
        <section className="relative pt-28 pb-20 px-4 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 dot-grid opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-radial-blue opacity-10" />

          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column — Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {data.city && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6">
                  <MapPin className="w-4 h-4 text-electric-500" />
                  <span className="text-sm text-grey-300">{data.city}</span>
                </div>
              )}

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                {data.h1}
              </h1>

              <p className="text-lg text-grey-400 mb-6 max-w-xl">
                {data.subtitle}
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-8">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-grey-400">
                  4.9/5 from 50+ clients
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
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

            {/* Right Column — Lead Capture Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-6 lg:p-8"
            >
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-grey-400">
                    Our team will contact you within 2 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Get a Free Quote
                  </h3>
                  <p className="text-sm text-grey-400 mb-6">
                    Our engineers will call you within 2 hours
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder:text-grey-500 focus:outline-none focus:border-electric-500 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder:text-grey-500 focus:outline-none focus:border-electric-500 transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder:text-grey-500 focus:outline-none focus:border-electric-500 transition-colors"
                    />
                    <select
                      value={formData.requirement}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          requirement: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white focus:outline-none focus:border-electric-500 transition-colors"
                    >
                      <option value="">Select Requirement</option>
                      <option value="new-installation">New Installation</option>
                      <option value="upgrade">Upgrade Existing System</option>
                      <option value="amc">AMC / Maintenance</option>
                      <option value="consultation">Consultation Only</option>
                    </select>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg gradient-cta text-white font-semibold hover:scale-[1.02] transition-transform shadow-lg shadow-electric-500/20"
                    >
                      Submit — Get Free Quote
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-16 px-4 border-t border-navy-700">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.stats.map((stat, i) => (
              <StatCounter
                key={i}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                isInView={statsInView}
              />
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                What We Deliver
              </h2>
              <p className="text-grey-400 max-w-2xl mx-auto">
                Enterprise-grade {data.serviceType.toLowerCase()} solutions
                backed by industry expertise and proven execution.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3 glass rounded-xl p-4 glass-hover"
                >
                  <Check className="w-5 h-5 text-electric-500 shrink-0" />
                  <span className="text-sm text-grey-200">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-grey-400 mb-8 max-w-xl mx-auto">
                Get a free site survey and customized proposal for your{" "}
                {data.serviceType.toLowerCase()} requirements.
                {data.city && ` Serving ${data.city} and surrounding areas.`}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/rfq"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-cta text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-electric-500/20 text-lg"
                >
                  Request Free Quote
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-grey-600 text-white font-semibold hover:border-electric-500 transition-colors text-lg"
                >
                  <Phone className="w-5 h-5" />
                  +91 99999 99999
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
