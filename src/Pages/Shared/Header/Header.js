import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container className="position-static">
          <Navbar.Brand as={Link} to="/">
            Cholo Ghuri
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home#faq">
                FAQ
              </Nav.Link>
              <Nav.Link href="/home#services">
                Service
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Me
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="#deets">
                More deets
              </Nav.Link>
              <Nav.Link eventKey={2} as={Link} to="/signup">
                Signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
