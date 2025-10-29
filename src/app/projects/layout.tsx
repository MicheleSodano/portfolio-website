import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects - Michele Sodano | AI Engineer & Data Scientist",
  description: "Comprehensive overview of Michele Sodano's research and development projects in AI, machine learning, and computational modeling.",
  keywords: ["AI projects", "machine learning research", "data science portfolio", "deep learning", "IoT analytics", "generative AI"],
  authors: [{ name: "Michele Sodano" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
