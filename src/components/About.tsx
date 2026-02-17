"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] z-10 w-4/5">
                            <img
                                src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=2574&auto=format&fit=crop"
                                alt="Equipe Vitara trabalhando"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                        </div>

                        {/* Secondary Image - Floating */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="absolute -bottom-10 right-0 w-2/3 aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-20"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1529385101543-936c5d946158?q=80&w=2000&auto=format&fit=crop"
                                alt="Detalhe de produção"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Decorative Graphic */}
                        <div className="absolute -top-10 -left-10 w-full h-full bg-secondary/10 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Quem Somos</span>
                            <h2 className="font-display text-5xl md:text-6xl font-bold text-dark mb-8 leading-tight">
                                Paixão por <br />
                                <span className="text-primary">desbravar.</span>
                            </h2>

                            <div className="space-y-6 text-lg text-gray-500 font-sans leading-relaxed mb-10">
                                <p>
                                    A <strong className="text-dark">Vitara Trailers</strong> não é apenas uma fábrica, é um manifesto de liberdade. Nascemos da necessidade de ir além, de criar veículos que não apenas chegam ao destino, mas tornam a jornada inesquecível.
                                </p>
                                <p>
                                    Cada unidade é uma obra de engenharia e marcenaria, combinando a robustez necessária para o off-road com o requinte de um design contemporâneo.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8 mb-10">
                                <div>
                                    <h4 className="font-display text-4xl font-bold text-dark mb-1">100%</h4>
                                    <p className="text-sm text-gray-400 uppercase tracking-wider font-bold">Produção Nacional</p>
                                </div>
                                <div>
                                    <h4 className="font-display text-4xl font-bold text-dark mb-1">+80</h4>
                                    <p className="text-sm text-gray-400 uppercase tracking-wider font-bold">Produtos Entregues</p>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Fabricação Artesanal Premium",
                                    "Design Aerodinâmico",
                                    "Suporte em Todo o Brasil"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary transition-colors">
                                            <CheckCircle2 size={14} className="text-secondary group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="font-medium text-dark-accent">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Location Section */}
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Localização</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-dark">
                            Onde nos <span className="text-primary">encontrar</span>
                        </h2>
                    </div>

                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 w-full group flex flex-col md:block md:h-[500px]">
                        {/* Map Container */}
                        <div className="relative w-full h-[400px] md:h-full md:absolute md:inset-0">
                            {/* Map Overlay Gradient - Desktop Only */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent z-10 pointer-events-none hidden md:block" />

                            <iframe
                                src="https://maps.google.com/maps?q=Rua%20Osni%20Pereira%2C%20Medeiros%2C%20Barra%20Velha%20-%20SC%2C%2089390-000&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                        </div>

                        {/* Address Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="relative z-20 bg-white p-8 md:absolute md:bottom-8 md:left-12 md:bg-white/90 md:backdrop-blur-xl md:rounded-3xl md:shadow-xl md:border md:border-white/50 md:max-w-md w-full"
                        >
                            <h3 className="font-display text-2xl font-bold text-dark mb-4">Venha nos visitar</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Agende uma visita para conhecer nossa linha de produção e ver de perto a qualidade do seu futuro Vitara.
                            </p>
                            <div className="flex items-start gap-4 mb-2">
                                <div className="p-2 bg-primary/10 rounded-full text-primary mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                                <div>
                                    <strong className="block text-dark text-lg mb-1">Vitara Trailers</strong>
                                    <span className="text-gray-500">Rua Osni Pereira - Medeiros<br />Barra Velha - SC, 89390-000</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    );
}
