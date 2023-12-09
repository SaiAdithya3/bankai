import React from "react";
import Header from "../../components/WMS/Tasks/Header";
import { BiSolidGridAlt } from "react-icons/bi";
import { FaListUl } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import ToggleButton from "src/components/PMS/utils/ToggleButton";
import List from "../../components/WMS/Tasks/List";

const Wms = () => {
  return (
    <div className="p-10   ">
      <div>
        <Header />
      </div>
      <div className="mt-8">
        <List />
      </div>
    </div>
  );
};

export default Wms;
