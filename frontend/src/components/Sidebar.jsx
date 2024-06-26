import React from "react";
import userjson from "../utils/user.json";
import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { TbBrandGithubCopilot } from "react-icons/tb";
import { MdSpaceDashboard } from "react-icons/md";
import { IoFolderOpen } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { TbSettings } from "react-icons/tb";
import { BiHelpCircle } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { FaMoneyBillWave } from "react-icons/fa";
import { PiTarget } from "react-icons/pi";
import { MdOutlineContentPasteGo } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import SidebarLink from "../utils/utilcomp/SidebarLink";
import SidebarItem from "../utils/utilcomp/SidebarItem";
import Sticky from "react-stickynode";
import { useMainDashContext } from "../context/AppDataContext";
import { LuSettings } from "react-icons/lu";

const Sidebar = () => {
  const { SidebarLinks, setSidebarLinks } = useMainDashContext();

  const data = userjson["user"];
  const location = useLocation();

  const isPageActive = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    // <Sticky >
    <div className="w-[18%]  z-[3] fixed h-[100vh] bg-gray-100 flex flex-col items-center justify-between border-r border-gray-200">
      <div className="flex w-[90%]  items-center justify-between p-5  border-b-2 border-dashed ">
        <div className="flex items-center gap-2">
          <TbBrandGithubCopilot className="text-4xl p-2 bg-red-400 border border-red-600 rounded-full " />
          <h1 className="text-2xl font-bold text-center">Bankai</h1>
        </div>
        <LuSettings className="text-3xl border p-1 cursor-pointer hover:bg-black hover:text-white transition-all hover:scale-105 rounded-lg bg-gray-100" />
      </div>
      <div className="w-full h-[60%] p-4   ">
        <p className="text-xs font-bold text-gray-500 tracking-wider pl-3">
          DASHBOARD
        </p>
        <ul className="flex flex-col">
          <SidebarLink
            href="home"
            icon={MdSpaceDashboard}
            text="Overview"
            isActive={SidebarLinks === "home"}
          />
          <SidebarLink
            href="projects"
            icon={IoFolderOpen}
            text="Projects"
            isActive={SidebarLinks === "projects"}
          />
          <SidebarLink
            href="customers"
            icon={MdPeopleAlt}
            text="Customers"
            isActive={SidebarLinks === "customers"}
          />
          <SidebarLink
            href="activities"
            icon={SlGraph}
            text="Activities"
            isActive={SidebarLinks === "activities"}
          />
          <SidebarLink
            href="accounts"
            icon={FaMoneyBillWave}
            text="Accounts"
            isActive={SidebarLinks === "accounts"}
          />
        </ul>
      </div>
      <hr className="w-[80%] p-2" />
      <div className="w-full h-[60%] px-4">
        <p className="text-xs font-bold text-gray-500 tracking-wider pl-3">
          SECOND
        </p>
        <ul className="flex flex-col">
          <SidebarItem
            href="task-list"
            icon={PiTarget}
            text="Task List"
            isActive={SidebarLinks === "task-list"}
          />
          <SidebarItem
            href="approvals"
            icon={MdOutlineContentPasteGo}
            text="Approvals"
            isActive={SidebarLinks === "approvals"}
          />
          <SidebarItem
            href="reports"
            icon={HiOutlineDocumentReport}
            text="Reports"
            isActive={SidebarLinks === "reports"}
          />
        </ul>
      </div>
      <div className="w-full h-[60%] px-4">
        <p className="text-xs font-bold text-gray-500 tracking-wider pl-3">
          TEAMS
        </p>
        <ul className="flex flex-col">
          <SidebarItem
            href="legal"
            icon={PiTarget}
            text="Legal"
            isActive={SidebarLinks === "legal"}
          />
          <SidebarItem
            href="purchase"
            icon={MdOutlineContentPasteGo}
            text="Purchase"
            isActive={SidebarLinks === "purchase"}
          />
          <SidebarItem
            href="construction"
            icon={HiOutlineDocumentReport}
            text="Construction"
            isActive={SidebarLinks === "construction"}
          />
        </ul>
      </div>
      {/* <div className="flex w-[90%] gap-2">
        <Link to="/settings" className="w-full">
          <button
            className={`text-sm my-2 w-full flex items-center
           justify-center hover:scale-105 hover:bg-gray-800 transition-all hover:text-white
            gap-2 bg-white border text-black py-1 rounded-lg shadow-xl 
            ${isPageActive("/settings") ? "bg-gray-800 text-white" : ""}`}
          >
            <TbSettings /> Settings
          </button>
        </Link>

        <Link to="/help" className="w-full">
          <button
            className={`text-sm my-2 w-full flex items-center justify-center hover:scale-105 hover:bg-gray-800 transition-all hover:text-white gap-2 bg-white border text-black py-1 rounded-lg shadow-xl ${
              isPageActive("/help") ? "bg-gray-800 text-white" : ""
            }`}
          >
            <BiHelpCircle /> Help
          </button>
        </Link>
      </div> */}

      <div className="p-5 w-full border-t">
        <Link to="/profile">
          <div className="flex bg-white p-3  items-center rounded-xl shadow-2xl hover:scale-105 cursor-pointer transition-all">
            <div className="w-full">
              {/* <img className='rounded-full' src="https://images.unsplash.com/photo-1552962599-a09af85f2555?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
              <span className="px-4 py-1 bg-orange-400 rounded-full "></span>
            </div>
            <div className=" px-2 flex items-start justify-center  flex-col">
              <h1 className="text-[14px] font-semibold">{data.name}</h1>
              <p className="text-[10px]">{data.email}</p>
            </div>
            <FaChevronRight className="mx-2 w-full text-right " />
          </div>
        </Link>
      </div>
    </div>
    // {/* </Sticky> */}
  );
};

export default Sidebar;
