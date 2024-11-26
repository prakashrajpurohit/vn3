import Image from 'next/image'
import React from 'react'
import group80 from "../../../../public/Group 80.png";


export default function page() {
  return (
    <div className='text-[#ffffff] mb-[50px] max-w-full mx-auto sm:h-[645px] background-img h-[700px] bg-[#3E3E3E] font-handel flex-col justify-center items-center ' >
              
              <h1 className="font-bold lg:text-[52px] text-[44px] tracking-[12px] py-[70px] uppercase  font-handel text-center">
      ScaleEdge 
            </h1>

            <Image
              src={group80}
              alt="Logo"
              className="mx-auto pb-[80px]"/>

            <p className="tracking-[4px] pt-[20px] lg:text-[26px] text-[22px] uppercase font-handel text-center" data-aos="slide-up">
            The Edge You Need to Scale Beyond Limits
            </p>

    </div>
  )
}
