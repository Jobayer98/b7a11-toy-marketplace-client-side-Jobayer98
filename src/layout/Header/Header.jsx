// external module
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";

// internal module
import AuthContext from "../../context/authContext";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="navbar bg-dark text-white px-12 md:px-12 lg:px-24">
      <div className="navbar-start">
        <Link to="/">
          <img className="w-32" src={logo} alt="brand_logo" />
        </Link>
      </div>
      <div className="hidden lg:flex gap-4">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/all-toys"
        >
          All Toys
        </NavLink>
        {user && (
          <>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/my-toys"
            >
              My Toys
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/add-toy"
            >
              Add Toys
            </NavLink>
          </>
        )}
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/about"
        >
          About
        </NavLink>

        {!user && (
          <div>
            <Link
              to="/login"
              className="text-gray-200 hover:underline hover:text-orange-500"
            >
              Login
            </Link>
          </div>
        )}
      </div>

      {/* Dropdown */}
      {user && (
        <div
          className="dropdown dropdown-end tooltip-bottom"
          data-tip={user.displayName}
        >
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
            <div className="w-10 rounded-full">
              <img src={user.photoURL} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-100 text-gray-800 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
