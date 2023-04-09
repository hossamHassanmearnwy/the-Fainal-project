import { Nav, Container, Navbar } from "react-bootstrap";
// import './NavStyle.module.css'
import { useTranslation } from 'react-i18next';

function ProjectNav() {
  const [translate, i18n] = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" >
      <Container className="container-fluid">
        <Navbar.Brand className="text-muted">
          {/* Welcome to */}
          {translate('Welcome')}
          <span className="text-warning">
            {/* My Fire */}
            {translate('My')}

            {translate('Fire')}
          </span>
          {translate('Store')}

          {/* Electronics Store */}
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="me-auto"></Nav>
          <Nav className='auth flex-row justify-content-center'>
            <Nav.Link className="text-dark" href="#deets">{translate("Login")} | </Nav.Link>
            <Nav.Link className="text-dark" href="#memes">{translate("Register")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {i18n.language == 'ar' &&<button className="btn btn-warning" onClick={() => { i18n.changeLanguage('en') }}>EN</button>}
        {i18n.language == 'en' &&<button className="btn btn-warning" onClick={() => { i18n.changeLanguage('ar') }}>AR</button>}
      </Container>
    </Navbar>
  );
}

export default ProjectNav;
