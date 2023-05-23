import React, { useEffect } from "react";
import { CategoriesData } from "../../../Data/CategoriesData";
import SlideBar from "../SlideBar";
import { HiPlusCircle } from "react-icons/hi";
import Table2 from "../../../components/Table2";
import { useState } from "react";
import CategoryModal from "../../../components/Modals/CategoryModal";

const Categories = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState();

  const EditFunction = (id) => {
    setCategory(id);
    setModalOpen(!modalOpen);
  };
  useEffect(() => {
    if (modalOpen === false) {
      setCategory();
    }
  }, [modalOpen]);

  return (
    <SlideBar>
      <CategoryModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        category={category}
      />
      <div className="flex flex-col gap-6 ">
        <div className="flex-btn gap-2 ">
          <h2 className="text-xl font-semibold">Categories</h2>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-submain flex-rows gap-4 font-medium transitions hover:bg-main  border   border-submain  text-white  py-2 px-4  rounded "
          >
            <HiPlusCircle /> Create
          </button>
        </div>
        <Table2 data={CategoriesData} users={false} 
EditFunction ={EditFunction}



        />
      </div>
    </SlideBar>
  );
};

export default Categories;
