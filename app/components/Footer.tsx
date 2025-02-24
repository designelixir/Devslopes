import Image from "next/image"
export default function Footer(){
    return(
        <footer>
            <div className="flex-center-center basic-padding-top-bottom">
                <Image src="./DownsellPage/DevslopesPink.svg" alt="Devslopes Icon" height={150} width={150}></Image>
                <h1 className="roboto">Devslopes</h1>
            </div>
        </footer>
    )
}