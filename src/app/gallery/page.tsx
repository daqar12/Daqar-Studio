"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// ─────────────────────── DATA ───────────────────────

const galleryItems = [
    { id: 1, title: "Bridal Moments", category: "Weddings", image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Golden Sunset", category: "Portraits", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "Gala Evening", category: "Events", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "Summer Bloom", category: "Portraits", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" },
    { id: 5, title: "Behind the Lens", category: "Behind the Scenes", image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=800&q=80" },
    { id: 6, title: "Lakeside Ceremony", category: "Weddings", image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80" },
    { id: 7, title: "Studio Session", category: "Behind the Scenes", image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80" },
    { id: 8, title: "Corporate Summit", category: "Events", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80" },
    { id: 9, title: "Desert Elopement", category: "Weddings", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80" },
    { id: 10, title: "Cinematic Edit", category: "Behind the Scenes", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80" },
    { id: 11, title: "Rooftop Portraits", category: "Portraits", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" },
    { id: 12, title: "Luxury Reception", category: "Events", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80" },

    { id: 13, title: "Ocean Wedding", category: "Weddings", image: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop&w=800&q=80" },
    { id: 14, title: "Classic Portrait", category: "Portraits", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80" },
    { id: 15, title: "Luxury Ballroom", category: "Events", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80" },
    { id: 16, title: "Editing Studio", category: "Behind the Scenes", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80" },
    { id: 17, title: "Elegant Bride", category: "Weddings", image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80" },
    { id: 18, title: "City Portrait", category: "Portraits", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80" },
    { id: 19, title: "Night Gala", category: "Events", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80" },
    { id: 20, title: "Camera Setup", category: "Behind the Scenes", image: "https://images.unsplash.com/photo-1519183071298-a2962be90b8e?auto=format&fit=crop&w=800&q=80" },

    { id: 21, title: "Garden Wedding", category: "Weddings", image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80" },
    { id: 22, title: "Fashion Portrait", category: "Portraits", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80" },
    { id: 23, title: "Conference Event", category: "Events", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" },
    { id: 24, title: "Lighting Setup", category: "Behind the Scenes", image: "https://images.unsplash.com/photo-1502980426475-b83966705988?auto=format&fit=crop&w=800&q=80" },
    { id: 25, title: "Beach Couple", category: "Weddings", image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80" },
    { id: 26, title: "Soft Light Portrait", category: "Portraits", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80" },
    { id: 27, title: "VIP Event", category: "Events", image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80" },
    { id: 28, title: "Lens Focus", category: "Behind the Scenes", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80" },

    { id: 29, title: "Sunset Wedding", category: "Weddings", image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=800&q=80" },
    { id: 30, title: "Studio Portrait", category: "Portraits", image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=800&q=80" },
    { id: 31, title: "Luxury Party", category: "Events", image: "https://images.unsplash.com/photo-1505236738415-49e0bfa9fdd6?auto=format&fit=crop&w=800&q=80" },
    { id: 32, title: "Camera Rig", category: "Behind the Scenes", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80" },
    { id: 33, title: "Classic Ceremony", category: "Weddings", image: "https://images.unsplash.com/photo-1529634893481-ea55f1d1f7c8?auto=format&fit=crop&w=800&q=80" },
    { id: 34, title: "Natural Portrait", category: "Portraits", image: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=800&q=80" },
    { id: 35, title: "Corporate Dinner", category: "Events", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80" },
    { id: 36, title: "Video Editing", category: "Behind the Scenes", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80" },

    { id: 37, title: "Romantic Couple", category: "Weddings", image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=80" },
    { id: 38, title: "Creative Portrait", category: "Portraits", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80" },
    { id: 39, title: "Award Ceremony", category: "Events", image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=800&q=80" },
    { id: 40, title: "Camera Crew", category: "Behind the Scenes", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80" },

    { id: 41, title: "Luxury Bride", category: "Weddings", image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80" },
    { id: 42, title: "Editorial Portrait", category: "Portraits", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80" },
    { id: 43, title: "Business Event", category: "Events", image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80" },
    { id: 44, title: "Studio Lighting", category: "Behind the Scenes", image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=800&q=80" },

    { id: 45, title: "Dream Wedding", category: "Weddings", image: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop&w=800&q=80" },
    { id: 46, title: "Golden Portrait", category: "Portraits", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80" },
    { id: 47, title: "Luxury Conference", category: "Events", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80" },
    { id: 48, title: "Photo Editing", category: "Behind the Scenes", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80" },
    { id: 49, title: "Elegant Ceremony", category: "Weddings", image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80" },
    { id: 50, title: "Studio Portrait Pro", category: "Portraits", image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=800&q=80" },
    { id: 51, title: "Corporate Event", category: "Events", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80" },
    { id: 52, title: "Behind the Lens", category: "Behind the Scenes", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80" },
];

const categories = ["All", "Weddings", "Portraits", "Events", "Behind the Scenes"];

// ─────────────────────── LIGHTBOX ───────────────────────

function Lightbox({
    items,
    index,
    onClose,
    onPrev,
    onNext,
}: {
    items: typeof galleryItems;
    index: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}) {
    const item = items[index];

    // Keyboard navigation
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose, onPrev, onNext]);

    // Prevent body scroll while open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-md"
                onClick={onClose}
            >
                {/* Close */}
                <button
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-black transition-all z-10"
                    onClick={onClose}
                >
                    <X size={18} />
                </button>

                {/* Counter */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/50 text-xs font-bold uppercase tracking-widest">
                    {index + 1} / {items.length}
                </div>

                {/* Prev */}
                <button
                    className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-black transition-all z-10"
                    onClick={(e) => { e.stopPropagation(); onPrev(); }}
                >
                    <ChevronLeft size={22} />
                </button>

                {/* Next */}
                <button
                    className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-black transition-all z-10"
                    onClick={(e) => { e.stopPropagation(); onNext(); }}
                >
                    <ChevronRight size={22} />
                </button>

                {/* Image */}
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.3 }}
                    className="relative max-w-5xl w-full px-20"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                    />
                    <div className="absolute bottom-0 left-20 right-20 p-5 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                        <p className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">{item.category}</p>
                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    </div>
                </motion.div>

                {/* Thumbnail strip */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-xs md:max-w-2xl px-4">
                    {items.map((t, i) => (
                        <button
                            key={t.id}
                            onClick={(e) => { e.stopPropagation(); /* handled by parent via prop */ }}
                            className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${i === index ? "border-brand-gold scale-110" : "border-transparent opacity-50 hover:opacity-80"}`}
                        >
                            <img src={t.image} alt={t.title} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

// ─────────────────────── PAGE ───────────────────────

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const filtered = activeCategory === "All"
        ? galleryItems
        : galleryItems.filter((g) => g.category === activeCategory);

    const openLightbox = (idx: number) => setLightboxIndex(idx);
    const closeLightbox = useCallback(() => setLightboxIndex(null), []);
    const prevImage = useCallback(() => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : 0)), [filtered.length]);
    const nextImage = useCallback(() => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : 0)), [filtered.length]);

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            {/* ── HERO ── */}
            <section className="relative pt-40 pb-12">
                <Container>
                    {/* Portfolio / Gallery tab switcher */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-3 mb-12 -mt-12"
                    >
                        <Link href="/portfolio">
                            <button className="px-6 py-2.5 rounded-full text-sm font-bold border border-foreground/20 text-foreground/60 hover:border-brand-gold/50 hover:text-brand-gold transition-all">
                                Portfolio
                            </button>
                        </Link>
                        <Link href="/gallery">
                            <button className="px-6 py-2.5 rounded-full text-sm font-bold bg-brand-gold text-brand-black border border-brand-gold hover:brightness-110 transition-all">
                                Gallery
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-none">
                            LUXURY <span className="text-brand-gold">GALLERY</span>
                        </h1>
                        <p className="text-lg text-foreground/60 font-light leading-relaxed max-w-2xl">
                            An intimate look into our finest moments — real emotions and timeless frames hand-selected by our team.
                        </p>
                    </motion.div>
                </Container>
            </section>



            {/* ── UNIFORM GRID ── */}
            <section className="pb-32">
                <Container>
                    <motion.div
                        layout
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                        <AnimatePresence mode="popLayout">
                            {filtered.map((item, idx) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.35 }}
                                    className="group relative aspect-square overflow-hidden rounded-xl bg-foreground/5 border border-foreground/10 cursor-pointer hover:border-brand-gold/30 transition-all"
                                    onClick={() => openLightbox(idx)}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                                        <div className="flex justify-end">
                                            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                                <ZoomIn size={14} className="text-white" />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-brand-gold text-[9px] font-bold uppercase tracking-widest mb-1">{item.category}</p>
                                            <h3 className="text-white text-sm font-bold leading-tight">{item.title}</h3>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </Container>
            </section>

            {/* ── LIGHTBOX ── */}
            {lightboxIndex !== null && (
                <Lightbox
                    items={filtered}
                    index={lightboxIndex}
                    onClose={closeLightbox}
                    onPrev={prevImage}
                    onNext={nextImage}
                />
            )}

            <Footer />
        </main>
    );
}
