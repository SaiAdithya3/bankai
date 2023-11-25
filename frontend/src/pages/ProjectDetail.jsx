import React from 'react';
import StatusBadge from '../utils/utilcomp/StatusBadge';
import MainDash from '../components/Dashboard/MainDash';
import { MainDashProvider } from '../context/AppDataContext';
import { useParams } from 'react-router-dom';
import { IoNotificationsOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import DashHero from '../components/Dashboard/DashHero';
import { useMainDashContext } from '../context/AppDataContext';


const ProjectDetail = () => {
    const { projectId } = useParams();
    return (
        <div className=" h-screen ">
        <div className=" bg-white">
          <div className=" flex px-8 py-4 items-center  justify-between relative">
            <CiSearch className="inline-block  ml-3    absolute text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="  focus:outline-none focus:ring-1 focus:ring-gray-300 pl-12 text-black/70 bg-white border-gray-200 rounded-md p-2 w-[60%] h-10"
            />
            <div className="flex justify-between gap-5 items-center">
              <IoNotificationsOutline className="inline-block text-gray-400 w-6 h-6 right-0" />
              <div className="bg-gray-400 h-5 w-[0.9px]"></div>
              <h1 className="text-black/70 text-xl">Welcome Shiva!</h1>
            </div>
          </div>
          <hr className="border-gray-200" />
          <DashHero  params={projectId}/>
        </div>
      </div>
    )
}

export default ProjectDetail