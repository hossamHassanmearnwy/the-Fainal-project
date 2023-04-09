import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./loginStyle.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "../Register/register";
import ForgotPassword from "../ForgotPassword/forgotPassword";
import { useTranslation } from "react-i18next";

export default function Login() {
  const [translate, i18n] = useTranslation();
  document.body.dir = i18n.dir();
  const navigate = useNavigate();
  const navigateForgotPassword = () => {
    navigate("/forgotpassword");
  };
  const navigateRegister = () => {
    navigate("/register");
  };
  const [user, setUser] = useState({
    userEmail: "",
    userPass: "",
  });
  const [error, setError] = useState({
    errEmail: "",
    errPass: "",
  });
  const handelinput = (e) => {
    var reqEmail = /^[a-zA-Z]{3,30}(@)(gmail|yahoo|outlook)(.com)$/;
    switch (e.target.name) {
      case "userEmail":
        setUser({ ...user, userEmail: e.target.value });
        setError({
          ...error,
          errEmail:
            e.target.value === 0 ? `${translate('Email is Required')}`
              : !reqEmail.test(e.target.value)
              ? `${translate('Enter Vaild Email')}`
              : "",
        });
        break;
      case "userPass":
        setUser({ ...user, userPass: e.target.value });
        setError({
          ...error,
          errPass: e.target.value === 0 ? `${translate("Passwrod is Required")}`
          : e.target.value.length < 8 ? `${translate("Enter Vaild Password")}` : "",
        });
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Container className="my-auto">
        <Row>
          <Col>
            {" "}
            <Form className="d-flex justify-content-center flex-column align-items-center w-100">
              <h1>{translate('Registered Customers')}</h1>
              <p>{translate('If you have an account')}</p>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label className=" font-weight-bold">
                  {translate('Email Address')}
                </Form.Label>

                <Form.Control
                  className="login-input border-warning  "
                  name="userEmail"
                  type="email"
                  // className="me-0 warning w-90 search-form"
                  placeholder={translate('Email Address')}

                  value={user.userEmail}
                  onChange={(event) => {
                    handelinput(event);
                  }}
                />
                <p className="text-danger ">{error.errEmail}</p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className=" font-weight-bold">{translate('Password')}</Form.Label>
                <Form.Control
                  className="login-input border-warning"
                  name="userPass"
                  type="password"
                  placeholder={translate('Password')}
                  value={user.userPass}
                  onChange={(event) => {
                    handelinput(event);
                  }}
                />
                <p className="text-danger">{error.errPass}</p>
              </Form.Group>
              <Button variant="warning" type="submit" className="login-input text-white">
                {translate('Submit')}
              </Button>
              <p className="mt-3">
                {translate('Forget Password')}
                <a className="text-warning text-decoration-none " onClick={() => navigateForgotPassword()}> {translate('Reset Password')} </a>
              </p>
            </Form>
          </Col>
          <Col>
            <h1>{translate('New Customer')}</h1>
            <p>
              {translate('Creating an account')}
            </p>
            <Button
              variant="warning"
              type="button"
              className="login-input text-white font-weight-bold"
              onClick={() => navigateRegister()}
            >
              {translate('Create Account')}
            </Button>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}
