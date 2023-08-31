


import Image from 'next/image'
import React from 'react'

const LogoImage = () => {
  return (
    <div className='  h-16 w-20 flex justify-center items-center mx-4  '>
      <Image
      src={'/Shulemax2.png'}
        alt="Picture of the author"
        width={300}
        height={300}
       priority
       className='  rounded-lg   object-contain bg-blue-700 '
       
      />
    </div>
  )
}

export default LogoImage
