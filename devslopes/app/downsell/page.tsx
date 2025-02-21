import HeroContent from "../components/Section-1Hero/HeroContent";
import Stars from "../components/Stars";
import "../section1Styles.css";
import SocialProofContent from "../components/Section2-SocialProof/SocialProofContent";
import Loader2 from "../components/Section-1Hero/Loader2";
import John from "../components/Section2-SocialProof/John";
import WorkHarder from "../components/Section2-SocialProof/WorkHarder";



export default function DownsellPage() {
  return (
    <>
    <Stars></Stars>
    <Loader2></Loader2>
    <section id="DownsellWelcome" className="meteor-wrapper" style={{minHeight: '80vh'}}>
      <HeroContent></HeroContent>
    </section>
    <section id="SocialProof">
      <John></John>
      <SocialProofContent></SocialProofContent>
      <WorkHarder></WorkHarder>
    </section>
    {/* <section id="WhyDevslopes">
      <MeetNathan></MeetNathan>
    </section> */}
    </>
    
    
  );
}
