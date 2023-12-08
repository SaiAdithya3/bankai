import React, { useState } from 'react';
import StatusBadge from '../../../utils/utilcomp/StatusBadge';
import TableRow from '../../../utils/TableRow';
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import { IoIosFunnel } from "react-icons/io";
import projectjson from '../../../utils/projects.json';
import {FiFeather} from 'react-icons/fi';
import { Link } from 'react-router-dom';


const DropdownMenu = () => {
    return (
        <div id="dropdownAction" className="z-10 ml-6 top-72 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul className="py-1 text-sm text-gray-700 ">
                <li>  <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">All</a> </li>
                <li> <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Completed</a></li>
                <li> <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Upcoming</a></li>
                <li> <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Ongoing</a></li>
            </ul>
        </div>
    );
};

const ListOverView = () => {

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("All");
    const selectedProject = projectjson["sky"];

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };
    const handleStatusChange = (status) => {
        setSelectedStatus(status);
    };
    const filterFlats = () => {
        if (selectedStatus === "All") {
            return Object.entries(selectedProject.flats);
        } else {
            return Object.entries(selectedProject.flats).filter(([_, flat]) => flat.status === selectedStatus);
        }
    };

    return (
        <>
            <div className='flex flex-col w-full   bg-white px-6 py-7'>
                <div className='flex w-full items-center justify-center '>
                    <div className='w-[95%] flex items-center justify-between'>
                        <div className='flex gap-3'>
                            <button
                                id="dropdownActionButton"
                                onClick={toggleDropdown}
                                className="inline-flex shadow my-2 items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5"
                                type="button"
                            >
                                Show: <span className='font-semibold px-1'>{selectedStatus}</span>
                                <FaChevronDown />
                            </button>
                            {/* <button onClick={() => handleStatusChange("All")} className={`text-sm my-2 px-5 py-1 flex items-center justify-center hover:scale-105 hover:bg-gray-800 transition-all hover:text-white gap-2  border text-black rounded-lg shadow ${selectedStatus === "All" ? "bg-black text-white" : "bg-white"}`}>All</button>
                        <button onClick={() => handleStatusChange("available")} className={`text-sm my-2 px-5 py-1 flex items-center justify-center hover:scale-105 hover:bg-gray-800 transition-all hover:text-white gap-2 border text-black rounded-lg shadow ${selectedStatus === "available" ? "bg-black text-white" : "bg-white"}`}>Available</button>
                        <button onClick={() => handleStatusChange("booked")} className={`text-sm my-2 px-5 py-1 flex items-center justify-center hover:scale-105 hover:bg-gray-800 transition-all hover:text-white gap-2 border text-black rounded-lg shadow ${selectedStatus === "booked" ? "bg-black text-white" : "bg-white"}`}>Booked</button> */}
                            <button className='text-sm my-2 px-5 py-1 flex items-center justify-center hover:scale-105 hover:bg-gray-800 transition-all hover:text-white gap-2 bg-white border text-black rounded-lg shadow'><IoFilter />Filter</button>
                            <button className='text-sm my-2 px-5 py-1 flex items-center justify-center hover:scale-105 hover:bg-gray-800 transition-all hover:text-white gap-2 bg-white border text-black rounded-lg shadow'><IoIosFunnel />Sort</button>
                        </div>
                        <div className="flex py-4  items-center justify-between relative">
                            <CiSearch className="inline-block ml-3 absolute text-gray-400 w-5 h-5" />
                            <input type="text" className="shadow focus:outline-none focus:ring-1 border focus:ring-gray-300 pl-12 text-black/70 bg-white border-gray-200 rounded-xl p-2 w-[100%] h-10" placeholder='Search for it!' />
                        </div>
                    </div>
                </div>
                {isDropdownVisible && <DropdownMenu />}

                <div className="flex flex-col items-center justify-center">
                    <div className="w-[95%] overflow-x-auto sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Project Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Location
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Current Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Type
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Number
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Details</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4">1</td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Prestige Homes
                                    </th>
                                    <td className="px-6 py-4">Amritsar</td>
                                    <td className="px-6 py-4 flex items-center">
                                            <p className="bg-green-300/60 text-center px-2 mx-1 py-1 items-center flex cursor-pointer rounded-2xl text-xs text-green-800"><span className='p-0.5 border border-green-800 mr-1 rounded-full'></span>Ongoing</p>
                                    </td>
                                    <td className="px-6 py-4">Appartments</td>
                                    <td className="px-6 py-4">1105</td>
                                    <td className="px-6 py-4 text-right">
                                        <Link to="/projects/Prestige Homes" className="font-medium ">
                                            <FiFeather className='text-gray-500 mr-3 cursor-pointer text-2xl border rounded-md p-1 border-gray-300' />
                                        </Link>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4">2</td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Sky Atlantis
                                    </th>
                                    <td className="px-6 py-4">Abu Dhabi</td>
                                    <td className="px-6 py-4 flex items-center">
                                            <p className="bg-blue-300/60 text-center px-2 mx-1 py-1 items-center flex cursor-pointer rounded-2xl text-xs text-blue-800"><span className='p-0.5 border border-blue-800 mr-1 rounded-full'></span>Upcoming</p>
                                    </td>
                                    <td className="px-6 py-4">Villas</td>
                                    <td className="px-6 py-4">900</td>
                                    <td className="px-6 py-4 text-right">
                                        <Link to="/projects/Sky Atlantis" className="font-medium ">
                                            <FiFeather className='text-gray-500 mr-3 cursor-pointer text-2xl border rounded-md p-1 border-gray-300' />
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex w-[90%] items-center flex-col flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                        <span className="text-sm font-normal text-gray-500  mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 ">1-10</span> of <span className="font-semibold text-gray-900 ">{Object.keys(selectedProject.flats).length}</span></span>
                        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700  ">Previous</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">1</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">Next</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListOverView