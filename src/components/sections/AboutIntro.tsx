"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutIntro() {
    return (
        <section className="py-32 bg-background transition-colors duration-500 overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-brand-gold/10">
                            <img
                                src="https://i.pinimg.com/1200x/53/d9/80/53d98034c77c1f9d85016dd9f9850cd3.jpg"
                                alt="Studio Philosophy"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-gold/10 blur-3xl rounded-full" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em]">The Philosophy</span>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                                Minimalist <span className="italic font-light text-brand-gold">Excellence</span> in Luxury Studio.
                            </h2>
                        </div>

                        <p className="text-lg text-foreground/60 leading-relaxed font-light">
                            We specialize in high-end visual storytelling for elite brands and individuals. Every frame is crafted with intention, blending contemporary aesthetics with classic sophistication to create media that transcends trends.
                        </p>

                        <div className="pt-6">
                            <Link href="/about" className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">
                                <span className="pb-1 border-b border-brand-gold/20 group-hover:border-brand-gold transition-colors">Learn Our Story</span>
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
