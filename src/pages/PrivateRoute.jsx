import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import apiRoutes from "../constant/apiRoutes";

function PrivateRoute() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to={apiRoutes.LOGIN} />;
}

export default PrivateRoute;
