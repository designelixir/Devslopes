'use client'
import Meteor1 from "./Meteor1";
import DownArrow from "./DownArrow";
import WhatIfMessage from "./WhatIfMessage";

export default function HeroContent() {

  return (
    <div>
      <Meteor1 />
      <div className="basic-padding-left-right hero-content" style={{ opacity: 0, marginTop: '20px' }}>
        
        <h1 className="gsap-fade-in centered-text yellow-text"><strong>Stuck in a Life You Can&apos;t Escape?</strong></h1>
        <div className="flex-center-center gsap-fade-in">
          <WhatIfMessage />
        </div>
        <div className="flex-center-center down-arrow-container full-width gsap-fade-in">
          <DownArrow />
        </div>
      </div>
    </div>
  );
}
