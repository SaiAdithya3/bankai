import React from "react";
import Header from "../../components/WMS/Dashboard/Tasks/Header";
import { BiSolidGridAlt } from "react-icons/bi";
import { FaListUl } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import ToggleButton from "src/components/PMS/utils/ToggleButton";
import SearchHOC from "src/utils/utilcomp/SearchHOC";
import List from "../../components/WMS/Dashboard/Tasks/List";
import Sticky from "react-stickynode";

const Wms = () => {
  return (
    <>
      <Sticky enabled={true} top={0}>
        <SearchHOC />
      </Sticky>
      <div className="p-10">
        <div>
          <Header />
        </div>
        <div className="mt-8">
          <List />
        </div>
      </div>
    </>
  );
};

export default Wms;
