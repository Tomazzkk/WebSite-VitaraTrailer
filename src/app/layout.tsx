import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google"; // Import only requested fonts
import "./globals.css";

// Configure Montserrat for titles (Weights: 400, 700, 800)
const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: ["400", "700", "800"],
});

// Configure Inter for body text (Weights: 300, 400, 500, 600)
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["300", "400", "500", "600"],
});

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
            <body className={`${inter.variable} ${montserrat.variable} font-sans bg-surface text-dark`}>
                {children}
            </body>
        </html>
    );
}
