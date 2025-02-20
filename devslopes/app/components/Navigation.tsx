'use client'
import Image from "next/image"
import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="offblack1-bg s-basic-padding">
      
        <Link href="/" className="flex-center-start no-link-styling">
            <Image src="/devslopes-logo-icon.svg" width={70} height={50}  alt="Devslopes Icon Logo" />
            <p className="logo-text roboto">Devslopes</p>
        </Link>
        
      <style jsx>{`
        .logo-text {font-size: 18px; }
        
      `}</style>
    </nav>
  )
}
