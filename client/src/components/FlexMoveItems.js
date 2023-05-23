import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import {BiTime} from "react-icons/bi"
const FlexMoveItems = ({ movie }) => {
  return (
    <>
      <div className="flex items-center gap-2 ">
        <span className="text-sm font-medium text-white">{movie.category}</span>
      </div>
      <div className="flex items-center gap-2 ">
        <FaRegCalendarAlt className="text-submain w-3 h-3" />
        <span className="text-sm font-medium text-white">{movie.year}</span>
      </div>
      <div className='flex items-center gap-2 '>
<BiTime className="text-submain w-3 h-3"/>
    <span className='text-sm font-medium text-white'>{movie.time}</span>
</div>
    </>
  );
};

export default FlexMoveItems;
