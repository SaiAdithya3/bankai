import React from "react";
import PmsCard from "../components/PMS/utils/PmsCard";
import OverView from "src/components/PMS/pages/OverView";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import { MdBiotech } from "react-icons/md";
import { LuFiles } from "react-icons/lu";
import { TbBulldozer } from "react-icons/tb";
import { LuForklift } from "react-icons/lu";
import { IoSnowOutline } from "react-icons/io5";
import StatusBadge from "../utils/utilcomp/StatusBadge";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Projectms = () => {
  const { projectId } = useParams();
  return (
    <>
      <div className=" flex-col p-8 bg-gray-100/50 flex items-center  w-full justify-center">
        <div className="flex items-center p-8 w-full justify-between">
          <h1 className=" text-2xl tracking-wide text-black font-semibold">
            {" "}
            <Link to="/projects"> Projects / </Link>
            <span className="text-2xl font-semibold text-gray-500">
              {projectId}
            </span>{" "}
          </h1>
          <StatusBadge text="On Progress" color="green" />
        </div>
        <div className="flex items-center justify-between w-full  pb-8 px-4">
          <div className="flex gap-10 px-8">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-md flex items-center gap-2">
                <MdOutlineLocationOn className="border rounded text-2xl p-1" />
                Location: <span className="font-light">Islamabad</span>
              </h1>
              <h1 className="font-bold text-md flex items-center gap-2">
                <MdCalendarMonth className="border rounded text-2xl p-1" />
                Start Date: <span className="font-light">15-06-2021</span>
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-md flex items-center gap-2">
                <TbBulldozer className="border rounded text-2xl p-1" />
                Current Status:{" "}
                <span className="font-light">Under Construction</span>
              </h1>
              <h1 className="font-bold text-md flex items-center gap-2">
                <MdCalendarMonth className="border rounded text-2xl p-1" />
                Really Nigga: <span className="font-light">Cheese Ma🕸️</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <h1 className="border px-4 py-1 mx-2 rounded-lg bg-gray-50">
              <span className="font-bold">RERA ID: </span> 59451315489
            </h1>
            <button className="flex items-center px-6 py-2 gap-2 bg-black shadow-lg rounded-lg text-white hover:scale-105 transition-all">
              {" "}
              <LuFiles />
              Files
            </button>
            <button className="flex items-center px-6 py-2 gap-2 bg-black shadow-lg rounded-lg text-white hover:scale-105 transition-all">
              {" "}
              <MdBiotech className="text-xl" />
              View
            </button>
          </div>
        </div>
        <div className="bg-white   border-2   rounded-l-3xl rounded-r-3xl w-[96%] h-[50vh]">
          <OverView />
        </div>
      </div>
    </>
  );
};

export default Projectms;
