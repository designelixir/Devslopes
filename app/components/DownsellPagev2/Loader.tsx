"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Sections = [
  { title: "Welcome", link: "Welcome", scrollTrigger: true, linkType: "#" },
  { title: "The Problem", link: "TheProblem", scrollTrigger: true, linkType: "#" },
  { title: "Why Devslopes?", link: "WhyDevslopes", scrollTrigger: true, linkType: "#" },
  { title: "Bizop", link: "BizOp", scrollTrigger: true, linkType: "#" },
  { title: "Success Stories", link: "SuccessStories", scrollTrigger: true, linkType: "#" }
];


export default function Loader() {
  const navContainer = useRef<HTMLDivElement>(null);
  const nav = useRef<HTMLDivElement>(null);
  const logo = useRef<HTMLDivElement>(null);
  const loaderSquaresContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(".icon-logo-wrapper", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 });

    tl.add(() => {
      const loaderSquares = loaderSquaresContainer.current?.querySelectorAll(".loader-square");
      loaderSquares?.forEach((square, i) => {
        gsap.fromTo(square, { display: "none", opacity: 0 }, { display: "flex", opacity: 1, duration: 1, delay: i * 0.3 });
      });
    });

    // ScrollTrigger for Section Visibility
    Sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: `#${section.link}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          const target = document.querySelector(`#${section.link}-Link`);
          if (target) {
            gsap.to(target, { background: 'white', duration: 0.3 });
            scrollToIndex(index);
          }
        },
        onEnterBack: () => {
          const target = document.querySelector(`#${section.link}-Link`);
          if (target) {
            gsap.to(target, { background: 'white', duration: 0.3 });
            scrollToIndex(index);
          }
        },
        onLeave: () => {
          const target = document.querySelector(`#${section.link}-Link`);
          if (target) {
            gsap.to(target, { background: 'var(--white-opaque)', duration: 0.3 });
          }
        },
        onLeaveBack: () => {
          const target = document.querySelector(`#${section.link}-Link`);
          if (target) {
            gsap.to(target, { background: 'var(--white-opaque)', duration: 0.3 });
          }
        }
      });
    });

    // Scroll to Index Function
    const scrollToIndex = (index: number) => {
      const targetLink = loaderSquaresContainer.current?.querySelector(`.loader-square[data-index="${index}"]`);
      if (targetLink && loaderSquaresContainer.current) {
        const container = loaderSquaresContainer.current;
        const offsetLeft = (targetLink as HTMLElement).offsetLeft;
        gsap.to(container, {
          scrollTo: { x: offsetLeft, autoKill: false },
          duration: 0.5,
          ease: "power2.out"
        });
      }
    };
  }, []);

  return (
    <div className="downsell-nav-container flex-start-start" ref={navContainer}>
      <nav className="flex-center-center no-flex-grow downsell-nav" ref={nav}>
        <div className="s-basic-padding icon-logo-wrapper" ref={logo}></div>
        <div className="flex-start-start loader-squares-wrapper hide-scrollbars">
          <div className="flex-center-start loader-squares-container" ref={loaderSquaresContainer}>
            {Sections.map((section, index) => (
              <Link
                key={section.link}
                id={`${section.link}-Link`}
                data-index={index}
                href={`${section.linkType}${section.link}`}
                className="flex-center-center no-link-styling downsell-nav-link loader-square"
                style={{ display: "none", opacity: 0 }}
              >
                <button className="loader-square-text centered-text">{section.title}</button>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
