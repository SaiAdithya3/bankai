import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdOutlineEmail, MdLocalPhone } from "react-icons/md";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { BiHomeAlt } from "react-icons/bi";
import { TbProgress } from "react-icons/tb";
import { MdCalendarMonth } from "react-icons/md";
import { PiAlienDuotone } from "react-icons/pi";
import { VscLocation } from "react-icons/vsc";
import { LiaBrainSolid } from "react-icons/lia";
import { LiaBoneSolid } from "react-icons/lia";



const FlatDetail = () => {
    const { projectId, flatName } = useParams();
    return (
        <>
            <div className="w-full p-8">
                <div className="text-2xl">
                    <h1 className="p-2 text-2xl tracking-wide text-black font-semibold">
                        {" "}
                        <Link to="/projects"> Projects / </Link>
                        <Link to={`/projects/${projectId}`}> {projectId} / </Link>
                        <span className="text-2xl font-semibold text-gray-500">
                            {flatName}
                        </span>{" "}
                    </h1>
                </div>



                <div className="flex w-full m-3 flex-col rounded-xl items-center p-4 border">
                    <h1 className='font-semibold w-full text-left rounded-full px-2 text-md'>Flat Details: </h1>
                    <div className="flex w-full">
                        <div className='flex items-center gap-2 p-4 w-full'>
                            <TbBuildingSkyscraper className='border text-3xl p-1 rounded' />
                            <h1 className='text-black text-xs font-semibold'>Project Name: <span className=' block text- font-light'>{projectId}</span></h1>
                        </div>
                        <div className='flex items-center gap-2 p-4 w-full'>
                            <BiHomeAlt className='border text-3xl p-1 rounded' />
                            <h1 className='text-black text-xs font-semibold'>Flat No.  <span className='block font-light'>{flatName}</span></h1>
                        </div>
                        <div className='flex items-center gap-2 p-4 w-full'>
                            <MdCalendarMonth className='border text-3xl p-1 rounded' />
                            <h1 className='text-black text-xs font-semibold'>Start Date: <span className=' block text- font-light'>02 Aug, 2023</span></h1>
                        </div>
                        <div className='flex items-center gap-2 p-4 w-full'>
                            <TbProgress className='border text-3xl p-1 rounded' />
                            <h1 className='text-black text-xs font-semibold'>Status: <span className='block font-light'>Home Loan - SBI</span></h1>
                        </div>
                        <div className='flex items-center gap-2 p-4 w-full'>
                            <TbBuildingSkyscraper className='border text-3xl p-1 rounded' />
                            <h1 className='text-black text-xs font-semibold'>Project Name: <span className=' block text- font-light'>{projectId}</span></h1>
                        </div>
                        <div className='flex items-center gap-2 p-4  w-full'>
                            <TbBuildingSkyscraper className='border text-3xl p-1 rounded' />
                            <h1 className='text-black text-xs font-semibold'>Project Name: <span className=' block text- font-light'>{projectId}</span></h1>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col w-full m-3 rounded-xl items-center p-4 border">
                    <h1 className='font-semibold text-left w-full rounded-full px-2 text-md'>Customer Details: </h1>
                    <div className="flex flex-col w-full items-start justify center">
                        <div className='flex items-start p-4 justify-between w-full '>
                            <div className='flex items-center gap-2'>
                                <span className={`bg-teal-400 px-2.5 text-white py-1 rounded-full`}>A</span>
                                <div className='flex flex-col ml-2'>
                                    <span className='text-gray-800 font-semibold'>Bhupendar Jogi</span>
                                </div>
                            </div>
                        </div>

                        <div className='px-4 py-2 w-full flex items-center justify-between'>
                            
                            <div className='flex items-center gap-3 w-full'>
                                <MdLocalPhone className='border text-3xl p-1 rounded' />
                                <h1 className='text-black text-xs font-semibold'>Phone Number <span className=' block text- font-light'>1210842</span></h1>
                            </div>
                            <div className='flex items-center gap-3 w-full'>
                                <PiAlienDuotone className='border text-3xl p-1 rounded' />
                                <h1 className='text-black text-xs font-semibold'>Social Handle: <span className=' block text- font-light'>onlyfans.com/basam</span></h1>
                            </div>
                            <div className='flex items-center gap-3 w-full'>
                                <VscLocation className='border text-3xl p-1 rounded' />
                                <h1 className='text-black text-xs font-semibold'>Address: <span className=' block text- font-light'>Palm Jumeriah</span></h1>
                            </div>
                            <div className='flex items-center gap-3 w-full'>
                                <LiaBrainSolid className='border text-3xl p-1 rounded' />
                                <h1 className='text-black text-xs font-semibold'>Brain: <span className=' block text- font-light'>Not Found</span></h1>
                            </div>
                            <div className='flex items-center gap-3 w-full'>
                                <LiaBoneSolid className='border text-3xl p-1 rounded' />
                                <h1 className='text-black text-xs font-semibold'>Number of Bones: <span className=' block text- font-light'>206</span></h1>
                            </div>
                            <div className='flex items-center gap-3 w-full'>
                                <MdOutlineEmail className='border text-3xl p-1 rounded' />
                                <h1 className='text-black text-xs font-semibold'>Mail Id: <span className=' block text- font-light'>laxmikanth@elaka.com</span></h1>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FlatDetail