import React from "react";
import DashMenuLinks from "../utils/DashBoardUtils/DashMenuLinks";

const TestDashCompo = () => {
  return (
    <>
      <div className="flex gap-5">
        <DashMenuLinks  activeMenuLink={"Ongoing"}/>
        <DashMenuLinks  activeMenuLink={"Upcoming"}/>
        <DashMenuLinks  activeMenuLink={"Completed"}/>
      </div>
    </>
  );
};

export default TestDashCompo;
