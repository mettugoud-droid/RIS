"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { Play, Clock, Camera, Zap, Users, BookOpen } from "lucide-react";

interface Video {
  title: string;
  category: string;
  duration: string;
  icon: React.ElementType;
  description: string;
}

const videos: Video[] = [
  {
    title: "Warehouse CCTV Installation — Full Walkthrough",
    category: "Project Walkthrough",
    duration: "8:42",
    icon: Camera,
    description:
      "Complete walkthrough of a 1,00,000 sq ft warehouse CCTV deployment — from site survey to commissioning.",
  },
  {
    title: "Industrial Electrification — 500kVA Project",
    category: "Project Walkthrough",
    duration: "12:15",
    icon: Zap,
    description:
      "End-to-end electrification of a manufacturing unit including HT panel, transformer, and distribution.",
  },
  {
    title: "How We Install IP Cameras in Warehouses",
    category: "Installation Process",
    duration: "6:30",
    icon: Camera,
    description:
      "Step-by-step process showing camera mounting, cabling, NVR setup, and quality testing.",
  },
  {
    title: "Structured Cabling Installation — Behind the Scenes",
    category: "Installation Process",
    duration: "5:18",
    icon: Camera,
    description:
      "Watch our team deploy Cat6A structured cabling infrastructure in a corporate facility.",
  },
  {
    title: "What Our Clients Say — Prozo Distribution",
    category: "Client Testimonial",
    duration: "3:45",
    icon: Users,
    description:
      "Hear from Prozo Distribution about their multi-site CCTV deployment experience with Raksha.",
  },
  {
    title: "How to Choose the Right CCTV System",
    category: "Educational",
    duration: "9:20",
    icon: BookOpen,
    description:
      "A guide for facility managers on selecting the right cameras, NVR, and storage for their needs.",
  },
];

export function VideosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Videos</h1>
            <p className="text-grey-400 max-w-2xl mx-auto">
              Watch project walkthroughs, installation processes, and expert insights on industrial
              infrastructure solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden group">
                <div className="relative aspect-video bg-navy-800 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900" />
                  <video.icon className="relative w-12 h-12 text-grey-600" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-electric-500/20 flex items-center justify-center group-hover:bg-electric-500/30 transition-colors cursor-pointer">
                      <Play className="w-6 h-6 text-electric-500 ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 rounded bg-black/60 text-xs text-white">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-electric-500 uppercase tracking-wider">
                    {video.category}
                  </span>
                  <h3 className="text-sm font-bold text-white mt-1 mb-2">{video.title}</h3>
                  <p className="text-xs text-grey-400 leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center glass rounded-2xl p-8">
            <h3 className="text-lg font-bold text-white mb-2">Want to See Our Work Live?</h3>
            <p className="text-sm text-grey-400 mb-6">
              Schedule a video call with our team or visit one of our completed project sites.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-cta text-white font-semibold hover:scale-105 transition-transform"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
