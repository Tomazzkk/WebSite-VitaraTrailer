import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google"; // Import 2026-ready fonts
import "./globals.css";

// Configure Outfit for titles (Weights: 400, 700, 800) - Modern, geometric
const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    weight: ["400", "700", "800"],
});

// Configure Manrope for body text (Weights: 300, 400, 500, 600) - Clean, legible
const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    weight: ["300", "400", "500", "600"],
});

import EntranceAnimation from "@/components/EntranceAnimation";

export const metadata: Metadata = {
    title: "Vitara Trailers | Liberdade Compacta, Aventura Gigante",
    description: "Descubra a liberdade com os Mini Trailers Vitara. Design retrô-moderno, conforto e aventura para suas viagens.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${manrope.variable} ${outfit.variable} font-sans bg-surface text-dark`}>
                <EntranceAnimation />
                {children}
            </body>
        </html>
    );
}
