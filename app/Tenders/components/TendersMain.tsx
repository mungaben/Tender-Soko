




import React from 'react'
import TendersDescription from './TendersDescription'

const TendersMain = () => {
  return (
    <div>
        <div className=' flex overflow-hidden'>
        <h1 className=' h-4 w-full fixed  mb-10 z-50'>
        Latest Government Tenders
        </h1>
        <div className=' mt-10 ' >
        <TendersDescription/>
        </div>
           
        </div>
      
    </div>
  )
}

export default TendersMain
