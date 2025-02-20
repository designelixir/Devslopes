'use client';
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const whatIfMessages = [
  "you could take a break from work whenever you want?", 
  "you could afford a vacation for the first time in your life?", 
  "you were able to provide for your loved ones?", 
  "you were able to close the book on dead-end jobs forever, make more money, and finally enjoy your life?"
];

export default function WhatIfMessage() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const messageRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const showNextMessage = () => {
      gsap.fromTo(
        messageRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      setTimeout(() => {
        gsap.to(messageRef.current, {
          opacity: 0,
          y: -20,
          duration: 1,
          ease: "power2.in",
          onComplete: () => {
            setCurrentMessage(prev => (prev + 1) % whatIfMessages.length);
          }
        });
      }, 3000); // Display each message for 3 seconds
    };

    showNextMessage();
    const interval = setInterval(showNextMessage, 5000); // 5s interval (3s display + 1s fadeIn + 1s fadeOut)

    return () => clearInterval(interval);
  }, [currentMessage]);

  return (
    <div style={{ minHeight: '20vh' }}>
      <h2 ref={messageRef} className="centered-text">What if <i><strong>{whatIfMessages[currentMessage]}</strong></i></h2>
    </div>
  );
}
