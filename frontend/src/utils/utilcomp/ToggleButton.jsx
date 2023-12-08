import React from "react";
import { useMainDashContext } from "../../context/AppDataContext";


const ToggleButton = ({ name, icon }) => {
  const { CustomerDetailItem, setCustomerDetailItem } = useMainDashContext();

  const handleClick = () => {
    setCustomerDetailItem(name);
  };

  return (
    <div className="inline-block cursor-pointer" onClick={handleClick}>
      <h1
        className={`${
          CustomerDetailItem === name ? "text-white font-bold shadow bg-black " : "text-gray-400"
        } font- text-md px-3 py-1 rounded-lg flex items-center border gap-2 cursor-pointer`}
      >
        {icon && React.createElement(icon)}
        {name}
      </h1>
    </div>
  );
};

export default ToggleButton;
