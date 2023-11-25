import React from 'react';
import { FaChevronRight } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className='w-full h-[100vh] bg-gray-200 flex flex-col items-center justify-between'>
      <div>
        <h1 className='text-3xl font-bold text-center'>Logo</h1>
      </div>
      <div className='mt-10'>
        <ul className='flex flex-col'>
          <li className='text-xl font-bold'>Dashboard</li>
          <li className='text-xl font-bold'>Dashboard</li>
          <li className='text-xl font-bold'>Dashboard</li>
          <li className='text-xl font-bold'>Dashboard</li>
        </ul>
        </div>

        <div className='w-full p-5'>
          <div className="flex bg-white p-3  items-center rounded-2xl shadow-2xl hover:scale-105 cursor-pointer transition-all">
            <img className='w-10 h-10 rounded-full'  src="https://images.unsplash.com/photo-1552962599-a09af85f2555?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className=" px-2 flex items-start justify-center flex-col">
              <h1 className='text-[14px] font-semibold'>Naruto Uzumaki</h1>
              <p className='text-[10px]'>narutouzumaki@gmail.com</p>
            </div>
            <FaChevronRight className='mx-2 hover:translate-x-2 transition-all'/>
          </div>
        </div>
    </div>
  )
}

export default Sidebar