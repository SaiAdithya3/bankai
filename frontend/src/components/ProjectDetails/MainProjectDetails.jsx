import React, { lazy, Suspense, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import ProjectDetailsHero from "./ProjectDetailsHero";
import { useMainDashContext } from "../../context/AppDataContext";
const OverviewComponent = lazy(() => import("./DetailItems/DetailsOverView"));
const BoardComponent = lazy(() => import("./DetailItems/DetailsBoard"));
const ListComponent = lazy(() => import("./DetailItems/DetailsList"));
import { useParams } from "react-router-dom";



const components = {
  Overview: OverviewComponent,
  Board: BoardComponent,
  ListView: ListComponent,
};
const MainProjectDetails = () => {
  const { activeMenuItem } = useMainDashContext();
  const ComponentToRender = components[activeMenuItem] || null;
  const {projectId} = useParams();
  return (
    <>
      <div className=" h-screen ">
        <div className="bg-white">
          <div className="flex p-4 items-center justify-between relative">
            <CiSearch className="inline-block ml-3 absolute text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none focus:ring-1 focus:ring-gray-300 pl-12 text-black/70 bg-white border-gray-200 rounded-md p-2 w-[60%] h-10"
            />
            <div className="flex justify-between gap-5 items-center">
              <IoNotificationsOutline className="hover:bg-black hover:text-white cursor-pointer rounded-lg p-2 hover:scale-105 transition-all text-4xl text-gray-400  right-0" />
              <div className="bg-gray-400 h-5 w-[0.9px]"></div>
              <h1 className="text-black/70 font-semibold text-lg">Welcome Shiva 👋!</h1>
            </div>
          </div>
          <hr className="border-gray-200" />
          <ProjectDetailsHero params={projectId}/>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {ComponentToRender && <ComponentToRender />}
        </Suspense>
      </div>
    </>
  )
}

export default MainProjectDetails