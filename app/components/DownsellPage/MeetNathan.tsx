'use client';
import { useEffect } from "react";
import gsap from "gsap";
import Dash from "../Dash";
import Image from "next/image";

export default function MeetNathan(){
    useEffect(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".section-5-sticky",
            start: "top top",
            end: "bottom bottom", // Total scrolling distance
            scrub: 1,
            pin: true,
          }
        });

        tl.fromTo(".a-nathan", { opacity: 0 }, { opacity: 1, duration: 2 })
        tl.fromTo(".b-nathan", { opacity: 0 }, { opacity: 1, duration: 2 })
   
          
      }, []);
    return (
        <div id="MeetNathan" className="s-basic-padding section-5-sticky" style={{paddingTop: '100px'}}>
          <div className="flex-center-start flex-column " style={{minHeight: '100vh'}}>
              <h1 className="centered-text a-nathan no-text-spacing">Okay, who the fuck are you to tell me this?</h1>
              <p className="centered-text yellow-text a-nathan font-m">Great question!</p>
                <div className="flex-center-center">
                    <div className="character-card a-nathan box-section-orange flex-end-start">
                        <div className="flex-start-start flex-column">
                            <div className="flex-center-start dash-container" style={{padding: '25px 0 25px 25px'}} >
                                <Dash filled={true} color="var(--orange)" height={15} />
                                <Dash filled={false} color="var(--orange)" height={15} />
                                <Dash filled={false} color="var(--orange)" height={15} />
                                <h6 style={{ marginLeft: "15px" }}>Nathan</h6>
                            </div>
                            <div className="flex-center-start flex-column character-card-content">
                            <div className="character-image-wrapper">
                                <Image className=" character-card-image" src="./DownsellPage/nathan.svg" width={300} height={300} style={{marginBottom: '-40px'}} alt="john pixel art"></Image>
                            </div>
                            <div className="character-card-text flex-start-start flex-column" style={{padding: "15px 25px"}}>
                                <p className="roboto-mono character-message">
                                    My name is Nathan Sevedge, and I&apos;m the CEO of a technical education company named <span className="pink-text bold">Devslopes. </span>
                                We help our students break free of the generational curses that keep them trapped in jobs they hate.</p>
                                <p className="roboto-mono character-message">
                                    I wasn&apos;t born into success. I was born with learning disabilities, laughed at in school, and told I&apos;d be lucky to land a job on an oil rig. 
                                    By 20, I had two kids. <strong>Fuck.</strong>Talk about playing life on nightmare mode.</p>
                                <p className="roboto-mono character-message">
                                    But I refused to be trapped. I spent hours learning to code, marketing, and networking. I sent out desperate proposals, offering to work for free. Anything to get my foot in the door.
                                    I was rejected. Over and over again.</p>
                                <p className="roboto-mono character-message">Then, one day, I got a reply. A guy needed a landing page built.
                                His email said:
                                <strong>&quot;I don&apos;t care about your credentials. I just need someone who can do the job.&quot;</strong>

                                </p>
                                <p className="roboto-mono m-nathan character-message">That one project led to another. Then another. And within six months, I went from &quot;unhirable&quot; to the head of sales at a rising startup.
                                    <strong><i className="pink-text"> So I built Devslopes to create a new way of learning.</i></strong></p>
                        </div>
                        </div>
                        </div>
                        
                        
                        
                    </div>
                </div>

              {/* <div className="flex-center-center c-nathan" style={{ margin: "10vh 0" }}>
                  <div className="box-section basic-margin box-section-aqua flex-start-spacebetween full-width">
                    <div className="flex-start-spacebetween">
                      <div className="character-card-inner-wrapper flex-end-end full-width">
                        <div className="dash-and-text-container flex-start-start flex-column s-basic-padding">
                          <div className="flex-center-start no-flex-grow dash-container">
                            <Dash filled={true} color="aqua" height={15} />
                            <Dash filled={false} color="aqua" height={15} />
                            <Dash filled={false} color="aqua" height={15} />
                            <h6 style={{ marginLeft: "15px" }}>Nathan</h6>
                          </div>
                          <div className="character-message-wrapper flex-center-end full-width">
                            <p className="right-text roboto-mono d-nathan character-message">My name is Nathan Sevedge, and I&apos;m the CEO of a technical education company named <span className="pink-text">Devslopes.</span></p>
                            <p className="right-text roboto-mono e-nathan character-message">We help our students break free of the generational curses that keep them trapped in jobs they hate.</p>
                            <p className="right-text roboto-mono g-nathan character-message">I wasn&apos;t born into success. I was born with learning disabilities, laughed at in school, and told I&apos;d be lucky to land a job on an oil rig.</p>
                            <p className="right-text roboto-mono h-nathan character-message">By 20, I had two kids. <strong>Fuck.</strong>Talk about playing life on nightmare mode.</p>
                            <p className="right-text roboto-mono i-nathan character-message">But I refused to be trapped. I spent hours learning to code, marketing, and networking. I sent out desperate proposals, offering to work for free. Anything to get my foot in the door.</p>
                            <p className="right-text roboto-mono j-nathan character-message">I was rejected. Over and over again.</p>
                            <p className="right-text roboto-mono k-nathan character-message">Then, one day, I got a reply. A guy needed a landing page built.</p>
                            <p className="right-text roboto-mono m-nathan character-message">That one project led to another. Then another. And within six months, I went from &quot;unhirable&quot; to the head of sales at a rising startup.</p>
                            <p className="right-text roboto-mono n-nathan character-message"><strong><i>So I built Devslopes to create a new way of learning.</i></strong></p>
                          </div>
                        </div>
                        
                        <div className="character-image nathan"></div>
                      </div>
                    </div>
                  </div>
              </div> */}

              {/* <div className="flex-center-center l-nathan" style={{ margin: "10vh 0" }}>
                  <div className="box-section basic-margin box-section-pink flex-start-spacebetween full-width">
                    <div className="flex-start-spacebetween">
                      <div className="character-card-inner-wrapper flex-end-end full-width">
                        <div className="dash-and-text-container flex-start-start flex-column s-basic-padding">
                          <div className="flex-center-start no-flex-grow dash-container">
                            <Dash filled={true} color="aqua" height={15} />
                            <Dash filled={true} color="aqua" height={15} />
                            <Dash filled={false} color="aqua" height={15} />
                            <h6 style={{ marginLeft: "15px" }}>???</h6>
                          </div>
                          <div className="character-message-wrapper flex-center-end full-width">
                            <p className="right-text roboto-mono character-message">I don&apos;t care about your credentials. I just need someone who can do the job.</p>
                          </div>
                        </div>
                        
                        <div className="character-image outline"></div>
                      </div>
                    </div>
                  </div>
              </div> */}
          </div>
        </div>
        
        
        
    )
}