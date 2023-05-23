import React from "react";
import SlideBar from "./SlideBar";
import Uploader from "../../components/Uploader";
import { Input } from "../../components/UsedInputs";

const Profile = () => {
  return (
    <SlideBar>
      <div className=" flex flex-col gap-6">
        <h2 className="text-xl font-semibold">Profile</h2>
        <Uploader />
        <Input
          lable="FullName"
          placeholder="ahmed mohamed"
          type="text"
          bg={true}
        />
        <Input
          lable="Email"
          placeholder="ahmed123@gmail.com"
          type="email"
          bg={true}
        />
        <div className="flex gap-2 flex-wrap flex-col-reverse  sm:flex-row justify-between items-center my-4  ">
          <button className="bg-submain transtions hover:bg-main border border-submain flex-rows gap-4 text-white p-3 px-6 rounded w-full  sm:w-auto  ">
            Delete Account
          </button>
          <button className="bg-main transtions hover:bg-submain border border-submain flex-rows gap-4 text-white p-3 px-6 rounded w-full  sm:w-auto  ">
            Upload Profile 
          </button>
        </div>
      </div>
    </SlideBar>
  );
};

export default Profile;
