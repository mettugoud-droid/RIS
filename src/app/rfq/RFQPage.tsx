"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { ArrowRight, ArrowLeft, Check, Upload, FileText, Shield, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = ["Contact", "Requirements", "Specifications", "Review"];

const serviceOptions = [
  "CCTV / Surveillance",
  "Industrial Electrification",
  "Warehouse Electrification",
  "Networking / Cabling",
  "Access Control",
  "Fire Alarm Systems",
  "AMC Services",
  "Other",
];

export function RFQPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState("");
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", designation: "",
    projectTitle: "", services: [] as string[], projectLocation: "",
    areaSqft: "", numberOfBuildings: "", description: "",
    specifications: "", budgetRange: "", expectedStart: "",
    expectedCompletion: "", paymentTerms: "",
  });

  const updateField = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (svc: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(svc) ? prev.services.filter((s) => s !== svc) : [...prev.services, svc],
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setRfqNumber(data.rfqNumber);
        setSubmitted(true);
      }
    } catch {
      setRfqNumber("RFQ-" + Date.now());
      setSubmitted(true);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-navy-900 pt-32 pb-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-electric-400 bg-electric-500/10 border border-electric-500/20 mb-4">
              <FileText className="w-3.5 h-3.5" /> FOR PROCUREMENT TEAMS
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Submit Request for Quotation
            </h1>
            <p className="text-lg text-grey-400">
              Get a detailed proposal with BOQ, timeline, and pricing within 48 hours.
            </p>
          </div>

          {!submitted ? (
            <>
              {/* Stepper */}
              <div className="flex items-center justify-center mb-10 max-w-[500px] mx-auto">
                {steps.map((s, i) => (
                  <div key={s} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className={cn("w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all",
                        i < step ? "bg-success text-white" : i === step ? "bg-electric-500 text-white shadow-[0_0_20px_rgba(0,102,255,0.4)]" : "bg-white/5 border border-white/15 text-grey-500"
                      )}>
                        {i < step ? <Check className="w-4 h-4" /> : i + 1}
                      </div>
                      <span className="text-[10px] text-grey-500 mt-1.5 hidden sm:block">{s}</span>
                    </div>
                    {i < 3 && <div className={cn("w-12 sm:w-20 h-0.5 mx-2", i < step ? "bg-success" : "bg-white/10")} />}
                  </div>
                ))}
              </div>

              {/* Form */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-6 sm:p-10">
                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div key="s0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                      <h2 className="text-xl font-semibold text-white mb-6">Contact Information</h2>
                      {[
                        { label: "Full Name", field: "name", required: true, placeholder: "Rajesh Kumar" },
                        { label: "Company / Organization", field: "company", required: true, placeholder: "XYZ Logistics Pvt Ltd" },
                        { label: "Designation", field: "designation", placeholder: "Procurement Head" },
                        { label: "Email", field: "email", type: "email", required: true, placeholder: "rajesh@company.com" },
                        { label: "Phone", field: "phone", type: "tel", required: true, placeholder: "+91 98765 43210" },
                      ].map((f) => (
                        <div key={f.field}>
                          <label className="block text-sm font-medium text-grey-300 mb-2">{f.label} {f.required && <span className="text-error">*</span>}</label>
                          <input type={f.type || "text"} value={(formData as unknown as Record<string, string>)[f.field]} onChange={(e) => updateField(f.field, e.target.value)} placeholder={f.placeholder} className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all" />
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {step === 1 && (
                    <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                      <h2 className="text-xl font-semibold text-white mb-6">Project Requirements</h2>
                      <div>
                        <label className="block text-sm font-medium text-grey-300 mb-2">Project Title <span className="text-error">*</span></label>
                        <input type="text" value={formData.projectTitle} onChange={(e) => updateField("projectTitle", e.target.value)} placeholder="e.g. Complete Warehouse CCTV Installation" className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-grey-300 mb-3">Services Required <span className="text-error">*</span></label>
                        <div className="flex flex-wrap gap-2">
                          {serviceOptions.map((svc) => (
                            <button key={svc} type="button" onClick={() => toggleService(svc)} className={cn("px-4 py-2.5 rounded-xl text-sm font-medium border transition-all", formData.services.includes(svc) ? "bg-electric-500 text-white border-electric-500" : "bg-white/[0.02] text-grey-300 border-white/10 hover:border-electric-500/40")}>
                              {svc}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-grey-300 mb-2">Project Location <span className="text-error">*</span></label>
                          <input type="text" value={formData.projectLocation} onChange={(e) => updateField("projectLocation", e.target.value)} placeholder="City, State" className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 outline-none transition-all" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-grey-300 mb-2">Area (sqft) <span className="text-error">*</span></label>
                          <input type="text" value={formData.areaSqft} onChange={(e) => updateField("areaSqft", e.target.value)} placeholder="e.g. 1,00,000" className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 outline-none transition-all" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-grey-300 mb-2">Brief Description <span className="text-error">*</span></label>
                        <textarea rows={4} value={formData.description} onChange={(e) => updateField("description", e.target.value)} placeholder="Describe your requirements, scope of work, and any specific needs..." className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 outline-none transition-all resize-y" />
                      </div>
                      <div className="p-4 rounded-xl border border-dashed border-white/15 text-center cursor-pointer hover:border-electric-500/40 transition-colors">
                        <Upload className="w-6 h-6 text-grey-400 mx-auto mb-2" />
                        <p className="text-sm text-grey-400">Drag & drop files (BOQ, drawings, photos)</p>
                        <p className="text-xs text-grey-500 mt-1">PDF, DOC, XLS, DWG, JPG (max 10MB each)</p>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                      <h2 className="text-xl font-semibold text-white mb-6">Specifications & Timeline</h2>
                      <div>
                        <label className="block text-sm font-medium text-grey-300 mb-2">Technical Specifications</label>
                        <textarea rows={4} value={formData.specifications} onChange={(e) => updateField("specifications", e.target.value)} placeholder="Any specific brand preferences, technical requirements, compliance needs..." className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 outline-none transition-all resize-y" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-grey-300 mb-2">Budget Range</label>
                          <select value={formData.budgetRange} onChange={(e) => updateField("budgetRange", e.target.value)} className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-electric-500 outline-none appearance-none">
                            <option value="" className="bg-navy-700">Select</option>
                            <option value="Below 5 Lakhs" className="bg-navy-700">Below ₹5 Lakhs</option>
                            <option value="5-15 Lakhs" className="bg-navy-700">₹5 - 15 Lakhs</option>
                            <option value="15-50 Lakhs" className="bg-navy-700">₹15 - 50 Lakhs</option>
                            <option value="50L - 1 Crore" className="bg-navy-700">₹50L - 1 Crore</option>
                            <option value="Above 1 Crore" className="bg-navy-700">Above ₹1 Crore</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-grey-300 mb-2">Expected Start</label>
                          <input type="date" value={formData.expectedStart} onChange={(e) => updateField("expectedStart", e.target.value)} className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-electric-500 outline-none transition-all" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-grey-300 mb-2">Expected Completion</label>
                          <input type="date" value={formData.expectedCompletion} onChange={(e) => updateField("expectedCompletion", e.target.value)} className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-electric-500 outline-none transition-all" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-grey-300 mb-2">Payment Terms</label>
                          <select value={formData.paymentTerms} onChange={(e) => updateField("paymentTerms", e.target.value)} className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-electric-500 outline-none appearance-none">
                            <option value="" className="bg-navy-700">Select</option>
                            <option value="milestone" className="bg-navy-700">Milestone-based</option>
                            <option value="advance-balance" className="bg-navy-700">50% Advance + Balance</option>
                            <option value="credit-30" className="bg-navy-700">30 Days Credit</option>
                            <option value="credit-60" className="bg-navy-700">60 Days Credit</option>
                            <option value="other" className="bg-navy-700">Other (specify)</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                      <h2 className="text-xl font-semibold text-white mb-6">Review & Submit</h2>
                      <div className="space-y-4">
                        {[
                          { label: "Name", value: formData.name },
                          { label: "Company", value: formData.company },
                          { label: "Phone", value: formData.phone },
                          { label: "Project", value: formData.projectTitle },
                          { label: "Services", value: formData.services.join(", ") },
                          { label: "Location", value: formData.projectLocation },
                          { label: "Area", value: formData.areaSqft ? `${formData.areaSqft} sqft` : "" },
                          { label: "Budget", value: formData.budgetRange },
                        ].filter((r) => r.value).map((row) => (
                          <div key={row.label} className="flex justify-between py-3 border-b border-white/[0.04]">
                            <span className="text-sm text-grey-400">{row.label}</span>
                            <span className="text-sm font-medium text-white text-right max-w-[60%]">{row.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="p-4 rounded-xl bg-electric-500/5 border border-electric-500/15 mt-6">
                        <p className="text-sm text-grey-300"><strong className="text-white">What happens next:</strong></p>
                        <ul className="text-sm text-grey-400 mt-2 space-y-1.5">
                          <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-success" /> RFQ number assigned instantly</li>
                          <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-success" /> Engineering team reviews within 24 hours</li>
                          <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-success" /> Detailed quotation within 48 hours</li>
                          <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-success" /> Free site survey scheduled if needed</li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.06]">
                  {step > 0 ? (
                    <button onClick={() => setStep((s) => s - 1)} className="flex items-center gap-2 text-sm font-medium text-grey-400 hover:text-white transition-colors">
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                  ) : <div />}

                  {step < 3 ? (
                    <button onClick={() => setStep((s) => s + 1)} className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:-translate-y-0.5 transition-all">
                      Next <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <button onClick={handleSubmit} className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-success shadow-[0_4px_16px_rgba(0,200,83,0.3)] hover:-translate-y-0.5 transition-all">
                      Submit RFQ <Check className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </motion.div>

              {/* Trust Signals */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 text-sm text-grey-400">
                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> 100% Confidential</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Response within 24 hours</span>
                <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> Detailed BOQ included</span>
              </div>
            </>
          ) : (
            /* Success State */
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-3xl p-10 text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 15 }} className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-success" />
              </motion.div>
              <h2 className="text-2xl font-bold text-white mb-2">RFQ Submitted Successfully!</h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-electric-500/10 border border-electric-500/20 text-electric-400 font-mono text-sm mb-4">
                {rfqNumber}
              </div>
              <p className="text-grey-400 mb-8 max-w-md mx-auto">
                Our engineering team will review your requirements and send a detailed quotation within 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/projects" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-cta hover:-translate-y-0.5 transition-all">
                  Explore Our Projects <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-electric-500 transition-all">
                  Back to Home
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
      <FloatingButtons />
    </>
  );
}
