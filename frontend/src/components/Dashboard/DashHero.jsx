import React from "react";
import DashMenuItems from "../../utils/DashBoardUtils/DashMenuItems";
import DashProjects from "./DashItems/DashOverView";
import Sticky from 'react-stickynode';
import { IoList } from "react-icons/io5";
import { FaBoxes } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import { MdTimeline } from "react-icons/md";

const DashHero = (props) => {
  const { params } = props;
  return (
    <Sticky enabled={true} top={0}   >
    <div className="   "> 
      <div className=" px-8 py-4   bg-white flex items-center justify-between">
      <div className="flex items-center justify-center gap-2">
        <h1 className="text-2xl font-bold">Projects</h1>
        <h2 className="text-xl tracking-tight  text-gray-500"> / {params}</h2>
        </div>
        <button className="bg-[#2d3b48] px-6 text-sm text-white  rounded-lg transition-all hover:scale-105 p-2 shadow-xl">
          Create Project
        </button>
      </div>
      {/* <Sticky enabled={true} top={0}   > */}
      <div className="flex  gap-10 bg-white px-8 pt-3">
        <DashMenuItems name={"Overview"} icon={GrOverview}/>
        <DashMenuItems name={"List"} icon={IoList}/>
        <DashMenuItems name={"Dicussion"} icon={GrOverview}/>
        <DashMenuItems name={"TimeLine"} icon={MdTimeline}/>
        <DashMenuItems name={"Board"} icon={FaBoxes}/>
      </div>
      <hr className="border-gray-200" />
    {/* </Sticky> */}
    </div>
    </Sticky>
  );
};

export default DashHero;
