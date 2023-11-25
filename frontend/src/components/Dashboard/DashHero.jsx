import React from "react";
import DashMenuItems from "../../utils/DashBoardUtils/DashMenuItems";
import DashProjects from "./DashItems/DashOverView";
import Sticky from 'react-stickynode';

const DashHero = (props) => {
  const { params } = props;
  return (
    <div>
      <div className=" px-8 py-4 bg-white flex items-center justify-between">
      <div className="flex items-center justify-center gap-2">
        <h1 className="text-2xl font-bold">Projects</h1>
        <h2 className="text-xl tracking-tight  text-gray-500"> / {params}</h2>
        </div>
        <button className="bg-[#2d3b48] text-sm text-white  rounded-md p-2">
          Create Project
        </button>
      </div>
      {/* <Sticky enabled={true} top={0}   > */}
      <div className="flex  gap-10 bg-white px-8 pt-3">
        <DashMenuItems name={"Overview"} />
        <DashMenuItems name={"Board"} />
        <DashMenuItems name={"Dicussion"} />
        <DashMenuItems name={"TimeLine"} />
        <DashMenuItems name={"Files"} />
      </div>
      <hr className="border-gray-200" />
    {/* </Sticky> */}
    </div>
  );
};

export default DashHero;
