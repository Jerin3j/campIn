import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CampIn from './CampIn'

type FooterColumnProps ={
  title: string,
  children: React.ReactNode
}
const FooterColumn = ({title, children}: FooterColumnProps) => {
  return(
    <div className="flex flex-col gap-5">
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}
const Footer = () => {
  return (
    <footer className="flexCenter mb-12">
      <div className="padding-container max-container w-full flex
       flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%]
        md:flex-row">
          <Link href={'/'} className='mb-10'>
           <CampIn/>
          </Link>

          <div className="FooterTexts flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns)=>(
              <FooterColumn title={columns.title}>
                <ul className="regular 14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href={'/'} key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex-flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link)=>(
                  <Link href={'/'}
                   key={link.label}
                   className='flex md:flex-col lg:flex-row gap-5 text-gray-30'>
                    <p className="whitespace-nowrap">
                      {link.label}
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                   </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link)=>(
                    <Link href={'/'} key={link}>
                      <Image src={link} alt='logo' width={24} height={24}/>
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="">
          <p className="regular 14 w-full text-center text-gray-30">
            &copy; CampIn 2024 | Designed by
             <Link href={'https://github.com/jerin3j'} className='text-blue-500'> Jerin 3J</Link>
          </p>
        </div>
       </div>
    </footer>
  )
}

export default Footer