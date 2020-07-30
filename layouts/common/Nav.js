import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
const AppNav = props => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">MyApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#memo">Memo Example</Nav.Link>
          <Nav.Link href="#home">User</Nav.Link>
          <NavDropdown title="Action" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Action 1</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNav;
