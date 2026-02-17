"use client";

import { motion } from "framer-motion";

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2670&auto=format&fit=crop",
        alt: "Vitara Trailer em acampamento na montanha"
    },
    {
        src: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2670&auto=format&fit=crop",
        alt: "Interior do Vitara Trailer"
    },
    {
        src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2670&auto=format&fit=crop",
        alt: "Vitara Trailer na praia"
    },
    {
        src: "https://images.unsplash.com/photo-1496947855313-babef92d098b?q=80&w=2671&auto=format&fit=crop",
        alt: "Detalhes do acabamento"
    },
    {
        src: "https://images.unsplash.com/photo-1533873984035-25970ab07461?q=80&w=2674&auto=format&fit=crop",
        alt: "Cozinha externa"
    },
    {
        src: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?q=80&w=2680&auto=format&fit=crop",
        alt: "Vista noturna"
    }
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl md:text-5xl font-bold text-primary mb-4"
                    >
                        Conheça nossos Trailers
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Explore cada detalhe do design robusto e elegante que faz do Vitara a escolha perfeita para sua próxima aventura.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-lg"
                        >
                            {/* Standard img tag for now to simplify external image handling */}
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
