import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ProjecTile from "../../../utils/DashBoardUtils/ProjecTile";
import image1 from "../../../assets/buildingsPics/1.jpeg";
import image5 from "../../../assets/buildingsPics/5.jpeg";
import image6 from "../../../assets/buildingsPics/6.jpeg";

const Upcoming = () => {
  const color = "blue";
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
        <ProjecTile color={color} image={image5} name={"Sulabh Complex"} />
        <ProjecTile color={color} image={image1} name={"Block no:38"} />
        <ProjecTile color={color} image={image6} name={"sereite"} />
        <ProjecTile color={color} image={image1} name={"Akaza"} />
        <ProjecTile color={color} image={image6} name={"Muzan Palace"} />
        <ProjecTile color={color} image={image5} name={"Esapada"} />
        <ProjecTile color={color} image={image6} name={"Hahirama place"} />
        <ProjecTile color={color} image={image1} name={"Trumph Towers"} />
        <ProjecTile color={color} image={image5} name={"sereite"} />
      </div>
    </div>
  );
};

export default Upcoming;
