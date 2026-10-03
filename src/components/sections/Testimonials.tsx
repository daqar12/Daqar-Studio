"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Eleanor Pemberton",
        role: "Luxury Bride",
        content: "OMAL Studio didn't just capture our wedding; they captured the soul of the day. The cinematic quality is beyond anything we expected.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    },
    {
        name: "Marcus Thorne",
        role: "CEO, Thorne Media",
        content: "Their attention to detail and creative direction is unparalleled. They are our go-to for all high-end commercial projects.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    },
    {
        name: "Sophie Laurent",
        role: "Elite Fashion Designer",
        content: "Elegant, professional, and incredibly talented. They have an eye for luxury that is very rare to find in this industry.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    },
];

export default function Testimonials() {
    return (
        <section className="py-32 bg-background text-foreground transition-colors duration-500 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <Container className="relative z-10">
                <div className="text-center mb-24 space-y-6">
                    <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em]">Global Praise</span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Vouched by the <span className="italic font-light text-brand-gold">Elite</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-foreground/[0.03] p-12 rounded-3xl border border-foreground/10 space-y-8 flex flex-col items-center text-center group hover:border-brand-gold/20 hover:bg-foreground/[0.06] transition-all duration-500"
                        >
                            <Quote size={40} className="text-brand-gold opacity-20 group-hover:opacity-100 transition-opacity" />

                            <p className="text-lg font-light leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                                "{testimonial.content}"
                            </p>

                            <div className="pt-8 flex flex-col items-center space-y-4">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-gold/20 flex-shrink-0">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover grayscale" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold uppercase tracking-widest">{testimonial.name}</h4>
                                    <span className="text-[10px] text-brand-gold uppercase tracking-[0.2em] font-medium">{testimonial.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
