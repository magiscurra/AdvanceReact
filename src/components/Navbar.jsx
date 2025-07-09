import React from 'react'
import { BellRing, CircleCheckBig, LayoutDashboard, LogOut, SlidersHorizontal } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='p-3 '>
      <div className="flex flex-col justify-start bg-white py-3 rounded-3xl shadow-2xl min-w-xs">
        <div className="">
          <div className="flex top-1 gap-4 ml-5 items-center">
            <p className='px-3 py-1 rounded-full bg-green-400'>T</p>
            <p className='text-lg'>Task-Manager</p>
          </div>
          <div className="flex gap-4 items-center py-2 px-7 shadow-2xs mt-5 hover:bg-green-100 cursor-pointer">
              <LayoutDashboard />
              <p>Dashboard</p>
          </div>
          <div className="flex gap-4 items-center py-2 px-7 shadow-2xs hover:bg-green-100 cursor-pointer">
              <CircleCheckBig />
              <p>My tasks</p>
          </div>
          <div className="flex gap-4 items-center py-2 px-7 shadow-2xs hover:bg-green-100 cursor-pointer">
              <BellRing />
              <p>Notiications</p>
          </div>
        </div>
        <div className="bottom-1 mt-86">
          <div className="flex gap-4 items-center py-2 px-7 hover:bg-green-100 cursor-pointer">
              <SlidersHorizontal />
              <p>Settings</p>
          </div>
          <div className="flex gap-4 items-center py-2 px-7 hover:bg-green-100 cursor-pointer">
              <LogOut />
              <p>Log out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
