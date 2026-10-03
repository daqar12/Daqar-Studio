"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background transition-colors duration-500">
            {/* Background Image / Video Placeholder */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 scale-105"
                    style={{
                        backgroundImage: "url('https://images.pexels.com/photos/27756302/pexels-photo-27756302.jpeg?_gl=1*1t9mj81*_ga*MTgxNDE3NDI2Ni4xNzY2NDA0NzE3*_ga_8JE65Q40S6*czE3NzI3MDI5MDAkbzQkZzEkdDE3NzI3MDI5MTYkajQ0JGwwJGgw')"
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-12"
                >
                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                            className="text-5xl md:text-8xl font-bold tracking-[0.2em] text-foreground uppercase"
                        >
                            OMAL STUDIO
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="text-brand-gold text-xs md:text-sm font-bold tracking-[0.6em] uppercase"
                        >
                            Capturing Timeless Moments
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4"
                    >
                        <Link href="/portfolio">
                            <Button size="lg" className="w-64 md:w-auto px-10">
                                View Portfolio
                            </Button>
                        </Link>
                        <Link href="/booking">
                            <Button variant="outline" size="lg" className="w-64 md:w-auto px-10 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all">
                                Inquire Now
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
}
