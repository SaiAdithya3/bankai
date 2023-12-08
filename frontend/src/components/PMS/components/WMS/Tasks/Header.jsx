import React from "react";
import ToggleButton from "src/components/PMS/utils/ToggleButton";
import { BiSolidGridAlt } from "react-icons/bi";
import { FaListUl } from "react-icons/fa6";


const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="  flex  flex-col gap-1 ">
        <h1 className="text-2xl  font-semibold">Hello, Sara</h1>
        <h2 className="text-sm text-gray-600 font-semibold">
          Today is, Sunday, 23 January 2023
        </h2>
      </div>
      <div className="flex  items-center justify-center gap-5 ">
      <div className="gap-2 w-full flex items-center ">
        <ToggleButton name={"Grid"} icon={BiSolidGridAlt} />
        <ToggleButton name={"List"} icon={FaListUl} />
      </div>
        <button className="bg-black/90 hover:bg-gray-700 w-full text-white font-bold py-2 px-6 rounded-md">
          Create Task
        </button>
      </div>
    </div>
  );
};

export default Header;
