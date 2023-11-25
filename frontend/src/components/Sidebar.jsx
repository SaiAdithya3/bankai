import React from 'react';
import userjson from '../utils/user.json';
import { useLocation } from 'react-router-dom';
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
import SidebarLink from '../utils/utilcomp/SidebarLink';
import SidebarItem from '../utils/utilcomp/SidebarItem';


const Sidebar = () => {
  const data = userjson["user"];
  const location = useLocation();

  const isPageActive = (pathname) => {
    return location.pathname === pathname;
  };


  return (
    <div className='w-full h-[100vh] bg-gray-100 flex flex-col items-center justify-between border-r border-gray-200'>
      <div className='flex w-[90%] items-center justify-center p-5 gap-2 border-b-2 border-dashed '>
        <TbBrandGithubCopilot className='text-4xl p-2 bg-red-400 border border-red-600 rounded-full ' />
        <h1 className='text-2xl font-bold text-center'>Bankai</h1>
      </div>
      <div className='w-full h-[60%] p-4'>
        <p className='text-xs font-bold text-gray-500 tracking-wider pl-3'>DASHBOARD</p>
        <ul className='flex flex-col'>
          <SidebarLink href="/dashboard" icon={MdSpaceDashboard} text="Overview" isActive={isPageActive('/dashboard')} />
          <SidebarLink href="/projects" icon={IoFolderOpen} text="Projects" isActive={isPageActive('/projects')} />
          <SidebarLink href="/customers" icon={MdPeopleAlt} text="Customers" isActive={isPageActive('/customers')} />
          <SidebarLink href="/activities" icon={SlGraph} text="Activities" isActive={isPageActive('/activities')} />
          <SidebarLink href="/accounts" icon={FaMoneyBillWave} text="Accounts" isActive={isPageActive('/accounts')} />
        </ul>
      </div>
      <hr className='w-[80%] ' />
      <div className='w-full h-[60%] p-4'>
        <p className='text-xs font-bold text-gray-500 tracking-wider pl-3'>SECOND</p>
        <ul className='flex flex-col'>
          <SidebarItem href="/task-list" icon={PiTarget} text="Task List" isActive={isPageActive('/task-list')} />
          <SidebarItem href="/approvals" icon={MdOutlineContentPasteGo} text="Approvals" isActive={isPageActive('/approvals')} />
          <SidebarItem href="/reports" icon={HiOutlineDocumentReport} text="Reports" isActive={isPageActive('/reports')} />
        </ul>
      </div>
      <div className='flex w-[90%] gap-2'>
        <a href="/settings" className='w-full'><button className={`text-sm my-2 w-full flex items-center justify-center hover:scale-105 hover:bg-gray-800 transition-all hover:text-white gap-2 bg-white border text-black py-1 rounded-lg shadow-xl ${isPageActive('/settings') ? 'bg-gray-800 text-white' : ''}`}><TbSettings /> Settings</button></a>
        <a href="/help" className='w-full'><button className={`text-sm my-2 w-full flex items-center justify-center hover:scale-105 hover:bg-gray-800 transition-all hover:text-white gap-2 bg-white border text-black py-1 rounded-lg shadow-xl ${isPageActive('/help') ? 'bg-gray-800 text-white' : ''}`}><BiHelpCircle /> Help</button></a>
      </div>

      <div className='p-5 border-t'>
        <a href="/profile">
          <div className="flex bg-white p-3  items-center rounded-xl shadow-2xl hover:scale-105 cursor-pointer transition-all">
            <div className="w-full">
              {/* <img className='rounded-full' src="https://images.unsplash.com/photo-1552962599-a09af85f2555?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
              <span className='px-4 py-1 bg-orange-400 rounded-full '></span>
            </div>
            <div className=" px-2 flex items-start justify-center  flex-col">
              <h1 className='text-[14px] font-semibold'>{data.name}</h1>
              <p className='text-[10px]'>{data.email}</p>
            </div>
            <FaChevronRight className='mx-2 w-full text-right ' />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Sidebar