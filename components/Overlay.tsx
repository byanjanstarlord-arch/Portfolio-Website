// components/Overlay.tsx
"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    // Section 1: 0% to 20% scroll
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

    // Section 2: 30% to 50% scroll
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

    // Section 3: 60% to 80% scroll
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

    // Variable Typography: Shift font-weight as user scrolls
    const fontWeight1 = useTransform(scrollYProgress, [0, 0.15], [800, 400]);
    const fontWeight2 = useTransform(scrollYProgress, [0.2, 0.4], [300, 700]);
    const fontWeight3 = useTransform(scrollYProgress, [0.5, 0.7], [300, 800]);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center px-6"
            >
                <motion.h1 
                    style={{ fontWeight: fontWeight1 }}
                    className="text-5xl md:text-8xl tracking-tighter text-[#dae2fd]/70 drop-shadow-2xl text-center uppercase"
                >
                    Byanjan Behera
                    <motion.span 
                        style={{ fontWeight: fontWeight1 }}
                        className="block text-2xl md:text-4xl text-[#89ceff]/90 tracking-normal mt-4 uppercase drop-shadow-md"
                    >
                        Full Stack Developer
                    </motion.span>
                </motion.h1>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-start pl-[10%] pr-[5%]"
            >
                <motion.h2 
                    style={{ fontWeight: fontWeight2 }}
                    className="text-4xl md:text-7xl tracking-tight text-[#dae2fd]/80 drop-shadow-2xl max-w-3xl leading-tight"
                >
                    I build <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#89ceff] to-[#4edea3]">robust full stack applications.</span>
                </motion.h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-end pr-[10%] pl-[5%] text-right"
            >
                <motion.h2 
                    style={{ fontWeight: fontWeight3 }}
                    className="text-4xl md:text-7xl tracking-tight text-[#dae2fd]/80 drop-shadow-2xl leading-tight"
                >
                    Bridging logic, <br />
                    <span className="text-[#89ceff]/90">
                        data, and <br className="md:hidden" />
                        <span className="hidden md:inline"><br /></span>
                        performance.
                    </span>
                </motion.h2>
            </motion.div>
        </div>
    );
}
