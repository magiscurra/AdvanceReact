import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SeachSystem from '../components/SeachSystem'
import MiniCalendar from '../components/MiniCalendar'



const Home = () => {
  const [value, setValue] = useState(new Date())
  const Data = [
    {
      id: 1,
      title: "some task 1"
    },
    {
      id: 2,
      title: "some task 2"
    },
    {
      id: 3,
      title: "some task 3"
    },
    {
      id: 4,
      title: "some task 4"
    },
    {
      id: 5,
      title: "some task 5"
    },
  ]

const Product = () => {
  return(
    <div className="">
      <input type="checkbox" name="" id="" />
    </div>
  )
}

  return (
    <div className=''>
        <div className="flex  ">
          <Navbar/>
          <div className="flex-col">
            <SeachSystem/>
            <div className="grid grid-cols-3 p-3">
              <div className=""> {/*calendar*/}
                <MiniCalendar/>
              </div> 
              <div className="">  {/*my tasks*/}
                <div className="">
                  <div className="">
                    <p>My Tasks</p>
                  </div>
                  <div className="grid md:grid-cols-1 sm:grid-cols-1 gap-2">
                    {Data.map((Data,index) => {
                      <Product/>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
