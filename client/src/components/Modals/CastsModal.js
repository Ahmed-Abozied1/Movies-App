import React from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInputs";
import Uploader from "../Uploader";

const CastsModal = ({ modalOpen, setModalOpen, cast }) => {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className='inline-block sm:w-4/5 md:w-3/5 lg"w-2/5  align-middle p-10 overflow-y-auto h-full   bg-main   border-border  rounded-2xl'>
        <h2 className="text-3xl text-white font-bold ">
          {cast ? "Update Cast" : "Create Cast"}
        </h2>
        <form className="flex flex-col gap-6 text-left mt-6">
          <Input
            lable="Cast Name"
            placeholder={cast ? cast.name : "John Smith"}
            type="text"
            bg={false}
          />
            <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
             Cast Image 
            </p>
            <Uploader />
            <div className="w-32 h-32 bg-main rounded border border-border ">
              <img
                className="w-full h-full object-contain rounded"
                src={`/images/UserImage/${cast ? cast.image :"/UserImage/jonn.jpg"} `}
                alt=""
              />
            </div>
          </div>
          <button
            onClick={() => {
              setModalOpen(false);
            }}
            className="w-full flex-rows gap-3 rouonded  py-3 font-semibold transtions hover:bg-dry border-2 rounded-md  bg-submain text-white"
          >
            {cast ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </MainModal>
  );
};

export default CastsModal;
