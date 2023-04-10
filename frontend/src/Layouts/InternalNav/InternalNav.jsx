import React from "react";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as Icon from "react-bootstrap-icons";
import { BsHouseDoor } from "react-icons/bs";
import "./InternalNav.css";
import { Trans, useTranslation } from "react-i18next";

const InternalNav = ({ size, setShow }) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand
          href="/home"
          className="col-2 mr-3 d-flex justify-content-start"
        >
          <span className="  text-warning">{t("My")}</span>
          {t("Fire")}
        </Navbar.Brand>
        <Navbar.Toggle
          className="bg-warning border-light text-light"
          aria-controls="navbarScroll"
        />
        <Navbar.Collapse
          id="navbarScroll"
          className="justify-content-center col-10"
        >
          <InputGroup className="col-lg-3 col-md-6 w-50" dir="ltr">
            <Form.Control
              type="text"
              className="py-2"
              style={{
                borderTopLeftRadius: "30px",
                borderBottomLeftRadius: "30px",
              }}
            />
            <Form.Control.Feedback>Search</Form.Control.Feedback>
            <InputGroup.Text
              className="bg-white border border-warning text-warning py-2"
              style={{
                borderTopRightRadius: "30px",
                borderBottomRightRadius: "30px",
              }}
            >
              {t("Search")}
            </InputGroup.Text>
          </InputGroup>

          {/* <Button className='search' variant="outline-warning">Search</Button>
      </Form> */}

          <Nav
            className="me-auto my-2  ml-lg-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className=" d-flex justify-content-around">
              <Nav.Link href="/home">
                {/* <Icon.ArrowRepeat className="fs-3 text-warning m-2" /> */}
                <BsHouseDoor className="fs-3 text-warning m-2" />
              </Nav.Link>
              <Nav.Link href="/useraccount/Fav">
                <Icon.Heart className="fs-3 text-warning m-2" />
              </Nav.Link>
              <Nav.Link
                href="/cart"
                className="cart"
                onClick={() => setShow(false)}
              >
                <Icon.Cart className="fs-3 text-warning m-2" />
                <span>{size}</span>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default InternalNav;
