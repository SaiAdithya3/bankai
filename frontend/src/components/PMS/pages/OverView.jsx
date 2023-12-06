import React from "react";
import { Link, useParams } from "react-router-dom";
import StatusBadge from "src/utils/utilcomp/StatusBadge";
import {
  MdOutlineLocationOn,
  MdCalendarMonth,
  MdBiotech,
} from "react-icons/md";
import { LuFiles, LuForklift } from "react-icons/lu";
import { TbBulldozer } from "react-icons/tb";
import sh from "../../../assets/project.png";
import { IoSnowOutline } from "react-icons/io5";
import PmsCard from "../utils/PmsCard";

const OverView = (props) => {
  const { projectId } = useParams();
  return (
    <>
      <div className="p-8 h-full w-full flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center gap-6">
          <div className="flex justify-center gap-6 w-full   ">
            <PmsCard
              link={"fms"}
              name="Finance Management System"
              color="bg-green-100"
              hoverColor="bg-green-300"
            />
            <PmsCard
              link={"wms"}
              name="Work Management System"
              color="bg-blue-100"
              hoverColor="bg-blue-300"
            />
            <PmsCard
              link={"ams"}
              name="Account Management System"
              color="bg-pink-100"
              hoverColor="bg-pink-300"
            />
          </div>
          <div className="flex justify-center gap-6 w-full ">
            <PmsCard
              link={"wms"}
              name="Work Management System"
              color="bg-slate-100"
              hoverColor="bg-slate-300"
            />
            <PmsCard
              link={"wms"}
              name="Work Management System"
              color="bg-teal-100"
              hoverColor="bg-teal-300"
            />
            <PmsCard
              link={"wms"}
              name="Work Management System"
              color="bg-orange-100"
              hoverColor="bg-orange-300"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OverView;
