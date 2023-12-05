// MainDashContext.js
import React, { createContext, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MainDashContext = createContext();

export const MainDashProvider = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const pathSegments = currentPath.split("/");
  const baseRoute = pathSegments[1] || ""; 
  const [activeMenuItem, setActiveMenuItem] = useState("Overview");
  const [activeMenuLinks, setActiveMenuLink] = useState("Ongoing");
  const [SidebarLinks, setSidebarLinks] = useState(baseRoute);

  return (
    <MainDashContext.Provider
      value={{
        activeMenuItem,
        setActiveMenuItem,
        activeMenuLinks,
        setActiveMenuLink,
        SidebarLinks,
        setSidebarLinks,
      }}
    >
      {children}
    </MainDashContext.Provider>
  );
};

export const useMainDashContext = () => {
  const context = useContext(MainDashContext);
  if (!context) {
    throw new Error(
      "useMainDashContext must be used within a MainDashProvider"
    );
  }
  return context;
};
