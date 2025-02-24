import Stars from "../components/DownsellPagev2/Stars";
import "./downsellPagev2.css";

import MeetNathan from "../components/DownsellPagev2/MeetNathan";

import Loader from "../components/DownsellPagev2/Loader";

import DownsellHero from "../components/DownsellPagev2/DownsellHero";
import MeetJohn from "../components/DownsellPagev2/MeetJohn";
import WhyDevslopes from "../components/DownsellPagev2/WhyDevslopes";
import BizOps from "../components/DownsellPagev2/BizOps";
import SuccessStories from "../components/DownsellPagev2/SuccessStories";

import JohnAgain from "../components/DownsellPagev2/JohnAgain";




export default function DownsellPage() {
  return (
    <>
    <Stars></Stars>
    <Loader></Loader>
    <main style={{marginTop: '110px'}}>
      <DownsellHero></DownsellHero>
      <MeetJohn></MeetJohn>
      <MeetNathan></MeetNathan>
      <WhyDevslopes></WhyDevslopes>
      <BizOps></BizOps>
      <SuccessStories></SuccessStories>
      <JohnAgain></JohnAgain>
    </main>

    </>
    
    
  );
}
