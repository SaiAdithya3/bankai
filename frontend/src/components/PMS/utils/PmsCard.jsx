import React from "react";
import { Link } from "react-router-dom";
import sh from "../../../assets/project.png";

const PmsCard = (props) => {
  const { link, name, color, hoverColor } = props;

  return (
    <>
      <Link to={`${link}`}>
        <div
          className={`flex  border px-8 py-8 items-end justify-between ${color} cursor-pointer hover:scale-105 transition-all hover:${hoverColor} rounded-xl  `}
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
