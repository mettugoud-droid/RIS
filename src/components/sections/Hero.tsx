"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { NetworkDiagram } from "@/components/ui/NetworkDiagram";
import Image from "next/image";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images.hero.warehouse}
          alt="Industrial warehouse infrastructure"
          fill
          className="object-cover opacity-[0.15] brightness-50"
          priority
          sizes="100vw"
        />
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero opacity-80" />
      <div className="absolute inset-0 gradient-radial-blue" />

      {/* Animated Grid Lines Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-electric-400 bg-electric-500/10 border border-electric-500/20">
            <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
            Trusted by 50+ Enterprises Across India
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.0] max-w-4xl mb-6"
        >
          Industrial{" "}
          <span className="gradient-text">CCTV &</span>
          <br />
          Electrification Experts
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-grey-400 max-w-2xl mb-12 leading-relaxed"
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
          {/* Primary CTA */}
          <a
            href="#site-audit"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(230,51,41,0.3)] hover:shadow-[0_0_60px_rgba(230,51,41,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Book Free Site Survey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/20 backdrop-blur-sm hover:border-electric-500 hover:bg-electric-500/10 transition-all duration-300"
          >
            Request Proposal
          </a>

          {/* Tertiary CTA */}
          <a
            href="tel:+919999999999"
            className="group inline-flex items-center gap-1 px-6 py-4 text-base font-medium text-electric-400 hover:text-white transition-colors duration-200"
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
