import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const NavItem = ({ children, path, className }) => {
  return (
    <Nav.Link>
      <NavLink
        to={path}
        className={`"text-decoration-none mx-3" + ${className}`}
      >
        {children}
      </NavLink>
    </Nav.Link>
  );
};

export default NavItem;
