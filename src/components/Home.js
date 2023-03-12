import React from 'react'
import { Outlet } from 'react-router-dom'
import { Banner } from './Banner'
import SampleCard from './SampleCard'

const Home = () => {
    return(
            <div className='min-h-screen flex flex-col lg:flex-row justify-between items-stretch bg-[#3C2A21] text-[#D5CEA3]'>
                <div className="left flex flex-col justify-center items-center text-center lg:w-1/2">
                    <Banner/>
                </div>
                <div className="right flex justify-center items-center lg:w-1/2 bg-[#1A120B]">
                    <SampleCard/>
                </div>
                <Outlet/>
            </div>
    )
}

export default Home
