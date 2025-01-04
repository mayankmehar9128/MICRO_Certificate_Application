import { useState } from 'react'
import { assets } from '../../assets/asset'
import FrenchiseApplyForm from '../../widgets/FrenchiseApplyForm'

function FrenchiseReg() {

  return (
    <main className="m-auto max-w-7xl">
      <div className="relative -z-10 bg-contain bg-no-repeat flex flex-col items-center align-middle bg-[url('./assets/aboutimages/CurveRect.png')]">
        <div className='text-center font-bold text-[#FDFDFD] text-3xl p-2 pt-7'><p>Franchise Application Form</p></div>
        <div className='p-3'>
          <FrenchiseApplyForm />
        </div>
      </div>
    </main>
  )
}

export default FrenchiseReg