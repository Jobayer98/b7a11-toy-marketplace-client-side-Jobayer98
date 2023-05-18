import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const NavItem = ({ children, path }) => {
  return (
    <Nav.Link>
      <NavLink to={path} className="text-decoration-none">
        {children}
      </NavLink>
    </Nav.Link>
  );
};

export default NavItem;
