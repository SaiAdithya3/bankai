import React from "react";
import { useMainDashContext } from "../../../../context/AppDataContext";


const WmsDashMenuItem = ({ name, icon }) => {
  const { wmsDashboardItem, setWmsDashboardItem } = useMainDashContext();

  const handleClick = () => {
    setWmsDashboardItem(name);
  };

  return (
    <div className="inline-block cursor-pointer" onClick={handleClick}>
      <h1
        className={`${
            wmsDashboardItem === name ? "text-black font-bold" : "text-gray-400"
        } font- text-md flex items-center gap-2 cursor-pointer`}
      >
        {icon && React.createElement(icon)}
        {name}
      </h1>
      {wmsDashboardItem === name && (
        <div className="w-full h-1  rounded bg-black/80"></div>
      )}
    </div>
  );
};

export default WmsDashMenuItem;
