import React from "react";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="fade-in relative">
      <img src={banner} alt="" className="w-full" />
      <div className="absolute banner flex flex-col items-center justify-center text-center w-full lg:h-full h-full bottom-0">
        <h1 className="lg:text-6xl md:text-3xl text-lg font-bold font text-white mb-2">
        JOURNEY  TO <br /> EXPLORE <span className="text-green-500">BANGLADESH</span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
