import React from "react";
import Layout from "../layout/Layout";
import { Link, useParams } from "react-router-dom";
import { Movies } from "../Data/MovieData";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaCloudDownloadAlt, FaHeart, FaPlay } from "react-icons/fa";
const WatchPage = () => {
  let { id } = useParams();
  const movie = Movies.find((movie) => movie.name === id);
  const [play, setplay] = useState(false);
  return (
    <Layout>
      <div className="container mx-auto bg-dry p-6 mb-12">
        <div className="flex-btn flex-wrap mb-6 p-6 gap-2 bg-main rounded border border-gray-800">
          <Link
            to={`/movie/${movie?.name}`}
            className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray "
          >
            <BiArrowBack />
            {movie?.name}
          </Link>
          <div className="flex-btn sm:w-auto w-full gap-5">
            <button className="bg-white hover:text-submain transtions bg-opacity-30 rounded px-4 py-3 text-sm">
              <FaHeart />
            </button>
            <button className="bg-submain flex-rows gap-2  hover:text-main transtions  rounded px-8 py-3 font-semibold text-sm">
              <FaCloudDownloadAlt /> Download
            </button>
          </div>
        </div>
        {/* watch vedio */}
        {play ? (
          <video controls autoPlay={play} className="w-full h-full rounded">
            <source
              src="/images/movie.mp4"
              type="video/mp4"
              title={movie?.name}
            />
          </video>
        ) : (
          <div className="w-full h-full rounded-lg overflow-hidden relative">
            <div className="absolute top-0 left-0 bottom-0 right-0  bg-main bg-opacity-30 flex-colo  ">
              <button
                onClick={() => setplay(true)}
                className="bg-white text-submain flex-colo  border border-submain  rounded-full w-20 h-20 font-medium text-xl "
              >
                <FaPlay />
              </button>
            </div>
            <img src={`/images/Movies/${movie?.image}`}
alt={movie?.name}
className="w-full h-full object-cover rounded-lg"

            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default WatchPage;
