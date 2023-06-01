import React from "react";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
import icon4 from "../../../assets/icon4.png";
import DigitalClock from "../../../components/DigitalClock/DigitalClock";

const CustomerSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-16">
      <div className="text-center mb-16 px-2">
        <DigitalClock/>
        <h2 className="text-2xl font-bold text-orange-500 mb-5">TRAVELERS SERVED</h2>
        <h1 className="text-4xl font-bold text-emerald-700 mb-3">1250 Guides in 64 Districts of Bangladesh</h1>
        <p className="text-lg">Discover the Bangladesh with our tourist service. Our private tours offer you a unique and <br /> personalized experience in any destination.</p>
      </div>

      <div className="lg:flex grid grid-cols-2 p-2 justify-between gap-4">
        <div className="flex flex-col items-center">
          <img src={icon1} alt="" className="w-24 h-24 rounded-full mb-4" />
          <p className="text-center text-orange-600 font-semibold">
            HAND PICKED GUIDES
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={icon2} alt="" className="w-24 h-24 rounded-full mb-4" />
          <p className="text-center text-orange-600 font-semibold">
            24/7 CUSTOMER SUPPORT
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={icon3} alt="" className="w-24 h-24 rounded-full mb-4" />
          <p className="text-center text-orange-600 font-semibold">
            TOUR PRIVATE <br /> AND CUSTOMIZABLE
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={icon4} alt="" className="w-24 h-24 rounded-full mb-4" />
          <p className="text-center text-orange-600 font-semibold">
            FLEXIBLE CANCELLATION
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerSection;
