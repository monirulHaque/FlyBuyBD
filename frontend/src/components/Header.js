import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="navbar-dark" bg="primary" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">FlyBuyBD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user"></i> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
