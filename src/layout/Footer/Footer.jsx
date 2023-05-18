import NavItem from "../../components/NavItem/NavItem";
import { BsFacebook } from "react-icons/bs";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <footer className="mt-4">
      <MDBFooter
        bgColor="dark"
        className="text-center text-lg-start text-muted"
      >
        <section>
          <MDBContainer className="text-center text-md-start pt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  ToyLand
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <NavItem className="text-reset" path="/">
                  Home
                </NavItem>
                <NavItem className="text-reset" path="/all-toys">
                  AllToys
                </NavItem>
                <NavItem className="text-reset" path="/my-toys">
                  MyToys
                </NavItem>
                <NavItem className="text-reset" path="/add-toy">
                  AddToy
                </NavItem>
                <NavItem className="text-reset" path="/blogs">
                  Blogs
                </NavItem>
                <NavItem className="text-reset" path="/about">
                  About
                </NavItem>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <BsFacebook className="fs-2" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4 d-flex justify-content-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <p>ToyLand.com</p>
        </div>
      </MDBFooter>
    </footer>
  );
};

export default Footer;
