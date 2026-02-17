"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image/Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-dark-accent to-black opacity-90 z-10 mix-blend-multiply" />
                {/* Placeholder for actual image - using a robust gradient for now */}
                <div
                    className="w-full h-full bg-[url('https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"
                    aria-hidden="true"
                />
            </div>

            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                        Produção Nacional
                    </span>

                    <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-lg">
                        Liberdade Compacta.<br />
                        <span className="text-secondary">Aventura Gigante.</span>
                    </h1>

                    <p className="font-sans text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Redescubra o prazer de viajar com os Mini Trailers Vitara.
                        Design icônico, conforto premium e a robustez que sua jornada exige.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="#configurator"
                            className="inline-flex items-center gap-3 bg-secondary text-dark-accent px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-secondary/50 transition-all duration-300 group"
                        >
                            Monte o Seu Vitara
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-secondary rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
