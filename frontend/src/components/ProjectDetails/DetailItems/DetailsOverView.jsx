import React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import { TbBulldozer } from "react-icons/tb";


const DetailsOverView = () => {
  return (
    <>
      <div className="flex flex-col w-full p-8">
        <div className="flex gap-4 w-full">

          <div className="flex flex-col border hover:bg-gray-900/90 hover:scale-105 hover:text-white transition-all gap-2 justify-center cursor-pointer shadow-lg rounded-2xl px-8 py-6 w-1/3">
            <h1 className='font-semibold text-sm'>Total Number of Flats</h1>
            <div className="flex items-center gap-2">
              <h1 className='font-bold text-xl'>2,625</h1>
              <span className='bg-green-200 px-2 py-1 rounded-xl text-green-800 font-semibold flex items-center text-xs gap-1'>+2.3%</span>
            </div>
          </div>
          <div className="flex flex-col border gap-2 hover:bg-gray-900/90 hover:scale-105 hover:text-white transition-all justify-center cursor-pointer shadow-lg rounded-2xl px-8 py-6 w-1/3">
            <h1 className='font-semibold text-sm'>Number of Blocks & Floors</h1>
            <div className="flex items-center gap-2">
              <h1 className='font-bold text-xl'>12 * 9</h1>
              <span className='bg-green-200 px-2 py-1 rounded-xl text-green-800 font-semibold flex items-center text-xs gap-1'>+2.3%</span>
            </div>
          </div>
          <div className="flex flex-col border gap-2 hover:bg-gray-900/90 hover:scale-105 hover:text-white transition-all justify-center cursor-pointer shadow-lg rounded-2xl px-8 py-6 w-1/3">
            <h1 className='font-semibold text-sm'>Occupied / Sold Flats</h1>
            <div className="flex items-center gap-2">
              <h1 className='font-bold text-xl'>486</h1>
              <span className='bg-green-200 px-2 py-1 rounded-xl text-green-800 font-semibold flex items-center text-xs gap-1'>+2.3%</span>
            </div>
          </div>
          <div className="flex flex-col justify-between hover:bg-gray-900/90 hover:scale-105 hover:text-white transition-all border gap-2 cursor-pointer shadow-lg rounded-2xl px-8 py-6 w-9/12">
            <h1 className='font-semibold text-sm'>Completed / Total Flats</h1>
            <h1 className='font-semibold text-sm'>36%</h1>
            <div className="border w-full py-1 rounded-full">
              <div className="bg-green-600 w-[35%] h-full rounded-full py-1 mx-1"></div>
            </div>
          </div>
        </div>



        <div className="flex flex-col px-4 py-8 gap-3">
          <h1 className="font-bold text-md flex items-center gap-2">
            <MdOutlineLocationOn className="border rounded text-2xl p-1" />
            Location: <span className="font-light">Islamabad</span>
          </h1>
          <h1 className="font-bold text-md flex items-center gap-2">
            <MdCalendarMonth className="border rounded text-2xl p-1" />
            Start Date: <span className="font-light">15-06-2021</span>
          </h1>
          <h1 className="font-bold text-md flex items-center gap-2">
            <TbBulldozer className="border rounded text-2xl p-1" />
            Current Status:{" "}
            <span className="font-light">Under Construction</span>
          </h1>
          <h1 className="font-bold text-md flex items-center gap-2">
            <MdCalendarMonth className="border rounded text-2xl p-1" />
            Really Nigga: <span className="font-light">Cheese Ma🕸️</span>
          </h1>
        </div>
      </div>
    </>
  )
}

export default DetailsOverView