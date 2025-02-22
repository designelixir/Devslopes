'use client';
import { useEffect } from "react";
import gsap from "gsap";
import Conversation from "../Conversation";
import Image from "next/image";
import Feedback from "../Feedback";
import CharacterCard from "../CharacterCard";


export default function MeetDevslopes(){
    useEffect(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".section-6-sticky",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: true,
          }
        });

       
    
        tl.fromTo(".a-meetdevslopes", { opacity: 0 }, { opacity: 1, duration: 2 })

          
      }, []);
    return (
        <div className="section-6-sticky s-basic-padding" style={{paddingTop: '100px'}}>
          <div className="flex-center-start flex-column" style={{minHeight: '100vh'}}>
            <Image src="./DownsellPage/dollars.svg" className="a-meetdevslopes" height={300} width={300} alt="dollars"></Image>
              <h1 className="font-l a-meetdevslopes centered-text">
                We don&apos;t just teach skills. <span className="bold">We get you paid while you learn. </span><br></br>
                Our students don&apos;t wait for permission. <span className="pink-text">They work on real projects, build real experience, and land real jobs.</span></h1>
                
                <p className="font-m centered-text a-meetdevslopes"> You can&apos;t get the job without experience, but you can&apos;t get experience without the job.<br></br> <span className="bold">We solved that problem.</span></p>
                <p><i>See real messages from our students, sent while amidst the Devslopes course.</i></p>
                <div className="feedback-column-wrapper  a-meetdevslopes flex-start-start flex-column">
                <Feedback message="1 just got two more jobs: one landing page for $150 to deliver on Monday, and another landing page for $500 to deliver in two weeks. Thank you for your support!" color="blue" name="Bill Rodrigo" image="./DownsellPage/outline.svg"></Feedback>
                <Conversation 
                    message1={[
                      "Yo!", 
                      "Guess who landed that contract?! 9 county Supervisor of Election sites. all hosted and maintained. They already have the website built so I only have to migrate it."
                    ]} 
                    sender1="Drake" 
                    sender1Image="./DownsellPage/outline.svg"
                    message2={["Whats up!"]} 
                    sender2="anonymousuzzer" 
                    sender2Image="./DownsellPage/nathan.svg"
                  />
<CharacterCard message="1 just got two more jobs: one landing page for $150 to deliver on Monday, and another landing page for $500 to deliver in two weeks. Thank you for your support!" color="blue" name="Bill Rodrigo" image="./DownsellPage/outline.svg"></CharacterCard>
                </div>
                
                
                <p><span className="pink-text bold centered-text"> Earn While You Learn</span> works because it attacks the doubt within you, and proves that anything is possible!</p>
                

          </div>
        </div>
        
        
        
    )
}