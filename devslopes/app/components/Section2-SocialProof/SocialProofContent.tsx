'use client';
import Card from "../Card";
import { useEffect } from "react";
import gsap from "gsap";


export default function SocialProofContent(){
    useEffect(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".section-3-sticky",
            start: "top 100",
            end: "bottom +=500", // Total scrolling distance
            scrub: 1,
            pin: true,
          }
        });
    
        tl.fromTo(".a-socialproof", { opacity: 0 }, { opacity: 1, duration: 2 })
            .fromTo(".b-socialproof", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5")  
          .fromTo(".bb-socialproof", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5")
          .fromTo(".c-socialproof", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5")
          .fromTo(".d-socialproof", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5")
          .fromTo(".e-socialproof", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=2")
          
      }, []);
    return (
        <div className="section-3-sticky" style={{marginTop: '100px', height: '100vh'}}>
            <h2 style={{marginTop: "100px"}} className="centered-text a-socialproof"><i><strong>Does this story sound familiar?</strong></i></h2>
            <h3 className="centered-text b-socialproof">John&apos;s story isn&apos;t a rare thing. It&apos;s life.</h3>
            <div className="flex-center-center" style={{marginTop: '5vw', marginBottom: '20vh'}}>
                <div className="bb-socialproof card-wrapper">
                <Card image="./DownsellPage/earth_1.svg">
                    <p className="centered-text">Millions of people are chained to jobs they hate, forced into lives where they struggle to survive, and nothing more.</p>
                </Card>
                </div>
                <div className="c-socialproof card-wrapper">
                <Card image="./DownsellPage/apartment.svg">
                    <p className="centered-text">In every single state in the US, a minimum-wage job won&apos;t even cover the rent for a two-bedroom apartment. <strong> Let that sink in.</strong></p>
                </Card></div>
                <div className="d-socialproof card-wrapper">
                <Card image="./DownsellPage/bad-job.svg">
                    <p className="centered-text">And that&apos;s how society likes it. Keeping your job becomes a war in and of itself, as the hardest workers are often considered the most expendable.</p>
                </Card></div>
            </div>
            <h3 className="font-l centered-text e-socialproof">They&apos;re fired without warning, handed a severance, and told to <span className="yellow-text">get lost.</span></h3>
        </div>
        
    )
}