"use client";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkHarder() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-3-sticky",
        start: "top top",
        end: "+=600%",
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    });

    tl.fromTo(".a-work", { opacity: 0 }, { opacity: 1, duration: 2 })
      .fromTo(".b-work", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5")
      .fromTo(".c-work", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5")
      .fromTo(".ccc-work", { opacity: 0, marginBottom: -100, width: 50 }, { opacity: 1, marginBottom: 0, width: "100%", duration: 3 }, "+=0.5")
      .to(".ccc-work", { marginBottom: -100, opacity: 0, duration: 3 }, "+=2")
      .to(".cc-work", { filter: "invert(1) grayscale(1)", duration: 1 }, "+=0.25")
      .fromTo(".d-work", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=4")
      .fromTo(".e-work", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5")
      .fromTo(".f-work", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5")
      
  }, []);

  return (
    <div className="section-3-sticky s-basic-padding" style={{ paddingTop: "100px",  }}>
      <div className="section-3-sticky-first flex-center-start flex-column" style={{minHeight: '100vh'}}>
        <h1 className="centered-text a-work no-text-spacing"><i>“Can&apos;t people just work harder?”</i></h1>
        <p className="font-m b-work centered-text">That&apos;s what the privileged say. <span className="c-work">We try programs, colleges, and purchase courses that promise us the world!</span></p>
        
          <div className="flex-center-center" style={{ position: "relative", width: '400px', maxHeight: '400px', aspectRatio: "1" }}>
            <div className="sunburst-rotating-div sun-rotate-center ccc-work" style={{position: 'absolute', zIndex: '-1'}}></div>
            <Image src="./DownsellPage/school_1.svg" className="c-work cc-work" alt="school" width={300} height={300}/>
          </div>
        
        <h3 className="d-work centered-text yellow-text font-l no-text-spacing">But they never work. If anything, they put us deeper in the hole. <strong>Why?</strong></h3>
        <p className="e-work centered-text">Because the game is rigged against us. <strong>The system isn&apos;t fair,</strong> and it&apos;s designed to keep hard working people where they are, and not elevate them into the world of successful professionals.</p>
        <h3 className="f-work"><strong>Your basic options are:</strong></h3>
        <div className="flex-center-center flex-wrap f-work">
            <div className=" flex-center-center flex-column text-container">
              <h4>College?</h4>
              <p className="centered-text no-text-spacing">4 years of your life, tens of thousands of dollars, and zero guarantees.</p>
            </div>
            <div className="flex-center-center flex-column text-container">
              <h4>Bootcamps?</h4>
              <p className="centered-text no-text-spacing">They expect you to quit your job and somehow survive with no income for months.</p>
            </div>
          </div>
          <p className="centered-text fade-out-message">Those methods work if your parents still pay your rent. But you? You don&apos;t have that luxury. You need something different. <strong>Something real.</strong></p>
          <button className="call-to-action-button">Stop Surviving. Start Thriving. Schedule Your Call</button>
      </div>
      
    </div>
  );
}
