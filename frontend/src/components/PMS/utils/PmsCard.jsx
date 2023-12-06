import React from "react";
import { FaLock } from "react-icons/fa6";
import cardImg from "../utils/bars (1).png";
import cardImg2 from "../utils/bars.png";
import portfolio from "../utils/capital.png";
import { Link } from "react-router-dom";
import sh from "../../../assets/project.png";

const PmsCard = (props) => {
  const { link, name, color } = props;

  return (
    <>
      <Link to={`${link}`}>
        <div
          className={`flex  border px-8 py-8 items-end justify-between ${color} cursor-pointer hover:scale-105 transition-all hover:bg-blue-300 rounded-xl  `}
        >
          <h1 className="text-xl  w-48 font-semibold ">{name}</h1>
          {/* <LuForklift className='text-8xl w-full text-blue-100' /> */}
          <img src={sh} alt="sh" className="w-20" />
        </div>
      </Link>
    </>
  );
};

export default PmsCard;
