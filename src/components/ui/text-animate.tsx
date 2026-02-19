"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ElementType, useEffect, useRef, useState } from "react";

type AnimationVariant =
    | "blurInUp"
    | "blurIn"
    | "fadeIn"
    | "fadeInUp"
    | "slideUp"
    | "slideRight"
    | "slideLeft"
    | "slideDown"
    | "scaleUp"
    | "appear";

type SegmentType = "text" | "word" | "character" | "line";

interface TextAnimateProps {
    children: string;
    className?: string;
    segmentClassName?: string;
    delay?: number;
    duration?: number;
    variants?: Variants;
    as?: ElementType;
    by?: SegmentType;
    startOnView?: boolean;
    once?: boolean;
    animation?: AnimationVariant;
}

const defaultVariants: Record<AnimationVariant, Variants> = {
    blurInUp: {
        hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
        show: { filter: "blur(0px)", opacity: 1, y: 0 },
    },
    blurIn: {
        hidden: { filter: "blur(10px)", opacity: 0 },
        show: { filter: "blur(0px)", opacity: 1 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    },
    fadeInUp: {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    },
    slideUp: {
        hidden: { y: "100%", opacity: 0 },
        show: { y: 0, opacity: 1 },
    },
    slideRight: {
        hidden: { x: "-100%", opacity: 0 },
        show: { x: 0, opacity: 1 },
    },
    slideLeft: {
        hidden: { x: "100%", opacity: 0 },
        show: { x: 0, opacity: 1 },
    },
    slideDown: {
        hidden: { y: "-100%", opacity: 0 },
        show: { y: 0, opacity: 1 },
    },
    scaleUp: {
        hidden: { scale: 0.5, opacity: 0 },
        show: { scale: 1, opacity: 1 },
    },
    appear: {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    },
};

function splitText(text: string, by: SegmentType): string[] {
    switch (by) {
        case "word":
            return text.split(/(\s+)/);
        case "character":
            return text.split("");
        case "line":
            return text.split("\n");
        case "text":
        default:
            return [text];
    }
}

export function TextAnimate({
    children,
    className,
    segmentClassName,
    delay = 0,
    duration = 0.3,
    variants,
    as: Component = "p",
    by = "word",
    startOnView = true,
    once = false,
    animation = "fadeIn",
}: TextAnimateProps) {
    const segments = splitText(children, by);
    const animVariants = variants ?? defaultVariants[animation];
    const [inView, setInView] = useState(!startOnView);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!startOnView) return;
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once) observer.unobserve(el);
                } else if (!once) {
                    setInView(false);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [startOnView, once]);

    const MotionComponent = motion(Component as any);

    return (
        <AnimatePresence>
            <MotionComponent
                ref={ref}
                className={cn("flex flex-wrap", className)}
            >
                {segments.map((segment, i) => {
                    const isSpace = /^\s+$/.test(segment);
                    return (
                        <motion.span
                            key={`${segment}-${i}`}
                            variants={animVariants}
                            initial="hidden"
                            animate={inView ? "show" : "hidden"}
                            transition={{
                                duration,
                                delay: delay + i * 0.05,
                                ease: "easeOut",
                            }}
                            className={cn(
                                "inline-block",
                                isSpace ? "w-[0.3em]" : "",
                                segmentClassName
                            )}
                        >
                            {isSpace ? "\u00A0" : segment}
                        </motion.span>
                    );
                })}
            </MotionComponent>
        </AnimatePresence>
    );
}
