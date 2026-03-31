"use client";

import { motion } from "framer-motion";

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

    return (
        <section className="relative z-20 bg-[var(--color-surface-low)] py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-right">
                    <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight uppercase">
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
                            className="group relative overflow-hidden rounded-[1.5rem] bg-[var(--color-surface-container)] p-8 md:p-12 transition-all duration-700 hover:bg-[#222a3d] hover:shadow-[0_20px_40px_var(--color-cyan-glow)]"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                <div className="space-y-4 max-w-2xl">
                                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                                        <h3 className="text-3xl font-bold text-[#dae2fd] tracking-tight">{exp.title}</h3>
                                        <span className="w-fit px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#89ceff] bg-[#89ceff]/10 rounded-full border border-[#89ceff]/20">
                                            {exp.type}
                                        </span>
                                    </div>
                                    <p className="text-xl font-medium text-[#dae2fd]/70">{exp.org}</p>
                                    <p className="text-[#dae2fd]/50 leading-relaxed max-w-xl text-lg">
                                        {exp.desc}
                                    </p>
                                </div>
                                <div className="text-left md:text-right mt-4 md:mt-0">
                                    <p className="text-lg font-mono text-[#89ceff]">{exp.date}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
