"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function EntranceAnimation() {
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Counter animation
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Random increment for organic feel
                return prev + Math.floor(Math.random() * 10) + 1;
            });
        }, 150);

        // Cleanup
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2200); // Wait a bit after 100% to slide up

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: {
                            duration: 0.8,
                            ease: "easeInOut"
                        }
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-64 h-64 md:w-80 md:h-80"
                    >
                        <img
                            src="/images/LogosSemFundo.png"
                            alt="Vitara Trailers"
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
