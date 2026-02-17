"use client";

import { ShieldCheck, Zap, Map } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
    const features = [
        {
            icon: <ShieldCheck size={40} className="text-secondary" />,
            title: "Eixos AL-KO",
            description: "Segurança e estabilidade incomparáveis com a melhor tecnologia de suspensão alemã do mercado.",
        },
        {
            icon: <Zap size={40} className="text-secondary" />,
            title: "Pronto para a Estrada",
            description: "Homologado e emplacado. Engate no seu carro e saia para a aventura sem burocracia.",
        },
        {
            icon: <Map size={40} className="text-secondary" />,
            title: "Isolamento Térmico",
            description: "Conforto em qualquer clima. Paredes com isolamento premium para noites tranquilas no frio ou calor.",
        },
    ];

    return (
        <section id="features" className="py-32 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Por que Vitara?</span>
                        <h2 className="font-display text-5xl md:text-6xl font-bold text-primary leading-tight">
                            Engenharia alemã,<br />
                            <span className="text-dark/80">Alma brasileira.</span>
                        </h2>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                        Cada detalhe do Vitara é pensado para oferecer a máxima performance off-road sem abrir mão do conforto que você merece após um longo dia de aventura.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-10 rounded-[2rem] shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-gray-100 group hover:-translate-y-2"
                        >
                            <div className="mb-8 w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="font-display text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="font-sans text-gray-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-100/50 to-transparent -z-0" />
        </section>
    );
}
