import { useState } from 'react'
import { assets } from '../../assets/asset'
import FrenchiseLoginForm from '../../widgets/StudentLoginForm'

function FrenchiseLogin() {

  return (
    <main className="p-5 m-auto max-w-7xl flex justify-center">
      <div className='flex align-middle items-center justify-center gap-28'>
        <div className=''>
          <FrenchiseLoginForm />
        </div>
        <div className='hidden sm:block'>
          <img src={assets.image29} width={500}/>
        </div>
      </div>
    </main>
  )
}

export default FrenchiseLogin