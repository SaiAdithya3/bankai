import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ProjecTile from "../../../utils/DashBoardUtils/ProjecTile";
import image7 from "../../../assets/buildingsPics/7.jpeg";
import image8 from "../../../assets/buildingsPics/8.jpeg";
import image1 from "../../../assets/buildingsPics/1.jpeg";

const Completed = () => {
  const color = "green";
  return (
<div className="  ">
      {/* <Sticky enabled={true} top={108} > */}
      {/* <div className="flex items-center bg-  justify-between px-3 pt-1 bg-[#fbfafc] pb-3">
        <div className="flex  items-center justify-center gap-2">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <h1>Ongoing</h1>
        </div>
        <HiOutlineDotsVertical />
      </div> */}
      {/* </Sticky> */}
      <div className=" flex    justify-between flex-wrap  gap-y-10  px-6  gap-2 ">
        <ProjecTile color={color} image={image1} name={"Sulabh Complex"} />
        <ProjecTile color={color} image={image8} name={"Block no:38"} />
        <ProjecTile color={color} image={image7} name={"Zanka no Tachi"} />
        <ProjecTile color={color} image={image8} name={"Sembonzakura"} />
        <ProjecTile color={color} image={image1} name={"Hipoo fusagari"} />
        <ProjecTile color={color} image={image7} name={"Togame"} />
        <ProjecTile color={color} image={image8} name={"Living"} />
        <ProjecTile color={color} image={image1} name={"zanka West"} />
        <ProjecTile color={color} image={image7} name={"sereite"} />
      </div>
    </div>
  );
};

export default Completed;
