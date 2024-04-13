import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className='flexCenter w-full flex-col pb-[100px]'>
      <div className="get-app">
        <div className="z-20 flex flex-1 flex-col w-full gap-12
          items-start justify-center">
          <h2 className="bold-40 lg:bold-64xl:max-w-[320px]"> Get for free now</h2>
          <p className="regular-16 text-gray-10">
            Available on IOS and Android
          </p>
          <div className="Buttons flex flex-col w-full gap-3 whitespace-nowrap 
            xl:flex-row xl:max-w-[450px]">
            <Button
            type='button'
            title='Download App'
            icon='/apple.svg'
            varient='btn_white'
            full
            />
            <Button
            type='button'
            title='Download App'
            icon='/android.svg'
            varient='btn_dark_green_outline'
            full
            />
          </div>
        </div>
        <div className="flexEnd flex-1">
          <Image
           src={'/phones.png'}
           alt='phones'
           width={550}
           height={870}
          />
        </div>
      </div>
    </section>
  )
}

export default GetApp