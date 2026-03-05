"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Play, Calendar, Download } from "lucide-react";
import Link from "next/link";

const categories = ["All Work", "Weddings", "Portraits", "Events", "Cinematic Videos"];

const projects = [
    {
        id: 1,
        title: "Eternal Union",
        category: "Weddings",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80",
        aspect: "aspect-[4/5]",
    },
    {
        id: 2,
        title: "Golden Hour Feast",
        category: "Events",
        image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80",
        aspect: "aspect-[1/1]",
    },
    {
        id: 3,
        title: "Urban Minimalist",
        category: "Portraits",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
        aspect: "aspect-[4/3]",
    },
    {
        id: 4,
        title: "Elite Corporate",
        category: "Portraits",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
        aspect: "aspect-[1/1]",
    },
    {
        id: 5,
        title: "Elegance in Motion",
        category: "Cinematic Videos",
        video: "/super.mp4",
        aspect: "aspect-[16/9]",
    },
    {
        id: 6,
        title: "Grand Opening",
        category: "Events",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
        aspect: "aspect-[4/5]",
    },
];

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("All Work");

    const filteredProjects = activeCategory === "All Work"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-40 pb-12">
                <Container>
                    {/* ── Portfolio / Gallery tab switcher ── */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-3 mb-12 -mt-12"
                    >
                        <Link href="/portfolio">
                            <button className="px-6 py-2.5 rounded-full text-sm font-bold bg-brand-gold text-brand-black border border-brand-gold hover:brightness-110 transition-all">
                                Portfolio
                            </button>
                        </Link>
                        <Link href="/gallery">
                            <button className="px-6 py-2.5 rounded-full text-sm font-bold border border-foreground/20 text-foreground/60 hover:border-brand-gold/50 hover:text-brand-gold transition-all">
                                Gallery
                            </button>
                        </Link>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="max-w-2xl space-y-6"
                        >
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-none">
                                LUXURY
                                <span className="text-brand-gold"> PORTFOLIO</span>
                            </h1>
                            <p className="text-lg text-foreground/60 font-light leading-relaxed">
                                A curated collection of cinematic storytelling, capturing the essence of elegance and emotion through high-end visual media.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <Button variant="outline" className="h-14 px-8 border-brand-gold/20 text-brand-gold hover:bg-brand-gold hover:text-background transition-all group">
                                <Play size={18} className="mr-3 fill-current" /> View Showreel
                            </Button>
                        </motion.div>
                    </div>
                </Container>
            </section>


            {/* Filter Bar */}
            <section className="py-12">
                <Container>
                    <div className="flex flex-wrap items-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border",
                                    activeCategory === category
                                        ? "bg-brand-gold border-brand-gold text-background"
                                        : "bg-foreground/[0.03] border-foreground/5 text-foreground/40 hover:text-foreground hover:border-foreground/20"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Masonry Gallery */}
            <section className="pb-32">
                <Container>
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className="break-inside-avoid"
                                >
                                    <div className={cn(
                                        "group relative overflow-hidden rounded-2xl bg-foreground/5 border border-brand-gold/10",
                                        project.aspect
                                    )}>
                                        {project.video ? (
                                            <video
                                                src={project.video}
                                                autoPlay
                                                muted
                                                loop
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <div className="absolute bottom-0 left-0 p-8">
                                                <span className="text-brand-gold text-[9px] font-bold uppercase tracking-widest mb-2 block">
                                                    {project.category}
                                                </span>
                                                <h3 className="text-xl font-bold tracking-tight">
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="pb-32">
                <Container>
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-foreground/[0.03] p-12 md:p-24 text-center border border-brand-gold/10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10 max-w-3xl mx-auto space-y-10"
                        >
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                                Ready to capture your story?
                            </h2>
                            <p className="text-lg text-foreground/50 font-light leading-relaxed">
                                From intimate celebrations to large-scale productions, we bring a sophisticated vision to every frame.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <Link href="/booking">
                                    <Button className="w-full sm:w-auto px-10 h-14 bg-brand-gold text-background hover:bg-foreground hover:text-background border-none">
                                        <Calendar size={18} className="mr-3" /> Book a Consultation
                                    </Button>
                                </Link>
                                <Button variant="outline" className="w-full sm:w-auto px-10 h-14 border-brand-gold/30 text-brand-gold hover:bg-brand-gold hover:text-background font-bold">
                                    <Download size={18} className="mr-3" /> Download Pricing Guide
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
