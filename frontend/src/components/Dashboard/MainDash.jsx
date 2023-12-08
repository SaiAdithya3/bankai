import React, { lazy, Suspense, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import DashHero from "./DashHero";
import { useMainDashContext } from "../../context/AppDataContext";
const OverviewComponent = lazy(() => import("./DashItems/DashOverView"));
const BoardComponent = lazy(() => import("./DashItems/BoardComponent"));
const DiscussionComponent = lazy(() => import("./DashItems/DiscussionComponent"));
const TimelineComponent = lazy(() => import("./DashItems/TimelineComponent"));
const ListComponent = lazy(() => import("./DashItems/ListOverView"));

const components = {
  Overview: OverviewComponent,
  Board: BoardComponent,
  Dicussion: DiscussionComponent,
  TimeLine: TimelineComponent,
  List : ListComponent,
};

const MainDash = () => {
  const { activeMenuItem } = useMainDashContext();
  const ComponentToRender = components[activeMenuItem] || null;

  return (
    <>
      <div className=" h-screen ">
        <div className=" bg-white">
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
