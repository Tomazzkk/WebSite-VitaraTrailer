"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
    to: number;
    from?: number;
    direction?: "up" | "down";
    delay?: number;
    duration?: number;
    className?: string;
    startWhen?: boolean;
    separator?: string;
    decimals?: number;
    decimalSeparator?: string;
    prefix?: string;
    suffix?: string;
    onStart?: () => void;
    onEnd?: () => void;
}

export default function CountUp({
    to,
    from = 0,
    direction = "up",
    delay = 0,
    duration = 1,
    className = "",
    startWhen = true,
    separator = "",
    decimals = 0,
    decimalSeparator = ".",
    prefix = "",
    suffix = "",
    onStart,
    onEnd,
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? to : from);

    const damping = 20 + 40 * (1 / duration);
    const stiffness = 100 * (1 / duration);

    const springValue = useSpring(motionValue, {
        damping,
        stiffness,
    });

    const isInView = useInView(ref, { once: true, margin: "0px" });

    useEffect(() => {
        if (ref.current) {
            // Set initial value immediately
            const initialValue = direction === "down" ? to : from;
            const fixedValue = initialValue.toFixed(decimals);
            const [intPart, decimalPart] = fixedValue.split(".");

            let formattedInt = intPart;
            if (separator) {
                formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
            }

            const formattedNumber = decimalPart
                ? `${formattedInt}${decimalSeparator}${decimalPart}`
                : formattedInt;

            ref.current.textContent = `${prefix}${formattedNumber}${suffix}`;
        }
    }, [from, to, direction, prefix, suffix, decimals, decimalSeparator, separator]);

    useEffect(() => {
        if (isInView && startWhen) {
            if (typeof onStart === "function") {
                onStart();
            }

            const timeoutId = setTimeout(() => {
                motionValue.set(direction === "down" ? from : to);
            }, delay * 1000);

            const durationTimeoutId = setTimeout(() => {
                if (typeof onEnd === "function") {
                    onEnd();
                }
            }, delay * 1000 + duration * 1000);

            return () => {
                clearTimeout(timeoutId);
                clearTimeout(durationTimeoutId);
            };
        }
    }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                const fixedValue = latest.toFixed(decimals);
                const [intPart, decimalPart] = fixedValue.split(".");

                let formattedInt = intPart;
                if (separator) {
                    formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
                }

                const formattedNumber = decimalPart
                    ? `${formattedInt}${decimalSeparator}${decimalPart}`
                    : formattedInt;

                ref.current.textContent = `${prefix}${formattedNumber}${suffix}`;
            }
        });

        return () => unsubscribe();
    }, [springValue, separator, decimals, decimalSeparator, prefix, suffix]);

    return <span className={className} ref={ref} />;
}
