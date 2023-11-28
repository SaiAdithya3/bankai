import React from "react";
import DashMenuItems from "../../utils/DashBoardUtils/DashMenuItems";
import Sticky from 'react-stickynode';
import { PiExport } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";

const ProjectDetailsHero = (props) => {
  const { params } = props;


  return (
    <Sticky enabled={true} top={0}   >
      <div className="   ">
        <div className=" px-8 py-4   bg-white flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-2xl font-bold ">Projects </h1>
            <h2 className="text-xl tracking-tight  text-gray-500"> / {params}</h2>
          </div>
          <div className='flex items-center gap-4 justify-end'>
            <button className={`text-sm my-2 px-6 flex items-center justify-center hover:scale-105 hover:bg-gray-800 transition-all hover:text-white gap-2 bg-white border text-black py-1 rounded-lg shadow-xl`}><PiExport /> Export to CSV</button>
            <button className={`text-sm my-2 px-6 flex items-center justify-center hover:scale-105 bg-gray-800 transition-all text-white gap-2 hover:bg-white border hover:text-black py-1 rounded-lg shadow-xl`}><FiPlus /> Create New</button>
          </div>
        </div>
        {/* <Sticky enabled={true} top={0}   > */}
        <div className="flex  gap-10 bg-white px-8 pt-3">
          <DashMenuItems name={"Overview"} />
          <DashMenuItems name={"ListView"} />
          <DashMenuItems name={"Board"} />
        </div>
        <hr className="border-gray-200" />
        {/* </Sticky> */}
      </div>
    </Sticky>
  );
};

export default ProjectDetailsHero;
