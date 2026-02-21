
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-20 pb-10 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <h3 className="font-display text-2xl font-bold mb-6">VITARA TRAILERS</h3>
                        <p className="text-surface/80 text-sm leading-relaxed mb-6">
                            Liberdade para ir mais longe. Trailers compactos, robustos e projetados para a sua aventura.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-dark-accent transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-dark-accent transition-all duration-300">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display text-lg font-bold mb-6">Explorar</h4>
                        <ul className="space-y-4 text-sm text-surface/80">
                            <li><Link href="#" className="hover:text-secondary transition-colors">Nossa História</Link></li>
                            <li><Link href="#models" className="hover:text-secondary transition-colors">Modelos</Link></li>
                            <li><Link href="#features" className="hover:text-secondary transition-colors">Diferenciais</Link></li>
                            <li><Link href="#gallery" className="hover:text-secondary transition-colors">Galeria</Link></li>
                        </ul>
                    </div>

                    {/* Models */}
                    <div>
                        <h4 className="font-display text-lg font-bold mb-6">Modelos</h4>
                        <ul className="space-y-4 text-sm text-surface/80">
                            <li><Link href="#" className="hover:text-secondary transition-colors">Vitara Classic</Link></li>
                            <li><Link href="#" className="hover:text-secondary transition-colors">Vitara Off-Road</Link></li>
                            <li><Link href="#" className="hover:text-secondary transition-colors">Edição Especial</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display text-lg font-bold mb-6">Contato</h4>
                        <ul className="space-y-4 text-sm text-surface/80">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                                <span>Rua da Aventura, 123<br />São Paulo - SP</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-secondary shrink-0" />
                                <span>(11) 99999-9999</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-secondary shrink-0" />
                                <span>contato@vitaratrailers.com.br</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-surface/70">© 2026 Vitara Trailers. Todos os direitos reservados.</p>
                    <div className="flex gap-6 text-xs text-surface/70">
                        <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
                        <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
                    </div>
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
        </footer>
    );
}
