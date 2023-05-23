import React from "react";
import SlideBar from "../SlideBar";
import { FaRegListAlt, FaUser } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import Table from "../../../components/Table";
import { Movies } from "../../../Data/MovieData";

const Dashboard = () => {
  const DashboardData = [
    {
      bg: "bg-orange-600",
      icon: FaRegListAlt,
      title: "Total Movies",
      total: 50,
    },
    {
      bg: "bg-blue-700",
      icon: HiViewGridAdd,
      title: "Total Categories",
      total: 5,
    },
    {
      bg: "bg-green-600",
      icon: FaUser,
      title: "Total Users",
      total: 140,
    },
  ];
  return (
    <SlideBar>
      <h2 className=" text-xl font-semibold">DashBoard</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {DashboardData.map((data, index) => (
          <div
            key={index}
            className="p-4 rounded bg-main border-border grid grid-cols-4 gap-2 "
          >
            <div
              className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}
            >
              <data.icon />
            </div>
            <div className="col-span-3">
              <h2>{data.title}</h2>
              <p className="text-text mt-2 font-semibold">{data.total}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-md font-semibold my-6 text-border ">Recent Movies</h3>

      <Table data={Movies.slice(0,5)} admin={true}/>
    </SlideBar>
  );
};

export default Dashboard;