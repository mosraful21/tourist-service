import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsFillCalendar2WeekFill, BsFillGeoAltFill } from "react-icons/bs";

const SeduleSection = () => {
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
    <div className="bg-slate-100 lg:py-8 md:py-4 py-2">
        <div>
            <p className="text-2xl font-bold text-orange-600 text-center mb-3">Where are you going?</p>
        </div>
      <div class="lg:flex grid md:grid-cols-2 md:px-2 justify-center gap-4 ">
        <div className="flex items-center border border-gray-300 rounded-md py-2 px-4">
          <BsFillGeoAltFill className="w-6 h-6 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Type city, country or tour"
            className="focus:outline-none bg-transparent"
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded-md py-2 px-4">
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
        <div className="flex items-center border border-gray-300 rounded-md py-2 px-4">
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
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-[9px] px-20 rounded focus:outline-none focus:ring-1 focus:ring-blue-500">
            FIND A TOUR
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeduleSection;
