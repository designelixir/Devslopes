import Stars from "../components/Stars";
import "./downSellPage.css";
import WorkHarder from "../components/DownsellPage/WorkHarder";
import MeetNathan from "../components/DownsellPage/MeetNathan";
import MeetDevslopes from "../components/DownsellPage/MeetDevslopes";
import Loader from "../components/DownsellPage/Loader";
import Hero from "../components/DownsellPage/Hero";
import TheProblem from "../components/DownsellPage/TheProblem";
import OneOpportunity from "../components/DownsellPage/OneOpportunity";
import CantGoAlone from "../components/DownsellPage/CantGoAlone";




export default function DownsellPage() {
  return (
    <>
    <Stars></Stars>
    <Loader></Loader>
    <main style={{marginTop: '110px'}}>
      <section id="Welcome" style={{minHeight: '100vh'}}>
        <Hero></Hero>
      </section>
      <section id="TheProblem">
        <TheProblem></TheProblem>
        <WorkHarder></WorkHarder>
        <OneOpportunity></OneOpportunity>
      </section>
    <section id="WhyDevslopes">
      <MeetNathan></MeetNathan>
      <MeetDevslopes></MeetDevslopes>
      <CantGoAlone></CantGoAlone>
    </section>
    <section id="BizOp" ></section>
    </main>
    </>
    
    
  );
}
