"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bed, Weight, Ruler } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const products = [
    {
        id: "classic",
        name: "Vitara Classic",
        price: "R$ 35.900",
        image: "https://images.unsplash.com/photo-1596238696803-0c45839ca544?q=80&w=2670&auto=format&fit=crop", // Placeholder
        specs: [
            { icon: <Weight size={18} />, label: "480kg", text: "Leve para rebocar" },
            { icon: <Bed size={18} />, label: "2 Pessoas", text: "Conforto casal" },
            { icon: <Ruler size={18} />, label: "3.2m", text: "Comprimento total" },
        ],
        tag: "O Favorito",
    },
    {
        id: "offroad",
        name: "Vitara Off-Road",
        price: "R$ 45.900",
        image: "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?q=80&w=2670&auto=format&fit=crop", // Placeholder
        specs: [
            { icon: <Weight size={18} />, label: "580kg", text: "Chassi reforçado" },
            { icon: <Bed size={18} />, label: "2+1 Pessoas", text: "Opção barraca teto" },
            { icon: <Ruler size={18} />, label: "3.5m", text: "Maior altura solo" },
        ],
        tag: "Para Exploradores",
    },
];

export default function Showroom() {
    return (
        <section id="models" className="py-32 bg-surface container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-2xl">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Nossa Linha</span>
                    <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                        Escolha sua <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">companhia de viagem.</span>
                    </h2>
                    <p className="font-sans text-gray-600 text-lg leading-relaxed">
                        Projetados para quem não abre mão de conforto, mesmo nos lugares mais remotos.
                        Design aerodinâmico, leveza e durabilidade.
                    </p>
                </div>

                <Link
                    href="#configurator"
                    className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-200 text-primary font-bold hover:border-secondary hover:text-secondary transition-all duration-300 shadow-sm hover:shadow-md"
                >
                    Ver especificações completas
                    <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 hover:shadow-3xl hover:shadow-primary/10 transition-all duration-500"
                    >
                        {/* Image Container */}
                        <div className="relative h-[400px] overflow-hidden">
                            <div className="absolute top-6 left-6 z-20">
                                <span className="bg-white/90 backdrop-blur-md text-dark-accent px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                    {product.tag}
                                </span>
                            </div>

                            {/* Use standard img for now */}
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{ backgroundImage: `url(${product.image})` }}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                        </div>

                        {/* Floating Content Card */}
                        <div className="relative -mt-20 mx-6 mb-6 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="font-display text-3xl font-bold text-dark mb-1">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm font-medium">Modelo 2026</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wide block mb-1">A partir de</span>
                                    <span className="font-display text-2xl font-bold text-secondary">{product.price}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-100 mb-6">
                                {product.specs.map((spec, i) => (
                                    <div key={i} className="text-center">
                                        <div className="flex justify-center mb-2 text-primary/60 group-hover:text-secondary transition-colors">
                                            {spec.icon}
                                        </div>
                                        <span className="block font-bold text-dark text-sm mb-1">{spec.label}</span>
                                        <span className="block text-[10px] text-gray-400 uppercase tracking-wide">{spec.text}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="#configurator"
                                className="block w-full text-center bg-dark text-white py-4 rounded-xl font-bold hover:bg-primary transition-colors duration-300 shadow-lg shadow-dark/20 hover:shadow-primary/30"
                            >
                                Configurar este modelo
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
