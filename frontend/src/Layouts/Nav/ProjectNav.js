import { Nav, Container, Navbar } from "react-bootstrap";
// import './NavStyle.module.css'
import { useTranslation } from 'react-i18next';

function ProjectNav() {
  const {t, i18n} = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" >
      <Container className="container-fluid">
        <Navbar.Brand className="text-muted">
          {/* Welcome to */}
          {t('Welcome')}
          <span className="text-warning">
            {/* My Fire */}
            {t('My')}

            {t('Fire')}
          </span>
          {t('Store')}

          {/* Electronics Store */}
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="me-auto"></Nav>
          <Nav className='auth flex-row justify-content-center'>
            <Nav.Link className="text-dark" href="#deets">{t("Login")} | </Nav.Link>
            <Nav.Link className="text-dark" href="#memes">{t("Register")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {i18n.language == 'ar' &&<button className="btn btn-warning" onClick={() => { i18n.changeLanguage('en') }}>EN</button>}
        {i18n.language == 'en' &&<button className="btn btn-warning" onClick={() => { i18n.changeLanguage('ar') }}>AR</button>}
      </Container>
    </Navbar>
  );
}

export default ProjectNav;
