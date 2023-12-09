import React from "react";
// import { useMainDashContext } from "../../context/AppDataContext";
import { useState } from "react";

const ToggleButton = ({ name, icon }) => {
  // const { activeMenuItem, setActiveMenuItem } = useMainDashContext();
  const [activeMenuItem1, setActiveMenuItem1] = useState("");
  const handleClick = () => {
    setActiveMenuItem1(name);
  };

  return (
    <div className="inline-block cursor-pointer" onClick={handleClick}>
      <h1
        className={`${
          activeMenuItem1 === name
            ? "text-white font-bold shadow bg-black"
            : "text-gray-400"
        } font text-md px-3 py-1 rounded-lg flex items-center border gap-2 cursor-pointer`}
      >
        {icon && React.createElement(icon)}
        {name}
      </h1>
    </div>
  );
};

export default ToggleButton;
