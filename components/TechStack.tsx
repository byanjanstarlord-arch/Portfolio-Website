"use client";

import { motion } from "framer-motion";

export default function TechStack() {
    const skills = [
        "Python", "Django", "JavaScript", "TypeScript", 
        "React", "Next.js", "Tailwind CSS", "Framer Motion", 
        "REST APIs", "SQL", "Git", "System Design",
        "HTML5", "CSS3", "C++"
    ];

    return (
        <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-[var(--color-surface-low)] group">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#89ceff]/5 to-[#4edea3]/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Badge Cloud */}
            <div className="flex flex-wrap justify-center gap-4 p-8 relative z-10 max-w-lg">
                {skills.map((skill, idx) => {
                    // Create pseudo-random drifting using index
                    const driftY = (idx % 2 === 0 ? 1 : -1) * (10 + (idx % 5));
                    
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05, duration: 0.5 }}
                            whileHover={{ 
                                scale: 1.1, 
                                rotate: idx % 2 === 0 ? 2 : -2,
                                backgroundColor: "rgba(137, 206, 255, 0.15)",
                                borderColor: "rgba(137, 206, 255, 0.5)",
                                color: "#ffffff"
                            }}
                            animate={{
                                y: [0, driftY, 0],
                            }}
                            // @ts-ignore
                            transition={{
                                y: {
                                    duration: 4 + (idx % 3),
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            className="px-6 py-3 rounded-full bg-[var(--color-surface-container)] border border-white/10 text-[#dae2fd]/80 font-medium tracking-wide shadow-lg backdrop-blur-md cursor-pointer transition-colors duration-300 relative overflow-hidden"
                            style={{
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)"
                            }}
                        >
                            <span className="relative z-10">{skill}</span>
                            
                            {/* Glass reflection */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
