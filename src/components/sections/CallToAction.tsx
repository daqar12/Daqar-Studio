"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Calendar, Download } from "lucide-react";

export default function CallToAction() {
    return (
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
    );
}
