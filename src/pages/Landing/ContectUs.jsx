import { useState } from 'react'
import ContectForm from '../../widgets/ContectForm'
import { assets } from '../../assets/asset'

function ContectUs() {

  return (
    <main className="m-auto max-w-7xl">
      <div className=" bg-contain bg-no-repeat flex flex-col items-center align-middle bg-[url('./assets/aboutimages/CurveRect.png')]">
        <div className='text-center font-bold text-[#FDFDFD] text-3xl p-2 pt-7'><p>Contact Our Team</p></div>
        <div className='mt-10'>
          <ContectForm />
        </div>
        <div className='mt-24'>
          <div className='w-96 flex align-middle items-center justify-between'>
            <div className='w-32 text-center'>
              <div className='w-32 flex justify-center'><img src={assets.image27} width={50}/></div>
              <div><p>sdfdfsaf</p></div>
              <div><p>sdfdfsaf</p></div>
            </div>
            <div className='w-32 text-center'>
              <div className='w-32 flex justify-center'><img src={assets.image28} width={50} /></div>
              <div><p>sdfdfsaf</p></div>
              <div><p>sdfdfsaf</p></div>
            </div>
            
          </div>

        </div>
      </div>
    </main>
  )
}

export default ContectUs