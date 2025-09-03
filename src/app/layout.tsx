import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Vinicius Braga - Full-Stack Developer & Software Engineer",
  description: "Full-stack developer passionate about crafting scalable, high-performance digital experiences. Specializing in React, Next.js, Node.js, and cloud architecture solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
