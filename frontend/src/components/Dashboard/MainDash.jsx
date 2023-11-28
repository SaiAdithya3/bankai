import React, { lazy, Suspense, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import DashHero from "./DashHero";
import { useMainDashContext } from "../../context/AppDataContext";
const OverviewComponent = lazy(() => import("./DashItems/DashOverView"));
const BoardComponent = lazy(() => import("./DashItems/BoardComponent"));
const DiscussionComponent = lazy(() => import("./DashItems/DiscussionComponent"));
const TimelineComponent = lazy(() => import("./DashItems/TimelineComponent"));
const FilesComponent = lazy(() => import("./DashItems/FilesComponent"));

const components = {
  Overview: OverviewComponent,
  Board: BoardComponent,
  Dicussion: DiscussionComponent,
  TimeLine: TimelineComponent,
  Files: FilesComponent,
};

const MainDash = () => {
  const { activeMenuItem } = useMainDashContext();
  const ComponentToRender = components[activeMenuItem] || null;

  return (
    <>
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
          <DashHero />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {ComponentToRender && <ComponentToRender />}
        </Suspense>
      </div>
    </>
  );
};

export default MainDash;
