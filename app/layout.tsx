import type { Metadata } from "next";
import { Inter, Space_Grotesk, Covered_By_Your_Grace } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import BackgroundMarquee from "@/components/BackgroundMarquee";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const coveredByYourGrace = Covered_By_Your_Grace({
  variable: "--font-handwriting",
  weight: "400",
  subsets: ["latin"],
});

const romanzo = localFont({
  src: "../public/fonts/Romanzo.ttf",
  variable: "--font-romanzo",
});

const quiteGood = localFont({
  src: "../public/fonts/Quite Good - TTF.ttf",
  variable: "--font-quite-good",
});

export const metadata: Metadata = {
  title: "Portfolio | Creative Developer",
  description: "A high-end scrollytelling personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${coveredByYourGrace.variable} ${romanzo.variable} ${quiteGood.variable} font-sans antialiased text-white bg-black selection:bg-white/20 selection:text-white`}>
        <BackgroundMarquee />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
