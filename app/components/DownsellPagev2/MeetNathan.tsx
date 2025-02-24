'use client';
import Dash from "../Dash";
import Image from "next/image";

export default function MeetNathan(){

    return (
        <div className="text-container">
<div id="MeetNathan" className="s-basic-padding section-5-sticky" style={{paddingTop: '100px'}}>
          <div className="flex-center-start flex-column ">
              <h1 className="centered-text a-nathan no-text-spacing">Okay, who the fuck are you to tell me this?</h1>
              <p className="centered-text yellow-text a-nathan font-m">Great question!</p>
                <div className="flex-center-center basic-margin-top">
                    <div className="character-card a-nathan box-section-pink flex-end-start">
                        <div className="flex-start-start flex-column">
                            <div className="flex-center-start dash-container" style={{padding: '25px 0 25px 25px'}} >
                                <Dash filled={true} color="var(--pink)" height={15} />
                                <Dash filled={false} color="var(--pink)" height={15} />
                                <Dash filled={false} color="var(--pink)" height={15} />
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
                                <p className="roboto-mono m-nathan character-message">That one project led to another. Then another. And within six months, I went from &quot;unhirable&quot; to the head of sales at a rising startup.</p>
                                    
                        </div>
                        </div>
                        </div>
                        
                        
                        
                    </div>
                </div>
          </div>
        </div>
        
        </div>
        
        
        
        
    )
}