'use client'
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"
import NavMenu from "./NavMenu"
const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false)
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href='/'>
          <Image src='/hilink-logo.svg' alt="Logo" width={80} height={29}/>
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link)=>(
            <Link href={link.href} key={link.href} 
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="hidden lg:flexCenter">
          <Button
          type='button'
          title="Login"
          icon= 'user.svg'
          varient = 'btn_dark_green'
          />
        </div>
        <NavMenu/>
    </nav>
  )
}

export default Navbar
