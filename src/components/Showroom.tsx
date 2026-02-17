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
        <section id="models" className="py-24 bg-surface container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
                        Nossa Linha
                    </h2>
                    <p className="font-sans text-gray-600 max-w-xl">
                        Projetados para quem não abre mão de conforto, mesmo nos lugares mais remotos.
                        Escolha o modelo que combina com seu estilo de viagem.
                    </p>
                </div>

                <Link
                    href="#configurator"
                    className="text-primary font-bold hover:text-secondary transition-colors flex items-center gap-2 group"
                >
                    Ver tabela completa
                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 relative border border-gray-100"
                    >
                        {/* Image Container */}
                        <div className="relative h-64 md:h-80 overflow-hidden">
                            <div className="absolute top-4 left-4 bg-secondary text-dark-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-10">
                                {product.tag}
                            </div>

                            {/* Use standard img for now to avoid Next.js Image config complexity with external domains during setup */}
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${product.image})` }}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <Link href="#configurator" className="bg-white text-primary px-6 py-2 rounded-full font-bold text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                    Configurar este modelo
                                </Link>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-display text-3xl font-bold text-primary">
                                    {product.name}
                                </h3>
                                <div className="text-right">
                                    <span className="text-xs text-gray-500 font-sans block">A partir de</span>
                                    <span className="font-display text-xl font-bold text-secondary">{product.price}</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 my-6" />

                            <div className="grid grid-cols-3 gap-4">
                                {product.specs.map((spec, i) => (
                                    <div key={i} className="text-center group-hover:text-primary transition-colors">
                                        <div className="flex justify-center mb-2 text-gray-400 group-hover:text-secondary transition-colors">
                                            {spec.icon}
                                        </div>
                                        <span className="block font-bold text-dark text-sm">{spec.label}</span>
                                        <span className="block text-xs text-gray-400">{spec.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
