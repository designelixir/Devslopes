import Dash from "../Dash"
import Doubts from "./Doubts"
import NathanAgain from "./NathanAgain"

export default function SuccessStories(){
    return (
        <section id="SuccessStories" className="s-basic-padding basic-margin-top">
            <h1 className="centered-text">This could be you. </h1>
            <p className="production-note">Note: will add character graphics</p>
            <div className="flex-center-center flex-column">
                      <div className="character-card student-story box-section-aqua flex-center-start">
                        <div className="flex-start-start flex-column">
                          <div className="flex-center-start dash-container" style={{ padding: "25px 0 25px 25px" }}>
                            <Dash filled={true} color="var(--aqua)" height={15} /> <Dash filled={false} color="var(--aqua)" height={15} /> <Dash filled={false} color="var(--aqua)" height={15} /> <Dash filled={false} color="var(--aqua)" height={15} /> <Dash filled={false} color="var(--aqua)" height={15} /> <h6 style={{ marginLeft: "15px" }}>Sam Jacob (Laid off in the pandemic)</h6>

                          </div>
                          <div className="flex-end-start character-card-content" id="John">
                            <div className="character-card-text flex-start-start flex-column" style={{ padding: "15px 25px" }}>
                              <p className="roboto-mono character-message">✅ Used BizOps skills.<br></br>
                                💰 Made $16,000 on a single project. <br></br>
                                🏡 Works from home, never worries about layoffs again.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                     {/* Noah's Story */}
<div className="character-card student-story box-section-blue flex-center-start">
  <div className="flex-start-start flex-column">
    <div className="flex-center-start dash-container" style={{ padding: "25px 0 25px 25px" }}>
    <Dash filled={true} color="var(--blue)" height={15} /> <Dash filled={true} color="var(--blue)" height={15} /> <Dash filled={false} color="var(--blue)" height={15} /> <Dash filled={false} color="var(--blue)" height={15} /> <Dash filled={false} color="var(--blue)" height={15} /> <h6 style={{ marginLeft: "15px" }}>Noah (DONE with Uber)</h6>
    </div>
    <div className="flex-end-start character-card-content" id="Noah">
      <div className="character-card-text flex-start-start flex-column" style={{ padding: "15px 25px" }}>
        <p className="roboto-mono character-message">
          🚗 Noah was DONE with Uber.<br />❌ Sick of long hours.<br />❌ Tired of chasing tips.<br />❌ Fed up with barely scraping by.<br />💡 He built his portfolio with paid projects.<br />💼 He landed a full-time remote dev job.<br />💰 And guess what? He STILL takes on freelance projects in his spare time.<br />🚀 No boss. No set schedule. Just freedom.
        </p>
      </div>
    </div>
  </div>
</div>

{/* Bill's Story */}
<div className="character-card student-story box-section-yellow flex-center-start">
  <div className="flex-start-start flex-column">
    <div className="flex-center-start dash-container" style={{ padding: "25px 0 25px 25px" }}>
    <Dash filled={true} color="var(--yellow)" height={15} /> <Dash filled={true} color="var(--yellow)" height={15} /> <Dash filled={true} color="var(--yellow)" height={15} /> <Dash filled={false} color="var(--yellow)" height={15} /> <Dash filled={false} color="var(--yellow)" height={15} /> <h6 style={{ marginLeft: "15px" }}>Bill (“Never again!”)</h6>
    </div>
    <div className="flex-end-start character-card-content" id="Bill">
      <div className="character-card-text flex-start-start flex-column" style={{ padding: "15px 25px" }}>
        <p className="roboto-mono character-message">
          🕒 Bill was laid off and said, “Never again!”<br />❌ No boss.<br />❌ No clocking in.<br />❌ No begging for time off.<br />💼 He’s built a steady stream of paid projects.<br />💰 He makes great money on his terms.<br />🔥 And full-time work? He doesn’t even want it.<br />🚀 Because when you control your income, you control your life.
        </p>
      </div>
    </div>
  </div>
</div>

{/* Fadi's Story */}
<div className="character-card student-story box-section-aqua flex-center-start">
  <div className="flex-start-start flex-column">
    <div className="flex-center-start dash-container" style={{ padding: "25px 0 25px 25px" }}>
    <Dash filled={true} color="var(--aqua)" height={15} /> <Dash filled={true} color="var(--aqua)" height={15} /> <Dash filled={true} color="var(--aqua)" height={15} /> <Dash filled={true} color="var(--aqua)" height={15} /> <Dash filled={false} color="var(--aqua)" height={15} /> <h6 style={{ marginLeft: "15px" }}>Fadi (Coding Bootcamp Grad)</h6>
    </div>
    <div className="flex-end-start character-card-content" id="Fadi">
      <div className="character-card-text flex-start-start flex-column" style={{ padding: "15px 25px" }}>
        <p className="roboto-mono character-message">
          🎓 Fadi graduated from a coding bootcamp.<br />📅 But a year later? Nothing happened.<br />🚨 Then he joined our freelance academy...<br />💥 Two weeks later, he landed a $500 project.<br />💡 Sometimes all it takes is the right opportunity.
        </p>
      </div>
    </div>
  </div>
</div>

{/* Shawn's Story */}
<div className="character-card student-story box-section-orange flex-center-start">
  <div className="flex-start-start flex-column">
    <div className="flex-center-start dash-container" style={{ padding: "25px 0 25px 25px" }}>
    <Dash filled={true} color="var(--orange)" height={15} /> <Dash filled={true} color="var(--orange)" height={15} /> <Dash filled={true} color="var(--orange)" height={15} /> <Dash filled={true} color="var(--orange)" height={15} /> <Dash filled={true} color="var(--orange)" height={15} /> <h6 style={{ marginLeft: "15px" }}>Shawn (From Dropout to Business Owner)</h6>
    </div>
    <div className="flex-end-start character-card-content" id="Shawn">
      <div className="character-card-text flex-start-start flex-column" style={{ padding: "15px 25px" }}>
        <p className="roboto-mono character-message">
          🎓 Shawn was a college dropout.<br />💍 Got married in the middle of the pandemic.<br />💡 Then he joined our freelance mentorship...<br />💰 Now his business has made $15k to date.<br />🔥 From dropout to business owner.
        </p>
      </div>
    </div>
  </div>
</div>

                    </div>
                    <Doubts></Doubts>
                    <NathanAgain></NathanAgain>
        </section>
    )
}