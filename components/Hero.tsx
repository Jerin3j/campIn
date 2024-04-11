import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className="Hero-Section max-container padding-container flex flex-col gap-20
     py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">

      <div className="hero-map mt-14" />

        {/* LEFT COl */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
        src={'/camp.svg'}
        alt='camp'
        width={50}
        height={50}
        className='absolute left-[-5px] lg:left-[5px] top-[-30px] w-10 lg:w-[50px]'
        />
        <h1 className='bold-52 lg:bold-88'>Kolukkumalai Mount Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          we want to be each of your journeys seeking the satisfaction of
          seeking the incorruptible beauty of nature. We can help you on an 
          adventure around the world in just one app.
        </p>
        <div className="Ratings my-11 flex flex-wrap gap-5">
         <div className="Rating-Stars flex items-center">
          {Array(5).fill(0).map((_, index)=>(
           <Image
            src={'/star.svg'} 
            key={index}
            alt='star'
            height={24}
            width={24}
           />
          ))}
         </div>
         <p className='bold-16 lg:bold-20 text-blue-70'>
           198K
          <span className='regular-16 lg:regular-20 ml-1 underline'>
            Excellent reviews</span>
         </p>
        </div>
        <div className="Buttons flex flex-col w-full gap-3 sm:flex-row">
         <Button
           type='button'
           title='Download App'
           varient='btn_green'
          />
           <Button
            type='button'
            title='How we work'
            icon={'./play.svg'}
            varient='btn_white_text'
          />
        </div>
      </div>

        {/* Black box */}
      <div className="relative flex felx-1 items-start">
        <div className="Loc-Card relative z-20 w-[268px] flex flex-col gap-8 
        rounded-3xl bg-green-90 px-7 py-8">
          <div className="Loc-Card__name flex flex-col ">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image 
              src={'./close.svg'}
              alt='close'
              height={24}
              width={24}/>
            </div>
            <p className='bold-20 text-white text-nowrap'>Anamudi Peak, Munnar</p>
           </div>

            <div className="Loc-Card__distance flexBetween">
              <div className="flex flex-col">
               <p className="regular-16 text-gray-20 block">Distance</p>
               <p className="bold-20 text-white">124.43 ml</p>
              </div>
              <div className="flex flex-col">
               <p className="regular-16 text-gray-20 block">Elevation</p>
               <p className="bold-20 text-white">5.12 km</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero