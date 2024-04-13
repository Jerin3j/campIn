import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

type FeatureItemProps= {
  key: string,
  title:string,
  icon: string,
  description: string,
  varient: string,
}
const FeatureItem = ( props :FeatureItemProps) => {
  return(
    <li className="flex w-full flex-1 flex-col items-start">  
     <div className="rounded-full p-2 lg:p-4 bg-green-50">
      <Image
      src={props.icon}
      alt='feat'
      width={28}
      height={28}
      />
     </div>
     <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{props.title}</h2>
     <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">{props.description}</p>
    </li>
  )
}

const Features = () => {
  return (
    <section className="Features flexCenter flex-col overflow-hidden
    bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        {/* LEFT SIDE */}
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
          src={'/phone.png'}
          alt='phone'
          width={440}
          height={1000}
          className='feature-phone'
          />
        </div>
        {/* RIGHT SIDE */}
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
            src={'./camp.svg'}
            alt='camp'
            width={50}
            height={50}
            className='absolute left-[-5px] top-[-30px] w-10 lg:w- '
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 
          lg:gap-20'>
            {FEATURES.map((feature)=>(
              <FeatureItem
               key={feature.title}
               title={feature.title}
               icon={feature.icon}
               description={feature.description}
               varient={feature.variant}
               />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}


export default Features