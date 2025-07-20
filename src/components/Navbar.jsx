import React from 'react'
import {
  BellRing,
  CircleCheckBig,
  LayoutDashboard,
  LogOut,
  SlidersHorizontal
} from 'lucide-react';

const Navbar = () => {
  return (
    <div className="p-3 w-auto">
      <div className="flex flex-col justify-between bg-white py-3 rounded-3xl shadow-2xl w-70 h-screen">
        
        <div>
          <div className="flex gap-4 ml-5 items-center">
            <p className="px-3 py-1 rounded-full bg-green-400 text-white font-bold text-sm md:text-base lg:text-lg">
              T
            </p>
            <p className="text-base md:text-lg lg:text-xl">Task-Manager</p>
          </div>

          <div className="flex gap-4 items-center py-2 px-7 mt-5 hover:bg-green-100 cursor-pointer">
            <LayoutDashboard className="w-5 h-5 md:w-6 md:h-6" />
            <p className="text-sm md:text-base">Dashboard</p>
          </div>

          <div className="flex gap-4 items-center py-2 px-7 hover:bg-green-100 cursor-pointer">
            <CircleCheckBig className="w-5 h-5 md:w-6 md:h-6" />
            <p className="text-sm md:text-base">My tasks</p>
          </div>

          <div className="flex gap-4 items-center py-2 px-7 hover:bg-green-100 cursor-pointer">
            <BellRing className="w-5 h-5 md:w-6 md:h-6" />
            <p className="text-sm md:text-base">Notifications</p>
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex gap-4 items-center py-2 px-7 hover:bg-green-100 cursor-pointer">
            <SlidersHorizontal className="w-5 h-5 md:w-6 md:h-6" />
            <p className="text-sm md:text-base">Settings</p>
          </div>

          <div className="flex gap-4 items-center py-2 px-7 hover:bg-green-100 cursor-pointer">
            <LogOut className="w-5 h-5 md:w-6 md:h-6" />
            <p className="text-sm md:text-base">Log out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
