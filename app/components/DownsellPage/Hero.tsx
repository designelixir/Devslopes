'use client';
import Meteor1 from "../Meteor1";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(".hero-a", { opacity: 0, y: -20 }, { opacity: 1, y: 0, delay: 3 });
    tl.fromTo(".hero-aa", { opacity: 0, y: -20 }, { opacity: 1, y: 0, delay: 0 });
    tl.fromTo(".hero-b", { opacity: 0, y: -20 }, { opacity: 1, y: 0, delay: 0.5 });
    tl.fromTo(".hero-c", { opacity: 0, y: -20 }, { opacity: 1, y: 0, delay: 0.5 });
    tl.fromTo(".hero-d", { opacity: 0, y: -20 }, { opacity: 1, y: 0, delay: 0.5 });

    // Scroll-triggered animations for hero-e and hero-f
    gsap.fromTo(
      ".hero-e",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-e",
          start: "bottom bottom",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(
      ".hero-f",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-f",
          start: "bottom bottom",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <div>
      <Meteor1 />
      <div className="s-basic-padding-left-right hero-content flex-center-center flex-column">
        <h1 className="centered-text yellow-text hero-a no-text-spacing">
          <strong>Stuck in a Life You Can&apos;t Escape?</strong>
        </h1>
        <h2 className="centered-text hero-aa">What if...</h2>
        <div className="flex-center-center flex-wrap">
          <div className="flex-center-center text-container hero-b">
            <p className="centered-text no-text-spacing">You could take a break from work whenever you want?</p>
          </div>
          <div className="flex-center-center text-container hero-c">
            <p className="centered-text no-text-spacing">You could afford a vacation for the first time in your life?</p>
          </div>
          <div className="flex-center-center text-container hero-d">
            <p className="centered-text no-text-spacing">You were able to provide for your loved ones?</p>
          </div>
        </div>
        <h3>
          <p className="hero-e centered-text bold font-m pink-text basic-margin-top">
            What if you were able to close the book on dead-end jobs forever, make more money, and finally enjoy your life?
          </p>
        </h3>
        <button className="hero-f call-to-action-button basic-margin-top">
          Book Your Call and Escape the Grind
        </button>
      </div>
    </div>
  );
}
