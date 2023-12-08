import React from "react";
import doneoutline from "src/components/PMS/utils/doneoutline.png";
import { useState } from "react";
import "./quill2.snow.css";
import EditorToolbar, { modules, formats } from "./../utils/Editor";
import ReactQuill from "react-quill";
import "./quil.css";
import styled from "styled-components";
import SideTaskModal from "../components/WMS/Tasks/SideTaskModal";

const ListUtil = (props) => {
  const { modal } = props;
  const [isSideModalVisible, setSideModalVisible] = useState(false);


  const OpenSideModal = () => {
    console.log("OpenSideModal");
    setSideModalVisible(!isSideModalVisible);
    // document.body.style.overflow = isSideModalVisible ? 'auto' : 'hidden';
  };

  // bg-[#f3f4f6]
  return (
    <>
      {isSideModalVisible && (
        <div className="absolute   top-[4.8rem] border-r border-2  transition-all  w-[50vw]  right-0 bg-white  h-[100%]">
          
            <SideTaskModal />
        </div>
      )}

      <div>
        <tr
          className="bg-[#f3f4f6]/70 border-t hover:bg-white/90 w-full p-3 flex justify-between  "
          onClick={OpenSideModal}
        >
          <div className="w-full ">
            <td className="  flex  items-center gap-2 ">
              <img
                src={doneoutline}
                alt=""
                className="w-5 opacity-80 h-5 mr-2"
              />
              <p className="text-gray-900 whitespace-nowrap">Task 1</p>
            </td>
          </div>
          <div className="w-full flex  justify-evenly gap-24">
            <td className="border-l">
              <p className="text-gray-900 whitespace-nowrap">Tag 1</p>
            </td>
            <td className="border-l">
              <p className="text-gray-900 whitespace-nowrap">In Progress</p>
            </td>
            <td className="border-l">
              <p className="text-gray-900 whitespace-nowrap">John Doe</p>
            </td>
            <td className="border-l">
              <p className="text-gray-900 whitespace-nowrap">High</p>
            </td>
            <td>
              <p className="text-gray-900 whitespace-nowrap">2023-12-07</p>
            </td>
          </div>
        </tr>
      </div>
    </>
  );
};

export default ListUtil;



