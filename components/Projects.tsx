"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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

    return (
        <section className="relative z-20 bg-[var(--color-surface-low)] py-32 w-full">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-24">
                
                {/* Standard Page Flow Header */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-none uppercase">
                        Selected <br /> <span className="text-white/30">Work</span>
                    </h2>
                </div>

                {/* The "Nikola Vibe" Grid Setup */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative w-full">
                    
                    {/* --- MOBILE ONLY Profile Image Setup --- */}
                    {/* Fixed aspect ratio and lifting rules applied here as well */}
                    <div className="flex lg:hidden w-full max-w-sm mx-auto aspect-[4/5] relative rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
                        <Image 
                            src="/image1.jpeg" 
                            fill 
                            alt="Profile Display" 
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>

                    {/* LEFT COLUMN: The Deck of Cards */}
                    {/* Padded at bottom to ensure sufficient scroll room before unpinning */}
                    <div className="flex flex-col gap-12 lg:gap-[15vh] w-full pb-[20vh] items-start">
                        {projects.map((proj, idx) => (
                            <div 
                                key={idx}
                                // The dynamic structural offset creates the "Stacked Deck" visual naturally during scroll!
                                style={{ top: `calc(8rem + ${idx * 2}rem)` }}
                                className="sticky w-full max-w-[500px] bg-[#0b1326] rounded-[2.5rem] p-8 lg:p-12 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 border border-white/5 hover:border-white/20 group z-10 mx-auto lg:mx-0"
                            >
                                <div className="flex flex-col gap-6">
                                    {/* Typography & Hierarchy: Soft handwritten text category matching the 'Top performing' screenshot vibe. Small font size as requested. */}
                                    <p className="font-[family-name:var(--font-handwriting)] text-lg lg:text-xl text-white/50 tracking-wide flex items-center gap-3">
                                        {proj.category}
                                    </p>

                                    {/* Project Title: Bold & Prominent with Nikola's numeric sequence style */}
                                    <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#dae2fd] tracking-tight leading-[1.1] flex items-start gap-3 mb-2">
                                        <span className="text-white/20 font-black text-3xl md:text-4xl lg:text-[2.75rem]">0{idx + 1}.</span> 
                                        <span>{proj.title}</span>
                                    </h3>

                                    {/* Description: Softer color, scaled down for elegance */}
                                    <p className="text-[#dae2fd]/60 text-base lg:text-lg font-medium leading-relaxed max-w-[400px]">
                                        {proj.description}
                                    </p>

                                    {/* Tech Stack: Refined Pills to match the dark reference image strictly */}
                                    <div className="flex flex-wrap items-center gap-3 mt-4">
                                        {proj.techStack.map((tech, techIdx) => (
                                            <span 
                                                key={techIdx} 
                                                className="px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 text-[10px] md:text-xs font-bold tracking-widest uppercase border border-white/10 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {/* Visual Anchor / Link mapping */}
                                    <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                                        <a href={proj.link} className="flex items-center gap-3 text-white/60 font-bold hover:text-[#89ceff] transition-colors uppercase text-xs tracking-[0.2em]">
                                            View Project
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-[#89ceff] group-hover:text-[#0b1326] transition-all duration-300 group-hover:rotate-45">
                                                <ArrowUpRight className="w-3 h-3" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: The Profile Image Tracker */}
                    <div className="hidden lg:flex sticky top-32 justify-end w-full h-max">
                        <div className="w-full max-w-sm aspect-[4/5] relative rounded-[2rem] overflow-hidden border border-white/5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] grayscale hover:grayscale-0 transition-all duration-700 cursor-crosshair">
                            <Image 
                                src="/image1.jpeg" 
                                fill 
                                alt="Profile Display" 
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            {/* Inner gradient just for premium polish over the dark theme */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326]/80 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
