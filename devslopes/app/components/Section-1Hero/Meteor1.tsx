"use client";

import { useEffect, useRef } from "react";

export default function Meteor1() {
  const meteorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const meteor = meteorRef.current;
    const container = containerRef.current;

    let posX = 0;
    let posY = 0;
    let speedX = 0.5;
    let speedY = 0.5;

    const animateMeteor = () => {
      if (meteor && container) {
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const meteorWidth = meteor.offsetWidth;
        const meteorHeight = meteor.offsetHeight;

        posX += speedX;
        posY += speedY;

        // Bounce off the edges
        if (posX + meteorWidth > containerWidth || posX < 0) {
          speedX *= -1;
        }
        if (posY + meteorHeight > containerHeight || posY < 0) {
          speedY *= -1;
        }

        meteor.style.transform = `translate(${posX}px, ${posY}px)`;
      }

      requestAnimationFrame(animateMeteor);
    };

    animateMeteor();
  }, []);

  return (
    <div className="meteor-container" ref={containerRef}>
        <div className="meteor-image" ref={meteorRef}>
            <div className="flex-center-center">
            <img 
            src="/DownsellPage/meteor.svg" 
            alt="meteor" 
            
            className="rotate-center "
            />
            </div>
        </div>
      
      <style jsx>{`
        .meteor-container {position: relative; overflow: hidden; width: 100%; height: 400px;}
        .meteor-image {position: absolute; top: 0; left: 0; width: auto; height: 65%;}
        .meteor {height: 100%;}
      `}</style>
    </div>
  );
}
