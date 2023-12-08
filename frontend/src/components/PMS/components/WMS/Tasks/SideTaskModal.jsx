import React from "react";
import doneoutline from "src/components/PMS/utils/doneoutline.png";
import { useState } from "react";
import "../../../utils/quill2.snow.css";
import EditorToolbar, {
  modules,
  formats,
} from "src/components/PMS//utils/Editor";
import ReactQuill from "react-quill";
import { SlLike } from "react-icons/sl";

import styled from "styled-components";
import { MdOutlineDone } from "react-icons/md";
import { MdAttachFile } from "react-icons/md";
import { FiMinimize2 } from "react-icons/fi";
import { CgArrowsExpandRight } from "react-icons/cg";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { HiOutlineCalendar } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdPriorityHigh } from "react-icons/md";

const SideTaskModal = () => {
  const [state, setState] = React.useState({ value: null });
  const [toolbarvisible, setToolbarVisible] = useState(false);

  const handleChange = (value) => {
    setState({ value });
  };
  return (
    <>
      <div>
        <div className="flex justify-between px-7 py-4">
          <div>
            <button className="border px-2 flex items-center  justify-center gap-2 py-1 text-sm rounded-md ">
              <MdOutlineDone className="w-4 h-4" />
              <h1>Task Done</h1>
            </button>
          </div>

          <div className="flex text-gray-600 gap-3">
            <button className=" px-2 flex items-center  justify-center gap-2 py-1 text-sm rounded-md ">
              <SlLike className="w-5 h-5" />
            </button>
            <button className=" px-2 flex items-center  justify-center gap-2 py-1 text-sm rounded-md ">
              <MdAttachFile className="w-5 h-5" />
            </button>
            <button className=" px-2 flex items-center  justify-center gap-2 py-1 text-sm rounded-md ">
              <CgArrowsExpandRight className="w-5 h-5" />
            </button>
            <button className=" px-2 flex items-center  justify-center gap-2 py-1 text-sm rounded-md ">
              <FiMinimize2 className="w-5 h-5" />
            </button>
            <button className=" px-2 flex items-center  justify-center gap-2 py-1 text-sm rounded-md ">
              <HiOutlineDotsVertical className="w-5 h-5" />
            </button>
          </div>
        </div>
        <hr className="w-full" />
        <div className="px-3 py-4">
          <div>
            <h1
              className="text-2xl outline-none focus:border-4 border-4 border-transparent focus:border-gray-400 font-medium px-3 py-2 rounded-md"
              contentEditable="true"
            >
              Task Title is go fuck yourself
            </h1>
          </div>

          <div className="px-8 py-6 flex flex-col  gap-0.5">
            <div className="flex gap-32 items-center">
              <div>
                <h1 className=" text-md text-gray-600 font-mono">Assignee</h1>
              </div>
              <button className=" p-2 flex items-center justify-center text-gray-500 gap-3">
                <FiUser className="outline-dashed rounded-full outline-1 w-6 h-6 text-gray-500 p-0.5 " />
                <h1>No Assignee</h1>
              </button>
            </div>

            <div className="flex gap-32 items-center">
              <div>
                <h1 className=" text-md text-gray-600 font-mono">Due Date</h1>
              </div>
              <button className=" p-2 flex items-center justify-center text-gray-500 gap-3">
                <HiOutlineCalendar className="outline-dashed rounded-full outline-1 w-6 h-6 text-gray-500 p-1 " />
                <h1>No Due Date</h1>
              </button>
            </div>

            <div className="flex gap-32 items-center mt-2">
              <div>
                <h1 className=" text-md text-gray-600 font-mono">Projects</h1>
              </div>
              <div className="flex">
                <button className=" px-2  py-1 flex items-center justify-center hover:bg-gray-100  rounded-md gap-2">
                  <div className="w-3 h-3 rounded  bg-green-400  "></div>
                  <h1>Block No:38</h1>
                </button>
                <button className=" px-2 py-1 text-sm text-gray-500 hover:text-black flex items-center justify-center hover:bg-gray-100  rounded-md gap-2">
                  <h1>Select Project</h1>
                  <MdOutlineKeyboardArrowDown className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex gap-32 items-center mt-3">
              <div className="flex text-gray-600 items-center gap-2">
                <MdPriorityHigh className="outline-dashed rounded-full outline-1 w-3.5 h-3.5 text-gray-550 p-0.5 " />
                <h1 className=" text-md font-mono">Priority</h1>
              </div>
              <button className=" p-2 flex items-center justify-center text-gray-500 gap-3">
                <h1>---</h1>
              </button>
            </div>

            <div className="flex mt-5 text-gray-600 gap-32 items-center">
              <div>
                <h1 className=" text-xl font-mono">Description</h1>
              </div>
            </div>
            <div className=" border  rounded-lg w-[90%]">
              <QuilEditor
                theme="snow"
                value={state.value}
                onChange={handleChange}
                placeholder={"Enter Descriptiony or Task Details..."}
                modules={modules}
                formats={formats}
                className="no-scrollbar"
                style={{ height: "300px", padding: "10px"}}
                onClick={() => setToolbarVisible(!toolbarvisible)}
                 
              />
              <EditorToolbar />
            </div>

            <div className="flex mt-5 text-gray-900 gap-32 items-center">
              <button className="flex items-center bg-gray-100  hover:bg-gray-200 py-1 px-2 rounded-md">
                <h1 className=" text-xl font-mono">Comments</h1>
                <MdOutlineKeyboardArrowDown className="w-5 h-5" />
              </button>


              </div>
              
          </div>
        </div>
      </div>
    </>
  );
};

export default SideTaskModal;

const QuilEditor = styled(ReactQuill)`
  .ql-container {
    border: none;
    ::-webkit-scrollbar {
        width: 8px;
        color: red;
        background-color: #f5f5f5;
        border-radius: 10px;
    }

  }
  
`;
