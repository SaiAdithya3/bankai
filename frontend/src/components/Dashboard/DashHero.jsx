import React from "react";
import DashMenuItems from "../../utils/DashMenuItems";
import DashProjects from "./DashItems/DashOverView";

const DashHero = () => {
  return (
    <div>
      <div className=" p-5 flex items-center justify-between">
        <h1 className="text-2xl">Projects</h1>
        <button className="bg-[#2d3b48] text-sm text-white  rounded-md p-2">
          Create Project
        </button>
      </div>
      <div className=" flex gap-5 px-5 pb-2">
        <DashMenuItems name={"Overview"} />
        <DashMenuItems name={"Board"} />
        <DashMenuItems name={"Dicussion"} />
        <DashMenuItems name={"TimeLine"} />
        <DashMenuItems name={"Files"} />
      </div>
      <hr className="border-gray-200" />
    </div>
  );
};

export default DashHero;
