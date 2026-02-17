"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Modelos", href: "#models" },
        { name: "Recursos", href: "#features" },
        { name: "Configurador", href: "#configurator" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-primary/80 backdrop-blur-md py-4 shadow-lg"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="font-display text-2xl font-extrabold text-surface tracking-tighter group-hover:text-secondary transition-colors">
                        VITARA
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-surface/90 hover:text-secondary font-medium transition-colors text-sm uppercase tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="https://wa.me/5511999999999" // Replace with actual number
                        className="flex items-center gap-2 px-5 py-2 border-2 border-secondary text-secondary rounded-full font-bold hover:bg-secondary hover:text-primary transition-all duration-300"
                    >
                        <Phone size={18} />
                        <span>Fale Conosco</span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-surface hover:text-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-xl border-t border-white/10 p-6 md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col gap-6 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-surface text-lg font-medium hover:text-secondary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="https://wa.me/5511999999999"
                                className="flex items-center gap-2 px-6 py-3 bg-secondary text-primary rounded-full font-bold w-full justify-center"
                            >
                                <Phone size={20} />
                                Fale Conosco
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
