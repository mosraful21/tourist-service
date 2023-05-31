import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} My Website. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
