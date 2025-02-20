'use client'
import { useEffect } from "react";
import gsap from "gsap";
import Meteor1 from "./Meteor1";
import DownArrow from "./DownArrow";
import WhatIfMessage from "./WhatIfMessage";

export default function HeroContent() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.5, ease: "power2.out" } });

    // Set initial state for gsap-fade-in elements
    gsap.set(".gsap-fade-in", { opacity: 0, y: 20 });

    tl.to(".gsap-fade-in", {
      opacity: 1,
      y: 0,
      stagger: 0.25,  // Stagger by 0.25s between elements
      delay: 5,       // Wait for 5 seconds before starting
    });
  }, []);

  return (
    <div>
      <Meteor1 />
      <div className="basic-padding-left-right">
        
        <h1 className="gsap-fade-in centered-text yellow-text"><strong>Stuck in a Life You Can't Escape?</strong></h1>
        <div className="flex-center-center gsap-fade-in">
          <WhatIfMessage />
        </div>
        
        <div className="flex-center-center full-width gsap-fade-in">
          <DownArrow />
        </div>
      </div>
    </div>
  );
}
