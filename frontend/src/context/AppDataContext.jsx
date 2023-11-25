// MainDashContext.js
import React, { createContext, useContext, useState } from "react";

const MainDashContext = createContext();

export const MainDashProvider = ({ children }) => {
  const [activeMenuItem, setActiveMenuItem] = useState("Overview");

  return (
    <MainDashContext.Provider value={{ activeMenuItem, setActiveMenuItem }}>
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
