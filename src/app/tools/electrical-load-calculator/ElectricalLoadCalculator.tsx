"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { Zap, ArrowRight, RotateCcw, Plus, Trash2 } from "lucide-react";

interface Equipment {
  id: number;
  name: string;
  quantity: number;
  kw: number;
}

interface Results {
  connectedLoad: number;
  demandLoad: number;
  transformerKVA: number;
  mainBreakerAmps: number;
  dgCapacity: number;
  cableSize: string;
  estimatedCost: string;
}

const presetEquipment = [
  { name: "Lighting (per 1000 sqft)", kw: 2 },
  { name: "AC / HVAC (per ton)", kw: 1.5 },
  { name: "CNC Machine", kw: 15 },
  { name: "Welding Machine", kw: 10 },
  { name: "Compressor", kw: 7.5 },
  { name: "Conveyor Belt", kw: 5 },
  { name: "Server Rack", kw: 6 },
  { name: "EOT Crane", kw: 25 },
  { name: "Pump Motor", kw: 5 },
  { name: "Office Equipment (per floor)", kw: 10 },
];

export function ElectricalLoadCalculator() {
  const [step, setStep] = useState<"input" | "result">("input");
  const [results, setResults] = useState<Results | null>(null);
  const [equipment, setEquipment] = useState<Equipment[]>([
    { id: 1, name: "Lighting (per 1000 sqft)", quantity: 10, kw: 2 },
    { id: 2, name: "AC / HVAC (per ton)", quantity: 20, kw: 1.5 },
  ]);
  const [area, setArea] = useState("50000");
  const [voltage, setVoltage] = useState("415");
  const [powerFactor, setPowerFactor] = useState("0.85");
  const [diversityFactor, setDiversityFactor] = useState("0.7");
  const [nextId, setNextId] = useState(3);

  const addEquipment = () => {
    setEquipment([...equipment, { id: nextId, name: "", quantity: 1, kw: 0 }]);
    setNextId(nextId + 1);
  };

  const removeEquipment = (id: number) => {
    setEquipment(equipment.filter((e) => e.id !== id));
  };

  const updateEquipment = (id: number, field: keyof Equipment, value: string | number) => {
    setEquipment(equipment.map((e) => (e.id === id ? { ...e, [field]: value } : e)));
  };

  const selectPreset = (id: number, presetName: string) => {
    const preset = presetEquipment.find((p) => p.name === presetName);
    if (preset) {
      updateEquipment(id, "name", preset.name);
      updateEquipment(id, "kw", preset.kw);
    }
  };

  const calculate = () => {
    const pf = parseFloat(powerFactor) || 0.85;
    const df = parseFloat(diversityFactor) || 0.7;
    const v = parseInt(voltage) || 415;

    const connectedLoad = equipment.reduce((sum, e) => sum + e.quantity * e.kw, 0);
    const demandLoad = connectedLoad * df;

    // Transformer KVA = Demand Load / Power Factor, round up to standard sizes
    const requiredKVA = demandLoad / pf;
    const standardSizes = [63, 100, 160, 200, 250, 315, 400, 500, 630, 750, 1000, 1250, 1500, 2000, 2500];
    const transformerKVA = standardSizes.find((s) => s >= requiredKVA * 1.2) || 2500;

    // Main breaker: I = (KVA * 1000) / (sqrt(3) * V)
    const mainCurrent = (transformerKVA * 1000) / (1.732 * v);
    const breakerSizes = [63, 100, 125, 160, 200, 250, 315, 400, 500, 630, 800, 1000, 1250, 1600, 2000, 2500, 3200];
    const mainBreakerAmps = breakerSizes.find((b) => b >= mainCurrent * 1.25) || 3200;

    // DG capacity (80% loading of transformer)
    const dgCapacity = Math.ceil(transformerKVA * 0.8);

    // Cable size recommendation
    let cableSize = "3.5C x 240 sq mm";
    if (mainCurrent < 200) cableSize = "3.5C x 95 sq mm";
    else if (mainCurrent < 300) cableSize = "3.5C x 150 sq mm";
    else if (mainCurrent < 400) cableSize = "3.5C x 185 sq mm";
    else if (mainCurrent < 500) cableSize = "3.5C x 240 sq mm";
    else cableSize = "3.5C x 300 sq mm (or parallel run)";

    // Cost estimate
    const transformerCost = transformerKVA * 800;
    const panelCost = transformerKVA * 1200;
    const cablingCost = parseInt(area) * 15;
    const earthingCost = 150000;
    const laborCost = (transformerCost + panelCost) * 0.2;
    const totalCost = transformerCost + panelCost + cablingCost + earthingCost + laborCost;

    const formatCost = (cost: number) => {
      if (cost >= 10000000) return `₹${(cost / 10000000).toFixed(1)} Cr`;
      if (cost >= 100000) return `₹${(cost / 100000).toFixed(1)} Lakhs`;
      return `₹${cost.toLocaleString("en-IN")}`;
    };

    setResults({
      connectedLoad,
      demandLoad: Math.round(demandLoad),
      transformerKVA,
      mainBreakerAmps,
      dgCapacity,
      cableSize,
      estimatedCost: formatCost(totalCost),
    });
    setStep("result");
  };

  const reset = () => {
    setStep("input");
    setResults(null);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-navy-900 pt-32 pb-20">
        <div className="max-w-[750px] mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-electric-500/10 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-electric-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Electrical Load Calculator
            </h1>
            <p className="text-lg text-grey-400">
              Calculate transformer capacity and power infrastructure needs.
            </p>
          </div>

          {step === "input" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-3xl p-6 sm:p-8"
            >
              <div className="space-y-6">
                {/* Facility Details */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-grey-300 mb-2">Area (sqft)</label>
                    <input type="number" value={area} onChange={(e) => setArea(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white text-sm focus:border-electric-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-grey-300 mb-2">Voltage (V)</label>
                    <select value={voltage} onChange={(e) => setVoltage(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white text-sm focus:border-electric-500 outline-none appearance-none">
                      <option value="415" className="bg-navy-700">415V (3-Phase)</option>
                      <option value="230" className="bg-navy-700">230V (1-Phase)</option>
                      <option value="11000" className="bg-navy-700">11kV (HT)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-grey-300 mb-2">Power Factor</label>
                    <input type="number" step="0.05" value={powerFactor} onChange={(e) => setPowerFactor(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white text-sm focus:border-electric-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-grey-300 mb-2">Diversity Factor</label>
                    <input type="number" step="0.05" value={diversityFactor} onChange={(e) => setDiversityFactor(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white text-sm focus:border-electric-500 outline-none transition-all" />
                  </div>
                </div>

                {/* Equipment List */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-white">Equipment List</h3>
                    <button onClick={addEquipment} className="flex items-center gap-1 text-xs font-medium text-electric-400 hover:text-white transition-colors">
                      <Plus className="w-3.5 h-3.5" /> Add Equipment
                    </button>
                  </div>

                  <div className="space-y-3">
                    {equipment.map((item) => (
                      <div key={item.id} className="grid grid-cols-[1fr_80px_80px_32px] gap-2 items-end">
                        <div>
                          <select
                            value={item.name}
                            onChange={(e) => selectPreset(item.id, e.target.value)}
                            className="w-full px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-white text-sm focus:border-electric-500 outline-none appearance-none"
                          >
                            <option value="" className="bg-navy-700">Select Equipment</option>
                            {presetEquipment.map((p) => (
                              <option key={p.name} value={p.name} className="bg-navy-700">{p.name}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <input
                            type="number"
                            placeholder="Qty"
                            value={item.quantity}
                            onChange={(e) => updateEquipment(item.id, "quantity", parseInt(e.target.value) || 0)}
                            className="w-full px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-white text-sm text-center focus:border-electric-500 outline-none"
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            step="0.5"
                            placeholder="kW"
                            value={item.kw}
                            onChange={(e) => updateEquipment(item.id, "kw", parseFloat(e.target.value) || 0)}
                            className="w-full px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-white text-sm text-center focus:border-electric-500 outline-none"
                          />
                        </div>
                        <button onClick={() => removeEquipment(item.id)} className="w-8 h-8 flex items-center justify-center rounded-lg text-grey-500 hover:text-error hover:bg-error/10 transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Running Total */}
                  <div className="mt-4 p-3 rounded-lg bg-electric-500/5 border border-electric-500/10">
                    <div className="flex justify-between text-sm">
                      <span className="text-grey-400">Connected Load:</span>
                      <span className="font-semibold text-electric-400">
                        {equipment.reduce((sum, e) => sum + e.quantity * e.kw, 0).toFixed(1)} kW
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={calculate}
                  disabled={equipment.length === 0}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:shadow-[0_0_40px_rgba(0,102,255,0.4)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Calculate Infrastructure
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-8">
              {results && (
                <div className="space-y-8">
                  <div className="text-center pb-6 border-b border-white/[0.06]">
                    <p className="text-sm font-medium text-electric-400 mb-2">RECOMMENDED TRANSFORMER</p>
                    <p className="text-5xl font-extrabold text-white">{results.transformerKVA}</p>
                    <p className="text-lg text-grey-400 mt-1">kVA</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-xl bg-white/[0.02]">
                      <p className="text-2xl font-bold text-white">{results.connectedLoad} kW</p>
                      <p className="text-xs text-grey-400 mt-1">Connected Load</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-white/[0.02]">
                      <p className="text-2xl font-bold text-white">{results.demandLoad} kW</p>
                      <p className="text-xs text-grey-400 mt-1">Demand Load</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-3 border-b border-white/[0.04]">
                      <span className="text-sm text-grey-400">Main Breaker</span>
                      <span className="text-sm font-semibold text-white">{results.mainBreakerAmps}A MCCB</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/[0.04]">
                      <span className="text-sm text-grey-400">DG Set Capacity</span>
                      <span className="text-sm font-semibold text-white">{results.dgCapacity} kVA</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/[0.04]">
                      <span className="text-sm text-grey-400">Main Cable</span>
                      <span className="text-sm font-semibold text-white">{results.cableSize}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-sm text-grey-400">Estimated Budget</span>
                      <span className="text-lg font-bold text-electric-400">{results.estimatedCost}</span>
                    </div>
                  </div>

                  <p className="text-xs text-grey-500 text-center">
                    * Approximate estimate. Actual design requires detailed site survey, single line diagram, and load schedule preparation.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="/#site-audit" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:-translate-y-0.5 transition-all">
                      Get Detailed Design <ArrowRight className="w-4 h-4" />
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
