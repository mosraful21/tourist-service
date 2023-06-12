import React from "react";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import banner from "../../assets/placeBanner.jpg";
import PlaceTimeSedule from "../../components/PlaceTimeSedule/PlaceTimeSedule";
import placeData from "../../FakeData/PlaceData";

const AllTouristPlaces = () => {
  const touristPlace = placeData;

  return (
    <div className="bg-slate-100">
      <div className="fade-in">
        <img src={banner} alt="" className="w-full" />
      </div>

      <div className="lg:py-12">
        <p className="lg:text-4xl text-3xl text-gray-950 text-center lg:mb-10 mb-3"><span className='border-b-2 border-gray-500 rounded-lg'>
      Popular <span className="font-bold">Tourist Spots</span> </span>
      </p>

        <div className="grid lg:grid-cols-4 grid-cols-3 gap-5 lg:w-11/12 mx-auto p-3">
          <div className="hidden lg:block sticky top-20 self-start bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900">
            <PlaceTimeSedule />
          </div>

          <div className="col-span-3">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
              {touristPlace.map((place) => (
                <Link
                  to={`/place/${place.id}`}
                  key={place.id}
                  className="relative card"
                >
                  <img
                    src={place.img}
                    alt=""
                    className="w-full h-60 imgStyle"
                  />
                  <div className="absolute content imgStyle">
                    <h5 className="text-xl ml-5 font-semibold text-white text">
                      {place.title}
                    </h5>
                    <p className="ml-5 text-white text">{place.location}</p>
                  </div>
                  <div className="absolute bottom-[200px] right-3">
                    <ImLocation2 className="w-6 h-6 text-blue-900" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900">
          <div className="lg:hidden w-4/5 mx-auto ">
            <PlaceTimeSedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTouristPlaces;
