"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { Wrench, ArrowRight, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface SystemEntry { type: string; quantity: number; age: string; }

const systemTypes = [
  { id: "cctv_camera", label: "CCTV Cameras", ratePerUnit: 800 },
  { id: "nvr", label: "NVR/DVR", ratePerUnit: 3000 },
  { id: "access_reader", label: "Access Readers", ratePerUnit: 1500 },
  { id: "fire_detector", label: "Fire Detectors", ratePerUnit: 400 },
  { id: "panel_db", label: "Electrical Panels", ratePerUnit: 5000 },
  { id: "network_switch", label: "Network Switches", ratePerUnit: 2500 },
  { id: "ups", label: "UPS Systems", ratePerUnit: 4000 },
  { id: "dg", label: "DG Sets", ratePerUnit: 15000 },
];

const serviceLevels = [
  { id: "standard", label: "Standard", multiplier: 1.0, desc: "Business hrs, 4hr response" },
  { id: "comprehensive", label: "Comprehensive", multiplier: 1.6, desc: "24/7, 2hr response" },
  { id: "platinum", label: "Platinum", multiplier: 2.2, desc: "24/7, spares incl, 1hr" },
];

export function AMCCostCalculator() {
  const [step, setStep] = useState<"input" | "result">("input");
  const [systems, setSystems] = useState<SystemEntry[]>([
    { type: "cctv_camera", quantity: 50, age: "1-3" },
    { type: "nvr", quantity: 4, age: "1-3" },
  ]);
  const [serviceLevel, setServiceLevel] = useState("standard");
  const [sites, setSites] = useState("1");
  const [annualCost, setAnnualCost] = useState(0);
  const [monthlyCost, setMonthlyCost] = useState(0);
  const [perVisitCost, setPerVisitCost] = useState(0);

  const addSystem = () => setSystems([...systems, { type: "cctv_camera", quantity: 1, age: "1-3" }]);
  const removeSystem = (i: number) => setSystems(systems.filter((_, idx) => idx !== i));
  const updateSystem = (i: number, field: keyof SystemEntry, value: string | number) => {
    setSystems(systems.map((s, idx) => (idx === i ? { ...s, [field]: value } : s)));
  };

  const calculate = () => {
    const level = serviceLevels.find((l) => l.id === serviceLevel);
    if (!level) return;
    const siteCount = parseInt(sites) || 1;
    const siteMultiplier = siteCount > 3 ? 0.85 : siteCount > 1 ? 0.92 : 1;
    let baseCost = 0;
    systems.forEach((sys) => {
      const t = systemTypes.find((st) => st.id === sys.type);
      if (!t) return;
      const ageMul = sys.age === "3-5" ? 1.3 : sys.age === "5+" ? 1.6 : 1;
      baseCost += t.ratePerUnit * sys.quantity * ageMul;
    });
    const total = Math.round(baseCost * level.multiplier * siteCount * siteMultiplier);
    setAnnualCost(total);
    setMonthlyCost(Math.round(total / 12));
    setPerVisitCost(Math.round(total / (4 * siteCount)));
    setStep("result");
  };

  const reset = () => setStep("input");
  const fmt = (n: number) => n >= 100000 ? `₹${(n / 100000).toFixed(1)} Lakhs` : `₹${n.toLocaleString("en-IN")}`;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-navy-900 pt-32 pb-20">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-electric-500/10 flex items-center justify-center mx-auto mb-6">
              <Wrench className="w-8 h-8 text-electric-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">AMC Cost Calculator</h1>
            <p className="text-lg text-grey-400">Estimate your annual maintenance contract cost.</p>
          </div>

          {step === "input" ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-6 sm:p-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-white">Your Equipment</h3>
                    <button onClick={addSystem} className="text-xs font-medium text-electric-400 hover:text-white transition-colors">+ Add</button>
                  </div>
                  <div className="space-y-3">
                    {systems.map((sys, i) => (
                      <div key={i} className="grid grid-cols-[1fr_60px_80px_24px] gap-2 items-center">
                        <select value={sys.type} onChange={(e) => updateSystem(i, "type", e.target.value)} className="px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-white text-sm outline-none appearance-none">
                          {systemTypes.map((t) => <option key={t.id} value={t.id} className="bg-navy-700">{t.label}</option>)}
                        </select>
                        <input type="number" value={sys.quantity} onChange={(e) => updateSystem(i, "quantity", parseInt(e.target.value) || 0)} className="px-2 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-white text-sm text-center outline-none" />
                        <select value={sys.age} onChange={(e) => updateSystem(i, "age", e.target.value)} className="px-2 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-white text-xs outline-none appearance-none">
                          <option value="0-1" className="bg-navy-700">&lt;1yr</option>
                          <option value="1-3" className="bg-navy-700">1-3yr</option>
                          <option value="3-5" className="bg-navy-700">3-5yr</option>
                          <option value="5+" className="bg-navy-700">5+yr</option>
                        </select>
                        <button onClick={() => removeSystem(i)} className="text-grey-500 hover:text-error text-lg">&times;</button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-grey-300 mb-3">Service Level</label>
                  <div className="grid grid-cols-3 gap-3">
                    {serviceLevels.map((l) => (
                      <button key={l.id} type="button" onClick={() => setServiceLevel(l.id)} className={cn("p-3 rounded-xl border text-center transition-all", serviceLevel === l.id ? "bg-electric-500/10 border-electric-500/40 text-white" : "bg-white/[0.02] border-white/10 text-grey-400")}>
                        <p className="text-sm font-semibold">{l.label}</p>
                        <p className="text-[10px] mt-1 opacity-70">{l.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-grey-300 mb-2">Number of Sites</label>
                  <input type="number" value={sites} onChange={(e) => setSites(e.target.value)} className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-electric-500 outline-none transition-all" />
                </div>
                <button onClick={calculate} className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:-translate-y-0.5 transition-all">
                  Calculate AMC Cost <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-8">
              <div className="space-y-8">
                <div className="text-center pb-6 border-b border-white/[0.06]">
                  <p className="text-sm font-medium text-electric-400 mb-2">ANNUAL AMC COST</p>
                  <p className="text-5xl font-extrabold text-white">{fmt(annualCost)}</p>
                  <p className="text-sm text-grey-400 mt-2">per year</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-white/[0.02]">
                    <p className="text-2xl font-bold text-white">{fmt(monthlyCost)}</p>
                    <p className="text-xs text-grey-400 mt-1">Monthly</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/[0.02]">
                    <p className="text-2xl font-bold text-white">{fmt(perVisitCost)}</p>
                    <p className="text-xs text-grey-400 mt-1">Per Visit</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-3 border-b border-white/[0.04]"><span className="text-sm text-grey-400">Service Level</span><span className="text-sm font-semibold text-white capitalize">{serviceLevel}</span></div>
                  <div className="flex justify-between py-3 border-b border-white/[0.04]"><span className="text-sm text-grey-400">Sites</span><span className="text-sm font-semibold text-white">{sites}</span></div>
                  <div className="flex justify-between py-3 border-b border-white/[0.04]"><span className="text-sm text-grey-400">PM Visits/Year</span><span className="text-sm font-semibold text-white">4 (Quarterly)</span></div>
                  <div className="flex justify-between py-3"><span className="text-sm text-grey-400">Breakdown Calls</span><span className="text-sm font-semibold text-white">Unlimited</span></div>
                </div>
                <p className="text-xs text-grey-500 text-center">* Estimate based on standard rates. Final pricing after equipment audit.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/#site-audit" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white gradient-cta hover:-translate-y-0.5 transition-all">Get AMC Quote <ArrowRight className="w-4 h-4" /></a>
                  <button onClick={reset} className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-electric-500 transition-all"><RotateCcw className="w-4 h-4" /> Recalculate</button>
                </div>
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
