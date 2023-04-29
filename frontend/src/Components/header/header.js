import React from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
// ---------------------------------------------------
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="/useraccount">User Account</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ----------------------------------------------------------------- */}
      {/* <Navbar bg="dark " expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      {/* <Navbar.Collapse id="basic-navbar-nav">



                    <Nav className="me-auto">
                        <Link to="" className="me-5">Home</Link>
                        <Link to="" className="me-5">Movies</Link>
                        <Link to="">Favorites</Link>


                    </Nav>
                </Navbar.Collapse> */}
      {/* </Container>
        </Navbar> */}
    </>
  );
}
