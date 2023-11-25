import React from 'react';
import { FaChevronRight } from "react-icons/fa6";
import { TbBrandGithubCopilot } from "react-icons/tb";
import { MdSpaceDashboard } from "react-icons/md";
import { IoFolderOpen } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { TbSettings } from "react-icons/tb";
import { BiHelpCircle } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { FaMoneyBillWave } from "react-icons/fa";
import { PiTarget } from "react-icons/pi";
import { MdOutlineContentPasteGo } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";


const Sidebar = () => {
  return (
    <div className='w-full h-[100vh] bg-gray-100 flex flex-col items-center justify-between border-r border-gray-200'>
      <div className='flex w-[90%] items-center justify-center p-5 gap-2 border-b-2 border-dashed '>
        <TbBrandGithubCopilot className='text-4xl p-2 bg-red-400 border border-red-600 rounded-full ' />
        <h1 className='text-2xl font-bold text-center'>Bankai</h1>
      </div>
      <div className='w-full h-[60%] p-4'>
        <p className='text-xs font-bold text-gray-500 tracking-wider pl-3'>DASHBOARD</p>
        <ul className='flex flex-col'>
          <li className='text-md font-light flex items-center px-4 my-2 rounded-lg py-1 hover:scale-105 transition-all cursor-pointer bg-black text-white '> <MdSpaceDashboard className='text-white mr-2 text-xl' /> Overview</li>
          <li className='text-sm font-light flex items-center px-4 my-1 rounded-lg py-1 hover:bg-gray-200 hover:scale-105 cursor-pointer transition-all'> <IoFolderOpen className='text-gray-500 mr-2 text-lg' /> Projects</li>
          <li className='text-sm font-light flex items-center px-4 my-1 rounded-lg py-1 hover:bg-gray-200 hover:scale-105 cursor-pointer transition-all'> <MdPeopleAlt className='text-gray-500 mr-2 text-lg' /> Customers</li>
          <li className='text-sm font-light flex items-center px-4 my-1 rounded-lg py-1 hover:bg-gray-200 hover:scale-105 cursor-pointer transition-all'> <SlGraph className='text-gray-500 mr-2 text-lg' /> Activities</li>
          <li className='text-sm font-light flex items-center px-4 my-1 rounded-lg py-1 hover:bg-gray-200 hover:scale-105 cursor-pointer transition-all'> <FaMoneyBillWave className='text-gray-500 mr-2 text-lg' /> Accounts</li>
        </ul>
      </div>
      <hr className='w-[80%] ' />
      <div className='w-full h-[60%] p-4'>
        <p className='text-xs font-bold text-gray-500 tracking-wider pl-3'>SECOND</p>
        <ul className='flex flex-col'>
         <li className='text-sm font-light flex items-center px-4 my-1 rounded-lg py-1 hover:bg-gray-200 hover:scale-105 cursor-pointer transition-all'> <PiTarget className='text-gray-500 mr-3 text-2xl border rounded-md p-0.5 border-gray-300' /> Task List</li>
          <li className='text-sm font-light flex items-center px-4 my-1 rounded-lg py-1 hover:bg-gray-200 hover:scale-105 cursor-pointer transition-all'> <MdOutlineContentPasteGo className='text-gray-500 mr-3 text-2xl border rounded-md p-0.5 border-gray-300' /> Approvals</li>
          <li className='text-sm font-light flex items-center px-4 my-1 rounded-lg py-1 hover:bg-gray-200 hover:scale-105 cursor-pointer transition-all'> <HiOutlineDocumentReport className='text-gray-500 mr-3 text-2xl border rounded-md p-0.5 border-gray-300' /> Reports</li>
        </ul>
      </div>
      <div className='flex w-[90%]'>
        <button className='text-sm m-2 w-full flex items-center justify-center hover:scale-105 hover:bg-gray-800 transition-all hover:text-white gap-2 bg-white border text-black px-2 py-1 rounded-lg shadow-xl'><TbSettings /> Settings</button>
        <button className='text-sm m-2 w-full flex items-center justify-center hover:scale-105 hover:bg-gray-800 transition-all hover:text-white gap-2 bg-white border text-black px-2 py-1 rounded-lg shadow-xl'><BiHelpCircle /> Help</button>
      </div>

      <div className='p-5 border-t'>
        <div className="flex bg-white p-3  items-center rounded-xl shadow-2xl hover:scale-105 cursor-pointer transition-all">
          <div className="w-full">
            {/* <img className='rounded-full' src="https://images.unsplash.com/photo-1552962599-a09af85f2555?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
            <span className='px-4 py-1 bg-orange-400 rounded-full '></span>
          </div>
          <div className=" px-2 flex items-start justify-center  flex-col">
            <h1 className='text-[14px] font-semibold'>Naruto Uzumaki</h1>
            <p className='text-[10px]'>narutouzumaki@gmail.com</p>
          </div>
          <FaChevronRight className='mx-2 w-full text-right ' />
        </div>
      </div>
    </div>
  )
}

export default Sidebar