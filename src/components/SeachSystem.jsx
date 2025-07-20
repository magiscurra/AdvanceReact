import { Github, Mail, Plus } from 'lucide-react'
import React from 'react'

const SeachSystem = () => {
  return (
    <div className='p-3'>
      <div className="flex justify-between  gap-234 rounded-2xl bg-white shadow-2xl p-3 items-center">
        <div className="">
            <input className='bg-gray-200 px-5 py-1 rounded-lg' type="search" name="Search" id="Search" placeholder='Search' />
        </div>
        <div className="flex justify-between gap-5 items-center">
            <div className="">
                <p className='flex gap-1 w-30 justify-center rounded-3xl bg-green-400 py-2'><Plus/>new task</p>
            </div>
            <div className="">
                <Mail/>
            </div>
            <div className="border p-1 border-transparent rounded-3xl bg-green-600">
                <Github className="p-1 text-white"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SeachSystem
