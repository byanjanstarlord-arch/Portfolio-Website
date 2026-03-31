// components/ScrollyCanvas.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 77;

const preloadImages = () => {
    const images: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        const frameIndex = i.toString().padStart(2, "0");
        img.src = `/sequence/frame_${frameIndex}_delay-0.066s.jpg`;
        images.push(img);
    }
    return images;
};

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        setImages(preloadImages());
    }, []);

    const drawFrame = (index: number) => {
        if (!canvasRef.current || images.length === 0) return;

        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        if (img && img.complete) {
            const canvas = canvasRef.current;
            const { width, height } = canvas;
            const imgRatio = img.width / img.height;
            const canvasRatio = width / height;

            let drawWidth = width;
            let drawHeight = height;
            let offsetX = 0;
            let offsetY = 0;

            if (imgRatio > canvasRatio) {
                drawWidth = height * imgRatio;
                offsetX = (width - drawWidth) / 2;
            } else {
                drawHeight = width / imgRatio;
                offsetY = (height - drawHeight) / 2;
            }

            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const frame = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(latest * (FRAME_COUNT - 1))));
        drawFrame(frame);
    });

    // Handle Resize and initial setup
    useEffect(() => {
        const handleResize = () => {
            if (!canvasRef.current || images.length === 0) return;

            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;

            // Re-draw current frame
            const frame = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(scrollYProgress.get() * (FRAME_COUNT - 1))));
            // Try to draw immediately if loaded, otherwise add listener
            const img = images[frame];
            if (img && !img.complete) {
                img.onload = () => drawFrame(frame);
            } else {
                drawFrame(frame);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [images, scrollYProgress]);

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full bg-[var(--color-background)]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full block"
                />
                <div className="absolute inset-0 bg-[#0b1326]/40 pointer-events-none" />
                <Overlay scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}
