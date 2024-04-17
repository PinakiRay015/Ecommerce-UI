import React from 'react'
import BestItems from './BestItems'
const BestSellings = () => {
  return (
    <div className='w-full mt-16'>
              <div className='max-w-screen-xl border-b pb-14'>
        {/* top header  */}
        <header className='flex items-center gap-[16px]'>
            <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-lg'></div>
            <p className='text-[#DB4444] font-poppins font-semibold text-[16px]'>Today's</p>
        </header>
        {/* mini header  */}
        <header className='flex items-end justify-between'>
            {/* heading  */}
            <p className='font-inter sm:text-[36px] text-[16px] font-semibold leading-7'>Flash Sales</p>
            {/* timer */}
            <div className='flex items-center sm:w-[302px] justify-between sm:gap-0 gap-2 sm:ml-[10rem]'>
                <div className='leading-7'>
                    <p className='sm:text-[12px] text-[10px] font-medium font-poppins'>Days</p>
                    <p className='sm:text-[32px] text-[15px] font-inter font-bold'>03</p>
                </div>
                <p className='text-[#DB4444] font-bold text-[1.3rem]'>:</p>
                <div className='leading-7'>
                    <p className='sm:text-[12px] text-[10px] font-medium font-poppins'>Hours</p>
                    <p className='sm:text-[32px] text-[15px] font-inter font-bold'>23</p>
                </div>
                <p className='text-[#DB4444] font-bold text-[1.3rem]'>:</p>
                <div className='leading-7'>
                    <p className='sm:text-[12px] text-[10px] font-medium font-poppins'>Minutes</p>
                    <p className='sm:text-[32px] text-[15px] font-inter font-bold'>19</p>
                </div>
                <p className='text-[#DB4444] font-bold text-[1.3rem]'>:</p>
                <div className='leading-7'>
                    <p className='sm:text-[12px] text-[10px] font-medium font-poppins'>Seconds</p>
                    <p className='sm:text-[32px] text-[15px] font-inter font-bold'>56</p>
                </div>
            </div>
        </header>

        {/* sales items section  */}
        <div className='mt-5 px-5'>
            <BestItems/>
        </div>

      <div className='flex justify-center'>
        <button className='bg-[#DB4444] px-[48px] py-[16px] font-medium font-poppins text-[16px] text-white rounded mt-20'>View All Products</button>
      </div>
      </div>
    </div>
  )
}

export default BestSellings