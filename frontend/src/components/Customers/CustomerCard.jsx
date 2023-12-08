import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { BiHomeAlt } from "react-icons/bi";
import { TbProgress } from "react-icons/tb";
import { MdCalendarMonth } from "react-icons/md";
import { Link } from 'react-router-dom';


const CustomerCard = (props) => {
    const { name, color, project, flat } = props;
    return (
        <>
            <div className='flex flex-col transition-all p-4 border w-[32%] shadow-lg rounded-xl'>
                <div className='flex items-center p-2 justify-between w-full '>
                    <div className='flex items-center gap-2'>
                        <span className={`${color} px-3 text-white py-1 rounded-full`}>{name.charAt(0)}</span>
                        <div className='flex flex-col ml-2'>
                            <span className='text-gray-800 font-semibold'>{name}</span>
                        </div>
                    </div>

                    <div className="flex">
                        <BsThreeDotsVertical className='border rounded-full p-2 hover:text-white hover:bg-black cursor-pointer text-3xl' />
                    </div>
                </div>

                <div className='px-3 py-5 flex items-center justify-between'>
                    <div className='flex items-center gap-2 w-full'>
                        <TbBuildingSkyscraper className='border text-3xl p-1 rounded' />
                        <h1 className='text-black text-xs font-semibold'>Project Name: <span className=' block text- font-light'>{project}</span></h1>
                    </div>
                    <div className='flex items-center gap-2 w-full'>
                        <BiHomeAlt className='border text-3xl p-1 rounded' />
                        <h1 className='text-black text-xs font-semibold'>Flat No.  <span className='block font-light'>{flat}</span></h1>
                    </div>
                </div>
                <div className='px-3  flex items-center justify-between'>
                    <div className='flex items-center gap-2 w-full'>
                        <MdCalendarMonth className='border text-3xl p-1 rounded' />
                        <h1 className='text-black text-xs font-semibold'>Start Date: <span className=' block text- font-light'>02 Aug, 2023</span></h1>
                    </div>
                    <div className='flex items-center gap-2 w-full'>
                        <TbProgress className='border text-3xl p-1 rounded' />
                        <h1 className='text-black text-xs font-semibold'>Status: <span className='block font-light'>Home Loan - SBI</span></h1>
                    </div>
                </div>
                <div className="flex px-3 py-4 items-center justify-between">
                    <div className="flex text-xs gap-1">
                        <span>Tags: </span>
                        <span className='bg-green-200 text-green-800 px-3 rounded'>Registered</span>
                        <span className='bg-yellow-200 text-yellow-800 px-3 rounded'>2nd releases</span>
                    </div>
                    <Link to={`/projects/${project}/${flat}`}>
                        <button className="bg-gray-800 hover:scale-110 transition-all text-white px-3 text-xs py-1 rounded-lg shadow">View </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CustomerCard