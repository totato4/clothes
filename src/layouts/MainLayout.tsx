import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col w-full justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
