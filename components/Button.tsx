'use client'

import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit',
    title: string,
    icon?: string, 
    varient: string
}

const Button = ({type, title, icon, varient}: ButtonProps) => {
  return (
    <button
    type={type}
    className={`flexCenter gap-3 rounded-full border ${varient}`}
    >
    { icon && <Image src={icon} alt={title} width={24} height={24}/>}
    <label className={'font-bold whitespace-nowrap'}>{title}</label>
    </button>
  )
}

export default Button