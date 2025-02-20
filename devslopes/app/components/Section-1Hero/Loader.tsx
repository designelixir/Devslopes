"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sections = [
  { title: "Take the Quest", link: "DownsellWelcome" },
  { title: "The Call", link: "SocialProof" },
];

export default function Loader() {
  const imageRef = useRef<HTMLDivElement>(null);
  
  const navRef = useRef<HTMLElement>(null);
  const loaderSquaresRef = useRef<HTMLDivElement>(null);
  const meteorRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Create a GSAP timeline for better control and readability
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
  
    // 1. Fade in the image
    tl.fromTo(
      imageRef.current,
      { opacity: 0, y: -20, marginTop: "40vh" },
      { opacity: 1, y: 0, duration: 1 }
    )
  
      // 2. Fade in and grow nav
      .fromTo(
        navRef.current,
        { opacity: 0, width: 0 },
        { opacity: 1, width: "auto", duration: 1 }
      )
  
      // 3. Animate loader squares
      .add(() => {
        const squares = loaderSquaresRef.current?.querySelectorAll(".loader-square");
  
        squares?.forEach((square, i) => {
          setTimeout(() => {
            const icon = document.createElement("button");
            icon.className = "loader-square-icon flex-center-center full-width";
            square.appendChild(icon);
  
            // Get the corresponding title for this square
            const title = Sections[i].title;
  
            // Split the title into individual letters and append them one by one
            title.split("").forEach((char, letterIndex) => {
              setTimeout(() => {
                const span = document.createElement("span");
                span.innerHTML = char === " " ? "&nbsp;" : char; // Preserve spaces
                icon.appendChild(span);
              }, letterIndex * 50); // 0.1s stagger between each letter
            });
          }, i * 500); // Stagger by 0.5s per square
        });
      })
      .fromTo(
        navRef.current,
        { opacity: 0, width: 0 },
        { opacity: 1, width: "auto", duration: 1 }
      )
      
  
      // 4. Reveal letters after they are appended
      .add(() => {
        const squares = loaderSquaresRef.current?.querySelectorAll(".loader-square");
  
        squares?.forEach((square, i) => {
          setTimeout(() => {
            const linkContainers = square.querySelectorAll(".loader-square-icon");
  
            linkContainers?.forEach((container) => {
              const hiddenLetters = container.querySelectorAll("span");
  
              hiddenLetters.forEach((letter, index) => {
                setTimeout(() => {
                  letter.style.display = "inline-block";
                }, index * 50); // 0.05s stagger between each letter
              });
            });
          }, i * 500); // Stagger by 0.5s per square
        });
      })
  
      .add(
        gsap.fromTo(
          imageRef.current, 
          { 
            marginTop: "40vh",
            height: "50px" 
          }, 
          { 
            marginTop: '10px',
            height: "20px", // Specify the end state
            delay: 2,
            ease: "power2.inOut"
          }
        )
        
      )
     
  
    // ScrollTrigger to detect active section
    Sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section.link}`,
        start: "100 center",
        end: "bottom center",
        toggleClass: {
          targets: `#${section.link}-Link`,
          className: "active-downsell-link"
        }
      });
    });
  }, []);
  
  return (
    <div className="downsell-nav-container">
      <div className="flex-end-center offblack1-bg s-basic-padding icon-logo-wrapper" ref={imageRef}>
      <Image className="hover" src="/Devslopes-Logo-Icon-WhiteOutline.svg" alt="Devslopes Icon Logo" layout="fill" objectFit="contain"/>
      </div>
      <nav className="flex-start-start flex-column downsell-nav downsell-nav-container s-basic-margin-left-right" ref={navRef}>
        <div className="flex-center-start full-width" ref={loaderSquaresRef}>
          {Sections.map((section) => (
            <Link key={section.link} id={`${section.link}-Link`} href={`#${section.link}`} className={`flex-center-center full-width no-link-styling downsell-nav-link loader-square flex-center-start ${ activeSection === section.link ? "active-downsell-nav-link": ""}`}>                
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
