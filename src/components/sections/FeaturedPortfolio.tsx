"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "Ethereal Weddings",
        category: "Weddings",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80",
        aspect: "aspect-[4/5]",
    },
    {
        title: "Urban Portraits",
        category: "Portraits",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
        aspect: "aspect-[4/3]",
    },
    {
        title: "Scent of Luxury",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80",
        aspect: "aspect-[4/5]",
    },
    {
        title: "Night in Paris",
        category: "Events",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
        aspect: "aspect-[16/9]",
    },
];

export default function FeaturedPortfolio() {
    return (
        <section className="py-32 bg-background transition-colors duration-500 border-t border-brand-gold/5">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="space-y-6">
                        <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em]">Selected Works</span>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground uppercase">Featured Portfolio</h2>
                    </div>
                    <Link
                        href="/portfolio"
                        className="group flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold"
                    >
                        <span className="pb-1 border-b border-brand-gold/20 group-hover:border-brand-gold transition-colors">Explore All Projects</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="columns-1 md:columns-2 gap-8 space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="break-inside-avoid"
                        >
                            <Link href="/portfolio" className="group block relative overflow-hidden rounded-2xl bg-foreground/5">
                                <div className={cn("w-full h-full", project.aspect)}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                                    <div className="absolute bottom-0 left-0 p-8 space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="text-brand-gold text-[9px] font-bold uppercase tracking-[0.3em]">
                                            {project.category}
                                        </span>
                                        <h3 className="text-xl font-bold uppercase tracking-widest text-white">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
