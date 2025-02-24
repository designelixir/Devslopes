'use client'
import { useEffect } from "react"; import Image from "next/image"; import { gsap } from "gsap"; import { ScrollTrigger } from "gsap/ScrollTrigger"; import Dash from "../Dash"; import Card from "../Card";
export default function MeetJohn() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#neverWorkTrigger",
          start: "top bottom",
          end: "bottom bottom", // Total scrolling distance
          scrub: 1,
          pin: true,
        }
      });

      tl1.fromTo("#sunburst1", { opacity: 1 }, { opacity: 0, duration: 2 })
      tl1.fromTo("#school1", { filter: "grayscale(0)", duration: 1 }, { filter: "grayscale(1)", duration: 1 }, "+=0.25");

    
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
  return (
    <section className="section-margin-top s-basic-margin" id="TheProblem">
      <div className="text-container">
        <h1 className="a-john centered-text">I want to tell you a story about a man named <strong>John.</strong></h1>
        <div className="flex-center-center">
          <div className="character-card a-nathan box-section-aqua flex-end-start">
            <div className="flex-start-start flex-column">
              <div className="flex-center-start dash-container" style={{ padding: "25px 0 25px 25px" }}>
                <Dash filled={true} color="var(--aqua)" height={15} /> <Dash filled={false} color="var(--aqua)" height={15} /> <Dash filled={false} color="var(--aqua)" height={15} /> <h6 style={{ marginLeft: "15px" }}>John</h6>
              </div>
              <div className="flex-end-start character-card-content" id="John">
                <div className="character-image-wrapper flex-start-start">
                  <Image className="character-card-image" src="./DownsellPage/john-v2.svg" width={300} height={300} alt="john pixel art" />
                </div>
                <div className="character-card-text flex-start-start flex-column" style={{ padding: "15px 25px" }}>
                  <p className="roboto-mono character-message">John spends his days bent over heavy machinery, his nights swallowing Vicodin for his aching back. At just 25, he&apos;s already exhausted. He does everything his boss asks. Works late. Never complains.</p>
                  <p className="roboto-mono character-message">But instead of a raise, they cut his hours. Again.</p>
                  <p className="roboto-mono character-message">His fridge is empty. His rent is past due. The bills? He&apos;s lost track. Every day, he dreams of escape—of walking barefoot on a Hawaiian beach, laptop open, finally in control of his life. <br /> But dreams don&apos;t pay rent.</p>
                  <p className="roboto-mono character-message">Then, one day, after years of loyalty, he makes a small mistake on the machine. And just like that—</p>
                  <p className="roboto-mono yellow-text">He&apos;s fired.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="centered-text" style={{ marginTop: "100px" }}>Does this story sound familiar?</h1>
        <h3 className="centered-text">John&apos; story isn&apos;t a rare thing. It&apos;s life.</h3>
        <div className="flex-start-center text-container-wrapper">
          <Card image="./DownsellPage/earth_1.svg">
            <p className="centered-text">Millions of people are chained to jobs they hate, forced into lives where they struggle to survive, and nothing more.</p>
          </Card>
          <Card image="./DownsellPage/apartment.svg">
            <p className="centered-text">In every single state in the US, a minimum-wage job won&apos;t even cover the rent for a two-bedroom apartment. <strong> Let that sink in.</strong></p>
          </Card>
          <Card image="./DownsellPage/bad-job.svg">
            <p className="centered-text">And that&apos;s how society likes it. Keeping your job becomes a war in and of itself, as the hardest workers are often considered the most expendable.</p>
          </Card>
        </div>
      </div>
      <div className="section-margin-top">
        <h1 className="centered-text a-work no-text-spacing"><i>“Can&apos;t people just work harder?”</i></h1>
        <p className="font-m b-work centered-text">That&apos;s what the privileged say. <span className="c-work">We try programs, colleges, and purchase courses that promise us the world!</span></p>
        <div className="flex-center-center">
          <div className="flex-center-center" style={{ position: "relative", width: "400px", maxHeight: "400px", aspectRatio: "1" }}>
            <div className="sunburst-rotating-div sun-rotate-center" id="sunburst1"></div> 
            <Image src="./DownsellPage/school_1.svg" alt="school" id="school1" width={300} height={300} />
          </div>
        </div>
        <h3 id="neverWorkTrigger" className="centered-text yellow-text font-l no-text-spacing">But they never work. If anything, they put us deeper in the hole. <strong>Why?</strong></h3>
        <p className="centered-text">Because the game is rigged against us. <strong>The system isn&apos;t fair,</strong> and it&apos;s designed to keep hard working people where they are, and not elevate them into the world of successful professionals.</p>
        <h3 className="centered-text"><strong>Your basic options are:</strong></h3>
        <div className="flex-center-center flex-wrap f-work">
          <div className="flex-center-center flex-column text-container">
            <h4 className="orange-text">College?</h4>
            <p className="centered-text no-text-spacing">4 years of your life, tens of thousands of dollars, and zero guarantees.</p>
          </div>
          <div className="flex-center-center flex-column text-container">
            <h4 className="orange-text">Bootcamps?</h4>
            <p className="centered-text no-text-spacing">They expect you to quit your job and somehow survive with no income for months.</p>
          </div>
        </div>
      </div>
      <p className="centered-text fade-out-message">Those methods work if your parents still pay your rent. But you? You don&apos;t have that luxury. You need something different. <strong>Something real.</strong></p>
      <div className="flex-center-center">
        <button className="call-to-action-button">Stop Surviving. Start Thriving. Schedule Your Call</button>
      </div>
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
                  
                
              </div>
              
              
      
              
              
              
                <div className="flex-center-center" style={{height: '500px'}}>
                  <Image className="sun-rotate-center sunburst-rotating-div" style={{ opacity: "0.5", marginTop: "70px" }} src="./DownsellPage/sun.svg" height={300} width={300} alt="sun" />
                  <Image src="./DownsellPage/sprout_1.svg" style={{ marginTop: "-150px" }} height={300} width={400} alt="sprout" />
                </div>
                <div className="flex-center-center">
                <button className="call-to-action-button">This Opportunity Won&apos;t Wait. Take Action Today</button>
                </div>
              
              </div>
    </section>
  );
}
