'use client';
import React from "react";

interface DashProps {
  filled: boolean;
  color: string;
  height?: number;
}

export default function Dash({ filled, color, height = 8.226 }: DashProps) {
  const aspectRatio = 10.764 / 8.226; // Width / Height ratio
  const calculatedWidth = height * aspectRatio;

  return (
    <svg 
    className="dash-svg"
      xmlns="http://www.w3.org/2000/svg" 
      width={`${calculatedWidth}px`} 
      height={`${height}px`} 
      viewBox="0 0 10.764 8.226" // Keep the original viewBox for scaling
      style={{ marginLeft: "-5px" }}
      preserveAspectRatio="xMidYMid meet"
    >
        <path 
          style={{ opacity: filled ? "1" : "0.5", fill: color }} 
          d="M5.495,0h5.016c.202,0,.321.226.208.392l-5.244,7.723c-.047.069-.125.11-.208.11H.252c-.202,0-.321-.226-.208-.392L5.288.11C5.334.041,5.412,0,5.495,0Z"
        />
    </svg>
  );
}
