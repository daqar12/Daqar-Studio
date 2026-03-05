"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "252000000000"; // ← update with real number
const WHATSAPP_MESSAGE = "Hi Daqar Studio! I'd love to inquire about your photography/videography services.";

export default function WhatsAppFloat() {
    const [visible, setVisible] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    // Show button after scrolling down a bit
    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 200);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const openWhatsApp = () => {
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
        window.open(url, "_blank");
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3"
                >
                    {/* Tooltip */}
                    <AnimatePresence>
                        {tooltipOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 6, scale: 0.95 }}
                                className="bg-[#1A1A1A] text-white rounded-xl px-4 py-3 text-sm max-w-[220px] shadow-2xl border border-white/10 text-right"
                            >
                                <p className="font-semibold text-[#25D366] text-xs uppercase tracking-wide mb-1">Chat with us</p>
                                <p className="text-white/70 font-light text-xs leading-relaxed">
                                    Reach us directly on WhatsApp for fast replies.
                                </p>
                                <button
                                    onClick={openWhatsApp}
                                    className="mt-3 w-full bg-[#25D366] text-white text-xs font-bold py-2 rounded-lg hover:brightness-110 transition-all"
                                >
                                    Start Chat →
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Main button */}
                    <button
                        onClick={() => setTooltipOpen((v) => !v)}
                        aria-label="Open WhatsApp chat"
                        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:scale-110 transition-transform"
                    >
                        <AnimatePresence mode="wait">
                            {tooltipOpen ? (
                                <motion.span
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={22} />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="chat"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <MessageCircle size={24} />
                                </motion.span>
                            )}
                        </AnimatePresence>

                        {/* Pulse ring */}
                        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
