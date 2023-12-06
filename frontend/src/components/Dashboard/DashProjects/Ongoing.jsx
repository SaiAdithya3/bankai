import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ProjecTile from "../../../utils/DashBoardUtils/ProjecTile";
import Sticky from "react-stickynode";
import image2 from "../../../assets/buildingsPics/2.jpeg";
import image3 from "../../../assets/buildingsPics/3.jpeg";
import image4 from "../../../assets/buildingsPics/4.jpeg";

const Ongoing = () => {
  const color = "bg-orange-300/60 text-orange-800 border-orange-800";
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
      <div className=" flex justify-between flex-wrap  gap-y-10  px-6  gap-2 ">
        <ProjecTile color={color} image={image4} name={"Sulabh Complex"} />
        <ProjecTile color={color} image={image3} name={"Block no:38"} />
        <ProjecTile color={color} image={image2} name={"Bleach"} />
        <ProjecTile color={color} image={image3} name={"Sereite"} />
        <ProjecTile color={color} image={image2} name={"Espada"} />
        <ProjecTile color={color} image={image4} name={"Hecuo Mundo"} />
        <ProjecTile color={color} image={image3} name={"Hollow"} />
        <ProjecTile color={color} image={image4} name={"Kamado"} />
        <ProjecTile color={color} image={image3} name={"sereite"} />
      </div>
    </div>
  );
};

export default Ongoing;
