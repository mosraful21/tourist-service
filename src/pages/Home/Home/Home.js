import React from "react";
import Banner from "../Banner/Banner";
import TouristPlaces from "../TouristPlaces/TouristPlaces";
import SeduleSection from "../SeduleSection/SeduleSection";
import CustomerSection from "../CustomerSection/CustomerSection";
import { Link } from "react-router-dom";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Counter from "../../../components/Counter/Counter";
import TourAdvice from "../TourAdvice/TourAdvice";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="hidden lg:block">
        <SeduleSection />
      </div>

      <TourAdvice />

      <div className="max-w-7xl mx-auto lg:my-8 my-2">
        <div className="flex justify-between items-center lg:px-0 px-2 mb-2">
          <p className="lg:text-4xl text-3xl font-semibold text-gray-950">
            Tourist Spots:
          </p>
          <button>
            {" "}
            <Link
              to="/places"
              className="text-xl text-white font-bold seeAllBtn"
            >
              See All
            </Link>
          </button>
        </div>
        <TouristPlaces />
      </div>

      <div className="lg:hidden">
        <SeduleSection />
      </div>

      <div className="bg-slate-200">
        <CustomerSection />
      </div>

      <div className="max-w-7xl mx-auto my-8">
        <p className="lg:text-4xl text-3xl text-gray-950 text-center lg:mb-10 mb-5">
          <span className="border-b-2 border-gray-500 rounded-lg">
            Travel of <span className="font-bold">this Month</span>
          </span>
        </p>
        <Testimonial />
      </div>

      <PhotoGallery />

      <Counter />
    </div>
  );
};

export default Home;
