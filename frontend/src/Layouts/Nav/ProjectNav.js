import { Nav, Container, Navbar } from "react-bootstrap";
// import './NavStyle.module.css'

function ProjectNav() {
  return (
    <Navbar collapseOnSelect  expand="lg" bg="light" variant="dark">
      <Container className="container-fluid">
        <Navbar.Brand className="text-muted"> 
          Welcome to
          <span className="text-warning"> My Fire </span> 
          Electronics Store
        </Navbar.Brand>

        <Navbar.Collapse>
          <Nav className="me-auto"></Nav>
          <Nav className='auth flex-row justify-content-center'>
            <Nav.Link className="text-dark" href="#deets">Login | </Nav.Link>
            <Nav.Link className="text-dark" href="#memes">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ProjectNav;
