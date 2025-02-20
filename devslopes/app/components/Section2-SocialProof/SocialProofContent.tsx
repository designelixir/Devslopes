import Card from "../Card";
import Dash from "../Dash";
import Image from "next/image";

export default function SocialProofContent(){
    return (
        <div style={{marginTop: '100px'}}>
            <h1>I want to tell you a story about a man named <strong>John.</strong></h1>
            <div className="box-section box-section-aqua basic-padding" >
            <div className="flex-center-start">
                
                <div className="flex-center-start no-flex-grow">
                    <Dash filled={true} color="aqua" height={15}></Dash>
                    <Dash filled={false} color="aqua" height={15}></Dash>
                    <Dash filled={false} color="aqua" height={15}></Dash>
                </div>
                <h6 style={{marginLeft: '15px'}}>John</h6>
            </div>
            <div className="flex-center-start">
                <div className="flex-start-start flex-column">
                    <div style={{border: '1px solid red'}}>
                        <h3>John spends his days bent over heavy machinery, his nights swallowing Vicodin for his aching back. At just 25, he's already exhausted.</h3>
                        <h3>He does everything his boss asks. Works late. Never complains. But instead of a raise, they cut his hours. Again.</h3>
                        <h3>His fridge is empty. His rent is past due. The bills? He's lost track.</h3>
                    </div>
                    <div className="character-message">
                        <p className="roboto-mono">"I don't think I have enough."</p>
                        <h6>-John</h6>
                    </div>
                    <div style={{border: '1px solid lime'}}>
                        <h3>Every day, he dreams of escape—of walking barefoot on a Hawaiian beach, laptop open, finally in control of his life. But dreams don't pay rent.</h3>
                        <h3>Then, one day, after years of loyalty, he makes a small mistake on the machine. And just like that—</h3>
                        <h3><strong className="yellow-text">He's fired.</strong></h3>
                    </div>
                    
                </div>
                <div className="character-image" style={{marginRight: '-5.5vw', marginBottom: '-10px', border: '1px solid blue'}}>
                    <Image src="./DownsellPage/jon.svg" height={300} width={200}  alt="John Pixel Art"></Image>

                </div>
                
            </div>
        
        

            </div>
            
            <h2 style={{marginTop: "100px"}} className="centered-text"><i><strong>Does this story sound familiar?</strong></i></h2>
            <h3 className="centered-text">John's story isn't a rare thing. It's life.</h3>
            <div className="flex-center-center flex-column" style={{marginTop: '5vw'}}>
                <Card image="./DownsellPage/earth_1.svg">
                    <p className="centered-text">Millions of people are chained to jobs they hate, forced into lives where they struggle to survive, and nothing more.</p>
                </Card>
                <Card image="./DownsellPage/apartment.svg">
                    <p className="centered-text">In every single state in the US, a minimum-wage job won't even cover the rent for a two-bedroom apartment. <strong> Let that sink in.</strong></p>
                </Card>
                <Card image="./DownsellPage/bad-job.svg">
                    <p className="centered-text">And that's how society likes it. Keeping your job becomes a war in and of itself, as the hardest workers are often considered the most expendable.</p>
                </Card>
            </div>
        </div>
        
    )
}