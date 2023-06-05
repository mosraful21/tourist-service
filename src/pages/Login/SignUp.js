import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:py-12 md:py-10 p-2">
      <div className="rounded-xl text-white bg-gray-900 hover:drop-shadow-[0_40px_40px_rgba(0,0,0,0.25)] max-w-md w-full p-8">
        <h2 className="text-3xl text-center font-bold mb-6">Sign Up</h2>
        <form>
          <div className="mb-2 lg:flex gap-2 justify-between">
            <div className="lg:w-1/2 input-group lg:mb-0 mb-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                placeholder="First Name"
                required
              />
            </div>
            <div className="lg:w-1/2 input-group">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="mb-2 input-group">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4 input-group">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <button className="btn-donate w-full">Sign Up</button>
          <p className="text-center signup font-semibold mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-700">
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
