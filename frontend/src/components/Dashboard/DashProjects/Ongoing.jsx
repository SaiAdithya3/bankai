import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ProjecTile from "../../../utils/DashBoardUtils/ProjecTile";
import Sticky from "react-stickynode";
import image2 from "../../../assets/buildingsPics/2.jpeg";
import image3 from "../../../assets/buildingsPics/3.jpeg";
import image4 from "../../../assets/buildingsPics/4.jpeg";

const Ongoing = () => {
  return (
    <div className=" w-[23%] ">
      {/* <Sticky enabled={true} top={108} > */}
      <div className="flex items-center bg-  justify-between px-3 pt-1 bg-[#fbfafc] pb-3">
        <div className="flex  items-center justify-center gap-2">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <h1>Ongoing</h1>
        </div>
        <HiOutlineDotsVertical />
      </div>
      {/* </Sticky> */}
      <div className=" flex flex-col gap-6">
        <ProjecTile image={image4} name={"Sulabh Complex"} />
        <ProjecTile image={image3} name={"Block no:38"} />
        <ProjecTile image={image2} name={"sereite"} />
      </div>
    </div>
  );
};

export default Ongoing;
