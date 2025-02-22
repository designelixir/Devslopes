'use client';
import Dash from "../Dash"
import Image from "next/image"
import gsap from "gsap"
import { useEffect } from "react"

export default function OneOpportunity(){
    useEffect(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".section-4-sticky",
            start: "top top",
            end: "bottom 100",
            scrub: 1,
            pin: true
          }
        });
      
        // .a-opportunity animation with ScrollTrigger
        tl.fromTo(".a-opportunity", { opacity: 0 }, { opacity: 1, duration: 2 });
        tl.fromTo(".meteor-single", {animation: 'unset'}, {animation: "dropBounce 0.5s ease-out forwards"})
        tl.fromTo(".b-opportunity", { opacity: 0 }, { opacity: 1, duration: 2 });
        tl.fromTo(".c-opportunity", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=0.5");
        tl.fromTo(".d-opportunity", { opacity: 0 }, { opacity: 1, duration: 2 } , "+=0.5") 
        tl.fromTo(".e-opportunity", { opacity: 0 }, { opacity: 1, duration: 2,} , "+=0.5") ;
        
        
      }, []);
      
    return(
        <div className="section-4-sticky s-basic-padding" style={{ paddingTop: "100px" }}>
            
            <div className="flex-center-start flex-column full-width" style={{ minHeight: '100vh' }}>
          
          <h1 className="a-opportunity centered-text font-l fade-out-message yellow-text">Society makes you feel stupid. Incompetent. Disposable.</h1>
          <div className="flex-end-end flex-column" style={{height: '400px'}}>
            <div className="stat-card box-section-magenta c-opportunity">
                <div className="flex-center-start" >
                    <h6 className="roboto-mono bold magenta-text" style={{textTransform: "uppercase", minWidth: "125px"}}>Work Ethic</h6>
                    <Dash color="var(--magenta)" filled={true} height={30}></Dash>
                    <Dash color="var(--magenta)" filled={true} height={30}></Dash>
                    <Dash color="var(--magenta)" filled={true} height={30}></Dash>
                    <Dash color="var(--magenta)" filled={true} height={30}></Dash>
                    <Dash color="var(--magenta)" filled={true} height={30}></Dash>
                    <Dash color="var(--magenta)" filled={true} height={30}></Dash>
                    <Dash color="var(--magenta)" filled={true} height={30}></Dash>
                    <Dash color="var(--magenta)" filled={true} height={30}></Dash>
                    <Dash color="var(--magenta)" filled={true} height={30}></Dash>
                    <Dash color="var(--magenta)" filled={true} height={30}></Dash>
                    <Dash color="var(--magenta)" filled={true} height={30}></Dash>
                </div>
            </div>
            
            
            <div className="stat-card box-section-pink d-opportunity" >
                <div className="flex-center-start">
                    <h6 className="roboto-mono bold pink-text" style={{textTransform: "uppercase", minWidth: "125px"}}>Dedication</h6>
                    <Dash color="var(--pink)" filled={true} height={30}></Dash>
                    <Dash color="var(--pink)" filled={true} height={30}></Dash>
                    <Dash color="var(--pink)" filled={true} height={30}></Dash>
                    <Dash color="var(--pink)" filled={true} height={30}></Dash>
                    <Dash color="var(--pink)" filled={true} height={30}></Dash>
                    <Dash color="var(--pink)" filled={true} height={30}></Dash>
                    <Dash color="var(--pink)" filled={true} height={30}></Dash>
                    <Dash color="var(--pink)" filled={true} height={30}></Dash>
                    <Dash color="var(--pink)" filled={true} height={30}></Dash>
                    <Dash color="var(--pink)" filled={true} height={30}></Dash>
                    <Dash color="var(--pink)" filled={true} height={30}></Dash>
                </div>
            </div>
            <div className="stat-card box-section-orange e-opportunity">
                <div className="flex-center-start">
                    <h6 className="roboto-mono bold orange-text" style={{textTransform: "uppercase", minWidth: "125px"}}>Intelligence</h6>
                    <Dash color="var(--orange)" filled={true} height={30}></Dash>
                    <Dash color="var(--orange)" filled={true} height={30}></Dash>
                    <Dash color="var(--orange)" filled={true} height={30}></Dash>
                    <Dash color="var(--orange)" filled={true} height={30}></Dash>
                    <Dash color="var(--orange)" filled={true} height={30}></Dash>
                    <Dash color="var(--orange)" filled={true} height={30}></Dash>
                    <Dash color="var(--orange)" filled={true} height={30}></Dash>
                    <Dash color="var(--orange)" filled={true} height={30}></Dash>
                    <Dash color="var(--orange)" filled={true} height={30}></Dash>
                    <Dash color="var(--orange)" filled={true} height={30}></Dash>
                    <Dash color="var(--orange)" filled={true} height={30}></Dash>
                </div>
            </div>
        </div>
          <div className="meteor-wrapper flex-start-center a-opportunity" style={{height: "500px", maxHeight: "500px", minHeight: '500px', marginTop: '-250px',}}>
                <Image src="./DownsellPage/meteor.svg" alt="meteor" className="meteor-single" height={200} width={200}></Image>
          </div>
          
            <h2 className="b-opportunity centered-text"><strong>You may be stuck, <span className="c-opportunity"> but you&apos;re hardworking;</span> <span className="d-opportunity">you&apos;re dedicated;</span> <span className="e-opportunity">and you&apos;re pretty fucking intelligent.</span></strong></h2>
            <p className="b-opportunity centered-text font-m ">You need <span className="bold pink-text">one opportunity</span> to close the door on the never ending cycle of dead-end jobs.</p>
            <button className="call-to-action-button">This Opportunity Won&apos;t Wait. Take Action Today</button>
          
        </div>
        
        

        
        <div className="flex-center-center flex-column" style={{marginTop: '150px'}}>
        
          {/* <div className="flex-center-center">
            <Image className="sun-rotate-center" style={{ position: "absolute", zIndex: '-1', opacity: "0.5", marginTop: "70px" }} src="./DownsellPage/sun.svg" height={300} width={300} alt="sun" />
            <Image src="./DownsellPage/sprout_1.svg" style={{ marginTop: "-150px" }} height={400} width={500} alt="school" />
          </div> */}
          
        </div>
        </div>
    )
}