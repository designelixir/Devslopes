'use client'
import Image from "next/image";
export default function JohnAgain() {

  return (
    <section className="section-margin-top s-basic-margin" id="BookYourCall">
      <div className="text-container">
        <h1 className="centered-text">You&apos;re one decision away from the life you actually want. The clock&apos;s ticking.</h1>
        <div className="flex-center-center">
        <Image className="character-card-image" src="./DownsellPage/john-v2.svg" width={300} height={300} alt="john pixel art" />
            <div style={{paddingLeft: '25px'}}>
                <p className="font-m">John <i>dreamed</i> of freedom.</p>
                <p className="font-m">He waited. <span className="yellow-text">He hesitated.</span></p>
                <p className="font-m">And now? He&apos;s still stuck.</p>
                <p className="font-m">But <span className="pink-text">YOU</span> don&apos;t have to be.</p>
                <p className="font-m">The only difference between John and the people who made it?</p>
                <p className="font-m">They took action.</p>
            </div> 
        </div>
        <div className="flex-center-center flex-column">
            <h1 className="centered-text">So what will it be?<br></br><strong>One day or day one?</strong></h1>
            <button className="call-to-action-button">Book Your Call Today</button>
        </div>
      </div>
    </section>
  );
}
