import React from "react";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";
import placeData from "../../../FakeData/PlaceData";

const TouristPlaces = () => {
  const touristPlace = placeData;

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-5 md:gap-4 gap-3 lg:px-0 px-2">
      {touristPlace.slice(0, 6).map((place) => (
        <Link
          to={`/place/${place.id}`}
          className="relative card"
          key={place.id}
          place={place}
        >
          <img src={place.img} alt="" className="w-full h-60 imgStyle" />
          <div className="absolute content imgStyle">
            <h5 className="text-xl ml-5 font-semibold text-white text">
              {place.title}
            </h5>
            <p className="ml-5 text-white text">
              {place.location}
            </p>
          </div>
          <div className="absolute bottom-[200px] right-3">
            <ImLocation2 className="w-6 h-6 text-blue-900" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TouristPlaces;
