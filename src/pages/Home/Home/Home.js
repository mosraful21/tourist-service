import React from "react";
import Banner from "../Banner/Banner";
import TouristPlaces from "../TouristPlaces/TouristPlaces";
import SeduleSection from "../SeduleSection/SeduleSection";
import CustomerSection from "../CustomerSection/CustomerSection";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner />

      <div className="hidden lg:block">
        <SeduleSection />
      </div>

      <div className="max-w-7xl mx-auto my-4">
        <div className="flex justify-between items-center lg:px-0 px-2 mb-2">
          <p className="text-3xl font-semibold text-orange-600">
            Tourist Places:
          </p>
          <Link to="/" className="text-lg text-blue-600 font-bold">
            See All
          </Link>
        </div>
        <TouristPlaces />
      </div>

      <div className="lg:hidden">
        <SeduleSection />
      </div>

      <div className="bg-slate-200">
        <CustomerSection />
      </div>
    </div>
  );
};

export default Home;
