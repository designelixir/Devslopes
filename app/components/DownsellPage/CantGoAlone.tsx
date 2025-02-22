'use client';
import { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";



export default function CantGoAlone(){
    useEffect(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".section-7-sticky",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: true,
          }
        });

       
    
        tl.fromTo(".a-alone", { opacity: 0 }, { opacity: 1, duration: 2 })
        tl.fromTo(".b-alone", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=2")
        tl.fromTo(".c-alone", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=2")
        tl.fromTo(".d-alone", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=2")
        
        

          
      }, []);
    return (
        <div className="section-7-sticky " style={{paddingTop: '100px'}}>
          <div className="flex-center-start flex-column" style={{minHeight: '150vh'}}>
            <div className="flex-center-start s-basic-padding flex-column no-flex-grow">
                <h1 className="a-alone centered-text">You can&apos;t do it alone. No one can.</h1>
                <div className="flex-center-center no-flex-grow">
                    <p className="b-alone centered-text text-container">That&apos;s why I built a team of industry pros—mentors who actually know what they&apos;re doing.</p>
                    <p className="c-alone centered-text text-container">At <span className="pink-text">Devslopes</span>, we believe in our freelance curriculum so much that we guarantee a paid project for every student who joins the academy.</p>
                    
                </div>
                <h3 className="centered-text d-alone ">These aren&apos;t green as grass bootcamp graduates; these are real software engineers who guide you to real paid projects, teach you the best ways to sell yourself, and provide accountability when you&apos;re stuck.</h3>
                
            </div>
            
            <div style={{height: "70vh", width: "100%", overflow: 'clip'}}>
                
                <div className="big-meteor">
                    <div className="big-meteor-grid-wrapper flex-start-start">

                        <div className="big-meteor-grid">
                            <div className="flex-center-center">
                                <Image src="./DownsellPage/sprout_1.svg" className="space-drift" height={25} width={25} alt="spaceship"></Image>
                                <Image src="./DownsellPage/astronaut-2.svg" className="space-drift b-alone" height={250} width={150} alt="spaceship"></Image>
                            </div>
                        </div>
                        <div className="big-meteor-grid">
                            <div className="flex-end-end">
                                
                                <Image src="./DownsellPage/spaceship.svg" className="space-drift" height={150} width={150} alt="spaceship"></Image>
                            </div>
                            <div className="flex-end-start">
                                <Image src="./DownsellPage/sprout_1.svg" className="space-drift" height={25} width={25} alt="spaceship"></Image>
                            </div>
                            
                        </div>
                    </div>
                    <div className="big-meteor-grid-wrapper flex-start-start">
                        <div className="big-meteor-grid"></div>
                        <div className="big-meteor-grid">
                            <div className="flex-center-end" style={{paddingRight: '25px'}}>
                            <Image src="./DownsellPage/sprout_1.svg" className="space-drift" height={25} width={25} alt="spaceship"></Image>
                                <Image src="./DownsellPage/astronaut-3.svg" className="space-drift b-alone" height={250} width={150} alt="spaceship"></Image>
                                <Image src="./DownsellPage/sprout_1.svg" className="space-drift" height={25} width={25} alt="spaceship"></Image>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Image src="./DownsellPage/sprout_1.svg" className="space-drift" height={50} width={50} alt="spaceship"></Image>
            <h3 className="centered-text">At Devslopes, we believe in our freelance curriculum so much that <span className="pink-text">we guarantee a paid project for every student who joins the academy.</span></h3>
            
          </div>
        </div>
        
        
        
    )
}