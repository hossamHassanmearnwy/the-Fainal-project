import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {  useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './forgotPasswordStyle.css'
import { useTranslation } from "react-i18next";

export default function ForgotPassword() {
    const {t, i18n} = useTranslation();
  document.body.dir = i18n.dir();

    const [user, setUser] = useState({
        userEmail: "",
    })
    const [error, setError] = useState({
        errEmail: "",
    })
    const handelinput = (e) => {
        var reqEmail = /^[a-zA-Z]{3,30}(@)(gmail|yahoo|outlook)(.com)$/
        switch (e.target.name) {
            case "userEmail":
                setUser({ ...user, userEmail: e.target.value })
                setError({
                    ...error, errEmail: (e.target.value === 0) ?
                        "Email is Required" : (!reqEmail.test(e.target.value)) ? "Enter Vaild Email" : ""
                })
                break;
            default:
                break;
        }
    }
    const navigate = useNavigate();
    const navigateToLogin =()=>{
        navigate("/login")
    }
    return <Fragment>
        <Container fluid>
            <Row>
                <Col><Form className="w-100" >
                    <h1 >{t('forgot pass')}</h1>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label style={{ fontWeight: "bold" }}>{t('Please enter your email address')}</Form.Label>
                        <div className="d-flex flex-column align-items-center m-3 ">
                            <Form.Control className="forget-input border-warning" name="userEmail" type="email"
                             placeholder={t('Email Address')} value={user.userEmail}
                                onChange={(event) => { handelinput(event) }} />
                            <p className="text-danger ">{error.errEmail}</p>
                            <Button variant="warning" type="submit" size="lg" className="forget-input text-white" >
                                {t('Recover Password')}
                            </Button>
                        </div>
                    </Form.Group>     
                </Form>
                </Col>
            </Row>

            <row>
                <p> {t('Remember your password ')}
                    <a  className="text-warning text-decoration-none "  onClick={()=> navigateToLogin()} > {t('Login')} </a>
                </p>
            </row>
        </Container>
    </Fragment>
}