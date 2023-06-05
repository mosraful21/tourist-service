import React from "react";
import { useParams } from "react-router-dom";
import placeData from "../../FakeData/PlaceData";

const PlaceDetails = () => {
  const { id } = useParams();

  return (
    <div className="grid lg:grid-cols-3 gap-4 lg:p-12 p-2">
      <div className="">
        <img src={placeData[id].img} alt="" />
      </div>
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-semibold">{placeData[id].title}</h1>
        <h1 className="text-xl mb-5">{placeData[id].location}</h1>
        <p className="">{placeData[id].desc}</p>
      </div>
        <p className="lg:col-span-3"><span className="text-2xl font-semibold">How to go there</span> <br />{placeData[id].togo}</p>
    </div>
  );
};

export default PlaceDetails;

