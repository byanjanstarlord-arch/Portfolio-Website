"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, ArrowRight } from "lucide-react";
import RhythmicRipplesBackground from "@/components/ui/rhythmic-ripples-background";

export default function Contact() {
    const contacts = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            value: "palparul39@gmail.com",
            href: "mailto:palparul39@gmail.com"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            value: "+91 7008285305",
            href: "tel:+917008285305"
        },
        {
            icon: <Github className="w-6 h-6" />,
            title: "GitHub",
            value: "byanjanstarlord-arch",
            href: "https://github.com/byanjanstarlord-arch"
        }
    ];

    return (
        <RhythmicRipplesBackground backgroundColor="#000000" rippleColor="rgba(255, 255, 255, 0.2)" rippleCount={25}>
            <section className="relative z-20 w-full px-6 md:px-12 flex flex-col items-center justify-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center mt-12 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="mb-16"
                    >
                        <h2 style={{ fontFamily: "var(--font-quite-good)" }} className="text-6xl md:text-9xl font-bold text-[#ffffff] tracking-tight uppercase mb-6">
                            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#ffffff]">Connect</span>
                        </h2>
                        <p className="text-xl text-[#ffffff]/50 font-medium max-w-2xl mx-auto">
                            Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
                        {contacts.map((contact, idx) => (
                            <motion.a
                                key={idx}
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group flex flex-col items-center justify-center p-8 rounded-[1.5rem] bg-[var(--color-surface-low)] hover:bg-[var(--color-surface-container)] transition-all duration-500 shadow-xl border border-white/5 hover:border-white/20"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#111111] flex items-center justify-center mb-6 text-[#ffffff] group-hover:scale-110 group-hover:bg-[#ffffff] group-hover:text-[#000000] transition-all duration-500">
                                    {contact.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#ffffff] mb-2">{contact.title}</h3>
                                <p className="text-[#ffffff]/50 text-sm font-mono break-all">{contact.value}</p>
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        <a
                            href="mailto:palparul39@gmail.com"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#ffffff] text-[#000000] font-bold text-lg hover:scale-105 active:scale-95 transition-transform hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)]"
                        >
                            Say Hello <ArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </RhythmicRipplesBackground>
    );
}
