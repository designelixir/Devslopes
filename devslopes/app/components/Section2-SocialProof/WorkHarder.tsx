"use client";
import Card from "../Card";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkHarder() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-4-sticky",
        start: "top 100",
        end: "+=500vh", // 300vh of scrolling within this section
        scrub: 1,
        pin: true,
      }
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-5-sticky",
        start: "top 150",
        end: "+=500vh", // 300vh of scrolling within this section
        scrub: 1,
        pin: true,
      }
    });

    tl.fromTo(".a-work", { opacity: 0 }, { opacity: 1, duration: 2 })
      .fromTo(".b-work", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5")
      .to(".b-work", { opacity: 0, duration: 1 }, "+=1")
      .fromTo(".c-work", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5")
      .to(".d-work", { opacity: 0, duration: 1 }, "+=1")
      .fromTo(".cc-work", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.25")
      .fromTo(".d-work", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=1")
      .fromTo(".e-work", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5")
      .to(".cc-work", { opacity: 0, duration: 2 }, "+=2");

    tl2.fromTo(".f-work", { opacity: 0, display: "none" }, { opacity: 1, display: "flex", duration: 2 }, "+=1")
      .to(".f-work", { opacity: 0, display: "none", duration: 1 }, "+=1")
      .fromTo(".g-work", { opacity: 0, display: "none" }, { opacity: 1, display: "flex", duration: 2 }, "+=1")
      .to(".g-work", { opacity: 0, display: "none", duration: 1 }, "+=1")
      .fromTo(".h-work", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=1")
      .to(".h-work", { opacity: 0, duration: 1 }, "+=1")
      .fromTo(".i-work", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=1")
      .to(".i-work", { opacity: 0, duration: 1 }, "+=1")
      .fromTo(".j-work", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=1")
      .to(".j-work", { opacity: 0, duration: 1 }, "+=1")
      .fromTo(".k-work", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=1")
      .to(".k-work", { opacity: 0.5, duration: 1 }, "+=1")
      .fromTo(".l-work", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 2 }, "+=1")
      .fromTo(".m-work", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 2 }, "+=1");
  }, []);

  return (
    <div style={{ minHeight: "250vh", overflow: "hidden" }}>
      <div className="section-4-sticky s-basic-padding" style={{ position: "sticky", top: 0, height: "100vh" }}>
        <h1 className="centered-text a-work"><i>“Can&apos;t people just work harder?”</i></h1>
        <div className="flex-center-center">
          <p className="font-m centered-text b-work fade-out-message">That&apos;s what the privileged say. <span className="yellow-text">Of course, there is!</span></p>
          <p className="centered-text font-m c-work" style={{ position: "absolute" }}>We try programs, colleges, and purchase courses that promise us the world!</p>
        </div>

        <div className="flex-center-center flex-column">
          <div className=" flex-center-center sun-burst">
            <Image className="sunburst sun-rotate-center cc-work" style={{ position: "absolute" }} src="./DownsellPage/sun.svg" height={450} width={450} alt="sun" />
            <Image src="./DownsellPage/school_1.svg" className="c-work" style={{ position: "absolute" }} height={400} width={500} alt="school" />
          </div>

          <div className="flex-center-center flex-column full-width">
            <p className="d-work centered-text yellow-text font-l">But they never work. If anything, they put us deeper in the hole. <strong>Why?</strong></p>
            <p className="e-work centered-text">Because the game is rigged against us. <strong>The system isn&apos;t fair,</strong> and it&apos;s designed to keep hard working people where they are, and not elevate them into the world of successful professionals.</p>
          </div>
        </div>
      </div>

      <div className="section-5-sticky s-basic-padding" style={{ position: "sticky", top: 0, height: "100vh" }}>
        <div className="flex-center-center">
          <div className="f-work card-wrapper">
            <Card image="./DownsellPage/earth_1.svg">
              <p className="centered-text" style={{ marginBottom: "50px" }}>
                <span className="yellow-text font-l">College?</span><br />4 years of your life, tens of thousands of dollars, and zero guarantees.
              </p>
            </Card>
          </div>
          <div className="g-work card-wrapper">
            <Card image="./DownsellPage/earth_1.svg">
              <p className="centered-text" style={{ marginBottom: "50px" }}>
                <span className="yellow-text font-l">Bootcamps?</span><br />They expect you to quit your job and somehow survive with no income for months.
              </p>
            </Card>
          </div>
        </div>

        <div className="flex-center-center flex-column full-width" style={{ marginTop: "50px" }}>
          <p className="h-work centered-text font-l fade-out-message">Those methods work if your parents still pay your rent.</p>
          <p className="i-work centered-text font-l fade-out-message">But you? You don&apos;t have that luxury. You need something different.<br /><span className="yellow-text"><strong> Something real.</strong></span></p>
          <p className="j-work centered-text font-l fade-out-message">You&apos;re hardworking; you&apos;re dedicated; and you&apos;re pretty fucking intelligent.</p>
          <p className="k-work centered-text font-l fade-out-message">Society makes you feel stupid. Incompetent. Disposable.</p>
        </div>

        <p className="l-work centered-text font-l">You need one opportunity to close the door on the never ending cycle of dead-end jobs.</p>
        <div className="flex-center-center flex-column">
          <div className="m-work flex-center-center sun-burst">
            <Image className="sunburst sun-rotate-center" style={{ position: "absolute", opacity: "0.5", marginTop: "70px" }} src="./DownsellPage/sun.svg" height={300} width={300} alt="sun" />
            <Image src="./DownsellPage/sprout_1.svg" style={{ position: "absolute", marginTop: "-150px" }} height={400} width={500} alt="school" />
          </div>
          <button className="m-work">This Opportunity Won&apos;t Wait. Take Action Today</button>
        </div>
      </div>
    </div>
  );
}
