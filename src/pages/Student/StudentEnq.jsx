import { useState } from 'react'
import { assets } from '../../assets/asset'
import StudentEngForm from '../../widgets/StudentEngForm'

function StudentEnq() {

  return (
    <main className="m-auto max-w-7xl">
      <div className=" bg-contain bg-no-repeat flex flex-col items-center align-middle bg-[url('./assets/aboutimages/CurveRect.png')]">
        <div className='text-center font-bold text-[#FDFDFD] text-3xl p-2 pt-7'><p>Share Details</p></div>
        <div className='m-10'>
          <StudentEngForm />
        </div>
      </div>
    </main>
  )
}

export default StudentEnq