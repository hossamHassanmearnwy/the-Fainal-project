import React, { useEffect } from "react";
// import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as Icon from "react-bootstrap-icons";
import { BsHouseDoor } from "react-icons/bs";
import "./InternalNav.css";
import { NavLink, Link } from "react-router-dom";
import { t, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';

import list from "../../data";
import updateSearchTerm, { fetchProductsSuccess } from "../../Store/actions/search";



const InternalNav = ({ size, setShow }) => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();



 const searchTerm = useSelector(state => state.search.searchTerm);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    dispatch(fetchProductsSuccess(list)); // Dispatch the array of products from your API file
  }

  function handleInputChange(event) {
    dispatch(updateSearchTerm(event.target.value));
  }


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/home" className="col-2 mr-3 d-flex justify-content-start">
          <span className="  text-warning">{t("My")}</span>
          {t("Fire")}
        </Link>
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
              value={searchTerm}
              onChange={handleInputChange}
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
              <Link to="/home">
                {/* <Icon.ArrowRepeat className="fs-3 text-warning m-2" /> */}
                <BsHouseDoor className="fs-3 text-warning m-2" />
              </Link>
              <Link to="/fav">
                <Icon.Heart className="fs-3 text-warning m-2" />
              </Link>
              <Link to="/cart" className="cart" onClick={() => setShow(false)}>
                <Icon.Cart className="fs-3 text-warning m-2" />
                <span>{size}</span>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default InternalNav;
