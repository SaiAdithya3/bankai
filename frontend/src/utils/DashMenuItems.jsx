import React from "react";
import { useMainDashContext } from "../context/AppDataContext";

const DashMenuItems = ({ name }) => {
  const { activeMenuItem, setActiveMenuItem } = useMainDashContext();

  const handleClick = () => {
    setActiveMenuItem(name);
  };

  return (
    <div className="inline-block" onClick={handleClick}>
      <h1
        className={`${
          activeMenuItem === name ? "text-black" : "text-gray-500"
        }`}
      >
        {name}
      </h1>
      {activeMenuItem === name && (
        <div className="w-[100%] h-0.5 rounded bg-purple-400"></div>
      )}
    </div>
  );
};

export default DashMenuItems;
