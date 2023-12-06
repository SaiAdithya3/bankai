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