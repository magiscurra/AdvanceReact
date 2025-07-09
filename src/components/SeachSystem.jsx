import { Github, Mail, Plus } from 'lucide-react'
import React from 'react'

const SeachSystem = () => {
  return (
    <div className='p-3'>
      <div className="flex justify-between min-w-[990px] rounded-2xl bg-white shadow-2xl p-3 items-center">
        <div className="">
            <input className='bg-gray-200 px-5 py-1 rounded-lg' type="search" name="Search" id="Search" placeholder='Search' />
        </div>
        <div className="flex justify-between gap-5 items-center">
            <div className="">
                <p className='flex gap-1 px-4 rounded-3xl bg-green-400 py-2'><Plus/>new task</p>
            </div>
            <div className="">
                <Mail/>
            </div>
            <div className="">
                <Github className="border p-1 rounded-2xl bg-green-600 text-white"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SeachSystem
