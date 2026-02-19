"use client";

import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    baseOpacity?: number;
    baseY?: number;
    delay?: number;
    duration?: number;
}

export default function ScrollReveal({
    children,
    width = "fit-content",
    className = "",
    baseOpacity = 0,
    baseY = 75,
    delay = 0.25,
    duration = 0.5,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: baseOpacity, y: baseY },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: duration, delay: delay }}
            >
                {children}
            </motion.div>
        </div>
    );
}
