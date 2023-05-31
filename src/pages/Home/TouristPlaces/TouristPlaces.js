import React, { useEffect, useState } from "react";
import "./TouristPlaces.css";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";

const TouristPlaces = () => {
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
    <div class="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-5 md:gap-4 gap-3 lg:px-0 px-2">
      {touristPlace.slice(0, 6).map((place) => (
        <Link to="/" key={place.place_id} class="relative card">
          <img src={place.img} alt="" className="w-full h-60 imgStyle" />
          <div className="absolute content imgStyle">
            <h5 className="text-xl ml-5 font-semibold text-white text">
              {place.title}
            </h5>
            <p className="ml-5 text-white text">
              Habiabdxc cusxvcbds jucubdsui bds
            </p>
          </div>
          <Link to='/' className="absolute bottom-[200px] right-3">
            <ImLocation2 className="w-6 h-6 text-blue-900"/>
          </Link>
        </Link>
      ))}
    </div>
  );
};

export default TouristPlaces;
