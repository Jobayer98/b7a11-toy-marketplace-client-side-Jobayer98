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
    <header className="text-decoration-none">
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none">
              ToyLand
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavItem path={"/"}>Home</NavItem>
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
    </header>
  );
};

export default Header;
