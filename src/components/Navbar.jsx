import React from 'react'
import { BellRing, CircleCheckBig, LayoutDashboard, LogOut, SlidersHorizontal } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='p-3 '>
      <div className="flex flex-col justify-start bg-white p-3 rounded-3xl shadow-2xl max-w-xs">
        <div className="">
          <div className="flex top-1 gap-4 ml-5 items-center">
            <p className='border px-3 py-1 rounded-full bg-green-400'>T</p>
            <p className='text-lg'>Task-Manager</p>
          </div>
          <div className="flex gap-4 items-center py-2 px-7 shadow-2xs mt-5 ">
              <LayoutDashboard />
              <p>Dashboard</p>
          </div>
          <div className="flex gap-4 items-center py-2 px-7 shadow-xs shadow-black ">
              <CircleCheckBig />
              <p>My tasks</p>
          </div>
          <div className="flex gap-4 items-center py-2 px-7 shadow-xs shadow-black ">
              <BellRing />
              <p>Notiications</p>
          </div>
        </div>
        <div className="bottom-1 mt-86">
          <div className="flex gap-4 items-center py-2 px-7 ">
              <SlidersHorizontal />
              <p>Settings</p>
          </div>
          <div className="flex gap-4 items-center py-2 px-7 ">
              <LogOut />
              <p>Log out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
