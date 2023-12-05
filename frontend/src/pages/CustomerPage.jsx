import React, { useState } from 'react';
import StatusBadge from '../utils/utilcomp/StatusBadge';
import CustomerTableRow from '../utils/utilcomp/CustomerTableRow';
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { PiExport } from "react-icons/pi";
import { IoFilter } from "react-icons/io5";
import { IoIosFunnel } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
// import customerjson from '../utils/customers.json';

const DropdownMenu = () => {
  return (
    <div id="dropdownAction" className="z-10  ml-6 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
      <ul className="py-1 text-sm text-gray-700 ">
        <li>  <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">All</a> </li>
        <li> <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Completed</a></li>
        <li> <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Booked</a></li>
      </ul>
    </div>
  );
};

const CustomerPage = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All");
  // const selectedProject = customerjson;

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };
  // const filterFlats = () => {
  //   if (selectedStatus === "All") {
  //     return Object.entries(selectedProject.flats).filter(([_, flat]) => flat.status === "booked");
  //   } else {
  //     return Object.entries(selectedProject.flats).filter(([_, flat]) => flat.status === selectedStatus);
  //   }
  // };

  return (
    <div className='w-full'>
      <div className='flex items-center p-4 justify-between'>
        <div className='flex items-center w-full'>
          <h1 className='text-2xl font-bold mx-4'>Customer Details</h1>
          {/* <StatusBadge color='green' text='Ongoing' /> */}
        </div>

        <div className='flex items-center gap-4 justify-end w-full'>
          <button className={`text-sm px-6 flex items-center justify-center hover:scale-105 hover:bg-gray-800 transition-all hover:text-white gap-2 bg-white border text-black py-2 rounded-lg shadow-xl`}><PiExport /> Export to CSV</button>
          <button className={`text-sm px-6 flex items-center justify-center hover:scale-105 bg-gray-800 transition-all text-white gap-2 hover:bg-white border hover:text-black py-2 rounded-lg shadow-xl`}><FiPlus /> Create New</button>
        </div>
      </div>



      <hr className='p-4 mx-5' />

      <div className='flex w-full items-center justify-center '>
        <div className='w-[90%] flex items-center justify-between'>
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
            <button onClick={() => handleStatusChange("All")} className={`text-sm my-2 px-5 py-1 flex items-center justify-center hover:scale-105 hover:bg-gray-800 transition-all hover:text-white gap-2  border text-black rounded-lg shadow ${selectedStatus === "All" ? "bg-black text-white" : "bg-white"}`}>All</button>
            <button onClick={() => handleStatusChange("available")} className={`text-sm my-2 px-5 py-1 flex items-center justify-center hover:scale-105 hover:bg-gray-800 transition-all hover:text-white gap-2 border text-black rounded-lg shadow ${selectedStatus === "available" ? "bg-black text-white" : "bg-white"}`}>Available</button>
            <button onClick={() => handleStatusChange("booked")} className={`text-sm my-2 px-5 py-1 flex items-center justify-center hover:scale-105 hover:bg-gray-800 transition-all hover:text-white gap-2 border text-black rounded-lg shadow ${selectedStatus === "booked" ? "bg-black text-white" : "bg-white"}`}>Booked</button>
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
        <div className="w-[90%] overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Flat Number
                </th>
                <th scope="col" className="px-6 py-3">
                  CUSTOMER NAME
                </th>
                <th scope="col" className="px-6 py-3">
                  PROJECT NAME 
                </th>
                <th scope="col" className="px-6 py-3">
                  BOOKING STATUS
                </th>
                <th scope="col" className="px-6 py-3">
                  Owner
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
                <CustomerTableRow
                  key="1"
                  index="1"
                  flatName="A-101"
                  status="booked"
                  projectName="Roayl Villas"
                  customerName="Balls Shiva"
                  editLink="/"
                />
            </tbody>
          </table>
        </div>

        <div className="flex w-[90%] items-center flex-col flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
          <span className="text-sm font-normal text-gray-500  mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 ">1-10</span> of <span className="font-semibold text-gray-900 ">5</span></span>
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

  )
}

export default CustomerPage