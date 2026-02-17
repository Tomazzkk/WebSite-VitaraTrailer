import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Showroom from "@/components/Showroom";
import Gallery from "@/components/Gallery";
import About from "@/components/About";

export default function Home() {
    return (
        <main className="min-h-screen bg-surface">
            <Header />

            <Hero />

            <Features />

            <Showroom />

            <Gallery />

            <About />

            {/* Simple Footer */}
            <footer className="bg-dark text-white py-12 border-t border-white/10">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-70 hover:opacity-100 transition-opacity">
                    <div className="mb-4 md:mb-0">
                        <span className="font-display font-bold text-lg">VITARA TRAILERS</span>
                        <p className="text-xs mt-1">© 2024 Vitara Trailers. Todos os direitos reservados.</p>
                    </div>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
                        <a href="#" className="hover:text-secondary transition-colors">Facebook</a>
                        <a href="#" className="hover:text-secondary transition-colors">Política de Privacidade</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
