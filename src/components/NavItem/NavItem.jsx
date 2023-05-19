import { NavLink } from "react-router-dom";
// import Nav from "react-bootstrap/Nav";

import "./NavItem.css";

const NavItem = ({ children, path, className }) => {
  return (
    // <Nav.Link>
    <NavLink
      to={path}
      id="navItem"
      className={`"text-decoration-none " + ${className || ""}`}
    >
      {children}
    </NavLink>
    // </Nav.Link>
  );
};

export default NavItem;
