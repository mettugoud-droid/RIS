"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  isInView: boolean;
}

function StatBlock({ value, suffix, label, isInView }: StatProps) {
  const count = useCountUp(value, 2000, isInView);

  return (
    <motion.div variants={staggerItem} className="text-center relative">
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight">
          {count}
        </span>
        <span className="text-2xl sm:text-3xl font-bold text-electric-500">
          {suffix}
        </span>
      </div>
      <p className="mt-1 text-sm font-medium text-grey-400 uppercase tracking-[0.05em]">
        {label}
      </p>
    </motion.div>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Cities Served" },
  { value: 50, suffix: "+", label: "Clients Served" },
  { value: 2, suffix: "hr", label: "Response Time" },
];

export function TrustBar() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section
      id="trust"
      ref={ref}
      className="relative bg-white border-y border-[#E2E8F0] py-12 sm:py-16"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6"
        >
          {stats.map((stat) => (
            <StatBlock key={stat.label} {...stat} isInView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
