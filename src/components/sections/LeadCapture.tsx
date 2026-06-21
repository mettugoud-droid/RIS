"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Lock, Zap, Ban, ArrowRight, ArrowLeft } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const serviceOptions = [
  "CCTV Installation",
  "Electrification",
  "Networking",
  "Access Control",
  "Fire Alarm",
  "AMC",
];

const budgetRanges = [
  "Below ₹5 Lakhs",
  "₹5 - ₹15 Lakhs",
  "₹15 - ₹50 Lakhs",
  "₹50 Lakhs - ₹1 Crore",
  "Above ₹1 Crore",
];

const industryOptions = [
  "Warehouse / Logistics",
  "Manufacturing",
  "Corporate Office",
  "Cold Storage",
  "Retail / Mall",
  "Pharma",
  "Industrial Park",
  "Other",
];

export function LeadCapture() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="site-audit"
      ref={ref}
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0F1629, #141D38)",
      }}
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(0,102,255,0.08), transparent 60%)",
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-16 h-16 border border-electric-500/10 rounded-xl rotate-12 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-20 w-20 h-20 border border-electric-500/10 rounded-full hidden lg:block"
      />

      <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          {/* Urgency Badge */}
          <motion.span
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-warning bg-warning/10 border border-warning/30 mb-6"
          >
            LIMITED SLOTS
          </motion.span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Get Your <span className="gradient-text">FREE</span>
            <br />
            Infrastructure Audit
          </h2>
          <p className="text-lg text-grey-300">
            Worth{" "}
            <span className="text-electric-400 font-bold line-through">
              ₹25,000
            </span>{" "}
            — Limited Slots Available
          </p>
        </motion.div>

        {/* Progress Stepper */}
        {!submitted && (
          <div className="flex items-center justify-center mb-10 max-w-[360px] mx-auto">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all",
                    s < step
                      ? "bg-electric-500 text-white"
                      : s === step
                      ? "bg-electric-500 text-white shadow-[0_0_20px_rgba(0,102,255,0.4)]"
                      : "bg-white/5 border border-white/15 text-grey-500"
                  )}
                >
                  {s < step ? <Check className="w-4 h-4" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={cn(
                      "w-16 sm:w-20 h-0.5 mx-1",
                      s < step ? "bg-electric-500" : "bg-white/10"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-6 sm:p-10 max-w-[560px] mx-auto shadow-[0_16px_48px_rgba(0,0,0,0.6)]"
        >
          {submitted ? (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6"
              >
                <Check className="w-8 h-8 text-success" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-grey-400 mb-6">
                Our team will contact you within 2 hours.
              </p>
              <a
                href="/projects"
                className="inline-flex items-center gap-2 text-electric-400 font-medium hover:text-white transition-colors"
              >
                Meanwhile, explore our projects
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {/* Step 1: Contact Details */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <div className="text-left">
                      <label className="block text-sm font-medium text-grey-300 mb-2">
                        Your Name <span className="text-error">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all"
                      />
                    </div>
                    <div className="text-left">
                      <label className="block text-sm font-medium text-grey-300 mb-2">
                        Company Name <span className="text-error">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Company Pvt Ltd"
                        className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all"
                      />
                    </div>
                    <div className="text-left">
                      <label className="block text-sm font-medium text-grey-300 mb-2">
                        Phone <span className="text-error">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all"
                      />
                    </div>
                    <div className="text-left">
                      <label className="block text-sm font-medium text-grey-300 mb-2">
                        Email <span className="text-error">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Requirements */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <div className="text-left">
                      <label className="block text-sm font-medium text-grey-300 mb-2">
                        Industry <span className="text-error">*</span>
                      </label>
                      <select
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all appearance-none"
                      >
                        <option value="" className="bg-navy-700">Select Industry</option>
                        {industryOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-navy-700">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="text-left">
                      <label className="block text-sm font-medium text-grey-300 mb-3">
                        Services Required
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={cn(
                              "px-4 py-2 rounded-full text-sm font-medium border transition-all cursor-pointer",
                              selectedServices.includes(service)
                                ? "bg-electric-500 text-white border-electric-500"
                                : "bg-electric-500/10 text-electric-300 border-electric-500/30 hover:bg-electric-500/20"
                            )}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="text-left">
                      <label className="block text-sm font-medium text-grey-300 mb-2">
                        Project Location
                      </label>
                      <input
                        type="text"
                        placeholder="City, State"
                        className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all"
                      />
                    </div>
                    <div className="text-left">
                      <label className="block text-sm font-medium text-grey-300 mb-2">
                        Approximate Area (sqft)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 50,000"
                        className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Project Details */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <div className="text-left">
                      <label className="block text-sm font-medium text-grey-300 mb-2">
                        Budget Range
                      </label>
                      <select className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all appearance-none">
                        <option value="" className="bg-navy-700">Select Budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-navy-700">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="text-left">
                      <label className="block text-sm font-medium text-grey-300 mb-2">
                        Expected Timeline
                      </label>
                      <select className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all appearance-none">
                        <option value="" className="bg-navy-700">Select Timeline</option>
                        <option value="immediate" className="bg-navy-700">Immediate (This Month)</option>
                        <option value="1-3" className="bg-navy-700">1-3 Months</option>
                        <option value="3-6" className="bg-navy-700">3-6 Months</option>
                        <option value="planning" className="bg-navy-700">Just Planning</option>
                      </select>
                    </div>
                    <div className="text-left">
                      <label className="block text-sm font-medium text-grey-300 mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us more about your project..."
                        className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all resize-y min-h-[100px]"
                      />
                    </div>
                    <div className="text-left">
                      <label className="block text-sm font-medium text-grey-300 mb-2">
                        Preferred Call Time
                      </label>
                      <select className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all appearance-none">
                        <option value="" className="bg-navy-700">Select Time</option>
                        <option value="morning" className="bg-navy-700">Morning (9AM - 12PM)</option>
                        <option value="afternoon" className="bg-navy-700">Afternoon (12PM - 4PM)</option>
                        <option value="evening" className="bg-navy-700">Evening (4PM - 7PM)</option>
                        <option value="anytime" className="bg-navy-700">Anytime</option>
                      </select>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="flex items-center gap-2 text-base font-medium text-grey-400 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s + 1)}
                    className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:shadow-[0_0_40px_rgba(0,102,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:shadow-[0_0_40px_rgba(0,102,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Submit Request
                    <Check className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          )}
        </motion.div>

        {/* Trust Signals */}
        {!submitted && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 text-sm text-grey-400">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" /> Your data is 100% secure
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" /> Response within 2 hours
            </span>
            <span className="flex items-center gap-1.5">
              <Ban className="w-3.5 h-3.5" /> No spam, ever
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
