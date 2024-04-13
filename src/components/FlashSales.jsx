import React from 'react'
import rightArrowBlack from '../assets/rightArrowBlack.png'
import leftArrowBlack from '../assets/leftArrowBlack.png'
const FlashSales = () => {
  return (
    <div className='w-full mt-16'>
      <div className='max-w-screen-xl'>
        {/* top header  */}
        <header className='flex items-center gap-[16px]'>
            <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-md'></div>
            <p className='text-[#DB4444] font-poppins font-semibold text-[16px]'>Today's</p>
        </header>
        {/* mini header  */}
        <header className='flex items-end '>
            {/* heading  */}
            <p className='font-inter text-[36px] font-semibold leading-7'>Flash Sales</p>
            {/* timer */}
            <div className='flex items-center w-[302px] justify-between ml-[10rem]'>
                <div className='leading-7'>
                    <p className='text-[12px] font-medium font-poppins'>Days</p>
                    <p className='text-[32px] font-inter font-bold'>03</p>
                </div>
                <p className='text-[#DB4444] font-bold text-[1.3rem]'>:</p>
                <div className='leading-7'>
                    <p className='text-[12px] font-medium font-poppins'>Hours</p>
                    <p className='text-[32px] font-inter font-bold'>23</p>
                </div>
                <p className='text-[#DB4444] font-bold text-[1.3rem]'>:</p>
                <div className='leading-7'>
                    <p className='text-[12px] font-medium font-poppins'>Minutes</p>
                    <p className='text-[32px] font-inter font-bold'>19</p>
                </div>
                <p className='text-[#DB4444] font-bold text-[1.3rem]'>:</p>
                <div className='leading-7'>
                    <p className='text-[12px] font-medium font-poppins'>Seconds</p>
                    <p className='text-[32px] font-inter font-bold'>56</p>
                </div>
            </div>
        </header>
      </div>
    </div>
  )
}

export default FlashSales
