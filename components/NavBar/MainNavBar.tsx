




import React from 'react'
import Search from './Search'
import LogoImage from './LogoImage'
import TrialMenuBar from './TrialMenuBar'
import TenderDrop from './TenderDrop'
import SubscribeNav from './SubscribeNav'
import NavUser from './NavUser'

const MainNavBar = () => {
    return (
        <div className=' w-full fixed top-0 mb-5 '>
            <div className=' flex flex-row  justify-between  mx-4  '>
                {/* logo */}
                <div className='flex justify-center items-center '>
                    <LogoImage />
                    <h1 className='text-2xl text-white font-bold'>Tender Legit</h1>
                </div>
                <div className=' flex justify-center items-center'>
                    <Search />
                </div>
                <div className=' flex justify-center items-center'>
                    <TenderDrop />
                </div>
                <div className=' flex justify-center items-center'>
                    <SubscribeNav />
                </div>


                <div className=' flex justify-center items-center'>
                    <NavUser />
                </div>








            </div>


        </div>
    )
}

export default MainNavBar
