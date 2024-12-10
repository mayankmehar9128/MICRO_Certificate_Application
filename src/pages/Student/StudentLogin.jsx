import { useState } from 'react'
import { assets } from '../../assets/asset'
import StudentLoginForm from '../../widgets/StudentLoginForm'

function StudentLogin() {

  return (
    <main className="p-5 m-auto max-w-7xl flex justify-center">
      <div className='flex align-middle items-center justify-center gap-28'>
        <div className=''>
          <StudentLoginForm />
        </div>
        <div className='hidden sm:block'>
          <img src={assets.image30} width={470}/>
        </div>
      </div>
    </main>
  )
}

export default StudentLogin