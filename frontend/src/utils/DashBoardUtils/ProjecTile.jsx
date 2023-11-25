import React from "react";
import image1 from "../../assets/buildingsPics/1.jpeg";
import StatusBadge from "../utilcomp/StatusBadge";
import { Link } from "react-router-dom";

const ProjecTile = (props) => {
  const { image, name } = props;
  return (
      <div className="bg-white   hover:scale-[1.03] hover:transition-all transition-all shadow-md border border-gray-200 rounded-[15px] p-3  flex flex-col items-center  justify-center ">
      <img src={image} alt="" className=" w-[100%] h-36 rounded-[10px] " />
      <div>
        <h1 className=" text-xl font-bold py-2">{name}</h1>
        <div className="flex items-center justify-between px-1 pb-2 w-[95%]">
          <h1 className=" text-xs  font-medium bg-[#2d3b48]/70  rounded px-1.5 py-0.5 text-white">
            KUKATPALLY
          </h1>
          <StatusBadge
            color="green"
            color1="green"
            color3="green"
            text="Ongoing"
          />
        </div>
        <h2 className="text-sm tracking-tight pb-4">
          Discription and i am latana bankai sembonzak
        </h2>
        {/* <h4>Project Deadline</h4> */}
        <Link to={`/${name}`}>
        <button className="bg-[#2d3b48] text-sm text-white w-[100%] rounded-xl p-2.5">
          View Project
        </button>
    </Link>
      </div>
    </div>
  );
};

export default ProjecTile;
