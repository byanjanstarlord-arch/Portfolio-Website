"use client";

// components/Projects.tsx
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            title: "AI Resume Roadmap Generator",
            tech: "Django, Python, JavaScript",
            desc: "A web platform that analyzes skill gaps and generates personalized step-by-step career roadmaps.",
            color: "from-blue-500/20 to-indigo-500/20",
            borderHover: "hover:border-blue-500/50",
            image: "/onboard-ai.png",
            video: "/videos/ai-roadmap.mp4",
            className: "md:col-span-2 md:row-span-2"
        },
        {
            title: "HRMS Leave Management System",
            tech: "Django, Python, SQLite",
            desc: "A full-stack HR web app with role-based auth, enabling secure leave requests and approvals.",
            color: "from-emerald-500/20 to-teal-500/20",
            borderHover: "hover:border-emerald-500/50",
            image: "/hrms.png",
            video: "/videos/hrms.mp4",
            className: "md:col-span-1 md:row-span-1"
        },
        {
            title: "Finance AI Stock Insight Platform",
            tech: "Python, REST APIs",
            desc: "A robust back-end fetching real-time financial data for clear market insights and visualization.",
            color: "from-orange-500/20 to-red-500/20",
            borderHover: "hover:border-orange-500/50",
            video: "/videos/finance-ai.mp4",
            className: "md:col-span-1 md:row-span-1"
        },
        {
            title: "Hackathon Sustainability App",
            tech: "System Design, Full-Stack",
            desc: "A scalable software solution developed collaboratively to address structural environmental issues.",
            color: "from-purple-500/20 to-pink-500/20",
            borderHover: "hover:border-purple-500/50",
            video: "/videos/sustainability.mp4",
            className: "md:col-span-3 md:row-span-1"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    return (
        <section className="relative z-20 bg-[var(--color-surface-low)] py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="w-full flex items-end justify-between mb-16">
                    <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-none uppercase">
                        Selected <br /> <span className="text-white/30">Work</span>
                    </h2>
                    <p className="hidden md:block max-w-sm text-right text-white/50 font-medium">
                        A collection of digital experiences that prioritize narrative, performance, and aesthetic excellence.
                    </p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 auto-rows-[350px] gap-6 w-full"
                >
                    {projects.map((proj, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className={`group relative overflow-hidden rounded-[1.5rem] bg-[var(--color-surface-container)] p-8 md:p-10 flex flex-col justify-between transition-all duration-700 cursor-pointer hover:shadow-[0_20px_40px_var(--color-cyan-glow)] ${proj.className || ""}`}
                        >
                            {/* Background Handling: Priority Video -> Image -> Gradient */}
                            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105 overflow-hidden">
                                <div className="absolute inset-0 bg-[#0b1326]/80 z-10 group-hover:bg-[#0b1326]/40 transition-colors duration-700 backdrop-blur-sm group-hover:backdrop-blur-none" />
                                
                                {proj.image && (
                                    <Image src={proj.image} alt={proj.title} fill className="object-cover opacity-60 group-hover:opacity-0 transition-opacity duration-700" />
                                )}

                                {proj.video && (
                                    <video 
                                        src={proj.video} 
                                        autoPlay loop muted playsInline
                                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                    />
                                )}
                            </div>

                            <div
                                className={`absolute inset-0 z-0 bg-gradient-to-br ${proj.color} opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none`}
                            />

                            <div className="relative z-10 flex justify-between items-start w-full gap-4">
                                <p className="text-sm uppercase tracking-widest text-[#89ceff] font-bold bg-[#0b1326]/60 px-4 py-2 rounded-full backdrop-blur-md border border-[#89ceff]/20">
                                    {proj.tech}
                                </p>
                                <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center bg-[#0b1326]/40 backdrop-blur-xl group-hover:bg-[#89ceff] text-white group-hover:text-[#0b1326] transition-colors duration-500 shadow-sm border border-white/10 group-hover:border-transparent">
                                    <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
                                </div>
                            </div>

                            <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2 mt-8">
                                <h3 className={`font-bold text-[#dae2fd] tracking-tight mb-4 drop-shadow-md ${idx === 0 ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl'}`}>{proj.title}</h3>
                                <p className="text-[#dae2fd]/70 text-lg max-w-lg font-medium drop-shadow-sm">{proj.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
