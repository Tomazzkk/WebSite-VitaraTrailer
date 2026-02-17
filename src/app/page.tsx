import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Showroom from "@/components/Showroom";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-surface">
            <Header />

            <Hero />

            <Features />

            <Showroom />

            <Gallery />

            <About />

            <Footer />
        </main>
    );
}
