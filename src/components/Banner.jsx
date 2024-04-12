import React from 'react'
import iphone1 from '../assets/iphone1.png'
import appleLogo from '../assets/appleLogo.png'
import rightArrowWhite from '../assets/rightArrowWhite.png'
const Banner = () => {
  return (
    <div className='w-[892px] h-[344px] bg-black flex justify-between mt-10'>
        <div className='ml-[64px] mt-[58px]'>
            <div className='flex items-center gap-[24px]'>
                <img src={appleLogo} alt="" />
                <p className='font-poppins text-white font-extralight text-[16px]'>iPhone 14 Series</p>
            </div>
            <div className='mt-5'>
                <p className='font-inter font-semibold text-[48px] text-white leading-[60px]'>Up to 10% off Voucher</p>
            </div>
            <div className='flex gap-1 mt-5'>
                <button className='text-white font-poppins font-medium text-[16px] border-b'>Shop Now</button>
                <img src={rightArrowWhite} alt="" />
            </div>
        </div>
      <img src={iphone1} alt="" />
    </div>
  )
}

export default Banner
