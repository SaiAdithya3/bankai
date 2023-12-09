import React, { lazy, Suspense, useState } from "react";
import WmsHero from "./WmsHero";
import { useMainDashContext } from "../../../../context/AppDataContext";
const OverviewComponent = lazy(() =>
  import("../../components/WMS/Dashboard/Overview")
);
const TaskComponent = lazy(() =>
  import("../../components/WMS/Dashboard/Tasks/List")
);
const ReportsComponent = lazy(() =>
  import("../../components/WMS/Dashboard/Reports")
);
const ResourcesComponent = lazy(() =>
  import("../../components/WMS/Dashboard/Resources")
);
const TimeLineComponent = lazy(() =>
  import("../../components/WMS/Dashboard/TimeLine")
);
const TeamsComponent = lazy(() =>
  import("../../components/WMS/Dashboard/Members")
);
const IssuesComponent = lazy(() =>
  import("../../components/WMS/Dashboard/Issues")
);


const components = {
  Overview: OverviewComponent,
  Tasks: TaskComponent,
  Reports: ReportsComponent,
  Resources: ResourcesComponent,
  TimeLine: TimeLineComponent,
  Teams: TeamsComponent,
  Issues: IssuesComponent,
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
