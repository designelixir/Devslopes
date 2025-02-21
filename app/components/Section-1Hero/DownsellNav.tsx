'use client'
import Link from "next/link";

export default function DownsellNav(){
    return(
        <nav className="gsap flex-center-start dark-section s-basic-padding-left-right downsell-nav s-basic-margin-left-right">
            <Link href="#DownsellWelcome" className="no-link-styling">
                <button className="downsell-nav-link">Welcome</button>
            </Link>
            <style jsx>{`
            .downsell-nav-link {font-size: 18px; background: var(--offblack2); border: 2px solid var(--offblack2); }
                
            `}</style>
        </nav>
    )
}