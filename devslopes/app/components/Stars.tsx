"use client";

import { useEffect } from "react";

export default function Stars() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.id = "particles-js";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    const particlesArray: Particle[] = [];

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle Interface and Class
    interface ParticleProps {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }

    class Particle implements ParticleProps {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor(x: number, y: number, size: number, speedX: number, speedY: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Re-position particles when they go off-screen
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
      }
    }

    // Create particles
    function init() {
      particlesArray.length = 0;
      for (let i = 0; i < 355; i++) {
        const size = Math.random() * 2;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * 0.1;
        const speedY = (Math.random() - 0.5) * 0.1;
        particlesArray.push(new Particle(x, y, size, speedX, speedY));
      }
    }

    // Reposition particles when resizing
    function repositionParticles() {
      const widthRatio = window.innerWidth / canvas.width;
      const heightRatio = window.innerHeight / canvas.height;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesArray.forEach((particle) => {
        particle.x *= widthRatio;
        particle.y *= heightRatio;
      });
    }

    // Animate particles
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    window.addEventListener("resize", repositionParticles);
    init();
    animate();

    return () => {
      window.removeEventListener("resize", repositionParticles);
      document.body.removeChild(canvas);
    };
  }, []);

  return <></>;
}
