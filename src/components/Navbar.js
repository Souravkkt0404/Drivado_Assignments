import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar
      expand="md"
      bg="light"
      variant="light"
      sticky="top"
      className=" custom-navbar"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="assets/LOGO.png"
            alt="Company Logo"
            className="me-2 logo-size" // Adds margin-right to the image
            style={{ width: "80px", height: "80px" }} // You can keep some minimal styles for the logo size
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/aboutUs" className="text-primary">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/users" className="text-primary">
              Users
            </Nav.Link>
            <Nav.Link as={Link} to="/companies" className="text-primary">
              Companies
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
