"use client";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Dash from "../Dash";
import Card from "../Card";

gsap.registerPlugin(ScrollTrigger);

export default function TheProblem() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-2-sticky",
        start: "top 100",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
      }
    });

    tl.fromTo(".a-john", { opacity: 0 }, { opacity: 1, duration: 2 })
    .fromTo(".b-john", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5")
    .fromTo(".c-john", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5")
    .fromTo(".d-john", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=2")
    .fromTo(".e-john", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=2")
    .fromTo(".f-john", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=2")
    
    
  }, []);

  return (
    <div className="section-2-sticky s-basic-padding" style={{ marginTop: '100px' }}>
      
        <h1 className="a-john centered-text">I want to tell you a story about a man named <strong>John.</strong></h1>
        <div className="flex-center-center">
            <div className="character-card a-john box-section-aqua flex-end-start">
                <div className="flex-start-start flex-column">
                    <div className="flex-center-start dash-container" style={{padding: '25px 0 25px 25px'}} >
                        <Dash filled={true} color="aqua" height={15} />
                        <Dash filled={false} color="aqua" height={15} />
                        <Dash filled={false} color="aqua" height={15} />
                        <h6 style={{ marginLeft: "15px" }}>John</h6>
                    </div>
                    <div className="flex-end-start character-card-content">
                    <div className="character-image-wrapper">
                        <Image className=" character-card-image" src="./DownsellPage/jon.svg" width={300} height={300} alt="john pixel art"></Image>
                    </div>
                    <div className="character-card-text flex-start-start flex-column b-john" style={{padding: "15px 25px"}}>
                    <p className=" phase-message">
                        John spends his days bent over heavy machinery, his nights swallowing Vicodin for his aching back. At just 25, he&apos;s already exhausted.
                        He does everything his boss asks. Works late. Never complains. <span className="yellow-text bold">But instead of a raise, they cut his hours. Again.</span>
                    His fridge is empty. His rent is past due. The bills? He&apos;s lost track.
                    Every day, he dreams of escape—of walking barefoot on a Hawaiian beach, laptop open, finally in control of his life.<br></br> But dreams don&apos;t pay rent.</p>
                    <p className="g-john">Then, one day, after years of loyalty, he makes a small mistake on the machine. And just like that—</p>
                    
                    <h3 className="h-john phase-message font-l"><strong className="yellow-text">He&apos;s fired.</strong></h3>
                </div>
                </div>
                </div>
                
                
                
            </div>
        </div>
        
        <h1 className="c-john centered-text" style={{marginTop: '100px'}}>Does this story sound familiar?</h1>
        <h3 className="centered-text c-john">John&apos; story isn&apos;t a rare thing. It&apos;s life.</h3>
        <div className="flex-start-center flex-wrap">
            <div className="d-john card-wrapper">
                <Card image="./DownsellPage/earth_1.svg">
                    <p className="centered-text">Millions of people are chained to jobs they hate, forced into lives where they struggle to survive, and nothing more.</p>
                </Card>
            </div>
            <div className="e-john card-wrapper">
                <Card image="./DownsellPage/apartment.svg">
                    <p className="centered-text">In every single state in the US, a minimum-wage job won&apos;t even cover the rent for a two-bedroom apartment. <strong> Let that sink in.</strong></p>
                </Card>
            </div>
            <div className="f-john card-wrapper">
                <Card image="./DownsellPage/bad-job.svg">
                    <p className="centered-text">And that&apos;s how society likes it. Keeping your job becomes a war in and of itself, as the hardest workers are often considered the most expendable.</p>
                </Card>
            </div>
        </div>
        

      </div>
    
  );
}
