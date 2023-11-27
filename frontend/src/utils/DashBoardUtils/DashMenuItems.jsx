import React from "react";
import { useMainDashContext } from "../../context/AppDataContext";

const DashMenuItems = ({ name }) => {
  const { activeMenuItem, setActiveMenuItem } = useMainDashContext();

  const handleClick = () => {
    setActiveMenuItem(name);
  };

  return (
    <div className="inline-block cursor-pointer" onClick={handleClick}>
      <h1
        className={`${
          activeMenuItem === name ? "text-black" : "text-gray-400"
        } font-bold text-md cursor-pointer`}
      >
        {name}
      </h1>
      {activeMenuItem === name && (
        <div className="w-[100%] h-1   rounded bg-black/60"></div>
      )}
    </div>
  );
};

export default DashMenuItems;
