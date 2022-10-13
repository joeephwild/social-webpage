import Image from 'next/image'
import React from 'react'
import cover from '../public/images/cover.jpg'
import profile from '../public/images/profileImg.jpg'

const SideBar = () => {
  return (
    <div className='hidden  md:block col-span-2  '>
      {/* top section */}
      <div className='mx-1.5 rounded-xl cursor-pointer dark:bg-gray-900 border-2 dark:border-none'>
      <div className='bg-white rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none '>
            <div className='relative w-full  h-20'>
            <Image src={cover}  layout="fill" alt=''/>
            </div>
            <div  className='!h-14 !w-14   !absolute !-bottom-0  !border-2 !rounded-full !z-10 cursor-pointer ' >
            <Image src={profile} layout='intrinsic' className='rounded-full' />
            </div>
        </div>
        {/* Profile details */}
        <div className='flex flex-col mb-3 items-center space-y-4 my-3 px-4 text-center'>
            <span className='text-lg text-black dark:text-white font-semibold leading-3 -tracking-wider'>Sarah Williamson</span>
            <span className='text-sm text-gray-500 dark:text-white font-semibold leading-3 -tracking-wider'>@sarahwill</span>
            <span className='text-lg text-black dark:text-white font-semibold leading-3 -tracking-wider'>✨Beauty Lies in the inside✨</span>
            </div>
            {/* followers Sectionn */}
            <div className='flex space-x-5 my-4 border-y-2 dark:border-gray-500 justify-center text-center items-center'>
            <div className='flex flex-col px-3 border-r-2 dark:border-gray-500 items-center space-y-1.5'>
                <span className='text-black font-semibold dark:text-white'>6,664</span>
                <span className='text-gray-500 text-sm'>Following</span>
              </div>
              <div className='flex flex-col    items-center space-y-1.5'>
                <span className='text-black font-semibold dark:text-white'>6,664</span>
                <span className='text-gray-500 text-sm'>Following</span>
              </div>
            </div>
            <span className='text-blue-500 text-sm leading-3 hover:underline text-center flex justify-center pb-3'>My Profile</span>
      </div>
        
    </div>
  )
}

export default SideBar