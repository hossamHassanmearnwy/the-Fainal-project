import { Nav, Container, Navbar } from "react-bootstrap";
// import Styles from './NavStyle.module.css'

function ProjectNav() {
  return (
    <Navbar collapseOnSelect  expand="lg" bg="light" variant="dark">
      <Container className="container-fluid">
        <Navbar.Brand className="text-muted"> 
          Welcome to
          <span className="text-warning"> My Fire </span> 
          Electronics Store
        </Navbar.Brand>
        <Navbar.Toggle className="bg-warning"  aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className="text-dark" href="#deets">Login | </Nav.Link>
            <Nav.Link className="text-dark" href="#memes">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ProjectNav;
