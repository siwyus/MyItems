import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const MainNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">MyItems</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
      </Nav>
    </Navbar>
  );
};
export default MainNavbar;
