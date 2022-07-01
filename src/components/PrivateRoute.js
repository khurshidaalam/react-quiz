import React from "react";
import { useAuth } from "./contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return currentUser ? (
    <Outlet {...rest}> {(props) => <Component {...props} />}</Outlet>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
