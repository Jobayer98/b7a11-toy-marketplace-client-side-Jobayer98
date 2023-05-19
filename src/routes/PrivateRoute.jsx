/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/authContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <p>Loding...</p>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default PrivateRoute;
