"use client";
import Dash from "../Dash";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function John() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-2-sticky",
        start: "top 100",
        end: "+=4000", // Total scrolling distance
        scrub: 1,
        pin: true,
      }
    });

    tl.fromTo(".a-john", { opacity: 0 }, { opacity: 1, duration: 2 })
        .fromTo(".e-john", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5")
      .fromTo(".b-john", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5").to(".b-john", { opacity: 0, duration: 1 }, "+=1")
      .fromTo(".c-john", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5").to(".c-john", { opacity: 0, duration: 1 }, "+=1")
      .fromTo(".d-john", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5").to(".d-john", { opacity: 0, duration: 1 }, "+=1")
      .fromTo(".ee-john", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5")
      .fromTo(".f-john", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5")
      .to(".f-john", { opacity: 0, duration: 1 }, "+=1")
      .fromTo(".g-john", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5")
      .to(".g-john", { opacity: 0, duration: 1 }, "+=1")
      .fromTo(".h-john", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5");
  }, []);

  return (
    <section className="section-2-sticky" style={{ height: "100vh", overflow: "hidden", marginTop: '100px' }}>
      <div className="section-2-scroller" style={{ height: "400vh" }}>
        <h1 className="a-john centered-text">I want to tell you a story about a man named <strong>John.</strong></h1>
        <div className="flex-center-center flex-column">
          <h3 className="b-john phase-message">John spends his days bent over heavy machinery, his nights swallowing Vicodin for his aching back. At just 25, he&apos;s already exhausted.</h3>
          <h3 className="c-john phase-message">He does everything his boss asks. Works late. Never complains. But instead of a raise, they cut his hours. Again.</h3>
          <h3 className="d-john phase-message">His fridge is empty. His rent is past due. The bills? He&apos;s lost track.</h3>
          <h3 className="f-john phase-message">Every day, he dreams of escape—of walking barefoot on a Hawaiian beach, laptop open, finally in control of his life.<br></br> But dreams don&apos;t pay rent.</h3>
          <h3 className="g-john phase-message">Then, one day, after years of loyalty, he makes a small mistake on the machine. And just like that—</h3>
        </div>
        <div className="flex-center-center e-john" style={{ margin: "10vh 0" }}>
          <div className="box-section basic-margin box-section-aqua flex-start-spacebetween full-width">
            <div className="flex-start-spacebetween">
              <div className="flex-center-start s-basic-padding no-flex-grow">
                <Dash filled={true} color="aqua" height={15} />
                <Dash filled={false} color="aqua" height={15} />
                <Dash filled={false} color="aqua" height={15} />
                <h6 style={{ marginLeft: "15px" }}>John</h6>
              </div>
              <div className="flex-center-end full-width">
                <p className="centered-text roboto-mono font-l ee-john">I don&apos;t think I have enough.</p>
                <div className="character-image jon" style={{ marginTop: "-50px" }}></div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="h-john phase-message font-l"><strong className="yellow-text">He&apos;s fired.</strong></h3>
      </div>
    </section>
  );
}
