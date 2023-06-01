import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import banner from "../../assets/placeBanner.jpg";
import PlaceTimeSedule from "../../components/PlaceTimeSedule/PlaceTimeSedule";

const AllTouristPlaces = () => {
  const [touristPlace, setTouristPlace] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("places.json");
        const data = await res.json();
        setTouristPlace(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-slate-100">
      <div className="fade-in">
        <img src={banner} alt="" />
      </div>

      <div className="lg:py-12 py-3">
        <p className="lg:text-4xl text-3xl text-center font-semibold text-orange-600 lg:mb-12 md:mb-6 mb-2 lg:px-0">
          Our Tourist Services
        </p>

        <div className="grid lg:grid-cols-4 grid-cols-3 gap-5 w-11/12 mx-auto">
          <div className="bg-blue-100 hidden lg:block">
            <PlaceTimeSedule />
          </div>

          <div className="col-span-3">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 gap-3">
              {touristPlace.map((place) => (
                <Link to={`/details/${place.place_id}`} key={place.place_id} className="relative card">
                  <img
                    src={place.img}
                    alt=""
                    className="w-full h-60 imgStyle"
                  />
                  <div className="absolute content imgStyle">
                    <h5 className="text-xl ml-5 font-semibold text-white text">
                      {place.title}
                    </h5>
                    <p className="ml-5 text-white text">
                      Habiabdxc cusxvcbds jucubdsui bds
                    </p>
                  </div>
                  <Link to="/" className="absolute bottom-[200px] right-3">
                    <ImLocation2 className="w-6 h-6 text-blue-900" />
                  </Link>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTouristPlaces;
