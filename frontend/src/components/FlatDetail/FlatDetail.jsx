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
import TransactionTableRow from '../PMS/components/TransactionTableRow';
import { FaRegFilePdf } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";




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



                <div className="flex w-full m-3 my-4 flex-col rounded-xl items-center p-4 border">
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


                <div className="flex flex-col w-full m-3 my-4 rounded-xl bg-gray-50 items-center p-4 border">
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
                            <div className="flex w-full">

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
                        <div className="flex gap-4 px-4 py-5">
                            <h1 className='text-sm rounded-xl p-3 font-semibold'>Loan Type: <span className='bg-purple-300 mx-1 px-2 py-0.5 text-xs rounded-full text-purple-800'> Home Loan</span></h1>
                            <h1 className='text-sm rounded-xl p-3 font-semibold'>Payment Status: <span className='bg-cyan-300 mx-1 px-2 py-0.5 text-xs rounded-full text-cyan-800'> Sanctioned</span></h1>
                            <h1 className='text-sm rounded-xl p-3 font-semibold'>Registration Status: <span className='bg-yellow-300 mx-1 px-2 py-0.5 text-xs rounded-full text-yellow-800'> Not completed</span></h1>
                        </div>
                        <div className="flex flex-col gap-2 border rounded-xl p-4 mx-4 ">
                            <h1 className="text-sm font-semibold">Bank Details:<span className='mx-2 font-light '>ICICI Bank</span> </h1>
                            <h1 className="text-sm font-semibold">Sanctioned Amount:<span className='mx-2 font-light '> 78 Lakhs</span> </h1>
                            <h1 className="text-sm font-semibold">Rate of Interest:<span className='mx-2 font-light '> 69%</span> </h1>
                            <h1 className="text-sm font-semibold">Sanctioned Date:<span className='mx-2 font-light '>15 Sept, 2021</span> </h1>
                        </div>
                    </div>
                </div>




                <div className="flex w-full p-4 gap-4">
                    <div className="flex flex-col border bg--50 rounded-xl p-4 w-full">
                        <h1 className="text-md pb-4 pl-2  font-semibold ">Recent Transactions</h1>

                        <table className="w-full text-sm text-left rtl:text-right text-gray-500  overflow-y-auto">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        DD number
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        DETAIL
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        AMOUNT
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        DATE & TIME
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        TRANSACTION
                                    </th>

                                </tr>
                            </thead>
                            <tbody >
                                <TransactionTableRow index={1} flatName='D123' detail='Maintenance' type='income' date='02 Aug' price='₹1,000' editLink='#' />
                                <TransactionTableRow index={2} flatName='A101' detail='Registration' type='expense' date='08 Aug' price='₹1,000' editLink='#' />
                                <TransactionTableRow index={3} flatName='C236' detail='Flooring' type='expense' date='27 Aug' price='₹8,000' editLink='#' />
                                <TransactionTableRow index={4} flatName='D301' detail='Margin ' type='income' date='15 Aug' price='₹4,000' editLink='#' />
                                <TransactionTableRow index={5} flatName='D301' detail='RCC' type='income' date='15 Aug' price='₹5,000' editLink='#' />
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-col  items-center rounded-xl p-4 border w-full">
                        <h1 className="pb-4 pl-2 w-full text-md font-semibold ">Documents</h1>
                        <div className='hover:bg-gray-50 mb-2 cursor-pointer w-full flex px-6 py-4 justify-between gap-2 items-center border shadow rounded-xl'>
                            <div className="flex gap-2">
                                <FaRegFilePdf className='text-black text-xl' />
                                <h1 className="text-sm font-semibold">Agreement of Sale</h1>
                            </div>
                            <FiDownload />
                        </div>
                        <div className='hover:bg-gray-50 my-2 cursor-pointer w-full flex px-6 py-4 justify-between gap-2 items-center border shadow rounded-xl'>
                            <div className="flex gap-2">
                                <FaRegFilePdf className='text-black text-xl' />
                                <h1 className="text-sm font-semibold">Agreement of Constuction</h1>
                            </div>
                            <FiDownload />
                        </div>
                        <div className='hover:bg-gray-50 my-2 cursor-pointer w-full flex px-6 py-4 justify-between gap-2 items-center border shadow rounded-xl'>
                            <div className="flex gap-2">
                                <FaRegFilePdf className='text-black text-xl' />
                                <h1 className="text-sm font-semibold">Sale Deed</h1>
                            </div>
                            <FiDownload />
                        </div>
                        <div className='hover:bg-gray-50 my-2 cursor-pointer w-full flex px-6 py-4 justify-between gap-2 items-center border shadow rounded-xl'>
                            <div className="flex gap-2">
                                <FaRegFilePdf className='text-black text-xl' />
                                <h1 className="text-sm font-semibold">Booking Form</h1>
                            </div>
                            <FiDownload />
                        </div>
                        <div className='hover:bg-gray-50 my-2 cursor-pointer w-full flex px-6 py-4 justify-between gap-2 items-center border shadow rounded-xl'>
                            <div className="flex gap-2">
                                <FaRegFilePdf className='text-black text-xl' />
                                <h1 className="text-sm font-semibold">Loan Sanction Letter</h1>
                            </div>
                            <FiDownload />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlatDetail