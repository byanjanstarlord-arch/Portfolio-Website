"use client";

import { motion } from "framer-motion";

export default function BackgroundMarquee() {
    // Array to multiply the text for a seamless infinite loop
    const textItems = new Array(4).fill("BYANJAN");

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none flex flex-col justify-center opacity-5">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                }}
            >
                {textItems.map((text, idx) => (
                    <span
                        key={idx}
                        className="text-[20vw] font-black leading-none uppercase px-8"
                        style={{
                            WebkitTextStroke: "2px #ffffff",
                            color: "transparent",
                        }}
                    >
                        {text}
                    </span>
                ))}
            </motion.div>
            
            {/* Create a counter-moving line for parallax effect */}
            <motion.div
                className="flex whitespace-nowrap mt-4"
                animate={{
                    x: ["-50%", "0%"],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 25,
                }}
            >
                {textItems.map((text, idx) => (
                    <span
                        key={idx}
                        className="text-[20vw] font-black leading-none uppercase px-8"
                        style={{
                            WebkitTextStroke: "2px #ffffff",
                            color: "transparent",
                        }}
                    >
                        BEHERA
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
