import React from "react";
import Sticky from 'react-stickynode';
import { IoList } from "react-icons/io5";
import { FaBoxes } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import { MdTimeline } from "react-icons/md";
import WmsDashMenuItem from "../../components/WMS/WmsDashMenuItem";
import { BiSolidGridAlt } from "react-icons/bi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { RiTeamLine } from "react-icons/ri";
import { FaListUl } from "react-icons/fa6";
import { MdInventory } from "react-icons/md";
import ToggleButton from "../../utils/ToggleButton";
import FmsDashMenuItem from "../../components/FMS/FmsDashMenuItem";

const FMSHero = (props) => {
  const { params } = props;

  return (
    <Sticky enabled={true} top={0}   >
      <div className="   ">
        <div className="flex bg-white px-10 py-6 justify-between items-center">
          <div className="  flex  flex-col gap-1 ">
            <h1 className="text-2xl  font-semibold">Hello Finance Management pssy! </h1>
            <h2 className="text-sm text-gray-600 font-semibold">
              Today is, Sunday, 23 January 2023
            </h2>
          </div>
          <div className="flex  items-center justify-center gap-5 ">
            <div className="gap-2 w-full flex items-center ">
              <ToggleButton name={"Grid"} icon={BiSolidGridAlt} />
              <ToggleButton name={"List"} icon={FaListUl} />
            </div>
            <button className="bg-black/90 hover:bg-gray-800 hover:scale-105 transition-all w-full text-white font-bold py-2 px-6 rounded-xl">
              Create Task
            </button>
          </div>
        </div>
        {/* <Sticky enabled={true} top={0}   > */}
        <div className="flex  gap-12 bg-white px-8 pt-3">
          <FmsDashMenuItem name={"Overview"} icon={GrOverview} />
          <FmsDashMenuItem name={"List"} icon={FaListUl} />
        </div>
        <hr className="border-gray-200" />
        {/* </Sticky> */}
      </div>
    </Sticky>
  );
};

export default FMSHero;
