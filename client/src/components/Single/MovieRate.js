import React from "react";
import Titles from "../Titles";
import { BsBookmarkStar } from "react-icons/bs";
import { Message, Select } from "../UsedInputs";
import { useState } from "react";
import Rating from "../../components/Rating";
import { UserData } from "../../Data/MovieData";
const MovieRate = ({ movie }) => {
  const Ratings = [
    {
      title: "1 - Poor",
      value: 0,
    },
    {
      title: "2 - Fair",
      value: 1,
    },
    {
      title: "3 - Good",
      value: 2,
    },
    {
      title: "4 - Very Good",
      value: 3,
    },
    {
      title: "5 - Excellent",
      value: 4,
    },
    {
      title: "6 - Master",
      value: 5,
    },
  ];
  const [rating, setRating] = useState();
  return (
    <div className="my-12">
      <Titles title="Reviews" Icon={BsBookmarkStar} />
      <div className="mt-10 xl:grid flex-colo grid-cols-5 gap12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded">
        {/* review */}
        <div className="xl:col-span-2 w-full flex flex-col gap-8">
          <h3 className="text-2xl text-text font-medium ">
            Reviews "{movie?.name}"
          </h3>
          <p className="text-sm leading-7 font-medium text-border">
            write a review for this movie.
          </p>
          <div className="text-sm w-full">
            <Select
              lable="Select Rating"
              options={Ratings}
              onChange={(e) => setRating(e.target.value)}
            />
            <div className="flex mt-4 text-lg gap-2 text-star">
              {/* <Rating value={rating}/> */}
            </div>
          </div>
          {/* message */}
          <Message lable="message" placeholder="Make it short ..." />
          {/* submit */}
          <button className=" text-white py-3 w-full  bg-submain hover:bg-transparent border-2 border-submain flex-colo rounded ">
            Submit
          </button>
        </div>
        {/* Reviews */}
        <div className="col-span-3 flex flex-col gap-6 mx-6 md:mt-6">
          <h3 className="text-xl text-text font-semibold ">Reviews (34)</h3>
          <div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6  h-header overflow-y-scroll">
            {UserData.slice(0, 8).map((user, i) => (
              <div className="md:grid flex  flex-col  w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg">
                <div className="col-span-2 bg-main hidden md:block ">
                  <img
                    src={` /images/UserImage/${user.image}`}
                    alt={user?.name}
                    className="h-20 w-full object-cover"
                  />
                </div>
                <div className="col-span-7 flex flex-col gap-2 ">
                  <h2>{user?.name}</h2>
                  <p className="text-xs leading-6 font-medium text-text">
                    {user?.message}
                  </p>
                </div>

                {/* rates */}
                <div className="col-span-3 flex-rows border-l gap-1 border-border text-xs text-star ">
                  <Rating value={user?.rate} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieRate;
