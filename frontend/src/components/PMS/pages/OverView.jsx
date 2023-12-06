import React from 'react';
import { Link, useParams } from 'react-router-dom';
import StatusBadge from 'src/utils/utilcomp/StatusBadge';
import { MdOutlineLocationOn, MdCalendarMonth, MdBiotech } from 'react-icons/md';
import { LuFiles, LuForklift } from "react-icons/lu";
import { TbBulldozer } from "react-icons/tb";
import sh from '../../../assets/project.png';
import { IoSnowOutline } from "react-icons/io5";

const OverView = (props) => {
  const { projectId } = useParams();
  return (
    <>
      <div className='p-8 w-full flex flex-col items-center justify-center'>
        <div className='flex items-center w-full justify-between'>
          <h1 className='text-gray-500 tracking-wide font-semibold'> <Link to="/projects">  Projects / </Link><span className="text-2xl font-semibold text-black">{projectId}</span> </h1>
          <StatusBadge text='On Progress' color='green' />
        </div>
        <div className="flex items-center justify-between w-full py-10 px-4">
          <div className='flex gap-10'>
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-md flex items-center gap-2'><MdOutlineLocationOn className='border rounded text-2xl p-1' />Location: <span className='font-light'>Islamabad</span></h1>
              <h1 className='font-bold text-md flex items-center gap-2'><MdCalendarMonth className='border rounded text-2xl p-1' />Start Date: <span className='font-light'>15-06-2021</span></h1>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-md flex items-center gap-2'><TbBulldozer className='border rounded text-2xl p-1' />Current Status: <span className='font-light'>Under Construction</span></h1>
              <h1 className='font-bold text-md flex items-center gap-2'><MdCalendarMonth className='border rounded text-2xl p-1' />Really Nigga: <span className='font-light'>Cheese Ma🕸️</span></h1>
            </div>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <h1 className='border px-4 py-1 mx-2 rounded-lg bg-gray-50'><span className='font-bold'>RERA ID: </span> 59451315489</h1>
            <button className='flex items-center px-6 py-2 gap-2 bg-black shadow-lg rounded-lg text-white hover:scale-105 transition-all'> <LuFiles />Files</button>
            <button className='flex items-center px-6 py-2 gap-2 bg-black shadow-lg rounded-lg text-white hover:scale-105 transition-all'> <MdBiotech className='text-xl' />View</button>
          </div>
        </div>

        <div className='flex flex-col justify-center gap-6'>
          <div className='flex justify-center gap-6 w-full '>
            <div className='flex border px-8 py-8 items-end justify-between bg-blue-100 cursor-pointer hover:scale-105 transition-all hover:bg-blue-300 rounded-xl  '>
              <h1 className='text-2xl font-semibold w-full'>Project Management <br />System</h1>
              {/* <LuForklift className='text-8xl w-full text-blue-100' /> */}
              <img src={sh} alt="sh" className='w-20' />
            </div>
            <div className='flex border px-8 py-8 items-end justify-between bg-green-100 cursor-pointer hover:scale-105 transition-all hover:bg-green-300 rounded-xl  '>
              <h1 className='text-2xl font-semibold w-full'>Project Management <br />System</h1>
              {/* <LuForklift className='text-8xl w-full text-blue-100' /> */}
              <img src={sh} alt="sh" className='w-20' />
            </div>
            <div className='flex border px-8 py-8 items-end justify-between bg-orange-100 cursor-pointer hover:scale-105 transition-all hover:bg-orange-300 rounded-xl  '>
              <h1 className='text-2xl font-semibold w-full'>Project Management <br />System</h1>
              {/* <LuForklift className='text-8xl w-full text-blue-100' /> */}
              <img src={sh} alt="sh" className='w-20' />
            </div>
          </div>
          <div className='flex justify-center gap-6 w-full '>
            <div className='flex border px-8 py-8 items-end justify-between bg-pink-100 cursor-pointer hover:scale-105 transition-all hover:bg-pink-300 rounded-xl  '>
              <h1 className='text-2xl font-semibold w-full'>Project Management <br />System</h1>
              {/* <LuForklift className='text-8xl w-full text-blue-100' /> */}
              <img src={sh} alt="sh" className='w-20' />
            </div>
            <div className='flex border px-8 py-8 items-end justify-between bg-purple-100 cursor-pointer hover:scale-105 transition-all hover:bg-purple-300 rounded-xl  '>
              <h1 className='text-2xl font-semibold w-full'>Project Management <br />System</h1>
              {/* <LuForklift className='text-8xl w-full text-blue-100' /> */}
              <img src={sh} alt="sh" className='w-20' />
            </div>
            <div className='flex border px-8 py-8 items-end justify-between bg-slate-100 cursor-pointer hover:scale-105 transition-all hover:bg-slate-300 rounded-xl  '>
              <h1 className='text-2xl font-semibold w-full'>Project Management <br />System</h1>
              {/* <LuForklift className='text-8xl w-full text-blue-100' /> */}
              <img src={sh} alt="sh" className='w-20' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OverView