






import React from 'react'
import TestMonialsSilder from './TestMonialsSlider'
import { test } from 'node:test'
import { Testimony } from '../../lib/Testmonials'
import TestMonialCard from './TestMonialCard'

const TestMonyMainCard = () => {
    return (
        <div>

            <div className=' w-screen '>
                <TestMonialsSilder options={{align:'center'}} >
                    {
                        Testimony.map((testimony,i) => (
                            <div key={i} className=' flex-[0_0_90%] md:flex-[0_0_50%] '>

                                <TestMonialCard {...testimony}/>


                            </div>

                        ))
                    }


                </TestMonialsSilder>

            </div>
        </div>
    )
}

export default TestMonyMainCard