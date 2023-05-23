import React from 'react'
import SlideBar from './SlideBar'
import { Input } from '../../components/UsedInputs'

const Password = () => {
  return (

    <SlideBar>
    <div className=" flex flex-col gap-6">
      <h2 className="text-xl font-semibold">Change Password</h2>
      <Input
        lable="Previous Password"
        placeholder="*****"
        type="password"
        bg={true}
      />
      <Input
        lable="New Password"
        placeholder="*****"
        type="password"
        bg={true}
      />
         <Input
        lable="Confirm Password"
        placeholder="*****"
        type="password"
        bg={true}
      />
      <div className="flex justify-end items-center my-4">
       
        <button className="bg-main transtions hover:bg-submain border border-submain flex-rows gap-4 text-white p-3 px-6 rounded w-full  sm:w-auto  ">
          Change Password  
        </button>
      </div>
    </div>
  </SlideBar>   

)
}

export default Password
