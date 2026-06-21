"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { Calculator, ArrowRight, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface Results {
  materialCost: number;
  laborCost: number;
  infraCost: number;
  miscCost: number;
  totalCost: number;
  formatted: string;
  timeline: string;
}

const projectTypes = [
  { id: "cctv", label: "CCTV Installation", rate: 120 },
  { id: "electrification", label: "Electrification", rate: 180 },
  { id: "networking", label: "Networking / Cabling", rate: 90 },
  { id: "access", label: "Access Control", rate: 150 },
  { id: "fire", label: "Fire Alarm System", rate: 100 },
  { id: "integrated", label: "Integrated (Multiple)", rate: 200 },
];

const qualityLevels = [
  { id: "standard", label: "Standard", multiplier: 1.0, desc: "Reliable brands, good quality" },
  { id: "premium", label: "Premium", multiplier: 1.5, desc: "Top brands (Schneider, Hikvision Pro)" },
  { id: "enterprise", label: "Enterprise", multiplier: 2.2, desc: "Best-in-class (Axis, ABB, Cisco)" },
];

export function ProjectCostEstimator() {
  const [step, setStep] = useState<"input" | "result">("input");
  const [results, setResults] = useState<Results | null>(null);

  const [projectType, setProjectType] = useState("");
  const [area, setArea] = useState("");
  const [quality, setQuality] = useState("standard");
  const [floors, setFloors] = useState("1");
  const [includeAMC, setIncludeAMC] = useState(false);
  const [includeDG, setIncludeDG] = useState(false);
  const [includeUPS, setIncludeUPS] = useState(false);

  const calculate = () => {
    const sqft = parseInt(area) || 0;
    const floorCount = parseInt(floors) || 1;
    const project = projectTypes.find((p) => p.id === projectType);
    const qualityLevel = qualityLevels.find((q) => q.id === quality);

    if (!project || !qualityLevel || sqft === 0) return;

    const baseRate = project.rate * qualityLevel.multiplier;
    const materialCost = Math.round(sqft * floorCount * baseRate * 0.55);
    const laborCost = Math.round(sqft * floorCount * baseRate * 0.2);
    const infraCost = Math.round(sqft * floorCount * baseRate * 0.15);
    let miscCost = Math.round(sqft * floorCount * baseRate * 0.1);

    if (includeDG) miscCost += 500000;
    if (includeUPS) miscCost += 300000;
    if (includeAMC) miscCost += Math.round((materialCost + laborCost) * 0.1);

    const totalCost = materialCost + laborCost + infraCost + miscCost;

    const formatCost = (cost: number) => {
      if (cost >= 10000000) return `₹${(cost / 10000000).toFixed(2)} Crore`;
      if (cost >= 100000) return `₹${(cost / 100000).toFixed(1)} Lakhs`;
      return `₹${cost.toLocaleString("en-IN")}`;
    };

    // Timeline estimate
    let timeline = "2-3 weeks";
    if (totalCost > 5000000) timeline = "8-12 weeks";
    else if (totalCost > 2000000) timeline = "5-8 weeks";
    else if (totalCost > 1000000) timeline = "3-5 weeks";

    setResults({
      materialCost,
      laborCost,
      infraCost,
      miscCost,
      totalCost,
      formatted: formatCost(totalCost),
      timeline,
    });
    setStep("result");
  };

  const reset = () => { setStep("input"); setResults(null); };

  const formatINR = (n: number) => {
    if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
    return `₹${n.toLocaleString("en-IN")}`;
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-navy-900 pt-32 pb-20">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-electric-500/10 flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-8 h-8 text-electric-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Project Cost Estimator</h1>
            <p className="text-lg text-grey-400">Get an instant budget estimate for your infrastructure project.</p>
          </div>

          {step === "input" ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-6 sm:p-8">
              <div className="space-y-6">
                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-grey-300 mb-3">Project Type *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setProjectType(type.id)}
                        className={cn(
                          "px-4 py-3 rounded-xl text-sm font-medium border transition-all text-left",
                          projectType === type.id
                            ? "bg-electric-500 text-white border-electric-500"
                            : "bg-white/[0.02] text-grey-300 border-white/10 hover:border-electric-500/40"
                        )}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Area & Floors */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-grey-300 mb-2">Total Area (sqft) *</label>
                    <input type="number" value={area} onChange={(e) => setArea(e.target.value)} placeholder="e.g. 50000" className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-grey-300 mb-2">Floors</label>
                    <input type="number" value={floors} onChange={(e) => setFloors(e.target.value)} placeholder="1" className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all" />
                  </div>
                </div>

                {/* Quality Level */}
                <div>
                  <label className="block text-sm font-medium text-grey-300 mb-3">Quality Level</label>
                  <div className="grid grid-cols-3 gap-3">
                    {qualityLevels.map((q) => (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => setQuality(q.id)}
                        className={cn(
                          "p-4 rounded-xl border text-center transition-all",
                          quality === q.id
                            ? "bg-electric-500/10 border-electric-500/40 text-white"
                            : "bg-white/[0.02] border-white/10 text-grey-400 hover:border-white/20"
                        )}
                      >
                        <p className="text-sm font-semibold">{q.label}</p>
                        <p className="text-xs mt-1 opacity-70">{q.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add-ons */}
                <div>
                  <label className="block text-sm font-medium text-grey-300 mb-3">Add-ons</label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { id: "amc", label: "Include AMC (1yr)", state: includeAMC, setter: setIncludeAMC },
                      { id: "dg", label: "DG Set", state: includeDG, setter: setIncludeDG },
                      { id: "ups", label: "UPS System", state: includeUPS, setter: setIncludeUPS },
                    ].map((addon) => (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => addon.setter(!addon.state)}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-medium border transition-all",
                          addon.state
                            ? "bg-electric-500 text-white border-electric-500"
                            : "bg-white/[0.02] text-grey-400 border-white/10 hover:border-electric-500/40"
                        )}
                      >
                        {addon.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={calculate}
                  disabled={!projectType || !area}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:shadow-[0_0_40px_rgba(0,102,255,0.4)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Estimate Cost <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-8">
              {results && (
                <div className="space-y-8">
                  <div className="text-center pb-6 border-b border-white/[0.06]">
                    <p className="text-sm font-medium text-electric-400 mb-2">ESTIMATED PROJECT COST</p>
                    <p className="text-4xl sm:text-5xl font-extrabold text-white">{results.formatted}</p>
                    <p className="text-sm text-grey-400 mt-2">Timeline: {results.timeline}</p>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-grey-300 uppercase tracking-wider">Cost Breakdown</h3>
                    {[
                      { label: "Material & Equipment", value: results.materialCost, pct: Math.round((results.materialCost / results.totalCost) * 100) },
                      { label: "Labor & Installation", value: results.laborCost, pct: Math.round((results.laborCost / results.totalCost) * 100) },
                      { label: "Infrastructure (Cables/Trays)", value: results.infraCost, pct: Math.round((results.infraCost / results.totalCost) * 100) },
                      { label: "Miscellaneous & Add-ons", value: results.miscCost, pct: Math.round((results.miscCost / results.totalCost) * 100) },
                    ].map((item) => (
                      <div key={item.label} className="space-y-1.5">
                        <div className="flex justify-between text-sm">
                          <span className="text-grey-400">{item.label}</span>
                          <span className="text-white font-medium">{formatINR(item.value)}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.pct}%` }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-full rounded-full bg-electric-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-grey-500 text-center">
                    * This is a preliminary estimate. Final quotation will be provided after site survey and detailed requirement discussion.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="/#site-audit" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:-translate-y-0.5 transition-all">
                      Get Detailed Quote <ArrowRight className="w-4 h-4" />
                    </a>
                    <button onClick={reset} className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-electric-500 hover:bg-electric-500/10 transition-all">
                      <RotateCcw className="w-4 h-4" /> Recalculate
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
      <FloatingButtons />
    </>
  );
}
