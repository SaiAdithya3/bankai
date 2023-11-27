import React from "react";
import { useMainDashContext } from "../../context/AppDataContext";

const DashMenuLinks = (props) => {
  const { activeMenuLinks, setActiveMenuLink } = useMainDashContext();

  const handleClick = () => {
    setActiveMenuLink(activeMenuLink);
  };

  const { activeMenuLink } = props;
  return (
    <>
      <div className="flex  gap-5">
        <button
          onClick={handleClick}
          className={`${
            activeMenuLink === activeMenuLinks
              ? "bg-[#2d3b48] text-white px-6 py-1 rounded-md"
              : "bg-gray-200 text-black px-6 py-1 rounded-md"
          }`}
        >
          {activeMenuLink}
        </button>
      </div>
    </>
  );
};

export default DashMenuLinks;
