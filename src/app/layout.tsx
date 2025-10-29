import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Michele Sodano - Data Scientist · AI Engineer · Applied Researcher",
  description: "Engineer with 6+ years across Europe, Asia and the U.S., building ML/DL systems. Blending data, design & intelligence to ship interpretable, efficient and privacy‑aware AI.",
  keywords: ["data scientist", "AI engineer", "machine learning", "deep learning", "PyTorch", "TensorFlow", "Python", "research", "portfolio"],
  authors: [{ name: "Michele Sodano" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
