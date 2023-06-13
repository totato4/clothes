import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../RTK/store";

const RequireAuth = () => {
  const { email } = useAppSelector((state) => state.authSlice);
  const location = useLocation();

  return email ? (
    <Outlet />
  ) : (
    <Navigate state={{ from: location }} replace to="/Login" />
  );
};

export default RequireAuth;
