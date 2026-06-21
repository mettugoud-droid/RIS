"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { X, ZoomIn, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  location: string;
  tags: string[];
}

const categories = ["All", "Warehouse CCTV", "Electrification", "Networking", "Access Control", "Fire Alarm", "Corporate"];

const galleryItems: GalleryItem[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80", title: "Warehouse CCTV — 120 Camera Installation", category: "Warehouse CCTV", location: "Hyderabad", tags: ["IP Camera", "NVR", "Warehouse"] },
  { id: 2, src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80", title: "Industrial HT/LT Panel Room", category: "Electrification", location: "Pune", tags: ["HT Panel", "LT Panel", "Manufacturing"] },
  { id: 3, src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80", title: "Server Room — 42U Rack Installation", category: "Networking", location: "Bangalore", tags: ["Server Room", "Rack", "Cabling"] },
  { id: 4, src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80", title: "Biometric Access Control Deployment", category: "Access Control", location: "Hyderabad", tags: ["Biometric", "Door Lock", "Corporate"] },
  { id: 5, src: "https://images.unsplash.com/photo-1618060932014-4deda4932554?w=800&q=80", title: "Addressable Fire Alarm Panel", category: "Fire Alarm", location: "Chennai", tags: ["Fire Panel", "Detector", "NBC"] },
  { id: 6, src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", title: "Corporate Office Security System", category: "Corporate", location: "Bangalore", tags: ["Office", "CCTV", "Access Control"] },
  { id: 7, src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", title: "3PL Warehouse — Perimeter Cameras", category: "Warehouse CCTV", location: "Mumbai", tags: ["Perimeter", "Bullet Camera", "3PL"] },
  { id: 8, src: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80", title: "Factory Power Distribution Board", category: "Electrification", location: "Pune", tags: ["MDB", "SMDB", "Factory"] },
  { id: 9, src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", title: "High Bay LED Lighting — Warehouse", category: "Electrification", location: "Hyderabad", tags: ["LED", "High Bay", "Warehouse"] },
  { id: 10, src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80", title: "Loading Dock Camera System", category: "Warehouse CCTV", location: "Mumbai", tags: ["Loading Dock", "ANPR", "Logistics"] },
  { id: 11, src: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80", title: "Cold Storage Anti-Fog Cameras", category: "Warehouse CCTV", location: "Chennai", tags: ["Cold Storage", "Anti-Fog", "Temperature"] },
  { id: 12, src: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80", title: "Industrial Park Perimeter Security", category: "Corporate", location: "Vizag", tags: ["Perimeter", "Thermal", "Industrial Park"] },
];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % filtered.length);
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900">
        {/* Hero */}
        <section className="relative pt-32 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 dot-grid opacity-30" />
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                Project <span className="gradient-text">Gallery</span>
              </h1>
              <p className="text-lg text-grey-400 max-w-2xl mx-auto">
                Real installations from our 500+ completed projects across India.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 px-4 sticky top-0 z-30 bg-navy-900/95 backdrop-blur-md border-b border-navy-700">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === cat
                    ? "bg-electric-500 text-white shadow-lg"
                    : "glass text-grey-300 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {filtered.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    onClick={() => openLightbox(i)}
                    className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/70 transition-all duration-300 flex items-end p-4">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
                        <p className="text-sm font-semibold text-white line-clamp-2">{item.title}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3 text-electric-400" />
                          <span className="text-xs text-grey-400">{item.location}</span>
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <p className="text-center text-grey-400 py-16">No images in this category yet.</p>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 border-t border-navy-700">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Want Results Like These?</h2>
            <p className="text-grey-400 mb-6">Get a free site survey and customized proposal for your facility.</p>
            <a href="/rfq" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-lg hover:-translate-y-0.5 transition-all">
              Request Free Quote
            </a>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button onClick={closeLightbox} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 z-10">
              <X className="w-5 h-5" />
            </button>

            {/* Navigation */}
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 z-10">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 z-10">
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative max-w-5xl max-h-[80vh] w-full mx-8" onClick={(e) => e.stopPropagation()}>
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                width={1200}
                height={800}
                className="object-contain w-full h-auto max-h-[75vh] rounded-xl"
              />
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold text-white">{filtered[lightboxIndex].title}</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <MapPin className="w-4 h-4 text-electric-400" />
                  <span className="text-sm text-grey-400">{filtered[lightboxIndex].location}</span>
                  <span className="text-grey-600 mx-2">|</span>
                  {filtered[lightboxIndex].tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-navy-700 text-xs text-grey-300">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-grey-500">
              {lightboxIndex + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingButtons />
    </>
  );
}
