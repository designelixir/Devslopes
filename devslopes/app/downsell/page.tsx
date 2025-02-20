import HeroContent from "../components/Section-1Hero/HeroContent";
import Stars from "../components/Stars";
import "../section1Styles.css";

import Loader from "../components/Section-1Hero/Loader";
import SocialProofContent from "../components/Section2-SocialProof/SocialProofContent";


export default function DownsellPage() {
  return (
    <>
    <Stars></Stars>
    <Loader></Loader>
    <section id="DownsellWelcome" className="meteor-wrapper">
      <HeroContent></HeroContent>
    </section>
    <section id="SocialProof" className="basic-margin" style={{border: '1px solid red', minHeight: '100vh'}}>
      <SocialProofContent></SocialProofContent>
    </section>
    </>
    
    
  );
}
