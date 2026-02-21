"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden absolute inset-0 z-0">
            {/* Background Image/Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10 absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent z-10 mix-blend-overlay absolute inset-0 bg-black/40 z-10" />
                {/* Placeholder for actual image */}
                <div
                    className="w-full h-full bg-[url('https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center scale-105"
                    aria-hidden="true"
                />
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium tracking-wide mb-8">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        Produção 100% Nacional
                    </div>

                    <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-white mb-8 leading-[0.9] tracking-tight">
                        Liberdade <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">Compacta.</span>
                    </h1>

                    <p className="font-sans text-xl md:text-2xl text-surface/90 max-w-xl mb-12 leading-relaxed font-light opacity-90">
                        Redescubra o prazer de viajar com os Mini Trailers Vitara.
                        Design icônico, conforto premium e a robustez que sua jornada exige.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block"
                    >
                        <Link
                            href="#configurator"
                            className="inline-flex items-center gap-4 bg-secondary text-dark-accent px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-secondary/20 hover:bg-white hover:text-primary transition-all duration-300 group"
                        >
                            Monte o Seu Vitara
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Modern Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 right-12 hidden md:flex items-center gap-4 text-white/60"
            >
                <span className="text-sm font-medium tracking-widest uppercase rotate-90 origin-right translate-x-2">Scroll</span>
                <div className="w-[1px] h-24 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
            </motion.div>
        </section>
    );
}
