import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
      sticky="top"
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/assets/LOGO.png"
            alt="Drivado"
            className="line-height-reduced"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/aboutUs" onClick={handleLinkClick}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/users" onClick={handleLinkClick}>
              User List
            </Nav.Link>
            <Nav.Link as={Link} to="/companies" onClick={handleLinkClick}>
              Company List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
