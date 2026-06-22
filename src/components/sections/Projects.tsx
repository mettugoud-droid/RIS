"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import Image from "next/image";

const filters = ["All", "CCTV", "Electrification", "Networking", "Fire Safety"];

const projects = [
  {
    id: 1,
    title: "Mega Warehouse Complex",
    location: "Hyderabad",
    category: "CCTV",
    stats: ["200+ Cameras", "1,00,000 sqft"],
    value: "₹45L",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    id: 2,
    title: "3PL Logistics Hub",
    location: "Mumbai",
    category: "Electrification",
    stats: ["50,000 sqft", "Complete HT/LT"],
    value: "₹1.2Cr",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
  },
  {
    id: 3,
    title: "Manufacturing Plant",
    location: "Pune",
    category: "Electrification",
    stats: ["3 Phase Power", "DG Synchronization"],
    value: "₹80L",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
  },
  {
    id: 4,
    title: "Corporate Campus",
    location: "Bangalore",
    category: "Networking",
    stats: ["500+ Nodes", "Fiber Backbone"],
    value: "₹35L",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: 5,
    title: "Pharma Cold Storage",
    location: "Chennai",
    category: "CCTV",
    stats: ["80 Cameras", "Temperature Monitoring"],
    value: "₹28L",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
  },
  {
    id: 6,
    title: "Shopping Mall",
    location: "Hyderabad",
    category: "Fire Safety",
    stats: ["Addressable System", "PA + EVAC"],
    value: "₹55L",
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&q=80",
  },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12"
        >
          <div>
            <span className="inline-block text-xs font-semibold text-electric-500 uppercase tracking-[0.1em] mb-4">
              FEATURED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Our Work Speaks
            </h2>
          </div>
          <a
            href="/projects"
            className="group hidden sm:flex items-center gap-1 text-base font-medium text-electric-400 hover:text-white transition-colors mt-4 sm:mt-0"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border",
                activeFilter === filter
                  ? "bg-electric-500 text-white border-electric-500 shadow-[0_0_20px_rgba(0,102,255,0.3)]"
                  : "bg-white/[0.03] text-grey-400 border-white/[0.08] hover:text-white hover:border-white/20 hover:bg-white/[0.05]"
              )}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Project Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group glass rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-electric-500/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-400 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-[200px] sm:h-[220px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-black/60 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-electric-500/0 group-hover:bg-electric-500/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-1 text-sm text-grey-400 mb-4">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stats.map((stat) => (
                      <span
                        key={stat}
                        className="px-2.5 py-1 rounded text-xs font-medium text-electric-300 bg-electric-500/10"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>

                  {/* Value + Link */}
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-electric-400">
                      {project.value} Project
                    </span>
                    <span className="flex items-center gap-1 text-sm font-medium text-electric-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      View
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Mobile View All */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-base font-medium text-electric-400"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
