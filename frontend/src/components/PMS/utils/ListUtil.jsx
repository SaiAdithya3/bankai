import React from "react";
import doneoutline from "src/components/PMS/utils/doneoutline.png";
import { useState } from "react";
import "./quill2.snow.css";
import EditorToolbar, { modules, formats } from "./../utils/Editor";
import ReactQuill from "react-quill";
import "./quil.css";
import styled from "styled-components";
import SideTaskModal from "../components/WMS/Tasks/SideTaskModal";
import { FiUser } from "react-icons/fi";
import { HiOutlineCalendar } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";
import 'src/index.css'

const ListUtil = (props) => {
  // const { modal } = props;
  const [isSideModalVisible, setSideModalVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const OpenSideModal = () => {
    console.log("OpenSideModal");
    setSideModalVisible(!isSideModalVisible);
  };

  // bg-[#f3f4f6]
  return (
    <>
      {isSideModalVisible && (
        <div className="absolute no-scrollbar   overflow-auto top-[4.8rem] border-r border-2  transition-all  w-[50vw]  right-0 bg-white  h-[100vh]">
          <SideTaskModal />
        </div>
      )}
      

      <div >
        <tr className="hover:bg-[#f3f4f6]/70 border-t   w-full p-2.5 flex justify-between  ">
          <div
            className="w-full  hover:cursor-pointer flex items-center  justify-between pr-5 "
            onClick={OpenSideModal}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <td className="  flex  items-center gap-2 ">
              <img
                src={doneoutline}
                alt=""
                className="w-5 opacity-60 h-5 mr-2"
              />
              <p className="text-gray-900 whitespace-nowrap">Task 1</p>
            </td>

            <div className="flex items-center gap-5">
              {
                hovered && (<FiChevronRight className="  w-5 h-5 text-gray-500/50" />)
              }
              <hr className=" w-[1px] h-[1.9rem]  bg-gray-400/30 " />
            </div>
          </div>

          <div className="w-full flex  justify-evenly gap-[5.5rem]">
            <td className="">
              <p className="text-gray-900 whitespace-nowrap">Tag 1</p>
            </td>
            <td className="">
              <p className="text-gray-900 whitespace-nowrap">69%</p>
            </td>
            <td className="">
              <div className="flex gap-32 items-center">
                <button className=" flex items-center justify-center text-gray-500 gap-3">
                  <FiUser className="outline-dashed rounded-full outline-1 w-5 h-5 text-gray-500 p-0.5 " />
                  <h1 className="">Assignee</h1>
                </button>
              </div>
            </td>
            <td className="">
              <button className="flex items-center  text-gray-500 hover:text-black/70 hover:bg-gray-200 py-1 px-2 rounded">
                <h1 className=" text-sm ">High</h1>
                <MdOutlineKeyboardArrowDown className="w-5 h-5" />
              </button>
            </td>
            <td>
              <button className="flex items-center justify-center text-gray-500 gap-3">
                <HiOutlineCalendar className="outline-dashed rounded-full outline-1 w-6 h-6 text-gray-500 p-1 " />
                <h1>Date</h1>
              </button>
            </td>
          </div>
        </tr>
      </div>
    </>
  );
};

export default ListUtil;
