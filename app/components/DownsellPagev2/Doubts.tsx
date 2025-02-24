"use client";

import { useEffect } from "react";
import Card from "../Card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Doubts() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Set initial state for showDream to be hidden
    gsap.set("#showDream", { opacity: 0 });
    
    // Create a timeline that controls both animations simultaneously
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#youTrigger",
        start: "top bottom", // when the top of #youTrigger hits the center of the viewport
        toggleActions: "play none none reverse"
      }
    });
    
    tl
    .fromTo(".excusesInCommon", { opacity: 0  }, { opacity: 1, duration: 0.25 })
      .fromTo("#showDream", { opacity: 0  }, { opacity: 1, duration: 0.25 })
      
      ;
  }, []);

  return (
    <div className="s-basic-padding">
      <h1 className="centered-text">&quot;That&apos;s great for those guys, but I could never do that.&quot;</h1>
      <h2 className="yellow-text centered-text"><i>Why not?</i></h2>
      <div id="hideExcuses" className="flex-center-center">
          <Card>
            <p className="centered-text font-m"><i>&quot;I don&apos;t have enough time.&quot;</i></p>
          </Card>
          <Card>
            <p className="centered-text font-m"><i>&quot;I&apos;m not skilled enough.&quot;</i></p>
          </Card>
          <Card>
            <p className="centered-text"><i>&quot;I&apos;ve tried courses before, and they didn&apos;t work.&quot;</i></p>
          </Card>
        </div>
      <h2 className="centered-text ">
        What do all of those excuses have in common? <span className="centered-text yellow-text bold font-l excusesInCommon">YOU.</span>
      </h2>
      <p id="youTrigger" className="centered-text excusesInCommon">
        The truth is, you don&apos;t believe in yourself. And that self-doubt? <span className="bold pink-text">That&apos;s the only thing standing between you and a better life.</span>
      </p>
    </div>
  );
}
