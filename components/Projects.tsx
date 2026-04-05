"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function Projects() {
    // Re-architected data structure to support robust arrays per the technical specs
    const projects = [
        {
            category: "Platform Architecture",
            title: "AI Resume Roadmap",
            techStack: ["Django", "Python", "JavaScript"],
            description: "A web platform that analyzes skill gaps and generates personalized step-by-step career roadmaps.",
            link: "#"
        },
        {
            category: "Enterprise System",
            title: "HRMS Leave System",
            techStack: ["Django", "Python", "SQLite"],
            description: "A full-stack HR web app with role-based auth, enabling secure leave requests and structured approvals.",
            link: "#"
        },
        {
            category: "Data & APIs",
            title: "Finance Stock Insight",
            techStack: ["Python", "REST APIs", "Pandas"],
            description: "A robust back-end fetching real-time financial data for clear market insights and robust visualization.",
            link: "#"
        },
        {
            category: "Scalable Infrastructure",
            title: "Sustainability App",
            techStack: ["System Design", "Node.js", "React"],
            description: "A scalable software solution developed collaboratively to address structural environmental issues.",
            link: "#"
        },
    ];

    const videoRef = useRef<HTMLVideoElement>(null);
    const videoUrl = "https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8";

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

            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-24 relative z-10">

                {/* Standard Page Flow Header */}
                <div className="flex flex-col gap-4">
                    <h2 style={{ fontFamily: "var(--font-quite-good)" }} className="text-6xl lg:text-8xl font-black text-white tracking-tight leading-none uppercase">
                        Selected <br /> <span className="text-white/30">Work</span>
                    </h2>
                </div>

                {/* The "Nikola Vibe" Grid Setup */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative w-full">

                    {/* --- MOBILE ONLY Profile Image Setup --- */}
                    {/* Fixed aspect ratio and lifting rules applied here as well */}
                    <motion.div
                        className="flex lg:hidden w-full max-w-sm mx-auto aspect-[4/5] relative rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl grayscale hover:grayscale-0 cursor-crosshair"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        whileHover={{ scale: 1.05, rotate: 2, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src="/image1.jpeg"
                            fill
                            alt="Profile Display"
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </motion.div>

                    {/* HYPER-REALISTIC SVG TORN PAPER MASK */}
                    <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true" style={{ position: "absolute", width: 0, height: 0 }}>
                        <filter id="realistic-tear" x="-20%" y="-20%" width="140%" height="140%">
                            {/* 1. Generate chaotic, high-contrast noise for deep, unpredictable tears */}
                            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" result="noise" />

                            {/* 2. Displace the straight edges of the card. scale=18 ensures deep, random inward/outward jaggedness */}
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" result="displaced" />

                            {/* 3. Simulate paper thickness & edge burn (Inner Edge Effect) */}
                            {/* We erode the shape slightly to find the exact perimeter, then darken it to mimic physical fibers catching light */}
                            <feMorphology in="displaced" operator="erode" radius="1.5" result="eroded" />
                            <feComposite operator="out" in="displaced" in2="eroded" result="edgeRing" />
                            <feFlood floodColor="#4a4237" floodOpacity="0.35" result="burnColor" />
                            <feComposite operator="in" in="burnColor" in2="edgeRing" result="burnRing" />

                            {/* 4. Subtle inner shadow to give the card a 3D lifted feel within the tearing */}
                            <feGaussianBlur in="edgeRing" stdDeviation="2" result="softRing" />
                            <feOffset dx="1" dy="2" in="softRing" result="shadowOffset" />
                            <feComposite operator="in" in="shadowOffset" in2="displaced" result="innerShadow" />

                            {/* 5. Bring it all together */}
                            <feMerge>
                                <feMergeNode in="displaced" />
                                <feMergeNode in="innerShadow" />
                                <feMergeNode in="burnRing" />
                            </feMerge>
                        </filter>
                    </svg>

                    {/* LEFT COLUMN: The Deck of Cards */}
                    {/* Padded at bottom to ensure sufficient scroll room before unpinning */}
                    <div className="flex flex-col gap-12 lg:gap-[15vh] w-full pb-[20vh] items-start">
                        {projects.map((proj, idx) => (
                            <div
                                key={idx}
                                // The dynamic structural offset creates the "Stacked Deck" visual naturally during scroll!
                                style={{ top: `calc(8rem + ${idx * 2}rem)` }}
                                className="sticky w-full max-w-[500px] group z-10 mx-auto lg:mx-0 transition-transform duration-500 hover:-translate-y-4"
                            >
                                {/* Hyper-Realistic Background Torn Paper Layer */}
                                {/* Deeper shadow opacity gives it robust lift against the pitch black void background */}
                                <div className="absolute inset-0 z-0 drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] group-hover:drop-shadow-[0_35px_50px_rgba(0,0,0,0.8)] transition-all duration-500">
                                    <div
                                        className="w-full h-full relative overflow-hidden"
                                        style={{
                                            // Organic parchment-like color variation instead of flat white
                                            background: "linear-gradient(145deg, #f1ece1 0%, #faf8f5 50%, #e9e2d5 100%)",
                                            // Applying the aggressive shredded tear mask
                                            filter: "url(#realistic-tear)",
                                        }}
                                    >
                                        {/* 1. Fine paper grain texture */}
                                        <div
                                            className="absolute inset-0 opacity-[0.20] mix-blend-multiply pointer-events-none"
                                            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
                                        />

                                        {/* 2. Paper Fibers Overlay: Stretches noise to create pressed fiber strands inside the paper */}
                                        <div
                                            className="absolute inset-0 opacity-[0.15] mix-blend-color-burn pointer-events-none"
                                            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='fiberFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.02 0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23fiberFilter)'/%3E%3C/svg%3E\")" }}
                                        />
                                    </div>
                                </div>

                                {/* Clean Content Layer (Sits physically above the torn background, preventing text from warping) */}
                                <div className="relative z-10 p-8 lg:p-12 flex flex-col gap-6">
                                    {/* Typography & Hierarchy */}
                                    <p className="font-[family-name:var(--font-handwriting)] text-lg lg:text-xl text-black/50 tracking-wide flex items-center gap-3">
                                        {proj.category}
                                    </p>

                                    {/* Project Title */}
                                    <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-tight leading-[1.1] flex items-start gap-3 mb-2">
                                        <span className="text-black/20 font-black text-3xl md:text-4xl lg:text-[2.75rem]">0{idx + 1}.</span>
                                        <span>{proj.title}</span>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-black/70 text-base lg:text-lg font-medium leading-relaxed max-w-[400px]">
                                        {proj.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap items-center gap-3 mt-4">
                                        {proj.techStack.map((tech, techIdx) => (
                                            <span
                                                key={techIdx}
                                                className="px-5 py-2 rounded-full bg-black/5 hover:bg-black/10 text-black/80 text-[10px] md:text-xs font-bold tracking-widest uppercase border border-black/10 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: The Profile Image Tracker */}
                    <div className="hidden lg:flex sticky top-32 justify-end w-full h-max">
                        <motion.div
                            className="w-full max-w-sm aspect-[4/5] relative rounded-[2rem] overflow-hidden border border-black/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] grayscale hover:grayscale-0 cursor-crosshair"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            whileHover={{ scale: 1.05, rotate: -2, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Image
                                src="/image1.jpeg"
                                fill
                                alt="Profile Display"
                                className="object-cover object-top transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            {/* Inner gradient just for premium polish over the dark theme */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent pointer-events-none" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
