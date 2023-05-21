// external module
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

// internal module
import NavItem from "../../components/NavItem/NavItem";
// import Dropdown from "../../components/Dropdown/Dropdown";
import AuthContext from "../../context/authContext";
import logo from "../../assets/logo.png";

const Header = () => {
  const { user, loading, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none">
            <img className="w-32" src={logo} alt="brand_img" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center ">
            <NavItem className="text-white" path={"/all-toys"}>
              AllToys
            </NavItem>
            {user && (
              <>
                {" "}
                <NavItem className="text-white" path={"/my-toys"}>
                  MyToys
                </NavItem>
                <NavItem className="text-white" path={"/add-toy"}>
                  AddToy
                </NavItem>
              </>
            )}
            <NavItem className="text-white" path={"/blogs"}>
              Blogs
            </NavItem>
            <NavItem className="text-white" path={"/about"}>
              About
            </NavItem>

            {/* <Dropdown /> */}
            {<p>{!loading && user?.displayName}</p>}
            {user && <button onClick={handleLogout}>Logout</button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
