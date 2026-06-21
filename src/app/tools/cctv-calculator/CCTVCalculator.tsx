"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { Camera, ArrowRight, RotateCcw, Download } from "lucide-react";

interface Results {
  indoorCameras: number;
  outdoorCameras: number;
  ptzCameras: number;
  totalCameras: number;
  nvrChannels: number;
  storageGB: number;
  estimatedCost: string;
}

export function CCTVCalculator() {
  const [step, setStep] = useState<"input" | "result">("input");
  const [results, setResults] = useState<Results | null>(null);

  // Form state
  const [areaSize, setAreaSize] = useState("");
  const [entryPoints, setEntryPoints] = useState("");
  const [floors, setFloors] = useState("1");
  const [storageZones, setStorageZones] = useState("");
  const [loadingDocks, setLoadingDocks] = useState("");
  const [perimeterLength, setPerimeterLength] = useState("");
  const [storageDays, setStorageDays] = useState("30");
  const [resolution, setResolution] = useState("2MP");

  const calculate = () => {
    const area = parseInt(areaSize) || 0;
    const entries = parseInt(entryPoints) || 0;
    const floorCount = parseInt(floors) || 1;
    const zones = parseInt(storageZones) || 0;
    const docks = parseInt(loadingDocks) || 0;
    const perimeter = parseInt(perimeterLength) || 0;
    const days = parseInt(storageDays) || 30;

    // Indoor cameras: 1 per 800 sqft for general + 1 per zone + 2 per entry
    const indoorCameras = Math.ceil(area / 800) * floorCount + zones + entries * 2;

    // Outdoor: 1 per 20m perimeter + 2 per dock
    const outdoorCameras = Math.ceil(perimeter / 20) + docks * 2;

    // PTZ: 1 per 50,000 sqft + 1 per 2 docks
    const ptzCameras = Math.ceil(area / 50000) + Math.ceil(docks / 2);

    const totalCameras = indoorCameras + outdoorCameras + ptzCameras;

    // NVR: Next standard size (8, 16, 32, 64, 128)
    const nvrChannels = totalCameras <= 8 ? 8 :
      totalCameras <= 16 ? 16 :
      totalCameras <= 32 ? 32 :
      totalCameras <= 64 ? 64 : 128;

    // Storage: resolution factor * cameras * days * 10GB/day (approx)
    const resFactor = resolution === "4K" ? 3 : resolution === "4MP" ? 2 : 1;
    const storageGB = totalCameras * days * 10 * resFactor;

    // Cost estimate (rough)
    const cameraCost = totalCameras * (resolution === "4K" ? 15000 : resolution === "4MP" ? 8000 : 5000);
    const infraCost = totalCameras * 3000; // cabling, switches
    const nvrCost = nvrChannels * 2500;
    const storageCost = (storageGB / 1000) * 8000; // per TB
    const laborCost = totalCameras * 2000;
    const totalCost = cameraCost + infraCost + nvrCost + storageCost + laborCost;

    const formatCost = (cost: number) => {
      if (cost >= 10000000) return `₹${(cost / 10000000).toFixed(1)} Cr`;
      if (cost >= 100000) return `₹${(cost / 100000).toFixed(1)} Lakhs`;
      return `₹${cost.toLocaleString("en-IN")}`;
    };

    setResults({
      indoorCameras,
      outdoorCameras,
      ptzCameras,
      totalCameras,
      nvrChannels,
      storageGB,
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
        <div className="max-w-[700px] mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-electric-500/10 flex items-center justify-center mx-auto mb-6">
              <Camera className="w-8 h-8 text-electric-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              CCTV Camera Calculator
            </h1>
            <p className="text-lg text-grey-400">
              Get an instant estimate of cameras needed for your facility.
            </p>
          </div>

          {step === "input" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-3xl p-8"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-grey-300 mb-2">
                      Total Area (sqft) *
                    </label>
                    <input
                      type="number"
                      value={areaSize}
                      onChange={(e) => setAreaSize(e.target.value)}
                      placeholder="e.g. 50000"
                      className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-grey-300 mb-2">
                      Entry/Exit Points *
                    </label>
                    <input
                      type="number"
                      value={entryPoints}
                      onChange={(e) => setEntryPoints(e.target.value)}
                      placeholder="e.g. 4"
                      className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-grey-300 mb-2">
                      Number of Floors
                    </label>
                    <input
                      type="number"
                      value={floors}
                      onChange={(e) => setFloors(e.target.value)}
                      placeholder="1"
                      className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-grey-300 mb-2">
                      Storage/High-Value Zones
                    </label>
                    <input
                      type="number"
                      value={storageZones}
                      onChange={(e) => setStorageZones(e.target.value)}
                      placeholder="e.g. 6"
                      className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-grey-300 mb-2">
                      Loading Docks
                    </label>
                    <input
                      type="number"
                      value={loadingDocks}
                      onChange={(e) => setLoadingDocks(e.target.value)}
                      placeholder="e.g. 8"
                      className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-grey-300 mb-2">
                      Perimeter Length (meters)
                    </label>
                    <input
                      type="number"
                      value={perimeterLength}
                      onChange={(e) => setPerimeterLength(e.target.value)}
                      placeholder="e.g. 400"
                      className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-grey-500 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-grey-300 mb-2">
                      Recording Storage (Days)
                    </label>
                    <select
                      value={storageDays}
                      onChange={(e) => setStorageDays(e.target.value)}
                      className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all appearance-none"
                    >
                      <option value="15" className="bg-navy-700">15 Days</option>
                      <option value="30" className="bg-navy-700">30 Days</option>
                      <option value="60" className="bg-navy-700">60 Days</option>
                      <option value="90" className="bg-navy-700">90 Days</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-grey-300 mb-2">
                      Camera Resolution
                    </label>
                    <select
                      value={resolution}
                      onChange={(e) => setResolution(e.target.value)}
                      className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all appearance-none"
                    >
                      <option value="2MP" className="bg-navy-700">2MP (1080p)</option>
                      <option value="4MP" className="bg-navy-700">4MP (2K)</option>
                      <option value="4K" className="bg-navy-700">8MP (4K)</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={calculate}
                  disabled={!areaSize || !entryPoints}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:shadow-[0_0_40px_rgba(0,102,255,0.4)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  Calculate Cameras
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-3xl p-8"
            >
              {results && (
                <div className="space-y-8">
                  {/* Total */}
                  <div className="text-center pb-6 border-b border-white/[0.06]">
                    <p className="text-sm font-medium text-electric-400 mb-2">RECOMMENDED TOTAL</p>
                    <p className="text-5xl font-extrabold text-white">{results.totalCameras}</p>
                    <p className="text-lg text-grey-400 mt-1">Cameras</p>
                  </div>

                  {/* Breakdown */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-xl bg-white/[0.02]">
                      <p className="text-2xl font-bold text-white">{results.indoorCameras}</p>
                      <p className="text-xs text-grey-400 mt-1">Indoor</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-white/[0.02]">
                      <p className="text-2xl font-bold text-white">{results.outdoorCameras}</p>
                      <p className="text-xs text-grey-400 mt-1">Outdoor</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-white/[0.02]">
                      <p className="text-2xl font-bold text-white">{results.ptzCameras}</p>
                      <p className="text-xs text-grey-400 mt-1">PTZ</p>
                    </div>
                  </div>

                  {/* Infrastructure */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-3 border-b border-white/[0.04]">
                      <span className="text-sm text-grey-400">NVR Capacity</span>
                      <span className="text-sm font-semibold text-white">{results.nvrChannels} Channels</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/[0.04]">
                      <span className="text-sm text-grey-400">Storage Required</span>
                      <span className="text-sm font-semibold text-white">{(results.storageGB / 1000).toFixed(1)} TB</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/[0.04]">
                      <span className="text-sm text-grey-400">Resolution</span>
                      <span className="text-sm font-semibold text-white">{resolution}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-sm text-grey-400">Estimated Budget</span>
                      <span className="text-lg font-bold text-electric-400">{results.estimatedCost}</span>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <p className="text-xs text-grey-500 text-center">
                    * This is an approximate estimate. Actual requirements may vary based on site conditions.
                    Book a free site survey for an accurate quotation.
                  </p>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/#site-audit"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:-translate-y-0.5 transition-all"
                    >
                      Get Exact Quote
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <button
                      onClick={reset}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-electric-500 hover:bg-electric-500/10 transition-all"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Recalculate
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
