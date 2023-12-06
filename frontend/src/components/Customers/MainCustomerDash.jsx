import React, { lazy, Suspense, useState } from "react";
import { useMainDashContext } from "../../context/AppDataContext";
import CustomerHero from "./CustomerHero";
const GridComponent = lazy(() => import("./CustomerItems/GridView"));
const ListComponent = lazy(() => import("./CustomerItems/ListView"));

const components = {
    Grid: GridComponent,
    List: ListComponent,
};

const MainCustomerDash = () => {
  const { activeMenuItem } = useMainDashContext();
  const ComponentToRender = components[activeMenuItem] || null;

  return (
    <>
      <div className=" h-screen ">
        <div className=" bg-white">
          <CustomerHero />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {ComponentToRender && <ComponentToRender />}
        </Suspense>
      </div>
    </>
  );
};

export default MainCustomerDash;
