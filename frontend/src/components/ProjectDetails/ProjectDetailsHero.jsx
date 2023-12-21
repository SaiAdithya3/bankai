import React, { useState } from "react";
import DashMenuItems from "../../utils/DashBoardUtils/DashMenuItems";
import Sticky from 'react-stickynode';
import { PiExport } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { IoList } from "react-icons/io5";
import { FaBoxes } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import { Link } from "react-router-dom";
import BookingForm from "./BookingForm";

const ProjectDetailsHero = (props) => {
  const { params } = props;
  const [isBookingFormVisible, setBookingFormVisible] = useState(false);

  const handleToggleBookingForm = () => {
    setBookingFormVisible(!isBookingFormVisible);
  };

  return (
    <>
      <Sticky enabled={true} top={0}   >
        <div className="   ">
          <div className=" px-8 py-4   bg-white flex items-center justify-between">
            <div className="flex items-center justify-center gap-2">
              <h1 className=" text-2xl p-3 tracking-wide text-black font-semibold">
                {" "}
                <Link to="/projects"> Projects / </Link>
                <span className="text-2xl font-semibold text-gray-500">
                  {params}
                </span>{" "}
              </h1>
            </div>
            <div className='flex items-center gap-4 justify-end'>
              {/* <button className={`text-sm px-6 flex items-center justify-center hover:scale-105 hover:bg-gray-800 transition-all hover:text-white gap-2 bg-white border text-black py-2 rounded-lg shadow-xl`}><PiExport className="text-lg"/> Export to CSV</button> */}
              <button
                onClick={handleToggleBookingForm}
                className={`text-sm px-6 flex items-center justify-center hover:scale-105 bg-black transition-all text-white gap-2 border py-2 rounded-lg shadow-xl`}
              >
                <FiPlus className="text-lg" />New Booking Request
              </button>
            </div>
          </div>

          {/* <Sticky enabled={true} top={0}   > */}
          <div className="flex  gap-10 bg-white px-8 pt-3">
            <DashMenuItems name={"Overview"} icon={GrOverview} />
            <DashMenuItems name={"ListView"} icon={IoList} />
            <DashMenuItems name={"Board"} icon={FaBoxes} />
            <DashMenuItems name={"Documents"} icon={PiExport} />
          </div>
          <hr className="border-gray-200" />
          {/* </Sticky> */}
        </div>
      </Sticky>
      {isBookingFormVisible && <BookingForm />}
    </>
  );
};

export default ProjectDetailsHero;
