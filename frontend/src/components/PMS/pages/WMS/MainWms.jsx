import React, { lazy, Suspense, useState } from "react";
const WmsHero = lazy(()=>  import("./WmsHero"));
import { useMainDashContext } from "../../../../context/AppDataContext";
const OverviewComponent = lazy(() => import("../../components/WMS/Dashboard/Overview"));
const TaskComponent = lazy(() => import("../../components/WMS/Dashboard/Tasks/List"));


const components = {
  Overview: OverviewComponent,
  Tasks : TaskComponent
};

const MainWms = () => {
  const { wmsDashboardItem } = useMainDashContext();
  const ComponentToRender = components[wmsDashboardItem] || null;

  return (
    <>
      <div className=" h-screen ">
        <div className=" bg-white">
          <WmsHero />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {ComponentToRender && <ComponentToRender />}
        </Suspense>
      </div>
    </>
  );
};


export default MainWms;
