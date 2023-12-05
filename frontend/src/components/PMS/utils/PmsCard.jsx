import React from "react";
import { FaLock } from "react-icons/fa6";
import cardImg from "../utils/bars (1).png";
import cardImg2 from "../utils/bars.png";
import portfolio from "../utils/capital.png";

const PmsCard = () => {
    const cardStyle = {
        background: `url(${portfolio})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };

  return (
    <>
      <div className="bg-blue-200/30 shadow-xl border-2 border-black/20 flex items-center  justify-center flex-col  rounded-2xl w-[24rem] h-56" >
        <div className="flex p-2 gap-2 mt-3 items-center  justify-center" >
          <FaLock className="text-gray-700 text-xs" />
          <h1 className="   text-xs">Project Management System</h1>
        </div>
        <div className=" items-end  p-3  h-[89.5%] w-full  flex  border-t-2 border-t-black/30 bg-[#2d3b48] rounded-xl  ">
          <div className="text-3xl mt-5 gap-3  tracking-tight px-3 py-3 opacity-75   text-white font-extrabold  flex flex-col">

                Finance Management System
          </div>
          <img
            src={portfolio}
            className="    mt-16 top-16     opacity-80 h-[60%]"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default PmsCard;
