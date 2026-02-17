"use client";

import { motion } from "framer-motion";

const galleryImages = [
    {
        src: "/images/gallery/LateralDois.png",
        alt: "Design Lateral Aerodinâmico"
    },
    {
        src: "/images/gallery/Cozinha.jpeg",
        alt: "Cozinha Completa e Equipada"
    },
    {
        src: "/images/gallery/Acabamento.jpg",
        alt: "Acabamento Premium em Madeira"
    },
    {
        src: "/images/gallery/LateralPreto.png",
        alt: "Edição Black Off-Road"
    },
    {
        src: "/images/gallery/LateralMenor.png",
        alt: "Compacto e Robusto"
    }
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-32 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-xl">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Showroom</span>
                        <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                            Nossos <br />
                            <span className="text-dark">Mini-trailers.</span>
                        </h2>
                    </div>
                    <p className="text-gray-600 text-lg max-w-md text-right font-medium">
                        Conheça de perto a qualidade, o design e os detalhes que fazem do Vitara a sua melhor companhia de viagem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className={`relative rounded-[2rem] overflow-hidden group ${index === 0 || index === 3 ? 'md:col-span-2' : ''
                                } ${index === 3 ? 'md:row-span-2 md:h-full' : ''}`}
                        >
                            {/* Standard img tag for now */}
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 transition-opacity duration-300" />

                            <div className="absolute bottom-0 left-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <span className="text-white/80 text-sm font-bold uppercase tracking-wider mb-2 block">Vitara Moments</span>
                                <p className="text-white text-xl font-display font-bold">{image.alt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
