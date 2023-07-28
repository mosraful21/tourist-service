import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/error.jpg";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <img className="w-2/3 mx-auto" src={error} alt="" />
      <Link
        to="/"
        className="custom-btn btn-1 text-white font-bold rounded px-5 py-2 mt-5"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
