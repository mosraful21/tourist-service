import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:bg-gray-700 md:bg-gray-700">
      <div className="max-w-md w-full bg-gray-300 p-8 lg:my-10 md:my-10 shadow-md lg:rounded-xl md:rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="name"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
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
          <div className="mb-4">
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

          {/* ********************************* */}
          <div className="mb-4 flex gap-2 justify-between">
            <div className="w-1/2">
              <label htmlFor="phone" className="mb-2 text-sm font-medium">
                Phone Number
              </label>
              <input
                type="phone"
                id="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                placeholder="Enter phone"
                required
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="gender"
                className="mb-2 text-sm font-medium"
              >
                Gender
              </label>
                <select
                  id="gender"
                  name="gender"
                  className="w-full px-3 py-[9px] border border-gray-300 rounded focus:outline-none"
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
            </div>
          </div>
          {/* ********************************** */}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
          <p className="text-center font-semibold mt-3">
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
