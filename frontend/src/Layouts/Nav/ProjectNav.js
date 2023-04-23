import { Nav, Container, Navbar } from "react-bootstrap";
// import './NavStyle.module.css'
import { useTranslation } from "react-i18next";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
function ProjectNav() {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <Container className="container-fluid">
        <Navbar.Brand className="text-muted">
          {/* Welcome to */}
          {t("Welcome")}
          <span className="text-warning">
            {/* My Fire */}
            {t("My")}

            {t("Fire")}
          </span>
          {t("Store")}

          {/* Electronics Store */}
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="me-auto"></Nav>
          <Nav className="auth flex-row justify-content-center">
            <Link className="text-dark" to="/useraccount">
              {" "}
              <BiUser /> {t("My Account")} |{" "}
            </Link>
            <Link className="text-dark" to="/login">
              {t("Login")} |{" "}
            </Link>
            <Link className="text-dark" to="/register">
              {t("Register")} |{" "}
            </Link>
            <Link className="text-dark" to="/product">
              {t("Products")}
            </Link>
          </Nav>
        </Navbar.Collapse>
        {i18n.language == "ar" && (
          <button
            className="btn btn-warning"
            onClick={() => {
              i18n.changeLanguage("en");
            }}
          >
            EN
          </button>
        )}
        {i18n.language == "en" && (
          <button
            className="btn btn-warning"
            onClick={() => {
              i18n.changeLanguage("ar");
            }}
          >
            AR
          </button>
        )}
      </Container>
    </Navbar>
  );
}

export default ProjectNav;
