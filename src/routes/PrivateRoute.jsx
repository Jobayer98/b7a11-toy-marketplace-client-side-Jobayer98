/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/authContext";
import Spinner from "react-bootstrap/esm/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <span className="flex justify-center items-center h-[80vh]">
        <Spinner animation="border" variant="primary" />
      </span>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default PrivateRoute;
