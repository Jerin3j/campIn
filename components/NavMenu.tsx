'use client'
import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { slide as Menu } from "react-burger-menu";
const NavMenu = () => {
    return (
        <Menu right noOverlay disableCloseOnEsc={true}
         width={500}
         className='mt-8 w-ful flex flex-col items-center lg:hidden'
         customBurgerIcon={
          <Image 
           src={'menu.svg'}
           alt='menu'
           width={32}
           height={32}
           // onClick={()=> setMenu(!menu)}
           className="inline-block cursor-pointer lg:hidden h-40" />
          }>
          <ul className='bg-white h-1/2 drop-shadow-xl w-96 rounded-xl '>
            {NAV_LINKS.map((link)=>(
                <li className='regular-20 text-center pt-3 hide-scrollbar hover:text-blue-950 cursor-pointer hover:underline'>
                  <Link href={'/'}>{link.label}</Link>
                  </li>
            ))}
          </ul>
        </Menu>
      );
}

export default NavMenu