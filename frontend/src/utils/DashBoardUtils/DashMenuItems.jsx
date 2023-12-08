import React from "react";
import { useMainDashContext } from "../../context/AppDataContext";


const DashMenuItems = ({ name, icon }) => {
  const { activeMenuItem, setActiveMenuItem } = useMainDashContext();

  const handleClick = () => {
    setActiveMenuItem(name);
  };

  return (
    <div className="inline-block cursor-pointer" onClick={handleClick}>
      <h1
        className={`${
          activeMenuItem === name ? "text-black font-bold" : "text-gray-400"
        } font- text-md flex items-center gap-2 cursor-pointer`}
      >
        {icon && React.createElement(icon)}
        {name}
      </h1>
      {activeMenuItem === name && (
        <div className="w-full h-1  rounded bg-black/80"></div>
      )}
    </div>
  );
};

export default DashMenuItems;
