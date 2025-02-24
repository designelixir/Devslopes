import Meteor1 from "../Meteor1";

export default function DownsellHero(){
    return(
        <section id="Welcome">
            <Meteor1></Meteor1>
            <div className="s-basic-padding-left-right hero-content flex-center-center flex-column">
            <h1 className="centered-text">Stuck in a Life You Can&apos;t Escape?<strong className="yellow-text"> What if...</strong></h1>
                <div className="flex-center-center text-container-wrapper">
                <div className="flex-center-center text-container">
                    <p className="centered-text no-text-spacing">You could take a break from work whenever you want?</p>
                </div>
                <div className="flex-center-center text-container">
                    <p className="centered-text no-text-spacing">You could afford a vacation for the first time in your life?</p>
                </div>
                <div className="flex-center-center text-container">
                    <p className="centered-text no-text-spacing">You were able to provide for your loved ones?</p>
                </div>
                </div>
                <h3>
                <p className="centered-text bold font-m pink-text">
                    What if you were able to close the book on dead-end jobs forever, make more money, and finally enjoy your life?
                </p>
                </h3>
                <button className="call-to-action-button">
                Book Your Call and Escape the Grind
                </button>
            </div>
        </section>
    )
}