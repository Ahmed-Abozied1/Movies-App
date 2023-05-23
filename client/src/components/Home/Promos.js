import React from "react";
import { FiUser } from "react-icons/fi";
const Promos = () => {
  return (
    <div className="my-20 py-10 md:px-20 px-8 bg-dry">
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        <div className="flex lg:gap-10 gap-6 flex-col">
          <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
            Download Your Movies Watch offline. <br /> Enjoy on Your Mobile
          </h1>
          <p className="text-text tex-sm xl:text-base leading-6 xl:leading-8">
            subscription-based streaming service that allows our members to
            watch TV shows and movies on an internet-connected device. Depending
            on your plan, you can also download TV shows and movies to your iOS,
            Android, or Windows 10 device and watch without an internet
            connection
          </p>
          <div className="flex gap-4  mb-4 md:text-lg text-sm">
            <div className="flex-colo bg-black text-submain px-6 py-3 rounded font-bold">
              HD 4k
            </div>
            <div className="flex-rows gap-4 bg-black text-submain px-6 py-3 rounded font-bold">
              <FiUser /> 2k
            </div>
          </div>
        </div>
        <div>
          <img
            src="/images/netflix-mobile.jpg"
            alt="Mobile app"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Promos;
