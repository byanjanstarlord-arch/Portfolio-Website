import CinematicIntro from "@/components/CinematicIntro";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent flex flex-col">
      <CinematicIntro />
      <ScrollyCanvas />
      <Projects />
      <Skills />
      <Experience />
      <Contact />

      {/* Simple Footer */}
      <footer className="w-full py-8 text-center text-white/30 text-sm border-t border-white/5 font-medium">
        <p>© 2026 BYANJAN BEHERA. All rights reserved.</p>
      </footer>
    </main>
  );
}
