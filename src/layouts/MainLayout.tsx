import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./../components/HeaderFooter/Header/HeaderComponent";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col w-full justify-between">
      <HeaderComponent />
      <div className="max-w-[1144px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
