import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shahab Athar's Portfolio",
  description:
    "The portfolio of Shahab Athar made with nextjs, tailwindcss, shadcn, aceternity ui, @tsparticles/react. Solutions Architect, Frontend Developer, Backend Developer, Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} bg-colorBGs bg-[#020617]`}>
        {children}
      </body>
    </html>
  );
}
