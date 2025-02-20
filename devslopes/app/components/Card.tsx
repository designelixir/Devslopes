'use client';
import React from "react";

interface CardProps {
  children: React.ReactNode;
  image?: string;
  link?: string;
}

export default function Card({ children, image, link }: CardProps) {
  const content = (
    <div className="card-container flex-center-center flex-column">
      {image && (
        <div className="image-wrapper" style={{backgroundImage: `url('${image}')`}}>
          
        </div>
      )}
      <div className="card-content">
        {children}
      </div>
      <style jsx>{`
        .card-container {background: var(--navy); margin: 15px; padding: 10px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);}
        .image-wrapper {width: 50%; aspect-ratio: 1/1; max-height: 200px;  margin: 15px; background-size: contain; background-position: center; background-repeat: no-repeat;}
      `}</style>
    </div>
  );

  return link ? (
    <a href={link} className="card-link">
      {content}
    </a>
  ) : (
    content
  );
}
