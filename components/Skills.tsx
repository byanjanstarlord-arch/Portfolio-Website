"use client";

import { motion } from "framer-motion";
import SplineRobot from "./SplineRobot";
import TechStack from "./TechStack";

export default function Skills() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    return (
        <section className="relative z-20 bg-transparent py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 style={{ fontFamily: "var(--font-quite-good)" }} className="text-5xl md:text-8xl font-bold text-[#ffffff] tracking-tight uppercase">
                        Technical <span className="text-[#ffffff]">Arsenal</span>
                    </h2>
                    <p className="max-w-xl text-[#ffffff]/50 font-medium mt-4">
                        Interact with the 3D robot below to explore my arsenal, or hover over the technology metrics.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center"
                >
                    <motion.div variants={itemVariants} className="w-full h-full flex items-center justify-center">
                        <SplineRobot />
                    </motion.div>

                    <motion.div variants={itemVariants} className="w-full">
                        <TechStack />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
