import React from "react";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";

const PlaceCard = ({ place }) => {
  const { place_id, img, title } = place;

  return (
    <Link to={`/details/${place_id}`} className="relative card">
      <img src={img} alt="" className="w-full h-60 imgStyle" />
      <div className="absolute content imgStyle">
        <h5 className="text-xl ml-5 font-semibold text-white text">{title}</h5>
        <p className="ml-5 text-white text">
          Habiabdxc cusxvcbds jucubdsui bds
        </p>
      </div>
      <Link to="/" className="absolute bottom-[200px] right-3">
        <ImLocation2 className="w-6 h-6 text-blue-900" />
      </Link>
    </Link>
  );
};

export default PlaceCard;
