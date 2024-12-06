import { useState } from 'react'
import { assets } from '../../assets/asset'

function About() {

  return (
    <main className="p-1 m-auto max-w-7xl flex justify-center">
      {/* hero section start */}
      <div className="w-full h-screen bg-contain bg-no-repeat bg-[url('./assets/aboutimages/aboutpageimage.png')]">
        <div className='flex flex-wrap align-middle items-center justify-center sm:gap-16'>
          <div className='w-72 sm:w-72 lg:w-96 sm:mt-10'>
            <p className='text-base font-semibold text-orange-500 p-3'>About us</p>
            <div className='text-lg sm:text-3xl lg:text-6xl font-bold text-white p-2'><p>The Platform For The Next Billion Learners</p></div>
            <div className='text-xs font-bold text-[#B0B6C3] p-3 w-72'><p>Transforming tech education for the next generation of students & employees</p></div>
          </div>
          <div className='pt-10 w-72 sm:w-80 lg:w-[500px] relative bottom-10 sm:top-14'>
            <img src={assets.image23} width={530}/>
          </div>
        </div>
      </div>
      {/* hero section end */}
      <div>
        <div>

        </div>
      </div>
    </main>
  )
}

export default About