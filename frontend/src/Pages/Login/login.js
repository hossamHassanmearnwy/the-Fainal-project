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
import useraxios from "./../../axiosConfig/axiosInstance";


export default function Login() {

  const {t, i18n} = useTranslation();
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
            e.target.value === 0 ? `${t('Email is Required')}`
              : !reqEmail.test(e.target.value)
              ? `${t('Enter Vaild Email')}`
              : "",
        });
        break;
      case "userPass":
        setUser({ ...user, userPass: e.target.value });
        setError({
          ...error,
          errPass: e.target.value === 0 ? `${t("Passwrod is Required")}`
          : e.target.value.length < 8 ? `${t("Enter Vaild Password")}` : "",
        });
        break;
      default:
        break;
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await useraxios.post("/users/login", {
  //     email: user.userEmail,
  //     password: user.userPass,
  //   });
  //   console.log(response.data); //token 
  //   localStorage.setItem("token", response.data);
  //   console.log("Login successful");
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await useraxios.post("/users/login", {
        email: user.userEmail,
        password: user.userPass,
      });
      console.log(response.data); // token
  
      // Store the token in local storage
      localStorage.setItem("token", response.data);
  
      console.log("Login successful");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Invalid Email Address Or Password")

    }
  };
  return (
    <>
      <Container className="my-auto">
        <Row>
          <Col>
            {" "}
            <Form className="d-flex justify-content-center flex-column align-items-center w-100" onSubmit={handleSubmit}>
              <h1>{t('Registered Customers')}</h1>
              <p>{t('If you have an account')}</p>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label className=" font-weight-bold">
                  {t('Email Address')}
                </Form.Label>

                <Form.Control
                  className="login-input border-warning  "
                  name="userEmail"
                  type="email"
                  // className="me-0 warning w-90 search-form"
                  placeholder={t('Email Address')}

                  value={user.userEmail}
                  onChange={(event) => {
                    handelinput(event);
                  }}
                />
                <p className="text-danger ">{error.errEmail}</p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className=" font-weight-bold">{t('Password')}</Form.Label>
                <Form.Control
                  className="login-input border-warning"
                  name="userPass"
                  type="password"
                  placeholder={t('Password')}
                  value={user.userPass}
                  onChange={(event) => {
                    handelinput(event);
                  }}
                />
                <p className="text-danger">{error.errPass}</p>
              </Form.Group>
              <Button variant="warning" type="submit" className="login-input text-white">
                {t('Login')}
              </Button>
              <p className="mt-3">
                {t('Forget Password')}
                <a className="text-warning text-decoration-none " onClick={() => navigateForgotPassword()}> {t('Reset Password')} </a>
              </p>
            </Form>
          </Col>
          <Col>
            <h1>{t('New Customer')}</h1>
            <p>
              {t('Creating an account')}
            </p>
            <Button
              variant="warning"
              type="button"
              className="login-input text-white font-weight-bold"
              onClick={() => navigateRegister()}
            >
              {t('Create Account')}
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
