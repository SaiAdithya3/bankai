import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ProjecTile from "../../../utils/DashBoardUtils/ProjecTile";
import image7 from "../../../assets/buildingsPics/7.jpeg";
import image8 from "../../../assets/buildingsPics/8.jpeg";
import image1 from "../../../assets/buildingsPics/1.jpeg";

const Completed = () => {
  return (
    <div className=" w-[23%] ">
      {/* <Sticky enabled={true} top={108} > */}
      <div className="flex items-center bg-  justify-between px-3 pt-1 bg-[#fbfafc] pb-3">
        <div className="flex  items-center justify-center gap-2">
          <div className="w-2 h-2 bg-black/20 rounded-full"></div>
          <h1>Completed</h1>
        </div>
        <HiOutlineDotsVertical />
      </div>
      {/* </Sticky> */}
      <div className=" flex flex-col gap-6">
        <ProjecTile image={image7} name={"Bankai"} />
        <ProjecTile image={image8} name={"Soul Society"} />
        <ProjecTile image={image1} name={"Living Hollow"} />
      </div>
    </div>
  );
};

export default Completed;
