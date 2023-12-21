import React, { lazy, Suspense, useState } from "react";
import FMSHero from "./FMSHero";
import { useMainDashContext } from "../../../../context/AppDataContext";
const OverviewComponent = lazy(() =>
  import("../../components/FMS/Overview")
);
const ListComponent = lazy(() =>
  import("../../components/FMS/ListView")
);

const components = {
  Overview: OverviewComponent,
  List: ListComponent,

};

const MainSales = () => {
  const { fmsDashboardItem } = useMainDashContext();
  const ComponentToRender = components[fmsDashboardItem] || null;

  return (
    <>
      <div className=" h-screen ">
        <div className=" bg-white">
          <FMSHero />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {ComponentToRender && <ComponentToRender />}
        </Suspense>
      </div>
    </>
  );
};


export default MainSales;
