import React from "react";
import SlideBar from "../SlideBar";
import Table2 from "../../../components/Table2";
import { UserData } from "../../../Data/MovieData";

const Users = () => {
  return (
    <SlideBar>
      <div className="flex flex-col gap-6 ">
        <Table2 data={UserData} users={true} />
      </div>
    </SlideBar>
  );
};

export default Users;
