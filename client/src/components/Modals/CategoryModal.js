import React from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInputs";

const CategoryModal = ({ modalOpen, setModalOpen, category }) => {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className='inline-block sm:w-4/5 md:w-3/5 lg"w-2/5  align-middle p-10 overflow-y-auto h-full   bg-main   border-border  rounded-2xl'>
        <h2 className="text-3xl text-white font-bold ">
          {category ? "Update" : "Create"}
        </h2>
        <form className="flex flex-col gap-6 text-left mt-6">
          <Input
            lable="Category Name"
            placeholder={category ? category.title : "Actions"}
            type="text"
            bg={false}
          />
          <button
            onClick={() => {
              setModalOpen(false);
            }}
            className="w-full flex-rows gap-3 rouonded  py-3 font-semibold transtions hover:bg-dry border-2 rounded-md  bg-submain text-white"
          >
            {category ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </MainModal>
  );
};

export default CategoryModal;
