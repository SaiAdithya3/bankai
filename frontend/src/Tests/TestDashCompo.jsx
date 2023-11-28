import React from "react";
import DashMenuLinks from "../utils/DashBoardUtils/DashMenuLinks";
import Sticky from "react-stickynode";

const TestDashCompo = () => {
  return (
    <>
    {/* <Sticky enabled={true} top={130} bottomBoundary={1000}  > */}
      <div className="flex gap-5 ">
        <DashMenuLinks  activeMenuLink={"Ongoing"}/>
        <DashMenuLinks  activeMenuLink={"Upcoming"}/>
        <DashMenuLinks  activeMenuLink={"Completed"}/>
      </div>
      {/* </Sticky> */}
    </>
  );
};

export default TestDashCompo;
