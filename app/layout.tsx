"use client";
import { useEffect } from "react";
import "./globals.css";
import gsap from "gsap";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const elements = document.querySelectorAll(".gsap");
    gsap.fromTo(
      elements,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <html lang="en">
      <body className="offblack1-bg">
        <main>{children}</main>
      </body>
    </html>
  );
}
