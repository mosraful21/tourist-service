import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="mb-16">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
