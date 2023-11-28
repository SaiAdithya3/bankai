import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMainDashContext } from '../../context/AppDataContext';

const SidebarItem = ({ href, icon, text, isActive }) => {
  const { SidebarLinks,setSidebarLinks } = useMainDashContext();
  const location = useLocation();

  const handleClick = () => {
    // console.log(SidebarLinks , "tt");
    setSidebarLinks(href);
  };
  return (
    <Link to={href} onClick={handleClick}>
      <li className={`font-light flex items-center px-4 rounded-lg py-1  hover:scale-105 cursor-pointer transition-all ${isActive ? 'bg-black text-white my-2 text-md hover:bg-black' : 'my-1 text-sm hover:bg-gray-200'}`}>
        {icon && React.createElement(icon, { className: `text-gray-500 mr-3 text-2xl border rounded-md p-0.5 border-gray-300 ${isActive ? 'text-white  border-none' : 'text-gray-500'}` })}
        {text}
      </li>
    </Link>
  );
};

export default SidebarItem;
