





import React from 'react'
import PackageCard from './component/PackageCard'
import CardSubscriptionDesc from './component/CardSubscriptionDesc'
import TestMonials from './component/TestMonialsComp/TestMonialsSlider'
import TestMonyMainCard from './component/TestMonialsComp/TestMonyMainCard'



const page = () => {
  return (
    <div className=' mb-4'>

      <div className=' mb-10'>
        <CardSubscriptionDesc />
      </div>

      <div className=' mb-10'>
        <PackageCard />
      </div>
      <div>
        {/* <TestMonyMainCard/> */}
      </div>

    </div>
  )
}

export default page