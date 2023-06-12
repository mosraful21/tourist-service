import React from "react";
import Banner from "../Banner/Banner";
import TouristPlaces from "../TouristPlaces/TouristPlaces";
import SeduleSection from "../SeduleSection/SeduleSection";
import CustomerSection from "../CustomerSection/CustomerSection";
import { Link } from "react-router-dom";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Counter from "../../../components/Counter/Counter";
import TeamMember from "../TeamMember/TeamMember";
import TourAdvice from "../TourAdvice/TourAdvice";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="hidden lg:block">
        <SeduleSection />
      </div>
      <TourAdvice/>
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

      <PhotoGallery />

      <Counter />

      <div className="lg:max-w-7xl w-4/5 mx-auto lg:my-8 my-2">
        <TeamMember />
      </div>
    </div>
  );
};

export default Home;
