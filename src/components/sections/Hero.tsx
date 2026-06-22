"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { NetworkDiagram } from "@/components/ui/NetworkDiagram";
import Image from "next/image";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <Image
          src={images.hero.warehouse}
          alt="Industrial warehouse infrastructure"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0" style={{ background: "rgba(5, 20, 35, 0.82)" }} />
      </div>

      {/* Network Diagram Background */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <NetworkDiagram />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 pt-32 pb-20 flex flex-col items-center text-center">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            Trusted by 50+ Enterprises Across India
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.0] max-w-4xl mb-6 !text-white"
          style={{ color: "#FFFFFF" }}
        >
          Industrial{" "}
          <span className="text-[#D4A017]">CCTV &</span>
          <br />
          Electrification Experts
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl max-w-2xl mb-12 leading-relaxed"
          style={{ color: "#CBD5E1" }}
        >
          Designing, Executing and Maintaining Mission-Critical Infrastructure
          Across India. From warehouses to corporate offices.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Primary CTA - Gold */}
          <a
            href="#site-audit"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#D4A017] hover:bg-[#B8860B] shadow-[0_4px_16px_rgba(212,160,23,0.3)] hover:shadow-[0_8px_32px_rgba(212,160,23,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            style={{ color: "#FFFFFF" }}
          >
            Book Free Site Survey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300"
            style={{ color: "#FFFFFF" }}
          >
            Request Proposal
          </a>

          {/* Tertiary CTA */}
          <a
            href="tel:+919999999999"
            className="group inline-flex items-center gap-1 px-6 py-4 text-base font-medium transition-colors duration-200"
            style={{ color: "#CBD5E1" }}
          >
            Talk To Expert
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#trust" className="flex flex-col items-center gap-2 text-grey-400 hover:text-white transition-colors">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce-down" />
        </a>
      </motion.div>
    </section>
  );
}
