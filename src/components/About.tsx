"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="font-display text-4xl md:text-5xl font-bold text-primary mb-6"
                        >
                            Quem Somos Nós
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-6 text-lg text-gray-600"
                        >
                            <p>
                                A <span className="font-bold text-primary">Vitara Trailers</span> nasceu da paixão por explorar o desconhecido.
                                Fundada por entusiastas do off-road e do campismo, nossa missão é entregar veículos que suportem
                                os terrenos mais difíceis sem sacrificar o conforto.
                            </p>
                            <p>
                                Cada trailer é construído artesanalmente com materiais de alta qualidade e tecnologia de ponta,
                                garantindo durabilidade e segurança para que você possa focar no que realmente importa: a jornada.
                            </p>

                            <ul className="space-y-3 mt-4">
                                {[
                                    "Fabricação 100% Nacional",
                                    "Design Aerodinâmico e Robusto",
                                    "Personalização para cada cliente",
                                    "Suporte técnico especializado"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-secondary flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-video lg:aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=2574&auto=format&fit=crop"
                                alt="Equipe Vitara trabalhando"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-full -z-10 opacity-50 blur-xl"></div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full -z-10 opacity-30 blur-xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
