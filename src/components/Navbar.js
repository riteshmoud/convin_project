import { logDOM } from '@testing-library/react'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Navbar = () => {
    const style = ({isActive}) => {

        return {
            color: isActive ? 'yellow' : 'white'
        }
    }

  return (
    <div className='w-full'>
        <div className='flex justify-center p-4 text-xl bg-[#3C2A21] text-black'>
            <NavLink to='/dashboard' style={style} className='ml-6 mr-6'>Dashboard</NavLink>
            <NavLink to='/create_card' style={style} className='ml-6 mr-6'>Create</NavLink>
            <NavLink to='/history' style={style} className='ml-6 mr-6'>History</NavLink>
        </div>
        <Outlet/>
    </div>
  )
}
