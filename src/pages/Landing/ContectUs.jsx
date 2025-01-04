import { useState } from 'react'
import ContectForm from '../../widgets/ContectForm'
import { assets } from '../../assets/asset'

function ContectUs() {

  return (
    <main className="m-auto max-w-7xl relative -z-10">
      <div className=" bg-contain bg-no-repeat flex flex-col items-center align-middle bg-[url('./assets/aboutimages/CurveRect.png')]">
        <div className='text-center font-bold text-[#FDFDFD] text-3xl p-2 pt-7'><p>Contact Our Team</p></div>
        <div className='mt-10'>
          <ContectForm />
        </div>
        <div className='w-full flex justify-center items-center p-10 lg:p-28'>
          <div className='w-auto flex flex-wrap align-middle items-center justify-between'>
            <div className='w-auto sm:w-64 text-center'>
              <div className='w-auto sm:w-64 flex justify-center'><img src={assets.image27} width={50}/></div>
              <div className='text-lg text-[#F98149] font-semibold p-2'><p>Email us</p></div>
              <div className='text-xs font-normal p-3'><p>Email us for general queries, including marketing and partnership opportunities.</p></div>
              <div className='text-xs font-semibold text-[#003F7D]'><p>micro75@gmail.com</p></div>
            </div>
            <div className='w-auto sm:w-64 text-center'>
              <div className='w-auto sm:w-64 flex justify-center'><img src={assets.image28} width={50} /></div>
              <div className='text-lg text-[#F98149] font-semibold p-2'><p>Call us</p></div>
              <div className='text-xs font-normal p-3'><p>Call us to speak to a member of our team. We are always happy to help.</p></div>
              <div className='text-xs font-semibold text-[#003F7D]'><p>+91 9128102151</p></div>
            </div>
            
          </div>

        </div>
      </div>
    </main>
  )
}

export default ContectUs