"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark";
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12",
                scrolled
                    ? "py-4 bg-background/80 backdrop-blur-md border-b border-brand-gold/10"
                    : "py-8 bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3 group">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative h-8 w-auto md:h-10"
                    >
                        <img
                            src="/logo.png"
                            alt="OMAL Studio"
                            className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-lg font-bold tracking-[0.2em] text-foreground uppercase group-hover:text-brand-gold transition-colors duration-500"
                    >
                        OMAL STUDIO
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-4">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-60 hover:opacity-100 hover:text-brand-gold transition-all duration-300"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="p-2 hover:bg-brand-gold/10 rounded-full transition-colors opacity-60 hover:opacity-100"
                        aria-label="Toggle theme"
                    >
                        {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
                    </button>

                    <Link
                        href="/booking"
                        className="px-8 py-3 bg-brand-gold text-brand-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all duration-500 rounded-sm"
                    >
                        Book a Session
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <button onClick={toggleTheme} className="p-2">
                        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-brand-gold/10 overflow-hidden"
                    >
                        <div className="flex flex-col space-y-4 px-6 py-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium tracking-widest uppercase hover:text-brand-gold"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/booking"
                                onClick={() => setIsOpen(false)}
                                className="w-full py-4 bg-brand-gold text-brand-black text-center font-bold uppercase tracking-widest mt-4"
                            >
                                Book Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
