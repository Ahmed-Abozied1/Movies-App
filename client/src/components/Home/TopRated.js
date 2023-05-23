import React from "react";
import Titles from "./../Titles";
import { BsBookmarkStarFill } from "react-icons/bs";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Movies } from "../../Data/MovieData";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "../Rating";
const TopRated = () => {
  return (
    <div className="my-16">
      <Titles title="Top Reated" Icon={BsBookmarkStarFill} />
      <div className="mt-10">
        <Swiper
          slidesPerView={4}
          autoplay={true}
          spees={1000}
          loop={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,  
              spaceBetween:10

            },
           
            768: {
              slidesPerView: 2,
              spaceBetween:20

            },
            1024: {
              slidesPerView: 3,
              spaceBetween:30

            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {Movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden ">
                <img
                  src={`/images/movies/${movie.image}`}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="px-4 hovers  gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">
                  <button className="w-10 h-10 flex-colo transitions hover:bg-submain rounded-full bg-white bg-opacity-30 text-white">
                    <FaHeart />
                  </button>
                  <Link
                    to={`/movie/${movie.name}`}
                    className="font-semibold text-xl  line-clamp-2"
                  >
                    {movie.name}
                  </Link>
                  <div className="flex gap-2 text-star">
                    <Rating value={movie.rate} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopRated;
