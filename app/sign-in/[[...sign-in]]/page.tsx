






import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className=' w-full justify-center items-center mx-auto'>
        <SignIn />
    </div>
  )
}

export default page