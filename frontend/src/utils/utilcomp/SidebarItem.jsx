import React from 'react';
import { useLocation } from 'react-router-dom';

const SidebarItem = ({ href, icon, text, isActive }) => {
  const location = useLocation();

  return (
    <a href={href}>
      <li className={`font-light flex items-center px-4 rounded-lg py-1  hover:scale-105 cursor-pointer transition-all ${isActive ? 'bg-black text-white my-2 text-md hover:bg-black' : 'my-1 text-sm hover:bg-gray-200'}`}>
        {icon && React.createElement(icon, { className: `text-gray-500 mr-3 text-2xl border rounded-md p-0.5 border-gray-300 ${isActive ? 'text-white  border-none' : 'text-gray-500'}` })}
        {text}
      </li>
    </a>
  );
};

export default SidebarItem;
