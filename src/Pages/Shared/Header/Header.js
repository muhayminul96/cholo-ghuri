import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firbase.init";
import Loding from "../Loding";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

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
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link href="/home#faq">FAQ</Nav.Link>
              <Nav.Link href="/home#services">Service</Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Me
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
            </Nav>
            <Nav>

            {
            user?

            <Nav.Link as={Link} to="/home">
              {user?.email}
            </Nav.Link>
            :
            ''
            }
              
              
              {user ? (
                <button
                  className="btn btn-link text-decoration-none"
                  onClick={() => signOut(auth)}
                >
                  Log out
                </button>
              ) : (
                <Nav.Link eventKey={2} as={Link} to="/signup">
                  Signup
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
