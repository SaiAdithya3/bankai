import React from "react";
import PmsCard from "../components/PMS/utils/PmsCard";

const Projectms = () => {
  return (
    <>
      <div className=" pl-4 bg-gray-100/50 flex items-center  justify-center">
        <div className="bg-white   border-2  mt-10 rounded-l-3xl rounded-r-3xl w-[99%] h-[100vh]">
            <h1 className="text-2xl px-8 mt-8  font-light">
                Project Management System
            </h1>
            <hr className="border-1 border-gray-200/80 mt-4" />
          <div className="flex items-center relative  justify-between  px-10 pt-8">
            <PmsCard />
            <PmsCard />
            <PmsCard />
          </div>
          <div className="flex items-center relative  justify-between  px-10 pt-10">
            <PmsCard />
            <PmsCard />
            <PmsCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectms;
