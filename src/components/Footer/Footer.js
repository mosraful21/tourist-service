import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4 mt-16">
      <div className="mx-auto p-32">
        <div className="flex flex-wrap justify-center items-center">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Tourist Service. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
