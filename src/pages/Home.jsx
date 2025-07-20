import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SeachSystem from '../components/SeachSystem'
import MiniCalendar from '../components/MiniCalendar'



const Home = () => {
  const [value, setValue] = useState(new Date())
  const Data = [
    {
      id: 1,
      title: "some task 1",
      day:"Today"
    },
    {
      id: 2,
      title: "some task 2",
      day:"Today"
    },
    {
      id: 3,
      title: "some task 3",
      day:"Today"
    },
    {
      id: 4,
      title: "some task 4",
      day:"Today"
    },
    {
      id: 5,
      title: "some task 5",
      day:"Today"
    },
  ]

const Product = ({title,day}) => {
  return(
    <div className="flex justify-between ">
      <div className="flex gap-2">
        <input  type="checkbox"/>
        <p>{title}</p>
      </div>
      <div className="">
        <p>{day}</p>
      </div>
    </div>
  )
}

  return (
    <div className=''>
        <div className="flex  ">
          <Navbar/>
          <div className="flex-col">
            <SeachSystem/>
            <div className="grid grid-cols-3 p-3 gap-5">
              <div className=""> {/*calendar*/}
                <MiniCalendar/>
              </div> 
              <div className="p-4 bg-white rounded-2xl">  {/*my tasks*/}
                <div className="flex flex-col justify-center ">
                  <div className="flex mb-2">
                    <p className='text-lg font-semibold'>My Tasks</p>
                  </div>
                  <div className="grid md:grid-cols-1 sm:grid-cols-1 gap-5">
                    {Data.map((items,index) => (
                      <Product key={items.id} title={items.title} day={items.day}/>
                    ))}
                  </div>
                </div>
              </div>
              {/* new comments */}
              <div className="">

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
