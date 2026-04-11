import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://byanjanbehera.me"),
  title: "Byanjan Behera",
  description:
    "Hi, I'm Byanjan Behera - a passionate Full Stack Developer who loves building modern, responsive, and scalable web applications. Explore my projects, skills, and creative work in web development.",
  keywords: [
    "Byanjan Behera",
    "Full Stack Developer",
    "Web Developer",
    "Portfolio",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Byanjan Behera" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Byanjan Behera",
    description:
      "Explore the portfolio of Byanjan Behera, a Full Stack Developer building modern and scalable web applications.",
    url: "https://byanjanbehera.me",
    type: "website",
    images: [
      {
        url: "/new1.png",
        width: 1200,
        height: 630,
        alt: "Byanjan Behera Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Byanjan Behera",
    description:
      "Full Stack Developer portfolio showcasing projects, skills, and experience.",
    images: ["/new1.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/web-app-manifest-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/web-app-manifest-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
