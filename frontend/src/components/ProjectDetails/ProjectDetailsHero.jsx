import React from "react";
import DashMenuItems from "../../utils/DashBoardUtils/DashMenuItems";
import Sticky from 'react-stickynode';
import { PiExport } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { IoList } from "react-icons/io5";
import { FaBoxes } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import { Link } from "react-router-dom";

const ProjectDetailsHero = (props) => {
  const { params } = props;


  return (
    <Sticky enabled={true} top={0}   >
      <div className="   ">
        <div className=" px-8 py-4   bg-white flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <Link to="/projects"><h1 className="text-2xl font-semibold text-gray-500">Projects </h1></Link>
            <h2 className="text-xl tracking-tight font-bold  text-black"> / {params}</h2>
          </div>
          <div className='flex items-center gap-4 justify-end'>
            <button className={`text-sm px-6 flex items-center justify-center hover:scale-105 hover:bg-gray-800 transition-all hover:text-white gap-2 bg-white border text-black py-2 rounded-lg shadow-xl`}><PiExport className="text-lg"/> Export to CSV</button>
            <button className={`text-sm px-6 flex items-center justify-center hover:scale-105 bg-gray-800 transition-all text-white gap-2 hover:bg-white border hover:text-black py-2 rounded-lg shadow-xl`}><FiPlus className="text-lg"/> Create New</button>
          </div>
        </div>
        {/* <Sticky enabled={true} top={0}   > */}
        <div className="flex  gap-10 bg-white px-8 pt-3">
          <DashMenuItems name={"Overview"} icon={GrOverview}/>
          <DashMenuItems name={"ListView"} icon={IoList}/>
          <DashMenuItems name={"Board"} icon={FaBoxes}/>
          <DashMenuItems name={"Board"} icon={FaBoxes}/>
        </div>
        <hr className="border-gray-200" />
        {/* </Sticky> */}
      </div>
    </Sticky>
  );
};

export default ProjectDetailsHero;
