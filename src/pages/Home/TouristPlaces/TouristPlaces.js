import React, { useEffect, useState } from "react";
import PlaceCard from "./PlaceCard";

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
    <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-5 md:gap-4 gap-3 lg:px-0 px-2">
      {touristPlace.slice(0, 6).map((place) => (
        <PlaceCard key={place.place_id} place={place}></PlaceCard>
      ))}
    </div>
  );
};

export default TouristPlaces;
