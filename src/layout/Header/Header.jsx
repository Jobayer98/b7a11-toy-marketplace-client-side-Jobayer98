// external module
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

// internal module
import NavItem from "../../components/NavItem/NavItem";
import Dropdown from "../../components/Dropdown/Dropdown";
const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none">
            ToyLand
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <NavItem path={"/all-toys"}>AllToys</NavItem>
            <NavItem path={"/my-toys"}>MyToys</NavItem>
            <NavItem path={"/add-toy"}>AddToy</NavItem>
            <NavItem path={"/blogs"}>Blogs</NavItem>
            <NavItem path={"/about"}>About</NavItem>

            <Dropdown />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
