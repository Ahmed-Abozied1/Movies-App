import React from "react";
import SlideBar from "./SlideBar";
import { Input, Message, Select } from "../../components/UsedInputs";
import Uploader from "../../components/Uploader";
import { CategoriesData } from "../../Data/CategoriesData";
import { UserData } from "../../Data/MovieData";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImUpload } from "react-icons/im";
import CastsModal from "../../components/Modals/CastsModal";
import { useState } from "react";
import { useEffect } from "react";

const AddMovies = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cast, setCast] = useState(null);
  useEffect(() => {
    if (modalOpen === false) {
      setCast();
    }
  }, [modalOpen]);

  return (
    <SlideBar>
      <CastsModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        cast={cast}
      />
      <div className=" flex flex-col gap-6">
        <h2 className="text-xl font-semibold">Create Movie</h2>
        {/* <Uploader /> */}
        <div className="w-full grid md:grid-cols-2 gap-6 ">
          <Input
            lable="Movie Title"
            placeholder="Fast $ Faruse"
            type="text"
            bg={true}
          />
          <Input lable="Hours " placeholder="2hr" type="text" bg={true} />
        </div>

        <div className="w-full grid md:grid-cols-2 gap-6 ">
          <Input
            lable="Language "
            placeholder="English"
            type="text"
            bg={true}
          />
          <Input lable="Year " placeholder="2023" type="number" bg={true} />
        </div>

        {/* images */}
        <div className="w-full grid md:grid-cols-2 gap-6 ">
          {/* img without title */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image Without Title
            </p>
            <Uploader />
            <div className="w-32 h-32 bg-main rounded border border-border ">
              <img
                className="w-full h-full object-contain rounded"
                src="/images/Movies/hunger.jpg"
                alt=""
              />
            </div>
          </div>
          {/* image with title */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image With Title
            </p>
            <Uploader />
            <div className="w-32 h-32 bg-main rounded border border-border ">
              <img
                className="w-full h-full object-contain rounded"
                src="/images/Movies/A Good Person 2023.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Description */}
        <Message lable="Movie Description" placeholder="Make it short" />
        {/* category */}
        <div className="text-sm w-full">
          <Select lable="Movie Catgory" options={CategoriesData} />
        </div>
        {/* Video */}
        <div className="flex flex-col gap-2 w-full ">
          <label className="text-border font-semibold  text-sm">
            Movie Video
          </label>
          <Uploader />
        </div>
        {/* casts */}
        <div className="w-full grid lg:grid-cols-2 gap-6 items-start">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full py-4 bg-main border border-submain border-dashed text-white rounded"
          >
            Add Cast
          </button>

          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4 ">
            {UserData.map((user, i) => (
              <div
                key={i}
                className="p-2 italic text-xs text-text rounded flex-colo  bg-main border border-border"
              >
                <img
                  src={`/images/UserImage/${
                    user.image ? user.image : "/images/Movies/logo.png"
                  }`}
                  alt={user.name}
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <div className="flex-rows my-2 w-full gap-2 ">
                  <button className="w-6 h-6 bg-dry border flex-colo border-border text-submain rounded">
                    <MdDelete />
                  </button>
                  <button
                    onClick={() => 
                   { setCast(user)
                    setModalOpen(true)}}
                    className="w-6 h-6 bg-dry border flex-colo border-border text-green-600 rounded"
                  >
                    <FaEdit />
                  </button>
                </div>

                <p>{user.name}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Submit */}
        <button className="  border bg-submain border-submain flex-rows gap-6 text-white p-4 rounded  w-full flex-rows ">
          <ImUpload /> Publish Movie
        </button>
      </div>
    </SlideBar>
  );
};

export default AddMovies;
