import React from "react";
import {BiHomeAlt} from 'react-icons/bi'
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20  py-10 px-6 ">
      <img
        src="/images/404-page.svg"
        alt="Not found"
        className="w-full h-96 object-contain"
      />
      <p className="font-medium text-border italic leading-6">
        The page you have requested is not available.
      </p>
      <Link to="/" >

        <button  className="bg-submain flex flex-rows gap-4  text-white font-medium py-3 px-6 rounded-md "><BiHomeAlt/> Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
