"use client";

import { Suspense, lazy, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Lazy load the heavy Spline library (and the runtime inside it)
const Spline = lazy(() => import('@splinetool/react-spline'));

export default function SplineRobot() {
    const [isScrolling, setIsScrolling] = useState(false);

    // Optimization: WebGL raycasting during page scroll causes massive main-thread lag.
    // By detecting when the user scrolls and briefly turning off pointer-events, 
    // the heavy 3D scene stops calculating intensive mouse intersections.
    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout;
        
        const handleScroll = () => {
            if (!isScrolling) setIsScrolling(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 150); // Restore interactivity 150ms after scroll stops
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolling]);

    return (
        <div 
            className="w-full relative flex items-center justify-center h-[350px] md:h-[500px] spline-container transform-gpu"
            style={{ 
                pointerEvents: isScrolling ? 'none' : 'auto', 
                willChange: 'transform' // Force dedicated compositing layer to stop re-paints
            }}
        >
            <Suspense fallback={<LoaderSkeleton />}>
                <Spline
                    scene="https://prod.spline.design/indDE8xOTBrpPckM/scene.splinecode"
                    className="w-full h-full object-contain cursor-grab active:cursor-grabbing"
                />
            </Suspense>

            {/* Failsafe Overlay Mask to hide the 'Built with Spline' watermark */}
            <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-[160px] h-[50px] bg-[#000000] z-50 rounded-lg"></div>
        </div>
    );
}

// A futuristic, pulsing skeleton loader while the heavy 3D scene loads
function LoaderSkeleton() {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <motion.div
                initial={{ opacity: 0.2, scale: 0.8 }}
                animate={{ opacity: 0.8, scale: 1.1 }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="w-24 h-24 rounded-full border border-[#ffffff]/40 shadow-[0_0_20px_rgba(255,255,255,0.1)] bg-gradient-to-tr from-[#ffffff]/10 to-transparent flex items-center justify-center"
            >
                <div className="w-12 h-12 rounded-full border-t border-[#ffffff] animate-spin"></div>
            </motion.div>
            <motion.p
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="text-[#ffffff]/60 text-sm font-mono tracking-widest uppercase"
            >
                INITIALIZING 3D ROBOT_
            </motion.p>
        </div>
    );
}
