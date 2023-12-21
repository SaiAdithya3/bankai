import React, { lazy, Suspense, useState } from "react";
import SalesHero from "./SalesHero";
import { useMainDashContext } from "../../../../context/AppDataContext";
const OverviewComponent = lazy(() =>
  import("../../components/sales/Overview")
);
const ListComponent = lazy(() =>
  import("../../components/sales/ListView")
);

const components = {
  Overview: OverviewComponent,
  List: ListComponent,

};

const MainSales = () => {
  const { salesDashboardItem } = useMainDashContext();
  const ComponentToRender = components[salesDashboardItem] || null;

  return (
    <>
      <div className=" h-screen ">
        <div className=" bg-white">
          <SalesHero />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {ComponentToRender && <ComponentToRender />}
        </Suspense>
      </div>
    </>
  );
};


export default MainSales;
