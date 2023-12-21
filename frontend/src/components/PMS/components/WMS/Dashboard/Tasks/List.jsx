import React from "react";
import { FiFeather } from "react-icons/fi";
import ListUtil from "src/components/PMS/utils/ListUtil";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { useState } from "react";
import { BsListTask } from "react-icons/bs";
import { AiFillTags } from "react-icons/ai";
import { TbProgress } from "react-icons/tb";
import { IoIosPerson } from "react-icons/io";
import { MdOutlinePriorityHigh } from "react-icons/md";

const List = () => {
  // const isBooked = 1;
  const [isListUtilVisible, setListUtilVisible] = useState(false);

  const toggleListUtilVisibility = () => {
    setListUtilVisible(!isListUtilVisible);
  };
  return (
    <>
    <div className="p-10 w-full">

      {/* Header Row */}
      <tr className="bg-white border border-collapse hover:bg-gray-50  rounded-md  p-3 flex justify-between    ">
        {/* <div className=""> */}
        {/* <div className="w-full"> */}
        <th className="w-full flex  items-center ">
          <BsListTask className="text-gray-500 mr-3 cursor-pointer text-2xl  rounded-md p-1 border-gray-300" />
          <p className="text-gray-900 whitespace-nowrap">Task Name</p>
        </th>
        {/* </div> */}

        <div className=" w-full  flex  justify-evenly gap-14">
          <th className="border-l w-1/4 flex items-center">
            <AiFillTags className="text-gray-500 mr-2 cursor-pointer text-2xl  rounded-md p-1 border-gray-300" />
            <p className="text-gray-900 whitespace-nowrap">Tags</p>
          </th>
          <th className="border-l w-1/4 flex items-center">
            <TbProgress className="text-gray-500 mr-2 cursor-pointer text-2xl  rounded-md p-1 border-gray-300" />
            <p className="text-gray-900 whitespace-nowrap">Status</p>
          </th>
          <th className="border-l w-1/4 flex items-center">
            <IoIosPerson className="text-gray-500 mr-2 cursor-pointer text-2xl  rounded-md p-1 border-gray-300" />
            <p className="text-gray-900 whitespace-nowrap">Assigned To</p>
          </th>
          <th className="border-l w-1/4 flex items-center">
            <MdOutlinePriorityHigh className="text-gray-500 mr-2 cursor-pointer text-2xl  rounded-md p-1 border-gray-300" />
            <p className="text-gray-900 whitespace-nowrap">Priority</p>
          </th>
          <th className="border-l w-1/5 flex items-center">
            <FiFeather className="text-gray-500 mr-2 cursor-pointer text-2xl  rounded-md p-1 border-gray-300" />
            <p className="text-gray-900 whitespace-nowrap">Due date</p>
          </th>
        </div>
        {/* </div> */}
      </tr>

      {/* Data Row */}
      <div className=" mt-4  border rounded-md">
        <div
          className="flex p-4 items-center gap-2 cursor-pointer bg-[#f3f4f6]/30"
          onClick={toggleListUtilVisibility}
        >
          {isListUtilVisible ? (
            <BiSolidDownArrow className="text-gray-500 mr-3 cursor-pointer text-2xl  rounded-md p-1 border-gray-300" />
          ) : (
            <BiSolidUpArrow className="text-gray-500 mr-3 cursor-pointer text-2xl  rounded-md p-1 border-gray-300" />
          )}
          <h1 className=" text-lg font-semibold">To-Do List</h1>
          <h2 className="text-xs text-gray-700">(06)</h2>
        </div>
        {isListUtilVisible && (
          <div className="">
            <ListUtil
              tag="Tag 1"
              status="In Progress"
              assignedTo="John Doe"
              priority="High"
              dueDate="2023-12-07"
              modal="1"
            />
            <ListUtil modal="2" />
          </div>
        )}
      </div>
      <div className=" mt-4  border rounded-md">
        <div
          className="flex p-4 items-center gap-2 cursor-pointer bg-[#f3f4f6]/30"
          onClick={toggleListUtilVisibility}
        >
          {isListUtilVisible ? (
            <BiSolidDownArrow className="text-gray-500 mr-3 cursor-pointer text-2xl  rounded-md p-1 border-gray-300" />
          ) : (
            <BiSolidUpArrow className="text-gray-500 mr-3 cursor-pointer text-2xl  rounded-md p-1 border-gray-300" />
          )}
          <h1 className=" text-lg font-semibold">Pending</h1>
          <h2 className="text-xs text-gray-700">(03)</h2>
        </div>
        {isListUtilVisible && (
          <div className="">
            <ListUtil
              tag="Tag 1"
              status="In Progress"
              assignedTo="John Doe"
              priority="High"
              dueDate="2023-12-07"
              modal="1"
            />
            <ListUtil modal="2" />
            <ListUtil />
          </div>
        )}
      </div>
      <div className=" mt-4  border rounded-md">
        <div
          className="flex p-4 items-center gap-2 cursor-pointer bg-[#f3f4f6]/30"
          onClick={toggleListUtilVisibility}
        >
          {isListUtilVisible ? (
            <BiSolidDownArrow className="text-gray-500 mr-3 cursor-pointer text-2xl  rounded-md p-1 border-gray-300" />
          ) : (
            <BiSolidUpArrow className="text-gray-500 mr-3 cursor-pointer text-2xl  rounded-md p-1 border-gray-300" />
          )}
          <h1 className=" text-lg font-semibold">Completed</h1>
          <h2 className="text-xs text-gray-700">(03)</h2>
        </div>
        {isListUtilVisible && (
          <div className="">
            <ListUtil />
            <ListUtil modal="2" />
            <ListUtil />
          </div>
        )}
      </div>

      <div className=" mt-4  border rounded-md">
        <div
          className="flex p-4 items-center gap-2 cursor-pointer bg-[#f3f4f6]/30"
          onClick={toggleListUtilVisibility}
        >
          {isListUtilVisible ? (
            <BiSolidDownArrow className="text-gray-500 mr-3 cursor-pointer text-2xl  rounded-md p-1 border-gray-300" />
          ) : (
            <BiSolidUpArrow className="text-gray-500 mr-3 cursor-pointer text-2xl  rounded-md p-1 border-gray-300" />
          )}
          <h1 className=" text-lg font-semibold">Completed</h1>
          <h2 className="text-xs text-gray-700">(03)</h2>
        </div>
        {isListUtilVisible && (
          <div className="">
            <ListUtil />
            <ListUtil modal="2" />
            <ListUtil />
          </div>
        )}
      </div>
    </div>

    </>
  );
};

export default List;
