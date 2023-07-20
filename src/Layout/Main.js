import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="mb-16">
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default Main;
