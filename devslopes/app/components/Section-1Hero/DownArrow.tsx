'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

export default function DownArrow() {
  const arrowRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Light bounce animation
    gsap.to(arrowRef.current, {
      y: -10,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Show message after 5 seconds if not clicked
    const showMessage = setTimeout(() => {
      gsap.fromTo(
        messageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );
      gsap.to(messageRef.current, {
        opacity: 0,
        delay: 3,
        duration: 1,
        ease: "power2.in"
      });
    }, 5000);

    return () => clearTimeout(showMessage);
  }, []);

  // Scroll to #SocialProof
  const handleClick = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#SocialProof",
      },
      duration: 1,
      ease: "power2.inOut"
    });
  };

  return (
    <div className="down-arrow-wrapper" onClick={handleClick} ref={arrowRef}>
      <div ref={messageRef} className="quest-message"><i><strong>Take the Devslopes Quest</strong></i></div>
      <span className="down-arrow-entity">&#x25BC;</span>
      
      <style jsx>{`
        .down-arrow-wrapper {
          cursor: pointer;
          width: 100%;
          text-align: center;
        }
        .down-arrow-entity {
          font-size: 2rem;
          opacity: 0.8;
        }
        .quest-message {
          font-size: 14px;
          opacity: 0;
          transition: opacity 0.5s;
        }
      `}</style>
    </div>
  );
}
