import React from "react";
import Banner from "../Banner/Banner";
import TouristPlaces from "../TouristPlaces/TouristPlaces";
import SeduleSection from "../SeduleSection/SeduleSection";
import CustomerSection from "../CustomerSection/CustomerSection";
import { Link } from "react-router-dom";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Counter from "../../../components/Counter/Counter";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="hidden lg:block">
        <SeduleSection />
      </div>
      <div className="max-w-7xl mx-auto lg:my-8 my-2">
        <div className="flex justify-between items-center lg:px-0 px-2 mb-2">
          <p className="lg:text-4xl text-3xl font-semibold text-orange-600">
            Tourist Places:
          </p>
          <Link to="/places" className="text-xl text-blue-600 font-bold">
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

      <PhotoGallery />

      <Counter />
    </div>
  );
};

export default Home;
