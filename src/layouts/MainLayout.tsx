import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-[1144px] mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
