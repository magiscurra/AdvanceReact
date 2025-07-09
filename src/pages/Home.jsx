import React from 'react'
import Navbar from '../components/Navbar'
import SeachSystem from '../components/SeachSystem'

const Home = () => {
  return (
    <div className='min-h-screen bg-gray-200'>
        <div className="flex ">
          <Navbar/>
          <div className="flex-col">
            <SeachSystem/>
            <div className="grid grid-cols-3">
              <div className=""> {/*calendar*/}
                <Calendar/>
              </div> 
              <div className="">  {/*my tasks*/}

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
