'use client';
import Dash from "../Dash";
import Image from "next/image";
import Card from "../Card";

export default function NathanAgain(){

    return (
        <div className="">
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
                                But you know it&apos;s bullshit, right? That feeling, and the inability to correct it, leads so many people to constantly wonder what if. And that&apos;s a horrible fucking feeling.<span className="yellow-text roboto-mono">And a horrible fucking life.</span></p>
                                <p className="roboto-mono character-message">
                                Remember the days of trades? You studied under an industry professional, you learned the skills under their guidance, and then you applied them. <i className="roboto-mono bold">Back in the day, we called it an apprenticeship.
                                </i>
                                </p>
                                <p className="roboto-mono character-message">
                                They&apos;ve been doing &apos;em since Moses wore short pants, and there&apos;s a reason! <span className="pink-text roboto-mono bold">It works!</span>
                                </p>
                                    
                        </div>
                        </div>
                        </div>
                        
                        
                        
                    </div>
                </div>
                <div className="flex-center-center flex-column basic-margin-top">
                <h1 className="centered-text font-l">At Devslopes, our students were able to transition from jobs they hated into careers they love. <span className="pink-text bold">Why?</span> Our mentors provided accountability, motivation, and someone to talk to when they got stuck. <span className="pink-text">It&apos;s that personal approach that makes Devslopes so unique.</span></h1>
                    <div className="flex-center-spacebetween full-width" style={{minHeight: '50vh'}}>
                        <div className="flex-start-start" style={{marginTop: '200px'}}>
                            <div className="flex-center-center" style={{transform: 'rotate(50deg)'}}>
                                <Image src="./DownsellPage/sprout_1.svg" className="space-drift" height={25} width={25} alt="spaceship"></Image>
                            </div>
                            <Image src="./DownsellPage/astronaut-2.svg" className="space-drift b-alone" height={250} width={150} alt="spaceship"></Image>
                        </div>
                        <div className="flex-center-center flex-column" style={{padding: '0 10vw'}}>
                            <div className="sunburst-rotating-div sun-rotate-center" style={{opacity: '0.5'}} id="sunburst1"></div> 
                            <div className="flex-center-center">
                                <Image src="./DownsellPage/meteor-and-sprout.svg" alt="meteor" height={250} width={250}  className="space-drift"></Image>
                            </div>
                            <Image src="./DownsellPage/sprout_1.svg" className="space-drift" height={25} width={25}  style={{marginTop: '100px', transform: 'rotate(50deg)'}} alt="spaceship"></Image>
                        </div>
                        <div className="flex-center-end" style={{ marginTop: '-200px'}}>
                            <Image src="./DownsellPage/sprout_1.svg" className="space-drift" height={25} width={25} alt="spaceship"></Image>
                            <Image src="./DownsellPage/astronaut-3.svg" className="space-drift b-alone" height={250} width={150} alt="spaceship"></Image>
                            <div className="flex-center-center" style={{transform: 'rotate(120deg)'}}>
                                <Image src="./DownsellPage/sprout_1.svg" className="space-drift" height={25} width={25} alt="spaceship"></Image>
                            </div>
                        </div>
                        
                    </div>
                    
                    
                    <h2 className="centered-text font-m">And it&apos;s the reason why our students land paid projects while they&apos;re still learning.</h2>
                    <h3 className="centered-text yellow-text font-m"><i>&quot;But I&apos;m not good at coding!&quot;</i></h3>
                    
                    <p className="centered-text"><strong>No shit! You don&apos;t have to be! That&apos;s the beauty of our <span className="pink-text">Biz Ops </span>program.</strong>You&apos;ll master no code solutions and technologies, learn how businesses use these methods to solve problems from real industry experts, and work on real world projects to build that experience. <span className="pink-text bold">That&apos;s the magic of Earn While You Learn.</span> </p>
                    
                    <h1 className="centered-tex bold-text">Picture this:</h1>
                </div>
                <div className="flex-center-center text-container-wrapper">
                     <Card image="./DownsellPage/schedule.svg">
                    <p className="centered-text bold">Setting your own hours.</p>
                    </Card>
                    <Card image="./DownsellPage/dollars.svg">
                    <p className="centered-text bold">Having money left after paying bills.</p>
                    </Card>
                    <Card image="./DownsellPage/wfh.svg">
                    <p className="centered-text bold">Working remotely, making real income in tech</p>
                    </Card>
                    <Card image="./DownsellPage/bricks.svg">
                    <p className="centered-text bold">Finally escaping the cycle of dead-end jobs.</p>
                    </Card>
                </div>
                
                
          </div>
        
        
        
        
        
    )
}