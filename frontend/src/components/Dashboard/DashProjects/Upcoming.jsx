import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ProjecTile from "../../../utils/DashBoardUtils/ProjecTile";
import image1 from "../../../assets/buildingsPics/1.jpeg";
import image5 from "../../../assets/buildingsPics/5.jpeg";
import image6 from "../../../assets/buildingsPics/6.jpeg";

const Upcoming = () => {
  return (
    <div className=" w-[23%] ">
      {/* <Sticky enabled={true} top={108} > */}
      <div className="flex items-center bg-  justify-between px-3 pt-1 bg-[#fbfafc] pb-3">
        <div className="flex  items-center justify-center gap-2">
          <div className="w-2 h-2 bg-black/60 rounded-full"></div>
          <h1>Upcoming</h1>
        </div>
        <HiOutlineDotsVertical />
      </div>
      {/* </Sticky> */}
      <div className=" flex flex-col gap-6">
        <ProjecTile image={image1} name={"Gopal Rao"} />
        <ProjecTile image={image5} name={"Hyderabad"} />
        <ProjecTile image={image6} name={"sereite"} />
      </div>
    </div>
  );
};

export default Upcoming;
