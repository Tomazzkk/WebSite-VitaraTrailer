"use client"

import { GodRays } from "@paper-design/shaders-react"

export default function BackgroundShader() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-100">
            <GodRays
                colorBack="#ffffff00"
                colors={["#2D5A2780", "#1B361780", "#E9A42660", "#2D5A2760"]}
                colorBloom="#2D5A27"
                offsetX={0.5}
                offsetY={-0.5}
                intensity={0.6}
                spotty={0.5}
                midSize={12}
                midIntensity={0}
                density={0.4}
                bloom={0.3}
                speed={0.4}
                scale={1.5}
                frame={3332042}
                style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            />
        </div>
    )
}
