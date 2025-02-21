'use client';
import { useEffect } from "react";
import gsap from "gsap";

export default function MeetNathan(){
    useEffect(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".section-6-sticky",
            start: "top 100",
            end: "bottom bottom", // Total scrolling distance
            scrub: 1,
            pin: true,
          }
        });

       
    
        tl.fromTo(".a-nathan", { opacity: 0 }, { opacity: 1, duration: 2 })
        
        
          
      }, []);
    return (
        
        <div className="section-6-sticky s-basic-padding" style={{marginTop: '100px', border: '1px solid blue', minHeight: '100vh'}}>
            <h1 className="centered-text a-nathan">Okay, who the fuck are you to tell me this?</h1>
            
        </div>
        
        
        
    )
}