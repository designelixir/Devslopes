import Image from "next/image"
import PieChart from "../PieChart"
export default function BizOps(){
    return(
        <section id="BizOps" className="s-basic-padding">
            
            <p><i>After we implemented this freelance project, something shocking happened.</i></p>
            <h1>A large portion of our students started making money - <strong>a lot of money</strong> - <span className="pink-text">without ever touching code.</span></h1>   
            <div className="flex-start-start flex-column">
            <Image src="./DownsellPage/students-6.svg" height={300} width={400}  alt="dollars"></Image>
            
                
            </div>
            <p>18 of our students have already made over $500 in paid projects—within two months.</p>
            
            <p>Most businesses don&apos;t need full-time developers. They need <strong>solutions</strong>—automations, workflows, and systems that save them time and money. That&apos;s where <span className="pink-text bold">BizOps</span> comes in.
            
            With no-code tools like Bubble.io, WordPress, and Zapier, our students replace entire teams. <strong>And businesses pay thousands for it.</strong>

            </p>
            <div className="text-container" style={{marginTop: '100px', padding: "2.5vw"}}>
            <h2 className="font-l basic-margin-top no-text-spacing"><strong>So why BizOps?</strong></h2>
            
            <h3><i>Here&apos;s what the experts had to say:</i></h3>
            <div className="flex-start-start flex-wrap">
            <div className="graph text-container flex-center-center flex-column">
                <PieChart color="orange" percentage={70}></PieChart>
                <p className="centered-text" style={{marginTop: '20px'}}>By 2027, <strong>70% of new applications</strong> developed by enterprises will use no-code/low-code technologies (Gartner).
                </p>
            </div>
            <div className="graph text-container flex-center-center flex-column">
                <Image src="./DownsellPage/money-bags.svg" alt="money bags" width={150} height={150}></Image>
                <p className="centered-text" style={{marginTop: '20px'}}>The no-code/low-code market is expected to reach $50 billion by 2025, growing at a CAGR of 23% (Forrester).
                </p>
            </div>
            <div className="graph text-container flex-center-center flex-column">
                <div className="flex-center-center" style={{minHeight: '150px', minWidth: '150px'}}>
                    <div style={{position: 'absolute'}}><PieChart color="magenta" percentage={77}></PieChart></div>
                    <div style={{position: 'absolute'}}><PieChart color="blue" percentage={75}></PieChart></div>
                
                </div>
                <p className="centered-text" style={{marginTop: '20px'}}>77% of companies have adopted no-code/low-code platforms, with 75% of users outside of IT departments (Gartner)</p>
            </div>
            <div className="graph text-container flex-center-center flex-column">
                <div className="flex-center-center" style={{minHeight: '150px', minWidth: '150px'}}>
                    
                    <div style={{position: 'absolute'}}><PieChart color="deep-purple" percentage={99}></PieChart></div>
                
                </div>
                <p className="centered-text" style={{marginTop: '20px'}}>No-code development speeds up app creation by up to 10x compared to traditional development (Zapier).</p>
            </div>
            <div className="graph text-container flex-center-center flex-column">
                <div className="flex-center-center" style={{minHeight: '150px', minWidth: '150px'}}>
                    
                    <div style={{position: 'absolute'}}><PieChart color="orange" percentage={60}></PieChart></div>
                    <div style={{position: 'absolute'}}><PieChart color="yellow" percentage={40}></PieChart></div>
                
                </div>
                <p className="centered-text" style={{marginTop: '20px'}}>Organizations using no-code/low-code report 40-60% cost savings compared to hiring traditional developers (Forrester).                </p>
            </div>
            </div>
            <div className="flex-center-center flex-column basic-margin-top-bottom">
            <h3 className="centered-text "><strong className="blue-text">Faster innovation: </strong>No-code enables rapid prototyping and deployment without heavy engineering resources.</h3>
            <h3 className="centered-text "><strong className="blue-text">Democratization of tech: </strong>More professionals, including non-technical workers, can build and automate solutions.</h3>
            <h3 className="centered-text"><strong className="blue-text">Cost efficiency: </strong>Companies save money by reducing the need for large development teams.</h3>
            <h3 className="centered-text"><strong className="blue-text">Increased demand for hybrid skills:</strong>Employers are looking for people who understand both business operations and technology, making BizOps a crucial skill set.</h3>
                
                
            </div>
            <div className="basic-margin-top">
                <h2 className="font-l  no-text-spacing"><strong>Biz Ops is the only future proofed path in tech.</strong></h2>
                <p className="production-note">Note: these charts need some love, but basic idea</p>
                <div className="flex-start-start">
                    <div className="graph text-container flex-center-center flex-column">
                        <div className="flex-center-center" style={{minHeight: '150px', minWidth: '150px'}}>
                            
                            <div style={{position: 'absolute', zIndex: '-1'}}><PieChart color="blue" percentage={60}></PieChart></div>
                            <p className="font-l bold">86%</p>
                        
                        </div>
                        <p className="centered-text" style={{marginTop: '20px'}}>86% of companies report that BizOps roles improve decision-making and agility (LinkedIn, 2023).</p>
                    </div>
                    <div className="">
                    <div className="graph text-container flex-center-center flex-column">
                        <p className="centered-text" style={{marginTop: '20px'}}>Companies with strong BizOps teams are 2.5x more likely to exceed revenue targets (McKinsey).</p>
                    </div>
                    <div className="graph text-container flex-center-center flex-column">
                        <p className="centered-text" style={{marginTop: '20px'}}>BizOps professionals earn an average salary of $100,000+, making it a lucrative field (Glassdoor).</p>
                    </div>
                    </div>
                    <div className="graph text-container flex-center-center flex-column">
                        <div className="flex-center-center" style={{minHeight: '150px', minWidth: '150px'}}>
                            
                            <div style={{position: 'absolute', zIndex: '-1'}}><PieChart color="blue" percentage={85}></PieChart></div>
                            <p className="font-l bold">85%</p>
                        
                        </div>
                        <p className="centered-text" style={{marginTop: '20px'}}>85% of executives say business operations automation is critical to scaling their companies (PwC).</p>
                    </div>
                    
                </div>
            </div>
            </div>
        </section>
    )
}