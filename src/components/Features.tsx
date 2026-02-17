"use client";

import { ShieldCheck, Zap, Map } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
    const features = [
        {
            icon: <ShieldCheck size={48} className="text-secondary" />,
            title: "Eixos AL-KO",
            description: "Segurança e estabilidade incomparáveis com a melhor tecnologia de suspensão alemã do mercado.",
        },
        {
            icon: <Zap size={48} className="text-secondary" />,
            title: "Pronto para a Estrada",
            description: "Homologado e emplacado. Engate no seu carro e saia para a aventura sem burocracia.",
        },
        {
            icon: <Map size={48} className="text-secondary" />,
            title: "Isolamento Térmico",
            description: "Conforto em qualquer clima. Paredes com isolamento premium para noites tranquilas no frio ou calor.",
        },
    ];

    return (
        <section id="features" className="py-24 bg-surface relative overflow-hidden">
            {/* Subtle background forest pattern or texture could go here */}

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl font-bold text-primary mb-4">
                        Por que escolher a Vitara?
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center group"
                        >
                            <div className="mb-6 p-4 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="font-display text-2xl font-bold text-dark mb-4">
                                {feature.title}
                            </h3>
                            <p className="font-sans text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
