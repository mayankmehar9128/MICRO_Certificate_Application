import { useState } from 'react'
import ContectForm from '../../widgets/ContectForm'

function ContectUs() {

  return (
    <main className="p-5 m-auto max-w-7xl">
      <div className="h-svh bg-cover flex justify-center flex-col items-center align-middle bg-[url('./assets/aboutimages/CurveRect.png')]">
        <div className='text-center font-bold text-[#FDFDFD] text-3xl p-2'><p>Contact Our Team</p></div>
        <div className='mt-10'>
          <ContectForm />
        </div>
      </div>
    </main>
  )
}

export default ContectUs