"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function CinematicIntro() {
  const helloControls = useAnimation();
  const welcomeControls = useAnimation();
  const lineControls = useAnimation();
  const splitTopControls = useAnimation();
  const splitBottomControls = useAnimation();

  // Track when the opening sequence finishes to remove overlays from the DOM
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // Lock scroll during the intro animation
    document.body.style.overflow = "hidden";
    
    async function sequence() {
      // 1. Fade & Scale In "Hello"
      await helloControls.start({
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 1.2, ease: "easeOut" },
      });

      // Pause for a moment to let the user read
      await new Promise((r) => setTimeout(r, 600));

      // 2. Flip "Hello" Out (Vertically)
      helloControls.start({
        opacity: 0,
        rotateX: 90,
        filter: "blur(8px)",
        transition: { duration: 0.6, ease: "easeIn" },
      });

      // Small overlap for a seamless transition
      await new Promise((r) => setTimeout(r, 300));

      // 3. Flip "Welcome" In (Vertically from bottom)
      await welcomeControls.start({
        opacity: 1,
        rotateX: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: "easeOut" },
      });

      // 4. Hold "Welcome" visible for ~1 second
      await new Promise((r) => setTimeout(r, 1200));

      // 5. Fade out and slightly scale up "Welcome"
      await welcomeControls.start({
        opacity: 0,
        scale: 1.1,
        filter: "blur(12px)",
        transition: { duration: 0.6, ease: "easeInOut" },
      });

      // Wait a tiny bit for complete darkness
      await new Promise((r) => setTimeout(r, 200));

      // 6. Line Animation - Starts from LEFT drawing towards Right
      await lineControls.start({
        scaleX: 1,
        transition: { duration: 1.2, ease: "easeInOut" },
      });

      // 7. Screen Split Effect using a cinematic cubic-bezier
      const splitEase: [number, number, number, number] = [0.77, 0, 0.175, 1];

      splitTopControls.start({
        y: "-100%",
        transition: { duration: 1.6, ease: splitEase },
      });
      splitBottomControls.start({
        y: "100%",
        transition: { duration: 1.6, ease: splitEase },
      });

      // Wait for shutters to fully clear the screen before unmounting them
      await new Promise((r) => setTimeout(r, 1600));
      
      // Unlock scrolling so user can interact with the rest of the site
      document.body.style.overflow = "auto";
      setComplete(true);
    }

    sequence();
  }, [
    helloControls,
    welcomeControls,
    lineControls,
    splitTopControls,
    splitBottomControls,
  ]);

  if (complete) return null;

  return (
    <div className="fixed inset-0 w-full h-full z-50 pointer-events-none flex flex-col">
      {/* TOP HALF SHUTTER */}
      <motion.div
        className="w-full h-1/2 bg-black flex flex-col justify-end relative pointer-events-auto"
        initial={{ y: 0 }}
        animate={splitTopControls}
      >
        {/* Glowing Line on the bottom edge */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[1px] bg-white opacity-60 shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]"
          initial={{ scaleX: 0 }}
          animate={lineControls}
          style={{ originX: 0 }} // Transforms starting from left edge
        />
      </motion.div>

      {/* BOTTOM HALF SHUTTER */}
      <motion.div
        className="w-full h-1/2 bg-black flex flex-col justify-start relative pointer-events-auto"
        initial={{ y: 0 }}
        animate={splitBottomControls}
      >
        {/* Glowing Line on the top edge */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[1px] bg-white opacity-60 shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]"
          initial={{ scaleX: 0 }}
          animate={lineControls}
          style={{ originX: 0 }}
        />
      </motion.div>

      {/* 
        INTRO TEXT (Hello / Welcome)
        Positioned absolutely to center precisely over the split line
      */}
      <div
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
        style={{ perspective: "1000px" }} // Adds 3D depth to rotateX
      >
        {/* "Hello" Layer */}
        <motion.div
          className="absolute text-5xl md:text-7xl font-bold font-[family-name:var(--font-romanzo)] tracking-widest text-white uppercase text-center"
          initial={{ opacity: 0, scale: 0.9, rotateX: 0, filter: "blur(10px)" }}
          animate={helloControls}
        >
          Hello
        </motion.div>

        {/* "Welcome" Layer */}
        <motion.div
          className="absolute text-5xl md:text-7xl font-bold font-[family-name:var(--font-romanzo)] tracking-widest text-white uppercase text-center"
          initial={{ opacity: 0, rotateX: -90, filter: "blur(10px)" }}
          animate={welcomeControls}
        >
          Welcome
        </motion.div>
      </div>
    </div>
  );
}
