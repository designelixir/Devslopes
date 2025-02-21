"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sections = [
  { title: "Stuck?", link: "#DownsellWelcome", scrollTrigger: true },
  { title: "The Problem", link: "#SocialProof", scrollTrigger: true },
  { title: "Why Devslopes?", link: "#WhyDevslopes", scrollTrigger: true },
  { title: "Book Your Call", link: "/BookYourCall", scrollTrigger: false }
];

interface Loader2Props {
  onComplete?: () => void;
}

export default function Loader2({ onComplete }: Loader2Props) {
  const navContainer = useRef<HTMLDivElement>(null);
  const nav = useRef<HTMLDivElement>(null);
  const logo = useRef<HTMLDivElement>(null);
  const loaderSquaresContainer = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const tl = gsap.timeline({ 
      defaults: { ease: "power2.out" },
      onComplete: () => {
        if (onComplete) onComplete(); 
      }
    });

    tl.fromTo(logo.current, 
      {opacity: 0, y: -20},
      {opacity: 1, y: 0, duration: 1 }
    );

    tl.addPause("+=0.5");
    tl.add(() => {
      gsap.fromTo(nav.current, 
        {width: 'auto'},
        { width: '100%', duration: 1, ease: "power2.out" }
      );
    });

    tl.add(() => {
      const loaderSquares = loaderSquaresContainer.current?.querySelectorAll('.loader-square');
      loaderSquares?.forEach((square, i) => {
        gsap.fromTo(square, 
          { display: "none", opacity: 0 }, 
          { display: "flex", opacity: 1, duration: 1, delay: i * 0.3 }
        );
      });
    });

    tl.add(()=> {
      gsap.fromTo(".loader-square-text", 
        {opacity: 0,},
        {opacity: 1, duration: 1.5, delay: 2, ease: "power2.out"}
      );
    });

    tl.add(()=> {
      gsap.fromTo(".hero-content", 
        {opacity: 0, marginTop: "20px"},
        {opacity: 1, marginTop: 0, duration: 1.5, delay: 3, ease: "power2.out"}
      );
    });

    Sections.forEach((section) => {
      if (section.scrollTrigger) {
        ScrollTrigger.create({
          trigger: `${section.link}`,
          start: "100 center",
          end: "bottom center",
          onEnter: () => setActiveSection(section.link),
          onEnterBack: () => setActiveSection(section.link),
          onLeave: () => setActiveSection(""),
          onLeaveBack: () => setActiveSection("")
        });
      }
    });
  }, []);
  
  return (
    <div className="downsell-nav-container flex-center-center" ref={navContainer}>
      <nav className="flex-center-center no-flex-grow downsell-nav" ref={nav}>
        <div className="s-basic-padding icon-logo-wrapper" ref={logo}></div>
        <div className="flex-center-center full-width loader-squares-container fully-loaded" ref={loaderSquaresContainer}>
          {Sections.map((section) => (
            <Link 
              key={section.link} 
              id={`${section.link}-Link`} 
              href={`${section.link}`} 
              className={`flex-center-center no-link-styling downsell-nav-link loader-square flex-center-start ${ activeSection === section.link ? "active-downsell-link": ""}`} 
              style={{ display: "none", opacity: 0 }}
            >
                <span className="loader-square-text">{section.title}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
