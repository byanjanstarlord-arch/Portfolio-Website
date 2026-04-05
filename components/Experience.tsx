"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function Experience() {
    const experiences = [
        {
            title: "Technical Team Member",
            org: "AIC SOA (Atal Incubation Centre)",
            type: "Experience",
            desc: "Contributing to technical initiatives supporting startups and innovation projects. Collaborating with team members to develop and improve digital solutions, including the official AIC SOA website.",
            date: "Present"
        },
        {
            title: "B.Tech in Computer Science",
            org: "Institute of Technical Education and Research",
            type: "Education",
            desc: "Undergraduate student exploring Software Engineering, Data Structures, Algorithms, and full-stack web development.",
            date: "Expected Graduation: 2028",
        }
    ];

    const videoRef = useRef<HTMLVideoElement>(null);
    const videoUrl = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

    useEffect(() => {
        if (videoRef.current) {
            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(videoUrl);
                hls.attachMedia(videoRef.current);
                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                    videoRef.current?.play().catch(() => { });
                });

                return () => {
                    hls.destroy();
                };
            } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
                videoRef.current.src = videoUrl;
                videoRef.current.addEventListener("loadedmetadata", () => {
                    videoRef.current?.play().catch(() => { });
                });
            }
        }
    }, [videoUrl]);

    return (
        <section className="relative z-20 bg-[var(--color-surface-low)] py-32 w-full">
            {/* Background Video with Fade Overlays */}
            <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none z-0">
                <div className="sticky top-0 h-[100svh] w-full overflow-hidden opacity-80">
                    {/* Top and Bottom Fade Masks to blend into section background */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover mix-blend-screen grayscale"
                        muted
                        loop
                        playsInline
                        autoPlay
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-16 text-right">
                    <h2 style={{ fontFamily: "var(--font-quite-good)" }} className="text-5xl md:text-8xl font-black text-white tracking-tight uppercase">
                        Journey <span className="text-white/30">So Far</span>
                    </h2>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="group relative overflow-hidden rounded-[1.5rem] bg-[var(--color-surface-container)] p-8 md:p-12 transition-all duration-700 hover:bg-[#1a1a1a] hover:shadow-[0_20px_40px_var(--color-cyan-glow)]"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                <div className="space-y-4 max-w-2xl">
                                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                                        <h3 className="text-3xl font-bold text-[#ffffff] tracking-tight">{exp.title}</h3>
                                        <span className="w-fit px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#ffffff] bg-[#ffffff]/10 rounded-full border border-[#ffffff]/20">
                                            {exp.type}
                                        </span>
                                    </div>
                                    <p className="text-xl font-medium text-[#ffffff]/70">{exp.org}</p>
                                    <p className="text-[#ffffff]/50 leading-relaxed max-w-xl text-lg">
                                        {exp.desc}
                                    </p>
                                </div>
                                <div className="text-left md:text-right mt-4 md:mt-0">
                                    <p className="text-lg font-mono text-[#ffffff]">{exp.date}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
