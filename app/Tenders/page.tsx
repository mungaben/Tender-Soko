




import React from 'react'
import TendersMain from './components/TendersMain'
import TendersCard from './components/TendersCard'

const page = () => {
  return (
    <div className=' w-full flex-col flex justify-center  items-center'>
      <TendersMain/>
      <TendersCard/>
    </div>
  )
}

export default page
