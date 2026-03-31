import type { Metadata } from "next";
import { Inter, Space_Grotesk, Covered_By_Your_Grace } from "next/font/google";
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${coveredByYourGrace.variable} font-sans antialiased text-[#dae2fd] bg-[#0b1326] selection:bg-[#89ceff]/20 selection:text-[#89ceff]`}>
        <BackgroundMarquee />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
