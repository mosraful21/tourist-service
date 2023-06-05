import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsFillCalendar2WeekFill, BsFillGeoAltFill } from "react-icons/bs";
import logo1 from "../../assets/facebook.png";
import logo2 from "../../assets/youtube.png";
import logo3 from "../../assets/twitter.png";
import logo4 from "../../assets/instagram.png";

const PlaceTimeSedule = () => {
  const [firstDate, setFirstDate] = useState(null);
  const [secondDate, setSecondDate] = useState(null);

  const handleFirstDateChange = (date) => {
    setFirstDate(date);
    setSecondDate(null);
  };

  const handleSecondDateChange = (date) => {
    setSecondDate(date);
  };

  const today = new Date();

  return (
    <div className="p-5">
      <div>
        <p className="text-2xl font-bold text-orange-600 text-center mb-5">
          Where are you going?
        </p>
      </div>
      <div className="md:px-2 justify-center text-center gap-4">
        <div className="flex items-center border-2 border-gray-300 rounded-md mb-2 py-2 px-4">
          <BsFillGeoAltFill className="w-6 h-6 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Select Tour Place"
            className="focus:outline-none bg-transparent"
          />
        </div>
        <div className="flex items-center border-2 border-gray-300 rounded-md mb-2 py-2 px-4">
          <BsFillCalendar2WeekFill className="w-6 h-6 text-gray-400 mr-2" />
          <DatePicker
            selected={firstDate}
            onChange={handleFirstDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="From"
            className="focus:outline-none bg-transparent"
            minDate={today}
          />
        </div>
        <div className="flex items-center border-2 border-gray-300 rounded-md mb-2 py-2 px-4">
          <BsFillCalendar2WeekFill className="w-6 h-6 text-gray-400 mr-2" />
          <DatePicker
            selected={secondDate}
            onChange={handleSecondDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="To"
            className="focus:outline-none bg-transparent"
            minDate={firstDate || today}
          />
        </div>
        <div className="mt-3">
          <button className="custom-btn btn-1 w-full text-white font-bold rounded py-[9px]">
            FIND A TOUR
          </button>
        </div>
      </div>

      <div className="lg:mt-10 mt-3 p-2">
        <h2 className="text-2xl font-bold text-orange-600 text-center lg:mb-4 mb-2">
          Follow Social Media
        </h2>
        <div className="flex gap-4 justify-center">
          <img src={logo1} alt="" className="w-12 h-12 animate-pulse cursor-pointer" />
          <img src={logo2} alt="" className="w-12 h-12 animate-pulse cursor-pointer" />
          <img src={logo3} alt="" className="w-12 h-12 animate-pulse cursor-pointer" />
          <img src={logo4} alt="" className="w-12 h-12 animate-pulse cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default PlaceTimeSedule;
