import React from "react";
import { NavLink } from "react-router-dom";
import { BsCollectionPlay } from "react-icons/bs";
import { FiHeart, FiUserCheck } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";


const MobileFooter = () => {
  // const active = "bg-white  text-main";
  // const inActive =
  //   "transitions text-2xl  flex-colo hover:bg-white hover:text-main text-dry rounded-md  px-4 py-3";

  // const Hover = ({ isActive }) =>
  //   isActive ? `${active} ${inActive} ` : inActive;

  return (
    <>
     
      <footer className="lg:hidden fixed z-50 bottom-0 w-full px-0">
        <div className="bg-dry  rounded-md flex-btn w-full p-4">
          <NavLink to="/movies" className={`text-3xl text-white`}>
            <BsCollectionPlay />
          </NavLink>
          <NavLink to="/favorites" className={`text-3xl text-white`}>
            <div className="relative">
              <div className="w-5 h-5 flex-colo rounded-full text-xs bg-submain text-white absolute -top-5  -right-1">
                3
              </div>
              <FiHeart />
            </div>
          </NavLink>
          <NavLink to="/login" className={`text-3xl text-white`}>
            <FiUserCheck />
          </NavLink>
          <NavLink to="/about-us"  className={`text-3xl text-white`}>
            <HiOutlineUserGroup />
          </NavLink>
          <NavLink to="/contact-us"  className={`text-3xl text-white`}>
            <BiPhoneCall />
          </NavLink>
        </div>
      </footer>
    </>
  );
};

export default MobileFooter;
