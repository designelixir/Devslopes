'use client';
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const whatIfMessages = [
  { message: "you could take a break from work whenever you want?", time: 5 }, 
  { message: "you could afford a vacation for the first time in your life?", time: 6 },
  { message: "you were able to provide for your loved ones?", time: 4 },
  { message: "you were able to close the book on dead-end jobs forever, make more money, and finally enjoy your life?", time: 11 }
];

export default function WhatIfMessage() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const messageRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const showMessage = () => {
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
      }, whatIfMessages[currentMessage].time * 1000); // Display time per message
    };

    showMessage();
  }, [currentMessage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % whatIfMessages.length);
    }, (whatIfMessages[currentMessage].time + 2) * 1000); // Include 1s fadeIn and 1s fadeOut

    return () => clearInterval(interval);
  }, [currentMessage]);

  return (
    <div style={{ minHeight: '20vh' }}>
      <h2 ref={messageRef} className="centered-text">What if <i><strong>{whatIfMessages[currentMessage].message}</strong></i></h2>
    </div>
  );
}
